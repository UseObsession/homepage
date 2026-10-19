import { useId, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { nav } from '../../content/nav'
import type { Cta, Hero as HeroContent, ReaderId } from '../../content/types'
import { CaptureForm } from '../CaptureForm'
import { Crumbs } from '../Crumbs'
import './Hero5.css'

/* The October hero (COPY.md, "Hero"): left aligned, the words on the left and the evidence on the right. Top to
   bottom on the left: the headline, the sub (20 words at most), the capture form, and the second path as a quiet link.
   The right column is the page's own object: Home's receipt stage, or a reader page's screen. No pill, no proof row,
   no tagline under the form (those live in their own sections below).
   `center` (Home) stacks it all on the page's middle instead, as the first site's hero was: the tag, the headline 1
   sentence to a full line, the sub, the form, then the object under the words at the page's width.
   `reader` gives a reader page its hue on the hero's 1 soft glow (styles/accents.css), as before. */
type HeroWords = Pick<HeroContent, 'headline' | 'sub' | 'capture' | 'secondary'> & { pill?: string }

function Secondary({ cta }: { cta: Cta }) {
  return cta.to.startsWith('/') ? (
    <Link className="v5-link v5-hero-second" to={cta.to}>
      {cta.label}
      <span aria-hidden="true" className="v5-hero-arrow" />
    </Link>
  ) : (
    <a className="v5-link v5-hero-second" href={cta.to}>
      {cta.label}
      <span aria-hidden="true" className="v5-hero-arrow" />
    </a>
  )
}

export function Hero5({
  hero,
  visual,
  reader,
  crumbs = true,
  center = false,
}: {
  hero: HeroWords
  visual: ReactNode
  reader?: ReaderId
  crumbs?: boolean
  center?: boolean
}) {
  const id = useId()
  /* Centred, each sentence of the headline takes its own line, so it reads as 2 full lines, never a ragged 4. */
  const lines = center ? hero.headline.split(/(?<=\.)\s+/) : [hero.headline]
  return (
    <section className={center ? 'v5-hero v5-hero--center' : 'v5-hero'} data-reader={reader} aria-labelledby={`${id}-h`}>
      <div className="s-wrap v5-hero-wrap">
        {crumbs && <Crumbs />}
        <div className="v5-hero-grid">
          <div className="v5-hero-words ob-anim-hero">
            {/* The category tag (Home's "Open source"): a quiet link to the code, over the headline. */}
            {hero.pill && (
              <a className="v5-hero-tag" href={nav.github.to} rel="noopener">
                <span className="v5-hero-tag-dot" aria-hidden="true" />
                {hero.pill}
              </a>
            )}
            <h1 className="v5-hero-h" id={`${id}-h`}>
              {lines.length > 1
                ? lines.map((l, k) => (
                    <span className="v5-hero-line" key={l}>
                      {k > 0 && ' '}
                      {l}
                    </span>
                  ))
                : hero.headline}
            </h1>
            <p className="v5-hero-sub">{hero.sub}</p>
            <div className="v5-hero-act">
              <CaptureForm capture={hero.capture} className="v5-hero-form" />
              {hero.secondary && <Secondary cta={hero.secondary} />}
            </div>
          </div>
          <div className="v5-hero-visual ob-anim-hero-object">{visual}</div>
        </div>
      </div>
    </section>
  )
}
