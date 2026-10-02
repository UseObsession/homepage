import { Link } from 'react-router-dom'
import { roles, ways } from '../content/roles'
import './PersonaBand.css'

/* Four audiences side by side, cut on the diagonal. Each one opens its own page. */
export function PersonaBand() {
  return (
    <nav className="pband" aria-label="Who it's for">
      {roles.map((r, i) => (
        <Link key={r.id} to={r.page} className="pband-item" data-role={r.id}>
          <span className="pband-n">{String(i + 1).padStart(2, '0')}</span>
          <span className="pband-name">{r.bandName}</span>
          <span className="pband-line">{r.bandLine}</span>
          <span className="pband-ways">
            {r.ways.map((w) => (
              <span key={w}>{ways[w].name}</span>
            ))}
          </span>
          <span className="pband-go" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </Link>
      ))}
    </nav>
  )
}
