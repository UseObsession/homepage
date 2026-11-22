import type { BlogPost } from './types'

/* Kit article, Work behind logins (_research/seo/revamp-22nov/PLAN_articles.md and ARTICLE_BRIEF.md; Seun's "write
   them", 22 Nov 2026). Owns "rpa vs ai agents"; secondaries from Google suggestions, US and UK, 22 Nov 2026
   (autocomplete_articles_22nov.json): robotic process automation vs ai agents, ai agents vs rpa bots, rpa or ai which
   is better, rpa and ai difference, ai vs rpa. /kits/work-behind-logins keeps "ai agents for portals", and
   /blog/browser-automation-tools-for-ai-agents keeps the browser tools; each is linked.
   Readers: operations, finance and revenue cycle leads deciding where bots stop and agents start.
   Every fact read on its own page on 22 Nov 2026 (9 fetches, one a 404): UiPath's RPA page; UiPath's About Selectors
   documentation (activities, UI automation); Automation Anywhere's RPA vs IPA vs APA page; Deloitte Insights'
   "Automation with intelligence" (30 Jun 2022, 479 executives, 35 countries, 74% implementing RPA, process
   fragmentation the top barrier); Anthropic's "Building effective agents" (19 Dec 2024); Microsoft Learn's computer use
   page for Copilot Studio (20 Oct 2026: adapts to interface changes, 5 or 15 Copilot Credits a step, the 4-step
   example, password fields and the app types that might not be supported); Microsoft's Power Automate pricing
   (Premium $15 a user, Process $150 and Hosted Process $215 a bot, a month, paid yearly); the CMS fact sheet on the
   Interoperability and Prior Authorization Final Rule (17 Jan 2024). Claude's computer use docs were read the same day
   for the companion article. The prior authorization rule is general information, never legal advice, in the agency's
   own terms (US spellings kept in proper names). Obsession is described in the words of /kits/work-behind-logins,
   /use-cases/prior-authorization-ai-agent and /blueprints/vendor-agent-check. Keelson and Brightwater are invented.
   No dashes. */

const UIPATH_RPA = 'https://www.uipath.com/rpa/robotic-process-automation'
const AA_COMPARE = 'https://www.automationanywhere.com/rpa/rpa-vs-ipa-vs-apa'
const DELOITTE = 'https://www.deloitte.com/us/en/insights/topics/talent/intelligent-automation-2022-survey-results.html'
const PA_PRICING = 'https://www.microsoft.com/en-us/power-platform/products/power-automate/pricing'
const UIPATH_SELECTORS = 'https://docs.uipath.com/activities/other/latest/ui-automation/about-selectors'
const ANTHROPIC = 'https://www.anthropic.com/engineering/building-effective-agents'
const MS_CU = 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use'
const CLAUDE_CU = 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool'
const CMS = 'https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-and-prior-authorization-final-rule-cms-0057-f'

