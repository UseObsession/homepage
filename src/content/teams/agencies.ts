import { plans } from '../prices'
import type { TeamPage } from './types'

/* Agencies and resellers (/agencies): agencies, voice AI builders and mystery shopping firms run Obsession's blueprints
   for their clients under their own brand (prospect research, mystery shopping, QA, lead response, competitor
   tracking, AI agent checks), and agent platforms give their users the pieces. White label comes with Enterprise.
   Product Marketing book, jobs 2, 3 and 5; Top 3 Buyers ranking (CRO, retention and lifecycle agencies; voice AI
   builders; agent platforms; mystery shopping firms); Commercial View persona `agency` (22 Nov 2026). The scene is a
   prospecting run across 300 stores, an invented example; the real Brand G run is the stores page's (_research/illus/AUDIT_23nov.md). */

/* Enterprise's starting price, from prices.ts: its floor is on the first month's bill. */
const enterprise = plans.find((p) => p.id === 'enterprise')
const usd = (n: number) => `$${n.toLocaleString('en-US')}`
const ENTERPRISE_FROM = enterprise?.from != null ? `from ${usd(enterprise.from)}${enterprise.fromFirstMonth ? ' for the first month' : ' a month'}` : 'priced with you'

const sub =
  'Obsession gives AI agents inboxes, phone numbers and browsers on one API and one bill. Run its blueprints for every client under your own brand, with each result in a dashboard and report that carry your name.'

export const team: TeamPage = {
  id: 'agencies',
  name: 'Agencies',
  card: 'Mystery shops, CRO and ad checks, run for every client under your brand.',
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
      { icon: 'domain', label: 'Add 300 stores you want to win' },
      { icon: 'persona', label: 'A persona shops each as a new customer' },
      { icon: 'clock', label: 'It waits 48 hours for every email' },
      { icon: 'record', label: 'A pitch list, sorted by the gap' },
    ],
    who: 'Prospect shopping for a retention agency, 300 stores this week',
    note: 'Your pitch list, sorted by the gap',
    fleet: '300 stores · 1,840 emails kept',
    rows: [
      { at: 'Mon 02:00', kind: 'page.visited', text: '300 stores · a sign-up and a basket at each · screenshots saved' },
      { at: 'Mon to Wed', kind: 'email.received', text: '1,840 emails kept, each with the time it arrived' },
      { at: 'Wed 02:00', kind: 'blueprint.result', text: '112 stores sent no basket reminder in 48 hours', tone: 'fail' },
      { at: 'Wed 02:01', kind: 'webhook', text: 'Pitch list sent to your sheet: store, gap and the email itself' },
    ],
    caption: 'One run across 300 stores an agency wants to win, sorted by what each one never sent. The agency and its run are an invented example.',
  },

  /* The four checks agencies run for clients today (23 Nov 2026), each tagged with its type of blueprint; the mystery
     shop carries the real run's finding (/sample-output: a £40 basket left at 02:57 on 22 September got no reminder). */
  checks: {
    heading: 'Four checks you can run for every client today.',
    line: 'Each is a blueprint that runs under your brand, and each shows what a new customer actually gets.',
    items: [
      {
        kit: 'test',
        name: 'Mystery shopping',
        line: 'A persona signs up, fills a basket and starts checkout at a client’s store, then keeps every email and text that follows.',
        finding: 'Real run: a £40 basket left at 02:57 got no reminder',
        links: [{ label: 'Mystery shopping', to: '/blueprints/mystery-shopper' }],
      },
      {
        kit: 'test',
        name: 'CRO funnel checks',
        line: 'The pop-up, the welcome email and the code at checkout, met as a new customer, before and after each test you launch.',
        links: [
          { label: 'Funnel QA for CRO agencies', to: '/use-cases/funnel-qa-for-cro-agencies' },
          { label: 'QA on your own flows', to: '/blueprints/website-audit' },
        ],
      },
      {
        kit: 'test',
        name: 'Ad checks',
        line: 'Every morning each live ad’s landing page is checked for the offer, price and stock, and competitors’ ads are followed to theirs.',
        links: [
          { label: 'Ad landing check', to: '/blueprints/ad-landing-check' },
          { label: 'Ad tracking', to: '/blueprints/ad-tracking' },
        ],
      },
      {
        kit: 'watch',
        name: 'Competitor tracking',
        line: 'Every email, text, offer and price a client’s competitors send a new customer, dated, so each pitch opens on proof.',
        links: [
          { label: 'Competitor tracking', to: '/blueprints/competitor-tracking' },
          { label: 'Email and SMS tracking', to: '/blueprints/email-sms-tracking' },
        ],
      },
    ],
    see: [
      { label: 'See a real mystery shop, in every format', to: '/sample-output' },
      { label: 'Look up what any store sends a new customer', to: '/lookup#agencies' },
    ],
  },

  uses: {
    heading: 'More you can run for clients.',
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
        name: 'Lead response checks',
        line: 'Time how fast each client answers a new lead on every form, chat and phone line.',
        blueprint: 'lead-leaks',
        pieces: ['personas', 'email', 'phone'],
      },
      {
        kit: 'portals',
        name: 'Price watch for clients',
        line: 'Every morning, the member prices and subscriber codes a client’s competitors show signed-in customers.',
        blueprint: 'price-watch',
        pieces: ['personas', 'email', 'browser'],
      },
      {
        kit: 'test',
        name: 'Delivery checks by country',
        line: 'A persona in each country a client sells to lives their first 14 days and times every message.',
        blueprint: 'delivery-monitoring',
        pieces: ['personas', 'email', 'phone'],
      },
      {
        kit: 'talk',
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
    /* The mystery shopping blueprint's real run and the store lookup built on it (Seun, 23 Nov 2026). */
    links: [
      { label: 'Sample output from a real store', to: '/sample-output' },
      { label: 'Look up a store', to: '/lookup' },
    ],
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
        q: 'What can an agent do in a client’s name?',
        a: 'It signs in only with the logins the client gives it, works within a monthly spend limit you set on its key, and stops before payment unless the client gives it their own payment card. It says it’s an AI whenever it talks to a person.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
    ],
  },

  final: {
    heading: 'Shop every client’s store under your own brand.',
    capture: { kind: 'waitlist', source: 'team-agencies', button: 'Start free', interest: 'mystery' },
  },
}
