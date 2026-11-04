import { useId, useRef, useState, type KeyboardEvent } from 'react'
import type { Look as LookContent, LookKind } from '../../content/types'
import './Look.css'

/* What does that look like (Home, 4 Nov evening, Seun's order): the hero's promise as 1 AI customer's receipt at 1
   company. The receipt is the page's 1 memorable object (styles/v5.css): paper, mono, a torn foot, stamped Example.
   Each row is what came, or what the AI customer did, in order; a numbered mark on a row makes it the receipt for that
   finding, and the findings sit beside the receipt in plain words with the same numbers. The AI customer's own steps
   are set quieter than what the company sent, so what came reads first. 1 tab per company, following the ARIA tabs
   pattern (arrow keys move between them, as components/v5/Ways). Every panel stays in the page for search and
   llms-full.txt (data-llms="keep"); only the chosen one shows. Below 560px a row's time and kind sit over its line. */
const KIND: Record<LookKind, string> = {
  action: 'Action',
  email: 'Email',
  text: 'Text',
  offer: 'Offer',
  reply: 'Reply',
  page: 'Page',
  nothing: 'Nothing',
}

export function Look({ look, id }: { look: LookContent; id?: string }) {
  const hid = useId()
  const [cur, setCur] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const n = look.stories.length
    let next = -1
    if (e.key === 'ArrowRight') next = (cur + 1) % n
    else if (e.key === 'ArrowLeft') next = (cur - 1 + n) % n
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = n - 1
    if (next < 0) return
    e.preventDefault()
    setCur(next)
    tabs.current[next]?.focus()
  }
  return (
    <section className="v5-section v5-look" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="v5-head">
          {look.kicker && <p className="v5-kicker">{look.kicker}</p>}
          <h2 className="v5-h2" id={`${hid}-h`}>
            {look.heading}
          </h2>
          {look.line && <p className="v5-line">{look.line}</p>}
        </div>
        <div className="v5-look-tabs" role="tablist" aria-label={look.heading} onKeyDown={onKey}>
          {look.stories.map((s, k) => (
            <button
              key={s.site}
              ref={(el) => {
                tabs.current[k] = el
              }}
              type="button"
              role="tab"
              id={`${hid}-t${k}`}
              aria-selected={k === cur}
              aria-controls={`${hid}-p${k}`}
              tabIndex={k === cur ? 0 : -1}
              className="v5-look-tab"
              onClick={() => setCur(k)}
            >
              {s.tab}
            </button>
          ))}
        </div>
        {look.stories.map((s, k) => (
          <div
            key={s.site}
            role="tabpanel"
            id={`${hid}-p${k}`}
            aria-labelledby={`${hid}-t${k}`}
            hidden={k !== cur}
            data-llms="keep"
            className="v5-look-panel"
          >
            <div className="v5-receipt v5-look-receipt">
              <div className="v5-look-top">
                <div>
                  <p className="v5-look-site">{s.site}</p>
                  <p className="v5-look-co">{s.company}, 1 AI customer</p>
                </div>
                <span className="v5-stamp">{look.stamp}</span>
              </div>
              <div className="v5-receipt-row">
                <span className="v5-receipt-k">Path</span>
                <span className="v5-receipt-v">{s.path}</span>
              </div>
              <div className="v5-receipt-row">
                <span className="v5-receipt-k">Kept</span>
                <span className="v5-receipt-v">{s.kept}</span>
              </div>
              <hr className="v5-receipt-rule" />
              <ol className="v5-look-rows">
                {s.rows.map((r) => (
                  <li key={`${r.when}${r.text}`} className="v5-look-row" data-kind={r.kind} data-found={r.found ? '' : undefined}>
                    <span className="v5-look-when">{r.when}</span>
                    <span className="v5-look-kind">{KIND[r.kind]}</span>
                    <span className="v5-look-text">{r.text}</span>
                    {r.found && (
                      <span className="v5-look-mark">
                        <span className="sr-only">Finding </span>
                        {r.found}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
              <hr className="v5-receipt-rule" />
              <p className="v5-look-tally">{look.tally.replace('{n}', String(s.found.length))}</p>
            </div>
            <div className="v5-look-found">
              <p className="v5-look-found-h">{look.foundLabel}</p>
              <ol>
                {s.found.map((f, n) => (
                  <li key={f}>
                    <span className="v5-look-mark" aria-hidden="true">
                      {n + 1}
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
