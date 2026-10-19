import { useEffect, useId, useRef, useState } from 'react'
import type { Scale as ScaleContent, ScaleKind } from '../../content/types'
import './Scale.css'

/* Scale (COPY.md, "Scale"): 1 company, then 1,000, then 100,000, bound to the reader's scroll. Nothing advances on its
   own. On a screen tall and wide enough, the headline, the stage and the steps pin while the reader scrolls through
   the section: the first third of the way is step 1 (the first sign up, learned as a trace), the second step 2 (the
   trace turned into a program), the last step 3 (the program run across 100,000). Scrolling back goes back. Each
   step's bar fills with the scroll, and a step's tab scrolls to it. On a phone, or a short screen, the 3 steps stack
   and the headline's count follows whichever step is in the middle of the screen.
   A step plays its small story when it becomes the current one (the email types, the trace fills, the meters fall).
   Step 3's field is bound to the scroll too: it fills square by square (each 250 companies) as the count climbs to
   100,000, and empties as the reader scrolls back. Under reduced motion the small stories show finished; the field
   still follows the scroll, which only the reader moves. Ink only: no accent in this section. The prerendered HTML is step 1. Every step's
   stage is a picture of the product (role="img"), described by its label for screen readers and llms-full.txt. */

const DOTS = 400
/* Literal class names, so the CSS purge sees each one (scripts/purge-css.mjs). */
const KIND: Record<ScaleKind, string> = {
  code: 'v5-scale-k v5-scale-k--code',
  question: 'v5-scale-k v5-scale-k--question',
  agent: 'v5-scale-k v5-scale-k--agent',
  escalate: 'v5-scale-k v5-scale-k--escalate',
}
/* The same query as Scale.css's pinned layout. */
const PIN = '(min-width: 961px) and (min-height: 760px)'
/* The field is full a little before the end of step 3, so the last stretch of scroll rests on it full. */
const FULL_AT = 0.85

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const clamp = (n: number) => Math.min(1, Math.max(0, n))

