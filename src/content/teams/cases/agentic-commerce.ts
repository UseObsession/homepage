import { personaCostLine, plans } from '../../prices'
import type { TeamPage } from '../types'

/* Agentic commerce infrastructure (/use-cases/agentic-commerce, 23 Nov 2026, _research/seo/agentic-commerce-23nov/
   PLAN.md §3 and WRITER_BRIEF.md): buy, book and order, for teams building agents that buy supplies, book travel and
   place orders (procurement, travel and finance software, consumer assistants), with the store side as one use. Owns
   "agentic commerce infrastructure" and "ai agent payment infrastructure" (Google suggestions, 23 Nov); the head term
   "agentic commerce" stays with /blog/agentic-commerce-for-merchants until the plan's Search Console check. Payment
   follows the product lines: the agent pays only with a card the customer gives it, stops before payment without one,
   waits for the cardholder when a bank asks for approval, and never issues cards or holds money.
   Protocols are named only to say what they cover, as in the merchant guide; no partnership is claimed. No competitor or
   competitor's customer is named, and no figure is borrowed. Corrin, its clinics and its supplier are invented. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const path = '/use-cases/agentic-commerce'

const sub =
  'Obsession, the toolkit for AI agents, gives every buying agent its own identity, with an inbox for receipts, a number for delivery texts and a signed-in browser. It pays with the payment card you give it, and every order lands in one event log.'

export const useCase: TeamPage = {
  id: 'agentic-commerce',
  kind: 'case',
  name: 'Agentic commerce infrastructure',
  meta: {
    path,
    title: 'Agentic commerce infrastructure for AI agents that buy',
    description:
      'Agentic commerce infrastructure for AI agents that buy, book and order: an identity, an inbox for receipts, a number and a browser, on one API and one bill.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Agentic commerce infrastructure', path },
    ],
  },

  hero: {
    pill: 'Teams building buying agents',
    headline: 'Agentic commerce infrastructure: an identity, inbox and number for every buying agent.',
    sub,
  },

  scene: {
    steps: [
      { icon: 'browser', label: 'The agent checks out on the supplier’s site' },
      { icon: 'mail', label: 'The confirmation reaches its inbox' },
      { icon: 'phone', label: 'Delivery texts reach its number' },
      { icon: 'record', label: 'The order is matched in your event log' },
    ],
    who: 'Buying agent 4 at corrin.example',
    note: 'Order, receipt and delivery matched',
    fleet: '12 agents, one per clinic',
    rows: [
      { at: 'Wed · 07:02', kind: 'page.visited', text: 'supplier.example/checkout · paid with Corrin’s card · $214.80 · screenshot saved' },
      { at: 'Wed · 07:03', kind: 'email.received', text: 'Order confirmation SO-88412 · 12 cases of gloves · $214.80' },
      { at: 'Thu · 16:40', kind: 'sms.received', text: 'Order SO-88412 has shipped, arriving Fri by 12:00' },
      { at: 'Fri · 11:18', kind: 'sms.received', text: 'Order SO-88412 delivered to the Eastgate clinic' },
      { at: 'Fri · 11:19', kind: 'blueprint.result', text: 'SO-88412 matched: order, receipt and delivery', tone: 'ok' },
    ],
    caption: 'One reorder from checkout to delivery: the page, the confirmation and each delivery text, dated in one log. Corrin, a clinic group, and its supplier are invented examples.',
  },

  uses: {
    heading: 'Every step of a purchase, from the first search to the return.',
    line: 'Every piece runs on one API and one bill, so the persona, its inbox, its number and its browser share one key and one event log.',
    items: [
      {
        kit: 'buy',
        name: 'Find and compare',
        line: 'The agent compares fares, rooms and supplier prices in a browser. It holds the options that fit your rules, each with a screenshot.',
        blueprint: 'travel-booking-agent',
        pieces: ['browser', 'personas'],
      },
      {
        kit: 'buy',
        name: 'Check out with your card',
        line: 'It checks out as a guest or in an account you own, and pays only with the card you give it. Without one, it stops before payment.',
        blueprint: 'supplier-reorder-agent',
        pieces: ['browser', 'personas'],
      },
      {
        kit: 'buy',
        name: 'Confirmations and receipts',
        line: 'Every order confirmation, receipt and invoice reaches the agent’s own inbox and is matched to its order, so none sits in a shared mailbox.',
        blueprint: 'order-receipt-ledger',
        pieces: ['email'],
      },
      {
        kit: 'buy',
        name: 'Delivery texts and codes',
        line: 'Sign-in codes, shipping updates and courier texts reach the agent’s own number, each dated beside its order.',
        pieces: ['phone'],
      },
      {
        kit: 'buy',
        name: 'Returns and changes',
        line: 'It starts a return or a booking change on the merchant’s page, answers the email that follows and keeps the label and the refund notice.',
        pieces: ['browser', 'email'],
      },
      {
        kit: 'buy',
        name: 'Your own checkout, as agents see it',
        line: 'For online stores: each morning a persona shops your site the way shoppers’ agents do and shows the step where it got stuck.',
        blueprint: 'agent-checkout-test',
        pieces: ['browser', 'email', 'phone'],
      },
    ],
  },

  blueprints: {
    heading: 'Hand the whole purchase to a blueprint.',
    line: 'Each runs without code and posts every order, booking and receipt to Slack, a sheet or your webhook.',
    slugs: ['supplier-reorder-agent', 'travel-booking-agent', 'order-receipt-ledger', 'agent-checkout-test'],
  },

  prices: ['inbox', 'number', 'sms', 'browser', 'persona', 'log'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Procurement lead', gets: 'Reorders placed with your chosen supplier on your card. Each confirmation and delivery date lands in one place.', watch: 'Spend under contract, time per order, stockouts' },
      { role: 'Travel manager', gets: 'Flights and hotels booked inside your policy. Every confirmation and change sits beside the request.', watch: 'Policy compliance, cost per trip, time to book' },
      { role: 'Finance controller', gets: 'Every receipt matched to its order and card charge before month end.', watch: 'Receipts matched, days to close' },
      { role: 'Ecommerce lead', gets: 'Your checkout shopped each morning as shoppers’ agents shop it, with the step that failed.', watch: 'Conversion from agent shoppers, failed agent checkouts' },
      { role: 'Engineers building buying agents', gets: 'A persona per agent, with an inbox, a number and a browser on one key. Every order event reaches your webhook.', watch: 'Order success rate, cost per order' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/leak-checks-for-ecommerce-stores', '/use-cases/imessage-ai-assistant', '/use-cases/ai-agent-for-freight-brokers'],
  },

  faq: {
    heading: 'Before your agent places its first order.',
    items: [
      {
        q: 'What does agentic commerce infrastructure cost?',
        a: `${personaCostLine} It costs nothing while it waits. Start on the Free plan, with no credit card, then ${orList(fees)} a month.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Where does Obsession sit in AI agent payment infrastructure?',
        a: 'Around the payment. Card networks, card issuers and protocols such as the Agentic Commerce Protocol (ACP) and the Agent Payments Protocol (AP2) cover how an agent pays and how a store accepts the order. Obsession covers what comes before and after the payment. The agent gets an identity, an inbox for the confirmation and a number for codes and delivery texts. Its browser handles stores with no agent checkout, and the event log keeps every step.',
        link: { label: 'Agentic commerce for merchants', to: '/blog/agentic-commerce-for-merchants' },
      },
      {
        q: 'How does a buying agent pay?',
        a: 'With the card you give it: a company card, a virtual card your finance team issues, or a card saved in an account you own. Without one, it stops before payment and the event log keeps the basket. When the card’s bank asks for approval, the order waits for the cardholder. It never uses fake payment details. Obsession never issues cards or holds money.',
      },
      {
        q: 'Whose details does the agent book and order with?',
        a: 'Yours. Traveller names, delivery addresses and loyalty numbers come from the travel profile or account you give it, and it never invents identity details. Order confirmations still reach the agent’s own inbox, so every receipt sits beside its order.',
      },
      {
        q: 'What happens when an order needs a person?',
        a: 'The order goes to someone on your team with its basket and a screenshot of the step, and every other order carries on. When the agent talks to a person, it says it’s an AI.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How do our engineers give each buying agent an identity?',
        a: 'Create a persona with obsession.personas.create({ inbox: true, phone: "US", browser: true }). Each order confirmation reaches your code as email.received and each delivery text as sms.received, about 50 ms after it lands.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
    ],
  },

  final: {
    heading: 'Give every buying agent its own identity, inbox and number.',
    capture: { kind: 'waitlist', source: 'case-agentic-commerce', button: 'Start free', interest: 'any' },
  },
}
