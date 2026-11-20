import { useId } from 'react'
import type { PersonaArt, PersonaContrast as Contrast } from '../../content/types'
import { useInView } from '../v5/useInView'
import './blueprint.css'
import './PersonaContrast.css'

/* The "X, not Y" sections (after rivet.dev's "Start in milliseconds, not seconds."): each 1 screen, its claim, 2 or 3
   lines and 1 big true number on one side, its card on the other, the sides flipping from section to section. Each
   opens on the ruled line. The cards are product objects (.ob-object). */

/* A numeral stays on the line of the word it counts. */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1\u00a0')

/* An address may break after its @ on a narrow card, never inside the name. */
const breakAt = (s: string) => {
  const at = s.indexOf('@')
  return at < 0 ? s : [s.slice(0, at + 1), <wbr key="b" />, s.slice(at + 1)]
}

function Card({ art }: { art: PersonaArt }) {
  switch (art.kind) {
    case 'versus':
      return (
        <table className="s-pc-vs">
          <thead>
            <tr>
              <td />
              {art.cols.map((c) => (
                <th key={c.label} scope="col" className={c.ours ? 'is-ours' : undefined}>
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {art.keys.map((k, r) => (
              <tr key={k}>
                <th scope="row">{k}</th>
                {art.cols.map((c) => (
                  <td key={c.label} className={c.ours ? 'is-ours' : undefined}>
                    {breakAt(c.cells[r])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
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
    case 'meter':
      return (
        <div className="s-pc-meter">
          <p className="s-pc-card-label">{art.title}</p>
          <div className="s-pc-bar" aria-hidden="true">
            {art.marks.map((m, i) => (
              <span key={m} className="s-pc-bar-mark" style={{ ['--m' as string]: m, ['--n' as string]: i }} />
            ))}
          </div>
          <p className="s-pc-bar-ends" aria-hidden="true">
            <span>{art.span.start}</span>
            <span>{art.span.end}</span>
          </p>
          <dl className="s-pc-ledger">
            {art.rows.map((r) => (
              <div className="s-pc-ledger-row" key={r.label}>
                <dt>{r.label}</dt>
                <dd>{r.value}</dd>
              </div>
            ))}
            <div className="s-pc-ledger-row is-total">
              <dt>{art.total.label}</dt>
              <dd>{art.total.value}</dd>
            </div>
          </dl>
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
