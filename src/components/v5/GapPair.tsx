import { useId } from 'react'
import type { GapPair as GapPairContent } from '../../content/types'
import './GapPair.css'

/* The gap (COPY.md, "Home > The gap"): what a tool that reads the outside shows, beside what a customer of that company
   actually gets. 2 lists on 1 sheet: the left is what you already have, set quiet; the right is what only a customer
   sees, each line ending on a receipt mark. The contrast is the picture; nothing moves. */
export function GapPair({ gap, id }: { gap: GapPairContent; id?: string }) {
  const hid = useId()
  return (
    <section className="v5-section v5-gap" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="v5-head">
          <h2 className="v5-h2" id={`${hid}-h`}>
            {gap.heading}
          </h2>
          {gap.line && <p className="v5-line">{gap.line}</p>}
        </div>
        <div className="v5-gap-sheet">
          <div className="v5-gap-col v5-gap-tools">
            <h3 className="v5-gap-label">{gap.tools.label}</h3>
            <ul>
              {gap.tools.items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="v5-gap-col v5-gap-cust">
            <h3 className="v5-gap-label">{gap.customer.label}</h3>
            <ul>
              {gap.customer.items.map((t) => (
                <li key={t}>
                  <span>{t}</span>
                  <span className="v5-gap-tick" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
