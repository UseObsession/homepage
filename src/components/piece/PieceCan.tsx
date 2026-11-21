import { useId } from 'react'
import type { PiecePage } from '../../content/pieces/types'
import '../persona/blueprint.css'
import './PieceCan.css'

/* What an agent can do with the piece (#features): the claim and its line, then a ruled grid of short items (3 across,
   2 on a tablet, 1 on a phone), the cells split by hairlines so it reads as 1 sheet, not separate cards. */
export function PieceCan({ can, id }: { can: PiecePage['can']; id?: string }) {
  const hid = useId()
  return (
    <section className="s-section s-pk-can" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {can.heading}
          </h2>
          {can.line && <p className="s-bp-line">{can.line}</p>}
        </div>
        <ul className="s-pk-can__grid">
          {can.items.map((item) => (
            <li className="s-pk-can__item" key={item.title}>
              <h3 className="s-pk-can__title">{item.title}</h3>
              <p className="s-pk-can__line">{item.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
