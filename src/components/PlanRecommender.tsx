import { ArrowRight, Users } from 'lucide-react'
import { useMemo, useState } from 'react'
import { plans } from '../data/site'
import { whatsappHref } from '../lib/whatsapp'
import type { PlanId } from '../types'

const usages = [
  { value: 'routine', label: 'Rotina, vídeos e redes sociais' },
  { value: 'gaming', label: 'Jogos, lives e downloads' },
  { value: 'work', label: 'Home office, estudos e muitos dispositivos' },
] as const

type Usage = typeof usages[number]['value']

function choosePlan(people: number, usage: Usage): PlanId {
  if (usage === 'work' || people >= 5) return 'homepro'
  if (usage === 'gaming' || people >= 4) return 'gamers'
  return 'streaming'
}

export function PlanRecommender() {
  const [people, setPeople] = useState(3)
  const [usage, setUsage] = useState<Usage>('routine')
  const recommendation = useMemo(() => plans.find((plan) => plan.id === choosePlan(people, usage)) ?? plans[0], [people, usage])
  const href = whatsappHref({ source: 'plan-recommender', page: 'recomendador', plan: recommendation.id, message: `Olá, SuperOndas! O recomendador indicou o plano ${recommendation.name}. Quero entender se ele atende minha casa.` })
  return <section className="recommender" aria-labelledby="recommender-title"><div className="recommender__questions"><span className="icon-bubble icon-bubble--sun"><Users size={20} /></span><span className="eyebrow">Escolha sem complicação</span><h2 id="recommender-title">Qual plano combina com a sua casa?</h2><label className="range-label">Quantas pessoas usam a internet? <strong>{people}</strong><input type="range" min="1" max="8" value={people} onChange={(event) => setPeople(Number(event.target.value))} /></label><div className="usage-options"><span>O uso principal é:</span>{usages.map((item) => <button type="button" className={usage === item.value ? 'is-selected' : ''} key={item.value} onClick={() => setUsage(item.value)}>{item.label}</button>)}</div></div><div className="recommender__result"><span className="result-label">Nossa sugestão</span><div className="result-plan"><span className="result-speed">{recommendation.speed}<small>Mega</small></span><div><h3>{recommendation.name}</h3><p>{recommendation.recommendedFor}</p></div></div><p>{recommendation.description}</p><a className="text-link" href={href} target="_blank" rel="noreferrer">Quero falar sobre este plano <ArrowRight size={16} /></a></div></section>
}
