const defaultNumber = '5598985068350'

export const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || defaultNumber

export type WhatsAppContext = {
  source: string
  page: string
  plan?: string
  message: string
}

export function whatsappHref(context: WhatsAppContext): string {
  const params = new URLSearchParams({
    utm_source: context.source,
    utm_medium: 'whatsapp',
    utm_campaign: context.plan ? `plano-${context.plan}` : 'site-institucional',
    utm_content: context.page,
  })
  const text = `${context.message}\n\nOrigem: ${context.page}`
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}&${params.toString()}`
}

export function currentPageLabel(pathname: string): string {
  if (pathname === '/') return 'Página inicial'
  if (pathname.includes('/internet-em/')) return 'Página da cidade'
  return pathname.replaceAll('/', '').replaceAll('-', ' ') || 'Site SuperOndas'
}
