import { capture as form } from '../capture'
import type { Recipe } from '../types'

/* Support bot check (/recipes/support-bot-check). Check your AI agents. Screen: botcheck (Test customer 2, AI, for
   Your company; the 07:00 run on chat, email and the portal; 20 checks, 18 passed and 2 need you; the refund window
   says 30 days on chat where the policy and the other 2 channels say 14; a person in 41 s on chat, 12 min by email and
   3 min on the portal; the portal's promised confirmation email: 0 in 6 hours, at 13:04; the right answer drafted for
   the reader's OK; "With your OK · no jailbreaks").
   Base: _research/verify/VERIFY.md 6.1 (the checks, the channels, the outcome) and 11 (the red lines). No real AI agent
   check has run yet, so the run is an example and says so, and no Verify claim sits in proof.
   Red lines held: only the reader's own bot, or a client's with their written OK; every test customer says it's AI and
   who it works for, and answers "am I talking to a person?" truthfully; it asks what an ordinary customer asks, never a
   jailbreak, a prompt trick or flattery for a discount; every test tagged, agreed with the bot's vendor first, so no
   test is billed as a resolution; a portal only through a test account the reader gives, a helpdesk only through an
   export the reader connects; volume a single customer could create; checkouts stop before payment; nothing changes
   in the bot without the reader's OK. No vendor or product names: "your bot", "your vendor".
   Up-to-50 rule: the 1 modelled figure (up to 780 hours a year) carries its model in the same line: 1 person reading
   bot transcripts 15 hours a week x 52 weeks = 780, turned into a short list of what failed. */

const roles = form.agent.roles

