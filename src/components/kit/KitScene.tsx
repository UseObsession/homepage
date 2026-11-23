import { useEffect, useState } from 'react'
import type { KitPage } from '../../content/kits/types'
import { useInView } from '../../hooks/useReveal'
import { PersonaGlyph } from '../persona/icons'
import './KitScene.css'

/* The signature picture of every type of blueprint, team and use case page (pages/Kit.tsx SceneHero), drawn as a window of
   the product in the app screens' language (screens/templates.tsx: the dots, the breadcrumb, the search, a side panel and
   the main panel). It plays in two beats, to the camera bar (premium-illustration; _research/illus/CAMERA.md):
   1. the job's 4 steps light in turn while the agent's event log fills row by row, the status pips filling with it;
   2. the camera leans in on the row the scene is about (the one with a tone), the other rows dim, and a hairline note
      says the point in 8 words or fewer.
   Beside the log's title, the fleet line puts the one agent in the deployment around it (60 agents · 2,400 leads this week), so the
   reader sees the moment up close and the scale behind it (_research/illus/AUDIT_23nov.md).
   Replay runs it again. Under prefers-reduced-motion, and in the prerendered HTML, it is the finished second beat: every
   row shown, the finding lit, the note drawn. Rows hide for their entrance only after the page's script arms it.
   23 Nov 2026 (Seun: "more like the blueprint one with the motion and zoom ... auto restart after they finish"): the camera
   now follows each beat as the blueprint consoles' does. As a row lands the log leans in on it, the step that made it
   lights beside it and the rows before it step back; then the strongest lean-in holds on the finding with its note,
   pulls back, and the story plays again from the start, for as long as the window is on screen. */

type Ui = { log: string; example: string; real: string; company: string; search: string; events: string; delivered: string; miss: string; replay: string }

const REDUCE = '(prefers-reduced-motion: reduce)'
/* The timeline: the first row lands after START, one every STEP; the finding holds for HOLD, then the story plays again. */
const START = 500
const STEP = 900
const HOLD = 4200
const familyOf = (kind: string) => kind.split('.')[0]

/* Motion allowed (false on the server and under reduced motion). */
function useMotion() {
  const [ok, setOk] = useState(false)
  useEffect(() => setOk(!window.matchMedia(REDUCE).matches), [])
  return ok
}

