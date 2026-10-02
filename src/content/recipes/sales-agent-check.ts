import { capture as form } from '../capture'
import type { Recipe } from '../types'

/* WRITER: fill. Replaces VERIFY.md 6.4 (Checkout agent check): a sales or shopping agent quoting wrong prices, stopping before payment. Screen: salescheck (Your company; WhatsApp and site chat, daily; Mon 07:01; Test customer 2 asks the Duo bundle price; the assistant says €89, in stock, 2 to 3 working days; checkout €89.00, stopped before payment, budget €0; 4 checks, 3 pass and 1 needs you: the price list says €189 at 07:00; up to 27 orders at risk from 27 bundle chats last week; says it’s AI, stock and delivery right). Outcome per VERIFY.md 6.4 was about €2,400 on 1 wrong price; recompute from the screen (27 x €100 = €2,700) and state its model. Every checkout stops before payment unless it’s the reader’s own store with a budget set.
   This file is a complete-shaped stub so the build passes: the id, slug, name, group, screen and meta path are
   final; every word below is a first pass to rewrite to the standard of support-bot-check.ts, ai-checkout-test.ts
   and mystery-shopper.ts (docs/REBUILD.md, VERIFY.md section 6 and 11). Match the screen's run, numbers and names
   exactly. No real AI agent check has run yet: the run is an example and says so. */

const roles = form.agent.roles

export const recipe: Recipe = {
  id: 'sales-agent',
  slug: 'sales-agent-check',
  name: 'Sales agent check',
  group: 'Check your AI agents',
  line: 'Asks your sales or shopping agent about prices, stock and delivery every day, and stops before payment.',
  gets: 'Every price, stock and delivery answer checked against your store, and the fix drafted for each wrong one.',
  kit: [
    'A declared AI test customer, named for your store',
    'Its own inbox and number',
    'Your price list, stock and delivery pages, captured each run',
    'WhatsApp, site chat and every channel it sells on',
    'A card capped at the budget you set, or none',
    'Every answer signed and dated',
  ],

  meta: {
    path: '/recipes/sales-agent-check',
    title: 'Sales agent check: catch your AI’s wrong prices · Obsession',
    description: 'Declared AI test customers ask your sales or shopping agent about prices, stock and delivery every day, check each answer and stop before payment.',
    answer: 'Sales agent check is an Obsession recipe. With the owner’s OK, declared AI test customers ask a store’s sales or shopping agent about prices, bundles, stock and delivery on chat and WhatsApp every day, check every answer against the store’s own price list and pages, and stop before payment unless the owner sets a budget.',
    ogImage: '/og/sales-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Sales agent check', path: '/recipes/sales-agent-check' },
    ],
  },

  hero: {
    headline: 'AI agents that ask your sales agent what it charges, every day.',
    sub: 'Declared test customers ask your AI sales agent on chat and WhatsApp about prices, stock and delivery, and check each answer against your store. Every checkout stops before payment.',
    screen: 'salescheck',
    capture: {
      kind: 'verify',
      source: 'recipe-sales-agent-hero',
      button: 'Check my AI agent free',
      micro: form.agent.micro,
      roles,
      interest: 'sales-agent',
    },
  },

  run: {
    tab: 'Example: your sales agent, daily',
    recipe: 'sales-agent',
    task: 'Every morning, ask our sales agent on WhatsApp and site chat what our bundles cost, whether they’re in stock and when they arrive. Check each answer against our store.',
    targets: 'Your sales agent: WhatsApp and site chat',
    journey: ['Say it’s AI, ask a price', 'Ask about stock and delivery', 'Go to checkout, stop before payment', 'Check against your store'],
    schedule: 'Daily at 07:00',
    report: 'A Slack alert and a signed record',
    kit: ['Agent ID, declared as AI', '1 inbox', '1 phone number', 'Budget €0, stops before payment'],
    events: [
      { time: 'Mon 07:00', text: 'Your price list, stock feed and delivery page captured.' },
      { time: 'Mon 07:01', text: 'Test customer 2 says it’s AI and asks the price of the Duo bundle.' },
      { time: 'Mon 07:01', text: '“The Duo bundle is €89, in stock, 2 to 3 working days.” Your price list says €189.' },
      { time: 'Mon 07:02', text: 'Checkout shows €89.00. It stops before payment.' },
      { time: 'Mon 07:03', text: '27 chats asked about the bundle last week.' },
    ],
    finding: 'Your sales agent quotes the Duo bundle at €89. Your price list says €189.',
    fix: 'The bundle price drafted for your agent’s settings. Live after your OK.',
    ledger: 'Example run. 4 checks, 3 passed, every answer signed and dated.',
  },

  steps: [
    { title: 'Point it at your AI agent', line: 'The chat page, phone number, inbox or portal it answers on: yours, or a client’s with their OK. Add your policies and prices.' },
    { title: 'Approve the checks', line: 'Obsession writes them from your policies and the rules where you sell. Change any check, then approve.' },
    { title: 'Declared test customers use it', line: 'Each says it’s AI and who it works for, with its own inbox, number and account. Every day, and after every update.' },
    { title: 'You get a verdict and the fix', line: 'Each check passes or fails, with the proof and what happened next. The fix comes drafted, live after your OK.' },
  ],

  checks: [
    {
      group: 'What it quotes',
      items: [
        { title: 'Prices and bundles', line: 'Every price against your price list, captured the same minute.' },
        { title: 'Stock and delivery', line: 'Against your stock feed and delivery page.' },
        { title: 'Says it’s AI', line: 'In its first message.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Before payment', line: 'Every checkout, unless it’s your own store and you set a budget.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every wrong price comes back with its proof and its fix.',
    items: [
      { format: 'A verdict per check', line: 'Passed or needs you, with the source it was checked against.' },
      { format: 'The chat', line: 'Every message, timed, beside your price list.' },
      { format: 'The fix, drafted', line: 'The right price for your agent’s settings, live after your OK.' },
    ],
  },

  forWho: [
    { audience: 'marketing', line: 'Know your sales agent quotes this week’s offer, not last month’s.' },
    { audience: 'agencies', line: 'A daily price check on every client’s sales agent, with their OK.' },
  ],

  faq: {
    heading: 'Every test customer says it’s AI. Every checkout stops before payment.',
    items: [
      { q: 'Does it say it’s AI?', a: 'Yes. Every test customer says it’s an AI test customer and who it works for, so your team can see it’s a test.' },
      { q: 'Will it try to trick your agent?', a: 'No. It asks what an ordinary customer asks. No jailbreaks, prompt tricks or flattery.' },
      { q: 'Is a passed check a guarantee?', a: 'No. It’s dated evidence of what happened on each check.' },
    ],
  },

  final: {
    heading: 'Catch a wrong price before 27 customers pay it.',
    sub: 'Your first check is free: 3 test customers on 1 channel, and your report within 4 days. Your store, or a client’s with their OK.',
    capture: {
      kind: 'verify',
      source: 'recipe-sales-agent-final',
      button: 'Check my AI agent free',
      micro: 'Leave it blank to join the waitlist instead. We keep your email and your AI agent’s address to run the check and tell you about Obsession.',
      orWaitlist: true,
      roles,
      interest: 'sales-agent',
    },
  },
}
