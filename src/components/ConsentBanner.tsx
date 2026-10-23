import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { consentCopy as copy } from '../content/consent'
import { choose, consent, gpc, OPEN_CONSENT, type Consent } from '../lib/analytics'
import './ConsentBanner.css'

/* The consent strip: 1 line on what Google Analytics does here, Allow and Decline at equal weight, and the privacy
   notice's section on it, centred on a strip across the foot of the window (as block.xyz/dessa does it). It asks once,
   on the first page a visitor opens, unless their browser sends Global Privacy Control; Cookie settings in the footer
   opens it again, with their choice marked, and moves focus into it. A spacer the strip's height ends the page, so the
   footer's last line can always scroll clear of it. It sits under the nav and its phone sheet. Nothing renders on the
   server, so the prerendered pages carry no strip. */
export function ConsentBanner() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<Consent | null>(null)
  const [asked, setAsked] = useState(false)
  const [height, setHeight] = useState(0)
  const first = useRef<HTMLButtonElement>(null)
  const strip = useRef<HTMLElement>(null)

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
            className="s-consent__act"
            aria-pressed={current === 'granted'}
            onClick={() => pick('granted')}
          >
            {copy.allow}
          </button>
          <button type="button" className="s-consent__act" aria-pressed={current === 'denied'} onClick={() => pick('denied')}>
            {copy.decline}
          </button>
          <Link className="s-consent__act" to={copy.more.to} onClick={() => asked && setOpen(false)}>
            {copy.more.label}
          </Link>
        </div>
      </section>
    </>
  )
}
