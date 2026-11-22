import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import type { HomeFit as HomeFitWords } from '../../content/types'
import { useInView } from '../../hooks/useReveal'
import './HomeFit.css'

/* Home's "how it fits" (#fit, 22 Nov 2026): the 4 stages of Obsession left to right (pieces, the persona, blueprints,
   kits), joined by connectors a light travels along, over the event log every stage writes to. Drawn in HTML on one grid
   so every word stays crisp on a phone, where the stages stand in a column and the connectors point down. It plays once
   when it enters the view: the stages rise in order, the connectors draw, the log's rows land; then only the light keeps
   moving. Under prefers-reduced-motion nothing moves and everything shows, and nothing hides before the page's script
   arms the figure (data-armed). Words: content/pages/home.ts (homeFit). */
export function HomeFit({ fit, id }: { fit: HomeFitWords; id?: string }) {
  const hid = useId()
  const { ref, inView } = useInView<HTMLDivElement>(0.2)
  const [armed, setArmed] = useState(false)
  useEffect(() => {
    if (!inView) setArmed(true)
  }, [inView])
  return (
    <section className="s-section h-fit" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head h-fit__head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {fit.heading}
          </h2>
          <p className="s-bp-line">{fit.line}</p>
        </div>

        <figure className="h-fit__fig">
          <div ref={ref} className={'h-fit__map' + (inView ? ' is-in' : '')} data-armed={armed ? '' : undefined}>
            <ol className="h-fit__stages">
              {fit.stages.map((st, i) => (
                <li className="h-fit__stage" key={st.name} style={{ ['--i' as string]: i }}>
                  <span className="h-fit__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="h-fit__name">{st.name}</span>
                  <span className="h-fit__line">{st.line}</span>
                  <span className="h-fit__chips">
                    {st.chips.map((c) =>
                      c.to ? (
                        <Link className="h-fit__chip" to={c.to} key={c.label}>
                          {c.label}
                        </Link>
                      ) : (
                        <span className="h-fit__chip h-fit__chip--plain" key={c.label}>
                          {c.label}
                        </span>
                      ),
                    )}
                  </span>
                  {i < fit.stages.length - 1 && (
                    <span className="h-fit__link" aria-hidden="true">
                      <i />
                    </span>
                  )}
                </li>
              ))}
            </ol>

            <div className="h-fit__log">
              <span className="h-fit__log-label">
                <span className="h-fit__live" aria-hidden="true" />
                {fit.log.label}
              </span>
              <ol className="h-fit__rows">
                {fit.log.rows.map((r, i) => (
                  <li className="h-fit__row" key={`${r.kind}-${i}`} style={{ ['--i' as string]: i }}>
                    <span className="h-fit__at">{r.at}</span>
                    <span className="h-fit__kind">{r.kind}</span>
                    <span className="h-fit__text">{r.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <figcaption className="h-fit__cap">{fit.caption}</figcaption>
        </figure>

        <div className="h-fit__doors">
          <Link className="ob-btn ob-btn--lg" to={fit.doors.dev.to}>
            <span className="ob-btn-label">{fit.doors.dev.label}</span>
          </Link>
          <Link className="ob-btn ob-btn--lg ob-btn--secondary" to={fit.doors.team.to}>
            <span className="ob-btn-label">{fit.doors.team.label}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
