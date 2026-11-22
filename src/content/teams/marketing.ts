import type { TeamPage } from './types'

/* Marketing (/marketing): growth, lifecycle, pricing and product marketing. Personas sign up at each competitor and
   stay subscribed (competitor tracking, email and SMS tracking, trial teardown, price watch, ad tracking), and check the
   team's own ad landing pages and flows (ad landing check, mystery shopping). Product Marketing book, jobs 2 and 5; Top
   3 Buyers ranking (pricing and competitive intelligence teams, ecommerce brands); Commercial View persona `growth`
   (22 Nov 2026). Every company is invented, at a .example address. */

const sub =
  'Obsession gives AI agents inboxes, phone numbers and browsers on one API and one bill. A persona, an AI agent with all three under one name, signs up at each competitor you name. It keeps every email, text, offer and price, dated.'

export const team: TeamPage = {
  id: 'marketing',
  name: 'Marketing',
  meta: {
    path: '/marketing',
    title: 'Competitor emails, texts, offers and prices · Obsession',
    description:
      'Name your competitors. An AI agent signs up at each one and keeps every email, text, offer and price they send, dated. Pick a blueprint and start free.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Marketing', path: '/marketing' },
    ],
  },

  hero: { pill: 'Growth and lifecycle', headline: 'Competitor emails, texts and prices: everything a new customer gets from your competitors, dated.', sub },

  scene: {
    steps: [
      { icon: 'persona', label: 'A persona signs up at a competitor' },
      { icon: 'mail', label: 'It keeps every email and text' },
      { icon: 'browser', label: 'It checks prices each morning' },
      { icon: 'record', label: 'New offers reach Slack' },
    ],
    who: 'A persona subscribed to fernhollow.example',
    note: 'A competitor’s new offer, in Slack by 09:15',
    fleet: '12 competitors · every email kept',
    rows: [
      { at: 'Mon 07:30', kind: 'email.received', text: 'Black Friday starts now: 30% off · Promotions tab' },
      { at: 'Tue 06:00', kind: 'page.visited', text: 'Starter set cut from £24 to £19 · screenshot saved' },
      { at: 'Fri 09:14', kind: 'sms.received', text: '“Free gift on orders over £40, today only”' },
      { at: 'Fri 09:15', kind: 'blueprint.result', text: 'New offer posted to #marketing in Slack', tone: 'ok' },
    ],
    caption: 'One competitor, one week: the email, the price cut and the text, each dated. Fern Hollow is an invented example.',
  },

  uses: {
    heading: 'What competitors send, and what your own flows send.',
    line: 'For growth, lifecycle and pricing teams at ecommerce brands, software companies and travel companies.',
    items: [
      {
        kit: 'watch',
        name: 'Competitor tracking',
        line: 'A persona signs up at each competitor and keeps every email, text, offer and price in one place, dated.',
        blueprint: 'competitor-tracking',
        pieces: ['personas', 'email', 'phone', 'browser'],
      },
      {
        kit: 'watch',
        name: 'Email and SMS tracking',
        line: 'Every email and text competitors send subscribers, with the time it arrived and its Gmail tab.',
        blueprint: 'email-sms-tracking',
        pieces: ['email', 'phone'],
      },
      {
        kit: 'watch',
        name: 'Trial teardown',
        line: 'A competitor’s free trial from sign-up to the last email, by trial day, kept after the trial ends.',
        blueprint: 'trial-teardown',
        pieces: ['personas', 'email', 'browser'],
      },
      {
        kit: 'watch',
        name: 'Price watch',
        line: 'Member prices and email-only codes beside the public ones, every morning.',
        blueprint: 'price-watch',
        pieces: ['personas', 'browser', 'email'],
      },
      {
        kit: 'watch',
        name: 'Ad tracking',
        line: 'Every new competitor ad, followed to the page, price and code behind it.',
        blueprint: 'ad-tracking',
        pieces: ['browser'],
      },
      {
        kit: 'test',
        name: 'Your ad landing pages',
        line: 'Each morning a persona opens every live ad’s landing page and checks the offer, price and stock.',
        blueprint: 'ad-landing-check',
        pieces: ['browser'],
      },
      {
        kit: 'test',
        name: 'Your own flows',
        line: 'A persona joins your list, leaves a basket and times every welcome, basket and checkout email.',
        blueprint: 'mystery-shopper',
        pieces: ['personas', 'email', 'browser'],
      },
    ],
  },

  blueprints: {
    heading: 'Pick a blueprint, and Obsession runs it.',
    line: 'No code. Name the competitors, choose how often, and say where results go.',
    slugs: ['competitor-tracking', 'email-sms-tracking', 'trial-teardown', 'price-watch', 'ad-tracking', 'ad-landing-check', 'mystery-shopper'],
  },

  prices: ['persona', 'inbox', 'email', 'number', 'browser', 'log'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Growth and lifecycle', gets: 'Every email and text a competitor sends a new subscriber, beside your own flows, timed.', watch: 'Conversion, flow revenue, repeat purchase' },
      { role: 'Pricing and competitive intelligence', gets: 'Member prices and codes beside public ones each morning, and competitors’ trials day by day.', watch: 'Price position, promo depth, win rate' },
      { role: 'Brand and product marketing', gets: 'Competitors’ offers, launches and ads, dated, for positioning and launch plans.', watch: 'Share of voice, conversion, launch adoption' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: [
      '/use-cases/leak-checks-for-ecommerce-stores',
      '/use-cases/member-prices-for-price-intelligence',
      '/use-cases/trial-checks-for-software-companies',
    ],
  },

  faq: {
    heading: 'Before your personas sign up.',
    items: [
      {
        q: 'Do I need a developer?',
        a: 'No. Pick a blueprint, name your competitors and say where results go, such as Slack, a sheet or your CRM. Obsession runs it.',
        link: { label: 'Browse blueprints', to: '/blueprints' },
      },
      {
        q: 'We already sign up to competitors ourselves. What changes?',
        a: 'One person keeps one inbox at a few competitors, and trials expire. Personas keep every competitor you name subscribed for months, with every email, text and price dated.',
      },
      {
        q: 'What does it cost?',
        a: 'Start on the Free plan, with no credit card. A blueprint is billed on the pieces it uses, at list rates.',
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Will competitors know it’s us?',
        a: 'Not from the persona. Each one has its own name, inbox and number, and never names who asked. It says it’s an AI when it talks to a person. It stops before payment, never gets round a CAPTCHA or a bot block, and never clicks paid ads at volume.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
    ],
  },

  final: {
    heading: 'Keep every competitor’s emails, texts and prices, dated.',
    capture: { kind: 'waitlist', source: 'team-marketing', button: 'Start free', interest: 'competitor' },
  },
}
