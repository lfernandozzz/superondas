import { describe, expect, it } from 'vitest'
import { whatsappHref } from './whatsapp'

describe('whatsappHref', () => {
  it('monta mensagem e UTMs sem perder o contexto', () => {
    const url = whatsappHref({ source: 'hero', page: 'home', plan: 'gamers', message: 'Quero contratar' })
    expect(url).toContain('wa.me/5598985068350')
    expect(url).toContain('utm_source=hero')
    expect(url).toContain('utm_campaign=plano-gamers')
    expect(url).toContain(encodeURIComponent('Quero contratar'))
  })
})
