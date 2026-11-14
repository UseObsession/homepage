import type { BlogPost } from './types'

/* Lookup guide 3 (_research/seo/lookup-articles-14nov/PLAN.md and WRITER_BRIEF.md; approved by Seun 14 Nov 2026): the
   best Klaviyo audit tools and services, by job. Primary "klaviyo audit tool"; secondaries from Google autocomplete (US
   and UK, 14 Nov, autocomplete_14nov.json): klaviyo auditor, klaviyo account audit, klaviyo audit template. "Klaviyo audit
   checklist" stays with /blog/email-marketing-audit and "klaviyo flow audit" with
   /blog/audit-prospect-email-without-klaviyo-login, each linked with its own anchor; "klaviyo email audit" stays with
   /lookup (docs/SEARCH.md §2). Readers: ecommerce brands that run Klaviyo (founder, head of ecommerce, CRM or retention
   lead) and the agencies that do email, retention or conversion work for them.
   Format of /blog/best-competitor-price-tracking-tools: 14 tools and services in 6 groups by job, alphabetical inside
   each, no stars, ranking or Review markup; each one's strengths first from its own pages, prices as listed, and "its
   pages don't describe…" where a page is silent. Every fact about another company was read on its own page on 14 Nov
   2026: Klaviyo Help (Composer audits, updated 25 Oct; the Composer plan, updated 25 Oct; peer groups and benchmarks,
   updated 30 Oct; the deliverability hub, updated 29 Oct; deliverability vs delivery, updated 29 Oct), Klaviyo Academy's
   audit course, Klaviyo's blog on nearly 100 audits (12 Feb 2026), Aimerce's audit page, Fluxchek's home page, SPARK
   CRM's Audit Score and pricing pages, 303 London's audit page, Flowium's audit page, Netalico's email services page,
   Google's Postmaster Tools dashboards and set-up pages, GlockApps' free spam checker and pricing, Litmus's email testing
   page and Validity's pricing page, the Email on Acid pricing page (now Mailgun Inspect), Milled's home and pricing pages
   and Panoramata's pricing. Reused from welcome-basket-email-not-sending.ts: Joy Joya's July 2026 test of 362 brands and
   Klaviyo's 2026 benchmarks. Left out: Digismoothie (its listed prices contradicted each other), Growth Legend,
   Ecomflows, Sendtonium, KlavAudit Pro and freelancers' audits (space; each publishes a price), Inbox Monster and
   Validity Everest (covered in the email marketing audit guide), MailCharts and Really Good Emails (linked through /compare).
   Obsession's lines use the live /lookup and leak checks use case words only; the index's figures are the /lookup totals
   of 13 Nov 2026, as patterns. fernlea.example and every finding in the two pictures are invented. British English,
   numerals, no dashes. */

const COMPOSER_AUDIT = 'https://help.klaviyo.com/hc/en-us/articles/52308768764443'
const COMPOSER_PLAN = 'https://help.klaviyo.com/hc/en-us/articles/55587298026395'
const KL_PEERS = 'https://help.klaviyo.com/hc/en-us/articles/360050180151'
const KL_HUB = 'https://help.klaviyo.com/hc/en-us/articles/18378819907995'
const KL_DELIVERY = 'https://help.klaviyo.com/hc/en-us/articles/35283141315099'
const KL_COURSE = 'https://academy.klaviyo.com/en-us/courses/audit-your-klaviyo-account'
const KL_AUDITS = 'https://www.klaviyo.com/blog/email-sms-marketing-priorities-2026'
const KL_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const AIMERCE = 'https://www.aimerce.ai/klaviyo-audit'
const FLUXCHEK = 'https://www.fluxchek.com/'
const SPARK = 'https://sparkcrm.cc/features/audit-score'
const SPARK_PRICING = 'https://sparkcrm.cc/pricing'
const L303 = 'https://www.303.london/email-marketing-full-account-audit'
const FLOWIUM = 'https://flowium.com/audit'
const NETALICO = 'https://netalico.com/products/klaviyo-audit'
const POSTMASTER = 'https://support.google.com/mail/answer/14668346'
const POSTMASTER_SETUP = 'https://support.google.com/mail/answer/9981691'
const GLOCK_TEST = 'https://glockapps.com/inbox-email-tester/'
const GLOCK_PRICE = 'https://glockapps.com/pricing/'
const LITMUS = 'https://www.litmus.com/email-testing'
const VALIDITY = 'https://www.validity.com/pricing/'
const INSPECT = 'https://www.emailonacid.com/pricing/'
const MILLED = 'https://milled.com/'
const MILLED_PRICING = 'https://milled.com/pricing'
const PANORAMATA = 'https://www.panoramata.co/pricing'

