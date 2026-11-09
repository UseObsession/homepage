import type { Recipe } from '../types'

/* Support bot check (/recipes/support-bot-check). Check your AI agents. Screen: botcheck (the 07:00 run on chat, email
   and the portal; the refund window says 30 days on chat where the policy says 14; the portal's promised email never
   arrives).
   The 9 Nov story: the record of what support bots tell customers: every answer and wait on chat, email and portals,
   dated, with the transcript. The reader's own bot, read against their policy pages each morning, and competitors'
   bots on the questions any customer can ask. No real AI agent check has run yet, so the run is an example. Tests on
   the reader's own bot are tagged, agreed with the vendor, so none is billed. No vendor or product names. */

export const recipe: Recipe = {
  id: 'support-bot',
  slug: 'support-bot-check',
  name: 'Support bot check',
  group: 'Check your AI agents',
  line: 'What support bots tell customers on chat, email and portals, every answer dated: yours and your competitors’.',
  gets: 'Every answer and wait, with the transcript, beside your policy page as it read that minute.',
  kit: [
    'A customer profile with its own inbox and number',
    'A test account on your portal, if you give one',
    'Your policy pages, captured each run',
    'Every channel the bot answers on',
    'Every transcript kept with its time',
    'Answers in Slack, a sheet or the API',
  ],

  meta: {
    path: '/recipes/support-bot-check',
    title: 'Support bot check: what your AI chatbot tells customers',
    description:
      'Support bot check records what support bots tell customers on chat, email and portals, each answer dated with its transcript: yours and competitors’.',
    answer:
      'Support bot check is the record of what support bots tell customers: every answer and wait on chat, email and portals, dated, with the transcript. Obsession asks your bot what customers ask each morning and sets each answer beside your policy page, and asks your competitors’ bots the same.',
    ogImage: '/og/support-bot-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Support bot check', path: '/recipes/support-bot-check' },
    ],
  },

  hero: {
    headline: 'What your support bot tells customers, every morning.',
    sub: 'Support bot check is the record of what support bots tell customers: every answer and wait on chat, email and portals, dated, with the transcript. Obsession asks your bot what customers ask each morning and sets each answer beside your policy page, and asks your competitors’ bots the same.',
    screen: 'botcheck',
    capture: {
      kind: 'waitlist',
      source: 'recipe-support-bot-hero',
      button: 'Request early access',
      interest: 'support-bot',
    },
  },

  run: {
    tab: 'Example: your support bot, daily',
    recipe: 'support-bot',
    task: 'Every morning, ask our support bot what a customer asks, on chat, email and our portal. Set each answer beside our policy pages.',
    targets: 'Your support bot: chat, email and your portal',
    journey: ['Say it’s an AI, ask about a return', 'Ask for a person', 'Wait for the promised email', 'Set beside your policy'],
    schedule: 'Daily at 07:00, and after every update',
    report: 'Slack, and every transcript by API',
    kit: ['Customer · UK, 1 order', '2 inboxes', 'A test account on your portal', 'Tagged as a test'],
    events: [
      { time: 'Mon 07:00', text: 'Obsession says it’s an AI and asks to return an order after 20 days, on chat, email and your portal.' },
      { time: 'Mon 07:02', text: 'Chat: “Yes, you have 30 days.” Your returns page, captured at 07:00, says 14. Email and the portal say 14.' },
      { time: 'Mon 07:04', text: 'Asks for a person. Chat hands over in 41 seconds, the portal in 3 minutes.' },
      { time: 'Mon 07:12', text: 'By email, a person replies in 12 minutes.' },
      { time: 'Mon 13:04', text: '6 hours on, the confirmation email the portal promised hasn’t arrived.' },
    ],
    finding: 'Chat gives a 30 day refund window where your policy says 14, and the email the portal promised never came.',
    fix: 'In #support at 07:03, the transcript beside your returns page, and the missing email flagged at 13:04.',
    ledger: 'Example run. 20 answers, 18 match your policy, every answer and wait dated.',
  },

  steps: [
    {
      title: 'Name the bots',
      line: 'Your site chat, help centre, support inbox, portal, WhatsApp or text, a client’s, or a competitor’s.',
    },
    {
      title: 'Pick the questions and the customer',
      line: 'The questions your customers ask most, asked as a new customer, a customer with an order or one about to cancel. Add your policy pages to read answers against.',
    },
    {
      title: 'Asked every morning',
      line: 'On every channel in the same minute, saying it’s an AI. Obsession asks for a person and watches its inbox for the email the bot promised.',
    },
    {
      title: 'Every answer lands where you work',
      line: 'Slack, a sheet or the API, with the transcript, the wait and the policy it matches or breaks.',
    },
  ],

  checks: [
    {
      group: 'What it tells customers',
      items: [
        { title: 'Says it’s an AI', line: 'In its first message, and truthfully every time a customer asks “Am I talking to a person?”' },
        { title: 'Refunds, returns and cancellations', line: 'Every answer beside your policy pages, captured the same minute.' },
        { title: 'Prices, fees and codes', line: 'The prices it quotes and the codes it hands out: live, right and in date.' },
        { title: 'The same answer everywhere', line: 'The same question on chat, email and your portal in the same minute.' },
      ],
    },
    {
      group: 'What happens next',
      items: [
        { title: 'A person when asked', line: 'Whether a person is offered, how long it takes, and whether someone answers.' },
        { title: 'Promises kept', line: 'The ticket, email or callback it promised, watched for until it arrives or the wait ends.' },
        { title: 'Stops after “No”', line: 'Whether it keeps going after “No, that didn’t help.”' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Your bill', line: 'Every test on your own bot is tagged, agreed with your vendor first, so none is billed as a resolution.' },
        { title: 'Hard questions', line: 'Hard or adversarial questions only on your own bot, and only if you want them.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every answer comes back with its transcript and its time.',
    items: [
      { format: 'An answer per question', line: 'Matches your policy or doesn’t, by channel.' },
      { format: 'The transcript', line: 'Every message on every channel, timed, beside the policy page as it read that minute.' },
      { format: 'What happened next', line: 'The promised email, ticket or callback, and when it arrived, or that it never did.' },
      { format: 'What changed', line: 'After every update to the bot, the answers that changed.' },
      { format: 'Competitors’ answers', line: 'The same questions to their bots, side by side with yours.' },
      { format: 'Slack, sheet or API', line: 'Every answer as a message, a row or JSON, with its transcript linked.' },
    ],
  },

  settings: [
    { k: 'Bots', v: 'Yours, a client’s or a competitor’s' },
    { k: 'Channels', v: 'Site chat, help centre, support inbox, portal, WhatsApp and text' },
    { k: 'Questions', v: 'The ones your customers ask most, and your own tricky cases' },
    { k: 'Persona', v: 'New customer, customer with an order, or one about to cancel' },
    { k: 'Policies', v: 'Your refund, returns, cancellation and delivery pages, captured each run' },
    { k: 'What counts', v: 'For example: a person within 3 minutes, the promised email within 1 hour' },
    { k: 'How often', v: 'Daily, and after every update to your bot' },
    { k: 'Where it lands', v: 'Slack, a sheet, a webhook or the API' },
  ],

  forWho: [
    { audience: 'agencies', line: 'A daily record of every bot you build or run for a client, every answer with its transcript.' },
    { audience: 'founders', line: 'Know what your bot told customers overnight, and hear the morning it gets a policy wrong.' },
    { audience: 'marketing', line: 'What competitors’ bots say about refunds, prices and switching, beside yours.' },
    { audience: 'developers', line: 'Read every answer from your code after each prompt or knowledge base change.' },
  ],

  table: {
    heading: 'A daily record, in place of transcripts read by hand.',
    cols: ['By hand', 'With Support bot check'],
    rows: [
      { label: 'A wrong answer', values: ['Found from a complaint, days later', 'Found the same morning, with the transcript'] },
      { label: 'Transcripts', values: ['Sampled by hand', 'Every answer, beside your policy'] },
      { label: 'Promised emails', values: ['Nobody checks they arrive', 'Watched until they arrive or the wait ends'] },
      { label: 'Chat against email', values: ['Never compared', 'The same question, the same minute'] },
      { label: 'Competitors’ bots', values: ['Asked once, by someone on the team', 'The same questions, every morning'] },
      { label: 'After an update', values: ['You hope nothing changed', 'Asked again the same day'] },
    ],
  },

  faq: {
    heading: 'It says it’s an AI. You set the rest.',
    items: [
      {
        q: 'How do we find out our chatbot is giving customers wrong answers?',
        a: 'Support bot check asks your bot what customers ask every morning and sets each answer beside your policy pages, so a wrong answer shows up the morning it starts.',
      },
      {
        q: 'Can Support bot check ask a competitor’s bot?',
        a: 'Yes. Support bot check asks a competitor’s bot the questions any customer can ask, says it’s an AI, and keeps every answer with its time. Who asked is never shown.',
      },
      {
        q: 'Do you need our logins or code?',
        a: 'No. Support bot check uses your bot the way your customers do. A portal test account or a helpdesk export only if you give them.',
      },
      {
        q: 'Will our bot’s vendor bill us for the tests?',
        a: 'No. Every Support bot check test on your own bot is tagged, and we agree that with your vendor before the first one runs.',
      },
      {
        q: 'Which bots can Support bot check cover?',
        a: 'Support bot check covers any bot a customer can reach, from a vendor or built in house: site chat, a help centre, email, a portal, WhatsApp or text.',
      },
      {
        q: 'Can Support bot check cover a client’s bot?',
        a: 'Yes, with the client’s agreement. The Support bot check record carries your agency’s name, and the client can open every transcript.',
      },
    ],
  },

  final: {
    heading: 'Hear what your support bot tells customers, before they tell you.',
    sub: 'Early access includes Support bot check on your bot and up to 5 companies added for you, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-support-bot-final',
      button: 'Request early access',
      interest: 'support-bot',
    },
  },
}
