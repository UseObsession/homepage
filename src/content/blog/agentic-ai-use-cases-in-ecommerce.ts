import type { BlogPost } from './types'

/* Draft, 31 Oct 2026, written to _research/seo/plan/use-cases-1nov/PLAN_ecommerce.md (Seun's go, 31 Oct). It owns
   "agentic ai use cases in ecommerce" and its neighbours (Google autocomplete, US and UK, 31 Oct:
   autocomplete_31oct_c.json beside the plan). The general phrases stay with ai-agent-use-cases-for-business, which this
   guide links in one line, and AI agents for ecommerce stays with ai-customers-for-ecommerce-brands. Readers: founders,
   heads of ecommerce, CRM, retention and growth leads at Shopify brands, and the retention, conversion rate (CRO) and
   Shopify Plus agencies and fixers that serve them. LinkedIn launches this guide, so the hero picture is its launch image.
   The shape: the answer names the three kinds of AI agent around a store and ends on a plain "use Obsession" by its full
   view; each kind in brief, with the dated shift to shoppers' agents (Muse, Shop's personal agents, agentic storefronts,
   Google's Universal Commerce Protocol (UCP), Adobe's holiday forecast); the definition word for word; 27 jobs, for brands (own store, competitors, AI
   assistants and shoppers' agents) and for agencies (win, keep, launches and fixes), each row in the words of the live
   page that runs it and linked to it, with the live guide that teaches it where one exists; the first job by role, with
   each free offer in the site's own words; the hand-overs; scale, with the pilot as patterns; the options compared, with
   the last row ours; the FAQ. Texts are left out of every claim.
   Read at source on 31 Oct 2026: Meta's Muse launch post (8 Sep 2026), Shop's personal agents help page, Shopify's
   agentic storefronts help page, Google's UCP help page, Adobe's holiday forecast (28 Sep 2026), Klaviyo's 2026
   benchmarks, CustomerOptix's and T-ROC's mystery shopping pages (T-ROC dated 4 May 2026), Shopify's SimGym help page,
   and the Visualping, Panoramata and Owletter pricing pages. fernwick.example is invented. No dashes.
   22 Nov 2026: Obsession lines moved to the toolkit position (personas, blueprints, prices.ts). */

const MUSE = 'https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/'
const SHOP_AGENTS = 'https://help.shop.app/en/shop/shopping/personal-agents'
const STOREFRONTS = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts'
const UCP = 'https://support.google.com/merchants/answer/16837055?hl=en'
const ADOBE = 'https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record'
const KLAVIYO = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const CUSTOMEROPTIX = 'https://www.customeroptix.com/services/mystery-shopping'
const TROC = 'https://trocglobal.com/mystery-shopping-services/'
const SIMGYM = 'https://help.shopify.com/en/manual/online-store/simgym'
const VISUALPING = 'https://visualping.io/pricing'
const PANORAMATA = 'https://www.panoramata.co/pricing'
const OWLETTER = 'https://www.owletter.com/pricing'

const BRAND_COLS = ['Job', 'What it does', 'What comes back', 'How often', 'Who owns it', 'Pages']
const AGENCY_COLS = ['Job', 'What it does', 'What the agency gets', 'How often', 'Who runs it', 'Pages']

