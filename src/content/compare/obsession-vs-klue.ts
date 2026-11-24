import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-klue. Every Klue fact is from its own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/ci_panels.json; the home page and pricing page re-read the same day).
   "klue alternatives" is owned by /alternatives/klue; "competitive intelligence tools" is left to the incumbents.
   Obsession's side (22 Nov): the toolkit, then the Trial teardown and Competitor tracking blueprints. */

const KLUE = 'https://klue.com/'
const KLUE_PRICING = 'https://klue.com/pricing'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Klue',
  company: 'Klue',
  line: 'Klue runs competitive intelligence and win-loss for sales teams. Obsession’s personas keep what competitors show new users.',
  meta: {
    path: '/compare/obsession-vs-klue',
    title: 'Obsession vs Klue (2026): battlecards and competitor trials',
    description:
      'Obsession vs Klue: Klue runs battlecards and win-loss for sales teams. Obsession’s Trial teardown blueprint keeps every email and prompt competitors send.',
    answer:
      'Klue turns market intel and buyer interviews into battlecards and win-loss reports for sales teams, inside Salesforce and Slack. Obsession is the toolkit for AI agents, and its Trial teardown and Competitor tracking blueprints sign a persona up at each competitor. Klue runs the programme. Obsession feeds it what competitors show new users: trial limits, upgrade prompts, onboarding emails and cancel offers, each dated with a screenshot.',
    ogImage: '/og/compare-obsession-vs-klue.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Klue', path: '/compare/obsession-vs-klue' },
    ],
  },
  title: 'Obsession vs Klue: battlecards and win-loss, beside what competitors show new users',
  dek: 'Klue turns what your team hears and what competitors publish into battlecards. Obsession adds what competitors show the people who sign up, each with its screenshot.',
  primaryKeyword: 'obsession vs klue',
  keywords: ['klue vs obsession', 'klue pricing', 'klue competitive intelligence', 'competitor trial teardown'],
  checked: '2026-11-11',
  readingMinutes: 5,
  reader: 'marketing',
  art: {
    kind: 'report',
    title: 'northwind.example',
    period: 'Example: Northwind is an invented software company',
    cols: ['The job', 'Klue', 'Obsession'],
    rows: [
      { name: 'Battlecards for reps', cells: ['Built in, in Salesforce', 'Evidence for yours'], tone: 'info' },
      { name: 'Why deals were won or lost', cells: ['Win-loss interviews', 'Not its job'], tone: 'info' },
      { name: 'Northwind’s free plan', cells: ['Not described', '3 projects, 1 seat'], tone: 'ok' },
      { name: 'When the upgrade prompt shows', cells: ['Not described', 'Day 7, with screenshot'], tone: 'ok' },
      { name: 'Onboarding emails', cells: ['Not described', '5 emails in 14 days'], tone: 'ok' },
    ],
    notes: ['Klue’s column follows its own pages, read 11 November 2026. Not described means its pages don’t say.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-each-is', text: 'What Klue and Obsession are' },
    { kind: 'h3', id: 'klue', text: 'Klue: competitive intelligence and win-loss for sales teams' },
    {
      kind: 'p',
      text: `As of 11 November 2026, [Klue’s home page](${KLUE}) reads “The AI platform for Competitive Intelligence & Win-Loss” and “One platform where your competitive intelligence and win-loss programs run together”. It names a Compete Agent, Auto Insights, Deal Support and win-loss work through an AI Interviewer, human expert interviews and Blindspots interviews, with sellers getting cited answers in tools such as Slack, Salesforce, Gong, Highspot and Glean.`,
    },
    {
      kind: 'p',
      text: `[Its pricing page](${KLUE_PRICING}) lists no plans or prices, only “GET A DEMO”, and says “250,000+ users rely on Klue”, with battlecards at the centre (“Create and update battlecards”). Its pages don’t describe signing up to a competitor’s product, the onboarding emails a competitor sends, or where a competitor’s free plan stops.`,
    },
    { kind: 'h3', id: 'obsession', text: 'Obsession: a persona in each competitor’s trial' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: 'For this job, teams pick the [Trial teardown blueprint](/blueprints/trial-teardown). A persona, an AI agent with its own inbox and number under one name, starts each competitor’s trial as a new user. It keeps the plans and [trial limits](/glossary/trial-limit), the day the [upgrade prompt](/glossary/upgrade-prompt) appears, every onboarding email and the offer in the cancel flow, each with the screen or email behind it.',
    },

    { kind: 'h2', id: 'at-a-glance', text: 'Klue and Obsession at a glance', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'Klue’s row is from its own pages, read 11 November 2026. Obsession’s row is from [the blueprint page](/blueprints/trial-teardown) and [pricing](/pricing).',
      cols: ['Option', 'What it holds', 'How it’s read', 'Freshness and history', 'Price as listed', 'Best for'],
      rows: [
        [
          'Klue: Compete Agent, battlecards, win-loss, Ask Klue',
          'Intel your team gathers, win-loss interviews',
          'Battlecards in Salesforce, Slack, Highspot',
          'A weekly Intel Digest',
          'Not listed\nDemo only',
          'Running a CI and win-loss programme',
        ],
        [
          'Obsession (ours): Trial teardown and Competitor tracking blueprints',
          'Trial limits, onboarding emails, member prices, cancel offers',
          'Slack, a sheet, your CRM, or the API and MCP',
          'Each event as it lands\nDated in your event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Evidence of what competitors show new users',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use Klue, and when to use Obsession' },
    {
      kind: 'list',
      items: [
        '**Use Klue** to run the programme: collect what the market says, interview buyers about wins and losses, and put a current [battlecard](/glossary/battlecard) in front of a rep in the deal.',
        '**Use Obsession** for the facts a battlecard needs and no interview gives you: what a competitor’s free plan includes, when it asks for an upgrade, what it emails a new account on days 1 to 14, and what it offers a customer who tries to leave. Each one is dated, with a screenshot or the original email, so a rep can show it.',
        '**Use Obsession across many competitors at once.** One persona per competitor starts the same trial on the same day, so a table shows every free plan side by side.',
      ],
    },
    {
      kind: 'cta',
      text: 'A persona in each competitor’s trial, every email and prompt dated.',
      to: '/blueprints/trial-teardown',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'together', text: 'Using Klue and Obsession together' },
    {
      kind: 'p',
      text: 'A product marketing team can feed Obsession’s events into the battlecards it keeps in Klue. The trial teardown, the onboarding emails and the cancel offer each arrive with their screenshot. Events reach your tools over the API, MCP (the standard way AI agents call tools) or a webhook as they land, so a card can change the week a competitor changes its trial.',
    },
    {
      kind: 'p',
      text: 'For every option in this lane, see [Klue alternatives by job](/alternatives/klue) and [Crayon alternatives](/alternatives/crayon). The worked example of a trial teardown is on [the software trials use case](/use-cases/trial-checks-for-software-companies).',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'How much does Klue cost?',
          a: 'Klue publishes no price. Its pricing page asks visitors to get a demo, read on 11 November 2026.',
        },
        {
          q: 'Does Klue sign up to competitors’ products?',
          a: 'Its pages don’t describe it. They describe a Compete Agent, buyer interviews and win-loss stories built from CRM data and call recordings. Obsession’s personas sign up the way any customer can and keep what each competitor shows, from the first screen to the cancel offer, dated.',
        },
        {
          q: 'Can Obsession replace Klue?',
          a: 'No. Klue runs the battlecards, the win-loss interviews and the answers sellers use in a deal. Obsession supplies evidence of what competitors show new users, which those battlecards can use.',
        },
        {
          q: 'Who uses each one?',
          a: 'Klue names sellers, product marketers, CI teams and battlecard curators. On Obsession, product marketing, pricing and sales teams pick a blueprint, and developers build their own agents on the same pieces through the API and MCP.',
          link: { label: 'Obsession for sales teams', to: '/sales' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Klue: the AI platform for competitive intelligence and win-loss', publisher: 'Klue', url: KLUE },
    { title: 'Pricing', publisher: 'Klue', url: KLUE_PRICING },
  ],
  related: [
    '/alternatives/klue',
    '/alternatives/crayon',
    '/glossary/battlecard',
    '/glossary/competitive-intelligence',
    '/glossary/trial-limit',
    '/glossary/upgrade-prompt',
    'battlecard-template',
    'saas-pricing-page-examples',
    'recipe:trial-teardown',
    'recipe:competitor-tracking',
    '/use-cases/trial-checks-for-software-companies',
    '/personas',
    '/sales',
  ],
}
