import { useEffect, useId, useRef } from 'react'
import type { Look as LookContent, WallAgent, WallCompany, WallKind, WallThing } from '../../content/types'
import './Look.css'

/* What does that look like (Home, 5 Nov, content/look.ts): a wall of companies, each card 1 company with its 4 AI
   customers as status icons, names as skeleton bars until an answer names them. 3 ways of using it take turns on the
   gallery dots: a question across the wall, domains added from a Clay table, a PDF for each client every Monday. Each
   answer parts the wall like a pair of doors, left and right (on a phone, up and down), and shows itself on a light
   panel in the middle; on a wide wall exactly 2 columns stay in view each side. The window is a product object, dark in
   every theme (.ob-theme-dark), and the middle is always paper (.ob-theme-light), so it shines.

   The wall is drawn and run here, outside React: about 150 status icons change several times a second, so the cards are
   built once and their attributes changed in place. React renders the frame (heading, the 3 faces of the top bar, the
   foot, the dots); the effect fills the 2 halves and the middle and cleans up after itself. Time only passes while the
   window is on screen. Clicking a card opens it and stops the turns until a dot is chosen. Under reduced motion each
   way shows its last frame, still, and the dots switch between them. */

type Agent = { s: 'sleep' | 'run' | 'wait' | 'chat' | 'woke' | 'filed'; p: number; ch?: string; until: number }
type Co = WallCompany & { domain?: string; kept?: string }
type Tile = { el: HTMLButtonElement; glyphs: HTMLElement[]; co: Co | null; ag: Agent[]; lock: boolean; row: number; col: number }
type Mode = 'ask' | 'sheet' | 'pdf'
type Layout = { min: number; cols: number; rows: number; split: 'v' | 'h'; size: string; vis: number }

const ORDER: Mode[] = ['ask', 'sheet', 'pdf']
const TOTAL: Record<Mode, number> = { ask: 15800, sheet: 12600, pdf: 12800 }
/* vis: how many columns stay in view on each side when the wall opens. */
const LAYOUTS: Layout[] = [
  { min: 980, cols: 8, rows: 5, split: 'v', size: 'wide', vis: 2 },
  { min: 760, cols: 6, rows: 5, split: 'v', size: 'mid', vis: 1 },
  { min: 548, cols: 4, rows: 5, split: 'v', size: 'narrow', vis: 1 },
  { min: 0, cols: 3, rows: 6, split: 'h', size: 'phone', vis: 1 },
]

/* ---------- Drawings ---------- */
const S = (d: string, w = 1.4) =>
  `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`
const IC: Record<WallKind | 'add', string> = {
  shop: S('<path d="M3 5h10l-.8 9H3.8z"/><path d="M5.8 5V4a2.2 2.2 0 0 1 4.4 0v1"/>'),
  bank: S('<path d="M2 6 8 2.5 14 6zM3.5 6.5v5M6.5 6.5v5M9.5 6.5v5M12.5 6.5v5M2 13.5h12"/>'),
  air: S('<path d="M2 9.5 14 4l-2 8-3.5-2.5L6 12V9z"/>'),
  soft: S('<path d="M5.5 4.5 2 8l3.5 3.5M10.5 4.5 14 8l-3.5 3.5"/>'),
  app: S('<rect x="4.5" y="1.5" width="7" height="13" rx="1.6"/><path d="M7 12.5h2"/>'),
  energy: S('<path d="M9 1.5 3.5 9H8l-1 5.5L12.5 7H8z"/>'),
  hotel: S('<path d="M2 12.5V4M2 9h12v3.5M14 9V7.5A1.5 1.5 0 0 0 12.5 6H7v3"/><circle cx="4.5" cy="7" r="1"/>'),
  insure: S('<path d="M8 1.8 13 3.6v4c0 3-2.2 5.3-5 6.6-2.8-1.3-5-3.6-5-6.6v-4z"/>'),
  mobile: S('<path d="M3 13v-2M6 13V9M9 13V6.5M12 13V3.5"/>'),
  gym: S('<path d="M2 8h12M4 5.5v5M12 5.5v5M2 6.5v3M14 6.5v3"/>'),
  box: S('<path d="M2.5 5 8 2.5 13.5 5v6L8 13.5 2.5 11z"/><path d="M2.5 5 8 7.5 13.5 5M8 7.5v6"/>'),
  rail: S('<rect x="3.5" y="2" width="9" height="9" rx="2"/><path d="M3.5 7h9M5.5 13.5 6.5 11M10.5 13.5 9.5 11"/>'),
  add: S('<path d="M8 4v8M4 8h8"/>', 1.6),
}
const MOON = '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><path d="M11.4 8.8A4.8 4.8 0 0 1 5.2 2.6a4.8 4.8 0 1 0 6.2 6.2Z"/></svg>'
const CHECK = S('<path d="m3.5 8.5 3 3 6-7"/>', 1.9)
const DOC = S('<path d="M4 1.8h5.2L12.5 5v9.2H4z"/><path d="M9 1.8V5h3.5M6 8.5h4.5M6 11h3"/>')
const CLOCK = S('<circle cx="8" cy="8" r="6"/><path d="M8 4.8V8l2.2 1.4"/>', 1.5)
const GRID = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="2" y="2.5" width="12" height="11" rx="1.5"/><path d="M2 6h12M2 9.5h12M6 2.5v11"/></svg>'
const MAIL = S('<rect x="2" y="3.5" width="12" height="9" rx="1.5"/><path d="m2.5 4.5 5.5 4.5 5.5-4.5"/>', 1.5)
const TEXT = S('<path d="M3 3h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.5L4.5 13.5V11H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/>', 1.5)
const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
const GLOBE = S('<circle cx="8" cy="8" r="6"/><path d="M2 8h12M8 2c2 2 2 10 0 12M8 2c-2 2-2 10 0 12"/>')
const PERSON = S('<circle cx="8" cy="5.5" r="2.5"/><path d="M3 14c.6-3 2.6-4.5 5-4.5s4.4 1.5 5 4.5"/>')
const FLAG = S('<path d="M3 13.5V3M3 3h8l-1.5 3L11 9H3"/>')
const MARK = '<svg viewBox="2 2 96 96" fill="currentColor" aria-hidden="true"><path d="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"/><path d="M65.404 16.011h18.585v18.585h-18.585Z"/></svg>'