export const post: BlogPost = {
  slug: 'rpa-vs-ai-agents',
  title: 'RPA vs AI agents: which operations teams should use for portals and back-office work',
  dek: 'RPA bots replay fixed steps on structured data, the same way every run. AI agents read the screen and choose the next step, which suits portals that change. Where each one breaks, and which to use job by job, with each vendor’s own words and prices as listed on 22 November 2026.',
  metaTitle: 'RPA vs AI agents: which fits portals and back-office teams',
  description:
    'RPA vs AI agents for operations teams: what bots do well, where they break when portals change, where agents fit, and which to use job by job, with prices.',
  answer:
    'RPA vs AI agents turns on how often the screen and the case change. RPA bots replay recorded steps on structured data and suit stable, high-volume work; AI agents read the page and decide each step, which suits changing portals and cases that need judgement. Most operations teams run both, and UiPath, Automation Anywhere and Microsoft now sell agents that hand the fixed steps to their bots.',
  primaryKeyword: 'rpa vs ai agents',
  keywords: [
    'robotic process automation vs ai agents',
    'ai agents vs rpa bots',
    'rpa or ai which is better',
    'rpa and ai difference',
    'ai vs rpa',
  ],
  category: 'Work behind logins',
  published: '2026-11-22',
  updated: '2026-11-22',
  readingMinutes: 11,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'runs',
      title: 'One portal change, two ways to run it',
      prompt: 'Tuesday 06:00 at keelson.example: check 340 shipments on a carrier portal that moved its Track button overnight',
      runs: [
        { label: 'RPA bot', answer: 'Its selector for Track no longer matches. The run stops at the first shipment and the queue waits for a developer.', verdict: { tone: 'fail', text: 'Stopped' } },
        { label: 'AI agent', answer: 'Finds Track under the new menu, reads all 340 statuses and saves a screenshot of each.', verdict: { tone: 'ok', text: 'Done' } },
        { label: 'Either, at a CAPTCHA', answer: 'Stops there and leaves the step for a person on your team.', verdict: { tone: 'info', text: 'Handed back' } },
      ],
      foot: 'Example: Keelson, a freight broker, its carrier portal and the counts are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'RPA vs AI agents is the choice operations, finance and revenue cycle teams face for work done in other companies’ portals and in their own back-office systems. RPA, robotic process automation, uses software robots that repeat the clicks and keystrokes a person would make, on fixed screens. An AI agent uses a language model to read the screen, decide the next step and handle a case it hasn’t seen before. Most teams end up running both, and the work splits by how often the screen and the case change.',
    },

    { kind: 'h2', id: 'rpa', text: 'What does RPA do well?' },
    {
      kind: 'p',
      text: '[UiPath](' +
        UIPATH_RPA +
        ') describes RPA as using “software robots to automate repetitive, rule-based tasks like data entry”. It says RPA excels at high-volume, rule-based work, “especially those that span multiple systems”. Its examples are loan processing, claims, invoices, ticket routing and user provisioning. [Automation Anywhere](' +
        AA_COMPARE +
        ') says RPA “excels at handling high-volume, low-complexity tasks based on structured data”, and works best “in static environments where tasks are well-defined and consistent”.',
    },
    {
      kind: 'p',
      text: 'A bot takes the same steps in the same order on every run, so an auditor can read exactly what it did. A run costs the same on day 300 as on day 1. There is no model call, so there is no token bill and no answer that varies between runs. In [Deloitte’s 2022 intelligent automation survey](' +
        DELOITTE +
        ') of 479 executives in 35 countries, 74% said they were already implementing RPA.',
    },
    {
      kind: 'p',
      text: 'Bots come in two kinds. An attended bot runs on a person’s desktop when they start it, and an unattended bot runs on its own machine on a schedule. [Microsoft’s Power Automate prices](' +
        PA_PRICING +
        ') show the split. On 22 November 2026, Premium cost $15 a user a month with attended desktop flows, and Process cost $150 a bot a month for unattended flows. Hosted Process, with a virtual machine Microsoft runs for you, cost $215 a bot a month, each paid yearly.',
    },

    { kind: 'h2', id: 'breaks', text: 'Where does RPA break on portals?' },
    {
      kind: 'p',
      text: 'A bot finds each button and field by a selector, a stored description of that element on the screen. [UiPath’s documentation](' +
        UIPATH_SELECTORS +
        ') says selectors “store the attributes of a graphical user interface element and its parents, in the shape of an XML fragment”. It adds that some programs, “such as some web-apps”, have changing layouts and values. “Studio cannot predict these changes”, it says, so some selectors might have to be generated manually.',
    },
    {
      kind: 'p',
      text: 'Portals you don’t own change without notice. A payer redesigns its login page, a carrier moves its Track button, or a supplier adds a login code step or shortens its sessions. Each change can stop a bot at the first step it no longer recognises, and the queue waits until someone repairs the selector. A team running bots across 20 portals carries 20 sources of change it doesn’t control.',
    },
    {
      kind: 'p',
      text: 'The second limit is the case itself. Automation Anywhere says RPA “is not designed for handling unstructured data or complex decision-making processes”. A denial letter, an email from a carrier or a scanned invoice in a new layout has to be read, and a bot following rules can’t read it. In Deloitte’s 2022 survey, process fragmentation topped the barriers to scaling automation.',
    },

    { kind: 'h2', id: 'agents', text: 'What does an AI agent do differently?' },
    {
      kind: 'p',
      text: '[Anthropic’s guide to building effective agents](' +
        ANTHROPIC +
        '), published in December 2024, separates the two. Workflows are “systems where LLMs and tools are orchestrated through predefined code paths”, LLMs being large language models such as Claude. In an agent, LLMs “dynamically direct their own processes and tool usage”. On a portal, the agent reads the page as it is that morning, finds the Track link under a new menu, reads the denial letter and drafts the appeal.',
    },
    {
      kind: 'p',
      text: 'The same guide says agentic systems “often trade latency and cost for better task performance” and carry “the potential for compounding errors”. It recommends testing in sandboxed environments, with guardrails. [Tracing an agent in production](/blog/ai-agent-observability) shows how teams log each step it takes: the page it read, the action it chose and what came back.',
    },
    {
      kind: 'p',
      text: '[Microsoft’s computer use tool](' +
        MS_CU +
        ') in Copilot Studio shows how agents are priced. A step is one or more clicks, keystrokes or page moves. Each step uses 5 Copilot Credits, or 15 with a premium model, so a four-step timesheet run uses 20. Microsoft says the tool adapts to interface changes, so “when buttons or screens change, the tool continues working without breaking your flow”.',
    },
    {
      kind: 'p',
      text: 'Agents have limits of their own. Microsoft’s page says computer use runs on a Windows machine, and that its stored passwords might not work in some app types, such as Citrix or other virtualised environments. [Claude’s computer use documentation](' +
        CLAUDE_CU +
        ') advises a person confirming steps with real-world consequences, such as financial transactions or agreeing to terms of service.',
    },

    { kind: 'h2', id: 'vendors', text: 'Do RPA vendors sell AI agents too?' },
    {
      kind: 'p',
      text: 'Yes, and they sell agents to work beside their bots. UiPath writes that RPA has become essential to agentic automation: AI agents make the decisions, and robots carry them out across enterprise systems. Automation Anywhere calls its version agentic process automation, or APA, and says “APA doesn’t replace RPA and IPA; it orchestrates them”. IPA, intelligent process automation, is its name for RPA with AI added.',
    },
    {
      kind: 'p',
      text: 'Automation Anywhere’s own comparison rates RPA’s decision-making as “None. Requires predefined rules” and APA’s as “Independent and adaptive”. It rates RPA as structured data only, with cost rising from low for RPA to high for APA. For an operations lead, that framing keeps the bots already running in place. Agents go where bots keep breaking or cases need reading. Each agent is judged on the same numbers as the bots beside it: straight-through rate, exceptions per day, cost per transaction and hours spent repairing automations.',
    },

    { kind: 'h2', id: 'by-job', text: 'RPA or an AI agent: which to use, job by job' },
    {
      kind: 'p',
      text: 'Sort each job by two questions: how often its screens change, and how often a case needs reading or judgement. Stable screens and fixed rules point to RPA. Changing portals and unstructured cases point to an agent.',
    },
    {
      kind: 'table',
      caption: 'RPA or an AI agent, by job, for operations, finance and revenue cycle teams',
      cols: ['Job', 'Better fit', 'Why'],
      rows: [
        ['Copying fields between two internal systems, thousands a day', 'RPA', 'Fixed screens, structured data, lowest cost per run'],
        ['Month-end journal entries from a fixed template', 'RPA', 'Rules never change, and auditors read the same steps'],
        ['Keying orders into an old desktop app', 'RPA', 'Stable screens, and agent sign-in can be limited on virtual desktops'],
        ['Claim and prior authorization status in many payer portals', 'AI agent', 'Portals change layout and add login code steps'],
        ['Reading denial letters and drafting appeals', 'AI agent', 'Unstructured text and judgement'],
        ['Invoices from many vendor portals each month', 'AI agent', 'Every portal differs, each with its own login and code'],
        ['Tracking loads on carrier portals', 'AI agent', 'Many sites, frequent redesigns'],
        ['Payments and filings with a regulator', 'Either, with a person approving', 'A wrong step costs more than a slow one'],
      ],
    },

    { kind: 'h2', id: 'both', text: 'How do teams run RPA and AI agents together?' },
    {
      kind: 'p',
      text: 'The common pattern splits one process three ways. RPA runs the fixed steps inside your own systems. An agent works the portals and the exceptions the bots hand it. A person approves the consequential steps and the cases the agent flags. Measure the split each week: the share of cases that finish with no person, the size of the exception queue, cost per case and hours spent fixing automations.',
    },
    {
      kind: 'art',
      caption: 'One revenue cycle process split between a bot, an agent and a person, each doing the part it does best. Brightwater, a clinic group, is an invented example.',
      art: {
        kind: 'flow',
        title: 'One claims process, three hands',
        steps: [
          { label: 'RPA bot', detail: 'Pulls the day’s open claims from billing', tone: 'ok' },
          { label: 'AI agent', detail: 'Checks each claim in its payer portal, with a screenshot', tone: 'ok' },
          { label: 'AI agent', detail: 'Drafts the appeal for each denial', tone: 'info' },
          { label: 'Person', detail: 'Approves and submits each appeal', tone: 'info' },
        ],
        foot: 'Example: Brightwater and its payers are invented.',
      },
    },

    { kind: 'h2', id: 'move', text: 'How to move a breaking bot to an AI agent' },
    {
      kind: 'p',
      text: 'Move one job at a time, and keep the bot running until the agent beats it on your own numbers.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Count the breaks.** Pull 90 days of failed runs for each bot and the hours spent repairing it. A pass is a list of bots ranked by repair hours.',
        '**Pick one portal job with a clear finish,** such as reading claim status or downloading an invoice. A pass is a job whose result fits one row per case.',
        '**Run the agent beside the bot for 2 weeks** on the same cases. A pass is an agent that matches the bot on the cases the bot finished, and finishes the cases it dropped.',
        '**Set the stops before go-live:** CAPTCHAs, identity checks, payments and submissions. A pass is every stop landing in a named person’s queue, with a screenshot of the page.',
        '**Compare after a month.** Retire the bot when the agent wins on cost per case and straight-through rate. For a revenue cycle team, add denial rate and days in A/R, the days a claim waits for payment.',
      ],
    },

    { kind: 'h2', id: 'portals', text: 'What does portal work need from an AI agent?' },
    {
      kind: 'p',
      text: 'An agent working in another company’s portal needs more than a model. It needs a browser that stays signed in between runs and an inbox and phone number of its own, so each login code reaches it. It also needs a screenshot of every page as a check on what it saw, and firm stops at CAPTCHAs, identity checks and payment. [Browser automation tools for AI agents](/blog/browser-automation-tools-for-ai-agents) compares the libraries, frameworks and cloud browsers that supply the browser, and [can AI agents log in to websites?](/blog/can-ai-agents-log-in-to-websites) covers sessions, codes and the law.',
    },
    {
      kind: 'p',
      text: 'Some portal work is moving to an API, the interface a company builds for other software to use. The [CMS Interoperability and Prior Authorization Final Rule](' +
        CMS +
        ') was released on 17 January 2024. From 1 January 2026 it sets decision deadlines for Medicare Advantage organisations and state Medicaid and CHIP programmes, their managed care plans included. Urgent prior authorization requests get a decision within 72 hours, and standard ones within 7 calendar days. Payers under the rule must run a Prior Authorization API from 1 January 2027. Portals stay for payers outside the rule and for steps an API doesn’t cover, the work a [prior authorization AI agent](/use-cases/prior-authorization-ai-agent) does in payer portals each morning. This is general information about the rule, never legal advice.',
    },

    { kind: 'h2', id: 'obsession', text: 'AI agents that stay signed in to every portal' },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: an inbox, a phone number and a browser for every agent, on one API and one bill. For portals, the [Work behind logins blueprints](/blueprints/work-behind-logins) gives an agent a [browser](/browser) that stays signed in for weeks, with its own [inbox](/email) and [number](/phone) for every login code. Before you sign an AI agent vendor, the [Vendor agent check](/blueprints/vendor-agent-check) blueprint runs your hardest cases on each shortlisted agent and returns every answer side by side, dated.',
    },
    {
      kind: 'cta',
      text: 'A browser that stays signed in to payer, carrier and supplier portals for weeks, with an inbox and number for every login code, on one key and one bill.',
      to: '/blueprints/work-behind-logins',
      label: 'See how it works',
    },

    { kind: 'h2', id: 'keep-bots', text: 'When RPA is still the right tool' },
    {
      kind: 'p',
      text: 'Keep the bots where the screens are yours, the rules are fixed and the volume is high. A stable internal process with thousands of runs a day costs less on RPA than on an agent paying for a model call at every step. Its steps also read the same in every audit. Rebuilding working bots as agents adds cost and variation with no change in straight-through rate.',
    },
    {
      kind: 'cta',
      text: 'Shortlisting AI agent vendors? Vendor agent check runs your hardest cases on each one before you sign, and brings back every answer and handoff side by side, dated.',
      to: '/blueprints/vendor-agent-check',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about RPA and AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Will AI agents replace RPA?',
          a: 'The RPA vendors expect both to run side by side. UiPath calls RPA essential to agentic automation, with agents deciding and robots carrying out the steps. Automation Anywhere says its AI agents coordinate RPA bots instead of replacing them. Agents take the portal and exception work that keeps breaking bots, and stable bots keep running.',
        },
        {
          q: 'What is the difference between RPA and AI?',
          a: 'RPA follows recorded steps and rules on structured data and does the same thing on every run. AI, in the form of an agent, uses a language model to read text and screens and choose the next step, so it handles cases and layouts it hasn’t seen before. Automation Anywhere’s comparison lists RPA as handling structured data only, with no decision-making beyond predefined rules.',
        },
        {
          q: 'RPA or AI: which is better for back-office work?',
          a: 'RPA is better for stable, high-volume steps inside your own systems, at a fixed cost per run. An AI agent is better for portals that change, unstructured documents and cases that need judgement, at a higher cost per step. Most teams use both, with a person approving payments and filings.',
        },
        {
          q: 'How much do RPA bots and AI agents cost?',
          a: 'On 22 November 2026, Microsoft listed Power Automate at $150 a bot a month for unattended RPA, or $215 with a virtual machine it hosts, paid yearly. Its Copilot Studio computer use tool billed 5 Copilot Credits a step, or 15 with a premium model. An agent’s cost grows with the steps it takes, while a bot’s licence stays the same however many runs it makes.',
        },
        {
          q: 'What is agentic process automation?',
          a: 'Agentic process automation, or APA, is Automation Anywhere’s name for AI agents that pursue a goal and coordinate RPA bots and AI services across systems. It describes APA as an evolution of intelligent automation that orchestrates RPA instead of replacing it.',
        },
        {
          q: 'Do RPA bots break when a website changes?',
          a: 'They can. UiPath’s documentation says selectors store each element’s attributes, and that Studio cannot predict changes in apps with changing layouts, such as some web apps, so some selectors might have to be generated manually. Each redesign of a portal you don’t own can stop a bot at the first step it no longer recognises.',
        },
        {
          q: 'Can an AI agent work in a portal that sends a login code?',
          a: 'Yes, if the code reaches an inbox or number the agent controls and its browser keeps the login between runs. Obsession gives each agent its own inbox and number for codes and a browser that stays signed in for weeks. It stops at any CAPTCHA or identity check.',
          link: { label: 'Work behind logins', to: '/blueprints/work-behind-logins' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Where these facts come from',
      text: 'Each vendor and analyst is described from its own pages as they stood on 22 November 2026, and every price is as listed that day, in US dollars. The prior authorization rule is described from the CMS fact sheet as general information, never legal advice. Keelson, Brightwater and their portals are invented examples.',
    },
  ],

  sources: [
    { title: 'Robotic process automation', publisher: 'UiPath', url: UIPATH_RPA },
    { title: 'RPA vs IPA vs APA', publisher: 'Automation Anywhere', url: AA_COMPARE },
    { title: 'Automation with intelligence: intelligent automation survey 2022', publisher: 'Deloitte Insights', url: DELOITTE, date: '2022-06-30' },
    { title: 'Power Automate pricing', publisher: 'Microsoft', url: PA_PRICING },
    { title: 'About selectors', publisher: 'UiPath Documentation', url: UIPATH_SELECTORS },
    { title: 'Building effective agents', publisher: 'Anthropic', url: ANTHROPIC, date: '2024-12-19' },
    { title: 'Automate web and desktop apps with computer use', publisher: 'Microsoft Learn', url: MS_CU, date: '2026-10-20' },
    { title: 'Computer use tool', publisher: 'Claude Platform Docs', url: CLAUDE_CU },
    { title: 'CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F)', publisher: 'Centers for Medicare & Medicaid Services', url: CMS, date: '2024-01-17' },
  ],
  related: [
    '/blueprints/work-behind-logins',
    'recipe:vendor-agent-check',
    'can-ai-agents-log-in-to-websites',
    'ai-agent-observability',
  ],
}
