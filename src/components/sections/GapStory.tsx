import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import type { GapStory as Story, GapStoryStep } from '../../content/types'
import { hollin, type HollinPhoto } from '../../content/hollin'
import { Mark } from '../Logo'
import './GapStory.css'

/* The gap's picture: 1 company over 3 days, on 1 clock, in 2 lanes (content/types.ts GapStory). The company is hollin
   (content/hollin.ts), an invented linen shop, drawn as a real one: its wordmark, its photographs, its prices, its email,
   its bot. Its warm paper world sits inside Obsession's dark product scene on purpose, so the eye can tell at once what
   is theirs (the shop, in its own serif and colours) and what is ours (the agent, the clock, the rings, the receipts).
   - Above, the outside: what a tool that reads a company sees. 1 snapshot of the home page, in a camera's crop marks,
     the 1 thing it logged, then a dashed line through every day it saw nothing. Flat on purpose: no material, no light,
     and nothing moves after its moment.
   - Below, the inside: a declared AI test customer living it. Each step is a lit product object (.ob-object) holding what
     the agent actually saw (the sign up form, the welcome email, the bot's reply), on 1 solid thread through every day.
     Each lands with the ring and drops a signed receipt, with a thumbnail of its evidence, on the pile; the quiet days
     are outlines (what never arrived), and the last day holds the finding.
   - Time is the hero: 1 ruler for both lanes. Day 0 is wide because it is busy; the waiting days are narrow and empty.
   The rest state is the finished story (it is what the prerender, reduced motion and print show). Adding .play runs it
   once, about 7 seconds, when it first comes into view (as AppScreen does): every delay is written into the markup as
   --d, so no script runs beyond adding the class. Nothing loops.
   On phones it becomes a phone layout, not a squeeze: the snapshot beside its empty days, then the agent's day down 1
   thread, every object at a size a thumb can read.
   The whole picture is 1 image to a screen reader (role="img" and the story's label); everything in it is aria-hidden,
   and every photograph in it is decorative (alt=""). Photographs are lazy, sized and served at the width drawn. */

const UI = { example: 'Example', day: 'Day', signed: 'Signed', flows: 'Flows' }
const PHOTOS = '/illus/gap/'
const PHONE = '(max-width: 859.98px)'

/* The pace of the story, in seconds. */
const T = {
  start: 0.35, // the first step lands
  travel: 0.55, // the thread crosses 1 day
  hold: 0.45, // a quiet day: the inbox is checked, nothing came
  signup: 1.1, // the form is filled and sent; then the welcome email lands
  mail: 0.75,
  chat: 1.6,
  basket: 1.0,
}

type Thumb = 'site' | 'mail' | 'chat' | 'bag' | 'wait' | 'find'
type Cue = { at: number; until?: number }
type Planned = { step: GapStoryStep; at: number; mailAt: number }
type Plan = {
  steps: Planned[]
  receipts: { at: number; when: string; title: string; thumb: Thumb }[]
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
  /* The clock shows its first moment from the start, so the picture never opens on an empty clock. */
  const tick = (at: number, d: number, time: string) => {
    const last = p.clock[p.clock.length - 1]
    if (last) last.until = at
    p.clock.push({ at: last ? at : 0, day: d, time })
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
    tick(t, step.day, step.time)
    if (step.kind === 'signup') {
      const mailAt = t + T.signup
      p.steps.push({ step, at: t, mailAt })
      p.receipts.push({ at: t + 0.95, when: when(step.day, step.time), title: step.title, thumb: 'site' })
      tick(mailAt, step.day, step.mailTime)
      p.receipts.push({ at: mailAt + 0.5, when: when(step.day, step.mailTime), title: step.mailTitle, thumb: 'mail' })
      t = mailAt + T.mail
    } else {
      p.steps.push({ step, at: t, mailAt: t })
      if (step.kind === 'chat') {
        p.receipts.push({ at: t + 1.35, when: when(step.day, step.time), title: step.title, thumb: 'chat' })
        t += T.chat
      } else if (step.kind === 'basket') {
        p.receipts.push({ at: t + 0.65, when: when(step.day, step.time), title: step.title, thumb: 'bag' })
        t += T.basket
      } else {
        p.receipts.push({ at: t + 0.3, when: when(step.day, step.time), title: step.title, thumb: 'wait' })
        t += T.hold
      }
    }
  }
  const f = story.inside.finding
  travelTo(f.day)
  p.finding = t
  tick(t, f.day, f.time)
  p.receipts.push({ at: t + 0.5, when: when(f.day, f.time), title: f.short, thumb: 'find' })
  p.end = t + 1
  /* The outside's 1 look: at its day's start, the moment the clock is there (at once on Day 0). */
  const o = story.outside
  p.outside = o.day === 0 ? 0.2 : (p.arrive[o.day] ?? 0) + 0.1
  return p
}

