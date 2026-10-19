import { useEffect, useRef, useState } from 'react'
import type { Stage } from '../../content/types'
import './ReceiptStage.css'

/* The hero's stage (COPY.md, "Home > Hero"): 1 company's journey as its customer, in the 3 pieces of evidence a customer
   agent collects (the ad it followed, the page behind it, the email that came) and the receipt it files, stamped.
   The page's 1 orchestrated motion: once the page has settled on the first story, the stage plays the next company's
   journey (each card lands in order, the receipt prints, the stamp lands), holds, then moves on. It holds while a
   reader points at it or focuses it, off screen, in a hidden tab and on Pause; under reduced motion it never moves
   and the reader changes company with the buttons. The prerendered HTML is the first story at rest, so nothing on the
   first paint waits for a script. */

const FIRST_HOLD = 5200
const HOLD = 8200

function prefersReduced() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function ReceiptStage({ stage }: { stage: Stage }) {
  const [i, setI] = useState(0)
  const [run, setRun] = useState(false)
  const [paused, setPaused] = useState(false)
  const [held, setHeld] = useState(false)
  const [seen, setSeen] = useState(true)
  const ref = useRef<HTMLElement>(null)
  const n = stage.receipts.length

  /* Off screen holds the stage. */
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  /* The clock: 1 timeout per story, cleared whenever anything holds it. */
  useEffect(() => {
    if (n < 2 || paused || held || !seen || prefersReduced()) return
    const t = window.setTimeout(
      () => {
        if (document.hidden) return
        setRun(true)
        setI((v) => (v + 1) % n)
      },
      run ? HOLD : FIRST_HOLD,
    )
    return () => window.clearTimeout(t)
  }, [i, n, paused, held, seen, run])

  const r = stage.receipts[i]
  const pick = (k: number) => {
    setRun(!prefersReduced())
    setI(k)
  }

  return (
    <figure
      className="v5-rs"
      ref={ref}
      data-run={run ? '' : undefined}
      aria-label={stage.label}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
    >
      <div className="v5-rs-stage" key={i} aria-live="off">
        <div className="v5-rs-flow">
          <article className="v5-rs-card v5-rs-ad" aria-label={`${stage.steps[0]}: ${r.ad.text}`}>
            <header className="v5-rs-ad-h">
              <span className="v5-rs-mono" aria-hidden="true">
                {r.monogram}
              </span>
              <span className="v5-rs-ad-name">{r.company}</span>
              <span className="v5-rs-ad-src">{r.ad.source}</span>
            </header>
            <p className="v5-rs-ad-text">{r.ad.text}</p>
            <span className="v5-rs-ad-cta">{r.ad.cta}</span>
          </article>
          <p className="v5-rs-hop">{stage.steps[0]}</p>
          <article className="v5-rs-card v5-rs-page" aria-label={`${r.did ?? stage.steps[1]}: ${r.page.title}`}>
            <p className="v5-rs-url">
              <span>{r.domain}</span>
              {r.page.path}
            </p>
            <p className="v5-rs-page-t">{r.page.title}</p>
            <p className="v5-rs-page-n">{r.page.note}</p>
          </article>
          <p className="v5-rs-hop">{r.did ?? stage.steps[1]}</p>
          <article className="v5-rs-card v5-rs-mail" aria-label={`${stage.steps[2]}: ${r.mail.subject}`}>
            <span className="v5-rs-mail-time">{r.mail.time}</span>
            <span className="v5-rs-mail-main">
              <span className="v5-rs-mail-from">{r.mail.from}</span>
              <span className="v5-rs-mail-sub">{r.mail.subject}</span>
            </span>
            <span className="v5-rs-mail-tab">{r.mail.tab}</span>
          </article>
        </div>
        <div className="v5-rs-receipt v5-receipt">
          <p className="v5-rs-receipt-h">
            <span>Record</span>
            <span>{r.domain}</span>
          </p>
          <hr className="v5-receipt-rule" />
          {r.rows.map((row) => (
            <p className="v5-receipt-row" key={row.k}>
              <span className="v5-receipt-k">{row.k}</span>
              <span className="v5-receipt-v">{row.v}</span>
            </p>
          ))}
          <hr className="v5-receipt-rule" />
          <p className="v5-rs-fact">{r.fact}</p>
          <span className="v5-stamp v5-rs-stamp">{r.stamp}</span>
        </div>
      </div>
      <figcaption className="v5-rs-cap">
        <span className="v5-rs-example">{stage.example}</span>
        <span className="v5-rs-pick" role="group" aria-label="Companies">
          {stage.receipts.map((x, k) => (
            <button
              key={x.domain}
              type="button"
              className="v5-rs-dot"
              aria-pressed={k === i}
              onClick={() => pick(k)}
            >
              {x.company}
            </button>
          ))}
          {n > 1 && (
            <button type="button" className="v5-rs-pause" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
              {paused ? 'Play' : 'Pause'}
            </button>
          )}
        </span>
      </figcaption>
    </figure>
  )
}
