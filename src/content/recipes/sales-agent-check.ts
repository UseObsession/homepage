import { capture as form } from '../capture'
import type { Recipe } from '../types'

/* Sales agent check (/recipes/sales-agent-check). Check your AI agents. It replaces VERIFY.md 6.4's Checkout agent
   check: a store's own AI sales or shopping agent quoting wrong prices, followed to checkout and stopped before
   payment. Outside AI shoppers buying from the store are AI checkout test's job, and the FAQ says so.
   Screen: salescheck (Your company; "WhatsApp · Site chat · daily"; Mon 07:01; Test customer 2, AI, for Your company:
   "AI test customer for Your company. Duo bundle price?"; the agent: "I'm the AI assistant. The Duo bundle is €89, in
   stock and arrives in 2 to 3 working days."; "Can I order now?"; checkout €89.00, stopped before payment, budget €0;
   4 checks, 3 pass and 1 needs you: the bundle price at 07:01, said €89 where the price list at 07:00 says €189, "Up to
   27 orders at risk · 27 bundle chats last week"; says it's AI, stock against the stock feed at 07:00 and delivery
   against the delivery page all pass; "With your OK · no jailbreaks"; the toast "Wrong price caught · fix drafted for
   your OK"). The screen's law reference beside "Says it's AI" stays off the page: no citations.
   Base: _research/verify/VERIFY.md 6.4 (the checks, the channels) and 11 (the red lines). No real AI agent check has
   run yet, so the run is an example and says so, and no Verify claim sits in proof.
   Red lines held: only the reader's own agent, or a client's with their written OK; every test customer says it's AI
   and who it works for; ordinary questions only, no jailbreaks, haggling or flattery; every checkout stops before
   payment unless it's the reader's own store with a budget set; the chat history is read only through a connection the
   reader sets up; every test chat tagged, agreed with the vendor; nothing changes in the agent without the reader's
   OK. No vendor or product names: "your sales agent".
   Up-to-50 rule: the 1 modelled figure (up to €2,700) carries its model in the same line: 27 Duo bundle chats a week,
   each quoted €189 less €89 = €100 under the price list, if every chat became an order: 27 x €100 = €2,700 on 1 wrong
   price in 1 week, which a daily check finds the morning it starts. */

const roles = form.agent.roles

