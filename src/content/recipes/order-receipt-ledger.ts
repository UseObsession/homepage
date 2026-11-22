import type { Recipe } from '../types'

/* Order and receipt ledger (/blueprints/order-receipt-ledger, 23 Nov 2026, _research/seo/agentic-commerce-23nov/PLAN.md
   §3). Buy, book and order, the email side: every order confirmation, receipt, invoice and delivery text a team's
   buying agents get lands on each agent's own inbox and number, is read into order, merchant, amount and date, matched
   to its order and posted to one sheet, with a flag in Slack when a receipt and its confirmation disagree or a receipt
   is missing. For finance and procurement teams (receipts matched, days to close; spend under contract, time per order)
   and the engineers who build buying agents (email.received and sms.received, parsed). It never pays, refunds or moves
   money; agents pay with the card the customer gives them. Works with agents built elsewhere, which use the persona's
   inbox and number as their contact details at checkout. Owns "ai receipt matching" and "ai agent receipts" (Google
   suggestions, 23 Nov: "ai receipt matching", "receipt matching"; "ai agent receipt" is thin); "email receipt data"
   stays with the funds post. Invoice collector (Work behind logins) signs in to vendor portals; this is the email side.
   No competitor named. Screen: ledger. Ashgrove Kitchens, a group of 40 kitchens, and its suppliers are invented, at
   .example. The run: Packwell order PW-20931 confirmed at £398.00 (Mon 09:14), out for delivery Tue 07:40, delivered
   Tue 13:02, receipt £412.80 = £398.00 + £14.80 delivery (Tue 14:22), flagged 14:23; 214 orders that week across 40
   suppliers, every other one matched. Example. */

