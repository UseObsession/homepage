import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type AnimationEvent, type CSSProperties, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { outputFormats } from '../../content/sample'
import type { RunReports as RunReportsContent, ViewerFormat } from '../../content/types'
import { Mark } from '../Logo'
import { FormatStage } from '../sections/Outputs'
import './Ask.css'
import './RunReports.css'

/* Home's run section (COPY.md, "Formats"; 4 Nov). 1 Obsession run on the left, wired to every place its findings go,
   and the chosen one's view beside them on the same row (the formats draw the same stage /sample-output does). Since 4
   Nov it also holds the ask section: a tile above the formats for asking in your own AI agent (1 chat thread, the line
   that connects it, and where else you can ask from) and a tile after Sheet or Clay for your own code. Those 2 views are
   drawn here, with the ask section's own bubbles (Ask.css), so /sample-output's real run keeps only its real formats.
   Until someone picks a tile, the tiles take turns, as the ask section's questions did: a line fills under the chosen
   one, and its end opens the next. It holds while the pointer is over the row or the section is off screen; a click or a
   key stops it for good; under reduced motion nothing moves on its own. The study and the sample run may sit at the
   foot (Home leaves the foot out: its study is the Finding callout). The wires are drawn from the measured positions
   once the app runs; at rest the row reads without them. Below 720px it stacks and the wires go. */
const GLYPH: Record<string, string> = { agent: 'AI', pdf: 'PDF', email: '@', slack: '#', clay: 'CSV', code: '</>', webhook: '{ }', workflow: '→' }
/* How long each tile holds before the next opens: the chat thread plays for about 6 seconds, then reads. */
const TURN: Record<string, string> = { agent: '14s', code: '8s' }

type Tile = { id: string; label: string; line: string; format?: ViewerFormat }

