import { capture as form } from '../capture'
import type { Recipe } from '../types'

/* Sales agent check (/recipes/sales-agent-check). Check your AI agents. It replaces VERIFY.md 6.4's Checkout agent
   check: a store's own AI sales or shopping agent quoting wrong prices, followed to checkout.
   Screen: salescheck (Your company; "WhatsApp · Site chat · daily"; Mon 07:01; Test customer 2, AI, for Your company:
   "AI test customer for Your company. Duo bundle price?"; the agent: "I'm the AI assistant. The Duo bundle is €89, in
   stock and arrives in 2 to 3 working days."; "Can I order now?"; checkout €89.00, stopped before payment, budget €0;
   4 checks, 3 pass and 1 needs you: the bundle price at 07:01, said €89 where the price list at 07:00 says €189, "Up to
   27 orders at risk · 27 bundle chats last week"; says it's AI, stock against the stock feed at 07:00 and delivery
   against the delivery page all pass; "With your OK · no jailbreaks"; the toast "Wrong price caught · fix drafted for
   your OK"). The screen's law reference beside "Says it's AI" stays off the page: no citations.
   Base: _research/verify/VERIFY.md 6.4 (the checks, the channels) and 11 (the red lines). No real AI agent check has
   run yet, so the run is an example and says so, and no Verify claim sits in proof.
   The three lines hold (system.md), and nothing else is written as a rule: every chat and checkout kept exactly as it
   arrived; the reader private unless they choose to be named; the law (every test customer says it's AI when it talks
   to a person and pays only with real payment details). The rest is the reader's setting: the budget (at €0 every
   checkout stops before payment, as in the example), haggling or adversarial questions, and when a fix goes live. The
   chat history is read through a connection the reader sets up; every test chat tagged, agreed with the vendor. A
   client's agent is named with the client's agreement once, in the FAQ. No vendor or product names: "your sales
   agent".
   Up-to-50 rule, no money promises (James and Seun, 3 Oct): the 1 modelled figure (up to 27 orders a week kept at the
   right price) carries its model in the same line: 27 Duo bundle chats a week, each quoted €89 where the price list
   says €189; if every chat became an order, 27 x 1 = 27 orders a week at €89, which a daily check finds the morning
   it starts. It matches the screen's "Up to 27 orders at risk" and the final's "not 27 orders later". The €189 and
   €89 stay as facts of the example, never as a sum kept. */

const roles = form.agent.roles

