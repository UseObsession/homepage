import type { Recipe } from '../types'

/* Sales agent check (/recipes/sales-agent-check). Check your AI agents. Screen: salescheck (Mon 07:01 on WhatsApp: the
   Duo bundle quoted at €89 where the price list at 07:00 says €189; checkout €89.00, stopped before payment; 27 bundle
   chats last week).
   The persona version (20 Nov 2026): a shopper persona you define (new, returning or a member), with its own WhatsApp
   number, asks AI sales agents for prices, stock and delivery every morning and follows each answer to checkout. It
   stops before payment by default, or pays with the reader's own payment card if they say so. Every quote comes back
   dated, beside the reader's price list, stock feed and delivery page, and competitors' shopping assistants get the
   same questions. With the agent, the page says what the event log shows. The run is an example. No vendor or product
   names. */

export const recipe: Recipe = {
  id: 'sales-agent',
  slug: 'sales-agent-check',
  name: 'Sales agent check',
  group: 'Check your AI agents',
  line: 'A persona shops with AI sales agents and follows every price, stock and delivery answer to checkout: yours and competitors’.',
  gets: 'Every price, stock and delivery answer, dated, beside your price list as it read that minute.',
  kit: [
    'A shopper persona with its own WhatsApp number',
    'Your price list, stock feed and delivery page, captured each run',
    'Every channel the agent sells on',
    'Checkout followed, stopped before payment by default',
    'Every chat dated, with screenshots',
    'Answers in Slack, a sheet or the API',
  ],

  meta: {
    path: '/blueprints/sales-agent-check',
    title: 'Sales agent check: the prices AI sales agents quote shoppers',
    description:
      'A shopper persona asks AI sales agents on chat and WhatsApp for prices, stock and delivery, and follows each answer to checkout: yours and competitors’.',
    answer:
      'Sales agent check sends a shopper persona to AI sales agents every morning to ask for prices, stock and delivery, then follows each answer to checkout. Every quote comes back dated, beside your price list, and competitors’ agents get the same questions.',
    ogImage: '/og/sales-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Sales agent check', path: '/blueprints/sales-agent-check' },
    ],
  },

  hero: {
    headline: 'What your AI sales agent charges, every morning.',
    sub: 'Sales agent check sends a shopper persona to AI sales agents every morning to ask for prices, stock and delivery, then follows each answer to checkout. Every quote comes back dated, beside your price list, and competitors’ agents get the same questions.',
    screen: 'salescheck',
    capture: {
      kind: 'waitlist',
      source: 'recipe-sales-agent-hero',
      button: 'Request early access',
      interest: 'sales-agent',
    },
  },

  unit: 'test shop',
  per: 'sales agent',

  run: {
    tab: 'Your sales agent, daily',
    recipe: 'sales-agent',
    task: 'Every morning, send a shopper persona to our sales agent on WhatsApp and site chat. Ask what our bundles cost, whether they’re in stock and when they arrive, set each answer beside our store, and stop before payment.',
    targets: 'Your sales agent: WhatsApp and site chat',
    journey: ['Ask a price', 'Ask about stock and delivery', 'Go to checkout, stop before payment', 'Set beside your store'],
    schedule: 'Daily at 07:00',
    report: 'Slack, and every chat by API',
    kit: ['New shopper persona', 'Its own WhatsApp number', 'Your price list and stock feed', 'Stops before payment'],
    events: [
      { time: 'Mon 07:00', text: 'Your price list, stock feed and delivery page, captured.' },
      { time: 'Mon 07:01', text: 'The persona asks on WhatsApp what the Duo bundle costs.' },
      { time: 'Mon 07:01', text: '“I’m the AI assistant. The Duo bundle is €89, in stock and arrives in 2 to 3 working days.”' },
      { time: 'Mon 07:01', text: 'Stock and delivery match your feed and your delivery page. The price doesn’t: your price list says €189.' },
      { time: 'Mon 07:02', text: 'Checkout shows €89.00. The persona stops before payment.' },
    ],
    finding: 'Your sales agent quotes the Duo bundle at €89. Your price list says €189, and 27 chats asked about the bundle last week.',
    fix: 'In #pricing at 07:02, with the chat, the checkout and your price list side by side.',
    ledger: '4 answers, 3 match your store, every chat dated.',
  },

  steps: [
    {
      title: 'Name the agents',
      line: 'Your site chat, WhatsApp or text sales agent, a client’s, or a competitor’s shopping assistant.',
    },
    {
      title: 'Define the shopper and the products',
      line: 'A new or returning shopper asking about your best sellers, bundles and this week’s offers. Add your price list, stock feed and delivery page.',
    },
    {
      title: 'Asked every morning, followed to checkout',
      line: 'On every channel in the same minute. The persona follows each answer to checkout and stops before payment, or pays with your own card if you say so.',
    },
    {
      title: 'Every answer lands where you work',
      line: 'Slack, a sheet or the API, beside the price list, feed or page it was read against.',
    },
  ],

  checks: [
    {
      group: 'What it tells shoppers',
      items: [
        { title: 'Says it’s an AI', line: 'In its first message, and truthfully whenever a shopper asks.' },
        { title: 'Prices and bundles', line: 'Every price beside your price list, captured the same minute.' },
        { title: 'Codes and offers', line: 'Every code it hands out: live, right and in date.' },
        { title: 'Stock and delivery', line: 'Every stock answer beside your stock feed, and every delivery time beside your delivery page.' },
      ],
    },
    {
      group: 'What happens next',
      items: [
        { title: 'The checkout total', line: 'Whether checkout shows the price it quoted, with every fee before payment.' },
        { title: 'The same answer everywhere', line: 'The same question on WhatsApp and site chat in the same minute.' },
        { title: 'Returns', line: 'The returns window it gives, beside your returns page.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        {
          title: 'Payment',
          line: 'Before payment, by default. Give the persona your own payment card and it completes the order, so you see the confirmation too.',
        },
        { title: 'Your figures', line: 'Every test chat on your own agent is tagged, so it stays out of your sales and your bill.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every price comes back with the chat and the checkout behind it.',
    items: [
      { format: 'An answer per question', line: 'Matches your store or doesn’t, beside the price list, feed or page.' },
      { format: 'The chat', line: 'Every message on every channel, timed.' },
      { format: 'The checkout', line: 'What checkout showed, with a screenshot of every step it reached.' },
      { format: 'How far it reached', line: 'How many chats asked about the same product last week, from the chat history you connect.' },
      { format: 'Competitors’ quotes', line: 'The same products asked of their agents, beside yours.' },
      { format: 'Slack, sheet or API', line: 'Every answer as a message, a row or JSON.' },
    ],
  },

  settings: [
    { k: 'Agents', v: 'Yours, a client’s or a competitor’s' },
    { k: 'Channels', v: 'Site chat, WhatsApp, text and apps' },
    { k: 'Products', v: 'Your best sellers, bundles and this week’s offers' },
    { k: 'Persona', v: 'New shopper, returning shopper or member' },
    { k: 'Sources', v: 'Your price list, stock feed, delivery and returns pages, captured each run' },
    { k: 'Chat history', v: 'Connected by you, to count how far a wrong answer reached' },
    { k: 'How often', v: 'Daily, and after every price change' },
    { k: 'Where it lands', v: 'Slack, a sheet, a webhook or the API' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Your agent quotes this week’s offer, not last month’s, and you see what competitors’ agents offer.' },
    { audience: 'agencies', line: 'Every client’s sales agent checked daily, every answer in your event log with its chat.' },
    { audience: 'founders', line: 'Know what your sales agent charged overnight, and hear the morning it gets a price wrong.' },
    { audience: 'developers', line: 'Spawn shopper personas from your code, and read every answer after each catalogue or prompt change.' },
  ],

  table: {
    heading: 'A wrong price in chat keeps selling until someone notices.',
    cols: ['By hand', 'With Sales agent check'],
    rows: [
      { label: 'A wrong price', values: ['Found when orders arrive at €89', 'Found the same morning, with the chat'] },
      { label: 'Stock and delivery', values: ['Trusted to match your feed', 'Read against your feed every morning'] },
      { label: 'WhatsApp and site chat', values: ['Never compared', 'The same question, the same minute'] },
      { label: 'Checkout', values: ['Nobody checks it matches the chat', 'Followed to checkout'] },
      { label: 'Competitors’ agents', values: ['Asked once, by hand', 'The same questions, every morning'] },
    ],
  },

  faq: {
    heading: 'A persona shops, and stops before payment unless you say so.',
    items: [
      {
        q: 'How do we stop our AI sales agent quoting the wrong price?',
        a: 'Catch it the morning it starts. Sales agent check sends a shopper persona to ask your agent about prices, bundles and codes every day, and sets each answer beside your price list, through to checkout.',
      },
      {
        q: 'Can Sales agent check ask a competitor’s agent?',
        a: 'Yes. A persona asks a competitor’s shopping assistant what any shopper can ask and keeps each quote with its time. It has its own name and number, so nothing points back to you.',
      },
      {
        q: 'Does Sales agent check buy anything?',
        a: 'Not by default. The persona follows every answer to checkout and stops before payment. Give it your own payment card and it completes the order, so you also see the confirmation and every message after it.',
      },
      {
        q: 'How do you know how far a wrong price reached?',
        a: 'From the chat history you connect: Sales agent check counts how many chats asked about the same product.',
      },
      {
        q: 'Which agents can Sales agent check cover?',
        a: 'Sales agent check covers any AI that sells, from a vendor or built in house: on site chat, WhatsApp, text or in an app.',
      },
    ],
  },

  final: {
    heading: 'Catch a wrong price the morning it appears.',
    sub: 'Tell us which agent to shop with and who the shopper should be. We’ll set up your first run with you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-sales-agent-final',
      button: 'Request early access',
      interest: 'sales-agent',
    },
  },
}
