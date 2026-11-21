import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { HomePieces as Pieces } from '../../content/types'
import { PersonaGlyph } from './icons'
import './blueprint.css'
import './HomePieces.css'

/* The pieces (#pieces), right under the hero: the claim and its line, then 1 ruled sheet of 6 cells (3 across, 2 on a
   tablet, 1 on a phone), each piece's icon, name, 1 line and the call that starts it. The name is the cell's link to the
   piece's page, stretched over the whole cell, so the cell is 1 target with 1 short accessible name. The persona's cell,
   every piece in one, is drawn solid. */

/* A call breaks only where formatted code would: before its method (`obsession.messaging` / `.connect({ ... })`). Its
   spaces never break. */
function callLines(call: string) {
  const tight = call.replace(/ /g, '\u00a0')
  const at = tight.lastIndexOf('.', tight.indexOf('('))
  return at > 0 ? [tight.slice(0, at), <wbr key="b" />, tight.slice(at)] : tight
}

export function HomePieces({ pieces, id }: { pieces: Pieces; id?: string }) {
  const hid = useId()
  return (
    <section className="s-section s-pz" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {pieces.heading}
          </h2>
          {pieces.line && <p className="s-bp-line">{pieces.line}</p>}
        </div>
        <ul className="s-pz-grid">
          {pieces.items.map((p) => (
            <li className={'s-pz-cell' + (p.whole ? ' is-whole' : '')} key={p.name}>
              <div className="s-pz-top">
                <span className="s-pz-icon">
                  <PersonaGlyph name={p.icon} />
                </span>
                <h3 className="s-pz-name">
                  <Link className="s-pz-link" to={p.to}>
                    {p.name}
                  </Link>
                </h3>
                <span className="s-pz-arrow" aria-hidden="true" />
              </div>
              <p className="s-pz-line">{p.line}</p>
              <code className="s-pz-call">{callLines(p.call)}</code>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