export const recipe: Recipe = {
  id: 'support-bot',
  slug: 'support-bot-check',
  name: 'Support bot check',
  group: 'Check your AI agents',
  line: 'Asks your support bot what your customers ask, on every channel, every day, and checks each answer against your policy.',
  gets: 'A verdict on every check, the transcript behind it, and the right answer drafted for every wrong one.',
  kit: [
    'A declared AI test customer, named for your company',
    'Its own inboxes, phone number and test account',
    'Your policy pages, captured on every run',
    'Every channel your bot answers on',
    'Every test tagged, agreed with your vendor',
    'Every answer and wait signed and dated',
  ],

  meta: {
    path: '/recipes/support-bot-check',
    title: 'Support bot check: test your AI chatbot daily · Obsession',
    description:
      'Declared AI test customers ask your support bot what customers ask, on chat, email and your portal, every day, and check each answer against your policy.',
    answer:
      'Support bot check is an Obsession recipe. With the owner’s OK, declared AI test customers ask a company’s support bot what its customers ask, on chat, email, the help centre and the portal, every day and after every update. They check each answer against the company’s policy pages, time every handoff to a person, wait for every email the bot promises, and sign every step.',
    ogImage: '/og/support-bot-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Support bot check', path: '/recipes/support-bot-check' },
    ],
  },

  hero: {
    headline: 'AI agents that ask your support bot what your customers ask, every day.',
    sub: 'Declared test customers ask on chat, email and your portal in the same minute, and check each answer against your policy page. You see the wrong answer, the slow handoff and the email that never came, with the proof.',
    screen: 'botcheck',
    capture: {
      kind: 'verify',
      source: 'recipe-support-bot-hero',
      button: 'Check my support bot free',
      placeholder: 'Your bot’s chat page',
      micro: form.agent.micro,
      roles,
      interest: 'support-bot',
    },
  },

  run: {
    tab: 'Example: your support bot, daily',
    recipe: 'support-bot',
    task: 'Every morning, ask our support bot what a customer asks, on chat, email and our portal. Check each answer against our policy pages and tell me what breaks.',
    targets: 'Your support bot: chat, email and your portal',
    journey: ['Say it’s AI, ask about a return', 'Ask for a person', 'Wait for the promised email', 'Check against your policy'],
    schedule: 'Daily at 07:00, and after every update',
    report: 'A Slack alert and a signed record',
    kit: ['Agent ID, declared as AI', '2 inboxes', 'A test account on your portal', 'Tagged as a test, never billed'],
    events: [
      { time: 'Mon 07:00', text: 'Test customer 2 says it’s AI and asks to return an order after 20 days, on chat, email and your portal.' },
      { time: 'Mon 07:02', text: 'Chat: “Yes, you have 30 days.” Your returns page, captured at 07:00, says 14. Email and the portal say 14.' },
      { time: 'Mon 07:04', text: 'Asks for a person. Chat hands over in 41 seconds, the portal in 3 minutes.' },
      { time: 'Mon 07:12', text: 'By email, a person replies in 12 minutes.' },
      { time: 'Mon 13:04', text: '6 hours on, the confirmation email the portal promised hasn’t arrived.' },
    ],
    finding: 'Chat gives a 30 day return window where your policy says 14, and the email the portal promised never came.',
    fix: '“No, returns close after 14 days” drafted for your bot’s settings, and the missing email flagged for your helpdesk. Live after your OK.',
    ledger: 'Example run. 20 checks, 18 passed, every answer and wait signed and dated.',
  },

  steps: [
    {
      title: 'Point it at your bot',
      line: 'Your site chat, help centre bot, support inbox, portal, WhatsApp or text: yours, or a client’s with their OK. Add your policy pages and the questions your customers ask most.',
    },
    {
      title: 'Approve the checks',
      line: 'Obsession writes them from your policies and the rules where you sell: it says it’s AI, gives the right refund window, gets you a person, stops after “No”. Change any check, then approve.',
    },
    {
      title: 'Test customers ask, then wait',
      line: 'Each says it’s AI and who it works for, asks on every channel in the same minute, asks for a person, and watches its inbox for the email the bot promised. Every morning, and after every update.',
    },
    {
      title: 'You get a verdict and the fix',
      line: 'Each check passes or fails, with the transcript, the policy it broke and what happened next. The right answer comes drafted for your bot’s settings, live after your OK.',
    },
  ],

  checks: [
    {
      group: 'What it tells customers',
      items: [
        { title: 'Says it’s AI', line: 'In its first message, and truthfully every time a customer asks “Am I talking to a person?”' },
        { title: 'Refunds, returns and cancellations', line: 'Every answer against your policy pages, captured the same minute.' },
        { title: 'Prices, fees and codes', line: 'The prices it quotes and the codes it hands out, checked against your store: live, right and in date.' },
        { title: 'The same answer everywhere', line: 'The same question on chat, email and your portal in the same minute, compared.' },
      ],
    },
    {
      group: 'What happens next',
      items: [
        { title: 'A person when asked', line: 'Whether a person is offered, how long it takes, and whether someone actually answers.' },
        { title: 'Promises kept', line: 'The ticket, case number, email or callback it promised, watched for until it arrives or the wait ends.' },
        { title: 'Stops after “No”', line: 'Whether it keeps going after “No, that didn’t help.”' },
        { title: 'Within its authority', line: 'Whether it offers a refund or a discount it isn’t allowed to, when an ordinary customer asks.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'No tricks', line: 'It asks what an ordinary customer asks. No jailbreaks, prompt tricks or flattery to win a discount.' },
        { title: 'Inside your systems', line: 'Your portal only with a test account you give it, and your helpdesk only through an export you connect.' },
        { title: 'Your bill', line: 'Every test is tagged, and agreed with your vendor first, so no test is billed as a resolution.' },
        { title: 'Anyone else’s bot', line: 'Never. Your own bot, or a client’s with their written OK.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every wrong answer comes back with its proof and its fix.',
    items: [
      { format: 'A verdict per check', line: 'Passed or needs you, by channel, with the rule that decided it.' },
      { format: 'The transcript', line: 'Every message on every channel, timed, beside the policy page as it read that minute.' },
      { format: 'What happened next', line: 'The promised email, ticket or callback, and when it arrived, or that it never did.' },
      {
        format: 'The fix, drafted',
        line: 'The right answer written for your bot’s settings, and the handoff rule for your helpdesk. Live only after your OK.',
      },
      { format: 'What changed', line: 'After every update to your bot, the checks that broke or recovered.' },
      {
        format: 'A record to share',
        line: 'A page and a PDF for your team, your vendor or your client, or an email, Slack, a sheet or a webhook. Every step signed.',
      },
    ],
  },

  settings: [
    { k: 'Bot', v: 'Yours, or a client’s with their written OK' },
    { k: 'Channels', v: 'Site chat, help centre bot, support inbox, portal, WhatsApp and text' },
    { k: 'Questions', v: 'The questions your customers ask most, and your own tricky cases' },
    { k: 'Policies', v: 'Your refund, returns, cancellation and delivery pages, captured on every run' },
    { k: 'What counts', v: 'For example: a person within 3 minutes, the promised email within 1 hour' },
    { k: 'Test accounts', v: 'A portal test account and a helpdesk export, only if you give them' },
    { k: 'Tagging', v: 'Every test tagged, agreed with your vendor first' },
    { k: 'How often', v: 'Daily, and after every update to your bot' },
  ],

  forWho: [
    {
      audience: 'agencies',
      line: 'A daily check on every bot you build or run for a client, with their OK, and a signed record to show them.',
    },
    { audience: 'founders', line: 'Know what your bot tells customers while you sleep, and hear the morning it gets a policy wrong.' },
    { audience: 'marketing', line: 'Check your bot quotes the offer and the code you launched today, not last month’s.' },
    {
      audience: 'developers',
      line: 'Run the checks from your code after every prompt or knowledge base change, before a customer meets it.',
    },
  ],

  table: {
    heading: 'A daily check turns hours of transcript reading into 1 short list.',
    line: 'Up to 780 hours a year back for 1 person who reads bot transcripts 15 hours a week: you read only the checks that failed.',
    cols: ['Today', 'With a daily check'],
    rows: [
      { label: 'A wrong answer', values: ['Found from a complaint, days later', 'Found the same morning, with the transcript'] },
      { label: 'Transcripts', values: ['15 hours a week, sampled by hand', 'Only the checks that failed'] },
      { label: 'Promised emails', values: ['Nobody checks they arrive', 'Watched until they arrive or the wait ends'] },
      { label: 'Chat against email', values: ['Never compared', 'The same question, the same minute, compared'] },
      { label: 'After an update', values: ['You hope nothing changed', 'Checked again the same day'] },
      { label: 'Evidence', values: ['Screenshots in a folder', 'Every step signed and dated'] },
    ],
  },

  faq: {
    heading: 'Every test customer says it’s AI. Your bot only, with your OK.',
    items: [
      {
        q: 'Do you need our logins or code?',
        a: 'No. Test customers use your bot the way your customers do. A portal test account or a helpdesk export only if you give them.',
      },
      {
        q: 'Will it try to trick our bot?',
        a: 'No. It asks what an ordinary customer asks. No jailbreaks, prompt tricks or flattery to win a discount.',
      },
      {
        q: 'Does it say it’s AI?',
        a: 'Yes. Every test customer says it’s an AI test customer working for your company, so your team can see it’s a test.',
      },
      {
        q: 'Will our bot’s vendor bill us for the tests?',
        a: 'Every test is tagged as a test, and we agree that with your vendor before the first one runs.',
      },
      {
        q: 'Which bots can it check?',
        a: 'Any bot a customer can reach, from a vendor or built in house: site chat, a help centre, email, a portal, WhatsApp or text.',
      },
      {
        q: 'What does it check against?',
        a: 'Your own policy pages, captured the same minute, and the rules where you sell: that it says it’s AI, and that it gets a person when asked.',
      },
      {
        q: 'Can it check a client’s bot?',
        a: 'Yes, with the client’s written OK. The record carries your agency’s name, and the client can check every step.',
      },
      {
        q: 'How often does it run?',
        a: 'Every morning, and again after every update to your bot, its prompts or its knowledge base.',
      },
      {
        q: 'What’s it worth?',
        a: 'Up to 780 hours a year back for 1 person who reads bot transcripts 15 hours a week. You read only what failed, with the transcript and the fix beside it.',
      },
      {
        q: 'Is a passed check a guarantee?',
        a: 'No. It’s dated evidence of what your bot said and did on each check.',
      },
      {
        q: 'What’s in the free check?',
        a: 'Name a bot you run, or a client’s with their OK. 3 test customers use it on 1 channel, and your report lands within 4 days.',
      },
    ],
  },

  final: {
    heading: 'Hear what your support bot tells customers, before they tell you.',
    sub: 'Your first check is free: 3 test customers ask your bot on 1 channel, and your report lands within 4 days. Your bot, or a client’s with their OK.',
    capture: {
      kind: 'verify',
      source: 'recipe-support-bot-final',
      button: 'Check my support bot free',
      placeholder: 'Your bot’s chat page',
      micro: 'Leave it blank to join the waitlist instead. We keep your email and your bot’s address to run the check and tell you about Obsession.',
      orWaitlist: true,
      roles,
      interest: 'support-bot',
    },
  },
}
