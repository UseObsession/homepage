import type { BlogPost } from './types'

/* Wave 2, batch A, page 3 (_research/seo/wave2-pull-23nov/PLAN.md, 23 Nov 2026): the best sandbox for AI agents.
   Primary "best sandbox for ai agents"; also "ai agent sandboxes compared" (Google suggestions, US and UK, 23 Nov 2026,
   autocomplete_23nov.json). Never the bare "sandbox for ai agents" or "code sandbox for ai agents", which /sandbox owns;
   this post links /sandbox with that phrase.
   Reader: developers and AI teams choosing where their agents run the code they write, and where training and
   evaluation runs execute. Serves /sandbox and /blueprints/train-and-test-agents.
   Every other service is described only from its own pricing, product and docs pages, each listed on 23 Nov 2026, with
   prices in US dollars as listed that day; every fact and its address is in
   _research/seo/wave2-pull-23nov/research/best-sandbox-for-ai-agents.json. Daytona's GitHub repository says core
   development moved to a private codebase in June 2026, so this post doesn't call Daytona open source. Obsession's
   prices are typed from src/content/prices.ts as it stood on 23 Nov 2026 (sandbox $0.12 an active vCPU hour, memory
   $0.015 a GiB hour; plans Free, $20, $99, $499); update them here if that file changes.
   The worked hour uses example inputs (2 vCPUs and 4 GiB, the size Vercel's own examples use, CPU busy 10% or all hour, the 10% Vercel's own
   examples assume for time waiting on model calls) at each provider's listed rates. fenwick.example and every row in its
   picture are invented. No dashes. */

const E2B = 'https://e2b.dev/'
const E2B_PRICING = 'https://e2b.dev/pricing'
const E2B_DOCS = 'https://docs.e2b.dev/'
const DAYTONA_PRICING = 'https://www.daytona.io/pricing'
const DAYTONA_BILLING = 'https://www.daytona.io/docs/en/billing/'
const DAYTONA_GH = 'https://github.com/daytonaio/daytona'
const RUNLOOP = 'https://www.runloop.ai/'
const RUNLOOP_PRICING = 'https://www.runloop.ai/pricing'
const MODAL_PRICING = 'https://modal.com/pricing'
const MODAL_RESOURCES = 'https://modal.com/docs/guide/resources'
const MODAL_SANDBOXES = 'https://modal.com/docs/guide/sandboxes'
const VERCEL = 'https://vercel.com/docs/sandbox/pricing'
const CF_SANDBOX = 'https://developers.cloudflare.com/sandbox/'
const CF_CONTAINERS = 'https://developers.cloudflare.com/containers/pricing/'
const NF_SANDBOXES = 'https://northflank.com/product/sandboxes'
const NF_PRICING = 'https://northflank.com/pricing'

