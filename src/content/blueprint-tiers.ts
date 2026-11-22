/* What a typical month of each blueprint costs (founders, 22 Nov 2026), worked out by the pricing engine
   (src/lib/pricing/engine.js) from the pricing JSON (src/lib/pricing/pricing.json, copied from the workspace by
   `npm run pricing`) at its defaults: the default model, browser, cache share and fleet volume, exactly as the founders'
   calculator works it out. There is one price list, the pieces: a blueprint run draws on the buyer's plan credit at the
   piece rates, like any piece, so a blueprint has no prices of its own. Its 4 scenarios are typical months, never plans
   to buy: the free run first, then a small, medium and large month. Each one's estimate (what its runs use x the list
   piece rates, model tokens at cost plus 10%, rounded to the nearest dollar, or 50 cents under $10), what it covers and
   the featured month come from the engine; what a month like it brings comes from the blueprint's own file
   (Recipe.tiers), matched by name. A JSON blueprint is matched to its file by slug (`id`) or by recipe id (`siteId`).

   A blueprint can have variants (founders, 22 Nov 2026: mystery shopping, for agencies and for ecommerce brands): JSON
   blueprints whose `variantOf` names it, each a second set of scenarios on its page, behind a switch labelled by each
   one's `variantLabel`. A variant has no file or page of its own; its blueprint's file writes its tiers' words under
   its id (Recipe.variants).

   It runs at build time only, from content/catalog.ts, whose values are all the browser gets (vite.config.ts
   contentIndex), so neither the engine nor the JSON ships to the browser. Every mismatch fails the build: a blueprint
   file the JSON doesn't cover, a JSON blueprint no file matches, variants or scenario names that differ. */
import { blueprintMonths, blueprintVariants, findBlueprint } from '../lib/pricing/engine.js'
import pricing from '../lib/pricing/pricing.json'
import type { BlueprintTier, BlueprintTierWords, BlueprintVariant, Recipe } from './types'

const fail = (msg: string): never => {
  throw new Error(`content/blueprint-tiers.ts: ${msg} (src/lib/pricing/pricing.json)`)
}

/* The JSON blueprints with a page of their own: every one but a variant. */
const withPage = pricing.blueprints.filter((b) => !b.variantOf)

const blueprintOf = (r: Pick<Recipe, 'id' | 'slug'>) => {
  const found = withPage.filter((b) => b.id === r.slug || b.siteId === r.id)
  if (found.length !== 1) fail(`${found.length ? 'more than 1 blueprint matches' : 'no blueprint matches'} the blueprint file ${r.slug} (${r.id})`)
  return findBlueprint(pricing, found[0].id)
}

/* A JSON blueprint's 4 typical months at list rates, each with what the file says it includes, matched by name. */
function monthsOf(bp: ReturnType<typeof findBlueprint>, words: BlueprintTierWords[], where: string): BlueprintTier[] {
  const months = blueprintMonths(bp, pricing)
  const names = months.map((t) => t.name).join(', ')
  if (words.map((t) => t.name).join(', ') !== names) fail(`${where}'s scenarios are named ${words.map((t) => t.name).join(', ')}, the JSON's ${names}`)
  if (!months[0]?.free) fail(`${where}'s first scenario is not its free run`)
  return months.map((t, i) => ({ name: t.name, free: t.free, estimate: t.estimate, covers: t.covers, includes: words[i].includes, featured: t.featured }))
}

/* A blueprint's 4 typical months as its pricing table shows them, at list rates. */
export function pricedTiers(r: Pick<Recipe, 'id' | 'slug' | 'tiers'>): BlueprintTier[] {
  return monthsOf(blueprintOf(r), r.tiers, r.slug)
}

/* A blueprint with variants: its own months first, then each variant's, each with the switch's label and what it
   counts. [] for a blueprint without variants. */
export function pricedVariants(r: Pick<Recipe, 'id' | 'slug' | 'tiers' | 'variants'>): BlueprintVariant[] {
  const all = blueprintVariants(pricing, blueprintOf(r).id)
  const words = r.variants ?? []
  const named = (ids: string[]) => ids.join(', ') || 'none'
  if (named(all.slice(1).map((v) => v.id)) !== named(words.map((v) => v.id))) fail(`${r.slug} writes words for the variants ${named(words.map((v) => v.id))}, the JSON has ${named(all.slice(1).map((v) => v.id))}`)
  if (all.length < 2) return []
  return all.map((v, i) => ({
    id: v.id,
    label: v.variantLabel ?? fail(`${v.id} has no variantLabel`),
    per: v.per,
    tiers: monthsOf(v, i === 0 ? r.tiers : words[i - 1].tiers, `${r.slug} (${v.id})`),
  }))
}

/* Every JSON blueprint with a page has exactly 1 file. */
export function checkBlueprints(recipes: Pick<Recipe, 'id' | 'slug'>[]) {
  for (const b of withPage) {
    const n = recipes.filter((r) => b.id === r.slug || b.siteId === r.id).length
    if (n !== 1) fail(`the JSON blueprint ${b.id} matches ${n} blueprint files`)
  }
}
