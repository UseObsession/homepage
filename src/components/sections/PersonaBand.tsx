import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { Audiences } from '../../content/types'
import './PersonaBand.css'

/* A numeral never ends a line apart from its word ("0 reminders", "48 hours"). */
const tie = (s: string) => s.replace(/(\d) /g, '$1 ')

/* Who it's for (Home, right under the hero's console): the fork for readers who know who they are. James's persona band
   (2 Oct) rebuilt on the design system: every reader side by side on 1 band cut on the diagonal, each panel 1 link to
   its own page, with its number, name, line, the ways in as quiet tags, and an arrow. Monochrome: surfaces, hairlines
   and ink only. On hover and keyboard focus the panel lifts and brightens and its arrow moves (PersonaBand.css).
   Below 1080px the panels stack as full-width rows without the cut.
   A link reads as the reader's name, with its line and ways in as the description; the number and arrow are hidden. */
export function PersonaBand({ audiences, id = 'for', className = '' }: { audiences: Audiences; id?: string; className?: string }) {
  const base = useId().replace(/[^a-zA-Z0-9_-]/g, '') + id

  if (!audiences.items.length) return null

  return (
    <section className={`s-section s-pb ${className}`} id={id} aria-labelledby={`${base}-h`}>
      <div className="s-wrap">
        <div className="s-head s-head--wide">
          <h2 className="ob-type-h2" id={`${base}-h`}>
            {tie(audiences.heading)}
          </h2>
        </div>

        <ul className="s-pb__list">
          {audiences.items.map((a, i) => {
            const k = `${base}-${i}`
            const ways = a.ways ?? []
            return (
              <li className="s-pb__cell" key={a.audience}>
                <Link
                  className="s-pb__item"
                  to={a.to}
                  aria-labelledby={`${k}-n`}
                  aria-describedby={ways.length ? `${k}-l ${k}-w` : `${k}-l`}
                >
                  <span className="s-pb__name" id={`${k}-n`}>
                    {a.name}
                  </span>
                  <span className="s-pb__line" id={`${k}-l`}>
                    {tie(a.line)}
                  </span>
                  {ways.length > 0 && (
                    <span className="s-sr" id={`${k}-w`}>
                      {ways.join(', ')}
                    </span>
                  )}
                  {/* What only the eye needs comes last in the source (the grid places it), so the words read first. */}
                  {ways.length > 0 && (
                    <span className="s-pb__ways" aria-hidden="true">
                      {ways.map((w) => (
                        <span className="ob-tag s-pb__way" key={w}>
                          {w}
                        </span>
                      ))}
                    </span>
                  )}
                  <span className="s-pb__num ob-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="s-pb__go" aria-hidden="true">
                    <svg viewBox="0 0 16 16" focusable="false">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </Link>
                {/* The soft shadow the panel lifts off on paper; outside the link so its cut doesn't clip it. */}
                <span className="s-pb__shade" aria-hidden="true" />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
