/* What a typical month of each blueprint costs (founders, 22 Nov 2026), worked out by the pricing engine
   (src/lib/pricing/engine.js) from the pricing JSON (src/lib/pricing/pricing.json, copied from the workspace by
   `npm run pricing`) at its defaults: the default model, browser, cache share and fleet volume, exactly as the founders'
   calculator works it out. There is one price list, the pieces: a blueprint run draws on the buyer's plan credit at the
   piece rates, like any piece, so a blueprint has no prices of its own. Its 4 scenarios are typical months, never plans
   to buy: the free run first, then a small, medium and large month. Each one's estimate (what its runs use x the list
   piece rates, model tokens at cost plus 10%, rounded to the nearest dollar, or 50 cents under $10), who it's for, what
   it covers and the featured month come from the engine; what a month like it brings comes from the blueprint's own
   file (Recipe.tiers), matched by name. A JSON blueprint is matched to its file by slug (`id`) or by recipe id
   (`siteId`).

   It runs at build time only, from content/catalog.ts, whose values are all the browser gets (vite.config.ts
   contentIndex), so neither the engine nor the JSON ships to the browser. Every mismatch fails the build: a blueprint
   file the JSON doesn't cover, a JSON blueprint no file matches, or scenario names that differ. */
import { blueprintMonths, findBlueprint } from '../lib/pricing/engine.js'
import pricing from '../lib/pricing/pricing.json'
import type { BlueprintTier, Recipe } from './types'

const fail = (msg: string): never => {
  throw new Error(`content/blueprint-tiers.ts: ${msg} (src/lib/pricing/pricing.json)`)
}

const blueprintOf = (r: Pick<Recipe, 'id' | 'slug'>) => {
  const found = pricing.blueprints.filter((b) => b.id === r.slug || b.siteId === r.id)
  if (found.length !== 1) fail(`${found.length ? 'more than 1 blueprint matches' : 'no blueprint matches'} the blueprint file ${r.slug} (${r.id})`)
  return findBlueprint(pricing, found[0].id)
}

/* A blueprint's 4 typical months as its pricing table shows them: at list rates, and paid from Startup's and Scale's
   credit, with whether each fits inside that credit. */
export function pricedTiers(r: Pick<Recipe, 'id' | 'slug' | 'tiers'>): BlueprintTier[] {
  const bp = blueprintOf(r)
  const months = blueprintMonths(bp, pricing)
  const startup = blueprintMonths(bp, pricing, { plan: 'startup' })
  const scale = blueprintMonths(bp, pricing, { plan: 'scale' })
  const names = months.map((t) => t.name).join(', ')
  if (r.tiers.map((t) => t.name).join(', ') !== names) fail(`${r.slug}'s scenarios are named ${r.tiers.map((t) => t.name).join(', ')}, the JSON's ${names}`)
  if (!months[0]?.free) fail(`${r.slug}'s first scenario is not its free run`)
  return months.map((t, i) => ({
    name: t.name,
    for: t.for ?? '',
    free: t.free,
    estimate: t.estimate,
    startup: startup[i].estimate,
    scale: scale[i].estimate,
    startupFits: !!startup[i].fitsCredit,
    scaleFits: !!scale[i].fitsCredit,
    covers: t.covers,
    includes: r.tiers[i].includes,
    featured: t.featured,
  }))
}

/* Every JSON blueprint has exactly 1 file. */
export function checkBlueprints(recipes: Pick<Recipe, 'id' | 'slug'>[]) {
  for (const b of pricing.blueprints) {
    const n = recipes.filter((r) => b.id === r.slug || b.siteId === r.id).length
    if (n !== 1) fail(`the JSON blueprint ${b.id} matches ${n} blueprint files`)
  }
}
