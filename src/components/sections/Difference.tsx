import { useEffect, useId, useLayoutEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type FocusEvent, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react'
import type { Difference as Content, DiffChannel, DiffScrap, DiffStep, DiffStory } from '../../content/types'
import { hollin, type HollinPhoto } from '../../content/hollin'
import { RM, useReducedMotion } from '../../hooks/useConsole'
import { Mark } from '../Logo'
import { CLOCK, clockVars, film, stepAt } from './differenceCamera'
import './Difference.css'

/* Home's difference block (_research/illus/DIFFERENCE.md, 7 Oct, reviewed the same day): to know what customers get,
   you have to be one.
   - 5 stories on 1 stage, each chosen by a reader chip (Agencies, Founders, Sales, Marketing, AI agents). Left, "Today":
     that job's stack as 6 flat, muted scraps on a desk, tilted and overlapping, which the "You" cursor clicks 4 times and
     gets nowhere (the last click lands on a "?"). Right, "With Obsession", at the same time: 1 lit app panel, 1 declared
     agent and 1 thread of signed steps, the finding and the next move, which the same cursor approves with 1 click. Then
     the pull back: the same panel at 2 more companies slides up from behind it, and the count.
   - The end frame keeps the evidence: the whole signed journey, the finding and the approved move. It is drawn at build
     time, like the app screens, and is the rest state of every story (the prerender, reduced motion, print, no script).
   - Played on 1 16 second clock (differenceCamera.ts CLOCK, written into CSS as custom properties). Every timed element
     carries its time as --d, so CSS runs the story once its stage has .is-play; the camera adds the cursor and its
     clicks, and the agent's square on the thread, as Web Animations on transform and opacity. Nothing runs off screen.
   - The stories play in turn once the stage is a fifth in view; leaving view, hiding the tab or the pause button
     freezes every animation together. Hovering or focusing the block never freezes a story: it only holds the end frame
     instead of turning to the next. Picking a chip plays that story and stops the turns for good; a picked story that
     has ended replays on a click. A new story crossfades over the last frame (0.3s), so nothing blinks to black.
   - The stage is fixed in size and scaled to its column in CSS (as the app screens are), so nothing moves the page.
     Under 760px of column it becomes a phone layout, not a squeeze: the 4 scraps the cursor clicks, then the panel with
     its journey running down 1 thread.
   - A tablist of chips; the stage is the tabpanel, 1 image to a screen reader with the story's label. Everything drawn
     is aria-hidden and inert (a picture, not a control); the points row under the stage is real text. */

const NODE = [50, 165, 280, 395, 510, 625]
const LEAD = 20
const PHOTOS = '/illus/gap/'

const tilts: Record<number, number> = { 1: -3, 2: 2, 3: 1, 4: -2, 5: 3, 6: -1.5 }
const s = (n: number) => `${n.toFixed(2)}s`
const d = (at: number, extra?: Record<string, string | number | undefined>) => ({ '--d': s(at), ...extra }) as CSSProperties

/* ---- Marks and glyphs ------------------------------------------------------------------------------------------------ */

/* The brand ring in the app screens' geometry (src/screens/kit.css): `landed` closes it round its square (the signed
   tick), `open` is a step still to come. */
function Sig({ state, className = '', style }: { state: 'landed' | 'open'; className?: string; style?: CSSProperties }) {
  return (
    <svg className={`s-df-sig is-${state} ${className}`} viewBox="2 2 96 96" style={style} aria-hidden="true">
      <path className="s-df-sig__ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" />
      <path className="s-df-sig__gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" />
      <path className="s-df-sig__sq" d="M65.404 16.011h18.585v18.585h-18.585Z" />
    </svg>
  )
}

/* "Needs you": the hollow square alone, 1 shape everywhere (a step, the finding, a company behind the panel). The ring
   stays the signed tick and the logo stays the brand. */
function Needs({ className = '' }: { className?: string }) {
  return <i className={'s-df-needs ' + className} aria-hidden="true" />
}

const G: Record<string, ReactNode> = {
  web: (
    <>
      <rect x="2.25" y="3" width="11.5" height="10" rx="1.75" />
      <path d="M2.25 6h11.5M4.5 4.5h.01M6 4.5h.01" />
    </>
  ),
  email: (
    <>
      <rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5" />
      <path d="m2.75 4.75 5.25 4 5.25-4" />
    </>
  ),
  text: <path d="M4 3h8a1.5 1.5 0 0 1 1.5 1.5v4.5A1.5 1.5 0 0 1 12 10.5H7.5L4.5 13v-2.5H4A1.5 1.5 0 0 1 2.5 9V4.5A1.5 1.5 0 0 1 4 3Z" />,
  chat: (
    <>
      <path d="M3 3.25h10a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75H7.5L4.5 13.5v-2.25H3a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 3 3.25Z" />
      <path d="M5.5 6.5h5M5.5 8.5h3" />
    </>
  ),
  phone: <path d="M5.3 2.75 6.6 5.6 5.4 6.9a7.6 7.6 0 0 0 3.7 3.7l1.3-1.2 2.85 1.4-.45 2.1a1.2 1.2 0 0 1-1.25.95A9.9 9.9 0 0 1 2.1 4.45a1.2 1.2 0 0 1 .95-1.25Z" />,
  policy: (
    <>
      <path d="M4 2.25h5.25L12 5v8.75H4Z" />
      <path d="M6 7.25h4M6 9.5h4M6 11.75h2.5" />
    </>
  ),
  bell: (
    <>
      <path d="M4 11V7a4 4 0 0 1 8 0v4l1.25 1.5H2.75Z" />
      <path d="M6.75 14h2.5" />
    </>
  ),
  check: (
    <>
      <circle cx="8" cy="8" r="5.75" />
      <path d="m5.5 8.1 1.7 1.65 3.3-3.4" />
    </>
  ),
  tag: (
    <>
      <path d="M2.75 3.5v4.1l5.6 5.65 4.9-4.9-5.65-5.6H3.5a.75.75 0 0 0-.75.75Z" />
      <path d="M5.5 6h.01" />
    </>
  ),
  cal: (
    <>
      <rect x="2.25" y="3.25" width="11.5" height="10.5" rx="1.75" />
      <path d="M2.25 6.5h11.5M5.25 2v2.5M10.75 2v2.5" />
    </>
  ),
  folder: <path d="M2.25 4.25a1 1 0 0 1 1-1h3.1l1.4 1.5h5a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1Z" />,
  grid: (
    <>
      <rect x="2.25" y="2.75" width="11.5" height="10.5" rx="1.5" />
      <path d="M2.25 6.25h11.5M2.25 9.75h11.5M6.25 2.75v10.5" />
    </>
  ),
  tabs: (
    <>
      <rect x="2.25" y="4.25" width="11.5" height="9" rx="1.5" />
      <path d="M4.5 4.25V2.75h7v1.5" />
    </>
  ),
  chart: <path d="M2.75 12.5V3M2.75 12.5h10.5M5 10l2.5-2.25 2 1.5 3-3.5" />,
  image: (
    <>
      <rect x="2.25" y="3.25" width="11.5" height="9.5" rx="1.5" />
      <path d="m2.75 11.5 3.25-3 2.5 2.25 1.75-1.5 3 2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="2.25" y="3.75" width="11.5" height="8.5" rx="1.5" />
      <path d="m2.75 4.75 5.25 4 5.25-4" />
    </>
  ),
  globe: (
    <>
      <circle cx="8" cy="8" r="5.75" />
      <path d="M2.25 8h11.5M8 2.25c-2 2.2-2 9.3 0 11.5M8 2.25c2 2.2 2 9.3 0 11.5" />
    </>
  ),
}

function Glyph({ name, className = 's-df-g' }: { name: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      {G[name]}
    </svg>
  )
}

const channelGlyph: Record<DiffChannel, string> = { web: 'web', email: 'email', text: 'text', chat: 'chat', phone: 'phone', policy: 'policy' }

/* A "?" in the old way's notes: an answer nobody has. The 1 the last click lands on is `q`. */
function Ask({ q }: { q?: boolean }) {
  return <i className={'s-df-q' + (q ? ' is-q' : '')}>?</i>
}
const cell = (v: string, q?: boolean) => (v === '?' ? <Ask q={q} /> : v)

/* "AM: Why are sign ups down" → who said it, and what. */
function said(line: string) {
  const m = /^([A-Z][A-Za-z]{0,11}): (.+)$/.exec(line)
  return m ? { who: m[1], text: m[2] } : { who: '', text: line }
}

/* ---- Today: the scraps ------------------------------------------------------------------------------------------------- */

function ScrapBody({ c }: { c: DiffScrap }) {
  const lines = c.lines ?? []
  switch (c.kind) {
    case 'alert':
      return (
        <>
          <p className="s-df-sc__h">
            <span className="s-df-app-ic">
              <Glyph name="bell" />
            </span>
            <b>{c.title}</b>
            <time>now</time>
          </p>
          <p className="s-df-sc__l s-df-mono">{lines[0]}</p>
          <p className="s-df-sc__l s-df-sc__x">{lines[1]}</p>
        </>
      )
    case 'company':
      return (
        <>
          <p className="s-df-sc__h">
            <span className="s-df-mono-av">{c.title.slice(0, 1).toUpperCase()}</span>
            <b>{c.title}</b>
          </p>
          {lines.map((l, i) => (
            <p key={i} className={'s-df-sc__l' + (i ? ' s-df-sc__x' : '')}>
              {l}
            </p>
          ))}
        </>
      )
    case 'inbox':
      return (
        <>
          <p className="s-df-sc__h">
            <Glyph name="mail" />
            <b className="s-df-mono">{c.title}</b>
            <span className="s-df-count-b">{c.meta}</span>
          </p>
          <ul className="s-df-mails">
            {(c.rows ?? []).map(([from, subject], i) => (
              <li key={i} className={i ? 's-df-sc__x' : undefined}>
                <i className="s-df-dot" />
                <b className="s-df-mono">{from}</b>
                <span>{subject}</span>
              </li>
            ))}
          </ul>
        </>
      )
    case 'phone': {
      const [day, time] = /^\w{3} \d\d:\d\d$/.test(c.title) ? c.title.split(' ') : ['', '']
      const recents = !time
      return (
        <div className="s-df-ph">
          <i className="s-df-ph__isl" />
          {recents ? (
            <p className="s-df-ph__rh">{c.title}</p>
          ) : (
            <p className="s-df-ph__clock">
              <span>{day}</span>
              <b>{time}</b>
            </p>
          )}
          <ul className={'s-df-ph__notes' + (recents ? ' is-calls' : '')}>
            {lines.map((l, i) => {
              const m = said(l)
              const [who, len] = recents ? l.split(' · ') : [m.who, '']
              return (
                <li key={i} className={i ? 's-df-sc__x' : undefined}>
                  <Glyph name={recents ? 'phone' : /call in/.test(l) ? 'cal' : 'text'} />
                  {recents ? (
                    <span>
                      <b>{who}</b>
                      <span className="s-df-mono">{len}</span>
                    </span>
                  ) : (
                    <span>
                      {who && <b>{who}</b>}
                      {m.text}
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
          {!recents && <span className="s-df-ph__when s-df-mono">{c.title}</span>}
        </div>
      )
    }
    case 'folder':
      return (
        <>
          <p className="s-df-sc__h">
            <Glyph name="folder" />
            <b>{c.title}</b>
            <span className="s-df-sc__m">{c.meta}</span>
          </p>
          {lines.length ? (
            <ul className="s-df-files">
              {lines.map((l, i) => (
                <li key={i} className={i ? 's-df-sc__x' : undefined}>
                  <Glyph name="image" />
                  <span className="s-df-mono">{l}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="s-df-thumbs s-df-sc__x">
              <i />
              <i />
              <i />
              <i />
            </p>
          )}
        </>
      )
    case 'grid':
      return (
        <>
          <p className="s-df-sc__h">
            <Glyph name="grid" />
            <b>{c.title}</b>
          </p>
          <table className="s-df-grid">
            <thead>
              <tr>
                {(c.heads ?? []).map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(c.rows ?? []).map((r, i) => (
                <tr key={i} className={i === c.q ? undefined : 's-df-sc__x'}>
                  {r.map((v, j) => (
                    <td key={j}>{cell(v, i === c.q && j === r.length - 1)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )
    case 'chat':
      return (
        <>
          <p className="s-df-sc__h">
            <b>{c.title}</b>
            {c.meta && <span className="s-df-sc__m s-df-mono">{c.meta}</span>}
          </p>
          <ul className="s-df-msgs">
            {lines.map((l, i) => {
              const m = said(l)
              const q = i === c.q && m.text.endsWith('?')
              return (
                <li key={i} className={i === c.q || i === 0 ? undefined : 's-df-sc__x'}>
                  <span className="s-df-mono-av">{m.who}</span>
                  <span className={q ? 's-df-said is-q' : 's-df-said'}>{m.text}</span>
                </li>
              )
            })}
          </ul>
        </>
      )
    case 'status':
      return (
        <>
          <p className="s-df-sc__h">
            <Glyph name="check" />
            <b>{c.title}</b>
          </p>
          <p className="s-df-sc__l">{lines[0]}</p>
          <p className="s-df-bars s-df-sc__x">
            {Array.from({ length: 30 }, (_, i) => (
              <i key={i} />
            ))}
          </p>
        </>
      )
    case 'release':
    case 'reminder':
    case 'doc':
      return (
        <>
          <p className="s-df-sc__h">
            <Glyph name={c.kind === 'release' ? 'tag' : c.kind === 'reminder' ? 'cal' : 'policy'} />
            <b>{c.title}</b>
          </p>
          {lines.map((l, i) => (
            <p key={i} className={'s-df-sc__l' + (i ? ' s-df-sc__x s-df-sc__q' : '')}>
              {l}
            </p>
          ))}
        </>
      )
    case 'note':
      return (
        <>
          <p className="s-df-sc__h">
            <Glyph name="policy" />
            <b>{c.title}</b>
          </p>
          <p className="s-df-sc__l">{lines[0]}</p>
          <p className="s-df-field">
            <i className="s-df-caret" />
          </p>
        </>
      )
    case 'tabs':
      return (
        <>
          <p className="s-df-sc__h">
            <Glyph name="tabs" />
            <b>{c.title}</b>
          </p>
          <ul className="s-df-tablist">
            {lines.map((l, i) => (
              <li key={i} className={i ? 's-df-sc__x' : undefined}>
                <i />
                {l}
              </li>
            ))}
          </ul>
        </>
      )
    case 'dash':
      return (
        <>
          <p className="s-df-sc__h">
            <Glyph name="chart" />
            <span>{c.title}</span>
          </p>
          <p className="s-df-big">{lines[0]}</p>
          <p className="s-df-spark s-df-sc__x">
            <span>{lines[1]}</span>
            <svg viewBox="0 0 120 24" aria-hidden="true">
              <path d="M0 15 L14 13 L28 14 L42 12 L56 13 L70 12 L84 13 L98 11 L120 12" />
            </svg>
          </p>
        </>
      )
    case 'file':
      return (
        <p className="s-df-file">
          <span className="s-df-csv">CSV</span>
          <span>
            <b className="s-df-mono">{c.title}</b>
            <span>{lines[0]}</span>
          </span>
        </p>
      )
  }
}

/* A tapped scrap's 1 line on a phone: short enough to read whole, and the last tap's ends on its "?". */
function PhoneLine({ c }: { c: DiffScrap }) {
  if (!c.phone) return null
  const m = said(c.phone)
  const q = c.tap === 4 && c.phone.endsWith('?')
  return (
    <p className={'s-df-sc__p' + (q ? ' is-q' : '')}>
      {m.who && <b>{m.who}</b>}
      {m.text}
    </p>
  )
}

function Scrap({ c, at }: { c: DiffScrap; at: number }) {
  const tilt = tilts[c.slot]
  return (
    <div
      className={`s-df-scrap s-df-l${c.slot} s-df-k-${c.kind}` + (c.tap === 4 ? ' is-last' : '') + (c.phone ? ' has-p' : '')}
      data-tap={c.tap}
      data-tilt={tilt}
      style={{ '--d': s(at), '--t': c.tap ? s(CLOCK.taps[c.tap - 1]) : undefined, '--tilt': `${tilt}deg` } as CSSProperties}
    >
      <div className="s-df-mute">
        <div className="s-df-sheet">
          <ScrapBody c={c} />
          <PhoneLine c={c} />
        </div>
        <i className="s-df-rim" />
      </div>
    </div>
  )
}

/* ---- With Obsession: the panel ------------------------------------------------------------------------------------------ */

const srcset = (p: HollinPhoto) => p.widths.map((w) => `${PHOTOS}${p.img}-${w}.webp ${w}w`).join(', ')
/* The company's own photograph: decorative, lazy, sized, and served at the width it is drawn. */
function Photo({ p, sizes }: { p: HollinPhoto; sizes: string }) {
  const w = p.widths[0]
  return (
    <img
      className="s-df-photo"
      src={`${PHOTOS}${p.img}-${w}.webp`}
      srcSet={srcset(p)}
      sizes={sizes}
      width={w}
      height={Math.round(w / p.ratio)}
      alt=""
      loading="lazy"
      decoding="async"
    />
  )
}

function StepBody({ st, at, who }: { st: DiffStep; at: number; who: string }) {
  if (st.next) return null
  if (st.quiet)
    return (
      <>
        <p className="s-df-quote">{st.lines?.[0]}</p>
        <p className="s-df-quiet">
          {st.quiet.map((q, i) => (
            <span key={q} className="s-df-qd" style={d(at + i * 0.12)}>
              <Sig state="landed" className="s-df-in-sig" />
              <span className="s-df-mono">{q}</span>
            </span>
          ))}
        </p>
      </>
    )
  if (st.ask)
    return (
      <div className="s-df-talk">
        <p className="s-df-me">
          <span className="s-df-who">{who}</span>
          {st.ask}
        </p>
        <p className="s-df-them s-df-late" style={d(at + (st.ch === 'phone' ? 0.45 : 0.25))}>
          <span className="s-df-who">{st.who}</span>
          {st.reply}
        </p>
      </div>
    )
  const photo = st.photo === 'email' ? hollin.email.photo : st.photo === 'shirt' ? hollin.products[0].photo : undefined
  return (
    <div className={'s-df-saw' + (photo ? ' has-photo' : '')}>
      {photo && <Photo p={photo} sizes={st.photo === 'email' ? '118px' : '44px'} />}
      <div className={st.empty ? 's-df-none' : undefined}>
        {st.lines?.map((l, i) => (
          <p key={i} className={'s-df-quote' + (i ? ' is-2' : '')}>
            {l}
          </p>
        ))}
      </div>
    </div>
  )
}

/* 1 step: its card (above the thread for even steps, below for odd, in 3 columns), its tie and its node. Laid out in the
   journey's grid, so the thread sits as close under the tallest card above as the cards allow. */
function Step({ st, i, labels, who, teach }: { st: DiffStep; i: number; labels: Content['labels']; who: string; teach: boolean }) {
  const above = i % 2 === 0
  const at = stepAt(i)
  const ring = st.next ? CLOCK.approve + 0.4 : at + 0.3
  return (
    <div
      className={'s-df-step ' + (above ? 'is-up' : 'is-down') + (st.next ? ' is-next' : '') + (st.needs ? ' is-needs' : '') + (st.ask ? ' has-talk' : '')}
      style={d(at, { '--x': `${NODE[i]}px`, '--col': Math.floor(i / 2) + 1, '--row': i + 1, '--r': s(ring), '--i': i })}
    >
      <i className="s-df-node" data-i={st.next ? undefined : i}>
        <i />
      </i>
      <i className="s-df-tie" />
      <div className="s-df-card">
        <p className="s-df-card__h">
          <Glyph name={channelGlyph[st.ch]} />
          <time className="s-df-mono">{st.when}</time>
          {i === 0 && <span className="s-df-word">{labels.signed}</span>}
          {teach && <span className="s-df-word">{labels.needs}</span>}
          {st.needs && <Needs className="s-df-card__needs" />}
          <Sig state={st.next ? 'open' : 'landed'} className="s-df-card__sig" />
        </p>
        <p className="s-df-card__t">{st.title}</p>
        <p className="s-df-short">{st.next ? st.when : (st.short ?? st.lines?.[0] ?? st.reply)}</p>
        <StepBody st={st} at={at} who={who} />
      </div>
    </div>
  )
}

/* The thread: 1 stroke from the lead in to the last node, drawn as the stretches between nodes so an empty stretch of
   time (a day nothing came) is dashed and named on the line itself, and the run still to come is dashed too. */
function Thread({ story }: { story: DiffStory }) {
  const n = story.steps.length
  const gap = (k: number) => story.gaps?.find((g) => g.after === k)
  const runs = [{ a: LEAD, b: NODE[0], dash: false, label: '' }]
  for (let k = 1; k < n; k++) {
    const g = gap(k - 1)
    runs.push({ a: NODE[k - 1], b: NODE[k], dash: !!g || !!story.steps[k].next, label: g?.label ?? '' })
  }
  return (
    <span className="s-df-thread">
      {runs.map((r, k) => (
        <i key={k} className={'s-df-run' + (r.dash ? ' is-dash' : '')} style={{ '--a': `${r.a}px`, '--b': `${r.b}px` } as CSSProperties}>
          {r.label && <span className="s-df-gaplab s-df-mono">{r.label}</span>}
        </i>
      ))}
    </span>
  )
}

/* The tally counts up as each step is signed (a quiet day counts as 1 step each); at the pull back the count takes its
   place. At rest only the count shows, so the tally is drawn only for a play. */
function Sum({ story, live }: { story: DiffStory; live: boolean }) {
  const total = Number(/of (\d+)/.exec(story.tally)?.[1] ?? 0)
  const marks: { n: number; at: number }[] = [{ n: 0, at: 0 }]
  let n = 0
  story.steps.forEach((st, i) => {
    if (st.next) return
    const at = stepAt(i)
    if (st.quiet) st.quiet.forEach((_, j) => marks.push({ n: ++n, at: at + j * 0.12 + 0.3 }))
    else marks.push({ n: ++n, at: at + 0.3 })
  })
  return (
    <div className="s-df-sum">
      {live && (
        <p className="s-df-tally">
          <Sig state="landed" />
          <span className="s-df-tally__n">
            {marks.map((m, i) => (
              <span key={i} className="s-df-tw" data-last={i === marks.length - 1 || undefined} style={d(m.at, { '--u': marks[i + 1] ? s(marks[i + 1].at) : undefined })}>
                {story.tally.replace(/^\d+/, String(m.n)).replace(/of \d+/, `of ${total}`)}
              </span>
            ))}
          </span>
        </p>
      )}
      <p className="s-df-count">
        <Sig state="landed" />
        {story.count}
      </p>
    </div>
  )
}

function Panel({ story, labels, live }: { story: DiffStory; labels: Content['labels']; live: boolean }) {
  const who = labels.agent
  const teach = story.steps.findIndex((x) => x.needs)
  /* The finding needs you when a step or a company behind does; an insight for a call (Sales) keeps the ring. */
  const needs = teach >= 0 || story.ghosts.some((g) => g.needs)
  return (
    <div className="s-df-app ob-object">
      <div className="s-df-win">
        <span className="s-df-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="s-df-crumb">
          {story.crumb.map((c, i) => (
            <span key={c}>
              {i ? <i>/</i> : null}
              {i === 0 ? <b>{c}</b> : c}
            </span>
          ))}
        </span>
      </div>
      <div className="s-df-body">
        <header className="s-df-head">
          <p className="s-df-title">{story.title}</p>
          <span className="s-df-meta">{story.meta}</span>
        </header>
        <div className="s-df-agent">
          <p className="s-df-agent__n">
            <span className="s-df-av">
              <Sig state="landed" />
            </span>
            {story.agent.name}
          </p>
          <p className="s-df-ids">
            <span className="s-df-id">
              <Glyph name="mail" />
              {story.agent.inbox}
            </span>
            <span className="s-df-id">
              <Glyph name="phone" />
              {story.agent.phone}
            </span>
            <span className="s-df-id">
              <Glyph name="globe" />
              {story.agent.browser}
            </span>
          </p>
        </div>
        <div className="s-df-journey">
          <Thread story={story} />
          {story.steps.map((st, i) => (
            <Step key={i} st={st} i={i} labels={labels} who={who} teach={i === teach} />
          ))}
          <i className="s-df-sq" />
        </div>
        <Sum story={story} live={live} />
        <div className="s-df-find">
          <p className="s-df-k">
            {needs ? <Needs /> : <Sig state="landed" />}
            {labels.finding}
          </p>
          <div>
            <p className="s-df-find__t">{story.finding.text}</p>
            <p className="s-df-find__m s-df-mono">{story.finding.meta}</p>
          </div>
        </div>
        <div className="s-df-next">
          <p className="s-df-k">
            <Glyph name="check" />
            {labels.next}
          </p>
          <p className="s-df-next__t">{story.next.text}</p>
          <span className="s-df-btn">
            <span className="s-df-btn__a">{story.next.button}</span>
            <span className="s-df-btn__b">{story.next.done}</span>
            <span className="s-df-you">
              <Pointer label={labels.you} />
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

/* The same panel at 2 more companies, behind the main one: only their window bars show, each with the company and how
   its run ended. The nearer 1 is drawn last, so it sits over the farther. */
function Ghosts({ story }: { story: DiffStory }) {
  return (
    <div className="s-df-ghosts">
      {[1, 0].map((i) => {
        const g = story.ghosts[i]
        return (
          <div key={i} className={`s-df-ghost is-${i + 1}`}>
            <span className="s-df-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="s-df-ghost__l">{g.label}</span>
            <span className="s-df-ghost__n">
              {g.note}
              {g.needs ? <Needs /> : <Sig state="landed" />}
            </span>
          </div>
        )
      })}
    </div>
  )
}

/* The person's pointer, as a shared document shows a collaborator's: the arrow and a "You" tag. */
function Pointer({ label }: { label: string }) {
  return (
    <>
      <svg className="s-df-arrow" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M3 1.5v12.2l3.1-3 2.05 4.6 2.15-.95-2-4.5h4.3Z" />
      </svg>
      <span className="s-df-tag">{label}</span>
    </>
  )
}

function Stage({ story, labels, live }: { story: DiffStory; labels: Content['labels']; live: boolean }) {
  /* The scraps drop in like paper on a desk, 0.08s apart, in the order of their slots. */
  const order = [...story.scraps].sort((a, b) => a.slot - b.slot)
  return (
    <div className="s-df-rig" aria-hidden="true" inert>
      <div className="s-df-today">
        <p className="s-df-lab">{labels.today}</p>
        <div className="s-df-desk">
          {order.map((c, i) => (
            <Scrap key={c.slot} c={c} at={i * 0.08} />
          ))}
        </div>
      </div>
      <div className="s-df-obs">
        <p className="s-df-lab s-df-lab--obs">
          <Mark size={16} />
          {labels.obsession}
          <span className="ob-tag s-df-ex">{labels.example}</span>
        </p>
        <Ghosts story={story} />
        <Panel story={story} labels={labels} live={live} />
      </div>
      {live && (
        <>
          <span className="s-df-ptr">
            <Pointer label={labels.you} />
          </span>
          {[...CLOCK.taps, CLOCK.approve].map((t) => (
            <i key={t} className="s-df-click" />
          ))}
        </>
      )}
    </div>
  )
}

/* ---- The block ------------------------------------------------------------------------------------------------------- */

type Shown = { i: number; key: number; on: boolean }
const noop = () => () => {}
const yes = () => true
const no = () => false

export function Difference({ d: content }: { d: Content }) {
  const { stories, labels, chips, points } = content
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const rootRef = useRef<HTMLDivElement>(null)
  const fitRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const paused = useRef(new WeakSet<Animation>())
  /* Each play's camera, by its key, so the frame fading out keeps its cursor until it is gone. */
  const films = useRef(new Map<number, Animation[]>())

  /* What the stage shows: story `i`, drawn new for each play (`key`; key 0 is the prerendered rest frame), played or at
     rest (`on`). `prev` is the frame it replaced, fading out over it. */
  const [shown, setShown] = useState<Shown>({ i: 0, key: 0, on: false })
  const [prev, setPrev] = useState<Shown | null>(null)
  const [auto, setAuto] = useState(true)
  const [stopped, setStopped] = useState(false)
  /* A story the reader picked has played to its end frame: nothing moves, so the button offers to play again. */
  const [done, setDone] = useState(false)
  /* The stories turn by themselves, but the reader is over the block: the end frame holds until they leave it. */
  const [waiting, setWaiting] = useState(false)
  const [seen, setSeen] = useState(false)
  const [away, setAway] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [focus, setFocus] = useState(0)
  /* False in the prerender and while hydrating, then true: what only works with the script is drawn after. */
  const mounted = useSyncExternalStore(noop, yes, no)
  const reduced = useReducedMotion()
  const active = shown.i
  const playing = shown.on && !reduced

  /* The frame on the stage now, for the callbacks that outlive a render (the observer). */
  const shownRef = useRef(shown)
  useLayoutEffect(() => {
    shownRef.current = shown
  })

  /* Play story i, drawn new. The last frame stays under it for its 0.3s fade (none with motion off: the switch is
     instant). */
  function start(i: number) {
    const on = !matchMedia(RM).matches
    const cur = shownRef.current
    setFocus(i)
    setDone(false)
    setWaiting(false)
    setPrev(on ? cur : null)
    setShown({ i, key: cur.key + 1, on })
  }

  /* The block waits off screen and in a hidden tab. The first time a fifth of the stage is in view, the first story
     plays (once), so the rest frame turns into the story while the block is still coming up the screen; the
     prerendered frame (key 0) fades out over it. */
  useEffect(() => {
    const el = fitRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        const on = e.isIntersecting && e.intersectionRatio >= 0.2
        setSeen(on)
        const cur = shownRef.current
        if (!on || cur.key || matchMedia(RM).matches) return
        setPrev(cur)
        setShown({ i: cur.i, key: 1, on: true })
      },
      { threshold: [0, 0.2] },
    )
    io.observe(el)
    const vis = () => setAway(document.hidden)
    document.addEventListener('visibilitychange', vis)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', vis)
    }
  }, [])

  /* The camera films each play once its drawing is in the page (the same frame its CSS story starts). */
  useLayoutEffect(() => {
    const stage = stageRef.current
    if (!playing || !stage || films.current.has(shown.key)) return
    films.current.set(shown.key, film(stage))
  }, [playing, shown.key])
  /* A play's camera stops once its frame is gone from the page (or motion is turned off). */
  useEffect(() => {
    for (const [k, anims] of films.current) {
      if (playing && (k === shown.key || k === prev?.key)) continue
      for (const a of anims) a.cancel()
      films.current.delete(k)
    }
  }, [playing, shown.key, prev])
  useEffect(() => {
    const all = films.current
    return () => {
      for (const anims of all.values()) for (const a of anims) a.cancel()
    }
  }, [])

  /* Held: off screen, a hidden tab or the pause button. Every animation in the block stops where it is (CSS and camera
     alike) and resumes together. */
  const held = playing && (!seen || away || stopped)
  const moving = playing && !stopped && !done
  useEffect(() => {
    const root = rootRef.current
    if (!root || typeof root.getAnimations !== 'function') return
    for (const a of root.getAnimations({ subtree: true })) {
      if (held) {
        if (a.playState === 'running' || a.pending) {
          a.pause()
          paused.current.add(a)
        }
      } else if (paused.current.has(a)) {
        paused.current.delete(a)
        a.play()
      }
    }
  }, [held, shown.key, prev])

  /* The bar under the playing chip fills over the story's clock; when it ends, the next story plays, unless the reader
     is over the block, who keeps the end frame until they leave it. */
  const next = () => start((active + 1) % stories.length)
  function ended() {
    if (!auto || stopped) return setDone(true)
    if (hovered || focused) return setWaiting(true)
    next()
  }
  /* The reader leaves the block (pointer and focus both gone): a held end frame turns to the next story. */
  function release(h: boolean, f: boolean) {
    setHovered(h)
    setFocused(f)
    if (waiting && !h && !f && auto && !stopped) next()
  }

  /* Picking a chip is the reader's choice: the turns stop for good. */
  function pick(i: number) {
    setAuto(false)
    setStopped(false)
    start(i)
  }

  /* Arrow keys, Home and End move along the chips; Enter or Space picks one. */
  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    const last = stories.length - 1
    let i = -1
    if (e.key === 'ArrowRight') i = focus === last ? 0 : focus + 1
    else if (e.key === 'ArrowLeft') i = focus === 0 ? last : focus - 1
    else if (e.key === 'Home') i = 0
    else if (e.key === 'End') i = last
    if (i < 0) return
    e.preventDefault()
    setFocus(i)
    tabRefs.current[i]?.focus()
  }

  /* Pause freezes whatever moves, where it is. Play resumes it, and the stories turn again; at an end frame it plays the
     story again from the start. */
  function togglePause() {
    if (moving) return setStopped(true)
    setStopped(false)
    setAuto(true)
    if (done || !playing) start(active)
  }

  const onPointerEnter = (e: PointerEvent) => e.pointerType === 'mouse' && setHovered(true)
  const onPointerLeave = () => release(false, focused)
  const onFocus = (e: FocusEvent) => {
    const t = e.target as HTMLElement
    if (t.matches(':focus-visible') && !t.closest('.s-df-pause')) setFocused(true)
    else release(hovered, false)
  }
  const onBlur = (e: FocusEvent) => {
    if (!rootRef.current?.contains(e.relatedTarget as Node | null)) release(hovered, false)
  }

  const reader = (r: string) => (r === 'agents' ? undefined : r)
  const frame = (f: Shown, out: boolean) => (
    <div
      key={f.key}
      ref={out ? undefined : stageRef}
      className={'s-df-stage' + (f.on && !reduced ? ' is-play' : '') + (out ? ' is-out' : '')}
      role={out ? undefined : 'img'}
      aria-label={out ? undefined : stories[f.i].label}
      aria-hidden={out || undefined}
      onAnimationEnd={out ? (e) => e.target === e.currentTarget && setPrev(null) : undefined}
    >
      <Stage story={stories[f.i]} labels={labels} live={f.on && !reduced} />
    </div>
  )

  return (
    <div
      ref={rootRef}
      className="s-df"
      style={clockVars as CSSProperties}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div className="s-df-bar">
        <div className="s-df-chips" role="tablist" aria-label={chips.label} onKeyDown={onKey}>
          {stories.map((st, i) => (
            <button
              key={st.reader}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${i}`}
              className="s-df-chip"
              data-reader={reader(st.reader)}
              aria-selected={i === active}
              aria-controls={`${uid}-panel`}
              tabIndex={i === focus ? 0 : -1}
              onClick={() => pick(i)}
            >
              <span className="ob-sq s-df-key" aria-hidden="true" />
              {st.chip}
              {i === active && playing && <i key={shown.key} className="s-df-prog" onAnimationEnd={ended} aria-hidden="true" />}
            </button>
          ))}
        </div>
        {/* Drawn once the script runs: with no script there is nothing to pause. */}
        {mounted && !reduced && (
          <button type="button" className="ob-navbtn s-df-pause" aria-label={moving ? chips.pause : chips.play} onClick={togglePause}>
            <svg className="ob-navicon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              {moving ? <path d="M6 4v8M10 4v8" /> : <path d="M5.5 3.75v8.5L12.25 8Z" strokeLinejoin="round" />}
            </svg>
          </button>
        )}
      </div>

      <div className="s-df-tp" role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${active}`}>
        {/* A picked story that has ended replays on a click; while a story plays, a click on it does nothing. */}
        <div className={'s-df-fit' + (done && !reduced ? ' is-done' : '')} ref={fitRef} onClick={() => done && !reduced && pick(active)}>
          {prev && frame(prev, true)}
          {frame(shown, false)}
        </div>
      </div>

      <div className="s-df-points">
        <p className="s-df-pt-heads" aria-hidden="true">
          <span>{labels.today}</span>
          <span>{labels.obsession}</span>
        </p>
        <ul className="s-df-pts">
          {points.map((p) => (
            <li key={p.today}>
              <span className="s-df-pt__a">
                <span className="ob-sr">{labels.today}: </span>
                {p.today}
              </span>
              <span className="s-df-pt__b">
                <span className="ob-sq" aria-hidden="true" />
                <span className="ob-sr">{labels.obsession}: </span>
                {p.obsession}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
