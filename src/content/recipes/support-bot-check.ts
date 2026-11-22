import type { Recipe } from '../types'

/* Support bot check (/recipes/support-bot-check). Check your AI agents; Home's "AI agent checks" tile links here.
   Screen: botcheck (the 07:00 run on chat, email and the portal; the refund window says 30 days on chat where the
   policy says 14; the portal's promised email never arrives).
   The persona version (20 Nov 2026): a persona you define (a new buyer, a buyer with an order, someone about to cancel)
   asks support bots on chat, email and portals what the reader's support team hears most, and every answer comes back
   word for word in the event log, dated, beside the reader's policy page as it read that minute. It waits in its own
   inbox for the email the bot promised. The reader's own bot every morning, and competitors' bots on the questions
   anyone can ask. With a bot, the page says what the event log shows; when a person joins, the persona tells them it's an
   AI. Tests on the reader's own bot are tagged, so the vendor doesn't bill them. The run is an example. No vendor or
   product names. */

export const recipe: Recipe = {
  id: 'support-bot',
  slug: 'support-bot-check',
  name: 'Support bot check',
  group: 'Check your AI agents',
  line: 'A persona asks your support bot, and competitors’, what your team hears most, keeping every answer.',
  gets: 'Every answer and wait, word for word, beside your policy page as it read that minute.',
  kit: [
    'A persona you define, with its own inbox and number',
    'An order or account on your portal, if you give one',
    'Your policy pages, captured each run',
    'Every channel the bot answers on',
    'Every transcript dated, with screenshots',
    'Answers in Slack, a sheet or the API',
  ],

  meta: {
    path: '/blueprints/support-bot-check',
    title: 'Test your support bot each morning against your own policy',
    description:
      'A persona you define asks your support bot what people ask, on chat, email and portals, every morning. Every answer comes back word for word, dated.',
    answer:
      'Support bot check sends a persona to ask support bots what your team hears most, on chat, email and portals, every morning. Every answer, yours and competitors’, lands word for word beside your policy page.',
    ogImage: '/og/support-bot-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Support bot check', path: '/blueprints/support-bot-check' },
    ],
  },

  hero: {
    headline: 'Every answer your support bot gives, kept word for word.',
    sub: 'Support bot check sends a persona to ask support bots what your team hears most, on chat, email and portals, every morning. Every answer, yours and competitors’, lands word for word beside your policy page.',
    screen: 'botcheck',
    capture: {
      kind: 'waitlist',
      source: 'recipe-support-bot-hero',
      button: 'Request early access',
      interest: 'support-bot',
    },
  },

  unit: 'round of test questions',
  per: 'support bot',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['Every answer kept word for word', 'Each answer beside your policy page', 'A person requested, and the wait timed'] },
    { name: 'Weekly', includes: ['The questions your support team hears most', 'Every test tagged, so your vendor doesn’t bill it', 'Answers in Slack or a sheet'] },
    { name: 'Team', includes: ['Every channel’s answers side by side', 'Every transcript in your event log'] },
    { name: 'Daily', includes: ['A flag the morning an answer breaks your policy', 'Every transcript by webhook or API'] },
  ],

  run: {
    tab: 'Your support bot, daily',
    recipe: 'support-bot',
    task: 'Every morning, send a persona with an order to our support bot on chat, email and our portal. Ask what our support team hears most, and set each answer beside our policy pages.',
    targets: 'Your support bot: chat, email and your portal',
    journey: ['Ask about a late return', 'Ask for a person', 'Wait for the promised email', 'Set beside your policy'],
    schedule: 'Daily at 07:00, and after every update',
    report: 'Slack, and every transcript by API',
    kit: ['Persona · UK, 1 order', 'Its own inbox and number', 'An order on your portal', 'Tagged as a test'],
    events: [
      { time: 'Mon 07:00', text: 'The persona, a buyer with a 20 day old order, asks to return it on chat, email and your portal.' },
      { time: 'Mon 07:02', text: 'Chat: “Yes, you have 30 days.” Your returns page, captured at 07:00, says 14. Email and the portal say 14.' },
      { time: 'Mon 07:04', text: 'It asks for a person. Chat hands over in 41 seconds, the portal in 3 minutes. It tells each person it’s an AI.' },
      { time: 'Mon 07:12', text: 'By email, a person replies in 12 minutes.' },
      { time: 'Mon 13:04', text: '6 hours on, the confirmation email the portal promised hasn’t reached the persona’s inbox.' },
    ],
    finding: 'Chat gives a 30 day refund window where your policy says 14, and the email the portal promised never came.',
    fix: 'In #support at 07:03, the transcript beside your returns page, and the missing email flagged at 13:04.',
    ledger: '20 answers, 18 match your policy, every answer and wait dated.',
  },

  steps: [
    {
      title: 'Name the bots',
      line: 'Your site chat, help centre, support inbox, portal, WhatsApp or text, a client’s, or a competitor’s.',
    },
    {
      title: 'Define the persona and the questions',
      line: 'A new buyer, a buyer with an order or one about to cancel, asking what your team hears most.',
    },
    {
      title: 'Asked every morning',
      line: 'It asks on every channel in the same minute, asks for a person and waits for any promised email.',
    },
    {
      title: 'Every answer lands where you work',
      line: 'Slack, a sheet or the API, with the transcript, the wait and the policy it matches or breaks.',
    },
  ],

  checks: [
    {
      group: 'What the bot says',
      items: [
        { title: 'Says it’s an AI', line: 'In its first message, and truthfully whenever asked “Am I talking to a person?”' },
        { title: 'Refunds, returns and cancellations', line: 'Every answer beside your policy pages, captured the same minute.' },
        { title: 'Prices, fees and codes', line: 'The prices it quotes and the codes it hands out: live, right and in date.' },
        { title: 'The same answer everywhere', line: 'The same question on chat, email and your portal in the same minute.' },
      ],
    },
    {
      group: 'What happens next',
      items: [
        { title: 'A person when asked', line: 'Whether a person is offered, how long it takes, and whether someone answers.' },
        {
          title: 'Promises kept',
          line: 'The promised ticket, email or callback, waited for 48 hours by default, or as long as you set.',
        },
        { title: 'Stops after “No”', line: 'Whether it keeps going after “No, that didn’t help.”' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Your bill', line: 'Tests on your bot are tagged, so your vendor doesn’t bill them as resolutions.' },
        { title: 'Hard questions', line: 'Ordinary questions by default, and hard or adversarial ones when you add them.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every answer comes back word for word, with its time.',
    items: [
      { format: 'An answer per question', line: 'Matches your policy or doesn’t, by channel.' },
      {
        format: 'The transcript',
        line: 'Every message on every channel, dated, with screenshots.',
      },
      { format: 'What changed', line: 'After every update to the bot, the answers that changed.' },
      { format: 'Competitors’ answers', line: 'The same questions to their bots, side by side with yours.' },
      { format: 'Slack, sheet or API', line: 'Every answer as a message, a row or JSON, with its transcript linked.' },
    ],
  },

  settings: [
    { k: 'Bots', v: 'Yours, a client’s or a competitor’s' },
    { k: 'Channels', v: 'Site chat, help centre, support inbox, portal, WhatsApp and text' },
    { k: 'Questions', v: 'The ones your support team hears most, and your tricky cases' },
    { k: 'Persona', v: 'A new buyer, a buyer with an order, or one about to cancel' },
    { k: 'Policies', v: 'Your refund, returns, cancellation and delivery pages, captured each run' },
    { k: 'What counts', v: 'For example: a person within 3 minutes, the promised email within 1 hour' },
    { k: 'How often', v: 'Daily, and after every update to your bot' },
    { k: 'Where it lands', v: 'Slack, a sheet, a webhook or the API' },
  ],

  forWho: [
    { audience: 'agencies', line: 'Every client bot you build or run, checked daily, every answer in your event log.' },
    { audience: 'founders', line: 'Hear the morning your bot gets a policy wrong.' },
    { audience: 'marketing', line: 'What competitors’ bots say about refunds, prices and switching, beside yours.' },
    { audience: 'developers', line: 'Spawn the persona from your code or agent after each prompt or knowledge base change.' },
  ],

  table: {
    heading: 'A daily check in your event log, in place of transcripts read by hand.',
    cols: ['By hand', 'With Support bot check'],
    rows: [
      { label: 'A wrong answer', values: ['Found from a complaint, days later', 'Found the same morning, with the transcript'] },
      { label: 'Transcripts', values: ['Sampled by hand', 'Every answer, beside your policy'] },
      { label: 'Promised emails', values: ['Nobody checks they arrive', 'Waited for until they arrive or the wait ends'] },
      { label: 'Chat against email', values: ['Never compared', 'The same question, the same minute'] },
      { label: 'Competitors’ bots', values: ['Asked once, by someone on the team', 'The same questions, every morning'] },
      { label: 'After an update', values: ['You hope nothing changed', 'Asked again the same day'] },
    ],
  },

  faq: {
    heading: 'You define the persona. Your event log keeps every word.',
    items: [
      {
        q: 'How do we find out our chatbot is giving customers wrong answers?',
        a: 'Support bot check sends a persona to ask your bot what your support team hears most, every morning. Each answer is set beside your policy pages, so a wrong answer shows up the morning it starts.',
      },
      {
        q: 'Can Support bot check ask a competitor’s bot?',
        a: 'Yes. A persona asks a competitor’s bot the questions anyone can ask and keeps every answer with its time. It has its own name, inbox and number, so nothing points back to you.',
      },
      {
        q: 'Do you need our logins or code?',
        a: 'No. The persona uses your bot the way anyone does, from its own inbox and number. A portal account or a helpdesk export only if you give them.',
      },
      {
        q: 'Does the persona say it’s an AI?',
        a: 'When a person joins the chat or replies by email, the persona tells them it’s an AI. With the bot itself, your event log keeps both sides word for word.',
      },
      {
        q: 'Will our bot’s vendor bill us for the tests?',
        a: 'No. Every Support bot check test on your own bot is tagged, and we agree the tag with your vendor before the first one runs.',
      },
      {
        q: 'Which bots can Support bot check cover?',
        a: 'Support bot check covers any bot a person can reach, from a vendor or built in house: site chat, a help centre, email, a portal, WhatsApp or text.',
      },
      {
        q: 'Can Support bot check cover a client’s bot?',
        a: 'Yes, with the client’s agreement. Each Support bot check carries your agency’s name, and the client can open every transcript.',
      },
    ],
  },

  final: {
    heading: 'Hear what your support bot tells customers, before they tell you.',
    sub: 'Tell us which bot to ask and who the persona should be. We’ll set up your first run with you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-support-bot-final',
      button: 'Request early access',
      interest: 'support-bot',
    },
  },
}
