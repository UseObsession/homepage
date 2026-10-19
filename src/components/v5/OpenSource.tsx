import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { Cta, OpenSource as OpenSourceContent } from '../../content/types'
import './OpenSource.css'

/* Open source (COPY.md, "Open source"): what is in the code, and what the cloud adds that code can't. 1 claim, 1 line,
   then the engine's capabilities as a grid of names and technical lines (the place the system shows its power) beside
   the cloud's short list on the receipt's paper (the cloud is where the history lives), then the 2 ways forward. */
function Go({ cta, primary }: { cta: Cta; primary?: boolean }) {
  const cls = primary ? 'ob-btn ob-btn--primary v5-os-go' : 'v5-link'
  return cta.to.startsWith('/') || cta.to.startsWith('#') ? (
    cta.to.startsWith('#') ? (
      <a className={cls} href={cta.to}>
        <span className={primary ? 'ob-btn-label' : undefined}>{cta.label}</span>
      </a>
    ) : (
      <Link className={cls} to={cta.to}>
        <span className={primary ? 'ob-btn-label' : undefined}>{cta.label}</span>
      </Link>
    )
  ) : (
    <a className={cls} href={cta.to} rel="noopener">
      <span className={primary ? 'ob-btn-label' : undefined}>{cta.label}</span>
    </a>
  )
}

export function OpenSource({ open, id }: { open: OpenSourceContent; id?: string }) {
  const hid = useId()
  return (
    <section className="v5-section v5-os" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="v5-head">
          <h2 className="v5-h2" id={`${hid}-h`}>
            {open.heading}
          </h2>
          <p className="v5-line">{open.line}</p>
        </div>
        <div className="v5-os-pair">
          <div className="v5-os-col v5-os-core">
            <h3>{open.core.title}</h3>
            <dl className="v5-os-caps">
              {open.core.items.map((i) => (
                <div key={i.name}>
                  <dt>{i.name}</dt>
                  <dd>{i.line}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="v5-os-col v5-os-cloud">
            <h3>{open.cloud.title}</h3>
            <ul>
              {open.cloud.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="v5-os-act">
          <Go cta={open.cta} primary />
          {open.secondary && <Go cta={open.secondary} />}
        </div>
      </div>
    </section>
  )
}
