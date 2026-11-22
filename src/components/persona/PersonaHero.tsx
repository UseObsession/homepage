import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Cta, Hero, PersonaStart } from '../../content/types'
import { CaptureForm } from '../CaptureForm'
import { PersonaGlyph } from './icons'
import './blueprint.css'
import './PersonaHero.css'

/* Home's hero (21 Nov 2026, after rivet.dev's centred hero; 23 Nov, the full first screen): the headline (each sentence on
   its own line: what we sell, then "One API, one bill."), the sub, then the email form as the main action (the sign-up
   card that follows asks which way in), the two paths as cards (for developers, the code and the API; for teams, the job in plain words and the blueprints)
   and the scale line. The 3 facts sit in one strip at the
   foot of the screen. Everything is centred, and the words sit in the middle of the screen's height. Without
   `personaStart.form` it draws the two doors instead. Words come from content/pages/home.ts (hero and personaStart). */

/* The step-right chevron on a path card's action. */
const Chev = () => (
  <svg className="s-ph-chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M6 3.5 10.5 8 6 12.5" />
  </svg>
)

/* A link inside the site goes through the router; an anchor on this page or another site stays a plain link. */
function CtaButton({ cta, className }: { cta: Cta; className: string }) {
  const label = <span className="ob-btn-label">{cta.label}</span>
  return cta.to.startsWith('/') ? (
    <Link className={className} to={cta.to}>
      {label}
    </Link>
  ) : (
    <a className={className} href={cta.to}>
      {label}
    </a>
  )
}

/* The line of code in a mono chip, with a copy button. The clipboard is touched only on click. */
function CodeChip({ chip }: { chip: PersonaStart['chip'] }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(0)
  useEffect(() => () => window.clearTimeout(timer.current), [])
  async function copy() {
    try {
      await navigator.clipboard.writeText(chip.code)
    } catch {
      return
    }
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 1600)
  }
  return (
    <div className="s-ph-chip">
      <code className="s-ph-chip-code">{chip.code}</code>
      <button type="button" className={'s-ph-chip-copy' + (copied ? ' is-copied' : '')} aria-label={chip.copy} title={chip.copy} onClick={copy}>
        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          {copied ? (
            <path d="m3.5 8.5 3 3 6-7" />
          ) : (
            <>
              <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
              <path d="M10.5 3V2.5h-8v8H3" />
            </>
          )}
        </svg>
      </button>
      <span className="s-sr" role="status">
        {copied ? chip.copied : ''}
      </span>
    </div>
  )
}

export function PersonaHero({ hero, start }: { hero: Hero; start: PersonaStart }) {
  const id = useId()
  const lines = hero.headline.split(/(?<=\.)\s+/)
  return (
    <section className="s-ph" aria-labelledby={`${id}-h`}>
      <div className="s-wrap s-ph-wrap">
        <div className="s-ph-words ob-anim-hero">
          {hero.pill && (
            <a className="s-ph-tag" href={hero.pillTo ?? '#join'}>
              <span className="s-ph-tag-dot" aria-hidden="true" />
              {hero.pill}
            </a>
          )}
          <h1 className="s-ph-h" id={`${id}-h`}>
            {lines.map((l, i) => (
              <span className="s-ph-h-line" key={l}>
                {i > 0 && ' '}
                {l}
              </span>
            ))}
          </h1>
          <p className="s-ph-sub">{hero.sub}</p>
          {start.form && hero.capture ? (
            /* The email form for everyone, then the two paths as cards (each a whole link to its door), then the
               scale line. */
            <div className="s-ph-form">
              <CaptureForm capture={hero.capture} className="s-ph-capture" />
              {start.doors && (
                <div className="s-ph-paths">
                  {start.doors.dev.cta && (
                    <Link className="s-ph-path" data-reader="developers" to={start.doors.dev.cta.to}>
                      <span className="s-ph-door-k">
                        <span className="s-ph-door-ic" aria-hidden="true">
                          <PersonaGlyph name="code" />
                        </span>
                        {start.doors.dev.label}
                      </span>
                      <code className="s-ph-path-code">{start.chip.code}</code>
                      <span className="s-ph-path-go">
                        {start.doors.dev.cta.label}
                        <Chev />
                      </span>
                    </Link>
                  )}
                  {start.doors.noCode.cta && (
                    <Link className="s-ph-path" data-reader="marketing" to={start.doors.noCode.cta.to}>
                      <span className="s-ph-door-k">
                        <span className="s-ph-door-ic" aria-hidden="true">
                          <PersonaGlyph name="check" />
                        </span>
                        {start.doors.noCode.label}
                      </span>
                      <span className="s-ph-path-line">{start.doors.noCode.line}</span>
                      <span className="s-ph-path-go">
                        {start.doors.noCode.cta.label}
                        <Chev />
                      </span>
                    </Link>
                  )}
                </div>
              )}
              {hero.note && <p className="s-ph-note">{hero.note}</p>}
            </div>
          ) : start.doors && hero.secondary ? (
            /* Two doors (23 Nov 2026): each says who it is for, shows how that reader starts (the code, or the job in
               plain words) and gives its button, on 2 equal cards side by side; stacked on a phone. */
            <div className="s-ph-doors">
              <div className="s-ph-door" data-reader="developers">
                <p className="s-ph-door-k">
                  <span className="s-ph-door-ic" aria-hidden="true">
                    <PersonaGlyph name="code" />
                  </span>
                  {start.doors.dev.label}
                </p>
                <CodeChip chip={start.chip} />
                <CtaButton cta={start.primary} className="ob-btn ob-btn--lg s-ph-primary s-ph-door-btn" />
              </div>
              <div className="s-ph-door" data-reader="marketing">
                <p className="s-ph-door-k">
                  <span className="s-ph-door-ic" aria-hidden="true">
                    <PersonaGlyph name="check" />
                  </span>
                  {start.doors.noCode.label}
                </p>
                <p className="s-ph-door-line">{start.doors.noCode.line}</p>
                <CtaButton cta={hero.secondary} className="ob-btn ob-btn--lg ob-btn--secondary s-ph-door-btn" />
              </div>
            </div>
          ) : (
            <div className="s-ph-act">
              <div className="s-ph-buttons">
                <CtaButton cta={start.primary} className="ob-btn ob-btn--lg s-ph-primary" />
                {hero.secondary && <CtaButton cta={hero.secondary} className="ob-btn ob-btn--lg ob-btn--secondary" />}
              </div>
              <CodeChip chip={start.chip} />
            </div>
          )}
          {hero.note && !start.form && <p className="s-ph-note">{hero.note}</p>}
        </div>
        {hero.proof.length > 0 && (
          <dl className="s-ph-facts">
            {hero.proof.map((f) => (
              <div className="s-ph-fact" key={f.value}>
                <dt className="s-ph-fact-v">{f.value}</dt>
                <dd className="s-ph-fact-l">{f.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}