export const post: BlogPost = {
  slug: 'klaviyo-audit-tools',
  title: 'The best Klaviyo audit tools and services for ecommerce brands in 2026, by job',
  dek: '14 Klaviyo audit tools and services, grouped by job, with what each checks, what it can’t see and its price on 14 November 2026. Beside them, Obsession keeps every email a new customer receives from your store.',
  metaTitle: 'Klaviyo audit tools and services for ecommerce brands, 2026',
  description:
    'Klaviyo audit tools and services for ecommerce brands, by job and price: Klaviyo’s own audits, audit apps, agencies, inbox tests and email archives.',
  answer:
    'A Klaviyo audit tool reads a store’s Klaviyo account (its flows, segments, sign-up forms, campaigns and sending health) and returns a list of fixes in priority order. Klaviyo’s Composer audits from inside the account, apps such as Fluxchek and SPARK CRM connect with read-only access, and agencies such as Flowium and Netalico audit by hand. Obsession keeps what each store sends a new customer after a sign-up, a basket and a checkout, dated, and the store lookup shows your own store’s entry.',
  primaryKeyword: 'klaviyo audit tool',
  keywords: ['klaviyo auditor', 'klaviyo account audit', 'klaviyo audit template', 'klaviyo audit tools', 'best klaviyo audit tool'],
  category: 'Check your own journeys',
  published: '2026-11-14',
  updated: '2026-11-14',
  readingMinutes: 19,
  order: 3,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'fernlea.example · one store, 4 audits',
      period: 'What 4 audits found at one store, week of 9 November 2026',
      cols: ['Audit', 'What it found'],
      rows: [
        { name: 'Klaviyo audit', cells: ['Browse flow off'], tone: 'info' },
        { name: 'Inbox test', cells: ['Spam at Outlook'], tone: 'info' },
        { name: 'Rendering test', cells: ['Button hidden'], tone: 'info' },
        { name: 'New customer', cells: ['No basket email'], tone: 'fail' },
      ],
      notes: [
        'The first 3 audits read the account and test emails. The basket flow showed as live in Klaviyo, and a new customer’s inbox showed its reminder never came.',
        'Example: Fernlea and every finding here are invented.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Ecommerce brands that run Klaviyo use a Klaviyo audit tool to catch what breaks in the account before it costs orders. It finds a flow that stopped sending, a segment with no suppression or a spam complaint rate climbing at Gmail. Founders, heads of ecommerce and CRM or retention leads run them on their own account. Agencies that do email, retention or conversion work run them on clients and on brands they pitch. The 14 tools and services here sit in groups by job, and each entry gives what the tool checks, what it can’t see and its price as listed on 14 November 2026.',
    },

    { kind: 'h2', id: 'what-it-is', text: 'What is a Klaviyo audit tool?' },
    {
      kind: 'p',
      text: 'A Klaviyo audit tool reads a Klaviyo account and returns a list of fixes in priority order. Most connect with a read-only key, a code made in Klaviyo’s settings that lets the tool read the account without changing anything in it.',
    },
    {
      kind: 'p',
      text: 'They check the [triggered flows](/glossary/triggered-flow), the automated emails that start when a shopper signs up, views a product, leaves a basket or buys. They also check segments, sign-up forms, campaigns and sending health. [Klaviyo’s 2026 benchmarks](' +
        KL_BENCH +
        ') put flows at 5.3% of email sends and nearly 41% of email revenue across Klaviyo customers. As an example, take email at a fifth of revenue and flows at 41% of that. Flows then earn about £8M a year at a £100M+ brand, £1.6M at a £20M+ brand and £160,000 at a £2M+ store. A flow that stops sending loses its share of that every day it stays silent. Agencies do the same job by hand with access to the account, and present the findings on a call.',
    },

    { kind: 'h2', id: 'account-audit', text: 'What does a Klaviyo account audit check?' },
    {
      kind: 'p',
      text: 'A Klaviyo account audit checks 6 areas of the account:',
    },
    {
      kind: 'list',
      items: [
        '**Flows:** which exist, which are live and which sent anything in the last 90 days.',
        '**Segments and list health:** suppression, dead segments and duplicate lists.',
        '**Sign-up forms:** the fields, the timing and the offer, on a phone.',
        '**Campaigns:** how often they go, to whom and what each one earns.',
        '**Deliverability:** spam complaint and bounce rates, and the sender checks.',
        '**Shopify data:** the order and product events Klaviyo depends on.',
      ],
    },
    {
      kind: 'p',
      text: 'Klaviyo’s own digital strategy team completed nearly 100 account audits in 2025 and [published what kept coming up](' +
        KL_AUDITS +
        ') on 12 February 2026. The most common fix was splitting the welcome flow by purchase status, so a shopper who has already bought stops getting a first-order discount. Extended ID and attribution settings came up in nearly two-thirds of those audits. Extended ID decides how much site traffic Klaviyo can tie to a profile, and attribution settings decide which orders Klaviyo credits to an email.',
    },
    {
      kind: 'p',
      text: 'Every one of these checks reads what the account is set to send. Whether a new customer received each email is a separate check, made from a new inbox after a real sign-up, basket and checkout.',
    },

    { kind: 'h2', id: 'template', text: 'Klaviyo audit template: what to check and where' },
    {
      kind: 'p',
      text: 'Each area of a Klaviyo audit has a pass mark and a place to read it. For every check in order of priority, use the [Klaviyo audit checklist](/blog/email-marketing-audit). For a prospect’s flows read with no login, see the [Klaviyo flow audit](/blog/audit-prospect-email-without-klaviyo-login) guide for agencies.',
    },
    {
      kind: 'table',
      caption: 'A Klaviyo audit template: each area, what passes and where to read it',
      cols: ['Area', 'What passes', 'Where to read it'],
      rows: [
        ['Flows', 'Welcome, browse, basket, checkout, post-purchase and win-back flows live and sending in the last 90 days', 'Klaviyo flow report\nComposer\nAudit apps'],
        ['Segments and list', 'Suppression in place, no dead or duplicate segments', 'Segment library\nAudit apps'],
        ['Sign-up forms', 'Fields, timing and offer that work on a phone', 'Composer form audit'],
        ['Deliverability', 'Spam complaint and bounce rates under the warning levels, sender checks passing', 'Deliverability hub\nPostmaster Tools\nGlockApps'],
        ['Rendering', 'Links, images, dark mode and accessibility pass', 'Litmus\nMailgun Inspect'],
        ['Results against peers', 'Flow and campaign rates inside the middle half of about 100 similar companies', 'Klaviyo benchmarks'],
        ['What a new customer receives', 'Each email after a sign-up, product view, basket and checkout, on time', 'A new inbox\nThe store lookup'],
      ],
    },

    { kind: 'h2', id: 'how-compared', text: 'How the tools were compared' },
    {
      kind: 'p',
      text: 'Facts about each tool come from its own pages as they stood on 14 November 2026, and Klaviyo’s from its help centre articles, each dated in the sources. Prices are as listed that day, in the currency each company used. Each tool was compared on 5 points:',
    },
    {
      kind: 'list',
      items: [
        '**What it reads:** the account through Klaviyo’s API, a test email you send it, an email before it goes out, or emails from other brands.',
        '**What it checks,** in its own words.',
        '**What it needs from you:** a read-only key, a user login on the account, or nothing.',
        '**Price as listed,** with any free plan or trial.',
        '**What it can’t see,** from its own pages.',
      ],
    },
    {
      kind: 'p',
      text: 'Tools sit in groups by the job they do best, in alphabetical order inside each group, with no stars or ranking. Prices change, so check each page before you buy.',
    },

    { kind: 'h2', id: 'klaviyo-own', text: 'Klaviyo’s own audit tools' },
    {
      kind: 'p',
      text: 'Every Klaviyo account already holds 3 ways to audit itself: Composer’s audits, the benchmarks page and the deliverability hub. Klaviyo Academy’s course [Audit your Klaviyo account](' +
        KL_COURSE +
        ') walks a team through an audit in order. It starts with the plan, then covers account settings and billing, deliverability, subscriber growth, flows and campaigns.',
    },
    { kind: 'h3', id: 'composer', text: 'Klaviyo Composer audits' },
    {
      kind: 'list',
      items: [
        '**What it checks:** [Composer](' +
          COMPOSER_AUDIT +
          ') is Klaviyo’s AI marketing agent, used from a chat inside Klaviyo. It audits flows, sign-up forms, segments, email and text message content, and campaigns with a single message. A flow audit reviews the structure, trigger logic and results of every flow, and flags flows that overlap or stack messages on the same shopper. A campaign check covers subject lines, links and tracking, audience and exclusions before the send.',
        '**Price as listed:** every Klaviyo account gets a [free Composer plan](' +
          COMPOSER_PLAN +
          ') with 500 credits a cycle, and the paid plan is $20 a month for 2,000 credits. Klaviyo estimates an audit of a flow, form or template at $0.10 to $4.50 of credits.',
        '**What it can’t see:** by Klaviyo’s own help page, Composer audits one asset or library at a time and works from Klaviyo data. It may flag something set up on purpose, because it reads structure and content. Its pages don’t describe checking what reaches a subscriber’s inbox, and most fixes are yours to apply.',
        '**Best for:** a brand team that wants every flow reviewed from inside Klaviyo, on the credits it already has.',
      ],
    },
    { kind: 'h3', id: 'benchmarks-hub', text: 'Klaviyo benchmarks and the deliverability hub' },
    {
      kind: 'list',
      items: [
        '**What it checks:** [benchmarks](' +
          KL_PEERS +
          ') compare your flow, campaign and sign-up form results with a peer group of roughly 100 similar companies. Klaviyo picks the peers by industry, size and campaign habits, and shows the middle half of their results beside yours. The [deliverability hub](' +
          KL_HUB +
          ') scores sending health from 0 to 100 from the last 30 days of open, click, bounce, unsubscribe and spam complaint rates. Its reports split those rates by inbox provider, such as Gmail or Outlook.',
        '**Price as listed:** both sit in Klaviyo’s Analytics menu, and their help pages list no separate charge. Benchmarks need at least 25 delivered messages in a channel over 6 months, and the deliverability score needs 1,000 emails in the last 30 days.',
        '**What it can’t see:** Klaviyo counts an email as [delivered](' +
          KL_DELIVERY +
          ') once the receiving mail server accepts it, even if it goes to spam. The score and benchmarks are rates across emails that were sent, so an email a flow never sent has no rate to show.',
        '**Best for:** the sending health and peer comparison in every audit.',
      ],
    },

    { kind: 'h2', id: 'audit-apps', text: 'Klaviyo audit apps that connect to your account' },
    {
      kind: 'p',
      text: 'These 3 apps connect to Klaviyo with read-only access and return a score and a fix list. An in-house team or an agency can audit an account with them without booking a call.',
    },
    { kind: 'h3', id: 'aimerce', text: 'Aimerce' },
    {
      kind: 'list',
      items: [
        '**What it checks:** [Aimerce](' +
          AIMERCE +
          ')’s free audit reads profiles, flows and campaigns. It compares active with engaged subscribers, shows each flow’s revenue and order rate for the last 30 days against the 60 before, and lists live flows with no trigger in 30 days. It flags messages with links missing UTM tags (the codes that tell analytics which email a visit came from), images missing alt text, or Smart Sending switched off.',
        '**Price as listed:** free. Aimerce sells a tracking pixel, which the audit page offers on a 30 day trial.',
        '**What it can’t see:** it revokes access as soon as the report is made, so each report is one snapshot. Its page doesn’t describe deliverability or sign-up form checks.',
        '**Best for:** a free one-off read of flow trends and template errors.',
      ],
    },
    { kind: 'h3', id: 'fluxchek', text: 'Fluxchek' },
    {
      kind: 'list',
      items: [
        '**What it checks:** [Fluxchek](' +
          FLUXCHEK +
          ') scores an account from 0 to 100 against a fixed, published rubric, so the same account gets the same score every time. It flags missing welcome, cart and win-back flows, dead flows, single-email sequences and slow triggers. It also flags dead segments, missing suppression, duplicate lists, and spam complaint and bounce rates past set thresholds. It connects with a read-only private API key and can re-scan the account each month.',
        '**Price as listed:** free for the health score, without payment details. Starter is $39 a month for 1 account and 10 scans a month, with the full findings and a PDF to send a client.',
        '**What it can’t see:** its home page lists no plan for more than 1 account. It reads the account’s settings and rates, and its pages don’t describe checking what reaches a subscriber’s inbox.',
        '**Best for:** an agency that wants the same rubric on every client and a monthly re-scan to show a fix held.',
      ],
    },
    { kind: 'h3', id: 'spark-crm', text: 'SPARK CRM' },
    {
      kind: 'list',
      items: [
        '**What it checks:** [SPARK CRM](' +
          SPARK +
          ')’s Audit Score runs 30 checks across flows, data, deliverability, campaigns, audience, forms and content. It marks each one pass, partial, fail or unverifiable, with the data behind it and a next step. It connects through Klaviyo’s own sign-in (OAuth), compares the last 30 or 90 days with the period before, and keeps every run. A free skill runs the same rubric from Claude or Codex through Klaviyo’s official MCP server, the standard way AI agents call tools.',
        '**Price as listed:** [free](' +
          SPARK_PRICING +
          ') for 1 Klaviyo account. Basic is $15 a month for 3 accounts at a limited-time beta price, against a $30 launch price, and Pro is $30 against $60.',
        '**What it can’t see:** a check is marked unverifiable when Klaviyo’s API doesn’t expose the data it needs, and under 60% coverage the score is labelled directional. Its pages don’t describe checking what reaches a subscriber’s inbox.',
        '**Best for:** a freelancer or in-house team that wants the evidence behind every check and a score to track month by month.',
      ],
    },

    { kind: 'h2', id: 'auditors', text: 'Klaviyo auditors: agencies that publish a price' },
    {
      kind: 'p',
      text: 'A Klaviyo auditor is an agency or freelancer who reads the account with a Manager or Analyst login, the user roles Klaviyo gives a team member, and presents a fix list. These 3 agencies publish a scope and a price.',
    },
    { kind: 'h3', id: '303-london', text: '303 London' },
    {
      kind: 'list',
      items: [
        '**What it checks:** [303 London](' +
          L303 +
          ')’s in-house team reviews account health and deliverability, the master template, automations, campaigns and segmentation. It lists new flow opportunities and reviews the creative too: brand consistency, layout on a phone, and variety across the welcome, abandoned cart and post-purchase emails.',
        '**Price as listed:** £650 plus VAT, with a money-back guarantee if the brand isn’t satisfied after putting the plan in place. The findings are presented on a video call.',
        '**What it can’t see:** its page doesn’t state a turnaround, and the audit reads the account as it stands on the day of the review.',
        '**Best for:** a UK brand that wants strategy and creative reviewed together.',
      ],
    },
    { kind: 'h3', id: 'flowium', text: 'Flowium' },
    {
      kind: 'list',
      items: [
        '**What it checks:** [Flowium](' +
          FLOWIUM +
          ')’s free audit reviews the email strategy, sign-up performance, campaigns, revenue-generating flows and analytics. It adds technical suggestions, and a revenue improvement report on select audits.',
        '**Price as listed:** free. A full audit needs Klaviyo Manager access, and Analyst access gives a shorter report. Its page gives 2 to 5 business days, depending on the section you read.',
        '**What it can’t see:** nothing is found before Manager access is granted, and the results come as a live screen-shared presentation, so the brand books a call to see them.',
        '**Best for:** a brand without an agency that is willing to give Manager access for a free review.',
      ],
    },
    { kind: 'h3', id: 'netalico', text: 'Netalico' },
    {
      kind: 'list',
      items: [
        '**What it checks:** [Netalico](' +
          NETALICO +
          ')’s Klaviyo audit reads every live flow: its triggers, filters, splits, timing and revenue per recipient. It also covers missing flows, segmentation, list hygiene and deliverability. Sign-up forms and pop-ups are checked for their effect on site speed, and so is the Shopify data Klaviyo depends on: events, the catalogue feed, and subscription and loyalty app connections.',
        '**Price as listed:** $1,000, one time, for a written report with prioritised fixes and a walkthrough call with the team that wrote it.',
        '**What it can’t see:** its page doesn’t state the access it needs or a turnaround, and its audit listing showed Sold out beside an Add to cart button on 14 November 2026, so confirm availability first.',
        '**Best for:** a Shopify brand whose flows depend on subscription or loyalty apps.',
      ],
    },

    { kind: 'h2', id: 'deliverability', text: 'Deliverability and inbox placement tools' },
    {
      kind: 'p',
      text: 'Deliverability is how likely an email is to reach the inbox instead of the spam folder. These 2 tools measure it at the mailbox providers themselves, outside Klaviyo.',
    },
    { kind: 'h3', id: 'postmaster-tools', text: 'Google Postmaster Tools' },
    {
      kind: 'list',
      items: [
        '**What it checks:** [Postmaster Tools](' +
          POSTMASTER +
          ') shows Gmail’s own view of mail a brand sends to personal Gmail accounts. Its dashboards show compliance with Google’s sender rules, the share of messages people mark as spam, IP and domain reputation, and delivery errors. Another shows the share of mail passing SPF, [DKIM](/glossary/dkim) and DMARC, the checks that prove which company sent an email. Each dashboard covers the last 7 to 120 days.',
        '**Price as listed:** Google’s help pages list no charge. [Setting it up](' +
          POSTMASTER_SETUP +
          ') takes a Google account and a sending domain verified with a DNS record.',
        '**What it can’t see:** its data covers addresses ending in gmail.com or googlemail.com, is usually updated within 24 hours and can be missing on low-volume days. Its pages don’t describe which inbox tab an email lands in.',
        '**Best for:** every brand that sends to Gmail addresses.',
      ],
    },
    { kind: 'h3', id: 'glockapps', text: 'GlockApps' },
    {
      kind: 'list',
      items: [
        '**What it checks:** [GlockApps](' +
          GLOCK_TEST +
          ') shows where a test email lands at each mailbox provider: the inbox, a tab, spam, or missing. It adds a SpamAssassin spam score, IP blocklist status and SPF, DKIM and DMARC checks. A team sends the email to the test addresses GlockApps gives it.',
        '**Price as listed:** [free](' +
          GLOCK_PRICE +
          ') for 2 spam tests. Paid plans are listed at $59, $99 and $129 a month, with 360 to 1,800 test credits, and the page labels yearly billing “Save 30%”.',
        '**What it can’t see:** it tests the email you send it, at its own test addresses. Its pages don’t describe triggering your flows the way a shopper does.',
        '**Best for:** finding which mailbox provider is sending a campaign to spam.',
      ],
    },

    { kind: 'h2', id: 'rendering', text: 'Rendering and QA tools' },
    {
      kind: 'p',
      text: 'These 2 tools preview an email in many email apps and devices before it goes out, and check its links, images and accessibility.',
    },
    { kind: 'h3', id: 'litmus', text: 'Litmus' },
    {
      kind: 'list',
      items: [
        '**What it checks:** [Litmus](' +
          LITMUS +
          ') previews an email in 100+ email clients, dark mode included. Its pre-send checklist covers links, images and tracking, with accessibility checks for colour vision deficiency and a scan across 25+ spam filters.',
        '**Price as listed:** Litmus is now part of Validity Engage, whose [pricing page](' +
          VALIDITY +
          ') lists no prices and offers a demo.',
        '**What it can’t see:** it tests an email before the send and monitors how sent emails render. Its pages don’t describe triggering a flow as a new shopper.',
        '**Best for:** a team that sends many campaigns and wants every one previewed before it goes.',
      ],
    },
    { kind: 'h3', id: 'mailgun-inspect', text: 'Mailgun Inspect (formerly Email on Acid)' },
    {
      kind: 'list',
      items: [
        '**What it checks:** [Mailgun Inspect](' +
          INSPECT +
          '), which its page names as the successor to Email on Acid, previews emails in 100+ email clients and devices. Its Premium plan adds accessibility tests, HTML code analysis, link and image validation and spam content checks.',
        '**Price as listed:** Basic is $99 a month for 1,000 previews and Premium $199 for 2,000. Each extra preview is $0.15, and both plans offer a free trial.',
        '**What it can’t see:** it checks an email before it goes out. Its pages don’t describe watching what a live flow sends.',
        '**Best for:** a team that wants published prices and an API for pre-send tests.',
      ],
    },

    { kind: 'h2', id: 'archives', text: 'Email archives for competitor and inspiration research' },
    {
      kind: 'p',
      text: 'These collect the emails other brands send their subscribers, so a team can see what a competitor or a whole category sent. [Obsession compared with each archive](/compare) sets out what each one keeps, and [competitor email tracking tools](/blog/competitor-email-tracking-tools) compares the wider field.',
    },
    { kind: 'h3', id: 'milled', text: 'Milled' },
    {
      kind: 'list',
      items: [
        '**What it checks:** [Milled](' +
          MILLED +
          ') is a search engine for ecommerce emails. On 14 November 2026 its home page counted 53,393,959 emails from 104,230 brands, with 22,517 more arriving each day. Its archive goes back to 2012, with filters by holiday and marketing objective.',
        '**Price as listed:** its [pricing page](' + MILLED_PRICING + ') showed Team 5, for 5 seats, at $249.92 a month.',
        '**What it can’t see:** it keeps the emails a brand sends its subscribers. Its pages don’t describe basket or checkout reminders, which a store sends only after a shopper leaves a basket.',
        '**Best for:** what a category sent around a holiday, back to 2012.',
      ],
    },
    { kind: 'h3', id: 'panoramata', text: 'Panoramata' },
    {
      kind: 'list',
      items: [
        '**What it checks:** [Panoramata](' +
          PANORAMATA +
          ') tracks competitors’ emails and ads on every plan, and texts, landing pages and flows from its Professional plan. Its Advanced plan adds CRM segment and A/B test detection, and catalogue tracking.',
        '**Price as listed:** $99 a month ($990 a year) for up to 20 competitors and 6 months of history, $179 for unlimited competitors and history, $399 for Advanced, and Enterprise on request. Its page says the platform is in beta and opens accounts on request.',
        '**What it can’t see:** its pricing page doesn’t say which flows it triggers or how it collects emails. [Obsession vs Panoramata](/compare/obsession-vs-panoramata) sets the two side by side.',
        '**Best for:** a brand watching many competitors’ emails, texts and ads in one place.',
      ],
    },

    { kind: 'h2', id: 'customer-side', text: 'What does a new customer receive from your store?' },
    {
      kind: 'p',
      text: 'The tools that read the account see what Klaviyo is set to send. What a new customer receives shows up in an inbox, after a real sign-up, product view, basket and checkout. A flow can show as live in Klaviyo and still send nothing when a list, an event or a filter stops it, and [Klaviyo flow not sending](/blog/welcome-basket-email-not-sending) sorts out which. [A July 2026 test of 362 ecommerce brands](' +
        JOYJOYA +
        '), made with new email addresses, found that 158 never sent a welcome email.',
    },
    {
      kind: 'art',
      caption: 'A flow that shows as live in Klaviyo can still send a new customer nothing, and a real inbox shows which emails arrived and when. Fernlea is an invented store.',
      art: {
        kind: 'report',
        title: 'fernlea.example · Klaviyo vs the inbox',
        period: 'The same store, 9 to 11 November 2026',
        cols: ['Email', 'In Klaviyo', 'Customer got'],
        rows: [
          { name: 'Welcome', cells: ['Live', 'In 1 min'], tone: 'ok' },
          { name: 'Welcome code', cells: ['10% off', 'Rejected'], tone: 'fail' },
          { name: 'Basket', cells: ['Live, 1 h', 'None, 48 h'], tone: 'fail' },
          { name: 'Checkout', cells: ['Live, 1 h', 'At 26 h'], tone: 'late' },
          { name: 'First name', cells: ['Set', '“Hi ,”'], tone: 'fail' },
        ],
        notes: [
          'Klaviyo showed every flow live. In the new customer’s inbox, the basket reminder never came, the checkout reminder came a day late and the welcome code failed at checkout.',
          'Example: Fernlea and every time here are invented.',
        ],
      },
    },
    {
      kind: 'p',
      text: 'To check your own store by hand tonight, use a new email address your store has never seen:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Sign up** through your own pop-up or footer form. Most stores send a welcome within a minute.',
        '**Look at a product.** Open the store from the welcome email’s link, so Klaviyo knows who you are, then view a product. Give it a day.',
        '**Leave a basket.** Add the product and close the tab. Give it 24 hours.',
        '**Start a checkout and leave** with the same email, before paying. Give it 48 hours.',
      ],
    },
    {
      kind: 'p',
      text: 'For each email, note the minute it came and whether the first name and any code work. Note too which emails never came.',
    },
    {
      kind: 'p',
      text: 'In Obsession’s index on 13 November 2026, 9 in 10 stores sent a welcome email after a sign-up, most within a minute. About half sent an email after a product view. After a basket, nearly 1 in 2 stores sent nothing, and nearly 1 in 2 sent nothing after a checkout. Of the basket and checkout reminders that did come, half arrived within about an hour. The [ecommerce email marketing benchmarks](/blog/ecommerce-email-marketing-benchmarks) give each step’s figures.',
    },
    {
      kind: 'p',
      text: 'Obsession keeps what each store sends a new customer after a sign-up, a product view, a basket and a checkout, every email dated. Type an email at your store’s own address into the [store lookup](/lookup), and it sends your store’s entry to that inbox, set beside every other store in the index. Each step is read at 4, 8, 12, 24 and 48 hours, and the accounts stay subscribed after that. A fresh sign-up can run every step again each week, in an index built for millions of companies.',
    },
    {
      kind: 'p',
      text: 'An entry goes only to an address at the store itself, so agencies that do email, retention or conversion work for ecommerce brands get [early access](/lookup#agencies). It looks up every store already in the index and adds up to 5 stores they run or pitch, with the brand’s OK. We check each agency before setting up access.',
    },

    { kind: 'h2', id: 'stores-and-clients', text: 'How do you add the customer’s side for your store, the leaders and your clients?' },
    {
      kind: 'p',
      text: 'An audit inside Klaviyo shows what is set up. For your own online store, the [store lookup](/lookup) shows what a new customer received after a sign-up, a basket and a checkout. With Obsession, you can set your store beside the biggest stores in your category, read the same way. You see which flows the leaders run, so you know what to add next.',
    },
    {
      kind: 'list',
      items: [
        '**Win the pitch:** an agency opens with what the prospect’s store sent a new customer, before it has Klaviyo access.',
        '**Keep the client:** after the audit’s fixes, a fresh sign-up every week shows each flow still sending, beside what Klaviyo reports.',
        '**Grow the account:** the gaps only the customer’s side shows, such as a basket email that never arrives, become the next piece of work.',
      ],
    },
    {
      kind: 'screen',
      screen: 'pack',
      workspace: 'agency',
      caption: 'An agency’s watch over 12 prospects: each row lands with its gap, and one pitch fills with its findings and a link to the emails and screenshots behind them, which the brand can open.',
    },
    {
      kind: 'p',
      text: 'It keeps going on its own. The accounts stay subscribed, and a fresh sign-up runs every step again each week. It works the same for one store or a list of 3,000, on an index built for millions of companies. The [retention agency use case](/use-cases/leak-checks-for-retention-agencies) shows how agencies run it across every client, from the first pitch to the monthly report.',
    },

    { kind: 'h2', id: 'which-to-choose', text: 'Which Klaviyo audit tool to choose' },
    {
      kind: 'p',
      text: 'Use Obsession when your team needs to know what each new customer receives from your store, every week, with each email dated and every missing one named. Use a Klaviyo audit tool for what the account is set to send.',
    },
    {
      kind: 'list',
      items: [
        '**What a new customer receives, every week:** Obsession, starting with your store’s entry in the store lookup.',
        '**Every flow reviewed inside Klaviyo:** Composer’s audits, on the free plan’s 500 credits.',
        '**Sending health against about 100 peers:** Klaviyo’s benchmarks and deliverability hub.',
        '**A scored fix list without a call:** Aimerce for free, Fluxchek free for the score or $39 a month for the findings, or SPARK CRM free for 1 account.',
        '**An expert’s read and a call:** Flowium for free with Manager access, 303 London at £650 plus VAT, or Netalico at $1,000.',
        '**Which mailbox provider sends you to spam:** Google Postmaster Tools for Gmail, or GlockApps across providers.',
        '**Every campaign previewed before it goes out:** Litmus or Mailgun Inspect.',
        '**What competitors and a category sent:** Milled or Panoramata.',
        '**1 to 3 stores checked once:** by hand, with a new inbox and the 4 steps.',
      ],
    },
    {
      kind: 'cta',
      text: 'See every email your store sends a new customer after a sign-up, a basket and a checkout, dated and set beside every other store in the index.',
      to: '/lookup',
      label: 'Look up your store',
    },

    { kind: 'h2', id: 'compared', text: 'The 14 tools and services and Obsession, side by side', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 14 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Klaviyo audit tools and services by job, from each provider’s own pages on 14 November 2026. Prices as listed',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'A flow that stops shows as a quiet month', 'Accounts tested since their last change'],
        ['By hand: a new inbox and a sheet', 'What 1 new customer received, with the time', 'Free, plus staff hours', 'One store, one moment, no history', '1 to 3 stores, checked once'],
        ['Klaviyo Composer audits', 'Flows, forms, segments and campaigns reviewed in a chat', 'Free plan: 500 credits\n$20 a month: 2,000 credits', 'Reads what is built in Klaviyo', 'A first review inside Klaviyo'],
        ['Klaviyo benchmarks and deliverability hub', 'Rates against about 100 peers, sending score 0 to 100', 'No separate charge listed', 'Counts mail in spam as delivered', 'Sending health in every audit'],
        ['Aimerce', 'Flow trends, inactive flows, template errors', 'Free', 'One snapshot per connection', 'A free one-off read'],
        ['Fluxchek', 'Fixed rubric, the same score every time', 'Free score\n$39 a month for 1 account', 'No plan over 1 account listed', 'Agencies tracking fixes'],
        ['SPARK CRM', '30 checks, each with its evidence', 'Free for 1 account\n$15 or $30 a month', 'Unverifiable checks lower coverage', 'A monthly score with evidence'],
        ['303 London', 'Strategy and creative reviewed by a team', '£650 plus VAT', 'No turnaround stated', 'UK brands wanting a call'],
        ['Flowium', 'A free review by an agency team', 'Free', 'Needs Manager access first', 'Brands without an agency'],
        ['Netalico', 'Flows, forms, site speed and Shopify data', '$1,000 one time', 'Listed as Sold out on 14 Nov', 'Shopify brands with subscription apps'],
        ['Google Postmaster Tools', 'Gmail’s spam rate, reputation and authentication', 'No charge listed', 'Personal Gmail addresses only', 'Every brand sending to Gmail'],
        ['GlockApps', 'Placement at each provider from 1 test email', 'Free: 2 tests\n$59 to $129 a month, yearly', 'Tests the email you send it', 'Finding the provider behind spam'],
        ['Litmus', 'Previews in 100+ clients, 25+ spam filters', 'Through Validity, on request', 'Before the send', 'Teams sending many campaigns'],
        ['Mailgun Inspect', 'Previews and QA checks, published prices', '$99 or $199 a month', 'Before the send', 'Pre-send tests by API'],
        ['Milled', '53 million+ emails from 104,230 brands', 'Team 5: $249.92 a month', 'Basket and checkout emails not described', 'Category research back to 2012'],
        ['Panoramata', 'Competitors’ emails, texts, ads and flows', '$99 to $399 a month', 'Collection method not stated', 'Many competitors in one place'],
        [
          'Obsession (ours): [Store lookup](/lookup), [Leak checks](/use-cases/leak-checks-for-ecommerce-stores), [Store sign-up and checkout](/recipes/mystery-shopper)',
          'Every email a new customer gets after each step, dated, and every one that never came',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Reads what arrives, with the account’s settings left to Klaviyo',
          'What each new customer receives, every week, beside every other store',
        ],
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about Klaviyo audit tools' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best Klaviyo audit tool?',
          a: 'The best Klaviyo audit tool depends on the job. For what a new customer receives after each step, Obsession keeps every email dated. On 14 November 2026, Klaviyo’s Composer audited flows on a free plan of 500 credits. Fluxchek and SPARK CRM scored an account for free, with paid plans from $15 a month. GlockApps and Litmus tested inbox placement and rendering.',
        },
        {
          q: 'What is a Klaviyo auditor?',
          a: 'A Klaviyo auditor is an agency or freelancer who reads your Klaviyo account with a Manager or Analyst login and hands back a fix list, usually on a call. On 14 November 2026, Flowium audited for free with Manager access, 303 London charged £650 plus VAT and Netalico $1,000.',
        },
        {
          q: 'What does a Klaviyo account audit include?',
          a: 'A Klaviyo account audit covers flows, segments and list health, sign-up forms, campaigns, deliverability and the Shopify data Klaviyo depends on. In nearly 100 audits in 2025, Klaviyo’s own team most often recommended splitting the welcome flow by purchase status, and Extended ID and attribution settings came up in nearly two-thirds.',
        },
        {
          q: 'Is there a free Klaviyo audit template?',
          a: 'Yes. A Klaviyo audit template needs 7 areas, each with a pass mark and a place to read it. They are flows, segments and list, sign-up forms, deliverability, rendering, results against peers, and what a new customer receives. Obsession’s Klaviyo audit checklist goes through every check in order of priority.',
          link: { label: 'Klaviyo audit checklist', to: '/blog/email-marketing-audit' },
        },
        {
          q: 'Is there a free Klaviyo audit tool?',
          a: 'Yes, several. Every Klaviyo account has a free Composer plan with 500 credits a cycle. Aimerce’s audit and Fluxchek’s health score are free, SPARK CRM is free for 1 account, and Flowium audits for free with Manager access. Google Postmaster Tools lists no charge, and GlockApps gives 2 free spam tests.',
        },
        {
          q: 'Can a Klaviyo audit tool see what customers receive?',
          a: 'Not from the account alone. Klaviyo audit apps and agency audits read the account, so they see what each flow is set to send, and none of the apps’ pages describe checking a subscriber’s inbox. A new customer’s inbox shows which emails arrived and when. Obsession’s store lookup shows your own store’s entry, every email after a sign-up, a product view, a basket and a checkout, dated.',
          link: { label: 'Look up your store', to: '/lookup' },
        },
        {
          q: 'How often should you audit a Klaviyo account?',
          a: 'Klaviyo Academy’s audit course is written for an annual or twice-yearly audit, and Fluxchek and SPARK CRM are built to re-run each month. Check what a new customer receives after every change to your theme, apps or flows, since a change can stop an email overnight.',
        },
      ],
    },
  ],

  sources: [
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KL_BENCH, date: '2026' },
    { title: 'What nearly 100 account audits revealed about email and text message marketing priorities for 2026', publisher: 'Klaviyo (Michael Pattison)', url: KL_AUDITS, date: '2026-02-12' },
    { title: 'Audit your Klaviyo account', publisher: 'Klaviyo Academy', url: KL_COURSE },
    { title: 'How to audit with Composer', publisher: 'Klaviyo Help Center', url: COMPOSER_AUDIT, date: '2026-10-25' },
    { title: 'How your Composer plan works', publisher: 'Klaviyo Help Center', url: COMPOSER_PLAN, date: '2026-10-25' },
    { title: 'Understanding peer groups, benchmarks, and how Klaviyo uses your data', publisher: 'Klaviyo Help Center', url: KL_PEERS, date: '2026-10-30' },
    { title: 'Understanding the email deliverability hub in Klaviyo', publisher: 'Klaviyo Help Center', url: KL_HUB, date: '2026-10-29' },
    { title: 'Deliverability vs. delivery for each channel', publisher: 'Klaviyo Help Center', url: KL_DELIVERY, date: '2026-10-29' },
    { title: 'Klaviyo account audit tool', publisher: 'Aimerce', url: AIMERCE },
    { title: 'Fluxchek: Klaviyo flow audits', publisher: 'Fluxchek', url: FLUXCHEK },
    { title: 'Klaviyo audit tool: 30-check account audit with evidence', publisher: 'SPARK CRM', url: SPARK },
    { title: 'Pricing', publisher: 'SPARK CRM', url: SPARK_PRICING },
    { title: 'Email marketing full account audit', publisher: '303 London', url: L303 },
    { title: 'Free email marketing audit', publisher: 'Flowium', url: FLOWIUM },
    { title: 'Email marketing services', publisher: 'Netalico', url: NETALICO },
    { title: 'Postmaster Tools dashboards', publisher: 'Gmail Help', url: POSTMASTER },
    { title: 'Set up Postmaster Tools', publisher: 'Gmail Help', url: POSTMASTER_SETUP },
    { title: 'Free spam checker', publisher: 'GlockApps', url: GLOCK_TEST },
    { title: 'Pricing', publisher: 'GlockApps', url: GLOCK_PRICE },
    { title: 'Email testing', publisher: 'Litmus', url: LITMUS },
    { title: 'Pricing', publisher: 'Validity', url: VALIDITY },
    { title: 'Pricing', publisher: 'Mailgun Inspect (Email on Acid)', url: INSPECT },
    { title: 'A search engine for email newsletters and ecommerce sales', publisher: 'Milled', url: MILLED },
    { title: 'Pricing', publisher: 'Milled', url: MILLED_PRICING },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
  ],

  related: [
    'email-marketing-audit',
    'audit-prospect-email-without-klaviyo-login',
    'welcome-basket-email-not-sending',
    'competitor-email-tracking-tools',
    '/lookup',
    '/sample-output',
  ],
}
