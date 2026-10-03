import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import type { GapStory as Story, GapStoryStep } from '../../content/types'
import { Mark } from '../Logo'
import './GapStory.css'

/* The gap's picture: 1 company over 3 days, on 1 clock, in 2 lanes (content/types.ts GapStory).
   - Above, the outside: what a tool that reads a company sees. 1 flat look at 1 moment, then a dashed line where it
     saw nothing more, and its tally. It is drawn thin on purpose: hairlines, no material, no motion after its moment.
   - Below, the inside: a declared AI test customer living it. Each step is a lit product object (.ob-object) on 1 solid
     thread that runs through every day; each lands with the ring, drops a signed receipt on the stack, and the last
     day holds the finding. The waiting days are wide and quiet, because waiting is the point.
   - Time is the hero: 1 ruler for both lanes (Day 0 to Day 3, equal days), the brand square marks now, and the day
     counter at the end of the ruler ticks over as the thread crosses each day.
   The rest state is the finished story (it is what the prerender, reduced motion and print show). Adding .play runs it
   once, about 6 seconds, when it first comes into view (as AppScreen does): every delay below is written into the markup
   as --d, so no script runs beyond adding the class. Nothing loops.
   On phones the ruler turns: days run down the left, the 2 lanes stand side by side as columns.
   The whole picture is 1 image to a screen reader (role="img" and the story's label); everything in it is aria-hidden. */

const UI = { example: 'Example', day: 'Day', signed: 'Signed' }

/* The pace of the story, in seconds. */
const T = {
  start: 0.3, // the first step lands
  travel: 0.6, // the thread crosses 1 day
  hold: 0.3, // a quiet day: the inbox is checked, nothing came
  signup: 1.0,
  chat: 1.3,
  basket: 0.9,
}

type Cue = { at: number; until?: number }
type Planned = { step: GapStoryStep; at: number }
type Plan = {
  steps: Planned[]
  receipts: { at: number; when: string }[]
  clock: { at: number; until?: number; day: number; time: string }[]
  /* When the thread leaves each day (index = day), and when each day begins. */
  leave: number[]
  arrive: number[]
  finding: number
  outside: number
  end: number
}

const when = (day: number, time: string) => `${UI.day} ${day} · ${time}`

function plan(story: Story): Plan {
  const p: Plan = { steps: [], receipts: [], clock: [], leave: [], arrive: [0], finding: 0, outside: 0, end: 0 }
  let t = T.start
  let day = 0
  const tick = (at: number, d: number, time: string) => {
    const last = p.clock[p.clock.length - 1]
    if (last) last.until = at
    p.clock.push({ at, day: d, time })
  }
  const travelTo = (d: number) => {
    while (day < d) {
      p.leave[day] = t
      t += T.travel
      day++
      p.arrive[day] = t
    }
  }
  for (const step of story.inside.steps) {
    travelTo(step.day)
    p.steps.push({ step, at: t })
    tick(t, step.day, step.time)
    if (step.kind === 'signup') {
      p.receipts.push({ at: t + 0.45, when: when(step.day, step.time) })
      tick(t + 0.6, step.day, step.mailTime)
      p.receipts.push({ at: t + 0.8, when: when(step.day, step.mailTime) })
      t += T.signup
    } else if (step.kind === 'chat') {
      p.receipts.push({ at: t + 1.05, when: when(step.day, step.time) })
      t += T.chat
    } else if (step.kind === 'basket') {
      p.receipts.push({ at: t + 0.45, when: when(step.day, step.time) })
      t += T.basket
    } else {
      p.receipts.push({ at: t + 0.25, when: when(step.day, step.time) })
      t += T.hold
    }
  }
  const f = story.inside.finding
  travelTo(f.day)
  p.finding = t
  tick(t, f.day, f.time)
  p.receipts.push({ at: t + 0.45, when: when(f.day, f.time) })
  p.end = t + 0.9
  /* The outside's 1 look: at its day's start, the moment the clock is there (at once on Day 0). */
  const o = story.outside
  p.outside = o.day === 0 ? 0.15 : (p.arrive[o.day] ?? 0) + 0.1
  return p
}

const d = (s: number, extra?: Record<string, string | number>) =>
  ({ '--d': `${s.toFixed(2)}s`, ...extra }) as CSSProperties
const win = (c: Cue) => ({ '--d': `${c.at.toFixed(2)}s`, '--u': c.until === undefined ? undefined : `${c.until.toFixed(2)}s` }) as CSSProperties

/* The ring, in the screens' geometry (src/screens/kit.css). `lands` brings the square home at --d. */
function Sig({ state, cue }: { state: 'landed' | 'wait' | 'needs'; cue?: CSSProperties }) {
  return (
    <svg className={'s-gs-sig is-' + state} viewBox="2 2 96 96" style={cue} aria-hidden="true">
      <path className="s-gs-sig__ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" />
      <path className="s-gs-sig__gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" />
      <path className="s-gs-sig__sq" d="M65.404 16.011h18.585v18.585h-18.585Z" />
    </svg>
  )
}

