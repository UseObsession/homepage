import { useEffect, useState } from 'react'
import type { NoCodePage } from '../../content/noCode'
import { useInView } from '../../hooks/useReveal'
import { PersonaGlyph } from '../persona/icons'
import './NoCodeLimits.css'

/* The no-code page's problem and answer (23 Nov 2026), right after the hero. Four jobs a team hands off, in one panel
   read left to right: the job, where an AI agent on its own stops (the piece it lacks), and the same job finished with
   Obsession (the piece that does it, and the result). When the panel enters the view, each row's finished state arrives
   in turn, so the eye follows the work from stopped to done; nothing moves under prefers-reduced-motion, and before the
   page's script runs every row shows both states. Words: content/noCode.ts (limits). */
export function NoCodeLimits({ limits }: { limits: NoCodePage['limits'] }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2)
  const [armed, setArmed] = useState(false)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (inView) setSeen(true)
    else if (!seen) setArmed(true)
  }, [inView, seen])
  return (
    <figure className="nc-lim">
      <div ref={ref} className={'nc-lim__panel' + (seen ? ' is-in' : '')} data-armed={armed ? '' : undefined} role="img" aria-label={limits.label}>
        <div className="nc-lim__head" aria-hidden="true">
          <span>{limits.cols.job}</span>
          <span>{limits.cols.alone}</span>
          <span>{limits.cols.with}</span>
        </div>
        <ol className="nc-lim__rows" aria-hidden="true">
          {limits.rows.map((r, i) => (
            <li key={r.job} className="nc-lim__row" style={{ ['--i' as string]: i }}>
              <p className="nc-lim__job">
                <span className="nc-lim__ic">
                  <PersonaGlyph name={r.icon} />
                </span>
                {r.job}
              </p>
              <p className="nc-lim__alone">
                <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" />
                  <path d="M5.5 7V5.5a2.5 2.5 0 0 1 5 0V7" />
                </svg>
                {r.alone}
              </p>
              <div className="nc-lim__with">
                <span className="nc-lim__piece">{r.piece}</span>
                <span className="nc-lim__result">
                  <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                    <path d="M3.5 8.5l3 3 6-7" />
                  </svg>
                  {r.result}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="nc-lim__cap">{limits.caption}</figcaption>
    </figure>
  )
}
