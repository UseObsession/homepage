import type { BlogPost } from './types'

/* Wave 2 best-of guide (_research/seo/agent-business-24nov/PLAN.md, 24 Nov 2026): the best AI tools for marketing
   agencies. Primary "best ai tools for marketing agencies"; also "best ai tools for digital marketing agencies".
   Reader: the owner or head of a marketing agency choosing tools by the work the agency does. Every other tool is
   described only from its own pricing or product page, read on 24 Nov 2026, with prices in US dollars as listed that
   day. Not confirmed on a company's own page: ChatGPT's page showed plan names with no price figures, and Canva's,
   Perplexity's and Apollo's pages gave no price (Canva's returned an error), so none is given; Make's page gave only
   its free plan; Clay's page shows two different prices for Launch, both stated. Obsession's claims come from
   src/content/teams/agencies.ts, the recipes and pages/lookup.ts; its prices from src/content/prices.ts (plans Free,
   $20, $99, $499). The example stack adds listed prices for one example agency. No dashes. */

const CHATGPT = 'https://chatgpt.com/pricing'
const CLAUDE = 'https://claude.com/pricing'
const JASPER = 'https://www.jasper.ai/pricing'
const CANVA = 'https://www.canva.com/pricing/'
const SEMRUSH = 'https://www.semrush.com/prices/'
const AHREFS = 'https://ahrefs.com/pricing'
const PERPLEXITY = 'https://www.perplexity.ai/pro'
const CLAY = 'https://www.clay.com/pricing'
const APOLLO = 'https://www.apollo.io/pricing'
const AGENCYANALYTICS = 'https://agencyanalytics.com/pricing'
const LOOKER = 'https://datastudio.google.com/overview'
const ZAPIER = 'https://zapier.com/pricing'
const MAKE = 'https://www.make.com/en/pricing'
const N8N = 'https://n8n.io/pricing/'

