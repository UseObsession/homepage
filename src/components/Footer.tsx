import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-row">
        <div className="foot-brand">
          <Logo />
          <p className="faint">The intelligence infrastructure for commercial teams.</p>
        </div>
        <nav className="foot-links" aria-label="Footer">
          <div>
            <p className="kicker">For</p>
            <Link to="/agencies">Agencies</Link>
            <Link to="/sales">Sales teams</Link>
            <Link to="/marketing">Marketing teams</Link>
            <Link to="/developers">Founders and developers</Link>
          </div>
          <div>
            <p className="kicker">Product</p>
            <Link to="/#how">How it works</Link>
            <Link to="/recipes">All recipes</Link>
            <Link to="/sample-report">Sample report</Link>
          </div>
          <div>
            <p className="kicker">Recipes</p>
            <Link to="/recipes/competitor-tracking">Competitor tracking</Link>
            <Link to="/recipes/mystery-shopper">Mystery shopper</Link>
            <Link to="/recipes/prospect-research">Prospect research</Link>
            <Link to="/recipes/speed-to-lead">Speed to lead</Link>
          </div>
        </nav>
      </div>
      <div className="wrap foot-base faint">© 2026 Obsession · useobsession.com</div>
    </footer>
  )
}
