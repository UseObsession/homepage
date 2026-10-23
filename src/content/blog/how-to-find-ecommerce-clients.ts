import type { BlogPost } from './types'

/* Wave 2, article 6 (keyword plan, 23 Oct 2026): how CRO and growth agencies find ecommerce clients. Readers: founders
   and heads of new business at CRO, growth and Shopify agencies that serve ecommerce brands. Primary query "how to find
   ecommerce clients"; also how to get ecommerce clients, how to find ecommerce clients on linkedin, how to get shopify
   clients, how to find shopify clients, cro agency lead generation, digital marketing agency lead generation.
   Why now: pipeline is the top challenge for 67% of agency leaders (Agency Core 2026), many stores freeze code from
   about 20 Nov before Black Friday on Fri 27 Nov 2026, and conversations started now can turn into work after the sale.
   Angle: the practitioner's version of a page one full of generic SMMA lists. Which brands fit CRO work and the public
   source for each signal, every channel with what it costs and yields, a first message built on a finding the brand
   can check, qualifying, and the pipeline sum in the reader's own numbers. Sister article: ecommerce-cro-audit-template
   (the audit itself and its lighter version before a pitch); audit-prospect-email-without-klaviyo-login (the email
   method). Both are linked, neither is repeated.
   Read at source on 23 Oct 2026: the Agency Core 2026 PDF (67%, 50%, the 48% and 8%, Agency Edge's 67% and 46%);
   SparkToro's 17 Feb 2026 post on the State of Digital Agencies survey; Intelligems on when a store is ready to test;
   Store Leads' home and pricing; BuiltWith's plans; Similarweb's pricing page (free traffic checker); Meta's Ad Library
   help page (in a browser); Google's Ads Transparency Center help; PageSpeed Insights docs; the Shopify Partner
   Directory and its eligibility page; Klaviyo Academy on the agency directory; Convert's and Recharge's agency
   directories; Clutch's get listed, advertise and home pages; LinkedIn's Sales Navigator plans and User Agreement;
   Apollo's pricing (in a browser); Clay's pricing; Instantly's 2026 sequence benchmarks; the FTC's CAN-SPAM guide; the
   ICO's electronic mail guidance; the GDPR on EUR-Lex (in a browser); the English translation of Germany's UWG; and the
   site's Prospect intelligence and Funnel QA pages.
   Left out on purpose: every SpartanLeadz process, script, offer or figure; agency retainer and audit prices (vendor
   estimates only); pitch win rates and cold email figures only reachable through listicles; Focus Digital's churn
   figures (no sample stated); Crunchbase (pricing page showed no plans); the 93% and 128 stores; any PilotX audit
   figure; the $410 lamp. The agency, the 5 brands and the first message are invented, at .example. No dashes. */

const AMI = 'https://agencymanagementinstitute.com/wp-content/uploads/2026/05/Agency-Core-2026_Executive-Summary.pdf'
const SPARKTORO =
  'https://sparktoro.com/blog/digital-agency-new-business-still-a-concern-referrals-still-rule-for-lead-gen-and-are-sales-pipelines-finally-recovering/'
const INTELLIGEMS = 'https://www.intelligems.io/resources/blog/when-is-your-store-ready-for-a-b-testing'
const STORELEADS = 'https://storeleads.app/'
const BUILTWITH = 'https://builtwith.com/plans'
const SIMILARWEB = 'https://www.similarweb.com/corp/pricing/'
const META_ADLIB = 'https://www.facebook.com/business/help/2405092116183307'
const GOOGLE_ATC = 'https://support.google.com/adspolicy/answer/13733850'
const PSI = 'https://developers.google.com/speed/docs/insights/v5/about'
const SHOPIFY_DIR = 'https://www.shopify.com/partners/directory'
const SHOPIFY_JOIN = 'https://help.shopify.com/en/partners/grow-your-business/partner-directory/join'
const KLAVIYO_DIR =
  'https://academy.klaviyo.com/en-us/courses/partner-program-fundamentals/lessons/list-your-services-on-the-partner-directory'
const CONVERT_DIR = 'https://www.convert.com/cro-agencies-directory/'
const RECHARGE_DIR = 'https://getrecharge.com/find-an-agency/'
const CLUTCH = 'https://clutch.co/'
const CLUTCH_LISTED = 'https://clutch.co/get-listed'
const CLUTCH_ADS = 'https://clutch.co/advertise'
const SALES_NAV = 'https://business.linkedin.com/sales-solutions/compare-plans'
const LINKEDIN_UA = 'https://www.linkedin.com/legal/user-agreement'
const APOLLO = 'https://www.apollo.io/pricing'
const CLAY = 'https://www.clay.com/pricing'
const INSTANTLY =
  'https://instantly.ai/blog/email-sequence-benchmarks-2026-whats-a-good-open-rate-reply-rate-and-cost-per-meeting/'
