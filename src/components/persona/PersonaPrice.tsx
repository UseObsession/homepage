import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { PersonaPrice as Price } from '../../content/types'
import './blueprint.css'
import './PersonaPrice.css'

/* A numeral stays on the line of the word it counts ("10 active minutes"). */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1\u00a0')

/* The pricing teaser: the rate as the claim, 1 line and the link to /pricing on the left; on the right a worked example
   a reader can redo (minutes and cost per step), as a product object under its Example tag. */
export function PersonaPrice({ price, id }: { price: Price; id?: string }) {
  const hid = useId()
  const { example } = price
  return (
    <section className="s-section s-bp-ruled s-pp" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap s-pp-grid">
        <div className="s-pp-words">
          <h2 className="s-pp-h" id={`${hid}-h`}>
            {tie(price.heading)}
          </h2>
          <p className="s-bp-line">{price.line}</p>
          <Link className="ob-btn ob-btn--secondary s-pp-cta" to={price.cta.to}>
            <span className="ob-btn-label">{price.cta.label}</span>
            <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
        <figure className="s-pp-fig">
          <div className="s-pp-card ob-object">
            <table className="s-pp-table">
              <caption className="s-pp-caption">{example.title}</caption>
              <thead>
                <tr>
                  {example.cols.map((c) => (
                    <th key={c} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {example.rows.map(([what, time, cost]) => (
                  <tr key={what}>
                    <th scope="row">{what}</th>
                    <td>{time}</td>
                    <td>{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption className="s-bp-tag s-pp-tag">{example.tag}</figcaption>
        </figure>
      </div>
    </section>
  )
}
