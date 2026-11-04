import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { Finding as FindingContent } from '../../content/types'
import './Finding.css'

/* What we found (Home, 4 Nov): 1 result, set as a research note rather than as a part of the product. The share opens
   the claim and is set large; 1 supporting share under it; where the figures come from, in the small mono of a
   footnote; a link to 1 real run. No report image and no formats: what a run arrives as is its own section, after how
   it works. The figures are the use case pages' real ones (content/usecases, `found`). */
export function Finding({ finding, id }: { finding: FindingContent; id?: string }) {
  const hid = useId()
  return (
    <section className="v5-section v5-found" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="v5-found-note">
          {finding.kicker && <p className="v5-kicker">{finding.kicker}</p>}
          <h2 className="v5-found-h" id={`${hid}-h`}>
            <span className="v5-found-n">{finding.value}</span> <span className="v5-found-claim">{finding.heading}</span>
          </h2>
          <div className="v5-found-rest">
            <p className="v5-found-also">
              <b>{finding.also.value}</b> {finding.also.text}
            </p>
            <p className="v5-found-source">{finding.source}</p>
            <Link className="v5-link" to={finding.cta.to}>
              {finding.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
