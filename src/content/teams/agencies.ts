import { plans } from '../prices'
import type { TeamPage } from './types'

/* Agencies and resellers (/agencies): agencies, voice AI builders and mystery shopping firms run Obsession's blueprints
   for their clients under their own brand (prospect research, mystery shopping, QA, lead response, competitor
   tracking, AI agent checks), and agent platforms give their users the pieces. White label comes with Enterprise.
   Product Marketing book, jobs 2, 3 and 5; Top 3 Buyers ranking (CRO, retention and lifecycle agencies; voice AI
   builders; agent platforms; mystery shopping firms); Commercial View persona `agency` (22 Nov 2026). The scene is the
   site's one real run: Brand G, a UK skincare store, September 2026 (/sample-output). */

/* Enterprise's starting price, from prices.ts: its floor is on the first month's bill. */
const enterprise = plans.find((p) => p.id === 'enterprise')
const usd = (n: number) => `$${n.toLocaleString('en-US')}`
const ENTERPRISE_FROM = enterprise?.from != null ? `from ${usd(enterprise.from)}${enterprise.fromFirstMonth ? ' for the first month' : ' a month'}` : 'priced with you'

const sub =
  'Obsession gives AI agents inboxes, phone numbers and browsers on one API and one bill. Run its blueprints for every client under your own brand, with each result in a dashboard and report that carry your name.'

export const team: TeamPage = {
  id: 'agencies',
  name: 'Agencies',
  meta: {
    path: '/agencies',
    title: 'White label mystery shopping and AI agent checks · Obsession',
    description:
      'Resell mystery shops, lead response checks and AI agent checks under your own brand. Every client gets an account, a dashboard and reports with your name.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Agencies and resellers', path: '/agencies' },
    ],
  },

  hero: { pill: 'Agencies and resellers', headline: 'White label mystery shopping and AI agent checks: run them for every client under your brand.', sub },

  scene: {
    steps: [
      { icon: 'domain', label: 'Add a client or a prospect' },
      { icon: 'persona', label: 'A persona shops as a new customer' },
      { icon: 'clock', label: 'It waits 48 hours for every email' },
      { icon: 'record', label: 'A report under your brand' },
    ],
    who: 'Mystery shopping at Brand G, a UK skincare store',
    rows: [
      { at: '02:57', kind: 'page.visited', text: 'A £40 basket left in the cart' },
      { at: '03:11', kind: 'page.visited', text: 'Checkout started, stopped before payment' },
      { at: '48 hours', kind: 'blueprint.result', text: 'No basket or checkout reminder arrived', tone: 'fail' },
    ],
    caption: 'A real run, September 2026: 4 sign-ups and baskets at Brand G, and no reminder in 48 hours. Every client’s run is kept the same way.',
    real: true,
  },

  uses: {
    heading: 'The checks your clients already pay for, run by blueprints.',
    line: 'For CRO, retention and lifecycle agencies, voice AI builders, mystery shopping firms and agent platforms.',
    items: [
      {
        kit: 'watch',
        name: 'Prospect intelligence before the pitch',
        line: 'A persona signs up at each prospect and brings back what it sends new customers, so no pitch looks like every agency’s.',
        blueprint: 'prospect-intelligence',
        pieces: ['personas', 'email', 'browser'],
      },
      {
        kit: 'test',
        name: 'Mystery shopping on client stores',
        line: 'Personas shop each client’s store as new shoppers and show every email, text and missing reminder.',
        blueprint: 'mystery-shopper',
        pieces: ['personas', 'email', 'phone', 'browser'],
      },
      {
        kit: 'test',
        name: 'QA on clients’ flows',
        line: 'A persona signs up after every release and finds the step that breaks, before the client does.',
        blueprint: 'website-audit',
        pieces: ['personas', 'email', 'browser'],
      },
      {
        kit: 'test',
        name: 'Lead response checks',
        line: 'Time how fast each client answers a new lead on every form, chat and phone line.',
        blueprint: 'lead-leaks',
        pieces: ['personas', 'email', 'phone'],
      },
      {
        kit: 'watch',
        name: 'Competitor tracking for clients',
        line: 'Every email, text, offer and price a client’s competitors send, dated, in the client’s own account.',
        blueprint: 'competitor-tracking',
        pieces: ['personas', 'email', 'browser'],
      },
      {
        kit: 'test',
        name: 'Checks on the agents you build',
        line: 'Call the voice agents and receptionists you launch every morning, and a prospect’s line before the sale.',
        blueprint: 'voice-agent-check',
        pieces: ['personas', 'phone'],
      },
      {
        kit: 'build',
        name: 'Agents for your platform’s users',
        line: 'Give the agents your users build an inbox, a number and a browser of their own, under your brand.',
        pieces: ['email', 'phone', 'browser', 'personas'],
      },
    ],
  },

  blueprints: {
    heading: 'Blueprints you can resell.',
    line: 'Each runs daily, weekly or before a pitch, and you set your own price to clients.',
    slugs: ['mystery-shopper', 'prospect-intelligence', 'lead-leaks', 'competitor-tracking', 'voice-agent-check', 'website-audit', 'delivery-monitoring'],
  },

  prices: ['persona', 'inbox', 'number', 'voice', 'browser', 'log'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'CRO, retention and lifecycle agencies', gets: 'A prospect’s own emails before the pitch, and the same check on every client each week.', watch: 'Pitches won, clients kept, revenue per client' },
      { role: 'Voice AI and receptionist builders', gets: 'A daily call to every agent you’ve launched, with what it said and booked.', watch: 'Close rate, client retention, calls handled' },
      { role: 'Mystery shopping and CX research firms', gets: 'Online and phone shops beside your visits, every result in the client’s dashboard.', watch: 'Shops delivered, revenue per client, clients kept' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/leak-checks-for-retention-agencies', '/use-cases/funnel-qa-for-cro-agencies', '/use-cases/prospect-intelligence-with-clay'],
  },

  faq: {
    heading: 'Before you sell it to your first client.',
    items: [
      {
        q: 'We already run these checks by hand. What changes?',
        a: 'Keep your judgement for the report. A blueprint does the signing up and the waiting, across 300 client stores or 3,000 prospects.',
      },
      {
        q: 'What does white label cost?',
        a: `Start on the Free plan, with no credit card, and each run bills the pieces it uses at list rates. White label comes with the Enterprise plan, ${ENTERPRISE_FROM}, with an account per client, reports under your brand and wholesale rates.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Can results go into our own tools?',
        a: 'Yes. Every result lands in the client’s event log. From there it reaches you at a webhook, through the API or MCP, or in Zapier, Make and n8n.',
      },
      {
        q: 'What does an agent do at a payment or an identity check?',
        a: 'It stops before payment unless the client gives it their own payment card, and it stops at any identity check. It says it’s an AI whenever it talks to a person.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
    ],
  },

  final: {
    heading: 'Which client should a persona shop first?',
    capture: { kind: 'waitlist', source: 'team-agencies', button: 'Start free', interest: 'mystery' },
  },
}
