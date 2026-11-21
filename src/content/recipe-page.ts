import { blueprintPlans, type BlueprintPlan, type BlueprintPlanId } from './prices'
import type { BlueprintPlanCard, BlueprintPricing, Cta, Recipe, RecipeGroup } from './types'

/* What 1 run is called, and what 1 plan covers, for a recipe whose file doesn't say (types.ts Recipe `unit`, `per`). */
const UNIT = 'check'
const PER = 'site'
/* The paid plans, in order, and "a, b or c". */
const paid = blueprintPlans.filter((p) => p.monthly > 0)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

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
     what it counts (blueprintPricing below). */
  pricing: {
    heading: (r: Pick<Recipe, 'name' | 'per'>) => `${r.name}, priced per ${r.per ?? PER} by how often it runs.`,
    line: (r: Pick<Recipe, 'unit'>) => `Your first ${r.unit ?? UNIT} is free. After that, pick a ${orList(paid.map((p) => p.name.toLowerCase()))} run.`,
    /* The hero's second path, under its form, to the section (its anchor). */
    link: { label: 'See pricing', to: '#pricing' } satisfies Cta,
  },
}

/* ---- Each blueprint's pricing table (components/BlueprintPricing; James, 21 Nov 2026) ----
   The 4 tiers and their prices are content/prices.ts `blueprintPlans`, never typed here. Each card says them in the
   buyer's own terms: what 1 run is (`unit`) and what 1 plan covers (`per`; a client on /agencies). Weekly is the plan
   the table lifts. Under the cards, 1 line sends more of them, white label and a blueprint of your own to /pricing. */

const JOIN = '#join'
const named = (id: BlueprintPlanId) => blueprintPlans.find((p) => p.id === id)?.name ?? id
/* What a team that runs it more often hears about sooner: a competitor's change, or a step of its own that breaks. */
const moves: Record<RecipeGroup, string> = {
  'Watch other companies': 'changes',
  'Check your own journeys': 'breaks',
  'Check your AI agents': 'breaks',
}
/* How often a plan runs, from its `every`. */
const EVERY = { once: 'once', month: 'every month', week: 'every week', day: 'every day' } as const
const RESULTS = 'Every result in your dashboard, with the screenshot, email or recording behind it'

function wordsOf(plan: BlueprintPlan, unit: string, per: string, move: string): Pick<BlueprintPlanCard, 'for' | 'includes' | 'cta'> {
  const every = EVERY[plan.every]
  const start = { label: 'Start with a free run', to: JOIN }
  switch (plan.id) {
    case 'free':
      return {
        for: `Try it on 1 ${per}.`,
        includes: [`1 full ${unit}, when you ask for it`, RESULTS, 'The report for that run'],
        cta: { label: 'Run it free', to: JOIN },
      }
    case 'monthly':
      return {
        for: `Keep an eye on 1 ${per}.`,
        includes: [
          `A full ${unit} ${every}`,
          RESULTS,
          'Email and Slack alerts',
          'A report you can share',
          'Every result in your event log, to read by webhook, API or MCP',
        ],
        cta: start,
      }
    case 'weekly':
      return { for: `Know the week something ${move}.`, includes: [`A full ${unit} ${every}`, `Everything in ${named('monthly')}`], cta: start }
    case 'daily':
      return {
        for: `Know the day something ${move}.`,
        includes: [`A full ${unit} ${every}`, `Everything in ${named('weekly')}`, `History and trends for each ${per}`],
        cta: start,
      }
  }
}

/* A blueprint's 4 cards and the line under them. `per` replaces the recipe's own (on /agencies: 'client'). */
export function blueprintPricing(r: Pick<Recipe, 'group' | 'unit' | 'per'>, per = r.per ?? PER): BlueprintPricing {
  const unit = r.unit ?? UNIT
  return {
    label: 'Plans',
    tag: 'Recommended',
    includes: 'What’s included',
    plans: blueprintPlans.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.monthly === 0 ? 'Free' : `$${p.monthly}`,
      per: p.monthly === 0 ? '1 run' : `a month per ${per}`,
      featured: p.id === 'weekly',
      ...wordsOf(p, unit, per, moves[r.group]),
    })),
    more: { line: `More ${per}s, white label, or a blueprint of your own?`, link: { label: 'See every plan', to: '/pricing' } },
  }
}

/* Whether a run is the real September run rather than an example (content/recipes/mystery-shopper.ts). */
export const isRealRun = (tab: string) => /^real run\b/i.test(tab)
