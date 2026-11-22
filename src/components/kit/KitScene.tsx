import { useEffect, useState } from 'react'
import type { KitPage } from '../../content/kits/types'
import { useInView } from '../../hooks/useReveal'
import { PersonaGlyph } from '../persona/icons'
import './KitScene.css'

/* A kit's signature picture (pages/Kit.tsx, under the hero), drawn as a window of the product in the app screens' language
   (screens/templates.tsx: the dots, the breadcrumb, the search, a side panel and the main panel): the kit's 4 steps in the
   side panel, lighting in turn; 1 agent's event log in the main panel, its rows arriving in order; a status bar whose dots
   fill as they land. Words: content/kits (scene). Motion plays once when the window enters the view (.is-in), then only
   the steps keep cycling; under prefers-reduced-motion nothing moves and every row shows. The window is whole in the
   prerendered HTML: rows hide only after the page's script arms it (data-armed). */

type Ui = { log: string; example: string; real: string; company: string; search: string; events: string; delivered: string; miss: string }

const familyOf = (kind: string) => kind.split('.')[0]

export function KitScene({ scene, ui, kit }: { scene: KitPage['scene']; ui: Ui; kit: string }) {
  const { ref, inView } = useInView<HTMLElement>(0.25)
  const [armed, setArmed] = useState(false)
  useEffect(() => {
    if (!inView) setArmed(true)
  }, [inView])
  const n = scene.rows.length
  return (
    <figure ref={ref} className={'k-scene' + (inView ? ' is-in' : '')} data-armed={armed ? '' : undefined} style={{ ['--n' as string]: n }}>
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
          <ol className="k-win__side">
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
            <p className="k-win__title">{ui.log}</p>
            <ol className="k-win__rows">
              {scene.rows.map((r, i) => (
                <li className={'k-win__row' + (r.tone ? ` k-win__row--${r.tone}` : '')} key={`${r.at}-${r.kind}-${i}`} style={{ ['--i' as string]: i }}>
                  <span className="k-win__at">{r.at}</span>
                  <span className="k-win__kind" data-family={familyOf(r.kind)}>
                    {r.kind}
                  </span>
                  <span className="k-win__text">{r.text}</span>
                </li>
              ))}
            </ol>
            <div className="k-win__status" aria-hidden="true">
              <span className="k-win__spin" />
              <span className="k-win__status-text">
                {n} {ui.events} · {scene.rows[n - 1]?.tone === 'fail' ? ui.miss : ui.delivered}
              </span>
              <span className="k-win__pips">
                {scene.rows.map((_, i) => (
                  <i key={i} style={{ ['--i' as string]: i }} />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="k-scene__cap">{scene.caption}</figcaption>
    </figure>
  )
}
