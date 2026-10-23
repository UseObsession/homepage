import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { consentCopy as copy } from '../content/consent'
import { choose, consent, gpc, OPEN_CONSENT, type Consent } from '../lib/analytics'
import './ConsentBanner.css'

/* The consent card: 1 line on what Google Analytics does here, Allow and Decline at equal weight, and the privacy
   notice's section on it. It asks once, on the first page a visitor opens, unless their browser sends Global Privacy
   Control; Cookie settings in the footer opens it again, with their choice marked, and moves focus into it. It sits in
   the corner, never over the page's words, and under the nav and its phone sheet. Nothing renders on the server, so the
   prerendered pages carry no card. */
export function ConsentBanner() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<Consent | null>(null)
  const [asked, setAsked] = useState(false)
  const first = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const now = consent()
    setCurrent(now)
    if (!now && !gpc()) setOpen(true)
    const reopen = () => {
      setCurrent(consent())
      setAsked(true)
      setOpen(true)
    }
    window.addEventListener(OPEN_CONSENT, reopen)
    return () => window.removeEventListener(OPEN_CONSENT, reopen)
  }, [])

  useEffect(() => {
    if (open && asked) first.current?.focus()
  }, [open, asked])

  if (!open) return null

  const pick = (c: Consent) => {
    choose(c)
    setCurrent(c)
    setOpen(false)
    setAsked(false)
  }

  return (
    <section
      className="s-consent"
      aria-label={copy.label}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && asked) {
          setOpen(false)
          setAsked(false)
        }
      }}
    >
      <p className="s-consent__text">
        {copy.text}{' '}
        <Link className="s-consent__more" to={copy.more.to} onClick={() => asked && setOpen(false)}>
          {copy.more.label}
        </Link>
      </p>
      <div className="s-consent__acts">
        <button
          ref={first}
          type="button"
          className="ob-btn ob-btn--sm ob-btn--secondary"
          aria-pressed={current === 'granted'}
          onClick={() => pick('granted')}
        >
          <span className="ob-btn-label">{copy.allow}</span>
        </button>
        <button type="button" className="ob-btn ob-btn--sm ob-btn--secondary" aria-pressed={current === 'denied'} onClick={() => pick('denied')}>
          <span className="ob-btn-label">{copy.decline}</span>
        </button>
      </div>
    </section>
  )
}
