import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CookieConsent } from './components/CookieConsent'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { WhatsAppButton } from './components/WhatsAppButton'
import { CookieConsentProvider } from './hooks/useCookieConsent'
import { useAnalytics } from './hooks/useAnalytics'
import { CompanyPage, ContactPage, CoveragePage, BlogPage, PlansPage, PrivacyPage, SupportPage, TermsPage } from './pages/ContentPages'
import { CityPage } from './pages/CityPage'
import { HomePage } from './pages/HomePage'

function AnalyticsBridge() { useAnalytics(); return null }

function SiteLayout({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /><WhatsAppButton /><CookieConsent /><AnalyticsBridge /></>
}

export function App() {
  return <CookieConsentProvider><BrowserRouter><SiteLayout><Routes><Route path="/" element={<HomePage />} /><Route path="/planos" element={<PlansPage />} /><Route path="/cobertura" element={<CoveragePage />} /><Route path="/suporte" element={<SupportPage />} /><Route path="/empresa" element={<CompanyPage />} /><Route path="/blog" element={<BlogPage />} /><Route path="/contato" element={<ContactPage />} /><Route path="/privacidade" element={<PrivacyPage />} /><Route path="/termos" element={<TermsPage />} /><Route path="/internet-em/:citySlug" element={<CityPage />} /><Route path="*" element={<NotFound />} /></Routes></SiteLayout></BrowserRouter></CookieConsentProvider>
}

function NotFound() { return <section className="section"><div className="container narrow"><span className="eyebrow">404</span><h1>Página não encontrada.</h1><p>O endereço pode ter mudado. Volte para a página inicial ou veja a cobertura.</p><a className="button button--dark" href="/">Ir para o início</a></div></section> }
