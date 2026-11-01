import type { BlogPost } from './types'
import { AI_CUSTOMER, CUSTOMER_SIDE_OBSERVABILITY } from '../glossary'

/* The why series, Spec A (24 Oct 2026): why ecommerce brands need AI customers. It owns "ai agents for ecommerce"
   (primary) and the secondary phrasings from Google autocomplete (US and UK, 24 Oct): ai agents for ecommerce business,
   ai for shopify store, ai tools for shopify store, shopify website monitoring, shopify store monitor, shopify flow not
   working. Readers: founders, heads of ecommerce, and growth and CRM leads at Shopify and DTC brands.
   Why now: the freeze on code, apps and flows (about 20 Nov), Black Friday (Fri 27 Nov 2026) and Cyber Monday (Mon 30
   Nov), with Adobe forecasting Black Friday at about 2.9 times the season's daily average and AI traffic up 130%.
   The idea: a store's failures happen after its own reports end, in front of 3 groups no report follows end to end
   (shoppers on the site, subscribers waiting for a message, AI agents reading the store for someone else), plus its
   rivals' private offers. Then the reader's own sum (revenue a day × days saved × breaks, low and high, at 3, 6 and 12
   months, payback before any price), the by-hand workload in a November week, customer-side observability as a routine,
   5 jobs mapped to the live recipes, what is live, announced and forecast, the options, when not to bother, and the
   free store check in the site's words.
   Read on 24 Oct 2026: Adobe's 28 Sep 2026 forecast, Klaviyo's BFCM 2025 newsroom page, Lebesgue's 16 Oct 2026 Meta CPM
   analysis, the BLS handbook, Google's Universal Cart post, Shopify's Scripts changelog, Latham & Watkins on the FCC's 1 October 2026 order on revoke-all
   date, Gorgias's AI Agent page, Shopify's Sidekick and Flow run help pages, 2 Shopify Community threads and 1 Klaviyo
   Community thread (the Shopify threads in the built in browser, which loaded them normally), and the pricing pages of
   Checkly, Pingdom (in the built in browser), Checkout Doctor (App Store listing, built in browser), Panoramata and
   Otterly.AI. From the verified library (_research/seo/plan/ai-customers/facts.json): Klaviyo's 2026 benchmarks, Joy
   Joya, Rejoiner, Baymard, Shopify's abandoned checkout and agentic storefront pages, OpenAI's shopping help page,
   Product.ai, Adobe's 2025 results, McKinsey and ChatGPT's cloud browser. Peec AI's pricing page showed no prices, so
   Otterly.AI stands for AI visibility tools.
   Left out on purpose: Gartner, ChatGPT agent, Workato, Grep, any PilotX audit figure, the site's 93% and 128 stores,
   the brand personas' sales lines, Reddit quotes (not re-openable), Klaviyo's "42% of GMV" wording (the newsroom page
   says 42% of total revenue), any Obsession price. oakhaven.example, its rival and every figure in both illustrations
   are invented. No dashes. */

const GORGIAS = 'https://www.gorgias.com/ai-agent'
const SIDEKICK = 'https://help.shopify.com/en/manual/shopify-admin/productivity-tools/sidekick'
const ADOBE_2026 = 'https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record'
const KLAVIYO_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const KLAVIYO_BFCM = 'https://www.klaviyo.com/newsroom/bfcm-holiday-shopping'
const SC_QUIET = 'https://community.shopify.com/t/how-long-before-you-connected-a-dip-in-your-numbers-to-something-broken/689501'
const K_ZERO = 'https://community.klaviyo.com/marketing-30/flows-stopped-working-15053'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const BAYMARD = 'https://baymard.com/lists/cart-abandonment-rate'
const REJOINER = 'https://rejoiner.com/abandoned-cart-email-report'
const SHOPIFY_AGENTIC = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts'
const OPENAI_SHOPPING = 'https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search'
const PRODUCT_AI ='https://dnyuz.com/2026/09/25/ai-cant-take-over-your-holiday-shopping-quite-yet-a-new-study-suggests/'
const LEBESGUE = 'https://lebesgue.io/?p=15192'
const BLS = 'https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm'
const SH_ABANDONED = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts'
const GOOGLE_CART = 'https://blog.google/products-and-platforms/products/shopping/universal-cart-launch/'
const SCRIPTS = 'https://shopify.dev/changelog/posts/shopify-scripts-will-be-deprecated-on-june-30-2026'
const TCPA = 'https://www.lw.com/en/insights/fcc-revamps-rules-on-consent-to-calls-and-texts-under-the-tcpa'
const ADOBE_2025 = 'https://news.adobe.com/news/2026/01/adobe-holiday-shopping-season'
const MCKINSEY = 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants'
const CHECKLY = 'https://www.checklyhq.com/pricing/'
const PINGDOM = 'https://www.pingdom.com/pricing/'
const CHECKOUT_DOCTOR = 'https://apps.shopify.com/checkout-doctor-store-alerts'
const PANORAMATA = 'https://www.panoramata.co/pricing'
const OTTERLY = 'https://otterly.ai/pricing'
const CLOUD_BROWSER = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'
const FLOW_RUNS = 'https://help.shopify.com/en/manual/shopify-flow/manage/monitor'