const Icon = {
  form: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2.25" y="2.75" width="11.5" height="10.5" rx="1.75" />
      <path d="M5 6.25h6M5 9.25h3.5" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5" />
      <path d="m2.75 4.75 5.25 4 5.25-4" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 3.25h10a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75H7.5L4.5 13.5v-2.25H3a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 3 3.25Z" />
    </svg>
  ),
  basket: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2.5 6h11l-1.25 6.75h-8.5Z" />
      <path d="M5.5 6 8 2.75 10.5 6" />
    </svg>
  ),
  shop: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2.75 6.5 3.75 3h8.5l1 3.5M3.5 6.5v6.25h9V6.5" />
      <path d="M2.75 6.5h10.5M6.5 12.75V9.5h3v3.25" />
    </svg>
  ),
}

/* A step's card: its glyph, title and time on top, then what it holds. */
function Card({ icon, title, time, at, lands, children, className = '' }: { icon: ReactNode; title: string; time: string; at: number; lands: number; children?: ReactNode; className?: string }) {
  return (
    <div className={'s-gs-card ob-object s-gs-in ' + className} style={d(at)}>
      <p className="s-gs-card__h">
        <span className="s-gs-ic">{icon}</span>
        <b>{title}</b>
        <time>{time}</time>
        <Sig state="landed" cue={d(lands)} />
      </p>
      {children}
    </div>
  )
}

function Step({ step, at }: Planned) {
  switch (step.kind) {
    case 'signup':
      return (
        <Card icon={Icon.form} title={step.title} time={step.time} at={at} lands={at + 0.8} className="s-gs-card--signup">
          <p className="s-gs-field s-gs-in" style={d(at + 0.15)}>
            <span>{step.field}</span>
          </p>
          <p className="s-gs-mail s-gs-in" style={d(at + 0.6)}>
            <span className="s-gs-ic">{Icon.mail}</span>
            <span className="s-gs-mail__s">{step.mail}</span>
            <time>{step.mailTime}</time>
          </p>
        </Card>
      )
    case 'chat': {
      const [before, after = ''] = step.reply.split(step.promise)
      return (
        <Card icon={Icon.chat} title={step.title} time={step.time} at={at} lands={at + 1.05} className="s-gs-card--chat">
          <p className="s-gs-ask s-gs-in" style={d(at + 0.15)}>
            <span className="s-gs-av">
              <Sig state="landed" />
            </span>
            <span>{step.ask}</span>
          </p>
          <p className="s-gs-reply s-gs-in" style={d(at + 0.45)}>
            <span className="s-gs-typing" style={win({ at: at + 0.45, until: at + 0.8 })}>
              <i />
              <i />
              <i />
            </span>
            <span className="s-gs-reply__t s-gs-in" style={d(at + 0.8)}>
              {before}
              <mark style={d(at + 1.05)}>{step.promise}</mark>
              {after}
            </span>
          </p>
        </Card>
      )
    }
    case 'basket':
      return (
        <Card icon={Icon.basket} title={step.title} time={step.time} at={at} lands={at + 0.45} className="s-gs-card--basket">
          <p className="s-gs-item">
            <span className="s-gs-item__ph" />
            <span>{step.item}</span>
            <b>{step.price}</b>
          </p>
        </Card>
      )
    case 'wait':
      return (
        <div className="s-gs-wait s-gs-in" style={d(at)}>
          <Sig state="wait" cue={d(at, { '--u': `${(at + T.hold + T.travel).toFixed(2)}s` })} />
          <span className="s-gs-wait__t">
            <span className="s-gs-ic">{Icon.mail}</span>
            {step.title}
          </span>
          <time>{step.since}</time>
        </div>
      )
  }
}

