import { useEffect } from 'react'
import type { StudyReport } from '../../content/types'
import { useInView } from '../v5/useInView'
import './ReportStack.css'

/* The hero's report stack (an agency's mystery shop, content/usecases): what the agency hands its client, 1 report per
   store, in the agency's brand. The front page is 1 store's report in full (its journeys, each with its verdict, and
   its gap with the receipt and the fix drafted, stamped); the other stores' reports fan out behind it, each showing
   its store and its verdict. Played once, when it comes into view: the pages behind fan out from under the front one,
   the front page's journeys land in order, then its gap, then the stamp. The prerendered HTML is the stack at rest,
   finished; under reduced motion it stays that way. 1 picture (role="img"), read as its label. */

/* Literal class names, so the CSS purge sees each one (scripts/purge-css.mjs). */
const ROW: Record<StudyReport['rows'][number]['state'], string> = {
  ok: 's-rpt-row s-rpt-row--ok',
  gap: 's-rpt-row s-rpt-row--gap',
  none: 's-rpt-row s-rpt-row--none',
}
const BACK = ['s-rpt-page s-rpt-back s-rpt-back--l', 's-rpt-page s-rpt-back s-rpt-back--r', 's-rpt-page s-rpt-back s-rpt-back--c']

export function ReportStack({ report }: { report: StudyReport }) {
  const [ref, inView] = useInView<HTMLElement>(0.3)

  useEffect(() => {
    if (inView && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) ref.current?.setAttribute('data-run', '')
  }, [inView, ref])

  return (
    <figure className="s-rpt" ref={ref} role="img" aria-label={report.label}>
      <div className="s-rpt-fan" aria-hidden="true">
        {report.behind.slice(0, 3).map((b, k) => (
          <div className={BACK[k]} key={b.store}>
            <p className="s-rpt-h">
              <span className="s-rpt-brand">
                <i />
                {report.brand}
              </span>
            </p>
            <p className="s-rpt-back-store">{b.store}</p>
            <p className="s-rpt-back-v">{b.verdict}</p>
            <span className="s-rpt-lines" />
          </div>
        ))}
        <article className="s-rpt-page s-rpt-front">
          <p className="s-rpt-h">
            <span className="s-rpt-brand">
              <i />
              {report.brand}
            </span>
            <span className="s-rpt-kind">{report.kind}</span>
          </p>
          <p className="s-rpt-store">{report.store}</p>
          <p className="s-rpt-about">{report.about}</p>
          <p className="s-rpt-score">
            <b>{report.score.value}</b>
            <span>{report.score.line}</span>
            <span className="v5-stamp s-rpt-stamp">{report.stamp}</span>
          </p>
          <div className="s-rpt-rows">
            {report.rows.map((r, k) => (
              <p className={ROW[r.state]} key={r.k} style={{ ['--s-rpt-i' as string]: k }}>
                <span className="s-rpt-k">{r.k}</span>
                <span className="s-rpt-verdict">{r.verdict}</span>
                <span className="s-rpt-v">{r.v}</span>
              </p>
            ))}
          </div>
          <div className="s-rpt-gap">
            <p className="s-rpt-gap-h">{report.gap.heading}</p>
            <p className="s-rpt-fact">{report.gap.fact}</p>
            <p className="s-rpt-receipt">{report.gap.receipt}</p>
            <p className="s-rpt-fix">{report.gap.fix}</p>
          </div>
        </article>
      </div>
      <figcaption className="s-rpt-cap">{report.caption}</figcaption>
    </figure>
  )
}
