import type { Recipe } from '../types'

/* Price watch (/recipes/price-watch). Watch other companies. Screen: prices.
   The 9 Nov story: a ready-made collection of what competitors charge a signed-up customer: public and member prices,
   offers, delivery and the codes sent only to subscribers, read each morning from an account and a subscriber inbox at
   each competitor, in the reader's country. Changes land in Slack, a sheet, Clay, a webhook or the API.
   The run and the table tell the screen's story (Competitor B's soy candle, 4 days before Black Friday). Example. */

export const recipe: Recipe = {
  id: 'prices',
  slug: 'price-watch',
  name: 'Price watch',
  group: 'Watch other companies',
  line: 'Competitors’ public and member prices, delivery and subscriber codes, collected each morning as a customer in your country.',
  gets: 'Every price change and subscriber code, dated, with the screenshot before and after.',
  kit: [
    'An account at each competitor, in your country',
    'An inbox on each competitor’s email list',
    'Public and signed-in prices, read each morning',
    'Every email kept with the time it arrived',
    'A screenshot of every price, before and after',
    'Changes in Slack, a sheet or the API',
  ],

  meta: {
    path: '/recipes/price-watch',
    title: 'Price watch: competitor prices, member prices and codes',
    description:
      'Price watch collects every competitor’s public and member prices, delivery and the codes sent only to subscribers, each morning, every change dated.',
    answer:
      'Price watch collects what competitors charge a signed-up customer: public and member prices, offers, delivery and the codes sent only to subscribers. It reads each competitor every morning from an account and a subscriber inbox in your country, and dates every change with its screenshot.',
    ogImage: '/og/price-watch.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Price watch', path: '/recipes/price-watch' },
    ],
  },

  hero: {
    headline: 'Every competitor’s prices, as a signed-up customer sees them.',
    sub: 'Price watch collects what competitors charge a signed-up customer: public and member prices, offers, delivery and the codes sent only to subscribers. It reads each competitor every morning from an account and a subscriber inbox in your country, and dates every change with its screenshot.',
    screen: 'prices',
    capture: {
      kind: 'waitlist',
      source: 'recipe-price-watch-hero',
      button: 'Request early access',
      interest: 'prices',
    },
  },

  run: {
    tab: 'Example: Black Friday week',
    recipe: 'prices',
    task: 'Every morning, collect our 3 competitors’ prices, member prices, delivery and subscriber codes as a UK customer. Tell #pricing when one undercuts us.',
    targets: 'competitor-a.example, competitor-b.example, competitor-c.example',
    journey: ['Read each product, signed in and out', 'Read price, offer and delivery', 'Read the codes sent to subscribers', 'Compare with yesterday and with you'],
    schedule: 'Every morning at 06:00',
    report: 'Slack in #pricing, a sheet and the API',
    kit: ['3 accounts · UK', '3 subscriber inboxes', 'Before and after screenshots', 'Your own prices'],
    events: [
      { time: 'Mon 06:00', text: 'Morning read: 6 products at 3 competitors, as a UK customer.' },
      { time: 'Mon 06:04', text: 'Competitor B: soy candle now £19 and ships free. On Sunday it was £24 plus £3.95 delivery.' },
      { time: 'Mon 06:05', text: 'Competitor B also cut its reed diffuser to £28 and its wax melts to £9. Competitors A and C unchanged.' },
      { time: 'Mon 06:06', text: 'In #pricing, with the before and after screenshots.' },
      { time: 'Mon 09:30', text: 'Competitor A emails its list 20% off candles. Its site shows no code.' },
    ],
    finding: 'Competitor B now sells its soy candle £5 under yours and ships it free, 4 days before Black Friday.',
    fix: 'In #pricing at 06:06 and on your pricing sheet, beside your own £24.',
    ledger: 'Example run. Every price read from a public page, a signed-in page or the subscriber inbox, with screenshots before and after.',
  },

  steps: [
    { title: 'Name the competitors', line: 'Single products or whole collections, from a list, a CSV, Clay or the API.' },
    {
      title: 'Pick the customer',
      line: 'The country, the currency and the profile: a new visitor, a subscriber or a member. Obsession opens the account and joins each email list.',
    },
    { title: 'Read every morning', line: 'Each price, offer, stock level and delivery cost, against yesterday’s and against yours.' },
    { title: 'Changes land where you work', line: 'Slack, a sheet, Clay, a webhook or the API, each with its screenshot.' },
  ],

  checks: [
    {
      group: 'On each product page',
      items: [
        { title: 'Price and sale price', line: 'For the products or collections you pick, in your currency.' },
        { title: 'Member price', line: 'The price a signed-in customer sees, beside the public one.' },
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
        { title: 'Subscriber codes', line: 'The codes a competitor sends only its list, so you see the price a new customer is offered.' },
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
      { format: 'API and webhook', line: 'Every price as JSON, the moment it’s read, for your own pricing.' },
    ],
  },

  settings: [
    { k: 'Competitors', v: 'Single products or whole collections' },
    { k: 'Customer profile', v: 'New visitor, subscriber or member' },
    { k: 'Country', v: 'Sets the prices, currency and delivery Obsession sees' },
    { k: 'How often', v: 'Every morning, or every hour in a sale week' },
    { k: 'Alerts', v: 'Only changes above an amount you set' },
    { k: 'Where it lands', v: 'Slack, a sheet, Clay, a webhook or the API' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Know a competitor’s sale has started before your customers do.' },
    { audience: 'founders', line: 'Price with every competitor in view, without opening their sites each morning.' },
    { audience: 'agencies', line: 'A price report for each client’s market.' },
    { audience: 'developers', line: 'Every competitor price as JSON, straight into your own pricing.' },
  ],

  table: {
    heading: 'Competitor B cut 3 prices overnight. Its soy candle is now £5 under yours.',
    line: 'Example: Monday, 4 days before Black Friday, as a UK customer.',
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
    heading: 'What a customer sees, with a screenshot for every change.',
    items: [
      {
        q: 'How do I track competitor prices without checking every day by hand?',
        a: 'Price watch reads every competitor’s prices, offers, stock and delivery each morning as a customer in your country, and sends each change with a before and after screenshot beside your own price.',
      },
      {
        q: 'How is Price watch different from a price tracker?',
        a: 'A price tracker reads the public page. Price watch also signs in and joins each competitor’s email list, so it sees the member price and the code a new subscriber is sent.',
      },
      {
        q: 'Can Price watch see the price at checkout?',
        a: 'Yes, if you choose. Price watch fills a basket to see the total with delivery and codes applied, and stops before payment.',
      },
      {
        q: 'Which countries can Price watch read prices in?',
        a: 'Price watch reads the ones you sell in. Each account is set to that country, so it sees the prices, currency and delivery your customers see.',
      },
      {
        q: 'Do competitors know who asked?',
        a: 'No. Signing up and reading prices needs no conversation, and who asked is never shown. When Price watch talks to a person, it says it’s an AI.',
      },
      {
        q: 'How many competitors can Price watch cover?',
        a: 'Price watch covers as many as you add. A competitor already in the index returns its price history at once.',
      },
    ],
  },

  final: {
    heading: 'Know by morning when a competitor undercuts you.',
    sub: 'Early access includes Price watch on up to 5 competitors added for you, and every company already covered.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-price-watch-final',
      button: 'Request early access',
      interest: 'prices',
    },
  },
}
