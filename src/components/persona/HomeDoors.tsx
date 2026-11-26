import { useEffect, useId, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { HomeDoors as Words } from '../../content/types'
import './blueprint.css'
import './HomeDoors.css'

/* The four ways in (#start; two until 26 Nov 2026, when companies and partners joined as a second row with a near-real list
   each: a company's directory, a partner's clients), Home's last section before the sign-up (23 Nov 2026). Seun: send developers and every team
   that doesn't code to their own page, make it plain that Obsession works for both, and let each reader picture using
   it; then "subtle visual cues ... feel interactive and clean ... intelligently animated ... even if a card".

   Two cards side by side (stacked on a phone), each one link to its page. Inside each, one small working picture:
   - Developers pick how they build (the SDK call, the webhook, MCP) and watch their agent's events arrive, newest on top,
     one every few seconds, the newest with the 50 ms it took to reach them. Whatever tab is picked, the same events
     come back: the point of the picture.
   - Teams that don't code see one team's job at a time (marketing, sales, support, finance, operations), its blanks
     filling in turn, then the result landing where that team works. The tour moves on every TOUR ms with a hairline
     filling on the chosen team; picking a team stops it for good.

   Cues, all quiet: a soft light follows the pointer across the card, the card lifts and its edge strengthens, the link's
   words fill like a button with a chevron that steps right, the tabs are raised when chosen. Motion runs only while the
   card is on screen and motion is allowed; under prefers-reduced-motion nothing moves or advances by itself, the first
   job and the newest events show, and the tabs still work. Before the page's script runs every word shows. Words:
   content/pages/home.ts (homeDoors). */

const tie = (s: string) => s.replace(/(\d) /g, '$1 ')


/* On screen and allowed to move: the two conditions every loop here waits for. */
function useLive<T extends Element>() {
  const ref = useRef<T>(null)
  const [onScreen, setOnScreen] = useState(false)
  const [motion, setMotion] = useState(false)
  useEffect(() => {
    setMotion(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, live: onScreen && motion, motion, onScreen }
}

/* One agent or 100 million: six steps on a log scale, each a bar that grows, the chosen one lit with who runs that many.
   It climbs once from 1 to 100 million while on screen, a hairline filling under the chosen step, and stops on the
   top step; picking a step stops it. Under reduced motion it rests on the top step and the steps still work. */
const CLIMB = 2300
function Scale({ scale }: { scale: NonNullable<Words['scale']> }) {
  const { ref, live } = useLive<HTMLDivElement>()
  const last = scale.steps.length - 1
  const [i, setI] = useState(last)
  const [climbing, setClimbing] = useState(false)
  const started = useRef(false)
  useEffect(() => {
    if (!live || started.current) return
    started.current = true
    setI(0)
    setClimbing(true)
  }, [live])
  useEffect(() => {
    if (!climbing || !live) return
    if (i >= last) {
      setClimbing(false)
      return
    }
    const t = window.setTimeout(() => setI((x) => x + 1), CLIMB)
    return () => window.clearTimeout(t)
  }, [climbing, live, i, last])
  const pick = (k: number) => {
    started.current = true
    setClimbing(false)
    setI(k)
  }
  const top = Math.log10(scale.steps[last].n) || 1
  const st = scale.steps[i]
  return (
    <div ref={ref} className="h-dr__scale">
      <div className="h-dr__scale-head">
        <p className="h-dr__scale-h">{scale.heading}</p>
        <p className="h-dr__scale-line">{scale.line}</p>
      </div>
      <div className="h-dr__ladder" role="group" aria-label={scale.label}>
        {scale.steps.map((x, k) => (
          <button
            key={x.n}
            type="button"
            className="h-dr__rung"
            aria-pressed={k === i}
            aria-label={`${x.n.toLocaleString('en-US')} ${x.n === 1 ? 'agent' : 'agents'}`}
            onClick={() => pick(k)}
            style={{ ['--h' as string]: 0.14 + (0.86 * Math.log10(x.n)) / top } as CSSProperties}
          >
            <span className="h-dr__bar" aria-hidden="true" />
            <span className="h-dr__rung-n">{x.short}</span>
            {climbing && k === i && <i className="h-dr__rung-prog" key={k} aria-hidden="true" style={{ ['--climb' as string]: `${CLIMB}ms` } as CSSProperties} />}
          </button>
        ))}
      </div>
      <p className="h-dr__case" key={i} aria-live="polite">
        <b>{`${st.n.toLocaleString('en-US')} ${st.n === 1 ? 'agent' : 'agents'}`}</b>
        <span>{st.case}</span>
      </p>
    </div>
  )
}

/* The four ways in as James's curtain (26 Nov 2026; Seun: "like the curtain type the old Obsession used to have for
   sales, marketing, developers and agents ... interactive and the glowing colours"; James: no line the rest of the page
   already says). His band from the 2 Oct site (src/legacy/james/components/PersonaBand) rebuilt on the design system:
   four panels in one row, cut on the slant, each its door's colour as a glow rising from its foot. At rest each shows its
   number, its name and the circled arrow; under the pointer or keyboard focus the panel widens like a curtain, its glow
   rises and one short line and the link's words come in. Without hover (a touch screen) everything shows; on a phone the
   panels stack. Each panel is one link to its door's page. */
function DoorBand({ doors }: { doors: Words['doors'] }) {
  return (
    <ul className="h-db">
      {doors.map((d, i) => (
        <li className="h-db__item" data-reader={d.reader} key={d.id}>
          <Link className="h-db__link" to={d.cta.to}>
            <span className="h-db__n" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="h-db__name">
              {d.label}
              <span className="s-sr">. </span>
            </span>
            <span className="h-db__more">
              <span className="h-db__more-in">
                <span className="h-db__line">{tie(d.line)}</span>
                <span className="h-db__cta">{d.cta.label}</span>
              </span>
            </span>
            <span className="h-db__go" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function HomeDoors({ doors, id, tone }: { doors: Words; id?: string; tone?: 'alt' }) {
  const hid = useId()
  return (
    <section className="s-section h-dr" id={id} data-tone={tone} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {doors.heading}
          </h2>
          {doors.line && <p className="s-bp-line">{doors.line}</p>}
        </div>
        <DoorBand doors={doors.doors} />
        {doors.scale && <Scale scale={doors.scale} />}
      </div>
    </section>
  )
}
