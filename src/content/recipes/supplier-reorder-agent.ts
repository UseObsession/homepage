import type { Recipe } from '../types'

/* Supplier reorder agent (/blueprints/supplier-reorder-agent). Buy, book and order. Screen: reorder, drawn for Lantern
   Kitchen, an invented restaurant group with 18 sites: on Tuesday at 06:00 its stock sheet shows 6 items under their
   reorder level. Signed in with its own supplier accounts, the agent orders cups and lids from Packmere (4,000 each,
   £248.00 + £164.00 = £412.00, delivery Thursday), degreaser and blue roll from Scourwell (24 x £5.60 + 60 x £2.55 =
   £287.40) and oat milk from Kilnby Dairy (120 x £1.35 = £162.00), both delivering Wednesday, with the company card:
   3 orders, £861.40. Corvel Coffee's house blend shows £19.60 a kilo against the agreed £18.00 (9% over), so 40 kilos
   (£784.00) are held for a person in #purchasing at 06:15. Every supplier name is invented. Agentic commerce plan
   (23 Nov 2026, _research/seo/agentic-commerce-23nov/PLAN.md §3). Owns "ai purchasing agent", with "automated
   reordering system" (Google suggestions, 23 Nov); "ai procurement agent", "ai buying agent" and "agentic ai
   procurement" stay with the purchasing guide (article 5), which this page should link once it ships. Rules kept: it
   signs in only with supplier accounts the customer owns, pays only with the card the customer gives it and stops
   before payment without one; a bank check waits for the cardholder; it stops at any identity check; a CAPTCHA or bot
   block stops the order and is reported; it says it's an AI to a person. No competitor or competitor's customer is
   named. */