export const recipe: Recipe = {
  id: 'sales-agent',
  slug: 'sales-agent-check',
  name: 'Sales agent check',
  group: 'Check your AI agents',
  line: 'Asks your AI sales agent about prices, stock and delivery every day, checks each answer against your store and stops before payment.',
  gets: 'Every price, stock and delivery answer checked against your store, and the right answer drafted wherever it went wrong.',
  kit: [
    'A declared AI test customer, working for your store',
    'Its own inbox and WhatsApp number',
    'Your price list, stock feed and delivery page, captured each run',
    'Every channel your agent sells on',
    'A €0 budget, or a cap you set on your own store',
    'Every answer signed and dated',
  ],

  meta: {
    path: '/recipes/sales-agent-check',
    title: 'Sales agent check: catch wrong AI prices daily · Obsession',
    description:
      'Declared AI test customers ask your AI sales agent about prices, stock and delivery daily, check each answer against your store and stop before payment.',
    answer:
      'Sales agent check asks your AI sales agent what it charges, every day: declared test customers ask on chat about prices, stock and delivery, check each answer against your price list and stop every checkout before payment.',
    ogImage: '/og/sales-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Sales agent check', path: '/recipes/sales-agent-check' },
    ],
  },

  hero: {
    headline: 'AI agents that ask your AI sales agent what it charges.',
    sub: 'Sales agent check asks your AI sales agent what it charges, every day: declared test customers ask on chat about prices, stock and delivery, check each answer against your price list and stop every checkout before payment.',
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
      line: 'Your site chat, WhatsApp or text sales agent, or a client’s with their OK. Add your price list, stock feed and delivery page.',
    },
    {
      title: 'Approve the checks',
      line: 'Obsession writes them from your store and the rules where you sell: it says it’s AI, quotes today’s price, gets stock and delivery right, and shows every fee before payment. Change any check, then approve.',
    },
    {
      title: 'Test customers ask, then go to checkout',
      line: 'Each says it’s AI and who it works for, asks what your customers ask on every channel, and follows the answer to checkout. It stops before payment, unless it’s your own store and you’ve set a budget.',
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
        { title: 'Before payment', line: 'Every checkout, unless it’s your own store and you’ve set a budget.' },
        { title: 'No tricks', line: 'It asks what an ordinary customer asks. No jailbreaks, prompt tricks or haggling for a discount.' },
        { title: 'Your figures', line: 'Every test chat tagged, agreed with your vendor first, so it stays out of your sales and your bill.' },
        { title: 'Anyone else’s agent', line: 'Never. Your own sales agent, or a client’s with their written OK.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every wrong price comes back with its proof, its reach and its fix.',
    items: [
      { format: 'A verdict per check', line: 'Passed or needs you, beside the price list, feed or page it was checked against.' },
      { format: 'The chat', line: 'Every message on every channel, timed, beside your price list as it read that minute.' },
      { format: 'The checkout', line: 'What checkout showed, captured at the step where it stopped before payment.' },
      {
        format: 'What’s at risk',
        line: 'How many chats asked about the same product last week, from the chat history you connect.',
      },
      { format: 'The fix, drafted', line: 'The right answer written for your agent’s settings. Live only after your OK.' },
      {
        format: 'A record to share',
        line: 'A page and a PDF for your team, your vendor or your client, or an email, Slack, a sheet or a webhook. Every answer signed.',
      },
    ],
  },

  settings: [
    { k: 'Sales agent', v: 'Yours, or a client’s with their written OK' },
    { k: 'Channels', v: 'Site chat, WhatsApp, text and your app' },
    { k: 'Products', v: 'Your best sellers, bundles and this week’s offers' },
    { k: 'Sources', v: 'Your price list, stock feed, delivery and returns pages, captured each run' },
    { k: 'Budget', v: '€0, so every checkout stops before payment, or a cap you set on your own store' },
    { k: 'Chat history', v: 'Connected by you, to count what a wrong answer puts at risk' },
    { k: 'Tagging', v: 'Every test chat tagged, agreed with your vendor first' },
    { k: 'How often', v: 'Daily, and after every price change or update' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Check your sales agent quotes this week’s offer and code, not last month’s.' },
    {
      audience: 'agencies',
      line: 'A daily price check on every client’s sales agent, with their OK, and a signed record to show them.',
    },
    { audience: 'founders', line: 'Know what your sales agent charges while you sleep, and hear the morning it gets a price wrong.' },
    {
      audience: 'developers',
      line: 'Run the checks from your code after every catalogue or prompt change, before a customer sees it.',
    },
  ],

  table: {
    heading: 'A wrong price in chat keeps selling at that price until someone notices.',
    line: 'Up to €2,700 kept on 1 wrong price in a week: your agent quotes the €189 Duo bundle at €89, and 27 chats a week ask about it. If every chat orders, each order is €100 short. A daily check finds it the morning it starts.',
    cols: ['Today', 'With a daily check'],
    rows: [
      { label: 'A wrong price', values: ['Found when orders arrive at €89', 'Found the same morning, with the chat'] },
      { label: 'Stock and delivery', values: ['Trusted to match your feed', 'Checked against your feed every morning'] },
      { label: 'WhatsApp and site chat', values: ['Never compared', 'The same question, the same minute, compared'] },
      { label: 'Checkout', values: ['Nobody checks it matches the chat', 'Followed to checkout, stopped before payment'] },
      { label: 'After a price change', values: ['You hope the agent knows', 'Checked again the same day'] },
      { label: 'Evidence', values: ['A customer’s screenshot', 'Every answer signed and dated'] },
    ],
  },

  faq: {
    heading: 'Every test customer says it’s AI. Every checkout stops before payment.',
    items: [
      {
        q: 'How do we stop our AI sales agent quoting the wrong price?',
        a: 'Catch it the morning it starts: Obsession’s Sales agent check asks your agent about prices, bundles and codes every day and checks each answer against your own price list, stopping every checkout before payment.',
      },
      {
        q: 'Does Sales agent check buy anything?',
        a: 'No. Sales agent check stops every checkout before payment, unless it’s your own store and you’ve set a budget.',
      },
      {
        q: 'Does Sales agent check say it’s AI?',
        a: 'Yes. Every Sales agent check test customer says it’s an AI test customer working for your store, so your team can see it’s a test.',
      },
      {
        q: 'Will Sales agent check haggle or trick our agent?',
        a: 'No. Sales agent check asks what an ordinary customer asks. No jailbreaks, prompt tricks or flattery to win a discount.',
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
        q: 'How is Sales agent check different from AI checkout test?',
        a: 'Sales agent check makes sure your own AI agent tells customers the right price, stock and delivery. AI checkout test makes sure outside AI shoppers can buy from your store.',
      },
      {
        q: 'Can Sales agent check cover a client’s agent?',
        a: 'Yes, with the client’s written OK: the Sales agent check record carries your agency’s name, and the client can check every step.',
      },
      {
        q: 'What’s it worth?',
        a: 'Sales agent check keeps up to €2,700 on 1 wrong price in a week, for a store whose agent quotes a €189 bundle at €89 in 27 chats a week, if every chat orders. A daily check finds it the morning it starts.',
      },
      {
        q: 'Is a passed check a guarantee?',
        a: 'No. A passed Sales agent check is dated evidence of what your sales agent said on each check.',
      },
      {
        q: 'What’s in the free check?',
        a: 'The free check is a Sales agent check on a sales agent you run, or a client’s with their OK: 3 test customers ask it on 1 channel, and your report lands within 4 days.',
      },
    ],
  },

  final: {
    heading: 'Catch a wrong price the morning it appears, not 27 orders later.',
    sub: 'Your first check is free: 3 test customers ask your sales agent on 1 channel, and your report lands within 4 days. Your store, or a client’s with their OK.',
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
