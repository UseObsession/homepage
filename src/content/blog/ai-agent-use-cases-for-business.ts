import type { BlogPost } from './types'

/* Draft, 31 Oct 2026, written to _research/seo/plan/use-cases-1nov/PLAN_business.md (Seun's go, 31 Oct). It owns
   "ai agent use cases for business" and its neighbours (Google autocomplete, US and UK, 31 Oct: autocomplete_31oct.json
   and autocomplete_31oct_b.json beside the plan). Its sister guide, agentic-ai-use-cases-in-ecommerce, owns the ecommerce
   phrases, and each links to the other. Readers: founders, marketing, sales and CX leads, agency founders and developers
   asking what AI agents can do for a business.
   The shape: the answer names both kinds of agent and ends on a plain "use Obsession" by its full view; inside agents in
   brief; the definition word for word; 34 jobs in five groups, each row in the words of the live page that runs it and
   linked to it, with the live guide that teaches it where one exists (its anchor is the query that guide owns in
   docs/SEARCH.md, or its primary phrase); the first job by role, with each free offer in the site's own words; the
   hand-overs (the CAPTCHA line, no fake payment details, says it is an AI); scale and cost; the options compared, with
   the last row ours; the FAQ. Texts are left out of every claim. Data and investor uses wait for a live page.
   Read at source on 31 Oct 2026: Salesforce's State of Service release (20 May 2026), Meta's Muse launch post (8 Sep
   2026), T-ROC's mystery shopping page (4 May 2026), Shopify's SimGym help page, Visualping's pricing, MailCharts' home
   page and Owletter's pricing. No dashes. Rewritten 22 Nov 2026 for the toolkit position: jobs map to blueprints, pieces and kits. */

const SALESFORCE = 'https://www.salesforce.com/news/stories/ai-service-agents-improve-customer-satisfaction/'
const MUSE = 'https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/'
const TROC = 'https://trocglobal.com/mystery-shopping-services/'
const SIMGYM = 'https://help.shopify.com/en/manual/online-store/simgym'
const VISUALPING = 'https://visualping.io/pricing'
const MAILCHARTS = 'https://www.mailcharts.com/'
const OWLETTER = 'https://www.owletter.com/pricing'

const COLS = ['Job', 'What it does', 'What comes back', 'How often', 'Who runs it', 'Pages']

