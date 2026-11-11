import { ArrowRight, MapPin, MessageCircle } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { CoverageChecker } from '../components/CoverageChecker'
import { FAQ } from '../components/FAQ'
import { PlanCard } from '../components/PlanCard'
import { SectionHeading } from '../components/SectionHeading'
import { cities, faqs, plans } from '../data/site'
import { FAQSchema, Seo } from '../lib/seo'
import { whatsappHref } from '../lib/whatsapp'

export function CityPage() {
  const { citySlug } = useParams()
  const city = cities.find((item) => item.slug === citySlug)
  if (!city) return <NotFoundCity />
  const href = whatsappHref({ source: 'city-page', page: `internet-em-${city.slug}`, message: `Olá, SuperOndas! Quero consultar cobertura em ${city.name}.` })
  return <><Seo title={`Internet em ${city.name}/MA | SuperOndas`} description={`Consulte planos de internet de fibra óptica da SuperOndas em ${city.name}, Maranhão.`} path={`/internet-em/${city.slug}`} /><FAQSchema questions={faqs.slice(0, 3)} /><section className="city-hero"><div className="container city-hero__inner"><div><span className="eyebrow eyebrow--light">Internet em {city.name}/MA</span><h1>Uma conexão que acompanha o seu endereço.</h1><p>{city.localLine} Consulte a disponibilidade da fibra no seu bairro.</p><a className="button button--sun" href={href} target="_blank" rel="noreferrer">Consultar em {city.name} <ArrowRight size={18} /></a></div><div className="city-badge"><MapPin size={22} /><strong>{city.name}</strong><span>{city.status}</span></div></div></section><section className="section"><div className="container"><div className="section-heading-row"><SectionHeading eyebrow="Planos para sua rotina" title="Escolha seu ponto de partida." /><span className="local-note"><MessageCircle size={16} /> Confirmamos pelo WhatsApp</span></div><div className="plans-grid">{plans.map((plan, index) => <PlanCard key={plan.id} plan={plan} featured={index === 1} />)}</div></div></section><section className="section section--foam"><div className="container city-checker"><div><span className="eyebrow">Cobertura no endereço</span><h2>Quer confirmar rua ou bairro?</h2><p>A área atendida pode variar dentro da cidade. Informe o endereço para a equipe verificar.</p></div><CoverageChecker compact /></div></section><section className="section"><div className="container narrow"><SectionHeading eyebrow="Dúvidas comuns" title={`Sobre contratar em ${city.name}`} /><FAQ items={faqs.slice(0, 3)} /><Link className="text-link" to="/suporte">Ver todas as orientações <ArrowRight size={16} /></Link></div></section></>
}

function NotFoundCity() { return <><Seo title="Cidade não encontrada | SuperOndas" description="A página de cidade não foi encontrada." path="/internet-em" /><section className="section"><div className="container narrow"><span className="eyebrow">Ops</span><h1>Não encontramos essa cidade.</h1><p>Veja a lista completa de cidades atendidas pela SuperOndas.</p><Link className="button button--dark" to="/cobertura">Ver cobertura <ArrowRight size={18} /></Link></div></section></> }
