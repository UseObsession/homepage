import { catalog } from './catalog'
import type { Cta, Faq, Meta } from './types'

/* /pricing (pages/Pricing.tsx): what a persona costs. The unit is the active minute, $1 for 10 ($0.10 a minute), tokens
   and browser time included; each plan is a monthly allowance that resets, with top ups at the same rate or a spend cap
   (James, 20 Nov: starting points approved in principle). Waiting is free. Phone numbers are billed per number by country
   and have no price on the page until one exists. No volume discount: Scale is by contract. Every number here is the
   founders'; never add one. This file is the page's words only, outside the Page glob (it sits beside pages/, not in it). */

export type PlanId = 'free' | 'builder' | 'team' | 'scale'

export type Plan = {
  id: PlanId
  name: string
  /* What the card shows as the price ("From" before it, for Scale), and under it. */
  price: string
  from?: string
  per: string
  line: string
  /* The numbers the estimator works with: the monthly price in dollars, the minutes included and the personas held at
     once. Scale has none of them: it is by contract. */
  dollars: number | null
  minutes: number | null
  personas: number | null
  /* 1 value per row of `plans.rows`, in the same order. */
  values: string[]
  cta: Cta
  /* The plan the page lifts (Team): the raised card and the page's 1 primary button in the row. */
  featured?: boolean
}

export type PricingPage = {
  meta: Meta
  pill: string
  headline: string
  sub: string
  /* Under the hero: 3 true numbers. */
  facts: { value: string; label: string }[]
  plans: { heading: string; line: string; rows: string[]; items: Plan[] }
  rules: { heading: string; line: string; items: { title: string; line: string }[] }
  estimator: {
    heading: string
    line: string
    /* The sliders move through these stops; `start` is the value the server draws. */
    personas: { label: string; stops: number[]; start: number; value: (n: number) => string }
    runs: { label: string; stops: number[]; start: number; value: (n: number) => string }
    minutes: { label: string; options: number[]; start: number; value: (n: number) => string; hint: string }
    card: {
      title: string
      used: string
      usedLine: (runs: string, minutes: number) => string
      plan: (name: string) => string
      included: (minutes: string) => string
      extra: string
      extraLine: (minutes: string) => string
      waiting: string
      waitingLine: string
      total: string
      byContract: string
      scaleLine: string
      bigLine: string
      phones: string
      cta: Cta
      scaleCta: Cta
      /* Read aloud once the inputs settle. */
      announce: (plan: string, total: string) => string
    }
  }
  faq: Faq
  final: { heading: string; line: string; cta: Cta; secondary: Cta }
}

const JOIN = '/#join'
const TALK: Cta = { label: 'Talk to us', to: `mailto:${catalog.contact}` }
/* 1,000 with its comma, the same on the server and in every browser. */
export const figure = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
const plural = (n: number, one: string, many: string) => `${figure(n)} ${n === 1 ? one : many}`

