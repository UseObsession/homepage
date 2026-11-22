import type { BlogPost } from './types'

/* Kit articles (_research/seo/revamp-22nov/PLAN_articles.md, the no-code row; Seun's "write them", 22 Nov 2026).
   Primary "no code ai agents" (Google suggestions, US and UK, 22 Nov 2026, autocomplete_articles_22nov.json);
   secondaries from the same run: no code ai agent builder, ... platforms, ... builder free, ... tools. Readers:
   operations leads, founders, marketers and agency owners with no engineer free. Spine: the options guide, what they
   do well, how to build a first one with a pass per step, the builders compared, where they stop, blueprints, limits,
   FAQ, note and sources.
   Read on 22 Nov 2026, each on its own page: Zapier Agents (9,000+ apps, Zapier Copilot, work on the web) and Zapier's
   pricing (agents billed apart from tasks: 400 activities free, Pro from $33.33 a month yearly); Make AI Agents (visual
   canvas, Reasoning panel, 3,000+ apps, all plans, free start); n8n AI agents (AI Agent node "runs to completion", 600+
   integrations, human in the loop, self-host) and n8n pricing (Starter 20 euros a month yearly, Community Edition);
   OpenAI Agent Builder (visual canvas; deprecated, shutting down 30 Nov 2026; ChatKit stays; code export with the
   Agents SDK); Lindy pricing (Free $50 of credits for 7 days, Team $29.99 a user a month, 2 to 5 inboxes, computer use,
   3,000+ integrations, iMessage); Relevance AI pricing (Enterprise only, calling agents, 2,000+ integrations, a free
   trial link); Microsoft Copilot Studio pricing ($200 for 25,000 Copilot Credits a month, Azure for pay as you go,
   included for internal agents with Microsoft 365 Copilot, IVR agents). Gumloop's pricing page returned no plans on
   22 Nov, so it is left out. Where a builder stops is said only from its own pages; nothing its pages don't state.
   Obsession appears in 3 body sentences and a short list (the blueprints section), its comparison row, 3 FAQ answers
   and 2 calls to action, in the words of /blueprints and the blueprint pages. brightwell.example is invented.
   British English, no dashes. */

const ZAPIER_AGENTS = 'https://zapier.com/agents'
const ZAPIER_PRICING = 'https://zapier.com/pricing'
const MAKE_AGENTS = 'https://www.make.com/en/ai-agents'
const N8N_AGENTS = 'https://n8n.io/ai-agents/'
const N8N_PRICING = 'https://n8n.io/pricing/'
const LINDY = 'https://www.lindy.ai/pricing'
const RELEVANCE = 'https://relevanceai.com/pricing'
const COPILOT = 'https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/copilot-studio'
const OPENAI_AB = 'https://developers.openai.com/api/docs/guides/agent-builder'

