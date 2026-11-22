import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { PiecePage } from '../../content/pieces/types'
import { prices, type Price } from '../../content/prices'
import type { Cta } from '../../content/types'
import '../persona/blueprint.css'
import './PiecePrices.css'

/* The piece's prices (#pricing), on the alternate ground: the claim, its line and the link to every price on the left;
   on the right each price of this piece as a ruled row (what is billed, the amount and what it is per, its note under),
   read from content/prices.ts by the piece's id. No number is written anywhere else. */

/* A numeral never ends a line apart from its word. */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1 ')

export function PiecePrices({
  piece,
  price,
  ui,
  id,
}: {
  piece: PiecePage['id']
  price: PiecePage['price']
  ui: { label: string; all: Cta }
  id?: string
}) {
  const hid = useId()
  const rows = (Object.values(prices) as Price[]).filter((p) => p.piece === piece)
  return (
    <section className="s-section s-pk-price" data-tone="alt" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap s-pk-price__in">
        <div className="s-pk-price__head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {price.heading}
          </h2>
          <p className="s-bp-line">{tie(price.line)}</p>
          <Link className="s-bp-link s-pk-price__all" to={ui.all.to}>
            {ui.all.label}
          </Link>
        </div>
        <dl className="s-pk-price__rows s-bp-cross" aria-label={ui.label}>
          {rows.map((p) => (
            <div className="s-pk-price__row" key={p.name}>
              <dt className="s-pk-price__name">{p.name}</dt>
              <dd className="s-pk-price__cost">
                <span className="s-pk-price__amount">{p.amount}</span> <span className="s-pk-price__unit">{tie(p.unit)}</span>
              </dd>
              {p.note && <dd className="s-pk-price__note">{tie(p.note)}</dd>}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
