import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { catalog } from '../../content/catalog'
import type { NoCodePage } from '../../content/noCode'
import { useInView } from '../../hooks/useReveal'
import './NoCodeScale.css'

/* Who runs it, by size, biggest first (23 Nov 2026, perception: the biggest reader sees their stakes, the smallest sees
   themselves): enterprises, mid-market companies, small and multi-location businesses, agencies and a team of one. Each
   row: the size and the people involved, a bar for the agents it runs (its width drawn on a log scale, so a team of
   one still shows), two of its jobs linking their blueprints, and what it's measured in. The bars grow once when the
   ladder enters the view; nothing moves under prefers-reduced-motion. Words: content/noCode.ts (scale). */
const nameOf = Object.fromEntries(catalog.recipes.map((r) => [r.slug, r.name]))

export function NoCodeScale({ scale }: { scale: NoCodePage['scale'] }) {
  const { ref, inView } = useInView<HTMLOListElement>(0.15)
  const [armed, setArmed] = useState(false)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (inView) setSeen(true)
    else if (!seen) setArmed(true)
  }, [inView, seen])
  return (
    <figure className="nc-scale">
      <ol ref={ref} className={'nc-scale__rows' + (seen ? ' is-in' : '')} data-armed={armed ? '' : undefined}>
        {scale.rows.map((r, i) => (
          <li key={r.id} className="nc-scale__row" data-reader={r.reader} style={{ ['--i' as string]: i, ['--w' as string]: r.weight }}>
            <div className="nc-scale__who">
              <p className="nc-scale__name">{r.name}</p>
              <p className="nc-scale__size">{r.size}</p>
              <p className="nc-scale__people">{r.who}</p>
            </div>
            <div className="nc-scale__agents">
              <span className="nc-scale__label">{scale.label}</span>
              <span className="nc-scale__track" aria-hidden="true">
                <i className="nc-scale__bar" />
              </span>
              <b>{r.agents}</b>
            </div>
            <ul className="nc-scale__jobs">
              {r.jobs.map((j) => (
                <li key={j.slug + j.line}>
                  <Link className="nc-scale__job" to={`/blueprints/${j.slug}`}>
                    <span>{j.line}</span>
                    <span className="nc-scale__bp">{nameOf[j.slug]}</span>
                  </Link>
                </li>
              ))}
              <li className="nc-scale__kpis">
                <span>{scale.kpisLabel}</span> {r.kpis}
              </li>
            </ul>
          </li>
        ))}
      </ol>
      <figcaption className="nc-scale__cap">{scale.caption}</figcaption>
    </figure>
  )
}
