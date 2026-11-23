import { useEffect, useId, useMemo, useRef, useState, type CSSProperties } from 'react'
import type { DescribeExample } from '../../content/describe'
import { describe } from '../../content/describe'
import './DescribeJob.css'

/* Describe your own job, as a picture (23 Nov 2026; words in content/describe.ts). A plain sentence types itself into the
   box; the pointer presses "Make it a blueprint"; each phrase lights in the sentence as it becomes a field (When, Where,
   Do, Results to); the blueprint is ready to run and its first result lands. With more than one example it tours them,
   a hairline filling under the chosen tab before the next; picking a tab stops the tour and plays that one.

   Motion runs only while the picture is on screen and motion is allowed. Under prefers-reduced-motion, before the
   page's script runs, and whenever it is off screen, it shows the finished blueprint beside its sentence, every word in
   the page. Reused on Home (inside the teams window, `chrome={false}`), on /no-code and on /blueprints. */

type Phase = 'type' | 'press' | 'build' | 'spin' | 'ready'
const CHAR = 24
const START = 350
const AFTER_TYPE = 380
const PRESS = 950
const BUILD = 1150
const SPIN = 1100
const HOLD = 3000

type Seg = { text: string; field: number }

/* The sentence as runs of plain words and field phrases, in order. */
function segments(ex: DescribeExample): Seg[] {
  const marks = ex.fields
    .map((f, k) => ({ k, at: ex.sentence.indexOf(f.phrase), len: f.phrase.length }))
    .filter((m) => m.at >= 0)
    .sort((a, b) => a.at - b.at)
  const out: Seg[] = []
  let pos = 0
  for (const m of marks) {
    if (m.at < pos) continue
    if (m.at > pos) out.push({ text: ex.sentence.slice(pos, m.at), field: -1 })
    out.push({ text: ex.sentence.slice(m.at, m.at + m.len), field: m.k })
    pos = m.at + m.len
  }
  if (pos < ex.sentence.length) out.push({ text: ex.sentence.slice(pos), field: -1 })
  return out
}

function useLive<T extends Element>() {
  const ref = useRef<T>(null)
  const [on, setOn] = useState(false)
  const [motion, setMotion] = useState(false)
  useEffect(() => {
    setMotion(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, live: on && motion }
}

export function DescribeJob({ examples = describe.examples, chrome = true, className = '' }: { examples?: DescribeExample[]; chrome?: boolean; className?: string }) {
  const id = useId()
  const { ref, live } = useLive<HTMLDivElement>()
  const [i, setI] = useState(0)
  const [touring, setTouring] = useState(true)
  const [run, setRun] = useState(0)
  const ex = examples[i]
  const full = ex.sentence.length
  const [typed, setTyped] = useState(full)
  const [phase, setPhase] = useState<Phase>('ready')
  const segs = useMemo(() => segments(ex), [ex])

  /* The story: type, press, build, ready, then on to the next example while touring. Off screen it rests whole. */
  useEffect(() => {
    if (!live) {
      setTyped(full)
      setPhase('ready')
      return
    }
    const timers: number[] = []
    const at = (ms: number, f: () => void) => timers.push(window.setTimeout(f, ms))
    setTyped(0)
    setPhase('type')
    let n = 0
    let typing = 0
    at(START, () => {
      typing = window.setInterval(() => {
        n += 1
        setTyped(n)
        if (n >= full) window.clearInterval(typing)
      }, CHAR)
    })
    const typedAt = START + full * CHAR
    at(typedAt + AFTER_TYPE, () => setPhase('press'))
    at(typedAt + AFTER_TYPE + PRESS, () => setPhase('build'))
    at(typedAt + AFTER_TYPE + PRESS + BUILD, () => setPhase('spin'))
    at(typedAt + AFTER_TYPE + PRESS + BUILD + SPIN, () => setPhase('ready'))
    if (touring && examples.length > 1) at(typedAt + AFTER_TYPE + PRESS + BUILD + SPIN + HOLD, () => setI((x) => (x + 1) % examples.length))
    return () => {
      window.clearInterval(typing)
      timers.forEach((t) => window.clearTimeout(t))
    }
  }, [live, i, run, touring, full, examples.length])

  const pick = (k: number) => {
    setTouring(false)
    setI(k)
    setRun((r) => r + 1)
  }

  const tour = touring && live && examples.length > 1 ? START + full * CHAR + AFTER_TYPE + PRESS + BUILD + SPIN + HOLD : 0
  let shown = 0
  return (
    <div ref={ref} className={`dj ${className}`} data-phase={phase}>
      {examples.length > 1 && (
        <div className="dj__tabs" role="group" aria-label={describe.tabsLabel}>
          <span className="dj__tabs-k" aria-hidden="true">
            {describe.tabsLabel}
          </span>
          <span className="dj__tabs-row">
            {examples.map((x, k) => (
              <button key={x.tab} type="button" className="dj__tab" aria-pressed={k === i} aria-controls={id} onClick={() => pick(k)}>
                {x.tab}
                {tour > 0 && k === i && <i className="dj__tab-prog" key={`${k}-${run}`} aria-hidden="true" style={{ ['--tour' as string]: `${tour}ms` } as CSSProperties} />}
              </button>
            ))}
          </span>
        </div>
      )}
      <div className={'dj__win' + (chrome ? '' : ' dj__win--bare')} id={id} role="group" aria-label={`${ex.sentence} ${ex.name}, ${describe.ready}.`}>
        {chrome && (
          <div className="dj__bar" aria-hidden="true">
            <span className="dj__dots">
              <i />
              <i />
              <i />
            </span>
            <span className="dj__crumb">
              <b>{describe.crumb[0]}</b>
              <span>/</span>
              {phase === 'type' || phase === 'press' ? describe.crumb[1] : ex.name}
            </span>
          </div>
        )}
        <div className="dj__body" aria-hidden="true">
          <p className="dj__k">{describe.prompt}</p>
          <p className="dj__box">
            {segs.map((sg, k) => {
              const from = shown
              shown += sg.text.length
              const vis = sg.text.slice(0, Math.max(0, Math.min(sg.text.length, typed - from)))
              if (!vis) return null
              return sg.field >= 0 ? (
                <mark key={k} className="dj__phrase" style={{ ['--f' as string]: sg.field } as CSSProperties}>
                  {vis}
                </mark>
              ) : (
                <span key={k}>{vis}</span>
              )
            })}
            {phase === 'type' && <i className="dj__caret" />}
          </p>
          <div className="dj__act">
            <span className="dj__btn">{describe.button}</span>
            <svg className="dj__ptr" viewBox="0 0 16 16">
              <path d="M3 1.5v12.2l3.1-3 2.05 4.6 2.15-.95-2-4.5h4.3Z" />
            </svg>
            <i className="dj__ring" />
          </div>
          <dl className="dj__fields">
            {ex.fields.map((f, k) => (
              <div key={f.label} style={{ ['--f' as string]: k } as CSSProperties}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="dj__agent">
            <span className="dj__agent-k">{describe.agent}</span>
            {ex.pieces.map((pc, k) => (
              <span className="dj__piece" key={pc} style={{ ['--p' as string]: k } as CSSProperties}>
                {pc}
              </span>
            ))}
          </p>
          <p className="dj__ready">
            <i />
            <b>{ex.name}</b>
            <span>{describe.ready}</span>
          </p>
          <p className="dj__result">
            <span className="dj__where">{ex.result.where}</span>
            <span className="dj__at">{ex.result.at}</span>
            <span className="dj__text">{ex.result.text}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
