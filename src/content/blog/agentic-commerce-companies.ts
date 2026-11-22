import type { BlogPost } from './types'

/* Agentic commerce, batch 1, article 3 (_research/seo/agentic-commerce-23nov/PLAN.md §3 and ARTICLE_BRIEF.md, row 3;
   Seun's yes, 23 Nov 2026). Primary "agentic commerce companies"; secondaries from Google suggestions (US and UK,
   23 Nov: autocomplete_23nov.json): top agentic commerce companies, agentic commerce platform, agentic commerce
   infrastructure companies. Readers: teams building agents that buy, and the ecommerce, payments and procurement teams
   choosing partners. A fair map in 5 layers, every company from its own page read on 23 Nov 2026 (facts, sources and
   doubts in _research/seo/agentic-commerce-23nov/notes_agentic-commerce-companies.md). Meta's checkout is described from
   Shopify's help page, Adyen's from its own knowledge hub article of 16 Jun 2026. Obsession sits in the identity layer,
   last, in the live site's product lines (site.ts): it pays with the card you give it, stops before payment without
   one, never issues cards or holds money, stops at any identity check, and a store that blocks agents is a finding.
   Plan prices from prices.ts (Free, $20, $99, $499) and piece prices from src/lib/pricing/pricing.json, 23 Nov.
   Inkbox and TinyFish are never named. harrow.example and its supplier are invented. British English, no dashes. */

const AMAZON = 'https://www.aboutamazon.com/news/retail/alexa-for-shopping-ai-assistant'
const VISA = 'https://www.visa.com/en-us/solutions/intelligent-commerce'
const OPENAI = 'https://chatgpt.com/merchants/'
const GOOGLE_CART = 'https://blog.google/products-and-platforms/products/shopping/universal-cart-launch/'
const MASTERCARD = 'https://www.mastercard.com/us/en/business/artificial-intelligence/mastercard-agent-pay.html'
const STRIPE_AC = 'https://docs.stripe.com/agentic-commerce'
const PAYPAL = 'https://www.paypal.ai/'
const ADYEN = 'https://www.adyen.com/knowledge-hub/adyen-agentic-the-universal-translator-for-the-next-era-of-commerce'
const LINK_WALLET = 'https://docs.stripe.com/agentic-commerce/agents/link-agent-wallet'
const STRIPE_ISSUING = 'https://docs.stripe.com/issuing/agents'
const CROSSMINT = 'https://www.crossmint.com/solutions/agentic-payments'
const PRIVACY = 'https://agents.privacy.com/'
const COINBASE = 'https://docs.cdp.coinbase.com/ai-agents/coinbase-for-agents/wallet-mcp'
const SKYFIRE = 'https://skyfire.xyz/'
const MICROSOFT = 'https://about.ads.microsoft.com/en/solutions/technology/agentic-commerce'
const PERPLEXITY = 'https://www.perplexity.ai/hub/blog/shopping-that-puts-you-first'
const SHOPIFY_META = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/meta'
const ZIP = 'https://zip.com/'
const COUPA = 'https://www.coupa.com/blog/ai-agents-for-procurement/'
const OTTO = 'https://www.ottotheagent.com/'
const RYE = 'https://rye.com/'
const SHOPIFY = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts'
const COMMERCETOOLS = 'https://commercetools.com/products/agentic-commerce'
const SALESFORCE = 'https://www.salesforce.com/news/stories/agentforce-commerce-capabilities-announcement/'
const CLOUDFLARE = 'https://www.cloudflare.com/solutions/agentic-commerce/'
const FORTER = 'https://www.forter.com/agentic-commerce/'
const NEKUDA = 'https://nekuda.ai/'
const AGENTMAIL = 'https://www.agentmail.to/pricing'
const AGENTPHONE = 'https://agentphone.ai/pricing'
const BROWSERBASE = 'https://www.browserbase.com/pricing'
const BROWSER_USE = 'https://browser-use.com/'
const AUTH0 = 'https://auth0.com/solutions/ship-ai-agents'

