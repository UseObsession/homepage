import { useId } from 'react'
import { Link } from 'react-router-dom'
import { channels, downLine, eventLines, type EventName } from '../../content/delivery'
import type { Cta } from '../../content/types'
import '../persona/blueprint.css'
import './PieceDelivery.css'

/* How a piece's events reach you (#delivery on every piece page), and its body, shared with every recipe page
   (pages/RecipePage, #delivery). The body: the events this piece sends, each name in mono with its line, beside the 6
   channels in their order (content/delivery.ts), then the line on a server that's down and the link to every channel's
   code. A recipe passes no events: its heading names recipe.result, and the channels take the whole width. */

export type DeliveryUi = { events: string; channels: string; link: Cta }

export function DeliveryLists({ events, ui }: { events?: EventName[]; ui: DeliveryUi }) {
  const hid = useId()
  return (
    <div className={'s-dl' + (events?.length ? '' : ' is-wide')}>
      <div className="s-dl-body">
        {events && events.length > 0 && (
          <div className="s-dl-block">
            <p className="s-dl-label" id={`${hid}-e`}>
              {ui.events}
            </p>
            <dl className="s-dl-events" aria-labelledby={`${hid}-e`}>
              {events.map((e) => (
                <div className="s-dl-event" key={e}>
                  <dt>
                    <code>{e}</code>
                  </dt>
                  <dd>{eventLines[e]}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
        <div className="s-dl-block">
          <p className="s-dl-label" id={`${hid}-c`}>
            {ui.channels}
          </p>
          <ol className="s-dl-channels" aria-labelledby={`${hid}-c`}>
            {channels.map((c, i) => (
              <li className="s-dl-channel" key={c.id}>
                <span className="s-dl-n" aria-hidden="true">
                  {i + 1}
                </span>
                <p className="s-dl-name">{c.name}</p>
                <p className="s-dl-line">{c.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="s-dl-foot">
        <p className="s-dl-down">{downLine}</p>
        <Link className="s-bp-link" to={ui.link.to}>
          {ui.link.label}
        </Link>
      </div>
    </div>
  )
}

export function PieceDelivery({
  heading,
  line,
  events,
  ui,
  id,
}: {
  heading: string
  line: string
  events: EventName[]
  ui: DeliveryUi
  id?: string
}) {
  const hid = useId()
  return (
    <section className="s-section s-bp-ruled s-pk-dl" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {heading}
          </h2>
          <p className="s-bp-line">{line}</p>
        </div>
        <DeliveryLists events={events} ui={ui} />
      </div>
    </section>
  )
}
