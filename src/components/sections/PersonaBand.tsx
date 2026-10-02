import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { Audiences } from '../../content/types'
import './PersonaBand.css'

/* A numeral never ends a line apart from its word ("0 reminders", "48 hours"). */
const tie = (s: string) => s.replace(/(\d) /g, '$1 ')

/* Who it's for (Home, right under the hero's console): the fork for readers who know who they are. James's persona band
   (2 Oct) rebuilt on the design system: every reader on 1 band cut on the diagonal, each panel 1 link to its own page.
   A panel is a poster: the reader's key (the brand square in the reader's colour) at the top left and the arrow at the
   top right, then at its foot the reader's name, its line, and the 2 recipes or ways in that reader starts with. The
   band is 1 object (1 outer hairline, 1 hairline seam between panels); each face carries a soft glow of its reader's
   hue, which rises when the panel is lit (PersonaBand.css, the reader accents of _research/colour/COLOUR.md P1).
   Below 1200px the rows stack, still cut on the slant.
   A link reads as the reader's name, with its line and picks as the description; the arrow is hidden. */
export function PersonaBand({ audiences, id = 'for', className }: { audiences: Audiences; id?: string; className?: string }) {
  const base = useId().replace(/[^a-zA-Z0-9_-]/g, '') + id

  if (!audiences.items.length) return null

  return (
    <section className={['s-section', 's-pb', className].filter(Boolean).join(' ')} id={id} aria-labelledby={`${base}-h`}>
      <div className="s-wrap">
        <div className="s-head s-head--wide">
          <h2 className="ob-type-h2" id={`${base}-h`}>
            {tie(audiences.heading)}
          </h2>
        </div>

        <ul className="s-pb__list">
          {audiences.items.map((a, i) => {
            const k = `${base}-${i}`
            const picks = a.picks ?? []
            return (
              <li className="s-pb__cell" key={a.audience}>
                <Link
                  className="s-pb__item"
                  data-reader={a.audience}
                  to={a.to}
                  aria-labelledby={`${k}-n`}
                  aria-describedby={picks.length ? `${k}-l ${k}-p` : `${k}-l`}
                >
                  <span className="s-pb__name" id={`${k}-n`}>
                    <span className="s-pb__key ob-sq" aria-hidden="true" />
                    {a.name}
                  </span>
                  <span className="s-pb__line" id={`${k}-l`}>
                    {tie(a.line)}
                  </span>
                  {picks.length > 0 && (
                    <span className="s-pb__picks" id={`${k}-p`}>
                      {picks.map((p, pi) => (
                        <span className="s-pb__pick" key={p}>
                          {p}
                          {/* Read aloud as a list; the eye gets 1 pick per line instead of the comma. */}
                          {pi < picks.length - 1 && <span className="s-sr">, </span>}
                        </span>
                      ))}
                    </span>
                  )}
                  <span className="s-pb__go ob-card-go" aria-hidden="true">
                    <svg className="ob-glyph" viewBox="0 0 16 16" focusable="false">
                      <path d="M6.25 3.75L10.5 8l-4.25 4.25" />
                    </svg>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