export const recipe: Recipe = {
  id: 'reorder',
  slug: 'supplier-reorder-agent',
  name: 'Supplier reorder agent',
  group: 'Buy, book and order',
  line: 'Reorders from the supplier you set when stock falls under its level, pays with your card and logs the delivery date.',
  gets: 'Every reorder placed at your agreed price, with its confirmation and delivery date, and anything over the price held for a person.',
  kit: [
    'A persona for your purchasing desk, with its own inbox and number',
    'A browser kept signed in to each supplier’s site, with your accounts',
    'Your stock sheet or stock system, read each morning or on a webhook',
    'Each item’s reorder level, quantity, supplier and agreed price',
    'The company card you give it, for orders inside your limits',
    'Every confirmation and delivery update, dated on the order',
  ],
  build: {
    line: 'A webhook from your stock system starts a reorder, and each confirmation and delivery update comes back as an event your code can handle.',
    code: `await obsession.blueprints.run('supplier-reorder-agent', {
  stock: { webhook: 'stock.below_level' },
  rules: { maxOverAgreedPrice: '3%', approveOver: 1000 },
})
obsession.on('email.received', async (e) => {
  if (e.data.deliveryDate) await stock.setDue(e.data.order, e.data.deliveryDate)
})`,
    events: [
      { kind: 'page.visited', text: 'Each supplier page the browser opens, from the basket to the order confirmation, with its screenshot.' },
      { kind: 'email.received', text: 'The supplier’s order confirmation, dispatch note and delivery update, in the persona’s own inbox.' },
      { kind: 'sms.received', text: 'A delivery text or a supplier’s login code, at the persona’s own number.' },
      { kind: 'blueprint.result', text: 'Each reorder: placed, held for a person or out of stock, with its price against your agreed price.' },
    ],
  },

  meta: {
    path: '/blueprints/supplier-reorder-agent',
    title: 'Reorder supplies with an AI purchasing agent when stock runs low',
    description:
      'An AI purchasing agent reorders from your suppliers when stock falls under its level, at your agreed price, with your card, and logs each delivery date.',
    answer:
      'Supplier reorder agent reads your stock sheet or stock system, and when an item falls under its reorder level it orders from the supplier you set. It pays with your card at your agreed price and logs the confirmation and delivery date.',
    ogImage: '/og/supplier-reorder-agent.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Supplier reorder agent', path: '/blueprints/supplier-reorder-agent' },
    ],
  },

  hero: {
    headline: 'Reorder supplies with an AI purchasing agent the morning stock runs low.',
    sub: 'Supplier reorder agent reads your stock sheet or stock system, and when an item falls under its reorder level it orders from the supplier you set. It pays with your card at your agreed price and logs the confirmation and delivery date.',
    screen: 'reorder',
    capture: {
      kind: 'waitlist',
      source: 'recipe-reorder-hero',
      button: 'Start free',
      interest: 'reorder',
    },
  },

  buyer: 'For procurement and operations teams at multi-site businesses, such as restaurant groups, clinic groups, retailers and facilities teams.',
  unit: 'reorder',
  per: 'supplier',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['3 reorders at 1 supplier, paid with your card', 'Each order’s confirmation and delivery date', 'Anything over your agreed price, held'] },
    { name: 'Team', includes: ['Your stock sheet read every morning', 'A Slack post of each morning’s orders and delivery dates', 'Orders over your limit sent for approval first'] },
    { name: 'Business', includes: ['A supplier and agreed price for every item', 'A second supplier when the first is out of stock', 'Receipts matched to each order for finance'] },
    { name: 'Scale', includes: ['Every site’s stock, from your stock system by webhook', 'A monthly report of spend under contract and stockouts'] },
  ],

  run: {
    tab: 'Supplies for 18 sites, every morning',
    recipe: 'reorder',
    task: 'Every morning at 06:00, read Lantern Kitchen’s stock sheet for 18 sites and reorder each item under its level from the supplier set for it, with the company card. Hold anything above the agreed price for a person.',
    targets: '4 supplier sites, signed in with Lantern Kitchen’s own accounts',
    journey: ['Read the stock sheet', 'Order from the set supplier', 'Check the agreed price', 'Log the confirmation and delivery date'],
    schedule: 'Every morning at 06:00',
    report: 'Each order in #purchasing by 06:15, and the delivery dates in the stock sheet',
    kit: ['1 persona · Lantern Kitchen purchasing', '1 inbox and number for confirmations', 'A browser, signed in to 4 suppliers', 'The stock sheet and the company card'],
    events: [
      { time: 'Tue 06:00', text: 'The stock sheet shows 6 items under their reorder level across 18 sites.' },
      { time: 'Tue 06:02', text: 'Packmere: 4,000 cups and 4,000 lids at the agreed prices, £412.00 on the company card.' },
      { time: 'Tue 06:04', text: 'Packmere’s confirmation PM-88104 lands in the persona’s inbox, with delivery on Thursday.' },
      { time: 'Tue 06:09', text: 'Scourwell and Kilnby Dairy ordered: degreaser, blue roll and oat milk for £449.40, both delivering Wednesday.' },
      { time: 'Tue 06:11', text: 'Corvel Coffee shows its house blend at £19.60 a kilo against the agreed £18.00. That order is held, not placed.' },
      { time: 'Tue 06:15', text: '3 orders worth £861.40 go to #purchasing, with the held coffee order for a person to approve.' },
    ],
    finding: 'Every item but the coffee was reordered by 06:09 at its agreed price. Corvel Coffee’s house blend came in 9% above the agreed price, so it waited for a person.',
    fix: 'The held order sits in #purchasing with the supplier’s page and the agreed price beside it, so a person can approve it or switch supplier before the coffee runs out.',
    ledger: 'One morning at Lantern Kitchen, which sends about 900 reorders a month to 40 suppliers, every confirmation kept.',
  },

  steps: [
    { title: 'Connect your stock', line: 'A Google Sheet, your stock system by webhook or the API, with each item’s reorder level.' },
    { title: 'Set the rules', line: 'For each item, the supplier, quantity and agreed price, and the limit above which a person approves.' },
    { title: 'It reorders at the supplier', line: 'Signed in with your account, it orders the set quantity and pays with the card you give it.' },
    { title: 'Every order lands where you work', line: 'The confirmation and delivery date, in Slack, the stock sheet or your stock system by webhook.' },
  ],

  checks: [
    {
      group: 'Before it orders',
      items: [
        { title: 'Stock under level', line: 'Each item’s count against its reorder level, read each morning or the moment your stock system sends it.' },
        { title: 'The right supplier', line: 'The supplier you set for each item, and a second one when the first is out of stock.' },
        { title: 'Your agreed price', line: 'The price in the basket against your agreed price, within the tolerance you set.' },
        { title: 'Order limits', line: 'Any order over the limit you set goes to a person in Slack first.' },
        { title: 'Delivery address', line: 'Each site’s own address, as saved in your supplier account.' },
      ],
    },
    {
      group: 'After it orders',
      items: [
        { title: 'Confirmation', line: 'The order number and total, from the supplier’s own email.' },
        { title: 'Delivery date', line: 'The promised date, and every dispatch note and delivery update after it.' },
        { title: 'Late deliveries', line: 'An order past its promised date is flagged with the supplier’s last update.' },
        { title: 'Receipts', line: 'Each receipt matched to its order and its card charge, for finance.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Your accounts', line: 'It signs in only with supplier accounts your company owns.' },
        { title: 'Payment', line: 'It pays only with the card you give it, and stops before payment without one. When the card’s bank asks for approval, the order waits for the cardholder.' },
        { title: 'Identity and bot checks', line: 'It stops at any identity check and never gets round a CAPTCHA or a bot block. That order goes to a person with the screenshot.' },
        { title: 'People', line: 'When it writes to a supplier, it says it’s an AI ordering for your company.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every reorder, priced and dated, in the tools your team already opens.',
    items: [
      { format: 'Slack', line: 'Each morning’s orders, totals and delivery dates, and anything held for a person.' },
      { format: 'The stock sheet', line: 'Each item marked as ordered, with its order number and delivery date.' },
      { format: 'Deliveries', line: 'What arrives at each site, and on which day.' },
      { format: 'Receipts', line: 'Every receipt matched to its order, ready for month end.' },
      { format: 'Webhook', line: 'Each order and delivery update into your stock or finance system as it lands.' },
      { format: 'A monthly report', line: 'Spend under contract, time per order and stockouts, by site and supplier.' },
    ],
  },

  settings: [
    { k: 'Stock', v: 'A Google Sheet, your stock system by webhook, or the API' },
    { k: 'Reorder levels', v: 'A level and a quantity for each item, at each site' },
    { k: 'Suppliers', v: 'A supplier for each item and a second if you want one, with your company’s accounts' },
    { k: 'Agreed prices', v: 'Each item’s agreed price, and how far over it the agent may order' },
    { k: 'Payment', v: 'The company card you give it; without one it stops before payment' },
    { k: 'Approvals', v: 'Orders over your limit, or over the agreed price, go to a person in Slack' },
    { k: 'How often', v: 'Every morning at 06:00, or the moment your stock system sends a count' },
    { k: 'Where it lands', v: 'Slack, the stock sheet, a webhook or a monthly report' },
  ],

  table: {
    heading: 'Your team opens Slack at 08:00 and finds the morning’s reorders placed and dated.',
    cols: ['By hand', 'With Supplier reorder agent'],
    rows: [
      { label: 'Spotting low stock', values: ['Someone counts and remembers', 'Read every morning against each level'] },
      { label: 'Placing the order', values: ['A login per supplier, a basket per site', 'Ordered at the set supplier by 06:15'] },
      { label: 'The agreed price', values: ['Missed when the supplier changes it', 'Checked in the basket, held when it’s over'] },
      { label: 'Confirmations', values: ['In one buyer’s inbox', 'On the order, in one place'] },
      { label: 'Delivery dates', values: ['Chased when stock runs out', 'Logged with every update'] },
      { label: 'Receipts for finance', values: ['Gathered at month end', 'Matched to each order as it’s placed'] },
    ],
  },

  faq: {
    heading: 'Before it places your first order.',
    items: [
      {
        q: 'What can an AI purchasing agent buy for a business today?',
        a: 'Supplier reorder agent reorders the supplies you already buy, from the supplier you set, when stock falls under its level. Packaging, cleaning, food and office supplies are ordered at your agreed price with your card. New suppliers and anything off contract stay with your team.',
        link: { label: 'See agentic commerce infrastructure', to: '/use-cases/agentic-commerce' },
      },
      {
        q: 'How does it pay?',
        a: 'With the company card you give it, and only within the limits you set. Without a card it stops before payment and sends the basket to a person. When the card’s bank asks for approval, the order waits for the cardholder. Obsession doesn’t issue cards or hold money.',
      },
      {
        q: 'What if a supplier has raised the price?',
        a: 'It compares the basket with your agreed price. Anything over the tolerance you set is held, not ordered, and goes to a person in Slack with the supplier’s page and your agreed price beside it.',
      },
      {
        q: 'Whose supplier accounts does it use?',
        a: 'Only accounts your company owns. Each supplier’s login codes reach the persona’s own inbox or number, so ordering never waits on one person’s phone. It stops at any identity check and never gets round a CAPTCHA or a bot block.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'We already have purchasing software. Where does this fit?',
        a: 'Many purchasing tools send orders to suppliers that take them electronically. Supplier reorder agent covers the suppliers your team still orders from on their website, and its orders can feed the same system by webhook.',
      },
      {
        q: 'How do our engineers build on it?',
        a: 'A webhook from your stock system starts it with obsession.blueprints.run, and each confirmation and delivery update reaches your code as email.received. You can also drive the browser yourself with the same persona.',
        link: { label: 'The API and MCP', to: '/developers' },
      },
      {
        q: 'How many suppliers and sites can it cover?',
        a: 'As many as you set. That can be one site’s main suppliers, every supplier a group of sites orders from, or hundreds of reorders a month across dozens of suppliers.',
      },
      {
        q: 'What should we watch once it runs?',
        a: 'Stockouts, spend under contract and time per order, and for finance, receipts matched and days to close. The stock sheet dates every order and delivery, so you can see what it does to each.',
      },
      {
        q: 'What does Supplier reorder agent cost?',
        a: 'It’s billed on the pieces it uses, at list rates: browser time for each order, plus an inbox and a number for the purchasing desk. The supplies go on your card, never through Obsession.',
        link: { label: 'See browsers for AI agents', to: '/browser' },
      },
    ],
  },

  final: {
    heading: 'Reorder every supply at your agreed price, before it runs out.',
    sub: 'Try it on the Free plan with 3 reorders at 1 supplier.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-reorder-final',
      button: 'Start free',
      interest: 'reorder',
    },
    link: { label: 'More blueprints to buy, book and order', to: '/blueprints/buy-book-and-order' },
  },
}
