import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './LinkGroups.css'

/* Rows of links under a name, the Recipes index's pattern (pages/Recipes): 1 group per hairline, its name and line on
   the left, its pages as quiet link rows on the right (a name with its arrow, 1 line, and an optional quiet foot such as
   a date). Used by the Resources hub, the Use cases index and the Blog. No boxes: the hover layer and the arrow say
   it's a link. */

export type LinkRow = { label: string; to: string; line?: string; foot?: string; kicker?: string }
export type LinkGroupRows = { id: string; name: string; line?: string; rows: LinkRow[]; after?: ReactNode }

/* A numeral never ends a line apart from its word. */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1 ')

function Arrow() {
  return (
    <svg className="s-lg-row__arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

export function Row({ row }: { row: LinkRow }) {
  return (
    <Link className="s-lg-row" to={row.to}>
      {row.kicker && <span className="s-lg-row__kicker">{row.kicker}</span>}
      <span className="s-lg-row__name">
        {row.label}
        <Arrow />
      </span>
      {row.line && <span className="s-lg-row__line">{tie(row.line)}</span>}
      {row.foot && <span className="s-lg-row__foot">{row.foot}</span>}
    </Link>
  )
}

/* `as` is the groups' heading level: h2 where the groups are the page's sections, h3 under a section's own h2 (a worked
   example's other recipes), so the outline never skips a level. */
export function LinkGroups({
  groups,
  single = false,
  className = '',
  as: Name = 'h2',
}: {
  groups: LinkGroupRows[]
  single?: boolean
  className?: string
  as?: 'h2' | 'h3'
}) {
  return (
    <div className={`s-wrap s-lg ${className}`}>
      {groups.map((g) => (
        <section className="s-lg-group" id={g.id} key={g.id} aria-labelledby={`${g.id}-h`}>
          <header className="s-lg-group__head">
            <Name className="s-lg-group__name" id={`${g.id}-h`}>
              {g.name}
            </Name>
            {g.line && <p className="s-lg-group__line">{tie(g.line)}</p>}
          </header>
          <div className="s-lg-group__body">
            <ul className={'s-lg-group__list' + (single || g.rows.length < 2 ? ' is-single' : '')}>
              {g.rows.map((r) => (
                <li key={r.to}>
                  <Row row={r} />
                </li>
              ))}
            </ul>
            {g.after}
          </div>
        </section>
      ))}
    </div>
  )
}
