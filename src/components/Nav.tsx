import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import './Nav.css'

const links = [
  { to: '/agencies', label: 'Agencies' },
  { to: '/sales', label: 'Sales' },
  { to: '/marketing', label: 'Marketing' },
  { to: '/developers', label: 'Developers' },
  { to: '/recipes', label: 'Recipes' },
  { to: '/sample-output', label: 'Sample output' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className={`nav ${open ? 'is-open' : ''}`}>
      <div className="wrap nav-row">
        <Link to="/" className="nav-brand" aria-label="Obsession home">
          <Logo />
        </Link>
        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-end">
          <ThemeToggle />
          <a className="btn sm nav-cta" href="#join">
            Join the waitlist
          </a>
          <button
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav className="nav-sheet" aria-label="Main, mobile">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
        <a className="btn" href="#join" onClick={() => setOpen(false)}>
          Join the waitlist
        </a>
      </nav>
    </header>
  )
}
