import { useId } from 'react'
import type { Parity as ParityContent } from '../../content/types'
import './Parity.css'

/* When you might want something else (COPY.md, "Compare"): each tool on 1 row of hairlines, its name, when to pick it,
   and what it keeps, so a reader can choose by the job rather than by our marks. Nothing moves. */
export function Parity({ parity, id }: { parity: ParityContent; id?: string }) {
  const hid = useId()
  return (
    <section className="v5-section v5-parity" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="v5-head">
          <h2 className="v5-h2" id={`${hid}-h`}>
            {parity.heading}
          </h2>
          {parity.line && <p className="v5-line">{parity.line}</p>}
        </div>
        <ul className="v5-parity-list">
          {parity.items.map((p) => (
            <li className="v5-parity-row" key={p.tool}>
              <h3 className="v5-parity-tool">{p.tool}</h3>
              <p className="v5-parity-job">{p.job}</p>
              <p className="v5-parity-data">{p.data}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
