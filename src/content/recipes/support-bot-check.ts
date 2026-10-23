import type { Recipe } from '../types'

/* Support bot check (/recipes/support-bot-check). Check your AI agents. Screen: botcheck (Test customer 2, AI, for
   Your company; the 07:00 run on chat, email and the portal; 20 checks, 18 passed and 2 need you; the refund window
   says 30 days on chat where the policy and the other 2 channels say 14; a person in 41 s on chat, 12 min by email and
   3 min on the portal; the portal's promised confirmation email: 0 in 6 hours, at 13:04; the right answer drafted for
   the reader's OK; "With your OK · no jailbreaks").
   Base: _research/verify/VERIFY.md 6.1 (the checks, the channels, the outcome) and 11 (the red lines). No real AI agent
   check has run yet, so the run is an example and says so, and no Verify claim sits in proof.
   The three lines hold (system.md), and nothing else is written as a rule: every answer kept exactly as it arrived;
   the reader private unless they choose to be named; the law (a test customer says it's AI when it talks to a person,
   pays only with real payment details and never gets round a CAPTCHA or a bot block). The rest is the reader's
   setting: hard or adversarial questions if they want them, a portal test account or helpdesk export they give, and
   when a fix goes live. Every test is tagged, agreed with the vendor, so none is billed as a resolution. A client's
   bot is named with the client's agreement once, in the FAQ. No vendor or product names: "your bot", "your vendor".
   Up-to-50 rule: the 1 modelled figure (up to 780 hours a year) carries its model in the same line: 1 person reading
   bot transcripts 15 hours a week x 52 weeks = 780, turned into a short list of what failed. */

