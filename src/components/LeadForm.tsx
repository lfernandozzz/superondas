import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { cities } from '../data/site'
import { leadsEndpoint } from '../lib/config'
import { whatsappHref } from '../lib/whatsapp'
import { leadSchema, type LeadInput } from '../lib/validation'

export function LeadForm() {
  const [sent, setSent] = useState(false)
  const [serverError, setServerError] = useState('')
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LeadInput>({ resolver: zodResolver(leadSchema), defaultValues: { website: '', consent: false } })
  async function submit(data: LeadInput) {
    setServerError('')
    if (leadsEndpoint) {
      const response = await fetch(leadsEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (!response.ok) throw new Error('Não foi possível enviar agora.')
      setSent(true)
      return
    }
    const href = whatsappHref({ source: 'contact-form', page: 'contato', message: `Olá, SuperOndas! Meu nome é ${data.name}. Meu WhatsApp é ${data.phone}. Cidade: ${data.city}. ${data.message}` })
    window.location.assign(href)
    setSent(true)
  }
  if (sent) return <div className="success-box" role="status"><strong>Mensagem preparada.</strong><p>O próximo passo é continuar a conversa no WhatsApp. Se você não foi redirecionado, <a href={whatsappHref({ source: 'contact-form', page: 'contato', message: 'Olá, SuperOndas! Quero falar com a equipe.' })}>clique aqui</a>.</p></div>
  return <form className="lead-form" onSubmit={(event) => void handleSubmit(submit, () => setServerError('Revise os campos destacados e tente novamente.'))(event)} noValidate><div className="field-grid"><label><span>Seu nome</span><input {...register('name')} placeholder="Como podemos chamar você?" />{errors.name && <small>{errors.name.message}</small>}</label><label><span>WhatsApp</span><input {...register('phone')} inputMode="tel" placeholder="(98) 9 8506-8350" />{errors.phone && <small>{errors.phone.message}</small>}</label></div><label><span>Cidade</span><select {...register('city')}><option value="">Selecione sua cidade</option>{cities.map((city) => <option value={city.name} key={city.slug}>{city.name}</option>)}</select>{errors.city && <small>{errors.city.message}</small>}</label><label><span>Como podemos ajudar?</span><textarea {...register('message')} rows={4} placeholder="Quero contratar, tirar uma dúvida ou saber da cobertura..." />{errors.message && <small>{errors.message.message}</small>}</label><label className="check-field"><input type="checkbox" {...register('consent')} /><span>Autorizo o contato da SuperOndas sobre esta solicitação, conforme a Política de Privacidade.</span></label>{errors.consent && <small>{errors.consent.message}</small>}<input className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register('website')} />{serverError && <p className="form-error" role="alert">{serverError}</p>}<button className="button button--dark" type="submit" disabled={isSubmitting}> {isSubmitting ? 'Enviando...' : 'Enviar e continuar'} <Send size={17} /></button></form>
}
