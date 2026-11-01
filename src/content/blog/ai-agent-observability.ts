import type { BlogPost } from './types'
import { AI_CUSTOMER, CUSTOMER_SIDE_OBSERVABILITY } from '../glossary'

/* Guide 9 of the week's slate (_research/seo/plan/week-2nov/SLATE.md, spec 9, and WRITER_BRIEF.md, batch 3; Seun's go
   on 1 Nov 2026). It owns "ai agent observability" and its neighbours from Google autocomplete, US and UK, 31 Oct 2026
   (autocomplete_slate_31oct.json beside the plan): ai agent observability tools, platform, open source, and evaluation,
   and opentelemetry. The phrase moves here from customer-side-observability, which keeps "customer-side observability"
   and is linked with that anchor. Long running agents stay with long-running-ai-agents, building on AI customers with
   ai-customers-for-developers, AI agent testing tools with best-ai-chatbot-testing-tools and AI agent QA with
   ai-customers-for-cx-teams, each linked with its phrase.
   Readers: engineering, AI and CX teams building and running AI agents.
   The shape: what a trace records, evals, OpenTelemetry's GenAI conventions, the 6 tools from their own pages, the open
   source options, cost at volume worked from Datadog's listed rate, what no trace records (customer-side observability
   and the AI customer definition, both word for word from glossary.ts), the options compared with the last row ours,
   which to choose, a set-up method with pass marks, and the FAQ.
   Read at source on 1 Nov 2026: OpenTelemetry's GenAI conventions (the README of their own repository and its agent
   spans page; the opentelemetry.io pages now say the conventions have moved there) and its blog post of 14 May 2026 by
   James Newton-King; Datadog's Agent Observability docs, its OpenTelemetry page and its pricing page; Arize's Phoenix
   and pricing pages; Braintrust's home and pricing pages; Helicone's home, pricing, licence and self-hosting pages, and
   Mintlify's post of 3 Mar 2026; Langfuse's home and pricing pages and its post of 16 Jan 2026; LangSmith's
   observability and pricing pages; the MCP introduction. Obsession is described in the words of /verify, the support
   bot, drift watch and resolution check pages, /agents and /developers. No repository, install command or MCP address
   is printed. harbourline.example and every figure in its pictures are invented. No dashes. */

const OTEL_GENAI = 'https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/README.md'
const OTEL_BLOG = 'https://opentelemetry.io/blog/2026/genai-observability/'
const DATADOG_OTEL = 'https://docs.datadoghq.com/llm_observability/instrument/otel_instrumentation/'
const PHOENIX = 'https://arize.com/phoenix'
const ARIZE_PRICING = 'https://arize.com/pricing/'
const BRAINTRUST = 'https://www.braintrust.dev/'
const BRAINTRUST_PRICING = 'https://www.braintrust.dev/pricing'
const DATADOG = 'https://docs.datadoghq.com/llm_observability/'
const DATADOG_PRICING = 'https://www.datadoghq.com/pricing/?product=llm-observability'
const HELICONE = 'https://www.helicone.ai/'
const HELICONE_OSS = 'https://docs.helicone.ai/references/open-source'
const HELICONE_SELFHOST = 'https://docs.helicone.ai/getting-started/self-host/overview'
const HELICONE_PRICING = 'https://www.helicone.ai/pricing'
const MINTLIFY = 'https://www.mintlify.com/blog/mintlify-acquires-helicone'
const LANGFUSE = 'https://langfuse.com/'
const LANGFUSE_PRICING = 'https://langfuse.com/pricing'
const LANGFUSE_ACQ = 'https://langfuse.com/blog/announcing-acquisition'
const LANGSMITH = 'https://www.langchain.com/langsmith/observability'
const LANGSMITH_PRICING = 'https://www.langchain.com/pricing'
const MCP_INTRO = 'https://modelcontextprotocol.io/docs/getting-started/intro'