export const recipe: Recipe = {
  id: 'support-bot',
  slug: 'support-bot-check',
  name: 'Support bot check',
  group: 'Check your AI agents',
  line: 'Asks your support bot what your customers ask, on every channel, every day, and checks each answer against your policy.',
  gets: 'A verdict on every check, the transcript behind it, and the right answer drafted for every wrong one.',
  kit: [
    'An AI test customer, working for your company',
    'Its own inboxes, phone number and test account',
    'Your policy pages, captured on every run',
    'Every channel your bot answers on',
    'Every test tagged, agreed with your vendor',
    'Every answer and wait kept with its receipt',
  ],

  meta: {
    path: '/recipes/support-bot-check',
    title: 'Support bot check: test your AI chatbot daily · Obsession',
    description:
      'AI test customers ask your support bot what customers ask, on chat, email and your portal, every day, and check each answer against your policy.',
    answer:
      'Support bot check asks your support bot what customers ask, every morning: test customers ask on chat, email and your portal in the same minute and check each answer against your policy page. You see each wrong answer, slow handoff and missing email, with the proof.',
    ogImage: '/og/support-bot-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Support bot check', path: '/recipes/support-bot-check' },
    ],
  },

  hero: {
    headline: 'AI agents that ask your support bot what customers ask.',
    sub: 'Support bot check asks your support bot what customers ask, every morning: test customers ask on chat, email and your portal in the same minute and check each answer against your policy page. You see each wrong answer, slow handoff and missing email, with the proof.',
    screen: 'botcheck',
    capture: {
      kind: 'verify',
      source: 'recipe-support-bot-hero',
      button: 'Check my support bot free',
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
    finding: 'Chat gives a 30 day refund window where your policy says 14, and the email the portal promised never came.',
    fix: '“No, returns close after 14 days” drafted for your bot’s settings, and the missing email flagged for your helpdesk. Live after your OK.',
    ledger: 'Example run. 20 checks, 18 passed, every answer and wait signed and dated.',
  },

  steps: [
    {
      title: 'Point it at your bot',
      line: 'Your site chat, help centre bot, support inbox, portal, WhatsApp or text: yours or a client’s. Add your policy pages and the questions your customers ask most.',
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
        { title: 'Hard questions', line: 'The questions your customers ask, and hard or adversarial ones if you want them.' },
        { title: 'Inside your systems', line: 'Your portal through a test account you give it, and your helpdesk through an export you connect.' },
        { title: 'Your bill', line: 'Every test is tagged, and agreed with your vendor first, so no test is billed as a resolution.' },
        { title: 'The record', line: 'Every answer and wait kept exactly as it arrived, private unless you share it.' },
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
        line: 'The right answer written for your bot’s settings, and the handoff rule for your helpdesk. Live when you approve it.',
      },
      { format: 'What changed', line: 'After every update to your bot, the checks that broke or recovered.' },
      {
        format: 'A record to share',
        line: 'A page and a PDF for your team, your vendor or your client, or an email, Slack, a sheet or a webhook. Every answer kept with its receipt.',
      },
    ],
  },

  settings: [
    { k: 'Bot', v: 'Yours, or one you run for a client' },
    { k: 'Channels', v: 'Site chat, help centre bot, support inbox, portal, WhatsApp and text' },
    { k: 'Questions', v: 'The questions your customers ask most, your own tricky cases, and hard or adversarial ones if you want them' },
    { k: 'Policies', v: 'Your refund, returns, cancellation and delivery pages, captured on every run' },
    { k: 'What counts', v: 'For example: a person within 3 minutes, the promised email within 1 hour' },
    { k: 'Test accounts', v: 'A portal test account and a helpdesk export, if you give them' },
    { k: 'Tagging', v: 'Every test tagged, agreed with your vendor first' },
    { k: 'How often', v: 'Daily, and after every update to your bot' },
  ],

  forWho: [
    {
      audience: 'agencies',
      line: 'A daily check on every bot you build or run for a client, and a record to show them, every answer with its receipt.',
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
      { label: 'Evidence', values: ['Screenshots in a folder', 'Every answer kept with its receipt'] },
    ],
  },

  faq: {
    heading: 'Every test customer says it’s AI. You set the rest.',
    items: [
      {
        q: 'How do we find out our chatbot is giving customers wrong answers?',
        a: 'Before customers do: Support bot check asks your bot what customers ask every day and checks each answer against your policy pages, so a wrong answer shows up the morning it starts.',
      },
      {
        q: 'Do you need our logins or code?',
        a: 'No. Support bot check’s test customers use your bot the way your customers do. A portal test account or a helpdesk export only if you give them.',
      },
      {
        q: 'Will Support bot check try to trick our bot?',
        a: 'Only if you want it to. Support bot check asks what your customers ask, and you can add hard or adversarial questions to see where your bot breaks.',
      },
      {
        q: 'Does Support bot check say it’s AI?',
        a: 'Yes. Every Support bot check test customer says it’s an AI test customer working for your company, so your team can see it’s a test.',
      },
      {
        q: 'Will our bot’s vendor bill us for the tests?',
        a: 'Every Support bot check test is tagged as a test, and we agree that with your vendor before the first one runs.',
      },
      {
        q: 'Which bots can Support bot check cover?',
        a: 'Support bot check covers any bot a customer can reach, from a vendor or built in house: site chat, a help centre, email, a portal, WhatsApp or text.',
      },
      {
        q: 'What does Support bot check compare answers with?',
        a: 'Support bot check compares them with your own policy pages, captured the same minute, and the rules where you sell: that it says it’s AI, and that it gets a person when asked.',
      },
      {
        q: 'Can Support bot check cover a client’s bot?',
        a: 'Yes, with the client’s agreement: the Support bot check record carries your agency’s name, and the client can check every receipt.',
      },
      {
        q: 'How often does Support bot check run?',
        a: 'Support bot check runs every morning, and again after every update to your bot, its prompts or its knowledge base.',
      },
      {
        q: 'What’s it worth?',
        a: 'Support bot check gives up to 780 hours a year back for 1 person who reads bot transcripts 15 hours a week. You read only what failed, with the transcript and the fix beside it.',
      },
      {
        q: 'Is a passed check a guarantee?',
        a: 'No. A passed Support bot check is dated evidence of what your bot said and did on each check.',
      },
      {
        q: 'What’s in the free check?',
        a: 'The free check is a Support bot check on a bot you run for yourself or a client: 3 test customers use it on 1 channel, and your report lands within 4 days.',
      },
    ],
  },

  final: {
    heading: 'Hear what your support bot tells customers, before they tell you.',
    sub: 'Your first check is free: 3 test customers ask your bot on 1 channel, and your report lands within 4 days. Your bot, or one you run for a client.',
    capture: {
      kind: 'verify',
      source: 'recipe-support-bot-final',
      button: 'Check my support bot free',
      interest: 'support-bot',
    },
  },
}
