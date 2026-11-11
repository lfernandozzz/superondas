import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

type ConsentValue = 'accepted' | 'rejected' | null

type ConsentContextValue = {
  consent: ConsentValue
  accept: () => void
  reject: () => void
}

const ConsentContext = createContext<ConsentContextValue | null>(null)
const storageKey = 'superondas-cookie-consent'

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentValue>(null)

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey)
    if (stored === 'accepted' || stored === 'rejected') setConsent(stored)
  }, [])

  const value = useMemo(() => ({
    consent,
    accept: () => {
      window.localStorage.setItem(storageKey, 'accepted')
      setConsent('accepted')
    },
    reject: () => {
      window.localStorage.setItem(storageKey, 'rejected')
      setConsent('rejected')
    },
  }), [consent])

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export function useCookieConsent() {
  const context = useContext(ConsentContext)
  if (!context) throw new Error('useCookieConsent deve ser usado dentro de CookieConsentProvider')
  return context
}