export const recipe: Recipe = {
  id: 'sales-agent',
  slug: 'sales-agent-check',
  name: 'Sales agent check',
  group: 'Check your AI agents',
  line: 'Asks your AI sales agent about prices, stock and delivery every day, checks each answer against your store and follows it to checkout.',
  gets: 'Every price, stock and delivery answer checked against your store, and the right answer drafted wherever it went wrong.',
  kit: [
    'An AI test customer, working for your store',
    'Its own inbox and WhatsApp number',
    'Your price list, stock feed and delivery page, captured each run',
    'Every channel your agent sells on',
    'A budget you set, or €0 to stop before payment',
    'Every answer kept with its receipt',
  ],

  meta: {
    path: '/recipes/sales-agent-check',
    title: 'Sales agent check: catch wrong AI prices daily · Obsession',
    description:
      'AI test customers ask your AI sales agent about prices, stock and delivery daily, check each answer against your store and follow it to checkout.',
    answer:
      'Sales agent check asks your AI sales agent what it charges, every day: test customers ask on chat about prices, stock and delivery, check each answer against your price list and follow it to checkout.',
    ogImage: '/og/sales-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Sales agent check', path: '/recipes/sales-agent-check' },
    ],
  },

  hero: {
    headline: 'AI agents that ask your AI sales agent what it charges.',
    sub: 'Sales agent check asks your AI sales agent what it charges, every day: test customers ask on chat about prices, stock and delivery, check each answer against your price list and follow it to checkout.',
    screen: 'salescheck',
    capture: {
      kind: 'verify',
      source: 'recipe-sales-agent-hero',
      button: 'Check my sales agent free',
      placeholder: 'Your store’s chat page',
      micro: form.agent.micro,
      roles,
      interest: 'sales-agent',
    },
  },

  run: {
    tab: 'Example: your sales agent, daily',
    recipe: 'sales-agent',
    task: 'Every morning, ask our sales agent on WhatsApp and site chat what our bundles cost, whether they’re in stock and when they arrive. Check each answer against our store, and stop before payment.',
    targets: 'Your sales agent: WhatsApp and site chat',
    journey: ['Say it’s AI, ask a price', 'Ask about stock and delivery', 'Go to checkout, stop before payment', 'Check against your store'],
    schedule: 'Daily at 07:00',
    report: 'A Slack alert and a signed record',
    kit: ['Agent ID, declared as AI', 'Its own WhatsApp number', 'Your price list and stock feed', 'Budget €0, stops before payment'],
    events: [
      { time: 'Mon 07:00', text: 'Your price list, stock feed and delivery page, captured.' },
      { time: 'Mon 07:01', text: 'Test customer 2 says it’s an AI test customer for your store and asks on WhatsApp what the Duo bundle costs.' },
      { time: 'Mon 07:01', text: '“I’m the AI assistant. The Duo bundle is €89, in stock and arrives in 2 to 3 working days.”' },
      { time: 'Mon 07:01', text: 'Stock and delivery match your feed and your delivery page. The price doesn’t: your price list says €189.' },
      { time: 'Mon 07:02', text: 'Checkout shows €89.00. Your budget is €0, so it stops before payment.' },
    ],
    finding: 'Your sales agent sells the Duo bundle at €89. Your price list says €189, and 27 chats asked about the bundle last week.',
    fix: 'The right price drafted for your agent’s settings. Live after your OK.',
    ledger: 'Example run. 4 checks, 3 passed, every answer signed and dated.',
  },

  steps: [
    {
      title: 'Point it at your sales agent',
      line: 'Your site chat, WhatsApp or text sales agent, or a client’s. Add your price list, stock feed and delivery page.',
    },
    {
      title: 'Approve the checks',
      line: 'Obsession writes them from your store and the rules where you sell: it says it’s AI, quotes today’s price, gets stock and delivery right, and shows every fee before payment. Change any check, then approve.',
    },
    {
      title: 'Test customers ask, then go to checkout',
      line: 'Each says it’s AI and who it works for, asks what your customers ask on every channel, and follows the answer to checkout. It pays with real payment details up to the budget you set, and at €0 stops before payment.',
    },
    {
      title: 'You get a verdict and the fix',
      line: 'Each answer passes or fails beside the price list, feed or page it was checked against, with the chats it puts at risk. The right answer comes drafted, live after your OK.',
    },
  ],

  checks: [
    {
      group: 'What it tells customers',
      items: [
        { title: 'Says it’s AI', line: 'In its first message, and truthfully whenever a customer asks.' },
        { title: 'Prices and bundles', line: 'Every price against your price list, captured the same minute.' },
        { title: 'Codes and offers', line: 'Every code it hands out, checked against your store: live, right and in date.' },
        {
          title: 'Stock and delivery',
          line: 'Every stock answer against your stock feed, and every delivery time and free delivery threshold against your delivery page.',
        },
      ],
    },
    {
      group: 'What happens next',
      items: [
        { title: 'The checkout total', line: 'Whether checkout shows the price it quoted, with every fee before payment.' },
        { title: 'The same answer everywhere', line: 'The same question on WhatsApp and site chat in the same minute, compared.' },
        { title: 'Within its authority', line: 'Whether it offers a price or a discount it isn’t allowed to, when an ordinary customer asks.' },
        { title: 'Returns', line: 'The returns window it gives, against your returns page.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Payment', line: 'Real payment details only, up to the budget you set. At €0, every checkout stops before payment.' },
        { title: 'Hard questions', line: 'What an ordinary customer asks, and haggling or adversarial questions if you want them.' },
        { title: 'Your figures', line: 'Every test chat tagged, agreed with your vendor first, so it stays out of your sales and your bill.' },
        { title: 'The record', line: 'Every chat and checkout kept exactly as it arrived.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every wrong price comes back with its proof, its reach and its fix.',
    items: [
      { format: 'A verdict per check', line: 'Passed or needs you, beside the price list, feed or page it was checked against.' },
      { format: 'The chat', line: 'Every message on every channel, timed, beside your price list as it read that minute.' },
      { format: 'The checkout', line: 'What checkout showed, captured at every step it reached.' },
      {
        format: 'What’s at risk',
        line: 'How many chats asked about the same product last week, from the chat history you connect.',
      },
      { format: 'The fix, drafted', line: 'The right answer written for your agent’s settings. Live when you approve it.' },
      {
        format: 'A record to share',
        line: 'A page and a PDF for your team, your vendor or your client, or an email, Slack, a sheet or a webhook. Every answer kept with its receipt.',
      },
    ],
  },

  settings: [
    { k: 'Sales agent', v: 'Yours, or one you run for a client' },
    { k: 'Channels', v: 'Site chat, WhatsApp, text and your app' },
    { k: 'Products', v: 'Your best sellers, bundles and this week’s offers' },
    { k: 'Sources', v: 'Your price list, stock feed, delivery and returns pages, captured each run' },
    { k: 'Budget', v: 'A cap you set, or €0 so every checkout stops before payment' },
    { k: 'Chat history', v: 'Connected by you, to count what a wrong answer puts at risk' },
    { k: 'Tagging', v: 'Every test chat tagged, agreed with your vendor first' },
    { k: 'How often', v: 'Daily, and after every price change or update' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Check your sales agent quotes this week’s offer and code, not last month’s.' },
    {
      audience: 'agencies',
      line: 'A daily price check on every client’s sales agent, and a record to show them, every answer with its receipt.',
    },
    { audience: 'founders', line: 'Know what your sales agent charges while you sleep, and hear the morning it gets a price wrong.' },
    {
      audience: 'developers',
      line: 'Run the checks from your code after every catalogue or prompt change, before a customer sees it.',
    },
  ],

  table: {
    heading: 'A wrong price in chat keeps selling at that price until someone notices.',
    line: 'Up to 27 orders a week kept at the right price: your agent quotes the €189 Duo bundle at €89, and 27 chats a week ask about it. If every chat orders, that’s 27 orders a week at €89. A daily check finds it the morning it starts.',
    cols: ['Today', 'With a daily check'],
    rows: [
      { label: 'A wrong price', values: ['Found when orders arrive at €89', 'Found the same morning, with the chat'] },
      { label: 'Stock and delivery', values: ['Trusted to match your feed', 'Checked against your feed every morning'] },
      { label: 'WhatsApp and site chat', values: ['Never compared', 'The same question, the same minute, compared'] },
      { label: 'Checkout', values: ['Nobody checks it matches the chat', 'Followed to checkout and checked against the chat'] },
      { label: 'After a price change', values: ['You hope the agent knows', 'Checked again the same day'] },
      { label: 'Evidence', values: ['A customer’s screenshot', 'Every answer kept with its receipt'] },
    ],
  },

  faq: {
    heading: 'Every test customer says it’s AI, and pays only with real details.',
    items: [
      {
        q: 'How do we stop our AI sales agent quoting the wrong price?',
        a: 'Catch it the morning it starts: Obsession’s Sales agent check asks your agent about prices, bundles and codes every day and checks each answer against your own price list, through to checkout.',
      },
      {
        q: 'Does Sales agent check buy anything?',
        a: 'Only if you set a budget. Then Sales agent check pays with real payment details, up to your cap. At €0, it stops every checkout before payment.',
      },
      {
        q: 'Does Sales agent check say it’s AI?',
        a: 'Yes. Every Sales agent check test customer says it’s an AI test customer working for your store, so your team can see it’s a test.',
      },
      {
        q: 'Will Sales agent check haggle or trick our agent?',
        a: 'Only if you want it to. Sales agent check asks what an ordinary customer asks, and you can add haggling or adversarial questions to see where your agent gives way.',
      },
      {
        q: 'What does Sales agent check compare answers with?',
        a: 'Sales agent check compares them with your price list, stock feed, delivery and returns pages, captured the same minute, and the rules where you sell: that it says it’s AI, and that every fee shows before payment.',
      },
      {
        q: 'Which agents can Sales agent check cover?',
        a: 'Sales agent check covers any AI that sells for you, from a vendor or built in house: on site chat, WhatsApp, text or in your app.',
      },
      {
        q: 'How do you know what’s at risk?',
        a: 'Sales agent check reads it from the chat history you connect: it counts how many chats asked about the same product, so you see how far a wrong price could have gone.',
      },
      {
        q: 'Can Sales agent check cover a client’s agent?',
        a: 'Yes, with the client’s agreement: the Sales agent check record carries your agency’s name, and the client can check every receipt.',
      },
      {
        q: 'What’s it worth?',
        a: 'Sales agent check keeps up to 27 orders a week at the right price, for a store whose agent quotes a €189 bundle at €89 in 27 chats a week, if every chat orders. A daily check finds the wrong price the morning it starts.',
      },
      {
        q: 'Is a passed check a guarantee?',
        a: 'No. A passed Sales agent check is dated evidence of what your sales agent said on each check.',
      },
      {
        q: 'What’s in the free check?',
        a: 'The free check is a Sales agent check on a sales agent you run for yourself or a client: 3 test customers ask it on 1 channel, and your report lands within 4 days.',
      },
    ],
  },

  final: {
    heading: 'Catch a wrong price the morning it appears, not 27 orders later.',
    sub: 'Your first check is free: 3 test customers ask your sales agent on 1 channel, and your report lands within 4 days. Your store, or a client’s.',
    capture: {
      kind: 'verify',
      source: 'recipe-sales-agent-final',
      button: 'Check my sales agent free',
      placeholder: 'Your store’s chat page',
      micro: 'Leave it blank to join the waitlist instead. We keep your email and your sales agent’s address to run the check and tell you about Obsession.',
      orWaitlist: true,
      roles,
      interest: 'sales-agent',
    },
  },
}