export const recipe: Recipe = {
  id: 'ledger',
  slug: 'order-receipt-ledger',
  name: 'Order and receipt ledger',
  group: 'Buy, book and order',
  line: 'Every confirmation, receipt and delivery text your buying agents get, matched to its order in one ledger.',
  gets: 'Each order with its confirmation, receipt and delivery updates, matched by order number, and a flag in Slack when they don’t agree.',
  kit: [
    'An inbox and a number for each buying agent',
    'Every confirmation, receipt and delivery text read as it lands',
    'Order, merchant, amount and date taken from each one',
    'Each matched to its order, by order number and merchant',
    'A flag when an amount differs or a receipt is missing',
    'One Google Sheet, Slack or your webhook',
  ],
  build: {
    line: 'An inbox and a number per buying agent, every email.received and sms.received read into order, merchant, amount and date, and a blueprint.result for each order matched or flagged.',
    code: `await obsession.blueprints.run('order-receipt-ledger', {
  agents: ['reorder-agent', 'travel-agent'],
  sheet: 'Orders, November',
  flagTo: 'slack:#finance',
})
obsession.on('blueprint.result', async (e) => {
  if (e.matched) await postToLedger(e.order) // your accounting system
})`,
    events: [
      { kind: 'email.received', text: 'A confirmation, receipt or invoice on the agent’s own inbox, read into order, merchant, amount and date.' },
      { kind: 'sms.received', text: 'A shipping, delivery or collection text on the agent’s own number, added to its order.' },
      { kind: 'blueprint.result', text: 'The order matched, or flagged with the reason, such as a receipt higher than its confirmation.' },
    ],
  },

  meta: {
    path: '/blueprints/order-receipt-ledger',
    title: 'Match every receipt to the order your AI agent placed',
    description:
      'AI receipt matching for buying agents: every confirmation, receipt and delivery text lands in one ledger, matched to its order and flagged when they differ.',
    answer:
      'Order and receipt ledger gives each buying agent its own inbox and number. It reads every confirmation, receipt and delivery text as it lands and matches each to its order in one sheet. When a receipt doesn’t match its order, finance sees it in Slack that day.',
    ogImage: '/og/order-receipt-ledger.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Order and receipt ledger', path: '/blueprints/order-receipt-ledger' },
    ],
  },

  hero: {
    headline: 'Match every receipt and delivery text to the order your AI agent placed.',
    sub: 'Order and receipt ledger gives each buying agent its own inbox and number. It reads every confirmation, receipt and delivery text as it lands and matches each to its order in one sheet. When a receipt doesn’t match its order, finance sees it in Slack that day.',
    screen: 'ledger',
    capture: {
      kind: 'waitlist',
      source: 'recipe-ledger-hero',
      button: 'Start free',
      interest: 'ledger',
    },
  },

  buyer: 'For finance and procurement teams whose AI agents buy, and the engineers who build those agents.',
  unit: 'order matched',
  per: 'buying agent',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['Your first 25 orders matched, for 1 buying agent', 'An inbox and a number for its receipts and texts', 'Every order in a Google Sheet'] },
    { name: 'Starter', includes: ['Every order 1 buying agent places', 'A flag in Slack when a receipt doesn’t match', 'A list every Monday of receipts still missing'] },
    { name: 'Team', includes: ['Agents for reorders, travel and subscriptions, in one ledger', 'Each agent with its own inbox and number', 'Each matched order sent to your accounting system by webhook'] },
    { name: 'Scale', includes: ['An inbox and a number for every buying agent you run', 'Each team’s or client’s orders kept apart in your event log'] },
  ],

  run: {
    tab: 'Ashgrove’s buying agents, this week',
    recipe: 'ledger',
    task: 'Read every confirmation, receipt and delivery text our reorder and travel agents get. Match each to its order in the Orders sheet, and send any receipt that doesn’t match its confirmation to #finance.',
    targets: 'Ashgrove Kitchens’ reorder agent and travel agent, each on its own inbox and number',
    journey: ['A confirmation lands', 'Read order, merchant, amount and date', 'Match the receipt and delivery texts', 'Flag what doesn’t match'],
    schedule: 'Always on',
    report: 'The Orders sheet, and #finance for flags',
    kit: ['2 buying agents', '2 inboxes and 2 numbers', 'Ashgrove’s Orders sheet', 'Slack #finance'],
    events: [
      { time: 'Mon 09:14', text: 'The reorder agent buys 40 cases of takeaway boxes on packwell.example with Ashgrove’s card. The confirmation reaches its inbox: order PW-20931, £398.00.' },
      { time: 'Mon 09:15', text: 'A row lands in the Orders sheet: Packwell, PW-20931, £398.00, ordered Monday.' },
      { time: 'Tue 07:40', text: 'A text on the agent’s number: PW-20931 is out for delivery to the Riverside kitchen.' },
      { time: 'Tue 13:02', text: 'A second text says it was delivered, and the order’s delivery column fills in.' },
      { time: 'Tue 14:22', text: 'The receipt arrives by email: £412.80, with £14.80 for delivery that the confirmation didn’t show.' },
      { time: 'Tue 14:23', text: 'Flagged in #finance: the receipt for PW-20931 is £14.80 higher than its confirmation, with both emails attached.' },
    ],
    finding: 'Packwell’s receipt for PW-20931 came to £412.80, £14.80 more than the £398.00 confirmed. Every other order that week matched its receipt, across 40 suppliers.',
    fix: 'Finance had both emails side by side in #finance the same afternoon, and raised the delivery charge with Packwell before month end.',
    ledger: '214 orders that week, each with its confirmation, receipt and delivery texts, dated.',
  },

  steps: [
    {
      title: 'Give each agent an inbox and a number',
      line: 'New ones from Obsession, or set them as the contact details an agent you built elsewhere uses at checkout.',
    },
    {
      title: 'Choose where orders land',
      line: 'A Google Sheet, Slack, or your accounting system by webhook, with the columns you want.',
    },
    {
      title: 'It reads and matches',
      line: 'Each confirmation, receipt and delivery text is read as it lands and matched to its order.',
    },
    {
      title: 'Finance sees what doesn’t match',
      line: 'A receipt higher than its order, or one still missing, reaches Slack that day.',
    },
  ],

  checks: [
    {
      group: 'What it reads',
      items: [
        { title: 'Order confirmations', line: 'Order number, merchant, items, amount and date, from the email itself.' },
        { title: 'Receipts and invoices', line: 'The total charged, tax and delivery, from the email or its attached PDF.' },
        { title: 'Delivery texts and emails', line: 'Shipped, out for delivery and delivered, each dated against its order.' },
        { title: 'Booking confirmations', line: 'Flights, hotels and trains, with the traveller, the dates and the amount.' },
        { title: 'Refunds and changes', line: 'A refund notice or a changed booking, added to the order it belongs to.' },
      ],
    },
    {
      group: 'What it matches',
      items: [
        { title: 'Receipt to confirmation', line: 'The two amounts compared, with any difference named, such as a delivery charge.' },
        { title: 'Order to delivery', line: 'Each order’s delivery date, and any order still not delivered after the date promised.' },
        { title: 'Missing receipts', line: 'Orders with a confirmation and no receipt after the days you set.' },
        { title: 'Duplicates', line: 'The same order number confirmed twice, flagged the day it happens.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Its own inboxes and numbers', line: 'It reads only what reaches each agent’s own inbox and number, or what you forward to them.' },
        { title: 'Money', line: 'It never pays, refunds or moves money. It records what merchants send.' },
        { title: 'Every email kept', line: 'Each confirmation and receipt kept exactly as it arrived, for as long as your plan keeps events.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every order ends matched, or in front of finance with the reason.',
    items: [
      { format: 'One row per order', line: 'Order number, merchant, amount, dates and status, in your sheet.' },
      { format: 'The emails themselves', line: 'Each confirmation and receipt linked from its row, exactly as it arrived.' },
      { format: 'Flags', line: 'In Slack when an amount differs, a receipt is missing or a delivery is late.' },
      { format: 'Month end', line: 'Every order for the month with its receipt, ready for your accounting system.' },
      { format: 'Webhooks', line: 'Each matched order, for your accounting or spend system.' },
      { format: 'By agent and supplier', line: 'What each buying agent spent, and with which supplier, this week and this month.' },
    ],
  },

  settings: [
    { k: 'Buying agents', v: 'Each with its own inbox and number, from Obsession or as the contact details of an agent you built' },
    { k: 'Reads', v: 'Order confirmations, receipts, invoices, booking confirmations and delivery texts' },
    { k: 'Matches by', v: 'Order number and merchant, then amount and date' },
    { k: 'Flags', v: 'An amount that differs, a receipt missing after 3 days, a delivery later than promised' },
    { k: 'Columns', v: 'Order, merchant, amount, tax, delivery, card ending, dates and status' },
    { k: 'Where it lands', v: 'Google Sheets, Slack, a webhook or the API' },
    { k: 'Kept for', v: 'As long as your plan keeps events' },
  ],

  table: {
    heading: 'Receipts in a shared mailbox wait for month end. Receipts on each agent’s own inbox are matched as they land.',
    cols: ['A shared mailbox', 'With Order and receipt ledger'],
    rows: [
      { label: 'An order confirmation', values: ['Somewhere in a shared inbox', 'A row in your sheet, the minute it lands'] },
      { label: 'A receipt higher than the order', values: ['Found at month end, if at all', 'Flagged in Slack the same day'] },
      { label: 'A missing receipt', values: ['Chased in the last week of the month', 'Listed every Monday'] },
      { label: 'A delivery text', values: ['On someone’s phone', 'On the agent’s number, beside its order'] },
      { label: 'Which agent bought what', values: ['Pieced together from card statements', 'One ledger, by agent and supplier'] },
      { label: 'Month end', values: ['Receipts matched by hand', 'Every order already matched'] },
    ],
  },

  faq: {
    heading: 'Every order your agents place, with its confirmation, receipt and delivery beside it.',
    items: [
      {
        q: 'What is AI receipt matching?',
        a: 'Software that reads each receipt and matches it to the order it belongs to. Order and receipt ledger does it for orders AI agents place. Each agent has its own inbox and number, so every confirmation, receipt and delivery text lands where it can be matched.',
      },
      {
        q: 'Does it work with buying agents we built ourselves?',
        a: 'Yes. Give each agent an Obsession inbox and number, and use them as its contact details when it checks out. Every confirmation and text then reaches the ledger, whatever runs the agent.',
        link: { label: 'See inboxes for AI agents', to: '/email' },
      },
      {
        q: 'Does the ledger pay for anything or hold money?',
        a: 'No. Your agents pay with the card you give them, and the ledger records what merchants send back. An agent without a card stops before payment, and Obsession never issues cards or holds money.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'Where do matched orders go?',
        a: 'To a Google Sheet, Slack, or your accounting or spend system by webhook. Each row links to the emails and texts it came from.',
      },
      {
        q: 'Can procurement use it as well as finance?',
        a: 'Yes. Each row shows the supplier, the amount and the days from order to delivery, so you can watch spend under contract and time per order by agent and supplier.',
      },
      {
        q: 'Can it read travel bookings too?',
        a: 'Yes. Flight, hotel and train confirmations and every change email join the ledger with the traveller, the dates and the amount.',
        link: { label: 'See agentic commerce infrastructure', to: '/use-cases/agentic-commerce' },
      },
      {
        q: 'What does a developer get?',
        a: 'Each email.received and sms.received, already read into order, merchant, amount and date, and a blueprint.result when an order is matched or flagged. Send them anywhere from your own handler.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'What does Order and receipt ledger cost?',
        a: 'It’s billed on the pieces it uses, at list rates. That’s an inbox and a number for each buying agent, and the model tokens that read each email and text. Waiting between orders costs nothing.',
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'See every order your AI agents place, matched to its receipt the day it lands.',
    sub: 'Try it on the Free plan with your first 25 orders, and watch receipts matched and days to close.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-ledger-final',
      button: 'Start free',
      interest: 'ledger',
    },
    link: { label: 'More blueprints to buy, book and order', to: '/blueprints/buy-book-and-order' },
  },
}
