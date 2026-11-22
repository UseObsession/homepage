import { kitPathOf, kitsPath } from '../kitPaths'
import type { KitPage } from './types'

/* Watch the market (/blueprints/watch-the-market): personas sign up to competitors, stay subscribed, start their trials and
   check member prices, for teams that want the result rather than the build. Product Marketing book, job 5. The scene
   is a member price only a signed-up persona sees, at an invented competitor (_research/illus/AUDIT_23nov.md). */

const sub =
  'Personas, AI agents with their own inbox, number and browser, sign up to your competitors and stay subscribed. They start trials and check member prices every morning. Pick a blueprint, and results land in Slack, a sheet or your CRM.'

export const watch: KitPage = {
  id: 'watch',
  name: 'Watch the market',
  meta: {
    path: kitPathOf.watch,
    title: 'Watch the market with AI agents: trials, emails and prices',
    description:
      'Personas sign up to competitors, keep every email and text, start trials and check member prices each morning. Pick a blueprint and Obsession runs it.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: kitsPath },
      { name: 'Watch the market', path: kitPathOf.watch },
    ],
  },

  hero: { headline: 'Watch the market: every email, trial and price your competitors show a new customer.', sub },

  scene: {
    steps: [
      { icon: 'persona', label: 'A persona signs up as a member' },
      { icon: 'browser', label: 'It reads the public page too' },
      { icon: 'mail', label: 'It keeps every member email' },
      { icon: 'record', label: 'The difference reaches your team' },
    ],
    who: 'A member persona at kestrelhome.example, a competitor',
    note: 'Members pay £19. The public page says £24.',
    fleet: '30 competitors · read every morning',
    rows: [
      { at: 'Mon 06:00', kind: 'page.visited', text: 'Public page: Starter set at £24 · screenshot saved' },
      { at: 'Mon 06:01', kind: 'page.visited', text: 'Signed in as a member: the same set at £19 · screenshot saved' },
      { at: 'Mon 06:02', kind: 'email.received', text: '“Members only: an extra 10% off this week”' },
      { at: 'Mon 06:03', kind: 'blueprint.result', text: 'Members pay £19 while the public page shows £24', tone: 'ok' },
      { at: 'Mon 06:03', kind: 'webhook', text: 'Posted to #pricing in Slack' },
    ],
    caption: 'A member price and a members-only email that a public price check never sees. Kestrel Home is an invented example.',
  },

  pieces: {
    heading: 'Subscribed to every competitor, for months.',
    line: 'Each persona keeps its inbox, number and browser for as long as the blueprint runs, free while it waits.',
    items: [
      { piece: 'personas', line: 'A persona per competitor, subscribed for months.' },
      { piece: 'email', line: 'Every email they send, exactly as it arrived.' },
      { piece: 'phone', line: 'Every text they send, timed.' },
      { piece: 'browser', line: 'Trials, member prices and checkouts, up to payment.' },
    ],
    prices: ['persona', 'inbox', 'number', 'browser', 'log'],
  },

  blueprints: {
    heading: 'Every competitor, followed for you.',
    line: 'Obsession signs up at each competitor and keeps every email, text, price and offer, dated. Name them, choose how often, and say where results go.',
    slugs: ['competitor-tracking', 'email-sms-tracking', 'ad-tracking', 'prospect-intelligence', 'listings-ai-answers'],
  },

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Growth and marketing', gets: 'Every email, text and offer a competitor sends a new customer, dated.', watch: 'Share of voice, conversion, campaign wins' },
      { role: 'Pricing and revenue', gets: 'Member prices and codes beside public ones, every morning.', watch: 'Price position, margin, promo depth' },
      { role: 'Product marketing and CI', gets: 'A competitor’s trial from sign-up to the last email, for your battlecards.', watch: 'Win rate, competitive losses' },
      { role: 'Agencies', gets: 'A prospect’s own emails, and the ones that never came, before the pitch.', watch: 'Pitches won, clients kept' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: [
      '/use-cases/member-prices-for-price-intelligence',
      '/use-cases/trial-checks-for-software-companies',
      '/use-cases/leak-checks-for-retention-agencies',
      '/use-cases/sales-intelligence-behind-the-login',
      '/use-cases/consumer-promotions-data-for-funds',
    ],
  },

  faq: {
    heading: 'Before your personas sign up.',
    items: [
      { q: 'Do I need to write code?', a: 'No. Pick a blueprint, name your competitors and say where results go. Obsession runs it.', link: { label: 'Browse blueprints', to: '/blueprints' } },
      { q: 'How long do personas stay subscribed?', a: 'For as long as the blueprint runs. Each one waits for free and keeps every email, text and price, dated.' },
      {
        q: 'Does it buy anything?',
        a: 'No. It stops before payment unless you give it your own card, and it never uses fake payment details.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      { q: 'What does a blueprint cost?', a: 'It is billed on the pieces it uses, at list rates. Try any blueprint on the Free plan.', link: { label: 'See pricing', to: '/pricing' } },
    ],
  },

  final: {
    heading: 'Name the competitors your personas join first.',
    capture: { kind: 'waitlist', source: 'kit-watch', button: 'Start free', interest: 'competitor' },
  },
}
