/* Whether a move to another page is under way: from the click on a link (or Back) to the commit of the page it opens.
   The router keeps the old page on screen while the next one's code and words load (lib/lazy.ts), so without this a
   slow load shows nothing at all. App.tsx starts it on an internal link's click or a Back or Forward, and ends it when
   the new page commits (ScrollManager); components/NavProgress draws it.
   The bar shows only once a load has taken long enough to notice, so a page that is already loaded opens with no bar at
   all. A move that never commits (a link something else stopped) gives up on its own. */
export type NavPhase = 'idle' | 'loading' | 'done'

const SHOW_AFTER = 150
const DONE_FOR = 400
const GIVE_UP = 15000

let phase: NavPhase = 'idle'
let pending = false
let show: ReturnType<typeof setTimeout> | undefined
let hide: ReturnType<typeof setTimeout> | undefined
let giveUp: ReturnType<typeof setTimeout> | undefined
const listeners = new Set<() => void>()

function set(next: NavPhase) {
  if (phase === next) return
  phase = next
  listeners.forEach((l) => l())
}

export function startNav() {
  if (pending) return
  pending = true
  clearTimeout(hide)
  show = setTimeout(() => set('loading'), SHOW_AFTER)
  giveUp = setTimeout(endNav, GIVE_UP)
}

export function endNav() {
  if (!pending) return
  pending = false
  clearTimeout(show)
  clearTimeout(giveUp)
  if (phase !== 'loading') return set('idle')
  set('done')
  hide = setTimeout(() => set('idle'), DONE_FOR)
}

export const navPhase = () => phase

export function subscribeNav(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}
