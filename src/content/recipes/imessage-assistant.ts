import type { Recipe } from '../types'

/* iMessage assistant (/blueprints/imessage-assistant, 23 Nov 2026, wave 2: _research/seo/blueprints-22nov/PLAN.md).
   Build agent products: a starter developers fork. A persona with its own iMessage line and a number for people not on
   iMessage, plus an inbox and a sandbox when needed, with a working handler on message.received and sms.received. It
   says it's an AI in its first message, texts only people who messaged it first or gave the business their number, and
   stops before payment unless given the user's own card. Copies the pull of consumer assistants that run millions of
   messages on a managed line, and the cost of a self-run bridge that fails (no vendor or customer named). Owns "imessage
   ai agent" ("imessage ai agent", "imessage ai bot", "imessage chatbot": Google suggestions, 23 Nov); "imessage ai
   assistant" stays with /use-cases/imessage-ai-assistant and "imessage api" with /messaging, both linked. Screen:
   imessage. Mabel is invented, at mabel.example. The run: Maya's receipt photo split 4 ways in 3 seconds on iMessage
   (£83.20 plus 12.5% service is £93.60, £23.40 each); Leo, on Android, sets a reminder by text and gets it at 18:00 the
   next day. Example. */

export const recipe: Recipe = {
  id: 'imessage',
  slug: 'imessage-assistant',
  name: 'iMessage assistant',
  group: 'Build agent products',
  line: 'An AI agent on its own iMessage line, with a number for Android, answering every message.',
  gets: 'An assistant people text like a friend, with every message, reply and file in one event log.',
  kit: [
    'Its own iMessage line',
    'A number for people not on iMessage',
    'An inbox for confirmations and receipts',
    'A working handler on every message',
    'A sandbox for photos and files',
    'Every message in your event log',
  ],
  build: {
    line: 'An iMessage line and a number on one persona, with a handler on message.received that runs about 50 ms after each message lands. Keep it or replace it.',
    code: `await obsession.blueprints.run('imessage-assistant', {
  name: 'Mabel',
  number: 'UK',
  saysItsAnAI: true,
})
obsession.on('message.received', async (e) => {
  await e.reply(await myModel.answer(e.text, e.files)) // replaces our reply step
})`,
    events: [
      { kind: 'message.received', text: 'A message on its iMessage line, with any photo, voice note or file.' },
      { kind: 'sms.received', text: 'A text to its own number from someone not on iMessage.' },
      { kind: 'sandbox.finished', text: 'A photo or file worked on, with the result.' },
      { kind: 'blueprint.result', text: 'The reply, with its thread and the seconds it took.' },
    ],
  },

  meta: {
    path: '/blueprints/imessage-assistant',
    title: 'Run an iMessage AI agent, with a number for Android users',
    description:
      'Run an iMessage AI agent on its own line, with a number for people on Android. A working handler answers every message, and each thread lands in one log.',
    answer:
      'iMessage assistant gives your AI agent its own iMessage line and a number for people not on iMessage, under one persona. A working handler answers every message in its thread, photos and files included, and every message lands in your event log.',
    ogImage: '/og/imessage-assistant.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'iMessage assistant', path: '/blueprints/imessage-assistant' },
    ],
  },

  hero: {
    headline: 'Run an iMessage AI agent your users text like a friend.',
    sub: 'iMessage assistant gives your AI agent its own iMessage line and a number for people not on iMessage, under one persona. A working handler answers every message in its thread, photos and files included, and every message lands in your event log.',
    screen: 'imessage',
    capture: {
      kind: 'waitlist',
      source: 'recipe-imessage-hero',
      button: 'Start free',
      interest: 'imessage',
    },
  },

  buyer: 'For founders and engineers building an AI assistant people text.',
  unit: 'reply',
  per: 'line',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['20 replies on its own iMessage line', 'Read receipts and typing dots', 'Every message in your event log'] },
    { name: 'Launch', includes: ['Texts to people not on iMessage, from its own number', 'Photos and files worked on in a sandbox', 'Your own handler, in place of ours'] },
    { name: 'Growth', includes: ['Replies day and night from one line', 'Reminders it sends when a user asks for one', 'Messages by user and by day, in your event log'] },
    { name: 'Scale', includes: ['Your users spread across several lines', 'One persona and one event log across every line'] },
  ],

  run: {
    tab: 'A personal assistant, live',
    recipe: 'imessage',
    task: 'Answer every message to Mabel’s iMessage line and UK number in its own thread. Work on photos and files in a sandbox, and send a reminder when a user asks for one.',
    targets: 'Mabel’s users, on iMessage and by text',
    journey: ['A message arrives', 'Read it, photo and all', 'Answer in the thread', 'Remind them later, if asked'],
    schedule: 'Always on',
    report: 'Every message in your event log',
    kit: ['1 persona · Mabel', '1 iMessage line', '1 UK number for texts', 'A sandbox for files'],
    events: [
      { time: 'Fri 19:41:02', text: 'Maya sends a photo of a dinner receipt on iMessage: “Split this 4 ways?”' },
      { time: 'Fri 19:41:04', text: 'A sandbox reads 7 items and the 12.5% service charge: £93.60 in all.' },
      { time: 'Fri 19:41:05', text: 'Mabel replies in the thread, 3 seconds after the photo: “£23.40 each, service included.”' },
      { time: 'Fri 19:44:10', text: 'Leo, on an Android phone, texts Mabel’s number: “Remind me at 6 tomorrow to call Mum.”' },
      { time: 'Fri 19:44:12', text: 'Mabel texts back: “Done. I’ll text you at 18:00 tomorrow.”' },
      { time: 'Sat 18:00:00', text: 'The reminder reaches Leo’s phone by text, as he asked.' },
    ],
    finding: 'Two users on two kinds of phone, one assistant: Maya’s receipt split in 3 seconds on iMessage, and Leo’s reminder sent by text the next evening.',
    fix: 'Every message, the sandbox’s working and both replies in one event log, under Mabel’s one name.',
    ledger: '6 events across iMessage and texts, each with its time.',
  },

  steps: [
    {
      title: 'Get a line and a number',
      line: 'An iMessage line and a number for people not on iMessage, under one persona.',
    },
    {
      title: 'Give it a voice and rules',
      line: 'What it helps with, how it talks, and when it hands over to a person on your team.',
    },
    {
      title: 'It answers in the thread',
      line: 'Every message read, photos and files included, and answered where it was sent.',
    },
    {
      title: 'Change any step in code',
      line: 'Keep our handler on message.received or write your own, on the same line and event log.',
    },
  ],

  checks: [
    {
      group: 'In every thread',
      items: [
        { title: 'An ordinary iMessage chat', line: 'Read receipts and typing dots, from a line that belongs to your assistant.' },
        { title: 'Photos and files', line: 'A receipt, a screenshot or a spreadsheet, worked on in a sandbox.' },
        { title: 'Voice notes', line: 'Heard and answered in the same thread.' },
        { title: 'Reminders', line: 'Sent later, when a user asks for one in the thread.' },
      ],
    },
    {
      group: 'For people not on iMessage',
      items: [
        { title: 'Its own number', line: 'Plain texts to and from Android phones, answered by the same handler.' },
        { title: 'One name', line: 'The same assistant on iMessage, by text and by email.' },
        { title: 'Confirmations', line: 'Booking and order emails in its own inbox, read back in the thread.' },
        { title: 'One handler', line: 'iMessage and texts reach the same code.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Says it’s an AI', line: 'In its first message to every user.' },
        { title: 'Texts only people who asked', line: 'People who messaged it first, or gave your business their number to be texted.' },
        { title: 'Payments', line: 'It stops before payment unless given the user’s own card.' },
        { title: 'Your messages', line: 'Kept in your event log, for as long as your plan keeps events.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every message comes back answered, in the thread it came from.',
    items: [
      { format: 'Replies', line: 'On iMessage or by text, in each user’s own thread.' },
      { format: 'Files worked on', line: 'Each sandbox result kept beside the message that asked for it.' },
      { format: 'Every message', line: 'In your event log, by user and by day.' },
      { format: 'Reminders', line: 'Each one sent, with the time it reached the user.' },
      { format: 'Webhooks', line: 'Every message in, for your app or your database.' },
      { format: 'Your own handler', line: 'Our reply step swapped for your own model and tools.' },
    ],
  },

  settings: [
    { k: 'Line', v: 'Its own iMessage line, with your assistant’s name' },
    { k: 'Number', v: 'A US or UK number for people not on iMessage' },
    { k: 'Helps with', v: 'The jobs you set: plans, reminders, receipts and bookings' },
    { k: 'Hands over', v: 'To a person on your team, when a user asks for one' },
    { k: 'Says it’s an AI', v: 'In its first message to every user' },
    { k: 'Texts', v: 'Only to people who messaged first or gave you their number' },
    { k: 'Where it lands', v: 'Your event log, a webhook, your database or Slack' },
  ],

  table: {
    heading: 'An iMessage bridge you run needs looking after. A line on Obsession is one call.',
    cols: ['A bridge you run', 'With iMessage assistant'],
    rows: [
      { label: 'Setting up iMessage', values: ['Hardware and accounts to look after', 'A line in one call'] },
      { label: 'People on Android', values: ['A second texting provider', 'Its own number, the same handler'] },
      { label: 'Photos and files', values: ['Your own storage and code', 'A sandbox, with each result kept'] },
      { label: 'When the bridge stops', values: ['Silence until someone notices', 'Nothing of yours to restart'] },
      { label: 'Every message', values: ['Logs in several places', 'One event log, by user and by day'] },
      { label: 'The bill', values: ['A vendor for each part', 'One API key and one bill'] },
    ],
  },

  faq: {
    heading: 'A line, a number and a handler, under one name.',
    items: [
      {
        q: 'What is an iMessage AI agent?',
        a: 'An AI agent people text on iMessage, from a line that belongs to it, with read receipts and typing dots. This blueprint sets one up with a number for Android users and a handler you can keep or change.',
        link: { label: 'See the iMessage AI assistant use case', to: '/use-cases/imessage-ai-assistant' },
      },
      {
        q: 'How does my code send and receive messages?',
        a: 'Start it with obsession.blueprints.run, then handle message.received for iMessage and sms.received for texts. Your reply goes back through the same API, in the same thread.',
        link: { label: 'See the iMessage API and messaging for AI agents', to: '/messaging' },
      },
      {
        q: 'Will users know they’re texting an AI?',
        a: 'Yes. It says it’s an AI in its first message to every user, and hands over to a person on your team when someone asks.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'Who can it text?',
        a: 'People who messaged it first, or who gave your business their number to be texted. Texts from a US number need a paid plan and a US texting registration, known as 10DLC.',
        link: { label: 'See 10DLC registration', to: '/blog/10dlc-registration' },
      },
      {
        q: 'What about people on Android?',
        a: 'They text its number and get plain texts back, from the same assistant and the same handler.',
        link: { label: 'See phone numbers for AI agents', to: '/phone' },
      },
      {
        q: 'Can it work on photos and files?',
        a: 'Yes. A photo, a screenshot or a spreadsheet goes to a sandbox, a computer that runs code only when a task needs one, and the answer comes back in the thread.',
        link: { label: 'See sandboxes for AI agents', to: '/sandbox' },
      },
      {
        q: 'Do I need to run my own iMessage bridge?',
        a: 'No. The line runs on Obsession, so there’s no hardware or bridge for your team to look after.',
      },
      {
        q: 'What does iMessage assistant cost?',
        a: 'It’s billed on the pieces it uses, at list rates. That’s an iMessage line a month, a number, the texts to and from Android users, and the model tokens for each reply. Waiting between messages costs nothing.',
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Put your assistant where your users already text.',
    sub: 'Try it on the Free plan with 20 replies on its own line, and watch activation, messages per user and retention.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-imessage-final',
      button: 'Start free',
      interest: 'imessage',
    },
    link: { label: 'More blueprints to build agent products', to: '/blueprints/build-agent-products' },
  },
}
