import { useId, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { HomeHow } from '../../content/types'
import './blueprint.css'
import './HomeHowItWorks.css'

/* How it works on Home (#how), the founder's pick of 21 Nov: the claim and its line, then the loop as 1 picture, then the
   link to the ways an event reaches you (#delivery). The picture: set up once, feeding a ring of 3 stops (something happens, it's
   saved in your event log, it reaches your agent or a person); the dashed way back says whatever your agent does next is
   a new event; live call audio crosses the ring as a wave, straight to the voice agent, and never touches the log. It is
   drawn twice, wide from 1080px and tall below, both as inline SVG with every word from content, and the figure reads
   as its `label`. 1 dot follows the one live event round the ring; with reduced motion it isn't drawn, and the picture
   reads as a still. Then the link to every channel's code (James, 22 Nov: the channel cards went; /developers lists them).
   The drawing is sized for these words: a much longer line needs its box widened. */

const r = (n: number) => Math.round(n * 10) / 10

/* Greedy wrap: as many words to a line as fit in `max` characters. */
function wrap(text: string, max: number) {
  const lines: string[] = []
  for (const word of text.split(' ')) {
    const last = lines.length - 1
    if (last >= 0 && lines[last].length + 1 + word.length <= max) lines[last] += ' ' + word
    else lines.push(word)
  }
  return lines
}

/* A sine wave drawn with quadratic humps, so live call audio always looks the same, across or down. */
function waveH(x1: number, x2: number, y: number, a: number, p: number, move = true) {
  const n = Math.max(2, Math.round(Math.abs(x2 - x1) / (p / 2)))
  const h = (x2 - x1) / n
  return `${move ? `M${r(x1)} ${r(y)} ` : ''}q${r(h / 2)} ${-2 * a} ${r(h)} 0` + ` t${r(h)} 0`.repeat(n - 1)
}
function waveV(y1: number, y2: number, a: number, p: number) {
  const n = Math.max(2, Math.round(Math.abs(y2 - y1) / (p / 2)))
  const h = (y2 - y1) / n
  return `q${-2 * a} ${r(h / 2)} 0 ${r(h)}` + ` t0 ${r(h)}`.repeat(n - 1)
}

type Anchor = 'start' | 'middle' | 'end'
function T({ x, y, c, a, children }: { x: number; y: number; c: string; a?: Anchor; children: ReactNode }) {
  return (
    <text x={x} y={y} className={c} textAnchor={a === 'start' ? undefined : a}>
      {children}
    </text>
  )
}
/* Lines of 1 label, `lh` apart, from `y`. */
function Lines({ x, y, lh, c, a, lines }: { x: number; y: number; lh: number; c: string; a?: Anchor; lines: string[] }) {
  return lines.map((l, i) => (
    <T key={l} x={x} y={y + i * lh} c={c} a={a}>
      {l}
    </T>
  ))
}
function Box({ x, y, w, h, rx, log }: { x: number; y: number; w: number; h: number; rx: number; log?: boolean }) {
  return <rect x={x} y={y} width={w} height={h} rx={rx} className={log ? 's-hiw-logbox' : 's-hiw-box'} />
}
/* An arrow: solid for an event on its way, dashed for the agent's next move, a wave for live call audio. */
function Arrow({ d, mark, c = '' }: { d: string; mark: string; c?: string }) {
  return <path d={d} className={`s-hiw-ar ${c}`} markerEnd={`url(#${mark})`} />
}
function Defs({ mark }: { mark: string }) {
  return (
    <defs>
      <marker id={mark} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
        <path d="M2 1.5 L8.5 5 L2 8.5" className="s-hiw-mk" />
      </marker>
    </defs>
  )
}
/* The dot that follows the one live event round the ring, drawn under the boxes so it passes behind them. */
function Mover({ ring, dur }: { ring: string; dur: string }) {
  return (
    <g className="s-hiw-mover">
      <circle r="11" className="s-hiw-glow" />
      <circle r="4.5" className="s-hiw-dot" />
      <animateMotion dur={dur} repeatCount="indefinite">
        <mpath href={`#${ring}`} />
      </animateMotion>
    </g>
  )
}

type Loop = HomeHow['loop']

/* From 1080px: set up once on the left, the ring in the middle with the event log on top, the 3 places on the right. */
function Wide({ loop }: { loop: Loop }) {
  const mark = 's-hiw-ah-w'
  const ring = 's-hiw-ring-w'
  return (
    <svg className="s-hiw-d s-hiw-wide" viewBox="0 0 1160 530" width="1160" height="530" aria-hidden="true" focusable="false">
      <Defs mark={mark} />
      <Box x={0} y={310} w={230} h={120} rx={14} />
      <T x={20} y={342} c="s-hiw-tn">
        {loop.setup.name}
      </T>
      <Lines x={20} y={368} lh={18} c="s-hiw-ts" lines={wrap(loop.setup.line, 24)} />
      <Arrow d="M230 370 H293" mark={mark} />
      <T x={262} y={360} c="s-hiw-tv" a="middle">
        {loop.then}
      </T>

      <path id={ring} d="M406.8 370 A200 200 0 0 1 753.2 170 A200 200 0 0 1 406.8 370" className="s-hiw-none" />
      <Arrow d="M385.9 318.4 A200 200 0 0 1 456.9 112.4" mark={mark} />
      <Arrow d="M703.1 112.4 A200 200 0 0 1 774.1 318.4" mark={mark} />
      <Arrow d="M713.8 418.6 A200 200 0 0 1 469.3 436.6" mark={mark} c="s-hiw-dash" />
      <T x={368} y={200} c="s-hiw-tv" a="end">
        {loop.saved}
      </T>
      <T x={792} y={200} c="s-hiw-tv">
        {loop.reaches}
      </T>
      <T x={580} y={496} c="s-hiw-tv" a="middle">
        {loop.acts.name}
      </T>
      <T x={580} y={516} c="s-hiw-ts" a="middle">
        {loop.acts.line}
      </T>

      <Arrow d={`M480 330 V300 ${waveH(480, 680, 300, 3, 12, false)} V327`} mark={mark} c="s-hiw-wave" />
      <T x={580} y={262} c="s-hiw-tv" a="middle">
        {loop.audio.name}
      </T>
      <T x={580} y={280} c="s-hiw-ts" a="middle">
        {loop.audio.line}
      </T>
      <Lines x={580} y={134} lh={18} c="s-hiw-ts3" a="middle" lines={wrap(loop.audio.log, 26)} />
      <Mover ring={ring} dur="9s" />

      <Box x={297} y={330} w={220} h={98} rx={12} />
      <T x={315} y={360} c="s-hiw-tn">
        {loop.happens.name}
      </T>
      <Lines x={315} y={382} lh={18} c="s-hiw-ts" lines={wrap(loop.happens.line, 25)} />
      <Box x={475} y={34} w={210} h={72} rx={14} log />
      <T x={580} y={66} c="s-hiw-tn s-hiw-inv" a="middle">
        {loop.log.name}
      </T>
      <T x={580} y={88} c="s-hiw-ts s-hiw-inv2" a="middle">
        {loop.log.line}
      </T>
      <Box x={653} y={330} w={200} h={80} rx={12} />
      <T x={671} y={364} c="s-hiw-tn">
        {loop.agent.name}
      </T>
      <T x={671} y={388} c="s-hiw-ts">
        {loop.agent.line}
      </T>

      <path d="M853 370 H876 M876 290 V450 M876 290 H897 M876 370 H897 M876 450 H897" className="s-hiw-fork" />
      {loop.places.map((p, i) => {
        const y = 290 + i * 80
        return (
          <g key={p.name}>
            <Box x={900} y={y - 28} w={230} h={56} rx={10} />
            <T x={916} y={y - 4} c="s-hiw-tn14">
              {p.name}
            </T>
            <T x={916} y={y + 16} c="s-hiw-ts">
              {p.line}
            </T>
          </g>
        )
      })}
    </svg>
  )
}

/* Below 1080px: the stops run down the middle, the way back runs up the left, the wave runs down the right. */
function Tall({ loop }: { loop: Loop }) {
  const mark = 's-hiw-ah-t'
  const ring = 's-hiw-ring-t'
  return (
    <svg className="s-hiw-d s-hiw-tall" viewBox="0 0 360 714" width="360" height="714" aria-hidden="true" focusable="false">
      <Defs mark={mark} />
      <Box x={0} y={0} w={360} h={92} rx={14} />
      <T x={16} y={30} c="s-hiw-tn">
        {loop.setup.name}
      </T>
      <Lines x={16} y={54} lh={19} c="s-hiw-ts" lines={wrap(loop.setup.line, 40)} />
      <Arrow d="M180 92 V133" mark={mark} />
      <T x={192} y={118} c="s-hiw-tv">
        {loop.then}
      </T>
      <Arrow d="M180 234 V285" mark={mark} />
      <T x={192} y={265} c="s-hiw-tv">
        {loop.saved}
      </T>
      <Arrow d="M180 360 V411" mark={mark} />
      <T x={192} y={391} c="s-hiw-tv">
        {loop.reaches}
      </T>

      <path id={ring} d="M180 178 V578 H22 V178 Z" className="s-hiw-none" />
      <Arrow d="M180 540 V570 H22 V178 H57" mark={mark} c="s-hiw-dash" />
      <T x={180} y={596} c="s-hiw-tv" a="middle">
        {loop.acts.name}
      </T>
      <T x={180} y={615} c="s-hiw-ts" a="middle">
        {loop.acts.line}
      </T>
      <Arrow d={`M300 178 H338 ${waveV(178, 488, 3, 12)} H319`} mark={mark} c="s-hiw-wave" />
      <Mover ring={ring} dur="7s" />

      <Box x={60} y={140} w={240} h={94} rx={12} />
      <T x={78} y={168} c="s-hiw-tn">
        {loop.happens.name}
      </T>
      <Lines x={78} y={190} lh={18} c="s-hiw-ts" lines={wrap(loop.happens.line, 25)} />
      <Box x={60} y={292} w={240} h={68} rx={12} log />
      <T x={78} y={320} c="s-hiw-tn s-hiw-inv">
        {loop.log.name}
      </T>
      <T x={78} y={342} c="s-hiw-ts s-hiw-inv2">
        {loop.log.line}
      </T>
      <Box x={44} y={418} w={272} h={122} rx={12} />
      <T x={62} y={446} c="s-hiw-tn">
        {`${loop.agent.name}, ${loop.agent.line}`}
      </T>
      <Lines x={62} y={472} lh={22} c="s-hiw-ts" lines={loop.places.map((p) => p.short)} />

      <path d={waveH(0, 24, 656, 2.6, 8)} className="s-hiw-ar s-hiw-wave" />
      <Lines x={34} y={660} lh={19} c="s-hiw-ts" lines={wrap(`${loop.audio.note} ${loop.audio.log}`, 44)} />
    </svg>
  )
}

export function HomeHowItWorks({ how, id }: { how: HomeHow; id?: string }) {
  const hid = useId()
  return (
    <section className="s-section s-bp-ruled s-hiw" id={id} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {how.heading}
          </h2>
          <p className="s-bp-line">{how.line}</p>
        </div>

        <figure className="s-hiw-fig" role="img" aria-label={how.loop.label}>
          <Wide loop={how.loop} />
          <Tall loop={how.loop} />
        </figure>

        <div className="s-hiw-foot" id="delivery">
          <Link className="s-bp-link" to={how.link.to}>
            {how.link.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
