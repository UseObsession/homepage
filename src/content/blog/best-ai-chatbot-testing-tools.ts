import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

/* Best X guides, row 3 (_research/seo/recommend/best-x/PLAN.md, agreed by Seun on 28 Oct 2026): the best AI chatbot and
   AI agent testing tools. Primary "ai chatbot testing tools"; secondary "chatbot testing tools", "ai agent testing tools",
   "chatbot automation testing tools", "how to automate chatbot testing", "what is chatbot testing" (Google autocomplete,
   US and UK, 28 Oct 2026, autocomplete_tools_28oct.json). It takes "ai chatbot testing" from ai-customers-for-cx-teams,
   which keeps AI customer service QA and AI agent QA; /recipes/support-bot-check keeps "test my chatbot" (linked here
   through the cta label); test-store-chatbot-returns-policy keeps "how to test a chatbot" (linked with that anchor).
   Readers: engineers, product managers and CX leads choosing how to test a chatbot or AI agent they run.
   Every other tool comes only from research_chatbot_testing.json (12 tools, each read on its own pages on 28 Oct 2026),
   grouped by its 5 jobs. Obsession is presented by STANDARD.md: named in the answer, live today with the free AI agent
   check, its full view once, the 1,500 line word for word, "Use Obsession when" once, last in the table.
   Obsession is described only in the words of /verify and the AI agent recipes. firsthand_28oct.json holds no chatbot
   evidence, so no run of ours is cited here; the chat widgets over Check out (F28) are left out on purpose.
   The CMA guidance is the one outside fact, as cited in test-store-chatbot-returns-policy.
   Left out on purpose: the 4 simulated-customer tools in the mystery shopping file (Cresta, LivePerson Syntrix, Gen.QA,
   MerchantGuard), the tools named only in vendor-written roundups, the Promptfoo acquisition (not on its own pages),
   Maxim's third-party prices, UndercoverAgent's unsourced statistics, Coval's 217% claim.
   Source titles are plain descriptions of each page, since the research file kept no page titles.
   brightwell.example and every answer in the illustration are invented. No dashes. */

const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const BRAINTRUST = 'https://www.braintrust.dev/'
const BRAINTRUST_PRICING = 'https://www.braintrust.dev/pricing'
const PROMPTFOO = 'https://www.promptfoo.dev/'
const PROMPTFOO_PRICING = 'https://www.promptfoo.dev/pricing/'
const MAXIM = 'https://www.getmaxim.ai/products/agent-simulation-evaluation'
const MAXIM_PRICING = 'https://www.getmaxim.ai/pricing'
const LANGSMITH = 'https://www.langchain.com/langsmith'
const LANGSMITH_PRICING = 'https://www.langchain.com/pricing'
const LANGFUSE = 'https://langfuse.com/'
const LANGFUSE_PRICING = 'https://langfuse.com/pricing'
const LANGFUSE_ACQ = 'https://langfuse.com/blog/announcing-acquisition'
const CEKURA = 'https://www.cekura.ai/'
const CEKURA_PRICING = 'https://www.cekura.ai/pricing'
const CEKURA_DOCS = 'https://docs.cekura.ai/documentation/introduction'
const COVAL = 'https://www.coval.ai/'
const COVAL_PRICING = 'https://www.coval.ai/pricing'
const COVAL_DOCS = 'https://docs.coval.ai/'
const HAMMING = 'https://hamming.ai/'
const HAMMING_PRICING = 'https://hamming.ai/pricing'
const ROARK = 'https://roark.ai/'
const ROARK_PRICING = 'https://roark.ai/pricing'
const ROARK_DOCS = 'https://docs.roark.ai/'
const CYARA_BOTIUM = 'https://cyara.com/products/botium/'
const CYARA_VOICE = 'https://cyara.com/products/voice-assure/'
const UNDERCOVER = 'https://undercoveragent.ai/'
const TOKENSURF = 'https://tokensurf.io/'

