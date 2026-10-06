import { createElement, useEffect, useId, useRef, useState } from 'react'
import type { HowRail as Rail } from '../../content/types'
import { hydrating } from '../../lib/hydration'
import { body } from './howBody'
import './HowRail.css'

/* How it works, compact (Home, docs/REBUILD.md 2): the 4 steps on 1 rail, each over a small slice of the app doing its
   1 thing. Not How's full screens: a slice is a few of the app's own parts (the typed line, chips, rows, a switch, a
   button) in the app's look, at the page's own size. The claim, the steps and the slices: HowRailBody.tsx.
   - 1080px and wider: the 4 steps in a row, the rail along their numbers, and the 4 slices on 1 glossy panel (the
     product object), with a seam where each step meets the next.
   - Narrower: the steps stack down the rail, each slice its own object under its words.
   Both layouts are the same markup, so nothing waits for script. The block has nothing to press, so hydration keeps its
   prerendered HTML as AppScreen keeps a screen's (lib/hydration): its markup is never in the bundle (howBody.ts), and
   this file is all the script a prerendered Home runs for it.
   Motion: the rest state is the finished scene, as with the app screens. Once the page has hydrated, a slice still below
   the view is set back to its start (.is-armed); when 60% of it is in view it plays (.play) its 1 action, and slices
   that come into view together play in turn, 0.5s apart. A slice already in view or passed by then keeps its finished
   scene, so nothing ever jumps back. AppScreen's observer plays 1 screen and useInView (hooks/useReveal) flips 1 state
   for 1 element; neither queues 4, so the observer is here. Transform and opacity only, once; reduced motion never arms
   it. */

const STEP_MS = 500
const REDUCE = '(prefers-reduced-motion: reduce)'

/* Hydration keeps the server's HTML only while React passes the same __html it was given (as AppScreen does). */
const KEEP = { __html: '' }

/* Home reached client side: the block's code loads at once, beside the page's own. */
if (typeof document !== 'undefined' && !hydrating()) void body.preload()

export function HowRail({ rail, id }: { rail: Rail; id?: string }) {
  const headId = `${useId()}-h`
  const ref = useRef<HTMLElement>(null)
  /* While hydrating, the prerendered block stays as it is; a block mounted later draws itself. */
  const [keep] = useState(() => typeof document !== 'undefined' && hydrating())

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window) || matchMedia(REDUCE).matches) return
    let next = 0
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          io.unobserve(e.target)
          const now = performance.now()
          next = Math.max(next, now)
          const slice = e.target as HTMLElement
          slice.style.setProperty('--s-hw-d', `${Math.round(next - now)}ms`)
          slice.classList.add('play')
          next += STEP_MS
        }
      },
      { threshold: 0.6 },
    )
    el.querySelectorAll<HTMLElement>('.s-hw-slice').forEach((slice) => {
      if (slice.getBoundingClientRect().top < innerHeight) return
      slice.classList.add('is-armed')
      io.observe(slice)
    })
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="s-section s-hw" id={id} aria-labelledby={headId}>
      {keep ? (
        <div className="s-wrap" dangerouslySetInnerHTML={KEEP} suppressHydrationWarning />
      ) : (
        <div className="s-wrap">{createElement(body.read(), { rail, headId })}</div>
      )}
    </section>
  )
}
