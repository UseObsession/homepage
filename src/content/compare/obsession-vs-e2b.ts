import { eventLogKept, plans, prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/obsession-vs-e2b (wave 2, batch A, page 9; _research/seo/wave2-pull-23nov/PLAN.md). Primary "obsession vs
   e2b"; secondaries "e2b vs obsession", "e2b vs" and "e2b pricing" (the brief's), and "e2b sandbox pricing" (suggested,
   US, 23 Nov 2026). Never "e2b alternatives": the alternatives page owns it. The bundle page also lists "e2b pricing" as a
   secondary: flagged to the lead, since this page now answers it in full.
   E2B's facts: its home page, pricing page and persistence docs, read live on 23 Nov 2026 and saved with their addresses
   in _research/seo/wave2-pull-23nov/research/obsession-vs-e2b.json. They agree with the bundle page's 22 Nov figures.
   The hourly figures are worked from E2B's per-second rates ($0.000014 x 3,600 = $0.0504; $0.0000045 x 3,600 = $0.0162).
   Left out: Enterprise's minimum commit (two readings disagreed on 23 Nov) and whether a paused sandbox is billed (its
   docs don't say). The angle: the sandbox piece against theirs, fairly, then the inbox, number and browser on the same
   key and bill, under one identity. Obsession's prices and plans come from prices.ts. */

const E2B = 'https://e2b.dev/'
const E2B_PRICING = 'https://e2b.dev/pricing'
const E2B_PERSIST = 'https://docs.e2b.dev/sandbox/persistence'

