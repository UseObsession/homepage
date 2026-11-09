import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { CardGrid as CardGridContent } from '../../content/types'
import './CardGrid.css'

/* A plain grid of cards under a section head (Home, 9 Nov): what is behind the login, and who uses it. Each card is a
   short title, 1 line and, where there is one, an example in the small mono of a fact, or a link. */
export function CardGrid({ grid, id }: { grid: CardGridContent; id?: string }) {
  const hid = useId()
  return (
    <section className="v5-section v5-cards" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="v5-head">
          {grid.kicker && <p className="v5-kicker">{grid.kicker}</p>}
          <h2 className="v5-h2" id={`${hid}-h`}>
            {grid.heading}
          </h2>
          {grid.line && <p className="v5-line">{grid.line}</p>}
        </div>
        <ul className="cg-grid" data-cols={grid.items.length % 3 === 0 ? 3 : 2}>
          {grid.items.map((c) => (
            <li className="cg-card" key={c.title} id={c.id}>
              <h3 className="cg-title">{c.title}</h3>
              <p className="cg-line">{c.line}</p>
              {c.eg && <p className="cg-eg">{c.eg}</p>}
              {c.link && (
                <Link className="v5-link cg-link" to={c.link.to}>
                  {c.link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {grid.more && (
          <p className="cg-more">
            {grid.more.text}{' '}
            <Link className="v5-link" to={grid.more.to}>
              {grid.more.label}
            </Link>
          </p>
        )}
      </div>
    </section>
  )
}
