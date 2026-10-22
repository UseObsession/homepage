import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import type { Ask as AskContent } from '../../content/types'
import './Ask.css'

/* The ask section (docs/positioning/ask-section.md): the record sold as data you ask. The heading types its middle
   phrase in turn (any company, rivals, prospects, clients, your own store): the HTML holds the full sentence for search,
   screen readers and llms-full.txt, and a hidden copy of the longest phrase holds the heading's height, so nothing
   below it moves. The questions sit on the left as
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
  const typed = useTypewriter(ask.type.phrases, live)
  const longest = ask.type.phrases.reduce((a, b) => (b.length > a.length ? b : a), '')
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
          <h2 className="v5-h2 v5-ask-h2" id={`${hid}-h`}>
            <span className="v5-visually-hidden">{ask.heading}</span>
            <span className="v5-ask-type" aria-hidden="true">
              <span className="v5-ask-sizer">
                {ask.type.lead} {longest}
                {ask.type.tail}
              </span>
              <span className="v5-ask-shown">
                {ask.type.lead} <span className="v5-ask-typed">{typed}</span>
                <span className="v5-ask-caret" />
                {ask.type.tail}
              </span>
            </span>
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

/* Types the phrases in turn once `on` (the section is on screen): holds each for a moment, deletes it, types the next,
   and loops. It starts from the first phrase, the one in the HTML, so the first paint and hydration agree; under reduced
   motion, or with 1 phrase, it stays there. */
function useTypewriter(phrases: string[], on: boolean) {
  const [text, setText] = useState(phrases[0])
  useEffect(() => {
    if (!on || phrases.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let i = 0
    let pos = phrases[0].length
    let deleting = true
    let t = 0
    const tick = () => {
      if (deleting) {
        pos -= 1
        setText(phrases[i].slice(0, pos))
        if (pos > 0) t = window.setTimeout(tick, 22)
        else {
          deleting = false
          i = (i + 1) % phrases.length
          t = window.setTimeout(tick, 320)
        }
        return
      }
      pos += 1
      setText(phrases[i].slice(0, pos))
      if (pos < phrases[i].length) t = window.setTimeout(tick, 46)
      else {
        deleting = true
        t = window.setTimeout(tick, 2600)
      }
    }
    t = window.setTimeout(tick, 2600)
    return () => window.clearTimeout(t)
  }, [on, phrases])
  return text
}