export const pricingPage: PricingPage = {
  meta: {
    path: '/pricing',
    title: 'Obsession pricing: $0.10 an active minute, waiting is free',
    description:
      'Free, Builder at $49, Team at $299 and Scale by contract. Every plan pays $0.10 an active minute, tokens and browser included. Waiting for replies is free.',
    answer:
      'Obsession charges $0.10 for each active minute a persona works, tokens and browser time included. Plans start free with 30 active minutes a month. Builder is $49 for 500 minutes, Team is $299 for 3,000, and Scale starts at $2,000 a month by contract. A persona waiting days for replies uses no minutes, and phone numbers are billed monthly per number.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Pricing', path: '/pricing' },
    ],
  },

  pill: 'Early access pricing',
  headline: 'Pay for the minutes your personas work. Waiting is free.',
  sub: 'Obsession charges $0.10 for each active minute a persona works, tokens and browser time included. Every plan comes with minutes that reset each month, and a persona waiting days for replies uses none of them.',
  facts: [
    { value: '$0', label: 'to start, with 30 active minutes a month' },
    { value: '0', label: 'minutes used while a persona waits for replies' },
    { value: '48 hours', label: 'a persona waits for replies by default, waking on each one' },
  ],

  plans: {
    heading: 'Every plan runs on the same minute.',
    line: '$1 buys 10 active minutes on every plan, tokens and browser time included. A bigger plan holds more personas, keeps records longer and connects to more tools.',
    rows: ['Active minutes a month', 'Runs of 10 minutes', 'Personas at once', 'Phone numbers', 'Records kept', 'Connects through'],
    items: [
      {
        id: 'free',
        name: 'Free',
        price: '$0',
        per: 'a month',
        line: 'One persona and its inbox, to see a record come back.',
        dollars: 0,
        minutes: 30,
        personas: 1,
        values: ['30', 'About 3', '1', 'Email only', '7 days', 'API and MCP'],
        cta: { label: 'Get early access', to: JOIN },
      },
      {
        id: 'builder',
        name: 'Builder',
        price: '$49',
        per: 'a month',
        line: 'For a developer running personas from code.',
        dollars: 49,
        minutes: 500,
        personas: 10,
        values: ['500', 'About 50', '10', 'Billed per number', '30 days, 5 GB', 'API, MCP and webhooks'],
        cta: { label: 'Get early access', to: JOIN },
      },
      {
        id: 'team',
        name: 'Team',
        price: '$299',
        per: 'a month',
        line: 'For teams running fleets, wired into the tools they use.',
        dollars: 299,
        minutes: 3000,
        personas: 100,
        values: ['3,000', 'About 300', '100', 'Billed per number', '90 days, 50 GB', 'API, MCP, webhooks, Clay, Zapier, HubSpot and recipes'],
        cta: { label: 'Get early access', to: JOIN },
        featured: true,
      },
      {
        id: 'scale',
        name: 'Scale',
        price: '$2,000',
        from: 'From',
        per: 'a month, by contract',
        line: 'For fleets of thousands, on committed volume.',
        dollars: null,
        minutes: null,
        personas: null,
        values: ['Committed volume', 'Thousands', 'Thousands', 'Billed per number', '1 year, or custom', 'All of Team, plus SSO and a dedicated browser fleet'],
        cta: TALK,
      },
    ],
  },

  rules: {
    heading: 'You pay while a persona works, never while it waits.',
    line: 'A persona can wait days for an email or a text. Only the minutes it spends working count.',
    items: [
      {
        title: 'Waiting is free.',
        line: 'A persona waiting days for replies uses no minutes. Each time it wakes to read a new email or text counts as active time, 1 minute at least.',
      },
      {
        title: 'Tokens and the browser are in the minute.',
        line: '$0.10 an active minute covers the model’s tokens and the browser time. You never pay for either on its own.',
      },
      {
        title: 'Every persona comes with its inbox.',
        line: 'Phone numbers are billed monthly for as long as you hold them. The price depends on the country, and you see it before you add one.',
      },
      {
        title: 'Recipes run on the same minutes.',
        line: 'A mystery shop through sign up and checkout uses about 20 active minutes. Or buy a recipe per job, quoted on request, and never see a minute.',
      },
      {
        title: 'Run out, and you choose.',
        line: 'Top up at $0.10 a minute, or set a spend cap and wait for next month’s minutes.',
      },
      {
        title: 'No run can eat your plan.',
        line: 'Each run has a token cap per minute, so one runaway run can’t use up a month’s minutes.',
      },
    ],
  },

  estimator: {
    heading: 'Work out your month before you spawn a persona.',
    line: 'Pick how many personas you hold, how many runs they make and how long each run works. Waiting adds nothing.',
    personas: {
      label: 'Personas at once',
      stops: [1, 2, 3, 5, 10, 20, 50, 100, 250, 500, 1000],
      start: 10,
      value: (n) => plural(n, 'persona', 'personas'),
    },
    runs: {
      label: 'Runs a month',
      stops: [1, 3, 5, 10, 20, 30, 50, 100, 200, 300, 500, 1000, 2000, 5000, 10000],
      start: 30,
      value: (n) => plural(n, 'run', 'runs'),
    },
    minutes: {
      label: 'Active minutes a run',
      options: [5, 10, 20, 30, 60],
      start: 20,
      value: (n) => plural(n, 'minute', 'minutes'),
      hint: 'A mystery shop through sign up and checkout uses about 20.',
    },
    card: {
      title: 'Your month',
      used: 'Active minutes',
      usedLine: (runs, minutes) => `${runs} at ${minutes} minutes`,
      plan: (name) => `${name} plan`,
      included: (minutes) => `${minutes} minutes included`,
      extra: 'Extra minutes',
      extraLine: (minutes) => `${minutes} at $0.10`,
      waiting: 'Waiting for replies',
      waitingLine: 'Free, however long it takes',
      total: 'A month',
      byContract: 'By contract',
      scaleLine: 'Over 100 personas at once is Scale: thousands of personas, committed volume, SSO and a dedicated browser fleet.',
      bigLine: 'From $2,000 a month, Scale adds committed volume, SSO and a dedicated browser fleet.',
      phones: 'Phone numbers are extra, billed monthly per number at the price for their country.',
      cta: { label: 'Get early access', to: JOIN },
      scaleCta: TALK,
      announce: (plan, total) => `${plan} plan, ${total} a month.`,
    },
  },

  faq: {
    heading: 'Questions about minutes and plans.',
    items: [
      {
        q: 'What counts as an active minute?',
        a: 'Any minute a persona is working: opening pages, filling in a form, choosing its next step, or reading a new email or text. The $0.10 covers the tokens and the browser time. Time spent waiting for replies isn’t active, so it costs nothing.',
      },
      {
        q: 'What does Free include?',
        a: '30 active minutes a month, about 3 runs of 10 minutes. 1 persona at a time with its own inbox, records kept for 7 days, and the API and MCP. Phone numbers start on Builder.',
      },
      {
        q: 'How are phone numbers billed?',
        a: 'Monthly, for as long as you hold each number. The price depends on the country, and you see it before you add one. Every persona’s inbox is included in its plan.',
      },
      {
        q: 'What happens when I run out of minutes?',
        a: 'You choose: top up at $0.10 a minute, or set a spend cap and wait for next month’s minutes. Each run also has a token cap per minute, so one runaway run can’t use up a plan.',
      },
      {
        q: 'How long does a persona wait for replies?',
        a: '48 hours by default after a visit, or as long as you set. It sleeps, wakes for each new email or text, and goes back to sleep. Waiting is free, and each time it wakes counts as 1 active minute at least.',
      },
      {
        q: 'Can I buy a recipe without code?',
        a: 'Yes. Buy a recipe per job, quoted on request, and you never see a minute. On a plan, recipes run on the same minutes: a mystery shop through sign up and checkout uses about 20.',
        link: { label: 'See the mystery shopper recipe', to: '/recipes/mystery-shopper' },
      },
      {
        q: 'Do unused minutes carry over?',
        a: 'No. Each plan’s minutes reset every month.',
      },
      {
        q: 'Do you discount volume?',
        a: 'No. The minute costs $0.10 on every plan. A bigger plan holds more personas, keeps records longer and connects to more tools. Scale is by contract, from $2,000 a month, with committed volume.',
      },
    ],
  },

  final: {
    heading: 'Start with 30 free minutes and one persona.',
    line: 'Request early access and spawn your first persona on the free plan. It can wait days for replies at no cost.',
    cta: { label: 'Spawn a persona', to: JOIN },
    secondary: { label: 'Talk to us about Scale', to: `mailto:${catalog.contact}` },
  },
}
