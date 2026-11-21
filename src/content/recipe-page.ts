import type { Cta } from './types'

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
    list: 'What this recipe sets up',
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
    heading: 'Each result reaches you as a recipe.result event.',
    line: 'It’s saved in your event log beside the events from your pieces. Then it reaches you the same way: at your webhook, in your code, in your own agent over MCP, or in Zapier, Make and n8n.',
    events: 'The events it sends',
    channels: 'Where results reach you',
    link: { label: 'See the code for each channel', to: '/developers#delivery' } satisfies Cta,
  },
  settings: { heading: 'Start from our recipe. Change anything, or bring your own job.' },
  forWho: { heading: 'The same recipe, different teams.' },
}

/* Whether a run is the real September run rather than an example (content/recipes/mystery-shopper.ts). */
export const isRealRun = (tab: string) => /^real run\b/i.test(tab)
