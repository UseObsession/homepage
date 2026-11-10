import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/declared-agent. /agents owns "declared AI agent" and defines it for Obsession's own agents (docs/SEARCH.md
   §2); this page defines the general term and links /agents with that phrase as the anchor. */
const DEFINITION =
  'A declared agent is an AI agent that says it’s an AI, and which company it acts for, whenever it talks to a person or acts on a site, instead of passing as a human.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Declared agent',
  line: 'An AI agent that says it’s an AI, and who it works for, instead of passing as a person.',
  meta: {
    path: '/glossary/declared-agent',
    title: 'What is a declared agent? An AI agent that says it’s an AI',
    description:
      'A declared agent says it’s an AI, and which company it acts for, when it talks to people or acts on a site. What it means, and how a company can tell.',
    answer: `${DEFINITION} A company that meets one knows a machine is in the conversation, who is answerable for it, and where to write about it.`,
    ogImage: '/og/glossary-declared-agent.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Declared agent', path: '/glossary/declared-agent' },
    ],
  },
  title: 'Declared agent: an AI agent that says it’s an AI, and who it works for',
  dek: 'More customers now send an AI agent to sign up, ask a question or book. A declared one tells the company it meets what it is and who sent it.',
  primaryKeyword: 'declared agent meaning',
  keywords: ['what is a declared agent', 'declared agent definition', 'ai agent disclosure', 'identify ai agents'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'developers',
  term: { name: 'declared agent', alternateName: ['declared AI agent'], definition: DEFINITION },
  blocks: [
    { kind: 'h2', id: 'what-it-means', text: 'What makes an agent declared' },
    {
      kind: 'p',
      text: 'An AI agent is software that acts on its own: it fills in forms, reads emails, chats with support or makes a call. It is declared when it is open about two things wherever it meets people: that it is an AI, and which company it acts for. In a chat it says so in its first message. By phone it says so when the call connects. On a site, the signal can travel with every request.',
    },
    {
      kind: 'p',
      text: 'Saying it’s an AI is one half. The other is a company that answers for it: a name, a page that explains what the agent does and never does, and an address where anyone it met can ask what happened or ask it to stay away.',
    },
    { kind: 'h2', id: 'why-it-matters', text: 'Why declaring an agent matters to the companies it meets' },
    {
      kind: 'p',
      text: 'A support team that knows it is answering an AI can route the chat. A fraud or security team can tell a declared agent from a script that hides. A company with questions has someone to ask, instead of a stranger it can only block. Some places already require a business’s own bots to say they are bots, as the guide to [chatbot disclosure laws](/blog/chatbot-disclosure-laws) explains.',
    },
    { kind: 'h2', id: 'how-a-site-tells', text: 'How a site can tell a declared agent' },
    {
      kind: 'p',
      text: 'In words, the agent says what it is when it talks to a person. In its traffic, [Web Bot Auth](/glossary/web-bot-auth) lets an agent sign each request so a site can check which company’s agent is visiting. Neither is a login: a declared agent still uses the pages and forms any customer can, and a site still decides what to show it.',
    },
    { kind: 'h2', id: 'obsession', text: 'Where Obsession’s agents fit' },
    {
      kind: 'p',
      text: `${ENTITY} Every Obsession agent is a [declared AI agent](/agents): it says it’s an AI agent from Obsession when it talks to a person, links to the page that explains it, never gets round a CAPTCHA or a bot block, and keeps every receipt as it arrived. Who asked for the visit stays private unless they choose to be named.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is a declared agent the same as a verified bot?',
          a: 'Not quite. A declared agent says what it is and who it works for. A verified bot is one a site or a network has checked, for example by a signature. An agent can be both.',
        },
        {
          q: 'What should a company do when a declared agent signs up?',
          a: 'Treat it as any customer, or ask the company behind it what it did. A declared agent names who answers for it.',
          link: { label: 'Saw an Obsession agent?', to: '/agents' },
        },
        {
          q: 'Does a declared agent need permission to visit a site?',
          a: 'It uses the pages and forms any customer can use. A company can still ask the company behind it to keep its agents off its site, and Obsession stops when asked.',
        },
      ],
    },
  ],
  sources: [],
  related: [
    '/agents',
    '/glossary/web-bot-auth',
    '/glossary/login-wall',
    '/glossary/headless-browser',
    '/compare/obsession-vs-browserbase',
    'chatbot-disclosure-laws',
    'agent-ready-website',
    'can-ai-agents-log-in-to-websites',
    'recipe:ai-disclosure-check',
  ],
}
