import type { Recipe } from '../types'

/* Sales agent check (/recipes/sales-agent-check). Check your AI agents. Screen: salescheck (Mon 07:01 on WhatsApp: the
   Duo bundle quoted at €89 where the price list at 07:00 says €189; checkout €89.00, stopped before payment; 27 bundle
   chats last week).
   The 9 Nov story: the record of what AI sales agents quote customers: prices, stock and delivery, followed to checkout
   and dated. The reader's own agent, read against their price list, stock feed and delivery page each morning, and
   competitors' shopping assistants on what any customer can ask. Every checkout stops before payment. No real AI agent
   check has run yet, so the run is an example. No vendor or product names. */

export const recipe: Recipe = {
  id: 'sales-agent',
  slug: 'sales-agent-check',
  name: 'Sales agent check',
  group: 'Check your AI agents',
  line: 'The prices, stock and delivery AI sales agents quote customers, followed to checkout: yours and your competitors’.',
  gets: 'Every price, stock and delivery answer, dated, beside your price list as it read that minute.',
  kit: [
    'A customer profile with its own WhatsApp number',
    'Your price list, stock feed and delivery page, captured each run',
    'Every channel the agent sells on',
    'Checkout followed, stopped before payment',
    'Every chat kept with its time',
    'Answers in Slack, a sheet or the API',
  ],

  meta: {
    path: '/recipes/sales-agent-check',
    title: 'Sales agent check: what AI sales agents quote customers',
    description:
      'Sales agent check records the prices, stock and delivery AI sales agents quote on chat and WhatsApp, followed to checkout, for your agent and competitors’.',
    answer:
      'Sales agent check is the record of what AI sales agents quote customers: prices, stock and delivery, followed to checkout and dated. Obsession asks your agent each morning and sets each answer beside your price list, and asks your competitors’ agents the same.',
    ogImage: '/og/sales-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Sales agent check', path: '/recipes/sales-agent-check' },
    ],
  },

  hero: {
    headline: 'What your AI sales agent charges, every morning.',
    sub: 'Sales agent check is the record of what AI sales agents quote customers: prices, stock and delivery, followed to checkout and dated. Obsession asks your agent each morning and sets each answer beside your price list, and asks your competitors’ agents the same.',
    screen: 'salescheck',
    capture: {
      kind: 'waitlist',
      source: 'recipe-sales-agent-hero',
      button: 'Request early access',
      interest: 'sales-agent',
    },
  },

  run: {
    tab: 'Example: your sales agent, daily',
    recipe: 'sales-agent',
    task: 'Every morning, ask our sales agent on WhatsApp and site chat what our bundles cost, whether they’re in stock and when they arrive. Set each answer beside our store, and stop before payment.',
    targets: 'Your sales agent: WhatsApp and site chat',
    journey: ['Say it’s an AI, ask a price', 'Ask about stock and delivery', 'Go to checkout, stop before payment', 'Set beside your store'],
    schedule: 'Daily at 07:00',
    report: 'Slack, and every chat by API',
    kit: ['New shopper', 'Its own WhatsApp number', 'Your price list and stock feed', 'Stops before payment'],
    events: [
      { time: 'Mon 07:00', text: 'Your price list, stock feed and delivery page, captured.' },
      { time: 'Mon 07:01', text: 'Obsession says it’s an AI and asks on WhatsApp what the Duo bundle costs.' },
      { time: 'Mon 07:01', text: '“I’m the AI assistant. The Duo bundle is €89, in stock and arrives in 2 to 3 working days.”' },
      { time: 'Mon 07:01', text: 'Stock and delivery match your feed and your delivery page. The price doesn’t: your price list says €189.' },
      { time: 'Mon 07:02', text: 'Checkout shows €89.00. It stops before payment.' },
    ],
    finding: 'Your sales agent quotes the Duo bundle at €89. Your price list says €189, and 27 chats asked about the bundle last week.',
    fix: 'In #pricing at 07:02, with the chat, the checkout and your price list side by side.',
    ledger: 'Example run. 4 answers, 3 match your store, every chat dated.',
  },

  steps: [
    {
      title: 'Name the agents',
      line: 'Your site chat, WhatsApp or text sales agent, a client’s, or a competitor’s shopping assistant.',
    },
    {
      title: 'Pick the products and the customer',
      line: 'Your best sellers, bundles and this week’s offers, asked as a new or returning shopper. Add your price list, stock feed and delivery page.',
    },
    {
      title: 'Asked every morning, followed to checkout',
      line: 'On every channel, saying it’s an AI. Obsession follows each answer to checkout and stops before payment.',
    },
    {
      title: 'Every answer lands where you work',
      line: 'Slack, a sheet or the API, beside the price list, feed or page it was read against.',
    },
  ],

  checks: [
    {
      group: 'What it tells customers',
      items: [
        { title: 'Says it’s an AI', line: 'In its first message, and truthfully whenever a customer asks.' },
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
        { title: 'Payment', line: 'Every checkout stops before payment.' },
        { title: 'Your figures', line: 'Every test chat on your own agent is tagged, agreed with your vendor, so it stays out of your sales and your bill.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every price comes back with the chat and the checkout behind it.',
    items: [
      { format: 'An answer per question', line: 'Matches your store or doesn’t, beside the price list, feed or page.' },
      { format: 'The chat', line: 'Every message on every channel, timed.' },
      { format: 'The checkout', line: 'What checkout showed, captured at every step it reached.' },
      { format: 'How far it reached', line: 'How many chats asked about the same product last week, from the chat history you connect.' },
      { format: 'Competitors’ quotes', line: 'The same products asked of their agents, beside yours.' },
      { format: 'Slack, sheet or API', line: 'Every answer as a message, a row or JSON.' },
    ],
  },

  settings: [
    { k: 'Agents', v: 'Yours, a client’s or a competitor’s' },
    { k: 'Channels', v: 'Site chat, WhatsApp, text and apps' },
    { k: 'Products', v: 'Your best sellers, bundles and this week’s offers' },
    { k: 'Persona', v: 'New shopper, returning customer or member' },
    { k: 'Sources', v: 'Your price list, stock feed, delivery and returns pages, captured each run' },
    { k: 'Chat history', v: 'Connected by you, to count how far a wrong answer reached' },
    { k: 'How often', v: 'Daily, and after every price change' },
    { k: 'Where it lands', v: 'Slack, a sheet, a webhook or the API' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Your agent quotes this week’s offer, not last month’s, and you see what competitors’ agents offer.' },
    { audience: 'agencies', line: 'A daily record of every client’s sales agent, every answer with its chat.' },
    { audience: 'founders', line: 'Know what your sales agent charged overnight, and hear the morning it gets a price wrong.' },
    { audience: 'developers', line: 'Read every answer from your code after each catalogue or prompt change.' },
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
    heading: 'It says it’s an AI, and stops before payment.',
    items: [
      {
        q: 'How do we stop our AI sales agent quoting the wrong price?',
        a: 'Catch it the morning it starts. Sales agent check asks your agent about prices, bundles and codes every day and sets each answer beside your price list, through to checkout.',
      },
      {
        q: 'Can Sales agent check ask a competitor’s agent?',
        a: 'Yes. Sales agent check asks a competitor’s shopping assistant what any customer can ask, says it’s an AI, and keeps each quote with its time. Who asked is never shown.',
      },
      {
        q: 'Does Sales agent check buy anything?',
        a: 'No. Sales agent check follows every answer to checkout and stops before payment.',
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
    sub: 'Early access includes Sales agent check on your agent and up to 5 companies added for you, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-sales-agent-final',
      button: 'Request early access',
      interest: 'sales-agent',
    },
  },
}
