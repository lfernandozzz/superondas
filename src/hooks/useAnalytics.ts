import { useEffect } from 'react'
import { useCookieConsent } from './useCookieConsent'

export function useAnalytics() {
  const { consent } = useCookieConsent()

  useEffect(() => {
    if (consent !== 'accepted') return
    const gaId = import.meta.env.VITE_GA4_ID as string | undefined
    if (!gaId || document.querySelector(`script[data-ga4="${gaId}"]`)) return
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    script.dataset.ga4 = gaId
    document.head.appendChild(script)
    const inline = document.createElement('script')
    inline.text = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}', { anonymize_ip: true });`
    document.head.appendChild(inline)
  }, [consent])
}
