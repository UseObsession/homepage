import { plans } from '../prices'
import type { CardGrid, Page, PricingTabs } from '../types'

/* Agencies (/agencies), for resellers (21 Nov 2026, James; blueprints, 22 Nov): one page for every business that runs
   our blueprints for its own clients under its own brand: mystery shopping and CX audit firms, AI receptionist and front
   desk vendors, CRO, retention and voice AI agencies, automation consultants (n8n, Make), managed QA and testing vendors,
   and agent builder platforms. All asked for the same 3: a dashboard, a report under their own brand, and white
   label terms (an account per client, wholesale rates). The path stays /agencies for the links already pointing here.
   The page reads, in order (pages/Agencies.tsx): the hero, beside every client's checks on one board > the gap: checks
   done by hand eat the margin > #resell: the 6 kinds of reseller, each with the blueprints it would sell
   (sections/Kinds) > #white-label: the white label terms, from the Enterprise plan on /pricing (v5/CardGrid) >
   #pricing: the blueprints resellers sell, each a tab with that blueprint's own pricing table (`pricing` below,
   components/BlueprintPricingTabs) > questions > #join: Start free. Sold as designed. No customers, logos, quotes or
   results are claimed, and no price comes from a single deal. Never name a competitor, never "AI customers". */

const access = { kind: 'waitlist', button: 'Start free', interest: 'any' } as const

/* Enterprise's starting price, from prices.ts (the pricing JSON): its floor is on the first month's bill. A blueprint's
   typical months come from the pricing engine in the #pricing tabs, so no blueprint figure is typed here. */
const enterprise = plans.find((p) => p.id === 'enterprise')
const usd = (n: number) => `$${n.toLocaleString('en-US')}`
const ENTERPRISE_FROM = enterprise?.from != null ? `from ${usd(enterprise.from)}${enterprise.fromFirstMonth ? ' for the first month' : ' a month'}` : 'priced with you'

const PRICED = 'Start on the Free plan, with no credit card. Each run counts toward what your plan covers at list rates, so a client costs what its runs use.'

const SUB =
  'Run Obsession’s blueprints for your clients under your own brand. AI agents shop, call and fill in forms as their new customers, and every result lands in a dashboard and a report with your name on it.'