export function Scale({ scale, id }: { scale: ScaleContent; id?: string }) {
  const hid = useId()
  const total = scale.run.total
  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const pin = useRef<HTMLDivElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const steps = useRef<(HTMLDivElement | null)[]>([])
  const [cur, setCur] = useState(0)
  const [live, setLive] = useState(false)
  const curRef = useRef(0)
  const countRef = useRef<HTMLSpanElement>(null)

  const go = (k: number) => {
    if (k === curRef.current) return
    curRef.current = k
    setCur(k)
  }

  useEffect(() => {
    setLive(true)
    const pinned = window.matchMedia(PIN)
    let raf = 0
    let io: IntersectionObserver | undefined

    /* Step 3's field and count, from that step's share of the scroll: square by square, 250 companies each. */
    const fill = (f: number) => {
      const s = section.current
      const p = clamp(f / FULL_AT)
      s?.style.setProperty('--v5-fill', String(p * DOTS))
      if (countRef.current) countRef.current.textContent = Math.round(p * total).toLocaleString('en-GB')
    }
    /* Pinned: the pin is as tall as what it holds (measured into --v5-pin-h, so the track ends right under it, with no
       empty screen after the last step); the scroll through the track picks the step, fills each step's bar and step
       3's field. */
    const measure = () => {
      const s = section.current
      if (s && pin.current) s.style.setProperty('--v5-pin-h', `${pin.current.offsetHeight}px`)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const t = track.current
        const s = section.current
        const pn = pin.current
        if (!t || !s || !pn) return
        const r = t.getBoundingClientRect()
        const stick = parseFloat(getComputedStyle(pn).top) || 0
        const p = clamp((stick - r.top) / Math.max(1, r.height - pn.offsetHeight))
        for (let k = 0; k < 3; k++) s.style.setProperty(`--v5-f${k}`, String(clamp(p * 3 - k)))
        fill(clamp(p * 3 - 2))
        go(Math.min(2, Math.floor(p * 3)))
      })
    }
    /* Stacked (or a phone's row of cards): step 3's field fills, square by square, as that step arrives. */
    let filling = 0
    const fillIn = () => {
      cancelAnimationFrame(filling)
      if (reduced()) return fill(1)
      const t0 = performance.now()
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / 1600)
        fill(p * FULL_AT)
        if (p < 1) filling = requestAnimationFrame(tick)
      }
      filling = requestAnimationFrame(tick)
    }
    const arrive = (k: number) => {
      if (k < 0 || k === curRef.current) return
      go(k)
      if (k === 2) fillIn()
    }
    /* Stacked: the step in the middle of the screen is the current one. On a phone the steps are a row of cards
       (styles/v5.css .v5-rail): the card mostly in view in that row is the current one. */
    const watch = () => {
      const row = stage.current
      const rail = !!row && getComputedStyle(row).overflowX === 'auto'
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) if (e.isIntersecting && (!rail || e.intersectionRatio >= 0.6)) arrive(steps.current.indexOf(e.target as HTMLDivElement))
        },
        rail ? { root: row, threshold: [0.6] } : { rootMargin: '-45% 0px -45% 0px' },
      )
      steps.current.forEach((el) => el && io!.observe(el))
    }
    const onResize = () => {
      measure()
      onScroll()
    }
    const setup = () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      io?.disconnect()
      if (pinned.matches) {
        measure()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onResize)
        onScroll()
      } else {
        fill(curRef.current === 2 ? 1 : 0)
        if ('IntersectionObserver' in window) watch()
        else fill(1)
      }
    }
    setup()
    pinned.addEventListener('change', setup)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(filling)
      io?.disconnect()
      pinned.removeEventListener('change', setup)
    }
  }, [total])

  /* A tab scrolls to its step's third of the track. */
  const pick = (k: number) => {
    const t = track.current
    const pn = pin.current
    if (!t || !pn || !window.matchMedia(PIN).matches) return
    const stick = parseFloat(getComputedStyle(pn).top) || 0
    const top = t.getBoundingClientRect().top + window.scrollY - stick
    const span = t.offsetHeight - pn.offsetHeight
    window.scrollTo({ top: top + ((k + 0.15) / 3) * span, behavior: reduced() ? 'auto' : 'smooth' })
  }

  const p = scale.program
  const on = (k: number) => (k === cur ? '' : undefined)

  return (
    <section ref={section} className="v5-section v5-scale" id={id} aria-labelledby={`${hid}-h`} data-live={live ? '' : undefined}>
      <div className="v5-scale-track" ref={track}>
        <div className="v5-scale-pin" ref={pin}>
          <div className="s-wrap">
            <div className="v5-head v5-scale-head">
              <h2 className="v5-h2 v5-scale-h" id={`${hid}-h`} aria-label={scale.heading}>
                <span className="v5-scale-lead">{scale.lead}</span>
                <span className="v5-scale-count" key={cur}>
                  {scale.counts[cur]}
                </span>
              </h2>
              <p className="v5-line">{scale.line}</p>
            </div>

            <div className="v5-scale-stage v5-rail" ref={stage}>
              {scale.steps.map((s, k) => (
                <div
                  className="v5-scale-step"
                  key={s.title}
                  data-on={on(k)}
                  ref={(el) => {
                    steps.current[k] = el
                  }}
                >
                  <h3 className="v5-scale-step-h">
                    <span className="v5-scale-step-t">{s.title}</span>
                    <span className="v5-scale-step-l">{s.line}</span>
                  </h3>
                  {k === 0 && (
                    <div className="v5-scale-panel v5-scale-learn" role="img" aria-label={s.label}>
                      <div className="v5-scale-browser">
                        <p className="v5-scale-url">{scale.learn.url}</p>
                        <div className="v5-scale-form">
                          <p className="v5-scale-form-t">Join the list</p>
                          <p className="v5-scale-field">
                            <span className="v5-scale-typed">{scale.learn.field}</span>
                          </p>
                          <p className="v5-scale-check">
                            <span className="v5-scale-box" />
                            Marketing emails
                          </p>
                          <span className="v5-scale-submit">Sign up</span>
                        </div>
                      </div>
                      <div className="v5-scale-trace">
                        <p className="v5-scale-trace-h">Trace</p>
                        <ol>
                          {scale.learn.trace.map((t, i) => (
                            <li key={t} style={{ ['--k' as string]: i }}>
                              {t}
                            </li>
                          ))}
                        </ol>
                        <p className="v5-scale-saved">{scale.learn.saved}</p>
                      </div>
                    </div>
                  )}
                  {k === 1 && (
                    <div className="v5-scale-panel v5-scale-program" role="img" aria-label={s.label}>
                      <ol className="v5-scale-pipe">
                        {p.steps.map((x, i) => (
                          <li key={x.label} style={{ ['--k' as string]: i }}>
                            <span className={KIND[x.kind]}>{p.kinds[x.kind]}</span>
                            <span className="v5-scale-pipe-l">{x.label}</span>
                          </li>
                        ))}
                      </ol>
                      <div className="v5-scale-routes">
                        <p className="v5-scale-routes-h">{p.routes.heading}</p>
                        {p.routes.items.map((r) => (
                          <div className="v5-scale-route" key={r.label} style={{ ['--w' as string]: `${r.share}%` }}>
                            <p className="v5-scale-route-l">
                              <span>{r.label}</span>
                              <span className="v5-scale-route-n">{r.share}%</span>
                            </p>
                            <span className="v5-scale-bar" />
                            <p className="v5-scale-route-d">{r.line}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {k === 2 && (
                    <div className="v5-scale-panel v5-scale-run" role="img" aria-label={s.label}>
                      <div className="v5-scale-field-grid">
                        {Array.from({ length: DOTS }, (_, i) => (
                          <span key={i} className="v5-scale-dot" style={{ ['--i' as string]: i }} />
                        ))}
                      </div>
                      <div className="v5-scale-side">
                        <p className="v5-scale-call">
                          <code>{scale.run.call}</code>
                        </p>
                        <p className="v5-scale-num">
                          <span className="v5-scale-n" ref={countRef}>
                            {total.toLocaleString('en-GB')}
                          </span>
                          <span className="v5-scale-unit">{scale.run.unit}</span>
                        </p>
                        <p className="v5-scale-covered">{scale.run.covered}</p>
                        <p className="v5-scale-legend">
                          <span className="v5-scale-key" />
                          {scale.run.square}
                        </p>
                        <p className="v5-scale-toast">{scale.run.toast}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* The steps as a row of tabs under the pinned stage: each bar fills as the reader scrolls through it. Hidden
                from screen readers and the page's words, which read the steps' own headings. */}
            <div className="v5-scale-tabs" aria-hidden="true">
              {scale.steps.map((s, k) => (
                <button
                  key={s.title}
                  type="button"
                  tabIndex={-1}
                  className="v5-scale-tab"
                  data-on={on(k)}
                  style={{ ['--v5-f' as string]: `var(--v5-f${k}, ${k === 0 ? 1 : 0})` }}
                  onClick={() => pick(k)}
                >
                  <span className="v5-scale-progress" />
                  <span className="v5-scale-tab-t">{s.title}</span>
                  <span className="v5-scale-tab-l">{s.line}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="s-wrap">
        <ul className="v5-scale-principles v5-rail v5-rail--cards">
          {scale.principles.map((x) => (
            <li key={x.title}>
              <h3>{x.title}</h3>
              <p>{x.line}</p>
            </li>
          ))}
        </ul>

        <div className="v5-scale-compare">
          {scale.compare.cols.map((c, k) => (
            <div className={k === 1 ? 'v5-scale-col is-after' : 'v5-scale-col'} key={c.label}>
              <p className="v5-scale-col-l">{c.label}</p>
              <h3 className="v5-scale-col-t">{c.title}</h3>
              {c.cost && (
                <p className="v5-scale-cost">
                  <span className="v5-scale-cost-v">{c.cost.value}</span>
                  <span className="v5-scale-cost-l">{c.cost.line}</span>
                </p>
              )}
              <dl>
                {c.rows.map((r) => (
                  <div key={r.k}>
                    <dt>{r.k}</dt>
                    <dd>{r.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
          <p className="v5-scale-note">{scale.compare.note}</p>
        </div>
      </div>
    </section>
  )
}
