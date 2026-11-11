import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/planos', label: 'Planos' },
  { to: '/cobertura', label: 'Cobertura' },
  { to: '/suporte', label: 'Suporte' },
  { to: '/empresa', label: 'Empresa' },
  { to: '/blog', label: 'Dicas' },
]

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-mark__wave" />
      <span className="brand-mark__sun" />
    </span>
  )
}

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="SuperOndas Telecom — página inicial">
      <BrandMark />
      <span><strong>Super</strong>Ondas<small>telecom</small></span>
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="topbar"><div className="container topbar__inner"><span>Fibra óptica para o interior do Maranhão</span><a href="mailto:contato@superondas.com.br">contato@superondas.com.br</a></div></div>
      <div className="container header__inner">
        <Logo />
        <button className="menu-toggle" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          {links.map((link) => <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}</NavLink>)}
          <Link className="button button--small button--sun" to="/contato" onClick={() => setOpen(false)}>Consultar cobertura</Link>
        </nav>
      </div>
    </header>
  )
}
