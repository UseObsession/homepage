import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import type { Ask as AskContent } from '../../content/types'
import './Ask.css'

/* The ask section (docs/positioning/ask-section.md): the record sold as commercial intelligence you ask. Under the
   heading, the areas it covers on this page sit in a small label above it. The questions sit on the left as
   tabs (the ARIA tabs pattern, arrow keys move between them), each saying where it was asked; the chosen one plays on
   the right in that place's window: the question, the answer line by line, then its receipts. Every answer stays in the
   page for search and llms-full.txt (data-llms="keep"); only the chosen one shows. An example asked from code shows only
   its code. Under the stage, what Obsession
   keeps for each company, and where you can ask from. The answer plays once the section is on screen, and again when
   its question is chosen; under reduced motion it shows finished. */
export function Ask({ ask, id }: { ask: AskContent; id?: string }) {
  const hid = useId()
  const [cur, setCur] = useState(0)
  const [live, setLive] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        setLive(true)
        io.disconnect()
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const n = ask.examples.length
    let next = -1
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (cur + 1) % n
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (cur - 1 + n) % n
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = n - 1
    if (next < 0) return
    e.preventDefault()
    setCur(next)
    tabs.current[next]?.focus()
  }
  return (
    <section ref={ref} className="v5-section v5-ask" id={id} aria-labelledby={`${hid}-h`} data-live={live ? '' : undefined}>
      <div className="s-wrap">
        <div className="v5-head">
          <p className="v5-ask-areas">{ask.areas.join(' · ')}</p>
          <h2 className="v5-h2" id={`${hid}-h`}>
            {ask.heading}
          </h2>
          <p className="v5-line">{ask.line}</p>
        </div>
        <div className="v5-ask-grid">
          <div className="v5-ask-qs" role="tablist" aria-label="Questions you could ask" aria-orientation="vertical" onKeyDown={onKey}>
            {ask.examples.map((x, k) => (
              <button
                key={x.q}
                ref={(el) => {
                  tabs.current[k] = el
                }}
                type="button"
                role="tab"
                id={`${hid}-t${k}`}
                aria-selected={k === cur}
                aria-controls={`${hid}-p${k}`}
                tabIndex={k === cur ? 0 : -1}
                className="v5-ask-tab"
                onClick={() => setCur(k)}
              >
                <span className="v5-ask-where">{x.code ? 'Asked from code' : `Asked in ${x.where}`}</span>
                <span className="v5-ask-q">{x.q}</span>
              </button>
            ))}
          </div>
          <div className="v5-ask-stage">
            {ask.examples.map((x, k) => (
              <div
                key={x.q}
                role="tabpanel"
                id={`${hid}-p${k}`}
                aria-labelledby={`${hid}-t${k}`}
                hidden={k !== cur}
                data-llms="keep"
                className="v5-ask-panel"
              >
                <p className="v5-ask-app">
                  <span className="v5-ask-dots" aria-hidden="true" />
                  {x.file ?? x.where}
                </p>
                {x.code ? (
                  <pre className="v5-ask-code">
                    <code>{x.code}</code>
                  </pre>
                ) : (
                  <>
                    {ask.connect[x.where] && (
                      <p className="v5-ask-connect">
                        <span className="v5-ask-connect-label">Connected once with</span>
                        <code>{ask.connect[x.where]}</code>
                      </p>
                    )}
                    <p className="v5-ask-you">{x.q}</p>
                  </>
                )}
                {x.a && (
                  <div className="v5-ask-reply">
                    {x.a.map((l, j) => (
                      <p key={l} style={{ ['--k' as string]: j }}>
                        {l}
                      </p>
                    ))}
                    {x.receipts && (
                      <p className="v5-ask-receipts" style={{ ['--k' as string]: x.a.length }}>
                        {x.receipts}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="v5-ask-foot">
          <div className="v5-ask-keeps">
            <h3 className="v5-ask-h3">{ask.keeps.heading}</h3>
            <ul>
              {ask.keeps.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="v5-ask-from">
            <h3 className="v5-ask-h3">{ask.from.label}</h3>
            <ul className="v5-ask-chips">
              {ask.from.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p className="v5-ask-note">{ask.notYet}</p>
            <Link className="v5-link v5-ask-more" to={ask.more.to}>
              {ask.more.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