const glyph = (s: string, p = 0) => {
  if (s === 'sleep') return MOON
  if (s === 'run') return '<span class="lw-roll"></span>'
  if (s === 'wait')
    return `<svg viewBox="0 0 14 14" aria-hidden="true"><circle class="bg" cx="7" cy="7" r="5.2"/><circle class="fg" cx="7" cy="7" r="5.2" transform="rotate(-90 7 7)" stroke-dasharray="${(p * 32.67).toFixed(2)} 40"/></svg>`
  if (s === 'chat') return '<span class="lw-typing"><b></b><b></b><b></b></span>'
  if (s === 'woke') return '<span class="lw-ping"></span>'
  if (s === 'filed') return CHECK
  if (s === 'clock') return CLOCK
  return IC.add
}
const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const fill = (t: string, v: Record<string, string | number>) => t.replace(/\{(\w+)\}/g, (_, k: string) => String(v[k] ?? ''))
const site = (c: Co) => c.domain || `${c.name.toLowerCase().replace(/ & /g, 'and').replace(/[^a-z]/g, '')}.example`

/* ---------- What opens in the middle ---------- */
function thing(t: WallThing) {
  if (t.kind === 'chat') {
    const answer = esc(t.answer).replace(esc(t.wrong), `<span class="lw-wrong">${esc(t.wrong)}</span>`)
    return `<div class="lw-o"><p class="lw-bub lw-bub--me">${esc(t.asked)}</p><p class="lw-bub">${answer}</p></div>`
  }
  if (t.kind === 'page') {
    const line = t.line ? `<span>${t.mark ? esc(t.line).replace(esc(t.mark), `<mark>${esc(t.mark)}</mark>`) : esc(t.line)}</span>` : ''
    return `<div class="lw-o lw-o--page"><p class="lw-o-url${t.broken ? ' lw-o-url--bad' : ''}">${esc(t.url)}</p><div class="lw-o-pg">${esc(t.title)}${line}</div></div>`
  }
  const tag = t.tag ? `<i>${esc(t.tag)}</i>` : ''
  return `<div class="lw-o"><span class="lw-o-k">${t.kind === 'text' ? TEXT : MAIL}${esc(t.meta)}${tag}</span><p class="lw-o-s">${esc(t.subject)}</p>${
    t.line ? `<p class="lw-o-p">${esc(t.line)}</p>` : ''
  }${t.button ? `<span class="lw-o-b">${esc(t.button)}</span>` : ''}</div>`
}

