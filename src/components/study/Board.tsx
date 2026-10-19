import { useEffect, useRef, type CSSProperties } from 'react'
import type { StudyBoard, StudyBoardCell } from '../../content/types'
import { StatusMark } from '../Logo'
import { useInView } from '../v5/useInView'
import './Board.css'

/* The hero's board (an agency's mystery shop, content/usecases): every store on the list watched as its customer at
   once, 1 row per store and 1 column per journey, and the receipt of 1 gap beside it. Played once, when it comes into
   view: the clock runs the watch's hours as a time lapse (slow at first, so the minutes after a sign up can be seen,
   then faster), each cell lands at its hour with what came back, the gaps all land at the last hour (silence is only
   known when the watch ends), and the receipt prints for the gap the next section fixes. The prerendered HTML is the
   board at rest, finished; under reduced motion it stays that way. 1 picture (role="img"), read as its label. */

const PLAY = 4.8
/* The clock's time lapse: hour h of `total` lands at PLAY x sqrt(h / total) seconds. */
const at = (h: number, total: number) => PLAY * Math.sqrt(Math.min(h, total) / total)

/* Literal class names, so the CSS purge sees each one (scripts/purge-css.mjs). */
const CELL: Record<StudyBoardCell['state'], string> = {
  ok: 's-board-cell s-board-cell--ok',
  gap: 's-board-cell s-board-cell--gap',
  none: 's-board-cell s-board-cell--none',
}

type Style = CSSProperties & Record<`--${string}`, string | number>

export function Board({ board }: { board: StudyBoard }) {
  const [ref, inView] = useInView<HTMLElement>(0.35)
  const clock = useRef<HTMLElement>(null)
  const run = useRef(false)

  /* The clock and the bar follow the time lapse; the cells and the receipt keep time in CSS, from the same curve. */
  useEffect(() => {
    const el = ref.current
    if (!inView || !el || run.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    run.current = true
    el.setAttribute('data-run', '')
    const t0 = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min((now - t0) / 1000 / PLAY, 1)
      const h = board.hours * t * t
      if (clock.current) clock.current.textContent = String(Math.floor(h))
      el.style.setProperty('--s-board-p', String(t * t))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, ref, board.hours])

  const cols = { '--s-board-cols': board.cols.length } as Style
  const end = { '--s-board-d': `${PLAY + 0.3}s` } as Style
  return (
    <figure className="s-board" ref={ref} role="img" aria-label={board.label} style={end}>
      <div className="s-board-sheet ob-object" aria-hidden="true">
        <header className="s-board-h">
          <span className="s-board-who">
            <StatusMark state="working" size={14} />
            {board.who}
          </span>
          <span className="s-board-count">{board.count}</span>
          <span className="s-board-clock">
            {board.hour} <b ref={clock}>{board.hours}</b> of {board.hours}
          </span>
          <span className="s-board-bar">
            <i />
          </span>
        </header>
        <div className="s-board-grid" style={cols}>
          <div className="s-board-row s-board-row--h">
            <span />
            {board.cols.map((c) => (
              <span key={c} className="s-board-ch">
                {c}
              </span>
            ))}
          </div>
          {board.rows.map((r) => (
            <div className="s-board-row" key={r.store}>
              <span className="s-board-store">
                <b>{r.store}</b>
                <em>{r.role}</em>
              </span>
              {r.cells.map((c, k) => (
                <span
                  key={board.cols[k]}
                  className={CELL[c.state]}
                  style={{ '--s-board-d': `${at(c.state === 'gap' ? board.hours : (c.at ?? 0), board.hours)}s` } as Style}
                >
                  <span className="s-board-ck">{board.cols[k]}</span>
                  <span className="s-board-wait">Waiting</span>
                  <span className="s-board-val">{c.text}</span>
                </span>
              ))}
            </div>
          ))}
          <div className="s-board-row s-board-row--more">
            <span className="s-board-store">
              <b>{board.more}</b>
            </span>
            {board.cols.map((c) => (
              <span key={c} className="s-board-ghost" />
            ))}
          </div>
        </div>
      </div>
      <div className="s-board-receipt v5-receipt" aria-hidden="true">
        <p className="s-board-receipt-h">
          <span>Record</span>
          <span>{board.receipt.store}</span>
        </p>
        <hr className="v5-receipt-rule" />
        {board.receipt.rows.map((row) => (
          <p className="v5-receipt-row" key={row.k}>
            <span className="v5-receipt-k">{row.k}</span>
            <span className="v5-receipt-v">{row.v}</span>
          </p>
        ))}
        <hr className="v5-receipt-rule" />
        <p className="s-board-fact">{board.receipt.fact}</p>
        <span className="v5-stamp s-board-stamp">{board.receipt.stamp}</span>
      </div>
    </figure>
  )
}
