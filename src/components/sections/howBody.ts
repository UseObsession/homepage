import { use } from 'react'
import type { HowRailBody } from './HowRailBody'

/* How it works' insides in the browser (sections/HowRail). Every prerendered Home already carries them and hydration
   keeps that HTML, so the bundle never carries their markup: their component (HowRailBody.tsx) loads only when Home is
   reached client side, and the move waits for it (the router's transition), so the block never lands empty.
   It is lib/lazy's once(), written out: importing lib/lazy here would cut lib/hydration into a chunk of its own, 1 more
   file every page waits for. The prerender swaps this module for howBody.server.ts, which has the component at hand. */
type Body = typeof HowRailBody

let loaded: Body | undefined
let loading: Promise<Body> | undefined
const preload = () => (loading ??= import('./HowRailBody').then((m) => (loaded = m.HowRailBody)))

/* Read while rendering: the component, or a wait (Suspense) until it lands. */
function useLoaded(): Body {
  return loaded ?? use(preload())
}

export const body = { preload, read: useLoaded }
