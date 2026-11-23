import type { ReferencePage } from '../reference'

/* /glossary/ai-agent-harness: for a developer building an agent. Facts from Anthropic's "Effective harnesses for
   long-running agents" (26 Nov 2025, which calls the Claude Agent SDK a general-purpose agent harness) and "Building
   effective agents", read 24 Nov 2026. The picture is one harness turn at an invented company. */
const DEFINITION =
  'An AI agent harness is the code around a language model that runs its loop, gives it tools and memory, and enforces the limits it must stay inside.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'AI agent harness',
  line: 'The code around a model that runs its loop, supplies tools and memory, and enforces limits.',
  meta: {
    path: '/glossary/ai-agent-harness',
    title: 'What is an AI agent harness? Loop, tools, memory, limits',
    description:
      'An AI agent harness is the code around a model that runs its loop, supplies tools and memory and enforces limits. What it holds, and what it is not.',
    answer: `${DEFINITION} The model supplies the reasoning, and the harness supplies everything else an agent needs to finish a task: what it can call, what it remembers and when it must stop.`,
    ogImage: '/og/glossary-ai-agent-harness.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'AI agent harness', path: '/glossary/ai-agent-harness' },
    ],
  },
  title: 'AI agent harness: the loop, tools, memory and limits around a model',
  dek: 'The model decides. The harness is what lets the decision happen: it calls the tools, keeps the context and stops the run.',
  primaryKeyword: 'ai agent harness',
  keywords: ['ai agent harness', 'what is an agent harness', 'agent harness meaning', 'agent harness vs framework', 'agent runtime'],
  checked: '2026-11-24',
  readingMinutes: 3,
  reader: 'developers',
  term: {
    name: 'AI agent harness',
    alternateName: ['agent harness', 'agent scaffold'],
    definition: DEFINITION,
  },
  art: {
    kind: 'log',
    title: 'Harness · one turn of an invoice agent',
    who: 'A harness running for northwind.example',
    rows: [
      { time: '14:02:01', text: 'Context built from the task and the run so far', detail: 'Memory: 3 earlier steps loaded', tone: 'info' },
      { time: '14:02:02', text: 'Model asked for its next step', detail: 'It asks to send a reminder email', tone: 'info' },
      { time: '14:02:02', text: 'Guardrail checked: reminders to customers allowed', detail: 'Payment calls are not', tone: 'ok' },
      { time: '14:02:03', text: 'Tool called: email, send reminder', detail: 'To accounts@brightpaper.example', tone: 'info' },
      { time: '14:02:04', text: 'Result returned to the model and saved', detail: 'Step 4 of at most 20', tone: 'ok' },
    ],
    foot: 'Northwind and Brightpaper are invented companies. The model chose the step, and the harness did everything around it.',
  },
  blocks: [
    { kind: 'h2', id: 'what-a-harness-holds', text: 'What an agent harness holds' },
    {
      kind: 'p',
      text: 'Anthropic’s guide [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) describes an agent as a model using tools in a loop, checking results from its environment at each step, and stopping when the task is done or a limit such as a maximum number of iterations is reached. The harness is the code that makes that loop run. Anthropic’s engineering team calls its [Claude Agent SDK](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) a general-purpose agent harness.',
    },
    {
      kind: 'list',
      items: [
        '**The loop:** ask the model for a step, run it, return the result, repeat.',
        '**Tools:** the list of things the model may call, each with a plain description of what it does.',
        '**Memory:** what is kept between steps, and between sessions for work that runs for days.',
        '**Guardrails:** the limits on what it may do, how many steps it gets and when a person must approve.',
      ],
    },
    { kind: 'h2', id: 'harness-versus-model', text: 'Harness versus model, framework and protocol' },
    {
      kind: 'p',
      text: 'The model is the reasoning, and it comes from a lab. The harness is the program wrapped around it, whether you wrote it or took it from an SDK. A framework is a kit for building harnesses. [MCP](/glossary/model-context-protocol) is one way a harness reaches tools, a standard connection rather than the loop itself.',
    },
    { kind: 'h2', id: 'what-a-harness-needs-to-reach', text: 'What a harness needs to reach' },
    {
      kind: 'p',
      text: 'A harness can only call what exists. For an agent that works with people outside your company, that means an inbox, a phone number, messaging and a browser, each reachable as a tool. Obsession is the toolkit for AI agents, through one API and one bill, and its pieces are those tools. A developer calls them from their own harness through the [API, SDKs or MCP](/developers), and a [persona](/personas) keeps them under one identity.',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is an agent harness the same as an agent framework?',
          a: 'Not quite. A framework is a library for building the harness. The harness is the finished program that runs the loop, tools, memory and limits for one agent.',
        },
        {
          q: 'Does the harness or the model decide what the agent does?',
          a: 'The model proposes each step. The harness decides whether the step is allowed, runs it and returns the result, so it holds the limits the agent can’t talk its way past.',
        },
        {
          q: 'Do I need to build my own harness?',
          a: 'Many teams start from an SDK or a framework and add their own tools and limits. Building from scratch is worth it when you need control over memory, costs or what the agent may touch.',
          link: { label: 'How to build an AI agent from scratch', to: '/blog/how-to-build-an-ai-agent-from-scratch' },
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
    {
      title: 'Effective harnesses for long-running agents',
      publisher: 'Anthropic',
      url: 'https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents',
      date: '2025-11-26',
    },
  ],
  related: [
    '/developers',
    '/personas',
    '/glossary/ai-agent',
    '/glossary/model-context-protocol',
    '/glossary/webhook',
    'how-to-build-an-ai-agent-from-scratch',
    'ai-agent-tools-vs-mcp',
  ],
}
