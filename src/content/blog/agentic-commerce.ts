import type { BlogPost } from './types'

/* Agentic commerce, the pillar (_research/seo/agentic-commerce-23nov/PLAN.md §3, article 1; ARTICLE_BRIEF.md row 1;
   Seun's yes, 23 Nov 2026). Primary "agentic commerce"; secondaries from Google suggestions (US and UK, 23 Nov:
   autocomplete_23nov.json): agentic commerce meaning, definition, examples, ai agents that buy online. Search Console,
   23 Nov: /blog/agentic-commerce-for-merchants had 1 impression in 90 days and no queries, so the head term moves here
   (the lead moves the owner rows; until then the gate flags the shared primary). Readers: teams building agents that buy
   (procurement, travel, finance software, consumer assistants) and anyone who typed the term; stores are sent to the
   merchant guide. Both sides on one page, the needs at each step of a purchase (find, check out, confirm, track, return),
   what is live on 23 Nov 2026, payments in brief (the protocols guide has the detail), where agents get stuck, and the
   stack with Obsession in its own layer, last. Every company is described from its own pages, read on 23 Nov 2026; the
   facts and the dates each was read are in notes_agentic-commerce.md beside the plan. Obsession's lines are the live
   site's (/agents, the Buy, book and order type page, /use-cases/agentic-commerce): pays only with the card it is given,
   stops before payment without one, says it's an
   AI. No competitor named; card networks, payment companies and AI platforms appear only for what they do. Brindle
   Clinics, its supplier and every figure in the illustrations are invented. British English, no dashes. */

const MCKINSEY = 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants'
const CHECKOUT_COM = 'https://www.checkout.com/newsroom/consumer-demand-for-ai-shopping-is-forming-fast-but-trust-for-agentic-commerce-is-still-catching-up'
const META_MUSE = 'https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/'
const STRIPE_MUSE = 'https://stripe.com/newsroom/news/stripe-helps-meta-muse-shop-with-link'
const AMAZON_ALEXA = 'https://www.aboutamazon.com/news/retail/alexa-for-shopping-ai-assistant'
const GOOGLE_CHECKOUT = 'https://blog.google/products-and-platforms/products/shopping/agentic-checkout-holiday-ai-shopping/'
const GOOGLE_UCP = 'https://blog.google/products-and-platforms/products/shopping/google-shopping-updates-holiday-shopping/'
const OPENAI_MERCHANTS = 'https://chatgpt.com/merchants/'
const SHOP_AGENTS = 'https://help.shop.app/en/shop/shopping/personal-agents'
const TC_WALMART = 'https://techcrunch.com/2026/10/21/while-amazon-blocks-ai-agents-walmart-rolls-out-the-welcome-mat/'
const GOOGLE_TRAVEL = 'https://blog.google/products-and-platforms/products/search/book-travel-ai-mode/'
const UCP = 'https://ucp.dev/'
const FORRESTER = 'https://www.forrester.com/press-newsroom/forresters-2027-b2b-go-to-market-predictions-ai-agents-will-influence-75-of-b2b-purchase-decisions/'
const AMAZON_BUSINESS = 'https://business.amazon.com/en/blog/end-to-end-procurement-launch'
const CLOUDFLARE = 'https://blog.cloudflare.com/secure-agentic-commerce/'
const VISA = 'https://www.visa.com/en-us/solutions/intelligent-commerce'
const MASTERCARD = 'https://www.mastercard.com/us/en/business/artificial-intelligence/mastercard-agent-pay.html'
const MASTERCARD_EU = 'https://newsroom.mastercard.com/news/europe/en/perspectives/en/2026/europe-is-building-the-foundations-for-trusted-agentic-commerce/'
const ACP = 'https://www.agenticcommerce.dev/'
const AP2 = 'https://ap2-protocol.org/'
const STRIPE_2025 = 'https://stripe.com/newsroom/news/stripe-2025-update'
const X402 = 'https://www.x402.org/'
const TC_BLOCKS = 'https://techcrunch.com/2026/10/06/the-next-hurdle-for-ai-agents-getting-websites-to-let-them-in/'
const ALLBIRDS = 'https://www.allbirds.com/agents.md'
const SIERRA = 'https://sierra.ai/blog/introducing-personal-agent-protocol'
const ADOBE = 'https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record'
const VISA_2025 = 'https://investor.visa.com/news/news-details/2025/Visa-and-Partners-Complete-Secure-AI-Transactions-Setting-the-Stage-for-Mainstream-Adoption-in-2026/'

