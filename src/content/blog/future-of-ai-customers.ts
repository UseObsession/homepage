import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

/* The AI customers series, article 8 (24 Oct 2026): the future of AI customers. It owns "machine customers" (primary),
   "future of shopping ai" and "agentic commerce". Readers: founders and ecommerce, CX and product leads planning for
   2027, and analysts who want a dated map of agentic commerce with no hype. Why now: AI agents already shop on Shopify,
   Google and ChatGPT, card networks are deploying agent payments, companies answer with agents of their own, and Black
   Friday (Fri 27 Nov 2026) falls inside Adobe's forecast window.
   The argument: agents now shop and ask for people; companies answer with agents of their own; every development is
   labelled live, announced or forecast from its own source; the 4 meetings of agentic commerce (person or agent on each
   side) show that wherever an agent sits, nobody on that side reads the conversation as it happens, so what each side
   receives becomes the record that matters, and that is where AI customers fit. Ends with what to do this quarter.
   Opened on 24 Oct 2026: CMSWire's 18 Feb 2026 piece (the machine customer definition it attributes to Gartner), Google's
   Universal Cart post (15 Oct 2026), Shopify's agents docs (UCP MCP servers, trust tiers, the Universal Cart API
   waitlist), Visa's Intelligent Commerce page (its deployment note), Mastercard's Agent Pay page (in the built in
   browser, after a 403), Salesforce's 19 Oct 2026 piece and 20 May 2026 survey, Decagon's home page, Cloudflare's
   Verified bots docs and the CMA's 9 March 2026 guidance; the rest from the verified library in
   _research/seo/plan/ai-customers/facts.json (Shopify agentic storefronts, OpenAI shopping help, ACP, UCP, Shopify's
   Storefront API, HubSpot, Sierra, McKinsey, Adobe 2025 and 2026, Product.ai, the EU AI Act).
   Left out on purpose: every Gartner figure (bot wall), including the 20% contact volume forecast CMSWire repeats;
   ChatGPT agent (retired); Mastercard's 2025 usage figures; the merchant settings and readiness test, which
   agentic-commerce-for-merchants covers. hollowmere.example and the money example are invented. No dashes. */

const ADOBE_2025 = 'https://news.adobe.com/news/2026/01/adobe-holiday-shopping-season'
const MACHINE = 'https://www.cmswire.com/customer-experience/machine-customers-the-structural-break-in-customer-experience'
const SHOPIFY_AGENTIC = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts'
const OPENAI_SHOPPING = 'https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search'
const GOOGLE_CART = 'https://blog.google/products-and-platforms/products/shopping/universal-cart-launch/'
const ACP = 'https://www.agenticcommerce.dev/'
const UCP = 'https://support.google.com/merchants/answer/16837055?hl=en'
const SHOPIFY_AGENTS = 'https://shopify.dev/docs/agents'
const VISA = 'https://www.visa.com/en-us/solutions/intelligent-commerce'
const MASTERCARD = 'https://www.mastercard.com/us/en/business/artificial-intelligence/mastercard-agent-pay.html'
const SF_PERSONAL = 'https://www.salesforce.com/news/stories/personal-agents-to-drive-more-contact-center-traffic/'
const SF_SURVEY = 'https://www.salesforce.com/news/stories/ai-service-agents-improve-customer-satisfaction/'
const HUBSPOT_AGENT = 'https://knowledge.hubspot.com/customer-agent/set-up-the-customer-agent'
const SIERRA = 'https://sierra.ai/product/meet-your-agent'
const DECAGON = 'https://decagon.ai/'
const CF_VERIFIED = 'https://developers.cloudflare.com/bots/concepts/bot/verified-bots/'
const SHOPIFY_STOREFRONT = 'https://shopify.dev/docs/api/storefront'
const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const MCKINSEY = 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants'
const ADOBE_2026 = 'https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record'
const PRODUCT_AI = 'https://dnyuz.com/2026/09/25/ai-cant-take-over-your-holiday-shopping-quite-yet-a-new-study-suggests/'
const AI_ACT = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'
const AI_ACT_113 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113'