export const post: BlogPost = {
  slug: 'best-ai-tools-for-marketing-agencies',
  title: 'The best AI tools for marketing agencies: 14 sorted by the work you do',
  dek: '14 AI tools for marketing agencies sorted by the work: writing and creative, research and SEO, prospecting, reporting, automation and checks on a client’s store. Prices as listed on 24 November 2026.',
  metaTitle: 'Best AI tools for marketing agencies: 14 by job and price',
  description:
    'The best AI tools for marketing and digital marketing agencies, by job: ChatGPT, Claude, Semrush, Clay, AgencyAnalytics, Zapier, n8n and client checks.',
  answer:
    'The best AI tools for a marketing agency depend on the work. ChatGPT, Claude and Jasper write, Semrush, Ahrefs and Perplexity research, Clay and Apollo prospect, AgencyAnalytics and Looker Studio report, and Zapier, Make and n8n connect the rest. None of them checks what a client’s store sends a new customer, which Obsession’s blueprints do for every client.',
  primaryKeyword: 'best ai tools for marketing agencies',
  keywords: ['best ai tools for marketing agencies', 'best ai tools for digital marketing agencies', 'ai tools for agencies'],
  category: 'Run an agency',
  order: 3,
  published: '2026-11-24',
  updated: '2026-11-24',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'Which tool does which part of agency work',
      rows: [
        {
          name: 'Make the work',
          who: 'ChatGPT, Claude, Jasper, Canva',
          nodes: ['Your brief', 'A draft', 'Your client'],
          links: ['turns into', 'approved by'],
        },
        {
          name: 'Find and win clients',
          who: 'Semrush, Ahrefs, Clay, Apollo',
          nodes: ['A market', 'A target list', 'Your pitch'],
          links: ['narrowed to', 'opens'],
        },
        {
          name: 'Run and report',
          who: 'AgencyAnalytics, Looker Studio, Zapier, n8n',
          nodes: ['Client data', 'A dashboard', 'Your monthly call'],
          links: ['pulled into', 'shown on'],
        },
        {
          name: 'Check the client’s store',
          who: 'Obsession',
          nodes: ['A client store', 'A persona', 'A dated finding for your pitch'],
          links: ['signed up to by', 'reported as'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'The first 3 rows are about your own work. The last is about what the client’s customer receives.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An agency’s work splits into 6 kinds of task: making content and creative, researching a market, finding new clients, reporting to current ones, connecting tools so the work runs without hand-offs, and checking what a client’s customer actually gets. Most guides to AI tools cover the first 5. This one adds the sixth, because a client who sees a reminder email that never arrived trusts the agency that caught it.',
    },
    {
      kind: 'p',
      text: 'Every tool is described from its own pricing or product page as listed on 24 November 2026, with prices in US dollars a month. Where a page showed no price, or wouldn’t load, no price is given.',
    },

    { kind: 'h2', id: 'writing', text: 'Writing and creative' },

    { kind: 'h3', id: 'chatgpt', text: 'ChatGPT' },
    {
      kind: 'p',
      text: '[ChatGPT’s pricing page](' +
        CHATGPT +
        ') lists Free, Go, Plus, Pro, Business and Enterprise plans. Plus adds advanced reasoning models, projects, scheduled tasks and custom GPTs. Business is per user, starting at 2 users.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the widest general tool, from drafts to analysis, with projects for each client.',
        '**Price as listed:** Free is $0. The page showed no figure for the paid plans when checked.',
        '**Where it stops:** it works from what you give it. It doesn’t log in as a customer to a client’s store.',
        '**Best for:** drafting and analysis across every account.',
      ],
    },

    { kind: 'h3', id: 'claude', text: 'Claude' },
    {
      kind: 'p',
      text: '[Claude’s pricing page](' +
        CLAUDE +
        ') lists Free with limited usage and web search, Pro, Max and Team.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** long documents, writing and code, with Claude Code on Pro and above.',
        '**Price as listed:** Free is $0. Pro is $20 a month, or $17 billed annually. Max is $100. Team standard seats are $25 a month, or $20 billed annually, for 2 to 150 users.',
        '**Where it stops:** the same as any assistant: it needs a person to supply the inputs.',
        '**Best for:** long reports, briefs and careful rewrites.',
      ],
    },

    { kind: 'h3', id: 'jasper', text: 'Jasper' },
    {
      kind: 'p',
      text: '[Jasper’s pricing page](' +
        JASPER +
        ') lists a Pro plan and a Business plan for marketing teams.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** marketing writing with a team in mind.',
        '**Price as listed:** Pro is $69 per seat a month on monthly billing, or $59 billed yearly, with a 7-day free trial. Business is a quote.',
        '**Where it stops:** more than one user on Pro means contacting sales, according to its FAQ.',
        '**Best for:** a small writing team that wants a marketing-specific tool.',
      ],
    },

    { kind: 'h3', id: 'canva', text: 'Canva' },
    {
      kind: 'p',
      text: 'Canva is a design tool agencies use for social and presentation creative. Its [pricing page](' +
        CANVA +
        ') returned an error when checked on 24 November 2026, so no plan, price or AI feature is described here. Read its page for the current plans.',
    },

    { kind: 'h2', id: 'research', text: 'Research and SEO' },

    { kind: 'h3', id: 'semrush', text: 'Semrush' },
    {
      kind: 'p',
      text: '[Semrush’s prices page](' +
        SEMRUSH +
        ') lists a Free plan and SEO, Starter, Pro+ and Advanced plans in its SEO and AI search tiers.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** keyword, competitor and rank data in one place, with AI search tracking in its tiers.',
        '**Price as listed:** SEO is $139 a month, or $117.33 billed annually. Starter is $199 or $165.17. Pro+ is $299 or $248.17. Advanced is custom. A 7-day free trial is offered.',
        '**Where it stops:** it reads search and the public web, not what a brand sends a new subscriber.',
        '**Best for:** agencies that sell SEO.',
      ],
    },

    { kind: 'h3', id: 'ahrefs', text: 'Ahrefs' },
    {
      kind: 'p',
      text: '[Ahrefs’ pricing page](' +
        AHREFS +
        ') lists Lite, Standard, Advanced and Enterprise plans, with free tools including an AI visibility checker.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** backlink and search data, plus free tools for a first look.',
        '**Price as listed:** Lite is $129 a month, Standard $249 and Advanced $449. Annual billing saves up to 17%.',
        '**Where it stops:** it covers search, not a client’s customer journey.',
        '**Best for:** link and content research.',
      ],
    },

    { kind: 'h3', id: 'perplexity', text: 'Perplexity' },
    {
      kind: 'p',
      text: '[Perplexity’s page](' +
        PERPLEXITY +
        ') names 3 plans, Free, Pro and Max, and showed no price when checked, so none is given here.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** cited answers for market and competitor questions.',
        '**Where it stops:** it answers from published pages, not from what a company emails its customers.',
        '**Best for:** quick desk research with sources.',
      ],
    },

    { kind: 'h2', id: 'prospecting', text: 'Prospecting and outreach' },

    { kind: 'h3', id: 'clay', text: 'Clay' },
    {
      kind: 'p',
      text: '[Clay’s pricing page](' +
        CLAY +
        ') lists a Free plan with 500 actions and 100 data credits a month, then Launch, Growth and Enterprise.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** lists built from several data sources, with Claygent, its research agent, and CRM sync on Growth.',
        '**Price as listed:** Launch is from $167 a month on the plan card and $185 in its FAQ. Growth is from $446, or $495 in its FAQ. Annual billing saves 10%.',
        '**Where it stops:** the Free plan has no phone number enrichment, and the page gives two different rollover rules for credits.',
        '**Best for:** agencies that build target lists for outreach.',
      ],
    },

    { kind: 'h3', id: 'apollo', text: 'Apollo' },
    {
      kind: 'p',
      text: '[Apollo’s pricing page](' +
        APOLLO +
        ') lists Free, Basic, Professional and Custom plans priced per user per month, with credits shared across a team. The page showed no dollar figure for them. Apollo advertises 240 million contacts and 30 million companies.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** a large contact database with email campaigns on every plan.',
        '**Where it stops:** free plans send through Gmail only, API access needs a Custom plan, and plans are for internal use, so reselling its data needs a separate agreement.',
        '**Best for:** agencies prospecting by email and phone.',
      ],
    },

    { kind: 'h2', id: 'reporting', text: 'Reporting' },

    { kind: 'h3', id: 'agencyanalytics', text: 'AgencyAnalytics' },
    {
      kind: 'p',
      text: '[AgencyAnalytics’ pricing page](' +
        AGENCYANALYTICS +
        ') prices by client: all features, including dashboards, integrations and client portals, in one plan, with unlimited staff and client users.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** a branded dashboard for each client, with an AI Tracker add-on for how brands appear in AI answers.',
        '**Price as listed:** $20 per client a month billed annually, with a 14-day free trial and a 30-day money-back guarantee. Agencies with 25 or more clients can ask for volume rates.',
        '**Where it stops:** it reports numbers from the client’s accounts, not what a new customer receives.',
        '**Best for:** monthly client reporting at scale.',
      ],
    },

    { kind: 'h3', id: 'looker', text: 'Looker Studio' },
    {
      kind: 'p',
      text: '[Looker Studio’s page](' +
        LOOKER +
        ') describes interactive dashboards and reports, with built-in and partner connectors, and says it is free to use. The page, which still shows its earlier name Data Studio, mentions no paid tier.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** custom dashboards at no cost.',
        '**Where it stops:** you build and maintain each report yourself.',
        '**Best for:** agencies with someone who likes building dashboards.',
      ],
    },

    { kind: 'h2', id: 'automation', text: 'Automation' },

    { kind: 'h3', id: 'zapier', text: 'Zapier' },
    {
      kind: 'p',
      text: '[Zapier’s pricing page](' +
        ZAPIER +
        ') prices by tasks a month, from a Free plan to Pro and Team plans.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** connects thousands of apps with the least setup.',
        '**Price as listed:** Free is $0 for 100 tasks. Pro with 750 tasks is $19.99 billed annually or $29.99 monthly, and with 2,000 tasks $49 or $73.50. Team starts at 2,000 tasks, at $69 or $103.50.',
        '**Where it stops:** cost grows with tasks, and annual billing is discounted 33% against monthly.',
        '**Best for:** hand-offs between your client tools.',
      ],
    },

    { kind: 'h3', id: 'make', text: 'Make' },
    {
      kind: 'p',
      text: '[Make’s pricing page](' +
        MAKE +
        ') bills in credits, and most actions use 1. It states 1,000 credits a month on Free and showed no figure for Core, Pro or Teams when checked.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** visual workflows with a free plan to start.',
        '**Where it stops:** its page doesn’t list paid prices here, so check it before planning a budget. Businesses with under 20 employees may qualify for a Start-up Plan at 50% off Business.',
        '**Best for:** agencies that prefer a visual builder.',
      ],
    },

    { kind: 'h3', id: 'n8n', text: 'n8n' },
    {
      kind: 'p',
      text: '[n8n’s pricing page](' +
        N8N +
        ') prices by executions, one full run of a workflow however many steps it has. A self-hosted Community Edition is available on GitHub.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** price doesn’t rise with the steps in a workflow, and you can host it yourself.',
        '**Price as listed:** Starter is €20 a month billed annually for 2,500 executions. Pro is €50 for 10,000. Business is €667 for 40,000, self-hosted only.',
        '**Where it stops:** someone has to build and look after each workflow.',
        '**Best for:** agencies with a technical person and longer workflows.',
      ],
    },

    { kind: 'h2', id: 'client-checks', text: 'Checking a client’s store as a customer' },
    {
      kind: 'p',
      text: 'The tools above help an agency write, research, win, report and connect. None of their pages describes signing up to a client’s store as a new customer and keeping every email and text that follows. That is the evidence a retention or CRO agency pitches with: the welcome code that failed, the basket reminder that never came.',
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill. A persona puts an inbox, a number and a browser under one identity, and a blueprint is a ready-made job it runs for you. [Agencies](/agencies) run 4 today, for every client, and white label comes with Enterprise:',
    },
    {
      kind: 'list',
      items: [
        '**Mystery shopping:** a persona signs up, fills a basket and starts checkout at a client’s store, stopping before payment, then keeps every email and text that follows. The [mystery shopping blueprint](/blueprints/mystery-shopper) shows a real run in which a £40 basket left at 02:57 got no reminder.',
        '**CRO funnel checks:** the pop-up, the welcome email and the code at checkout, met as a new customer before and after each test you launch.',
        '**Ad checks:** each live ad’s landing page checked every morning for the offer, price and stock.',
        '**Competitor tracking:** every email, text, offer and price a client’s competitors send a new customer, dated.',
      ],
    },
    {
      kind: 'art',
      caption: 'A persona leaves a basket at a client’s store, and the log shows what the store sent and what it never sent. Larkfield is an invented store.',
      art: {
        kind: 'log',
        title: 'Mystery shop of a client store',
        who: 'Persona for an agency, at larkfield.example',
        rows: [
          { time: '02:57:10', text: 'Basket left, stopped before payment', detail: '£40, 2 items', tone: 'info' },
          { time: '02:58:30', text: 'Email received: Welcome with a code', detail: 'Code works at checkout', tone: 'ok' },
          { time: '+4 hours', text: 'No basket reminder', detail: 'Window closed with nothing sent', tone: 'fail' },
          { time: '+48 hours', text: 'Still no reminder', detail: 'Finding added to the client report', tone: 'fail' },
        ],
        foot: 'Each email and text is dated in the event log, so a missing reminder is a finding, not a guess.',
      },
    },
    {
      kind: 'p',
      text: 'An agency can’t open a store’s report from the [store lookup](/lookup), because that report goes only to someone at the store. Instead, run the mystery shopping blueprint on every client and every store you pitch, with each brand’s OK. [The lookup’s agency section](/lookup#agencies) explains how, and the Free plan lets you try it first. As listed on 24 November 2026, plans are Free, then $20, $99 or $499 a month, with usage billed per piece ([every rate](/pricing/rates)). Obsession doesn’t write copy, rank keywords or build dashboards, so it sits beside the tools above, not in place of them.',
    },
    {
      kind: 'cta',
      text: 'Run mystery shopping, funnel checks and ad checks on every client store. Free plan, no credit card.',
      to: '/agencies',
      label: 'Start free',
    },

    { kind: 'h2', id: 'cost', text: 'What a starter stack costs for 10 clients' },
    {
      kind: 'p',
      text: 'Taking an example agency with 10 clients, one writer and a few automations, priced from the listed plans:',
    },
    {
      kind: 'table',
      caption: 'Example inputs. Each provider’s listed prices on 24 November 2026, mixing monthly and annual billing as marked, before tax',
      cols: ['Job', 'Tool and plan', 'Monthly price'],
      rows: [
        ['Writing', 'Claude Pro', '$20'],
        ['SEO research', 'Semrush SEO', '$139'],
        ['Reporting', 'AgencyAnalytics, 10 clients', '$200 billed annually'],
        ['Automation', 'Zapier Pro, 750 tasks', '$29.99'],
        ['Dashboards', 'Looker Studio', 'Free'],
        ['Client checks', 'Obsession Free, or Developer', 'Free, or $20'],
      ],
    },
    {
      kind: 'p',
      text: 'The first 5 rows come to $388.99 a month. Obsession adds nothing on the Free plan and $20 on Developer. If one retained client is worth more than that to you, a check that finds the gap which wins or keeps them is a test worth running.',
    },

    { kind: 'h2', id: 'choose', text: 'Which to choose, by the work you do' },
    {
      kind: 'list',
      items: [
        '**Drafting and analysis:** ChatGPT or Claude, both with free plans.',
        '**SEO clients:** Semrush or Ahrefs.',
        '**New business:** Clay or Apollo, then a dated screenshot for each pitch.',
        '**Monthly reports:** AgencyAnalytics for scale, Looker Studio for free.',
        '**Hand-offs between tools:** Zapier for ease, n8n for long workflows and self-hosting.',
        '**The emails and texts a client’s customers receive:** Obsession’s blueprints, each dated.',
      ],
    },
    {
      kind: 'p',
      text: 'Three results to watch as you test it: how many new clients a pitch backed by a dated screenshot wins, how many retained clients stay after a quarter of weekly checks, and how many hours the checks save against doing them by hand. [How to get clients as a marketing agency](/blog/get-clients-as-a-marketing-agency) shows the pitch, [how ecommerce agencies keep clients](/blog/ecommerce-agency-client-retention-with-ai-customers) the weekly routine, and [how to start an AI automation agency](/blog/start-an-ai-automation-agency) the agency built on these tools.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI tools for marketing agencies' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are the best AI tools for marketing agencies?',
          a: 'It depends on the work. ChatGPT, Claude and Jasper write, Semrush, Ahrefs and Perplexity research, Clay and Apollo prospect, AgencyAnalytics and Looker Studio report, and Zapier, Make and n8n connect tools. To check what a client’s store sends a new customer, Obsession’s blueprints run mystery shopping, CRO funnel checks, ad checks and competitor tracking.',
          link: { label: 'Obsession for agencies', to: '/agencies' },
        },
        {
          q: 'What are the best AI tools for digital marketing agencies on a small budget?',
          a: 'Start with free plans. As listed on 24 November 2026, Claude, Looker Studio, Zapier (100 tasks), Clay (500 actions) and Make (1,000 credits) have free plans, and Ahrefs offers free tools. Obsession’s Free plan lets an agency try mystery shopping on a client store with the brand’s OK.',
          link: { label: 'Every rate', to: '/pricing/rates' },
        },
        {
          q: 'Can AI replace a marketing agency?',
          a: 'It speeds up drafting, research and reporting. It doesn’t replace the judgement a client pays for, or knowing what a new customer receives from the client’s store, which needs someone to check it.',
        },
        {
          q: 'How can an agency show a prospect a dated finding before a pitch?',
          a: 'Run a persona through the prospect’s store as a new customer and keep every email and text. The mystery shopping blueprint does this and stops before payment, and each brand’s OK is needed to run it.',
          link: { label: 'Mystery shopping', to: '/blueprints/mystery-shopper' },
        },
        {
          q: 'Can an agency look up a client’s store on Obsession’s lookup?',
          a: 'Not from the lookup box, because a store’s report goes only to someone at the store. Agencies run the mystery shopping blueprint on each client store instead, with the brand’s OK.',
          link: { label: 'Lookup, agencies', to: '/lookup#agencies' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about another tool comes from that company’s own pricing or product page as listed on 24 November 2026, with prices in US dollars as shown that day. We did not run the tools. Where a page showed no price or returned an error, none is given. The starter stack applies listed prices to one example agency. Larkfield and its picture are invented.',
    },
  ],

  sources: [
    { title: 'Pricing', publisher: 'ChatGPT', url: CHATGPT },
    { title: 'Pricing', publisher: 'Claude', url: CLAUDE },
    { title: 'Pricing', publisher: 'Jasper', url: JASPER },
    { title: 'Pricing', publisher: 'Canva', url: CANVA },
    { title: 'Prices', publisher: 'Semrush', url: SEMRUSH },
    { title: 'Pricing', publisher: 'Ahrefs', url: AHREFS },
    { title: 'Perplexity plans', publisher: 'Perplexity', url: PERPLEXITY },
    { title: 'Pricing', publisher: 'Clay', url: CLAY },
    { title: 'Pricing', publisher: 'Apollo', url: APOLLO },
    { title: 'Pricing', publisher: 'AgencyAnalytics', url: AGENCYANALYTICS },
    { title: 'Overview', publisher: 'Looker Studio', url: LOOKER },
    { title: 'Pricing', publisher: 'Zapier', url: ZAPIER },
    { title: 'Pricing', publisher: 'Make', url: MAKE },
    { title: 'Pricing', publisher: 'n8n', url: N8N },
  ],

  related: [
    '/agencies',
    '/lookup',
    'get-clients-as-a-marketing-agency',
    'ecommerce-agency-client-retention-with-ai-customers',
    'start-an-ai-automation-agency',
    '/blueprints/mystery-shopper',
  ],
}
