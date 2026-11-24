import { plans, prices } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /alternatives/e2b (wave 2, 23 Nov 2026: _research/seo/wave2-pull-23nov/PLAN.md, page 6). Every tool fact is from the
   tool's own pricing page, read 23 Nov 2026; the open-source projects from their GitHub pages the same day
   (_research/seo/wave2-pull-23nov/research/alternatives-e2b.json). Hourly figures for E2B and Modal are worked from
   their per-second rates and labelled "about". "sandbox for ai agents" stays with /sandbox. Obsession's side: the sandbox
   piece, billed only while the CPU works, beside the agent's inbox, number and browser, and the Train and test agents
   blueprints. Prices are read from prices.ts, never retyped. */

const E2B_PRICING = 'https://e2b.dev/pricing'
const E2B_RUNTIME = 'https://github.com/e2b-dev/runtime'
const DAYTONA = 'https://www.daytona.io/pricing'
const DAYTONA_GH = 'https://github.com/daytonaio/daytona'
const MODAL = 'https://modal.com/pricing'
const VERCEL = 'https://vercel.com/docs/sandbox/pricing'
const NORTHFLANK = 'https://northflank.com/pricing'
const RUNLOOP = 'https://www.runloop.ai/pricing'
const MICROSANDBOX = 'https://github.com/superradcompany/microsandbox'

const paid = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const PAID = `${paid.slice(0, -1).join(', ')} or ${paid[paid.length - 1]} a month`
const freePlan = plans.find((p) => p.id === 'free') ?? plans[0]
const freeHours = freePlan.allowances.sandbox ?? 0

