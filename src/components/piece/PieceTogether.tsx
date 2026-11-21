import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { PiecePage } from '../../content/pieces/types'
import type { PieceId } from '../../content/prices'
import '../persona/blueprint.css'
import './PieceTogether.css'

/* How the piece works with the other pieces (#pieces): the claim and its line, then 1 link per other piece, each opening
   on a short rule, its name with an arrow and what the 2 do together (3 across, 2 on a tablet, 1 on a phone). Each name
   and address comes from that piece's own page, so a link never drifts from the page it opens. */
export function PieceTogether({
  together,
  named,
  label,
  id,
}: {
  together: PiecePage['together']
  /* Every piece's name and address, by id. */
  named: Record<PieceId, { name: string; path: string }>
  label: string
  id?: string
}) {
  const hid = useId()
  return (
    <section className="s-section s-pk-tog" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {together.heading}
          </h2>
          {together.line && <p className="s-bp-line">{together.line}</p>}
        </div>
        <ul className="s-pk-tog__list" aria-label={label}>
          {together.items.map((item) => {
            const to = named[item.piece]
            return (
              <li key={item.piece}>
                <Link className="s-pk-tog__link" to={to.path}>
                  <span className="s-pk-tog__name">
                    {to.name}
                    <svg className="s-pk-tog__arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                  <span className="s-pk-tog__line">{item.line}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
