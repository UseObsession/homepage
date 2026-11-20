import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { PersonaHow as How } from '../../content/types'
import './blueprint.css'
import './PersonaHow.css'

/* How a persona works (#how), on the alternate ground: the claim, then the 4 steps on 1 ruled line, numbered because
   they are a real sequence. Under them the 1 real run (Brand G, content/sample.ts): its claim and line beside its
   receipt (styles/v5.css .v5-receipt), with the link to the whole record. */
const pad = (n: number) => String(n).padStart(2, '0')
/* A numeral stays on the line of the word it counts ("48 hours"). */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1\u00a0')

export function PersonaHow({ how, id }: { how: How; id?: string }) {
  const hid = useId()
  const { run } = how
  return (
    <section className="s-section s-pw" data-tone="alt" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {how.heading}
          </h2>
          {how.line && <p className="s-bp-line">{how.line}</p>}
        </div>
        <ol className="s-pw-steps s-bp-cross">
          {how.steps.map((s, i) => (
            <li className="s-pw-step" key={s.title}>
              <p className="s-pw-n" aria-hidden="true">
                {pad(i + 1)}
              </p>
              <h3 className="s-pw-title">{s.title}</h3>
              <p className="s-pw-line">{s.line}</p>
              <p className="s-pw-eg">{s.eg}</p>
            </li>
          ))}
        </ol>
        <div className="s-pw-run">
          <div className="s-pw-run-words">
            <p className="s-bp-tag">{run.label}</p>
            <h3 className="s-pw-run-h">{tie(run.heading)}</h3>
            <p className="s-pw-run-line">{run.line}</p>
            <Link className="s-bp-link" to={run.cta.to}>
              {run.cta.label}
            </Link>
          </div>
          <div className="s-pw-receipt v5-receipt">
            {run.facts.map((f) => (
              <div className="v5-receipt-row" key={f.k}>
                <span className="v5-receipt-k">{f.k}</span>
                <span className="v5-receipt-v">{f.v}</span>
              </div>
            ))}
            <hr className="v5-receipt-rule" />
            <span className="v5-stamp s-pw-stamp">{run.stamp}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