export const ref: ReferencePage = {
  kind: 'alternatives',
  name: 'E2B alternatives',
  company: 'E2B',
  line: 'Hosted code sandboxes, open-source microVMs you run yourself, and a sandbox beside the agent’s inbox, number and browser.',
  meta: {
    path: '/alternatives/e2b',
    title: 'E2B alternatives (2026): 7 code sandboxes for AI agents',
    description:
      'E2B alternatives by job: hosted code sandboxes, open-source microVMs you run yourself, and a sandbox beside an agent’s inbox, number and browser.',
    answer: `The main E2B alternatives are Daytona, Modal Sandboxes, Vercel Sandbox, Northflank and Runloop for hosted code sandboxes, and microsandbox or E2B’s own open-source runtime to run on your own hardware. Obsession’s sandbox is billed only while the CPU works, at ${prices.sandbox.amount} an active vCPU hour. It sits beside the agent’s inbox, phone number and browser on the same key and bill.`,
    ogImage: '/og/alternatives-e2b.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
      { name: 'E2B', path: '/alternatives/e2b' },
    ],
  },
  title: 'E2B alternatives: code sandboxes for AI agents, hosted and open source',
  dek: 'Teams look past E2B for longer sessions on a free plan, billing that pauses while the CPU waits on a model, or sandboxes in their own cloud. Others want the sandbox beside the agent’s inbox and browser. Each option is sorted by the job it does, with its price as listed.',
  primaryKeyword: 'e2b alternatives',
  keywords: ['e2b alternative', 'e2b sandbox alternative', 'e2b alternatives open source'],
  checked: '2026-11-23',
  readingMinutes: 7,
  reader: 'developers',
  art: {
    kind: 'sides',
    title: 'Where an agent’s code runs',
    rows: [
      {
        name: 'Hosted sandboxes',
        who: 'E2B, Daytona, Modal, Vercel, Runloop',
        nodes: ['Your agent', 'A sandbox in their cloud', 'Output and files'],
        links: ['starts', 'returns'],
      },
      {
        name: 'Your cloud account',
        who: 'Northflank',
        nodes: ['Your cluster', 'Isolated sandboxes'],
        links: ['runs'],
      },
      {
        name: 'Open source',
        who: 'microsandbox, E2B Runtime',
        nodes: ['Your own servers', 'MicroVMs you run'],
        links: ['host'],
      },
      {
        name: 'Obsession',
        who: 'Sandbox, Email, Phone, Browser',
        nodes: ['One persona', 'Sandbox, inbox and browser', 'One event log'],
        links: ['holds', 'writes to'],
        lit: 1,
        ours: true,
      },
    ],
    foot: 'Each row follows the tools’ own pages, checked 23 November 2026.',
  },
  blocks: [
    { kind: 'h2', id: 'why', text: 'Why teams look for an E2B alternative' },
    {
      kind: 'p',
      text: `E2B gives every agent session its own Firecracker microVM, a small isolated Linux machine that starts from a snapshot and can pause and resume. Its runtime is open source, and it bills by the second. [Its pricing page](${E2B_PRICING}), checked on 23 November 2026, lists $0.000014 per vCPU-second and $0.0000045 per GiB-second, about $0.05 a vCPU hour and $0.016 a GiB hour, and shows where teams look elsewhere:`,
    },
    {
      kind: 'list',
      items: [
        '**Session length on the free plan.** Hobby is free with a one-time $100 credit, and each session runs up to 1 hour. Pro raises that to 24 hours.',
        '**A plan fee before usage.** Pro is $150 a month, plus usage, for 24-hour sessions and 100 sandboxes at once.',
        '**Billed while it runs.** Its rate applies by the second while the sandbox runs, so time an agent spends waiting on a model is billed unless the sandbox is paused.',
        '**A sandbox, not the rest of the agent.** Its pages don’t describe an inbox, a phone number or a browser that stays signed in.',
      ],
    },

    { kind: 'h2', id: 'by-job', text: 'E2B alternatives by job', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'From each tool’s own pages, checked 23 November 2026, with the price each lists. Figures marked about are worked from per-second rates.',
      cols: ['Option', 'What it does well', 'Price as listed', 'Where it stops', 'Best for'],
      rows: [
        [
          'Daytona: sandboxes billed per second',
          'Creation in under 90 ms by its own figure, with Windows and macOS rates listed',
          '$200 of free compute\nvCPU $0.0504 an hour\nMemory $0.0162 a GiB hour',
          'Its public repository stopped receiving updates in June 2026',
          'Agents that start many short sandboxes',
        ],
        [
          'Modal: Sandboxes',
          'Sandboxes on a compute cloud with GPUs',
          'Starter: $30 a month of credit\nCPU about $0.142 a core hour, 2 vCPUs a core\nMemory about $0.024 a GiB hour',
          'Priced at its non-preemptible rates',
          'Agents that need GPUs beside their code',
        ],
        [
          'Vercel: Sandbox',
          'Bills active CPU, so time waiting on a model call isn’t counted',
          'Hobby: 5 active CPU hours a month\nPro: $0.128 an active CPU hour\nMemory $0.0212 a GB hour',
          'Sessions up to 45 minutes on Hobby, 24 hours on Pro',
          'Teams already deploying on Vercel',
        ],
        [
          'Northflank: sandboxes on its cloud or yours',
          'MicroVM and gVisor isolation on every plan, with bring-your-own-cloud',
          'Free: up to $20 a month of resources\nCPU $0.01667 a vCPU hour\nMemory $0.00833 a GB hour',
          'A full hosting platform to learn, beyond sandboxes',
          'Teams that want sandboxes in their own cloud account',
        ],
        [
          'Runloop: devboxes for agents',
          'Micro-VM environments for coding agents',
          '$50 usage credit\nCPU $0.108 an hour, memory $0.0252 a GB hour\nPro $250 a month',
          'Sandbox rates not listed apart from devboxes',
          'Coding agents that need a full development machine',
        ],
        [
          'microsandbox and E2B Runtime: open source',
          'Local microVMs (Apache-2.0) and the code behind E2B Cloud (Apache-2.0)',
          'Free to run',
          'You run the machines and their isolation yourself',
          'Teams with their own servers',
        ],
        [
          'Obsession (ours): Sandbox, Email, Phone, Browser, Personas',
          'A sandbox per task, billed only while the CPU works, beside the agent’s inbox, number and browser',
          `Free: ${freeHours} sandbox hours\n${prices.sandbox.amount} an active vCPU hour\n${prices.memory.amount} a GiB hour\nPlans ${PAID}`,
          'Stops before payment unless given your own payment card',
          'Agents whose code runs on what they receive by email, text and browser',
        ],
      ],
    },
    { kind: 'h3', id: 'hosted', text: 'For hosted code sandboxes' },
    {
      kind: 'p',
      text: `[Daytona](${DAYTONA}) includes $200 of free compute with no credit card, then bills per second at $0.0504 a vCPU hour and $0.0162 a GiB hour, the same hourly figures as E2B. It promises “Sub 90ms sandbox creation from code to execution.” [Modal](${MODAL}) bills Sandboxes at “non-preemptible rates of 3x list price”. That is $0.00003942 per physical core per second, about $0.142 an hour for a core, which its FAQ equates to 2 vCPUs, and $0.00000667 per GiB per second. Starter includes $30 of credit a month. [Vercel Sandbox](${VERCEL}) bills active CPU at $0.128 an hour on Pro, and its docs say time spent waiting for network requests or AI model calls “does not count toward Active CPU”. Memory is $0.0212 a GB hour. Hobby includes 5 active CPU hours a month. [Runloop](${RUNLOOP}) offers micro-VM devboxes at $0.108 a CPU hour and $0.0252 a GB hour, with $50 of usage credit to start.`,
    },
    { kind: 'h3', id: 'own-cloud', text: 'For sandboxes in your own cloud account' },
    {
      kind: 'p',
      text: `[Northflank](${NORTHFLANK}) isolates every workload with microVMs and gVisor, on every plan. On its cloud, a vCPU hour is $0.01667 and a GB hour of memory $0.00833. In your own cloud account it bills $0.02083 per node vCPU hour and nothing for memory, while your cloud provider bills the machines. Its free Sandbox plan covers up to $20 a month of resources and one cluster of your own.`,
    },
    { kind: 'h3', id: 'open-source', text: 'Open-source E2B alternatives' },
    {
      kind: 'p',
      text: `[microsandbox](${MICROSANDBOX}), under Apache-2.0, runs untrusted code in fast local microVMs on Linux, macOS and Windows, with fork and snapshot. E2B is also open source: [E2B Runtime](${E2B_RUNTIME}), under Apache-2.0, is the code behind E2B Cloud, and its README says the same code runs “on your own hardware”. Daytona’s [public repository](${DAYTONA_GH}) can still be forked under AGPL-3.0, but its README says core development moved to a private codebase in June 2026 and the repository gets no further updates. With any of them, your team runs the servers and keeps the isolation patched.`,
    },
    { kind: 'h3', id: 'obsession', text: 'For a sandbox beside the agent’s inbox, number and browser' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `The [sandbox piece](/sandbox) gives an agent a computer in the cloud for each task. It runs code, installs packages with pip, npm or apt, and works with files. It reaches the internet only when you turn that on. obsession.sandboxes.create() starts one, and it stops when the task ends. It is billed only while the CPU works, at ${prices.sandbox.amount} an active vCPU hour and ${prices.memory.amount} a GiB hour, so a sandbox waiting on a model call costs almost nothing.`,
    },
    {
      kind: 'p',
      text: `What sets it apart is what sits beside the sandbox. A [persona](/personas) holds the agent’s own [inbox](/email), [phone number](/phone) and [browser](/browser) under one name. A spreadsheet that arrives by email can be uploaded to the sandbox, and the report the code makes can be sent back out. Every email, text, page and sandbox run lands in one event log. Teams training or testing agents start from [Train and test agents](/blueprints/train-and-test-agents), such as the [Nightly agent evaluation](/blueprints/nightly-agent-evaluation). The sandbox, inbox, number and browser are priced against four vendors on [AgentMail, Twilio, Browserbase and E2B in one API](/compare/agentmail-twilio-browserbase-e2b).`,
    },
    {
      kind: 'cta',
      text: 'A sandbox for each task, billed only while the CPU works, on the same key as the inbox and browser. No credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which E2B alternative to choose' },
    {
      kind: 'list',
      items: [
        '**You start many short sandboxes:** Daytona.',
        '**Your agent needs GPUs:** Modal.',
        '**You deploy on Vercel and your agent waits on models:** Vercel Sandbox, billed on active CPU.',
        '**Sandboxes must run in your own cloud account:** Northflank.',
        '**You run your own servers:** microsandbox, or E2B Runtime itself.',
        '**Long sessions where the CPU never rests:** a rate per running vCPU, such as E2B’s at about $0.05 an hour or Northflank’s at $0.01667, costs less than one billed on active CPU.',
        '**Your agent’s code works on what it receives by email, text and browser:** Obsession, with every piece on one key and one bill.',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best E2B alternative?',
          a: 'It depends on the job. Daytona suits many short sandboxes and Modal suits agents that need GPUs. Vercel Sandbox bills on active CPU, and Northflank runs sandboxes in your own cloud account. microsandbox and E2B Runtime run on your own servers, and Obsession fits when the sandbox has to sit beside the agent’s inbox, number and browser.',
        },
        {
          q: 'What is the best E2B sandbox alternative for long sessions?',
          a: 'Vercel Sandbox on Pro and E2B Pro both allow sessions up to 24 hours, checked on 23 November 2026. Vercel’s docs add that the limit resets each time a persistent sandbox stops and resumes, so its total lifetime has no fixed end.',
        },
        {
          q: 'Are there open-source E2B alternatives?',
          a: 'Yes. microsandbox runs local microVMs under Apache-2.0, and E2B’s own runtime is Apache-2.0 and runs on your own hardware. Daytona’s public repository can be forked under AGPL-3.0, but its README says it stopped receiving updates in June 2026.',
        },
        {
          q: 'How much does E2B cost?',
          a: `E2B lists Hobby free with a one-time $100 credit and 1-hour sessions, Pro at $150 a month plus usage, and $0.000014 per vCPU-second and $0.0000045 per GiB-second, checked on 23 November 2026. Obsession’s sandbox is ${prices.sandbox.amount} an active vCPU hour, billed only while the CPU works.`,
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Can an Obsession sandbox work on files the agent receives?',
          a: 'Yes. The sandbox sits under the same persona as the agent’s inbox and browser. A file that arrives by email, or is downloaded in the browser, can be uploaded to the sandbox and worked on in code, and the result sent back out. Every step lands in the same event log.',
          link: { label: 'See the sandbox piece', to: '/sandbox' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Pricing', publisher: 'E2B', url: E2B_PRICING },
    { title: 'Pricing', publisher: 'Daytona', url: DAYTONA },
    { title: 'Pricing', publisher: 'Modal', url: MODAL },
    { title: 'Vercel Sandbox pricing and quotas', publisher: 'Vercel', url: VERCEL, date: '2026-09-10' },
    { title: 'Pricing', publisher: 'Runloop', url: RUNLOOP },
    { title: 'Pricing', publisher: 'Northflank', url: NORTHFLANK },
    { title: 'superradcompany/microsandbox', publisher: 'GitHub', url: MICROSANDBOX },
    { title: 'e2b-dev/runtime', publisher: 'GitHub', url: E2B_RUNTIME },
    { title: 'daytonaio/daytona', publisher: 'GitHub', url: DAYTONA_GH },
  ],
  related: [
    '/compare/obsession-vs-e2b',
    '/compare/agentmail-twilio-browserbase-e2b',
    '/alternatives/agentmail',
    '/alternatives/browserbase',
    '/glossary/model-context-protocol',
    'best-sandbox-for-ai-agents',
    'how-to-test-ai-agents',
    'how-to-evaluate-ai-agent-performance',
    'ai-agent-infrastructure-stack',
    'recipe:nightly-agent-evaluation',
    '/sandbox',
    '/email',
    '/browser',
    '/personas',
    '/blueprints/train-and-test-agents',
    '/developers',
  ],
}