export const post: BlogPost = {
  slug: 'best-ai-chatbot-testing-tools',
  title: 'The best AI chatbot and AI agent testing tools in 2026',
  dek: 'AI chatbot and AI agent testing tools grouped by the job each does: evals before launch, live monitoring, voice agents, enterprise QA and checks from the customer’s side. Each comes with what it does well, its price on 28 October 2026 and where it stops.',
  metaTitle: 'AI chatbot testing tools: the best for each job in 2026',
  description:
    'AI chatbot testing tools compared by job: evals before launch, live monitoring, voice agents and customer-side checks, with prices listed in October 2026.',
  answer:
    'The best AI chatbot testing tools depend on the job: Braintrust and Promptfoo for evals before launch, LangSmith and Langfuse for live monitoring, and Cekura, Coval, Hamming and Roark for voice agents. For checks from the customer’s side, Obsession’s AI customers use your company’s live chat, email and phone as real customers do, every day and after every update. They keep each answer as proof: the transcript or recording, with its time and channel.',
  primaryKeyword: 'ai chatbot testing tools',
  keywords: [
    'ai chatbot testing tools',
    'chatbot testing tools',
    'ai agent testing tools',
    'chatbot automation testing tools',
    'how to automate chatbot testing',
    'what is chatbot testing',
    'ai chatbot testing',
    'bot testing tools',
    'voice agent testing',
  ],
  category: 'Check your AI agents',
  published: '2026-10-28',
  updated: '2026-10-28',
  readingMinutes: 17,
  order: 3,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'Where chatbot testing tools start, by job',
      rows: [
        {
          name: 'Evals before launch',
          who: 'Braintrust, Promptfoo, Maxim AI',
          nodes: ['Your team', 'Test cases', 'Agent in testing'],
          links: ['writes', 'run on'],
        },
        {
          name: 'Live monitoring',
          who: 'LangSmith, Langfuse',
          nodes: ['Your live agent', 'Traces and scores', 'Your team'],
          links: ['sends', 'alert'],
        },
        {
          name: 'Voice agent testing',
          who: 'Cekura, Coval, Hamming, Roark',
          nodes: ['Your team', 'Simulated callers', 'Your voice agent'],
          links: ['sets up', 'test'],
        },
        {
          name: 'AI customers',
          who: 'Obsession',
          nodes: ['Your company', 'AI customer', 'Your live agent'],
          links: ['hires', 'chats, emails, calls'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'Evals and monitoring work from inside the build and the agent’s own logs. Voice testers put the agent through simulated callers, and AI customers use the live chat, inbox and phone line customers use.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'AI chatbot testing tools check what an AI chatbot or AI agent tells customers, before release and once it is live. An AI agent here is software that answers customers in writing or by voice using an AI model. It can also act for them, such as starting a refund or booking a slot. Engineers, product managers and CX leads pick a tool by the job they need done, and the tools fall into 5 jobs.',
    },
    {
      kind: 'list',
      items: [
        '**Evals before launch:** scored tests of the agent’s answers before a change goes live.',
        '**Live monitoring:** a record and a score for every live conversation, taken from the agent’s own logs.',
        '**Voice agent testing:** simulated callers that put a voice agent through its paces and score each call.',
        '**Enterprise chatbot QA:** quality assurance tests across many bots, languages and platforms on every release.',
        '**Checks from the customer’s side:** questions put to the live chat, inbox or phone line as a customer, with each answer kept.',
      ],
    },
    {
      kind: 'p',
      text: 'In the UK, a business is responsible for what its AI agent does in the same way it is responsible for what an employee does, even if someone else provides it. The Competition and Markets Authority set this out in [guidance published on 9 March 2026](' +
        CMA +
        '), which also tells businesses to check regularly how well an AI agent is performing.',
    },

    { kind: 'h2', id: 'criteria', text: 'How we compared the tools' },
    {
      kind: 'p',
      text: 'Every tool is described from its own pages, with prices in US dollars as listed on 28 October 2026. 5 questions separate them:',
    },
    {
      kind: 'list',
      items: [
        '**What it tests:** the agent in development, its live conversations, a voice agent, or what a customer gets on the live channels.',
        '**How it reaches the agent:** test cases, records your app sends, simulated callers, or the chat page, inbox and phone number customers use.',
        '**What comes back:** scores, step by step records, call recordings, transcripts or a written report.',
        '**Price as listed,** and whether there is a free plan, free credit or a trial.',
        '**Where it stops,** taken from its own pages.',
      ],
    },

    { kind: 'h2', id: 'evals', text: 'Evals before launch' },
    {
      kind: 'p',
      text: 'An eval is a scored test. The agent answers a set of test cases, and another AI model, code or a person marks each answer against the one expected. For engineers testing prompts and models before release, an eval tool is the right pick: it scores every change against the same cases before any customer sees it.',
    },

    { kind: 'h3', id: 'braintrust', text: 'Braintrust' },
    {
      kind: 'p',
      text: '[Braintrust](' + BRAINTRUST + ') offers evals and tracing for a whole team, and scores answers with an AI model, code or a person.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** experiments that run test cases and compare prompts and models side by side. It also records each prompt, reply and tool call, with alerts on cost, speed and quality.',
        '**Price as listed:** Starter is free, with 1 GB of data and 10,000 scores before usage fees. Pro is $249 a month, and Enterprise is priced on request. [Both listed plans](' +
          BRAINTRUST_PRICING +
          ') include unlimited users.',
        '**Where it stops:** it scores the cases and records your team sends it. Its pages describe no simulated customers or callers.',
        '**Best for:** engineering teams comparing prompts and models with scored evals.',
      ],
    },

    { kind: 'h3', id: 'promptfoo', text: 'Promptfoo' },
    {
      kind: 'p',
      text: '[Promptfoo](' + PROMPTFOO + ') is open source software for testing AI apps and agents, and its home page says 156 of the Fortune 500 use it.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** evals for prompts, models and RAG pipelines, systems that look up a company’s documents before answering. It adds red teaming, automated attacks that try to make an agent break its rules or leak data, and runs in the build pipeline on GitHub, GitLab or Jenkins.',
        '**Price as listed:** Community is free, with every evaluation feature and up to 10,000 red team probes a month. [Enterprise and On-Premise](' +
          PROMPTFOO_PRICING +
          ') are priced on request.',
        '**Where it stops:** it tests the app your team points it at. Its home page describes no customer personas.',
        '**Best for:** developers who want free, open source evals and red teaming in the build pipeline.',
      ],
    },

    { kind: 'h3', id: 'maxim', text: 'Maxim AI' },
    {
      kind: 'p',
      text: '[Maxim AI](' + MAXIM + ') calls its product a simulation and evaluation platform for agents.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** simulated conversations across scenarios and user personas, scored by an AI model, a person or code. It runs before launch and in production, and its dashboards compare runs across versions.',
        '**Price as listed:** not listed for the evaluation product, whose page offers a free start. [Its pricing page](' +
          MAXIM_PRICING +
          ') lists only Bifrost, its open source gateway to AI models.',
        '**Where it stops:** its pages don’t say how simulations reach the agent or what each plan includes.',
        '**Best for:** teams that want persona-led simulations and evals in one place.',
      ],
    },

    { kind: 'h2', id: 'monitoring', text: 'Live monitoring and tracing' },
    {
      kind: 'p',
      text: 'Monitoring tools keep a trace of each live conversation and score it as it arrives. A trace is a step by step record of the prompt, the model’s reply and each tool the agent called.',
    },

    { kind: 'h3', id: 'langsmith', text: 'LangSmith' },
    {
      kind: 'p',
      text: '[LangSmith](' + LANGSMITH + '), from LangChain, traces and monitors agents in production, including apps built without LangChain.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** dashboards for cost, speed, errors and feedback scores, with alerts to PagerDuty or another system. It scores live traces with an AI model or code, and groups them into usage patterns and failure types.',
        '**Price as listed:** Developer is free for 1 seat and 5,000 traces a month. Plus is $39 per seat a month with 10,000 traces, and [its pricing page](' +
          LANGSMITH_PRICING +
          ') prices Enterprise on request.',
        '**Where it stops:** it reads the runs your own app sends, and its pages describe no simulated users. Hosting it on your own servers is an Enterprise option.',
        '**Best for:** teams building on LangChain or LangGraph who want traces and live scoring.',
      ],
    },

    { kind: 'h3', id: 'langfuse', text: 'Langfuse' },
    {
      kind: 'p',
      text: '[Langfuse](' + LANGFUSE + ') is open source software for tracing and scoring AI apps, free to host on your own servers.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** traces of model calls, tool calls and document lookups, scored by an AI model, a rule or a person. It also manages prompts, with one-click rollbacks, and alerts on cost, speed and quality.',
        '**Price as listed:** Hobby is free, with 50,000 billable units a month and 30 days of data. [Core is $29 a month](' +
          LANGFUSE_PRICING +
          '), Pro $199 and Enterprise $2,499.',
        '**Where it stops:** it reads the runs your app sends, and its pages describe no simulated users. ClickHouse [announced it had acquired Langfuse](' +
          LANGFUSE_ACQ +
          ') on 16 January 2026, and said Langfuse stays open source.',
        '**Best for:** teams that want open source tracing and evals they can host themselves.',
      ],
    },

    { kind: 'h2', id: 'voice', text: 'Voice agent testing tools' },
    {
      kind: 'p',
      text: 'Voice testing tools put a voice agent through simulated callers, voices played by AI. Some vary accents, background noise and interruptions. They score each call, and all four of these tools also score live calls once the agent is in production.',
    },

    { kind: 'h3', id: 'cekura', text: 'Cekura' },
    {
      kind: 'p',
      text: '[Cekura](' + CEKURA + ') tests and monitors voice and chat AI agents.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** simulated conversations before go-live, such as bookings, refunds and handovers to a person. It adds attacks that try to break the agent’s rules or leak personal data, compliance checks such as recording notices, and monitoring of live calls.',
        '**Price as listed:** pay as you go has no base fee, at $0.25 per voice test minute and $0.05 per monitored call. Startup is $500 a month. [Every plan](' +
          CEKURA_PRICING +
          ') starts with 300 free credits, about 60 minutes, without payment details.',
        '**Where it stops:** [its documentation](' +
          CEKURA_DOCS +
          ') names Retell and Vapi as voice platforms it connects with. Its pages don’t say how test calls reach the agent.',
        '**Best for:** teams shipping a voice or chat agent who want per-minute prices and live call monitoring.',
      ],
    },

    { kind: 'h3', id: 'coval', text: 'Coval' },
    {
      kind: 'p',
      text: '[Coval](' + COVAL + ') runs voice AI testing, evals and quality review.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** thousands of simulated conversations before launch, with difficult callers, policy edge cases and noisy audio. Live calls are scored too, and high-stakes, failed or uncertain ones go to human reviewers.',
        '**Price as listed:** Starter is $100 a month for 100 simulation minutes, and Growth is $500 a month for 1,000. Both come with [a 7-day free trial](' +
          COVAL_PRICING +
          ') that asks for payment details, and Enterprise starts at $4,500 a month.',
        '**Where it stops:** [its documentation](' +
          COVAL_DOCS +
          ') lists inbound, outbound, chat and voice-to-voice connections. Its pages don’t say whether a test call reaches the agent by phone number or another route.',
        '**Best for:** teams that want voice testing on published monthly plans.',
      ],
    },

    { kind: 'h3', id: 'hamming', text: 'Hamming' },
    {
      kind: 'p',
      text: '[Hamming](' + HAMMING + ') describes itself as “the trust platform for voice and chat agents”.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** test scenarios written from the agent’s own instructions and scored on 50+ measures. Simulated callers bring accents, interruptions, noise, keypad tones and phone menus. Its home page lists 50,000+ test calls at once in 65+ languages. Failed tests become regression tests, which run on every release, and on live traffic it replays a set of reference calls every few minutes.',
        '**Price as listed:** its Agency, Startup and Enterprise plans all say “Contact us” [on its pricing page](' + HAMMING_PRICING + ').',
        '**Where it stops:** its pages give no prices or call allowances, and its documentation needs an access code.',
        '**Best for:** voice agent teams that want very large call simulations on a sales-led plan.',
      ],
    },

    { kind: 'h3', id: 'roark', text: 'Roark' },
    {
      kind: 'p',
      text: '[Roark](' + ROARK + ') offers testing and evals for voice AI, before launch and in production.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** simulated and adversarial callers with personas, accents and background noise in 45 languages, and regression tests that can block a release. It scores every production call as it arrives on 500+ measures, alerts in Slack and proposes fixes. [Its documentation](' +
          ROARK_DOCS +
          ') says it reaches an agent through phone numbers or a connected voice platform.',
        '**Price as listed:** pay as you go starts with $50 of free credit, then $0.15 per simulation minute plus provider costs. Team starts at $500 a month and Enterprise at $4,000 a month [on its pricing page](' +
          ROARK_PRICING +
          ').',
        '**Where it stops:** its pages don’t describe how chat simulations are set up. Single sign-on and data residency are Enterprise only.',
        '**Best for:** voice agent teams that want usage-based prices and a score on every call.',
      ],
    },

    { kind: 'h2', id: 'enterprise', text: 'Enterprise chatbot QA' },

    { kind: 'h3', id: 'cyara-botium', text: 'Cyara Botium' },
    {
      kind: 'p',
      text: '[Cyara Botium](' + CYARA_BOTIUM + ') tests and monitors bots and AI agents on voice and chat without code.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** functional, regression, performance and security tests on every build, in 50+ languages across 55+ chatbot platforms. It also checks for prompt injection (instructions hidden in a message to take over the agent), made-up answers, data leaks and bias. Cyara’s [Voice Assure](' +
          CYARA_VOICE +
          ') tests customer-facing phone numbers in 145+ countries.',
        '**Price as listed:** not listed, with a demo on request.',
        '**Where it stops:** it connects to the bot platforms your team runs, and its pages give no prices or usage limits.',
        '**Best for:** enterprise teams testing many chatbots and voice bots on every release.',
      ],
    },

    { kind: 'h2', id: 'customer-side', text: 'Checks from the customer’s side' },
    {
      kind: 'p',
      text: 'Customer-side checks talk to a live chatbot or AI agent the way a customer does and report what it said. They serve the people who answer for the agent, such as CX leads, compliance and legal, as well as the engineers who build it.',
    },

    { kind: 'h3', id: 'undercoveragent', text: 'UndercoverAgent' },
    {
      kind: 'p',
      text: '[UndercoverAgent](' + UNDERCOVER + ') runs customer scenarios against one live chatbot, voice agent or custom connection, and sends a weekly written brief.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** 200+ scenarios with confused, angry and adversarial customers. It also checks the disclosures that health, card payment and data protection rules require (HIPAA, PCI and GDPR). The weekly brief rates findings by severity, with example transcripts.',
        '**Price as listed:** $500 a week for 1 live agent, cancel any time. A sample report is on its demo page.',
        '**Where it stops:** 1 live agent per retainer, connected through Intercom, Zendesk or a custom connection. Its page says its findings are test evidence and carry no certification.',
        '**Best for:** teams that want a weekly written brief on one live bot.',
      ],
    },

    { kind: 'h3', id: 'tokensurf', text: 'TokenSurf' },
    {
      kind: 'p',
      text: '[TokenSurf](' + TOKENSURF + ') is a founder-run service that tests a company’s public chatbot with synthetic customers, with the company’s permission.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** test scenarios written for the chatbot, such as an angry customer, a refund request or someone who needs a person. They need no production integration, and the founder reviews every important finding, with a transcript behind each one.',
        '**Price as listed:** a one-off AI Agent Audit is $1,500, sold as a founding offer. Continuous AI Assurance is $1,500 a month for weekly monitoring with 100 synthetic conversations, and hardening and security reviews start at $4,000 and $6,000.',
        '**Where it stops:** it needs the chatbot’s address, policies and key questions. Its pages describe chatbot reviews with no phone or email checks.',
        '**Best for:** teams with a public chatbot that want a review done for them.',
      ],
    },

    { kind: 'h3', id: 'obsession', text: 'Obsession' },
    {
      kind: 'p',
      text: 'Obsession makes the first AI customers that work for you. **' +
        AI_CUSTOMER.definition +
        '** A chatbot is an AI customer service agent, which answers customers for a company. An AI customer is one of those customers, as [AI customer service agents vs AI customers](/blog/ai-customer-service-agent-vs-ai-customer) sets out, and [what AI customers are](/blog/ai-customers) explains the term in full.',
    },
    {
      kind: 'p',
      text: 'For a team running a chatbot or AI agent, Obsession’s AI customers chat, email and call it on the live channels customers use. They run every morning and within the hour of each update. Each one says it is an AI, asks what customers ask and checks the answer against the company’s policy page. It then asks for a person, and watches its own inbox for the email or callback the agent promised.',
    },
    {
      kind: 'p',
      text: 'The same AI customers sign up to any company your team names and keep every email, offer and price it sends, so your company can also find its revenue leaks, watch its competitors and prospect with proof. The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** answers checked from outside on chat, email and phone, every day and after every update. Each is kept as the transcript or recording, beside the policy page as it read that minute. Its checks cover a support bot, a voice receptionist, answers that change after an update, the notice that an agent is AI, resolutions an AI vendor bills for, and shortlisted vendors.',
        '**Price as listed:** running now. The first AI agent check is free, and plans are credit-based, like Claude’s.',
        '**Where it stops:** it covers the live chat, inbox and phone line your company names, and scoring prompts and models inside the build is an eval tool’s job.',
        '**Best for:** knowing what customers are told on the live chat, email and phone, every day and after every update, with each answer kept.',
      ],
    },
    {
      kind: 'art',
      caption: 'The same question asked on 3 channels every morning shows the day an update changes one answer, and on which channel.',
      art: {
        kind: 'runs',
        title: 'brightwell.example · 1 cancellation question, 3 days, 3 channels',
        prompt: 'I’m an AI customer. Can I cancel my plan in the first month without a fee?',
        runs: [
          { label: 'Mon 07:00 · chat', answer: 'Yes, it’s free in the first 30 days.', verdict: { tone: 'ok', text: 'Matches policy' } },
          { label: 'Mon 07:00 · phone', answer: 'Yes, there’s no fee for 30 days.', verdict: { tone: 'ok', text: 'Matches policy' } },
          { label: 'Tue 07:00 · chat', answer: 'A £20 fee applies to every cancellation.', verdict: { tone: 'fail', text: 'Policy says free' } },
          { label: 'Tue 07:00 · email', answer: 'Yes, it’s free in the first 30 days.', verdict: { tone: 'ok', text: 'Matches policy' } },
          { label: 'Tue 07:00 · phone', answer: 'Yes, there’s no fee for 30 days.', verdict: { tone: 'ok', text: 'Matches policy' } },
          { label: 'Wed 07:00 · chat', answer: 'Yes, it’s free in the first 30 days.', verdict: { tone: 'ok', text: 'Fixed Tue 10:40' } },
        ],
        foot: 'An example on an invented company. A vendor update on Monday night changed the chat’s answer, and the Tuesday 07:00 check caught it.',
      },
    },
    {
      kind: 'cta',
      text: 'Support bot check asks your support bot what your customers ask, on chat, email and your portal, every day. Each wrong answer comes back with its transcript and the right answer drafted.',
      to: '/recipes/support-bot-check',
      label: 'Test my chatbot',
    },

    { kind: 'h2', id: 'compared', text: 'AI chatbot testing tools compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 28 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to test an AI chatbot or AI agent. Prices in US dollars from each provider’s own pages, 28 October 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'Customers meet each wrong answer first', 'An agent that rarely changes'],
        [
          'By hand: a phone, a test account and a sheet',
          'Your own judgement on any channel',
          'Your team’s hours',
          'Hours grow with each question, channel and update',
          'A few questions, checked weekly',
        ],
        [
          'Evals before launch: Braintrust, Promptfoo, Maxim AI',
          'Scores answers against test cases before release',
          'Braintrust: free, Pro $249 a month\nPromptfoo: free, Enterprise on request\nMaxim AI: not listed',
          'The cases your team writes, run on the agent in testing',
          'Engineers testing prompts and models',
        ],
        [
          'Live monitoring: LangSmith, Langfuse',
          'Traces and scores every live conversation',
          'LangSmith: free, Plus $39 per seat a month\nLangfuse: free, Core $29 a month',
          'Reads the runs your own app sends',
          'Cost, speed and quality in production',
        ],
        [
          'Voice agent testing: Cekura, Coval, Hamming, Roark',
          'Simulated callers, some with accents, noise and interruptions',
          'Cekura: $0.25 a test minute\nCoval: from $100 a month\nHamming: contact us\nRoark: $0.15 a simulation minute',
          'The voice agent your team connects',
          'Voice agents before and after launch',
        ],
        [
          'Enterprise chatbot QA: Cyara Botium',
          'Tests on every build, in 50+ languages',
          'Not listed, demo on request',
          'Connects to the bot platforms your team runs',
          'Many bots across an enterprise',
        ],
        [
          'Customer-side services: UndercoverAgent, TokenSurf',
          'Customer scenarios on a live bot, with a written report',
          'UndercoverAgent: $500 a week\nTokenSurf: $1,500 audit, $1,500 a month',
          'UndercoverAgent: 1 agent per retainer\nTokenSurf: public chatbots',
          'A review of one bot, done for your team',
        ],
        [
          'Obsession (ours): [Support bot check](/recipes/support-bot-check), [Voice agent check](/recipes/voice-agent-check), [Drift watch](/recipes/drift-watch), [AI disclosure check](/recipes/ai-disclosure-check), [Resolution check](/recipes/resolution-check), [Vendor agent check](/recipes/vendor-agent-check)',
          'AI customers use the live chat, email and phone daily and after updates, and keep each answer',
          'Running now: first AI agent check free\nCredit-based plans, like Claude’s',
          'Sees what its AI customers are told, on the channels your team names',
          'What customers are told on every channel, every day, kept as proof',
        ],
      ],
    },

    { kind: 'h2', id: 'choose', text: 'Which tool to choose, by job' },
    {
      kind: 'p',
      text: 'Use Obsession when your team needs to know what customers are told on the live chat, email and phone your company runs, every day and after every update. Each answer is kept beside the policy it should match. An eval tool is enough while the agent is in development and the question is whether a change passes its test cases. A monitoring tool is enough when the question is cost, speed or errors inside your own app.',
    },
    {
      kind: 'list',
      items: [
        '**Prompts and models before release:** Promptfoo, free and open source, runs in the build pipeline. Braintrust, free to start, runs scored experiments across a team, and Maxim AI adds simulated user personas.',
        '**Live conversations from the agent’s own logs:** LangSmith for teams on LangChain or LangGraph, and Langfuse for open source a team hosts itself.',
        '**A voice agent:** Cekura or Roark for per-minute prices with free credit to start, and Coval for fixed monthly plans. Hamming suits very large call simulations on a sales-led plan.',
        '**Many bots across an enterprise:** Cyara Botium.',
        '**A written review of one public chatbot, done for your team:** TokenSurf for a one-off audit, and UndercoverAgent for a weekly brief.',
      ],
    },
    {
      kind: 'p',
      text: 'A team running an agent at volume often uses 2: an eval or monitoring tool inside the build, and a check from the customer’s side on the live channels. For CX teams, [AI customer service quality assurance](/blog/ai-customers-for-cx-teams) works out what a wrong answer costs in a team’s own numbers. For a store’s chat, [how to test a chatbot](/blog/test-store-chatbot-returns-policy) gives 8 questions and a scoring sheet to run by hand.',
    },

    { kind: 'h2', id: 'automate', text: 'How to automate chatbot testing' },
    {
      kind: 'p',
      text: 'Automated chatbot testing runs the same checks on every change and every day, so a broken answer shows up before customers meet it. A team can set it up in 5 steps, each with a pass mark written before the first run.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Write test cases from real questions.** Take the questions customers ask most from the help desk’s topic report, and write each expected answer from the policy page. A pass: every case has one right answer a person can check.',
        '**Run them on every change, before release.** Promptfoo and Cyara Botium run in the build pipeline, and Roark’s regression tests can block a release. A pass: a change that breaks a passing case doesn’t ship.',
        '**Score live conversations as they happen.** LangSmith, Langfuse and Braintrust score live traces with an AI model or code, and alert on cost, speed and quality. A pass: an alert reaches its owner when a score crosses the line your team set.',
        '**For a voice agent, run simulated callers against it.** Cekura, Coval, Hamming and Roark score each simulated call, and Hamming and Roark list accents and background noise. A pass: bookings, prices and handovers are right on every simulated call.',
        '**Check the live channels as a customer, every day and after every update.** Ask the live chat, inbox and phone line the same questions, ask for a person, and keep each answer with its time. A pass: each answer matches that morning’s policy page, a person answers within your target, and the agent says it is an AI.',
      ],
    },
    {
      kind: 'cta',
      text: 'Obsession makes the first AI customers that work for you. Your first AI agent check is free: 3 AI customers use a chat page or phone number your company runs, and your report lands within 4 days.',
      to: '/verify',
      label: 'Check your AI agents',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI chatbot testing tools' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are the best AI chatbot testing tools?',
          a: 'It depends on the job. Braintrust and Promptfoo test prompts and models before launch, and LangSmith and Langfuse monitor live conversations. Cekura, Coval, Hamming and Roark test voice agents, and Cyara Botium covers enterprise bots. Obsession’s AI customers check the live chat, email and phone as customers, every day and after every update, and keep each answer.',
        },
        {
          q: 'What is chatbot testing?',
          a: 'Chatbot testing is checking that a chatbot or AI agent gives customers the right answers, follows policy and hands over to a person when it should. It covers scored tests before release, monitoring of live conversations, simulated calls for voice agents and checks of the live channels as a customer.',
        },
        {
          q: 'How do you automate chatbot testing?',
          a: 'Chatbot automation testing tools run the checks without a person typing each question. Write test cases from the questions customers ask, and run them on every change in the build pipeline. Then score live conversations from the agent’s logs, and check the live channels as a customer every day and after every update.',
        },
        {
          q: 'What are the best AI agent testing tools for voice agents?',
          a: 'Cekura, Coval, Hamming and Roark put a voice agent through simulated callers and score each call. Cekura and Roark charge by the minute with free credit to start, Coval lists monthly plans from $100, and Hamming asks teams to contact it. Obsession’s Voice agent check calls an AI receptionist every morning as new customers, books a slot and asks a price and a person.',
        },
        {
          q: 'What is the difference between chatbot evals and chatbot monitoring?',
          a: 'An eval scores the agent’s answers against expected ones, usually before a change is released. Monitoring keeps a trace of each live conversation and scores it as it arrives, with alerts on cost, speed and quality.',
        },
        {
          q: 'Are there free chatbot testing tools?',
          a: 'Promptfoo’s Community plan is free and open source, and Braintrust, LangSmith and Langfuse have free plans. Cekura starts every plan with 300 free credits and Roark with $50 of credit. Obsession’s first AI agent check is free: 3 AI customers use a chat page or phone number your company runs, and the report lands within 4 days.',
        },
        {
          q: 'Can a team test a chatbot it bought from a vendor?',
          a: 'Yes. Customer-side checks use the chatbot the way customers do, so they work whether a team built the agent or bought it. TokenSurf tests a public chatbot with the company’s permission, and UndercoverAgent connects through Intercom, Zendesk or a custom connection. Obsession’s Vendor agent check runs the same real cases on each shortlisted vendor’s agent before signing.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about another tool comes from that tool’s own pages on 28 October 2026, with prices in US dollars as listed that day. Figures such as call capacity, language counts and customer counts are each company’s own. We did not run the tools. brightwell.example and every answer in its illustration are invented.',
    },
  ],

  sources: [
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-03-09' },
    { title: 'Braintrust home page', publisher: 'Braintrust', url: BRAINTRUST },
    { title: 'Pricing', publisher: 'Braintrust', url: BRAINTRUST_PRICING },
    { title: 'Promptfoo home page', publisher: 'Promptfoo', url: PROMPTFOO },
    { title: 'Pricing', publisher: 'Promptfoo', url: PROMPTFOO_PRICING },
    { title: 'Agent simulation and evaluation', publisher: 'Maxim AI', url: MAXIM },
    { title: 'Pricing', publisher: 'Maxim AI', url: MAXIM_PRICING },
    { title: 'LangSmith', publisher: 'LangChain', url: LANGSMITH },
    { title: 'Pricing', publisher: 'LangChain', url: LANGSMITH_PRICING },
    { title: 'Langfuse home page', publisher: 'Langfuse', url: LANGFUSE },
    { title: 'Pricing', publisher: 'Langfuse', url: LANGFUSE_PRICING },
    { title: 'Langfuse acquisition announcement', publisher: 'Langfuse', url: LANGFUSE_ACQ, date: '2026-01-16' },
    { title: 'Cekura home page', publisher: 'Cekura', url: CEKURA },
    { title: 'Pricing', publisher: 'Cekura', url: CEKURA_PRICING },
    { title: 'Introduction', publisher: 'Cekura documentation', url: CEKURA_DOCS },
    { title: 'Coval home page', publisher: 'Coval', url: COVAL },
    { title: 'Pricing', publisher: 'Coval', url: COVAL_PRICING },
    { title: 'Coval documentation', publisher: 'Coval', url: COVAL_DOCS },
    { title: 'Hamming home page', publisher: 'Hamming', url: HAMMING },
    { title: 'Pricing', publisher: 'Hamming', url: HAMMING_PRICING },
    { title: 'Roark home page', publisher: 'Roark', url: ROARK },
    { title: 'Roark documentation', publisher: 'Roark', url: ROARK_DOCS },
    { title: 'Pricing', publisher: 'Roark', url: ROARK_PRICING },
    { title: 'Botium', publisher: 'Cyara', url: CYARA_BOTIUM },
    { title: 'Voice Assure', publisher: 'Cyara', url: CYARA_VOICE },
    { title: 'UndercoverAgent home page', publisher: 'UndercoverAgent', url: UNDERCOVER },
    { title: 'TokenSurf home page', publisher: 'TokenSurf', url: TOKENSURF },
  ],

  related: [
    'recipe:support-bot-check',
    '/verify',
    'ai-customers-for-cx-teams',
    'test-store-chatbot-returns-policy',
    'recipe:voice-agent-check',
    'recipe:drift-watch',
  ],
}
