import { useId, type ReactNode } from 'react'
import type { PersonaFleet as Fleet, PersonaIcon } from '../../content/types'
import './blueprint.css'
import './PersonaFleet.css'

/* Everything else a fleet needs (#fleet), on the alternate ground: a ruled grid of 12 short items (4 across, 2 on a
   tablet, 1 on a phone), the cells split by hairlines rather than drawn as separate cards. Each item has its icon, 1
   line drawing on a 16px grid in the nav's style (components/Nav ToolIcon). */
const ICONS: Record<PersonaIcon, ReactNode> = {
  sleep: <path d="M13 9.6A5.5 5.5 0 1 1 6.4 3a4.4 4.4 0 0 0 6.6 6.6Z" />,
  wake: (
    <>
      <rect x="1.5" y="4" width="10.5" height="8.5" rx="1.5" />
      <path d="m2 5 4.75 3.6L11.5 5" />
      <circle cx="13" cy="3.5" r="1.6" />
    </>
  ),
  home: (
    <>
      <path d="M2.5 7.5 8 3l5.5 4.5v5.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5Z" />
      <path d="M6.5 13.5V10h3v3.5" />
    </>
  ),
  person: (
    <>
      <circle cx="8" cy="5.5" r="2.5" />
      <path d="M3 13.5c.6-2.6 2.6-4 5-4s4.4 1.4 5 4" />
    </>
  ),
  retry: (
    <>
      <path d="M13 8a5 5 0 1 1-1.5-3.6" />
      <path d="M11.8 1.8v2.8H9" />
    </>
  ),
  cap: (
    <>
      <path d="M2.5 11.5a5.5 5.5 0 1 1 11 0" />
      <path d="m8 11.5 2.6-3.2" />
    </>
  ),
  spend: (
    <>
      <path d="M2.5 13.5h11M4.5 11.5v-3M8 11.5v-6M11.5 11.5V7" />
      <path d="M2.5 3h11" strokeDasharray="1.5 2" />
    </>
  ),
  stop: (
    <>
      <path d="M5.5 2h5L14 5.5v5L10.5 14h-5L2 10.5v-5Z" />
      <path d="M5.5 8h5" />
    </>
  ),
  webhook: <path d="M9 1.5 3.5 9H8l-1 5.5L12.5 7H8Z" />,
  clock: (
    <>
      <circle cx="8" cy="8" r="5.5" />
      <path d="M8 5v3.2l2.2 1.4" />
    </>
  ),
  code: <path d="M5.5 4.5 2 8l3.5 3.5M10.5 4.5 14 8l-3.5 3.5M9 3l-2 10" />,
  table: (
    <>
      <rect x="2.5" y="3" width="11" height="10" rx="1.5" />
      <path d="M2.5 6.5h11M6.5 6.5V13" />
    </>
  ),
  record: (
    <>
      <path d="M2 5V3a1 1 0 0 1 1-1h2M11 2h2a1 1 0 0 1 1 1v2M14 11v2a1 1 0 0 1-1 1h-2M5 14H3a1 1 0 0 1-1-1v-2" />
      <circle cx="8" cy="8" r="2.5" />
    </>
  ),
  fleet: (
    <>
      <rect x="2" y="2" width="5" height="5" rx="1" />
      <rect x="9" y="2" width="5" height="5" rx="1" />
      <rect x="2" y="9" width="5" height="5" rx="1" />
      <rect x="9" y="9" width="5" height="5" rx="1" />
    </>
  ),
}

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
              <span className="s-pf-icon" aria-hidden="true">
                <svg viewBox="0 0 16 16" focusable="false">
                  {ICONS[f.icon]}
                </svg>
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
