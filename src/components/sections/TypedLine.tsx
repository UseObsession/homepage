import { useEffect, useRef, useState, type ReactNode } from 'react'

/* The hero's typed task line (docs/REBUILD.md 1c and 5): cycles the page's example tasks with the design system's caret.
   It types and erases calmly (motion.css: 1 character every 20 to 42ms), holds each finished task long enough to read,
   and makes 1 pass: back on the first task, it rests (so it never moves forever). It holds while it is off screen, the
   tab is hidden or the page says so (`paused`: the reader is in the form), and with reduced motion shows the first
   task, still.
   The prerendered HTML is the first task in full, so crawlers, readers without script and the first paint agree.

   The line is laid out as the whole task from the first keystroke: the part not typed yet is there but transparent.
   So a centred line never wobbles as it grows, a 2 line task on a phone wraps where it will end up, and the caret
   rides inside the text. The caret takes no width (Hero.css) and is glued to the letters beside it, so it never adds
   a line break of its own. Every task sits in the same grid cell, hidden, so the line is always as tall as the
   tallest task and nothing under it moves. */

/* Waits, in ms. Typing steps come from the design system's range (--ob-type-step-min and -max). */
const STEP_MIN = 20
const STEP_MAX = 42
const ERASE = 16
const HOLD = 2800
const SWAP = 260

/* A steady, uneven rhythm with no randomness, so every visit types the same way: a little longer after a space or
   a comma, like a person. */
function stepAfter(ch: string, i: number) {
  const base = STEP_MIN + ((i * 37) % (STEP_MAX - STEP_MIN + 1))
  return ch === ',' ? base + 120 : ch === ' ' ? base + 24 : base
}

const isSpace = (ch: string | undefined) => !ch || /\s/.test(ch)

/* Text typed up to `n`, the caret, then the rest of it laid out but unseen. Shared with the console's prompt. */
export function TypedText({ text, n, caret, typing }: { text: string; n: number; caret: boolean; typing: boolean }) {
  const on = text.slice(0, n)
  const off = text.slice(n)
  if (!caret) return <>{text}</>
  /* Glue the caret to the letter before and after it (never to a space, which must stay a place to break). */
  const before = isSpace(on.slice(-1)) ? '' : on.slice(-1)
  const after = isSpace(off[0]) ? '' : off[0]
  const head = before ? on.slice(0, -1) : on
  const tail = after ? off.slice(1) : off
  const caretEl = <span className={'ob-caret s-typed-caret' + (typing ? ' is-typing' : '')} aria-hidden="true" />
  let glued: ReactNode = caretEl
  if (before || after)
    glued = (
      <span className="s-typed-glue">
        {before}
        {caretEl}
        {after && <span className="s-typed-off">{after}</span>}
      </span>
    )
  return (
    <>
      {head}
      {glued}
      {tail && <span className="s-typed-off">{tail}</span>}
    </>
  )
}

type Mode = 'hold' | 'erase' | 'swap' | 'type'

export function TypedLine({ lines, paused = false, className = '' }: { lines: string[]; paused?: boolean; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [i, setI] = useState(0)
  const [n, setN] = useState(lines[0]?.length ?? 0)
  const [mode, setMode] = useState<Mode>('hold')
  const [running, setRunning] = useState(false)
  /* The pass is over once the first task is back and typed in full. */
  const [rest, setRest] = useState(false)
  const on = running && !paused && !rest

  const line = lines[i] ?? ''

  /* Runs only with motion allowed, more than 1 task, the line on screen and the tab in front. With reduced motion
     turned on mid-cycle, the line settles on the first task, whole. */
  useEffect(() => {
    const el = ref.current
    if (!el || lines.length < 2) return
    const reduce = matchMedia('(prefers-reduced-motion: reduce)')
    let seen = false
    const update = () => {
      if (reduce.matches) {
        setI(0)
        setN(lines[0].length)
        setMode('hold')
      }
      setRunning(seen && !document.hidden && !reduce.matches)
    }
    const io = new IntersectionObserver(([e]) => {
      seen = e.isIntersecting
      update()
    })
    io.observe(el)
    document.addEventListener('visibilitychange', update)
    reduce.addEventListener('change', update)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', update)
      reduce.removeEventListener('change', update)
    }
  }, [lines])

  useEffect(() => {
    if (!on) return
    let wait = 0
    let next: () => void
    if (mode === 'hold') {
      wait = HOLD
      next = () => setMode('erase')
    } else if (mode === 'erase') {
      wait = ERASE
      next = () => (n > 0 ? setN(n - 1) : setMode('swap'))
    } else if (mode === 'swap') {
      wait = SWAP
      next = () => {
        setI((i + 1) % lines.length)
        setN(0)
        setMode('type')
      }
    } else {
      wait = n === 0 ? SWAP : stepAfter(line[n - 1], n)
      next = () => {
        if (n < line.length) return setN(n + 1)
        setMode('hold')
        if (i === 0) setRest(true)
      }
    }
    const t = window.setTimeout(next, wait)
    return () => window.clearTimeout(t)
  }, [on, mode, n, i, line, lines.length])

  const typing = on && (mode === 'type' || mode === 'erase')

  return (
    <p className={'s-typed ' + className} ref={ref}>
      {/* Every task, unseen, in the same cell: the line is as tall as the tallest one. */}
      {lines.map((l, k) => (
        <span className="s-typed-size" aria-hidden="true" key={k}>
          <span className="s-typed-gt">›</span> {l}
        </span>
      ))}
      <span className={'s-typed-line' + (mode === 'swap' ? ' is-swap' : '')} aria-hidden="true">
        <span className="s-typed-gt">›</span> <TypedText text={line} n={n} caret typing={typing} />
      </span>
      <span className="ob-sr">{lines[0]}</span>
    </p>
  )
}
