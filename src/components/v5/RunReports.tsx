import { useCallback, useId, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { outputFormats } from '../../content/sample'
import type { RunReports as RunReportsContent } from '../../content/types'
import { Mark } from '../Logo'
import { FormatStage } from '../sections/Outputs'
import './RunReports.css'

/* Home's run section (COPY.md, "Proof"; 4 Nov). 1 Obsession run on the left, wired to the 6 formats a run's findings
   arrive in, and the chosen format's view beside them on the same row (the same stage /sample-output draws). The study
   and the link to the sample run sit at the foot. The wires are drawn from the measured positions once the app runs;
   at rest the row reads without them. Below 900px it stacks and the wires go. */
const GLYPH: Record<string, string> = { pdf: 'PDF', email: '@', slack: '#', clay: 'CSV', webhook: '{ }', workflow: '→' }

export function RunReports({ runs, id }: { runs: RunReportsContent; id?: string }) {
  const base = useId()
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState(false)
  const row = useRef<HTMLDivElement>(null)
  const logo = useRef<HTMLSpanElement>(null)
  const svg = useRef<SVGSVGElement>(null)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const [paths, setPaths] = useState<{ d: string; box: string; y0: number } | null>(null)

  /* Each wire runs from the mark's middle to the left edge of its format, measured on the page. */
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

  const select = (n: number, focus = false) => {
    const next = (n + outputFormats.length) % outputFormats.length
    setIndex(next)
    setPicked(true)
    if (focus) tabs.current[next]?.focus()
  }
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowDown: index + 1, ArrowRight: index + 1, ArrowUp: index - 1, ArrowLeft: index - 1, Home: 0, End: outputFormats.length - 1 }
    if (!(e.key in keys)) return
    e.preventDefault()
    select(keys[e.key], true)
  }

  const f = outputFormats[index]
  const lines = paths ? paths.d.split('|') : []
  return (
    <section className="v5-section v5-runs" id={id} aria-labelledby={`${base}-h`}>
      <div className="s-wrap">
        <div className="v5-head">
          <h2 className="v5-h2" id={`${base}-h`}>
            {runs.heading}
          </h2>
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
            <div className="v5-runs-tiles" role="tablist" aria-labelledby={`${base}-l`} onKeyDown={onKey}>
              {outputFormats.map((o, n) => (
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
          <div className="v5-runs-panel" role="tabpanel" id={`${base}-p`} aria-labelledby={`${base}-t-${f.id}`}>
            <p className="v5-runs-line">{f.line}</p>
            <FormatStage format={f} picked={picked} className="v5-runs-stage" />
          </div>
        </div>
        <div className="v5-runs-foot">
          <p className="v5-runs-study">
            <b>{runs.study.value}</b> {runs.study.text}
          </p>
          <Link className="v5-link" to={runs.cta.to}>
            {runs.cta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
