import { useEffect, useId, useRef, useState, type PointerEvent } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCasePages, type UseCasePage } from '../content/useCases'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import './Nav.css'

type Item = { to: string; label: string } | { label: string; items: UseCasePage[] }

const links: Item[] = [
  { to: '/agencies', label: 'Agencies' },
  { to: '/sales', label: 'Sales' },
  { to: '/marketing', label: 'Marketing' },
  { to: '/developers', label: 'Developers' },
  { to: '/recipes', label: 'Recipes' },
  { label: 'Use cases', items: useCasePages },
  { to: '/sample-output', label: 'Sample output' },
]

/* A dropdown in the desktop nav. Opens on hover or click, closes on Escape, a click outside or picking a page. */
function NavMenu({ label, items }: { label: string; items: UseCasePage[] }) {
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  /* A mouse has already opened the menu on hover, so its click keeps it open. Touch and keyboard toggle it. */
  const byMouse = useRef(false)
  const hover = (on: boolean) => (e: PointerEvent<HTMLDivElement>) => e.pointerType === 'mouse' && setOpen(on)

  useEffect(() => {
    if (!open) return
    const onDown = (e: globalThis.PointerEvent) => !ref.current?.contains(e.target as Node) && setOpen(false)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="nav-menu" ref={ref} onPointerEnter={hover(true)} onPointerLeave={hover(false)}>
      <button
        className={items.some((i) => i.path === pathname) ? 'active' : ''}
        aria-expanded={open}
        aria-controls={id}
        onPointerDown={(e) => (byMouse.current = e.pointerType === 'mouse')}
        onClick={() => {
          const mouse = byMouse.current
          byMouse.current = false
          setOpen((o) => mouse || !o)
        }}
      >
        {label}
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="nav-menu-panel" id={id} hidden={!open}>
        <p className="kicker">Worked examples</p>
        {items.map((i) => (
          <NavLink key={i.path} to={i.path} onClick={() => setOpen(false)}>
            <b>{i.label}</b>
            <span>{i.line}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className={`nav ${open ? 'is-open' : ''}`}>
      <div className="wrap nav-row">
        <Link to="/" className="nav-brand" aria-label="Obsession home">
          <Logo />
        </Link>
        <nav className="nav-links" aria-label="Main">
          {links.map((l) =>
            'items' in l ? (
              <NavMenu key={l.label} label={l.label} items={l.items} />
            ) : (
              <NavLink key={l.to} to={l.to}>
                {l.label}
              </NavLink>
            ),
          )}
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
        {links.map((l) =>
          'items' in l ? (
            <div key={l.label} className="nav-sheet-group">
              <p className="kicker">{l.label}</p>
              {l.items.map((i) => (
                <NavLink key={i.path} to={i.path} onClick={() => setOpen(false)}>
                  {i.label}
                </NavLink>
              ))}
            </div>
          ) : (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ),
        )}
        <a className="btn" href="#join" onClick={() => setOpen(false)}>
          Join the waitlist
        </a>
      </nav>
    </header>
  )
}
