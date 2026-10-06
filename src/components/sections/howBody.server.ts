import { HowRailBody } from './HowRailBody'

/* How it works' insides for the prerender (scripts/prerender.mjs aliases ./howBody to this file in its server build): the
   component at hand, so Home's HTML carries the whole block. */
export const body = { preload: () => Promise.resolve(HowRailBody), read: () => HowRailBody }
