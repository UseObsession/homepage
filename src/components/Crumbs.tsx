import { Link, useLocation } from 'react-router-dom'
import { headFor } from '../content/head'
import './Crumbs.css'

/* The breadcrumb on every page below Home (navigation.css .ob-crumbs): 1 calm line, centred above the hero's pill so
   the hero keeps its axis. It reads the page's own meta.breadcrumb, the same list the prerender writes as the
   BreadcrumbList JSON-LD (lib/jsonld.ts), so what a reader sees and what a crawler reads always match.
   Parents are links; the page itself is not. On a phone a trail deeper than 2 drops the page's own name, which the
   headline under it already says. It never moves: it is way finding, not part of the hero's load sequence. */
export const CRUMBS_LABEL = 'Breadcrumb'

export function Crumbs({ className = '' }: { className?: string }) {
  const { pathname } = useLocation()
  const crumbs = headFor(pathname).breadcrumb ?? []
  if (crumbs.length < 2) return null
  const last = crumbs.length - 1
  return (
    <nav className={`ob-crumbs s-crumbs${crumbs.length > 2 ? ' s-crumbs--deep' : ''} ${className}`} aria-label={CRUMBS_LABEL}>
      <ol className="ob-crumbs__list">
        {crumbs.map((c, i) => (
          <li className="ob-crumbs__item" key={c.path}>
            {i < last ? (
              <Link className="ob-crumbs__link" to={c.path}>
                <span className="ob-crumbs__label">{c.name}</span>
              </Link>
            ) : (
              <span className="ob-crumbs__current" aria-current="page">
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