const FTC = 'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business'
const ICO =
  'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/'
const GDPR = 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679'
const UWG = 'https://www.gesetze-im-internet.de/englisch_uwg/englisch_uwg.html'

export const post: BlogPost = {
  slug: 'how-to-find-ecommerce-clients',
  title: 'How to find ecommerce clients: a guide for CRO and growth agencies',
  dek: 'Which brands fit CRO work, how to tell from outside and where to find them. Then how to open with a finding the brand can check, qualify the first call and size the pipeline in your own numbers.',
  metaTitle: 'How to find ecommerce clients: a guide for CRO agencies',
  description:
    'How to find ecommerce clients for a CRO or Shopify agency: fit signals, where to look, a first message brands can check, qualifying and the pipeline sum.',
  answer:
    'To find ecommerce clients for CRO work, filter a store database for brands with about 500 or more orders a month, live paid ads and a recent change such as a new theme, find the founder or head of ecommerce on LinkedIn, and open with a specific finding about their own store that they can check on a phone. Referrals from clients and partner agencies were the top 2 sources of new business for agencies in 2025, so build them alongside outreach.',
  primaryKeyword: 'how to find ecommerce clients',
  keywords: [
    'how to get ecommerce clients',
    'how to find ecommerce clients on linkedin',
    'how to get shopify clients',
    'how to find shopify clients',
    'cro agency lead generation',
    'digital marketing agency lead generation',
    'how to find ecommerce clients for smma',
  ],
  category: 'For agencies',
  published: '2026-10-23',
  updated: '2026-10-23',
  readingMinutes: 11,
  order: 16,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'pack',
    workspace: 'agency',
    art: {
      kind: 'report',
      title: 'Fit check · 5 Shopify brands, public sources only',
      period: 'Checked Monday 26 October 2026, on a phone and a laptop',
      cols: ['Brand', 'Orders a month (est.)', 'Live ads', 'Other signal'],
      rows: [
        { name: 'larchway.example', cells: ['About 2,100', '38 on Meta', 'New theme in September'], tone: 'ok' },
        { name: 'fenmoor.example', cells: ['About 900', '12 on Meta, 3 on Google', 'Hiring a growth lead'], tone: 'ok' },
        { name: 'tidebrook.example', cells: ['About 650', '21 on Meta', 'Testing app installed'], tone: 'ok' },
        { name: 'harrowgate.example', cells: ['About 300', '4 on Meta', 'None found'], tone: 'late' },
        { name: 'quillbank.example', cells: ['About 1,400', 'None found', 'Moved to Shopify in August'], tone: 'fail' },
      ],
      notes: [
        'Orders are a store database’s sales estimate divided by the average price on the site. Confirm them on the first call.',
        'harrowgate is below 500 orders a month and goes on the list for later. quillbank shows no live ads.',
        'The first message to fenmoor: its Meta ad offers 20% off, and the page behind it shows 15%.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'CRO and growth agencies win ecommerce clients in 3 moves: they choose brands with enough orders to test, reach the person who decides, and open with a finding about the brand’s own store that its team can check on a phone.',
    },
    {
      kind: 'p',
      text: 'Prospect pipeline has been the most pressing challenge in [Agency Management Institute’s Agency Core study](' +
        AMI +
        ') for 3 years running. Most of the signals that show whether a brand fits CRO work are public, so a strong list can be built before anyone is contacted.',
    },
    {
      kind: 'stat',
      value: '67%',
      label: 'of 415 agency leaders named prospect pipeline a pressing challenge, the top one in 2022, 2025 and 2026',
      source: 'Agency Management Institute, Agency Core 2026',
      href: AMI,
    },

    { kind: 'h2', id: 'fit', text: 'Which brands fit CRO work' },
    {
      kind: 'p',
      text: 'A brand fits CRO work when it has enough orders to test, pays for traffic, runs on a platform you know and has a recent reason to change. Choose a niche before you build the list. In AMI’s companion Agency Edge study of 400 client side decision makers, 67% said a niche gives an agency an advantage, while 46% of agencies said they had strongly committed to one. A niche can be a vertical, a platform such as Shopify Plus, a size band or a market.',
    },
    {
      kind: 'table',
      caption: 'Fit signals for CRO work, and where to check each one from outside',
      cols: ['Signal', 'What to look for', 'Where to check it'],
      rows: [
        ['1. Order volume', '500 or more orders a month', 'Orders: Store Leads’ estimated monthly sales divided by the site’s average price\nVisits: [Similarweb’s](' + SIMILARWEB + ') free traffic checker'],
        ['2. Paid traffic', 'Active ads on Meta, Google or both', 'Meta’s Ad Library and Google’s [Ads Transparency Center](' + GOOGLE_ATC + '), searchable by advertiser or website'],
        ['3. Platform and plan', 'Shopify or Shopify Plus, with the apps your team works in', 'Store Leads (platform, pricing plan, installed apps) or a free BuiltWith lookup'],
        ['4. A recent change', 'A new theme, platform, apps or relaunch in the last 6 months', 'Store Leads’ theme and app install log, BuiltWith’s technology history and the brand’s news page'],
        ['5. Hiring', 'Open ecommerce, growth or CRO roles', 'The brand’s careers page and its LinkedIn job posts'],
        ['6. Funding or new owners', 'A raise or an acquisition this year', 'The brand’s news page and the trade press'],
        ['7. A testing app installed', 'Intelligems, Shoplift or Convert on the store', 'Store Leads or BuiltWith\nIt shows a testing budget, and may mean another agency'],
      ],
    },
    {
      kind: 'p',
      text: 'Treat signals 1 to 3 as required, and the rest as reasons to contact a brand this month. The order threshold comes from [Intelligems](' +
        INTELLIGEMS +
        '), a testing vendor, which says a store doing 500 or more orders a month has enough volume to run meaningful tests, and that a test with 10,000 sessions and 50 orders takes a long time to give a result, so estimate orders.',
    },
    {
      kind: 'p',
      text: '[Store Leads](' +
        STORELEADS +
        ') says it tracks 3,163,099 active Shopify stores, each with its creation date, estimated monthly sales, theme, pricing plan and installed apps, with the date of each install.',
    },
    {
      kind: 'p',
      text: '[Meta’s Ad Library](' +
        META_ADLIB +
        ') contains every active ad shown across Meta’s apps, and anyone can search it. For ads delivered to the UK or the EU, it adds the dates each ad ran, its targeting choices and its total reach. The help page lists no spend figure for commercial ads, so use the number of active ads and how long they have run as the signal.',
    },

    { kind: 'h2', id: 'channels', text: 'Where to find ecommerce clients' },
    {
      kind: 'p',
      text: 'Each channel costs time, money or both, and yields a different kind of lead, from a warm introduction to a list of domains.',
    },

    { kind: 'h3', id: 'referrals', text: 'Referrals and partner agencies' },
    {
      kind: 'p',
      text: 'Referrals from clients and from partners were the top 2 drivers of new business for agencies in 2025, in [SparkToro and Paddy Moogan’s State of Digital Agencies survey](' +
        SPARKTORO +
        '), and 15% of agencies named partner referrals their top driver. Retention, Shopify build and paid media agencies work with the same brands, so a partner without a CRO service can refer that work to you, and you can refer email, builds or ads back. Agree in writing what each side refers, how fast you reply to an introduction and any referral fee. Ask each client, when a project has worked, for 1 introduction. **Costs:** your time, plus any fee you agree. **Yields:** introductions to brands that already trust the person introducing you.',
    },

    { kind: 'h3', id: 'directories', text: 'Partner directories and programmes' },
    {
      kind: 'p',
      text: 'The [Shopify Partner Directory](' +
        SHOPIFY_DIR +
        ') lets merchants filter partners by service, including conversion rate optimisation, by location and by tier. A guaranteed listing needs the partner programme’s Plus tier or above, which [Shopify’s eligibility page](' +
        SHOPIFY_JOIN +
        ') sets at $500,000 a year of revenue to Shopify from merchants acquired in the last 5 years, or $2.5 million from merchants you collaborate with, plus at least 2 Plus or 40 Standard shops.',
    },
    {
      kind: 'p',
      text: '[Klaviyo’s agency directory](' +
        KLAVIYO_DIR +
        ') lists only Silver, Gold, Platinum and Elite partners, and brands filter it by service, budget and location. Testing and subscription tools run their own, such as [Convert’s](' +
        CONVERT_DIR +
        '), which lists 176 experimentation and CRO agencies, and [Recharge’s](' +
        RECHARGE_DIR +
        '). **Costs:** none of these pages shows a listing fee, and the tiers take client revenue and time to reach. **Yields:** enquiries from brands already looking for help.',
    },

    { kind: 'h3', id: 'store-databases', text: 'Store and technology databases' },
    {
      kind: 'p',
      text: 'To find Shopify clients that match the fit signals, filter a store database by platform, plan, country, apps and estimated sales. [Store Leads](' +
        STORELEADS +
        ') does this from $75 a month, with exports and API access from $250 a month. [BuiltWith](' +
        BUILTWITH +
        ') is free for single site lookups, and its plans, from $295 a month, add lead lists, technology history and estimated revenue for ecommerce sites. **Costs:** the plan. **Yields:** a list of stores. Store Leads gives only non personal contact details and connects to other vendors for named people.',
    },

    { kind: 'h3', id: 'linkedin', text: 'Finding ecommerce clients on LinkedIn' },
    {
      kind: 'p',
      text: 'Use LinkedIn to find the people behind the stores. [Sales Navigator](' +
        SALES_NAV +
        ') adds more than 50 search filters and 50 InMail messages a month, with the Core plan from US$119.99 a month or US$1,079.88 a year. Search for founders, heads of ecommerce and growth leads at brands in your niche, save those that pass the fit signals, and read their recent posts and job listings before you write. Among social platforms, 73% of agencies in the SparkToro survey said LinkedIn worked best for new business.',
    },
    {
      kind: 'p',
      text: '[LinkedIn’s User Agreement](' +
        LINKEDIN_UA +
        ') bans bots and other unauthorised automated methods to add contacts or send messages, and software that scrapes profiles, so write and send each message yourself. **Costs:** the licence and your time per message. **Yields:** names and context, without an email address.',
    },

    { kind: 'h3', id: 'contact-data', text: 'Contact data and enrichment' },
    {
      kind: 'p',
      text: 'Contact databases add names, titles and emails to the stores on your list. [Apollo](' +
        APOLLO +
        ') has a free plan with 900 credits per seat a year, and paid plans from $49 per seat a month billed annually. [Clay](' +
        CLAY +
        ') runs enrichment and prospecting workflows in tables, with a free plan of 100 data credits and 500 actions a month and a Launch plan at $185 a month, or $167 a month billed annually. Verify every address before you send and record where each contact came from, because UK and EU data rules apply to named people. **Costs:** the plan and its credits. **Yields:** named people and addresses to check.',
    },

    { kind: 'h3', id: 'marketplaces', text: 'Agency marketplaces' },
    {
      kind: 'p',
      text: 'On [Clutch](' +
        CLUTCH +
        '), buyers request quotes, read client reviews and shortlist agencies by budget, industry and location. A [basic profile is free](' +
        CLUTCH_LISTED +
        '), the Verified tier costs $499 a year, and [advertising](' +
        CLUTCH_ADS +
        ') is priced on a call with a 12 month commitment. **Costs:** free to $499 a year, more for placement. **Yields:** requests from buyers who are comparing several agencies.',
    },

    { kind: 'h3', id: 'content-events', text: 'Content and events' },
    {
      kind: 'p',
      text: 'Published work builds trust before the first contact. In Agency Core 2026, 48% of the group AMI calls Confident Differentiators build trust with prospects before first contact, against 8% of the group it calls Pressured and Uncertain. Speaking at events and conferences rose from 6th to 4th among sources of new business in the SparkToro survey. For a CRO agency, useful pieces are specific: a test with its numbers and what changed, or a checklist a brand can run on its own store. **Costs:** hours each week, for months. **Yields:** brands that arrive knowing your work.',
    },

    { kind: 'h2', id: 'first-message', text: 'Opening the first conversation' },
    {
      kind: 'p',
      text: 'Open with a finding about the brand’s own store that its team can check on a phone in a minute: a time, a page and what happened, found through the public path any customer uses. Demonstrating differentiation is joint second among the challenges in Agency Core 2026, and a finding of this kind shows what your agency notices before it asks for anything.',
    },
    {
      kind: 'stat',
      value: '50%',
      label: 'of agency leaders named demonstrating differentiation a pressing challenge, up from 33% a year earlier',
      source: 'Agency Management Institute, Agency Core 2026',
      href: AMI,
    },
    {
      kind: 'p',
      text: 'Instantly, a cold email platform, reports in its [2026 benchmarks](' +
        INSTANTLY +
        ') (vendor data) that 58% of replies arrive on the first email of a sequence, so put the finding in the first email.',
    },

    { kind: 'h3', id: 'choose-a-page', text: '1. Choose a page paid traffic reaches' },
    {
      kind: 'list',
      items: [
        '**The page behind a live ad.** Find the brand in Meta’s Ad Library, open the ad’s link and check the product, price, offer and stock on a phone. The [morning check for ad landing pages](/blog/where-your-ads-land-morning-check) covers it in full.',
        '**The mobile product page.** Run it in [PageSpeed Insights](' +
          PSI +
          '), which shows field data from real Chrome users over the previous 28 days. A Largest Contentful Paint over 4 seconds counts as poor.',
        '**The pop up and its code.** Sign up, wait for the welcome email and try the code on a sale item at checkout. [Auditing a prospect’s email and SMS without a Klaviyo login](/blog/audit-prospect-email-without-klaviyo-login) gives the full method.',
        '**Basket and checkout.** The shipping cost, delivery date and payment options shown before payment.',
      ],
    },

    { kind: 'h3', id: 'use-it', text: '2. Use it as a customer, on a phone' },
    {
      kind: 'p',
      text: 'Use only the paths any customer has. Record the time, the device and a screenshot at each step. Open ads from the Ad Library’s link instead of clicking them in your own feed, so that the brand doesn’t pay for your visit. Stop at checkout without paying, and never enter invented payment details.',
    },

    { kind: 'h3', id: 'write-it', text: '3. Write the finding so they can check it' },
    {
      kind: 'p',
      text: 'Write 1 sentence with the time, the page and what happened, and attach the screenshot. Leave out judgement words and revenue estimates, which the brand’s team can work out from its own numbers. Check the page again on the day you send, in case it has changed.',
    },
    {
      kind: 'note',
      title: 'An example first message, to an invented store',
      text: 'I opened the page behind your linen duvet ad from Meta’s Ad Library on an iPhone at 08:40 today. The ad offers 20% off, the page shows 15%, and the king size is sold out. Both screenshots are attached with the time. I noted 2 more things on the product page and can send them if useful. Sam, founder of harbourline.example, a CRO agency for Shopify brands.',
    },

    { kind: 'h3', id: 'send-it', text: '4. Send it from your own name' },
    {
      kind: 'p',
      text: 'Send it to the founder or the head of ecommerce from your own address, say in 1 line who you are and what your agency does, and offer 1 next step. A follow up a few days later can carry a second finding.',
    },
    {
      kind: 'p',
      text: 'By hand, each brand needs a phone, a new email address for any sign up, a sheet and up to 48 hours of checking the inbox, so the hours grow with every brand on the list. Obsession’s [Funnel QA for CRO agencies](/use-cases/funnel-qa-for-cro-agencies) uses AI agents that follow a brand’s live ad as new customers, sign up through the pop up and take the code to checkout, then report what happened, with proof.',
    },
    {
      kind: 'cta',
      text: 'Name 3 brands you are about to pitch and 2 clients, with their OK. Obsession’s agents follow each brand’s live ad as new customers and send what happened after the sign up within 4 days, with proof, free.',
      to: '/use-cases/funnel-qa-for-cro-agencies',
      label: 'Check 5 brands free',
    },

    { kind: 'h2', id: 'qualify', text: 'Qualifying and the first call' },
    {
      kind: 'p',
      text: 'Confirm the fit signals before the call, then use the call to test what public sources could only estimate. Ask about what has happened, with numbers:',
    },
    {
      kind: 'list',
      items: [
        '**Orders and conversion.** Orders a month, conversion rate by device and average order value.',
        '**Testing so far.** What they tested in the last 6 months, with which tool, and what they learned.',
        '**Who ships changes.** A developer, an in house team or another agency, and how long a change takes to go live.',
        '**Recent changes.** The last theme, app or checkout change, and anything that broke after it.',
        '**Who decides.** Who signs, who else has a say, and the budget range.',
        '**Dates.** Their code freeze, Black Friday on Friday 27 November 2026, and their next agency review.',
      ],
    },
    {
      kind: 'p',
      text: 'A brand below about 500 orders a month, or with no one to ship changes or sign, suits a fixed price audit or a later call. End every call with a dated next step: a scoped audit built on the [ecommerce CRO audit template](/blog/ecommerce-cro-audit-template), or a short test plan.',
    },

    { kind: 'h2', id: 'pipeline', text: 'The pipeline sum' },
    {
      kind: 'p',
      text: 'Work back from the clients you want to the prospects you need to contact, using your own records for each rate. Where you have none, start with a published benchmark and replace it after a quarter.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Clients to sign** = new clients you want this quarter + clients you expect to lose.',
        '**First calls needed** = clients to sign ÷ your close rate from first call.',
        '**First calls from outreach** = first calls needed, minus the first calls referrals, partners and inbound brought last quarter.',
        '**Replies needed** = first calls from outreach ÷ the share of replies that become a first call.',
        '**Prospects to contact** = replies needed ÷ your reply rate.',
      ],
    },
    {
      kind: 'art',
      caption: 'A worked pipeline sum for an invented agency. Every rate except the reply rate comes from its own records. Replace each figure with yours.',
      art: {
        kind: 'price',
        title: 'harbourline.example · prospects to contact this quarter',
        rows: [
          { label: 'New clients wanted', value: '3', note: 'The quarter’s target' },
          { label: 'Clients expected to leave', value: '1', note: 'Its average over the last 4 quarters' },
          { label: 'First calls needed', value: '16', note: '4 clients ÷ a 25% close rate from its CRM' },
          { label: 'First calls from referrals and partners', value: '6', note: 'Last quarter, from its CRM' },
          { label: 'Replies needed', value: '40', note: '10 calls ÷ 1 in 4 replies booking a call' },
        ],
        total: { label: 'Prospects to contact', value: '1,166', note: '40 ÷ a 3.43% reply rate, about 90 a week for 13 weeks' },
      },
    },
    {
      kind: 'p',
      text: 'The reply rate is the 3.43% average in Instantly’s 2026 benchmarks, where the top quartile reaches 5.5%. At 5.5%, the same agency needs 727 prospects, about 56 a week, so a reply rate about 2 points higher removes 439 prospects from the quarter. A higher close rate on first calls lowers every line after it.',
    },

    { kind: 'h2', id: 'consent', text: 'Consent and privacy basics' },
    {
      kind: 'p',
      text: 'Rules for cold email to businesses differ by country. This is not legal advice, so check your own case with a lawyer.',
    },
    {
      kind: 'list',
      items: [
        '**United States.** The [FTC’s CAN-SPAM guide](' +
          FTC +
          ') says the law makes no exception for business to business email. Use accurate sender details and subject lines, say the message is an advertisement, include a valid postal address and honour an opt out within 10 business days. Each email that breaks the law can carry a penalty of up to $53,088.',
        '**United Kingdom.** The [ICO](' +
          ICO +
          ') says you can email any corporate body, such as a limited company or an LLP, if you don’t conceal who you are and you give a valid address to opt out. Sole traders and some partnerships count as individuals and need consent. Emailing a named employee can still raise data protection questions, and the ICO says this guidance is under review after the Data (Use and Access) Act.',
        '**European Union.** The [GDPR](' +
          GDPR +
          ') says direct marketing may be regarded as a legitimate interest (Recital 47), and Article 21 gives every person the right to object to it, which you must point out in your first message at the latest. Email rules for businesses vary by country. In Germany, [section 7 of the Act against Unfair Competition](' +
          UWG +
          ') treats advertising email sent without the addressee’s prior express consent as an unacceptable nuisance, for businesses as well as consumers.',
      ],
    },

    { kind: 'h2', id: 'options', text: 'Ways to find clients compared', compare: true },
    {
      kind: 'p',
      text: 'Several of these cost only time. We make Obsession, which does some of this, so every line about another tool is taken from that tool’s own pages, checked on 23 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to find ecommerce clients. Prices from each company’s own pages, 23 October 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Doing nothing: waiting for referrals',
          'No time or money spent on new business',
          'Free',
          'Volume depends on clients and partners\n14% of agencies in the SparkToro survey called their pipeline healthy',
          'An agency at capacity',
        ],
        [
          'By hand: the ad libraries, PageSpeed Insights, a phone and a sheet',
          'A specific finding on any store, from outside',
          'Free, plus your time',
          'Hours grow with every brand, and each finding covers 1 moment',
          'Your top 10 to 20 prospects',
        ],
        [
          'Store and technology data: [Store Leads](' + STORELEADS + '), [BuiltWith](' + BUILTWITH + ')',
          'Lists by platform, plan, apps and estimated sales',
          'Store Leads: Premium $75, Pro $250 a month with exports, 15% off yearly\nBuiltWith: lookups free, Basic $295, Pro $495 a month',
          'Estimated sales, and Store Leads gives no named people',
          'Building the list',
        ],
        [
          'Contact data: [Apollo](' + APOLLO + '), [Clay](' + CLAY + '), [LinkedIn Sales Navigator](' + SALES_NAV + ')',
          'Names, titles and emails, or LinkedIn search and InMail',
          'Apollo: free, Basic $49 a seat a month billed yearly\nClay: free, Launch $185 a month, or $167 billed yearly\nSales Navigator Core: US$119.99 a month, US$1,079.88 a year',
          'Data needs checking, and outreach rules apply to every named person',
          'Reaching the people at brands that fit',
        ],
        [
          'Partner directories: [Shopify Partner Directory](' + SHOPIFY_DIR + '), [Klaviyo’s agency directory](' + KLAVIYO_DIR + '), [Convert](' + CONVERT_DIR + '), [Recharge](' + RECHARGE_DIR + ')',
          'Brands arrive already looking for help',
          'No listing fee shown\nShopify: a listing guaranteed from the Plus tier\nKlaviyo: listed from the Silver tier',
          'Tiers take referred revenue and time to reach',
          'Agencies with a record on the platform',
        ],
        [
          'Marketplaces: [Clutch](' + CLUTCH_LISTED + ')',
          'Buyers shortlist by budget, industry and location, and read reviews',
          'Basic profile: free\nVerified: $499 a year\nAdvertising: on request, 12 month commitment',
          'Buyers compare several agencies at once',
          'Agencies with client reviews to show',
        ],
        [
          'Referral partners: retention, build and paid media agencies',
          'Warm introductions to brands that trust the partner',
          'Your time, plus any referral fee you agree',
          'Slow to build, and volume follows the partner’s own pipeline',
          'Agencies with a clear niche',
        ],
        [
          'Content and events',
          'Trust before the first contact',
          'Your time',
          'Months before it brings enquiries',
          'Next year’s pipeline',
        ],
        [
          'Obsession (ours): [Prospect intelligence](/recipes/prospect-intelligence), [Funnel QA for CRO agencies](/use-cases/funnel-qa-for-cro-agencies)',
          'AI agents become each prospect’s customer, take the pop up’s code to checkout and return a verdict with a dated proof link',
          'Funnel QA: 5 brands checked free\nProspect intelligence: by waitlist\nNo price listed',
          'Supplies no contact data, and leaves the list, the message and the call to you',
          'Opening findings across a long list',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For an agency that writes to 10 to 20 brands a quarter, the by hand method and a Store Leads or BuiltWith list cover the work, with Sales Navigator or Apollo for the people. An agency whose referrals fill its calendar needs none of the paid tools. Partner directories suit agencies with a record on the platform.',
    },
    {
      kind: 'cta',
      text: 'Prospect intelligence becomes a customer of every company on your list and returns a verdict and a dated proof link for each, to Clay, your CRM or a sheet. Join the waitlist and name up to 5 companies to watch first.',
      to: '/recipes/prospect-intelligence',
      label: 'See prospect intelligence',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'p',
      text: 'Allow for these 5 points before you act on a list or a finding.',
    },
    {
      kind: 'list',
      items: [
        '**Database figures are estimates.** Store Leads and Similarweb estimate sales and visits, so confirm orders on the call.',
        '**Ad libraries show no spend for commercial ads.** A budget is an inference from the number of ads and how long they run.',
        '**A finding covers 1 moment.** The brand may fix it the same day.',
        '**A fit is a starting point.** Budget, timing and who decides only show on the call.',
        '**Benchmarks are averages.** Replace every borrowed rate with your own after a quarter.',
      ],
    },
    {
      kind: 'p',
      text: 'This week, choose a niche, build a list of 50 brands that pass signals 1 to 3, check the page behind a live ad at your top 10 and send 5 messages. Many stores freeze code from about 20 November, before Black Friday on Friday 27 November 2026, so work agreed now is likely to start after the sale or in January.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about finding clients' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do you get ecommerce clients as an agency?',
          a: 'Choose a niche, filter a store database for brands with enough orders to test, live paid ads and a recent change, then contact the founder or head of ecommerce with a finding about their own store that they can check. Build referrals from clients and partner agencies alongside.',
        },
        {
          q: 'How do you get Shopify clients?',
          a: 'Filter Store Leads or BuiltWith for Shopify and Shopify Plus stores in your niche, check their live ads in Meta’s Ad Library, and write to the people who decide. The Shopify Partner Directory adds enquiries from merchants once you reach the Plus tier.',
        },
        {
          q: 'How do you find ecommerce clients on LinkedIn?',
          a: 'Use Sales Navigator’s filters to find founders, heads of ecommerce and growth leads at brands that pass your fit signals, read their posts and job listings, and write each message yourself. LinkedIn’s User Agreement bans bots and other unauthorised automated methods to add contacts or send messages.',
        },
        {
          q: 'Where can I find a list of Shopify stores?',
          a: 'Store databases such as Store Leads and BuiltWith list Shopify stores with their plan, apps and estimated sales. Store Leads says it tracks over 3 million active Shopify stores.',
        },
        {
          q: 'How do CRO agencies generate leads?',
          a: 'Mostly through referrals from clients and partner agencies, platform and testing tool directories, content, and outreach to brands that fit, opened with a specific finding about the brand’s store.',
        },
        {
          q: 'How many orders does a store need for CRO testing?',
          a: 'Intelligems, a testing vendor, says a store doing 500 or more orders a month has enough volume to run meaningful tests.',
        },
        {
          q: 'Is it legal to cold email ecommerce brands?',
          a: 'In the US, CAN-SPAM allows it with accurate sender details, a postal address and a working opt out. The UK allows email to companies and LLPs, and EU rules differ by country, with Germany requiring prior consent. This is not legal advice.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Prices are as each company’s own page showed them on 23 October 2026. Apollo’s prices, Meta’s help page and the GDPR show only in a browser, so we read them there. Clay’s plan cards open on yearly billing, which puts Launch at $167 a month, and its monthly price is the $185 in its FAQ. BuiltWith’s page opens on monthly prices. We did not test any of the tools. The agency, the 5 brands and the example message are invented. This is not legal advice.',
    },
  ],

  sources: [
    { title: 'The Agency Core 2026 research report, executive summary', publisher: 'Agency Management Institute', url: AMI, date: '2026-05' },
    { title: 'Pricing', publisher: 'Similarweb', url: SIMILARWEB },
    { title: 'About Ads Transparency Center', publisher: 'Google Advertising Policies Help', url: GOOGLE_ATC },
    { title: 'When is your store ready for A/B testing', publisher: 'Intelligems (vendor)', url: INTELLIGEMS, date: '2026-07-02' },
    { title: 'The platform for ecommerce data, with pricing', publisher: 'Store Leads', url: STORELEADS },
    { title: 'About the Meta Ad Library', publisher: 'Meta Business Help Centre', url: META_ADLIB },
    { title: 'Digital agency new business still a concern, referrals still rule for lead gen', publisher: 'SparkToro (Paddy Moogan)', url: SPARKTORO, date: '2026-02-17' },
    { title: 'Shopify Partner Directory', publisher: 'Shopify', url: SHOPIFY_DIR },
    { title: 'Eligibility for the Shopify Partner Directory', publisher: 'Shopify Help Center', url: SHOPIFY_JOIN },
    { title: 'List your services on the partner directory', publisher: 'Klaviyo Academy', url: KLAVIYO_DIR },
    { title: 'CRO and experimentation agencies directory', publisher: 'Convert', url: CONVERT_DIR, date: '2025' },
    { title: 'Find an agency', publisher: 'Recharge', url: RECHARGE_DIR },
    { title: 'Plans and pricing', publisher: 'BuiltWith', url: BUILTWITH },
    { title: 'Compare Sales Navigator plans', publisher: 'LinkedIn', url: SALES_NAV },
    { title: 'User Agreement', publisher: 'LinkedIn', url: LINKEDIN_UA, date: '2025-11-03' },
    { title: 'Pricing', publisher: 'Apollo.io', url: APOLLO },
    { title: 'Pricing', publisher: 'Clay', url: CLAY },
    { title: 'Clutch', publisher: 'Clutch', url: CLUTCH },
    { title: 'Get listed', publisher: 'Clutch', url: CLUTCH_LISTED },
    { title: 'Advertise', publisher: 'Clutch', url: CLUTCH_ADS },
    { title: 'Email sequence benchmarks 2026', publisher: 'Instantly (vendor)', url: INSTANTLY, date: '2026-03-30' },
    { title: 'About PageSpeed Insights', publisher: 'Google for Developers', url: PSI, date: '2024-10-21' },
    { title: 'CAN-SPAM Act: a compliance guide for business', publisher: 'Federal Trade Commission', url: FTC },
    { title: 'Electronic mail marketing', publisher: 'Information Commissioner’s Office', url: ICO },
    { title: 'Regulation (EU) 2016/679 (General Data Protection Regulation)', publisher: 'EUR-Lex', url: GDPR, date: '2016-04-27' },
    { title: 'Act against Unfair Competition (UWG), English translation', publisher: 'German Federal Ministry of Justice', url: UWG },
  ],

  related: [
    '/use-cases/funnel-qa-for-cro-agencies',
    'recipe:prospect-intelligence',
    'ecommerce-cro-audit-template',
    'audit-prospect-email-without-klaviyo-login',
    'where-your-ads-land-morning-check',
    '/sample-output',
  ],
}