/* The paid plans as the site names them: "$20, $99 or $499". */
const paid = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const planLine = `Free, then ${paid.slice(0, -1).join(', ')} or ${paid[paid.length - 1]} a month; usage per piece`
const freeSandboxHours = plans.find((p) => p.id === 'free')?.allowances.sandbox ?? 0

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'Obsession vs E2B',
  company: 'E2B',
  line: 'E2B runs isolated cloud machines for AI agents. Obsession gives an agent a sandbox too, plus its own inbox, phone number and browser.',
  meta: {
    path: '/compare/obsession-vs-e2b',
    title: 'Obsession vs E2B (2026): a sandbox or the whole AI agent',
    description: `Obsession vs E2B: both give AI agents a cloud sandbox to run code. Obsession’s is ${prices.sandbox.amount} an active vCPU hour, with an inbox, number and browser.`,
    answer: `E2B and Obsession both give AI agents a cloud sandbox where they run the code they write, billed by use. E2B runs isolated microVMs at very high concurrency, with pause, fork and a version you can host yourself. Obsession adds the agent’s own inbox, phone number and browser on the same key and bill, under one identity. Its sandbox is ${prices.sandbox.amount} an active vCPU hour, billed only while the CPU works.`,
    ogImage: '/og/compare-obsession-vs-e2b.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Obsession vs E2B', path: '/compare/obsession-vs-e2b' },
    ],
  },
  title: 'Obsession vs E2B: a sandbox for code, or the whole agent around it',
  dek: 'E2B gives every AI agent a machine: an isolated cloud computer per session, at scale. Obsession gives an agent a sandbox too, then its own email address, phone number and browser, on one key and one bill.',
  primaryKeyword: 'obsession vs e2b',
  keywords: ['e2b vs obsession', 'e2b vs', 'e2b pricing', 'e2b sandbox pricing'],
  checked: '2026-11-23',
  readingMinutes: 6,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'One AI agent’s pieces',
    period: 'From E2B’s own pages, read 23 Nov 2026',
    cols: ['Piece', 'E2B', 'Obsession'],
    rows: [
      { name: 'Sandbox compute', cells: ['About $0.05 a running vCPU hour', `${prices.sandbox.amount} an active vCPU hour`], tone: 'info' },
      { name: 'Sandbox memory', cells: ['About $0.016 a GiB hour', `${prices.memory.amount} a GiB hour`], tone: 'info' },
      { name: 'Time spent waiting', cells: ['Pause it; resumes in about 1 second', 'Billed only while the CPU works'], tone: 'info' },
      { name: 'Computer use with a screen', cells: ['E2B Desktop', `A cloud browser, ${prices.browser.amount} an hour`], tone: 'info' },
      { name: 'Email inbox', cells: ['Not on its pages', `${prices.inbox.amount} an inbox a month`], tone: 'ok' },
      { name: 'Phone number and texts', cells: ['Not on its pages', `${prices.number.amount} a number a month`], tone: 'ok' },
      { name: 'One identity for all of it', cells: ['Not on its pages', 'A persona, free while it waits'], tone: 'ok' },
    ],
    notes: ['Not on its pages means E2B’s pages don’t describe it. E2B’s hourly figures are worked from its per-second rates.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-e2b-does', text: 'What E2B does well' },
    {
      kind: 'p',
      text: `As listed on 23 November 2026, [E2B’s home page](${E2B}) calls it “The agent cloud” and promises that every agent gets a machine. Each agent session runs in its own Linux microVM, a small virtual machine with its own kernel, built on Firecracker and started from a snapshot. Code Interpreter adds a call that runs Python or JavaScript and returns charts and tables, and Desktop adds a screen, mouse and keyboard for computer-use agents. Sandboxes can pause, resume, snapshot and fork.`,
    },
    {
      kind: 'p',
      text: 'Its page says over 100,000 teams build on E2B and 94 of the Fortune 100 have signed up. Over 3 billion sandboxes have started on it. It quotes Lewis Tunstall, a research engineer, on launching hundreds of sandboxes in the experiments behind Open R1. E2B is SOC 2 Type II and HIPAA compliant and runs in US, EU and Asia Pacific regions. It can also run inside your own AWS, Google Cloud or Azure account. E2B Embed puts the whole stack on one machine you host, and the runtime is open source under Apache 2.0. Its pages don’t describe an email inbox or a phone number for the agent.',
    },
    {
      kind: 'p',
      text: `On [its pricing page](${E2B_PRICING}), as listed on 23 November 2026, Hobby is free with a one-time $100 usage credit, sessions up to 1 hour and 10 sandboxes at once. Pro is $150 a month plus usage, with sessions up to 24 hours and 100 sandboxes at once, expandable to 1,100. Enterprise is custom, with multi-day sessions and deployment in your own cloud. Usage is billed per second of a running sandbox: $0.000014 per vCPU and $0.0000045 per GiB of memory, about $0.05 and $0.016 an hour. [Its docs](${E2B_PERSIST}) say a paused sandbox keeps its files, memory and running processes until you delete it, and resumes in about 1 second.`,
    },

    { kind: 'h2', id: 'what-obsession-gives', text: 'What Obsession gives the same agent' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `The [sandbox](/sandbox) does the same core job. obsession.sandboxes.create() gives the agent a computer in the cloud for one task, set apart from your own systems. There it runs the code it writes, installs packages and works with files. It starts when a task needs it and stops when the task ends. It costs ${prices.sandbox.amount} an active vCPU hour and ${prices.memory.amount} a GiB hour, billed for the seconds the CPU works, with ${freeSandboxHours} sandbox hours on the Free plan.`,
    },
    {
      kind: 'p',
      text: 'The same key adds what most agents need before the code runs. A statement arrives in the agent’s inbox, a login code arrives at its number, the browser signs in to download a report, and the sandbox runs on what came in. Each step reaches one webhook as an event: email.received, sms.received, page.visited and sandbox.finished.',
    },

    { kind: 'h2', id: 'side-by-side', text: 'E2B and Obsession side by side', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: `E2B’s row is from its own pages and [its pricing page](${E2B_PRICING}), as listed on 23 November 2026. Obsession’s row is from [pricing](/pricing).`,
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'E2B: Sandbox, Code Interpreter, Desktop, BYOC, Embed',
          'Isolated microVMs at very high concurrency, billed by the second, with pause, fork and self-hosting',
          'Hobby: free, $100 one-time credit\nPro $150 a month plus usage\nAbout $0.05 a running vCPU hour',
          'Sessions up to 1 hour on Hobby, 24 on Pro\nNo inbox or phone number on its pages',
          'Coding agents, evaluations and training runs at scale',
        ],
        [
          'Obsession (ours): Sandbox, Email, Phone, Messaging, Browser, Personas',
          'A sandbox beside the agent’s own inbox, number and browser, under one identity',
          planLine,
          'Stops before payment unless given the customer’s own payment card',
          'Agents that receive files and act on the web',
        ],
      ],
    },

    { kind: 'h2', id: 'when-to-use', text: 'When to use each' },
    {
      kind: 'list',
      items: [
        '**Use E2B** when the sandbox is the product: coding agents, evaluations and reinforcement learning runs across thousands of sessions at once. Its rate works out at about $0.05 a vCPU hour, which suits sessions that keep the CPU busy for hours.',
        '**Use E2B** when the machines must run in your own cloud account or on hardware you host, through its BYOC deployment or E2B Embed.',
        '**Use Obsession** when the agent also needs its own email address, phone number or a browser that stays signed in, and the code runs on what those bring in. One key, one webhook and one bill cover every piece.',
        '**Weigh the waiting.** E2B bills each second a sandbox runs, and lets you pause one and resume it in about a second; its pages don’t say whether a paused sandbox is billed. Obsession bills the seconds the CPU works, so a sandbox that waits on a reply costs almost nothing.',
      ],
    },

    { kind: 'h2', id: 'one-identity', text: 'The sandbox, inbox and number under one name' },
    {
      kind: 'p',
      text: 'obsession.personas.create({ inbox: true, phone: "US", browser: true }) gives one agent an inbox, a number and a browser under one name. A sandbox joins it when a task needs one. A persona is free while it waits and wakes in about 50 ms when an email, text or call arrives, without a machine to start.',
    },
    {
      kind: 'p',
      text: `Every email, text, call, page and sandbox run lands in one [event log](/personas), in order and dated, at ${prices.log.amount} ${prices.log.unit}. Events are kept for ${eventLogKept}.`,
    },
    {
      kind: 'note',
      title: 'What every Obsession agent keeps to',
      text: 'Each agent signs in only with the logins you give it and works within a monthly spend limit you set on its key. Enterprise adds an account per team and SSO. Every agent says it’s an AI when it talks to a person, stops before payment unless given the customer’s own payment card, never uses fake payment details and never clicks paid ads at volume. The full lines are on [the page for companies an agent visits](/agents).',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'Is Obsession an E2B alternative?',
          a: 'For the sandbox, yes. Both give an AI agent an isolated computer in the cloud to run its code, billed by use. E2B goes further on concurrency and self-hosting. Obsession gives the same agent its own inbox, phone number and browser on one key.',
        },
        {
          q: 'How much does E2B cost?',
          a: 'As listed on 23 November 2026, Hobby is free with a one-time $100 usage credit and sessions up to 1 hour. Pro is $150 a month plus usage, with sessions up to 24 hours. Usage is $0.000014 per vCPU second and $0.0000045 per GiB second of a running sandbox, about $0.05 and $0.016 an hour.',
        },
        {
          q: 'How does Obsession’s sandbox price compare with E2B’s?',
          a: `Obsession’s sandbox is ${prices.sandbox.amount} an active vCPU hour and ${prices.memory.amount} a GiB hour. E2B’s rate per running vCPU hour is lower for a CPU that stays busy. Obsession bills the seconds the CPU works, so time a sandbox spends waiting on a task costs almost nothing.`,
          link: { label: 'See every rate', to: '/pricing/rates' },
        },
        {
          q: 'Does E2B give agents an email inbox or a phone number?',
          a: 'Its pages, checked on 23 November 2026, describe sandboxes, Code Interpreter and Desktop, and don’t describe an inbox or a number. On Obsession, the agent’s inbox and number sit beside the sandbox, and codes reach your webhook as email.received or sms.received.',
          link: { label: 'See the email piece', to: '/email' },
        },
        {
          q: 'Can I use E2B and Obsession together?',
          a: 'Yes. Keep E2B for heavy code runs, and give the same agent an Obsession inbox, number and browser. Moving the sandbox too puts every run beside every email, text and page in one event log and one bill.',
        },
      ],
    },
  ],
  sources: [
    { title: 'E2B: the agent cloud', publisher: 'E2B', url: E2B },
    { title: 'Pricing', publisher: 'E2B', url: E2B_PRICING },
    { title: 'Sandbox persistence', publisher: 'E2B', url: E2B_PERSIST },
  ],
  related: [
    '/sandbox',
    '/email',
    '/phone',
    '/browser',
    '/personas',
    '/developers',
    '/compare/agentmail-twilio-browserbase-e2b',
    '/compare/obsession-vs-browserbase',
    '/compare/obsession-vs-agentmail',
    '/blueprints/train-and-test-agents',
    'rl-environments-for-llms',
    'how-to-evaluate-ai-agent-performance',
    '/agents',
  ],
}
