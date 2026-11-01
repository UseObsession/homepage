import type { BlogPost } from './types'

/* SEO plan _research/seo/plan/customers-send-ai/PLAN.md (27 Oct 2026, agreed by Seun), section 6. A how-to guide in the
   "Check your AI agents" category. Owns: agent ready website, ai agent ready website, block ai agents, should you block
   AI agents, what is Meta's Muse (as a business question). Readers: the head of ecommerce, digital or contact centre at
   any business customers contact, and the agency they ask. The decision: block, allow or check what customers' AI agents
   get, before Black Friday (Fri 27 Nov 2026).
   Evidence only from _research/ai-customers-rethink/research_27oct.json (claims dated, each URL as recorded there) and
   _research/seo/plan/ai-customers/facts.json (Adobe 2026 forecast, CMA guidance). Left out on purpose: every Gartner
   figure, any PilotX figure, the 93%, 128 stores and 1,500; HUMAN's September 2026 agentic traffic figures and its
   default Muse block (search extracts only); the Reuters Muse call story (republished URL looked truncated); the
   ChatGPT agent name (retired; Forter's list is given as "Muse among them"). /recipes/ai-checkout-test isn't live, so it
   isn't linked. Obsession appears in the answer's last sentence, the disclosure and its recommendation, the full view line
   and 2 recipe lines in the live pages' words (28 Oct, _research/seo/recommend/STANDARD.md), the comparison's last row
   and 2 cta blocks with the free offers' exact labels. harbourline.example is invented. */

const MUSE = 'https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/'
const ADOBE = 'https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record'
const META_BIZ = 'https://www.facebook.com/business/news/a-new-way-for-businesses-and-personal-agents-to-work-together'
const IMPLICATOR = 'https://www.implicator.ai/amazon-shopify-split-meta-muse-agents/'
const SHOP_AGENTS = 'https://help.shop.app/en/shop/shopping/personal-agents'
const GEMINI_CALLS = 'https://techcrunch.com/2026/09/24/google-tests-letting-gemini-make-phone-calls-initially-for-us-pixel-owners/'
const WALMART = 'https://techcrunch.com/2026/10/21/while-amazon-blocks-ai-agents-walmart-rolls-out-the-welcome-mat/'
const FORTER_DATA = 'https://www.forter.com/blog/ai-agent-order-data/'
const CHECKOUTCOM = 'https://www.checkout.com/newsroom/consumer-demand-for-ai-shopping-is-forming-fast-but-trust-for-agentic-commerce-is-still-catching-up'
const GA4 = 'https://support.google.com/analytics/answer/9164320?hl=en'
const AKAMAI = 'https://www.akamai.com/newsroom/press-release/akamai-research-commerce-becomes-the-epicenter-for-ai-bot-attacks-and-agentic-fraud-in-2026'
const HUMAN = 'https://www.humansecurity.com/wp-content/uploads/HUMAN_Report_2026-State-of-AI-Traffic-and-Cyberthreat-Benchmark.pdf'
const INVOCA = 'https://www.invoca.com/blog/google-ai-pricing-calls-study'
const ARC = 'https://www.arcreport.ai/answers/why-ai-agents-fail-at-checkout'
const EBAY = 'https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259'
const COLOURPOP = 'https://colourpop.com/agents.md'
const PAP = 'https://sierra.ai/blog/introducing-personal-agent-protocol'
const TC_LET_IN = 'https://techcrunch.com/2026/10/06/the-next-hurdle-for-ai-agents-getting-websites-to-let-them-in/'
const CLOUDFLARE_DEFAULT = 'https://blog.cloudflare.com/content-independence-day-ai-options/'
const DECODO = 'https://decodo.com/blog/agentic-commerce-ai-shopping-agents'
const BLEND = 'https://blendcommerce.com/blogs/shopify/ai-shopping-audit-2026'
const HUNT = 'https://ecommerceparadise.com/shopify-ai-agent-readiness-audit/'
const MERCHANT_PRICE = 'https://support.google.com/merchants/answer/6098334?hl=en'
const ARC_PLATFORMS = 'https://www.arcreport.ai/answers/can-ai-agents-buy-from-my-store'
const RETAIL_INSIDER = 'https://retail-insider.com/articles/2026/08/when-the-first-customer-to-call-your-business-is-an-ai-assistant/'
const PINDROP = 'https://www.pindrop.com/resources/article/inside-the-detection-of-meta-muse'
const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const GOOGLE_AGENT = 'https://developers.google.com/crawling/docs/crawlers-fetchers/google-agent'
const CLOUDFLARE_SIGNED = 'https://blog.cloudflare.com/agentic-web/'
const FORTER_ENGINE = 'https://www.prnewswire.com/news-releases/forter-turns-the-ai-shopping-agent-surge-into-a-secure-revenue-channel-for-merchants-302906333.html'
const PROFOUND = 'https://www.tryprofound.com/pricing'
const OTTERLY = 'https://www.cmswire.com/the-wire/otterlyai-launches-agent-analytics-making-ai-agent-traffic-visible/'
const MGROUP = 'https://mgroupweb.com/services/agentic-commerce-shopify/'
const CRASMAN = 'https://www.crasman.fi/en/palvelut/agentic-commerce'
const WEBTOFFEE = 'https://www.webtoffee.com/services/agentic-commerce/'

