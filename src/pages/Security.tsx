import { Link } from 'react-router-dom'
import { securityPage as p } from '../content/security'
import { NoticeHero, NoticeSections } from './Notice'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

/* "21 November 2026" as 2026-11-21, for <time>. */
function isoDate(d: string) {
  const [day, month, year] = d.split(' ')
  const m = MONTHS.indexOf(month) + 1
  return m && year ? `${year}-${String(m).padStart(2, '0')}-${day.padStart(2, '0')}` : undefined
}

/* /security: what is true today about where data lives, how it's protected, who handles it, how long it's kept, what
   agents won't do, and 1 email for security questions (content/security.ts). The privacy notice's layout, closed by the
   agents page's contact. */
export function Security() {
  const c = p.contact
  return (
    <>
      <NoticeHero headline={p.headline} sub={p.sub}>
        <p className="s-notice-hero__meta">
          Updated <time dateTime={isoDate(p.updated)}>{p.updated}</time>
        </p>
      </NoticeHero>
      <NoticeSections sections={p.sections} className="s-notice--then-final" />
      <section className="ob-layout-final s-notice-final" aria-labelledby="security-contact">
        <h2 className="ob-layout-final-title" id="security-contact">
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
