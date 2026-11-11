import { Instagram, Facebook, Mail, MapPin, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { whatsappHref } from '../lib/whatsapp'

export function Footer() {
  const whatsapp = whatsappHref({ source: 'footer', page: 'rodape', message: 'Olá, SuperOndas! Quero falar com a equipe.' })
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><div className="footer-brand__logo"><span className="footer-dot" />SuperOndas</div><p>Internet de fibra para a vida real das cidades do interior do Maranhão.</p><div className="footer-social"><a href={whatsapp} aria-label="Falar com a SuperOndas pelo WhatsApp"><MessageCircle size={18} /></a><a href="mailto:contato@superondas.com.br" aria-label="Enviar e-mail"><Mail size={18} /></a><a href="https://instagram.com/superondas_telecom" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a><a href="https://facebook.com/superondas.telecom" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a></div></div>
        <div><h2>Atalhos</h2><Link to="/planos">Conheça os planos</Link><Link to="/cobertura">Ver cobertura</Link><Link to="/suporte">Preciso de suporte</Link><Link to="/contato">Fale com a equipe</Link></div>
        <div><h2>Onde estamos</h2><p className="footer-address"><MapPin size={16} />Rua do Sol, nº 27<br />Miranda do Norte/MA</p><p className="footer-cities">Miranda do Norte · Pirapemas · Arari · Cantanhede · Matões do Norte</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} SuperOndas Telecom.</span><span><Link to="/privacidade">Privacidade</Link><Link to="/termos">Termos de uso</Link></span></div>
    </footer>
  )
}