export const post: BlogPost = {
  slug: 'agentic-commerce-companies',
  title: 'Agentic commerce companies: who builds each layer (2026)',
  dek: 'Who builds each part of an AI agent’s purchase, from the card network that approves it to the inbox that receives the receipt. Each of the 30 companies is described from its own pages as of 23 November 2026, with Obsession’s place among them.',
  metaTitle: 'Agentic commerce companies: who builds each layer (2026)',
  description:
    'Agentic commerce companies by layer: card networks, agent cards and wallets, shopping agents, merchant tools, and the inboxes and browsers agents buy with.',
  answer:
    'Agentic commerce companies build what an AI agent needs to buy for a person or a business, in 5 layers: payments, agent cards and wallets, shopping agents, merchant tools, and the agent’s identity, inbox, number and browser. Visa, Mastercard, Stripe, PayPal and Adyen lead payments; OpenAI, Google, Amazon and Microsoft run consumer shopping agents; Shopify, commercetools and Cloudflare get stores ready. Obsession gives a buying agent its own identity, with an inbox for every receipt, a phone number and a browser, and it pays with the card you give it.',
  primaryKeyword: 'agentic commerce companies',
  keywords: ['top agentic commerce companies', 'agentic commerce platform', 'agentic commerce infrastructure companies'],
  category: 'Buy, book and order',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 12,
  order: 3,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'One reorder, through all 5 layers',
      who: 'Buying agent 3 · harrow.example',
      rows: [
        { time: 'Tue 07:02', text: 'Finds 12 cases of gloves at $214.80', detail: 'Shopping and buying agent', tone: 'info' },
        { time: 'Tue 07:02', text: 'The store quotes tax and a Friday delivery', detail: 'Merchant tools', tone: 'ok' },
        { time: 'Tue 07:03', text: 'Signs in; the code reaches its own number', detail: 'Identity, inbox and number', tone: 'ok' },
        { time: 'Tue 07:03', text: 'Pays with the group’s agent card, limit $500', detail: 'Agent cards and wallets', tone: 'ok' },
        { time: 'Tue 07:03', text: 'The card network approves the payment', detail: 'Networks and payments', tone: 'ok' },
        { time: 'Tue 07:04', text: 'Order confirmation lands in its inbox', detail: 'Identity, inbox and number', tone: 'ok' },
        { time: 'Thu 16:40', text: 'Delivery text reaches its number', detail: 'Identity, inbox and number', tone: 'ok' },
      ],
      foot: 'Each step comes from a different type of company. The restaurant group, its agent and the supplier are invented examples.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Agentic commerce companies build what an AI agent needs to buy something for a person or a business, and what a store needs to sell to that agent. They fall into 5 layers: card networks and payments, agent cards and wallets, shopping and buying agents, merchant tools, and the identity, inbox, phone number and browser an agent buys with.',
    },
    {
      kind: 'p',
      text: 'The 30 companies here are each described from their own website, docs or announcement, as of 23 November 2026. Teams building agents that buy can see which parts to rent, and ecommerce, payments and procurement teams can see who to work with. [Agentic commerce](/blog/agentic-commerce) explains how an agent buys, books and orders step by step, and [agentic commerce protocols compared](/blog/agentic-commerce-protocols) sets out the standards they share.',
    },

    { kind: 'h2', id: 'map', text: 'The agentic commerce map: 5 layers' },
    {
      kind: 'p',
      text: 'A single purchase by an agent touches all 5. The agent finds the item, the store’s tools quote it, the agent signs in and receives its codes, a card or wallet pays, and the card network approves the payment.',
    },
    {
      kind: 'table',
      caption: 'Agentic commerce companies by layer, from each company’s own pages, 23 November 2026',
      cols: ['Part of the purchase', 'What it does', 'Companies here'],
      rows: [
        ['Networks and payments', 'Lets an agent pay and a store trust it', 'Visa\nMastercard\nStripe\nPayPal\nAdyen'],
        ['Agent cards and wallets', 'Sets what each agent may spend', 'Stripe\nCrossmint\nPrivacy\nCoinbase\nSkyfire'],
        ['Shopping and buying agents', 'Finds, compares and buys', 'OpenAI\nGoogle\nAmazon\nMicrosoft\nPerplexity\nMeta\nZip\nCoupa\nOtto\nRye'],
        ['Merchant tools', 'Puts a store’s catalogue and checkout in front of agents', 'Shopify\ncommercetools\nSalesforce\nCloudflare\nForter\nnekuda'],
        ['Identity, inboxes, numbers and browsers', 'Gives the agent a name, an address for receipts, a number for codes and a browser', 'AgentMail\nAgentPhone\nBrowserbase\nBrowser Use\nAuth0\nObsession'],
      ],
    },

    { kind: 'h2', id: 'payments', text: 'Card networks and payment companies' },
    {
      kind: 'p',
      text: 'These companies move the money and tell a store which agent is paying. Visa and Mastercard work at the network level, where a purchase is tied to a registered agent and a card. Stripe, PayPal and Adyen work with merchants and agent builders. They take payment through the standards each AI channel uses, such as the Agentic Commerce Protocol (ACP) in ChatGPT, the Universal Commerce Protocol (UCP) behind Google’s checkout and Google’s Agent Payments Protocol (AP2) for payments an agent starts.',
    },
    {
      kind: 'table',
      caption: 'Card networks and payment companies, from each company’s own pages, 23 November 2026',
      cols: ['Company', 'What it builds', 'What it does well', 'From its own pages'],
      rows: [
        ['Visa', 'Visa Intelligent Commerce, with the Trusted Agent Protocol', 'Verifies agents and blocks malicious bots, on 4.8 billion payment credentials', 'Being deployed, Visa says'],
        ['Mastercard', 'Mastercard Agent Pay', 'Only registered agents can transact, traced with network tokens', 'For payments agents make for people and businesses'],
        ['Stripe', 'Link Agent Wallet, Shared Payment Tokens and checkout for sellers', 'Serves both sides: agents that pay and stores that sell to them', 'Agent payments for US and Canadian customers'],
        ['PayPal', 'Agent Wallet and Store Sync', 'Shoppers connect PayPal once and approve each order', 'Partners named: Perplexity, Google, Microsoft Copilot'],
        ['Adyen', 'Adyen Agentic: feed, cart and payments', 'One connection across agent platforms, protocols and payment methods', 'Described by its co-CEO on 16 June 2026'],
      ],
    },
    {
      kind: 'p',
      text: '**Visa and Mastercard.** [Visa](' +
        VISA +
        ') calls Visa Intelligent Commerce its portfolio for AI agents. It includes the Trusted Agent Protocol, which Visa describes as a framework for verifying agents and blocking malicious bots. Visa puts its network at 4.8 billion payment credentials and over 175 million merchant locations. [Mastercard](' +
        MASTERCARD +
        ') says only registered agents can transact under Agent Pay, each governed and traced with Mastercard network tokens.',
    },
    {
      kind: 'p',
      text: '**Stripe and PayPal.** With [Link Agent Wallet](' +
        LINK_WALLET +
        '), an agent asks for a one-time payment credential that the customer approves, for US and Canadian customers. On the selling side, [Stripe’s docs](' +
        STRIPE_AC +
        ') cover retail checkout, service bookings and Shared Payment Tokens, scoped payment credentials for purchases an agent starts. They also cover charging for API calls, the requests one program makes to another, through x402, a standard for paying per web request. [PayPal’s Agent Wallet](' +
        PAYPAL +
        ') connects shopping agents to a store’s PayPal checkout, and Store Sync shares the store’s catalogue with AI platforms.',
    },
    {
      kind: 'p',
      text: '**Adyen.** In [an article of 16 June 2026](' +
        ADYEN +
        '), Adyen’s co-CEO set out Adyen Agentic in 3 parts. A feed keeps catalogue, price and stock current in AI shopping channels, and a cart hooks an agent’s request into existing checkout, tax and fulfilment. Its payments keep the store as merchant of record, the business that sells and takes the payment.',
    },

    { kind: 'h2', id: 'cards', text: 'Agent cards and wallets' },
    {
      kind: 'p',
      text: 'An agent card or wallet sets what one agent may spend, where and how much, before it buys anything. Some issuers give the agent a card of its own, and others give it controlled access to a card the person already holds.',
    },
    {
      kind: 'table',
      caption: 'Agent cards and wallets, from each company’s own pages, 23 November 2026',
      cols: ['Company', 'What it builds', 'What it does well', 'From its own pages'],
      rows: [
        ['Stripe Issuing for agents', 'Cards and credentials for agents', 'Spend controls and a decision on each purchase as it happens', 'Private preview'],
        ['Crossmint', 'Agent wallets, agent cards and agent checkout', 'Stablecoin wallets, plus users’ own cards with limits and approvals', 'Sign-up and a live demo on its page'],
        ['Privacy', 'Virtual cards for AI agents', 'Spend limits, pause and close, from a command line or an MCP server, the standard way agents call tools', 'Available today, its page says'],
        ['Coinbase', 'Agent wallets through Wallet MCP', 'Each agent wallet has its own address, balance and spending policy', 'A spending limit is saved before any autonomous spending'],
        ['Skyfire', 'KYA (know your agent) tokens for identity and payment', 'One token for access, login and checkout, with the user’s mandate', 'Says its token covers more than 60% of the web'],
      ],
    },
    {
      kind: 'p',
      text: '**Stripe and Crossmint.** [Stripe Issuing for agents](' +
        STRIPE_ISSUING +
        '), available by application, lets a business decide what an agent can spend, where and how much before each purchase. The agent then pays with a single-use card, a Shared Payment Token or an agentic network token from Visa or Mastercard. [Crossmint](' +
        CROSSMINT +
        ') covers both kinds of money: stablecoin wallets the agent holds, and secure access to a user’s own credit and debit cards with spending limits and approvals.',
    },
    {
      kind: 'p',
      text: '**Privacy, Coinbase and Skyfire.** [Privacy](' +
        PRIVACY +
        ') issues virtual cards with spend limits that a developer creates, pauses and closes from the terminal or through its [MCP](/glossary/model-context-protocol) server, which lets AI agents call its tools. [Coinbase’s Wallet MCP](' +
        COINBASE +
        ') gives an agent a wallet with a rolling 24-hour budget in US dollars and pays for APIs over x402 in stablecoins such as USDC. [Skyfire](' +
        SKYFIRE +
        ') binds the agent, the company running it and the person behind it into one token, with tokenised card payments through the major card networks.',
    },

    { kind: 'h2', id: 'agents', text: 'Shopping and buying agents' },
    {
      kind: 'p',
      text: 'These are the agents that do the buying. Assistants from OpenAI, Google, Amazon, Microsoft, Perplexity and Meta shop for people. Procurement and travel software buys for companies, and checkout APIs let any developer’s agent complete an order.',
    },
    { kind: 'h3', id: 'for-people', text: 'Agents that shop for people' },
    {
      kind: 'stat',
      value: '300M+',
      label: 'customers that Rufus, Amazon’s shopping assistant, helped research, compare and buy in 2025',
      source: 'Amazon, 13 May 2026, updated 13 Nov 2026',
      href: AMAZON,
    },
    {
      kind: 'table',
      caption: 'Shopping agents for consumers, from each company’s own pages, 23 November 2026',
      cols: ['Company', 'What it builds', 'What it does well', 'From its own pages'],
      rows: [
        ['OpenAI: ChatGPT', 'Shopping in ChatGPT, built on ACP', 'Product discovery from merchants’ feeds; Shopify and Etsy catalogues already connected', 'Live in the US; purchases finish on the merchant’s site or app'],
        ['Google: AI Mode and Gemini', 'Universal Cart, with checkout through Google Pay', 'Saves items from many retailers, tracks price drops, finds promo codes', 'Rolling out in the US from 15 October 2026'],
        ['Amazon: Alexa for Shopping', 'Rufus and Alexa+ in one assistant, with Buy for Me', 'Buys eligible items from other stores with the customer’s address and card', 'In full across 13 countries'],
        ['Microsoft: Copilot Checkout', 'Checkout inside Copilot', 'The store stays merchant of record on its own payment and fraud systems', 'English-language merchants selling to US buyers'],
        ['Perplexity', 'Shopping with checkout through PayPal', 'Buy and keep talking in the same window', 'Free to all US users since 25 November 2025'],
        ['Meta: Muse and other surfaces', 'Direct checkout on Meta, powered by Shopify', 'Buy without leaving the Meta app', 'Shoppers in 11 countries, including the US and UK'],
      ],
    },
    {
      kind: 'p',
      text: '**ChatGPT.** [OpenAI’s merchant page](' +
        OPENAI +
        ') says shopping is live for US users and that OpenAI is moving away from a standalone Instant Checkout in ChatGPT. Purchases that start in ChatGPT finish on the merchant’s own website or app, with no fees. Product discovery runs on ACP, which OpenAI plans to expand to the full purchase over time.',
    },
    {
      kind: 'p',
      text: '**Google and Amazon.** [Google’s Universal Cart](' +
        GOOGLE_CART +
        ') launched in the US on 15 October 2026 across Search and the Gemini app. Shoppers check out through Google Pay, powered by UCP, or move the items to the merchant’s own cart. Google names Nike, Sephora, Target, Ulta Beauty, Walmart, Wayfair and many Shopify merchants. [Amazon’s page](' +
        AMAZON +
        '), updated 13 November 2026, says Alexa for Shopping brings Rufus and Alexa+ together across 13 countries. Through Buy for Me, it buys eligible products from other online stores with the customer’s primary address and card.',
    },
    {
      kind: 'p',
      text: '**Microsoft, Perplexity and Meta.** [Copilot Checkout](' +
        MICROSOFT +
        ') completes purchases inside Copilot while the store stays merchant of record. Shopify merchants were enrolled automatically, and Stripe’s Agentic Commerce Suite is another route in. [Perplexity’s shopping](' +
        PERPLEXITY +
        ') is free to all US users, with checkout through PayPal. [Shopify’s help page for Meta](' +
        SHOPIFY_META +
        ') describes a Shopify-powered direct checkout on Meta surfaces, including Muse when available, for shoppers in 11 countries.',
    },
    {
      kind: 'p',
      text: 'Black Friday, Friday 27 November 2026, is the first since Universal Cart began rolling out in the US. In our view, it is the first large test of shoppers letting an agent hold one basket across several retailers.',
    },
    { kind: 'h3', id: 'for-companies', text: 'Agents that buy for companies' },
    {
      kind: 'table',
      caption: 'Buying agents for companies and checkout APIs for developers, from each company’s own pages, 23 November 2026',
      cols: ['Company', 'What it builds', 'What it does well', 'From its own pages'],
      rows: [
        ['Zip', 'AI agents across intake to pay', 'Purchase requests, orders and invoices under company policy', '$1 trillion of spend processed, Zip says'],
        ['Coupa', 'Navi agents for procurement', 'Plan and act across source to pay', 'Built on $10 trillion of spend, Coupa says'],
        ['Otto', 'A travel assistant that books trips', 'Flights, hotels and cars with loyalty programmes applied, rebooked when plans change', 'Works in Slack, Teams, WhatsApp, email, Claude and ChatGPT'],
        ['Rye', 'Universal Checkout API for developers', 'A product link and payment token in, the full cost and a completed order back', 'Says 90%+ order reliability on browser-automated checkouts'],
      ],
    },
    {
      kind: 'p',
      text: 'Business buying runs on approvals and policy that consumer shopping skips. [Zip](' +
        ZIP +
        ') runs every purchase request from intake to pay, with AI agents for sourcing, contracts and supplier onboarding, and counts $1 trillion of spend processed. [Coupa’s guide of 18 August 2026](' +
        COUPA +
        ') describes its Navi agents as built on $10 trillion in spend. [Otto](' +
        OTTO +
        ') books flights, hotels and cars as a travel assistant and is free for 1 year. For developers, [Rye](' +
        RYE +
        ') takes a product link and a payment token, returns the landed cost and completes the order, with the store as merchant of record.',
    },

    { kind: 'h2', id: 'merchants', text: 'Merchant tools: agentic commerce platforms for stores' },
    {
      kind: 'p',
      text: 'An agentic commerce platform, as stores use the phrase, does 2 jobs: it puts a store’s catalogue, prices and checkout in front of AI agents, and it decides which agents get in. Stripe, PayPal and Adyen do part of this from the payments side, and these 6 companies do it from the store’s side.',
    },
    {
      kind: 'table',
      caption: 'Merchant tools for agentic commerce, from each company’s own pages, 23 November 2026',
      cols: ['Company', 'What it builds', 'What it does well', 'From its own pages'],
      rows: [
        ['Shopify', 'Agentic storefronts and Shopify Catalog', 'Sells a store’s products in ChatGPT, Google AI Mode and Gemini, Copilot and Meta', 'On by default for eligible stores'],
        ['commercetools', 'AI Hub', 'Handles UCP, ACP and MCP, so each AI channel needs no new integration', 'Catalogue to Meta’s Muse; cart transfer to Universal Cart'],
        ['Salesforce', 'Agentforce Commerce', 'Catalogue and checkout for consumer AI channels, with ACP through Stripe and support for AP2', 'Announced 17 November 2025'],
        ['Cloudflare', 'Agentic commerce on its network', 'Verifies agents with [Web Bot Auth](/glossary/web-bot-auth), a signature on each agent request, in under 1 ms, Cloudflare says', 'Connects to Visa’s Trusted Agent Protocol, Mastercard Agent Pay, x402 and AP2'],
        ['Forter', 'Agentic Orchestration', 'Fraud and identity decisions on agent orders, one integration across protocols', 'Says agents check out 10x faster with 5x fewer tokens than by scraping'],
        ['nekuda', 'WebMCP tools (actions a site offers agents in the browser)', 'Shows what agents can do on a site, tests it and builds what’s missing', 'Tool control coming soon'],
      ],
    },
    {
      kind: 'p',
      text: '**Shopify and commercetools.** [Shopify’s agentic storefronts](' +
        SHOPIFY +
        ') are active by default for eligible stores. They sell through ChatGPT, Google AI Mode and Gemini, Microsoft Copilot and Meta, with products shared through Shopify Catalog. [commercetools’ AI Hub](' +
        COMMERCETOOLS +
        ') connects an enterprise catalogue to Meta’s Muse through Meta’s Open Catalog and to Google’s Universal Cart, starting with cart transfer. It keeps up with UCP, ACP and MCP as each changes.',
    },
    {
      kind: 'p',
      text: '**Salesforce, Cloudflare, Forter and nekuda.** [Salesforce announced](' +
        SALESFORCE +
        ') on 17 November 2025 that Agentforce Commerce would connect catalogues and checkout to ChatGPT through ACP with Stripe, and support AP2. [Cloudflare](' +
        CLOUDFLARE +
        ') verifies agents with Web Bot Auth, runs MCP servers, the tool endpoints agents call, on Cloudflare Workers, and connects to the agent payment standards. [Forter’s Agentic Orchestration](' +
        FORTER +
        ') runs agent checkout across protocols through one no-code integration. It also makes fraud and identity decisions on agent orders. [nekuda](' +
        NEKUDA +
        ') shows a store what agents can do on its site through WebMCP, tests what works and builds what’s missing.',
    },
    {
      kind: 'p',
      text: 'For a store checking its own readiness, [agentic commerce for merchants](/blog/agentic-commerce-for-merchants) walks through the Shopify settings and a test you run yourself. [Is your website ready for AI agents](/blog/agent-ready-website) covers when to block, allow or check an agent. The [agent checkout test](/blueprints/agent-checkout-test) blueprint shops a store each morning the way shoppers’ AI agents do and shows the step where each got stuck.',
    },

    { kind: 'h2', id: 'identity', text: 'Identity, inboxes, numbers and browsers for agents compared', compare: true },
    {
      kind: 'p',
      text: 'A buying agent needs a place for what comes back after it pays: the order confirmation, the receipt, the delivery text, the sign-in code and the store account it stays signed in to. Companies in this layer give an agent those pieces, one at a time or together.',
    },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Identity, inboxes, numbers and browsers for buying agents. Prices in US dollars from each company’s own pages, 23 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'A person’s own email, phone and card',
          'Nothing to set up',
          'Free',
          'Every agent’s receipts and codes land with one person',
          'One person’s own errands',
        ],
        [
          'Build it yourself',
          'Full control of every piece and its data',
          'Servers, carrier fees and engineering hours',
          'Deliverability, number registration and browser upkeep become your job',
          'Teams with infrastructure engineers',
        ],
        [
          'AgentMail: email inboxes',
          'Inboxes with threads, webhooks, an MCP server and SDKs',
          'Free: 3 inboxes\nDeveloper: $20 a month, 10 inboxes\nStartup: $200 a month, 150 inboxes',
          'Email only',
          'Agents that need an inbox and nothing else',
        ],
        [
          'AgentPhone: numbers for agents',
          'Calls and texts on one webhook, plus iMessage',
          'Number: $3 a month\nCalls: 13¢ to 22¢ a minute\nTexts: 2¢ a segment\niMessage: from $150 a line a month',
          'Phone and messaging only',
          'Agents that live on the phone',
        ],
        [
          'Browserbase: cloud browsers',
          'Browser fleets, with agent runs, search and fetch on every plan',
          'Free: 1 browser hour\nDeveloper: $20 a month, 100 hours\nStartup: $99 a month, 500 hours',
          'Proxy traffic $10 to $12 a GB\nNo inbox or number on its pricing page',
          'Browser-only agents at scale',
        ],
        [
          'Browser Use: browser agents',
          'Open-source browser agent and cloud browsers, in the US or EU',
          'Web agents: $0.006 a task, median\nStealth browsers: $0.06 a browser hour\n$1 free',
          'Browser only',
          'Agents that act inside websites',
        ],
        [
          'Obsession (ours): [Personas](/personas), [Email](/email), [Phone](/phone), [Browser](/browser), [Buy, book and order blueprints](/blueprints/buy-book-and-order)',
          'An inbox, a number and a browser under one identity, with every confirmation, receipt and delivery text in one event log',
          'Free, then $20, $99 or $499 a month; usage per piece\nInbox $0.50 and US number $2 a month\nBrowser $0.10 an hour',
          'Pays with the card you give it\nStops at any identity check',
          'Buying agents that need an inbox, a number and a browser under one name',
        ],
      ],
    },
    {
      kind: 'p',
      text: '**Inboxes, numbers and browsers.** [AgentMail](' +
        AGENTMAIL +
        ') gives agents inboxes with threads, webhooks, an MCP server and SDKs (code libraries for each programming language), and [AgentPhone](' +
        AGENTPHONE +
        ') gives them US and Canadian numbers for calls, texts and iMessage. [Browserbase](' +
        BROWSERBASE +
        ') runs browser fleets, with agent runs, search and fetch included on its plans. [Browser Use](' +
        BROWSER_USE +
        ') offers what its page calls the most-starred open-source browser agent, with cloud browsers in the US or EU. [Obsession vs AgentMail](/compare/obsession-vs-agentmail) and [Obsession vs Browserbase](/compare/obsession-vs-browserbase) compare them piece by piece.',
    },
    {
      kind: 'p',
      text: '**Checking who the agent is.** Stores and networks check which agent is visiting through Visa’s Trusted Agent Protocol, Mastercard Agent Pay’s registered agents and Cloudflare’s Web Bot Auth checks. [Auth0 for AI Agents](' +
        AUTH0 +
        ') covers the other direction: it lets an agent act inside a user’s own accounts, with fine-grained authorization and an audit trail of every action.',
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: an inbox, a phone number and a browser for every agent, plus messaging and a sandbox, under one identity on one API and one bill. In the [Buy, book and order blueprints](/blueprints/buy-book-and-order), a buying agent checks out in its own signed-in browser, and every confirmation, receipt and delivery text lands in one event log, a dated list matched to each order. It pays with the card you give it and stops before payment without one, stops at any identity check, and reports a store that blocks agents as a finding.',
    },
    {
      kind: 'cta',
      text: 'Give each buying agent an inbox for receipts, a phone number for codes and delivery texts, and a browser that stays signed in. All three sit under one identity, on one key and one bill, and the Free plan needs no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'How to choose, by what you’re building' },
    {
      kind: 'list',
      items: [
        '**An agent that buys for people.** You need a payment credential the person approves, such as Link Agent Wallet, PayPal’s Agent Wallet or Crossmint. Add a checkout route (the merchant’s own checkout, ACP, UCP or a checkout API such as Rye) and an identity stores accept. Watch orders completed without a person stepping in, and cost per order.',
        '**An agent that buys for a company.** Add a card per agent with limits, from Stripe Issuing for agents, Privacy or Crossmint. Give each agent an inbox and a number, so every confirmation and delivery text reaches the agent that placed the order. Watch time per order, spend under contract and receipts matched at month end.',
        '**A store selling to agents.** Start with the AI channels in your commerce software (Shopify, commercetools or Salesforce), then decide which agents to let in (Cloudflare or Forter) and which payment routes to accept (Stripe, PayPal or Adyen). Watch conversion from agent shoppers and failed agent checkouts.',
        '**Travel booked by an agent.** A travel assistant such as Otto books for the traveller. A team building its own agent needs an identity, an inbox for every booking change and the company card. Watch policy compliance, cost per trip and time to book.',
      ],
    },
    {
      kind: 'p',
      text: 'The parts most often bought from different companies are the ones that reach the outside world: email, phone, browser and sandbox. [The AI agent infrastructure stack](/blog/ai-agent-infrastructure-stack) lists 10 layers and who sells each, with prices. The [agentic commerce infrastructure](/use-cases/agentic-commerce) page covers 5 steps of a purchase: find, check out, confirm, track and return.',
    },
    {
      kind: 'cta',
      text: 'Not building agents? Pick a blueprint, and Obsession runs it. The supplier reorder agent reorders from the supplier you set when stock falls under its level, pays with your card and logs the delivery date.',
      to: '/blueprints/supplier-reorder-agent',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about agentic commerce companies' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are agentic commerce companies?',
          a: 'Companies that build what an AI agent needs to buy for a person or a business, and what a store needs to sell to that agent. They fall into 5 layers: card networks and payment companies, agent cards and wallets, shopping and buying agents, merchant tools, and the identity, inbox, phone number and browser an agent buys with.',
        },
        {
          q: 'Who are the top agentic commerce companies?',
          a: 'In payments, Visa, Mastercard, Stripe, PayPal and Adyen. In agent cards and wallets, Stripe, Crossmint, Privacy, Coinbase and Skyfire. In shopping agents, OpenAI, Google, Amazon, Microsoft, Perplexity and Meta, with Zip, Coupa and Otto buying for companies. In merchant tools, Shopify, commercetools, Salesforce, Cloudflare and Forter. For agents’ identity, inboxes, numbers and browsers, AgentMail, AgentPhone, Browserbase, Browser Use and Obsession.',
        },
        {
          q: 'What is an agentic commerce platform?',
          a: 'Software that does 2 jobs for a store: it puts the catalogue, prices and checkout in front of AI agents, and it decides which agents get in. Examples include Shopify’s agentic storefronts, commercetools’ AI Hub and Salesforce’s Agentforce Commerce, and Stripe, PayPal and Adyen sell agentic commerce products on the payments side.',
          link: { label: 'Agentic commerce for merchants', to: '/blog/agentic-commerce-for-merchants' },
        },
        {
          q: 'Can an AI agent have its own credit card?',
          a: 'Yes, through issuers that build for agents. Stripe Issuing for agents, available by application, issues cards with spend controls. Privacy issues virtual cards with spend limits. Crossmint gives agents wallets and controlled access to a user’s own cards, and Coinbase gives agents stablecoin wallets with a spending limit.',
        },
        {
          q: 'Can shoppers still buy inside ChatGPT?',
          a: 'OpenAI says it is moving away from a standalone Instant Checkout. Shoppers discover and compare products in ChatGPT, and the purchase is completed on the merchant’s own website or app, with no fees on purchases that start in ChatGPT.',
          link: { label: 'Agentic commerce protocols compared', to: '/blog/agentic-commerce-protocols' },
        },
        {
          q: 'Where does Obsession fit in agentic commerce?',
          a: 'In the fifth layer: identity, inboxes, numbers and browsers. Obsession gives a buying agent its own identity, with an inbox for every confirmation and receipt, a phone number for codes and delivery texts and a browser that stays signed in, on one API and one bill. The agent pays with the card you give it, and every order lands in one event log.',
          link: { label: 'Agentic commerce infrastructure', to: '/use-cases/agentic-commerce' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How these companies are described',
      text: 'Each company is described from its own website, docs or announcement, as listed on 23 November 2026. Every figure is the company’s own: Visa’s network counts, Amazon’s Rufus customers, Zip’s and Coupa’s spend, Rye’s order reliability, Forter’s checkout speed and Skyfire’s web coverage. Products in preview or rolling out may change, and availability differs by country, so check each page before you choose. Meta’s checkout is described from Shopify’s help page for Meta. The restaurant group, its agent and the supplier in the picture are invented.',
    },
  ],

  sources: [
    { title: 'Agentic Commerce Protocol, in Power product discovery in ChatGPT', publisher: 'OpenAI', url: OPENAI },
    { title: 'Visa Intelligent Commerce', publisher: 'Visa', url: VISA },
    { title: 'Mastercard Agent Pay', publisher: 'Mastercard', url: MASTERCARD },
    { title: 'Link Agent Wallet', publisher: 'Stripe docs', url: LINK_WALLET },
    { title: 'Agentic commerce', publisher: 'Stripe docs', url: STRIPE_AC },
    { title: 'Agentic commerce solutions for businesses', publisher: 'PayPal', url: PAYPAL },
    { title: 'Adyen Agentic: the universal translator for the next era of commerce', publisher: 'Adyen', url: ADYEN, date: '2026-06-16' },
    { title: 'Issuing for agents', publisher: 'Stripe docs', url: STRIPE_ISSUING },
    { title: 'AI agent payments infrastructure: wallets, cards and payouts', publisher: 'Crossmint', url: CROSSMINT },
    { title: 'Virtual cards for AI agents', publisher: 'Privacy', url: PRIVACY },
    { title: 'Wallet MCP', publisher: 'Coinbase Developer Documentation', url: COINBASE },
    { title: 'Skyfire: the agent trust stack', publisher: 'Skyfire', url: SKYFIRE },
    { title: 'Meet Alexa for Shopping, your personalized, agentic AI assistant on Amazon', publisher: 'Amazon', url: AMAZON, date: '2026-05-13' },
    { title: 'Google’s new Universal Cart launches today in the U.S.', publisher: 'Google', url: GOOGLE_CART, date: '2026-10-15' },
    { title: 'Agentic commerce: Copilot Checkout', publisher: 'Microsoft Advertising', url: MICROSOFT },
    { title: 'Shopping that puts you first', publisher: 'Perplexity', url: PERPLEXITY, date: '2025-11-25' },
    { title: 'Selling on Meta', publisher: 'Shopify Help Center', url: SHOPIFY_META },
    { title: 'AI for procurement', publisher: 'Zip', url: ZIP },
    { title: 'AI agents for procurement: the complete guide', publisher: 'Coupa', url: COUPA, date: '2026-08-18' },
    { title: 'Otto, your personal travel EA', publisher: 'Otto', url: OTTO },
    { title: 'Universal agentic checkout', publisher: 'Rye', url: RYE },
    { title: 'Shopify agentic storefronts', publisher: 'Shopify Help Center', url: SHOPIFY },
    { title: 'Agentic commerce platform for enterprises', publisher: 'commercetools', url: COMMERCETOOLS },
    { title: 'Salesforce announces new Agentforce Commerce capabilities', publisher: 'Salesforce', url: SALESFORCE, date: '2025-11-17' },
    { title: 'Agentic commerce', publisher: 'Cloudflare', url: CLOUDFLARE },
    { title: 'Agentic commerce', publisher: 'Forter', url: FORTER, date: '2026-09-30' },
    { title: 'Make every agent visit work for your business', publisher: 'nekuda', url: NEKUDA },
    { title: 'Pricing', publisher: 'AgentMail', url: AGENTMAIL },
    { title: 'Pricing', publisher: 'AgentPhone', url: AGENTPHONE },
    { title: 'Pricing', publisher: 'Browserbase', url: BROWSERBASE },
    { title: 'Browser agents and cloud browsers', publisher: 'Browser Use', url: BROWSER_USE },
    { title: 'Auth0 for AI Agents', publisher: 'Auth0', url: AUTH0 },
  ],

  related: [
    'recipe:supplier-reorder-agent',
    'recipe:agent-checkout-test',
    'recipe:travel-booking-agent',
    'recipe:order-receipt-ledger',
    '/use-cases/agentic-commerce',
    '/blueprints/buy-book-and-order',
    'agentic-commerce',
    'agentic-commerce-protocols',
    'agentic-commerce-for-merchants',
    'ai-agent-infrastructure-stack',
  ],
}
