import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { Formats as FormatsContent } from '../../content/types'
import './Formats.css'

/* What you get (COPY.md, "Home > How"): the close of how it works. The claim, its line and the link to the full sample
   on the left; on the right a dense grid of every format the same fact arrives in, each with 1 line showing it there.
   Words only: no pictures, nothing moves. */
export function Formats({ formats, id }: { formats: FormatsContent; id?: string }) {
  const hid = useId()
  return (
    <section className="v5-section v5-formats" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap v5-formats-wrap">
        <div className="v5-formats-head">
          <h2 className="v5-formats-h" id={`${hid}-h`}>
            {formats.heading}
          </h2>
          <p className="v5-formats-line">{formats.line}</p>
          <Link className="v5-link" to={formats.cta.to}>
            {formats.cta.label}
          </Link>
        </div>
        <ul className="v5-formats-grid">
          {formats.items.map((f) => (
            <li key={f.name}>
              <span className="v5-formats-name">{f.name}</span>
              {f.code ? <code className="v5-formats-sample">{f.sample}</code> : <span className="v5-formats-sample">{f.sample}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
