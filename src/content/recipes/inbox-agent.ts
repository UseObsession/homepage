import type { Recipe } from '../types'

/* Inbox agent (/blueprints/inbox-agent, 23 Nov 2026, wave 2: _research/seo/blueprints-22nov/PLAN.md). Build agent
   products: a starter developers fork, and a support or sales inbox for teams that don't code. A persona with its own
   email address and a working handler on email.received: it reads each email beside the help pages and rules the reader
   gives it, replies in the same thread signed as their AI assistant, and hands refunds, legal questions and anything the
   help pages don't answer to a person in Slack with a draft. Copies the pull of products shipped in a day on an agent
   inbox (no vendor or customer named). Owns "ai email agent" ("ai email agent", "email inbox ai agent", "ai email
   responder": Google suggestions, 23 Nov); "email for ai agents" stays with /email and "ai agent inbox" with its guide,
   both linked, never retitled. Screen: inboxagent. Northpine is invented, at northpine.example. The run: Dana's order
   question answered in 39 seconds; Sam's £240 refund sent to #support, sent after Priya's OK 2 min 42 s after he wrote.
   Example. */

export const recipe: Recipe = {
  id: 'inbox-agent',
  slug: 'inbox-agent',
  name: 'Inbox agent',
  group: 'Build agent products',
  line: 'An AI email agent on its own address that answers every email, and hands the rest to a person.',
  gets: 'Every email answered in its own thread, or handed to a person with a draft, and every thread in your event log.',
  kit: [
    'A persona with its own address, on your domain or ours',
    'Your help pages and rules, read before every reply',
    'A working handler on every email, to keep or change',
    'Hand-offs to a person in Slack or your help desk',
    'Every reply signed as your AI assistant',
    'Every thread in your event log',
  ],
  build: {
    line: 'A persona with its own address and a working handler on email.received, ready to fork. Your code runs about 50 ms after each email lands, on the same event log as every other piece.',
    code: `await obsession.blueprints.run('inbox-agent', {
  address: 'support',
  answerFrom: 'https://your-app.example/help',
  handOff: 'slack:#support',
})
obsession.on('email.received', async (e) => {
  e.context.order = await findOrder(e.from) // your data, before it replies
})`,
    events: [
      { kind: 'email.received', text: 'An email lands on the agent’s own address, with its thread and attachments.' },
      { kind: 'email.sent', text: 'Its reply leaves in the same thread, signed as your AI assistant.' },
      { kind: 'message.received', text: 'A person in Slack approves a draft or takes the thread over.' },
      { kind: 'blueprint.result', text: 'Answered or handed off, with the time from email to reply.' },
    ],
  },

  meta: {
    path: '/blueprints/inbox-agent',
    title: 'Build an AI email agent that answers every email',
    description:
      'Build an AI email agent on its own address. It answers each email from your help pages, hands the rest to a person in Slack and keeps every thread.',
    answer:
      'Inbox agent gives an AI agent its own email address and a working handler that answers each email from your help pages and rules. Anything it shouldn’t answer goes to a person in Slack with a draft, and every thread lands in your event log.',
    ogImage: '/og/inbox-agent.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Inbox agent', path: '/blueprints/inbox-agent' },
    ],
  },

  hero: {
    headline: 'Build an AI email agent that answers every email, on its own address.',
    sub: 'Inbox agent gives an AI agent its own email address and a working handler that answers each email from your help pages and rules. Anything it shouldn’t answer goes to a person in Slack with a draft, and every thread lands in your event log.',
    screen: 'inboxagent',
    capture: {
      kind: 'waitlist',
      source: 'recipe-inbox-agent-hero',
      button: 'Start free',
      interest: 'inbox-agent',
    },
  },

  buyer: 'For developers shipping an AI agent that answers email, and the support and sales teams who run one.',
  unit: 'email answered',
  per: 'inbox',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['Your first 25 emails answered on its own address', 'Every reply signed as your AI assistant', 'Hand-offs to a person in Slack'] },
    { name: 'Starter', includes: ['Emails answered day and night', 'Your help pages and rules, read before every reply', 'A daily summary of what it answered and handed off'] },
    { name: 'Team', includes: ['An inbox each for support, sales and billing', 'Approval in Slack before it sends, if you want it', 'Replies logged in your help desk or CRM'] },
    { name: 'Scale', includes: ['An inbox for every brand or client', 'Each one’s threads kept apart in your event log', 'Your own handler on every email, in place of ours'] },
  ],

  run: {
    tab: 'Northpine’s support inbox, live',
    recipe: 'inbox-agent',
    task: 'Answer every email to support@northpine.example from our help pages and order data. Send every refund to #support with a draft, and send it only after a person says so.',
    targets: 'support@northpine.example, with Northpine’s help pages and order lookup',
    journey: ['An email arrives', 'Read it beside the help pages', 'Reply in the thread', 'Or hand it to a person'],
    schedule: 'Always on',
    report: 'A summary in Slack at 18:00',
    kit: ['1 persona · support@', 'Northpine’s help pages', 'Its order lookup, by your handler', 'Slack #support for hand-offs'],
    events: [
      { time: '09:14:02', text: 'Dana emails: “Where’s my order 4471? It was due Tuesday.”' },
      { time: '09:14:03', text: 'Your handler looks up order 4471: it left the warehouse on Monday and arrives Thursday.' },
      { time: '09:14:41', text: 'The reply goes out in Dana’s thread, signed “Northpine’s AI assistant”, with the tracking link.' },
      { time: '09:31:10', text: 'Sam asks for a £240 refund on a damaged sofa. Refunds go to a person, so the email and a draft reach #support.' },
      { time: '09:33:52', text: 'Priya replies “Send it” in #support. The draft goes out in Sam’s own thread.' },
      { time: '18:00', text: 'The day in Slack: 38 emails answered, 4 handed to a person, every thread kept.' },
    ],
    finding: '38 emails answered on their own and 4 handed to a person with a draft, so the team spent its day on the 4 that needed it.',
    fix: 'Sam’s refund went out after Priya’s OK in Slack, in his own thread, 2 minutes 42 seconds after he wrote.',
    ledger: '42 threads, every email and reply kept with its time.',
  },

  steps: [
    {
      title: 'Give it an address',
      line: 'A new address on your domain or ours, or your support inbox forwarded to it.',
    },
    {
      title: 'Give it your answers',
      line: 'Your help pages and policies, and the rules for what it may answer alone.',
    },
    {
      title: 'It answers or hands off',
      line: 'Each email is answered in its thread, or sent to a person in Slack with a draft.',
    },
    {
      title: 'Change any step in code',
      line: 'Developers keep the handler or replace it, on the same address and event log.',
    },
  ],

  checks: [
    {
      group: 'When an email arrives',
      items: [
        { title: 'The whole thread', line: 'Earlier replies and attachments, read before it writes.' },
        { title: 'Your help pages', line: 'Your policies and answers, read before each reply.' },
        { title: 'Your own data', line: 'Orders, bookings or accounts, looked up through your handler or API.' },
        { title: 'A reply in the thread', line: 'From its own address, signed as your AI assistant.' },
      ],
    },
    {
      group: 'When a person should answer',
      items: [
        { title: 'Your rules', line: 'Refunds, legal questions or an upset customer: you choose what goes to a person.' },
        { title: 'A person in Slack', line: 'The email and a draft, sent when someone replies “Send it”.' },
        { title: 'Your help desk', line: 'Every hand-off logged in your help desk or CRM, by webhook.' },
        { title: 'Questions your pages don’t answer', line: 'Handed to a person with a draft, so nobody gets a guess.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Says it’s an AI', line: 'Every reply is signed as your AI assistant, with your company’s name.' },
        { title: 'Its own address', line: 'It sends only from its own inbox, never from a person’s.' },
        { title: 'Money', line: 'It never pays or refunds by itself. A person approves anything with money in it.' },
        { title: 'Your threads', line: 'Kept in your event log, for as long as your plan keeps events.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every email ends answered, or in front of a person with a draft.',
    items: [
      { format: 'Replies', line: 'In each customer’s own thread, from the agent’s own address.' },
      { format: 'Hand-offs', line: 'In Slack or your help desk, with the email and a draft.' },
      { format: 'Every thread', line: 'In your event log, each email and reply with its time.' },
      { format: 'A daily summary', line: 'What it answered, what it handed off and the typical time to reply.' },
      { format: 'Webhooks', line: 'Every email in and out, for your CRM or help desk.' },
      { format: 'Your own handler', line: 'Our reply step swapped for your own model and rules.' },
    ],
  },

  settings: [
    { k: 'Address', v: 'A new address on your domain or ours, or your support inbox forwarded' },
    { k: 'Answers from', v: 'Your help pages, policies and order or account data' },
    { k: 'Hands off', v: 'Refunds, legal questions and anything your help pages don’t answer' },
    { k: 'Approval', v: 'Before every reply, before some, or none' },
    { k: 'Signs as', v: 'Your AI assistant, with your company’s name' },
    { k: 'Hours', v: 'Day and night, or only outside office hours' },
    { k: 'Where it lands', v: 'Slack, your help desk, your CRM or a webhook' },
  ],

  table: {
    heading: 'A shared inbox waits for someone to pick it up. An inbox agent answers when the email lands.',
    cols: ['A shared inbox', 'With Inbox agent'],
    rows: [
      { label: 'Where’s my order?', values: ['Answered when someone gets to it', 'Answered in its thread, with the tracking link'] },
      { label: 'At night and at weekends', values: ['Waits for Monday', 'Answered when it lands'] },
      { label: 'A refund', values: ['Picked up by whoever is free', 'Sent to a person in Slack with a draft'] },
      { label: 'A question the help pages don’t answer', values: ['A guess, or a delay', 'Handed to a person, never guessed'] },
      { label: 'Every thread', values: ['Spread across people’s inboxes', 'In one event log, with times'] },
      { label: 'A new address for a new team', values: ['A new tool to set up', 'One call, or one click'] },
    ],
  },

  faq: {
    heading: 'An address, your answers and a person when it matters.',
    items: [
      {
        q: 'What is an AI email agent?',
        a: 'An AI agent with its own email address that reads each email, answers it from your help pages and rules, and replies in the same thread. Inbox agent sets one up with a handler you can keep or change.',
        link: { label: 'See email for AI agents', to: '/email' },
      },
      {
        q: 'Do customers know they’re emailing an AI?',
        a: 'Yes. Every reply is signed as your AI assistant, with your company’s name, and a person can step into any thread.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'Can Inbox agent use our own address?',
        a: 'Yes. Give it a new address on your domain, use one of ours, or forward your existing support inbox to it. It sends only from its own inbox.',
      },
      {
        q: 'What does a developer change?',
        a: 'The handler on email.received. Keep ours, add your own data before it replies, or replace the reply with your own model. The address, the threads and the event log stay the same.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'What happens when it doesn’t know the answer?',
        a: 'It’s set to hand off whenever your help pages don’t cover the question. The email goes to a person in Slack or your help desk with a draft, and nothing is sent until someone replies.',
      },
      {
        q: 'Can a sales team use it too?',
        a: 'Yes. Point it at a sales address and it answers pricing and product questions from your pages, shares your booking link and hands each deal to a rep. Watch what it does to reply rates and meetings booked.',
      },
      {
        q: 'Does it answer at night and at weekends?',
        a: 'Yes, when the email lands. Or set it to answer only outside office hours, while your team answers in the day.',
        link: { label: 'See an AI agent for customer support', to: '/use-cases/ai-agent-for-customer-support' },
      },
      {
        q: 'What does Inbox agent cost?',
        a: 'It’s billed on the pieces it uses, at list rates. That’s an inbox, the emails it receives and sends, and the model tokens for each reply. Waiting between emails costs nothing.',
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Answer every email when it lands, and keep your team for the ones that need a person.',
    sub: 'Try it on the Free plan with your first 25 emails, and watch your first response time, CSAT and the tickets your team still handles.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-inbox-agent-final',
      button: 'Start free',
      interest: 'inbox-agent',
    },
    link: { label: 'More blueprints to build agent products', to: '/blueprints/build-agent-products' },
  },
}
