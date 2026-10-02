import { Link } from 'react-router-dom'
import { agentsPage as p } from '../content/site'
import { NoticeHero, NoticeSections } from './Notice'

/* /agents: for a company an Obsession agent visited. What it is, what it does and never does, what it keeps, and 1
   email to ask about it or keep agents off a site (content/site.ts). Every agent links here. */
export function Agents() {
  const c = p.contact
  return (
    <>
      <NoticeHero pill={p.pill} headline={p.headline} sub={p.sub} />
      <NoticeSections sections={p.sections} className="s-notice--then-final" />
      <section className="ob-layout-final s-notice-final" aria-labelledby="agents-contact">
        <h2 className="ob-layout-final-title" id="agents-contact">
          {c.heading}
        </h2>
        <p className="ob-layout-lede">{c.line}</p>
        <div className="ob-layout-actions">
          <a className="ob-btn ob-btn--lg" href={c.cta.to}>
            <span className="ob-btn-label">{c.cta.label}</span>
          </a>
          <Link className="ob-btn ob-btn--secondary ob-btn--lg" to={c.secondary.to}>
            <span className="ob-btn-label">{c.secondary.label}</span>
          </Link>
        </div>
        <p className="ob-layout-micro">
          <a className="ob-btn ob-btn--link ob-btn--inline" href={`mailto:${c.email}`}>
            <span className="ob-btn-label">{c.email}</span>
          </a>
        </p>
      </section>
    </>
  )
}
