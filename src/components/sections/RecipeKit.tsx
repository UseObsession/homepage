import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { StatusMark } from '../Logo'
import { StillMark } from '../StillMark'
import './RecipeKit.css'

/* What choosing a recipe sets up (Recipe.kit), spinning up in a product window: each item's ring turns while it is set
   up, then lands, 1 by 1, and the bar counts them in. The ring's states carry the status, never colour, and only 1
   mark moves at a time: the item being set up. Items still to come hold the ring still and quiet; landed items show
   the landed mark.
   - It plays once, when the reader reaches it, and again on a click (as the app screens do).
   - The prerendered HTML is the finished kit, so it reads with no script; reduced motion keeps it finished. */

/* The time each item takes to land: long enough to read it, short enough that 6 land in under 4 seconds. */
const STEP_MS = 560

const RM = '(prefers-reduced-motion: reduce)'
const onRm = (cb: () => void) => {
  const m = matchMedia(RM)
  m.addEventListener('change', cb)
  return () => m.removeEventListener('change', cb)
}
/* False on the server and while hydrating (the prerendered kit is finished either way), then the reader's setting. */
const useReducedMotion = () =>
  useSyncExternalStore(
    onRm,
    () => matchMedia(RM).matches,
    () => false,
  )

export type RecipeKitUi = {
  list: string
  status: { setup: string; ready: string; of: (n: number, all: number) => string }
}

type Props = {
  /* The recipe's name, in the window's bar. */
  name: string
  items: string[]
  ui: RecipeKitUi
  className?: string
}

export function RecipeKit({ name, items, ui, className = '' }: Props) {
  const all = items.length
  const ref = useRef<HTMLDivElement>(null)
  /* Items landed. It starts finished: the rest state, and the prerendered HTML. */
  const [landed, setLanded] = useState(all)
  const [playing, setPlaying] = useState(false)
  /* True once it has played in front of the reader: from then on a landing mark pops in. */
  const [live, setLive] = useState(false)
  const reduced = useReducedMotion()

  /* Below the fold at load: set it back to the start and play it once the reader gets to it. */
  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia(RM).matches || !('IntersectionObserver' in window)) return
    const r = el.getBoundingClientRect()
    if (r.top < innerHeight && r.bottom > 0) return
    setLanded(0)
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        setLive(true)
        setPlaying(true)
        io.disconnect()
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  /* The clock: 1 item lands per step, and the last one stops it. */
  useEffect(() => {
    if (!playing) return
    const t = window.setTimeout(() => {
      setLanded(landed + 1)
      if (landed + 1 >= all) setPlaying(false)
    }, STEP_MS)
    return () => window.clearTimeout(t)
  }, [playing, landed, all])

  const replay = () => {
    if (reduced || playing) return
    setLanded(0)
    setLive(true)
    setPlaying(true)
  }

  const shown = reduced ? all : landed
  const done = shown >= all

  return (
    <div className={`ob-window ob-object s-kit ${className}`} ref={ref} onClick={replay}>
      <div className="ob-window-bar s-kit__bar">
        <span className="ob-window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <p className="ob-window-title s-kit__name">{name}</p>
        <p className="s-kit__count" aria-hidden="true">
          {done ? (
            ui.status.ready
          ) : (
            <>
              {ui.status.setup}
              <span className="s-kit__of">{ui.status.of(shown, all)}</span>
            </>
          )}
        </p>
      </div>
      <ul className="s-kit__list" aria-label={ui.list}>
        {items.map((item, i) => {
          const state = i < shown ? 'landed' : i === shown && playing ? 'working' : 'pending'
          return (
            <li key={item} className={`s-kit__item is-${state}`}>
              {state === 'landed' ? (
                <span className={'s-kit__mark' + (live ? ' ob-anim-pop' : '')} aria-hidden="true">
                  <StatusMark state="landed" size={18} />
                </span>
              ) : state === 'working' ? (
                <span className="s-kit__mark" aria-hidden="true">
                  <StatusMark state="working" size={18} />
                </span>
              ) : (
                <StillMark state="working" size={18} className="s-kit__mark" />
              )}
              <span className="s-kit__text">{item}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
