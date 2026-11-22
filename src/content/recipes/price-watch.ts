import type { Recipe } from '../types'

/* Price watch (/blueprints/price-watch). Watch other companies. Screen: prices. Home's tile calls it "Price watch".
   The persona version (20 Nov 2026): a persona the reader defines, connecting from their country, opens an account at
   each competitor and joins its email list. Each morning it reads what that competitor charges: public and member
   prices, offers, delivery and the codes sent only to subscribers, and dates every change with before and after
   screenshots. Changes land in Slack, a sheet, Clay, a webhook or the API. It stops before payment by default.
   Sold as designed: no index, no country list, no caps.
   The run and the table tell the screen's story (Competitor B's soy candle, 4 days before Black Friday). Example. */

export const recipe: Recipe = {
  id: 'prices',
  slug: 'price-watch',
  name: 'Price watch',
  group: 'Watch other companies',
  line: 'Every morning a persona signs in at each competitor and reads member prices and subscriber codes.',
  gets: 'Every price change and subscriber code, dated, with the screenshot before and after.',
  kit: [
    'A persona at each competitor, in your country',
    'Its inbox on each competitor’s email list',
    'Public and member prices, read each morning',
    'Every email kept with the time it arrived',
    'A screenshot of every price, before and after',
    'Changes in Slack, a sheet or the API',
  ],

  meta: {
    path: '/blueprints/price-watch',
    title: 'Watch competitors’ member prices and codes every morning',
    description:
      'Price watch signs in at each competitor as a persona and reads public and member prices, delivery and subscriber codes each morning, every change dated.',
    answer:
      'Price watch signs in at each competitor as a persona in your country and joins its email list. Each morning it reads public and member prices, offers, delivery and subscriber codes, and dates every change.',
    ogImage: '/og/price-watch.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Price watch', path: '/blueprints/price-watch' },
    ],
  },

  hero: {
    headline: 'Every competitor’s prices, including the ones only members see.',
    sub: 'Price watch signs in at each competitor as a persona in your country and joins its email list. Each morning it reads public and member prices, offers, delivery and subscriber codes, and dates every change.',
    screen: 'prices',
    capture: {
      kind: 'waitlist',
      source: 'recipe-price-watch-hero',
      button: 'Start free',
      interest: 'prices',
    },
  },

  unit: 'price check',
  per: 'competitor',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['An account and an email sign up, as a persona in your country', 'Public and member prices, on up to 50 products', 'Delivery costs and the codes on show'] },
    { name: 'Weekly', includes: ['Subscriber codes from each email list', 'Every change with its before and after screenshot', 'Changes in Slack or a sheet'] },
    { name: 'Daily', includes: ['Sitewide sales and codes the day they appear', 'Each change beside your own price', 'Alerts only above an amount you set'] },
    { name: 'Scale', includes: ['Changes in Clay, a webhook or the API', 'A weekly report you can share'] },
  ],

  run: {
    tab: 'Black Friday week',
    recipe: 'prices',
    task: 'Every morning, read our 3 competitors’ prices, member prices, delivery and subscriber codes as a UK member. Tell #pricing when one undercuts us.',
    targets: 'competitor-a.example, competitor-b.example, competitor-c.example',
    journey: ['Read each product, signed in and out', 'Read price, offer and delivery', 'Read the codes sent to subscribers', 'Compare with yesterday and with you'],
    schedule: 'Every morning at 06:00',
    report: 'Slack in #pricing, a sheet and the API',
    kit: ['3 personas · UK', '3 subscriber inboxes', 'Before and after screenshots', 'Your own prices'],
    events: [
      { time: 'Mon 06:00', text: 'Morning read: 6 products at 3 competitors, as a UK member.' },
      { time: 'Mon 06:04', text: 'Competitor B: soy candle now £19 and ships free. On Sunday it was £24 plus £3.95 delivery.' },
      { time: 'Mon 06:05', text: 'Competitor B also cut its reed diffuser to £28 and its wax melts to £9. Competitors A and C unchanged.' },
      { time: 'Mon 06:06', text: 'In #pricing, with the before and after screenshots.' },
      { time: 'Mon 09:30', text: 'Competitor A emails its list 20% off candles. Its site shows no code.' },
    ],
    finding: 'Competitor B now sells its soy candle £5 under yours and ships it free, 4 days before Black Friday.',
    fix: 'In #pricing at 06:06 and on your pricing sheet, beside your own £24.',
    ledger: 'Every price read from a public page, a member page or the subscriber inbox, with screenshots before and after.',
  },

  steps: [
    { title: 'Name the competitors', line: 'Single products or whole categories, from a list, a CSV, Clay or the API.' },
    {
      title: 'Define the persona',
      line: 'A new visitor, a subscriber or a member, in the country and currency you choose.',
    },
    { title: 'It reads every morning', line: 'Each price, offer, stock level and delivery cost, against yesterday’s and against yours.' },
    { title: 'Changes land where you work', line: 'Slack, a sheet, Clay, a webhook or the API, each with its screenshot.' },
  ],

  checks: [
    {
      group: 'On each product page',
      items: [
        { title: 'Price and sale price', line: 'For the products or categories you pick, in your currency.' },
        { title: 'Member price', line: 'The price a signed in member sees, beside the public one.' },
        { title: 'Bundles and multibuys', line: 'And what each works out at per item.' },
        { title: 'Stock and delivery', line: 'In stock or sold out, the delivery cost and where free delivery starts.' },
      ],
    },
    {
      group: 'Across the site',
      items: [
        { title: 'Sitewide sales', line: 'Banners, sale pages and pop up offers, the day they appear.' },
        { title: 'Codes on show', line: 'Every code in a banner or pop up, and the day it goes.' },
      ],
    },
    {
      group: 'In the subscriber inbox',
      items: [
        { title: 'Subscriber codes', line: 'Codes sent only to the list, so you see what a new subscriber is offered.' },
        { title: 'Sales told to the list first', line: 'The sale a competitor emails its subscribers before its site shows it.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every change sits beside your own price, with both screenshots.',
    items: [
      { format: 'Slack or email', line: 'The morning a competitor cuts a price or starts a sale.' },
      { format: 'Change log', line: 'Every change with the old price, the new one and the day it moved.' },
      { format: 'Sheet or Clay', line: 'Each change as a row or a column on the products you track.' },
      { format: 'API and webhook', line: 'Every price as JSON, the moment it’s read, for your pricing.' },
    ],
  },

  settings: [
    { k: 'Competitors', v: 'Single products or whole categories' },
    { k: 'Persona', v: 'New visitor, subscriber or member' },
    { k: 'Country', v: 'Any you choose: it sets the prices, currency and delivery the persona sees' },
    { k: 'How often', v: 'Every morning, or every hour in a sale week' },
    { k: 'Alerts', v: 'Only changes above an amount you set' },
    { k: 'Where it lands', v: 'Slack, a sheet, Clay, a webhook or the API' },
  ],

  table: {
    heading: 'Competitor B cut 3 prices overnight. Its soy candle is now £5 under yours.',
    line: 'Monday, 4 days before Black Friday, as a UK member.',
    cols: ['You', 'Competitor A', 'Competitor B', 'Competitor C'],
    rows: [
      { label: 'Soy candle 200g', values: ['£24', '£26', '£19, was £24', '£25'] },
      { label: 'Reed diffuser', values: ['£28', '£32', '£28, was £30', '£31'] },
      { label: 'Wax melts ×6', values: ['£9', '£11', '£9, was £10', '£12'] },
      { label: 'Delivery on a candle', values: ['£3.95', '£3.95', 'Free, was £3.95', 'Free over £30'] },
      { label: 'Code sent to subscribers', values: ['10% off a first order', '20% off candles', 'None', '10% off a first order'] },
    ],
  },

  faq: {
    heading: 'What a member sees, with a screenshot for every change.',
    items: [
      {
        q: 'How do I track competitor prices without checking every day by hand?',
        a: 'Price watch sends a persona in your country to read every competitor’s prices, offers, stock and delivery each morning. Each change comes with a before and after screenshot, beside your own price.',
      },
      {
        q: 'How is Price watch different from a price tracker?',
        a: 'A price tracker reads the public page. Price watch’s persona also signs in and joins each competitor’s email list, so it sees the member price and the code a new subscriber is sent.',
        link: { label: 'See inboxes for AI agents', to: '/email' },
      },
      {
        q: 'Can Price watch see the price at checkout?',
        a: 'Yes, if you choose. Price watch fills a basket to see the total with delivery and codes applied, and stops before payment unless you give it your card.',
      },
      {
        q: 'Which countries can Price watch read prices in?',
        a: 'Any country you choose. Price watch’s persona connects from a home connection there, so it sees the prices, currency and delivery a local shopper sees.',
        link: { label: 'See the cloud browser', to: '/browser' },
      },
      {
        q: 'Do competitors know who asked?',
        a: 'No. Signing in and reading prices needs no conversation, and who asked is never shown. When Price watch’s persona talks to a person, it says it’s an AI.',
      },
      {
        q: 'How many competitors can Price watch cover?',
        a: 'Price watch covers as many as you add, every morning. Run one, or a fleet of thousands.',
      },
      {
        q: 'What does Price watch cost?',
        a: 'It’s billed on the pieces it uses, at list rates: browser hours to read each price, and an inbox for each competitor’s email list. The month grows with the products you watch and how often prices are read.',
        link: { label: 'See how a persona works', to: '/personas' },
      },
    ],
  },

  final: {
    heading: 'Know by morning when a competitor undercuts you.',
    sub: 'Try it on the Free plan with your closest competitors.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-price-watch-final',
      button: 'Start free',
      interest: 'prices',
    },
    link: { label: 'More blueprints to work behind logins', to: '/blueprints/work-behind-logins' },
  },
}
