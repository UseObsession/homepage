import { ladder, silentRule, verdicts } from '../content/shared'
import type { Recipe } from '../content/recipes'
import { Reveal } from './Reveal'
import './RecipeBlocks.css'

/* A horizontal run of timed steps: the welcome series from sign up, or one journey on the clock. */
export function TimeStrip({ strip }: { strip: NonNullable<Recipe['strip']> }) {
  return (
    <Reveal className="tstrip-wrap">
      <ol className="tstrip">
        {strip.items.map((it, i) => (
          <li key={i} className={`tstrip-${it.tone}`} style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="tstrip-dot" aria-hidden="true" />
            <time>{it.t}</time>
            <span>{it.label}</span>
          </li>
        ))}
      </ol>
      <p className="faint tstrip-cap">{strip.caption}</p>
    </Reveal>
  )
}

export function Timing({ timing }: { timing: NonNullable<Recipe['timing']> }) {
  return (
    <ol className="timing">
      {timing.map((t) => (
        <Reveal as="li" key={t.when}>
          <b>{t.when}</b>
          <span className="muted">{t.what}</span>
        </Reveal>
      ))}
    </ol>
  )
}

export function Ladder() {
  return (
    <div className="ladder" role="table" aria-label="What a shopper may do">
      <div className="ladder-row ladder-head" role="row">
        <span role="columnheader">Level</span>
        <span role="columnheader">What it does</span>
        <span role="columnheader">What it needs</span>
      </div>
      {ladder.map((l, i) => (
        <Reveal key={l.level} className="ladder-row">
          <span role="cell" className="ladder-level">
            <i style={{ width: `${(i + 1) * 25}%` }} aria-hidden="true" />
            {l.level}
          </span>
          <span role="cell">{l.does}</span>
          <span role="cell" className="muted">
            {l.needs}
          </span>
        </Reveal>
      ))}
    </div>
  )
}

export function Compare({ compare }: { compare: NonNullable<Recipe['compare']> }) {
  return (
    <Reveal className="cmp-wrap">
      <div className="cmp-scroll">
        <table className="cmp">
          <thead>
            <tr>
              <th scope="col" />
              {compare.cols.map((c) => (
                <th scope="col" key={c}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compare.rows.map((r) => (
              <tr key={r.label}>
                <th scope="row">{r.label}</th>
                {r.values.map((v, i) => (
                  <td key={i} className={/^None|after STOP/.test(v) ? 'is-bad' : ''}>
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="faint tstrip-cap">{compare.caption}</p>
    </Reveal>
  )
}

/* How a verdict is reached. Shown on every recipe page. */
export function Proof() {
  return (
    <div className="proof">
      <ul className="proof-verdicts">
        {verdicts.map((v) => (
          <Reveal as="li" key={v.tag}>
            <span className={`tag ${v.tone}`}>{v.tag}</span>
            <p className="muted">{v.line}</p>
          </Reveal>
        ))}
      </ul>
      <Reveal className="proof-rule card">
        <p className="kicker">Before anything is called silent</p>
        <ol>
          {silentRule.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ol>
        <p className="faint">Every record is timestamped and kept as it was captured. Nothing is edited after the fact.</p>
      </Reveal>
    </div>
  )
}
