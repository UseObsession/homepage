import type { ReferencePage } from '../reference'

/* /glossary/ai-agent-persona: the general meaning first, then Obsession's own noun. Obsession's definition is read from
   content/pieces/personas.ts and the site's ENTITY line. No outside source: the general meaning is the plain one and
   claims nothing about any standard. The picture is one persona at an invented company. */
const DEFINITION =
  'An AI agent persona is the identity an agent presents to the people and systems it deals with: a name, an email address, a phone number and the accounts it signs in to.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'AI agent persona',
  line: 'The identity an agent acts under: its name, inbox, number, channels and browser.',
  meta: {
    path: '/glossary/ai-agent-persona',
    title: 'What is an AI agent persona? One identity for an agent',
    description:
      'An AI agent persona is the identity an agent acts under: a name, inbox, phone number and browser. What it is and how Obsession puts them together.',
    answer: `${DEFINITION} In Obsession, a persona puts an agent’s inbox, phone number, messaging channels and browser profile under one identity, free while it waits.`,
    ogImage: '/og/glossary-ai-agent-persona.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'AI agent persona', path: '/glossary/ai-agent-persona' },
    ],
  },
  title: 'AI agent persona: the one identity an agent acts under',
  dek: 'A person has a name, an address and a number that stay the same from one task to the next. A persona gives an agent the same, so the people it deals with meet one consistent identity.',
  primaryKeyword: 'ai agent persona',
  keywords: ['ai agent persona', 'ai agent personas', 'agent identity', 'ai agent identity', 'persona for ai agents'],
  checked: '2026-11-24',
  readingMinutes: 3,
  reader: 'developers',
  term: {
    name: 'AI agent persona',
    alternateName: ['agent persona', 'AI agent identity'],
    definition: DEFINITION,
  },
  art: {
    kind: 'log',
    title: 'Persona “Juno” · larkfield.example',
    who: 'One persona, one event log',
    rows: [
      { time: '09:00:12', text: 'Persona created with an inbox, a US number and a browser', detail: 'juno@larkfield.example', tone: 'info' },
      { time: '09:04:30', text: 'Email sent to a supplier from the inbox', detail: 'Asks for a quote', tone: 'info' },
      { time: '09:05:10', text: 'Supplier’s portal signed in to in the browser', detail: 'Session kept for next time', tone: 'ok' },
      { time: '11:20:48', text: 'Text received on the number: a sign-in code', detail: 'Woke the persona in 50 ms', tone: 'ok' },
      { time: '11:20:52', text: 'Code entered, quote downloaded', detail: 'Every step dated, with screenshots', tone: 'ok' },
    ],
    foot: 'Larkfield and Juno are invented. The inbox, number and browser all belong to one identity.',
  },
  blocks: [
    { kind: 'h2', id: 'what-a-persona-is', text: 'What an AI agent persona is' },
    {
      kind: 'p',
      text: 'In general use, a persona for an AI agent is how it shows up to the world. Its name, its email address and number, the accounts it holds and the way it introduces itself are what other people and systems see. The same persona answering the same address over weeks is how a supplier, a website or a colleague learns to deal with it.',
    },
    {
      kind: 'p',
      text: 'It is different from a prompt that tells a model to write in a style. A style shapes the words. A persona is the working identity: where mail arrives, which number is called, which sign-ins persist.',
    },
    { kind: 'h2', id: 'what-a-persona-is-in-obsession', text: 'What a persona is in Obsession' },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, through one API and one bill. A [persona](/personas) puts the other pieces under one identity: an [email](/email) inbox, a [phone](/phone) number, [messaging](/messaging) channels, a [browser](/browser) profile and a [sandbox](/sandbox) when a task needs one. It is free while it waits, and a new email, text or call wakes it in 50 ms without starting a machine. It says it is an AI when it talks to a person.',
    },
    {
      kind: 'list',
      items: [
        '**One identity:** the inbox, number and browser belong together, so a code sent to the number can be used in the browser.',
        '**Long-lived:** it keeps its sign-ins and history for months.',
        '**Logged:** every page, email, text and call it handles lands in the event log, dated, with screenshots.',
        '**Limits:** it signs in only with the logins you give it, works within a monthly spend limit you set on its key, and stops before payment unless you give it your own payment card.',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is an AI agent persona the same as a character prompt?',
          a: 'No. A character prompt changes how the model writes. A persona is the set of real channels the agent works through: its inbox, number and browser.',
        },
        {
          q: 'Does a persona cost anything while it waits?',
          a: 'No. A persona is free while it waits and wakes in about 50 ms when an email, text or call arrives. You pay only for the pieces it uses.',
          link: { label: 'Personas', to: '/personas' },
        },
        {
          q: 'Does a persona hide that it is an AI?',
          a: 'No. An Obsession persona says it is an AI when it talks to a person.',
          link: { label: 'See personas', to: '/personas' },
        },
      ],
    },
  ],
  sources: [],
  related: [
    '/personas',
    '/email',
    '/phone',
    '/browser',
    '/glossary/ai-agent',
    '/glossary/voice-agent',
    '/glossary/webhook',
    'ai-employees',
  ],
}
