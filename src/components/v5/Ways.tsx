import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import type { Way, Ways as WaysContent } from '../../content/types'
import './Ways.css'

/* The ways in (COPY.md, "Home > Use it from anywhere"): the same customer agents and the same record from our website,
   from your own agent in a chat, from a workflow file, or from code. 1 tab per way, each showing the real object of
   that way: the platform's ask box, a chat with the agent's calls, a file, a script. Tabs follow the ARIA tabs pattern
   (arrow keys move between them). Every panel stays in the page for search and llms-full.txt (data-llms="keep"); only
   the chosen one shows. Under the tabs, the 5 verbs every way uses.
   Each object plays once the section is on screen, and again when its tab is chosen: the chat's setup command types, the
   question lands, the calls run one by one and the reply arrives line by line; the ask box fills and the plan
   follows; a file or a script writes itself line by line. Under reduced motion each shows finished. */
export function Ways({ ways, id }: { ways: WaysContent; id?: string }) {
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
    const n = ways.ways.length
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
    <section ref={ref} className="v5-section v5-ways" id={id} aria-labelledby={`${hid}-h`} data-live={live ? '' : undefined}>
      <div className="s-wrap">
        <div className="v5-head">
          <h2 className="v5-h2" id={`${hid}-h`}>
            {ways.heading}
          </h2>
          {ways.line && <p className="v5-line">{ways.line}</p>}
        </div>
        <div className="v5-ways-tabs" role="tablist" aria-label={ways.heading} onKeyDown={onKey}>
          {ways.ways.map((w, k) => (
            <button
              key={w.tab}
              ref={(el) => {
                tabs.current[k] = el
              }}
              type="button"
              role="tab"
              id={`${hid}-t${k}`}
              aria-selected={k === cur}
              aria-controls={`${hid}-p${k}`}
              tabIndex={k === cur ? 0 : -1}
              className="v5-ways-tab"
              onClick={() => setCur(k)}
            >
              {w.tab}
            </button>
          ))}
        </div>
        {ways.ways.map((w, k) => (
          <div
            key={w.tab}
            role="tabpanel"
            id={`${hid}-p${k}`}
            aria-labelledby={`${hid}-t${k}`}
            hidden={k !== cur}
            data-llms="keep"
            className="v5-ways-panel"
          >
            <div className="v5-ways-copy">
              <h3 className="v5-ways-title">{w.title}</h3>
              <p className="v5-ways-line">{w.line}</p>
              <p className="v5-ways-who">{w.who}</p>
            </div>
            <div className="v5-ways-object">
              <WayObject way={w} />
            </div>
          </div>
        ))}
        <div className="v5-ways-verbs">
          <h3 className="v5-ways-verbs-h">{ways.verbs.heading}</h3>
          <dl>
            {ways.verbs.items.map((v) => (
              <div key={v.name}>
                <dt>
                  <code>{v.name}</code>
                </dt>
                <dd>{v.line}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function WayObject({ way }: { way: Way }) {
  if (way.kind === 'platform') {
    return (
      <div className="v5-ways-app" aria-label="Example: the Obsession website">
        <p className="v5-ways-ask">{way.ask}</p>
        <ul className="v5-ways-chips">
          {way.recipes.map((r, k) => (
            <li key={r} className={k === 0 ? 'is-on' : undefined}>
              {r}
            </li>
          ))}
        </ul>
        <dl className="v5-ways-plan">
          {way.plan.map((p, k) => (
            <div key={p.k} style={{ ['--k' as string]: k }}>
              <dt>{p.k}</dt>
              <dd>{p.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    )
  }
  if (way.kind === 'chat') {
    return (
      <div className="v5-ways-chat" aria-label="Example: a chat with your own agent">
        <pre className="v5-ways-setup">
          <code className="v5-ways-typed">{way.setup}</code>
        </pre>
        <p className="v5-ways-you">{way.you}</p>
        <ul className="v5-ways-calls">
          {way.calls.map((c, k) => (
            <li key={c} style={{ ['--k' as string]: k }}>
              <code>{c}</code>
            </li>
          ))}
        </ul>
        <div className="v5-ways-reply">
          {way.reply.map((l, k) => (
            <p key={l} style={{ ['--k' as string]: k }}>
              {l}
            </p>
          ))}
          <p className="v5-ways-proof" style={{ ['--k' as string]: way.reply.length }}>
            {way.proof}
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="v5-ways-code">
      <p className="v5-ways-file">{way.file}</p>
      <pre>
        <code>
          {way.code.split('\n').map((line, k) => (
            <span className="v5-ways-ln" key={k} style={{ ['--k' as string]: k }}>
              {line + '\n'}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}