export function GapStory({ story }: { story: Story }) {
  const ref = useRef<HTMLDivElement>(null)
  const p = plan(story)
  const o = story.outside
  const days = [0, 1, 2, 3]
  const byDay = (n: number) => p.steps.filter((s) => s.step.day === n)

  /* The story plays once, when the picture first comes into view (AppScreen's pattern). Reduced motion keeps the rest
     state, which is the finished story. */
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('play')
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="s-gs" role="img" aria-label={story.label} data-outside={o.kind}>
      <div className="s-gs-grid" aria-hidden="true">
        {/* The company, the Example tag, and the clock. */}
        <p className="s-gs-site">
          <span className="ob-tag">{UI.example}</span>
          <span className="s-gs-ic">{Icon.shop}</span>
          <span className="s-gs-site__n">{story.site}</span>
        </p>
        <p className="s-gs-clock">
          {p.clock.map((c, i) => (
            <span key={i} className="s-gs-clock__t" data-last={i === p.clock.length - 1 || undefined} style={win(c)}>
              <b>
                {UI.day} {c.day}
              </b>
              <time>{c.time}</time>
            </span>
          ))}
        </p>

        {/* 1 calendar for both lanes: 4 equal days, the brand square on the day it is now. */}
        <div className="s-gs-days">
          {days.map((n) => (
            <span
              key={n}
              className={'s-gs-day s-gs-d' + n}
              data-last={n === 3 || undefined}
              style={win({ at: p.arrive[n] ?? 0, until: n < 3 ? p.arrive[n + 1] : undefined })}
            >
              <span className="s-gs-day__n">
                <i className="s-gs-now" />
                {UI.day} {n}
              </span>
            </span>
          ))}
        </div>

        {/* The outside: 1 look, then nothing. */}
        <p className="s-gs-lab s-gs-lab--out">{o.name}</p>
        <div className="s-gs-lane s-gs-lane--out">
          {days.map((n) => (
            <div key={n} className={'s-gs-cell s-gs-d' + n}>
              {n === o.day && (
                <div className={'s-gs-look s-gs-look--' + o.kind} style={d(p.outside)}>
                  <span className="s-gs-crop" />
                  {o.kind === 'page' ? (
                    <div className="s-gs-page">
                      <span className="s-gs-page__bar">{story.site}</span>
                      <span className="s-gs-page__hero">{o.title}</span>
                      <span className="s-gs-page__line">{o.line}</span>
                      <span className="s-gs-page__btn" />
                    </div>
                  ) : (
                    <div className="s-gs-dash">
                      <span className="s-gs-dash__row">
                        <span>{o.title}</span>
                        <b>{o.line}</b>
                      </span>
                      <span className="s-gs-dash__bars">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </span>
                    </div>
                  )}
                  <time className="s-gs-look__t">{o.time}</time>
                </div>
              )}
              <span className="s-gs-dashed" />
              {n === 3 && (
                <p className="s-gs-tally s-gs-tally--out s-gs-in" style={d(p.outside + 0.5)}>
                  {o.tally}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* The inside: every day, lived. */}
        <p className="s-gs-lab s-gs-lab--in">
          <span className="s-gs-lab__n">
            <Mark size={16} />
            {story.inside.name}
          </span>
          <span className="s-gs-agent">
            <span className="s-gs-av">
              <Sig state="landed" />
            </span>
            {story.inside.agent}
          </span>
        </p>
        <div className="s-gs-lane s-gs-lane--in">
          {days.map((n) => (
            <div key={n} className={'s-gs-cell s-gs-d' + n}>
              <span className="s-gs-thread" style={n < 3 ? d(p.leave[n] ?? p.end, { '--t': `${T.travel}s` }) : d(p.arrive[3] ?? p.finding, { '--t': '0.2s' })} />
              {byDay(n).map((s, i) => (
                <Step key={i} {...s} />
              ))}
              {n === story.inside.finding.day && (
                <>
                  <div className="s-gs-find ob-object s-gs-in" style={d(p.finding)}>
                    <p className="s-gs-find__h">
                      <Sig state="needs" cue={d(p.finding + 0.2)} />
                      <b>{story.inside.finding.title}</b>
                    </p>
                    <p className="s-gs-find__m">
                      <time>
                        {UI.day} {story.inside.finding.day} · {story.inside.finding.time}
                      </time>
                      <span>{story.inside.finding.meta}</span>
                    </p>
                    <p className="s-gs-find__s">
                      {UI.signed}
                      <span>ed25519 · {story.inside.hash}</span>
                    </p>
                  </div>
                  <div className="s-gs-end">
                    <div className="s-gs-stack" style={{ '--s-gs-n': p.receipts.length } as CSSProperties}>
                      {p.receipts.map((r, i) => (
                        <div key={i} className="s-gs-slip" data-top={i === p.receipts.length - 1 || undefined} style={d(r.at, { '--i': i, '--n': p.receipts.length })}>
                          <p className="s-gs-slip__h">
                            <span className="s-gs-tick" />
                            {UI.signed}
                          </p>
                          <time>{r.when}</time>
                          <span className="s-gs-slip__k">{story.inside.hash}</span>
                        </div>
                      ))}
                      <span className="s-gs-count">
                        {p.receipts.map((r, i) => (
                          <span key={i} data-last={i === p.receipts.length - 1 || undefined} style={win({ at: r.at, until: p.receipts[i + 1]?.at })}>
                            {i + 1}
                          </span>
                        ))}
                      </span>
                    </div>
                    <p className="s-gs-tally s-gs-tally--in s-gs-in" style={d(p.end)}>
                      {story.inside.tally}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
