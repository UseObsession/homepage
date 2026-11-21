import type { BlueprintPlanCard, BlueprintPricing, BlueprintTier, Cta, Recipe } from './types'

/* What 1 tier counts, for a recipe whose file doesn't say (types.ts Recipe `per`). */
const PER = 'site'

/* The words every recipe page shares (pages/RecipePage), around each recipe's own content (src/content/recipes).
   Since 21 Nov a recipe is a job that runs on Obsession beside the pieces and writes its results to the account's event
   log: one of ours, ready to run, or a job a developer brings. Never "only for teams who don't code". Each result
   reaches the team as a recipe.result event, through the same channels as every piece's events (#delivery, the
   channels and the line on a server that's down from content/delivery.ts). These are the headings a recipe file gives
   no heading for, and they hold for every recipe. The 1 real run is
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
    heading: 'Everything that comes back lands in your event log, dated, with its screenshot.',
    /* The console's tag, on the 1 real run only: Brand G, September 2026. */
    tag: { real: 'Real run' },
  },

  steps: { heading: 'You say who the persona is and where it goes. Your event log keeps growing.' },
  checks: { heading: 'What the personas do, and what they bring back.' },
  /* Every recipe page links to the 1 real run, Brand G's, by what it is. The label matches Home's. */
  outputs: { cta: { label: 'See the sample data', to: '/sample-output' } satisfies Cta },
  /* How each result reaches the team: the same channels as every piece (components/piece/PieceDelivery). */
  delivery: {
    heading: 'Each result reaches you as a blueprint.result event.',
    line: 'It’s saved in your event log beside the events from your pieces. Then it reaches you the same way: at your webhook, in your code, in your own agent over MCP, or in Zapier, Make and n8n.',
    events: 'The events it sends',
    channels: 'Where results reach you',
    link: { label: 'See the code for each channel', to: '/developers#delivery' } satisfies Cta,
  },
  settings: { heading: 'Start from our blueprint. Change anything, or bring your own job.' },
  forWho: { heading: 'The same blueprint, different teams.' },

  /* The pricing section, after the run (#pricing), on every recipe page: its claim and line, from the recipe's name and
     its free tier (blueprintPricing below). Tiers may scale by how often a blueprint runs, by stores or locations, or by
     volume, so the words assume none of those: the line says what the free tier covers. Every blueprint's first tier is
     free (content/blueprint-tiers.ts fails the build otherwise). */
  pricing: {
    heading: (r: Pick<Recipe, 'name'>) => `${r.name}: start free, then pick the plan that fits.`,
    line: (tiers: BlueprintTier[]) => {
      const covers = tiers.find((t) => t.price === 0)?.covers ?? ''
      return `The free plan covers ${covers.charAt(0).toLowerCase()}${covers.slice(1)}. Every paid plan starts with a free run too.`
    },
    /* The hero's second path, under its form, to the section (its anchor). */
    link: { label: 'See pricing', to: '#pricing' } satisfies Cta,
  },
}

/* ---- Each blueprint's pricing table (components/BlueprintPricing; James, 21 Nov 2026) ----
   A blueprint's tiers (content/catalog.ts, priced by the pricing engine in content/blueprint-tiers.ts) as cards: each
   card its name, who it's for, its price, what it covers, what's included and its button, the featured tier raised with
   the row's 1 primary button. A tier priced above the Enterprise cap shows Enterprise and sends the reader to /pricing.
   No price is typed here or in a blueprint's file. Under the cards, 1 line sends more of them, white label and a
   blueprint of your own to /pricing. */

const JOIN = '#join'
const PRICING = '/pricing'

/* 1 tier as its card: "Free", "$49" and "a month", or "Enterprise", with what it covers under the price. */
const tierCard = (t: BlueprintTier, i: number): BlueprintPlanCard => ({
  id: `tier-${i}`,
  name: t.name,
  for: t.for,
  price: t.enterprise ? 'Enterprise' : t.price === 0 ? 'Free' : `$${t.price.toLocaleString('en-GB')}`,
  per: t.enterprise || t.price === 0 ? '' : 'a month',
  covers: t.covers,
  includes: t.includes,
  featured: t.featured,
  cta: t.enterprise
    ? { label: 'Talk to us', to: PRICING }
    : t.price === 0
      ? { label: 'Run it free', to: JOIN }
      : { label: 'Start with a free run', to: JOIN },
})

/* A blueprint's 4 cards and the line under them, counted in the blueprint's own terms (`per`). */
export function blueprintPricing(r: { per?: string; tiers: BlueprintTier[] }): BlueprintPricing {
  return {
    label: 'Plans',
    tag: 'Recommended',
    includes: 'What’s included',
    plans: r.tiers.map(tierCard),
    more: { line: `More ${r.per ?? PER}s, white label, or a blueprint of your own?`, link: { label: 'See every plan', to: PRICING } },
  }
}

/* Whether a run is the real September run rather than an example (content/recipes/mystery-shopper.ts). */
export const isRealRun = (tab: string) => /^real run\b/i.test(tab)
