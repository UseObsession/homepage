import { useEffect, useRef, useState } from 'react'
import type { HeroLookup as HeroLookupContent } from '../../content/types'
import './HeroLookup.css'

/* Home's hero object since 9 Nov (James), in place of the film: a lookup, the way a search company opens. A website is
   typed into the box, the kind of data lights up, and the answer comes back as dated facts. The middle scene is a
   company not covered yet: the box says so, adds it, and its first emails arrive, because the index fills on request.
   It learns from the wall (Look.tsx): a dark product window in every theme, a typed bar with a caret, time passing only
   while the window is on screen, and the last frame shown still under reduced motion (the dots switch scenes). */

type Phase = { typed: number; press: boolean; asked: boolean; steps: number; facts: number; done: boolean }
const EMPTY: Phase = { typed: 0, press: false, asked: false, steps: 0, facts: 0, done: false }
/* A scene's last frame: what the page shows before its script runs, and still under reduced motion. */
const full = (s: HeroLookupContent['scenes'][number]): Phase => ({ typed: s.domain.length, press: false, asked: true, steps: s.steps?.length ?? 0, facts: s.facts.length, done: true })
const SEARCH =
  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/><path d="m10.5 10.5 3 3"/></svg>'
const CHECK =
  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3.5 8.5 3 3 6-7"/></svg>'
const SHOT =
  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="12" height="10" rx="1.5"/><path d="m2.5 11 3.5-3.5 2.5 2.5 2-2 3 3"/><circle cx="10.5" cy="6" r="1"/></svg>'

export function HeroLookup({ lookup }: { lookup: HeroLookupContent }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [scene, setScene] = useState(0)
  const [phase, setPhase] = useState<Phase>(() => full(lookup.scenes[0]))
  const [active, setActive] = useState(false)
  const [still, setStill] = useState(false)
  const [run, setRun] = useState(0)

  /* On screen or not: time only passes while the window is in view. */
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setStill(true)
      return
    }
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  /* One scene: type, press, then the steps (a company not covered yet) and the facts, hold, and on to the next. */
  useEffect(() => {
    const s = lookup.scenes[scene]
    if (still) {
      setPhase(full(s))
      return
    }
    if (!active) return
    let off = false
    const wait = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms))
    const go = async () => {
      setPhase(EMPTY)
      await wait(500)
      for (let i = 1; i <= s.domain.length; i++) {
        if (off) return
        setPhase((p) => ({ ...p, typed: i }))
        await wait(55 + Math.random() * 45)
      }
      await wait(260)
      if (off) return
      setPhase((p) => ({ ...p, press: true }))
      await wait(220)
      setPhase((p) => ({ ...p, press: false, asked: true }))
      for (let i = 1; i <= (s.steps?.length ?? 0); i++) {
        await wait(i === 1 ? 420 : 760)
        if (off) return
        setPhase((p) => ({ ...p, steps: i }))
      }
      for (let i = 1; i <= s.facts.length; i++) {
        await wait(i === 1 ? 520 : 380)
        if (off) return
        setPhase((p) => ({ ...p, facts: i }))
      }
      await wait(240)
      if (off) return
      setPhase((p) => ({ ...p, done: true }))
      await wait(3200)
      if (off) return
      setScene((k) => (k + 1) % lookup.scenes.length)
    }
    void go()
    return () => {
      off = true
    }
  }, [scene, active, still, run, lookup])

  const s = lookup.scenes[scene]
  const typed = s.domain.slice(0, phase.typed)
  /* The status line: nothing until the button is pressed; a company not covered yet says so, then that it is in. */
  const status = !phase.asked ? '' : !s.covered && phase.done ? (s.statusDone ?? s.status) : s.status
  const state = !status ? 'none' : s.covered || phase.done ? 'in' : 'new'

  return (
    <div ref={rootRef} className="v5-hl">
      <p className="sr-only">{lookup.said}</p>
      <div className="hl-win ob-theme-dark" aria-hidden="true" data-covered={s.covered ? '' : undefined}>
        <div className="hl-bar">
          <span className="hl-ic" dangerouslySetInnerHTML={{ __html: SEARCH }} />
          <p className="hl-q">
            {typed ? <span className="hl-typed">{typed}</span> : <span className="hl-ph">{lookup.placeholder}</span>}
            <span className="hl-caret" />
          </p>
          <span className="hl-btn" data-press={phase.press ? '' : undefined} data-off={phase.typed < s.domain.length ? '' : undefined}>
            {lookup.button}
          </span>
        </div>
        <div className="hl-chips">
          {lookup.chips.map((c) => (
            <span className="hl-chip" key={c} data-on={c === s.chip && phase.typed > 0 ? '' : undefined}>
              {c}
            </span>
          ))}
        </div>
        <div className="hl-body">
          <p className="hl-status" data-state={state}>
            {status && <span className="hl-dot" />}
            {status}
          </p>
          {s.steps && phase.steps > 0 && (
            <ol className="hl-steps">
              {s.steps.slice(0, phase.steps).map((st) => (
                <li key={st}>
                  <span className="hl-check" dangerouslySetInnerHTML={{ __html: CHECK }} />
                  {st}
                </li>
              ))}
            </ol>
          )}
          <ul className="hl-facts">
            {s.facts.slice(0, phase.facts).map((f) => (
              <li className="hl-fact" key={f.when + f.text}>
                <span className="hl-when">{f.when}</span>
                <span className="hl-kind">{f.kind}</span>
                <span className="hl-text">{f.text}</span>
                <span className="hl-shot" dangerouslySetInnerHTML={{ __html: SHOT }} />
              </li>
            ))}
          </ul>
        </div>
        <div className="hl-foot">
          <code className="hl-call">{s.call}</code>
          <span className="hl-proof">{lookup.proof}</span>
        </div>
      </div>
      <div className="hl-dots">
        {lookup.scenes.map((sc, k) => (
          <button
            type="button"
            className="hl-dotbtn"
            key={sc.domain}
            aria-label={sc.label}
            aria-pressed={k === scene}
            onClick={() => {
              setScene(k)
              setRun((r) => r + 1)
            }}
          />
        ))}
      </div>
    </div>
  )
}
