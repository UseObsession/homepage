import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { HomeDelivery as Delivery } from '../../content/types'
import { PersonaGlyph } from './icons'
import './blueprint.css'
import './HomeDelivery.css'

/* How events reach you (#delivery), right after the code (#build): the claim and its line, then the path every event
   takes, drawn as 3 plates joined by dashed leaders (it happens, it's saved in your event log, it reaches you), then the
   6 channels as 1 ruled sheet of short cards in their order, each with its line of code, and the line on a server that's
   down beside the link to every channel's code. The plates follow the site's blueprint: events arriving are loose,
   dashed chips; the event log is drawn solid, in order; the ways out are outlined chips. Every word is HTML, so it reads
   without the drawing. */

/* A row of the event log's plate opens with its time ("09:04:12 email.received"): the time is quieter. */
function Row({ text }: { text: string }) {
  const m = text.match(/^(\d{2}:\d{2}(?::\d{2})?)\s+(.+)$/)
  return m ? (
    <>
      <span className="s-hd-at">{m[1]}</span>
      <span>{m[2]}</span>
    </>
  ) : (
    <>{text}</>
  )
}

export function HomeDelivery({ delivery, id }: { delivery: Delivery; id?: string }) {
  const hid = useId()
  return (
    <section className="s-section s-bp-ruled s-hd" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {delivery.heading}
          </h2>
          {delivery.line && <p className="s-bp-line">{delivery.line}</p>}
        </div>

        {delivery.setup && (
          <div className="s-hd-setup">
            <div className="s-hd-setup-text">
              <h3 className="s-hd-title">{delivery.setup.title}</h3>
              <p className="s-hd-line">{delivery.setup.line}</p>
            </div>
            <ul className="s-hd-setup-rows">
              {delivery.setup.rows.map((r) => (
                <li className="s-hd-row" key={r}>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        <ol className="s-hd-flow">
          {delivery.steps.map((s, i) => (
            <li className="s-hd-step" key={s.title} data-step={i + 1}>
              <div className="s-hd-plate">
                <ul className="s-hd-rows">
                  {s.rows.map((r) => (
                    <li className="s-hd-row" key={r}>
                      <Row text={r} />
                    </li>
                  ))}
                </ul>
              </div>
              <p className="s-hd-n" aria-hidden="true">
                {i + 1}
              </p>
              <h3 className="s-hd-title">{s.title}</h3>
              <p className="s-hd-line">{s.line}</p>
            </li>
          ))}
        </ol>

        {delivery.loop && (
          <p className="s-hd-loop">
            <span className="s-hd-down-icon">
              <PersonaGlyph name="retry" />
            </span>
            {delivery.loop}
          </p>
        )}

        {delivery.live && (
          <p className="s-hd-live">
            <span className="s-hd-down-icon">
              <PersonaGlyph name="phone" />
            </span>
            {delivery.live}
          </p>
        )}

        <ol className="s-hd-cards">
          {delivery.channels.map((c, i) => (
            <li className="s-hd-card" key={c.name}>
              <span className="s-hd-card-n" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="s-hd-card-name">{c.name}</h3>
              <p className="s-hd-card-line">{c.line}</p>
              <code className="s-hd-card-eg">{c.eg}</code>
            </li>
          ))}
        </ol>

        <div className="s-hd-foot">
          <p className="s-hd-down">
            <span className="s-hd-down-icon">
              <PersonaGlyph name="retry" />
            </span>
            {delivery.down}
          </p>
          <Link className="s-bp-link" to={delivery.link.to}>
            {delivery.link.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
