import { Link } from 'react-router-dom'
import { footer } from '../content/footer'
import { Lockup } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import './Footer.css'

/* The footer, short on every page (James's review, 6 Oct): 4 columns of links (who it's for, the product, the resources,
   the company), then the logo and the 1 sentence, the year and the theme switch. Never a list of every recipe: the
   Product column names their jobs. A link that leaves the site (Contact, a mailto) is a plain link.
   It is ink in both themes (.ob-theme-dark): on paper the page closes in ink, under the closing call's ink chapter
   (Paper and Gloss, styles/tones.css). */
export function Footer() {
  return (
    <footer className="s-foot ob-theme-dark">
      <div className="s-foot__in">
        <nav className="s-foot__map" aria-label={footer.label}>
          {footer.columns.map((c, i) => (
            <div className="s-foot__col" key={c.label}>
              <p className="s-foot__label" id={`s-foot-c${i}`}>
                {c.label}
              </p>
              <ul className="s-foot__links" aria-labelledby={`s-foot-c${i}`}>
                {c.links.map((l) => (
                  <li key={l.to}>{l.to.startsWith('/') ? <Link to={l.to}>{l.label}</Link> : <a href={l.to}>{l.label}</a>}</li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="s-foot__base">
          <div className="s-foot__brand">
            <Link className="ob-brand-link s-foot__home" to="/" aria-label={footer.home}>
              <Lockup height={24} />
            </Link>
            <p className="s-foot__tagline">{footer.tagline}</p>
          </div>
          <div className="s-foot__end">
            <p className="s-foot__legal">{footer.copyright}</p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
