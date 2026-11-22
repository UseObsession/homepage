import type { NoCodePage } from '../../content/pages/no-code'
import { FormatIcon } from './formats'
import './NoCodeFormats.css'

/* The no-code page's formats (23 Nov 2026, Seun: "it doesn't matter the format"): one result, a lead response check
   that found a demo form with no call 2 hours after the enquiry, drawn as it lands in each tool: a Slack message, an
   email, a field on the lead in the CRM, a row in a sheet, a line in the weekly PDF, an answer from the team's AI
   assistant, and an open tile for any other tool. Each tile is a small product surface, so a reader sees the same
   finding seven ways. Static by design: the point is the side-by-side. The company and the form are invented. */
export function NoCodeFormats({ formats }: { formats: NoCodePage['formats'] }) {
  const r = formats.result
  return (
    <figure className="nc-fmts">
      <ul className="nc-fmts__grid" aria-label={`${r.title}: ${r.detail}, delivered to ${formats.items.map((i) => i.name).join(', ')}`}>
        {formats.items.map((it) => (
          <li key={it.id} className={'nc-fmts__tile nc-fmts__tile--' + it.id}>
            <div className="nc-fmts__surface" aria-hidden="true">
              {it.id === 'slack' && (
                <div className="nc-m-slack">
                  <p className="nc-m-chan"># sales</p>
                  <div className="nc-m-msg">
                    <span className="nc-m-av" />
                    <div>
                      <p className="nc-m-who">
                        <b>Obsession</b> <span>{r.at}</span>
                      </p>
                      <p className="nc-m-t">{r.title}</p>
                      <p className="nc-m-d">{r.detail}</p>
                    </div>
                  </div>
                </div>
              )}
              {it.id === 'email' && (
                <div className="nc-m-email">
                  <p className="nc-m-row"><span>From</span>Obsession</p>
                  <p className="nc-m-row"><span>Subject</span>{r.title}</p>
                  <p className="nc-m-d">{r.detail}. Two other forms answered within 3 minutes.</p>
                </div>
              )}
              {it.id === 'crm' && (
                <div className="nc-m-crm">
                  <p className="nc-m-rec">Lead · UK demo form</p>
                  <p className="nc-m-field"><span>First call</span><b>None after 2 h</b></p>
                  <p className="nc-m-field"><span>Target</span><b>5 min</b></p>
                  <p className="nc-m-field"><span>Status</span><b className="nc-m-flag">Flagged</b></p>
                </div>
              )}
              {it.id === 'sheet' && (
                <table className="nc-m-sheet">
                  <thead>
                    <tr><th>Form</th><th>First call</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>US demo</td><td>4 min</td></tr>
                    <tr className="is-hit"><td>UK demo</td><td>None, 2 h</td></tr>
                    <tr><td>Pricing</td><td>3 min</td></tr>
                  </tbody>
                </table>
              )}
              {it.id === 'pdf' && (
                <div className="nc-m-pdf">
                  <p className="nc-m-pdf-h">Weekly lead response</p>
                  <span className="nc-m-bar" style={{ width: '82%' }} />
                  <span className="nc-m-bar" style={{ width: '64%' }} />
                  <p className="nc-m-pdf-hit">{r.detail}</p>
                  <span className="nc-m-bar" style={{ width: '74%' }} />
                </div>
              )}
              {it.id === 'assistant' && (
                <div className="nc-m-chat">
                  <p className="nc-m-q">Which forms were slow this week?</p>
                  <p className="nc-m-a">The UK demo form: no call 2 hours after the enquiry.</p>
                </div>
              )}
              {it.id === 'any' && (
                <div className="nc-m-any">
                  <span className="nc-m-plus">
                    <FormatIcon id="any" />
                  </span>
                </div>
              )}
            </div>
            <p className="nc-fmts__name">
              {it.id !== 'any' && <FormatIcon id={it.id} />}
              <b>{it.name}</b>
            </p>
            <p className="nc-fmts__place">{it.place}</p>
          </li>
        ))}
      </ul>
      <figcaption className="nc-fmts__cap">{formats.note}</figcaption>
    </figure>
  )
}
