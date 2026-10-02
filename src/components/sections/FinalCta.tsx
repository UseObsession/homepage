import type { Final } from '../../content/types'
import { CaptureForm } from '../CaptureForm'
import { Mark } from '../Logo'
import './FinalCta.css'

/* A numeral never ends a line apart from its word ("0 reminders", "48 hours"). */
const tie = (s: string) => s.replace(/(\d) /g, '$1\u00a0')

/* The final call to action (docs/REBUILD.md, story beat 10): the ring, the claim, 1 line, the page's capture form,
   centred on 1 axis. Its anchor (#join by default) is where every "Get my free report" and "Join" link on the page
   lands. The section carries the page's 1 glow, behind the ring. */
export function FinalCta({ final, id = 'join', className = '' }: { final: Final; id?: string; className?: string }) {
  return (
    <section className={`s-section s-final ${className}`} id={id} aria-labelledby={`${id}-h`}>
      <div className="s-wrap s-final__in">
        <div className="s-final__mark">
          <Mark size={64} />
        </div>
        <h2 className="ob-type-h1 s-final__h" id={`${id}-h`}>
          {tie(final.heading)}
        </h2>
        <p className="s-final__sub">{tie(final.sub)}</p>
        <CaptureForm capture={final.capture} className="s-final__form" />
      </div>
    </section>
  )
}
