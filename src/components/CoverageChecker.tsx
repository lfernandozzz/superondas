import { ArrowUpRight, MapPin } from 'lucide-react'
import { useState } from 'react'
import { cities } from '../data/site'
import { whatsappHref } from '../lib/whatsapp'

export function CoverageChecker({ compact = false }: { compact?: boolean }) {
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [error, setError] = useState('')
  const href = city && address.trim().length > 1 ? whatsappHref({ source: 'coverage-checker', page: 'verificador-de-cobertura', message: `Olá, SuperOndas! Quero consultar cobertura. Cidade: ${city}. Rua ou bairro: ${address.trim()}.` }) : '#coverage-checker'
  function validate(event: React.FormEvent<HTMLFormElement>) {
    if (!city || address.trim().length < 2) {
      event.preventDefault()
      setError('Escolha a cidade e informe sua rua ou bairro para continuar.')
      return
    }
    setError('')
  }
  return <form id="coverage-checker" className={`coverage-checker ${compact ? 'coverage-checker--compact' : ''}`} onSubmit={validate}>
    <div className="coverage-checker__intro"><span className="icon-bubble"><MapPin size={19} /></span><div><span className="eyebrow">Consulte em poucos passos</span><h2>Veja se a fibra já chegou até você.</h2></div></div>
    <div className="coverage-fields"><label><span>Cidade</span><select value={city} onChange={(event) => setCity(event.target.value)}><option value="">Selecione sua cidade</option>{cities.map((item) => <option key={item.slug} value={item.name}>{item.name}</option>)}<option value="Outra cidade">Minha cidade não aparece</option></select></label><label><span>Rua ou bairro</span><input value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Ex.: Rua do Sol, Centro" /></label><a className="button button--sun" href={href} target="_blank" rel="noreferrer" onClick={(event) => { if (!city || address.trim().length < 2) { event.preventDefault(); setError('Escolha a cidade e informe sua rua ou bairro para continuar.') } }} >Consultar pelo WhatsApp <ArrowUpRight size={17} /></a></div>
    {error && <p className="form-error" role="alert">{error}</p>}
    <p className="form-note">A confirmação final depende da análise do endereço pela equipe.</p>
  </form>
}