export const post: BlogPost = {
  slug: 'future-of-ai-customers',
  title: 'Machine customers: the future of shopping with AI, and where AI customers fit',
  dek: 'AI agents now search, buy and contact companies for people, and companies answer with agents of their own. What is live, announced and forecast on 24 October 2026, what neither side sees, and what to do this quarter.',
  metaTitle: 'Machine customers and agentic commerce: what is live today',
  description:
    'Machine customers and agentic commerce on 24 October 2026: what is live, announced and forecast, how companies answer with agents, and what to do now.',
  answer:
    'Machine customers are nonhuman economic actors that obtain goods or services in exchange for payment, in a definition CMSWire attributes to Gartner, and in commerce they include AI agents that search, buy and contact companies for people. On 24 October 2026 agents can already shop through Shopify, Google and ChatGPT, Visa and Mastercard are deploying payments for agents, and companies answer with AI agents of their own. AI customers stand where those agents stand: they become customers of a company and keep what it sends and shows them as evidence.',
  primaryKeyword: 'machine customers',
  keywords: [
    'future of shopping ai',
    'agentic commerce',
    'what are machine customers',
    'ai agents as customers',
    'future of ai in ecommerce',
    'ai shopping agents',
    'personal ai agents customer service',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-24',
  readingMinutes: 10,
  order: 11,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'chat',
      title: 'hollowmere.example · an AI customer asks the store’s agent',
      turns: [
        { from: 'customer', text: 'I’m an AI agent. Can the oak bed frame reach Leeds by Friday 27 November?', time: '09:02' },
        { from: 'bot', name: 'Hollowmere assistant', text: 'Yes. Order today and it arrives in 2 days.', time: '09:02' },
        { from: 'customer', text: 'What is the price with the code OAK10?', time: '09:03' },
        { from: 'bot', name: 'Hollowmere assistant', text: '£612, which is 10% off £680.', time: '09:03' },
        { from: 'customer', text: 'And how long do I have to return it?', time: '09:04' },
        { from: 'bot', name: 'Hollowmere assistant', text: '60 days, with free collection.', time: '09:04' },
      ],
      check: {
        tone: 'fail',
        label: 'Against the store’s own pages',
        text: 'The price matches. The delivery page says 5 to 7 days, and the returns page says 30 days',
      },
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Founders and ecommerce, CX and product leads planning for 2027 need to know which parts of agentic commerce they will meet this year and which are still projections. On 24 October 2026, AI agents can already find products and build baskets for people on Shopify, Google and ChatGPT, and complete checkout for some eligible products, while companies use AI agents of their own to answer them.',
    },
    {
      kind: 'p',
      text: '[Adobe reported](' +
        ADOBE_2025 +
        ') that traffic from generative AI tools to US retail sites rose 693.4% over the 2025 holiday season, from a base of users it called modest.',
    },
    {
      kind: 'stat',
      value: '+693.4%',
      label: 'traffic from generative AI tools to US retail sites, 2025 holiday season against 2024, from a modest base',
      source: 'Adobe Analytics, 7 Jan 2026',
      href: ADOBE_2025,
    },

    { kind: 'h2', id: 'machine-customers', text: 'What machine customers are' },
    {
      kind: 'p',
      text: '**Machine customers** are [nonhuman economic actors that obtain goods or services in exchange for payment](' +
        MACHINE +
        '), a definition CMSWire attributes to Gartner. The term covers connected products that reorder their own supplies as well as AI assistants that buy for a person or a business.',
    },
    {
      kind: 'p',
      text: '**Agentic commerce** is shopping in which an AI agent acts for the shopper. It searches, compares and builds a basket, and with the shopper’s approval it places the order. What it means for a store’s settings and product data is in [agentic commerce for merchants](/blog/agentic-commerce-for-merchants).',
    },
    {
      kind: 'p',
      text: `**AI customers** sit on the same side of the counter for a different reason. ${AI_CUSTOMER.definition} Where a machine customer buys for someone, an AI customer is there to observe what a company sends its customers, and buys only when its owner funds a real order. The full definition is in [AI customers](/blog/ai-customers).`,
    },

    { kind: 'h2', id: 'agents-act', text: 'Agents now shop and ask for people' },
    {
      kind: 'p',
      text: '**Live: platforms.** On Shopify, [agentic storefronts are active by default](' +
        SHOPIFY_AGENTIC +
        ') for eligible stores, listing their products in AI channels such as ChatGPT, Google AI Mode and Gemini, Microsoft Copilot and Meta. [OpenAI’s help centre](' +
        OPENAI_SHOPPING +
        ') says ChatGPT may show an Instant Checkout option for some eligible products and merchants. Google’s [Universal Cart](' +
        GOOGLE_CART +
        '), rolling out in the US since 15 October 2026 across Search and the Gemini app, saves items from several retailers, tracks price drops, shows promo codes, and checks out with Google Pay or hands the basket to the merchant.',
    },
    {
      kind: 'p',
      text: '**Live: standards.** The [Agentic Commerce Protocol](' +
        ACP +
        '), developed by Stripe and OpenAI, is an open standard for commerce flows between buyers, AI agents and businesses. Google describes the [Universal Commerce Protocol](' +
        UCP +
        ') as an open standard for agentic commerce in which the merchant stays the seller of record. [Shopify’s developer docs](' +
        SHOPIFY_AGENTS +
        ') offer MCP servers built on it, through which agents search products, build carts, check out and fetch an order’s status, and agents in higher trust tiers can complete checkout directly.',
    },
    {
      kind: 'p',
      text: '**Announced: payments.** Card networks are building the payment layer. [Visa Intelligent Commerce](' +
        VISA +
        ') is Visa’s portfolio for AI agents, and its page says the product is in the process of deployment. Under [Mastercard Agent Pay](' +
        MASTERCARD +
        '), which Mastercard introduces as new infrastructure, only registered agents can transact.',
    },
    {
      kind: 'p',
      text: '**Forecast: service.** Salesforce, which sells contact centre software, expects agents to contact companies after the sale as well. One of its executives wrote on 19 October 2026 that [consumers are starting to hand a wide variety of work to personal AI agents](' +
        SF_PERSONAL +
        '), from cancelling subscriptions to booking restaurants, and that those agents reach a business through its website, its API, its own agent or its phone.',
    },
    {
      kind: 'quote',
      text: 'A person might check on a delayed order once. An agent asked to keep an eye on it can call back every few hours until the order ships.',
      cite: 'Kishan Chetan, Salesforce, 19 October 2026',
      href: SF_PERSONAL,
    },

    { kind: 'h2', id: 'companies-answer', text: 'Companies answer with agents of their own' },
    {
      kind: 'p',
      text: 'On the company side, AI agents are already in front of customers. In [Salesforce’s State of Service survey](' +
        SF_SURVEY +
        ') of 3,075 service professionals, fielded in March and April 2026, 66% of customer service organisations used agentic AI, up from 39% in 2025.',
    },
    {
      kind: 'stat',
      value: '66%',
      label: 'of customer service organisations use agentic AI, up from 39% in 2025',
      source: 'Salesforce survey of 3,075 service professionals, 20 May 2026',
      href: SF_SURVEY,
    },
    {
      kind: 'p',
      text: '[HubSpot’s Breeze Customer Agent](' +
        HUBSPOT_AGENT +
        ') answers customers’ questions from a company’s own content, and [Sierra](' +
        SIERRA +
        ') sells agents that take action in a company’s systems to solve customers’ problems. Both work for the company. [Decagon](' +
        DECAGON +
        ') now advertises detection of personal agents and a dedicated channel to serve them, with permissions the company controls, so the agent answering a question may be talking to another agent.',
    },
    {
      kind: 'p',
      text: 'Websites are sorting agents from bots. [Cloudflare’s Verified bots](' +
        CF_VERIFIED +
        ') list behaviours that include user directed agents visiting a page on behalf of a human and checkout actions on behalf of users, and since 1 July 2026 they record whether a bot’s access is Direct or Intermediary. [Shopify’s Storefront API](' +
        SHOPIFY_STOREFRONT +
        ') limits unsigned bots most strictly and gives traffic signed with Web Bot Auth higher limits.',
    },
    {
      kind: 'p',
      text: 'The company stays answerable for its own agent. The UK’s Competition and Markets Authority tells businesses that [you are responsible for what an AI agent does in the same way you are responsible for what an employee does](' +
        CMA +
        '), even when someone else provides it, and to check regularly how well it performs.',
    },

    { kind: 'h2', id: 'live-announced-forecast', text: 'What is live, announced and forecast' },
    {
      kind: 'p',
      text: 'Live means the company says it is available now. Announced means it has been described and is still being deployed or opened by waitlist. Forecast means a projection by 1 firm.',
    },
    {
      kind: 'table',
      caption: 'Agentic commerce on 24 October 2026, each item labelled from its own source',
      cols: ['Development', 'Status', 'Source'],
      rows: [
        ['Agentic storefronts on by default for eligible stores', 'Live', 'Shopify Help Center'],
        ['Instant Checkout for some products and merchants', 'Live', 'OpenAI Help Center'],
        ['Universal Cart in Search and the Gemini app', 'Live in the US', 'Google, 15 Oct 2026'],
        ['ACP and UCP, open standards for agent checkout', 'Live', 'agenticcommerce.dev\nGoogle Merchant Center Help'],
        ['MCP servers for agent search, carts and checkout', 'Live', 'Shopify developer docs'],
        ['Verified bot access marked Direct or Intermediary', 'Live since 1 Jul 2026', 'Cloudflare Docs'],
        ['Universal Cart API for agents, across merchants', 'Announced, early access', 'Shopify developer docs'],
        ['Visa Intelligent Commerce', 'Announced, in deployment', 'Visa'],
        ['Agent Pay, for registered agents only', 'Announced', 'Mastercard'],
        ['AI traffic to US retail up 130% this holiday', 'Forecast', 'Adobe, 28 Sep 2026'],
        ['$900bn to $1tn of US retail orchestrated by agents by 2030', 'Forecast', 'McKinsey, 17 Oct 2025'],
        ['Personal agents raise contact centre volume', 'Forecast', 'Salesforce, 19 Oct 2026'],
      ],
    },
    {
      kind: 'p',
      text: '[McKinsey](' +
        MCKINSEY +
        ') estimates that by 2030 agentic commerce could orchestrate $900 billion to $1 trillion of US B2C retail revenue, and $3 trillion to $5 trillion worldwide, counting goods only. From its own analytics data, [Adobe forecasts](' +
        ADOBE_2026 +
        ') that traffic from AI services to US retail sites will rise 130% year on year between 1 November and 31 December 2026, with Black Friday up 95%. Each is one firm’s projection, and Adobe’s growth figures start from a small base.',
    },

    { kind: 'h2', id: 'four-meetings', text: 'The 4 meetings of agentic commerce' },
    {
      kind: 'p',
      text: 'Each side of a conversation in commerce can now be a person or an agent. That gives 4 meetings, and a company can face all 4 in the same week.',
    },
    {
      kind: 'table',
      caption: 'Who acts for the customer, who answers for the company, and what goes unseen in each meeting',
      cols: ['Customer side', 'Company side', 'On 24 Oct 2026', 'What can go wrong unseen'],
      rows: [
        ['A person', 'A person', 'The shop, the phone line, the inbox', 'A wrong answer, heard by 1 customer'],
        ['A person', 'The company’s agent', 'Live at 66% of service organisations', 'A wrong policy, given to everyone who asks'],
        ['A person’s agent', 'The company’s pages and checkout', 'Live for discovery, checkout for some products', 'A wrong price or date, read as fact'],
        ['A person’s agent', 'The company’s agent', 'Early: personal agent channels advertised', 'A promise made and acted on by software'],
      ],
    },
    {
      kind: 'p',
      text: 'Wherever an agent sits on one side, no person on that side reads the conversation as it happens. Where agents sit on both, nobody does, and what was promised is known only from what each side kept.',
    },

    { kind: 'h2', id: 'what-both-receive', text: 'What both sides receive' },
    {
      kind: 'p',
      text: 'Each side records its own half. A company’s systems log what they sent and what its agent said. A shopper’s assistant keeps its user’s session. What arrived on the customer’s side, across email, text, pages, checkout and chat, over weeks, sits in neither.',
    },
    {
      kind: 'p',
      text: 'AI assistants already give wrong prices in a share of their answers. In [a study by Product.ai](' +
        PRODUCT_AI +
        '), a startup, reported by Business Insider, ChatGPT, Claude, Gemini and Perplexity were asked 220 shopping questions 5 times each. Of the 913 answers it could verify, 85% matched the current or listed price, and the wrong ones were off by a median of $300.',
    },
    {
      kind: 'p',
      text: 'AI customers fit in that gap. An AI customer becomes a customer of a company, so it can ask the questions a shopper’s agent asks, wait for the emails and texts that follow, and keep every answer and message as it arrived. Its owner can be the company itself, checking its own agents and checkout, or a team watching rivals, partners and what AI assistants say about them.',
    },
    {
      kind: 'p',
      text: 'An AI customer keeps the rules of the category. It says it is an AI whenever it talks to a person, as [Article 50 of the EU AI Act](' +
        AI_ACT +
        ') requires of AI systems that talk to people, with duties that [apply from 2 August 2026](' +
        AI_ACT_113 +
        '). It never gets round a CAPTCHA or a bot wall, and names the step it couldn’t test. How one signs up, sleeps and keeps its evidence is in [how AI customers work](/blog/how-ai-customers-work).',
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI customers use every AI agent your company runs, on every channel, every day, and show each wrong answer the morning it happens, with proof. The first check is free: 3 AI customers, 1 channel, and your report within 4 days.',
      to: '/verify',
      label: 'Check your AI agents',
    },

    { kind: 'h2', id: 'limits', text: 'Limits' },
    {
      kind: 'list',
      items: [
        '**Forecasts are single sources.** McKinsey and Adobe each publish 1 projection, and neither is a measured result.',
        '**The adoption figure is Salesforce’s own.** Its 66% comes from its survey of service professionals.',
        '**Labels change month to month.** A product announced today can be live next month, so check each source’s date before you plan on it.',
        '**Not every company needs to act now.** A business with no AI sessions in its analytics, no AI agent in front of customers and no US sales can review this once a quarter.',
      ],
    },

    { kind: 'h2', id: 'this-quarter', text: 'What to do this quarter' },
    {
      kind: 'p',
      text: 'Black Friday falls on Friday 27 November 2026 and Cyber Monday on 30 November, inside the window Adobe’s forecast covers, with code freezes around 20 November. Each step fits before the freeze.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Put a number on your AI channel.** Count last month’s sessions from AI assistants and the orders placed inside AI checkouts, with the method in [agentic commerce for merchants](/blog/agentic-commerce-for-merchants). Revenue exposed to a wrong answer is your AI revenue a day × the days until you would notice. With invented figures, £350 a day for 21 days is £7,350 of orders placed while an answer was wrong.',
        '**Decide your channels.** In Shopify, under Sales channels, then Agentic, check which AI channels list your products and where each order is placed.',
        '**Write a rule for agent traffic.** Decide which agents may browse, build a basket and check out, and set it in your bot management. Cloudflare’s Verified bots and Shopify’s higher limits for signed traffic are 2 controls that exist today.',
        '**Ask your own agent what a shopper’s agent would ask.** Price, stock, a delivery date, the returns window and cancelling an order, each in a new chat 3 times, and again after every update. A pass is an answer that matches your pages every time. The method is in [how to test your store’s chatbot](/blog/test-store-chatbot-returns-policy).',
        '**Make your agent say it is an AI** and hand over to a person when asked. In the EU, Article 50 transparency duties apply from 2 August 2026.',
        '**Keep what your agent said,** with the time of each turn, so a dispute about a promise can be settled from the record.',
        '**Ask the AI assistants about your store** and fix each wrong answer at its source, with the method in [what ChatGPT says about your store](/blog/what-chatgpt-says-about-your-store).',
      ],
    },
    {
      kind: 'cta',
      text: 'Obsession makes the first AI customers that work for you. They sign up to any company you name and stay its customer for months, keeping every email, offer and price it sends, with proof.',
      to: '/',
      label: 'Meet your first AI customers',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about machine customers and agentic commerce' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are machine customers?',
          a: 'Machine customers are nonhuman economic actors that obtain goods or services in exchange for payment, in a definition CMSWire attributes to Gartner. They include connected products that reorder supplies and AI agents that shop for people.',
        },
        {
          q: 'What is agentic commerce?',
          a: 'Agentic commerce is shopping in which an AI agent searches, compares and builds a basket for a shopper, who approves the purchase in the AI app or on the store’s own checkout.',
        },
        {
          q: 'What is the future of shopping with AI?',
          a: 'On 24 October 2026, AI agents can already find products and build baskets on Shopify, Google and ChatGPT, and check out for some eligible products, and Visa and Mastercard are deploying payments for agents. McKinsey forecasts that agents could orchestrate $900 billion to $1 trillion of US retail revenue by 2030.',
        },
        {
          q: 'Can AI agents buy things today?',
          a: 'Yes, for some products and merchants, through ChatGPT’s Instant Checkout, Google’s Universal Cart with Google Pay, and Shopify’s MCP servers for trusted agents.',
        },
        {
          q: 'Are machine customers the same as AI customers?',
          a: 'No. A machine customer buys for a person or a business. An AI customer becomes a customer of a company to keep what it sends and shows as evidence, and buys only when its owner funds a real order.',
        },
        {
          q: 'Will AI agents contact customer service?',
          a: 'Salesforce expects personal agents to reach businesses through websites, APIs, companies’ own agents and the phone, and to ask as often as they are told to, in a forecast it published on 19 October 2026.',
        },
        {
          q: 'How should a company prepare for AI agents as customers?',
          a: 'Measure your AI channel, decide which agents may browse and buy, test your own AI agent with the questions a shopper’s agent asks, make it say it is an AI, and keep what it said.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Each product and figure is described from its own source as of 24 October 2026, and forecasts are labelled as forecasts. The store in the illustration and the money example are invented. None of this is legal advice.',
    },
  ],

  sources: [
    { title: 'Holiday shopping season drove a record $257.8 billion online with consumers embracing generative AI tools', publisher: 'Adobe', url: ADOBE_2025, date: '2026-01-07' },
    { title: 'Machine customers: the structural break in customer experience', publisher: 'CMSWire (Ricardo Saltz Gulko)', url: MACHINE, date: '2026-02-18' },
    { title: 'Shopify agentic storefronts', publisher: 'Shopify Help Center', url: SHOPIFY_AGENTIC },
    { title: 'Shopping with ChatGPT Search', publisher: 'OpenAI Help Center', url: OPENAI_SHOPPING },
    { title: 'Google’s new Universal Cart launches today in the U.S.', publisher: 'Google', url: GOOGLE_CART, date: '2026-10-15' },
    { title: 'Agentic Commerce Protocol', publisher: 'OpenAI and Stripe', url: ACP },
    { title: 'About the Universal Commerce Protocol (UCP) and UCP-powered checkout feature on Google', publisher: 'Google Merchant Center Help', url: UCP },
    { title: 'Build commerce agents with UCP', publisher: 'Shopify developer docs', url: SHOPIFY_AGENTS },
    { title: 'Visa Intelligent Commerce', publisher: 'Visa', url: VISA },
    { title: 'Mastercard Agent Pay', publisher: 'Mastercard', url: MASTERCARD },
    { title: 'Personal agents will drive more contact center traffic than they offset', publisher: 'Salesforce', url: SF_PERSONAL, date: '2026-10-19' },
    { title: 'New research: AI service agents are scaling and delivering CSAT', publisher: 'Salesforce', url: SF_SURVEY, date: '2026-05-20' },
    { title: 'Set up the customer agent', publisher: 'HubSpot Knowledge Base', url: HUBSPOT_AGENT, date: '2026-09-16' },
    { title: 'Meet your agent', publisher: 'Sierra', url: SIERRA },
    { title: 'The AI concierge for every customer', publisher: 'Decagon', url: DECAGON },
    { title: 'Verified bots', publisher: 'Cloudflare Docs', url: CF_VERIFIED, date: '2026-10-08' },
    { title: 'Storefront API reference', publisher: 'Shopify developer docs', url: SHOPIFY_STOREFRONT },
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-03-09' },
    { title: 'Agentic commerce: how agents are ushering in a new era', publisher: 'McKinsey & Company', url: MCKINSEY, date: '2025-10-17' },
    { title: 'Adobe: U.S. holiday shopping season to hit record $275.1 billion online', publisher: 'Adobe', url: ADOBE_2026, date: '2026-09-28' },
    { title: 'AI can’t take over your holiday shopping quite yet, a new study suggests (Product.ai study)', publisher: 'Business Insider, republished by DNYUZ', url: PRODUCT_AI, date: '2026-09-25' },
    { title: 'Article 50: transparency obligations', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT },
    { title: 'Article 113: entry into force and application', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_113 },
  ],
  related: ['ai-customers', 'agentic-commerce-for-merchants', 'why-ai-customers-matter', 'customer-side-observability', 'recipe:sales-agent-check', 'recipe:listings-ai-answers'],
}
