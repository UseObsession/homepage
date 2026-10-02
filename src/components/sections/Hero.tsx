import { useId, useState, type FocusEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Cta, Hero as HeroContent } from '../../content/types'
import { CaptureForm } from '../CaptureForm'
import { Crumbs } from '../Crumbs'
import { Mark } from '../Logo'
import { Console } from './Console'
import { TypedLine } from './TypedLine'
import './Hero.css'

/* The hero, the same on every page (docs/REBUILD.md 1c): centred, 1 column spread across the page. Top to bottom: the
   pill (if any), the headline, the typed task line, the sub, the capture form with the page's micro line, the second
   path (if any), the 3 proof facts, then the console full width. Every element shares 1 vertical axis.
   The page-load sequence is the design system's hero stagger, once (motion.css .ob-anim-hero): pill, headline, typed
   line, sub, form, then the console as the product object (.ob-anim-hero-object). Nothing else moves on load.
   Props: `cta` shows the capture form and the second path (on by default); `workspace` names whose workspace the
   console's crumb shows, as AppScreen does: Home and Agencies keep 'agency', the other pages pass 'company'.
   A page without a console (the use cases) passes its own product object as `object`, and `aside` in place of the 3
   proof facts. Above it all, on every page below Home, the breadcrumb (components/Crumbs), which never moves. */

type Workspace = 'agency' | 'company'

/* The words every hero has; the proof facts and the console are a story page's. */
type HeroWords = Pick<HeroContent, 'pill' | 'headline' | 'typed' | 'sub' | 'capture' | 'secondary'> &
  Partial<Pick<HeroContent, 'proof' | 'consoleLabel' | 'demos'>>

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
}: {
  hero: HeroWords
  cta?: boolean
  workspace?: Workspace
  object?: ReactNode
  aside?: ReactNode
}) {
  const id = useId()
  /* The typed line holds while the reader is in the form, so nothing moves above the field they are typing in. */
  const [inForm, setInForm] = useState(false)
  const leave = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setInForm(false)
  }
  return (
    <section className="s-hero" aria-labelledby={`${id}-h`}>
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
          <TypedLine lines={hero.typed} paused={inForm} className="s-hero-typed" />
          <p className="s-hero-sub">{hero.sub}</p>
          {cta && (
            <div className="s-hero-act" onFocus={() => setInForm(true)} onBlur={leave}>
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
          hero.demos &&
          hero.demos.length > 0 && (
            <div className="s-hero-console ob-anim-hero-object">
              <Console label={hero.consoleLabel ?? ''} demos={hero.demos} workspace={workspace} />
            </div>
          )
        )}
      </div>
    </section>
  )
}
