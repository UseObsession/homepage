import { blueprintPlans } from '../prices'
import type { CardGrid, Page, PricingTabs } from '../types'

/* Agencies (/agencies), the resellers rewrite (21 Nov 2026, James): one page for every business that resells our recipes
   and pieces to its own clients under its own brand. A synthetic buyer study that day found the best buyers resell the
   output: mystery shopping and CX audit firms, AI receptionist and front desk vendors, CRO, retention and voice AI
   agencies, automation consultants (n8n, Make), managed QA and testing vendors, and agent builder platforms. All six asked
   for the same 3 things: a dashboard, a report under their own brand, and white label terms (an account per client,
   wholesale rates). Their trigger is proof from a pilot, or a client asking for it. The path stays /agencies for the
   links already pointing here.
   The page reads, in order (pages/Agencies.tsx): the hero, beside every client's checks on one board > the gap: checks
   done by hand eat the margin (its claim is also the share image's line) > #resell: the 6 kinds of reseller, each with
   the recipes it would sell (sections/Kinds) > #white-label: the white label terms, from the Enterprise plan on /pricing
   (v5/CardGrid) > #pricing: the blueprints resellers sell, each a tab with its pricing table counted per client
   (`pricing` below, components/BlueprintPricingTabs; James, 21 Nov, in place of the fixed price pilot) > questions >
   #join: the early access form. Sold as designed (white label, an account per client, branded reports and the dashboard are the
   offer). No customers, logos, quotes or results are claimed, and no price comes from a single deal. The old lifecycle
   email audit story (the prospect's own emails, the Brand G run) is gone. Never name a competitor, never "AI customers". */

const access = { kind: 'waitlist', button: 'Get early access', interest: 'any' } as const

/* What a client costs, from the blueprints' plans (content/prices.ts `blueprintPlans`), never typed here: where the prices
   start, and each paid plan's price ("A monthly run is $19 a month, weekly is $49 and daily is $99"). */