const CHECKLIST = '/blog/black-friday-checklist-new-customer'
const CAUSES = '/blog/welcome-basket-email-not-sending'
const RIVAL_PRICE = '/blog/competitor-price-after-welcome-code'
const AI_ANSWERS = '/blog/what-chatgpt-says-about-your-store'
const AGENTIC = '/blog/agentic-commerce-for-merchants'

export const post: BlogPost = {
  slug: 'ai-customers-for-ecommerce-brands',
  title: 'Why ecommerce brands need AI customers',
  dek: 'Much of a store’s revenue depends on emails, texts, codes and reminders that stop without an error, and AI assistants now quote its prices to shoppers. What only a customer sees, what a silent step costs in your own numbers, and the jobs AI customers do before Black Friday.',
  metaTitle: 'AI agents for ecommerce: why DTC brands need AI customers',
  description:
    'AI agents for ecommerce that shop as customers: what AI customers check in a store, what a silent flow costs before Black Friday, and the options compared.',
  answer:
    'Ecommerce brands need AI customers, the AI agents for ecommerce that shop as customers, because much of their revenue runs through automated emails, texts, codes and reminders that can stop working without raising an error, and a customer sees the failure first. An AI customer becomes a real customer of a store and its competitors, asks AI assistants what shoppers ask, and keeps what it receives as evidence, every week and after every change. Most other AI agents for ecommerce answer shoppers or run admin for the store, while Obsession’s AI customers shop it as customers and keep every email, code and price as proof.',
  primaryKeyword: 'ai agents for ecommerce',
  keywords: [
    'ai agents for ecommerce business',
    'ai for shopify store',
    'ai tools for shopify store',
    'shopify website monitoring',
    'shopify store monitor',
    'shopify flow not working',
    'ai for ecommerce brands',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-28',
  readingMinutes: 12,
  order: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'oakhaven.example · the run up to Black Friday',
      who: 'The store’s AI customer, and 1 at a competitor, 17 to 25 November',
      status: { tone: 'fail', text: '2 failed, 1 late' },
      rows: [
        { time: 'Tue 17 Nov', text: 'Teaser email arrives', detail: 'Early access from Thursday, Promotions tab', tone: 'ok' },
        { time: 'Thu 19 Nov', text: 'Early access code EARLY25', detail: 'Arrives at 08:02, as planned', tone: 'ok' },
        { time: 'Thu 19 Nov', text: 'EARLY25 refused at checkout', detail: 'On a $64 throw already in the sale', tone: 'fail' },
        { time: 'Fri 20 Nov', text: 'Basket reminder arrives', detail: '26 hours after the basket, against 1 hour', tone: 'late' },
        { time: 'Mon 23 Nov', text: 'Competitor offers 30% off', detail: 'To its new subscribers only, 5 points deeper', tone: 'info' },
        { time: 'Wed 25 Nov', text: 'AI assistant quotes $79', detail: 'The product page says $64 until Monday', tone: 'fail' },
      ],
      foot: 'An example on an invented store and competitor. The store’s own reports showed every email sent and the code active.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Founders, heads of ecommerce, and growth and CRM leads at Shopify and direct to consumer brands can use AI customers to see their store as its customers do, from the sign up to what AI assistants say about it.',
    },
    {
      kind: 'p',
      text: 'Most AI agents for ecommerce work for the store. [Gorgias’s AI Agent](' +
        GORGIAS +
        ') sells, supports and engages customers 24/7, and [Shopify’s Sidekick](' +
        SIDEKICK +
        ') is an AI commerce assistant that works with a store’s own data. An AI customer works for your company from the customer’s side, and [what AI customers are](/blog/ai-customers) defines the term in full. The case for every company is in [why AI customers matter](/blog/why-ai-customers-matter).',
    },
    {
      kind: 'p',
      text: 'Black Friday is on Friday 27 November 2026. Adobe forecasts [$12.9 billion of US online spending that day](' +
        ADOBE_2026 +
        '), about 2.9 times the daily average of its $275.1 billion forecast for 1 November to 31 December. For a store whose sales follow the market, a broken step costs about 3 times as much on Black Friday as on an average day of the season.',
    },

    { kind: 'h2', id: 'their-world', text: 'How an ecommerce brand earns' },
    {
      kind: 'p',
      text: 'An online brand earns from the first order and from the orders after it. The first order usually comes from ads, search and social media. The orders after it come back through email and text, which the brand owns, and many start with an automated message: the welcome series, the browse and basket reminders, the post purchase emails and the win back.',
    },
    {
      kind: 'p',
      text: 'Klaviyo’s own [2026 benchmarks](' +
        KLAVIYO_BENCH +
        ') show that automated flows were 5.3% of email sends and nearly 41% of email revenue. Over Black Friday to Cyber Monday 2025, [Klaviyo reported](' +
        KLAVIYO_BFCM +
        ') that across its customers, email and text drove 42% of total revenue, and 43% on peak days.',
    },
    {
      kind: 'stat',
      value: '42%',
      label: 'of total revenue came from email and text across Klaviyo’s customers over Black Friday to Cyber Monday 2025',
      source: 'Klaviyo, December 2025',
      href: KLAVIYO_BFCM,
    },
    {
      kind: 'p',
      text: 'What 1 flow is worth to your company is in your email platform’s flow report: its attributed revenue for the last 30 days, divided by 30, is its revenue a day.',
    },
    {
      kind: 'p',
      text: 'The week runs on a handful of tools: Shopify, Klaviyo or Omnisend for email, Postscript or Attentive for texts, Meta and Google for ads, Gorgias or Shopify Inbox for support, and GA4. Monday starts with last week’s numbers, and the rest goes on the next campaign and the next theme or app change. From October the week fills with Black Friday: the offer, early access, the codes and a freeze on code, apps and flows around 20 November.',
    },
    {
      kind: 'p',
      text: 'Each step of the shopper’s path belongs to a different tool and often a different person: the ad to the performance lead, the pop up and flows to the email lead, the code and checkout to the ecommerce lead, the theme to a developer or an agency. Each tool reports its own part.',
    },

    { kind: 'h2', id: 'blind-spots', text: 'What a store can’t see' },
    {
      kind: 'p',
      text: 'A store’s reports describe what the store did, such as sessions, orders, emails sent and chats closed, and they are accurate about it. The failures that raise no error happen afterwards, in front of 3 groups no report follows end to end: shoppers on the site, subscribers waiting for a message, and AI agents reading the store for someone else.',
    },
    { kind: 'h3', id: 'shoppers', text: 'Shoppers on the site' },
    {
      kind: 'p',
      text: 'A broken step on the site looks like a slow week. [A store owner on the Shopify Community](' +
        SC_QUIET +
        ') described it in September 2026: “Orders slow down, add-to-carts drop a little, and it just feels like a quiet week until someone finds the actual fault.” In the same thread, another owner said an app update broke a product button and took a couple of days to notice. Without a test from the customer’s side, a store learns of a break from a customer or from its numbers.',
    },
    { kind: 'h3', id: 'subscribers', text: 'Subscribers waiting for an email or text' },
    {
      kind: 'p',
      text: 'A flow that stops sends nothing, so nothing reports an error. A brand testing its basket flow wrote on the [Klaviyo Community](' +
        K_ZERO +
        '): “If I go to view our analytics for the flow, everything is 0.” [A test of 362 ecommerce brands](' +
        JOYJOYA +
        ') by Joy Joya, using new email addresses and phone numbers, found that 158 sent no welcome email, 53 never sent the text they promised and 20 sent an offer that didn’t match the pop up.',
    },
    {
      kind: 'stat',
      value: '158 of 362',
      label: 'ecommerce brands sent no welcome email to a new subscriber',
      source: 'Joy Joya, July 2026',
      href: JOYJOYA,
    },
    {
      kind: 'p',
      text: 'Basket reminders fail the same way. [Baymard Institute](' +
        BAYMARD +
        ') puts the average documented basket abandonment rate at 70.22%, and Rejoiner’s [analysis of 1,000 direct to consumer brands](' +
        REJOINER +
        ') found that 68% of abandoned carts triggered a reminder email, so about 1 in 3 got none. The causes to check in Klaviyo and Shopify are in [why a welcome or basket email never arrives](' +
        CAUSES +
        ').',
    },
    { kind: 'h3', id: 'ai-agents', text: 'AI assistants and shopping agents' },
    {
      kind: 'p',
      text: 'AI assistants now answer shoppers’ questions about a store’s products and prices, and [OpenAI’s help centre](' +
        OPENAI_SHOPPING +
        ') says ChatGPT may offer Instant Checkout for some eligible products and merchants, so the purchase happens in the chat. In a study Product.ai ran and [Business Insider reported](' +
        PRODUCT_AI +
        '), 85% of 913 checkable price answers from ChatGPT, Claude, Gemini and Perplexity matched the current or listed price, and the wrong ones were off by a median of $300. A store sees an AI answer only when a shopper clicks through from it.',
    },
    {
      kind: 'p',
      text: 'Competitors’ offers sit outside every report as well. A competitor’s welcome code, early access price and Black Friday teaser go only to its subscribers, so they never appear on its product pages ([a competitor’s real price is the price after the welcome code](' +
        RIVAL_PRICE +
        ')).',
    },

    { kind: 'h2', id: 'cost', text: 'What a silent step costs' },
    {
      kind: 'p',
      text: 'The cost of a silent step is its revenue a day multiplied by the days it stays silent, and the days depend on how often someone checks. On average a break runs for half the gap between checks before it is found: about 15 days with a monthly review, 3.5 with a weekly test and half a day with a daily one.',
    },
    {
      kind: 'list',
      items: [
        '**Revenue a day:** the flow’s attributed revenue for the last 30 days ÷ 30. The low case halves it, because attribution also counts shoppers who would have bought anyway.',
        '**Days saved per break:** the days a break runs with today’s checks, minus the days it would run with the new check.',
        '**Breaks a year:** the theme publishes, app installs, flow edits and expired codes in your last 12 months that stopped a step.',
        '**Saved** = revenue a day × days saved per break × breaks.',
      ],
    },
    {
      kind: 'art',
      caption: 'The sum worked once on an invented store, with 1 break a quarter as its example. Put your own flow report and change log in each row.',
      art: {
        kind: 'price',
        title: 'oakhaven.example · a daily check against a monthly review',
        rows: [
          { label: 'Flow revenue a day', value: '$800', note: '$24,000 over 30 days from 4 flows' },
          { label: 'Low case, halved', value: '$400', note: 'For shoppers who would have bought anyway' },
          { label: 'Days saved per break', value: '14.5', note: '15 with a monthly review, 0.5 with a daily check' },
          { label: 'Saved per break', value: '$5,800 to $11,600', note: '14.5 × $400, and 14.5 × $800' },
          { label: '3 months, 1 break', value: '$5,800 to $11,600' },
          { label: '6 months, 2 breaks', value: '$11,600 to $23,200' },
        ],
        total: { label: '12 months, 4 breaks', value: '$23,200 to $46,400', note: 'Before any Black Friday uplift' },
      },
    },
    {
      kind: 'p',
      text: 'For Black Friday week, use last year’s Black Friday week from the same report. Lebesgue’s [analysis of $22.6 million of Meta spend](' +
        LEBESGUE +
        ') found that the median brand paid 59% more per 1,000 impressions in Black Friday week 2025 than in September, while its conversion rate rose 48%, so a broken step that week wastes dearer clicks and loses more buyers.',
    },
    {
      kind: 'p',
      text: 'Set the saving against what checking costs. Checking those 4 flows daily by hand, at 15 minutes each, takes 30 hours a month, which is $13,633 a year at [$37.87 an hour](' +
        BLS +
        '), the 2025 US median pay for market research analysts. On the example, it breaks even at 1.2 to 2.4 breaks a year. What AI customers cost to run, line by line at published prices, is in [AI customers at scale](/blog/ai-customers-at-scale).',
    },

    { kind: 'h2', id: 'workload', text: 'Shopify website monitoring by hand' },
    {
      kind: 'p',
      text: 'By hand, the hours a week are checks × stores or competitors × minutes each × runs a week, divided by 60. A November week at 1 store, with example inputs to replace with your own:',
    },
    {
      kind: 'list',
      items: [
        '**Your own journeys:** the 12 tests in the [Black Friday checklist](' +
          CHECKLIST +
          ') at about 10 minutes each, run weekly and after 2 changes, take 6 hours.',
        '**5 competitors:** 15 minutes each to read what arrived and check prices, every weekday, take 6.25 hours.',
        '**AI answers:** 15 questions, asked 3 times on 3 assistants, take an afternoon of about 4 hours.',
      ],
    },
    {
      kind: 'p',
      text: 'That is about 16 hours a week, or 70 hours and about $2,650 a month at the same hourly cost. The hours grow faster than the store:',
    },
    {
      kind: 'list',
      items: [
        '**Every market adds a store’s worth of checks,** with its own pop up, codes, currency and delivery promises.',
        '**Every run needs a new identity,** because a welcome email comes once per address.',
        '**The waits stay long.** A basket reminder set for 1 hour still needs watching for a day.',
        '**The evidence is whatever someone saved,** usually a screenshot. The email itself, kept as it arrived, shows when it came and who sent it.',
      ],
    },
    {
      kind: 'p',
      text: `A store that runs these checks as a routine is practising [customer-side observability](/blog/customer-side-observability). ${CUSTOMER_SIDE_OBSERVABILITY.definition} For a store, it rests on 3 things:`,
    },
    {
      kind: 'list',
      items: [
        '**Pass marks written in advance.** The welcome arrives within 5 minutes with the pop up’s code, and the basket reminder within the flow’s delay plus 1 hour, with the product and price. On Shopify, [a checkout counts as abandoned](' +
          SH_ABANDONED +
          ') after more than 10 minutes incomplete once the shopper gives an email, so the checkout reminder’s deadline starts there.',
        '**A cadence.** The same day after every theme, app, flow or discount change, every morning for prices and the pages behind live ads, and every week for each journey end to end.',
        '**An owner for each fail.** The email lead owns the flows, the ecommerce lead the codes and checkout, the performance lead the ad pages, and the owner of the product feed the AI answers.',
      ],
    },

    { kind: 'h2', id: 'what-ai-customers-do', text: 'AI agents for ecommerce: what AI customers do' },
    {
      kind: 'p',
      text: `**${AI_CUSTOMER.definition}** It receives what any new customer receives, at the store and at every competitor. AI customers working for your company do 5 jobs for a store, each with a check, a pass mark and an action for that week.`,
    },
    {
      kind: 'table',
      caption: 'The jobs AI customers do for a store, with the recipe that runs each one',
      cols: ['Job', 'The check', 'A pass', 'That week'],
      rows: [
        [
          'Your journeys after every change: [Website audit](/recipes/website-audit)',
          'Sign up, use the code, leave a basket, stop at checkout',
          'Every email on time, with the right code and product',
          'The step’s owner fixes it, and the journey runs again',
        ],
        [
          'Every journey end to end: [Mystery shopper](/recipes/mystery-shopper)',
          'From the first click to the last email, on a phone and a laptop',
          'Every promise kept, each step timed',
          'Fails ranked by revenue a day',
        ],
        [
          'Competitors’ emails and offers: [Competitor tracking](/recipes/competitor-tracking)',
          'Subscribed to each competitor, every email and text logged',
          'Each competitor’s new offer dated the day it arrives',
          'Set or hold your own offer',
        ],
        [
          'Competitors’ prices after codes: [Price watch](/recipes/price-watch)',
          'Prices, offers and delivery each morning, with subscriber codes',
          'Your price after codes, set against each competitor’s',
          'Choose where to match and where to hold',
        ],
        [
          'What AI assistants say: [Listings and AI answers](/recipes/listings-ai-answers)',
          'Your customers’ questions, asked every week',
          'Price, stock and returns match your pages',
          'The source corrected, then the question asked again',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Obsession runs these jobs today. It makes AI customers that sign up to any company and keep every email, offer and price it sends, so your company can find its revenue leaks, watch its competitors and prospect with proof. For a store, it shows what a real customer gets after the sign up, the click and the checkout, at the store and at its competitors. AI customers say they are AI whenever they talk to a person, never use fake payment details, and place a real order only on a card your company funds.',
    },

    { kind: 'h2', id: 'next', text: 'What changes in 2026 and 2027' },
    {
      kind: 'list',
      items: [
        '**Live: AI channels on by default.** [Shopify’s agentic storefronts](' +
          SHOPIFY_AGENTIC +
          '), which list a store’s products in ChatGPT, Google AI Mode and Gemini, Microsoft Copilot and Meta, are active by default for eligible stores.',
        '**Live: a cart that watches prices.** Google’s [Universal Cart](' +
          GOOGLE_CART +
          '), launched in the US on 15 October 2026, saves products from several retailers, tracks price and stock changes and shows promo codes.',
        '**Live: discount logic has moved.** Shopify Scripts [stopped running on 30 June 2026](' +
          SCRIPTS +
          '), replaced by Shopify Functions, so every custom discount once built on Scripts needs testing again.',
        '**Announced: what a stop to a text covers.** An FCC order released on 1 October 2026 lets a business treat a stop to an informational text, such as a shipping update, as covering only that kind of message, while a stop to a marketing text still ends all of its marketing texts, [as Latham & Watkins explains](' +
          TCPA +
          '). The order takes effect 30 days after it is published in the Federal Register. This is not legal advice.',
        '**Forecast: more shoppers arrive from AI.** Adobe [reported](' +
          ADOBE_2025 +
          ') that traffic from generative AI tools to US retail sites rose 693.4% in the 2025 holiday season, from a small base, and forecasts a further 130% rise year over year this season.',
        '**Forecast: agents as buyers.** [McKinsey](' +
          MCKINSEY +
          ') forecasts that by 2030 AI agents could orchestrate $900 billion to $1 trillion of US consumer retail revenue.',
      ],
    },
    {
      kind: 'p',
      text: 'Each change adds a reader or a rule that a store’s own reports don’t follow, and each is checked the way a welcome email is: write down what the store’s pages say, act as a customer would, and compare. AI customers repeat that every week and after every change, so a wrong price in an AI answer or a dead code after a discount change is found the week it starts. The Shopify settings to review and a readiness test are in [agentic commerce for merchants](' +
        AGENTIC +
        ').',
    },

    { kind: 'h2', id: 'options', text: 'Shopify store monitoring options, compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 24 October 2026. If your store needs to see what a real customer receives after the sign up, the code and the basket, at your store and at your competitors, use Obsession. For uptime alone a scripted monitor is enough, and a store that rarely changes can check by hand.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to watch a store, its competitors and its AI answers. Prices from each provider’s own pages, 24 October 2026. Otterly.AI’s prices are billed monthly',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'A fault runs until sales dip or a customer writes', 'A store that rarely changes'],
        [
          'By hand: a new address, a phone and a sheet',
          'Any journey or competitor, with your own judgement',
          'Your hours\nUS median pay: $37.87 an hour',
          'Hours grow with every market, competitor and change',
          '1 store, monthly and after changes',
        ],
        [
          'Your own reports: Shopify, your email platform, GA4',
          'What was sent, visited and sold',
          'In your plans',
          'What reached each customer, and when',
          'Spotting a drop once it shows',
        ],
        [
          'Uptime and scripted tests: [Checkly](' + CHECKLY + '), [Pingdom](' + PINGDOM + ')',
          'Alerts at any hour when a page or scripted path fails',
          'Checkly: $0, $24 or $64 a month, billed annually\nPingdom: from £12.16 a month, billed annually',
          'Doesn’t sign up or wait for emails',
          'Uptime of key pages and the cart',
        ],
        [
          'Shopify monitoring app: [Checkout Doctor](' + CHECKOUT_DOCTOR + ')',
          'Checkout, discounts and shipping tested on a schedule, with a dollar estimate',
          'Free health check\nPaid: $29, $79 or $199 a month',
          'Stops before payment, with no email checks described',
          'Checkout tests without a developer',
        ],
        [
          'Competitor tracking: [Panoramata](' + PANORAMATA + ')',
          'Competitors’ emails, ads and pages, with history',
          '$99, $179 or $399 a month',
          'Startup: 20 competitors and 6 months of history',
          'Competitor research across channels',
        ],
        [
          'AI visibility tracking: [Otterly.AI](' + OTTERLY + ')',
          'What ChatGPT, Perplexity, Copilot and AI Overviews say, by prompt',
          '$29, $189 or $489 a month',
          '15 prompts on Lite, 400 on Premium',
          'Brand mentions in AI answers',
        ],
        [
          'AI browser agent: [ChatGPT’s cloud browser](' + CLOUD_BROWSER + ')',
          'Fills in forms and clicks through a task',
          'Paid ChatGPT plans, except Free and Go',
          'Pauses for your input or a sign in',
          'One off checks of a page or form',
        ],
        [
          'Obsession (ours): [Website audit](/recipes/website-audit), [Mystery shopper](/recipes/mystery-shopper), [Competitor tracking](/recipes/competitor-tracking), [Price watch](/recipes/price-watch), [Listings and AI answers](/recipes/listings-ai-answers)',
          'AI customers of your store and its competitors, every email, code and price kept as proof',
          'Running now: first store check free\nCredit-based plans, like Claude’s',
          'Stops at bot walls and CAPTCHAs',
          'What a real customer gets after sign up, click and checkout, kept as proof',
        ],
      ],
    },

    { kind: 'h2', id: 'when-not', text: 'When a store doesn’t need AI customers' },
    {
      kind: 'list',
      items: [
        '**A store that rarely changes,** runs no paid traffic and has 1 or 2 flows. A new address, a phone and a sheet, once a month and after every change, cover it.',
        '**Uptime at every hour.** A scripted monitor alerts within minutes when a page or the cart goes down.',
        '**A brand that sells mainly through marketplaces or wholesale** and sends no flows of its own. Its customers’ messages come from someone else’s systems.',
        '**Last year’s competitor campaigns.** An AI customer holds what arrives from the day it joins, so earlier emails need an archive that already covered the brand.',
      ],
    },

    { kind: 'h2', id: 'start', text: 'Start this week' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Open your email platform’s flow report and note the revenue a day of your welcome, browse, basket and checkout flows.',
        'Write a pass mark for each: what arrives, by when and with what.',
        'Run each journey once from a new email address and phone number, on your phone, and record what arrives against the pass marks.',
        'Ask 3 AI assistants what your customers ask about price, delivery and returns, and compare the answers with your pages ([what ChatGPT says about your store](' +
          AI_ANSWERS +
          ') sets out the check).',
        'Use the cost sum to set how often each check runs before your freeze, around 20 November.',
      ],
    },
    {
      kind: 'cta',
      text: 'Obsession makes the first AI customers that work for you. Check your store free: 4 AI customers sign up, browse, leave a basket and stop at checkout, and every inbox is watched for 48 hours. What happened arrives within 4 days, with proof and the fix for each leak.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check my store free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI agents for ecommerce' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are AI agents for ecommerce?',
          a: 'AI agents for ecommerce are AI systems that do work for or around an online store. Most work for the store, such as support agents that answer shoppers. AI customers work on the customer’s side, shopping the store and its competitors as new customers and keeping what arrives as evidence.',
        },
        {
          q: 'How can AI agents help an ecommerce business?',
          a: 'They answer shoppers, draft campaigns and handle admin. AI customers add the customer’s view: whether each email, text, code and reminder arrives as promised, what competitors offer and what AI assistants say.',
        },
        {
          q: 'What AI tools should a Shopify store use?',
          a: 'One per job: a support agent for customer questions, Shopify’s Sidekick for admin tasks, an uptime monitor for the pages, and AI customers for what shoppers receive after the sign up.',
        },
        {
          q: 'How do I monitor my Shopify website?',
          a: 'Use an uptime monitor for the homepage, product pages and cart, Shopify’s reports for the funnel, and a test as a new customer for the welcome, the code at checkout and the basket reminder, run again after every theme, app, flow or discount change.',
        },
        {
          q: 'Why is my Shopify Flow not working?',
          a: 'In your Shopify admin, open Apps, then Flow, then Recent runs, and filter by errors or by runs that took no action. [Shopify’s help centre](' +
            FLOW_RUNS +
            ') says runs are kept for 14 days after they complete. A completed run shows the workflow ran. Whether its email or text arrived shows in a test from a new address and phone.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the examples',
      text: 'oakhaven.example, its competitor, its revenue and both illustrations are invented. The half the gap rule assumes a break is as likely to start on any day. Nothing here is legal advice.',
    },
  ],

  sources: [
    { title: 'The only AI Agent built for ecommerce', publisher: 'Gorgias', url: GORGIAS },
    { title: 'Sidekick', publisher: 'Shopify Help Center', url: SIDEKICK },
    { title: 'Adobe: U.S. holiday shopping season to hit record $275.1 billion online, rising 6.7% YoY', publisher: 'Adobe', url: ADOBE_2026, date: '2026-09-28' },
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KLAVIYO_BENCH, date: '2026' },
    { title: 'Klaviyo breaks records with first AI-powered BFCM', publisher: 'Klaviyo', url: KLAVIYO_BFCM, date: '2025-12-02' },
    { title: 'How long before you connected a dip in your numbers to something broken?', publisher: 'Shopify Community', url: SC_QUIET, date: '2026-09-29' },
    { title: 'Flows stopped working', publisher: 'Klaviyo Community', url: K_ZERO, date: '2024-10-01' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: '50 cart abandonment rate statistics 2026', publisher: 'Baymard Institute', url: BAYMARD, date: '2025-09-22' },
    { title: 'Abandoned cart email statistics & strategy guide: 2025 research report', publisher: 'Rejoiner', url: REJOINER, date: '2025-02-10' },
    { title: 'Shopping with ChatGPT Search', publisher: 'OpenAI Help Center', url: OPENAI_SHOPPING },
    { title: 'AI can’t take over your holiday shopping quite yet, a new study suggests (Product.ai study)', publisher: 'Business Insider, republished by DNYUZ', url: PRODUCT_AI, date: '2026-09-25' },
    { title: 'Meta Ads on Black Friday: why higher CPMs can still pay off', publisher: 'Lebesgue', url: LEBESGUE, date: '2026-10-16' },
    { title: 'Market research analysts: Occupational Outlook Handbook', publisher: 'US Bureau of Labor Statistics', url: BLS },
    { title: 'Recovering abandoned checkouts', publisher: 'Shopify Help Center', url: SH_ABANDONED },
    { title: 'Shopify agentic storefronts', publisher: 'Shopify Help Center', url: SHOPIFY_AGENTIC },
    { title: 'An intelligent new shopping cart', publisher: 'Google', url: GOOGLE_CART, date: '2026-10-15' },
    { title: 'Shopify Scripts will be deprecated on June 30, 2026', publisher: 'Shopify developer changelog', url: SCRIPTS, date: '2026-04-09' },
    { title: 'FCC revamps rules on consent to calls and texts under the TCPA', publisher: 'Latham & Watkins', url: TCPA, date: '2026-10-08' },
    { title: 'Holiday shopping season drove a record $257.8 billion online with consumers embracing generative AI tools', publisher: 'Adobe', url: ADOBE_2025, date: '2026-01-07' },
    { title: 'The agentic commerce opportunity: how AI agents are ushering in a new era for consumers and merchants', publisher: 'McKinsey & Company', url: MCKINSEY, date: '2025-10-17' },
    { title: 'Pricing', publisher: 'Checkly', url: CHECKLY },
    { title: 'Pricing', publisher: 'Pingdom', url: PINGDOM },
    { title: 'Checkout Doctor: Store Alerts', publisher: 'Shopify App Store', url: CHECKOUT_DOCTOR },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Pricing', publisher: 'Otterly.AI', url: OTTERLY },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: CLOUD_BROWSER },
    { title: 'Finding and monitoring workflow runs', publisher: 'Shopify Help Center', url: FLOW_RUNS },
  ],
  related: [
    'why-ai-customers-matter',
    'ai-customers-for-retention-agencies',
    'recipe:website-audit',
    'recipe:mystery-shopper',
    'recipe:competitor-tracking',
    'recipe:price-watch',
    'recipe:listings-ai-answers',
  ],
}
