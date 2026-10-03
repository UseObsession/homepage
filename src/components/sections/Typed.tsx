import { useEffect, useRef, useState, type ReactNode } from 'react'
import './Typed.css'

/* Typed text on the design system's caret (tokens.css .ob-caret, motion.css .is-typing): the console's typed task
   (Console) and the typed heading over every hero console (TypedHeading).

   Text is laid out whole from the first keystroke: the part not typed yet is there but transparent. So a centred line
   never wobbles as it grows, a line that wraps on a phone wraps where it will end up, and the caret rides inside the
   text. The caret takes no width (Typed.css) and is glued to the letters beside it, so it never adds a line break. */

const isSpace = (ch: string | undefined) => !ch || /\s/.test(ch)

/* Text typed up to `n`, the caret, then the rest of it laid out but unseen. */
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

/* Waits, in ms. Keys come from the design system's typing range (motion.css --ob-type-step-min and -max, 20 to 42ms),
   a little longer after a space, like a person; erasing is quicker. HOLD is long enough to read the first line. */
const STEP_MIN = 20
const STEP_MAX = 42
const ERASE = 16
const HOLD = 2600
const SWAP = 260
/* The console fades in last in the hero's sequence (Hero.css: 5 staggers, then motion.css's 800ms rise), so a heading
   in view on load starts typing once it is there. A hydration earlier than FRESH_MS is before the console shows. */
const ENTRANCE_MS = 1300
const FRESH_MS = 450

const stepAfter = (ch: string, i: number) => {
  const base = STEP_MIN + ((i * 37) % (STEP_MAX - STEP_MIN + 1))
  return ch === ' ' ? base + 24 : base
}

type Mode = 'hold' | 'erase' | 'swap' | 'type' | 'rest'

/* The typed heading over every hero console (Seun, 3 Oct; James's behaviour from his RunWindow): it types the first
   phrase, holds it, erases it and types the next, then rests on the last with the caret (which blinks 4 times and
   stays, tokens.css). 1 pass, never a loop.
   - The prerendered HTML is the first phrase in full: crawlers, readers without script and reduced motion get it,
     still. Screen readers always hear the first phrase, once.
   - In view on load, it types from empty once the console has faded in. Hydrated late with the heading already on
     screen, it holds the first phrase and goes on from there, so nothing already read disappears.
   - It waits while off screen or in a hidden tab, and goes on where it stopped.
   - Every phrase sits in 1 grid cell, unseen, so the heading is always as tall as its tallest phrase and nothing
     under it moves; a phone that wraps the longest phrase on 2 lines keeps both from the start. */
export function TypedHeading({ phrases, id, className = '' }: { phrases: string[]; id: string; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null)
  const [i, setI] = useState(0)
  const [n, setN] = useState(phrases[0]?.length ?? 0)
  const [mode, setMode] = useState<Mode>(phrases.length > 1 ? 'hold' : 'rest')
  const [on, setOn] = useState(false)
  const first = useRef(true)

  const phrase = phrases[i] ?? ''
  const last = phrases.length - 1

  /* Start: with motion allowed and more than 1 phrase. Reduced motion turned on midway settles on the first phrase. */
  useEffect(() => {
    const el = ref.current
    if (!el || phrases.length < 2) return
    const reduce = matchMedia('(prefers-reduced-motion: reduce)')
    let seen = false
    let first = true
    const update = () => {
      if (reduce.matches) {
        setI(0)
        setN(phrases[0].length)
        setMode('rest')
      }
      setOn(seen && !document.hidden && !reduce.matches)
    }
    /* The observer's first report says whether the heading is on screen as the script starts, measured with the
       browser's own layout rather than a layout of its own. */
    const io = new IntersectionObserver(([e]) => {
      seen = e.isIntersecting
      if (first && !reduce.matches && (!seen || performance.now() < FRESH_MS)) {
        setN(0)
        setMode('type')
      }
      first = false
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
  }, [phrases])

  useEffect(() => {
    if (!on || mode === 'rest') return
    let wait: number
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
        setI(i + 1)
        setMode('type')
      }
    } else {
      /* The first key of the page waits for the console's entrance; the first key after a swap waits a beat. */
      wait = n === 0 ? (first.current ? Math.max(SWAP, ENTRANCE_MS - performance.now()) : SWAP) : stepAfter(phrase[n - 1], n)
      next = () => {
        first.current = false
        if (n < phrase.length) return setN(n + 1)
        setMode(i < last ? 'hold' : 'rest')
      }
    }
    const t = window.setTimeout(next, wait)
    return () => window.clearTimeout(t)
  }, [on, mode, n, i, phrase, last])

  const typing = on && (mode === 'type' || mode === 'erase') && n > 0

  return (
    <h2 className={'s-typed-h ' + className} id={id} ref={ref}>
      {/* Every phrase, unseen, in the same cell: the heading is as tall as the tallest one. */}
      {phrases.map((p, k) => (
        <span className="s-typed-size" aria-hidden="true" key={k}>
          {p}
        </span>
      ))}
      <span className={'s-typed-line' + (mode === 'swap' ? ' is-swap' : '')} aria-hidden="true">
        <TypedText text={phrase} n={n} caret typing={typing} />
      </span>
      <span className="ob-sr">{phrases[0]}</span>
    </h2>
  )
}
