import type { ReferencePage } from '../reference'

/* /glossary/ai-agent: for anyone meeting the word for the first time. The definition and the loop are from Anthropic's
   "Building effective agents" (19 Dec 2024), read 24 Nov 2026. Obsession lines are the site's own (ENTITY). The picture is
   one agent's loop at an invented company. */
const DEFINITION =
  'An AI agent is a program in which a language model decides its own steps and uses tools, such as email, a browser or a phone line, to finish a task.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'AI agent',
  line: 'A program where a language model chooses its own steps and uses tools to finish a task.',
  meta: {
    path: '/glossary/ai-agent',
    title: 'What is an AI agent? Meaning, how it works, what it needs',
    description:
      'An AI agent is a program where a language model picks its own steps and uses tools to finish a task. How the loop works and what an agent needs to act.',
    answer: `${DEFINITION} It repeats a loop: look at the task, pick a tool, read the result, and decide what to do next until the job is done or it must ask a person.`,
    ogImage: '/og/glossary-ai-agent.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'AI agent', path: '/glossary/ai-agent' },
    ],
  },
  title: 'AI agent: a language model that chooses its steps and uses tools',
  dek: 'A chatbot answers. An AI agent acts: it reads a goal, takes a step in the real world, checks what happened and takes the next one.',
  primaryKeyword: 'what is an ai agent',
  keywords: ['what is an ai agent', 'ai agent meaning', 'ai agent definition', 'ai agent vs chatbot', 'how do ai agents work'],
  checked: '2026-11-24',
  readingMinutes: 3,
  reader: 'developers',
  term: {
    name: 'AI agent',
    alternateName: ['agent', 'autonomous agent'],
    definition: DEFINITION,
  },
  art: {
    kind: 'log',
    title: 'Agent run · book a table for 4',
    who: 'An agent working for larkfield.example',
    rows: [
      { time: '10:00:02', text: 'Goal received: book a table for 4 on Friday', detail: 'From a person on the team', tone: 'info' },
      { time: '10:00:04', text: 'Tool chosen: browser', detail: 'Opens the restaurant’s booking page', tone: 'info' },
      { time: '10:00:19', text: 'Page read: Friday is full, Saturday has 7:30', detail: 'Result goes back to the model', tone: 'late' },
      { time: '10:00:21', text: 'Tool chosen: email', detail: 'Asks bookings@harbour.example about Friday', tone: 'info' },
      { time: '10:14:40', text: 'Reply read: a table at 8:00 on Friday', detail: 'Goal met, task closed', tone: 'ok' },
    ],
    foot: 'Larkfield and Harbour are invented companies. The agent chose its second step after reading the first result.',
  },
  blocks: [
    { kind: 'h2', id: 'what-makes-it-an-agent', text: 'What makes a program an agent' },
    {
      kind: 'p',
      text: 'Anthropic’s guide [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) separates two things. A workflow is a system where models and tools follow code paths set in advance. An agent is a system where the model directs its own process and tool use. The guide calls agents typically just models using tools based on feedback from their environment, in a loop.',
    },
    {
      kind: 'list',
      items: [
        '**A model:** the language model that reads the task and decides what to do.',
        '**Tools:** the ways it acts, such as sending an email, opening a page, placing a call or running code.',
        '**A loop:** it acts, reads the result, and chooses the next step until the job is done or a stop rule is reached.',
        '**A person at the edges:** the guide says an agent can pause at checkpoints or when blocked to ask a human.',
      ],
    },
    { kind: 'h2', id: 'what-an-agent-needs-to-act', text: 'What an agent needs to act in the real world' },
    {
      kind: 'p',
      text: 'A model on its own can only write text. To book, buy, chase or check anything, it needs the same things a new hire needs on day one: an email address that can send and receive, a phone number, a browser that stays signed in, and somewhere to run code. Without them, an agent can’t get a sign-in code, take a call or reply to a supplier.',
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, through one API and one bill. Its pieces are [email](/email) inboxes, [phone](/phone) numbers and texts, [messaging](/messaging), a [browser](/browser) and a [sandbox](/sandbox), and a [persona](/personas) puts them under one identity. Every event lands in one event log that developers read through the [API or MCP](/developers).',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the difference between an AI agent and a chatbot?',
          a: 'A chatbot replies to a message and waits. An agent takes steps toward a goal, using tools and reading the results, and keeps going until the task is done. Many agents also hold a chat, but the difference is that they act.',
        },
        {
          q: 'What is the difference between an AI agent and a workflow?',
          a: 'In a workflow the steps are fixed in code ahead of time. In an agent, the model chooses the steps as it goes. A workflow is more predictable, and an agent copes better with tasks where the steps can’t be known in advance.',
        },
        {
          q: 'Can an AI agent work without a person watching?',
          a: 'It can run alone for many steps, and it should stop at checkpoints, limits and anything that needs a person. Setting those stop rules is part of building one.',
          link: { label: 'What AI agents can do for a business', to: '/blog/what-can-ai-agents-do-for-business' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Building effective agents',
      publisher: 'Anthropic',
      url: 'https://www.anthropic.com/engineering/building-effective-agents',
      date: '2024-12-19',
    },
  ],
  related: [
    '/personas',
    '/email',
    '/phone',
    '/browser',
    '/glossary/ai-agent-harness',
    '/glossary/ai-agent-persona',
    '/glossary/model-context-protocol',
    'what-can-ai-agents-do-for-business',
    'ai-agent-infrastructure-stack',
  ],
}
