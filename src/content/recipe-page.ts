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

  /* The pricing section, after the run (#pricing), on every recipe page (founders, 22 Nov 2026): what a typical month of
     the blueprint costs. A blueprint run is paid from the plan's credit at the piece rates, like any piece, so the
     section shows months, never plans to buy (blueprintPricing below). Every blueprint's first run is free
     (content/blueprint-tiers.ts fails the build otherwise). */
  pricing: {
    heading: (r: Pick<Recipe, 'name'>) => `What a typical month of ${lowerFirst(r.name)} costs.`,
    line: (_tiers: BlueprintTier[]) =>
      'Three months, small to large, worked out from what each run uses at the piece rates. Every run is paid from your plan’s monthly credit, then as you go, and your first run is free.',
    /* The hero's second path, under its form, to the section (its anchor). */
    link: { label: 'See pricing', to: '#pricing' } satisfies Cta,
  },
}

/* ---- What a typical month of each blueprint costs (components/BlueprintPricing; founders, 22 Nov 2026) ----
   A blueprint's typical months (content/catalog.ts, worked out by the pricing engine in content/blueprint-tiers.ts) as
   cards: each card the month it describes, who it's for, "About $N a month", the line on how it's worked out and paid,
   what a month like it brings and its button. The free run comes first; the featured month is raised with the row's 1
   primary button. No figure is typed here or in a blueprint's file, and no card is a plan to buy. Under the cards, 1
   line sends the reader to every rate. */

const JOIN = '#join'
const RATES = '/pricing/rates'

/* "Mystery shopping for agencies" inside a sentence: "mystery shopping for agencies", but "QA ..." and "AI ..." stay. */
const lowerFirst = (s: string) => (/^[A-Z][a-z]/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s)
/* "$206", "$5.50". */
const dollars = (n: number) => `$${n.toLocaleString('en-GB', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 })}`

/* What the month costs when paid from a plan's credit, said only where the whole month fits inside that credit (a plan's
   lower rates apply only to usage paid from its credit; past it, list rates; founders 22 Nov 2026). */
const fromCredit = (t: BlueprintTier) =>
  t.startupFits && t.scaleFits
    ? `About ${dollars(t.startup)} when paid from Startup’s credit, ${dollars(t.scale)} from Scale’s.`
    : t.scaleFits
      ? `About ${dollars(t.scale)} when paid from Scale’s credit.`
      : 'More than a plan’s credit covers: past it, usage is billed at list rates.'

/* 1 month as its card: the free run ("Free", what it covers, on us, and what it would cost at the piece rates), or a
   typical month ("About", "$206", "a month", and how that's worked out and paid). */
const tierCard = (t: BlueprintTier, i: number): BlueprintPlanCard => ({
  id: `month-${i}`,
  name: t.free ? 'Your first run' : t.covers,
  for: t.for,
  lead: t.free ? undefined : 'About',
  price: t.free ? 'Free' : dollars(t.estimate),
  per: t.free ? '' : 'a month at list rates',
  note: t.free
    ? `${t.covers}, on us. At the piece rates it would cost about ${dollars(t.estimate)}.`
    : `${fromCredit(t)} Worked out from what each run uses at the piece rates and paid from your plan’s credit, then at list rates, so you pay only for what runs.`,
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
    more: { line: `More ${r.per ?? PER}s? Each one adds what its runs use, at the same piece rates.`, link: { label: 'See every rate', to: RATES } },
  }
}

/* Whether a run is the real September run rather than an example (content/recipes/mystery-shopper.ts). */
export const isRealRun = (tab: string) => /^real run\b/i.test(tab)
