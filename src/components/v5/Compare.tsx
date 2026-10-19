import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { Compare as CompareContent, CompareMark } from '../../content/types'
import './Compare.css'

/* The comparison (COPY.md, "Compare"): what each kind of tool sees, grouped by what it sees, never by archive size.
   Obsession's column comes first and is marked in the stamp ink. Each cell is a word a screen reader says (Yes,
   Partly, No) beside its mark, a dot drawn in CSS (full, half, open); the legend under the table says what each
   means. Below 760px the table scrolls inside its own frame, the row names held at the left. */
/* Literal class names, so the CSS purge sees each one (scripts/purge-css.mjs). */
const CLS: Record<CompareMark, string> = { yes: 'v5-compare-yes', part: 'v5-compare-part', no: 'v5-compare-no' }

export function Compare({ compare, id, headingLevel = 2 }: { compare: CompareContent; id?: string; headingLevel?: 1 | 2 }) {
  const hid = useId()
  const H = headingLevel === 1 ? 'h1' : 'h2'
  return (
    <section className="v5-section v5-compare" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="v5-head">
          <H className="v5-h2" id={`${hid}-h`}>
            {compare.heading}
          </H>
          {compare.line && <p className="v5-line">{compare.line}</p>}
        </div>
        <div className="v5-compare-frame" tabIndex={0} role="region" aria-label={compare.heading}>
          <table className="v5-compare-table">
            <thead>
              <tr>
                <th scope="col" className="v5-compare-corner">
                  <span className="v5-visually-hidden">What it does</span>
                </th>
                {compare.cols.map((c, k) => (
                  <th scope="col" key={c.name} className={k === 0 ? 'v5-compare-us' : undefined}>
                    <span className="v5-compare-col">{c.name}</span>
                    <span className="v5-compare-who">{c.who}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  {r.cells.map((m, k) => (
                    <td key={k} className={(k === 0 ? 'v5-compare-us ' : '') + CLS[m]}>
                      <span className="v5-compare-mark" aria-hidden="true" />
                      <span className="v5-visually-hidden">{compare.legend[m]}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="v5-compare-foot">
          <p className="v5-compare-legend">
            {(['yes', 'part', 'no'] as CompareMark[]).map((m) => (
              <span key={m}>
                <span aria-hidden="true" className={`v5-compare-mark ${CLS[m]}`} />{' '}
                {compare.legend[m]}
              </span>
            ))}
          </p>
          {compare.foot && <p className="v5-compare-note">{compare.foot}</p>}
          {compare.more && (
            <Link className="v5-link" to={compare.more.to}>
              {compare.more.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
