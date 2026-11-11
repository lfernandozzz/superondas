import { MessageCircle } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { currentPageLabel, whatsappHref } from '../lib/whatsapp'

export function WhatsAppButton() {
  const { pathname } = useLocation()
  const page = currentPageLabel(pathname)
  const href = whatsappHref({ source: 'floating-button', page, message: `Olá, SuperOndas! Estou na ${page} e quero tirar uma dúvida.` })
  return <a className="whatsapp-float" href={href} target="_blank" rel="noreferrer" aria-label="Falar com a SuperOndas pelo WhatsApp"><MessageCircle size={21} /><span>Fale no WhatsApp</span></a>
}
