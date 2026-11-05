import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { consentCopy as copy } from '../content/consent'
import { choose, consent, gpc, OPEN_CONSENT, type Consent } from '../lib/analytics'
import './ConsentBanner.css'

/* The consent strip: 1 line on what Google Analytics does here, Allow and Decline as 2 buttons of the same size (Allow
   filled, Decline outlined, both plainly there), and the privacy notice's section on it, on an inverted band across the
   foot of the window, so it can't be missed (James, 5 Nov: he forgot to choose). It asks once,
   on the first page a visitor opens, unless their browser sends Global Privacy Control; Cookie settings in the footer
   opens it again, with their choice marked, and moves focus into it. A spacer the strip's height ends the page, so the
   footer's last line can always scroll clear of it. It sits under the nav and its phone sheet. Nothing renders on the
   server, so the prerendered pages carry no strip. On Home, the page holds still until the first Allow or Decline
   (James, 5 Nov); Decline opens the page as fully as Allow, so the choice stays free. A scroll tried while it holds
   nudges the strip, so the reason the page is still is right there. */
export function ConsentBanner() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<Consent | null>(null)
  const [asked, setAsked] = useState(false)
  const [height, setHeight] = useState(0)
  const first = useRef<HTMLButtonElement>(null)
  const strip = useRef<HTMLElement>(null)
  const { pathname } = useLocation()
  const hold = open && current === null && pathname === '/'

  /* Home doesn't scroll until the first choice. Asked again from Cookie settings, it never holds. */
  useEffect(() => {
    if (!hold) return
    const html = document.documentElement
    html.classList.add('s-consent-hold')
    const keys = new Set(['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'End', 'Home', ' '])
    let last = 0
    const nudge = (e: Event) => {
      if (e instanceof KeyboardEvent && (!keys.has(e.key) || (e.target as Element | null)?.closest('input, textarea, select, button, a'))) return
      const el = strip.current
      const now = performance.now()
      if (!el || now - last < 900) return
      last = now
      el.removeAttribute('data-nudge')
      void el.offsetWidth
      el.setAttribute('data-nudge', '')
    }
    window.addEventListener('wheel', nudge, { passive: true })
    window.addEventListener('touchmove', nudge, { passive: true })
    window.addEventListener('keydown', nudge)
    return () => {
      html.classList.remove('s-consent-hold')
      window.removeEventListener('wheel', nudge)
      window.removeEventListener('touchmove', nudge)
      window.removeEventListener('keydown', nudge)
    }
  }, [hold])

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

  /* The spacer follows the strip's height, which grows when its line wraps on a narrow window. */
  useEffect(() => {
    const el = strip.current
    if (!open || !el) return
    const measure = () => setHeight(Math.ceil(el.getBoundingClientRect().height))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [open])

  if (!open) return null

  const pick = (c: Consent) => {
    choose(c)
    setCurrent(c)
    setOpen(false)
    setAsked(false)
  }

  return (
    <>
      <div className="s-consent-space" style={{ height }} aria-hidden="true" />
      <section
        ref={strip}
        className="s-consent"
        aria-label={copy.label}
        onKeyDown={(e) => {
          if (e.key === 'Escape' && asked) {
            setOpen(false)
            setAsked(false)
          }
        }}
      >
        <p className="s-consent__text">{copy.text}</p>
        <div className="s-consent__acts">
          <button
            ref={first}
            type="button"
            className="s-consent__act s-consent__act--allow"
            aria-pressed={current === 'granted'}
            onClick={() => pick('granted')}
          >
            {copy.allow}
          </button>
          <button type="button" className="s-consent__act s-consent__act--decline" aria-pressed={current === 'denied'} onClick={() => pick('denied')}>
            {copy.decline}
          </button>
          <Link className="s-consent__more" to={copy.more.to} onClick={() => asked && setOpen(false)}>
            {copy.more.label}
          </Link>
        </div>
      </section>
    </>
  )
}