const paid = blueprintPlans.filter((p) => p.monthly > 0)
const FROM = `$${Math.min(...paid.map((p) => p.monthly))}`
const PRICED = `Start with a free run, then pay from ${FROM} a month per client, by how often each check runs.`
const andList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`)
const RATES = andList(
  paid.map((p, i) => (i === 0 ? `A ${p.name.toLowerCase()} run is $${p.monthly} a month` : `${p.name.toLowerCase()} is $${p.monthly}`)),
)

const SUB =
  'Obsession’s AI agents shop, call and fill in forms as new customers of your clients. Every result lands in a dashboard and a report with your name on it.'

export const page: Page = {
  meta: {
    path: '/agencies',
    title: 'White label mystery shopping and AI agent checks · Obsession',
    description:
      'Sell mystery shops, lead response checks and AI agent checks to your clients under your brand, with a dashboard, reports and an account per client.',
    /* Opens with the hero's sub, word for word (scripts/prerender.mjs checks its first sentence is on the page). */
    answer: `${SUB} ${PRICED}`,
    ogImage: '/og/agencies.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Agencies and resellers', path: '/agencies' },
    ],
  },

  hero: {
    pill: 'Early access',
    pillTo: '#join',
    headline: 'Sell your clients mystery shops run by AI agents, under your own brand.',
    sub: SUB,
    capture: { ...access, source: 'agencies-hero' },
    secondary: { label: 'See what you can resell', to: '#resell' },
    proof: [],
    consoleHeading: [],
    /* The hero's object: every client's checks on one board, as a reseller's own dashboard shows them. */
    screens: [{ tab: 'Every client', screen: 'board', recipe: 'mystery', line: '' }],
  },

  gapPair: {
    heading: 'Your clients pay for each check. Running them by hand eats your margin.',
    line: 'Today each check needs a person to shop, call or fill in a form after hours. Obsession’s agents run each check and keep every email, text and call that came back.',
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
        'Every email, text, call and page kept, dated, in the event log',
        'Checks on the schedule you set, daily, weekly or before a pitch',
        'Every client’s results in one dashboard',
        'A report with your name and logo, ready to send',
      ],
    },
  },

  /* The 6 kinds of reseller, each with the recipes it would sell (linked by Kinds from content/catalog). Every recipe the
     page offers is linked at least once: mystery-shopper, lead-leaks, voice-agent-check, competitor-tracking and
     email-sms-tracking, with website-audit for testing firms. */
  kinds: {
    heading: 'Sell the checks your clients already ask you for.',
    label: 'What does your business sell?',
    items: [
      {
        name: 'Mystery shopping and CX audits',
        line: 'Add online and phone shops to the store visits you sell. Agents sign up, fill a basket, ring the branch and keep every email, text and call that follows.',
        recipes: ['mystery', 'speed', 'competitor'],
      },
      {
        name: 'AI receptionists and front desks',
        line: 'Open each sale with an audit of the prospect’s phone line: how long it rang, what the caller was told and whether they got booked. After launch, test your AI receptionist on the client’s line every morning.',
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
        line: 'Add sign ups, login codes by text and phone calls to the test runs you sell. Agents run each flow as a new user, with their own inbox and phone number.',
        recipes: ['audit', 'voice-agent'],
      },
      {
        name: 'Agent builder platforms',
        line: 'Give the agents your users build an inbox, a phone number and a browser of their own. Each user gets an account under your brand, with ready-made jobs such as a mystery shop to start from.',
        recipes: ['mystery', 'speed', 'competitor'],
      },
    ],
  },

  faq: {
    heading: 'Before you sell it to your first client.',
    items: [
      {
        q: 'What does Obsession do for a reseller?',
        a: `${SUB} You sell the checks to your clients at your own price. ${PRICED}`,
      },
      {
        q: 'Who is this for?',
        a: 'Businesses that sell checks, audits or agents to their own clients. That means mystery shopping and CX audit firms, AI receptionist and front desk vendors, and CRO, retention and voice AI agencies. It also means automation consultants who build in n8n and Make, managed QA and testing firms, and agent builder platforms.',
      },
      {
        q: 'What does each client cost?',
        a: `Each blueprint is priced per client, by how often it runs. ${RATES}. The first run is free.`,
        link: { label: 'See the plans', to: '#pricing' },
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
        a: 'You pay each blueprint’s price per client and set your own price to clients. White label is part of the Enterprise plan, with lower rates set by contract on the volume you commit to.',
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
        a: 'Yes. Give each user inboxes, phone numbers, messaging, a browser and a sandbox through one API. Or give them all of it under one identity, as a persona, in an account under your brand.',
      },
      {
        q: 'What does an agent do at a payment or an identity check?',
        a: 'It stops before payment, so nothing is bought, unless the client gives it a payment card of their own. At an identity check it stops too, and the event log keeps what the check asked for.',
      },
    ],
  },

  final: {
    heading: 'Which client should we check first?',
    sub: 'Tell us the client and the check. We’ll start with a free run, and the results land in your dashboard.',
    capture: { ...access, source: 'agencies-final' },
  },
}

/* #pricing (James, 21 Nov 2026), in place of the pilot: 1 tab per blueprint resellers sell, each opening that blueprint's
   pricing table counted per client (components/BlueprintPricingTabs; the prices are content/prices.ts `blueprintPlans`). */
export const pricing: PricingTabs = {
  heading: 'Pay per client, by how often each blueprint runs.',
  line: 'Pick a blueprint to see what each client costs you. You charge your clients what you choose.',
  label: 'Blueprints you can resell',
  per: 'client',
  recipes: ['mystery', 'speed', 'voice-agent', 'competitor', 'delivery', 'audit'],
}

/* #white-label: the 3 things every reseller asked for, as the Enterprise plan on /pricing gives them (content/pricing.ts:
   an account for each of your users under your brand, lower rates set by contract). */
export const whiteLabel: CardGrid = {
  heading: 'Your clients see your brand, not ours.',
  line: 'White label comes with the Enterprise plan: a dashboard, reports under your brand, an account per client and wholesale rates.',
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
      line: 'You pay lower rates, set by contract on your volume, and charge your clients what you choose.',
      link: { label: 'See the Enterprise plan', to: '/pricing' },
    },
  ],
}