/* Each receipt carries its own signature. The last is the story's (`hash`); the others are derived from it, the same on
   the server and in the browser (no randomness), in the same 4 4 … 4 shape. */
function signature(hash: string, i: number, last: number) {
  if (i === last) return hash
  let x = (parseInt(hash.replace(/[^0-9a-f]/g, '').slice(0, 8), 16) ^ Math.imul(i + 1, 0x9e3779b1)) >>> 0
  const hex = () => {
    x ^= x << 13
    x ^= x >>> 17
    x ^= x << 5
    x >>>= 0
    return (x & 0xffff).toString(16).padStart(4, '0')
  }
  return `${hex()} ${hex()} … ${hex()}`
}

const d = (s: number, extra?: Record<string, string | number>) =>
  ({ '--d': `${s.toFixed(2)}s`, ...extra }) as CSSProperties
const win = (c: Cue) => ({ '--d': `${c.at.toFixed(2)}s`, '--u': c.until === undefined ? undefined : `${c.until.toFixed(2)}s` }) as CSSProperties

/* ---- Obsession's marks ---------------------------------------------------------------------------------------------- */

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
  lock: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="3.75" y="7" width="8.5" height="6.25" rx="1.25" />
      <path d="M5.75 7V5.25a2.25 2.25 0 0 1 4.5 0V7" />
    </svg>
  ),
  /* hollin's own line icons: thinner, rounder, the shop's not ours. */
  search: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="7" cy="7" r="4.25" />
      <path d="m10.25 10.25 3 3" />
    </svg>
  ),
  bag: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.25 5.5h9.5l-.75 8h-8Z" />
      <path d="M5.75 5.5V4.75a2.25 2.25 0 0 1 4.5 0v.75" />
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2.75 5.5h10.5M2.75 10.5h10.5" />
    </svg>
  ),
}

/* ---- hollin's world ------------------------------------------------------------------------------------------------- */

const WORDMARK = {
  letters:
    'M60 760L60 36L138 20L138 330C162 280 206 248 284 248C390 248 456 290 456 408L456 760L378 760L378 418C378 350 344 318 292 318C228 318 178 346 138 402L138 760ZM800 248C930 248 1026 359.4 1026 510C1026 660.7 930 772 800 772C670.1 772 574 660.7 574 510C574 359.4 670.1 248 800 248ZM800 318C717.8 318 657 399.6 657 510C657 620.4 717.8 702 800 702C882.2 702 943 620.4 943 510C943 399.6 882.2 318 800 318ZM1144 760L1144 36L1222 20L1222 760ZM1360 760L1360 36L1438 20L1438 760ZM1576 760L1576 276L1654 260L1654 760ZM1792 760L1792 276L1870 260L1870 330C1894 280 1938 248 2016 248C2122 248 2188 290 2188 408L2188 760L2110 760L2110 418C2110 350 2076 318 2024 318C1960 318 1910 346 1870 402L1870 760Z',
  dot: 'M1617 100C1643 100 1664 121 1664 147C1664 173 1643 194 1617 194C1591 194 1570 173 1570 147C1570 121 1591 100 1617 100Z',
  h: 'M0 760L0 36L78 20L78 330C102 280 146 248 224 248C330 248 396 290 396 408L396 760L318 760L318 418C318 350 284 318 232 318C168 318 118 346 78 402L78 760Z',
}

