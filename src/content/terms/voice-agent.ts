import type { ReferencePage } from '../reference'

/* /glossary/voice-agent: for a founder or operator weighing a phone agent. The two build paths are from OpenAI's voice
   agents guide, read 24 Nov 2026. Obsession lines are the phone piece's own words. The picture is one inbound call at an
   invented clinic. */
const DEFINITION =
  'A voice agent is an AI agent that talks with people by speech, on a phone call or in an app, and can take actions such as booking, answering or following up.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Voice agent',
  line: 'An AI agent that speaks with people on a call or in an app and can take actions as it does.',
  meta: {
    path: '/glossary/voice-agent',
    title: 'What is a voice agent? How AI phone agents work and act',
    description:
      'A voice agent is an AI agent that talks by speech and can act on a call, such as booking or answering. Two common ways to build one and what it needs to run.',
    answer: `${DEFINITION} It listens, decides what to do, and replies in a spoken voice, either through one speech model or through a chain of listening, thinking and speaking steps.`,
    ogImage: '/og/glossary-voice-agent.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Voice agent', path: '/glossary/voice-agent' },
    ],
  },
  title: 'Voice agent: an AI agent that talks, and acts, on a call',
  dek: 'A voice agent answers the phone, speaks in real time and does the job behind the call. The voice is the front of it. The work is the tools it uses.',
  primaryKeyword: 'voice agent',
  keywords: ['voice agent', 'what is a voice agent', 'voice ai agent', 'ai voice agent', 'ai phone agent'],
  checked: '2026-11-24',
  readingMinutes: 3,
  reader: 'founders',
  term: {
    name: 'Voice agent',
    alternateName: ['voice AI agent', 'AI phone agent'],
    definition: DEFINITION,
  },
  art: {
    kind: 'log',
    title: 'Call log · harbourdental.example',
    who: 'A voice agent on the clinic’s line',
    rows: [
      { time: '08:12:04', text: 'Call received from +44 7700 900123', detail: 'Rings the clinic’s number', tone: 'info' },
      { time: '08:12:06', text: 'Agent says it is an AI and asks how it can help', detail: 'Caller wants a check-up', tone: 'info' },
      { time: '08:12:41', text: 'Tool called: calendar, Thursday slots', detail: '2 free: 9:30 and 14:00', tone: 'info' },
      { time: '08:13:10', text: 'Caller picks 9:30 on Thursday', detail: 'Booking written to the diary', tone: 'ok' },
      { time: '08:13:12', text: 'Confirmation text sent to the caller', detail: 'Call ended after 68 seconds', tone: 'ok' },
    ],
    foot: 'Harbour Dental and the number are invented. The agent booked a slot, and the call is saved as events.',
  },
  blocks: [
    { kind: 'h2', id: 'what-a-voice-agent-does', text: 'What a voice agent does' },
    {
      kind: 'p',
      text: 'OpenAI’s [voice agents guide](https://developers.openai.com/api/docs/guides/voice-agents) describes a voice agent as a way for people to ask questions and complete tasks by speaking with an application. On a phone line that means answering, understanding a request, doing something about it and speaking the result back.',
    },
    { kind: 'h2', id: 'two-ways-to-build-one', text: 'How a voice agent is built: one speech model or a chain' },
    {
      kind: 'list',
      items: [
        '**Speech to speech:** one model hears the audio, decides what to do and replies in speech.',
        '**A chained pipeline:** your own code runs speech to text, the agent’s thinking, then text to speech, so each stage can be inspected or replaced.',
      ],
    },
    { kind: 'h2', id: 'what-a-voice-agent-needs', text: 'What a voice agent needs besides a voice' },
    {
      kind: 'p',
      text: 'A voice agent needs a phone number that can take and place calls, texts for confirmations, and tools behind the call such as a diary, a CRM or a browser. It also needs to say it is an AI when it speaks to a person, and to stop where a person must take over.',
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, through one API and one bill. Its [phone](/phone) piece gives an agent a US number for calls and texts, a [persona](/personas) keeps the number, inbox and browser under one identity, and every call and text lands in the event log, dated. Teams with no engineers can run a blueprint such as [speed-to-lead callback](/blueprints/speed-to-lead-callback), or test the voice agent they have with [voice agent check](/blueprints/voice-agent-check).',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is a voice agent the same as an IVR phone menu?',
          a: 'No. A phone menu plays fixed options and waits for a key press. A voice agent understands free speech, chooses what to do and can use tools, so a caller can say what they want.',
        },
        {
          q: 'Does a voice agent have to say it is an AI?',
          a: 'It should. Rules on calls made with AI voices differ by country and by the kind of call, so check the rules where you operate before you launch.',
          link: { label: 'Can AI make phone calls?', to: '/blog/can-ai-make-phone-calls' },
        },
        {
          q: 'How do you test a voice agent?',
          a: 'Call it with scripted callers before real ones do, and check every answer and action it takes. Repeat after each change to its prompt, voice or tools.',
          link: { label: 'AI voice agent testing', to: '/blog/ai-voice-agent-testing' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Voice agents',
      publisher: 'OpenAI',
      url: 'https://developers.openai.com/api/docs/guides/voice-agents',
    },
  ],
  related: [
    '/phone',
    '/personas',
    '/glossary/ai-agent',
    '/glossary/ai-agent-persona',
    '/glossary/webhook',
    'ai-voice-agent-for-small-business',
    'ai-voice-agent-testing',
    'recipe:voice-agent-check',
  ],
}
