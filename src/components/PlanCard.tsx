import { Check, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Plan } from '../types'
import { whatsappHref } from '../lib/whatsapp'

function price(value: number) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export function PlanCard({ plan, featured = false }: { plan: Plan; featured?: boolean }) {
  const href = whatsappHref({ source: 'plan-card', page: 'planos', plan: plan.id, message: `Olá, SuperOndas! Quero contratar o plano ${plan.name} de ${plan.speed} Mega.` })
  return <article className={`plan-card plan-card--${plan.accent} ${featured ? 'plan-card--featured' : ''}`}>
    {featured && <span className="plan-card__badge">Mais escolhido para uso intenso</span>}
    <span className="eyebrow">{plan.eyebrow}</span>
    <h3>{plan.name}</h3>
    <p className="plan-card__description">{plan.description}</p>
    <div className="plan-card__price"><strong>{plan.speed}</strong><span>Mega<br /><small>por mês</small></span><b>R$ {price(plan.price)}</b></div>
    <ul>{plan.highlights.map((highlight) => <li key={highlight}><Check size={17} />{highlight}</li>)}</ul>
    <a className="button button--full button--dark" href={href} target="_blank" rel="noreferrer">Contratar este plano <ArrowUpRight size={17} /></a>
    <Link className="plan-card__secondary" to="/contato">Tenho uma dúvida antes</Link>
  </article>
}
