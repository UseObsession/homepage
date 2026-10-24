import type { BlogPost } from './types'

/* Wave 2, article 1 (keyword plan _research/seo/plan/wave2/keyword_plan.md, 23 Oct 2026): agentic commerce, for
   merchants. Readers: Shopify and DTC store founders, heads of ecommerce and growth, and the CRO and retention
   agencies they ask. Why now: Shopify switched agentic storefronts on by default for eligible stores, Google launched
   Universal Cart on 15 Oct 2026, OpenAI moved Instant Checkout to apps in March 2026, and Adobe forecasts AI referred
   retail traffic up 130% this holiday season; "ChatGPT shopping" searches peaked in Black Friday week 2025.
   The gap it fills (library content_gaps): explainers describe protocols and readiness checkers score static signals;
   this gives the reader a test they run themselves, asking the assistants, checking the data agents read and walking
   an agent from search to the checkout handoff.
   Read at the source on 23 Oct 2026: Shopify Help (agentic storefronts, managing, Catalog, ChatGPT, Google, Copilot,
   Meta pages), shopify.dev (agents, Storefront API bot section), OpenAI's shopping help page and crawler page, ChatGPT
   agent help, agenticcommerce.dev, ucp.dev, Google Merchant Center UCP help, Google's blog (13 Nov 2025, 16 Sep 2026,
   15 Oct 2026), Google Pay agentic checkout help, Gemini in Chrome help, Google Search Central AI features page,
   ap2-protocol.org, Stripe's agentic commerce docs, paypal.ai, Visa and Mastercard product pages, Amazon's Shop Direct
   post, Perplexity's blog and help centre, Perplexity's crawler page, Adobe's 28 Sep release, Digital Commerce 360
   (6 Mar 2026), DNYUZ's republication of Business Insider on Product.ai, a transcript of Shopify's Q2 2026 call, and
   the pricing or product pages of Profound, Peec AI, Otterly.AI, Ahrefs Brand Radar, Shopify's readiness check and
   Colter. Agent files (/agents.md, /.well-known/ucp, robots.txt) were opened on 3 Shopify stores, not named.
   Trends figures are from the plan (Google Trends, US, 23 Oct 2026).
   Left out on purpose: Shopify's 13 Oct 2026 Shop agent connection (secondary source only), HUMAN Security's agent
   traffic figures (release returned 403), forum quotes (Reddit can't be reopened), any PilotX audit figure, the 93%
   and 128 stores, the $410 lamp. The store in both illustrations, larkfield.example, is invented. */

const SHOPIFY_HELP = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts'
const ADOBE = 'https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record'
const ACP = 'https://www.agenticcommerce.dev/'
const UCP = 'https://ucp.dev/'
const AP2 = 'https://ap2-protocol.org/'
const TRENDS_AC = 'https://trends.google.com/trends/explore?date=today%2012-m&geo=US&q=agentic%20commerce'
const TRENDS_CS = 'https://trends.google.com/trends/explore?date=today%2012-m&geo=US&q=chatgpt%20shopping'
const SHOPIFY_Q2 = 'https://transcripts.platformaeronaut.com/transcripts/SHOP-2Q26-transcript'
const SHOPIFY_GOOGLE = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/google'
const SHOPIFY_PRODUCTS = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/products'
const OPENAI_SHOPPING = 'https://help.openai.com/en/articles/11128490'
const SHOPIFY_DEV = 'https://shopify.dev/docs/agents'
const DC360 = 'https://www.digitalcommerce360.com/2026/03/06/openai-shifts-checkout-plans-agentic-commerce-strategy/'
const SHOPIFY_CHATGPT = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/chatgpt'
const GOOGLE_UCP = 'https://support.google.com/merchants/answer/16837055?hl=en'
const GOOGLE_SEPT = 'https://blog.google/products-and-platforms/products/shopping/google-shopping-updates-holiday-shopping/'
const GOOGLE_CART = 'https://blog.google/products-and-platforms/products/shopping/universal-cart-launch/'
const GOOGLE_NOV = 'https://blog.google/products-and-platforms/products/shopping/agentic-checkout-holiday-ai-shopping/'
const GPAY = 'https://support.google.com/googlepay/answer/16421147?hl=en'
const SHOPIFY_COPILOT = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/microsoft'
const SHOPIFY_META = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/meta'
const PERPLEXITY = 'https://www.perplexity.ai/hub/blog/shopping-that-puts-you-first'
const PERPLEXITY_HELP = 'https://www.perplexity.ai/help-center/en/articles/12932923-instant-buy-buy-with-paypal'
const AMAZON = 'https://www.aboutamazon.com/news/retail/amazon-shop-direct-external-stores'
const STRIPE = 'https://docs.stripe.com/agentic-commerce/sellers/use-cases/retail'
const PAYPAL = 'https://www.paypal.ai/'
const VISA = 'https://www.visa.com/en-us/solutions/intelligent-commerce'
const MASTERCARD = 'https://www.mastercard.com/us/en/business/artificial-intelligence/mastercard-agent-pay.html'
const SHOPIFY_BOTS = 'https://shopify.dev/docs/api/storefront'
const SHOPIFY_MANAGE = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/agentic-home'
const PRODUCT_AI = 'https://dnyuz.com/2026/09/25/ai-cant-take-over-your-holiday-shopping-quite-yet-a-new-study-suggests/'
const GOOGLE_FEATURES = 'https://developers.google.com/search/docs/appearance/ai-features'
const OPENAI_BOTS = 'https://developers.openai.com/api/docs/bots'
const PERPLEXITY_BOTS = 'https://docs.perplexity.ai/guides/bots'
const CHATGPT_CLOUD = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'
const GEMINI_CHROME = 'https://support.google.com/chrome/answer/16821166?hl=en'
const PROFOUND = 'https://www.tryprofound.com/pricing'
const PEEC = 'https://peec.ai/pricing'
const OTTERLY = 'https://otterly.ai/pricing'
const AHREFS = 'https://ahrefs.com/brand-radar'
const SHOPIFY_CHECK = 'https://www.shopify.com/agentic-readiness'
const COLTER = 'https://apps.shopify.com/colter'

