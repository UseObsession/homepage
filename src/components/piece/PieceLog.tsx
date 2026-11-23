import { useId } from 'react'
import type { PiecePage } from '../../content/pieces/types'
import '../persona/blueprint.css'
import './PieceLog.css'

/* The event log card (#event-log, Personas): an ink chapter, the claim and its line beside a card of 1 persona's dated rows
   from 1080px, stacked below. The card's head is who the persona is (its name, inbox, number); each row is when, what
   kind and what happened, a small note where it woke or acted, and a frame mark where the row was kept with a
   screenshot. The waiting row is quieter, on a dashed rule. */

function Shot({ label }: { label: string }) {
  return (
    <span className="s-pk-log__shot" title={label}>
      <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <rect x="2" y="3" width="12" height="10" rx="1.5" />
        <path d="m2.5 11 3.5-3.5 3 3 2-2 2.5 2.5" />
      </svg>
      <span className="s-sr">{label}</span>
    </span>
  )
}

export function PieceLog({ log, ui, id }: { log: NonNullable<PiecePage['log']>; ui: { label: string; shot: string }; id?: string }) {
  const hid = useId()
  return (
    <section className="s-section s-pk-log ob-theme-dark" data-tone="ink" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap s-pk-log__in">
        <div className="s-pk-log__head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {log.heading}
          </h2>
          <p className="s-bp-line">{log.line}</p>
        </div>
        <figure className="s-pk-log__card ob-object" aria-label={ui.label}>
          <figcaption className="s-pk-log__who">
            <span className="s-pk-log__name">{log.who.name}</span>
            <span className="s-pk-log__metas">
              {log.who.lines.map((l) => (
                <span className="s-pk-log__meta" key={l}>
                  {l}
                </span>
              ))}
            </span>
          </figcaption>
          <ol className="s-pk-log__rows">
            {log.rows.map((r, i) => (
              <li className={'s-pk-log__row' + (r.wait ? ' is-wait' : '')} key={i}>
                <span className="s-pk-log__at">{r.at}</span>
                <span className="s-pk-log__kind">{r.kind}</span>
                <span className="s-pk-log__text">
                  {r.text}
                  {r.note && <span className="s-pk-log__note">{r.note}</span>}
                </span>
                {r.shot ? <Shot label={ui.shot} /> : <span className="s-pk-log__shot" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  )
}