export function KitScene({ scene, ui, kit }: { scene: KitPage['scene']; ui: Ui; kit: string }) {
  const motion = useMotion()
  const { ref, inView } = useInView<HTMLElement>(0.25)
  const [seen, setSeen] = useState(false)
  const [run, setRun] = useState(0)
  const [ring, setRing] = useState(0)
  const [found, setFound] = useState(true)
  /* The row the camera is on while the log fills; null at rest and on the finding. */
  const [beat, setBeat] = useState<number | null>(null)
  /* On screen now (the story loops only while it is): its own observer, since useInView stops at the first sighting. */
  const [onScreen, setOnScreen] = useState(false)
  useEffect(() => {
    if (inView) setSeen(true)
  }, [inView])
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [ref])

  const n = scene.rows.length
  const toned = scene.rows.map((r, i) => (r.tone ? i : -1)).filter((i) => i >= 0)
  const at = toned.length ? toned[toned.length - 1] : n - 1
  const tone = scene.rows[at]?.tone ?? 'ok'
  const missed = scene.rows.some((r) => r.tone === 'fail')
  const rowsMs = START + n * STEP
  /* The step that made row i, when there are more or fewer steps than rows. */
  const stepOf = (i: number) => Math.min(scene.steps.length - 1, Math.floor((i * scene.steps.length) / n))

  /* Beat 1, then beat 2, then again: each row lands with the camera on it, the camera finds the row the scene is about
     and holds, then the story starts over. Off screen it rests on the finished picture and starts over when it returns. */
  useEffect(() => {
    if (!motion || !seen || !onScreen) return
    const ts: number[] = []
    setFound(false)
    setBeat(null)
    for (let i = 0; i < n; i++) ts.push(window.setTimeout(() => setBeat(i), START + i * STEP + 120))
    ts.push(
      window.setTimeout(() => {
        setBeat(null)
        setFound(true)
      }, rowsMs),
    )
    ts.push(window.setTimeout(() => setRun((r) => r + 1), rowsMs + HOLD))
    return () => {
      ts.forEach((t) => window.clearTimeout(t))
      setBeat(null)
      setFound(true)
    }
  }, [motion, seen, onScreen, run, rowsMs, n])

  const playing = motion && seen
  const replay = () => {
    setRun((r) => r + 1)
    setRing((r) => r + 1)
  }

  return (
    <figure
      ref={ref}
      className={'k-scene' + (playing ? ' is-in' : '') + (found ? ' is-found' : '')}
      data-armed={motion && !seen ? '' : undefined}
      data-beat={beat === null ? undefined : beat}
      data-tone={tone}
      style={{ ['--n' as string]: n, ['--f' as string]: at, ['--b' as string]: beat ?? at, ['--step' as string]: `${STEP}ms`, ['--start' as string]: `${START}ms` }}
    >
      <div className="k-win">
        <div className="k-win__bar" aria-hidden="true">
          <span className="k-win__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="k-win__crumb">
            <b>{ui.company}</b>
            <span>/</span>
            {kit}
          </span>
          <span className="k-win__search">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="7" cy="7" r="4.25" />
              <path d="M10.2 10.2 13 13" />
            </svg>
            {ui.search}
            <span className="k-win__kbd">⌘K</span>
          </span>
        </div>

        <div className="k-win__body">
          <ol className="k-win__side" key={`s-${run}`}>
            {scene.steps.map((s, i) => (
              <li className={'k-win__step' + (beat !== null && stepOf(beat) === i ? ' is-on' : '')} key={s.label} style={{ ['--i' as string]: i }}>
                <span className="k-win__ic">
                  <PersonaGlyph name={s.icon} />
                </span>
                <span className="k-win__step-text">
                  <span className="k-win__num">{String(i + 1).padStart(2, '0')}</span>
                  {s.label}
                </span>
              </li>
            ))}
          </ol>

          <div className="k-win__main">
            <div className="k-win__head">
              <span className="k-win__who">
                <span className="k-win__live" aria-hidden="true" />
                {scene.who}
              </span>
              <span className={'k-win__tag' + (scene.real ? ' k-win__tag--real' : '')}>{scene.real ? ui.real : ui.example}</span>
            </div>
            <div className="k-win__titlebar">
              <p className="k-win__title">{ui.log}</p>
              <p className="k-win__fleet">
                <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  <rect x="2.5" y="2.5" width="4.5" height="4.5" rx="1" />
                  <rect x="9" y="2.5" width="4.5" height="4.5" rx="1" />
                  <rect x="2.5" y="9" width="4.5" height="4.5" rx="1" />
                  <rect x="9" y="9" width="4.5" height="4.5" rx="1" />
                </svg>
                {scene.fleet}
              </p>
            </div>
            <ol className="k-win__rows" key={`r-${run}`}>
              {scene.rows.map((r, i) => (
                <li
                  className={'k-win__row' + (r.tone ? ` k-win__row--${r.tone}` : '') + (i === at ? ' is-found' : '') + (i === beat ? ' is-beat' : '')}
                  key={`${r.at}-${r.kind}-${i}`}
                  style={{ ['--i' as string]: i }}
                >
                  <span className="k-win__at">{r.at}</span>
                  <span className="k-win__kind" data-family={familyOf(r.kind)}>
                    {r.kind}
                  </span>
                  <span className="k-win__text">{r.text}</span>
                </li>
              ))}
            </ol>
            <p className="k-win__note">
              <i aria-hidden="true" />
              <span>{scene.note}</span>
            </p>
            <div className="k-win__status">
              <span className="k-win__state" aria-hidden="true" />
              <span className="k-win__status-text">
                {n} {ui.events} · {missed ? ui.miss : ui.delivered}
              </span>
              <span className="k-win__pips" key={`p-${run}`} aria-hidden="true">
                {scene.rows.map((_, i) => (
                  <i key={i} style={{ ['--i' as string]: i }} />
                ))}
              </span>
              {motion && (
                <button type="button" className="k-win__replay" onClick={replay} aria-label={`${ui.replay}: ${ui.log}`}>
                  <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                    <path d="M3.2 8a4.8 4.8 0 1 0 1.5-3.5" />
                    <path d="M3 2.6v2.6h2.6" />
                  </svg>
                  {ui.replay}
                  {ring > 0 && <i className="k-ring" key={ring} aria-hidden="true" />}
                </button>
              )}
              {playing && !found && <i className="k-win__prog" key={`g-${run}`} style={{ ['--run' as string]: `${rowsMs}ms` }} aria-hidden="true" />}
            </div>
          </div>
        </div>
      </div>
      <figcaption className="k-scene__cap">{scene.caption}</figcaption>
    </figure>
  )
}