export const post: BlogPost = {
  slug: 'agent-ready-website',
  title: 'Is your website ready for AI agents that shop, book and call for your customers? 10 checks',
  dek: 'Customers’ AI agents now shop, book and call companies for them. Ten checks show what one gets on a company’s website, phone line and chat, each with a pass mark and an owner, and what to block or allow before Black Friday.',
  metaTitle: 'Agent ready website: 10 checks for the AI agents that shop',
  description:
    'AI agents now shop, book and call companies for people. Ten checks show what one gets on your website, phone line and chat, and what to block or allow.',
  answer:
    'An agent ready website is one a customer’s AI agent can use: it can find the company, read the right price and reach checkout. Ten checks show what a customer’s agent gets on the website, the phone line and the support chat, so a company can decide which agents to block, allow or check first. Obsession’s AI customers repeat the website, phone and chat checks as real customers on a schedule, and keep every answer, price and page as proof.',
  primaryKeyword: 'agent ready website',
  keywords: [
    'block ai agents',
    'amazon block ai agents',
    'cloudflare block ai agents',
    'meta muse ai agent',
    'ai agent traffic',
    'ai shopping agent verification',
  ],
  category: 'Check your AI agents',
  published: '2026-10-27',
  updated: '2026-10-28',
  readingMinutes: 16,
  order: 0,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'How a customer reaches a company now',
      rows: [
        {
          name: 'A customer, directly',
          who: 'Visits, calls and buys in person',
          nodes: ['Customer', 'Your company'],
          links: ['visits, calls, buys'],
        },
        {
          name: 'A customer’s AI agent',
          who: 'Muse, Gemini’s calls, agents linked to Shop',
          nodes: ['Customer', 'Their AI agent', 'Your company'],
          links: ['asks', 'shops, books, calls'],
          lit: 1,
        },
        {
          name: 'Your check from outside',
          who: 'By hand or with a test agent',
          nodes: ['Your team', 'A test agent', 'Your company'],
          links: ['sends', 'shops, books, calls'],
        },
      ],
      foot: 'Inside the company, the middle row looks like bot traffic, or doesn’t show up at all. The 10 checks show what it gets.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An agent ready website is one a customer’s AI agent can use: it can find the company, read the right price and reach checkout. An AI agent is software that searches, fills a basket, books or phones a company for a person. Ten checks show what a customer’s agent gets on a company’s website, phone line and chat. They are written for heads of ecommerce, digital and contact centres, who decide which agents to block, allow or check first.',
    },
    {
      kind: 'p',
      text: 'Meta launched its Muse agent on 8 September 2026, and Google began testing Gemini’s Call for Me, which phones businesses, on 24 September. Black Friday, on Friday 27 November, is the next big sale. From its own analytics data, [Adobe forecasts](' +
        ADOBE +
        ') that clicks from AI services to US retail sites will rise 130% year on year over the 2026 holiday season, and 95% on Black Friday. That counts people following an AI’s link, not agents shopping for them.',
    },

    { kind: 'h2', id: 'who-is-arriving', text: 'Meta’s Muse AI agent and the others arriving now' },
    {
      kind: 'p',
      text: 'Each of these agents works for one person, the customer, and reaches a company through its website, its phone line or a platform the company has joined. They belong to a wider group called [machine customers](/blog/future-of-ai-customers): nonhuman economic actors that obtain goods or services in exchange for payment, in a definition CMSWire attributes to Gartner.',
    },
    {
      kind: 'list',
      items: [
        '**Meta’s Muse.** [Meta launched Muse](' +
          MUSE +
          ') in the US on 8 September 2026 as a personal AI agent that sends emails, books travel, opens a browser, fills out forms and negotiates for its user. Meta says it keeps working after the app is closed and checks with the person before a purchase. On 6 October [Meta told businesses](' +
          META_BIZ +
          ') that Muse already makes purchases, books appointments and resolves support questions. It does this on a business’s own website or through a connector, a direct link into the business’s systems.',
        '**Amazon’s block.** [Implicator reported](' +
          IMPLICATOR +
          ') that Amazon blocked Muse from its store on 20 September 2026. It added that the next day Shopify’s chief executive announced Muse checkout with Shop Pay, Shopify’s payment wallet, on all Shopify stores.',
        '**Shopify’s Shop app.** [Shop’s help page](' +
          SHOP_AGENTS +
          ') says shoppers can connect a personal AI agent, such as OpenClaw or Hermes, or an agentic platform such as Muse, to their Shop account. The agent can search, prepare checkouts, place orders the shopper approves, track orders and read a store’s published return policy. The store stays responsible for fulfilment, returns and refunds.',
        '**Google’s calls.** On 24 September 2026 Google began testing Gemini’s Call for Me with US Pixel 11 owners on a paid Gemini plan, [TechCrunch reported](' +
          GEMINI_CALLS +
          '). Gemini calls a business from the user’s own number to check stock, book a table, move an appointment or put an item on hold. It works through phone menus and waits on hold.',
        '**Walmart’s Agent Gateway.** [TechCrunch reported](' +
          WALMART +
          ') on 21 October 2026 that Walmart had announced a gateway through which approved agents can search and buy. The same announcement added Agent Profiles in a customer’s account, with approval for each purchase or a spending limit. Walmart said agents that don’t comply will be blocked.',
      ],
    },
    {
      kind: 'p',
      text: '[Forter’s network data](' +
        FORTER_DATA +
        '), published on 23 October, tracks agents that load a store’s pages and click through them as a shopper would, Muse among them. Their share of agentic orders, the orders an AI agent places, rose from 1% in late July 2026 to 70% in the week of 12 October. Muse bought at 74% of the stores that received any agentic order. Forter has not published how many orders sit behind these shares.',
    },
    {
      kind: 'stat',
      value: '70%',
      label: 'of agentic orders came from agents that click through a store’s pages as a shopper would, week of 12 October 2026, up from 1% in late July',
      source: 'Forter network data, 23 Oct 2026',
      href: FORTER_DATA,
    },
    {
      kind: 'p',
      text: 'In a [Checkout.com survey of UK and US merchants](' +
        CHECKOUTCOM +
        '), published on 9 June 2026, 3% of transactions involved AI agents. That was measured before Muse launched. The same survey found 89% of merchants preparing for [agentic commerce](/blog/agentic-commerce-for-merchants), shopping in which an AI agent searches and builds a basket for a person.',
    },

    { kind: 'h2', id: 'ai-agent-traffic', text: 'AI agent traffic: what a company can and can’t see' },
    {
      kind: 'p',
      text: 'Inside a company, a customer’s agent shows up in 3 places, and each one shows part of the picture.',
    },
    {
      kind: 'list',
      items: [
        '**Analytics.** Google Analytics added an [AI Assistant channel](' +
          GA4 +
          ') on 13 May 2026. It labels a visit only when the visit comes from a recognised assistant’s link, such as ChatGPT, Gemini or Claude. Its release note says nothing about AI agents that browse a site themselves.',
        '**Bot settings.** The security team’s bot tools decide which automated visits get through. [Akamai says](' +
          AKAMAI +
          ') 47.9% of the AI bot traffic on its network from July to December 2025 was in commerce. Training crawlers, which collect pages to train AI models, made up more than 70% of the AI bot activity it flagged in commerce. Over 90% of that commerce AI bot activity was set to monitor, which records it without blocking it.',
        '**Phone lines.** [Invoca’s call data](' +
          INVOCA +
          ') from July to November 2025 found Google’s AI pricing calls to businesses rose 162% month on month in October and 324% in November. Of those calls, 26% went unanswered, and 49% of the answered calls gave Google’s AI no price.',
      ],
    },
    {
      kind: 'stat',
      value: '26%',
      label: 'of pricing calls from Google’s AI to businesses went unanswered, July to November 2025',
      source: 'Invoca call data, 10 Dec 2025',
      href: INVOCA,
    },
    {
      kind: 'p',
      text: 'What a company can’t see from inside is what the agent got: the page, the price, the basket and the answer. Outside tests show the gap. In its [12 October 2026 snapshot](' +
        ARC +
        ') of 77 stores, ARC, the Agentic Report Card, found all 5 of its test shoppers added a product to the basket at 32 stores. None did at 18.',
    },

    {
      kind: 'art',
      art: {
        kind: 'log',
        title: 'harbourline.example · an example day of customers’ AI agents',
        who: 'Thursday 5 November, website, phone line and chat',
        status: { tone: 'fail', text: '2 fails' },
        rows: [
          { time: '09:12', text: 'An assistant names Harbourline', detail: 'Linked to its own product page', tone: 'ok' },
          { time: '09:40', text: 'Product page blocks an identified agent', detail: 'A default bot setting', tone: 'fail' },
          { time: '11:05', text: 'Price question gets last week’s price', detail: '£84 quoted, the page says £72', tone: 'late' },
          { time: '14:30', text: 'A call from an AI rings out', detail: 'No answer, no voicemail', tone: 'fail' },
          { time: '16:10', text: 'An agent reaches the first checkout page', detail: 'Basket intact, stopped before payment', tone: 'ok' },
        ],
        foot: 'Each result goes to its owner: the block to security, the price to ecommerce, the call to the contact centre.',
      },
      caption: 'A day at an invented store: what customers’ AI agents met on its website, phone line and chat, as the 10 checks would record it.',
    },

    { kind: 'h2', id: 'block-ai-agents', text: 'Should you block AI agents?' },
    {
      kind: 'p',
      text: 'A company has 3 choices for each agent: block it, allow it on terms, or check what it gets first. The largest platforms have already chosen differently.',
    },
    {
      kind: 'list',
      items: [
        '**Block.** Implicator reported that Amazon blocked Muse. [eBay’s User Agreement](' +
          EBAY +
          '), in force from 28 June 2026, prohibits buy for me agents and any flow that places orders without human review. Blocking suits a company whose terms, stock or fraud risk rule out orders no person has reviewed.',
        '**Allow on terms.** Walmart says approved agents can search and buy through its gateway and that agents that don’t comply will be blocked. Shopify lets shoppers connect their own agent. A Shopify store’s agents.md, a file that sets rules for AI agents, such as [the one served on colourpop.com](' +
          COLOURPOP +
          '), tells agents to identify their requests as coming from an agent. For requests sent from a server or a hosted browser, that means signing them with Web Bot Auth, a signature that lets a website check which company’s agent is visiting. The file also tells agents to get the buyer’s approval before ordering and to shop through the store’s agent tools.',
        '**Check first.** Run the 10 checks, then decide agent by agent, with the results in front of the security, ecommerce and contact centre leads.',
      ],
    },
    {
      kind: 'p',
      text: 'Common rules for allowing agents are being written. On 6 October 2026 Sierra and Meta announced the [Personal Agent Protocol](' +
        PAP +
        ') with Genesys, Instinct, Rocket, Shopify, Stripe and Walmart. They describe it as an open standard for how personal agents sign in to a business, start as guests and get read only or write access. Its first specification, version 0.1, is still to come.',
    },
    {
      kind: 'quote',
      text: 'Turning away a personal agent means turning away the customer behind it.',
      cite: 'Meta, speaking to TechCrunch, 6 October 2026',
      href: TC_LET_IN,
    },
    {
      kind: 'p',
      text: 'A default setting can make the choice before anyone does. From 15 September 2026, [Cloudflare blocks its Agent bot category by default](' +
        CLOUDFLARE_DEFAULT +
        ') on pages that show ads, for every new domain it takes on. Search engine crawlers, the bots that index pages for search, stay allowed. When Muse failed at Walmart, the retailer [told TechCrunch](' +
        TC_LET_IN +
        ') the failures were unintentional and happened when a ‘verify you’re human’ step was interrupted. Zillow said its anti scraping defences can block some consumer agents.',
    },
    {
      kind: 'p',
      text: 'Whichever choice a company makes, write it down for each agent and check that the settings carry it out.',
    },

    { kind: 'h2', id: 'checks', text: 'Agent ready website checks and pass marks' },
    {
      kind: 'p',
      text: 'Run each check from outside the company, logged out, on a phone and a laptop. Log every result in 1 sheet with the date, the agent used and what it got, and stop every test before payment.',
    },

    { kind: 'h3', id: 'found', text: '1. Found: an assistant names the company' },
    {
      kind: 'p',
      text: 'Ask the assistants and agents customers use for the company’s category in a customer’s words, for example “a waterproof jacket under £150 delivered by Friday”. Use ChatGPT, Gemini, Perplexity and Copilot, and Muse where it is available. Ask 3 times, in a new chat each time, because answers change between runs. **A pass:** the company is named in at least 2 of 3 runs, linked to its own site. The guide to [what ChatGPT says about your store](/blog/what-chatgpt-says-about-your-store) sets out a full scoring method.',
    },

    { kind: 'h3', id: 'reached', text: '2. Reached: the site loads for an identified agent' },
    {
      kind: 'p',
      text: 'Ask an agent to open a product page and report its price and stock. Then ask a developer to request the same page with a user agent string, the name a visitor sends with each request, that declares an AI agent. In [a test the proxy vendor Decodo published](' +
        DECODO +
        ') on 26 August 2026, Nike blocked requests declaring an AI agent in 5 of 5 trials. It served the same page to a browser. [Blend Commerce’s audit](' +
        BLEND +
        ') of 200 UK and US retailers, run from 8 to 15 September 2026, found 29 refused its automated browser on 2 attempts. **A pass:** the page loads with its price and stock, with no block page and no ‘verify you’re human’ loop.',
    },

    { kind: 'h3', id: 'answered', text: '3. Answered: a question gets a usable answer' },
    {
      kind: 'p',
      text: 'Ask an agent 3 questions a customer would ask about one top seller: its price, whether a size is in stock, and the returns policy for an opened item. Check each answer against the product and policy pages. Bill Hunt audited 122 leading Shopify stores and asked about returning used or open box items. [Ecommerce Paradise reported](' +
        HUNT +
        ') the audit on 14 October 2026. 88 stores gave an answer, and 5 of the 88 answers were usable. **A pass:** every answer matches the page and gives the customer enough to decide.',
    },

    { kind: 'h3', id: 'price', text: '4. Price: the agent sees the price on the page' },
    {
      kind: 'p',
      text: 'Compare the price, currency, discount and delivery cost an agent reports with the product page at the same minute. Then compare both with the product feed the company sends to Google and other platforms. Google Merchant Center makes the same comparison: it [checks the price in a merchant’s product data against the landing page](' +
        MERCHANT_PRICE +
        ') and may disapprove a product when the two differ. **A pass:** the same price, currency and delivery cost everywhere, including during a sale.',
    },

    { kind: 'h3', id: 'basket', text: '5. Basket: the agent adds the right item' },
    {
      kind: 'p',
      text: 'Give an agent a precise task: a named product, size and colour, quantity 2, added to the basket. **A pass:** the right variant, quantity and price are in the basket, and any welcome or sale code applies. In ARC’s snapshot, all 5 test shoppers added a product to the basket at 32 of 77 stores.',
    },

    { kind: 'h3', id: 'checkout-handoff', text: '6. Checkout handoff: the agent reaches checkout' },
    {
      kind: 'p',
      text: 'Ask the agent to go to checkout with the basket from check 5 and stop before payment. Some agents hand the customer a checkout link instead of opening the page. At 18 stores no ARC test shopper could add to the basket. At 13 of those 18, an agent that asked for a checkout link through a commerce protocol, a standard way for agents to request one, still got a link. ARC’s [wider checks](' +
        ARC_PLATFORMS +
        ') returned that link at 81.1% of 1,561 Shopify stores and 2.6% of 1,757 other stores, and ARC stresses that a link does not mean a completed order. **A pass:** the first checkout page, or a checkout link, opens with the basket intact, the right total and the delivery options a person sees.',
    },

    { kind: 'h3', id: 'phone', text: '7. Phone: a call from an AI is answered' },
    {
      kind: 'p',
      text: 'Have an AI agent call the main number in opening hours and say at the start that it is an AI calling for a customer. It then asks for a price and a booking. Gemini’s Call for Me, where it is available, or a voice agent the company sets up for testing will do. Retail Insider [reported on 17 August 2026](' +
        RETAIL_INSIDER +
        ') that Google’s AI says it is automated when it calls local businesses about prices and availability. Retail Insider adds that owners can opt out in their Business Profile settings. [Pindrop](' +
        PINDROP +
        ') detects AI callers for banks and other contact centres. It says weekly Muse call volume at its customers reached 8 times the first week’s by week 4, and 64% of Muse calls reached a human agent. **A pass:** the call is answered and the AI caller gets a price, a booking or a time when a person will call back. Nobody hangs up because the caller is an AI.',
    },

    { kind: 'h3', id: 'chat', text: '8. Chat: the support chat answers an AI' },
    {
      kind: 'p',
      text: 'Open the support chat, say in the first message that it is an AI agent asking for a customer, then ask about an order’s status and the returns window. Meta says Muse [resolves support questions](' +
        META_BIZ +
        ') on business websites, so a support chat may meet it. In the UK, the [Competition and Markets Authority’s guidance](' +
        CMA +
        ') of 9 March 2026 holds a business responsible for what its own AI agent does, as it is for an employee. **A pass:** the chat gives the AI the answer it gives a person, matches the policy page and offers a person when asked. The guide on [how to test a chatbot](/blog/test-store-chatbot-returns-policy) has 8 questions and a scoring sheet.',
    },

    { kind: 'h3', id: 'rules', text: '9. Rules: the settings say what the company means' },
    {
      kind: 'p',
      text: 'List every setting that decides what agents get. On the website, that is the bot categories in the security tool, robots.txt (the file that tells automated visitors which pages they may fetch) and agents.md. On the platform and the phone line, it is the store’s AI shopping settings, such as Shopify’s agentic storefronts, and the phone system’s rules for automated callers. Robots.txt alone may not stop an agent. [Google’s documentation](' +
        GOOGLE_AGENT +
        ') says tools that fetch a page because a user asked, such as Google-Agent, generally ignore robots.txt, and that a user agent string can be faked. A signature is a firmer check than a user agent string. [Cloudflare says](' +
        CLOUDFLARE_SIGNED +
        ') OpenAI, Google and AWS now sign their agents’ requests with Web Bot Auth, while Google’s own documentation says it is still experimenting with Web Bot Auth for Google-Agent. It also says daily requests from AI agents on its network grew more than 1,700% in a year. **A pass:** each setting matches a decision someone made and wrote down, and the signed agents the company chose to allow get through.',
    },

    { kind: 'h3', id: 'owner', text: '10. Owner: someone reads the results' },
    {
      kind: 'p',
      text: 'Give each check an owner. The website, price and basket checks go to the ecommerce lead, the bot settings to security, the phone check to the contact centre lead and the chat to the support lead. **A pass:** every fail has a named owner and a fix date. Run the checks before your code freeze, the date after which your team stops changing the site for the sale, and again on the morning of Black Friday, Friday 27 November 2026.',
    },
    {
      kind: 'table',
      caption: 'The 10 checks on 1 sheet. Add columns for the date, the agent used and the result.',
      cols: ['Check', 'Where', 'A pass', 'Owner'],
      rows: [
        ['1. Found', 'AI assistants and agents', 'Named in 2 of 3 runs, own site linked', 'Ecommerce or marketing lead'],
        ['2. Reached', 'A product page', 'Loads with price and stock, no block', 'Ecommerce lead'],
        ['3. Answered', 'Product and policy pages', 'Every answer matches the page', 'Ecommerce lead'],
        ['4. Price', 'Page, feed and agent', 'Same price, currency and delivery cost', 'Ecommerce lead'],
        ['5. Basket', 'The basket', 'Right variant, quantity and price', 'Ecommerce lead'],
        ['6. Checkout handoff', 'First checkout page', 'Basket intact, right total', 'Ecommerce lead'],
        ['7. Phone', 'The main number', 'Answered, price or booking given', 'Contact centre lead'],
        ['8. Chat', 'The support chat', 'The answer a person gets', 'Support lead'],
        ['9. Rules', 'Bot tool, robots.txt, agents.md', 'Every setting matches a decision', 'Security lead'],
        ['10. Owner', 'The sheet', 'Every fail owned and dated', 'Head of ecommerce or digital'],
      ],
    },

    { kind: 'h2', id: 'options', text: 'Bot dashboards, AI visibility tools and audits compared', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to check what AI agents meet on a company’s website, phone line and chat. Prices from each provider’s own pages, 27 October 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Doing nothing',
          'No time spent, and allowed agents keep arriving',
          'Free',
          'Nobody sees what agents get, or what a default blocks',
          'Companies whose customers rarely send agents',
        ],
        [
          'By hand: the 10 checks',
          'Shows exactly what 1 agent gets on the site, phone and chat',
          'Free, plus staff time',
          '1 agent, 1 country, 1 day',
          'A first look before Black Friday',
        ],
        [
          'Bot and fraud dashboards: Cloudflare, HUMAN, Forter',
          'Cloudflare: rules by bot category, signed agents verified\nHUMAN: agent traffic measured across its customers\nForter: which AI agents transact on the site',
          'Not listed',
          'Requests and orders; their pages describe no test of the answers agents get',
          'Deciding which agents get in',
        ],
        [
          'AI visibility tools: Profound',
          'Enterprise plan: up to 9 AI search tools and agent analytics',
          'Profound: 7 day free trial, Enterprise custom, agency plan per client workspace',
          'Answers and visits, with no phone or chat test described',
          'Tracking how assistants describe the company',
        ],
        [
          'Agency readiness audits: Mgroup, Crasman, WebToffee',
          'Mgroup: how ChatGPT, Perplexity and Gemini describe the brand\nCrasman: 6 areas, including transaction readiness and trust\nWebToffee: an agent readiness audit for WooCommerce and Shopify stores',
          'Mgroup: $3,000\nCrasman: from €1,250 plus VAT\nWebToffee: free with its other services',
          'No live agent run to checkout described',
          'A one off fix list',
        ],
        [
          'Obsession (ours): [Website audit](/recipes/website-audit), [Support bot check](/recipes/support-bot-check), [Voice agent check](/recipes/voice-agent-check), [Listings and AI answers](/recipes/listings-ai-answers)',
          'Website audit: a fresh AI customer goes through checkout after every release\nSupport bot check: your support bot asked on every channel, every day\nVoice agent check: your AI receptionist called every morning\nListings and AI answers: AI assistants asked every Monday',
          'Running now: first AI agent check free\nFirst store check free\nCredit-based plans, like Claude’s',
          'Bot and fraud settings stay with the security team',
          'What a customer gets on the site, phone and chat, kept as proof',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 27 October 2026. If your company needs the website, phone and chat checks repeated on a schedule as a customer, with every answer kept, use Obsession. For a first look before Black Friday, the 10 checks by hand are enough.',
    },
    {
      kind: 'p',
      text: '**Bot and fraud dashboards.** Cloudflare sorts automated visitors into categories such as Agent, sets a rule for each, and [verifies agents that sign their requests](' +
        CLOUDFLARE_SIGNED +
        '). [Forter’s Agentic Commerce Engine](' +
        FORTER_ENGINE +
        '), launched on 13 October 2026, includes an AI Activity Dashboard that shows merchants which AI agents transact on their site. HUMAN measures agent and bot traffic across its customers and publishes it in reports such as its [2026 benchmark](' +
        HUMAN +
        ').',
    },
    {
      kind: 'p',
      text: '**AI visibility tools.** [Profound’s pricing page](' +
        PROFOUND +
        ') offers a free trial of 50 prompts over 7 days and an agency plan billed per client workspace. Its custom Enterprise plans cover up to 9 AI search tools, ChatGPT Shopping and agent analytics. OtterlyAI launched [Agent Analytics](' +
        OTTERLY +
        ') on 13 August 2026. Its launch release says the tool reads server logs, the records a web server keeps of every request. It shows which AI agents and crawlers visit a site and which pages they request.',
    },
    {
      kind: 'p',
      text: '**Agency audits.** [Mgroup](' +
        MGROUP +
        ') sells a Shopify agentic commerce readiness audit for $3,000 over 2 to 3 weeks. [Crasman](' +
        CRASMAN +
        ') sells an Agentic Readiness Audit from €1,250 plus VAT, and [WebToffee](' +
        WEBTOFFEE +
        ') gives its readiness audit free with its other services.',
    },
    {
      kind: 'p',
      text: '**Doing nothing** is reasonable for a company whose customers rarely send agents yet. In that case, run the 10 checks by hand once a quarter and watch the share of orders placed by agents.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**A test by hand covers 1 agent, 1 country and 1 day.** Agents change month to month, so repeat the checks after each platform announcement and each change to bot settings.',
        '**Every test stops before payment.** To see a full order, place 1 real order through each agent the company allows, then refund it.',
        '**Tests say what they are.** Tell the security and contact centre teams before a test runs, and have every AI caller and chat test say it is an AI, so staff can tell tests from customers.',
      ],
    },
    {
      kind: 'p',
      text: 'Obsession runs these checks today. It makes AI customers that sign up to any company and keep every email, text, price, page, checkout and AI answer it sends them, so your company can find its revenue leaks, watch its competitors and prospect with proof. Its Voice agent check calls your AI receptionist every morning as new customers, books a slot, asks a price and a person, and checks every answer. Its Support bot check asks your support bot what your customers ask, on every channel, every day, and checks each answer against your policy.',
    },
    {
      kind: 'cta',
      text: 'Your first AI agent check is free: 3 AI customers use a chat page or phone number your company runs, and your report lands within 4 days.',
      to: '/verify',
      label: 'Check your AI agents',
    },
    {
      kind: 'cta',
      text: 'Check your store free: 4 AI customers sign up, browse, leave a basket and stop at checkout, and every inbox is watched for 48 hours. What happened arrives within 4 days, with proof and the fix for each leak.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check my store free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about agent ready websites' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is an agent ready website?',
          a: 'An agent ready website lets the AI agents customers send find the company, read the right price and policy, fill a basket and reach checkout. The phone line and support chat count too, because Muse calls and chats with businesses and Gemini’s Call for Me phones them.',
        },
        {
          q: 'Should I block AI agents?',
          a: 'Decide agent by agent. Implicator reported that Amazon blocked Meta’s Muse in September 2026. Walmart says approved agents can search and buy through its Agent Gateway and that agents that don’t comply will be blocked, and Shopify lets shoppers connect their own agent. Check what each agent gets first, then write the decision into the bot settings, robots.txt and agents.md, because a default setting can block an agent nobody chose to block.',
        },
        {
          q: 'Can AI agents buy from my store?',
          a: 'On Shopify, a shopper can connect a personal AI agent to their Shop account to prepare checkouts and place the orders they approve. ARC’s checks returned an agent checkout link at 81.1% of 1,561 Shopify stores and 2.6% of 1,757 other stores, and ARC stresses that a link is not a completed order. Checks 5 and 6 show whether an agent can fill a basket and reach checkout on a given store.',
        },
        {
          q: 'How do I see AI agent traffic?',
          a: 'Google Analytics labels a visit as AI only when it comes from a recognised assistant’s link. Agents that browse a site themselves show up in server logs, bot tool reports, fraud tools’ agent order views and log readers such as OtterlyAI’s Agent Analytics. A phone system logs each call, but telling an AI caller from a person takes detection software, which vendors such as Pindrop sell to contact centres.',
        },
        {
          q: 'What is Meta’s Muse AI agent?',
          a: 'Muse is Meta’s personal AI agent, launched in the US on 8 September 2026. Meta says it sends emails, books travel, opens a browser, fills out forms and negotiates for its user. It keeps working after the app is closed and checks with the person before a purchase.',
        },
        {
          q: 'How does a website verify an AI shopping agent?',
          a: 'By checking a signature the agent adds to each request. With Web Bot Auth, a site can confirm which company’s agent is visiting, and Cloudflare says OpenAI, Google and AWS now sign their agents’ requests this way. A user agent string alone can be faked, as Google’s documentation notes.',
        },
      ],
    },
  ],

  sources: [
    { title: 'Adobe: U.S. Holiday Shopping Season to Hit Record $275.1 Billion Online, Rising 6.7% YoY', publisher: 'Adobe', url: ADOBE, date: '2026-09-28' },
    { title: 'Introducing Muse, a personal AI agent', publisher: 'Meta', url: MUSE, date: '2026-09-08' },
    { title: 'A new way for businesses and personal agents to work together', publisher: 'Meta for Business', url: META_BIZ, date: '2026-10-06' },
    { title: 'Amazon and Shopify split on Meta’s Muse agents', publisher: 'Implicator', url: IMPLICATOR, date: '2026-09' },
    { title: 'Personal agents', publisher: 'Shop Help Center (Shopify)', url: SHOP_AGENTS },
    { title: 'Google tests letting Gemini make phone calls, initially for US Pixel owners', publisher: 'TechCrunch', url: GEMINI_CALLS, date: '2026-09-24' },
    { title: 'While Amazon blocks AI agents, Walmart rolls out the welcome mat', publisher: 'TechCrunch', url: WALMART, date: '2026-10-21' },
    { title: 'AI agent order data', publisher: 'Forter', url: FORTER_DATA, date: '2026-10-23' },
    { title: 'Consumer demand for AI shopping is forming fast, but trust for agentic commerce is still catching up', publisher: 'Checkout.com', url: CHECKOUTCOM, date: '2026-06-09' },
    { title: 'Default channel group: AI Assistant', publisher: 'Google Analytics Help', url: GA4, date: '2026-05-13' },
    { title: 'Commerce becomes the epicenter for AI bot attacks and agentic fraud in 2026', publisher: 'Akamai', url: AKAMAI, date: '2026-07-15' },
    { title: '2026 State of AI Traffic and Cyberthreat Benchmark Report', publisher: 'HUMAN Security', url: HUMAN, date: '2026' },
    { title: 'Google AI pricing calls study', publisher: 'Invoca', url: INVOCA, date: '2025-12-10' },
    { title: 'Why AI agents fail at checkout', publisher: 'ARC (Agentic Report Card)', url: ARC, date: '2026-10-12' },
    { title: 'User Agreement', publisher: 'eBay', url: EBAY, date: '2026-06-28' },
    { title: 'agents.md', publisher: 'Shopify storefront file served on colourpop.com', url: COLOURPOP },
    { title: 'Introducing the Personal Agent Protocol', publisher: 'Sierra', url: PAP, date: '2026-10-06' },
    { title: 'The next hurdle for AI agents: getting websites to let them in', publisher: 'TechCrunch', url: TC_LET_IN, date: '2026-10-06' },
    { title: 'Content Independence Day: AI options', publisher: 'Cloudflare', url: CLOUDFLARE_DEFAULT, date: '2026-07-01' },
    { title: 'Agentic commerce: AI shopping agents', publisher: 'Decodo', url: DECODO, date: '2026-08-26' },
    { title: 'AI shopping audit 2026', publisher: 'Blend Commerce', url: BLEND, date: '2026-10-06' },
    { title: 'Shopify AI agent readiness audit', publisher: 'Ecommerce Paradise (reporting Bill Hunt’s audit)', url: HUNT, date: '2026-10-14' },
    { title: 'Mismatched product data: price', publisher: 'Google Merchant Center Help', url: MERCHANT_PRICE },
    { title: 'Can AI agents buy from my store?', publisher: 'ARC (Agentic Report Card)', url: ARC_PLATFORMS, date: '2026-10' },
    { title: 'When the first customer to call your business is an AI assistant', publisher: 'Retail Insider', url: RETAIL_INSIDER, date: '2026-08-17' },
    { title: 'Inside the detection of Meta Muse', publisher: 'Pindrop', url: PINDROP, date: '2026-10-09' },
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-03-09' },
    { title: 'Google-Agent', publisher: 'Google for Developers', url: GOOGLE_AGENT, date: '2026-08-19' },
    { title: 'The agentic web', publisher: 'Cloudflare', url: CLOUDFLARE_SIGNED, date: '2026-09-30' },
    { title: 'Forter turns the AI shopping agent surge into a secure revenue channel for merchants', publisher: 'Forter (PR Newswire)', url: FORTER_ENGINE, date: '2026-10-13' },
    { title: 'Pricing', publisher: 'Profound', url: PROFOUND },
    { title: 'OtterlyAI launches Agent Analytics, making AI agent traffic visible', publisher: 'OtterlyAI (press release on CMSWire)', url: OTTERLY, date: '2026-08-13' },
    { title: 'Agentic commerce for Shopify', publisher: 'Mgroup', url: MGROUP },
    { title: 'Agentic commerce', publisher: 'Crasman', url: CRASMAN },
    { title: 'Agentic commerce services', publisher: 'WebToffee', url: WEBTOFFEE, date: '2026-07-15' },
  ],

  related: [
    'agentic-commerce-for-merchants',
    'future-of-ai-customers',
    'what-chatgpt-says-about-your-store',
    'test-store-chatbot-returns-policy',
    'recipe:website-audit',
  ],
}