export const post: BlogPost = {
  slug: 'no-code-ai-agents',
  title: 'No-code AI agents: what teams can build without engineers, and where the builders stop',
  dek: 'What a no-code agent does well, how to build your first one, and seven builders compared from their own pages as listed on 22 November 2026. Then the jobs that need more than a builder: a phone number of the agent’s own, a login kept for weeks and days of waiting for another company’s email.',
  metaTitle: 'No-code AI agents: what teams can build without engineers',
  description:
    'No-code AI agents compared: what Zapier, Make, n8n, Lindy and others build well, where they stop on phones, logins and waiting, and jobs ready to run.',
  answer:
    'No-code AI agents are agents a team builds by describing the job in plain words, dragging steps on a canvas or starting from a template, with no code to write. Builders such as Zapier Agents, Make, n8n and Lindy connect a model to thousands of apps a team already uses, so they suit work inside your own inbox, CRM and Slack. When the agent acts as an outsider, such as signing up or waiting days for another company’s email, it needs an inbox, a number and a browser of its own.',
  primaryKeyword: 'no code ai agents',
  keywords: ['no code ai agent builder', 'no code ai agent platforms', 'no code ai agent builder free', 'no code ai agent tools'],
  category: 'Test sign-up and agents',
  published: '2026-11-22',
  updated: '2026-11-22',
  readingMinutes: 10,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'Where a no-code agent fits',
      period: 'Five jobs at brightwell.example, a 40-person firm, by where the agent acts',
      cols: ['The job', 'Where the agent acts', 'What it needs'],
      rows: [
        { name: 'Triage the support inbox', cells: ['Your inbox, through a connection', 'A builder'], tone: 'ok' },
        { name: 'Qualify demo requests', cells: ['Your form app and CRM', 'A builder'], tone: 'ok' },
        { name: 'Answer questions in Slack', cells: ['Your Slack and documents', 'A builder'], tone: 'ok' },
        { name: 'Time how fast reps answer a lead', cells: ['Your form and sales line, as a stranger', 'Its own inbox and number'], tone: 'info' },
        { name: 'Keep a competitor’s emails', cells: ['A competitor’s sign-up, for weeks', 'Its own inbox and browser'], tone: 'info' },
      ],
      notes: [
        'Builders fit jobs inside the apps you connect. Jobs done as an outsider need an inbox, a number and a browser of the agent’s own.',
        'Example: brightwell.example and its jobs are invented.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Operations leads, founders, marketers and agency owners use no-code AI agents to hand a repeating job to software without waiting for an engineer. A no-code agent reads a trigger, such as a new form or email, decides what to do and acts in the apps it is connected to. The builders here are compared from their own pages as listed on 22 November 2026, each with what it does well, its price and where it stops.',
    },

    { kind: 'h2', id: 'what-it-is', text: 'What is a no-code AI agent?' },
    {
      kind: 'p',
      text: 'A no-code AI agent has five parts, set up in a builder instead of written in code:',
    },
    {
      kind: 'list',
      items: [
        '**A trigger** that starts it, such as a new form, an email, a Slack message or a set time each day.',
        '**A model** that reads the trigger and decides the next step.',
        '**Tools**, the apps it may act in through the builder’s connections, such as your inbox, CRM or sheets.',
        '**Instructions**, written the way you would brief a new hire, with examples.',
        '**Limits**, the steps that wait for a person’s approval and the apps it may never touch.',
      ],
    },
    {
      kind: 'p',
      text:
        'No-code AI agent platforms offer three ways to set those parts up. You describe the agent and an assistant helps build it, as [Zapier Agents](' +
        ZAPIER_AGENTS +
        ') does with Zapier Copilot. You drag steps on a visual canvas, as in [Make](' +
        MAKE_AGENTS +
        '), where agents sit on the same canvas as Make’s automated scenarios. Or you start from a template and change it. [n8n](' +
        N8N_AGENTS +
        ') offers a mix. You can describe the agent to its AI Assistant, build it by hand, or prompt it through n8n’s MCP server, which lets an outside AI assistant do the building.',
    },
    {
      kind: 'p',
      text: 'The decision is what separates an agent from ordinary automation. An automation follows the same steps every time. An agent chooses its next step from what it reads, which suits messy inputs such as free-text emails, documents and support questions. Make’s page lists intake, triage, follow-ups and analysis as agent work, and says to use an agent when a workflow needs judgment or reasoning.',
    },

    { kind: 'h2', id: 'what-they-do-well', text: 'What no-code agents do well' },
    {
      kind: 'p',
      text: 'No-code agents are strongest inside the apps a team already uses. These five jobs suit them, each with the number the team watches:',
    },
    {
      kind: 'list',
      items: [
        '**Triage an inbox and draft replies.** The agent manages new email, drafts answers in your voice and leaves them for a person to send, which [Lindy](' +
          LINDY +
          ') lists on its plans. Teams watch first-reply time and hours saved a week.',
        '**Qualify new leads.** It reads each form, scores the lead, adds it to the CRM and books the next step. Sales teams watch speed to lead and meetings booked, and [speed to lead statistics](/blog/speed-to-lead-statistics) shows which benchmarks hold up.',
        '**Answer questions in Slack.** It answers what people ask in a channel from your own documents. Teams watch how many questions close without a person.',
        '**Read documents into your systems.** It reads an invoice, a contract or an application and fills in the fields. Operations teams watch errors and minutes per document.',
        '**Follow up on time.** It chases an unpaid invoice or an unsigned form on a schedule. Finance and sales teams watch days to close.',
      ],
    },

    { kind: 'h2', id: 'build', text: 'How to build your first no-code AI agent' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Pick one job with a clear finish.** Write it in a paragraph a new hire could follow. It passes when two people reading it would do the same thing.',
        '**List the apps and permissions.** Connect only what the job needs, read-only where you can. It passes when the agent can’t reach an app the job doesn’t use.',
        '**Write the instructions with examples.** Give three real past cases and what your team did in each. It passes when the agent handles those three correctly.',
        '**Put a person in front of anything final.** Sending, paying and deleting wait for approval at first. Make lets you add manual approvals or stop an agent at set points, and n8n lets you choose which actions need a human. It passes when nothing leaves without a click until you trust it.',
        '**Test on 20 past cases before live work.** Run real examples from last month and compare the agent’s choices with what your team did. It passes when it matches on the cases that matter most.',
        '**Read the trail every week.** Make shows each decision step by step in a reasoning panel. Check the decisions, the cost per run and anything a person had to fix.',
      ],
    },

    { kind: 'h2', id: 'compared', text: 'No-code AI agent builders compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 22 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'No-code AI agent tools, from each provider’s own pages, as listed on 22 November 2026. Prices as each listed them',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs nothing today', 'Free', 'The job stays on someone’s list', 'Jobs that come up a few times a month'],
        [
          'A person or a freelancer',
          'Judgement on every hard case, at any site or phone line',
          'Staff or freelance hours',
          'Hours grow with every job; nothing is logged unless they log it',
          'Jobs that need a human call each time',
        ],
        [
          '[Zapier Agents](' + ZAPIER_AGENTS + ')',
          'Agents set up with Zapier Copilot that act in 9,000+ apps and on the web',
          'Free: 400 agent activities a month\nPro: from about $33.33 a month on the annual plan',
          'Agent activities are billed apart from Zap tasks',
          'Teams that already run Zaps',
        ],
        [
          '[Make AI Agents](' + MAKE_AGENTS + ')',
          'Agents on its visual canvas, each decision shown step by step, 3,000+ apps',
          'Free to start\nAgents on every plan',
          'Agents live inside scenarios you design and maintain',
          'Teams that want to see every decision',
        ],
        [
          '[n8n](' + N8N_AGENTS + ')',
          'An AI Agent step with memory, tools and human approval, 600+ integrations',
          'Cloud from €20 a month, billed yearly\nCommunity Edition to self-host',
          'Each agent is one step in a workflow that runs to completion',
          'Teams that self-host to keep data in-house',
        ],
        [
          '[Lindy](' + LINDY + ')',
          'Inbox management and replies in your voice, computer use, 3,000+ integrations',
          'Free: $50 of credits for 7 days\nTeam: $29.99 a user a month',
          'Works in 2 to 5 of your inboxes, by plan',
          'Email and meeting work for a team',
        ],
        [
          '[Relevance AI](' + RELEVANCE + ')',
          'Ready sales agents for research, prospecting, scheduling and deal review, plus calling agents',
          'Enterprise, priced by its sales team\nFree to try',
          'Lists no prices; plans are set with its sales team',
          'Sales teams buying agents ready-made',
        ],
        [
          '[Microsoft Copilot Studio](' + COPILOT + ')',
          'Agents for Microsoft 365, websites and apps, plus IVR (phone menu) agents',
          '$200 a month for 25,000 Copilot Credits\nIncluded for internal agents with Microsoft 365 Copilot',
          'Pay as you go needs an Azure subscription',
          'Companies already on Microsoft 365',
        ],
        [
          '[OpenAI Agent Builder](' + OPENAI_AB + ')',
          'A visual canvas for multi-step agents, with templates and previews',
          'No price on its docs page',
          'Shutting down on 30 November 2026, per OpenAI’s docs',
          'Teams moving workflows to ChatKit or code',
        ],
        [
          'Obsession (ours): [blueprints](/blueprints) such as [Lead response checks](/blueprints/lead-leaks), [Support bot check](/blueprints/support-bot-check) and [Competitor tracking](/blueprints/competitor-tracking)',
          'Runs the job on agents with their own inbox, number and browser, waiting days and keeping every email, text and screenshot',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Runs the jobs on its list, and developers build others on the same pieces; stops before payment and at any identity check',
          'Jobs where an agent acts as a new customer or lead',
        ],
      ],
    },
    {
      kind: 'p',
      text:
        'For work inside your own apps, a builder is the right tool. Zapier Agents suits teams that already run Zaps, Make suits teams that want to see every decision, n8n suits teams that must self-host, and Lindy suits inbox work. [Zapier’s pricing page](' +
        ZAPIER_PRICING +
        ') bills agent activities apart from Zap tasks. [n8n’s pricing page](' +
        N8N_PRICING +
        ') counts every workflow run as one execution, whatever it does, so price the runs you expect before you choose. Teams on Microsoft 365 Copilot already have Copilot Studio for internal agents.',
    },
    {
      kind: 'p',
      text: 'Teams that built on OpenAI’s Agent Builder have until 30 November 2026 to move. OpenAI’s docs say ChatKit stays available, and a workflow’s code can be copied out and run with the Agents SDK.',
    },

    { kind: 'h2', id: 'where-they-stop', text: 'Where no-code agents stop' },
    {
      kind: 'p',
      text: 'Builders are made for work inside apps you connect. Three kinds of job ask for more, because the agent has to act as someone outside your company.',
    },
    { kind: 'h3', id: 'own-number', text: 'A phone number of its own' },
    {
      kind: 'p',
      text: 'A lead who texts back, a portal that sends a sign-in code by text and a customer who would rather call all need a number that belongs to the agent. In a builder, that means a separate account with a phone provider. It brings its own number, texting setup and bill, and each message has to be wired back to the agent.',
    },
    { kind: 'h3', id: 'logins', text: 'A login kept for weeks' },
    {
      kind: 'p',
      text: 'Signing up at a supplier, a competitor or a portal with no ready connection needs a browser that keeps its session between runs. It also needs an inbox to catch the confirmation link or code. The agent signs up once and returns every day as the same user. [Can AI agents log in to websites?](/blog/can-ai-agents-log-in-to-websites) sets out what works and what each site allows.',
    },
    { kind: 'h3', id: 'waiting', text: 'Days of waiting for an email' },
    {
      kind: 'p',
      text: 'Much of the value arrives later. A welcome email comes on day 2, an offer on day 7 and a lead’s reply on Friday, and some reminders never come at all. On its own page, n8n calls its AI Agent node “one step inside of a workflow that runs to completion”, so a wait of days is a workflow you design around it. The job also needs each email kept as it arrived, with the time, and a screenshot of each page.',
    },
    {
      kind: 'p',
      text: 'Each builder can reach these pieces through its connections, so an assembled version is possible. It takes a mailbox, a phone provider, a browser service and somewhere to keep every email and screenshot. Each comes with its own account and bill, and someone has to fix it when one part changes.',
    },

    { kind: 'h2', id: 'blueprints', text: 'Blueprints: jobs that run without a builder' },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, on one API and one bill, and teams without engineers pick a blueprint, a ready-made job Obsession runs for them. Three cover the jobs builders find hardest:',
    },
    {
      kind: 'list',
      items: [
        '[Lead response checks](/blueprints/lead-leaks) fill in your forms, open your chat and call your sales line as a new lead, timing every first reply.',
        '[Support bot check](/blueprints/support-bot-check) asks your support bot what your team hears most and keeps every answer word for word.',
        '[Competitor tracking](/blueprints/competitor-tracking) signs up at each competitor and keeps every email, text, offer and price it’s sent.',
      ],
    },
    {
      kind: 'p',
      text: 'Each runs on personas, agents with their own inbox, number and browser, waits as long as the job takes and posts results to Slack, a sheet or your CRM.',
    },
    {
      kind: 'cta',
      text: 'Pick a job, say where the results go, and Obsession runs it, from timing your speed to lead to keeping every email a competitor sends a new customer. Each blueprint is billed on the pieces it uses, and the [jobs for teams that don’t write code](/no-code) are grouped by team.',
      to: '/blueprints',
      label: 'Browse blueprints',
    },

    { kind: 'h2', id: 'limits', text: 'Lines every agent should keep, with code or without' },
    {
      kind: 'p',
      text: 'Whichever way an agent is built, some lines hold. [AI agent use cases for business](/blog/ai-agent-use-cases-for-business) shows the jobs that fit inside them.',
    },
    {
      kind: 'list',
      items: [
        '**It says it’s an AI** when it talks to a person.',
        '**It stops before payment** unless it has the customer’s own payment card, and never uses made-up payment details.',
        '**It treats a CAPTCHA or a bot block as a hard stop.**',
        '**It stops at any identity check.**',
        '**A person approves anything that can’t be undone**, such as a payment, a deletion or a first email to someone new.',
      ],
    },
    {
      kind: 'cta',
      text: 'Every check on your own sign-up, lead forms and AI agents, run as a new customer meets them and kept in one log.',
      to: '/blueprints/test-sign-up-and-agents',
      label: 'See how it works',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about no-code AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best no-code AI agent builder?',
          a: 'It depends on where the work happens. On 22 November 2026, Zapier Agents reached 9,000+ apps and suited teams already running Zaps, Make showed each decision step by step, n8n could be self-hosted and Lindy focused on inbox work. For jobs where the agent acts as a new customer or lead at another company, Obsession’s blueprints run the job on agents with their own inbox, number and browser.',
        },
        {
          q: 'Is there a free no-code AI agent builder?',
          a: 'Yes. On 22 November 2026, Zapier’s free plan included 400 agent activities a month, Make offered agents on every plan with a free start, and Lindy gave $50 of credits for 7 days. Obsession’s Free plan includes 3 inboxes, a number that receives texts and calls, and 10 browser hours.',
        },
        {
          q: 'Can no-code AI agents make phone calls?',
          a: 'Some can. Relevance AI lists calling agents on its Enterprise plan, and Microsoft Copilot Studio lets you design IVR (phone menu) agents. Elsewhere, calls come through a connection to a phone provider, with its own number, setup and bill. On a paid plan, Obsession’s Lead response checks call your sales line as a new lead and time every reply.',
        },
        {
          q: 'What is the difference between a no-code AI agent and an automation?',
          a: 'An automation follows the same steps every time. A no-code AI agent lets a model choose the next step from what it reads, which suits free-text emails, documents and questions. Many teams run both, with fixed steps where the path never changes and an agent where it has to judge.',
        },
        {
          q: 'Do no-code AI agents work with my own email and apps?',
          a: 'Yes. Builders connect to the apps you already use, and the agent acts through those connections. Lindy, for example, connects to 2 to 5 of your inboxes depending on plan. An agent that signs up somewhere or receives codes needs an address of its own.',
          link: { label: 'Email for AI agents', to: '/email' },
        },
        {
          q: 'What happens to OpenAI’s Agent Builder?',
          a: 'OpenAI’s docs say Agent Builder is being deprecated and is scheduled to shut down on 30 November 2026. ChatKit stays available, and a workflow’s code can be copied and run on your own servers with the Agents SDK.',
        },
        {
          q: 'Which jobs can a team run without any builder?',
          a: 'These are jobs where the agent acts as a new customer or lead. Examples include timing how fast your team answers a lead, checking what your support bot tells customers and keeping every email a competitor sends a new customer. Obsession runs these as blueprints and posts the results to Slack, a sheet or your CRM.',
          link: { label: 'The Watch the market blueprints', to: '/blueprints/watch-the-market' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the comparison',
      text: 'Every builder is described from its own pages as listed on 22 November 2026, with prices as each showed them: n8n in euros billed yearly, the rest in US dollars. Plans and prices change often, so check each page before you buy. brightwell.example in the illustration is invented.',
    },
  ],

  sources: [
    { title: 'Zapier Agents', publisher: 'Zapier', url: ZAPIER_AGENTS },
    { title: 'Make AI Agents', publisher: 'Make', url: MAKE_AGENTS },
    { title: 'AI agents', publisher: 'n8n', url: N8N_AGENTS },
    { title: 'Pricing', publisher: 'Lindy', url: LINDY },
    { title: 'Pricing', publisher: 'Relevance AI', url: RELEVANCE },
    { title: 'Microsoft Copilot Studio pricing', publisher: 'Microsoft', url: COPILOT },
    { title: 'Agent Builder', publisher: 'OpenAI', url: OPENAI_AB },
    { title: 'Pricing', publisher: 'Zapier', url: ZAPIER_PRICING },
    { title: 'Pricing', publisher: 'n8n', url: N8N_PRICING },
  ],

  related: ['/use-cases/ai-recruiter', '/use-cases/otp-testing', '/blueprints/test-sign-up-and-agents', 'recipe:lead-leaks', 'recipe:support-bot-check', 'ai-agent-use-cases-for-business', 'can-ai-agents-log-in-to-websites', '/no-code'],
}
