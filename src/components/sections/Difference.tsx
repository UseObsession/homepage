import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type FocusEvent, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react'
import type { Difference as Content, DiffChannel, DiffScrap, DiffStep, DiffStory } from '../../content/types'
import { hollin, type HollinPhoto } from '../../content/hollin'
import { RM, useReducedMotion } from '../../hooks/useConsole'
import { Mark } from '../Logo'
import { film } from './differenceCamera'
import './Difference.css'

/* Home's difference block (_research/illus/DIFFERENCE.md, 7 Oct): to know what customers get, you have to be one.
   - 5 stories on 1 stage, each chosen by a reader chip (Agencies, Founders, Sales, Marketing, AI agents). Left, "Today":
     that job's stack as 6 flat, muted scraps on a desk, tilted and overlapping, which the "You" cursor clicks 4 times and
     gets nowhere (the last click lands on a "?"). Right, "With Obsession": 1 lit app panel, 1 declared agent and 1
     continuous thread of signed steps, the finding and the next move, which the same cursor approves with 1 click; then
     the pull back: the same journey at every company at once, and the count. Scattered against continuous, in 2 seconds.
   - Drawn at build time, like the app screens: the prerendered HTML is the Agencies story's end frame, and that end frame
     is the rest state of every story (reduced motion, print, no script, a story the reader picked with motion off).
   - Played on 1 12 second clock with 3 beats: Today (1.5s), With Obsession (4.0s), the pull back (9.0s), then the end
     frame held 2 seconds. Every timed element carries its time as --d, so CSS runs the story once .is-play is on; the
     camera (./differenceCamera) adds the lean, the spotlight, the cursor and its clicks, and the agent's square on the
     thread, as Web Animations on transform and opacity, measured once per play. Nothing runs off screen.
   - The stories play in turn while the stage is at least half in view; leaving view or hiding the tab pauses them, and
     so does hovering or focusing the block while they advance by themselves. Picking a chip, or clicking the stage to
     replay the current story, plays it and stops the turns for good. The pause button (icon only) stops all motion.
   - The stage is fixed in size and scaled to its column in CSS (as the app screens are), so nothing moves the page.
     Under 760px of column it becomes a phone layout, not a squeeze: the 4 scraps the cursor clicks, then the panel with
     its journey running down 1 thread.
   - A tablist of chips; the stage is the tabpanel, 1 image to a screen reader with the story's label. Everything drawn
     is aria-hidden; the points row under the stage is real text. */

/* Where the cursor clicks on the left (the 4 taps), and when it approves the next move. */
const TAPS = [2, 2.5, 3, 3.5]
const APPROVE = 8.5
/* The desktop journey: 3 cards above the thread and 3 below, in 3 columns, so every node sits evenly 115px apart. */
const COL = [0, 230, 460]
const NODE = [50, 165, 280, 395, 510, 625]
const ZONE = 676
const PHOTOS = '/illus/gap/'

const tilts: Record<number, number> = { 1: -3, 2: 2, 3: 1, 4: -2, 5: 3, 6: -1.5 }
const s = (n: number) => `${n.toFixed(2)}s`
const d = (at: number, extra?: Record<string, string | number | undefined>) => ({ '--d': s(at), ...extra }) as CSSProperties

/* ---- Marks and glyphs ------------------------------------------------------------------------------------------------ */

/* The brand ring in the app screens' geometry (src/screens/kit.css): `landed` closes it round its square (the signed
   tick), `needs` leaves the square hollow, `open` is a step still to come. */
