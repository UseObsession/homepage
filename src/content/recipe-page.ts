import type { BlueprintPlanCard, BlueprintPricing, BlueprintPricingOption, BlueprintTier, BlueprintVariant, Cta, Recipe } from './types'

/* What 1 tier counts, for a recipe whose file doesn't say (types.ts Recipe `per`). */
const PER = 'site'

/* The words every recipe page shares (pages/RecipePage), around each recipe's own content (src/content/recipes).
   Since 21 Nov a recipe is a job that runs on Obsession beside the pieces and writes its results to the account's event
   log: one of ours, ready to run, or a job a developer brings. Never "only for teams who don't code". Each result
   reaches the team as a blueprint.result event, through the same channels as every piece's events (1 line and a link
   to /developers#delivery, founder, 22 Nov 2026). These are the headings a recipe file gives no heading for, and they
   hold for every recipe. The 1 real run is
   Brand G's (Store sign-up and checkout, /sample-output); every other run is an example. Never "AI customer", never a
   recipe count, never a claim that a run was signed. */

export const recipePage = {
  /* The hero's pill, as on every page's hero. The way back (Home / Recipes / this recipe) is the breadcrumb above it. */
  pill: 'Early access',

  /* What the recipe spins up: its `kit`, landing 1 by 1. */
  kit: {
    heading: 'A job that runs beside the pieces, with nothing to host.',
    line: 'Say where they go. Each persona arrives with its name, inbox, number and schedule.',
    list: 'What this blueprint sets up',
    status: { setup: 'Setting up', ready: 'Ready', of: (n: number, all: number) => `${n} of ${all}` },
  },

  /* The run, played in the console. Its line is the recipe's `gets`; its label the run's own name. */
  run: {
    heading: 'Everything it brings back lands in your event log, dated, with a screenshot.',
    /* The console's tag, on the 1 real run only: Brand G, September 2026. */
    tag: { real: 'Real run' },
  },

  /* The steps, with the recipe's settings under them (founder, 22 Nov 2026: 1 section, not 2). */
  steps: { heading: 'You say who the persona is and where it goes.' },
  settings: { heading: 'Change any of it, or bring your own job.' },
  /* What the personas do and what they bring back, as 1 section under the recipe's own outputs heading (founder, 22 Nov
     2026): its checks, then what you get as the last group. The line says how each result reaches the team, in place of
     the channel list, which lives on /developers#delivery. */
  checks: {
    line: 'Each result is saved in your event log as a blueprint.result event, then sent where you listen.',
    outputs: 'What you get',
    channels: { label: 'See the code for each channel', to: '/developers#delivery' } satisfies Cta,
  },
  /* Every recipe page links to the 1 real run, Brand G's, by what it is. The label matches Home's. */
  outputs: { cta: { label: 'See the sample data', to: '/sample-output' } satisfies Cta },

  /* The pricing section, after the run (#pricing), on every recipe page (founders, 22 Nov 2026): what a typical month of
     the blueprint costs. A blueprint run is paid from the plan's credit at the piece rates, like any piece, so the
     section shows months, never plans to buy (blueprintPricing below). Every blueprint's first run is free
     (content/blueprint-tiers.ts fails the build otherwise). The 1 line under the heading says, for every card, how its
     price is worked out and paid (founders, 22 Nov 2026: no such line on each card). `switch` names the switch of a
     blueprint whose table changes with the buyer (mystery shopping: Agencies or Ecommerce brands), read aloud. */
  pricing: {
    heading: (r: Pick<Recipe, 'name'>) => `What a typical month of ${lowerFirst(r.name)} costs.`,
    line: 'Prices are worked out from what each run uses and paid from your plan’s credit.',
    switch: 'Prices for',
    /* The hero's second path, under its form, to the section (its anchor). */
    link: { label: 'See pricing', to: '#pricing' } satisfies Cta,
  },
}

/* ---- What a typical month of each blueprint costs (components/BlueprintPricing; founders, 22 Nov 2026) ----
   A blueprint's typical months (content/catalog.ts, worked out by the pricing engine in content/blueprint-tiers.ts) as
   cards: each card the month it describes and its price ("$214 a month"), what a month like it brings and its button;
   the free run is "Your first run" and "Free". The featured month is raised with the row's 1 primary button. No figure
   is typed here or in a blueprint's file, and no card is a plan to buy. Under the cards, 1 line sends the reader to
   every rate. */

const JOIN = '#join'
const RATES = '/pricing/rates'

/* "Mystery shopping" inside a sentence: "mystery shopping", but "QA ..." and "AI ..." stay. */
const lowerFirst = (s: string) => (/^[A-Z][a-z]/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s)
/* "$206", "$5.50". */
const dollars = (n: number) => `$${n.toLocaleString('en-GB', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 })}`

/* 1 month as its card: "Your first run" and "Free", or the month it describes and "$214" "a month". */
const tierCard = (t: BlueprintTier, i: number): BlueprintPlanCard => ({
  id: `month-${i}`,
  name: t.free ? 'Your first run' : t.covers,
  price: t.free ? 'Free' : dollars(t.estimate),
  per: t.free ? '' : 'a month',
  includes: t.includes,
  featured: t.featured,
  cta: { label: 'Start with a free run', to: JOIN },
})

/* A blueprint's 4 cards and the line under them. */
export function blueprintPricing(r: { per?: string; tiers: BlueprintTier[] }): BlueprintPricing {
  return {
    label: 'Typical months',
    tag: '',
    includes: 'In a month like this',
    plans: r.tiers.map(tierCard),
    more: { line: `More ${r.per ?? PER}s? Each adds what its runs use.`, link: { label: 'See every rate', to: RATES } },
  }
}

/* A blueprint's tables as its pricing section shows them: 1, or 1 per variant behind the switch, its own first. */
export function blueprintPricings(r: { per?: string; tiers: BlueprintTier[]; variants: BlueprintVariant[] }): BlueprintPricingOption[] {
  if (!r.variants.length) return [{ id: '', label: '', pricing: blueprintPricing(r) }]
  return r.variants.map((v) => ({ id: v.id, label: v.label, pricing: blueprintPricing(v) }))
}

/* Whether a run is the real September run rather than an example (content/recipes/mystery-shopper.ts). */
export const isRealRun = (tab: string) => /^real run\b/i.test(tab)
