import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Audiences as AudiencesContent } from '../../content/types'
import { AppScreen } from '../AppScreen'
import { TabRail } from './UseCases'
import './Audiences.css'

/* A numeral never ends a line apart from its word ("0 reminders", "48 hours"). */
const tie = (s: string) => s.replace(/(\d) /g, '$1\u00a0')

/* Who it's for (Home, docs/REBUILD.md 1b): the reader picks who they are and sees their line, their screen and the
   way to their own page. The same tab row as the use cases (TabRail: keyboard and ARIA complete, 1 sliding bar,
   sideways scroll on phones). Every reader's panel is in the page's HTML; side by side, the hidden ones keep their
   place, so the section never changes height. Agencies' screen is drawn for an agency; every other reader's for their company. */
export function Audiences({
  audiences,
  initial = 0,
  id = 'for',
  className = '',
}: {
  audiences: AudiencesContent
  initial?: number
  id?: string
  className?: string
}) {
  const base = useId().replace(/[^a-zA-Z0-9_-]/g, '') + id
  const [index, setIndex] = useState(initial)
  const [picks, setPicks] = useState(0)

  if (!audiences.items.length) return null

  return (
    <section className={`s-section s-aud ${className}`} id={id} aria-labelledby={`${base}-h`}>
      <div className="s-wrap">
        <div className="s-head s-head--wide">
          <h2 className="ob-type-h2" id={`${base}-h`}>
            {tie(audiences.heading)}
          </h2>
        </div>

        <TabRail
          base={base}
          labelledBy={`${base}-h`}
          tabs={audiences.items.map((a) => a.name)}
          index={index}
          onPick={(i) => {
            setIndex(i)
            setPicks((p) => p + 1)
          }}
        />

        <div className="s-aud__panels">
          {audiences.items.map((a, i) => {
            const on = i === index
            return (
              <div
                key={a.audience}
                className={'s-aud__panel' + (on && picks > 0 ? ' ob-anim-rise' : '')}
                role="tabpanel"
                id={`${base}-panel-${i}`}
                aria-labelledby={`${base}-tab-${i}`}
                hidden={!on}
                /* Hidden from sight until picked, but part of the page's words (llms-full.txt, scripts/prerender.mjs). */
                data-llms="keep"
              >
                <div className="s-aud__copy">
                  <h3 className="s-aud__line">{tie(a.line)}</h3>
                  <Link className="ob-btn ob-btn--secondary ob-btn--sm s-aud__to" to={a.to}>
                    <span className="ob-btn-label">{a.name}</span>
                    <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                </div>
                <div className="s-aud__screen">
                  <AppScreen
                    name={a.screen}
                    workspace={a.audience === 'agencies' ? 'agency' : 'company'}
                    playKey={on && picks > 0 ? picks : undefined}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