export const post: BlogPost = {
  slug: 'ai-agent-observability',
  title: 'AI agent observability: what traces and evals show, and what only a customer sees',
  dek: 'Langfuse, LangSmith, Arize Phoenix, Datadog, Helicone and Braintrust record what an AI agent does inside a company’s systems, step by step. What reaches the customer after the run, from the promised email to the refund, comes from other systems and takes a customer to see.',
  metaTitle: 'AI agent observability: traces, evals and what customers get',
  description:
    'AI agent observability tools compared: Langfuse, LangSmith, Phoenix, Datadog, Helicone and Braintrust, with prices, and what only a customer sees.',
  answer:
    'AI agent observability records the prompt, each model call and each tool call an AI agent makes, with its cost and speed, so a team can see why an answer went wrong. Langfuse, LangSmith, Arize Phoenix, Datadog, Helicone and Braintrust collect these traces, and most also score the answers. To see what reaches the customer after the run, use Obsession: its AI customers use your live agent as customers do, keep each answer and wait for the email or callback the agent promised.',
  primaryKeyword: 'ai agent observability',
  keywords: [
    'ai agent observability tools',
    'ai agent observability platform',
    'ai agent observability open source',
    'ai agent observability and evaluation',
    'ai agent observability opentelemetry',
  ],
  category: 'Check your AI agents',
  published: '2026-11-01',
  updated: '2026-11-01',
  readingMinutes: 16,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'harbourline.example · 1 chat, 2 views',
      period: 'Tuesday’s trace beside what the customer got by Thursday',
      cols: ['Step', 'In the trace', 'For the customer'],
      rows: [
        { name: 'Question, Tue 10:02', cells: ['Prompt traced', '“Can I get a refund?”'], tone: 'info' },
        { name: 'Refund tool', cells: ['Returned success', 'Not visible'], tone: 'info' },
        { name: 'Answer', cells: ['Eval score 0.94', '“Refund issued”'], tone: 'ok' },
        { name: 'Email, Tue', cells: ['Not in the trace', 'Never arrived'], tone: 'fail' },
        { name: 'Refund, Thu', cells: ['Run closed Tuesday', 'Not in the account'], tone: 'fail' },
      ],
      notes: [
        'Every step in the trace passed. The customer got neither the email nor the refund.',
        'Harbourline is an invented store.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI agent is software built on a large language model (LLM), the type of AI model behind ChatGPT and Claude, that answers people and acts for them. It might look up an order, issue a refund or book a slot, calling the model several times and using several tools along the way. The same question can take a different path from one run to the next, which is why teams record each run.',
    },
    {
      kind: 'p',
      text: 'AI agent observability is that record, kept for every run: the prompt, each model call, each tool call and the answer. Engineering and AI teams use it to debug failures and control cost, and CX teams use it to review what the agent told customers. The tools differ in where they run, how they charge and whether they are open source, and all of them watch the agent from the inside.',
    },

    { kind: 'h2', id: 'what-it-records', text: 'What AI agent observability records' },
    {
      kind: 'p',
      text: 'A trace records one run. It is made of spans, one for each step: the request that came in, each call to the model, each tool the agent used and the answer it gave. Each span carries its start time, how long it took and details such as the model, the tokens it used and any error. OpenTelemetry, an open source standard for traces, metrics and logs, gives those details the same names in every tool that accepts it.',
    },
    {
      kind: 'table',
      caption: 'What a trace records for one AI agent run, and what teams use each part for',
      cols: ['Part of the trace', 'What it records', 'What teams use it for'],
      rows: [
        ['Prompts and replies', 'What the model was sent and what it said', 'Seeing exactly what the agent was told'],
        ['Tool calls', 'Each tool used, with its inputs and result', 'Finding the step that failed'],
        ['Tokens and cost', 'Input and output tokens per model call', 'Cost per run, user and feature'],
        ['Latency', 'How long each step and the whole run took', 'Finding the slow step'],
        ['Errors', 'Failed calls, timeouts and exceptions', 'Alerts and debugging'],
        ['Sessions', 'Runs grouped into one conversation', 'Following a whole chat'],
        ['Scores', 'Eval results attached to each run', 'Quality over time'],
      ],
    },

    { kind: 'h2', id: 'evaluation', text: 'AI agent observability and evaluation' },
    {
      kind: 'p',
      text: 'An eval is a scored test of what an agent produced. An AI model acting as a judge, a rule written in code or a person marks each answer. It might check whether the answer matched the refund policy, called the right tool or stayed on topic.',
    },
    {
      kind: 'list',
      items: [
        '**Offline evals** run a fixed set of test cases before a change ships, such as a new prompt or model, and compare the scores with the last version.',
        '**Online evals** score live runs as they arrive, so a drop in quality after a change shows on a dashboard and can raise an alert.',
        '**Human review** sends a sample of runs, or the ones that scored low, to a person, whose labels become new test cases.',
      ],
    },
    {
      kind: 'p',
      text: 'Most of these tools now do both and attach each score to its trace, so a low score opens the run that earned it. Evals before launch with simulated users are compared in [AI agent testing tools](/blog/best-ai-chatbot-testing-tools), and voice agents in [AI voice agent testing](/blog/ai-voice-agent-testing).',
    },

    { kind: 'h2', id: 'opentelemetry', text: 'OpenTelemetry for AI agents' },
    {
      kind: 'p',
      text: 'Most of the tools here accept OpenTelemetry traces. OpenTelemetry’s [GenAI semantic conventions](' +
        OTEL_GENAI +
        ') name the parts of AI work, so a trace from one framework reads the same in every tool that accepts it. They cover model calls, agent runs, tool calls and embeddings, as spans, events and metrics, and are marked as in development.',
    },
    {
      kind: 'art',
      art: {
        kind: 'flow',
        title: 'harbourline.example · 1 run as spans',
        steps: [
          { label: 'invoke_agent', detail: 'The whole run, 2.4 seconds', tone: 'info' },
          { label: 'chat', detail: 'Model call: 1,204 tokens in', tone: 'ok' },
          { label: 'execute_tool', detail: 'Refund tool: success', tone: 'ok' },
          { label: 'chat', detail: 'Model call: the reply', tone: 'ok' },
        ],
        foot: 'Span names from OpenTelemetry’s GenAI conventions. The run is invented.',
      },
      caption: 'One run of a support agent as OpenTelemetry names its spans: the agent run, each call to the model and the tool it used.',
    },
    {
      kind: 'p',
      text: '[OpenTelemetry’s blog post on GenAI observability](' +
        OTEL_BLOG +
        ') of 14 May 2026 shows how such a trace looks. An agent run is one invoke_agent span, with a chat span for each model call and an execute_tool span for each tool. Attributes such as gen_ai.request.model and the input and output token counts sit on each model call. Prompt text and tool arguments are left out by default, because they can hold sensitive data, and a team opts in to record them.',
    },
    {
      kind: 'p',
      text: 'Datadog, Langfuse, Arize Phoenix and LangSmith all take OpenTelemetry traces, so instrumenting in the standard keeps more than one tool open to a team. Each accepts particular versions of it, so a team checks the docs before switching.',
    },

    { kind: 'h2', id: 'tools', text: 'AI agent observability tools' },
    {
      kind: 'p',
      text: 'All 6 record what an agent sends to its models, and most score the results. They differ in licence, hosting and how they charge. Each is described from its own pages as they stood on 1 November 2026, with prices in US dollars as listed that day, in alphabetical order.',
    },

    { kind: 'h3', id: 'arize-phoenix', text: 'Arize Phoenix' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Phoenix](' +
          PHOENIX +
          ') is Arize’s tool to trace, evaluate and improve AI agents. It builds datasets from traces, runs experiments on them and has a prompt editor, and its page lists native OpenTelemetry support.',
        '**Price as listed:** Arize calls Phoenix open source. Its licence, the Elastic License 2.0, lets a team host it on its own infrastructure but bars offering it to others as a hosted service. Hosted by Arize, it runs on Arize AX. [AX Free](' +
          ARIZE_PRICING +
          ') holds 25,000 spans a month for 15 days, and AX Pro, at $50 a month, holds 50,000 for 30 days. Enterprise is custom.',
        '**Where it stops:** self-hosted, a team runs and scales it on its own servers. Hosted, AX Free keeps data for 15 days.',
        '**Best for:** teams that want tracing and evals they host themselves, built on OpenTelemetry, with a hosted platform to move to.',
      ],
    },

    { kind: 'h3', id: 'braintrust', text: 'Braintrust' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Braintrust](' +
          BRAINTRUST +
          ') calls itself the active observability platform for agents: it shows prompts, responses and tool calls in real time and scores outputs with AI models, code or people. It also runs experiments against real datasets and tracks latency, cost and quality. Its Loop agent suggests how to improve an agent.',
        '**Price as listed:** [Starter](' +
          BRAINTRUST_PRICING +
          ') is $0 a month with 1 GB of processed data, 10,000 scores and 14 days of retention, for unlimited users. Pro is $249 a month with 5 GB, 50,000 scores and 30 days. Enterprise is custom, and qualifying startups can get 6 to 12 months of Pro free.',
        '**Where it stops:** usage beyond a plan is billed per GB of data and per 1,000 scores, and Starter keeps data for 14 days.',
        '**Best for:** teams that run evals and production traces in one place, with an AI agent of its own to suggest fixes.',
      ],
    },

    { kind: 'h3', id: 'datadog', text: 'Datadog LLM Observability' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Datadog’s docs](' +
          DATADOG +
          ') now call it Agent Observability, for monitoring and improving LLM applications and AI agents. Each request is a trace, with ready-made dashboards for cost, latency, performance and usage. It groups live traffic by topic, scans and redacts sensitive data, and flags prompt injections, messages written to take over an agent. It [accepts traces](' +
          DATADOG_OTEL +
          ') that follow OpenTelemetry’s GenAI conventions from version 1.37.',
        '**Price as listed:** the [free tier](' +
          DATADOG_PRICING +
          ') covers up to 40,000 LLM spans a month, kept 15 days, without payment details. Pro starts at $160 a month on an annual commitment, $200 month to month or $240 on demand, with 100,000 LLM spans included. After that it is $3.50 per 10,000 on annual billing. An LLM span is one call to a model provider such as OpenAI or Anthropic, and Datadog bills on those and never on tool or retrieval spans.',
        '**Where it stops:** retention past 15 days is an add-on, from $6.50 per 10,000 LLM spans a month for 30 days to $9 for 90.',
        '**Best for:** teams already on Datadog that want agent traces in the same place as the rest of their monitoring.',
      ],
    },

    { kind: 'h3', id: 'helicone', text: 'Helicone' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Helicone](' +
          HELICONE +
          ') is an AI gateway and observability platform: an app sends its model requests through Helicone, which logs each one. Its dashboard lists requests, sessions, users, prompts, datasets, a playground, rate limits and alerts. It is [open source under the Apache License 2.0](' +
          HELICONE_OSS +
          '), and its docs describe [self-hosting](' +
          HELICONE_SELFHOST +
          ') with Docker Compose or Helm on Kubernetes.',
        '**Price as listed:** [Hobby](' +
          HELICONE_PRICING +
          ') is free with 10,000 requests, 1 GB of storage, 1 seat and 7 days of retention. Pro is $79 a month plus usage, with unlimited seats and 1 month of retention. Team is $799 a month plus usage, with 5 organisations, SOC 2 and HIPAA compliance and 3 months. Both paid plans have a 7-day trial, and Enterprise is priced on request.',
        '**Where it stops:** [Mintlify announced](' +
          MINTLIFY +
          ') on 3 March 2026 that it was acquiring Helicone, which would keep running in maintenance mode with security updates, bug fixes and new models. On 1 November 2026, Helicone’s own site says it is no longer part of Mintlify, with details to come.',
        '**Best for:** teams that want every model request logged through one gateway, under an open source licence they can host.',
      ],
    },

    { kind: 'h3', id: 'langfuse', text: 'Langfuse' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Langfuse](' +
          LANGFUSE +
          ') is an open source platform for agent evaluation and observability. Its traces capture every model call, tool call and document lookup, each scored by an AI model, a rule in code or a person. It manages prompts with one-click deploys and rollbacks, it is OpenTelemetry native, and every product feature is under the MIT licence and free to self-host.',
        '**Price as listed:** [Hobby](' +
          LANGFUSE_PRICING +
          ') is free with 50,000 units a month, 30 days of data and 2 users. Core is $29 a month with 100,000 units and 90 days, and Pro is $199 with 3 years. Enterprise is $2,499 a month. Past a plan’s allowance, units cost $8 per 100,000, lower with volume. A unit is any data point sent: the trace, each step and each score.',
        '**Where it stops:** Hobby keeps 30 days of data for 2 users. [ClickHouse acquired Langfuse](' +
          LANGFUSE_ACQ +
          ') on 16 January 2026, and Langfuse said it stays open source and self-hostable, with no planned licence changes.',
        '**Best for:** teams that want open source tracing, evals and prompt management they can host themselves.',
      ],
    },

    { kind: 'h3', id: 'langsmith', text: 'LangSmith' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [LangSmith](' +
          LANGSMITH +
          '), from LangChain, traces what an agent does step by step. It works with any framework and plugs into existing OpenTelemetry pipelines. Dashboards track token use, latency, error rates, cost and feedback scores, with alerts to PagerDuty or another system. It runs online evals judged by an AI model or code, and groups traces into usage patterns and failure types.',
        '**Price as listed:** [Developer](' +
          LANGSMITH_PRICING +
          ') is $0 a seat a month with up to 5,000 base traces, and Plus is $39 a seat a month with up to 10,000. Traces past those cost $0.005 each, or $5 per 1,000, and Enterprise is custom.',
        '**Where it stops:** base traces are kept 14 days, and keeping them 180 days costs extra. Self-hosting is an Enterprise option.',
        '**Best for:** teams building with LangChain or LangGraph, or any framework, that want traces, dashboards and online evals together.',
      ],
    },

    { kind: 'h2', id: 'open-source', text: 'Open source AI agent observability' },
    {
      kind: 'p',
      text: 'Three of the tools can run on a team’s own servers from code their makers publish, which keeps prompts and customer data inside the company. Their licences differ, which matters to a team that plans to build on the code or offer it as a service. The Elastic License 2.0 that covers Phoenix, for example, bars offering it to others as a hosted service.',
    },
    {
      kind: 'table',
      caption: 'AI agent observability tools a team can host itself, by licence, setup and how traces arrive, from their own pages on 1 November 2026',
      cols: ['Tool', 'Licence', 'Self-hosting', 'How traces arrive'],
      rows: [
        ['Langfuse', 'MIT', 'Free, with every feature', 'OpenTelemetry native'],
        ['Arize Phoenix', 'Elastic License 2.0', 'On a team’s own infrastructure', 'Native OpenTelemetry support'],
        ['Helicone', 'Apache 2.0', 'Docker Compose or Helm', 'Through its AI gateway'],
      ],
    },
    {
      kind: 'p',
      text: 'LangSmith offers self-hosted and hybrid deployment on its Enterprise plan. Self-hosting swaps a usage bill for the cost of running the servers and the database behind them.',
    },

    { kind: 'h2', id: 'cost', text: 'What AI agent observability costs at volume' },
    {
      kind: 'p',
      text: 'The tools charge by different units: seats, traces, data processed, data points or model calls. The same traffic costs different amounts in each, so a team prices its own volume on each pricing page.',
    },
    {
      kind: 'p',
      text: 'Datadog charges by the model call, so its bill is the simplest to work out. Its [listed annual rate](' +
        DATADOG_PRICING +
        ') is $160 a month with 100,000 LLM spans, then $3.50 per 10,000. At that rate, an agent platform making 100 million model calls a month would pay about $421,500 a year.',
    },
    {
      kind: 'table',
      caption: 'Datadog LLM Observability at its listed annual rate, worked from its pricing page on 1 November 2026, before any negotiated discount',
      cols: ['Model calls a month', 'A month', 'A year'],
      rows: [
        ['100 million', '$35,125', '$421,500'],
        ['10 million', '$3,625', '$43,500'],
        ['1 million', '$475', '$5,700'],
      ],
    },
    {
      kind: 'p',
      text: 'Langfuse counts every data point, the trace, each step and each score, so a run with many steps uses more units than a run with few. Braintrust charges by data processed and by scores, and LangSmith by seat and by trace.',
    },

    { kind: 'h2', id: 'customer-side', text: 'What only a customer sees' },
    {
      kind: 'p',
      text: 'A trace ends when the run ends. What the customer gets next often comes from other systems: the confirmation email from the help desk, the refund from the payment provider, the callback from the phone team. If those systems send nothing to the agent’s trace, a run can score well while the customer gets nothing.',
    },
    {
      kind: 'list',
      items: [
        '**What arrives after the answer.** The email, refund or callback the agent promised, often hours later, from a system with its own logs.',
        '**Every channel at once.** The same question on chat, email and phone can get different answers from different systems, each with its own trace or none.',
        '**After every update.** A new model, a prompt edit or a new help article can change an answer overnight, and the same question asked every morning shows the day it changed.',
        '**Agents your team doesn’t run.** A vendor’s support agent or a partner’s booking line is traced in its maker’s systems, where the company that buys it may never see the trace, and its customers meet it anyway.',
      ],
    },
    {
      kind: 'p',
      text: `[Customer-side observability](/blog/customer-side-observability) covers that side. ${CUSTOMER_SIDE_OBSERVABILITY.definition}`,
    },
    {
      kind: 'p',
      text: `AI customers carry it out. ${AI_CUSTOMER.definition} The term is explained in full in [what AI customers are](/blog/ai-customers).`,
    },
    {
      kind: 'p',
      text: 'Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026.',
    },
    {
      kind: 'p',
      text: 'For a team running an AI agent, Obsession’s AI customers call, chat and email the agent as customers do, every day and after every update. They ask what customers ask and check each answer against the company’s policy. Then they ask for a person and wait in their own inbox for the email or callback the agent promised. Every AI customer says it’s an AI when it talks to a person and never uses fake payment details, as [what every AI customer will and won’t do](/agents) sets out.',
    },
    {
      kind: 'list',
      items: [
        '[Support bot check](/recipes/support-bot-check) asks your support bot what your customers ask, on every channel, every day, and checks each answer against your policy.',
        '[Drift watch](/recipes/drift-watch) replays your hardest cases on your AI agent every morning and after every update, and flags every answer that changed.',
        '[Resolution check](/recipes/resolution-check) checks every resolution your AI support vendor bills you for against what the customer got.',
      ],
    },
    {
      kind: 'p',
      text: 'When a check fails, it shows what the customer was told, and its time and channel let the team find the matching trace to see why. For CX teams, [AI agent QA](/blog/ai-customers-for-cx-teams) works out what a wrong answer costs in a team’s own numbers.',
    },
    {
      kind: 'cta',
      text: 'AI customers call, chat and email your AI agents as your customers do, every day, and check they answer right, hand over and say they’re AI. Your first AI agent check is free: 3 AI customers use a chat page or phone number your company runs, and your report lands within 4 days.',
      to: '/verify',
      label: 'Check your AI agents',
    },

    { kind: 'h2', id: 'compared', text: 'AI agent observability tools compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 1 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'AI agent observability tools by what each does well, price and best fit, from each provider’s own pages on 1 November 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing: the app’s own logs', 'Errors and requests at no cost', 'Free', 'No prompts, tool calls or scores', 'A prototype with no users'],
        ['By hand: reading transcripts', 'A person’s judgement on each answer', 'Staff hours', 'Hours grow with every conversation', 'A few conversations a week'],
        [
          'Arize Phoenix',
          'Tracing, evals and experiments on OpenTelemetry, self-hosted or on Arize AX',
          'Self-hosted: free\nAX Free: 25,000 spans a month\nAX Pro: $50 a month',
          'A team runs it when self-hosted',
          'Self-hosted tracing on OpenTelemetry',
        ],
        [
          'Braintrust',
          'Evals, experiments and live traces, with an AI agent to suggest fixes',
          'Starter: $0 a month\nPro: $249 a month',
          'Billed per GB and per 1,000 scores',
          'Evals and traces in one place',
        ],
        [
          'Datadog LLM Observability',
          'Agent traces, cost dashboards and prompt injection checks',
          'Free: 40,000 LLM spans a month\nPro: from $160 a month',
          'Retention past 15 days is an add-on',
          'Teams already on Datadog',
        ],
        [
          'Helicone',
          'An open source AI gateway that logs every request',
          'Hobby: free, 10,000 requests\nPro: $79 a month\nTeam: $799 a month',
          'Left Mintlify, details to come',
          'Gateway logging, self-hosted',
        ],
        [
          'Langfuse',
          'Open source traces, evals and prompt management',
          'Hobby: free\nCore: $29 a month\nPro: $199 a month',
          'Hobby keeps 30 days for 2 users',
          'Open source, self-hosted',
        ],
        [
          'LangSmith',
          'Traces, dashboards and online evals for any framework',
          'Developer: $0 a seat\nPlus: $39 a seat a month\nExtra traces: $0.005 each',
          'Self-hosting on Enterprise',
          'Teams on LangChain or LangGraph',
        ],
        [
          'Obsession (ours): [Support bot check](/recipes/support-bot-check), [Drift watch](/recipes/drift-watch), [Resolution check](/recipes/resolution-check)',
          'AI customers use the live agent on chat, email and phone, keep each answer and wait for what it promised',
          'Running now: first AI agent check free\nCredit-based plans, like Claude’s',
          'The cause sits in the agent’s traces',
          'What customers were told and got, every day',
        ],
      ],
    },

    { kind: 'h2', id: 'choose', text: 'Which to choose' },
    {
      kind: 'p',
      text: 'If your team needs to know what customers were told on its live chat, email and phone, and whether the email or callback the agent promised arrived, use Obsession. Its AI customers check every day and after every update, and keep each answer with its time and channel.',
    },
    {
      kind: 'list',
      items: [
        '**Open source and self-hosted:** Langfuse for MIT-licensed tracing, evals and prompts, or Arize Phoenix on OpenTelemetry.',
        '**A team already on Datadog:** Datadog LLM Observability, billed per model call.',
        '**Building with LangChain or LangGraph:** LangSmith.',
        '**Evals and production traces in one place:** Braintrust.',
        '**Every model request logged through a gateway:** Helicone.',
      ],
    },
    {
      kind: 'p',
      text: 'A team running an agent at volume needs both views: one of these tools inside the agent, and a check from the customer’s side on the live channels. A failed check’s time and channel then help the team find the trace that explains it.',
    },
    {
      kind: 'p',
      text: 'For developers, the same AI customers are a tool their own agents can call. [MCP](' +
        MCP_INTRO +
        '), the Model Context Protocol, is an open source standard for connecting AI applications to outside systems. Obsession offers its AI customers over MCP, over an API that code calls directly, and through an SDK, a ready-made code library. All three expose 5 verbs: lookup, facts, evidence, become_customer and notify, and API keys go to teams one at a time. [AI customers for developers](/blog/ai-customers-for-developers) covers building on them, and [long running AI agents](/blog/long-running-ai-agents) covers agents that wait for weeks.',
    },
    {
      kind: 'cta',
      text: 'Obsession gives your AI agents a customer at every company: long lived agents with their own inbox, phone number and browser, behind 5 verbs over MCP, an API and an SDK.',
      to: '/developers',
      label: 'See the API and MCP',
    },

    { kind: 'h2', id: 'set-up', text: 'How to set up AI agent observability' },
    {
      kind: 'p',
      text: 'A team can set it up in 6 steps, each with a pass mark written down before the first run.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Trace every run.** Instrument each model call and tool call, with OpenTelemetry’s GenAI conventions or a tool’s own SDK. A pass: every run produces one trace that holds every model call and tool call.',
        '**Group runs into conversations.** Pass a conversation ID with each run, which OpenTelemetry names gen_ai.conversation.id. A pass: one customer’s whole chat opens as one thread.',
        '**Write evals from your policies.** Turn the refund window, the handover rule and the tone of voice into test cases, and run them before every prompt or model change. A pass: a change that breaks a passing case doesn’t ship.',
        '**Score live runs and set alerts.** Score a share of live traffic online, with alerts on cost, latency and eval scores. A pass: the owner hears within the hour when a score crosses its line.',
        '**Check the customer’s side.** Every day and after every update, ask the live chat, inbox and phone line what customers ask, then wait for what the agent promised. A pass: each answer matches that morning’s policy, and each promised email arrives within the time the agent gave.',
        '**Join the two views.** Match each failed customer-side check to its trace by time and channel. A pass: every failure points to the run that caused it.',
      ],
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI agent observability' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is AI agent observability?',
          a: 'AI agent observability is recording the prompts, model calls and tool calls an AI agent makes, with their cost, latency and eval scores. The team that runs the agent uses those traces to debug failures, control cost and track quality. Each trace covers one run, with one span per step.',
        },
        {
          q: 'What is the difference between AI agent observability and evaluation?',
          a: 'Observability records what an agent did, run by run, as traces. Evaluation scores whether it did well, with an AI judge, code or a person, on test cases before a change ships or on live runs as they arrive. Most tools now do both and attach each score to its trace.',
        },
        {
          q: 'What are the best AI agent observability tools?',
          a: 'It depends on where a team works. Langfuse and Arize Phoenix suit teams that host their own, Datadog suits teams already on Datadog, and LangSmith suits teams on LangChain or LangGraph. Braintrust puts evals and production traces together, and Helicone logs requests through a gateway. For what customers receive on the live channels, Obsession’s AI customers check the agent as customers do.',
        },
        {
          q: 'Is there an open source AI agent observability platform?',
          a: 'Yes. Langfuse is open source under the MIT licence and free to self-host with every feature, and Helicone is open source under the Apache License 2.0. Arize calls Phoenix open source, and its Elastic License 2.0 lets a team host it but bars offering it to others as a hosted service. LangSmith offers self-hosting on its Enterprise plan.',
        },
        {
          q: 'How does OpenTelemetry work for AI agents?',
          a: 'OpenTelemetry’s GenAI semantic conventions name the parts of AI work, so traces from any framework read the same in any tool that accepts them. An agent run is an invoke_agent span, with a chat span for each model call and an execute_tool span for each tool. Prompt text and tool arguments are left out by default, and a team opts in to record them.',
        },
        {
          q: 'What can’t AI agent observability see?',
          a: 'It sees what happens inside the agent during the run. The email, refund or callback that follows often comes from other systems, and an agent a vendor runs is traced in the vendor’s own systems. Seeing those means being the customer: asking on the live channels and waiting for what arrives.',
        },
        {
          q: 'How is AI agent observability different from customer-side observability?',
          a: 'AI agent observability watches the agent from the inside, through its own telemetry. Customer-side observability watches the company from where its customers stand, by being one of them, and keeps what arrives over days and weeks. The two meet when a failed check points to its trace.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the figures',
      text: 'Every tool is described from its own pages as they stood on 1 November 2026, with prices in US dollars as listed that day. The Datadog costs are worked from its listed annual rate, before any discount. Harbourline is an invented store, and its trace and chat are examples.',
    },
  ],

  sources: [
    { title: 'Semantic conventions for generative AI systems', publisher: 'OpenTelemetry', url: OTEL_GENAI },
    { title: 'Inside the LLM Call: GenAI Observability with OpenTelemetry', publisher: 'OpenTelemetry (James Newton-King)', url: OTEL_BLOG, date: '2026-05-14' },
    { title: 'Phoenix: open source AI observability and evaluation', publisher: 'Arize', url: PHOENIX },
    { title: 'Pricing', publisher: 'Arize', url: ARIZE_PRICING },
    { title: 'Braintrust home page', publisher: 'Braintrust', url: BRAINTRUST },
    { title: 'Pricing', publisher: 'Braintrust', url: BRAINTRUST_PRICING },
    { title: 'Agent Observability', publisher: 'Datadog Docs', url: DATADOG },
    { title: 'OpenTelemetry instrumentation', publisher: 'Datadog Docs', url: DATADOG_OTEL },
    { title: 'Pricing: LLM Observability', publisher: 'Datadog', url: DATADOG_PRICING },
    { title: 'AI Gateway and LLM Observability', publisher: 'Helicone', url: HELICONE },
    { title: 'Open source', publisher: 'Helicone Docs', url: HELICONE_OSS },
    { title: 'Self-hosting overview', publisher: 'Helicone Docs', url: HELICONE_SELFHOST },
    { title: 'Pricing', publisher: 'Helicone', url: HELICONE_PRICING },
    { title: 'Mintlify acquires Helicone to redefine AI knowledge infrastructure', publisher: 'Mintlify', url: MINTLIFY, date: '2026-03-03' },
    { title: 'Langfuse home page', publisher: 'Langfuse', url: LANGFUSE },
    { title: 'Pricing', publisher: 'Langfuse', url: LANGFUSE_PRICING },
    { title: 'Langfuse joins ClickHouse', publisher: 'Langfuse', url: LANGFUSE_ACQ, date: '2026-01-16' },
    { title: 'LangSmith Observability', publisher: 'LangChain', url: LANGSMITH },
    { title: 'Pricing', publisher: 'LangChain', url: LANGSMITH_PRICING },
    { title: 'What is the Model Context Protocol (MCP)?', publisher: 'Model Context Protocol', url: MCP_INTRO },
  ],

  related: [
    'recipe:support-bot-check',
    'recipe:drift-watch',
    'recipe:resolution-check',
    'customer-side-observability',
    'ai-customers-for-developers',
  ],
}
