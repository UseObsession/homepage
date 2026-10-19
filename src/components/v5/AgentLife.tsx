import { useId } from 'react'
import type { Life } from '../../content/types'
import { useInView } from './useInView'
import './AgentLife.css'

/* How it works, breadth first (COPY.md, "Home > How it works"): a list fans out to many companies at once, each lane a
   customer agent of 1 company, on 1 axis from Monday 09:00 to day 90. The 3 named lanes are the hero's companies, each
   wake labelled where it lands; the faded lane under them is the rest of the list, its dots only. Under the axis, the
   4 phases, in order (a real sequence, so they are numbered).
   The axis is logarithmic in days, so the first minutes and days have room beside the months. Drawn once in view: the
   lanes run out from the list in turn, the wakes land in time order, the rest of the list fills in. Under reduced
   motion it is drawn at rest. */
const SPAN = 90
const at = (day: number) => Math.log1p(day) / Math.log1p(SPAN)
/* The first minutes sit a little off the start, so the first wake reads beside the lane's beginning. */
const x = (day: number) => `${(4 + at(day) * 96).toFixed(2)}%`

export function AgentLife({ life, id }: { life: Life; id?: string }) {
  const hid = useId()
  const [ref, on] = useInView<HTMLDivElement>()
  return (
    <section className="v5-section v5-life" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="v5-head">
          <h2 className="v5-h2" id={`${hid}-h`}>
            {life.heading}
          </h2>
          {life.line && <p className="v5-line">{life.line}</p>}
        </div>

        <div className="v5-life-map" ref={ref} data-v5-play="" data-on={on ? '' : undefined} role="img" aria-label={mapLabel(life)}>
          <div className="v5-life-head" aria-hidden="true">
            <span className="v5-life-list">{life.list}</span>
            <span className="v5-life-axis">
              <span className="v5-life-tick" style={{ left: x(0) }}>
                {life.axis.start}
              </span>
              {life.axis.ticks.map((t) => (
                <span className="v5-life-tick" key={t.label} style={{ left: x(t.day) }}>
                  {t.label}
                </span>
              ))}
            </span>
          </div>
          <div className="v5-life-lanes" aria-hidden="true">
            {life.lanes.map((lane, l) => (
              <div className="v5-life-lane" key={lane.name} style={{ ['--l' as string]: l }}>
                <span className="v5-life-name">{lane.name}</span>
                <span className="v5-life-track">
                  {lane.wakes.map((w) => (
                    <span className="v5-life-wake" key={w.label} style={{ left: x(w.day), ['--t' as string]: at(w.day) }}>
                      <span className="v5-life-dot" />
                      <span className="v5-life-label">{w.label}</span>
                    </span>
                  ))}
                </span>
              </div>
            ))}
            <div className="v5-life-lane v5-life-lane--more" style={{ ['--l' as string]: life.lanes.length }}>
              <span className="v5-life-name">{life.more.name}</span>
              <span className="v5-life-track">
                {life.more.days.map((d, k) => (
                  <span className="v5-life-wake" key={k} style={{ left: x(d), ['--t' as string]: at(d) }}>
                    <span className="v5-life-dot" />
                  </span>
                ))}
              </span>
            </div>
          </div>
          <p className="v5-life-end" aria-hidden="true">
            {life.axis.end}
          </p>
        </div>

        <ol className="v5-life-steps">
          {life.phases.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>
                {s.lead && <strong>{s.lead}</strong>} {s.line}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function mapLabel(life: Life) {
  const lanes = life.lanes.map((l) => `${l.name}: ${l.wakes.map((w) => w.label).join(', ')}`).join('; ')
  return `${life.list}, all signed up at ${life.axis.start}. ${lanes}; and ${life.more.name}, each woken when its company acts. ${life.axis.end}.`
}
