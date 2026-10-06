import { useId, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Cta, Hero as HeroContent, ReaderId } from '../../content/types'
import { CaptureForm } from '../CaptureForm'
import { Crumbs } from '../Crumbs'
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
   screen tabs always show 'company': its screens are drawn for any company, and 1 workspace runs through the tabs.
   A page without a console (the use cases) passes its own product object as `object`, and `aside` in place of the 3
   proof facts. Above it all, on every page below Home, the breadcrumb (components/Crumbs), which never moves.
   `reader` (Agencies, Founders, Sales, Marketing, Developers) lands the reader in their own room: 1 soft glow of their
   hue behind the pill and the headline, and the typed heading's caret in that hue (Hero.css, styles/accents.css). Home
   has no reader, so its caret stays the design system's: Home's colour is the persona band under the console, where
   each reader picks their own door.
   `hero.more` (Home) is 1 quiet line under the tabs, for every recipe they don't show, with its link. It is the hero's,
   not the tabs': the console stays the tabs and their screens. */

type Workspace = 'agency' | 'company'

/* The words every hero has; the proof facts and the console are a story page's. */
type HeroWords = Pick<HeroContent, 'pill' | 'headline' | 'sub' | 'capture' | 'secondary'> &
  Partial<Pick<HeroContent, 'proof' | 'consoleHeading' | 'screens' | 'demos' | 'more'>>

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

export function Hero({
  hero,
  cta = true,
  workspace = 'agency',
  object,
  aside,
  reader,
}: {
  hero: HeroWords
  cta?: boolean
  workspace?: Workspace
  object?: ReactNode
  aside?: ReactNode
  reader?: ReaderId
}) {
  const id = useId()
  const hasConsole = Boolean(hero.screens?.length || hero.demos?.length)
  return (
    <section className="s-hero" data-reader={reader} aria-labelledby={`${id}-h`}>
      <div className="s-wrap s-hero-wrap">
        <Crumbs />
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
          {hero.proof && hero.proof.length > 0 && (
            <ul className="s-hero-proof">
              {hero.proof.map((f, i) => (
                <li key={i}>
                  <span className="s-hero-proof-v">{f.value}</span>
                  <span className="s-hero-proof-l">{f.label}</span>
                </li>
              ))}
            </ul>
          )}
          {aside}
        </div>
        {object ? (
          <div className="s-hero-console s-hero-object ob-anim-hero-object">{object}</div>
        ) : (
          hasConsole && (
            <div className="s-hero-console ob-anim-hero-object">
              <TypedHeading phrases={hero.consoleHeading ?? []} id={`${id}-console`} className="s-hero-console-h" />
              {hero.screens?.length ? (
                <ScreenTabs screens={hero.screens} labelledBy={`${id}-console`} workspace="company" />
              ) : (
                hero.demos?.length ? <Console labelledBy={`${id}-console`} demos={hero.demos} workspace={workspace} /> : null
              )}
              {hero.more && (
                <p className="s-hero-more">
                  <span>{hero.more.line}</span>
                  <Link className="ob-btn ob-btn--link s-hero-more__link" to={hero.more.link.to}>
                    <span className="ob-btn-label">{hero.more.link.label}</span>
                    <Arrow />
                  </Link>
                </p>
              )}
            </div>
          )
        )}
      </div>
    </section>
  )
}