export function Look({ look, id }: { look: LookContent; id?: string }) {
  const hid = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    return runWall(root, look)
  }, [look])

  return (
    <section className="v5-section v5-look" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="v5-head">
          {look.kicker && <p className="v5-kicker">{look.kicker}</p>}
          <h2 className="v5-h2" id={`${hid}-h`}>
            {look.heading}
          </h2>
        </div>
        <p className="sr-only">{look.said}</p>
        <div ref={rootRef} className="lw" data-mode="ask" data-size="wide" data-names="skeleton">
          <div className="lw-win ob-theme-dark">
            <div className="lw-bar">
              <div className="lw-face" data-f="ask">
                <span dangerouslySetInnerHTML={{ __html: S('<path d="m5 4 4 4-4 4"/>', 1.8) }} className="lw-face-ic" />
                <p className="lw-q" aria-live="polite">
                  <span className="lw-typed">
                    <span className="lw-ph">{look.ask.placeholder}</span>
                  </span>
                  <span className="lw-caret" aria-hidden="true" />
                </p>
                <span className="lw-btn" data-off="" aria-hidden="true">
                  {look.ask.button}
                </span>
              </div>
              <div className="lw-face" data-f="sheet">
                <span dangerouslySetInnerHTML={{ __html: GRID }} className="lw-face-ic" />
                <span className="lw-sname">{look.sheet.name}</span>
                <span className="lw-cell">{fill(look.sheet.row, { n: 41 })}</span>
                <p className="lw-q" aria-live="polite">
                  <span className="lw-typed">
                    <span className="lw-ph">{look.sheet.placeholder}</span>
                  </span>
                  <span className="lw-caret" aria-hidden="true" />
                </p>
                <span className="lw-btn" data-off="" aria-hidden="true">
                  {look.sheet.button}
                </span>
              </div>
              <div className="lw-face" data-f="pdf">
                <span
                  dangerouslySetInnerHTML={{ __html: S('<rect x="2" y="3" width="12" height="11" rx="1.5"/><path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3"/>') }}
                  className="lw-face-ic"
                />
                <p className="lw-q lw-sched">
                  <b>{look.pdf.when}</b>
                  <span>{look.pdf.who}</span>
                </p>
                <span className="lw-pill" data-st="clock" aria-live="polite">
                  <i className="lw-st" data-s="clock" dangerouslySetInnerHTML={{ __html: CLOCK }} />
                  <span className="lw-pill-t">{look.pdf.clock[0]}</span>
                </span>
              </div>
            </div>
            <div className="lw-wall" data-split="v" data-mode="idle">
              <div className="lw-half" data-h="a" />
              <div className="lw-half" data-h="b" />
              <div className="lw-mid ob-theme-light" aria-live="polite" />
            </div>
            <div className="lw-foot">
              <span className="lw-sum" data-st="live">
                <i />
                <span className="lw-sum-t">
                  <b>{look.foot.from.toLocaleString('en-GB')}</b> {look.foot.woke.replace('{n} ', '')}
                </span>
              </span>
            </div>
          </div>
          <div className="lw-nav" aria-label={look.dots.label}>
            {ORDER.map((m) => (
              <button key={m} className="lw-dot" type="button" data-m={m} aria-label={look.dots[m]} aria-current={m === 'ask'}>
                <span>
                  <b />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- The wall, run on the DOM. Returns its cleanup. ---------- */
function runWall(root: HTMLElement, look: LookContent) {
  const q = <T extends Element>(s: string) => root.querySelector(s) as T
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const wall = q<HTMLElement>('.lw-wall')
  const halves = [...root.querySelectorAll<HTMLElement>('.lw-half')]
  const mid = q<HTMLElement>('.lw-mid')
  const dots = [...root.querySelectorAll<HTMLButtonElement>('.lw-dot')]
  const sum = q<HTMLElement>('.lw-sum')
  const sumT = q<HTMLElement>('.lw-sum-t')
  const face = (n: Mode) => {
    const el = q<HTMLElement>(`.lw-face[data-f="${n}"]`)
    return {
      typed: el.querySelector('.lw-typed') as HTMLElement | null,
      btn: el.querySelector('.lw-btn') as HTMLElement | null,
      cell: el.querySelector('.lw-cell') as HTMLElement | null,
      pill: el.querySelector('.lw-pill') as HTMLElement | null,
      pillT: el.querySelector('.lw-pill-t') as HTMLElement | null,
      pillG: el.querySelector('.lw-pill .lw-st') as HTMLElement | null,
    }
  }
  const F = { ask: face('ask'), sheet: face('sheet'), pdf: face('pdf') }
  const K = look.kinds
  const timers = new Set<number>()
  const later = (fn: () => void, ms: number) => {
    const t = window.setTimeout(() => {
      timers.delete(t)
      fn()
    }, ms)
    timers.add(t)
  }
  let alive = true
  let raf = 0

  /* The foot: how many AI customers woke in the last hour, or what the lit cards mean. */
  let woke = look.foot.from
  let footMode: 'live' | 'answer' = 'live'
  const flip = (el: HTMLElement) => {
    el.removeAttribute('data-flip')
    void el.offsetWidth
    el.setAttribute('data-flip', '')
  }
  const liveFoot = (anim: boolean) => {
    footMode = 'live'
    sum.dataset.st = 'live'
    sumT.innerHTML = fill(esc(look.foot.woke), { n: `<b>${woke.toLocaleString('en-GB')}</b>` })
    if (anim) flip(sumT)
  }
  const answerFoot = (st: string, text: string) => {
    footMode = 'answer'
    sum.dataset.st = st
    sumT.textContent = text
    flip(sumT)
  }

  /* The 4 AI customers on each card. */
  let life = 0
  const paintAg = (t: Tile, j: number) => {
    const g = t.glyphs[j]
    const a = t.ag[j]
    if (g.dataset.s !== a.s) {
      g.dataset.s = a.s
      g.innerHTML = glyph(a.s, a.p)
    } else if (a.s === 'wait') g.querySelector('.fg')?.setAttribute('stroke-dasharray', `${(a.p * 32.67).toFixed(2)} 40`)
  }
  const paintAll = (t: Tile) => t.ag.forEach((_, j) => paintAg(t, j))
  const to = (t: Tile, j: number, s: Agent['s'], dur: number, extra: { p?: number; ch?: string } = {}) => {
    t.ag[j] = { s, p: s === 'wait' ? (extra.p ?? 0.04) : 0, ch: extra.ch, until: dur ? life + dur : 0 }
    paintAg(t, j)
    if (s === 'woke') {
      woke += 1 + Math.floor(Math.random() * 3)
      if (footMode === 'live') liveFoot(false)
    }
  }
  const seed = (c: WallCompany, i: number, j: number): Agent => {
    const st = c.start
    if (j === 0 && st) {
      if (st.s === 'wait') return { s: 'wait', p: st.p, until: 0 }
      if (st.s === 'run') return { s: 'run', p: 0, until: 2600 + (i % 5) * 700 }
      if (st.s === 'chat') return { s: 'chat', p: 0, until: 3600 + (i % 4) * 900 }
      return { s: 'woke', p: 0, ch: st.ch, until: 1900 }
    }
    const n = (i * 4 + j * 9) % 23
    if (n === 2) return { s: 'run', p: 0, until: 1500 + ((i + j) % 6) * 600 }
    if (n === 5 || n === 11) return { s: 'wait', p: 0.1 + ((i + j) % 8) / 10, until: 0 }
    if (n === 7) return { s: 'chat', p: 0, until: 2500 + ((i + j) % 5) * 700 }
    return { s: 'sleep', p: 0, until: 0 }
  }

  /* The cards: the companies, and 3 places for the Clay table to fill. */
  const card = (slot: boolean): Tile => {
    const el = document.createElement('button')
    el.type = 'button'
    el.className = slot ? 'lw-t lw-slot' : 'lw-t'
    el.innerHTML = `<span class="lw-ic" aria-hidden="true"></span><span class="lw-nm"></span><span class="lw-bd" aria-hidden="true">${DOC}</span><span class="lw-ags" aria-hidden="true"><i class="lw-st"></i><i class="lw-st"></i><i class="lw-st"></i><i class="lw-st"></i></span>`
    return { el, glyphs: [...el.querySelectorAll<HTMLElement>('.lw-ags .lw-st')], co: null, ag: [], lock: false, row: 0, col: 0 }
  }
  const named = (t: Tile, c: Co) => {
    ;(t.el.querySelector('.lw-ic') as HTMLElement).innerHTML = IC[c.kind]
    ;(t.el.querySelector('.lw-nm') as HTMLElement).textContent = c.name
    t.el.setAttribute('aria-label', `${c.name}, ${K[c.kind].label}`)
    t.co = c
  }
  const coTiles = look.companies.map((c, i) => {
    const t = card(false)
    named(t, c)
    t.ag = [0, 1, 2, 3].map((j) => seed(c, i, j))
    paintAll(t)
    return t
  })
  const added: Co[] = look.sheet.added.map((a) => ({ name: a.name, kind: a.kind, domain: a.domain, kept: a.kept }))
  const slots = added.map(() => card(true))
  const all = [...coTiles, ...slots]
  const byEl = new Map(all.map((t) => [t.el as Element, t]))
  const resetSlots = () =>
    slots.forEach((t) => {
      t.el.className = 'lw-t lw-slot'
      t.co = null
      t.ag = []
      t.lock = false
      t.el.removeAttribute('data-hit')
      t.el.removeAttribute('data-new')
      ;(t.el.querySelector('.lw-ic') as HTMLElement).innerHTML = IC.add
      ;(t.el.querySelector('.lw-nm') as HTMLElement).textContent = ''
      t.el.setAttribute('aria-label', look.card.room)
    })
  const fillSlot = (j: number, settled: boolean) => {
    const t = slots[j]
    t.el.className = 'lw-t'
    named(t, added[j])
    t.lock = !settled
    t.ag = [0, 1, 2, 3].map(() => ({ s: settled ? 'sleep' : 'run', p: 0, until: 0 }) as Agent)
    t.glyphs.forEach((g) => {
      g.dataset.s = ''
    })
    paintAll(t)
    if (!settled) {
      t.el.removeAttribute('data-new')
      void t.el.offsetWidth
      t.el.setAttribute('data-new', '')
    }
  }
  resetSlots()

  /* Layout: the wall splits down the middle (left and right), or across it on a phone (up and down). The companies the
     answers open on sit beside the split; the Clay table's 3 places sit at the foot of the middle (a phone's last row). */
  let L: Layout | null = null
  let cells: Tile[] = []
  const place = (l: Layout) => {
    const { cols, rows, split } = l
    const at = (r: number, c: number) => r * cols + c
    const grid: (Tile | null)[] = new Array(cols * rows).fill(null)
    const m = cols / 2
    const hr = rows / 2
    const sc = split === 'v' ? [at(rows - 1, m - 1), at(rows - 1, m), at(rows - 1, m + 1)] : [at(rows - 1, 0), at(rows - 1, 1), at(rows - 1, 2)]
    const fc =
      split === 'v'
        ? [at(1, m - 1), at(2, m), at(0, m), at(0, m - 1), at(3, m), at(2, m - 1)]
        : [at(hr - 1, 0), at(hr - 1, 1), at(hr - 1, 2), at(hr, 1), at(hr, 2), at(hr, 0)]
    sc.forEach((ci, j) => {
      grid[ci] = slots[j]
    })
    look.featured.forEach((ti, j) => {
      if (fc[j] !== undefined) grid[fc[j]] = coTiles[ti]
    })
    let k = 0
    for (let ci = 0; ci < grid.length; ci++) {
      if (grid[ci]) continue
      while (look.featured.includes(k)) k++
      grid[ci] = coTiles[k++] ?? null
    }
    halves.forEach((h) => {
      h.textContent = ''
      h.style.setProperty('--hc', String(split === 'v' ? m : cols))
    })
    cells = []
    grid.forEach((t, ci) => {
      if (!t) return
      t.row = Math.floor(ci / cols)
      t.col = ci % cols
      halves[split === 'v' ? (t.col < m ? 0 : 1) : t.row < hr ? 0 : 1].appendChild(t.el)
      cells.push(t)
    })
  }
  /* How far the halves part: exactly vis columns stay in view each side; the middle takes the rest. */
  const sizes = (l: Layout) => {
    const v = l.split === 'v'
    const th = v ? 66 : 80
    const gap = v ? 8 : 6
    const pad = v ? 14 : 10
    const H = l.rows * th + (l.rows - 1) * gap + pad * 2
    wall.style.height = `${H}px`
    wall.style.setProperty('--th', `${th}px`)
    wall.style.setProperty('--gap', `${gap}px`)
    let slide: number
    let midW: number
    if (v) {
      const W = wall.clientWidth
      const hc = l.cols / 2
      const halfW = (W - pad * 2 - gap) / 2
      const cw = (halfW - (hc - 1) * gap) / hc
      slide = (hc - l.vis) * (cw + gap) + pad - gap
      midW = W - 2 * (pad + halfW - slide) - 2 * gap
    } else {
      const halfH = (H - pad * 2 - gap) / 2
      slide = halfH - 74
      midW = H - 2 * (pad + halfH - slide) - 2 * gap
    }
    wall.style.setProperty('--slide', `${Math.round(slide)}px`)
    wall.style.setProperty('--mid', `${Math.round(midW)}px`)
  }
  const layout = () => {
    const W = wall.clientWidth
    if (!W) return
    const nl = LAYOUTS.find((l) => W >= l.min) ?? LAYOUTS[LAYOUTS.length - 1]
    if (nl !== L) {
      L = nl
      root.dataset.size = nl.size
      wall.dataset.split = nl.split
      place(nl)
    }
    sizes(nl)
  }

  /* The wall's own life, which carries on through every answer: AI customers wake when their company sends something,
     run, talk to support and wait on deadlines, then sleep again. */
  let seen = false
  let acc = 0
  let lastF = performance.now()
  const advance = (t: Tile, j: number) => {
    const { s, ch } = t.ag[j]
    if (s === 'woke') to(t, j, 'filed', 1300, { ch })
    else if (s === 'run' || s === 'chat') to(t, j, 'filed', 1300)
    else if (s === 'filed') to(t, j, 'sleep', 0)
  }
  const spark = () => {
    const live = cells.filter((t) => t.co && !t.lock)
    const n = live.length * 4
    const count = (s: Agent['s']) => live.reduce((x, t) => x + t.ag.filter((a) => a.s === s).length, 0)
    const pool: [Tile, number][] = []
    live.forEach((t) =>
      t.ag.forEach((a, j) => {
        if (a.s === 'sleep') pool.push([t, j])
      }),
    )
    if (!pool.length) return
    const [t, j] = pool[Math.floor(Math.random() * pool.length)]
    const k = K[(t.co as Co).kind]
    const r = Math.random()
    if (r < 0.55) to(t, j, 'woke', 1600 + Math.random() * 700, { ch: k.wakes[Math.floor(Math.random() * k.wakes.length)] })
    else if (r < 0.68 && count('run') < n / 14) to(t, j, 'run', 3500 + Math.random() * 1800)
    else if (r < 0.75 && count('chat') < n / 30) to(t, j, 'chat', 4200 + Math.random() * 1800)
    else if (r < 0.82 && count('wait') < n / 14) to(t, j, 'wait', 0, { p: 0.04 })
  }
  const frame = (now: number) => {
    if (!alive) return
    const dt = Math.min(100, now - lastF)
    lastF = now
    if (seen) {
      life += dt
      acc += dt
      for (const t of cells) {
        if (!t.co || t.lock) continue
        for (let j = 0; j < 4; j++) {
          const a = t.ag[j]
          if (a.s === 'wait') {
            a.p = Math.min(1, a.p + dt / 26000)
            if (a.p >= 1) to(t, j, 'woke', 1700, { ch: 'Email' })
            else paintAg(t, j)
          } else if (a.until && life >= a.until) advance(t, j)
        }
      }
      if (acc > 280) {
        acc = 0
        spark()
      }
    }
    raf = requestAnimationFrame(frame)
  }

  /* Doors. */
  const sel = (t: Tile | null) => all.forEach((x) => x.el.toggleAttribute('data-sel', x === t))
  const open = (html: string, t: Tile | null) => {
    mid.innerHTML = html
    sel(t)
    void mid.offsetWidth
    wall.setAttribute('data-open', '')
  }
  const swap = (html: string, t: Tile | null) => {
    mid.innerHTML = html
    mid.firstElementChild?.classList.add('lw-in')
    sel(t)
  }
  const close = () => {
    wall.removeAttribute('data-open')
    sel(null)
  }

  /* Panels. */
  const head = (c: Co, em: string, tone: string) =>
    `<div class="lw-pv-h"><span class="lw-pv-ic">${IC[c.kind]}</span><b>${esc(c.name)}</b><span>${esc(site(c))}</span>${em ? `<em data-c="${tone}">${esc(em)}</em>` : ''}</div>`
  const proofCard = (qi: number, pi: number, n: number, of: number) => {
    const Q = look.ask.questions[qi]
    const P = Q.proofs[pi]
    const em = of ? fill(look.card.of, { n, m: of }) : ''
    return `<div class="lw-pv">${head(look.companies[P.company], em, Q.key)}<div class="lw-pv-row">${thing(P.thing)}${ARROW}${thing(P.then)}</div><p class="lw-pv-proof">${CHECK}${esc(P.kept)}</p></div>`
  }
  const agLine = (c: Co, a: Agent) => {
    const st = look.status
    if (a.s === 'sleep') return st.asleep
    if (a.s === 'run') return K[c.kind].running
    if (a.s === 'chat') return st.talking
    if (a.s === 'wait') return fill(st.waiting, { h: Math.max(1, Math.round(a.p * 48)) })
    if (a.s === 'woke') return fill(st.woke, { ch: a.ch ?? 'Email' })
    return fill(st.kept, { ch: a.ch ?? 'Email' })
  }
  const tileCard = (t: Tile) => {
    const c = t.co as Co
    const i = look.companies.indexOf(c)
    const hit = t.el.dataset.hit
    for (const [qi, Q] of look.ask.questions.entries()) {
      const pi = Q.proofs.findIndex((p) => p.company === i)
      if (hit === Q.key && pi >= 0) return proofCard(qi, pi, 0, 0)
    }
    let body: string
    let proof = look.card.kept
    if (hit === 'bad' && c.bad) {
      body = `<div class="lw-gap">${esc(c.bad)}</div>`
      proof = look.card.bad
    } else if (hit === 'ok' && c.ok) {
      body = thing({ kind: c.ok.ch === 'Text' ? 'text' : 'email', meta: fill(look.card.week, { ch: c.ok.ch }), subject: c.ok.text })
      proof = look.card.ok
    } else if (hit === 'pdf') {
      body = `<div class="lw-o"><span class="lw-o-k">${DOC}PDF · ${esc(look.pdf.clock[look.pdf.clock.length - 1])}</span><p class="lw-o-s">${esc(c.name)} · ${esc(look.pdf.week)}</p></div>`
      proof = look.card.client
    } else {
      const k = K[c.kind]
      body = `<div class="lw-ags-l">${t.ag
        .map((a, j) => `<div class="lw-ag"><i class="lw-st" data-s="${a.s}">${glyph(a.s, a.p)}</i>${esc(k.jobs[j])}<em>${esc(agLine(c, a))}</em></div>`)
        .join('')}</div>`
      proof = fill(look.card.latest, { text: c.kept ?? k.latest })
    }
    return `<div class="lw-pv">${head(c, K[c.kind].label, 'kind')}${body}<p class="lw-pv-proof">${CHECK}${esc(proof)}</p></div>`
  }
  const agHtml = (ag: WallAgent[], p = 0) => ag.map((s) => `<i class="lw-st" data-s="${s}">${glyph(s, p)}</i>`).join('')
  const sheetHtml = (done: boolean) => {
    const sh = look.sheet
    let k = 0
    const row = (r: number, d: string, ag: string, f: [string, string] | null) =>
      `<div class="lw-sh-row" data-r="${r}" style="--d:${k++}"><span>${r}</span><span class="lw-dom"><b>${esc(d)}</b></span><span class="lw-sags">${ag}</span><span class="lw-sf${
        f ? ` lw-c-${f[0]}` : ''
      }">${f ? `<b>${esc(f[1])}</b>` : '<i class="lw-pend"></i>'}</span></div>`
    const top = sh.listed.map((s, n) => row(n + 2, site(look.companies[s.company]), agHtml(s.agents, s.p), s.finding)).join('')
    const gap = `<div class="lw-sh-row lw-sh-gap" style="--d:${k++}"><span>⋮</span><span></span><span></span><span></span></div>`
    const four = (s: WallAgent): WallAgent[] => [s, s, s, s]
    const nw = added.map((x, j) => row(41 + j, site(x), agHtml(four(done ? 'sleep' : 'run')), done ? ['kept', x.kept ?? ''] : null)).join('')
    const hd = `<div class="lw-sh-row lw-sh-head"><span></span><span>${GLOBE}${esc(sh.head[0])}</span><span>${PERSON}<b class="lw-hl">${esc(sh.head[1])}</b></span><span>${FLAG}${esc(sh.head[2])}</span></div>`
    return `<div class="lw-sheet"><div class="lw-sh-top">${GRID}<b>${esc(sh.name)}</b><span>${esc(sh.rows)}</span></div>${hd}<div class="lw-sh-body">${top}${gap}${nw}</div></div>`
  }
  const pdfHtml = () => {
    const P = look.pdf
    const c = look.companies[P.client]
    const tone = (t?: string) => (t === 'bad' ? ' class="r"' : t === 'ok' ? ' class="g"' : '')
    const top = `<div class="lw-p-top"><span>${MARK}${esc(P.brand)}</span><span>${esc(P.week)}</span></div>`
    const f = P.finding
    const thumbs = Array.from({ length: P.pages }, (_, n) => `<span class="lw-thumb"${n === 0 ? ' data-on' : ''}><i></i><i></i><i></i></span>`).join('')
    return `<div class="lw-pdf">
      <div class="lw-pdf-bar">${DOC}<span>${esc(P.file)}</span><em class="lw-pg">1 / ${P.pages}</em></div>
      <div class="lw-pdf-body"><div class="lw-thumbs">${thumbs}</div><div class="lw-view"><div class="lw-pages">
        <div class="lw-page"><div class="lw-pi">${top}
          <p class="lw-p-t">${esc(c.name)}</p><p class="lw-p-s">${esc(site(c))}</p>
          <div class="lw-p-nums">${P.counts.map((n) => `<span><b${tone(n.tone)}>${esc(n.n)}</b>${esc(n.label)}</span>`).join('')}</div>
          <p class="lw-p-k">${esc(P.hit)}</p>
          <ul class="lw-p-list">${P.list.map((x) => `<li><i${tone(x.tone)}></i>${esc(x.text)}</li>`).join('')}</ul>
          <div class="lw-p-foot"><span>${esc(P.links)}</span><span>1</span></div>
        </div></div>
        <div class="lw-page"><div class="lw-pi">${top}
          <p class="lw-p-k">${esc(f.label)}</p><p class="lw-p-t2">${esc(f.title)}</p>
          <div class="lw-p-shots">
            <div class="lw-p-shot"><span class="lw-p-sl">${esc(f.email.meta)}</span><div class="lw-p-mail"><b>${esc(f.email.subject)}</b><span class="lw-p-code">${esc(f.email.code)}</span><span class="lw-p-btn">${esc(f.email.button)}</span></div></div>
            <div class="lw-p-shot"><span class="lw-p-sl">${esc(f.checkout.meta)}</span><div class="lw-p-co"><span class="lw-p-field">${esc(f.email.code)}</span><span class="lw-p-err">${esc(f.checkout.error)}</span></div></div>
          </div>
          <p class="lw-p-proof">${CHECK}${esc(f.kept)}</p>
          <div class="lw-p-foot"><span></span><span>2</span></div>
        </div></div>
      </div></div></div>
    </div>`
  }

  /* Answers. */
  let gen = 0
  const light = (key: 'bad' | 'ok' | 'client', now: boolean) => {
    const g0 = gen
    wall.dataset.mode = 'answer'
    cells.forEach((t) => {
      const hit = t.co && t.co[key]
      const apply = () => {
        if (g0 !== gen) return
        if (hit) t.el.dataset.hit = key === 'client' ? 'pdf' : key
        else t.el.removeAttribute('data-hit')
      }
      if (now) apply()
      else later(apply, t.col * 45 + t.row * 25)
    })
  }
  const unlight = () => {
    wall.dataset.mode = 'idle'
    all.forEach((t) => t.el.removeAttribute('data-hit'))
    if (footMode !== 'live') liveFoot(true)
  }
  const scan = (g: number, l: Layout) => {
    cells.forEach((t) =>
      later(() => {
        if (g !== gen) return
        t.el.removeAttribute('data-scan')
        void t.el.offsetWidth
        t.el.setAttribute('data-scan', '')
      }, t.col * 70 + t.row * 30),
    )
    return l.cols * 70 + l.rows * 30 + 300
  }
  const hits = (key: 'bad' | 'ok' | 'client') => cells.filter((t) => t.co && t.co[key]).length

  /* The dots, and time that only passes while the window is on screen. */
  let mode: Mode = 'ask'
  let modeT = 0
  const paint = () =>
    dots.forEach((b) => b.style.setProperty('--f', b.dataset.m === mode ? Math.min(1, modeT / TOTAL[mode]).toFixed(3) : '0'))
  const setMode = (m: Mode) => {
    mode = m
    modeT = 0
    root.dataset.mode = m
    dots.forEach((b) => b.setAttribute('aria-current', String(b.dataset.m === m)))
    paint()
  }
  const wait = (ms: number, g: number) =>
    new Promise<boolean>((res) => {
      let left = ms
      let last = performance.now()
      const tick = (now: number) => {
        if (g !== gen || !alive) return res(false)
        const dt = now - last
        last = now
        if (seen) {
          left -= dt
          modeT += dt
          paint()
        }
        if (left <= 0) res(true)
        else requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
  const press = async (btn: HTMLElement | null, g: number) => {
    btn?.setAttribute('data-press', '')
    const ok = await wait(150, g)
    btn?.removeAttribute('data-press')
    return ok
  }
  const type = async (el: HTMLElement | null, text: string, g: number, fast = false) => {
    if (!el) return true
    el.textContent = ''
    for (const ch of text) {
      el.textContent += ch
      if (!(await wait(fast ? 14 + Math.random() * 18 : ch === ' ' ? 36 : 18 + Math.random() * 24, g))) return false
    }
    return true
  }
  const ph = (el: HTMLElement | null, text: string) => {
    if (el) el.innerHTML = `<span class="lw-ph">${esc(text)}</span>`
  }
  const pill = (st: 'clock' | 'send' | 'done', text: string) => {
    const f = F.pdf
    if (!f.pill || !f.pillG || !f.pillT) return
    f.pill.dataset.st = st
    const s = st === 'send' ? 'run' : st === 'done' ? 'filed' : 'clock'
    f.pillG.dataset.s = s
    f.pillG.innerHTML = glyph(s)
    f.pillT.textContent = text
    flip(f.pillT)
  }
  let qi = 0

  /* 1. Ask: a question goes across every company at once, the wall answers, and it opens on the proof. */
  const playAsk = async (g: number) => {
    setMode('ask')
    close()
    unlight()
    resetSlots()
    const Q = look.ask.questions[qi]
    const f = F.ask
    ph(f.typed, look.ask.placeholder)
    f.btn?.setAttribute('data-off', '')
    if (!(await wait(2200, g))) return false
    if (!(await type(f.typed, Q.q, g))) return false
    f.btn?.removeAttribute('data-off')
    if (!(await wait(280, g))) return false
    if (!(await press(f.btn, g))) return false
    if (!L || !(await wait(scan(g, L), g))) return false
    light(Q.key, false)
    answerFoot(Q.key, Q.sum)
    if (!(await wait(1300, g))) return false
    const n = hits(Q.key)
    const at = (pi: number) => coTiles[Q.proofs[pi].company] ?? null
    open(proofCard(qi, 0, 1, n), at(0))
    if (!(await wait(3800, g))) return false
    swap(proofCard(qi, 1, 2, n), at(1))
    if (!(await wait(3800, g))) return false
    close()
    if (!(await wait(1000, g))) return false
    unlight()
    return wait(500, g)
  }

  /* 2. Clay table: domains come in at the top, each gets its own AI customers, and the wall opens on the table. */
  const settleRow = (r: number, kept: string) => {
    const row = mid.querySelector(`[data-r="${r}"]`)
    if (!row) return
    row.querySelectorAll<HTMLElement>('.lw-sags .lw-st').forEach((gl, j) =>
      later(() => {
        gl.dataset.s = 'sleep'
        gl.innerHTML = glyph('sleep')
      }, j * 120),
    )
    const fc = row.querySelector('.lw-sf') as HTMLElement | null
    if (!fc) return
    fc.className = 'lw-sf lw-c-kept'
    fc.innerHTML = `<b>${esc(kept)}</b>`
    fc.setAttribute('data-flash', '')
  }
  const playSheet = async (g: number) => {
    setMode('sheet')
    close()
    unlight()
    resetSlots()
    const f = F.sheet
    const cell = (n: number) => {
      if (f.cell) f.cell.textContent = fill(look.sheet.row, { n })
    }
    ph(f.typed, look.sheet.placeholder)
    cell(41)
    f.btn?.setAttribute('data-off', '')
    if (!(await wait(1400, g))) return false
    for (let j = 0; j < added.length; j++) {
      cell(41 + j)
      if (!(await type(f.typed, site(added[j]), g, true))) return false
      f.btn?.removeAttribute('data-off')
      if (!(await wait(160, g))) return false
      if (!(await press(f.btn, g))) return false
      fillSlot(j, false)
      f.btn?.setAttribute('data-off', '')
      if (!(await wait(320, g))) return false
    }
    ph(f.typed, look.sheet.placeholder)
    cell(41 + added.length)
    if (!(await wait(1100, g))) return false
    open(sheetHtml(false), null)
    if (!(await wait(3000, g))) return false
    added.forEach((x, j) => {
      settleRow(41 + j, x.kept ?? '')
      const t = slots[j]
      t.lock = false
      ;[0, 1, 2, 3].forEach((k) => to(t, k, k === 0 ? 'filed' : 'sleep', k === 0 ? 1600 : 0, { ch: 'Email' }))
    })
    if (!(await wait(2900, g))) return false
    close()
    slots.forEach((t) => t.el.removeAttribute('data-new'))
    return wait(1000, g)
  }

  /* 3. PDF: nobody asks. Monday 08:00 comes, every client's AI customers file their week, and the wall opens on 1
     client's report, scrolled from its summary to the proof. */
  const playPdf = async (g: number) => {
    setMode('pdf')
    close()
    unlight()
    const P = look.pdf
    for (const [n, t] of P.clock.entries()) {
      pill('clock', t)
      if (!(await wait(n === P.clock.length - 1 ? 600 : 1000, g))) return false
    }
    const n = hits('client')
    pill('send', fill(P.sending, { n }))
    light('client', false)
    answerFoot('pdf', P.sum)
    if (!(await wait(1500, g))) return false
    pill('done', fill(P.sent, { n }))
    if (!(await wait(700, g))) return false
    open(pdfHtml(), coTiles[P.client] ?? null)
    if (!(await wait(3200, g))) return false
    const pages = mid.querySelector<HTMLElement>('.lw-pages')
    const pg = pages?.querySelector<HTMLElement>('.lw-page')
    if (pages && pg) {
      pages.style.transform = `translateY(-${Math.round(pg.offsetHeight * 1.13) + 16}px)`
      const num = mid.querySelector('.lw-pg')
      if (num) num.textContent = `2 / ${P.pages}`
      mid.querySelectorAll('.lw-thumb').forEach((th, j) => th.toggleAttribute('data-on', j === 1))
    }
    if (!(await wait(3400, g))) return false
    close()
    if (!(await wait(1000, g))) return false
    unlight()
    return wait(400, g)
  }

  const PLAY: Record<Mode, (g: number) => Promise<boolean>> = { ask: playAsk, sheet: playSheet, pdf: playPdf }
  const run = async (from: number) => {
    const g = ++gen
    let i = from
    for (;;) {
      if (!(await PLAY[ORDER[i]](g))) return
      i = (i + 1) % ORDER.length
      if (i === 0) qi = (qi + 1) % look.ask.questions.length
    }
  }

  /* The last frame of each way, for reduced motion. */
  const still = (m: Mode) => {
    gen++
    setMode(m)
    modeT = TOTAL[m]
    paint()
    close()
    unlight()
    if (m === 'ask') {
      resetSlots()
      const Q = look.ask.questions[0]
      if (F.ask.typed) F.ask.typed.textContent = Q.q
      F.ask.btn?.removeAttribute('data-off')
      light(Q.key, true)
      answerFoot(Q.key, Q.sum)
      open(proofCard(0, 0, 1, hits(Q.key)), coTiles[Q.proofs[0].company] ?? null)
    } else if (m === 'sheet') {
      added.forEach((_, j) => fillSlot(j, true))
      if (F.sheet.cell) F.sheet.cell.textContent = fill(look.sheet.row, { n: 41 + added.length })
      ph(F.sheet.typed, look.sheet.placeholder)
      open(sheetHtml(true), null)
    } else {
      pill('done', fill(look.pdf.sent, { n: hits('client') }))
      light('client', true)
      answerFoot('pdf', look.pdf.sum)
      open(pdfHtml(), coTiles[look.pdf.client] ?? null)
    }
  }

  let started = false
  const onDot = (e: Event) => {
    const m = (e.currentTarget as HTMLElement).dataset.m as Mode
    started = true
    if (reduce) still(m)
    else void run(ORDER.indexOf(m))
  }
  dots.forEach((b) => b.addEventListener('click', onDot))
  /* Any company opens the wall on its AI customers. That stops the turns until a dot is chosen. */
  const onWall = (e: Event) => {
    const el = (e.target as Element).closest('.lw-t')
    const t = el ? byEl.get(el) : undefined
    if (!t || !t.co) return
    gen++
    if (t.el.hasAttribute('data-sel') && wall.hasAttribute('data-open')) return close()
    if (wall.hasAttribute('data-open')) swap(tileCard(t), t)
    else open(tileCard(t), t)
  }
  wall.addEventListener('click', onWall)

  layout()
  const ro = 'ResizeObserver' in window ? new ResizeObserver(layout) : null
  ro?.observe(wall)
  liveFoot(false)

  let io: IntersectionObserver | null = null
  if (reduce || !('IntersectionObserver' in window)) {
    seen = true
    still('ask')
  } else {
    raf = requestAnimationFrame(frame)
    io = new IntersectionObserver(
      ([e]) => {
        seen = e.isIntersecting
        if (seen && !started) {
          started = true
          void run(0)
        }
      },
      { threshold: 0.3 },
    )
    io.observe(q('.lw-win'))
  }

  return () => {
    alive = false
    gen++
    cancelAnimationFrame(raf)
    timers.forEach((t) => clearTimeout(t))
    ro?.disconnect()
    io?.disconnect()
    dots.forEach((b) => b.removeEventListener('click', onDot))
    wall.removeEventListener('click', onWall)
    halves.forEach((h) => {
      h.textContent = ''
    })
    mid.textContent = ''
    wall.removeAttribute('data-open')
  }
}