function Sig({ state, className = '', style }: { state: 'landed' | 'needs' | 'open'; className?: string; style?: CSSProperties }) {
  return (
    <svg className={`s-df-sig is-${state} ${className}`} viewBox="2 2 96 96" style={style} aria-hidden="true">
      <path className="s-df-sig__ring" d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z" />
      <path className="s-df-sig__gap" d="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z" />
      <path className="s-df-sig__sq" d="M65.404 16.011h18.585v18.585h-18.585Z" />
    </svg>
  )
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
  flag: <path d="M3.75 13.75V2.75M3.75 3.25h7.5l-1.5 2.5 1.5 2.5h-7.5" />,
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

function Scrap({ c, at }: { c: DiffScrap; at: number }) {
  const tilt = tilts[c.slot]
  return (
    <div
      className={`s-df-scrap s-df-l${c.slot} s-df-k-${c.kind}` + (c.tap === 4 ? ' is-last' : '')}
      data-tap={c.tap}
      data-tilt={tilt}
      style={{ '--d': s(at), '--t': c.tap ? s(TAPS[c.tap - 1]) : undefined, '--tilt': `${tilt}deg` } as CSSProperties}
    >
      <div className="s-df-sheet">
        <ScrapBody c={c} />
      </div>
      <i className="s-df-rim" />
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

function StepBody({ st, who }: { st: DiffStep; who: string }) {
  if (st.next) return null
  if (st.quiet)
    return (
      <>
        <p className="s-df-quote">{st.lines?.[0]}</p>
        <p className="s-df-quiet">
          {st.quiet.map((q, i) => (
            <span key={q} className="s-df-qd" style={d(st.at + i * 0.1)}>
              <Sig state="landed" className="s-df-in-sig" style={d(st.at + i * 0.1)} />
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
        <p className="s-df-them s-df-late" style={d(st.at + (st.ch === 'phone' ? 0.5 : 0.25))}>
          <span className="s-df-who">{st.who}</span>
          {st.reply}
        </p>
        {st.lines?.map((l) => (
          <p key={l} className="s-df-note s-df-mono s-df-late" style={d(st.at + 0.6)}>
            {l}
          </p>
        ))}
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

function Step({ st, i, labels, who }: { st: DiffStep; i: number; labels: Content['labels']; who: string }) {
  const above = i % 2 === 0
  const x = NODE[i]
  const col = COL[Math.floor(i / 2)]
  const ring = st.next ? 8.9 : st.at + 0.3
  return (
    <div
      className={'s-df-step ' + (above ? 'is-up' : 'is-down') + (st.next ? ' is-next' : '') + (st.needs ? ' is-needs' : '')}
      style={d(st.at, { '--x': `${x}px`, '--cx': `${col}px`, '--r': s(ring), '--i': i })}
    >
      <i className="s-df-node" data-at={st.next ? undefined : st.at}>
        <i />
      </i>
      <i className="s-df-tie" />
      <div className="s-df-card">
        <p className="s-df-card__h">
          <Glyph name={channelGlyph[st.ch]} />
          <time className="s-df-mono">{st.when}</time>
          {i === 0 && <span className="s-df-signed">{labels.signed}</span>}
          {st.needs && <i className="s-df-hollow" />}
          <Sig state={st.next ? 'open' : 'landed'} className="s-df-card__sig" />
        </p>
        <p className="s-df-card__t">{st.title}</p>
        <p className="s-df-short">{st.next ? st.when : (st.short ?? st.lines?.[0] ?? st.reply)}</p>
        <StepBody st={st} who={who} />
      </div>
    </div>
  )
}

/* The tally counts up as each step is signed (a quiet day counts as 1 step each). */
function Tally({ story }: { story: DiffStory }) {
  const total = Number(/of (\d+)/.exec(story.tally)?.[1] ?? 0)
  const marks: { n: number; at: number }[] = [{ n: 0, at: 0 }]
  let n = 0
  for (const st of story.steps) {
    if (st.next) continue
    if (st.quiet) st.quiet.forEach((_, i) => marks.push({ n: ++n, at: st.at + i * 0.1 + 0.3 }))
    else marks.push({ n: ++n, at: st.at + 0.3 })
  }
  return (
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
  )
}

function Ruler({ story }: { story: DiffStory }) {
  return (
    <div className="s-df-ruler">
      {story.ruler.map((r) => {
        let x: number
        if (r.flag) x = 0
        else if (r.gap !== undefined) x = (NODE[r.gap] + NODE[r.gap + 1]) / 2
        else x = NODE[r.from ?? 0] - 22
        const kind = r.flag ? ' is-flag' : r.gap !== undefined ? ' is-gap' : ''
        /* A label that would run past the thread's end is set against the end instead (11px mono: 6.6px a letter). */
        const end = !r.flag && r.gap === undefined && x + 8 + r.label.length * 6.6 > ZONE
        return (
          <span
            key={r.label}
            className={'s-df-tick s-df-mono' + kind + (r.dashed ? ' is-dashed' : '') + (end ? ' is-end' : '')}
            style={{ '--x': `${x}px` } as CSSProperties}
          >
            {r.flag && <Glyph name="flag" />}
            {r.label}
          </span>
        )
      })}
    </div>
  )
}

function Lanes({ story }: { story: DiffStory }) {
  const chart = !!story.axis
  return (
    <div className={'s-df-lanes' + (chart ? ' is-chart' : '')}>
      <p className="s-df-words s-df-mono">
        {chart
          ? story.axis!.map((a) => (
              <span key={a.label} style={{ '--p': a.at } as CSSProperties}>
                {a.label}
              </span>
            ))
          : story.dots.map((w, i) => (
              <span key={i} style={{ '--p': i / Math.max(1, story.dots.length - 1) } as CSSProperties}>
                {w}
              </span>
            ))}
      </p>
      {story.lanes.map((l, i) => {
        const at = (j: number) => j / Math.max(1, story.dots.length - 1)
        /* Where the lane's square stops: its last message on the clock, or the last step it runs. */
        const reach = chart ? 1 : at(Math.max(...(l.only ?? story.dots.map((_, j) => j))))
        return (
          <div
            key={l.label}
            className={'s-df-lane' + (i === 0 ? ' is-lit' : '') + (l.end === 'needs' ? ' is-needs' : '')}
            style={d(i === 0 ? 9.0 : 9.3 + (i - 1) * 0.08, { '--e': s(9.9 + i * 0.06), '--p': reach })}
          >
            <span className="s-df-lane__l">{l.label}</span>
            <span className="s-df-track">
              {chart
                ? (l.marks ?? []).map((m, j) => <i key={j} className="s-df-pip" style={{ '--p': m } as CSSProperties} />)
                : story.dots.map((_, j) =>
                    !l.only || l.only.includes(j) ? <i key={j} className="s-df-pip" style={{ '--p': at(j) } as CSSProperties} /> : null,
                  )}
              <i className="s-df-run" />
            </span>
            <span className="s-df-lane__end">
              <Sig state={l.end === 'needs' ? 'needs' : 'landed'} />
              {(l.note ?? l.tick) && <span>{l.note ?? l.tick}</span>}
            </span>
          </div>
        )
      })}
      {story.more && (
        <p className="s-df-more" style={d(9.7)}>
          {story.more}
        </p>
      )}
      <p className="s-df-count" style={d(10)}>
        <Sig state="landed" />
        {story.count}
      </p>
    </div>
  )
}

/* `live`: the story is playing, so the journey is drawn under the lanes; a frame at rest (the prerender, reduced motion)
   is the end frame and needs only the lanes. */
function Panel({ story, labels, live }: { story: DiffStory; labels: Content['labels']; live: boolean }) {
  const who = labels.agent
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
          <span className="s-df-pill">
            <span className="s-df-pa">
              <Sig state="landed" />
            </span>
            {story.pill}
          </span>
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
        <div className="s-df-zone">
          {live && (
          <div className="s-df-journey">
            <Ruler story={story} />
            <i className={'s-df-thread' + (story.steps.some((x) => x.next) ? ' has-next' : '')} />
            <i className="s-df-sq" />
            <div className="s-df-steps">
              {story.steps.map((st, i) => (
                <Step key={i} st={st} i={i} labels={labels} who={who} />
              ))}
            </div>
            <Tally story={story} />
          </div>
          )}
          <Lanes story={story} />
        </div>
        <div className="s-df-find" style={d(7.5)}>
          <p className="s-df-k">
            <Sig state="needs" />
            {labels.finding}
          </p>
          <div>
            <p className="s-df-find__t">{story.finding.text}</p>
            <p className="s-df-find__m s-df-mono">{story.finding.meta}</p>
          </div>
        </div>
        <div className="s-df-next" style={d(8)}>
          <p className="s-df-k">
            <Glyph name="check" />
            {labels.next}
          </p>
          <p className="s-df-next__t">{story.next.text}</p>
          <span className="s-df-btn" style={d(APPROVE)}>
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
    <div className="s-df-rig" aria-hidden="true">
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
        <Panel story={story} labels={labels} live={live} />
      </div>
      {live && (
        <>
          <span className="s-df-ptr">
            <Pointer label={labels.you} />
          </span>
          {[...TAPS, APPROVE].map((t) => (
            <i key={t} className="s-df-click" />
          ))}
        </>
      )}
    </div>
  )
}

/* ---- The block ------------------------------------------------------------------------------------------------------- */

export function Difference({ d: content }: { d: Content }) {
  const { stories, labels, chips, points } = content
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const rootRef = useRef<HTMLDivElement>(null)
  const fitRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const paused = useRef(new WeakSet<Animation>())

  const [active, setActive] = useState(0)
  /* Each play bumps the key, so the story's drawing is new and its CSS story starts from 0. Key 0 is the rest frame. */
  const [play, setPlay] = useState({ key: 0, on: false })
  const [auto, setAuto] = useState(true)
  const [stopped, setStopped] = useState(false)
  /* A story the reader picked has played to its end frame: nothing moves, so the button offers to play again. */
  const [done, setDone] = useState(false)
  const [seen, setSeen] = useState(false)
  const [away, setAway] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [focus, setFocus] = useState(0)
  const reduced = useReducedMotion()
  const story = stories[active]
  const playing = play.on && !reduced

  function start(i: number) {
    setActive(i)
    setFocus(i)
    setDone(false)
    setPlay((p) => ({ key: p.key + 1, on: !matchMedia(RM).matches }))
  }

  /* The block waits off screen and in a hidden tab. The first time the stage is half in view, the first story plays. */
  useEffect(() => {
    const el = fitRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        const on = e.isIntersecting && e.intersectionRatio >= 0.5
        setSeen(on)
        if (on && !matchMedia(RM).matches) setPlay((p) => (p.key ? p : { key: 1, on: true }))
      },
      { threshold: [0, 0.5] },
    )
    io.observe(el)
    const vis = () => setAway(document.hidden)
    document.addEventListener('visibilitychange', vis)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', vis)
    }
  }, [])

  /* The camera films each play once the story's drawing is in the page (the same frame its CSS story starts). */
  useLayoutEffect(() => {
    const stage = stageRef.current
    if (!playing || !stage) return
    const anims = film(stage, { above: rootRef.current?.querySelector('.s-df-bar'), below: rootRef.current?.querySelector('.s-df-points') })
    return () => {
      for (const a of anims) a.cancel()
    }
  }, [playing, play.key, active])

  /* Held: off screen, a hidden tab, the pause button, or the reader hovering or focusing the block while the stories
     advance by themselves. Every animation in the block stops where it is (CSS and camera alike) and resumes together. */
  const held = playing && (!seen || away || stopped || (auto && (hovered || focused)))
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
  }, [held, play.key, active])

  /* The bar under the playing chip fills over the story's 12 seconds; when it ends, the next story plays. */
  function ended() {
    if (auto && !stopped) start((active + 1) % stories.length)
    else setDone(true)
  }

  /* Picking a chip, or clicking the stage to replay its story, is the reader's choice: the turns stop for good. */
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

  /* Pause freezes whatever moves, where it is. Play starts the stories in turn again, from the current one. */
  function togglePause() {
    if (moving) return setStopped(true)
    setStopped(false)
    setAuto(true)
    start(active)
  }

  const onPointerEnter = (e: PointerEvent) => e.pointerType === 'mouse' && setHovered(true)
  const onPointerLeave = () => setHovered(false)
  const onFocus = (e: FocusEvent) => {
    const t = e.target as HTMLElement
    setFocused(t.matches(':focus-visible') && !t.closest('.s-df-pause'))
  }
  const onBlur = (e: FocusEvent) => {
    if (!rootRef.current?.contains(e.relatedTarget as Node | null)) setFocused(false)
  }

  const reader = (r: string) => (r === 'agents' ? undefined : r)

  return (
    <div
      ref={rootRef}
      className={'s-df' + (playing ? ' is-play' : '')}
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
              {i === active && playing && (
                <i key={play.key} className="s-df-prog" onAnimationEnd={ended} aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
        {!reduced && (
          <button type="button" className="ob-navbtn s-df-pause" aria-label={moving ? chips.pause : chips.play} onClick={togglePause}>
            <svg className="ob-navicon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              {moving ? <path d="M6 4v8M10 4v8" /> : <path d="M5.5 3.75v8.5L12.25 8Z" strokeLinejoin="round" />}
            </svg>
          </button>
        )}
      </div>

      <div className="s-df-tp" role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${active}`}>
        <div className="s-df-fit" ref={fitRef} onClick={() => !reduced && pick(active)}>
          <div key={`${active}-${play.key}`} ref={stageRef} className="s-df-stage" role="img" aria-label={story.label}>
            <Stage story={story} labels={labels} live={playing} />
          </div>
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
