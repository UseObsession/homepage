import type { Capture, Recipe } from '../types'

/* Price watch (/recipes/price-watch). Watch rivals. Screen: prices.
   Rewritten from James's "Price and promotion watch". Kept: his checks (prices and sale prices, bundles per item,
   stock, delivery and where free delivery starts, sitewide sales, codes on show), his settings, "a browser per rival,
   set to your country", and his honest code rule (codes tried only on stores you own or manage).
   Fixed (review P2: a silent checklist and an inbox and phone it never used): the kit lists only what the run uses.
   The inbox is real and earns its place: each agent is on the rival's email list, so it sees the subscriber codes a
   page never shows (the Marketing page's "why only agents" line). No phone. At rivals: public pages and their own
   email list only. Never a basket, a checkout or a person. Codes are tried only on your own store, or a client's
   with their OK, stopping before payment.
   The run and the table tell the same story as the `prices` screen (Rival B's soy candle, 4 days before Black
   Friday, 3 prices cut, the alert in #pricing). Example, and labelled so. */

const roles: Capture['roles'] = {
  question: 'Whose rivals should we watch first?',
  options: ['Ours', 'A client’s', 'Both'],
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'prices',
  slug: 'price-watch',
  name: 'Price watch',
  group: 'Watch rivals',
  line: 'Checks every rival’s prices, offers and delivery each morning, plus the codes they only send subscribers.',
  gets: 'Every rival price cut and sale before your day starts, and every subscriber code the minute it lands.',
  kit: [
    'A declared AI agent per rival',
    'A browser set to your country',
    'An inbox on each rival’s list',
    'A check every morning',
    'Before and after screenshots',
    'Every step signed and dated',
  ],

  meta: {
    path: '/recipes/price-watch',
    title: 'Price watch: AI agents that catch every rival price cut',
    description:
      'Declared AI agents check every rival’s prices, offers and delivery each morning, and join their lists for subscriber codes. Every change arrives signed.',
    answer:
      'Price watch is an Obsession recipe. Declared AI agents check every rival’s prices, offers, stock and delivery each morning as a shopper in your country, join each rival’s email list for the codes only subscribers get, and send every change with a signed before and after screenshot.',
    ogImage: '/og/price-watch.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Price watch', path: '/recipes/price-watch' },
    ],
  },

  hero: {
    headline: 'AI agents that catch every rival price cut, and the codes only subscribers get.',
    sub: 'Declared AI agents check every rival’s prices, offers and delivery each morning and join their email lists. Every change arrives signed, with a before and after.',
    screen: 'prices',
    capture: {
      kind: 'waitlist',
      source: 'recipe-price-watch-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'prices',
    },
  },

  run: {
    tab: 'Example: Black Friday week',
    recipe: 'prices',
    task: 'Check our 3 rivals’ prices, offers and delivery every morning. Tell me the moment one undercuts us.',
    targets: 'rival-a.example, rival-b.example, rival-c.example',
    journey: ['Open each product page', 'Read price, offer and delivery', 'Read the codes sent to subscribers', 'Compare with yesterday and with you'],
    schedule: 'Every morning at 06:00',
    report: 'Slack alert to #pricing, weekly PDF',
    kit: ['Agent ID, declared as AI', '3 browsers, set to the UK', '3 inboxes on rivals’ lists', 'Before and after screenshots'],
    events: [
      { time: 'Mon 06:00', text: 'Morning check: 6 products at 3 rivals, priced as a UK shopper.' },
      { time: 'Mon 06:04', text: 'Rival B: soy candle now £19 and ships free. On Sunday it was £24 plus £3.95 delivery.' },
      { time: 'Mon 06:05', text: 'Rival B also cut its reed diffuser to £28 and its wax melts to £9. Rivals A and C unchanged.' },
      { time: 'Mon 06:06', text: 'Alert in #pricing, with the before and after screenshots.' },
      { time: 'Mon 09:30', text: 'Rival A emails its list 20% off candles. Its site shows no code.' },
    ],
    finding: 'Rival B now sells its soy candle £5 under yours and ships it free, 4 days before Black Friday.',
    fix: 'Free delivery on your soy candle for Black Friday week, drafted for your next email. Live after your OK.',
    ledger: 'Example run. Every price read from a public page or the agent’s own inbox, screenshotted before and after, and signed.',
  },

  steps: [
    {
      title: 'Add your rivals and products',
      line: 'Paste single pages or whole collections, upload a CSV, connect Clay or use the API.',
    },
    {
      title: 'Each rival gets its own agent',
      line: 'A browser set to your country and currency, and an inbox on the rival’s email list. It says it’s an AI agent.',
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
        { title: 'Subscriber codes', line: 'The codes a rival only sends its list, so you see the price a new customer is really offered.' },
        { title: 'Sales told to the list first', line: 'The sale a rival emails its subscribers before its site shows it.' },
      ],
    },
  ],

  outputs: {
    heading: 'Your own price sits next to every change, with both screenshots.',
    items: [
      { format: 'Slack or email alert', line: 'The morning a rival cuts a price or starts a sale, with both screenshots.' },
      { format: 'Change log', line: 'Every change with the old price, the new one and when it moved.' },
      { format: 'Weekly PDF', line: 'What moved at every rival, next to your own prices.' },
      { format: 'Sheet, Clay or webhook', line: 'Each change as a row, a column or JSON, the moment it’s found.' },
    ],
  },

  settings: [
    { k: 'Rivals and products', v: 'Single pages or whole collections' },
    { k: 'Country', v: 'Sets the prices, currency and delivery the agent sees' },
    { k: 'How often', v: 'Every morning, or every hour in a sale week' },
    { k: 'Alerts', v: 'Only changes above an amount you set' },
    { k: 'Compared with', v: 'Your own prices and codes, from your pages and your own list' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Know a rival’s sale has started before your customers do.' },
    { audience: 'founders', line: 'Price with every rival in view, without opening their sites each morning.' },
    { audience: 'agencies', line: 'A price report for each client’s market, in your name.' },
    { audience: 'developers', line: 'Every rival price change as JSON, straight into your own pricing.' },
  ],

  table: {
    heading: 'Rival B cut 3 prices overnight. Its soy candle is now £5 under yours.',
    line: 'Example: Monday, 4 days before Black Friday, priced as a UK shopper.',
    cols: ['You', 'Rival A', 'Rival B', 'Rival C'],
    rows: [
      { label: 'Soy candle 200g', values: ['£24', '£26', '£19, was £24', '£25'] },
      { label: 'Reed diffuser', values: ['£28', '£32', '£28, was £30', '£31'] },
      { label: 'Wax melts ×6', values: ['£9', '£11', '£9, was £10', '£12'] },
      { label: 'Delivery on a candle', values: ['£3.95', '£3.95', 'Free, was £3.95', 'Free over £30'] },
      { label: 'Code sent to subscribers', values: ['10% off a first order', '20% off candles', 'None', '10% off a first order'] },
    ],
  },

  faq: {
    heading: 'It sees what any shopper sees, and never touches a rival’s basket.',
    items: [
      {
        q: 'How is it different from a price tracker?',
        a: 'Most tools read what a company publishes. Obsession goes through it as a customer: the agent is on each rival’s email list too, so it sees the code a new customer is sent and the price they really pay.',
      },
      {
        q: 'Does it buy anything or use a rival’s basket?',
        a: 'Never. At a rival it reads public pages and the emails it signed up for. It never adds to a basket or checks out.',
      },
      {
        q: 'Can it check that a code works?',
        a: 'On your own store, or a client’s with their OK, it tries the code at checkout and stops before payment. At a rival it records every code on show or sent to subscribers.',
      },
      {
        q: 'Do rivals know it’s an AI agent?',
        a: 'Yes. It signs up as an AI agent and links to useobsession.com/agents, a page explaining Obsession. It never names you and never replies.',
      },
      {
        q: 'Which countries can it check prices in?',
        a: 'The ones you sell in. Each agent’s browser is set to that country, so it sees the prices, currency and delivery your customers see.',
      },
      {
        q: 'How many rivals can it watch?',
        a: 'As many as you add. Each gets its own agent and inbox, and every change is kept with the morning it moved.',
      },
    ],
  },

  final: {
    heading: 'Know by morning when a rival undercuts you.',
    sub: 'Join the waitlist. Price watch comes ready to run on the rivals you name.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-price-watch-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'prices',
    },
  },
}