export const post: BlogPost = {
  slug: 'agentic-commerce',
  title: 'Agentic commerce: how AI agents buy, book and order, and what they need',
  dek: 'What agentic commerce means, with the examples live on 23 November 2026, from Muse and Alexa to Google AI Mode, Walmart and Amazon Business. To buy on its own, an AI agent needs an identity, an inbox, a phone number, a browser, a card and a log of every order.',
  metaTitle: 'Agentic commerce: how AI agents buy, book and order (2026)',
  description:
    'Agentic commerce explained: how AI agents buy, book and order for shoppers and companies, what is live in November 2026, and what each buying agent needs.',
  answer:
    'Agentic commerce is buying in which an AI agent acts for a person or a company: it finds the product, checks out and tracks the order, while the person approves each purchase or sets a budget. It has two sides: agents that buy for shoppers and for procurement, travel and finance teams, and the stores and suppliers that sell to them. Obsession gives each buying agent an identity with its own inbox, phone number and browser, and keeps every order confirmation and receipt in one event log.',
  primaryKeyword: 'agentic commerce',
  keywords: [
    'agentic commerce meaning',
    'agentic commerce definition',
    'agentic commerce examples',
    'what is agentic commerce',
    'ai agents that buy online',
  ],
  category: 'Buy, book and order',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 12,
  order: 1,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'One reorder, from stock sheet to refund',
      who: 'Buying agent 2 · brindle.example',
      rows: [
        { time: 'Mon 06:00', text: 'Stock sheet: gloves under 20 cases', detail: 'Eastgate clinic, reorder level 20', tone: 'info' },
        { time: 'Mon 06:02', text: 'Compared 3 supplier sites', detail: 'Picked the contract price, $17.90 a case', tone: 'ok' },
        { time: 'Mon 06:04', text: 'Checked out with Brindle’s card', detail: '12 cases, $214.80, screenshot saved', tone: 'ok' },
        { time: 'Mon 06:04', text: 'Confirmation in the agent’s own inbox', detail: 'Order SO-88412', tone: 'ok' },
        { time: 'Wed 16:40', text: 'Delivery text to the agent’s number', detail: 'Arriving Friday by 12:00', tone: 'ok' },
        { time: 'Fri 11:31', text: 'Return started for 1 damaged case', detail: 'Label and refund notice by email', tone: 'info' },
        { time: 'Fri 11:32', text: 'Order, receipt, delivery and refund matched', tone: 'ok' },
      ],
      foot: 'Each step needs something the model lacks on its own: a browser, a card, an inbox, a number and a log.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Agentic commerce is buying in which an AI agent does the shopping: it finds what to buy, checks out, tracks the order and handles the return. A person approves each purchase or sets a budget. It matters to teams building agents that buy for shoppers, procurement, travel and finance, and to the stores and suppliers those agents buy from.',
    },
    {
      kind: 'p',
      text: '[McKinsey estimates](' +
        MCKINSEY +
        ') that by 2030 AI agents could orchestrate up to $1 trillion of US consumer retail revenue, and $3 trillion to $5 trillion worldwide. Those figures count goods alone, before services and business buying. The share today is small. In [Checkout.com’s research of 9 June 2026](' +
        CHECKOUT_COM +
        '), merchants in the UK and US said 3% of their transactions involve AI agents, and 89% said they are preparing for them.',
    },
    {
      kind: 'stat',
      value: '$3T to $5T',
      label: 'of global consumer commerce AI agents could orchestrate by 2030, counting goods alone, with up to $1 trillion in US retail',
      source: 'McKinsey, 17 Oct 2025',
      href: MCKINSEY,
    },

    { kind: 'h2', id: 'meaning', text: 'Agentic commerce: meaning and definition' },
    {
      kind: 'p',
      text: '**Agentic commerce** means an AI agent, software that plans and acts on its own, carries out a purchase for someone. It searches and compares, fills the basket, pays with a payment method it has been given, and follows the order to delivery. Three parts of a purchase change from ordinary ecommerce:',
    },
    {
      kind: 'list',
      items: [
        '**Who acts:** the agent reads the store’s pages or the tools the store publishes for agents, picks the product and completes the checkout. The person approves the purchase, or sets limits in advance, for example a weekly budget.',
        '**Who hears back:** order confirmations, sign-in codes, delivery texts and refund notices go to the email address and phone number the agent checked out with.',
        '**Who pays:** the agent pays with a card or a token it has been given, a stand-in for the card number. Card networks are building ways to recognise the agents allowed to pay, and wallets such as Link issue one-time cards for one approved purchase.',
      ],
    },
    {
      kind: 'art',
      caption: 'Agentic commerce has two sides: agents that buy for a shopper or a company, and the stores and suppliers that sell to them. The names are examples of each kind.',
      art: {
        kind: 'sides',
        title: 'Both sides of agentic commerce',
        rows: [
          {
            name: 'A shopper’s agent',
            who: 'Muse, Alexa, Gemini, agents linked to Shop',
            nodes: ['A shopper', 'Their AI agent', 'A store'],
            links: ['asks, approves', 'finds, pays, tracks'],
          },
          {
            name: 'A company’s buying agent',
            who: 'Procurement, travel, finance',
            nodes: ['A team', 'Buying agent', 'A supplier'],
            links: ['sets rules and a card', 'reorders, books'],
            lit: 1,
          },
          {
            name: 'The store’s side',
            who: 'Ecommerce, travel and supplier teams',
            nodes: ['A store', 'Its checkout', 'Agents that buy'],
            links: ['publishes', 'serves'],
          },
        ],
        foot: 'The same purchase, seen by the agent that buys and by the store that sells to it.',
      },
    },

    { kind: 'h2', id: 'examples', text: 'Agentic commerce examples live on 23 November 2026' },
    {
      kind: 'p',
      text: 'Each example links the company’s own announcement or help page, or the report that described it, and most run in the US first.',
    },
    { kind: 'h3', id: 'for-shoppers', text: 'Agents that shop for people' },
    {
      kind: 'list',
      items: [
        '**Meta’s Muse** [began rolling out in the US on 8 September 2026](' +
          META_MUSE +
          ') as a personal agent that books travel, fills in forms and shops, and checks with the person before a purchase. It pays through Link, Stripe’s wallet: [at more than 1 million businesses that accept Link](' +
          STRIPE_MUSE +
          ') it checks out at once, and elsewhere Link issues it a single-use card for the approved purchase.',
        '**Amazon’s Alexa for Shopping** includes [Buy for Me](' +
          AMAZON_ALEXA +
          '), which buys eligible products on other stores’ sites with the shopper’s main address and card. It also auto-buys an item once it reaches a set price. Amazon says Rufus helped over 300 million customers in 2025, and Alexa for Shopping is fully available in 13 countries.',
        '**Google** began rolling out [agentic checkout](' +
          GOOGLE_CHECKOUT +
          ') in the US on 13 November 2025, with eligible merchants. A shopper tracks an item, and once its price falls inside their budget, Google buys it on the merchant’s site with Google Pay after they confirm. In September 2026 Google said the Universal Commerce Protocol already [enables direct checkout for hundreds of thousands of brands and retailers](' +
          GOOGLE_UCP +
          ').',
        '**ChatGPT:** [OpenAI’s merchant page](' +
          OPENAI_MERCHANTS +
          ') says it is moving away from a standalone Instant Checkout. Shoppers discover and compare products in ChatGPT, then complete the purchase on the merchant’s own website or app.',
        '**Shop** lets personal agents such as Muse, Instinct and Claude Duet [prepare checkouts, place approved orders, reorder and track orders](' +
          SHOP_AGENTS +
          ') through a shopper’s Shop account. Instead of approving each order, a shopper can switch on Allow agent to pay for me and set a weekly, monthly or total budget.',
        '**Walmart** [announced an Agent Gateway](' +
          TC_WALMART +
          ') on 21 October 2026, through which approved agents search and buy. Its Agent Profiles, rolling out from November, let a customer approve each purchase or set a spending limit.',
      ],
    },
    { kind: 'h3', id: 'travel', text: 'Agents that book travel' },
    {
      kind: 'p',
      text: 'Since 27 August 2026, [hotel booking has been rolling out in Google’s AI Mode](' +
        GOOGLE_TRAVEL +
        ') in the US. Its partners include Booking.com, Expedia, Hilton, Marriott and IHG. The traveller confirms and pays with Google Pay, and the hotel or booking site stays the merchant of record. Flight prices are tracked across more than 300 airlines and travel sites, and tickets are bought on the airline’s or booking site’s own pages. The [Universal Commerce Protocol](' +
        UCP +
        ') names Amadeus, Booking.com, Expedia Group, Hilton, Marriott and Trip.com among its co-developers.',
    },
    { kind: 'h3', id: 'for-companies', text: 'Agents in company purchasing' },
    {
      kind: 'p',
      text: '[Forrester’s headline prediction for 2027](' +
        FORRESTER +
        ') is that AI agents will influence 75% of B2B purchase decisions, and it expects fully autonomous buying to stay with high-volume, low-risk, repeatable purchases. Those are the orders procurement teams place every week: gloves, cleaning supplies, spare parts, a routine trip rebooked. On 27 October 2026 [Amazon Business](' +
        AMAZON_BUSINESS +
        ') brought its AI-powered recommendations into e-procurement systems, with partners including Procurify and Lio. Those systems share each organisation’s purchasing policies, budgets and order history with Amazon Business, which recommends products inside the buyer’s own system and keeps to the rules the organisation has already set. The buyer still places the order.',
    },
    {
      kind: 'p',
      text: 'Finance teams meet agentic commerce at month end. Every order an agent places sends a confirmation, a receipt or invoice, delivery updates and sometimes a refund, to whichever email address and phone number the agent used. A team placing 50 orders a month can match them by hand. At 5,000 a month across 40 suppliers, every receipt that doesn’t reach the right place delays the close.',
    },

    { kind: 'h2', id: 'what-agents-need', text: 'What a buying agent needs at each step' },
    {
      kind: 'p',
      text: 'A purchase runs in 5 steps, and each needs something an AI model lacks on its own.',
    },
    {
      kind: 'table',
      caption: 'What an AI agent needs at each step of a purchase, and who provides it, as of 23 November 2026',
      cols: ['Step', 'What the agent does', 'What it needs', 'Who provides it today'],
      rows: [
        ['Find', 'Searches catalogs and pages, compares price and stock', 'A browser, or the store’s agent tools', 'Store catalogs and feeds\nUniversal Commerce Protocol\nCloud browsers'],
        ['Check out', 'Fills the basket, enters delivery details, pays', 'An identity the store accepts\nA card it may use', 'Card networks’ agent tokens\nWallets\nThe buyer’s own card'],
        ['Confirm', 'Receives the order confirmation and any sign-in code', 'Its own inbox and phone number', 'Agent inboxes and numbers, or a person’s own'],
        ['Track', 'Reads shipping emails and delivery texts', 'The same inbox and number, for days', 'Agent inboxes and numbers'],
        ['Return', 'Starts the return, keeps the label and refund notice', 'The browser, the inbox and the order’s history', 'Store return pages\nUniversal Commerce Protocol order updates'],
      ],
    },
    {
      kind: 'list',
      items: [
        '**An identity:** a name, an email address and a phone number a store can send to. It also needs a way to show it is an agent. [Web Bot Auth](/glossary/web-bot-auth), a signature that tells a website which company’s agent is visiting, is the agent authentication layer both Visa and Mastercard use, [according to Cloudflare](' +
          CLOUDFLARE +
          ').',
        '**An inbox:** for the order confirmation, the receipt, booking changes and sign-in links.',
        '**A phone number:** for one-time codes and delivery texts.',
        '**A browser:** for stores with no agent checkout, signed in only where the account is the buyer’s own.',
        '**A payment method it may use:** a company card, a virtual card or a card network’s token, within a budget.',
        '**A log of every order:** each page, confirmation, receipt and delivery update, dated and matched to its order. Finance can then close the month, and the team can see what each agent bought.',
      ],
    },

    { kind: 'h2', id: 'payments', text: 'How AI agents pay' },
    {
      kind: 'p',
      text: 'Card networks, payment companies and AI platforms each cover one part of an agent’s payment. Our [comparison of agentic commerce protocols](/blog/agentic-commerce-protocols) sets out who backs each one and what it covers.',
    },
    {
      kind: 'list',
      items: [
        '**Card networks:** [Visa Intelligent Commerce](' +
          VISA +
          ') includes a Trusted Agent Protocol that verifies agents and blocks malicious bots, and Visa says the product is still being deployed. Under [Mastercard Agent Pay](' +
          MASTERCARD +
          '), only registered agents can transact, using Mastercard network tokens. On 2 June 2026 [Mastercard said](' +
          MASTERCARD_EU +
          ') all its issuers in Europe were enabled for Agent Pay at network level.',
        '**Checkout protocols:** Stripe and OpenAI developed the [Agentic Commerce Protocol](' +
          ACP +
          ') (ACP), first used in ChatGPT. The Universal Commerce Protocol (UCP) lists Google, Shopify, Walmart, Amazon and Meta among its co-developers. It covers search, the cart and checkout, linking a buyer’s account, and order updates through delivery and returns.',
        '**Payment mandates:** Google’s [Agent Payments Protocol](' +
          AP2 +
          ') (AP2) records what the buyer authorised, starting with card payments, with wallets and digital currencies on its roadmap.',
        '**Tokens and one-time cards:** Stripe’s [Shared Payment Tokens](' +
          STRIPE_2025 +
          ') let an agent start a payment without seeing the card, and Link issues one-time cards for a single approved purchase.',
        '**Paying per request:** [x402](' +
          X402 +
          ') is an open standard for paying over the web, used mostly with stablecoins, digital currencies pegged to a currency such as the dollar. An agent can use it to pay for each call to a paid service.',
      ],
    },

    { kind: 'h2', id: 'where-agents-get-stuck', text: 'What buying agents need at the store' },
    {
      kind: 'p',
      text: 'Between the product page and the receipt, a store asks a buying agent for an account, a code, a card and an address, as it asks any customer.',
    },
    {
      kind: 'list',
      items: [
        '**Rules for agents:** each company sets its own. [TechCrunch reported on 6 October 2026](' +
          TC_BLOCKS +
          ') that Yelp takes non-human traffic through its paid data licensing programme. Shopify stores such as [Allbirds](' +
          ALLBIRDS +
          ') publish an agents.md file with rules for visiting agents. It asks them to mark their requests as agent-initiated, to sign hosted browsers with Web Bot Auth and to place orders only with the buyer’s authorisation.',
        '**Signing in:** Sierra and Meta published the [Personal Agent Protocol](' +
          SIERRA +
          ') on 6 October 2026, with Shopify, Stripe and Walmart among its partners. It sets out how a personal agent starts as a guest or signs in through OAuth, the standard way an app gets permission to an account. The customer chooses read-only or write access.',
        '**Sign-in codes:** a store that sends a one-time code by email or text needs an inbox or a number the agent can read.',
        '**Scattered receipts:** when agents check out with one shared mailbox, confirmations from every supplier land together with nothing tying each to its order.',
        '**Bank approval:** a bank’s extra step at payment, such as 3-D Secure, asks for the real buyer. A well-built agent pauses there and asks them.',
      ],
    },

    { kind: 'h2', id: 'stores', text: 'For stores: selling to AI agents' },
    {
      kind: 'p',
      text: '[Adobe forecasts](' +
        ADOBE +
        ') that AI traffic to US retail sites will rise 130% year on year between 1 November and 31 December 2026. In December 2025 [Visa predicted](' +
        VISA_2025 +
        ') that millions of consumers would use AI agents to complete purchases by this holiday season. Black Friday is Friday 27 November 2026.',
    },
    {
      kind: 'p',
      text: 'A store decides which AI channels show its products, whether agents can check out, and what its pages tell them. Our guide to [agentic commerce for merchants](/blog/agentic-commerce-for-merchants) covers the Shopify settings and a readiness test, and the [agent-ready website guide](/blog/agent-ready-website) covers when to block, allow or check an agent. Ecommerce teams can watch both measures that matter here, conversion from agent shoppers and failed agent checkouts, by shopping their own store the way an agent does each morning.',
    },

    { kind: 'h2', id: 'stack', text: 'Building agents that buy: the stack under them' },
    {
      kind: 'p',
      text: 'An agent that buys runs on 4 layers:',
    },
    {
      kind: 'list',
      items: [
        '**Decide:** the model and runtime that choose what to buy, inside your rules.',
        '**Pay:** cards, tokens and the protocols that carry them to the store.',
        '**Act:** the agent’s own identity, inbox, phone number and browser.',
        '**Keep:** a log that matches every order to its confirmation, receipt and delivery.',
      ],
    },
    {
      kind: 'p',
      text: 'Our guide to the [AI agent infrastructure stack](/blog/ai-agent-infrastructure-stack) sets out all 10 layers, such as memory, email and the sandbox. [Agentic commerce companies](/blog/agentic-commerce-companies) maps who builds each part of a purchase.',
    },
    {
      kind: 'p',
      text: 'Procurement teams judge a buying agent on stockouts, time per order and spend under contract. Travel managers judge it on policy compliance, cost per trip and time to book, and finance on receipts matched and days to close. Each can be watched from the first month, against the same measures before the agent.',
    },
    {
      kind: 'p',
      text: 'Obsession, the toolkit for AI agents, covers the act and keep layers: each buying agent gets a persona, one identity with its own inbox, phone number and cloud browser. It pays only with the card you give it, stops before payment without one, works within a monthly spend limit you set on its key, and says it’s an AI to a person. Every page, confirmation, receipt and delivery text lands in one event log on one bill, whether you run 1 agent or 10,000.',
    },
    {
      kind: 'cta',
      text: 'Give every buying agent its own identity, inbox, phone number and browser in one call. Each order confirmation reaches your webhook, the address where your code receives events, as it lands.',
      to: '/use-cases/agentic-commerce',
      label: 'Start free',
    },
    {
      kind: 'cta',
      text: 'Pick a blueprint and Obsession runs the job. The [supplier reorder agent](/blueprints/supplier-reorder-agent) reorders when stock runs low, the [travel booking agent](/blueprints/travel-booking-agent) books inside your policy, the [order and receipt ledger](/blueprints/order-receipt-ledger) matches every receipt, and the [agent checkout test](/blueprints/agent-checkout-test) shops your own store.',
      to: '/blueprints/buy-book-and-order',
      label: 'Browse blueprints',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about agentic commerce' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What does agentic commerce mean?',
          a: 'Agentic commerce means an AI agent carries out a purchase for a person or a company. It finds the product, checks out with a payment method it has been given and tracks the order to delivery, while the person approves each purchase or sets a budget.',
        },
        {
          q: 'What are examples of agentic commerce?',
          a: 'Meta’s Muse shops and books travel for people in the US and pays with Link. Amazon’s Buy for Me buys on other stores’ sites with the shopper’s address and card. Google can buy a tracked item once its price falls inside the shopper’s budget and the shopper confirms, and books hotels in AI Mode. Walmart lets approved agents search and buy through its Agent Gateway, and Amazon Business recommends products inside e-procurement systems.',
        },
        {
          q: 'Can AI agents buy online today?',
          a: 'Yes. Most ask the buyer to approve each purchase, and some let the buyer set a budget instead, such as Shop’s weekly, monthly or total budget. A bank’s extra step at payment waits for the real buyer.',
        },
        {
          q: 'How do AI agents pay?',
          a: 'With a payment method the buyer gives them. Card networks register the agents allowed to pay, and wallets such as Link issue one-time cards for one approved purchase. Protocols such as the Agentic Commerce Protocol and the Agent Payments Protocol pass the payment and the buyer’s authorisation to the store.',
          link: { label: 'Agentic commerce protocols compared', to: '/blog/agentic-commerce-protocols' },
        },
        {
          q: 'What does an AI agent need to buy from a store?',
          a: 'It needs an identity the store accepts, an email inbox for confirmations and receipts, and a phone number for sign-in codes and delivery texts. It also needs a browser for stores without an agent checkout, a payment method it may use, and a log that matches each order to its receipt and delivery.',
          link: { label: 'Agentic commerce infrastructure', to: '/use-cases/agentic-commerce' },
        },
        {
          q: 'How is agentic commerce different from ecommerce?',
          a: 'In ecommerce a person searches, clicks and pays on the store’s site. In agentic commerce an AI agent does those steps for them, through the store’s pages or its agent tools, and the store’s emails and texts go to the address and number the agent checked out with.',
        },
        {
          q: 'Which stores let AI agents buy?',
          a: 'Each store sets its own rules. Walmart lets approved agents in through its Agent Gateway, announced on 21 October 2026. Shopify stores ask agents to identify themselves with Web Bot Auth and to order only with the buyer’s authorisation.',
          link: { label: 'Agentic commerce for merchants', to: '/blog/agentic-commerce-for-merchants' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Sources and dates',
      text: 'Every company is described from its own announcement, help page or protocol site as it stood on 23 November 2026. Walmart’s Agent Gateway and Yelp’s data licensing programme come from TechCrunch’s reports of 6 and 21 October 2026. Forrester’s 75% figure is the headline of its 2027 predictions. McKinsey’s figures count goods alone. Brindle Clinics, its supplier and every figure in the opening illustration are invented.',
    },
  ],

  sources: [
    { title: 'The agentic commerce opportunity: How AI agents are ushering in a new era for consumers and merchants', publisher: 'McKinsey', url: MCKINSEY, date: '2025-10-17' },
    { title: 'Consumer demand for AI shopping is forming fast but trust for agentic commerce is still catching up', publisher: 'Checkout.com', url: CHECKOUT_COM, date: '2026-06-09' },
    { title: 'Introducing Muse, a personal AI agent', publisher: 'Meta', url: META_MUSE, date: '2026-09-08' },
    { title: 'Stripe helps Meta’s Muse shop with Link', publisher: 'Stripe', url: STRIPE_MUSE, date: '2026-09-08' },
    { title: 'Alexa for Shopping', publisher: 'Amazon', url: AMAZON_ALEXA, date: '2026-05-13' },
    { title: 'Google Shopping launches agentic checkout and more AI shopping tools', publisher: 'Google', url: GOOGLE_CHECKOUT, date: '2025-11-13' },
    { title: 'Boost your holiday sales with these agentic commerce updates', publisher: 'Google', url: GOOGLE_UCP, date: '2026-09-16' },
    { title: 'Power product discovery in ChatGPT', publisher: 'OpenAI', url: OPENAI_MERCHANTS },
    { title: 'Personal agents', publisher: 'Shop Help Center', url: SHOP_AGENTS },
    { title: 'While Amazon blocks AI agents, Walmart rolls out the welcome mat', publisher: 'TechCrunch', url: TC_WALMART, date: '2026-10-21' },
    { title: 'New ways to plan and book travel in Search', publisher: 'Google', url: GOOGLE_TRAVEL, date: '2026-08-27' },
    { title: 'Universal Commerce Protocol', publisher: 'UCP Authors', url: UCP, date: '2026' },
    { title: 'Forrester’s 2027 B2B go-to-market predictions: AI agents will influence 75% of B2B purchase decisions', publisher: 'Forrester', url: FORRESTER, date: '2026-10-21' },
    { title: 'Amazon Business AI procurement in e-procurement systems', publisher: 'Amazon Business', url: AMAZON_BUSINESS, date: '2026-10-27' },
    { title: 'Securing agentic commerce: helping AI agents transact with Visa and Mastercard', publisher: 'Cloudflare', url: CLOUDFLARE, date: '2025-10-24' },
    { title: 'Visa Intelligent Commerce', publisher: 'Visa', url: VISA },
    { title: 'Mastercard Agent Pay', publisher: 'Mastercard', url: MASTERCARD },
    { title: 'Europe is building the foundations for trusted agentic commerce', publisher: 'Mastercard', url: MASTERCARD_EU, date: '2026-06-02' },
    { title: 'Agentic Commerce Protocol', publisher: 'Stripe and OpenAI', url: ACP },
    { title: 'Agent Payments Protocol (AP2)', publisher: 'Google', url: AP2 },
    { title: 'Stripe’s 2025 annual letter', publisher: 'Stripe', url: STRIPE_2025, date: '2026-02-24' },
    { title: 'x402', publisher: 'x402 Foundation', url: X402, date: '2026-10-27' },
    { title: 'The next hurdle for AI agents: getting websites to let them in', publisher: 'TechCrunch', url: TC_BLOCKS, date: '2026-10-06' },
    { title: 'Agent instructions (agents.md)', publisher: 'Allbirds', url: ALLBIRDS },
    { title: 'Introducing Personal Agent Protocol', publisher: 'Sierra', url: SIERRA, date: '2026-10-06' },
    { title: 'Adobe forecasts U.S. holiday shopping season to hit a record $275.1 billion online', publisher: 'Adobe', url: ADOBE, date: '2026-09-28' },
    { title: 'Visa and partners complete secure AI transactions, setting the stage for mainstream adoption in 2026', publisher: 'Visa', url: VISA_2025, date: '2025-12-18' },
  ],

  related: [
    'recipe:supplier-reorder-agent',
    'recipe:travel-booking-agent',
    'recipe:order-receipt-ledger',
    'recipe:agent-checkout-test',
    '/use-cases/agentic-commerce',
    '/blueprints/buy-book-and-order',
    'agentic-commerce-protocols',
    'agentic-commerce-companies',
    'agentic-commerce-for-merchants',
    'ai-agent-infrastructure-stack',
  ],
}
