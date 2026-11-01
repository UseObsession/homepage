import type { BlogPost } from './types'
import { AI_CUSTOMER, CUSTOMER_SIDE_OBSERVABILITY } from '../glossary'

/* The why series, Spec F (24 Oct 2026): why companies that sell to Shopify brands need AI customers. It owns "shopify
   store leads" (primary), with "ecommerce store leads", "shopify store lead list", "find shopify stores", "shopify app
   growth", "shopify app marketing strategy" and "email deliverability tools" (Google autocomplete, US and UK, 24 Oct
   2026). It leaves "how to find ecommerce clients" to /blog/how-to-find-ecommerce-clients and "competitor email
   tracking" to /blog/competitor-email-tracking-tools, and links to both.
   Readers: heads of sales, growth, partnerships and customer success at email and SMS platforms, Shopify app vendors
   and deliverability vendors, treated as one reader with three examples.
   Why now: Black Friday on Fri 27 Nov 2026, with teasers and early access in early November (Klaviyo's June 2026
   guide); a store's Black Friday mail reaches only those subscribed before it is sent.
   The argument: every vendor buys the same install data, which says what a store has, never whether it works for the
   store's customers. A customer-side fact is the opener a store can check and the strongest proof of need, and after
   the sale the same facts show customer success that the product works on each account. The sum is first year value
   per brand (Smile.io Growth $2,388 low, Inbox Monster's $15,000 starting price high) at 3, 6 and 12 months, against
   the hours of checking by hand (2 SDRs, 50 stores a week each, 12 minutes a store, at the Bridge Group's $80,000
   median SDR OTE), so the payback comes before any price.
   Opened on 24 Oct 2026 at each source's own page: Store Leads' home page (plans, billing, install dates and log) and
   its Klaviyo, Omnisend and Mailchimp technology reports (updated 16 Oct 2026; the research file's 9 Oct figures were
   replaced by what the pages show today: Klaviyo +24.0%, not +18.8%); BuiltWith's plans page; Postscript, Smile.io,
   Tie and Inbox Monster pricing; the Bridge Group's 2025 SDR report page; Klaviyo's Black Friday timing post and its
   Gmail post; Gmail's sender guidelines; Omnisend's Klaviyo migration page; Modern Inbound's guide for Shopify app
   developers (1 Aug 2026); Clay, Panoramata and GlockApps pricing; Salesforce's 19 Oct 2026 piece. From the verified
   library (_research/seo/plan/ai-customers/facts.json): Joy Joya, Klaviyo's benchmarks, Rejoiner, Clay's 6,346 forms,
   Shopify's agentic storefronts, Adobe's forecast, ChatGPT's cloud browser.
   Left out on purpose: Tapcart (its pricing page doesn't say which figure is monthly), the Shopify Community thread
   (403), BuiltWith's Trustpilot reviews, RepVue and Vendr figures, the research files' secondhand prices, call notes,
   the offers' sales wording, Gartner, ChatGPT agent, any Obsession price, customer or result,
   the site's 93% and 128 stores, any PilotX figure. The 5 stores, the sales team and every timing in the
   illustrations are invented. No dashes. */

const SL_KLAVIYO = 'https://storeleads.app/reports/technology/Klaviyo'
const SL_OMNISEND = 'https://storeleads.app/reports/technology/Omnisend'
const SL_MAILCHIMP = 'https://storeleads.app/reports/technology/Mailchimp'
const POSTSCRIPT = 'https://postscript.io/pricing'
const SMILE = 'https://smile.io/pricing'
const TIE = 'https://meettie.com/pricing'
const INBOX_MONSTER = 'https://inboxmonster.com/pricing'
const BRIDGE = 'https://www.bridgegroupinc.com/research/2025-sdr-models-metrics-report-the-bridge-group'
const KL_TIMING = 'https://www.klaviyo.com/blog/when-to-send-black-friday-emails'
const STORELEADS = 'https://storeleads.app/'
const BUILTWITH = 'https://builtwith.com/plans'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const KLAVIYO_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const REJOINER = 'https://rejoiner.com/abandoned-cart-email-report'
const GMAIL_RULES = 'https://support.google.com/a/answer/81126?hl=en'
const OMNISEND_SWITCH = 'https://www.omnisend.com/klaviyo-migration-offer/'
const MODERN_INBOUND = 'https://moderninbound.com/blog/cold-email-for-shopify-app-developers'
const CLAY_TEST = 'https://www.clay.com/blog/claygent-experiment-speed-to-lead'
const GMAIL_GEMINI = 'https://blog.google/products-and-platforms/products/gmail/gmail-is-entering-the-gemini-era/'
const KL_GMAIL = 'https://www.klaviyo.com/blog/gmail-gemini-in-the-inbox'
const SHOPIFY_AGENTIC = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts'
const ADOBE = 'https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record'
const SF_PERSONAL = 'https://www.salesforce.com/news/stories/personal-agents-to-drive-more-contact-center-traffic/'
const CLAY_PRICING = 'https://www.clay.com/pricing'
const PANORAMATA = 'https://www.panoramata.co/pricing'
const GLOCKAPPS = 'https://glockapps.com/pricing/'
const CLOUD_BROWSER = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'