export const post: BlogPost = {
  slug: 'agentic-commerce-for-merchants',
  title: 'Agentic commerce for merchants: what is live, and how to test your store',
  dek: 'What ChatGPT, Google AI Mode, Gemini, Copilot, Meta, Perplexity and Amazon let shoppers do on 23 October 2026, the Shopify settings that control it, and a readiness test you run yourself, doing what an AI agent does.',
  metaTitle: 'Agentic commerce for merchants: what’s live and how to test',
  description:
    'Agentic commerce for Shopify and DTC stores: what’s live in ChatGPT, Google AI Mode and Copilot, the settings to check, and a readiness test you run.',
  answer:
    'Agentic commerce is shopping in which an AI agent searches, compares and builds a basket for a shopper, who approves the purchase in the AI app or on the store’s own checkout. To check a store is ready, ask the main AI assistants your customers’ questions, check the product data and policies agents read, and walk an agent from search to the checkout handoff.',
  primaryKeyword: 'agentic commerce',
  keywords: [
    'agentic commerce for merchants',
    'what is agentic commerce',
    'how do ai shopping agents work',
    'agentic commerce readiness check',
    'agentic commerce protocol',
    'universal commerce protocol',
    'agentic checkout',
    'shopify agentic storefronts',
    'google ai mode shopping',
    'agentic commerce shopify',
  ],
  category: 'Check your AI agents',
  published: '2026-10-23',
  updated: '2026-10-24',
  readingMinutes: 13,
  order: 11,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'salescheck',
    workspace: 'company',
    art: {
      kind: 'flow',
      title: 'larkfield.example · an AI agent shops 1 product, from search to checkout',
      status: { tone: 'fail', text: '2 fails' },
      steps: [
        { label: 'Search', detail: 'Asked for a king linen duvet cover under $120. Named Larkfield at $96', tone: 'ok' },
        { label: 'Product', detail: 'Read $96, sage, in stock from the catalog. Matches the page', tone: 'ok' },
        { label: 'Delivery', detail: 'Told the shopper 2 days. The shipping policy says 3 to 5', tone: 'fail' },
        { label: 'Basket', detail: 'Added the king in sage. The code LARK10 was refused', tone: 'fail' },
        { label: 'Checkout', detail: 'Handed the shopper to the store’s checkout, basket kept. Stopped before payment', tone: 'ok' },
      ],
      foot: 'Each fail goes to its owner: the delivery answer to whoever edits the shipping page, the code to the promotions lead.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Shopify and DTC stores now sell through AI assistants as well as their own sites, and a store can check in an afternoon whether those assistants find, describe and sell its products correctly.',
    },
    {
      kind: 'p',
      text: 'On Shopify, [agentic storefronts are active by default for eligible stores](' +
        SHOPIFY_HELP +
        '), so many stores already sell through AI channels they never chose one by one. From its own Adobe Analytics data, [Adobe forecasts](' +
        ADOBE +
        ') that traffic from AI assistants to US retail sites will rise 130% year on year between 1 November and 31 December 2026, with Black Friday up 95%.',
    },
    {
      kind: 'stat',
      value: '+130%',
      label: 'forecast rise in traffic from AI assistants to US retail sites over the 2026 holiday season, against 2025',
      source: 'Adobe Analytics, 28 Sep 2026',
      href: ADOBE,
    },

    { kind: 'h2', id: 'what-is-agentic-commerce', text: 'What agentic commerce is' },
    {
      kind: 'p',
      text: '**Agentic commerce** is shopping in which an AI agent acts for the shopper. It searches, compares and builds a basket, and with the shopper’s approval it places the order, in the AI app’s own checkout or on the store’s. It runs on 3 layers:',
    },
    {
      kind: 'list',
      items: [
        '**Product data:** catalogs and feeds such as Shopify Catalog, Google Merchant Center and OpenAI’s product feed, plus the open web.',
        '**Basket and checkout:** OpenAI and Stripe developed the [Agentic Commerce Protocol](' +
          ACP +
          ') (ACP). The [Universal Commerce Protocol](' +
          UCP +
          ') (UCP) names Google, Shopify, Etsy, Wayfair, Target, Walmart, Amazon, Microsoft, Meta, Salesforce and Stripe among the companies that develop it. Both are open source.',
        '**Payment:** credentials the shopper authorises for the agent, through Google’s [Agent Payments Protocol](' +
          AP2 +
          ') (AP2), Stripe’s Shared Payment Tokens, Visa Intelligent Commerce or Mastercard Agent Pay.',
      ],
    },
    {
      kind: 'p',
      text: 'For a store, the questions are which AI channels show its products, where the order is placed, and whether what an agent tells a shopper matches the store’s own pages.',
    },

    { kind: 'h2', id: 'searching', text: 'How shoppers’ searching is changing' },
    {
      kind: 'p',
      text: 'In [Google Trends for the US](' +
        TRENDS_AC +
        '), checked on 23 October 2026, searches for “agentic commerce” peaked in the week of 10 to 16 May 2026 and stood at 26 of 100 in October, and “universal commerce protocol” was a breakout related search. [Searches for “ChatGPT shopping”](' +
        TRENDS_CS +
        ') peaked in Black Friday week 2025. Black Friday 2026 is Friday 27 November.',
    },
    {
      kind: 'p',
      text: 'On its [second quarter 2026 earnings call](' +
        SHOPIFY_Q2 +
        '), Shopify said AI driven traffic and orders to its stores had each tripled year on year, that 75% of AI attributed orders came from outside its top 100 product categories, and that searches powered by Shopify Catalog converted at twice the rate of those using scraped data. Its president, Harley Finkelstein, added that the volume was still small against $116 billion of gross merchandise volume.',
    },
    {
      kind: 'stat',
      value: '3x',
      label: 'year on year growth in both AI driven traffic and AI driven orders to Shopify stores, second quarter of 2026',
      source: 'Shopify, Q2 2026 earnings call (company figures)',
      href: SHOPIFY_Q2,
    },
    {
      kind: 'note',
      title: 'Your own figure',
      text: 'In your analytics’ referral report, add up last month’s sessions from chatgpt.com, perplexity.ai, gemini.google.com and copilot.microsoft.com, then multiply by their conversion rate and your average order. At 1,200 sessions, 2% and a $70 average order, that is $1,680 a month. Orders placed inside an AI app’s checkout don’t arrive as sessions, and [Shopify says](' +
        SHOPIFY_GOOGLE +
        ') Google Analytics doesn’t fire in Google’s direct checkout, so count those orders from Shopify.',
    },

    { kind: 'h2', id: 'how-agents-work', text: 'How AI shopping agents work' },
    {
      kind: 'p',
      text: 'An AI shopping agent works in 4 steps, and the store controls what goes into each one.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**It reads product data.** Shopify Catalog [lists each product by default](' +
          SHOPIFY_PRODUCTS +
          ') with its title, description, options, images, price and availability, and updates continuously. Assistants also read the web through crawlers such as OpenAI’s OAI-SearchBot.',
        '**It picks products and stores.** [OpenAI says](' +
          OPENAI_SHOPPING +
          ') ChatGPT’s product results aren’t ads, and that it ranks merchants on factors such as availability, price, quality and whether the merchant is the maker or main seller.',
        '**It builds a basket.** [Shopify’s developer docs](' +
          SHOPIFY_DEV +
          ') describe UCP servers through which agents search products, fetch variants and build carts, with trust tiers that set each verified agent’s access.',
        '**It hands over to checkout.** Unless its trust tier lets it complete checkout, the agent refers the shopper to the store to pay. In an AI app with a direct checkout, the shopper pays in the app and the store fulfils the order.',
      ],
    },
    {
      kind: 'p',
      text: 'Shopify’s Catalog page says store policies also appear in files written for agents: yourstore.com/agents.md, /llms.txt and /llms-full.txt. On 2 of the 3 Shopify stores we opened on 23 October 2026, /agents.md linked to the store’s policies and pointed agents to a UCP profile at /.well-known/ucp.',
    },

    { kind: 'h2', id: 'whats-live', text: 'What is live on 23 October 2026' },
    {
      kind: 'p',
      text: 'Most AI checkouts are open to US shoppers only. On Shopify, the ChatGPT, Google, Copilot and Meta channels are settings under Sales channels, then Agentic.',
    },
    {
      kind: 'table',
      caption: 'AI shopping channels for a store, as each platform’s own pages describe them on 23 October 2026',
      cols: ['Channel', 'What shoppers do', 'Where the order is placed', 'Who can take part'],
      rows: [
        ['ChatGPT', 'Search and compare products, with results that aren’t ads', 'Shopify stores: the store’s own checkout, in ChatGPT’s browser', 'Shopify stores selling to the US. Others apply to OpenAI for a product feed'],
        ['Google AI Mode and Gemini', 'Shop by conversation, track prices, save items in Universal Cart', 'Google’s checkout with Google Pay, or the store', 'Shopify stores based in and selling to the US. UCP checkout for select merchants'],
        ['Microsoft Copilot', 'Find and buy in the chat', 'Shopify powered checkout in Copilot', 'Shopify stores selling to the US'],
        ['Meta, including Muse', 'Find and buy on Meta surfaces', 'Shopify powered checkout in Meta', 'Shopify stores selling to the US, Canada or Mexico'],
        ['Perplexity', 'Free shopping search for US users', 'In Perplexity, paid with PayPal', 'Select merchants, and merchants on BigCommerce, Shopware and Wix'],
        ['Amazon', 'Shop Direct lists other stores’ products in Amazon search and Rufus', 'Buy for Me: Amazon buys with the shopper’s Amazon card\nShop Direct: the store', 'Merchants with feeds through Feedonomics, Salsify or CEDCommerce'],
      ],
    },
    {
      kind: 'p',
      text: 'Shopify’s pages for [ChatGPT](' +
        SHOPIFY_CHATGPT +
        '), Google AI Mode and Gemini, [Copilot](' +
        SHOPIFY_COPILOT +
        ') and [Meta](' +
        SHOPIFY_META +
        ') set out each channel’s eligibility, and each says there is no fee beyond standard payment processing.',
    },
    {
      kind: 'p',
      text: '**ChatGPT.** [Digital Commerce 360 reported on 6 March 2026](' +
        DC360 +
        ') that OpenAI was sidelining Instant Checkout in favour of checkout through merchants’ ChatGPT apps, with ACP continuing underneath. OpenAI’s help page still says an Instant Checkout option may show for eligible products.',
    },
    {
      kind: 'p',
      text: '**Google.** [UCP checkout](' +
        GOOGLE_UCP +
        ') keeps the merchant as seller of record, and in September 2026 Google said UCP [enables direct checkout for hundreds of thousands of brands and retailers](' +
        GOOGLE_SEPT +
        '). [Universal Cart](' +
        GOOGLE_CART +
        '), launched in the US on 15 October 2026, saves items from several retailers, tracks price drops and shows promo codes. With [agentic checkout](' +
        GOOGLE_NOV +
        '), rolling out since November 2025, Google buys a tracked item once the shopper confirms, and [Google Pay’s help page](' +
        GPAY +
        ') says only at the confirmed price or lower.',
    },
    {
      kind: 'p',
      text: '**Perplexity and Amazon.** [Perplexity’s shopping](' +
        PERPLEXITY +
        ') has been free to all US users since 25 November 2025, and [its help centre](' +
        PERPLEXITY_HELP +
        ') names some of the Instant Buy sellers. [Amazon says](' +
        AMAZON +
        ') Shop Direct holds over 100 million products from more than 400,000 merchants, and that merchants can opt out.',
    },
    { kind: 'h3', id: 'payments', text: 'Payments and agent identity' },
    {
      kind: 'list',
      items: [
        '**[Stripe’s Agentic Commerce Suite](' +
          STRIPE +
          '):** you share a catalog feed, and Stripe shares your products with agents, runs checkout and takes payment. It is available in the US, Canada and select European countries.',
        '**[PayPal’s Agent Ready and Store Sync](' +
          PAYPAL +
          '):** Agent Ready takes payment on agentic surfaces, and Store Sync puts your catalog into assistants such as Copilot and Perplexity. Store Sync starts through PayPal’s sales team.',
        '**[Visa Intelligent Commerce](' +
          VISA +
          ')** includes a Trusted Agent Protocol for verifying agents and blocking malicious bots, and Visa says it is still being deployed. Under **[Mastercard Agent Pay](' +
          MASTERCARD +
          ')**, only registered agents can transact.',
        '**Shopify’s Agentic plan** lets a store set up agentic storefronts and keep its existing online store.',
        '**Agent identity on Shopify:** [its Storefront API docs](' +
          SHOPIFY_BOTS +
          ') say traffic signed with Web Bot Auth gets higher rate limits and unsigned bots are limited most strictly.',
      ],
    },
    {
      kind: 'p',
      text: 'Fees, chargebacks and the rules for agents acting for a shopper differ by provider and country, so read each provider’s terms. None of this is legal advice.',
    },

    { kind: 'h2', id: 'shopify-settings', text: 'Shopify settings to check' },
    {
      kind: 'p',
      text: 'In your Shopify admin, go to Sales channels, then Agentic. [Shopify says](' +
        SHOPIFY_MANAGE +
        ') **Allow Shopify to manage for me** is on by default: every channel is active, direct checkout is on where supported, and new AI channels are added as they launch. Switch it off to set these 3 yourself, then click Save:',
    },
    {
      kind: 'list',
      items: [
        '**Shopify Catalog access:** switching it off removes your products from current and future third party AI channels, and can take up to 7 days. It doesn’t remove them from Shop, and products can still be found through web crawling.',
        '**Auto enroll new storefronts:** switching it off keeps the channels you have and lets you approve each new one.',
        '**Each channel:** its catalog access and its direct checkout. With direct checkout off, shoppers are sent to your store to pay.',
      ],
    },
    {
      kind: 'p',
      text: 'Then decide each channel against what it supports:',
    },
    {
      kind: 'list',
      items: [
        'Google’s direct checkout doesn’t support subscriptions, bundles, customisable products, B2B only products or custom pixels, and Google Analytics doesn’t fire in it.',
        'Agents show your D2C price, and you choose whether they show compare at prices.',
        'A product set to Unlisted, or given the seo.hidden metafield, leaves every AI channel. Unlisted also removes it from sitemaps, search engines and your store’s own search.',
        'ChatGPT and Google need your terms of service, privacy policy and return and refund policy completed in Settings, then Policies.',
      ],
    },
    {
      kind: 'p',
      text: 'The defaults suit a store that sells to US shoppers, has no subscriptions or bundles, and reports orders from Shopify. Choosing each channel yourself suits a brand that must approve every sales channel, for example under a distribution agreement.',
    },

    { kind: 'h2', id: 'readiness-test', text: 'The readiness test' },
    {
      kind: 'p',
      text: 'The test takes an afternoon. Log every result in 1 sheet with the date, the country you ran it from, the assistant and its plan.',
    },
    { kind: 'h3', id: 'ask', text: '1. Ask the assistants your customers’ questions' },
    {
      kind: 'p',
      text: 'Ask ChatGPT, Google AI Mode, Gemini, Perplexity and Copilot 5 questions about 1 of your top sellers, in your customers’ words: its price, whether a size is in stock, whether it can reach a named city by a date, your returns policy, and which store to buy it from. Use a new chat for each run, sign out where you can, and ask each question 3 times, because answers change between runs.',
    },
    {
      kind: 'p',
      text: '**A pass:** every answer matches your live pages, and the last question names your store. In [a study by Product.ai](' +
        PRODUCT_AI +
        '), a startup that checks product claims, reported by Business Insider on 25 September 2026, 85% of 913 verifiable price answers matched the current or listed price, and the wrong ones were off by a median of $300. Our guide to [what ChatGPT says about your store](/blog/what-chatgpt-says-about-your-store) sets out the full scoring method.',
    },
    {
      kind: 'art',
      caption: 'An invented store’s first run, logged the way your sheet should read: each question, each assistant’s answer, and what the store’s own pages say.',
      art: {
        kind: 'report',
        title: 'larkfield.example · 5 questions on 3 assistants, run 1 of 3',
        period: 'Thursday 5 November, from New York, new chat, signed out',
        cols: ['Question', 'ChatGPT', 'AI Mode', 'Perplexity'],
        rows: [
          { name: 'Price, king cover', cells: ['$96', '$96', '$110'], tone: 'fail' },
          { name: 'Sage in stock', cells: ['Yes', 'Yes', 'Yes'], tone: 'ok' },
          { name: 'Delivery by Friday', cells: ['2 days', '3 to 5 days', '3 to 5 days'], tone: 'fail' },
          { name: 'Returns window', cells: ['30 days', '30 days', '14 days'], tone: 'fail' },
          { name: 'Where to buy', cells: ['Larkfield', 'A marketplace', 'Larkfield'], tone: 'info' },
        ],
        notes: [
          'The store’s pages say $96, delivery in 3 to 5 days and a 30 day returns window.',
          '3 wrong facts to trace to the pages each assistant cited: $110 and 14 days on Perplexity, 2 days on ChatGPT.',
        ],
      },
    },

    { kind: 'h3', id: 'data', text: '2. Check the product data agents read' },
    {
      kind: 'list',
      items: [
        '**Eligibility:** under Sales channels, then Agentic, read your status and the reason for each ineligible product. Shopify’s listing quality checks cover descriptions, images, verified reviews, complete variants and complete policies.',
        '**Agent files:** open yourstore.com/agents.md. **A pass:** it lists your current policies and each link opens the live page.',
        '**Structured data and feeds:** [Google says](' +
          GOOGLE_FEATURES +
          ') structured data should match the visible page and Merchant Center should be up to date. Compare your feed’s price, availability and delivery with the product page.',
        '**Crawlers:** to appear in ChatGPT search and Perplexity, allow [OAI-SearchBot](' +
          OPENAI_BOTS +
          ') and [PerplexityBot](' +
          PERPLEXITY_BOTS +
          ') in robots.txt. OpenAI says a change takes about 24 hours, and Perplexity up to 24 hours. Shopify says robots.txt has no effect on Shopify Catalog.',
        '**Policies:** put the returns window, delivery countries, costs and cut off dates in plain text, 1 page each.',
      ],
    },

    { kind: 'h3', id: 'walk', text: '3. Walk an agent from search to checkout' },
    {
      kind: 'p',
      text: 'Give an AI browser a task on your own store and watch each step. [ChatGPT’s cloud browser](' +
        CHATGPT_CLOUD +
        '), on paid plans, clicks, fills in forms and pauses for you at a sign in. [Gemini in Chrome’s auto browse](' +
        GEMINI_CHROME +
        '), for US users on Google AI Pro or Ultra, can add items to a basket, and Google warns it may complete a purchase without permission by mistake. Set a task that ends before payment: “Find the king linen duvet cover in sage on larkfield.example, add it to the basket, apply LARK10 and go to checkout. Stop before payment.”',
    },
    {
      kind: 'p',
      text: 'Record whether it found your product or another seller’s, picked the right variant, read the right price, stock and delivery date, applied the code, and reached checkout with the basket intact. **A pass:** all 5. **If it stops,** note the page and the element, and look first at pop ups, variant pickers and bot checks. Agents that shop through UCP or Shopify Catalog read the same product data that step 2 checks.',
    },

    { kind: 'h3', id: 'fix', text: '4. Fix each wrong answer at its source' },
    {
      kind: 'p',
      text: 'Open the links each wrong answer cites. Correct product data in your Shopify admin or Merchant Center, and policy or delivery facts on your own pages, with the date of the change. For a page you don’t own, such as a marketplace listing or a review roundup, send the owner the correct detail and a link to your page. Ask again after each fix, and close an item when it is right in 3 of 3 runs.',
    },
    {
      kind: 'p',
      text: 'A test by hand covers 1 person, 1 country and 1 day. Obsession’s [Listings and AI answers](/recipes/listings-ai-answers) recipe asks the AI assistants your buyers use every Monday, and within a day of any price change, launch or rename, then asks again until each wrong answer changes. Its [Sales agent check](/recipes/sales-agent-check) asks a store’s own AI sales agent about prices, stock and delivery every day and follows each answer to checkout.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s Sales agent check asks your AI sales agent about prices, stock and delivery every day, checks each answer against your store and follows it to checkout. Your first check is free: 3 test customers ask on 1 channel, and the report lands within 4 days.',
      to: '/recipes/sales-agent-check',
      label: 'See Sales agent check',
    },

    { kind: 'h2', id: 'options', text: 'Agentic readiness tools compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, which does some of this, so every line about another tool is taken from that tool’s own pages, checked on 23 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to check a store’s agentic commerce readiness. Prices from each company’s own pages, 23 October 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Doing nothing',
          'Costs no time, and Shopify manages your AI channels by default',
          'Free',
          'You don’t see what agents tell shoppers',
          'Stores with no US shoppers and few AI sessions',
        ],
        [
          'By hand: the readiness test above',
          'Shows exactly what 1 shopper sees',
          'Free, plus an afternoon a run',
          '1 person, 1 country, 1 day',
          'A first check',
        ],
        [
          'Platform settings: Shopify, Google Merchant Center',
          'Eligibility, listing quality and share of voice in AI Mode and AI Overviews',
          'Included in your plan',
          'No view of the answers or the path to checkout',
          'Every store, as the first step',
        ],
        [
          'Readiness checkers: Shopify, Colter',
          'Scan a product page for the data agents read',
          'Shopify: no price shown\nColter: free, $49 or $199 a month',
          'Page signals only',
          'A quick data check',
        ],
        [
          'AI visibility trackers: Profound, Peec AI, Otterly.AI, Ahrefs Brand Radar',
          'Your questions asked on a schedule across several assistants, with history',
          'Otterly.AI: from $29 a month\nBrand Radar: from $50 a month\nProfound, Peec AI: no paid price shown',
          'Answers only, with no basket or checkout test on their pricing pages',
          'Monthly AI visibility reports',
        ],
        [
          'Agencies: CRO, SEO or AEO',
          'Find the faults and fix them',
          'Set by each agency',
          'Depends on its method and how often it tests',
          'Stores without the time in house',
        ],
        [
          'Obsession (ours): [Listings and AI answers](/recipes/listings-ai-answers), [Sales agent check](/recipes/sales-agent-check), [Mystery shopper](/recipes/mystery-shopper)',
          'Listings and AI answers: assistants asked every Monday\nSales agent check: your agent asked daily, each answer followed to checkout\nMystery shopper: every email, text and reply timed',
          'Sales agent check: first check free\nMystery shopper: first store free',
          'Doesn’t change your settings or feeds\nNot needed while AI sessions are few',
          'Questions asked on a schedule, with the proof kept',
        ],
      ],
    },
    {
      kind: 'p',
      text: '**Trackers.** [Profound](' +
        PROFOUND +
        ') offers a free 7 day trial of 50 daily prompts on ChatGPT, Gemini and Google AI Overviews, and a custom priced Enterprise plan covering up to 9 assistants, including ChatGPT Shopping. Both plans include its Agent Analytics across unlimited domains. [Peec AI](' +
        PEEC +
        ') shows no prices. [Otterly.AI](' +
        OTTERLY +
        ') lists $29 a month for 15 prompts, $189 for 100 and $489 for 400. [Ahrefs Brand Radar](' +
        AHREFS +
        ') starts at $50 a month for custom prompts, each checked daily, and paid Ahrefs plans include 5 or more free prompts.',
    },
    {
      kind: 'p',
      text: '**Checkers and settings.** [Shopify’s product page check](' +
        SHOPIFY_CHECK +
        ') says its signals are informational and don’t guarantee your products are surfaced. [Colter](' +
        COLTER +
        ') is a read only product page audit, launched on 19 June 2026. Merchant Center’s [AI performance insights](' +
        GOOGLE_SEPT +
        ') cover Australia, Canada, India, New Zealand and the US.',
    },
    {
      kind: 'p',
      text: '**Doing nothing** is reasonable when you don’t sell to the US, where most AI checkouts run, and your analytics show few AI sessions. In that case, run the test by hand once a quarter.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**3 runs from 1 country show the direction of a result.** A rate precise enough to report to a client needs many more runs, or a tracker.',
        '**The walk stops before payment,** so it can’t show a direct checkout inside Google, Copilot or Meta. Google added checkout flow testing to its UCP integration hub in September 2026. Otherwise, place 1 real order in each channel you keep on, then refund it.',
        '**Channels change month to month.** Check your Agentic settings again after each platform announcement.',
      ],
    },
    {
      kind: 'p',
      text: 'Run the test before your code freeze, around 20 November, and on the morning of Black Friday, Friday 27 November 2026, because prices, codes and delivery cut offs change for the sale. Run it again after any change to prices, policies, apps or Agentic settings. Agencies can run the same test on a client’s store, with the client’s OK, and hand over the dated sheet. The [Black Friday checklist](/blog/black-friday-checklist-new-customer) has 12 tests for the store itself, and [how to test a chatbot on your store](/blog/test-store-chatbot-returns-policy) covers its chat.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI agents shop your store as new customers every week and after every change: they follow your ads, sign up, use the welcome code, leave a basket and wait. The first check is free: 4 customer agents, 48 hours watched, and your report within 4 days.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about agentic commerce' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is agentic commerce?',
          a: 'Agentic commerce is shopping in which an AI agent searches, compares and builds a basket for a shopper, who approves the purchase in the AI app or on the store’s own checkout.',
        },
        {
          q: 'What is the difference between ACP and UCP?',
          a: 'Both are open standards for agents to check out for a shopper. OpenAI and Stripe developed the Agentic Commerce Protocol, first used in ChatGPT. Google, Shopify and others developed the Universal Commerce Protocol, which runs checkout in Google AI Mode and Gemini and also covers catalog search, carts and orders.',
        },
        {
          q: 'How do AI shopping agents work?',
          a: 'They read product data from catalogs, feeds and the web, pick products and stores on factors such as price and availability, build a basket through the store’s tools or pages, and hand over to a checkout the shopper approves.',
        },
        {
          q: 'Should I turn off Shopify agentic storefronts?',
          a: 'Switch off Allow Shopify to manage for me if you must approve each AI channel, and switch off a channel’s direct checkout if it can’t handle your subscriptions, bundles or measurement. Removing Shopify Catalog access takes up to 7 days and doesn’t stop products being found through web crawling.',
        },
        {
          q: 'Is ChatGPT Instant Checkout still available?',
          a: 'OpenAI said in March 2026 that Instant Checkout was moving to merchants’ ChatGPT apps, and its help page says the option may still show for eligible products. Shopify stores sell in ChatGPT through their own checkout, opened in ChatGPT’s browser.',
        },
        {
          q: 'Can shoppers buy directly in Google AI Mode?',
          a: 'Yes, for select merchants. Google’s UCP checkout covers products eligible in the US, Canada and Australia. Eligible listings show a Buy button that checks out with Google Pay, and Shopify stores based in and selling to the US have Google’s direct checkout on by default.',
        },
        {
          q: 'How can a store tell a shopper’s AI agent from a bot?',
          a: 'By the agent identifying itself. Shopify gives traffic signed with Web Bot Auth higher rate limits and limits unsigned bots most strictly. Visa’s Trusted Agent Protocol is built to verify agents and block malicious bots, and under Mastercard Agent Pay only registered agents can transact.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'OpenAI’s help centre and Mastercard’s page refused a direct request, so we read them through a text reader. Shopify’s quarterly figures come from a published transcript of its earnings call, because the Retail TouchPoints report of the call returned an error. Amazon’s Shop Direct page shows no date. We checked the agent files on 3 Shopify stores, which we don’t name. Google Trends values are relative, with 100 as the peak in each comparison. The store in both illustrations, larkfield.example, is invented, and we haven’t run this test on a named store. We left out Shopify’s Shop agent connection of 13 October 2026, which we could confirm only through 1 secondary report.',
    },
  ],

  sources: [
    { title: 'Shopify agentic storefronts', publisher: 'Shopify Help Center', url: SHOPIFY_HELP },
    { title: 'Adobe forecasts U.S. holiday shopping season to hit a record $275.1 billion online', publisher: 'Adobe', url: ADOBE, date: '2026-09-28' },
    { title: 'Agentic Commerce Protocol', publisher: 'OpenAI and Stripe', url: ACP },
    { title: 'Universal Commerce Protocol', publisher: 'UCP Authors', url: UCP, date: '2026' },
    { title: 'Agent Payments Protocol (AP2)', publisher: 'Google', url: AP2 },
    { title: 'Google Trends: agentic commerce, US, past 12 months', publisher: 'Google Trends', url: TRENDS_AC },
    { title: 'Google Trends: ChatGPT shopping, US, past 12 months', publisher: 'Google Trends', url: TRENDS_CS },
    { title: 'Shopify Q2 2026 earnings call transcript', publisher: 'Platform Aeronaut (transcript)', url: SHOPIFY_Q2 },
    { title: 'Selling on Google AI Mode and Gemini', publisher: 'Shopify Help Center', url: SHOPIFY_GOOGLE },
    { title: 'Shopify Catalog and product discovery for agentic storefronts', publisher: 'Shopify Help Center', url: SHOPIFY_PRODUCTS },
    { title: 'Shopping with ChatGPT Search', publisher: 'OpenAI Help Center', url: OPENAI_SHOPPING },
    { title: 'Agentic commerce', publisher: 'Shopify developer docs', url: SHOPIFY_DEV },
    { title: 'Selling on ChatGPT', publisher: 'Shopify Help Center', url: SHOPIFY_CHATGPT },
    { title: 'Selling on Microsoft Copilot', publisher: 'Shopify Help Center', url: SHOPIFY_COPILOT },
    { title: 'Selling on Meta', publisher: 'Shopify Help Center', url: SHOPIFY_META },
    { title: 'OpenAI shifts checkout plans in agentic commerce strategy', publisher: 'Digital Commerce 360', url: DC360, date: '2026-03-06' },
    { title: 'About the Universal Commerce Protocol (UCP) and UCP-powered checkout feature on Google', publisher: 'Google Merchant Center Help', url: GOOGLE_UCP },
    { title: 'Boost your holiday sales with these agentic commerce updates', publisher: 'Google', url: GOOGLE_SEPT, date: '2026-09-16' },
    { title: 'Google’s new Universal Cart launches today in the U.S.', publisher: 'Google', url: GOOGLE_CART, date: '2026-10-15' },
    { title: 'Google Shopping launches agentic checkout and more AI shopping tools', publisher: 'Google', url: GOOGLE_NOV, date: '2025-11-13' },
    { title: 'About Agentic checkout with Google Pay', publisher: 'Google Pay Help', url: GPAY },
    { title: 'Shopping that puts you first', publisher: 'Perplexity', url: PERPLEXITY, date: '2025-11-25' },
    { title: 'Instant Buy + Buy with PayPal', publisher: 'Perplexity Help Center', url: PERPLEXITY_HELP },
    { title: 'Amazon introduces feeds to make it easier for merchants to reach more customers through AI-powered Shop Direct', publisher: 'Amazon', url: AMAZON },
    { title: 'Sell products through agents', publisher: 'Stripe docs', url: STRIPE },
    { title: 'Agentic commerce solutions for businesses', publisher: 'PayPal', url: PAYPAL },
    { title: 'Visa Intelligent Commerce', publisher: 'Visa', url: VISA },
    { title: 'Mastercard Agent Pay', publisher: 'Mastercard', url: MASTERCARD },
    { title: 'Storefront API: identifying bots with Web Bot Auth', publisher: 'Shopify developer docs', url: SHOPIFY_BOTS },
    { title: 'Managing agentic storefronts', publisher: 'Shopify Help Center', url: SHOPIFY_MANAGE },
    { title: 'AI can’t take over your holiday shopping quite yet, a new study suggests (Product.ai study)', publisher: 'Business Insider, republished by DNYUZ', url: PRODUCT_AI, date: '2026-09-25' },
    { title: 'AI features and your website', publisher: 'Google Search Central', url: GOOGLE_FEATURES, date: '2025-12-10' },
    { title: 'Overview of OpenAI crawlers', publisher: 'OpenAI developers', url: OPENAI_BOTS },
    { title: 'Perplexity crawlers', publisher: 'Perplexity docs', url: PERPLEXITY_BOTS },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: CHATGPT_CLOUD },
    { title: 'Use auto browse in Gemini in Chrome', publisher: 'Google Chrome Help', url: GEMINI_CHROME },
    { title: 'Pricing', publisher: 'Profound', url: PROFOUND },
    { title: 'Pricing', publisher: 'Peec AI', url: PEEC },
    { title: 'Pricing', publisher: 'Otterly.AI', url: OTTERLY },
    { title: 'Brand Radar', publisher: 'Ahrefs', url: AHREFS },
    { title: 'Is your product page optimized for AI selling?', publisher: 'Shopify', url: SHOPIFY_CHECK },
    { title: 'Colter', publisher: 'Shopify App Store', url: COLTER },
  ],

  related: [
    'recipe:listings-ai-answers',
    'recipe:sales-agent-check',
    'recipe:mystery-shopper',
    'what-chatgpt-says-about-your-store',
    'test-store-chatbot-returns-policy',
    'black-friday-checklist-new-customer',
    '/use-cases/leak-checks-for-ecommerce-stores',
  ],
}
