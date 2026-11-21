import { useId } from 'react'
import type { PersonaArt, PersonaContrast as Contrast } from '../../content/types'
import { useInView } from '../v5/useInView'
import './blueprint.css'
import './PersonaContrast.css'

/* The "X, not Y" sections (after rivet.dev's "Start in milliseconds, not seconds."): each 1 screen, its claim, 2 or 3
   lines and 1 big true number on one side, its card on the other, the sides flipping from section to section. Each
   opens on the ruled line. The cards are product objects (.ob-object): loose parts beside the whole (1 API, not 5
   vendors), or 1 wake in milliseconds. */

/* A numeral stays on the line of the word it counts. */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1\u00a0')

function Card({ art }: { art: PersonaArt }) {
  switch (art.kind) {
    case 'parts':
      return (
        <div className="s-pc-parts">
          <div className="s-pc-parts-loose">
            <p className="s-pc-card-label">{art.parts.label}</p>
            <ul className="s-pc-parts-list">
              {art.parts.items.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="s-pc-parts-note">{art.parts.note}</p>
          </div>
          <div className="s-pc-parts-whole">
            <p className="s-pc-card-label">{art.whole.label}</p>
            <ul className="s-pc-whole-list">
              {art.whole.items.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="s-pc-parts-note">{art.whole.note}</p>
          </div>
        </div>
      )
    case 'timeline':
      return (
        <div className="s-pc-tl">
          <p className="s-pc-card-label">{art.title}</p>
          <ol className="s-pc-tl-list">
            {art.rows.map((r, i) => (
              <li key={r.at} className="s-pc-tl-row" data-state={r.state} style={{ ['--n' as string]: i }}>
                <span className="s-pc-tl-dot" aria-hidden="true" />
                <span className="s-pc-tl-at">{r.at}</span>
                <span className="s-pc-tl-text">{r.text}</span>
              </li>
            ))}
          </ol>
        </div>
      )
  }
}

function ContrastSection({ c, flip }: { c: Contrast; flip: boolean }) {
  const hid = useId()
  const [ref, on] = useInView<HTMLDivElement>()
  return (
    <section className={'s-section s-bp-ruled s-pc' + (flip ? ' is-flip' : '')} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap s-pc-grid">
        <div className="s-pc-words">
          <h2 className="s-bp-h s-pc-h" id={`${hid}-h`}>
            {c.heading}
          </h2>
          <p className="s-bp-line">{c.line}</p>
          <p className="s-pc-num">
            <span className="s-pc-num-v">{c.value}</span>
            <span className="s-pc-num-u">{c.unit}</span>
            <span className="s-pc-num-l">{tie(c.label)}</span>
          </p>
        </div>
        <figure className="s-pc-fig">
          <div className="s-pc-card ob-object" ref={ref} data-v5-play="" data-on={on ? '' : undefined}>
            <Card art={c.art} />
          </div>
        </figure>
      </div>
    </section>
  )
}

export function PersonaContrasts({ items }: { items: Contrast[] }) {
  return (
    <>
      {items.map((c, i) => (
        <ContrastSection key={c.heading} c={c} flip={i % 2 === 1} />
      ))}
    </>
  )
}
