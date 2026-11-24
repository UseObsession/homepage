import { kitPathOf, kitsPath } from '../kitPaths'
import type { KitPage } from './types'

/* Buy, book and order (/blueprints/buy-book-and-order, 23 Nov 2026): agents buy supplies, book travel and place orders
   with their own identity, inbox, number and browser, pay with the card the customer gives them, and every
   confirmation, receipt and delivery update lands in the event log. The seventh type, from the Product Marketing book's
   job 7 and Seun's yes to own agentic commerce (_research/seo/agentic-commerce-23nov/PLAN.md). Owns "ai agents that
   buy" and its neighbours; the head term "agentic commerce" belongs to its guide. Stops before payment without a card,
   stops before payment without a card (the product lines on /agents). */

const sub =
  'Your agent buys supplies, books travel and places orders with its own identity, inbox, number and browser. It pays with the card you give it, and every confirmation, receipt and delivery update lands in your event log.'

const code = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// An identity a store can email, text and sign in
const buyer = await obsession.personas.create({
  inbox: true,
  phone: "US",
  browser: true,
})

// Every confirmation, receipt and delivery text, as it lands
await obsession.events.subscribe({ persona: buyer.id, events: ["email.received", "sms.received"] })`

export const buy: KitPage = {
  id: 'buy',
  name: 'Buy, book and order',
  meta: {
    path: kitPathOf.buy,
    title: 'AI agents that buy, book and order, with every receipt kept',
    description:
      'Give buying agents an identity, an inbox for every receipt, a number for codes and a browser for checkout. They pay with the card you give them.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: kitsPath },
      { name: 'Buy, book and order', path: kitPathOf.buy },
    ],
  },

  hero: { headline: 'Buy, book and order: every confirmation and receipt, kept.', sub },

  scene: {
    steps: [
      { icon: 'browser', label: 'The agent fills the basket and checks out' },
      { icon: 'mail', label: 'The confirmation lands in its inbox' },
      { icon: 'phone', label: 'Delivery texts reach its number' },
      { icon: 'record', label: 'Every order lands in your event log' },
    ],
    who: 'Purchasing agent 2 at a restaurant group with 18 sites',
    note: 'Basket to delivery date, in your sheet',
    fleet: '18 agents, one per site',
    rows: [
      { at: '09:12', kind: 'page.visited', text: 'supplies.example · 12 cases of takeaway boxes in the basket' },
      { at: '09:13', kind: 'page.visited', text: 'Checkout · paid with the group’s card ending 4417' },
      { at: '09:13', kind: 'email.received', text: 'Order SX-20931 confirmed · £318.40' },
      { at: '11:40', kind: 'sms.received', text: 'Your order ships tomorrow, arriving Thursday' },
      { at: '11:40', kind: 'webhook', text: 'Order, amount and delivery date added to your sheet', tone: 'ok' },
    ],
    caption: 'One reorder from basket to delivery date, every step kept. The restaurant group and supplier are invented examples.',
  },

  pieces: {
    heading: 'Everything a buying agent needs, except the money.',
    line: 'One identity a store can email, text and sign in, so every confirmation and code comes back to the agent that placed the order.',
    items: [
      { piece: 'personas', line: 'One name for the agent, across email, phone and browser.' },
      { piece: 'browser', line: 'A browser that stays signed in to each store and saves every page.' },
      { piece: 'email', line: 'An inbox for every confirmation, receipt and booking change.' },
      { piece: 'phone', line: 'A number for sign-in codes and delivery texts.' },
    ],
    prices: ['browser', 'inbox', 'number', 'log'],
  },

  blueprints: {
    heading: 'Ready-made jobs for agents that buy.',
    line: 'Test your checkout the way shoppers’ agents meet it, book travel inside your policy, reorder supplies when stock runs low, and match every receipt to its order.',
    slugs: ['agent-checkout-test', 'travel-booking-agent', 'supplier-reorder-agent', 'order-receipt-ledger'],
  },

  code: {
    heading: 'Give a buying agent its identity in one call.',
    line: 'Create the persona, give it your card when the job needs one, and hear every confirmation as it lands.',
    label: 'buyer.ts',
    code,
  },

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Procurement and operations', gets: 'Reorders placed with your card when stock runs low, each with its confirmation and delivery date.', watch: 'Stockouts, time per order, spend under contract' },
      { role: 'Travel managers', gets: 'Trips booked inside your policy, with every confirmation and change in one place.', watch: 'Policy compliance, cost per trip, time to book' },
      { role: 'Finance', gets: 'Every receipt matched to its order, with nothing chased by hand.', watch: 'Receipts matched, days to close' },
      { role: 'Ecommerce teams', gets: 'Your checkout tested every day the way shoppers’ agents meet it.', watch: 'Failed agent checkouts, conversion rate' },
      { role: 'Developers building buying agents', gets: 'An identity, inbox, number and browser for each agent, on one key.', watch: 'Orders completed, cost per order' },
    ],
  },

  examples: { heading: 'See it worked through.', paths: ['/use-cases/agentic-commerce'] },

  faq: {
    heading: 'Before your agent places its first order.',
    items: [
      { q: 'Can the agent pay?', a: 'Yes, with a card you give it. Without one, it stops before payment and hands the order to a person on your team.' },
      { q: 'Where do receipts go?', a: 'To the agent’s own inbox, then your event log, a sheet or your finance tool, each matched to its order.' },
      { q: 'What happens when an order needs a person?', a: 'The order goes to someone on your team with its basket and a screenshot of the step, and every other order carries on.' },
      { q: 'Does it need traveller or buyer details?', a: 'Only the ones you give it, such as a travel profile. It never invents any.' },
      { q: 'How do I start?', a: 'Pick a blueprint, or create a persona from code and give it the job. Both start on the Free plan.' },
    ],
  },

  final: {
    heading: 'Give your first buying agent its identity, free.',
    capture: { kind: 'waitlist', source: 'kit-buy', button: 'Start free', interest: 'any' },
  },
}
