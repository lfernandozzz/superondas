import { useCookieConsent } from '../hooks/useCookieConsent'
import { Link } from 'react-router-dom'

export function CookieConsent() {
  const { consent, accept, reject } = useCookieConsent()
  if (consent) return null
  return <aside className="cookie-banner" role="dialog" aria-label="Preferências de cookies"><div><strong>Você no controle.</strong><p>Usamos cookies essenciais para o site funcionar. Com sua permissão, também medimos visitas para melhorar a experiência. <Link to="/privacidade">Saiba mais</Link>.</p></div><div className="cookie-actions"><button className="button button--dark button--small" type="button" onClick={accept}>Aceitar medição</button><button className="button button--ghost button--small" type="button" onClick={reject}>Só essenciais</button></div></aside>
}
