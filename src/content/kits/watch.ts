import { kitPathOf, kitsPath } from '../kitPaths'
import type { KitPage } from './types'

/* Watch the market (/kits/watch-the-market): personas sign up to competitors, stay subscribed, start their trials and
   check member prices, for teams that want the result rather than the build. Product Marketing book, job 5. The scene
   is the site's one real run: Brand G, a UK skincare store, September 2026 (/sample-output). */

const sub =
  'Personas sign up to your competitors and stay subscribed, start their trials and check member prices every morning. Pick a blueprint, and results land in Slack, a sheet or your CRM.'

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
      { name: 'Kits', path: kitsPath },
      { name: 'Watch the market', path: kitPathOf.watch },
    ],
  },

  hero: { headline: 'Watch the market: every email, trial and price your competitors show a new customer.', sub },

  scene: {
    steps: [
      { icon: 'persona', label: 'Personas sign up as customers' },
      { icon: 'clock', label: 'They stay and keep everything' },
      { icon: 'browser', label: 'They check prices each morning' },
      { icon: 'record', label: 'A weekly report in Slack' },
    ],
    who: 'Mystery shopping at Brand G, a UK skincare store',
    rows: [
      { at: '02:57', kind: 'page.visited', text: 'A £40 basket left in the cart' },
      { at: '03:11', kind: 'page.visited', text: 'Checkout started, stopped before payment' },
      { at: '48 hours', kind: 'blueprint.result', text: 'No basket or checkout reminder arrived', tone: 'fail' },
    ],
    caption: 'A real run, September 2026: Brand G was joined 4 times, and in 48 hours neither the basket nor the checkout got a reminder.',
    real: true,
  },

  pieces: {
    heading: 'Customers that never unsubscribe.',
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
    heading: 'Pick a blueprint, and Obsession runs it.',
    line: 'No code. Name the competitors, choose how often, and say where results go.',
    slugs: ['competitor-tracking', 'email-sms-tracking', 'price-watch', 'trial-teardown', 'ad-tracking', 'prospect-intelligence', 'account-watch'],
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
      { q: 'What does a blueprint cost?', a: 'It is billed on the pieces it uses, at list rates, and you can try it on the Free plan.', link: { label: 'See pricing', to: '/pricing' } },
    ],
  },

  final: {
    heading: 'Which competitors should your personas join first?',
    capture: { kind: 'waitlist', source: 'kit-watch', button: 'Start free', interest: 'competitor' },
  },
}
