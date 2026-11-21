/* Each blueprint's 4 tiers, priced by the pricing engine (src/lib/pricing/engine.js) from the pricing JSON
   (src/lib/pricing/pricing.json, copied from the workspace by `npm run pricing`) at its defaults: the default model,
   browser, cache share and fleet volume, exactly as the founders' calculator prices them. Each tier's name, who it's for,
   its price, what it covers and the recommended tier come from the engine; what's included comes from the blueprint's
   own file (Recipe.tiers), matched by tier name. A JSON blueprint is matched to its file by slug (`id`) or by recipe id
   (`siteId`).

   It runs at build time only, from content/catalog.ts, whose values are all the browser gets (vite.config.ts
   contentIndex), so neither the engine nor the JSON ships to the browser. Every mismatch fails the build: a blueprint
   file the JSON doesn't price, a JSON blueprint no file matches, or tier names that differ. */
import { allTiers, findBlueprint } from '../lib/pricing/engine.js'
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

/* A blueprint's tiers as its pricing table shows them. */
export function pricedTiers(r: Pick<Recipe, 'id' | 'slug' | 'tiers'>): BlueprintTier[] {
  const tiers = allTiers(blueprintOf(r), pricing)
  const names = tiers.map((t) => t.name).join(', ')
  if (r.tiers.map((t) => t.name).join(', ') !== names) fail(`${r.slug}'s tiers are named ${r.tiers.map((t) => t.name).join(', ')}, the JSON's ${names}`)
  if (!tiers[0]?.free) fail(`${r.slug}'s first tier is not free`)
  return tiers.map((t, i) => ({
    name: t.name,
    for: t.for ?? '',
    price: t.price,
    enterprise: t.enterprise,
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