export function RunReports({ runs, id }: { runs: RunReportsContent; id?: string }) {
  const base = useId()
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState(false)
  const [auto, setAuto] = useState(true)
  const [seen, setSeen] = useState(false)
  const [live, setLive] = useState(false)
  const section = useRef<HTMLElement>(null)
  const row = useRef<HTMLDivElement>(null)
  const logo = useRef<HTMLSpanElement>(null)
  const svg = useRef<SVGSVGElement>(null)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const [paths, setPaths] = useState<{ d: string; box: string; y0: number } | null>(null)

  /* The agent first, the formats, your code after Sheet or Clay. */
  const formats: Tile[] = (runs.formats ?? outputFormats).map((f) => ({ id: f.id, label: f.label, line: f.line, format: f }))
  const cut = formats.findIndex((t) => t.id === 'clay') + 1
  const tiles: Tile[] = [
    ...(runs.agent ? [{ id: 'agent', label: runs.agent.label, line: runs.agent.line }] : []),
    ...formats.slice(0, cut),
    ...(runs.code ? [{ id: 'code', label: runs.code.label, line: runs.code.line }] : []),
    ...formats.slice(cut),
  ]

  /* Each wire runs from the mark's middle to the left edge of its tile, measured on the page. */
  const draw = useCallback(() => {
    const el = svg.current
    const mark = logo.current
    if (!el || !mark) return
    const box = el.getBoundingClientRect()
    if (!box.width || !box.height) return setPaths(null)
    const m = mark.getBoundingClientRect()
    const y0 = m.top + m.height / 2 - box.top
    const w = box.width
    const d = tabs.current
      .map((t) => {
        if (!t) return ''
        const r = t.getBoundingClientRect()
        const y = r.top + r.height / 2 - box.top
        return `M0 ${y0} C ${w * 0.6} ${y0}, ${w * 0.4} ${y}, ${w} ${y}`
      })
      .join('|')
    setPaths({ d, box: `0 0 ${w} ${box.height}`, y0 })
  }, [])

  useLayoutEffect(() => {
    draw()
    const el = row.current
    if (!el || !('ResizeObserver' in window)) return
    const ro = new ResizeObserver(draw)
    ro.observe(el)
    return () => ro.disconnect()
  }, [draw])

  useEffect(() => {
    const el = section.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([e]) => {
        setSeen(e.isIntersecting)
        if (e.isIntersecting) setLive(true)
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const select = (n: number, focus = false) => {
    const next = (n + tiles.length) % tiles.length
    setIndex(next)
    setPicked(true)
    setAuto(false)
    if (focus) tabs.current[next]?.focus()
  }
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowDown: index + 1, ArrowRight: index + 1, ArrowUp: index - 1, ArrowLeft: index - 1, Home: 0, End: tiles.length - 1 }
    if (!(e.key in keys)) return
    e.preventDefault()
    select(keys[e.key], true)
  }
  const onTurn = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName !== 'v5-runs-turn') return
    setIndex((i) => (i + 1) % tiles.length)
    setPicked(true)
  }

  const t = tiles[index]
  const lines = paths ? paths.d.split('|') : []
  return (
    <section
      ref={section}
      className="v5-section v5-runs"
      id={id}
      aria-labelledby={`${base}-h`}
      data-live={live ? '' : undefined}
      data-seen={seen ? '' : undefined}
      data-auto={auto ? '' : undefined}
    >
      <div className="s-wrap">
        <div className="v5-head">
          {runs.kicker && <p className="v5-kicker">{runs.kicker}</p>}
          <h2 className="v5-h2" id={`${base}-h`}>
            {runs.heading}
          </h2>
          {runs.line && <p className="v5-line">{runs.line}</p>}
        </div>
        <div className="v5-runs-row" ref={row}>
          <div className="v5-runs-node">
            <span className="v5-runs-logo" ref={logo}>
              <Mark size={40} />
            </span>
            <b>{runs.node.title}</b>
            <span>{runs.node.line}</span>
          </div>
          <div className="v5-runs-wirebox" aria-hidden="true">
            <svg className="v5-runs-wires" ref={svg} viewBox={paths?.box}>
              {lines.map((d, n) => (
                <path key={n} d={d} className={n === index ? 'is-on' : undefined} />
              ))}
              {paths && <circle cx="0" cy={paths.y0} r="3.5" />}
            </svg>
          </div>
          <div className="v5-runs-formats">
            <p className="v5-runs-label" id={`${base}-l`}>
              {runs.label}
            </p>
            <div className="v5-runs-tiles" role="tablist" aria-labelledby={`${base}-l`} onKeyDown={onKey} onAnimationEnd={onTurn}>
              {tiles.map((o, n) => (
                <button
                  key={o.id}
                  ref={(el) => {
                    tabs.current[n] = el
                  }}
                  type="button"
                  role="tab"
                  id={`${base}-t-${o.id}`}
                  aria-selected={n === index}
                  aria-controls={`${base}-p`}
                  tabIndex={n === index ? 0 : -1}
                  className="v5-runs-tile"
                  style={TURN[o.id] ? ({ '--turn': TURN[o.id] } as CSSProperties) : undefined}
                  onClick={() => select(n)}
                >
                  <span className="v5-runs-glyph" aria-hidden="true">
                    {GLYPH[o.id]}
                  </span>
                  <span>{o.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="v5-runs-panel" role="tabpanel" id={`${base}-p`} aria-labelledby={`${base}-t-${t.id}`}>
            <p className="v5-runs-line">{t.line}</p>
            {t.format ? (
              <FormatStage format={t.format} picked={picked} className="v5-runs-stage" />
            ) : t.id === 'agent' && runs.agent ? (
              <AgentStage agent={runs.agent} />
            ) : (
              runs.code && <CodeStage code={runs.code} />
            )}
          </div>
        </div>
        {(runs.study || runs.cta) && (
          <div className="v5-runs-foot">
            {runs.study && (
              <p className="v5-runs-study">
                <b>{runs.study.value}</b> <span>{runs.study.text}</span>
              </p>
            )}
            {runs.cta && (
              <Link className="v5-link" to={runs.cta.to}>
                {runs.cta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

/* Asked in your AI agent: 1 window, the line that connected it once, then 1 thread of questions, each answered line by
   line with its receipts (each part's start, `--at`, follows the last, RunReports.css). Under the window, everywhere
   else you can ask from, as pills. On a phone only the first question shows, so the window stays the height every
   tile's view shares there. */
function AgentStage({ agent }: { agent: NonNullable<RunReportsContent['agent']> }) {
  /* A question's whole play: its bubble, the reply's lines 0.45s apart, the receipts, then a beat. */
  const play = (x: { a: string[] }) => 0.8 + x.a.length * 0.45 + 0.7
  const thread = agent.thread.map((x, i) => {
    const at = 0.3 + agent.thread.slice(0, i).reduce((s, y) => s + play(y), 0)
    return { ...x, at, reply: at + 0.6, line: (k: number) => at + 0.8 + k * 0.45 }
  })
  const delay = (s: number) => ({ '--at': `${s.toFixed(2)}s` }) as CSSProperties
  return (
    <div className="s-ov__stage s-ov__stage--agent ob-object v5-runs-stage">
      <div className="v5-runs-chat">
        <p className="v5-ask-app">
          <span className="v5-ask-dots" aria-hidden="true" />
          {agent.where}
        </p>
        <p className="v5-ask-connect" style={delay(0.05)}>
          <span className="v5-ask-connect-label">Connected once with</span>
          <code>{agent.connect}</code>
        </p>
        {thread.map((x) => (
          <div className="v5-runs-x" key={x.q}>
            <p className="v5-ask-you" style={delay(x.at)}>
              {x.q}
            </p>
            <div className="v5-ask-reply" style={delay(x.reply)}>
              {x.a.map((l, k) => (
                <p key={l} style={delay(x.line(k))}>
                  {l}
                </p>
              ))}
              <p className="v5-ask-receipts" style={delay(x.line(x.a.length))}>
                {x.receipts}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="v5-runs-from">
        <h3 className="v5-runs-label">{agent.from.label}</h3>
        <ul className="v5-ask-chips">
          {agent.from.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* Use from your code: the file, and only its code. */
function CodeStage({ code }: { code: NonNullable<RunReportsContent['code']> }) {
  return (
    <div className="s-ov__stage s-ov__stage--code ob-object v5-runs-stage">
      <div className="v5-runs-chat">
        <p className="v5-ask-app">
          <span className="v5-ask-dots" aria-hidden="true" />
          {code.file}
        </p>
        <pre className="v5-ask-code" style={{ '--at': '0.2s' } as CSSProperties}>
          <code>{code.code}</code>
        </pre>
      </div>
    </div>
  )
}