/* The wordmark, drawn: its stems cut on 1 slope, the dot of the i its only colour. */
function Wordmark() {
  return (
    <svg className="s-gs-wm" viewBox="60 20 2128 752" aria-hidden="true">
      <path className="s-gs-wm__l" d={WORDMARK.letters} />
      <path className="s-gs-wm__dot" d={WORDMARK.dot} />
    </svg>
  )
}

/* The h on its disc: the shop's avatar in the inbox and the chat. */
function Monogram() {
  return (
    <svg className="s-gs-mono" viewBox="0 0 1000 1000" aria-hidden="true">
      <circle cx="500" cy="500" r="500" />
      <path transform="translate(366.9 233.9) scale(0.7027)" d={WORDMARK.h} />
    </svg>
  )
}

const srcset = (p: HollinPhoto) => p.widths.map((w) => `${PHOTOS}${p.img}-${w}.webp ${w}w`).join(', ')

/* A photograph of theirs: decorative, lazy, sized, and served at the width it is drawn (`sizes`). */
function Photo({ p, sizes, className }: { p: HollinPhoto; sizes: string; className?: string }) {
  const w = p.widths[0]
  return (
    <img
      className={'s-gs-ph' + (className ? ' ' + className : '')}
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

/* The home page as published: the shop window, and all the outside ever sees. On phones it is the phone home page (the
   portrait photograph). `read` is the line the outside reads and takes at its word. */
function HomePage({ title, read }: { title: string; read?: string }) {
  const { hero } = hollin
  const tall = hero.tall.widths[0]
  return (
    <div className="s-gs-hp">
      <p className="s-gs-hp__nav">
        <span className="s-gs-hp__menu">{Icon.menu}</span>
        <Wordmark />
        <span className="s-gs-hp__links">
          {hollin.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </span>
        <span className="s-gs-hp__icons">
          {Icon.search}
          {Icon.bag}
        </span>
      </p>
      <div className="s-gs-hp__hero">
        <picture>
          <source media={PHONE} srcSet={srcset(hero.tall)} sizes="160px" width={tall} height={Math.round(tall / hero.tall.ratio)} />
          <Photo p={hero.wide} sizes="300px" />
        </picture>
        <p className="s-gs-hp__copy">
          <b>{title}</b>
          <i>{hero.sub}</i>
          <span className="s-gs-hp__btn">{hero.cta}</span>
        </p>
      </div>
      <p className="s-gs-hp__strip">
        {hollin.strip.map((s) => (
          <span key={s} className={s === read ? 'is-read' : undefined}>
            {s}
          </span>
        ))}
      </p>
      <ul className="s-gs-hp__grid">
        {hollin.products.map((p) => (
          <li key={p.name}>
            <Photo p={p.photo} sizes="80px" />
            <b>{p.name}</b>
            <span>{p.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* A send dashboard, as any email tool draws one: the flow, its status and what it counted. */
function Dashboard({ title, line, time }: { title: string; line: string; time: string }) {
  return (
    <div className="s-gs-dash">
      <p className="s-gs-dash__top">
        <span>{UI.flows}</span>
        <time>{time}</time>
      </p>
      <p className="s-gs-dash__t">{title}</p>
      <p className="s-gs-dash__row">
        <b>
          <i />
          {line}
        </b>
        <span>1</span>
      </p>
      <span className="s-gs-dash__bars">
        <i />
        <i />
        <i />
        <i />
        <i />
      </span>
    </div>
  )
}

/* ---- The agent's steps ---------------------------------------------------------------------------------------------- */

/* A step's card: its glyph, title and time on top, then what the agent saw. */
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

/* The agent's pointer, as a shared document shows a collaborator's: our ink, and the agent's own avatar from the lane's
   label. It types the address, then presses the button. */
function Cursor({ at }: { at: number }) {
  return (
    <span className="s-gs-cursor" style={d(at)}>
      <svg viewBox="0 0 12 16" aria-hidden="true">
        <path d="M1 1v12.2l3.1-3 2.2 5 2-.9-2.2-4.9H10Z" />
      </svg>
      <span className="s-gs-av">
        <Sig state="landed" />
      </span>
    </span>
  )
}

function Signup({ step, at, mailAt }: Planned & { step: Extract<GapStoryStep, { kind: 'signup' }> }) {
  const { join, email } = hollin
  return (
    <>
      <Card icon={Icon.form} title={step.title} time={step.time} at={at} lands={at + 0.9} className="s-gs-card--join">
        <div className="s-gs-art s-gs-join">
          <div className="s-gs-join__page">
            <HomePage title={hollin.hero.line} />
          </div>
          <Photo p={hollin.hero.tall} sizes="96px" className="s-gs-join__ph" />
          <div className="s-gs-join__modal s-gs-in" style={d(at + 0.1)}>
            <span className="s-gs-join__x" />
            <Wordmark />
            <p className="s-gs-join__t">{join.title}</p>
            <p className="s-gs-join__f">
              <span className="s-gs-type" style={d(at + 0.2)}>
                {step.field}
              </span>
            </p>
            <p className="s-gs-join__go">
              <span className="s-gs-join__btn" style={win({ at: at + 0.92 })}>
                {join.button}
              </span>
              <span className="s-gs-join__ok s-gs-in" style={d(at + 0.92)}>
                <i />
                {join.done}
              </span>
            </p>
            <Cursor at={at + 0.15} />
          </div>
        </div>
      </Card>
      <Card icon={Icon.mail} title={step.mailTitle} time={step.mailTime} at={mailAt} lands={mailAt + 0.45} className="s-gs-card--mail">
        <p className="s-gs-from">
          <Monogram />
          <span className="s-gs-from__n">
            <b>{hollin.name}</b>
            <span>{email.from}</span>
          </span>
          <span className="s-gs-from__dot" style={d(mailAt + 0.1)} />
        </p>
        <p className="s-gs-from__s">{step.mail}</p>
        <div className="s-gs-art s-gs-mail s-gs-in" style={d(mailAt + 0.2)}>
          <Wordmark />
          <Photo p={email.photo} sizes="(max-width: 859.98px) 160px, (max-width: 1199.98px) 300px, 210px" className="s-gs-mail__ph" />
          <p className="s-gs-mail__h">{email.head}</p>
          <p className="s-gs-mail__b">{email.body}</p>
          <p className="s-gs-mail__go">
            <span className="s-gs-code">{email.code}</span>
            <span className="s-gs-mail__btn">{email.cta}</span>
          </p>
        </div>
      </Card>
    </>
  )
}

function Chat({ step, at, customer }: { step: Extract<GapStoryStep, { kind: 'chat' }>; at: number; customer: string }) {
  const [before, after = ''] = step.reply.split(step.promise)
  const shirt = hollin.products[0]
  return (
    <Card icon={Icon.chat} title={step.title} time={step.time} at={at} lands={at + 1.3} className="s-gs-card--chat">
      <div className="s-gs-art s-gs-chat">
        <p className="s-gs-pdp">
          <Photo p={shirt.photo} sizes="34px" />
          <span>
            <b>{shirt.name}</b>
            <span>{shirt.price}</span>
          </span>
        </p>
        <div className="s-gs-chat__panel">
          <p className="s-gs-chat__top">
            <Monogram />
            <span>
              <b>{hollin.name}</b>
              <span>{hollin.chat.who}</span>
            </span>
          </p>
          <div className="s-gs-chat__log">
            <p className="s-gs-chat__me s-gs-in" style={d(at + 0.2)}>
              <span className="s-gs-chat__who">{customer}</span>
              <span className="s-gs-bub s-gs-bub--me">{step.ask}</span>
            </p>
            <p className="s-gs-chat__bot">
              <span className="s-gs-typing" style={win({ at: at + 0.5, until: at + 0.95 })}>
                <i />
                <i />
                <i />
              </span>
              <span className="s-gs-bub s-gs-bub--bot s-gs-in" style={d(at + 0.95)}>
                {before}
                <mark style={d(at + 1.25)}>{step.promise}</mark>
                {after}
              </span>
            </p>
          </div>
          <p className="s-gs-chat__in">{hollin.chat.input}</p>
        </div>
      </div>
    </Card>
  )
}

function Basket({ step, at }: { step: Extract<GapStoryStep, { kind: 'basket' }>; at: number }) {
  const { bag } = hollin
  const item = hollin.products.find((p) => p.name === step.item) ?? hollin.products[1]
  const away = bag.free - Number(step.price.replace(/[^0-9.]/g, ''))
  return (
    <Card icon={Icon.basket} title={step.title} time={step.time} at={at} lands={at + 0.6} className="s-gs-card--bag">
      <div className="s-gs-art s-gs-bag">
        <p className="s-gs-pdp">
          <Photo p={item.photo} sizes="34px" />
          <span>
            <b>{step.item}</b>
            <span>{step.price}</span>
          </span>
        </p>
        <div className="s-gs-bag__panel">
          <p className="s-gs-bag__h">
            <b>{bag.title}</b>
            <span>{bag.count}</span>
          </p>
          <p className="s-gs-bag__item s-gs-in" style={d(at + 0.25)}>
            <Photo p={item.photo} sizes="38px" />
            <span>
              <b>{step.item}</b>
              <span>{bag.qty}</span>
            </span>
            <b>{step.price}</b>
          </p>
          <p className="s-gs-bag__sub">
            <span>{bag.subtotal}</span>
            <b>{step.price}</b>
          </p>
          {away > 0 && <p className="s-gs-bag__note">{bag.away.replace('{n}', String(away))}</p>}
          <p className="s-gs-bag__btn">{bag.checkout}</p>
        </div>
      </div>
    </Card>
  )
}

function Wait({ step, at }: { step: Extract<GapStoryStep, { kind: 'wait' }>; at: number }) {
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

/* A receipt's evidence, in miniature: the page, the email, the chat, the empty inbox, the finding. */
function ThumbOf({ kind }: { kind: Thumb }) {
  switch (kind) {
    case 'site':
      return (
        <span className="s-gs-th">
          <Photo p={hollin.hero.tall} sizes="24px" />
        </span>
      )
    case 'mail':
      return (
        <span className="s-gs-th">
          <Photo p={hollin.email.photo} sizes="24px" />
        </span>
      )
    case 'bag':
      return (
        <span className="s-gs-th">
          <Photo p={hollin.products[1].photo} sizes="24px" />
        </span>
      )
    case 'chat':
      return (
        <span className="s-gs-th s-gs-th--chat">
          <i />
          <i />
        </span>
      )
    case 'wait':
      return <span className="s-gs-th s-gs-th--wait">{Icon.mail}</span>
    case 'find':
      return (
        <span className="s-gs-th s-gs-th--find">
          <Sig state="needs" />
        </span>
      )
  }
}

/* ---- The picture ---------------------------------------------------------------------------------------------------- */

export function GapStory({ story }: { story: Story }) {
  const ref = useRef<HTMLDivElement>(null)
  const p = plan(story)
  const o = story.outside
  const f = story.inside.finding
  const days = [0, 1, 2, 3]
  const byDay = (n: number) => p.steps.filter((s) => s.step.day === n)
  const count = p.receipts.length

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
      { rootMargin: '0px 0px -15% 0px', threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  /* The outside's dashed line crosses each day as the inside's thread does: the same days, with nothing in them. */
  const dash = (day: number) =>
    day === 0
      ? d(p.outside + 0.5, { '--t': `${Math.max(0.4, (p.leave[0] ?? p.end) - p.outside - 0.5).toFixed(2)}s` })
      : d(p.leave[day - 1] ?? p.end, { '--t': `${T.travel}s` })

  const step = (s: Planned) => {
    switch (s.step.kind) {
      case 'signup':
        return <Signup key="signup" {...s} step={s.step} />
      case 'chat':
        return <Chat key="chat" step={s.step} at={s.at} customer={story.inside.customer} />
      case 'basket':
        return <Basket key="basket" step={s.step} at={s.at} />
      case 'wait':
        return <Wait key={'wait' + s.step.day} step={s.step} at={s.at} />
    }
  }

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

        {/* 1 calendar for both lanes, the brand square on the day it is now. */}
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
            <div key={n} className={'s-gs-cell s-gs-d' + n} data-look={n === o.day || undefined}>
              <span className="s-gs-dl">
                {UI.day} {n}
              </span>
              {n === o.day && (
                <>
                  <div className={'s-gs-look s-gs-look--' + o.kind} style={d(p.outside)}>
                    <span className="s-gs-crop" />
                    <div className="s-gs-shot">
                      {o.kind === 'page' ? (
                        <>
                          <p className="s-gs-shot__url">
                            {Icon.lock}
                            <span>{story.site}</span>
                          </p>
                          <HomePage title={o.title} read={o.line} />
                        </>
                      ) : (
                        <Dashboard title={o.title} line={o.line} time={o.time} />
                      )}
                    </div>
                  </div>
                  <p className="s-gs-logged s-gs-in" style={d(p.outside + 0.35)}>
                    {o.tag && <span className="s-gs-logged__tag">{o.tag}</span>}
                    <time>{o.time}</time>
                  </p>
                </>
              )}
              <span className="s-gs-dashed" style={dash(n)} />
              {n === 3 && (
                <p className="s-gs-tally s-gs-tally--out s-gs-in" style={d(p.end)}>
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
              <span className="s-gs-dl">
                <i className="s-gs-now" />
                {UI.day} {n}
              </span>
              {n === 0 ? <div className="s-gs-day0">{byDay(0).map(step)}</div> : byDay(n).map(step)}
              {n === f.day && (
                <>
                  <div className="s-gs-find ob-object s-gs-in" style={d(p.finding)}>
                    <p className="s-gs-find__h">
                      <Sig state="needs" cue={d(p.finding + 0.2)} />
                      <b>{f.title}</b>
                    </p>
                    <p className="s-gs-find__m">
                      <time>{when(f.day, f.time)}</time>
                      <span>{f.meta}</span>
                    </p>
                  </div>
                  <div className="s-gs-end">
                    <div className="s-gs-pile" style={{ '--n': count } as CSSProperties}>
                      {p.receipts.map((r, i) => (
                        <div key={i} className="s-gs-slip" data-top={i === count - 1 || undefined} style={d(r.at, { '--i': i })}>
                          <ThumbOf kind={r.thumb} />
                          <p className="s-gs-slip__t">
                            <b>{r.title}</b>
                            <time>{r.when}</time>
                          </p>
                          <span className="s-gs-tick" />
                          <p className="s-gs-slip__k">
                            <b>{UI.signed}</b>
                            <span>ed25519 · {signature(story.inside.hash, i, count - 1)}</span>
                          </p>
                        </div>
                      ))}
                      <span className="s-gs-count" style={d(p.receipts[0]?.at ?? 0)}>
                        {p.receipts.map((r, i) => (
                          <span key={i} data-last={i === count - 1 || undefined} style={win({ at: r.at, until: p.receipts[i + 1]?.at })}>
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
