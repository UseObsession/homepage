import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { Rules as RulesContent } from '../../content/types'
import { Mark } from '../Logo'
import './Rules.css'

/* A numeral never ends a line apart from its word ("1 email"). */
const tie = (s: string) => s.replace(/(\d) /g, '$1 ')

/* The rules every run follows (James's "Built to behave.", docs/REBUILD.md 1d), rebuilt on the design system: the trust
   beat before the questions. The claim and its line on the left, the rules on the right, on the page's 5 to 7 split, so
   the questions under it read as the same chapter. Each rule is a short claim with 1 line under it, on its own hairline:
   no boxes, no bullet squares, no eyebrow. The ring mark sits only on the link to /agents, the page every company an
   agent meets can read. Nothing moves. Below 1080px the claim sits over the rules; on a phone they stack in 1 column. */
export function Rules({ rules, id, className }: { rules: RulesContent; id?: string; className?: string }) {
  const base = useId()
  if (!rules.items.length) return null

  return (
    <section id={id} className={'s-section s-rules' + (className ? ' ' + className : '')} data-tone="alt" aria-labelledby={`${base}-h`}>
      <div className="s-wrap s-rules__grid">
        <div className="s-rules__head">
          <h2 id={`${base}-h`} className="ob-type-h2 s-rules__h">
            {tie(rules.heading)}
          </h2>
          {rules.line && <p className="ob-type-body-lg s-rules__line">{tie(rules.line)}</p>}
          {rules.link && (
            <Link className="ob-btn ob-btn--link s-rules__link" to={rules.link.to}>
              <Mark size={16} />
              <span className="ob-btn-label">{rules.link.label}</span>
              <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M3.5 8h9M9 4.5 12.5 8 9 11.5" />
              </svg>
            </Link>
          )}
        </div>

        <ul className="s-rules__list">
          {rules.items.map((r) => (
            <li key={r.title} className="s-rules__item">
              <h3 className="s-rules__title">{tie(r.title)}</h3>
              <p className="s-rules__text">{tie(r.line)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
