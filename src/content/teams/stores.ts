import { plans } from '../prices'
import type { TeamPage } from './types'

/* Online stores (/use-cases/leak-checks-for-ecommerce-stores, 22 Nov 2026): the team page for ecommerce and DTC brands,
   whose heads of ecommerce and CX the Top 3 Buyers ranking names first. Personas test the store's own sign-up, basket
   and flows, watch competitors' codes and prices, and answer WhatsApp and texts. The scene is the site's one real run:
   Brand G, a UK skincare store, September 2026 (/sample-output). */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const path = '/use-cases/leak-checks-for-ecommerce-stores'

const sub =
  'Obsession, the toolkit for AI agents, sends a persona, an AI agent with its own inbox, number and browser, to your online store and each competitor. It signs up, leaves a basket and logs every email and text, and every reminder that never came.'

export const team: TeamPage = {
  id: 'stores',
  name: 'Online stores',
  meta: {
    path,
    title: 'Ecommerce stores: test every email after sign-up and basket',
    description:
      'A persona signs up and leaves a basket at your online store and each competitor, then logs every email and text, and every reminder that never came.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Online stores', path },
    ],
  },

  hero: {
    pill: 'Ecommerce brands',
    headline: 'Ecommerce stores: test every email a new customer gets, and find the ones that never come.',
    sub,
  },

  scene: {
    steps: [
      { icon: 'persona', label: 'A persona signs up at Brand G' },
      { icon: 'browser', label: 'It leaves a basket and a checkout' },
      { icon: 'clock', label: 'It waits 48 hours' },
      { icon: 'record', label: 'What came, and what didn’t' },
    ],
    who: 'Mystery shopping at Brand G, a UK skincare store',
    note: 'No basket or checkout reminder in 48 hours',
    fleet: '4 personas · real run, September 2026',
    rows: [
      { at: '22 Sep · 02:57', kind: 'page.visited', text: 'Body Care Gift Set (£40) left in the basket' },
      { at: '22 Sep · 03:11', kind: 'page.visited', text: 'A £21 checkout left before payment' },
      { at: '48 hours', kind: 'email.received', text: '5 emails, all welcome and browse' },
      { at: '48 hours', kind: 'blueprint.result', text: 'No basket or checkout reminder arrived', tone: 'fail' },
    ],
    caption: 'A real run, September 2026: 4 sign-ups and baskets at Brand G, and no basket or checkout reminder in 48 hours.',
    real: true,
  },

  uses: {
    heading: 'Test the store, watch competitors and answer customers.',
    line: 'Every piece sits on one account and one bill, so each job shares one event log.',
    items: [
      {
        kit: 'test',
        name: 'Mystery shop your own store',
        line: 'A persona signs up, fills a basket and stops before payment, every week and after every change.',
        blueprint: 'mystery-shopper',
        pieces: ['personas', 'email', 'phone', 'browser'],
      },
      {
        kit: 'test',
        name: 'Every flow, on time',
        line: 'Welcome, basket and checkout emails timed against your deadlines, so a silent flow shows before the month closes.',
        blueprint: 'delivery-monitoring',
        pieces: ['email', 'phone'],
      },
      {
        kit: 'test',
        name: 'Checks after a theme or app change',
        line: 'A new persona runs every step again, with any break dated.',
        blueprint: 'website-audit',
        pieces: ['personas', 'browser'],
      },
      {
        kit: 'test',
        name: 'Every ad’s landing page',
        line: 'Each morning, every live ad’s page checked for load, offer, price and stock.',
        blueprint: 'ad-landing-check',
        pieces: ['browser'],
      },
      {
        kit: 'test',
        name: 'What your support bot says',
        line: 'Each morning a persona asks about delivery, returns and codes, and keeps every answer before a complaint arrives.',
        blueprint: 'support-bot-check',
        pieces: ['browser', 'messaging'],
      },
      {
        kit: 'watch',
        name: 'Competitors’ codes and emails',
        line: 'A persona on each competitor’s list keeps every welcome code, text and reminder it sends.',
        blueprint: 'competitor-tracking',
        pieces: ['personas', 'email', 'phone'],
      },
      {
        kit: 'watch',
        name: 'Member prices every morning',
        line: 'Subscriber codes and member prices beside public ones, read each morning.',
        blueprint: 'price-watch',
        pieces: ['browser', 'email'],
      },
      {
        kit: 'talk',
        name: 'WhatsApp and text support',
        line: 'Your support agent answers WhatsApp and texts from one number, with every reply in the event log.',
        pieces: ['phone', 'messaging', 'personas'],
      },
    ],
  },

  blueprints: {
    heading: 'Pick the store checks, and Obsession runs them.',
    line: 'No code. Name your store and competitors, choose how often, and say where results go.',
    slugs: ['mystery-shopper', 'delivery-monitoring', 'website-audit', 'ad-landing-check', 'support-bot-check', 'competitor-tracking', 'price-watch'],
  },

  prices: ['persona', 'inbox', 'number', 'sms', 'browser', 'whatsapp'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Founder or head of ecommerce', gets: 'Every leak at your store and your competitors’, dated, the week it starts.', watch: 'Revenue, conversion rate, repeat purchase' },
      { role: 'CRM and lifecycle', gets: 'Every welcome, basket and checkout email as a customer gets it, timed.', watch: 'Flow revenue, revenue per subscriber, retention' },
      { role: 'Customer experience', gets: 'What your support agent told a customer this morning, word for word.', watch: 'CSAT, resolution rate, complaints' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/leak-checks-for-retention-agencies', '/use-cases/funnel-qa-for-cro-agencies', '/use-cases/member-prices-for-price-intelligence'],
  },

  faq: {
    heading: 'Before a persona joins your store.',
    items: [
      {
        q: 'Do we need a developer?',
        a: 'No. Pick a blueprint, name your store and competitors, and choose Slack, a sheet or your webhook for the results.',
        link: { label: 'Browse blueprints', to: '/blueprints' },
      },
      {
        q: 'Do we have to be on Shopify?',
        a: 'No. It works on any store a customer can reach. On Shopify, connecting it read only lets a theme publish start a check by itself.',
      },
      {
        q: 'What does it cost?',
        a: `Start on the Free plan, with no credit card. Paid plans are ${orList(fees)} a month, and a blueprint is billed on the pieces it uses.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does it buy anything?',
        a: 'No. It stops before payment unless you give it your own payment card, and never uses fake payment details. Every account is labelled, so you can filter it out of your reports.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
    ],
  },

  final: {
    heading: 'Join your own store as a new customer, every week.',
    capture: { kind: 'waitlist', source: 'team-stores', button: 'Start free', interest: 'mystery' },
  },
}
