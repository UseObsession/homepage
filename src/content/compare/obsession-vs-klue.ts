import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-klue. Every Klue fact is from its own pages, read 11 Nov 2026
   (_research/seo/pagetypes-11nov/research/ci_panels.json; the home page and pricing page re-read the same day).
   "klue alternatives" is owned by /alternatives/klue; "competitive intelligence tools" is left to the incumbents. */

const KLUE = 'https://klue.com/'
const KLUE_PRICING = 'https://klue.com/pricing'

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs Klue',
  company: 'Klue',
  line: 'Klue runs competitive intelligence and win-loss for sales teams. Obsession keeps what competitors show their customers.',
  meta: {
    path: '/compare/obsession-vs-klue',
    title: 'Obsession vs Klue: battlecards and what competitors send',
    description:
      'Obsession vs Klue: Klue runs competitive intelligence, battlecards and win-loss for sales teams; Obsession keeps what competitors show signed-up customers.',
    answer:
      'In Obsession vs Klue, Klue runs competitive intelligence and win-loss for sales teams and Obsession keeps what competitors show only to signed-up customers. Klue turns market intel and buyer interviews into battlecards inside Salesforce and Slack; Obsession keeps competitors’ trial limits, upgrade prompts, onboarding emails and cancel offers, each dated with a screenshot. Klue suits a team running a CI programme; Obsession supplies the evidence that programme can’t collect from public pages or interviews.',
    ogImage: '/og/compare-obsession-vs-klue.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs Klue', path: '/compare/obsession-vs-klue' },
    ],
  },
  title: 'Obsession vs Klue: battlecards and win-loss beside what competitors show their customers',
  dek: 'Klue turns what your team hears and what competitors publish into battlecards. Obsession adds what competitors show the people who sign up, with the receipt.',
  primaryKeyword: 'obsession vs klue',
  keywords: ['klue vs obsession', 'klue pricing', 'klue competitive intelligence', 'competitor trial teardown'],
  checked: '2026-11-11',
  readingMinutes: 6,
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
    { kind: 'h3', id: 'obsession', text: 'Obsession: what competitors show the people who sign up' },
    {
      kind: 'p',
      text: `${ENTITY} For a software competitor that means its plans and [trial limits](/glossary/trial-limit), the day its [upgrade prompt](/glossary/upgrade-prompt) appears, every onboarding email and the offer in its cancel flow, each with the screen or the email behind it.`,
    },

    { kind: 'h2', id: 'at-a-glance', text: 'Klue and Obsession at a glance', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'Klue’s row is from its own pages, read 11 November 2026. Obsession’s row is from [Home](/) and [the developer page](/developers).',
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
          'Obsession (ours): Search, Insights, Watch, API and MCP',
          'Trial limits, onboarding emails, member prices, cancel offers',
          '5 verbs over MCP, the API and SDKs, or a table',
          'Kept from the first sign-up\nEach fact dated with its screenshot',
          'Early access, onboarding teams now\nPriced per call or per company watched',
          'Evidence of what competitors show customers',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use Klue, and when to use Obsession' },
    {
      kind: 'list',
      items: [
        '**Use Klue** to run the programme: collect what the market says, interview buyers about wins and losses, and put a current [battlecard](/glossary/battlecard) in front of a rep in the deal.',
        '**Use Obsession** for the facts a battlecard needs and no interview gives you: what a competitor’s free plan includes, when it asks for an upgrade, what it emails a new account on days 1 to 14, and what it offers a customer who tries to leave. Each fact is dated, with a screenshot or the raw email, so a rep can show it.',
        '**Use Obsession across many competitors at once.** Insights asks one question, such as “what does each competitor’s free plan include?”, across a list of companies and answers with a row per company.',
      ],
    },

    { kind: 'h2', id: 'together', text: 'Using Klue and Obsession together' },
    {
      kind: 'p',
      text: 'A product marketing or [competitive intelligence](/glossary/competitive-intelligence) team can feed Obsession’s facts into the battlecards it keeps in Klue: the trial teardown, the onboarding emails and the cancel offer, each linked to its receipt. The facts arrive over the API, MCP or a webhook the moment they land, so a card can change the week a competitor changes its trial.',
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
          a: 'Its pages don’t describe it. They describe a Compete Agent, buyer interviews and win-loss stories built from CRM data and call recordings. Obsession signs up the way any customer can and keeps what each competitor shows, from the first screen to the cancel offer.',
        },
        {
          q: 'Can Obsession replace Klue?',
          a: 'No. Klue runs the battlecards, the win-loss interviews and the answers sellers use in a deal. Obsession supplies evidence of what competitors show their customers, which those battlecards can use.',
        },
        {
          q: 'Who uses each one?',
          a: 'Klue names sellers, product marketers, CI teams and battlecard curators. Obsession is used by competitive intelligence, product, pricing and marketing teams and the AI agents they build, through the API, MCP or a table.',
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
    '/sales',
  ],
}