export const post: BlogPost = {
  slug: 'best-sandbox-for-ai-agents',
  title: 'The best sandbox for AI agents: 7 compared on isolation, idle billing and price',
  dek: '7 code sandboxes compared on how each isolates an agent’s code, how fast it starts, what it bills while the agent waits on a model and how long a session runs. Prices as listed on 23 November 2026.',
  metaTitle: 'The best sandbox for AI agents: 7 priced for developers',
  description:
    'The best sandbox for AI agents, compared: E2B, Daytona, Modal, Vercel, Cloudflare, Northflank and Runloop on price, idle billing, start time and limits.',
  answer:
    'The best sandbox for AI agents depends on how much of each hour the agent spends waiting. E2B, Daytona and Northflank bill a running sandbox’s full size, while Vercel and Cloudflare bill CPU by active time. Obsession bills its sandbox by active CPU time, at $0.12 an active vCPU hour, beside the agent’s own inbox, phone number and browser.',
  primaryKeyword: 'best sandbox for ai agents',
  keywords: ['best sandbox for ai agents', 'ai agent sandboxes compared'],
  category: 'Train and test agents',
  order: 1,
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 11,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'Where an agent’s code runs',
      rows: [
        {
          name: 'Sandboxes for agents',
          who: 'E2B, Daytona, Runloop',
          nodes: ['Your agent', 'Its own sandbox', 'Code and files'],
          links: ['starts', 'runs'],
        },
        {
          name: 'On a cloud you already use',
          who: 'Modal, Vercel, Cloudflare, Northflank',
          nodes: ['Your app', 'Their compute', 'Code and files'],
          links: ['creates', 'runs'],
        },
        {
          name: 'Beside the agent’s other pieces',
          who: 'Obsession',
          nodes: ['Your agent', 'Sandbox, inbox, browser', 'One event log'],
          links: ['uses', 'writes to'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'Every option runs the agent’s code away from your systems. Obsession runs it beside the inbox and browser that bring the files in.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A sandbox for AI agents is a computer in the cloud, set apart from your own systems, where an agent runs the code it writes. It installs packages, works on files and returns the result, then stops. Coding agents test their changes in one, data agents run Python on a spreadsheet, and AI labs start thousands at once to train and score models on real tasks.',
    },
    { kind: 'p', text: 'These 7 services fall into 2 kinds:' },
    {
      kind: 'list',
      items: [
        '**Sandboxes built for agents:** E2B, Daytona and Runloop, which sell the sandbox itself, with SDKs to start one from an agent’s code.',
        '**Sandboxes on a cloud platform:** Modal, Vercel, Cloudflare and Northflank, which add sandboxes to compute a team may already run its app on.',
      ],
    },

    { kind: 'h2', id: 'checks', text: 'What to check before you choose' },
    {
      kind: 'list',
      items: [
        '**Isolation.** A microVM is a small virtual machine with its own kernel, the core of the operating system, so code in one sandbox can’t reach another through a shared kernel. A container shares the host’s kernel and adds a layer such as gVisor, a runtime from Google that intercepts the container’s calls to the kernel.',
        '**Start time.** An agent that starts a sandbox for each step waits for every start, so milliseconds add up over a task.',
        '**Billing while the agent waits.** An agent spends much of each hour waiting for its model to answer. Some providers bill the sandbox’s full size while it runs, and others bill CPU only while it works.',
        '**Session length and persistence.** How long one session may run, and whether its files and memory can be paused and resumed later.',
        '**Concurrency.** How many sandboxes can run at once, which matters most for training and evaluation runs.',
        '**Network access.** Whether code inside can reach the internet, and whether you can turn that off.',
      ],
    },
    {
      kind: 'p',
      text: 'Every service is described from its own pricing, product and documentation pages as listed on 23 November 2026, with prices in US dollars.',
    },

    { kind: 'h2', id: 'agent-sandboxes', text: 'Sandboxes built for agents' },

    { kind: 'h3', id: 'e2b', text: 'E2B' },
    {
      kind: 'p',
      text: '[E2B’s home page](' +
        E2B +
        ') reads “The AI Agent Cloud”. Every session gets a hardware-isolated Firecracker microVM, and parts of the stack are open source, including a single-node package under Apache 2.0. [Its docs](' +
        E2B_DOCS +
        ') say pausing saves a sandbox’s files and memory, and paused sandboxes are kept until you delete them.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** microVM isolation built for agents, with pause and resume that keeps memory as well as files.',
        '**Price as listed:** on [its pricing page](' +
          E2B_PRICING +
          '), a running sandbox costs $0.000014 per vCPU second and $0.0000045 per GiB second. That is about $0.05 a vCPU hour and $0.016 a GiB hour, with disk free. Hobby is $0 with a one-time $100 credit. Pro is $150 a month plus usage.',
        '**Where it stops:** sessions run 1 hour on Hobby and 24 hours on Pro, with 10 and 100 sandboxes at once.',
        '**Best for:** agent products that start a sandbox per user or per task and want microVM isolation.',
      ],
    },

    { kind: 'h3', id: 'daytona', text: 'Daytona' },
    {
      kind: 'p',
      text: '[Daytona’s pricing page](' +
        DAYTONA_PRICING +
        ') promises “Sub 90ms sandbox creation from code to execution”, billed by the second. Its [billing docs](' +
        DAYTONA_BILLING +
        ') charge a stopped sandbox for its disk only and an archived one nothing.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the fastest stated start here, and cheap storage for sandboxes kept between tasks.',
        '**Price as listed:** $0.0504 a vCPU hour, $0.0162 a GiB hour and $0.000108 a GiB hour of storage after 5 GiB free, billed by the second. New accounts get $200 of compute with no card.',
        '**Where it stops:** a started sandbox is billed for everything it reserves, and [its GitHub repository](' +
          DAYTONA_GH +
          ') says core development moved to a private codebase in June 2026.',
        '**Best for:** agents that start sandboxes often and keep some of them stopped between tasks.',
      ],
    },

    { kind: 'h3', id: 'runloop', text: 'Runloop' },
    {
      kind: 'p',
      text: '[Runloop’s home page](' +
        RUNLOOP +
        ') reads “Your AI Agent Accelerator”. Its devboxes start a 10 GB image in under 2 seconds, run more than 10,000 at once, and snapshot and branch their disk state.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** large images ready fast, with snapshots for branching an agent’s work and suspend and resume.',
        '**Price as listed:** on [its pricing page](' +
          RUNLOOP_PRICING +
          '), $0.108 a CPU hour and $0.0252 a GB hour of memory. Basic is free plus usage, and Pro $250 a month plus usage. A suspended devbox stops CPU and memory charges.',
        '**Where it stops:** suspend and resume are on Pro, and the page names no concurrency limit for paid plans.',
        '**Best for:** coding agents and evaluation teams that branch from snapshots of a repository.',
      ],
    },

    { kind: 'h2', id: 'cloud-sandboxes', text: 'Sandboxes on a cloud platform' },

    { kind: 'h3', id: 'modal', text: 'Modal' },
    {
      kind: 'p',
      text: '[Modal’s sandbox docs](' +
        MODAL_SANDBOXES +
        ') describe secure containers for untrusted code, on gVisor or on VMs with their own Linux kernel. A sandbox lives 5 minutes by default, up to 24 hours, and filesystem snapshots carry its state further.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** sandboxes on the same account as GPUs and functions, for teams running models and code side by side.',
        '**Price as listed:** on [its pricing page](' +
          MODAL_PRICING +
          '), $0.00003942 per physical core second, a core being 2 vCPUs on its FAQ, and $0.00000667 per GiB second, billed at non-preemptible rates of 3 times list price. Starter is $0 plus compute with $30 of monthly credit.',
        '**Where it stops:** [it bills](' +
          MODAL_RESOURCES +
          ') the higher of what a sandbox requests and what it uses, and a session runs 24 hours at most.',
        '**Best for:** teams already running models or batch jobs on Modal.',
      ],
    },

    { kind: 'h3', id: 'vercel', text: 'Vercel Sandbox' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [it bills Active CPU](' +
          VERCEL +
          '), time the code uses the processor, so time spent waiting on a model call doesn’t count. Persistent sandboxes resume after a stop, and Pro runs 10,000 at once.',
        '**Price as listed:** Pro charges $0.128 an active CPU hour and $0.0212 a GB hour of memory, against Pro’s $20 monthly credit. Hobby includes 5 active CPU hours a month.',
        '**Where it stops:** memory is billed for the whole time it is provisioned, and a session runs 45 minutes on Hobby and 24 hours on Pro.',
        '**Best for:** apps already on Vercel whose agents wait on model calls most of the time.',
      ],
    },

    { kind: 'h3', id: 'cloudflare', text: 'Cloudflare Sandboxes' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [sandboxes on Cloudflare](' +
          CF_SANDBOX +
          ') run untrusted code in Linux virtual machines or isolated Workers, with preview URLs for apps the code serves.',
        '**Price as listed:** on the Workers Paid plan at $5 a month, [Containers pricing](' +
          CF_CONTAINERS +
          ') charges $0.000020 per vCPU second of active use, about $0.07 an hour, and $0.0000025 per GiB second of memory. The plan includes 375 vCPU minutes and 25 GiB hours a month.',
        '**Where it stops:** memory and disk are billed on the size provisioned, and each sandbox also runs on Durable Objects and Workers, billed separately.',
        '**Best for:** teams whose app already runs on Cloudflare Workers.',
      ],
    },

    { kind: 'h3', id: 'northflank', text: 'Northflank' },
    {
      kind: 'p',
      text: '[Northflank’s sandbox page](' +
        NF_SANDBOXES +
        ') reads “Secure microVM sandboxes for untrusted code”. Each sandbox gets its own guest kernel on Cloud Hypervisor, is ready in 0.8 seconds with a cached image, and runs with no time limit until you delete it. Northflank says more than 50,000 can run at once, in its cloud or in your own cloud account.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the lowest compute rate here, microVM isolation and sessions that run for weeks.',
        '**Price as listed:** on [its pricing page](' +
          NF_PRICING +
          '), $0.01667 a vCPU hour and $0.00833 a GB hour, billed by the second. A free tier includes up to $20 of resources a month with no card.',
        '**Where it stops:** a running sandbox is billed for its full size, whether its code is busy or waiting.',
        '**Best for:** long-running sandboxes, and teams that need sandboxes inside their own cloud account.',
      ],
    },

    { kind: 'h2', id: 'compared', text: 'AI agent sandboxes compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Sandboxes for AI agents. Prices in US dollars from each provider’s own pages, as listed on 23 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Your own containers on a server', 'Full control, no per-second fee', 'Your servers and your team’s hours', 'Isolation, scaling and clean-up are yours to run', 'Trusted code at low volume'],
        [
          'Built for agents: E2B, Daytona, Runloop',
          'Fast starts, pause or snapshots, SDKs for agents',
          'E2B: about $0.05 a vCPU hour\nDaytona: $0.0504 a vCPU hour\nRunloop: $0.108 a CPU hour',
          'E2B: 24-hour sessions on Pro\nDaytona: full size billed while started\nRunloop: suspend on Pro',
          'Agent products starting a sandbox per task',
        ],
        [
          'On a cloud platform: Modal, Vercel, Cloudflare, Northflank',
          'Sandboxes beside compute the team already runs',
          'Modal: $0.00003942 a core second\nVercel: $0.128 an active CPU hour\nCloudflare: about $0.07 an active vCPU hour\nNorthflank: $0.01667 a vCPU hour',
          'Modal: 24 hours at most\nVercel: memory billed while provisioned\nCloudflare: Workers Paid required\nNorthflank: full size billed while running',
          'Teams already on that platform',
        ],
        [
          'Obsession (ours): [Sandbox](/sandbox), [Email](/email), [Browser](/browser), [Train and test agents](/blueprints/train-and-test-agents)',
          'A sandbox billed by active CPU time, beside the agent’s inbox, number and browser, every run in one event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Says it’s an AI to a person; stops at identity checks and CAPTCHAs',
          'Agents that work on the files their inbox and browser bring in',
        ],
      ],
    },

    { kind: 'h2', id: 'idle', text: 'What 1,000 sandbox hours cost when the agent waits' },
    {
      kind: 'p',
      text: 'An agent that calls a model on every step leaves its sandbox idle for much of each hour. Vercel’s own cost examples assume the CPU is busy 10% of the time for that reason. Taking a sandbox of 2 vCPUs and 4 GiB, the size Vercel’s own examples use, here is what 1,000 hours cost at each provider’s listed rates:',
    },
    {
      kind: 'table',
      caption: 'Example inputs: 2 vCPUs and 4 GiB of memory for 1,000 hours. Listed rates on 23 November 2026, before plan fees, credits and included amounts. Each provider sets the sizes it offers, so the nearest size sets the real bill',
      cols: ['Provider', 'CPU busy 10% of the time', 'CPU busy all the time', 'What is billed while it runs'],
      rows: [
        ['Cloudflare', '$50', '$180', 'CPU when active, memory as provisioned'],
        ['Northflank', '$67', '$67', 'vCPUs and memory, the full size'],
        ['Obsession', '$84', '$300', 'CPU when active, memory per GiB hour'],
        ['Vercel', '$110', '$341', 'CPU when active, memory as provisioned'],
        ['E2B', '$166', '$166', 'vCPUs and memory, the full size'],
        ['Daytona', '$166', '$166', 'Everything the sandbox reserves'],
        ['Modal', '$238', '$238', 'The higher of request or use, 1 core = 2 vCPUs'],
        ['Runloop', '$317', '$317', 'CPU and memory, the full size'],
      ],
    },
    {
      kind: 'p',
      text: 'The busy share decides the ranking. A reinforcement learning run can reach 1 million sandbox hours a month. At that scale and 10% busy, the same rates run from about $50,000 on Cloudflare to $317,000 on Runloop, with Obsession at $84,000. A sandbox that compiles or trains all hour costs least on Northflank, E2B and Daytona.',
    },

    { kind: 'h2', id: 'beside', text: 'A sandbox beside the agent’s inbox and browser' },
    {
      kind: 'p',
      text: 'Much of an agent’s code runs on something that just arrived: a CSV attached to an email, a PDF statement downloaded from a portal, a spreadsheet a supplier sent back. When the sandbox sits beside the inbox and the browser, the file moves from one to the other without another vendor, and every step lands in the same log.',
    },
    {
      kind: 'art',
      caption: 'A report arrives by email, code runs on it in a sandbox, and the rows that don’t match go out, before anyone starts work. Fenwick is an invented company.',
      art: {
        kind: 'log',
        title: 'A settlement report, checked at 06:00',
        who: 'Ledger agent at fenwick.example',
        rows: [
          { time: '06:00:02', text: 'Email received: daily settlement report', detail: 'settlements.csv attached', tone: 'info' },
          { time: '06:00:04', text: 'Sandbox started, report checked', detail: '1,204 rows in 1.8 s', tone: 'ok' },
          { time: '06:00:06', text: '3 rows don’t match the bank', detail: 'Listed row by row', tone: 'late' },
          { time: '06:00:07', text: 'Email sent to finance', detail: 'Sandbox stopped, billing stopped', tone: 'ok' },
        ],
        foot: 'The inbox brings the file in, the sandbox checks it and the inbox sends the answer, with every step in one event log.',
      },
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill. Its [code sandbox for AI agents](/sandbox) is a Linux computer that starts when a task needs it and stops when the task ends. Python and Node are ready, pip, npm and apt work as they do on your own machine, and the internet stays off until you allow it. Each sandbox is set apart from the others and from your systems, and every run lands in the event log beside the emails, texts and pages that led to it.',
    },
    {
      kind: 'list',
      items: [
        '**obsession.sandboxes.create()** starts a computer for one task. **sandbox.run("python report.py")** runs the agent’s code on it.',
        '**sandbox.finished** reaches your webhook, an address in your app that receives each result as it lands.',
        '**obsession.personas.create({ inbox: true, phone: "US", browser: true })** gives the same agent an inbox, a number and a browser under one identity.',
      ],
    },
    {
      kind: 'p',
      text: 'A sandbox is $0.12 an active vCPU hour, billed while the CPU works, and memory $0.015 a GiB hour. The Free plan includes 10 active vCPU hours ([every rate](/pricing/rates)). For training and evaluation, [Train and test agents](/blueprints/train-and-test-agents) gives each run its own sandbox, browser, inbox and number, started when it needs them. Every step lands in the event log, ready to score and replay.',
    },
    {
      kind: 'cta',
      text: 'Give your agent a computer for each task, beside its own inbox and browser, in one call. Free plan, no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which to choose, by job' },
    {
      kind: 'p',
      text: 'Use Obsession when your agent runs code on what its inbox or browser brings in, or when each training run needs a real inbox, number and browser as well as a computer. For the sandbox alone:',
    },
    {
      kind: 'list',
      items: [
        '**MicroVM isolation for an agent product:** E2B, with pause and resume that keeps memory.',
        '**The fastest stated start:** Daytona, under 90 milliseconds from code to execution.',
        '**Snapshots of large repositories for coding agents:** Runloop.',
        '**Agents that mostly wait on a model:** Vercel or Cloudflare, which bill CPU by active time.',
        '**Sandboxes that run for weeks, or inside your own cloud account:** Northflank.',
        '**Models and code on one account:** Modal.',
      ],
    },
    {
      kind: 'p',
      text: '[RL environments for LLMs](/blog/rl-environments-for-llms) explains how reinforcement learning (RL) training uses sandboxes, and [how to test AI agents](/blog/how-to-test-ai-agents) sets out evaluation runs step by step. An agent that also signs in to sites needs [the best browser for AI agents](/blog/best-browser-for-ai-agents), and [the AI agent infrastructure stack](/blog/ai-agent-infrastructure-stack) maps every layer. [AgentMail, Twilio, Browserbase and E2B in one API](/compare/agentmail-twilio-browserbase-e2b) prices 4 bills against one.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about sandboxes for AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best sandbox for AI agents?',
          a: 'It depends on how much of each hour the agent waits. E2B and Northflank give microVM isolation, Daytona states the fastest start, and Vercel and Cloudflare bill CPU by active time. Obsession bills its sandbox by active CPU time and runs it beside the agent’s own inbox, number and browser, with every run in one event log.',
        },
        {
          q: 'What does a code sandbox do for an AI agent?',
          a: 'It gives the agent a computer, set apart from your systems, to run the code it writes. The agent installs packages, works on files and returns the result, and the sandbox stops when the task ends.',
          link: { label: 'A code sandbox for AI agents', to: '/sandbox' },
        },
        {
          q: 'Which sandboxes bill CPU by active time?',
          a: 'As listed on 23 November 2026, Vercel bills Active CPU and Cloudflare bills vCPU on active use, with memory billed as provisioned at both. Obsession bills its sandbox by active CPU time. E2B, Daytona, Northflank and Runloop bill a running sandbox’s full size.',
        },
        {
          q: 'How fast does an AI agent sandbox start?',
          a: 'On their own pages, Daytona states under 90 milliseconds from code to execution and Northflank 0.8 seconds with a cached image. Runloop starts a 10 GB image in under 2 seconds. E2B says its sandboxes boot from a snapshot.',
        },
        {
          q: 'How long can an AI agent sandbox run?',
          a: 'E2B runs 1 hour on Hobby and 24 on Pro, Modal up to 24 hours, and Vercel 45 minutes on Hobby and 24 hours on Pro. Northflank sets no time limit. E2B and Runloop can pause or suspend a sandbox and resume it later.',
        },
        {
          q: 'Are there open source sandboxes for AI agents?',
          a: 'E2B publishes parts of its stack as open source, including a single-node package under Apache 2.0. Daytona’s repository stays free to fork, but it says core development moved to a private codebase in June 2026.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about another service comes from that service’s own pricing, product and documentation pages as listed on 23 November 2026, with prices in US dollars as shown that day. Start times and scale figures are each company’s own. We did not run the services. The hourly costs apply each provider’s listed rates to example inputs. Fenwick and every row in its picture are invented.',
    },
  ],

  sources: [
    { title: 'E2B home page', publisher: 'E2B', url: E2B },
    { title: 'E2B documentation', publisher: 'E2B', url: E2B_DOCS },
    { title: 'Pricing', publisher: 'E2B', url: E2B_PRICING },
    { title: 'Pricing', publisher: 'Daytona', url: DAYTONA_PRICING },
    { title: 'Billing', publisher: 'Daytona documentation', url: DAYTONA_BILLING },
    { title: 'daytona', publisher: 'GitHub', url: DAYTONA_GH },
    { title: 'Runloop home page', publisher: 'Runloop', url: RUNLOOP },
    { title: 'Pricing', publisher: 'Runloop', url: RUNLOOP_PRICING },
    { title: 'Sandboxes', publisher: 'Modal documentation', url: MODAL_SANDBOXES },
    { title: 'Pricing', publisher: 'Modal', url: MODAL_PRICING },
    { title: 'Reserving CPU and memory', publisher: 'Modal documentation', url: MODAL_RESOURCES },
    { title: 'Vercel Sandbox pricing and quotas', publisher: 'Vercel documentation', url: VERCEL, date: '2026-09-10' },
    { title: 'Sandboxes on Cloudflare', publisher: 'Cloudflare documentation', url: CF_SANDBOX },
    { title: 'Containers pricing', publisher: 'Cloudflare documentation', url: CF_CONTAINERS },
    { title: 'Sandboxes', publisher: 'Northflank', url: NF_SANDBOXES },
    { title: 'Pricing', publisher: 'Northflank', url: NF_PRICING },
  ],

  related: [
    '/sandbox',
    'rl-environments-for-llms',
    'how-to-test-ai-agents',
    'best-browser-for-ai-agents',
    'best-email-api-for-ai-agents',
    '/blueprints/train-and-test-agents',
    '/compare/agentmail-twilio-browserbase-e2b',
    '/developers',
  ],
}
