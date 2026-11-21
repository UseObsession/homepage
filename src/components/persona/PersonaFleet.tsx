import { useId } from 'react'
import type { PersonaFleet as Fleet } from '../../content/types'
import { PersonaGlyph } from './icons'
import './blueprint.css'
import './PersonaFleet.css'

/* What's built in (#fleet), on the alternate ground: a ruled grid of short items (4 across, 2 on a tablet, 1 on a
   phone), the cells split by hairlines rather than drawn as separate cards. Each item has its icon (./icons). */
export function PersonaFleet({ fleet, id }: { fleet: Fleet; id?: string }) {
  const hid = useId()
  return (
    <section className="s-section s-pf" data-tone="alt" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {fleet.heading}
          </h2>
          {fleet.line && <p className="s-bp-line">{fleet.line}</p>}
        </div>
        <ul className="s-pf-grid">
          {fleet.items.map((f) => (
            <li className="s-pf-item" key={f.title}>
              <span className="s-pf-icon">
                <PersonaGlyph name={f.icon} />
              </span>
              <div className="s-pf-words">
                <h3 className="s-pf-title">{f.title}</h3>
                <p className="s-pf-line">{f.line}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
