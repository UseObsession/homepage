import { Link } from 'react-router-dom'
import type { Final } from '../../content/types'
import { CaptureForm } from '../CaptureForm'
import { Mark } from '../Logo'
import './FinalCta.css'

/* A numeral never ends a line apart from its word ("0 reminders", "48 hours"). */
const tie = (s: string) => s.replace(/(\d) /g, '$1\u00a0')

/* The final call to action (docs/REBUILD.md, story beat 10): the ring, the claim, 1 line, the page's capture form,
   centred on 1 axis. Its anchor (#join by default) is where every "Get my free report" and "Join" link on the page
   lands. The section carries the page's 1 glow, behind the ring. A page may add a quiet second path under the form
   (`final.link`, the sample report), and may leave out the line (Home: the claim, the form and its link). */
export function FinalCta({ final, id = 'join', className = '' }: { final: Final; id?: string; className?: string }) {
  return (
    <section className={`s-section s-final ob-theme-dark ${className}`} data-tone="ink" id={id} aria-labelledby={`${id}-h`}>
      <div className="s-wrap s-final__in">
        <div className="s-final__mark">
          <Mark size={64} />
        </div>
        <h2 className="ob-type-h1 s-final__h" id={`${id}-h`}>
          {tie(final.heading)}
        </h2>
        {final.sub && <p className="s-final__sub">{tie(final.sub)}</p>}
        <CaptureForm capture={final.capture} className="s-final__form" />
        {final.link && (
          <Link className="ob-btn ob-btn--link s-final__link" to={final.link.to}>
            <span className="ob-btn-label">{final.link.label}</span>
            <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M3.5 8h9M9 4.5 12.5 8 9 11.5" />
            </svg>
          </Link>
        )}
      </div>
    </section>
  )
}
