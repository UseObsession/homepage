import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { Cta, Hero as HeroContent } from '../../content/types'
import { CaptureForm } from '../CaptureForm'
import { Mark } from '../Logo'
import { Console } from './Console'
import { ScreenTabs } from './ScreenTabs'
import { TypedHeading } from './Typed'
import './Hero.css'

/* The hero, the same on every page (docs/REBUILD.md 1c): centred, 1 column spread across the page. Top to bottom: the
   pill ("Early access"), the headline, the sub, the capture form with the page's micro line, the second path (if
   any), the 3 proof facts, then the console full width under its typed heading. Every element shares 1 vertical axis.
   The page-load sequence is the design system's hero stagger, once (motion.css .ob-anim-hero): pill, headline, sub,
   form, proof, then the console as the product object (.ob-anim-hero-object). Nothing else moves on load; the typed
   heading types once the console is in.
   The console is Home's category tabs of app screens (`hero.screens`, ScreenTabs) or the page's example runs
   (`hero.demos`, Console).
   Props: `cta` shows the capture form and the second path (on by default); `workspace` names whose workspace the
   console's crumb shows, as AppScreen does: Home and Agencies keep 'agency', the other pages pass 'company'. Home's
   screen tabs always show 'company': its screens are drawn for any company, and 1 workspace runs through the tabs. */

type Workspace = 'agency' | 'company'

function Arrow() {
  return (
    <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3.5 8h9M9 4.5 12.5 8 9 11.5" />
    </svg>
  )
}

/* The second path: an in-page anchor (the page's own form further down) or another page. */
function Secondary({ cta }: { cta: Cta }) {
  const inner = (
    <>
      <span className="ob-btn-label">{cta.label}</span>
      <Arrow />
    </>
  )
  return cta.to.startsWith('/') ? (
    <Link className="ob-btn ob-btn--link s-hero-secondary" to={cta.to}>
      {inner}
    </Link>
  ) : (
    <a className="ob-btn ob-btn--link s-hero-secondary" href={cta.to}>
      {inner}
    </a>
  )
}

export function Hero({ hero, cta = true, workspace = 'agency' }: { hero: HeroContent; cta?: boolean; workspace?: Workspace }) {
  const id = useId()
  return (
    <section className="s-hero" aria-labelledby={`${id}-h`}>
      <div className="s-wrap s-hero-wrap">
        <div className="s-hero-head ob-anim-hero">
          {hero.pill && (
            <p className="ob-layout-eyebrow s-hero-pill">
              <Mark size={16} />
              {hero.pill}
            </p>
          )}
          <h1 className="s-hero-h" id={`${id}-h`}>
            {hero.headline}
          </h1>
          <p className="s-hero-sub">{hero.sub}</p>
          {cta && (
            <div className="s-hero-act">
              <CaptureForm capture={hero.capture} className="s-hero-form" />
              {hero.secondary && <Secondary cta={hero.secondary} />}
            </div>
          )}
          <ul className="s-hero-proof">
            {hero.proof.map((f, i) => (
              <li key={i}>
                <span className="s-hero-proof-v">{f.value}</span>
                <span className="s-hero-proof-l">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="s-hero-console ob-anim-hero-object">
          <TypedHeading phrases={hero.consoleHeading} id={`${id}-console`} className="s-hero-console-h" />
          {hero.screens?.length ? (
            <ScreenTabs screens={hero.screens} labelledBy={`${id}-console`} workspace="company" />
          ) : (
            hero.demos?.length ? <Console labelledBy={`${id}-console`} demos={hero.demos} workspace={workspace} /> : null
          )}
        </div>
      </div>
    </section>
  )
}
