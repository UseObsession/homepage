/* Whether an app screen has landed in src/screens (src/screens/names.ts). Imported through './screens' so the
   prerender's server build swaps in screens.server.ts here too (scripts/prerender.mjs aliases exactly './screens'); both
   sides know the same list at build time, so a missing screen is left out the same way on the server and in the
   browser. */
export { hasScreen } from './screens'