export const post: BlogPost = {
  slug: 'ai-customers-for-ecommerce-vendors',
  title: 'Why companies that sell to Shopify brands need AI customers',
  dek: 'A store lead list shows what a store has installed. AI customers show what its new customers receive, which gives a sales team a fact the store can check and customer success proof that the product works on every account.',
  metaTitle: 'Shopify store leads: why ecommerce vendors need AI customers',
  description:
    'Shopify store leads show what a store has installed. AI customers show what its customers receive, so vendors selling to Shopify brands open with proof.',
  answer:
    'Companies that sell to Shopify brands, such as email and SMS platforms, Shopify app vendors and deliverability vendors, need AI customers because Shopify store leads show what a store has installed, and only a customer of the store sees whether it works. An AI customer becomes a new customer of each store, with its own inbox, phone number and browser, and records what arrives, from the welcome email to the text after the opt in. With Obsession’s AI customers, sales teams open with a fact the store can check, and customer success sees each account’s messages arrive before the renewal.',
  primaryKeyword: 'shopify store leads',
  keywords: [
    'shopify store leads',
    'ecommerce store leads',
    'shopify store lead list',
    'find shopify stores',
    'shopify app growth',
    'shopify app marketing strategy',
    'email deliverability tools',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-28',
  readingMinutes: 13,
  order: 17,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'Next week’s sequence · 5 Shopify stores',
      period: 'Signed up Mon 19 Oct, read 48 hours later',
      cols: ['Store', 'Installed', 'What a new customer got'],
      rows: [
        { name: 'larkbay.example', cells: ['SMS app', 'No text after the opt in'], tone: 'fail' },
        { name: 'ferncastle.example', cells: ['Email platform', 'Welcome in 3 minutes'], tone: 'ok' },
        { name: 'otterpine.example', cells: ['Cart reminder app', 'Reminder after 26 hours'], tone: 'late' },
        { name: 'mossgate.example', cells: ['Email platform', 'Welcome landed in spam'], tone: 'fail' },
        { name: 'brackwell.example', cells: ['SMS app', 'Text in 40 seconds'], tone: 'ok' },
      ],
      notes: [
        'An example on invented stores. Installed is what a store lead list shows.',
        'What a new customer got in 48 hours, each email and text kept as it arrived.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Email and SMS platforms, Shopify app vendors and deliverability vendors sell to the same customers, Shopify and direct to consumer brands, and grow by winning more of them. AI customers show their sales and customer success teams what each store’s new customers receive, which no install list records. [What AI customers are](/blog/ai-customers) defines the term, and [why AI customers matter](/blog/why-ai-customers-matter) makes the case for every company.',
    },
    {
      kind: 'p',
      text: 'Brands move between competitors, and the install counts show it. Store Leads’ figures, updated on 16 October 2026, show [Klaviyo on 587,883 ecommerce stores, up 24.0% in a year](' +
        SL_KLAVIYO +
        '), while installs of [Omnisend fell 18.5%](' +
        SL_OMNISEND +
        ') and installs of [Mailchimp fell 14.5%](' +
        SL_MAILCHIMP +
        ').',
    },
    {
      kind: 'stat',
      value: '24.0%',
      label: 'rise in a year in the ecommerce stores with Klaviyo installed, while Omnisend installs fell 18.5%',
      source: 'Store Leads, 16 October 2026',
      href: SL_KLAVIYO,
    },

    { kind: 'h2', id: 'their-world', text: 'How companies that sell to Shopify brands grow' },
    {
      kind: 'p',
      text: 'These companies are paid per brand, every month or every year, so growth is counted in brands won and brands kept. Their price pages show the range. [Postscript](' +
        POSTSCRIPT +
        ') charges $100 a month for its Growth SMS plan and $500 for Professional, billed monthly, plus a rate for each text. [Smile.io](' +
        SMILE +
        ') charges $199 a month for its Growth loyalty plan, billed monthly, and $999 a month for Smile Plus, billed annually. [Tie](' +
        TIE +
        '), a shopper intelligence platform whose Priority plan covers inbox placement, lists Priority at $9,000 a year paid upfront on a 12 month contract, and [Inbox Monster’s Deliverability suite](' +
        INBOX_MONSTER +
        ') starts at $15,000 a year.',
    },
    {
      kind: 'p',
      text: 'One new brand is worth its plan × the months it stays: $2,388 in a first year on Smile.io’s Growth plan before extra orders, $6,000 on Postscript’s Professional plan before the rate per text, and $9,000 on Tie’s Priority plan. A customer that renews is worth the same again.',
    },
    {
      kind: 'p',
      text: 'The sales week starts from a list. A store lead provider such as Store Leads or BuiltWith filters stores by platform, country, estimated sales and installed apps, often down to the stores running a competitor’s tool. Revenue operations (RevOps) loads the export into Clay or the CRM, SDRs (sales development reps, who book first meetings) run the sequences, and account executives take the meetings. [The Bridge Group’s 2025 report](' +
        BRIDGE +
        ') puts the median monthly SDR quota at 10 meetings held, with 60% of reps reaching it, the lowest share in the study’s history.',
    },
    {
      kind: 'p',
      text: 'The stores’ calendar sets the timing. Black Friday is on Friday 27 November 2026, and [Klaviyo’s guide](' +
        KL_TIMING +
        ') has brands send teasers and early access offers in early November. A store’s Black Friday emails reach only the people on its list when they go out, so a vendor that wants a prospect’s Black Friday for a January meeting has to be on that list before November.',
    },

    { kind: 'h2', id: 'blind-spots', text: 'What install data can’t show' },
    {
      kind: 'p',
      text: 'Store lead data answers who to call. [Store Leads](' +
        STORELEADS +
        ') shows which apps and technologies are installed on each store with the installation date, and keeps a log of installs and uninstalls. [BuiltWith](' +
        BUILTWITH +
        ') says it indexes the internet the way Google does, with more than 18 years of technology history. Both read what a store has on its site, and 4 things stay outside that view.',
    },
    {
      kind: 'list',
      items: [
        '**Whether the installed tool works.** An SMS app on a store says nothing about whether a new subscriber gets a text. In [a test of 362 ecommerce brands by Joy Joya](' +
          JOYJOYA +
          '), 53 never sent the text they promised, 158 sent no welcome email and 20 sent a welcome offer that didn’t match the pop up.',
        '**What the store’s automated messages miss.** Klaviyo’s own [2026 benchmarks](' +
          KLAVIYO_BENCH +
          ') show flows earning nearly 41% of email revenue from 5.3% of sends, and Rejoiner’s [analysis of 1,000 direct to consumer brands](' +
          REJOINER +
          ') found 68% of abandoned carts triggered a reminder email, so about 1 in 3 got none.',
        '**Where the store’s mail lands.** [Gmail’s sender guidelines](' +
          GMAIL_RULES +
          ') require every sender to keep spam rates below 0.3%, recommend below 0.10%, and warn that messages that aren’t authenticated “might be marked as spam or rejected”. Placement tests measure the email a sender sends to the test, so a deliverability vendor sees a prospect’s placement once the prospect runs one or grants access.',
        '**A reason the store would answer.** Every vendor in a category can buy the same filter, such as stores running a competitor’s app, so those stores hear the same reason to switch from several vendors. Omnisend’s page for brands on Klaviyo leads with price, “[Why pay more for the same emails?](' +
          OMNISEND_SWITCH +
          ')”, and [Modern Inbound’s 2026 guide for Shopify app developers](' +
          MODERN_INBOUND +
          ') advises fixing the list before the copy when the reply rate is below 2%.',
      ],
    },
    {
      kind: 'quote',
      text: 'Merchants ignore emails that describe features.',
      cite: 'Modern Inbound, in its August 2026 guide to cold email for Shopify app developers',
      href: MODERN_INBOUND,
    },
    {
      kind: 'p',
      text: 'Customer success meets the same gap after the sale. A health score reads the vendor’s own product data, and an install log records an uninstall after it happens. Whether an account’s welcome email, texts or reminders still reach its shoppers shows on the shopper’s side.',
    },

    { kind: 'h2', id: 'cost', text: 'What it costs a sales team' },
    {
      kind: 'p',
      text: '1 brand won is worth its first year on your company’s own price list. The published prices give a low case of $2,388, a year on Smile.io’s Growth plan, and a high case of $15,000, the starting yearly price of Inbox Monster’s Deliverability suite. The same figures price a customer kept for another year.',
    },
    {
      kind: 'table',
      caption: 'The value of 1 brand won, at a low and a high published price. Put your own first year value in either column',
      cols: ['Months as a customer', 'Low: $2,388 a year', 'High: $15,000 a year'],
      rows: [
        ['3 months', '$597', '$3,750'],
        ['6 months', '$1,194', '$7,500'],
        ['12 months', '$2,388', '$15,000'],
      ],
    },
    {
      kind: 'p',
      text: 'Checking by hand has its own cost. 2 SDRs who each check 50 new stores a week by hand, at 12 minutes a store, spend 20 hours a week between them, or 1,040 hours a year. At the Bridge Group’s median SDR on target earnings of $80,000, about $38.46 an hour over 2,080 working hours, that is $40,000 a year. The routine pays for itself if it wins about 3 more brands a year at the high case, or 17 at the low case.',
    },
    {
      kind: 'art',
      caption: 'The payback worked once for an invented sales team with example timings. The hourly rate is the Bridge Group’s median SDR pay and the first year values are published prices. Put your own numbers in each row.',
      art: {
        kind: 'price',
        title: 'A sales team with 2 SDRs · checking stores by hand',
        rows: [
          { label: 'Each store, once', value: '12 minutes', note: 'Sign up, opt in, basket, read after 48 hours' },
          { label: 'A week, 100 new stores', value: '20 hours', note: '2 SDRs × 50 stores' },
          { label: 'A year', value: '1,040 hours', note: '20 hours × 52' },
          { label: 'Cost of the hours', value: '$40,000', note: '× $38.46, median SDR pay an hour' },
          { label: '1 brand, high case', value: '$15,000', note: 'A year, Inbox Monster’s starting price' },
          { label: '1 brand, low case', value: '$2,388', note: 'A year, Smile.io Growth' },
        ],
        total: { label: 'Brands won that cover it', value: '2.7 to 16.8', note: '$40,000 ÷ each first year value' },
      },
    },
    {
      kind: 'p',
      text: 'The cheaper each check, the fewer brands it takes to pay back, so put any tool’s yearly price in place of the hours. [AI customers at scale](/blog/ai-customers-at-scale) prices an AI customer line by line, at about $2 a month for one that watches one company’s email at published retail prices.',
    },

    { kind: 'h2', id: 'workload', text: 'The workload of checking stores by hand' },
    {
      kind: 'p',
      text: 'By hand, the hours are checks × stores × minutes × how often. A rep signs up to a store with a new address, opts in to texts with a new number and leaves a basket, then comes back after 48 hours to log what arrived. At an example 12 minutes a store, 50 stores a week take each rep 10 hours, before any store is checked a second time.',
    },
    {
      kind: 'list',
      items: [
        '**Every store needs its own identity.** A welcome email comes once per address, and a rep’s work address puts the vendor’s name on the prospect’s list. 50 stores a week need 50 addresses and 50 phone numbers.',
        '**The waits are long.** A text promised after an opt in, or a basket reminder, can take a day to arrive, so the rep returns to every store at least once.',
        '**The fact ages.** A store that fixes its welcome email next week needs a different first line, and a store first checked after Black Friday has no record of its Black Friday.',
        '**The evidence is a screenshot.** The email as it arrived carries its time and its sender, which a screenshot loses.',
      ],
    },
    {
      kind: 'p',
      text: `${CUSTOMER_SIDE_OBSERVABILITY.definition} For a vendor, [customer-side observability](/blog/customer-side-observability) is a routine set once per product: a pass mark for each check written before the first run, a cadence, and a named owner for each fail.`,
    },
    {
      kind: 'table',
      caption: 'A routine for prospects and customers, with pass marks set before the first run. Example marks and owners',
      cols: ['Check', 'Pass mark', 'Cadence', 'Owner of a fail'],
      rows: [
        ['Welcome email', 'Within 1 hour of the sign up', 'Before the first touch, then weekly', 'SDR for a prospect\nCustomer success for an account'],
        ['Text after the opt in', 'Within 24 hours', 'Before the first touch, then weekly', 'SDR for a prospect\nCustomer success for an account'],
        ['Basket reminder', 'Within 24 hours of the basket', 'Before the first touch', 'SDR'],
        ['Where the welcome lands', 'Inbox, out of spam', 'Weekly', 'Deliverability lead'],
        ['Your product’s own messages', 'Every message arrives', 'After every release', 'Engineering'],
      ],
    },

    { kind: 'h2', id: 'jobs', text: 'What AI customers do for a vendor’s team' },
    { kind: 'p', text: `**${AI_CUSTOMER.definition}**` },
    {
      kind: 'p',
      text: 'Each store on the list and each customer account gets its own AI customer, through the sign up any customer can use. Obsession runs this today. It makes AI customers that sign up to any company and keep every email, offer and price it sends, so your company can find its revenue leaks, watch its competitors and prospect with proof. For a vendor, it shows what each store’s customers receive, as a fact for the first email and the renewal. The same 5 jobs serve an email or SMS platform, a Shopify app and a deliverability vendor, each pointed at the gap its product closes.',
    },
    { kind: 'h3', id: 'before-first-touch', text: '1. A fact for every store before the first touch' },
    {
      kind: 'p',
      text: '**The check:** a sign up, a text opt in and, where the product needs it, a basket left at every store in the next sequence, then 48 hours of waiting. **A pass:** a dated verdict for each store against the gap the product closes, such as no text within 24 hours of the opt in, with the email or text as evidence. **That week:** SDRs write to the stores with the gap, opening with a fact the store can check in its own inbox, and drop the rest from the sequence. [Prospect intelligence](/recipes/prospect-intelligence) becomes a customer of every prospect on a list and proves the gap a company fixes.',
    },
    { kind: 'h3', id: 'competitor-stores', text: '2. Stores on a competitor’s platform, sorted by what they send' },
    {
      kind: 'p',
      text: '**The check:** an AI customer on the list of each store running a competitor’s email, SMS or loyalty tool, logging every email and text from the day it joins. **A pass:** each store’s sends dated, with how often it sends and what it offers. **That week:** RevOps sorts the territory by what stores do, the account executive brings a store’s own emails to discovery, and product marketing adds what a competitor’s customers send to the battlecard. [Email and SMS tracking](/recipes/email-sms-tracking) subscribes to every brand on a list and sets their emails and texts side by side. Archives of brands’ past emails are compared in [competitor email tracking tools](/blog/competitor-email-tracking-tools).',
    },
    { kind: 'h3', id: 'placement', text: '3. Where a prospect’s mail lands' },
    {
      kind: 'p',
      text: '**The check:** for a deliverability vendor, the prospect’s welcome email and first campaigns, received by a new subscriber with its own inbox. **A pass:** each message dated, with the folder it reached in that inbox, stated as one new subscriber’s view. **That week:** the founder or rep opens with it and runs the full audit or a placement test after the prospect says yes, the order set out in [auditing a prospect’s email without a Klaviyo login](/blog/audit-prospect-email-without-klaviyo-login).',
    },
    { kind: 'h3', id: 'accounts', text: '4. Every customer account, every week' },
    {
      kind: 'p',
      text: '**The check:** an AI customer on each customer’s store, receiving the welcome, texts, reminders or points emails the product sends for that store. **A pass:** every message the product powers arrives inside its deadline. **That week:** customer success fixes a break before the account’s shoppers notice, shows what they received at the quarterly review, and flags any account whose emails stop or texts go quiet ahead of its renewal. [Account watch](/recipes/account-watch) stays a customer of every account and flags churn and upsell with the play drafted.',
    },
    { kind: 'h3', id: 'releases', text: '5. Your own product after every release' },
    {
      kind: 'p',
      text: '**The check:** a test store your team runs on its own product, where AI customers sign up, opt in and wait after every release, as [Delivery monitoring](/recipes/delivery-monitoring) does for a company’s first 14 days. **A pass:** every email, text and code the product sends arrives inside its deadline. **That week:** engineering fixes or rolls back a release before merchants’ shoppers miss a message.',
    },

    { kind: 'h2', id: 'what-changes', text: 'What changes in 2026 and 2027' },
    {
      kind: 'list',
      items: [
        '**Live: agents already play the buyer.** Clay’s team [built agents that submitted 6,346 demo and contact forms](' +
          CLAY_TEST +
          ') and waited to see who replied, in a study published in September 2026. The same method works on a store’s sign up.',
        '**Rolling out: Gmail’s AI summarises brand mail.** [Google’s January 2026 update](' +
          GMAIL_GEMINI +
          ') began rolling out AI Overview summaries and Suggested Replies to everyone in the US, in English, and gave trusted testers an AI Inbox before a wider release. [Klaviyo](' +
          KL_GMAIL +
          ') says “We don’t yet know exactly how Gmail’s AI will summarize, categorize, or prioritize brand emails at scale.”',
        '**Live: AI channels on by default.** [Shopify’s agentic storefronts](' +
          SHOPIFY_AGENTIC +
          '), which list a store’s products in ChatGPT, Google AI Mode and Gemini, Microsoft Copilot and Meta, are active by default for eligible stores, so the product data and reviews an app shapes now reach AI assistants too.',
        '**Forecast: more shoppers arrive through AI.** [Adobe forecasts](' +
          ADOBE +
          ') that AI traffic to US retail sites will rise 130% year over year this holiday season, measured by shoppers clicking a link. A Salesforce executive wrote on 19 October 2026 that consumers are starting to hand personal AI agents tasks [from cancelling subscriptions to booking restaurant reservations](' +
          SF_PERSONAL +
          ').',
      ],
    },
    {
      kind: 'p',
      text: 'Each shift changes what a store’s customers receive, or who reads it, while its install list stays the same. AI customers on each prospect’s and customer’s list record the change the week it starts, so the first line of a sequence and the renewal conversation both rest on what customers received.',
    },

    { kind: 'h2', id: 'options', text: 'Shopify store leads and other options, compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 24 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways a sales team can qualify stores and open with a fact. Prices from each provider’s own page, 24 October 2026. Store Leads offers 15% off a yearly plan, and BuiltWith’s prices are its monthly plans',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'Every competitor writes to the same stores', 'Growth from App Store search alone'],
        [
          'By hand: a new address, a phone and a sheet',
          'Any store, with the rep’s judgement',
          'Rep hours\nMedian SDR on target pay: $80,000 a year',
          'Hours grow with every store and recheck',
          '10 to 20 top accounts',
        ],
        [
          'Store lead lists: [Store Leads](' + STORELEADS + '), [BuiltWith](' + BUILTWITH + ')',
          'Every store with a given app, with install dates and history',
          'Store Leads: $75, $250, $450 or $950 a month\nBuiltWith: lookups free, plans $295, $495 or $995 a month',
          'What a store installed, never what it sends',
          'Building and sizing the list',
        ],
        [
          'Enrichment and AI research: [Clay](' + CLAY_PRICING + ')',
          'Contacts and custom data points from web research, in one table',
          'Free\nLaunch: $185 a month, or $167 billed yearly',
          'Reads the web, with no subscriber inbox described',
          'People and page facts for each row',
        ],
        [
          'Email libraries: [Panoramata](' + PANORAMATA + ')',
          'Brands’ emails, texts, flows and ads, with history',
          '$99, $179 or $399 a month, billed monthly',
          'Startup: 20 competitors and 6 months',
          'Battlecards and competitor research',
        ],
        [
          'Inbox placement tests: [GlockApps](' + GLOCKAPPS + ')',
          'Where a test email lands across Gmail, Outlook, Yahoo and more',
          'Free: 2 tests\nEssential: $708 a year\nGrowth: $1,188 a year',
          'Tests the email the sender sends',
          'A sender’s own deliverability',
        ],
        [
          'AI browser agent: [ChatGPT’s cloud browser](' + CLOUD_BROWSER + ')',
          'Fills in forms and clicks through a task',
          'Paid ChatGPT plans except Free and Go, in supported regions',
          'Pauses for input or a sign in',
          'One off checks of a sign up form',
        ],
        [
          'Obsession (ours): [Prospect intelligence](/recipes/prospect-intelligence), [Email and SMS tracking](/recipes/email-sms-tracking), [Delivery monitoring](/recipes/delivery-monitoring), [Account watch](/recipes/account-watch)',
          'AI customers at every store on the list and every account, each email and text kept',
          'Running now\nCredit-based plans, like Claude’s',
          'Stops at bot walls and CAPTCHAs',
          'What each store’s customers receive, as proof for the first email',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If your team needs a fact about what each store’s customers receive, for the first email or the renewal, use Obsession. For 10 to 20 top accounts a quarter, a rep with a new address and a phone is enough. The options combine: a store lead list chooses the stores, Clay finds the people, a library holds past emails, and AI customers record what each store sends its new customers now. [AI customers for commercial teams](/blog/ai-customers-for-commercial-teams) sets out the same checks for marketing, agencies and CX.',
    },

    { kind: 'h2', id: 'when-not', text: 'When a vendor doesn’t need AI customers' },
    {
      kind: 'list',
      items: [
        '**Growth comes from the App Store alone.** A vendor with no outbound list and no named accounts has nowhere to use the fact.',
        '**The product works where customers never look,** such as accounting, inventory or fraud screening. Install data and company size qualify that list.',
        '**A short list of top accounts.** At 10 to 20 accounts a quarter, a rep with a new address and a phone covers it.',
        '**Last year’s emails from a brand.** An AI customer holds what arrives from the day it joins, so an earlier Black Friday needs a library that already covered the brand.',
        '**A sender’s own placement before a big send.** A seed test, which sends to mailboxes the testing vendor controls, answers it.',
      ],
    },

    { kind: 'h2', id: 'start', text: 'Start this week' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Write the gap your product closes as a pass mark, such as a text within 24 hours of the opt in or a welcome email within 1 hour.',
        'Take 20 stores from the next sequence and sign up to 5 by hand, each with a new address and number, and log what arrives after 48 hours.',
        'Open with the fact at the stores that show the gap, and compare their replies with the current opener over the same weeks.',
        'Run the same check on the 10 customer accounts that renew next, before their reviews.',
        'Time the hours, multiply them by the list, and set the total against your first year value for 1 brand.',
      ],
    },
    {
      kind: 'cta',
      text: 'Obsession makes the first AI customers that work for you. Prospect intelligence with Clay puts a customer at every brand on a list and brings each gap back to the same rows with its proof, ready for the first email.',
      to: '/',
      label: 'Meet your first AI customers',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about Shopify store leads' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I find Shopify store leads?',
          a: 'Filter a store database such as Store Leads or BuiltWith by platform, country, estimated sales and installed apps, then add the people in Clay, Apollo or the CRM.',
          link: { label: 'How to find ecommerce clients', to: '/blog/how-to-find-ecommerce-clients' },
        },
        {
          q: 'What is a Shopify store lead list?',
          a: 'A list of Shopify stores filtered for a sales team, each row a store with its domain, country, plan, installed apps and estimated sales. Ecommerce store leads cover other platforms the same way.',
        },
        {
          q: 'How do I find Shopify stores that use a specific app?',
          a: 'Search Store Leads or BuiltWith by the app. Store Leads shows each app’s installation date and a log of installs and uninstalls, and BuiltWith looks up a single site free.',
        },
        {
          q: 'What drives Shopify app growth?',
          a: 'A Shopify app marketing strategy usually combines App Store search and reviews, partners, and outbound to stores that fit, often those running a competitor app. Modern Inbound’s 2026 guide calls a 4% to 8% cold email reply rate healthy for a Shopify app. A fact about the store’s own customers gives that outbound a reason the merchant can check.',
        },
        {
          q: 'What do email deliverability tools do?',
          a: 'They help a sender reach the inbox: authentication checks for SPF, DKIM and DMARC, Google Postmaster Tools for the spam rate Gmail reports, and placement tests of a test email. They measure the sender’s own mail. A prospect’s placement shows in a subscriber’s inbox, which an AI customer holds.',
        },
        {
          q: 'Do AI customers replace Store Leads or BuiltWith?',
          a: 'No. A store lead list says which stores fit, and AI customers say what each one sends its customers. Most teams use the list to choose the stores and put the facts back on the same rows.',
        },
        {
          q: 'Does a store know an AI customer signed up?',
          a: 'It joins through the public sign up any customer uses, so it appears as a subscriber. When an AI customer talks to a person, by chat, email or phone, it says it is an AI. This is not legal advice.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the examples',
      text: 'The 5 stores, the sales team and their timings in the illustrations are invented examples. Prices are as each provider’s own page showed them on 24 October 2026, and install counts as Store Leads showed them, updated 16 October 2026. Nothing here is legal advice.',
    },
  ],

  sources: [
    { title: 'Ecommerce stores using Klaviyo', publisher: 'Store Leads', url: SL_KLAVIYO, date: '2026-10-16' },
    { title: 'Ecommerce stores using Omnisend', publisher: 'Store Leads', url: SL_OMNISEND, date: '2026-10-16' },
    { title: 'Ecommerce stores using Mailchimp', publisher: 'Store Leads', url: SL_MAILCHIMP, date: '2026-10-16' },
    { title: 'Pricing', publisher: 'Postscript', url: POSTSCRIPT },
    { title: 'Smile.io pricing and plans', publisher: 'Smile.io', url: SMILE },
    { title: 'Pricing', publisher: 'Tie', url: TIE },
    { title: 'Inbox Monster pricing', publisher: 'Inbox Monster', url: INBOX_MONSTER },
    { title: 'SDR models, motions & metrics: 2025 research report', publisher: 'The Bridge Group', url: BRIDGE, date: '2025-02-06' },
    { title: 'When to send Black Friday emails (and texts, and other marketing messages)', publisher: 'Klaviyo (Katherine Boyarsky)', url: KL_TIMING, date: '2026-06-26' },
    { title: 'The platform for ecommerce data', publisher: 'Store Leads', url: STORELEADS },
    { title: 'Plans & pricing', publisher: 'BuiltWith', url: BUILTWITH },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Email marketing benchmarks by Industry 2026', publisher: 'Klaviyo', url: KLAVIYO_BENCH, date: '2026' },
    { title: 'Abandoned cart email statistics & strategy guide: 2025 research report', publisher: 'Rejoiner', url: REJOINER, date: '2025-02-10' },
    { title: 'Email sender guidelines', publisher: 'Gmail Help', url: GMAIL_RULES },
    { title: 'Migrate from Klaviyo', publisher: 'Omnisend', url: OMNISEND_SWITCH },
    { title: 'Cold email for Shopify app developers: 2026 guide', publisher: 'Modern Inbound (Rishabh Ambasta)', url: MODERN_INBOUND, date: '2026-08-01' },
    { title: 'We asked 6,346 companies for a demo. Most never wrote back.', publisher: 'Clay', url: CLAY_TEST, date: '2026-09-22' },
    { title: 'Gmail is entering the Gemini era', publisher: 'Google', url: GMAIL_GEMINI, date: '2026-01-08' },
    { title: 'Gmail is bringing Gemini to the inbox. Here’s why retail marketers should care.', publisher: 'Klaviyo (Michael Pattison)', url: KL_GMAIL, date: '2026-01-12' },
    { title: 'Shopify agentic storefronts', publisher: 'Shopify Help Center', url: SHOPIFY_AGENTIC },
    { title: 'Adobe: U.S. Holiday Shopping Season to Hit Record $275.1 Billion Online, Rising 6.7% YoY', publisher: 'Adobe', url: ADOBE, date: '2026-09-28' },
    { title: 'Personal agents will drive more contact center traffic than they offset', publisher: 'Salesforce', url: SF_PERSONAL, date: '2026-10-19' },
    { title: 'Compare plans, features & costs', publisher: 'Clay', url: CLAY_PRICING },
    { title: 'Panoramata pricing', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Pricing', publisher: 'GlockApps', url: GLOCKAPPS },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: CLOUD_BROWSER },
  ],
  related: [
    'why-ai-customers-matter',
    'ai-customers-for-commercial-teams',
    'customer-side-observability',
    'recipe:prospect-intelligence',
    '/use-cases/prospect-intelligence-with-clay',
    'recipe:email-sms-tracking',
    'recipe:delivery-monitoring',
    'recipe:account-watch',
  ],
}