export const post: BlogPost = {
  slug: 'ai-agent-use-cases-for-business',
  title: 'AI agent use cases for business: 34 jobs an AI agent can do as a customer of any company',
  dek: 'Most AI agents work inside the company that runs them. Some work at a company as a real customer, your own included, and keep what it shows only to customers. They take on 34 jobs, from checking a welcome email to watching a competitor’s prices and opening a pitch with proof.',
  metaTitle: 'AI agent use cases for business: 34 jobs done as a customer',
  description:
    'AI agent use cases for business: what agents do inside a company, and 34 jobs done as a customer at your own company, competitors, prospects and partners.',
  answer:
    'AI agent use cases for business fall into two kinds: agents that work inside a company, and agents that act as a customer of other companies, your own included. An agent working as a customer signs up, waits and keeps what each company sends, so a business can check its own welcome email, follow competitors and open pitches with the prospect’s own emails. Obsession gives each agent an inbox, a phone number and a browser through one API and one bill, and its blueprints run these jobs for marketing, sales and agency teams.',
  primaryKeyword: 'ai agent use cases for business',
  keywords: [
    'ai agent use cases',
    'ai agent examples in real life',
    'what can ai agents do for my business',
    'what can ai agents do and not do',
    'ai agent ideas for business',
    'ai agent use cases for small businesses',
    'ai customer use cases',
  ],
  category: 'Behind the login',
  published: '2026-10-31',
  updated: '2026-11-22',
  readingMinutes: 10,
  order: 2,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'Where AI agents work for one company',
      rows: [
        {
          name: 'Inside agents',
          who: 'Answer customers, chase invoices, write code',
          nodes: ['Your company', 'AI agent', 'Your customers'],
          links: ['runs', 'answers'],
        },
        {
          name: 'At your own company',
          who: 'Find your revenue leaks',
          nodes: ['Your company', 'AI agent', 'Your own site'],
          links: ['sends', 'signs up, waits, keeps'],
          lit: 1,
        },
        {
          name: 'At a competitor',
          who: 'Watch your competitors',
          nodes: ['Your company', 'AI agent', 'A competitor'],
          links: ['sends', 'signs up, waits, keeps'],
          lit: 1,
        },
        {
          name: 'At a prospect',
          who: 'Prospect with proof',
          nodes: ['Your company', 'AI agent', 'A prospect'],
          links: ['sends', 'signs up, waits, keeps'],
          lit: 1,
        },
        {
          name: 'At a partner or AI assistant',
          who: 'Codes, links and AI answers',
          nodes: ['Your company', 'AI agent', 'A partner'],
          links: ['sends', 'asks, checks, keeps'],
          lit: 1,
        },
        {
          name: 'For a developer’s agent',
          who: 'An inbox, a number and a browser',
          nodes: ['Your code', 'Your AI agent', 'Any company'],
          links: ['calls Obsession', 'signs up, waits, keeps'],
          lit: 1,
        },
      ],
      foot: 'Inside agents work on a company’s own customers and systems. An agent working as a customer comes back with the email, the price, the page or the answer, kept as it arrived.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'AI agent use cases for business fall into two kinds: AI agents that work inside a company, and AI agents that work at other companies as their customer. An AI agent is software that uses an AI model to carry out a task on its own, such as answering a customer, filling in a form or placing a call.',
    },
    {
      kind: 'p',
      text: 'Most lists of AI agent examples cover the first kind: the support chatbot, the sales assistant, the invoice reader and the coding agent. An agent working as a customer does work none of them can. It signs up the way any customer does, waits and keeps what the company sends and shows: the welcome email, the code refused at checkout, a competitor’s real price.',
    },
    {
      kind: 'p',
      text: 'Founders, marketing and sales leaders, customer experience (CX) leads, agency founders and developers all have jobs for one. Each job points the agent at one company: your own, a competitor, a prospect or a partner. Developers give the agents they build the same inbox, number and browser.',
    },

    { kind: 'h2', id: 'inside-agents', text: 'AI agents inside a company' },
    {
      kind: 'p',
      text: 'Inside agents work for the company that runs them, through the systems it connects them to. Customer service shows how far they have spread. [Salesforce’s survey](' +
        SALESFORCE +
        ') of 3,075 customer service professionals, published on 20 May 2026, found that 66% of service organisations use agentic AI. In 2025 the figure was 39%.',
    },
    {
      kind: 'stat',
      value: '66%',
      label: 'of customer service organisations used agentic AI in 2026, up from 39% in 2025',
      source: 'Salesforce, 20 May 2026',
      href: SALESFORCE,
    },
    {
      kind: 'list',
      items: [
        '**Customer service:** answers customers in chat, by email and on the phone, and hands harder cases to a person.',
        '**Sales:** qualifies new leads, books meetings and writes follow-ups.',
        '**Finance and operations:** reads invoices, matches payments and chases what is overdue.',
        '**Software:** writes, reviews and tests code.',
        '**Research:** searches the web and summarises what it finds.',
      ],
    },
    {
      kind: 'p',
      text: 'Each of these sees a company from the inside. None of them stays a customer of another company for months, notices the reminder that never arrived or keeps a competitor’s welcome email as it landed.',
    },

    { kind: 'h2', id: 'ai-customers', text: 'How an AI agent works as a customer' },
    {
      kind: 'p',
      text: 'On Obsession, the agent is a **persona: an AI agent with its own inbox, phone number and browser under one name**. It works for your company, which makes it the opposite of an AI customer service agent, as [support agents and agents as customers, compared](/blog/ai-customer-service-agent-vs-ai-customer) sets out. The idea is explained in full in [AI agents as customers](/blog/ai-customers).',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**An identity of its own.** An inbox, a phone number and a browser, made for one job and plainly belonging to the business that runs it.',
        '**It signs up.** Through the company’s public forms: the pop-up, the trial form, the demo request, the basket.',
        '**It sleeps.** A persona is free while it waits, so it can stay a customer for months.',
        '**It wakes and keeps.** When an email lands or a check comes due, it wakes in about 50 ms and keeps the email, price or page exactly as it arrived, with the time.',
        '**It reports.** Every email, text, call and page lands in one event log, in order and dated. The business reads the results at 4, 12, 24 or 48 hours, or keeps the persona waiting for as long as it wants.',
      ],
    },
    {
      kind: 'p',
      text: 'What makes each step work, and cheap enough to run at scale, is set out in [how AI agents work as customers](/blog/how-ai-customers-work).',
    },

    { kind: 'h2', id: 'own-company', text: 'Your own company: find your revenue leaks' },
    {
      kind: 'p',
      text: 'At your own company, an agent that signs up as a new customer finds the revenue leaks a dashboard can’t show. A revenue leak is a point where a customer ready to buy gets nothing, or the wrong thing. The welcome email a broken trigger never sent is one, and so are the code refused at checkout and the ad that sends clicks to a sold out page. Each job here runs on a blueprint, and together they make up the [kit for testing your own sign-up and AI agents](/kits/test-sign-up-and-agents).',
    },
    { kind: 'h3', id: 'own-site', text: 'Your website, emails and ads' },
    {
      kind: 'table',
      caption: 'Jobs for an AI agent on your own website, emails and ads, with what each one does and what comes back',
      cols: COLS,
      rows: [
        [
          'Sign-up and welcome email',
          'Signs up through your form, as a new customer does',
          'The time to the welcome email, and the offer in it',
          'Once, weekly or after every release',
          'Founder or CRM lead',
          'Runs on: [Mystery shopping](/blueprints/mystery-shopper)\nGuide: [welcome email not sending](/blog/welcome-basket-email-not-sending)',
        ],
        [
          'Abandoned basket or checkout',
          'Leaves a basket, or stops at checkout before payment',
          'Each reminder, when it came and the item it named',
          'Weekly, monthly or after every release',
          'CRM or retention lead',
          'Runs on: [Mystery shopping](/blueprints/mystery-shopper)\nGuide: [abandoned cart email not sending](/blog/ai-customers-find-revenue-leaks)',
        ],
        [
          'Codes at checkout',
          'Tries every welcome and launch code at checkout',
          'Each code accepted or refused, with the screenshot',
          'After every release, or every morning',
          'Ecommerce or marketing lead',
          'Runs on: [QA on your own flows](/blueprints/website-audit)\nGuide: [Black Friday checklist](/blog/black-friday-checklist-new-customer)',
        ],
        [
          'Sign-up after a release',
          'A fresh persona signs up and opens every email and link',
          'A pass or a break for every step, with a drafted fix',
          'After every release',
          'Founder or engineering lead',
          'Runs on: [QA on your own flows](/blueprints/website-audit)',
        ],
        [
          'Login codes by email',
          'Lives your first 14 days on a real inbox',
          'Every email and login code timed, and any that never came',
          'After every release, then daily for 14 days',
          'Product or engineering lead',
          'Runs on: [Delivery monitoring](/blueprints/delivery-monitoring)',
        ],
        [
          'Live ads and their pages',
          'Opens each ad’s page from its link, on a phone and a desktop',
          'Whether the page loads, matches the ad and is in stock',
          'Every morning',
          'Performance marketer',
          'Runs on: [Ad landing check](/blueprints/ad-landing-check)\nGuide: [landing page monitoring](/blog/ai-customers-for-cro-agencies)',
        ],
        [
          'Replies to your demo form',
          'Gets in touch as a buyer by form, chat and phone',
          'Your speed to lead on each channel, and every lead missed',
          'Daily, weekly or after a routing change',
          'Sales leader',
          'Runs on: [Lead response checks](/blueprints/lead-leaks)\nGuide: [speed to lead](/blog/ai-customers-for-b2b-sales-teams)',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For an online store and the agencies that serve it, every job is set out in [agentic AI use cases in ecommerce](/blog/agentic-ai-use-cases-in-ecommerce).',
    },
    { kind: 'h3', id: 'own-agents', text: 'The AI agents your company runs' },
    {
      kind: 'p',
      text: 'The same personas use the AI agents a company runs for its customers, the way those customers do. They check the support chatbot, the AI receptionist and the AI support vendor paid for each resolution. Each persona says it is an AI when it talks to a person.',
    },
    {
      kind: 'table',
      caption: 'Jobs for an AI agent on the AI agents your company runs, each checked the way a customer meets it',
      cols: COLS,
      rows: [
        [
          'Support chatbot answers',
          'Asks what customers ask, on chat, email and your portal',
          'Each wrong answer and slow handoff, with the transcript',
          'Every morning and after every update',
          'Head of CX',
          'Runs on: [Support bot check](/blueprints/support-bot-check)\nGuide: [how to test a chatbot](/blog/test-store-chatbot-returns-policy)',
        ],
        [
          'AI receptionist calls',
          'Rings your number, books a slot, asks a price and a person',
          'Each wrong answer by 09:00, with the recording',
          'Every morning',
          'Owner or operations lead',
          'Runs on: [Voice agent check](/blueprints/voice-agent-check)\nGuide: [AI agent testing tools](/blog/best-ai-chatbot-testing-tools)',
        ],
        [
          'Says it’s AI',
          'Asks “Am I talking to a person?” on chat, phone and email',
          'A dated proof per channel, with the wait for a person',
          'Every day and after every update',
          'Compliance or CX lead',
          'Runs on: [AI disclosure check](/blueprints/ai-disclosure-check)',
        ],
        [
          'Answers after an update',
          'Replays your hardest cases on your AI agent',
          'Every answer that changed, before and after',
          'Every morning, and within the hour of any update',
          'Owner of the AI agent',
          'Runs on: [Drift watch](/blueprints/drift-watch)\nGuide: [AI agent QA](/blog/ai-customers-for-cx-teams)',
        ],
        [
          'Resolutions your AI vendor bills',
          'Makes the same asks on your live channels',
          'Refunds promised and never made, with proof for the bill',
          'Monthly, before you pay',
          'CX or finance lead',
          'Runs on: [Resolution check](/blueprints/resolution-check)',
        ],
      ],
    },

    { kind: 'h2', id: 'competitors', text: 'Competitors and the market: watch your competitors' },
    {
      kind: 'p',
      text: 'A competitor’s website shows what it wants everyone to see. Its customers get more: the welcome code, the price after it, the reminder offer and the sale emailed to its list before the site shows it. A persona joins through the public sign-up any customer can use and keeps each one with the date it arrived. These jobs make up the [kit for watching the market](/kits/watch-the-market).',
    },
    {
      kind: 'table',
      caption: 'Jobs for an AI agent at your competitors and across your market, each from the public sign-up any customer can use',
      cols: COLS,
      rows: [
        [
          'Every email to a new customer',
          'Joins each competitor’s list from its public sign-up',
          'Every email, offer and code on 1 timeline',
          'Continuously, with a weekly digest',
          'CRM lead or agency strategist',
          'Runs on: [Email and SMS tracking](/blueprints/email-sms-tracking)\nGuide: [competitor email tracking tools](/blog/competitor-email-tracking-tools)',
        ],
        [
          'Prices and subscriber codes',
          'Checks prices, offers and delivery, and joins each list',
          'Every price cut and code, before and after',
          'Every morning, or hourly in a sale week',
          'Ecommerce or pricing lead',
          'Runs on: [Price watch](/blueprints/price-watch)\nGuide: [competitor price tracking tools](/blog/best-competitor-price-tracking-tools)',
        ],
        [
          'Member prices at retailers',
          'Joins each retailer and reads the member price',
          'Each member price and coupon, with its screenshot',
          'Weekly, and daily around Black Friday',
          'Price intelligence firm',
          'Runs on: [Price watch](/blueprints/price-watch)\nExample: [member prices for price intelligence](/use-cases/member-prices-for-price-intelligence)',
        ],
        [
          'Competitor ads and their offers',
          'Reads competitors’ public ads and opens each page',
          'Each new offer beside yours, the morning it starts',
          'Every morning',
          'Creative or paid social lead',
          'Runs on: [Ad tracking](/blueprints/ad-tracking)',
        ],
        [
          'A competitor’s free trial',
          'Starts the trial and signs in like a new user',
          'Every email, prompt and offer, day by day',
          'Daily, until the trial ends',
          'Product marketing lead',
          'Runs on: [Trial teardown](/blueprints/trial-teardown)',
        ],
        [
          'Your sign-up and basket beside theirs',
          'Runs the same sign-up and basket at each competitor',
          'A verdict on every journey, side by side',
          'Once, monthly or after every release',
          'Head of CX or insights',
          'Runs on: [Mystery shopping](/blueprints/mystery-shopper)\nGuide: [AI mystery shopping tools](/blog/best-ai-mystery-shopping-tools)',
        ],
        [
          'Every competitor move',
          'Logs every email, offer, price change and public ad',
          'A timeline per competitor, and what changed',
          'Daily, weekly or monthly',
          'Marketing lead or founder',
          'Runs on: [Competitor tracking](/blueprints/competitor-tracking)\nGuide: [ecommerce competitive intelligence](/blog/ecommerce-competitive-intelligence)',
        ],
      ],
    },

    { kind: 'h2', id: 'prospects', text: 'Prospects and sales: prospect with proof' },
    {
      kind: 'p',
      text: 'Agencies and sales teams can open a conversation with something the prospect can check for itself: what its own store, form or support line did to a new customer this week. This is an outside-in audit, a check of a company made from the outside, as its customer.',
    },
    {
      kind: 'p',
      text: 'CRO agencies, which work on conversion rate optimisation, run it on the pop-up behind a brand’s live ad. Outbound agencies run it across a client’s list in Clay, a tool for building prospect lists. The fuller case for each team is in [AI agents for marketing teams](/blog/ai-customers-for-commercial-teams). Prospect intelligence and account watch sit in the [kit for watching the market](/kits/watch-the-market).',
    },
    {
      kind: 'table',
      caption: 'Jobs for an AI agent with the prospects an agency or a sales team pitches, each ending in something the prospect can open',
      cols: COLS,
      rows: [
        [
          'Outside-in audit before a pitch',
          'Signs up, reads the pages and asks the chat bot',
          'A verdict and a proof link per company',
          '7, 14 or 30 days, then on a schedule',
          'Agency founder or sales rep',
          'Runs on: [Prospect intelligence](/blueprints/prospect-intelligence)\nGuide: [outside-in audit](/blog/get-clients-as-a-marketing-agency)',
        ],
        [
          'Brands hiring for email help',
          'Signs up, leaves a basket and starts a checkout',
          'What the brand’s emails got wrong, and when',
          'Read at 4 hours for a job post, the full read at 48',
          'Email freelancer or agency',
          'Runs on: [Prospect intelligence](/blueprints/prospect-intelligence)\nGuide: [Upwork Klaviyo jobs](/blog/klaviyo-experts-win-upwork-jobs-from-shopify-brands)',
        ],
        [
          'The pop-up before a CRO pitch',
          'Follows the live ad, signs up and takes the code to checkout',
          'A slide per brand: the ad, the pop-up, the email, the code',
          'Before the pitch, then every morning a test runs',
          'CRO agency founder',
          'Runs on: [Prospect intelligence](/blueprints/prospect-intelligence)\nExample: [funnel QA for CRO agencies](/use-cases/funnel-qa-for-cro-agencies)\nGuide: [ecommerce CRO audit](/blog/ecommerce-cro-audit-template)',
        ],
        [
          'A proof column in Clay',
          'Signs up at each brand in a Clay view and asks support',
          'Each gap and its proof link, in the same rows',
          '48 hours, then weekly',
          'Outbound agency',
          'Runs on: [Prospect intelligence](/blueprints/prospect-intelligence)\nExample: [prospect intelligence with Clay](/use-cases/prospect-intelligence-with-clay)\nGuide: [Shopify store leads](/blog/ai-customers-for-ecommerce-vendors)',
        ],
        [
          'Churn and upsell signs',
          'Stays a customer of each account and reads the tools you connect',
          'Who’s at risk, who’s ready to grow, and the play for each',
          'Every morning',
          'Account manager',
          'Runs on: [Account watch](/blueprints/account-watch)',
        ],
        [
          'Every client store, each week',
          'Signs up fresh at each client store',
          'Each break, with the email or screenshot',
          'Every week and after every launch',
          'Agency account lead',
          'Runs on: [Mystery shopping](/blueprints/mystery-shopper)\nExample: [retention agencies](/use-cases/leak-checks-for-retention-agencies)\nGuide: [agency client retention](/blog/ecommerce-agency-client-retention-with-ai-customers)',
        ],
      ],
    },

    { kind: 'h2', id: 'partners', text: 'Partners and AI assistants' },
    {
      kind: 'p',
      text: 'Customers also meet a company through other people’s pages and other companies’ AI: an affiliate’s banner, an AI assistant’s answer about the brand, a vendor’s AI agent. Sales teams add an AI SDR, an AI sales development rep that writes to prospects for them. A persona meets each of these the way a customer does, and every job here sits in the [kit for testing your own sign-up and AI agents](/kits/test-sign-up-and-agents).',
    },
    {
      kind: 'p',
      text: 'Shoppers now send AI agents of their own. [Meta introduced Muse](' +
        MUSE +
        ') on 8 September 2026 as a personal AI agent that can open a browser, fill out forms and pay at checkout, checking with the person before a purchase. A persona checks what such an agent meets on a company’s site, chat and phone line.',
    },
    {
      kind: 'table',
      caption: 'Jobs for an AI agent with partners, AI assistants and the AI agents that sell for a company',
      cols: COLS,
      rows: [
        [
          'What AI assistants say about you',
          'Asks AI assistants what your buyers ask',
          'Each wrong fact, traced to its page and corrected',
          'Every Monday, and after a price change',
          'Marketing or AI search lead',
          'Runs on: [Listings and AI answers](/blueprints/listings-ai-answers)\nGuide: [what does ChatGPT say about my brand](/blog/what-chatgpt-says-about-your-store)',
        ],
        [
          'Affiliate codes and links',
          'Follows each partner’s link and tries the code in your basket',
          'Every out-of-date code or banner, with a note drafted',
          'Every Monday, or daily in a sale',
          'Affiliate or partnerships manager',
          'Runs on: [Partner checks](/blueprints/partner-checks)',
        ],
        [
          'A vendor’s AI agent, before you sign',
          'Runs your hardest real cases on each shortlisted agent',
          'Every agent side by side, each answer kept',
          '2 weeks before signing, then monthly',
          'CX lead or procurement',
          'Runs on: [Vendor agent check](/blueprints/vendor-agent-check)',
        ],
        [
          'What your AI SDR sends',
          'Joins its lists as a prospect and replies as prospects do',
          'Every claim, discount and send time that breaks a rule',
          'Every message, as it lands',
          'Sales leader',
          'Runs on: [Outbound agent check](/blueprints/outbound-agent-check)',
        ],
        [
          'Prices your AI sales agent quotes',
          'Asks about prices, stock and delivery, then goes to checkout',
          'Each answer against your store, the right one drafted',
          'Every day and after every price change',
          'Ecommerce or sales lead',
          'Runs on: [Sales agent check](/blueprints/sales-agent-check)',
        ],
        [
          'Whether a shopper’s AI agent can buy',
          'Runs sign-up, forms, codes and checkout as a new customer',
          'A pass or a break for every step, with the screenshot',
          'On a schedule, and after every release',
          'Head of ecommerce or digital',
          'Runs on: [QA on your own flows](/blueprints/website-audit)\nGuide: [agent ready website](/blog/agent-ready-website)',
        ],
      ],
    },

    { kind: 'h2', id: 'developers', text: 'Agents and developers' },
    {
      kind: 'p',
      text: 'Developers give their own AI agents the same pieces through an API, an interface their code can call, or through MCP, the Model Context Protocol that AI assistants use to call tools. One call gives an agent an inbox, a US number and a browser under one identity: obsession.personas.create({ inbox: true, phone: "US", browser: true }). Each email, text, call and page then reaches the developer’s webhook as an event such as email.received. A webhook is the address their code listens on. These jobs make up the [kit for building agent products](/kits/build-agent-products).',
    },
    {
      kind: 'table',
      caption: 'Jobs for developers who give their own AI agents an inbox, a number, a browser and a sandbox',
      cols: COLS,
      rows: [
        [
          'An identity for your agent',
          'An inbox, phone number and browser under one name',
          'Every email, text and page, as an event at your webhook',
          'Pushed as each event lands',
          'Developer',
          'Runs on: [Personas](/personas), [Email](/email), [Phone](/phone), [Browser](/browser)\nGuide: [email API for AI agents](/blog/ai-customers-for-developers)',
        ],
        [
          'An agent that waits for weeks',
          'Sleeps between events and wakes on an email or a clock',
          'The basket reminder, price cut and win back, the day each is sent',
          'For months',
          'Developer',
          'Runs on: [Personas](/personas)\nGuide: [long running AI agents](/blog/long-running-ai-agents)',
        ],
        [
          'Code your agent runs',
          'Runs a script or a model’s code on its own computer',
          'The output and logs, as a sandbox.finished event',
          'On every task',
          'Developer or growth engineer',
          'Runs on: [Sandbox](/sandbox)\nGuide: [what to build with AI agents](/blog/what-to-build-with-ai-customers)',
        ],
      ],
    },

    { kind: 'h2', id: 'by-role', text: 'What AI agents can do for your business, by role' },
    {
      kind: 'p',
      text: 'Each role has one job to start with, and the blueprint or piece that runs it.',
    },
    {
      kind: 'table',
      caption: 'The first job, by role, with the blueprint or piece that runs it',
      cols: ['Role', 'First job', 'Runs on'],
      rows: [
        ['Ecommerce founder', 'Your welcome, basket and checkout, as a new customer', '[Mystery shopping](/blueprints/mystery-shopper)'],
        ['Head of ecommerce', 'Codes and offers at checkout before the next sale', '[QA on your own flows](/blueprints/website-audit)'],
        ['Retention agency', 'The stores you pitch or keep', '[Mystery shopping](/blueprints/mystery-shopper)'],
        ['CRO or performance agency', 'The pop-up and code behind each brand’s live ads', '[Ad landing check](/blueprints/ad-landing-check)'],
        ['Shopify Plus agency', 'A client store, after its next release', '[QA on your own flows](/blueprints/website-audit)'],
        ['Software company marketing lead', 'A competitor’s free trial, from first email to last', '[Trial teardown](/blueprints/trial-teardown)'],
        ['B2B sales leader', 'Your speed to lead on form, chat and phone', '[Lead response checks](/blueprints/lead-leaks)'],
        ['CX lead', 'Your support chatbot, asked what customers ask', '[Support bot check](/blueprints/support-bot-check)'],
        ['Local business with an AI receptionist', 'The calls new customers make each morning', '[Voice agent check](/blueprints/voice-agent-check)'],
        ['Developer', 'An inbox, a number and a browser for your own agent', '[Personas](/personas)'],
      ],
    },

    { kind: 'h2', id: 'can-and-cant', text: 'What AI agents can and can’t do as customers' },
    {
      kind: 'p',
      text: 'An agent working as a customer does what any customer can. It signs up, browses, builds a basket, chats and calls a phone line. It stays for months and keeps every email, page and price as it arrived, and where it stops, the event log says so.',
    },
    {
      kind: 'list',
      items: [
        '**Bot checks.** A CAPTCHA is a puzzle that blocks automated visitors. An agent on Obsession stops at a CAPTCHA or a bot block, and the event log names the step it couldn’t test.',
        '**Payment.** It stops before payment unless the business gives it its own card, for a job it approved, like a test order on its own store. It never uses fake payment details.',
        '**Identity checks.** It stops at any identity check, and the event log keeps what the check asked for.',
        '**Ads.** It opens an ad’s page from its link and never clicks paid ads at volume.',
        '**People.** When it talks to a person, by chat, email or phone, it says it is an AI.',
        '**Why something happened.** It sees what any customer sees, at any company. Why a company sent something sits in that company’s own tools.',
      ],
    },

    { kind: 'h2', id: 'scale', text: 'What these agents cost, and how far they scale' },
    {
      kind: 'p',
      text: 'A persona is free while it waits, because it sleeps until the company acts and wakes when an email lands or a check comes due. You pay for the pieces it uses: an inbox at $0.50 a month, a US or UK number at $2 a month, a browser at $0.10 an hour. The cost is worked out line by line in [AI agent cost per month](/blog/ai-customers-at-scale).',
    },
    {
      kind: 'p',
      text: 'The same design runs at any size, from 1 persona to a fleet of 10,000 waiting for days, every event kept. For an agency, that means 300, 1,000 or 5,000 brands a month.',
    },
    {
      kind: 'p',
      text: 'The [sample data](/sample-output) shows a real run at a UK skincare store in September 2026: 4 sign-ups and baskets, and a £40 basket left at 02:57 that never got a reminder.',
    },
    { kind: 'p', text: 'The Free plan needs no credit card. Paid plans are $20, $99 or $499 a month, with usage billed per piece up to any spend cap you set.' },

    { kind: 'h2', id: 'compared', text: 'Ways to see what a company sends its customers, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 31 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways a business can see what a company sends and shows its customers, from each provider’s own pages on 31 October 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing: the dashboards', 'Shows what your own systems sent', 'Included in the tools you already pay for', 'What customers received, and competitors', 'A business whose journeys rarely change'],
        [
          'By hand: a team, new inboxes and a sheet',
          'Judgement from someone who knows the business',
          'Staff hours',
          'Hours grow with every company and every wait',
          'A handful of checks a month',
        ],
        [
          'Human mystery shopping: [T-ROC](' + TROC + ')',
          'Trained people visit, call and chat as customers',
          '$40 to $150 a store visit',
          '4 to 6 visits per store a quarter suggested',
          'Shop floors and staff on the phone',
        ],
        [
          'AI shoppers: [Shopify SimGym](' + SIMGYM + ')',
          'AI shoppers browse a Shopify theme and add to cart',
          'A monthly allowance, then $0.75 a run',
          'Its help page describes no sign-ups or emails',
          'A theme change before it goes live',
        ],
        [
          'Page monitors: [Visualping](' + VISUALPING + ')',
          'Alerts when a page changes, behind a login too',
          'Free for 5 pages\n$14 to $350 a month',
          'Its pages describe no sign-up emails',
          'A handful of pages to watch',
        ],
        [
          'Email archives: [MailCharts](' + MAILCHARTS + '), [Owletter](' + OWLETTER + ')',
          'Libraries of brands’ emails for research',
          'MailCharts: on request\nOwletter: $29 to $99 a month',
          'Other brands’ emails, with no test of your own',
          'Email research and ideas',
        ],
        [
          'Obsession (ours): [Mystery shopping](/blueprints/mystery-shopper), [Competitor tracking](/blueprints/competitor-tracking), [Prospect intelligence](/blueprints/prospect-intelligence), [Lead response checks](/blueprints/lead-leaks), [Support bot check](/blueprints/support-bot-check), [Listings and AI answers](/blueprints/listings-ai-answers), [Personas](/personas)',
          'An inbox, a number and a browser for each agent, waiting for months, every email and page dated',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment and at any identity check; the fix stays with the company’s own team',
          'Any company, yours included, seen as a customer for months',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If your company needs to see what any company sends its customers, its own or a competitor’s, over weeks or months, use Obsession. Pick the blueprint for the job, or give your own agent an inbox, a number and a browser, and every email and page lands in the event log as it arrived. A page monitor suits a handful of public pages, and an email archive suits research into other brands’ campaigns. A mystery shopping firm suits a shop floor or a phone line answered by people.',
    },

    { kind: 'h2', id: 'start', text: 'Start with one job this week' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Pick the group closest to this quarter’s goal: revenue leaks at your own company, a competitor’s offers or the prospects you pitch next.',
        'Choose one job from its table and write the pass mark first, such as a welcome email within 5 minutes with the promised code.',
        'Name the companies, your own or the ones to watch. Then choose when to read the results: at 4, 12, 24 or 48 hours, or after as long as you want to keep watching.',
        'Act on the first report, then run the same job again after every change.',
      ],
    },
    {
      kind: 'p',
      text: 'The case for every company is in [why AI agents as customers matter](/blog/why-ai-customers-matter).',
    },
    {
      kind: 'cta',
      text: 'Not building agents? Pick a blueprint, and Obsession runs the job: your welcome emails, a competitor’s prices or your support bot’s answers, each kept in your event log with its date.',
      to: '/blueprints',
      label: 'Browse blueprints',
    },
    {
      kind: 'cta',
      text: 'An inbox, a phone number and a browser for every agent you build, through one API and one bill. The Free plan includes 3 inboxes, 1 number and 10 browser hours, with no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI agent use cases' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How is an agent working as a customer different from an AI customer service agent?',
          a: 'An AI customer service agent works for a company and answers its customers. An agent working as a customer works for your company and signs up to any company your company names, its own included, so it sees what each one sends and shows.',
          link: { label: 'Support agents and agents as customers, compared', to: '/blog/ai-customer-service-agent-vs-ai-customer' },
        },
        {
          q: 'How is it different from AI shoppers like Shopify’s SimGym?',
          a: 'SimGym sends AI shoppers through a Shopify store’s theme before a change is published, and they browse, add to cart and describe what they found. An agent on Obsession signs up, waits and keeps what arrives after the click, at any company, competitors included.',
          link: { label: 'Shopify SimGym review', to: '/blog/shopify-simgym-review-ai-shoppers-vs-ai-customers' },
        },
        {
          q: 'Do these agents place orders?',
          a: 'Only with the business’s own card, for a job it approved, like a test order on its own store. Otherwise every checkout stops before payment, and an agent on Obsession never uses fake payment details.',
        },
        {
          q: 'Do these agents say they are AI?',
          a: 'Yes. When an agent on Obsession talks to a person, by chat, email or phone, it says it is an AI agent and links to a page that explains what it is.',
        },
        {
          q: 'Which industries can use these agents?',
          a: 'Any business whose customers sign up, buy, book or ask online. That includes ecommerce brands and their agencies, software companies and B2B sellers, plus service businesses with an AI receptionist and firms that track retailers’ prices. The job changes from one industry to the next, and the pieces stay the same.',
        },
        {
          q: 'What can AI agents do for small businesses?',
          a: 'Start with one job at your own company. Sign up to your own site as a new customer, then check the welcome email, the code at checkout and the reminder after a basket. Obsession’s mystery shopping blueprint runs those sign-ups and baskets and keeps every email and screenshot, dated. Its support bot and voice agent checks keep what a chatbot or AI phone line tells customers, word for word.',
        },
        {
          q: 'What are some AI agent examples in real life?',
          a: 'Examples at work today include a support chatbot answering a refund question, an assistant matching invoices to payments, a coding agent fixing a bug and Meta’s Muse filling out a form. An agent that joins a competitor’s list and keeps every email it sends, for months, is another.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the jobs and the tools',
      text: 'Every job in the tables is described in the words of the page that runs it, linked in its row. Every other tool is described from its own pages as of 31 October 2026, with prices in US dollars as listed that day.',
    },
  ],

  sources: [
    { title: 'New Research: AI Service Agents Are Scaling and Delivering CSAT', publisher: 'Salesforce', url: SALESFORCE, date: '2026-05-20' },
    { title: 'Introducing Muse: the world’s first personal AI agent built for everyone', publisher: 'Meta', url: MUSE, date: '2026-09-08' },
    { title: 'Mystery shopping services', publisher: 'T-ROC', url: TROC, date: '2026-05-04' },
    { title: 'SimGym', publisher: 'Shopify Help Center', url: SIMGYM },
    { title: 'Pricing', publisher: 'Visualping', url: VISUALPING },
    { title: 'Email campaign planning for teams by MailCharts', publisher: 'MailCharts', url: MAILCHARTS },
    { title: 'Pricing', publisher: 'Owletter', url: OWLETTER },
  ],

  related: [
    '/blueprints',
    'agentic-ai-use-cases-in-ecommerce',
    'why-ai-customers-matter',
    '/use-cases/leak-checks-for-ecommerce-stores',
    '/use-cases/leak-checks-for-retention-agencies',
    '/use-cases/funnel-qa-for-cro-agencies',
    '/use-cases/prospect-intelligence-with-clay',
    '/use-cases/member-prices-for-price-intelligence',
    '/use-cases/trial-checks-for-software-companies',
    '/use-cases/journey-checks-for-banks-and-fintechs',
    'recipe:mystery-shopper',
    'recipe:website-audit',
    'recipe:delivery-monitoring',
    'recipe:ad-landing-check',
    'recipe:lead-leaks',
    'recipe:support-bot-check',
    'recipe:voice-agent-check',
    'recipe:ai-disclosure-check',
    'recipe:drift-watch',
    'recipe:resolution-check',
    'recipe:email-sms-tracking',
    'recipe:price-watch',
    'recipe:ad-tracking',
    'recipe:trial-teardown',
    'recipe:competitor-tracking',
    'recipe:prospect-intelligence',
    'recipe:account-watch',
    'recipe:listings-ai-answers',
    'recipe:partner-checks',
    'recipe:vendor-agent-check',
    'recipe:outbound-agent-check',
    'recipe:sales-agent-check',
  ],
}