export const post: BlogPost = {
  slug: 'agentic-ai-use-cases-in-ecommerce',
  title: 'Agentic AI use cases in ecommerce: 27 jobs for brands and agencies, done as a customer',
  dek: 'Three kinds of AI agent now deal with every online store: the store’s own agents, shoppers’ agents, and agents that shop as a customer for a brand or its agency. Those customer-side agents take on 27 jobs, from timing the abandoned checkout flow to reading a competitor’s price after its welcome code.',
  metaTitle: 'Agentic AI use cases in ecommerce for brands and agencies',
  description:
    'Agentic AI use cases in ecommerce: 27 jobs an agent does as a customer for Shopify brands and agencies, from abandoned checkouts to competitors’ prices.',
  answer:
    'Agentic AI use cases in ecommerce come from three kinds of AI agent: the store’s own agents, shoppers’ agents, and agents that work for a brand or agency as a customer of any store. Only the third stays a new customer of a store for months and keeps what it sends, from the welcome code at checkout to a competitor’s real price, with each email and page kept as it arrived. Obsession gives each of those agents its own inbox, phone number and browser under one identity, so brands catch a broken flow the day it breaks and agencies open pitches with the store’s own emails.',
  primaryKeyword: 'agentic ai use cases in ecommerce',
  keywords: [
    'ai use cases in ecommerce',
    'ai in ecommerce examples',
    'how to use ai in ecommerce',
    'intelligent agents in ecommerce',
    'agentic ai in ecommerce',
  ],
  category: 'Work behind logins',
  published: '2026-10-31',
  updated: '2026-11-22',
  readingMinutes: 10,
  order: 1,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'fernwick.example · 3 kinds of AI agent',
      rows: [
        {
          name: 'Agents for the store',
          who: 'Support chat, product pages, ads',
          nodes: ['Fernwick', 'Its AI agents', 'Shoppers'],
          links: ['runs', 'answer, write, sell'],
        },
        {
          name: 'A shopper’s agent',
          who: 'Muse, ChatGPT, agents linked to Shop',
          nodes: ['A shopper', 'Their AI agent', 'Fernwick'],
          links: ['asks', 'finds, prepares a checkout'],
        },
        {
          name: 'A customer-side agent',
          who: 'Works for a brand or its agency',
          nodes: ['Brand or agency', 'Its persona', 'Any store'],
          links: ['hires', 'signs up, waits, keeps'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'Only the customer-side agent comes back with what the store sent a new customer: the email, the price and the page, each kept as it arrived. Fernwick is an invented store.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Agentic AI use cases in ecommerce come from three kinds of AI agent: the store’s own agents, shoppers’ agents, and customer-side agents that work for a brand or agency at any store. Agentic AI is AI that carries out a task on its own, such as answering a shopper, filling a basket or placing an order.',
    },
    {
      kind: 'p',
      text: 'The store’s agents and the shoppers’ agents get most of the coverage. Customer-side agents do a job neither can. They sign up to a store as a new customer, wait and keep what it sends and shows. That covers the welcome email and the pop-up code at checkout, the reminder after an abandoned checkout and a competitor’s price after its welcome code.',
    },
    {
      kind: 'p',
      text: 'Founders, heads of ecommerce and CRM, retention and growth leads all have jobs for one. So do the retention, CRO (conversion rate optimisation) and Shopify Plus agencies that serve them. For every other industry, see [AI agent use cases for business](/blog/ai-agent-use-cases-for-business).',
    },

    { kind: 'h2', id: 'three-kinds', text: 'Three kinds of AI agent around a store' },
    { kind: 'h3', id: 'for-the-store', text: 'Agents that work for the store' },
    {
      kind: 'p',
      text: 'The store’s own agents work from inside its systems. A support chat answers questions about orders, delivery and returns, an assistant writes product descriptions, and ad tools set bids and audiences. Each sees what the store’s own platforms record about its shoppers.',
    },
    { kind: 'h3', id: 'for-the-shopper', text: 'Agents that shop for the customer' },
    {
      kind: 'p',
      text: 'A shopper’s own AI agent finds products and prepares a checkout for one person. [Meta introduced Muse](' +
        MUSE +
        ') on 8 September 2026. It is a personal AI agent that can open a browser, fill out forms and pay at checkout with Link, built by Stripe. It checks with the person before a purchase. [Shop’s help page on personal agents](' +
        SHOP_AGENTS +
        ') says they can search, prepare a checkout for the shopper to review and complete it once the shopper approves.',
    },
    {
      kind: 'p',
      text: 'Shopify’s [agentic storefronts](' +
        STOREFRONTS +
        ') list a store’s products in AI channels such as ChatGPT, Google AI Mode and Gemini, Microsoft Copilot and Meta, and are active by default for eligible stores. Google’s [Universal Commerce Protocol (UCP)](' +
        UCP +
        ') is an open standard for agentic commerce, and its checkout is open to select merchants. Agents find products and build baskets on Shopify, Google and ChatGPT, and check out for some eligible products.',
    },
    {
      kind: 'p',
      text: '[Adobe forecasts](' +
        ADOBE +
        ') that traffic from AI services to US retail sites, counted as shoppers clicking a link, will rise 130% year on year over the 2026 holiday season. On Black Friday it expects a rise of 95%. The [agent ready website](/blog/agent-ready-website) checks show what a shopper’s agent meets on a store, and [agentic commerce](/blog/agentic-commerce-for-merchants) covers what is live.',
    },
    { kind: 'h3', id: 'customer-side', text: 'Agents that shop as a customer for a brand' },
    {
      kind: 'p',
      text: 'A customer-side agent works for a brand or its agency, at any store either one names, the brand’s own included. On Obsession it is a persona: an AI agent with its own inbox, phone number and browser under one name. [AI agents as customers](/blog/ai-customers) covers what such an agent sees, and a [comparison with the store’s own support agent](/blog/ai-customer-service-agent-vs-ai-customer) sets the two side by side.',
    },

    { kind: 'h2', id: 'how-it-works', text: 'How a customer-side agent does the job' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Its own identity.** A persona with an inbox, a mobile number and a browser, used for one store only.',
        '**It signs up.** Through the pop-up, the footer form or the checkout, the way any shopper does.',
        '**It waits.** A persona is free while it waits, so it can stay on a store’s list for months.',
        '**It wakes and keeps.** When the welcome email, a reminder or a price change arrives, it keeps it exactly as it arrived, with the time.',
        '**It reports.** Every email, page and price lands in one event log, dated. The brand or agency reads the result at 4, 12, 24 or 48 hours, in Slack, a sheet or its CRM.',
      ],
    },
    {
      kind: 'p',
      text: 'Each step, from the form to every email that follows, is set out in [how an AI agent signs up as a customer](/blog/how-ai-customers-work).',
    },

    { kind: 'h2', id: 'brands', text: 'Use cases for ecommerce brands' },
    {
      kind: 'p',
      text: 'A brand points customer-side agents at three places: its own store, its competitors’ stores, and the AI assistants and shoppers’ agents that now stand between the two. The full case for a brand is in [AI agents for ecommerce](/blog/ai-customers-for-ecommerce-brands).',
    },
    { kind: 'h3', id: 'own-store', text: 'Your own store: find your revenue leaks' },
    {
      kind: 'p',
      text: 'Flows carry far more revenue than their share of sends. [Klaviyo’s 2026 benchmarks](' +
        KLAVIYO +
        '), drawn from more than 183,000 Klaviyo customers, show flows earning nearly 41% of email revenue from 5.3% of sends. A flow that stops firing, a refused code or a bundle price the cart drops costs conversion and AOV on the days that bring the most traffic.',
    },
    {
      kind: 'stat',
      value: '5.3%',
      label: 'of email sends are flows, and they earn nearly 41% of email revenue',
      source: 'Klaviyo 2026 benchmarks',
      href: KLAVIYO,
    },
    {
      kind: 'table',
      caption: 'Jobs for customer-side agents on a brand’s own store, with what each one does and what comes back',
      cols: BRAND_COLS,
      rows: [
        [
          'Welcome email and pop-up code',
          'Signs up through the pop-up and takes the code to checkout',
          'Minutes to the welcome email, and the code accepted or refused',
          'Every week and after every change',
          'CRM or retention lead',
          'Runs on: [Leak checks for ecommerce stores](/use-cases/leak-checks-for-ecommerce-stores)\nGuide: [Klaviyo flow not sending](/blog/welcome-basket-email-not-sending)',
        ],
        [
          'Abandoned checkout flow',
          'Leaves at checkout with its email typed in, before payment',
          'Each reminder, its timing and the item it named',
          'Weekly, monthly or after every release',
          'CRM or retention lead',
          'Runs on: [Mystery shopping](/blueprints/mystery-shopper)\nGuide: [abandoned cart email not sending](/blog/ai-customers-find-revenue-leaks)',
        ],
        [
          'Sale and launch codes',
          'Tries each code at checkout and stops before payment',
          'Every code that fails at checkout, with the screenshot',
          'After every release, or every morning',
          'Ecommerce lead',
          'Runs on: [QA on your own flows](/blueprints/website-audit)\nGuide: [Black Friday checklist](/blog/black-friday-checklist-new-customer)',
        ],
        [
          'A theme publish or flow edit',
          'A new persona signs up and fills a basket within the hour',
          'Each break, within the hour of the change',
          'After every theme, app, flow or ad change',
          'Founder or ecommerce lead',
          'Runs on: [Leak checks for ecommerce stores](/use-cases/leak-checks-for-ecommerce-stores)\nGuide: [how do I test my Shopify store](/blog/how-to-test-your-shopify-store-as-a-customer)',
        ],
        [
          'A new theme before launch',
          'Signs up and shops on the theme’s preview link first',
          'Each break, before shoppers meet the theme',
          'Before each launch',
          'Ecommerce lead or developer',
          'Runs on: [Leak checks for ecommerce stores](/use-cases/leak-checks-for-ecommerce-stores)\nGuide: [Shopify SimGym](/blog/shopify-simgym-review-ai-shoppers-vs-ai-customers)',
        ],
        [
          'Live ads and their landing pages',
          'Opens each ad’s page from its link, so no click is paid for',
          'Every ad sending clicks to a broken or sold out page',
          'Every morning',
          'Growth or performance lead',
          'Runs on: [Ad landing check](/blueprints/ad-landing-check)\nGuide: [ads sending traffic to sold out products](/blog/where-your-ads-land-morning-check)',
        ],
        [
          'Chat answers on refunds and delivery',
          'Asks what shoppers ask and checks it against the policy page',
          'Each wrong answer, with the right one drafted',
          'Every morning and after every update',
          'Customer experience lead',
          'Runs on: [Support bot check](/blueprints/support-bot-check)\nGuide: [how to test a chatbot](/blog/test-store-chatbot-returns-policy)',
        ],
        [
          'Prices from the AI sales agent',
          'Asks about bundles, stock and delivery, then goes to checkout',
          'Each answer against the price list and stock feed',
          'Every day and after every price change',
          'Ecommerce lead',
          'Runs on: [Sales agent check](/blueprints/sales-agent-check)',
        ],
        [
          'Order, dispatch and refund emails',
          'Places a real order with the brand’s own card',
          'Confirmation, dispatch, delivery and refund, each timed',
          'Once, monthly or after every release',
          'Operations lead',
          'Runs on: [Mystery shopping](/blueprints/mystery-shopper)',
        ],
      ],
    },
    { kind: 'h3', id: 'competitors', text: 'Your competitors: watch your competitors' },
    {
      kind: 'p',
      text: 'A competitor’s site shows its public price. A new customer on its list sees more: the welcome code, the price after it, the reminder offer and the sale emailed to subscribers before the site shows it. A customer-side agent joins through the same public pop-up and keeps each email with its date.',
    },
    {
      kind: 'table',
      caption: 'Jobs for customer-side agents at a brand’s competitors, each from the public sign-up any shopper can use',
      cols: BRAND_COLS,
      rows: [
        [
          'Every email to a new subscriber',
          'Joins each competitor’s list from its pop-up',
          'Every email and code, with the welcome series mapped',
          'Continuously, with a Monday digest',
          'CRM lead',
          'Runs on: [Email and SMS tracking](/blueprints/email-sms-tracking)\nGuide: [competitor email tracking tools](/blog/competitor-email-tracking-tools)',
        ],
        [
          'The price after the welcome code',
          'Checks prices and joins the list for its codes',
          'The price a new customer pays once the code applies',
          'Every morning',
          'Ecommerce or pricing lead',
          'Runs on: [Price watch](/blueprints/price-watch)\nGuide: [competitor price monitoring Shopify](/blog/competitor-price-after-welcome-code)',
        ],
        [
          'Competitor ads, past the click',
          'Opens each public ad’s page, price and code',
          'A competitor’s new offer and its landing page, side by side',
          'Every morning',
          'Paid social lead',
          'Runs on: [Ad tracking](/blueprints/ad-tracking)\nGuide: [ecommerce competitive intelligence](/blog/ecommerce-competitive-intelligence)',
        ],
        [
          'Competitors’ Black Friday emails',
          'Stays on each competitor’s list through the sale',
          'Each sale email as it lands, beside yours',
          'Continuously, until the brand stops it',
          'CRM lead or agency',
          'Runs on: [Competitor tracking](/blueprints/competitor-tracking)\nGuide: [Black Friday email report](/blog/black-friday-competitor-email-report-template)',
        ],
        [
          'Their checkout beside yours',
          'Signs up and fills a basket at each competitor',
          'A verdict on each journey, side by side',
          'Once, monthly or after every release',
          'Head of ecommerce',
          'Runs on: [Mystery shopping](/blueprints/mystery-shopper)\nGuide: [AI mystery shopping tools](/blog/best-ai-mystery-shopping-tools)',
        ],
      ],
    },
    { kind: 'h3', id: 'ai-assistants', text: 'AI assistants and shoppers’ agents' },
    {
      kind: 'p',
      text: 'Shoppers ask ChatGPT and other assistants which store to buy from, and some send an agent to prepare the checkout. A customer-side agent asks the same questions and takes the same checkout up to payment, so the brand sees what both meet.',
    },
    {
      kind: 'table',
      caption: 'Jobs for customer-side agents with the AI assistants, shoppers’ agents and partners that send shoppers to a store',
      cols: BRAND_COLS,
      rows: [
        [
          'What ChatGPT says about your store',
          'Asks AI assistants what shoppers ask about the brand',
          'Each wrong price or fact, traced to the page it read',
          'Every Monday and after a price change',
          'Head of ecommerce',
          'Runs on: [Listings and AI answers](/blueprints/listings-ai-answers)\nGuide: [what does ChatGPT say about my brand](/blog/what-chatgpt-says-about-your-store)',
        ],
        [
          'Whether a shopper’s agent can buy',
          'Takes checkout up to payment as a new customer after each release',
          'Every step passed or broken, with the screenshot',
          'After every release',
          'Head of ecommerce or digital',
          'Runs on: [QA on your own flows](/blueprints/website-audit)\nGuide: [agent ready website](/blog/agent-ready-website)',
        ],
        [
          'Affiliate and creator codes',
          'Follows each partner’s link and tries the code in a basket',
          'Out-of-date codes and banners, with a note drafted',
          'Every Monday, daily in a sale',
          'Affiliate manager',
          'Runs on: [Partner checks](/blueprints/partner-checks)',
        ],
      ],
    },

    { kind: 'h2', id: 'agencies', text: 'Use cases for ecommerce agencies' },
    {
      kind: 'p',
      text: 'Retention, CRO and Shopify Plus agencies point the same customer-side agents at the stores they pitch, the stores they keep and the stores they launch. Each job ends in something a client or prospect can open: the email, the screenshot and the time.',
    },
    {
      kind: 'p',
      text: 'The case for each agency type is in its own guide: [retention marketing agency](/blog/ai-customers-for-retention-agencies), [CRO tools for Shopify](/blog/ai-customers-for-cro-agencies) and [Shopify QA testing](/blog/ai-customers-for-shopify-plus-agencies).',
    },
    { kind: 'h3', id: 'win', text: 'Win clients: prospect with proof' },
    {
      kind: 'p',
      text: 'An outside-in audit is a check of a prospect’s store made from the outside, as its new customer, before the first call. Outbound agencies run the same check across a client’s list in Clay, a tool for building prospect lists.',
    },
    {
      kind: 'table',
      caption: 'Jobs for customer-side agents that help an agency win a brand, each ending in something the prospect can open',
      cols: AGENCY_COLS,
      rows: [
        [
          'A prospect’s store before the pitch',
          'Signs up to the prospect’s store and leaves a basket',
          'The prospect’s leaks, with the emails and screenshots',
          'Watched for 48 hours before the call',
          'Retention agency founder',
          'Runs on: [Leak checks for retention agencies](/use-cases/leak-checks-for-retention-agencies)\nGuide: [outside-in audit](/blog/get-clients-as-a-marketing-agency)',
        ],
        [
          'Brands hiring for Klaviyo help',
          'Joins the brand’s list, fills a basket and starts a checkout',
          'What its flows got wrong, for the proposal’s first line',
          'Read at 4 hours for an Upwork job',
          'Klaviyo freelancer or email agency',
          'Runs on: [Prospect intelligence](/blueprints/prospect-intelligence)\nGuide: [Upwork Klaviyo jobs](/blog/klaviyo-experts-win-upwork-jobs-from-shopify-brands)',
        ],
        [
          'The pop-up behind a live ad',
          'Follows the ad, signs up and takes the code to checkout',
          'A slide for the pitch, each screenshot dated',
          'Before the pitch, then each morning a test runs',
          'CRO agency founder',
          'Runs on: [Funnel QA for CRO agencies](/use-cases/funnel-qa-for-cro-agencies)\nGuide: [ecommerce CRO audit](/blog/ecommerce-cro-audit-template)',
        ],
        [
          'A proof column on a client’s list',
          'Signs up at every brand in a Clay view',
          'The gap and its proof link in each brand’s row',
          '48 hours, then every week',
          'Outbound agency',
          'Runs on: [Prospect intelligence with Clay](/use-cases/prospect-intelligence-with-clay)\nGuide: [how to find ecommerce clients](/blog/how-to-find-ecommerce-clients)',
        ],
      ],
    },
    { kind: 'h3', id: 'keep', text: 'Keep clients' },
    {
      kind: 'p',
      text: 'A weekly check of every client store puts each finding in the account lead’s hands before the client meets it, with the email or screenshot behind it.',
    },
    {
      kind: 'table',
      caption: 'Jobs for customer-side agents that help an agency keep a brand, each finding in the client’s hands first',
      cols: AGENCY_COLS,
      rows: [
        [
          'Every client’s flows, weekly',
          'A fresh sign-up at every client store',
          'What arrived, when, and what never came',
          'Every week and after every launch',
          'Retention agency account lead',
          'Runs on: [Leak checks for retention agencies](/use-cases/leak-checks-for-retention-agencies)\nGuide: [retention agency client reporting](/blog/show-clients-every-flow-fired)',
        ],
        [
          'Every client’s live ads',
          'Opens the page behind each ad every morning',
          'Each break caught, with proof for the client',
          'Every morning',
          'Paid ads or CRO agency',
          'Runs on: [Ad landing check](/blueprints/ad-landing-check)\nGuide: [landing page monitoring](/blog/ai-customers-for-cro-agencies)',
        ],
        [
          'A renewal check',
          'Takes the store’s full journey again and shops 2 competitors',
          'What changed since the last review',
          'A week before each review',
          'Agency account lead',
          'Runs on: [Mystery shopping](/blueprints/mystery-shopper), [Competitor tracking](/blueprints/competitor-tracking)\nGuide: [agency client retention](/blog/ecommerce-agency-client-retention-with-ai-customers)',
        ],
      ],
    },
    { kind: 'h3', id: 'launches', text: 'Launches and fixes' },
    {
      kind: 'p',
      text: 'A launch or a fix is proved the same way. A new customer signs up, fills a basket and goes through checkout on the live store, and the result is kept before and after.',
    },
    {
      kind: 'table',
      caption: 'Jobs for customer-side agents when a store launches, moves to Shopify Plus or a new email tool, or gets fixed',
      cols: AGENCY_COLS,
      rows: [
        [
          'A Shopify Plus launch',
          'Runs sign-up, forms, emails and checkout after each deploy',
          'A pass, or the break with its screenshot',
          'After every deploy',
          'Shopify Plus agency',
          'Runs on: [QA on your own flows](/blueprints/website-audit)\nGuide: [Shopify launch checklist](/blog/ai-customers-for-shopify-plus-agencies)',
        ],
        [
          'Emails after a migration',
          'Lives the first 14 days on a real inbox',
          'Every flow email timed, and any that never came',
          'After the release, then daily for 14 days',
          'Shopify Plus or email agency',
          'Runs on: [Delivery monitoring](/blueprints/delivery-monitoring)',
        ],
        [
          'Before and after a fix',
          'Runs the same step again once the fix ships',
          'The break and the fix, side by side',
          'Once the fix is live',
          'Fixer or developer',
          'Runs on: [QA on your own flows](/blueprints/website-audit)\nGuide: [Shopify store audit](/blog/shopify-store-audit-checklist)',
        ],
      ],
    },

    { kind: 'h2', id: 'first-job', text: 'How to use AI in ecommerce, by role' },
    {
      kind: 'p',
      text: 'The first job is the one closest to the number each role owns, with the blueprint that runs it.',
    },
    {
      kind: 'table',
      caption: 'The first job by ecommerce role, with where to start',
      cols: ['Role', 'First job', 'Blueprint'],
      rows: [
        ['Store founder', 'Your welcome, basket and checkout, shopped as a new customer', '[Mystery shopping](/blueprints/mystery-shopper)'],
        ['Head of ecommerce', 'Every sale code tried at checkout before the next sale', '[QA on your own flows](/blueprints/website-audit)'],
        ['CRM or retention lead', 'The abandoned checkout flow, timed to the minute', '[Mystery shopping](/blueprints/mystery-shopper)'],
        ['Growth or performance lead', 'The pop-up and welcome code a paid visitor meets', '[Ad landing check](/blueprints/ad-landing-check)'],
        ['Retention agency', 'The stores you pitch or keep, each as a new customer', '[Mystery shopping](/blueprints/mystery-shopper)'],
        ['CRO or performance agency', 'The pop-up and code behind each brand’s live ads', '[Ad landing check](/blueprints/ad-landing-check)'],
        ['Shopify Plus agency', 'A client store, signed up to after the next release', '[QA on your own flows](/blueprints/website-audit)'],
        ['Shopify fixer', 'The break on a store you are quoting for', '[QA on your own flows](/blueprints/website-audit)'],
      ],
    },

    { kind: 'h2', id: 'hands-over', text: 'What a customer-side agent does, and where it stops' },
    {
      kind: 'p',
      text: 'A customer-side agent does what any shopper can. It signs up, browses, builds a basket and chats with the store’s assistant. It stays on the store’s list for months and keeps every email, page and price as it arrived.',
    },
    {
      kind: 'list',
      items: [
        '**Logins and spend.** It signs in only with the logins you give it, and works within a monthly spend limit you set on its key.',
        '**Payment.** It stops before payment unless the brand gives it its own card, such as for a test order on its own store. It never uses fake payment details.',
        '**People.** It says it’s an AI whenever it talks to a person, by chat, email or phone.',
        '**The cause.** It sees what any shopper sees. Why a store sent something sits in the store’s own tools: the Klaviyo flow, the Shopify settings, the app.',
      ],
    },

    { kind: 'h2', id: 'scale', text: 'Scale and cost' },
    {
      kind: 'p',
      text: 'A persona waiting on a store’s list is free while it waits. It pays for the pieces it uses, such as $0.50 an inbox a month and $0.10 a browser hour. Each line of the cost is worked out in [AI agent cost per month](/blog/ai-customers-at-scale).',
    },
    {
      kind: 'p',
      text: 'An agency runs a fleet of personas, one per store, across 300, 1,000 or 5,000 brands a month, and every event lands in the same log.',
    },
    {
      kind: 'p',
      text: 'The [sample data](/sample-output) shows a real run at a UK skincare store in September 2026: 4 sign-ups and baskets, and a £40 basket left at 02:57 on 22 September that got no reminder.',
    },
    { kind: 'p', text: 'Teams start on the Free plan, with no credit card. Paid plans are $20, $99 or $499 a month, each with a spend cap, and a blueprint is billed on the pieces it uses.' },

    { kind: 'h2', id: 'compared', text: 'Ways to see what a store sends its customers, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 31 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways a brand or agency can see what a store sends its customers, from each provider’s own pages on 31 October 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing: Shopify and Klaviyo reports', 'What the store’s platforms sent and earned', 'In the plans the store pays for', 'A flow that never fired, and what shoppers saw', 'Revenue reporting'],
        [
          'By hand: a new inbox, a phone and a sheet',
          'Your own judgement on any store',
          'Staff hours',
          'Hours grow with every store and every 48-hour wait',
          'One store before a sale',
        ],
        [
          'Human mystery shopping: [CustomerOptix](' + CUSTOMEROPTIX + '), [T-ROC](' + TROC + ')',
          'Trained people test a website’s checkout or visit a shop',
          'CustomerOptix: from $45\nT-ROC: $40 to $150 a store visit',
          'CustomerOptix: 48 to 72 hours at best, often 2 weeks\nT-ROC: 4 to 6 visits per store a quarter',
          'Shop floors and one-off website tests',
        ],
        [
          'AI shoppers: [Shopify SimGym](' + SIMGYM + ')',
          'AI shoppers browse, add to cart and describe their experience before a theme change goes live',
          'A monthly allowance, then $0.75 a run or $1.50 a comparison',
          'Its help page describes no sign-ups, emails or codes',
          'Comparing themes before a launch',
        ],
        [
          'Page monitors: [Visualping](' + VISUALPING + ')',
          'Alerts when a competitor’s page changes',
          'Free for 5 pages\n$14 to $350 a month',
          'The pages someone sets up, and nothing after a sign-up',
          'A handful of competitor pages',
        ],
        [
          'Email archives: [Panoramata](' + PANORAMATA + '), [Owletter](' + OWLETTER + ')',
          'Panoramata: competitors’ emails, texts, ads and catalogues\nOwletter: every email a site sends its list',
          'Panoramata: $99 to $399 a month\nOwletter: $29 to $99 a month',
          'Competitors’ marketing, with no test of a checkout',
          'Browsing competitors’ campaigns',
        ],
        [
          'Obsession (ours): [Mystery shopping](/blueprints/mystery-shopper), [QA on your own flows](/blueprints/website-audit), [Ad landing check](/blueprints/ad-landing-check), [Competitor tracking](/blueprints/competitor-tracking), [Price watch](/blueprints/price-watch), [Listings and AI answers](/blueprints/listings-ai-answers)',
          'A persona per store with its own inbox, number and browser, every email, page and price kept in one event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment, and leaves the fix to the store’s team',
          'Every store a brand or agency names, checked as a customer',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Obsession gives every AI agent its own phone, inbox and browser, on one API and one bill. If your brand or agency needs to see what a store sends a new customer, its own or a competitor’s, every week and after every change, pick its mystery shopping blueprint and Obsession runs it. SimGym suits a theme comparison before a launch, and an email archive suits browsing competitors’ campaigns. A human mystery shopper suits a shop floor or a one-off website test.',
    },

    { kind: 'h2', id: 'start', text: 'Start this week' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Pick the store and the journey with the most riding on it this month, such as the welcome flow before the next sale.',
        'Write the pass mark first: the welcome email within 5 minutes with the pop-up’s code, and the first abandoned checkout reminder within the flow’s delay plus 1 hour.',
        'Set the reading time: 4, 12, 24 or 48 hours, or as long as the personas should keep watching.',
        'Fix what fails, then run the same sign-up or checkout again so the before and after sit side by side.',
      ],
    },
    {
      kind: 'cta',
      text: 'Mystery shopping: personas sign up, fill a basket and stop before payment at your store or any competitor’s, and every email and text they get lands in your event log, dated.',
      to: '/blueprints/mystery-shopper',
      label: 'See the blueprint',
    },
    {
      kind: 'cta',
      text: 'For retention agencies: open every pitch with the store’s own emails, and the ones that never came, from the pop-up and its code to the welcome email and the basket reminder, each message dated.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'See how it works',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about agentic AI in ecommerce' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How is a customer-side agent different from a store’s AI chat?',
          a: 'A store’s AI chat works for the store and answers its shoppers. A customer-side agent works for a brand or its agency and is one of those shoppers. It asks the chat the hard questions and checks each answer against the store’s policy.',
          link: { label: 'How to test a chatbot on your store', to: '/blog/test-store-chatbot-returns-policy' },
        },
        {
          q: 'How is it different from Shopify’s SimGym?',
          a: 'SimGym’s AI shoppers browse a Shopify theme, add to cart and describe what they found, before a theme change is published. A customer-side agent signs up, takes the code to checkout and keeps every email that follows, at any store, competitors included.',
          link: { label: 'Shopify SimGym review', to: '/blog/shopify-simgym-review-ai-shoppers-vs-ai-customers' },
        },
        {
          q: 'How is it different from a shopper’s own AI agent?',
          a: 'A shopper’s agent, such as one linked to Shop, works for one person and finishes that person’s purchase. A customer-side agent works for a brand or agency and stays a customer of the stores the brand names for months. It keeps each email and page it receives, with the time it arrived.',
        },
        {
          q: 'Does a customer-side agent place orders?',
          a: 'Only with the brand’s own payment card, for a job it approved, such as a test order on its own store. Otherwise every checkout stops before payment, and it never uses fake payment details.',
        },
        {
          q: 'Does a customer-side agent say it’s AI?',
          a: 'Yes. When it talks to a person, by chat, email or phone, it says it’s an AI agent and links to a page that explains what it is.',
        },
        {
          q: 'What are some examples of AI in ecommerce?',
          a: 'Today’s examples include a support chat answering a returns question, an assistant writing product descriptions, Meta’s Muse paying at checkout with Link and a customer-side agent timing a store’s abandoned checkout flow. The first two work for the store, the third for the shopper and the fourth for the brand or its agency.',
        },
        {
          q: 'Can a customer-side agent check a competitor’s store?',
          a: 'Yes. It joins through the public sign-up any shopper can use and keeps every email, code and price the competitor sends a new customer.',
          link: { label: 'Competitor email tracking tools compared', to: '/blog/competitor-email-tracking-tools' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the figures',
      text: 'Each job is described in the words of the page that runs it, linked in its row. Every other tool is described from its own pages as of 31 October 2026, with prices in US dollars as listed that day. Fernwick is invented.',
    },
  ],

  sources: [
    { title: 'Introducing Muse: the world’s first personal AI agent built for everyone', publisher: 'Meta', url: MUSE, date: '2026-09-08' },
    { title: 'Using Shop with AI agents and agentic platforms', publisher: 'Shop Help Center', url: SHOP_AGENTS },
    { title: 'Agentic storefronts', publisher: 'Shopify Help Center', url: STOREFRONTS },
    { title: 'Universal Commerce Protocol', publisher: 'Google Merchant Center Help', url: UCP },
    { title: 'Adobe: U.S. Holiday Shopping Season to Hit Record $275.1 Billion Online, Rising 6.7% YoY', publisher: 'Adobe', url: ADOBE, date: '2026-09-28' },
    { title: '2026 email marketing benchmarks', publisher: 'Klaviyo', url: KLAVIYO, date: '2026' },
    { title: 'Mystery shopping', publisher: 'CustomerOptix', url: CUSTOMEROPTIX },
    { title: 'Mystery shopping services', publisher: 'T-ROC', url: TROC, date: '2026-05-04' },
    { title: 'SimGym', publisher: 'Shopify Help Center', url: SIMGYM },
    { title: 'Pricing', publisher: 'Visualping', url: VISUALPING },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Pricing', publisher: 'Owletter', url: OWLETTER },
  ],

  related: [
    '/blueprints',
    'ai-agent-use-cases-for-business',
    'ai-customers-for-ecommerce-brands',
    '/use-cases/leak-checks-for-ecommerce-stores',
    '/use-cases/leak-checks-for-retention-agencies',
    '/use-cases/funnel-qa-for-cro-agencies',
    '/use-cases/prospect-intelligence-with-clay',
    'recipe:mystery-shopper',
    'recipe:website-audit',
    'recipe:ad-landing-check',
    'recipe:support-bot-check',
    'recipe:sales-agent-check',
    'recipe:email-sms-tracking',
    'recipe:price-watch',
    'recipe:ad-tracking',
    'recipe:competitor-tracking',
    'recipe:listings-ai-answers',
    'recipe:partner-checks',
    'recipe:prospect-intelligence',
    'recipe:delivery-monitoring',
  ],
}
