import { useId } from 'react'
import { Link } from 'react-router-dom'
import { PersonaGlyph } from '../persona/icons'
import { kitLinks } from '../../content/kitPaths'
import type { TeamChecks } from '../../content/teams/types'
import './AgencyChecks.css'

/* The checks a team runs today (23 Nov 2026, first on /agencies): cards in the use case cards' look, each with its type
   of blueprint, one line, a real finding where there is one and the blueprints that run it; under them, the two things a
   reader can open now. */
const kitOf = Object.fromEntries(kitLinks.map((k) => [k.id, k]))

export function TeamChecksSection({ checks }: { checks: TeamChecks }) {
  const hid = useId()
  return (
    <section className="s-section a-ck" id="checks" aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {checks.heading}
          </h2>
          <p className="s-bp-line">{checks.line}</p>
        </div>
        <ul className="a-ck__list">
          {checks.items.map((c) => {
            const k = kitOf[c.kit]
            return (
              <li className="t-use a-ck__card" key={c.name}>
                <Link className="t-use__kit" to={k.path}>
                  <span className="t-use__kit-ic" aria-hidden="true">
                    <PersonaGlyph name={k.icon} />
                  </span>
                  {k.name}
                </Link>
                <span className="t-use__name">{c.name}</span>
                <span className="t-use__line">{c.line}</span>
                {c.finding && (
                  <span className="a-ck__finding">
                    <i aria-hidden="true" />
                    {c.finding}
                  </span>
                )}
                <span className="t-use__runs">
                  {c.links.map((l) => (
                    <Link className="t-use__bp" to={l.to} key={l.to}>
                      {l.label}
                      <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </Link>
                  ))}
                </span>
              </li>
            )
          })}
        </ul>
        <p className="a-ck__see">
          {checks.see.map((s) => (
            <Link className="ob-btn ob-btn--link" to={s.to} key={s.to}>
              <span className="ob-btn-label">{s.label}</span>
              <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          ))}
        </p>
      </div>
    </section>
  )
}