export const page: Page = {
  meta: {
    path: '/agencies',
    title: 'White label mystery shopping and AI agent checks · Obsession',
    description:
      'Resell mystery shops, lead response checks and AI agent checks under your own brand. Each client gets an account, a dashboard and branded reports.',
    /* Opens with the hero's sub, word for word (scripts/prerender.mjs checks its first sentence is on the page). */
    answer: `${SUB} ${PRICED}`,
    ogImage: '/og/agencies.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Agencies and resellers', path: '/agencies' },
    ],
  },

  hero: {
    pill: 'White label',
    pillTo: '#white-label',
    headline: 'Sell your clients mystery shops run by AI agents, under your own brand.',
    sub: SUB,
    capture: { ...access, source: 'agencies-hero' },
    secondary: { label: 'Browse blueprints', to: '/blueprints' },
    proof: [],
    consoleHeading: [],
    /* The hero's object: every client's checks on one board, as a reseller's own dashboard shows them. */
    screens: [{ tab: 'Every client', screen: 'board', recipe: 'mystery', line: '' }],
  },

  gapPair: {
    heading: 'Your clients pay for each check. Running them by hand eats your margin.',
    line: 'A blueprint runs each check and keeps every email, text and call that comes back.',
    tools: {
      label: 'By hand today',
      items: [
        'A person paid for every shop and every call',
        'Your sales team ringing each prospect’s front desk',
        'Forms filled in after hours to time the reply',
        'Screenshots pasted into a report, one client at a time',
      ],
    },
    customer: {
      label: 'Run by Obsession',
      items: [
        'An AI agent per check, with its own inbox, number and browser',
        'Every email, text, call and page in the event log, dated',
        'Checks daily, weekly or before a pitch',
        'Every client in one dashboard',
        'A report with your name and logo, ready to send',
      ],
    },
  },

  /* The 6 kinds of reseller, each with the blueprints it would sell (linked by Kinds from content/catalog). Every
     blueprint the page offers is linked at least once. */
  kinds: {
    heading: 'Sell the checks your clients already ask you for.',
    label: 'What does your business sell?',
    items: [
      {
        name: 'Mystery shopping and CX audits',
        line: 'Add online and phone shops to the visits you sell. Agents sign up, fill a basket, ring the branch and keep every email, text and call after.',
        recipes: ['mystery', 'speed', 'competitor'],
      },
      {
        name: 'AI receptionists and front desks',
        line: 'Open each sale by calling the prospect’s phone line, and show how long it rang and whether the caller got booked. After launch, call your own receptionist every morning.',
        recipes: ['speed', 'voice-agent'],
      },
      {
        name: 'CRO, retention and voice AI agencies',
        line: 'Time how fast each client answers a new lead, track every email and text its competitors send, and test the voice agents you build.',
        recipes: ['speed', 'email-sms', 'competitor', 'voice-agent'],
      },
      {
        name: 'Automation consultants',
        line: 'Test the lead flows you build in n8n and Make the way a new lead meets them. Every result goes straight back into the workflow.',
        recipes: ['speed', 'email-sms'],
      },
      {
        name: 'Managed QA and testing',
        line: 'Add sign-ups, text login codes and phone calls to the test runs you sell. Each flow runs as a new user with its own inbox and number.',
        recipes: ['audit', 'voice-agent'],
      },
      {
        name: 'Agent builder platforms',
        line: 'Give the agents your users build an inbox, a phone number and a browser of their own, under your brand. Blueprints such as mystery shopping give them a job to start from.',
        recipes: ['mystery', 'speed', 'competitor'],
      },
    ],
  },

  faq: {
    heading: 'Before you sell it to your first client.',
    items: [
      {
        q: 'What does Obsession do for a reseller?',
        a: `${SUB} You set your own price to clients.`,
      },
      {
        q: 'What does each client cost?',
        a: 'It depends on the blueprint and how often it runs. Each run counts toward what your plan covers at list rates. Each tab above shows a typical month, counted in sites, voice agents or competitors.',
        link: { label: 'See a typical month', to: '#pricing' },
      },
      {
        q: 'Can reports carry our brand?',
        a: 'Yes. Every report carries your name and logo and goes out from your own email address. The dashboard your clients see carries your brand too.',
      },
      {
        q: 'Can each client have its own account?',
        a: 'Yes. Each client gets its own account, with its own event log, so results never mix. Give a client a login of their own, or keep the account to your team.',
      },
      {
        q: 'What do we pay, and what do we charge?',
        a: `You pay for what each blueprint’s runs use, at list rates, and set your own price to clients. White label comes with the Enterprise plan, ${ENTERPRISE_FROM}, billed monthly with nothing paid up front. Its rates drop as your volume grows.`,
        link: { label: 'See the Enterprise plan', to: '/pricing' },
      },
      {
        q: 'Can we check a prospect’s phone line before the sale?',
        a: 'Yes. An agent calls the number any new customer would call, and says it’s an AI when a person answers. It records how long the line rang, what it was told and whether it was booked.',
      },
      {
        q: 'Can results go into our own tools?',
        a: 'Yes. Every result lands in the client’s event log first. From there it reaches you at a webhook, through the API or MCP, or in Zapier, Make and n8n.',
      },
      {
        q: 'Can our platform’s users get agents of their own?',
        a: 'Yes. Give each user inboxes, phone numbers, messaging, a browser and a sandbox through one API. Or put all of it under one name as a persona, in an account under your brand.',
      },
      {
        q: 'What can an agent do in a client’s name?',
        a: 'It signs in only with the logins the client gives it and works within a monthly spend limit you set on its key. It stops before payment, so nothing is bought, unless the client gives it a payment card of their own.',
      },
    ],
  },

  final: {
    heading: 'Which client should we check first?',
    sub: 'Tell us the client and the check. Watch what it does to pitches won, clients kept and revenue per client.',
    capture: { ...access, source: 'agencies-final' },
    link: { label: 'Browse blueprints', to: '/blueprints' },
  },
}

/* #pricing (James, 21 Nov 2026; founders, 22 Nov): 1 tab per blueprint resellers sell, each opening what a typical month
   of that blueprint costs (components/BlueprintPricingTabs, from content/catalog: the blueprint's `tiers`, its months at
   the piece rates). Mystery shopping opens on its Agencies months (founders, 22 Nov 2026). */
export const pricing: PricingTabs = {
  heading: 'What a typical month of each blueprint costs.',
  line: 'Prices are worked out from what each run uses, at list rates. You charge your clients what you choose.',
  label: 'Blueprints you can resell',
  recipes: ['mystery', 'speed', 'voice-agent', 'competitor', 'delivery', 'audit'],
  variant: 'mystery-shopper',
}

/* #white-label: the 3 asks every reseller made, as the Enterprise plan on /pricing gives them (content/pricing.ts:
   an account for each of your users under your brand, wholesale rates that drop with volume, monthly with nothing up
   front, founder 21 Nov). */
export const whiteLabel: CardGrid = {
  heading: 'Your clients see your brand, not ours.',
  line: 'The Enterprise plan adds white label, with a dashboard, reports under your brand, an account per client and wholesale rates.',
  items: [
    {
      title: 'One dashboard for every client',
      line: 'Every check lands in one dashboard, with what it found and the email, call or page behind each result.',
    },
    {
      title: 'Reports under your brand',
      line: 'Your name and logo on every report, sent from your own email address.',
    },
    {
      title: 'An account per client',
      line: 'Each client gets its own account and event log, so results never mix. Give a client their own login, or keep it to your team.',
    },
    {
      title: 'Wholesale rates',
      line: 'You pay wholesale rates that drop as your volume grows, and charge your clients what you choose. It starts monthly, with nothing paid up front.',
      link: { label: 'See the Enterprise plan', to: '/pricing' },
    },
  ],
}
