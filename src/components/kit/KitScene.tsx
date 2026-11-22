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
   row shown, the finding lit, the note drawn. Rows hide for their entrance only after the page's script arms it. */

type Ui = { log: string; example: string; real: string; company: string; search: string; events: string; delivered: string; miss: string; replay: string }

const REDUCE = '(prefers-reduced-motion: reduce)'
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
  useEffect(() => {
    if (inView) setSeen(true)
  }, [inView])

  const n = scene.rows.length
  const toned = scene.rows.map((r, i) => (r.tone ? i : -1)).filter((i) => i >= 0)
  const at = toned.length ? toned[toned.length - 1] : n - 1
  const tone = scene.rows[at]?.tone ?? 'ok'
  const missed = scene.rows.some((r) => r.tone === 'fail')
  const rowsMs = 600 + n * 320 + 450

  /* Beat 1, then beat 2: the rows land, then the camera finds the row the scene is about. */
  useEffect(() => {
    if (!motion || !seen) return
    setFound(false)
    const t = window.setTimeout(() => setFound(true), rowsMs)
    return () => window.clearTimeout(t)
  }, [motion, seen, run, rowsMs])

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
      data-tone={tone}
      style={{ ['--n' as string]: n, ['--f' as string]: at }}
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
              <li className="k-win__step" key={s.label} style={{ ['--i' as string]: i }}>
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
                  className={'k-win__row' + (r.tone ? ` k-win__row--${r.tone}` : '') + (i === at ? ' is-found' : '')}
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
