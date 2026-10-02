import { Link } from 'react-router-dom'
import { footer } from '../content/footer'
import { recipeGroups } from '../content/nav'
import { Lockup, Mark } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import './Footer.css'

/* The full site map, the red lines in 1 line, and the trust links (docs/REBUILD.md, section 7). */
export function Footer() {
  return (
    <footer className="s-foot">
      <div className="s-foot__in">
        <div className="s-foot__top">
          <div className="s-foot__brand">
            <Link className="s-foot__home" to="/" aria-label="Obsession home">
              <Lockup height={24} />
            </Link>
            <p className="s-foot__tagline">{footer.tagline}</p>
          </div>

          <nav className="s-foot__map" aria-label={footer.label}>
            {footer.columns.map((c, i) => (
              <div className="s-foot__col" key={c.label}>
                <p className="s-foot__label" id={`s-foot-c${i}`}>
                  {c.label}
                </p>
                <ul className="s-foot__links" aria-labelledby={`s-foot-c${i}`}>
                  {c.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <nav className="s-foot__recipes" aria-label={footer.recipes}>
          <div className="s-foot__groups">
            {recipeGroups.map((g, i) => (
              <div className="s-foot__col" key={g.name}>
                <p className="s-foot__label" id={`s-foot-g${i}`}>
                  {g.name}
                </p>
                <ul className="s-foot__links" aria-labelledby={`s-foot-g${i}`}>
                  {g.items.map((r) => (
                    <li key={r.id}>
                      <Link to={r.to}>{r.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <div className="s-foot__base">
          <p className="s-foot__rule">
            <Mark size={16} />
            <span>
              {footer.rule} <Link to={footer.agents.to}>{footer.agents.label}</Link>
            </span>
          </p>
          <div className="s-foot__end">
            <p className="s-foot__legal">
              <span>{footer.copyright}</span>
              <Link to={footer.privacy.to}>{footer.privacy.label}</Link>
            </p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
