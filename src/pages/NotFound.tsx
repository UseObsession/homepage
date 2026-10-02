import { Link } from 'react-router-dom'
import { CaptureForm } from '../components/CaptureForm'
import { notFoundPage as p } from '../content/site'
import { NoticeHero } from './Notice'
import './NotFound.css'

/* Any address without a page (dist/404.html, noindex): the ways back, and the waitlist at #join, so the nav's call to
   action lands here too. */
export function NotFound() {
  return (
    <NoticeHero headline={p.headline} sub={p.sub} end>
      <ul className="s-lost">
        {p.links.map((l) => (
          <li key={l.to}>
            <Link className="ob-btn ob-btn--link" to={l.to}>
              <span className="ob-btn-label">{l.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="s-notice-hero__join" id="join">
        <CaptureForm capture={p.capture} />
      </div>
    </NoticeHero>
  )
}
