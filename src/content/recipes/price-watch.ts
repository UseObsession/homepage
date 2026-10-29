import type { Recipe } from '../types'

/* Price watch (/recipes/price-watch). Watch rivals. Screen: prices.
   Rewritten from James's "Price and promotion watch". Kept: his checks (prices and sale prices, bundles per item,
   stock, delivery and where free delivery starts, sitewide sales, codes on show), his settings and "a browser per rival,
   set to your country".
   Fixed (review P2: a silent checklist and an inbox and phone it never used): the kit lists only what the run uses.
   The inbox is real and earns its place: each agent is on the rival's email list, so it sees the subscriber codes a
   page never shows (the Marketing page's "why only agents" line). No phone. Baskets, codes tried at checkout and
   real orders are the customer's setting; the 3 lines hold (obsession/system.md), so an agent never uses fake
   payment details and says it's AI when it talks to a person.
   The run and the table tell the same story as the `prices` screen (Rival B's soy candle, 4 days before Black
   Friday, 3 prices cut, the alert in #pricing). Example, and labelled so. */

export const recipe: Recipe = {
  id: 'prices',
  slug: 'price-watch',
  name: 'Price watch',
  group: 'Watch other companies',
  line: 'Checks every competitor’s prices, offers and delivery each morning, plus the codes they only send subscribers.',
  gets: 'Every competitor price cut and sale before your day starts, and every subscriber code the minute it lands.',
  kit: [
    'An AI customer per competitor',
    'A browser set to your country',
    'An inbox on each competitor’s list',
    'A check every morning',
    'Before and after screenshots',
    'Every step signed and dated',
  ],

  meta: {
    path: '/recipes/price-watch',
    title: 'Price watch: AI customers that catch competitor price cuts',
    description:
      'AI customers check every competitor’s prices, offers and delivery each morning, and join their lists for subscriber codes. Every change arrives with proof.',
    answer:
      'Price watch catches every competitor price cut and the codes only subscribers get: AI agents check every competitor’s prices, offers and delivery each morning and join their email lists. Every change arrives with a before and after.',
    ogImage: '/og/price-watch.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Price watch', path: '/recipes/price-watch' },
    ],
  },

  hero: {
    headline: 'AI agents that catch every competitor price cut, and the codes only subscribers get.',
    sub: 'Price watch catches every competitor price cut and the codes only subscribers get: AI agents check every competitor’s prices, offers and delivery each morning and join their email lists. Every change arrives with a before and after.',
    screen: 'prices',
    capture: {
      kind: 'waitlist',
      source: 'recipe-price-watch-hero',
      button: 'Join the waitlist',
      interest: 'prices',
    },
  },

  run: {
    tab: 'Example: Black Friday week',
    recipe: 'prices',
    task: 'Check our 3 competitors’ prices, offers and delivery every morning. Tell me the moment one undercuts us.',
    targets: 'competitor-a.example, competitor-b.example, competitor-c.example',
    journey: ['Open each product page', 'Read price, offer and delivery', 'Read the codes sent to subscribers', 'Compare with yesterday and with you'],
    schedule: 'Every morning at 06:00',
    report: 'Slack alert to #pricing, weekly PDF',
    kit: ['Agent ID', '3 browsers, set to the UK', '3 inboxes on competitors’ lists', 'Before and after screenshots'],
    events: [
      { time: 'Mon 06:00', text: 'Morning check: 6 products at 3 competitors, priced as a UK shopper.' },
      { time: 'Mon 06:04', text: 'Competitor B: soy candle now £19 and ships free. On Sunday it was £24 plus £3.95 delivery.' },
      { time: 'Mon 06:05', text: 'Competitor B also cut its reed diffuser to £28 and its wax melts to £9. Competitors A and C unchanged.' },
      { time: 'Mon 06:06', text: 'Alert in #pricing, with the before and after screenshots.' },
      { time: 'Mon 09:30', text: 'Competitor A emails its list 20% off candles. Its site shows no code.' },
    ],
    finding: 'Competitor B now sells its soy candle £5 under yours and ships it free, 4 days before Black Friday.',
    fix: 'Free delivery on your soy candle for Black Friday week, drafted for your next email. Live after your OK.',
    ledger: 'Example run. Every price read from a public page or the agent’s own inbox, screenshotted before and after, and signed.',
  },

  steps: [
    {
      title: 'Add your competitors and products',
      line: 'Paste single pages or whole collections, upload a CSV, connect Clay or use the API.',
    },
    {
      title: 'Each competitor gets its own agent',
      line: 'A browser set to your country and currency, and an inbox on the competitor’s email list.',
    },
    {
      title: 'Every morning, it compares',
      line: 'Each price, offer, stock level and delivery cost against yesterday’s, and against yours.',
    },
    {
      title: 'You get the change and your move',
      line: 'An alert with the before and after, and a reply drafted for your OK.',
    },
  ],

  checks: [
    {
      group: 'On each product page',
      items: [
        { title: 'Price and sale price', line: 'For the products or collections you pick, in your currency.' },
        { title: 'Bundles and multibuys', line: 'And what each works out at per item.' },
        { title: 'Stock', line: 'In stock, low stock or sold out.' },
        { title: 'Delivery', line: 'The cost, and where free delivery starts.' },
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
      group: 'In the agent’s inbox',
      items: [
        { title: 'Subscriber codes', line: 'The codes a competitor only sends its list, so you see the price a new customer is really offered.' },
        { title: 'Sales told to the list first', line: 'The sale a competitor emails its subscribers before its site shows it.' },
      ],
    },
  ],

  outputs: {
    heading: 'Your own price sits next to every change, with both screenshots.',
    items: [
      { format: 'Slack or email alert', line: 'The morning a competitor cuts a price or starts a sale, with both screenshots.' },
      { format: 'Change log', line: 'Every change with the old price, the new one and when it moved.' },
      { format: 'Weekly PDF', line: 'What moved at every competitor, next to your own prices.' },
      { format: 'Sheet, Clay or webhook', line: 'Each change as a row, a column or JSON, the moment it’s found.' },
    ],
  },

  settings: [
    { k: 'Competitors and products', v: 'Single pages or whole collections' },
    { k: 'Country', v: 'Sets the prices, currency and delivery the agent sees' },
    { k: 'How often', v: 'Every morning, or every hour in a sale week' },
    { k: 'Alerts', v: 'Only changes above an amount you set' },
    { k: 'Compared with', v: 'Your own prices and codes, from your pages and your own list' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Know a competitor’s sale has started before your customers do.' },
    { audience: 'founders', line: 'Price with every competitor in view, without opening their sites each morning.' },
    { audience: 'agencies', line: 'A price report for each client’s market, in your name.' },
    { audience: 'developers', line: 'Every competitor price change as JSON, straight into your own pricing.' },
  ],

  table: {
    heading: 'Competitor B cut 3 prices overnight. Its soy candle is now £5 under yours.',
    line: 'Example: Monday, 4 days before Black Friday, priced as a UK shopper.',
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
    heading: 'It sees what any shopper sees, with a before and after for every change.',
    items: [
      {
        q: 'How do I track competitor prices without checking every day by hand?',
        a: 'Obsession’s Price watch checks every competitor’s prices, offers, stock and delivery each morning as a shopper in your country, and sends each change with a before and after screenshot beside your own price.',
      },
      {
        q: 'What’s it worth?',
        a: 'Price watch gives your team up to 18 hours a month back, if it checks 3 competitors’ prices for 90 minutes a week each.',
      },
      {
        q: 'How is Price watch different from a price tracker?',
        a: 'Price watch goes through each competitor as a customer, where most tools read what it publishes: the agent is on each competitor’s email list too, so it sees the code a new customer is sent and the price they really pay.',
      },
      {
        q: 'Does Price watch buy anything or use a competitor’s basket?',
        a: 'If you choose. Price watch can fill a basket to see the price at checkout, with delivery and codes applied. Real orders go on a card you fund, and it never uses fake payment details.',
      },
      {
        q: 'Can Price watch check that a code works?',
        a: 'Yes. Price watch tries the code at checkout and keeps what the checkout showed. It also records every code on show or sent to subscribers.',
      },
      {
        q: 'Do competitors know it’s an AI agent?',
        a: 'Signing up and reading prices needs no conversation. When an Obsession agent talks to a person, it says it’s an AI and links to useobsession.com/agents, a page explaining Obsession. You stay private unless you choose to be named.',
      },
      {
        q: 'Which countries can Price watch check prices in?',
        a: 'Price watch checks the ones you sell in. Each agent’s browser is set to that country, so it sees the prices, currency and delivery your customers see.',
      },
      {
        q: 'How many competitors can Price watch cover?',
        a: 'Price watch covers as many as you add. Each gets its own agent and inbox, and every change is kept with the morning it moved.',
      },
    ],
  },

  final: {
    heading: 'Know by morning when a competitor undercuts you.',
    sub: 'Join the waitlist. Price watch comes ready to run on the competitors you name.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-price-watch-final',
      button: 'Join the waitlist',
      interest: 'prices',
    },
  },
}
