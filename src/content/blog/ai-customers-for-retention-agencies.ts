import type { BlogPost } from './types'
import { AI_CUSTOMER, CUSTOMER_SIDE_OBSERVABILITY } from '../glossary'

/* The why series, Spec B (24 Oct 2026): why retention agencies need AI customers. It owns "klaviyo agency ai" (primary),
   with "ai for klaviyo", "ai agent for klaviyo", "retention marketing agency", "email marketing agency for ecommerce",
   "email marketing reporting template" and "ai tools for email marketing" (Google autocomplete, US and UK, 24 Oct 2026).
   Readers: founders and account leads at email and SMS agencies running Klaviyo, Postscript or Attentive for Shopify
   brands. Why now: the Black Friday build (Klaviyo's guide puts flows and offers in September and October, teasers and
   early access by the first week of November), Black Friday on Fri 27 Nov 2026, and platforms adding AI agents that
   build campaigns and answer customers.
   The argument: a client keeps paying for what it can see, and the platform shows what was sent. The agency's lasting
   value is proof and judgement: showing each client what its customers received, before the client asks. The sum is
   retainer × months kept (Darkroom's $3,000 low and $10,000 high, at 3, 6 and 12 months), set against the hours of the
   weekly routine by hand (worked once for an invented 20 client agency at the BLS median wage), so the payback comes
   before any price. Then the routine as customer-side observability, 5 jobs, what changes next, options, when not to.
   Opened on 24 Oct 2026 at each source's own page: Darkroom's retention cost guide (23 Oct 2026: tiers, inclusions),
   Netalico's plans, Klaviyo Academy's referral share lesson and audit course, CallRail's 2026 agency playbook on Search Engine Journal
   (12 to 24 months typical; 6% against 48% on reporting), Klaviyo's flow
   analytics and list triggered flow help pages, Klaviyo's benchmarks, MailCharts' agencies page, Flowium's audit page,
   Klaviyo's Black Friday timing post, Klaviyo's AI page and its Marketing Agent post, Postscript's homepage, Klaviyo's
   Gmail post, Adobe's 28 Sep 2026 forecast, Salesforce's 19 Oct 2026 piece, Panoramata and GlockApps pricing, the
   BLS handbook. From the verified library: Joy Joya, the CMA, ChatGPT's cloud browser (its help page returned 403 on
   a second read). The 4 r/agency posts come from the research library (read live on 3 Oct 2026; Reddit can't be
   fetched). Left out on purpose: Milled (pricing page 403), Attentive (help page 403), Gartner, ChatGPT agent, any
   Obsession price, customer or result, the site's 93% and 128 stores, any PilotX figure, the offers' sales wording.
   pennycress.example, hartwick.example, the 20 client agency and its timings are invented. No dashes. */

const CALLRAIL = 'https://www.searchenginejournal.com/rundowns/2026-marketing-agency-playbook-data-backed-ai-pivots-that-ignite-growth'
const DARKROOM = 'https://www.darkroomagency.com/observatory/retention-marketing-cost-email-sms-2026'
const NETALICO = 'https://netalico.com/pages/services-email-marketing'
const KL_REFERRAL = 'https://academy.klaviyo.com/en-us/courses/partner-program-fundamentals/lessons/register-a-lead'
const R_HALF = 'https://www.reddit.com/r/agency/comments/1ugheff/lost_our_biggest_client_today/'
const KL_TIMING = 'https://www.klaviyo.com/blog/when-to-send-black-friday-emails'
const KL_FLOWS = 'https://help.klaviyo.com/hc/en-us/articles/115002779351'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const KLAVIYO_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const MAILCHARTS = 'https://mailcharts.com/built-for/agencies'
const FLOWIUM = 'https://flowium.com/audit'
const R_SEE = 'https://www.reddit.com/r/agency/comments/1s4iwpc/i_kept_losing_clients_who_couldnt_see_what_they/'
const R_NOWHERE = 'https://www.reddit.com/r/agency/comments/1tq0t22/have_you_ever_lost_a_retainer_client_without/'
const BLS = 'https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm'
const KL_LISTFLOW = 'https://help.klaviyo.com/hc/en-us/articles/360003040052'
const KL_AI = 'https://www.klaviyo.com/products/ai'
const KL_AGENT = 'https://www.klaviyo.com/blog/introducing-kai-marketing-agent'
const POSTSCRIPT = 'https://postscript.io'
const R_PLATFORM = 'https://www.reddit.com/r/agency/comments/1wc0ey9/thinking_about_killing_our_retainer_model_and/'
const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const GMAIL_GEMINI = 'https://blog.google/products-and-platforms/products/gmail/gmail-is-entering-the-gemini-era/'
const KL_GMAIL = 'https://www.klaviyo.com/blog/gmail-gemini-in-the-inbox'
const ADOBE = 'https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record'
const SF_PERSONAL = 'https://www.salesforce.com/news/stories/personal-agents-to-drive-more-contact-center-traffic/'
const KL_COURSE = 'https://academy.klaviyo.com/en-us/courses/audit-your-klaviyo-account'
const GLOCKAPPS = 'https://glockapps.com/pricing/'
const PANORAMATA = 'https://www.panoramata.co/pricing'
const CLOUD_BROWSER = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'

export const post: BlogPost = {
  slug: 'ai-customers-for-retention-agencies',
  title: 'Why retention agencies need AI customers',
  dek: 'What a retention agency can’t see from inside a client’s account, what that costs in retainers, the weekly routine that covers it, and the jobs AI customers do for every client, rival and prospect.',
  metaTitle: 'Klaviyo agency AI: why retention agencies need AI customers',
  description:
    'Klaviyo agency AI for proof: how AI customers show each client what its customers received, watch rivals and open pitches, with the payback in retainers.',
  answer:
    'Retention agencies that run Klaviyo, Postscript or Attentive for ecommerce brands need AI customers to show each client what its customers received, from the welcome email to the basket reminder, checked as a new customer every week and kept exactly as it arrived. The platforms report what was sent, and an AI customer, with its own inbox, phone number and browser, records what arrived at each client store, at its rivals and at the agency’s prospects.',
  primaryKeyword: 'klaviyo agency ai',
  keywords: [
    'klaviyo agency ai',
    'ai for klaviyo',
    'ai agent for klaviyo',
    'retention marketing agency',
    'email marketing agency for ecommerce',
    'email marketing reporting template',
    'ai tools for email marketing',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-24',
  readingMinutes: 12,
  order: 13,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'pennycress.example · What your customers received',
      period: 'October 2026, as a new customer each week',
      cols: ['Message', 'Expected', 'What arrived'],
      rows: [
        { name: 'Welcome email', cells: ['Within 5 minutes', '1 minute, code WICK15'], tone: 'ok' },
        { name: 'Welcome text', cells: ['After opt in', 'Never arrived'], tone: 'fail' },
        { name: 'Basket reminder', cells: ['After 1 hour', '4 hours, no photo'], tone: 'late' },
        { name: 'Checkout reminder', cells: ['After 1 hour', '58 minutes'], tone: 'ok' },
        { name: 'Code at checkout', cells: ['Works on all items', 'Refused on gift sets'], tone: 'fail' },
        { name: 'Rival: hartwick', cells: ['A welcome offer', '20% off, in 2 minutes'], tone: 'info' },
      ],
      notes: [
        'An example page of a client report, for an invented store and an invented rival.',
        'Checked weekly as a new customer, with each email and text kept as it arrived.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A retention agency runs email and SMS for ecommerce brands, usually on Klaviyo, Postscript or Attentive, and is paid a monthly retainer to keep each client’s programme earning. AI customers show the agency each client’s programme as a new customer receives it, checked every week and kept as evidence. [What AI customers are](/blog/ai-customers) defines the term, and [why AI customers matter](/blog/why-ai-customers-matter) makes the case for every company.',
    },
    {
      kind: 'p',
      text: 'For agencies, the case starts with how clients leave. CallRail, a call tracking company, surveyed US marketing agencies for [its 2026 playbook for agencies](' +
        CALLRAIL +
        '): the typical client relationship now lasts 12 to 24 months, and among the agencies with the shortest relationships, only 6% provide reporting services, against 48% overall.',
    },
    {
      kind: 'stat',
      value: '6%',
      label: 'of the agencies with the shortest client relationships provide reporting services, against 48% overall',
      source: 'CallRail, 2026 marketing agency playbook',
      href: CALLRAIL,
    },

    { kind: 'h2', id: 'their-world', text: 'How a retention marketing agency makes money' },
    {
      kind: 'p',
      text: 'Most of the income is retainers. [Darkroom’s October 2026 guide](' +
        DARKROOM +
        ') sets agency tiers by the brand’s revenue: $3,000 to $5,000 a month for brands at $1M to $5M, $5,000 to $8,000 at $5M to $15M, and $8,000 to $10,000 or more over $15M. [Netalico](' +
        NETALICO +
        ') publishes smaller plans by volume, from $1,200 a month for 4 emails to $5,000 for 16 emails and 4 texts, plus a $1,000 audit and flow builds from $2,500 to $6,000. Klaviyo’s Partner tier pays [a 10% revenue share](' +
        KL_REFERRAL +
        ') on a referred brand’s email and text bill for 12 months.',
    },
    {
      kind: 'p',
      text: 'One client is worth its retainer times the months it stays: $36,000 to $120,000 in a first year at Darkroom’s $3,000 to $10,000. A single client can be a large share of the income. “Half of our MRR just got cut with that,” [an agency owner wrote on r/agency](' +
        R_HALF +
        ') in June 2026, after a client paused services.',
    },
    {
      kind: 'p',
      text: 'The week follows each client’s scope. Darkroom’s starter tier covers the core flows (the automated emails a customer’s action starts: welcome, basket and post purchase), 3 to 4 campaigns a week and monthly reporting. The middle tier adds 8 to 12 flows, an SMS programme, A/B testing and strategy calls every 2 weeks, and the full service tier has weekly calls and a dedicated account team. The work runs in the client’s platform, a design tool and a shared Slack channel with each client.',
    },
    {
      kind: 'p',
      text: 'From September the calendar turns to Black Friday, on Friday 27 November 2026. Klaviyo’s own guide advises [finalising segments, flows and offers in September and October](' +
        KL_TIMING +
        '), with teasers in the weeks before early November and early access sends in the first week of November. Cyber Monday is 30 November.',
    },

    { kind: 'h2', id: 'blind-spots', text: 'What a retention agency can’t see today' },
    {
      kind: 'p',
      text: 'A client’s platform reports what it sent and what that earned. [Klaviyo’s flow analytics](' +
        KL_FLOWS +
        ') show delivered, opened, clicked, converted and skipped messages and the revenue attributed over 30 days. 4 things stay outside that view.',
    },
    {
      kind: 'list',
      items: [
        '**Flows that never started.** A form or trigger that stops working leaves no row in a report. In [a test of 362 ecommerce brands by Joy Joya](' +
          JOYJOYA +
          '), 158 never sent a new subscriber a welcome email. Klaviyo’s own [2026 benchmarks](' +
          KLAVIYO_BENCH +
          ') show flows earning nearly 41% of email revenue from 5.3% of sends.',
        '**What rivals sent the client’s customers.** A senior account manager quoted on [MailCharts’ agencies page](' +
          MAILCHARTS +
          ') says “Our clients would constantly be asking us to produce a competitive analysis based on email”.',
        '**What the customer saw.** Which Gmail tab an email reached, whether its offer matched the pop up and whether its code worked at checkout show only on the customer’s side. Joy Joya’s test found 20 brands whose welcome offer didn’t match their pop up.',
        '**A prospect’s programme before the pitch.** The usual audit needs a login. [Flowium’s free audit](' +
          FLOWIUM +
          '), for example, asks for Klaviyo Manager access and is presented on a screen share.',
      ],
    },
    {
      kind: 'quote',
      text: 'I kept losing clients who couldn’t see what they were paying for',
      cite: 'An agency owner, in the title of a March 2026 post on r/agency',
      href: R_SEE,
    },
    {
      kind: 'p',
      text: 'Churn can come without a visible warning. In May 2026 [an owner asked r/agency about lost retainers](' +
        R_NOWHERE +
        '), “the ones where it felt like it came out of nowhere”.',
    },

    { kind: 'h2', id: 'cost', text: 'What it costs a retention agency' },
    {
      kind: 'p',
      text: '1 client kept is worth its monthly retainer × the months it stays, both from your agency’s own books. Darkroom’s range gives a low case of $3,000 a month and a high case of $10,000.',
    },
    {
      kind: 'table',
      caption: 'The value of 1 client kept, at the low and high ends of Darkroom’s retainer range. Put your own retainer in either column',
      cols: ['Months kept', 'Low: $3,000 a month', 'High: $10,000 a month'],
      rows: [
        ['3 months', '$9,000', '$30,000'],
        ['6 months', '$18,000', '$60,000'],
        ['12 months', '$36,000', '$120,000'],
      ],
    },
    {
      kind: 'p',
      text: 'The client’s side of the sum is its flow revenue a day × the days a break goes unnoticed, which average half the gap between checks: about 15 days with a monthly report and 3.5 with a weekly check. [How AI customers find revenue leaks](/blog/ai-customers-find-revenue-leaks) works it from a flow report.',
    },
    {
      kind: 'p',
      text: 'The payback comes before any price. Checking 20 clients by hand each week, at 48 minutes a client, takes 832 hours a year, or $31,508 at the US median wage for market research analysts, [$37.87 an hour in May 2025](' +
        BLS +
        '). That routine pays for itself if it keeps 1 client for about 3 more months at the high case, or 10.5 months at the low case.',
    },
    {
      kind: 'art',
      caption: 'The payback worked once for an invented agency with example timings. The hourly rate is the BLS median wage and the retainers are Darkroom’s range. Put your own numbers in each row.',
      art: {
        kind: 'price',
        title: 'An agency with 20 clients · the routine by hand',
        rows: [
          { label: 'Each client, each week', value: '48 minutes', note: '3 journeys at 6, 3 rivals at 10' },
          { label: 'A year, 20 clients', value: '832 hours', note: '16 hours a week × 52' },
          { label: 'Cost of the hours', value: '$31,508', note: '× $37.87, the BLS median wage' },
          { label: '1 client, high case', value: '$10,000', note: 'A month, top of Darkroom’s range' },
          { label: '1 client, low case', value: '$3,000', note: 'A month, Darkroom’s starter floor' },
        ],
        total: { label: 'Months of 1 client that cover it', value: '3.2 to 10.5', note: '$31,508 ÷ each retainer' },
      },
    },
    {
      kind: 'p',
      text: 'Put any tool’s yearly price in place of the hours. [AI customers at scale](/blog/ai-customers-at-scale) prices an AI customer line by line, at about $2 a month for one that watches one company’s email at published retail prices.',
    },

    { kind: 'h2', id: 'workload', text: 'The workload of checking by hand' },
    {
      kind: 'p',
      text: 'By hand, the hours are checks × clients × minutes × how often. Each week a strategist runs the welcome, basket and checkout journeys as a new customer at every client store, logs what arrived within 48 hours, then logs each rival’s emails. At example timings of 6 minutes a journey and 10 minutes a rival, 3 journeys and 3 rivals take 48 minutes a client each week: 4 hours for 5 clients, 16 for 20 and 32 for 40.',
    },
    {
      kind: 'list',
      items: [
        '**Every run needs a new identity.** A list triggered flow in Klaviyo has [no re-entry by default](' +
          KL_LISTFLOW +
          '), so a subscriber who had the welcome series won’t get it again. 3 journeys at 20 clients need 60 new addresses a week.',
        '**Changes don’t wait for the weekly run.** A theme, app, form or flow edit can stop a message on any day, and the next run is the first to see it.',
        '**History starts on the first run.** A rival joined after its first Black Friday teaser has no record of it, and a skipped week can’t be logged afterwards.',
      ],
    },
    {
      kind: 'p',
      text: `${CUSTOMER_SIDE_OBSERVABILITY.definition} For an agency, [customer-side observability](/blog/customer-side-observability) is a routine set once per client: a pass mark for each message written before the first run, a cadence, and a named owner for each fail.`,
    },
    {
      kind: 'table',
      caption: 'A weekly routine for 1 client, with pass marks set before the first run. Example marks and owners',
      cols: ['Check', 'Pass mark', 'Cadence', 'Owner of a fail'],
      rows: [
        ['Welcome email and code', 'Within 5 minutes, code works', 'Weekly, and after form edits', 'Strategist'],
        ['Welcome text', 'Arrives after the opt in', 'Weekly', 'Strategist'],
        ['Basket and checkout reminders', 'Flow delay plus 1 hour, product shown', 'Weekly, and after theme or app changes', 'Strategist\nDeveloper for the theme'],
        ['Rivals’ emails and texts', 'Every send logged with its offer', 'As they arrive', 'Account lead'],
        ['AI replies by text or chat', 'Match the client’s policy pages', 'Weekly, and after prompt edits', 'Account lead'],
      ],
    },

    { kind: 'h2', id: 'jobs', text: 'What AI customers do for a retention agency' },
    { kind: 'p', text: `**${AI_CUSTOMER.definition}**` },
    {
      kind: 'p',
      text: 'An agency gives each client store, each rival and each prospect its own AI customer, with the client’s OK for its store.',
    },
    { kind: 'h3', id: 'client-flows', text: '1. Every client’s flows, every week' },
    {
      kind: 'p',
      text: '**The check:** a new customer signs up through the pop up, opts in to texts, leaves a basket and starts a checkout at each client store, every week and after each launch. **A pass:** each message arrives inside its deadline, with the code and the product filled in. **That week:** the strategist fixes a break before the client sees it, finds the cause with [an email marketing audit](/blog/email-marketing-audit), and logs when it was found, fixed and checked again. Obsession’s [Mystery shopper](/recipes/mystery-shopper) goes through a client’s business as a customer does, from the first click to the last email.',
    },
    { kind: 'h3', id: 'report-page', text: '2. A page for the client report' },
    {
      kind: 'p',
      text: '**The check:** the month’s runs gathered on one page of the client report, every email and text linked as it arrived. **A pass:** every flow fired, or each break is listed with its fix. **That week:** the account lead sends it beside the platform’s revenue report, before the client asks what the retainer buys. [Proof that every flow fired](/blog/show-clients-every-flow-fired) sets out that page as an email marketing reporting template.',
    },
    { kind: 'h3', id: 'rivals', text: '3. Every rival, before Black Friday' },
    {
      kind: 'p',
      text: '**The check:** an AI customer on the list of each rival a client names, logging every email, text, offer and code from the day it joins. **A pass:** each rival’s first Black Friday send is dated, with its offer. **That week:** the account lead collects 3 rivals per client before early November, and after Cyber Monday sends [a one page Black Friday rival report](/blog/black-friday-rival-report-template). [Email and SMS tracking](/recipes/email-sms-tracking) subscribes to every brand on a list and sets their emails and texts side by side.',
    },
    { kind: 'h3', id: 'prospects', text: '4. Every prospect, before the pitch' },
    {
      kind: 'p',
      text: '**The check:** a sign up through the prospect’s public pop up, a text opt in and a basket left, with no login, then 48 hours of waiting. **A pass:** a dated finding the prospect can check in its own inbox. **That week:** the founder opens the first email with it and runs the full audit after the yes, as in [auditing a prospect’s email without a Klaviyo login](/blog/audit-prospect-email-without-klaviyo-login). [Prospect intelligence](/recipes/prospect-intelligence) becomes a customer of every prospect on a list and proves the gap the agency fixes.',
    },
    { kind: 'h3', id: 'platform-ai', text: '5. What the platform’s AI sends and says' },
    {
      kind: 'p',
      text: '**The check:** every email and text an AI drafted, read as a customer received it, and the client’s text or chat agent asked what customers ask about codes, delivery and returns. **A pass:** offers, prices and policies match the client’s own pages. **That week:** the strategist corrects the brief or the prompt and checks again the same day.',
    },

    { kind: 'h2', id: 'what-changes', text: 'AI for Klaviyo agencies: what changes next' },
    {
      kind: 'list',
      items: [
        '**Live: the platform builds the campaigns.** Klaviyo’s [AI page](' +
          KL_AI +
          ') lists Composer, a marketing agent that can “build marketing for your review”. Klaviyo’s [September 2025 launch post](' +
          KL_AGENT +
          ') says its marketing agent plans, builds and launches campaigns, flows and sign up forms, with every campaign it generates reviewed and launched by the marketer. [Postscript’s homepage](' +
          POSTSCRIPT +
          ') offers “1:1 agentic marketing with Shopper”. An email agency owner serving Shopify brands wrote on [r/agency in September 2026](' +
          R_PLATFORM +
          ') that “campaign building is quietly becoming a platform feature rather than a service”.',
        '**Live: the brand answers for its AI.** The UK’s Competition and Markets Authority says a business is [responsible for what an AI agent does in the same way it is responsible for what an employee does](' +
          CMA +
          '). A reply an AI sends in a client’s name is the client’s promise.',
        '**Rolling out: Gmail’s AI summarises brand mail.** [Google’s January 2026 update](' +
          GMAIL_GEMINI +
          ') began rolling out AI Overview summaries and Suggested Replies to everyone in the US, in English, and gave trusted testers an AI Inbox before a wider release. [Klaviyo](' +
          KL_GMAIL +
          ') says “We don’t yet know exactly how Gmail’s AI will summarize, categorize, or prioritize brand emails at scale.”',
        '**Forecast: more customers arrive, and leave, through agents.** [Adobe forecasts](' +
          ADOBE +
          ') that AI traffic to US retail sites will rise 130% year over year this holiday season, measured by shoppers clicking a link. A Salesforce executive wrote on 19 October 2026 that consumers are starting to hand personal AI agents tasks [from cancelling subscriptions to booking restaurant reservations](' +
          SF_PERSONAL +
          ').',
      ],
    },
    {
      kind: 'p',
      text: 'Each shift changes what a customer receives while the platform’s reports look the same. An AI customer on every client’s list records what arrived, whether a person or an agent wrote it, and the agency’s judgement works from that record.',
    },

    { kind: 'h2', id: 'options', text: 'Retention agency options compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 24 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways a retention agency can see what each client’s customers receive. Prices from each provider’s own page, 24 October 2026. GlockApps’ free plan includes 2 test credits',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'The client finds a break first', 'Clients whose flows rarely change'],
        ['By hand: a new address, a phone and a sheet', 'Any store, with the team’s judgement', 'Your team’s hours', 'Hours grow with every client and rival', 'Up to about 5 clients'],
        [
          'Platform reports: [Klaviyo flow analytics](' + KL_FLOWS + ')',
          'What was sent, and what it earned',
          'In the client’s plan',
          'Messages that never started, and the tab',
          'Revenue reporting',
        ],
        [
          'Account audit: [Klaviyo Academy’s course](' + KL_COURSE + ')',
          'Flows, campaigns and deliverability from inside',
          'Not listed',
          'Needs a login, and reads 1 date',
          'Diagnosis and the plan',
        ],
        [
          'Inbox placement tests: [GlockApps](' + GLOCKAPPS + ')',
          'Where a test send lands across mailboxes',
          'Free\nEssential: $59 a month, billed yearly\nGrowth: $99 a month, billed yearly',
          'Test mailboxes see only test sends',
          'Deliverability before a big send',
        ],
        [
          'Rival libraries: [Panoramata](' + PANORAMATA + '), [MailCharts](' + MAILCHARTS + ')',
          'Rivals’ emails, texts, flows and ads, with history',
          'Panoramata: $99, $179 or $399 a month\nMailCharts: Not listed',
          'Panoramata Startup: 20 rivals, 6 months',
          'Rival research and creative ideas',
        ],
        [
          'AI browser agent: [ChatGPT’s cloud browser](' + CLOUD_BROWSER + ')',
          'Fills in a sign up form on request',
          'Paid ChatGPT plans',
          '1 task per request, no inbox described',
          'One off checks of a form',
        ],
        [
          'Obsession (ours): [Mystery shopper](/recipes/mystery-shopper), [Email and SMS tracking](/recipes/email-sms-tracking), [Competitor tracking](/recipes/competitor-tracking), [Prospect intelligence](/recipes/prospect-intelligence)',
          'AI customers at clients, rivals and prospects, every email and text kept',
          'Not listed\nFirst 5 stores free',
          'Stops at bot walls and CAPTCHAs',
          'Many clients, rivals and prospects',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'The options combine: the platform reports revenue, the audit finds causes, a placement test checks a big send, and AI customers record what each new customer received. [Hiring AI customers](/blog/hire-ai-customers) sets out how to brief them.',
    },

    { kind: 'h2', id: 'when-not', text: 'When an agency doesn’t need AI customers' },
    {
      kind: 'list',
      items: [
        '**A handful of clients whose flows rarely change.** At 5 clients the weekly routine takes about 4 hours, and a sheet and a new address cover it.',
        '**The question is why a flow failed.** The cause sits inside the account, where an audit finds it.',
        '**Last year’s rival emails.** An AI customer holds what arrives from the day it joins, so an earlier Black Friday needs a library that already covered the brand.',
        '**Placement across mailbox providers before a big send.** A seed test, which sends to mailboxes the vendor controls, answers it.',
        '**A client that hasn’t agreed to tests on its store.** Its rivals can be watched until it does.',
      ],
    },

    { kind: 'h2', id: 'start', text: 'Start this week' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Pick the 3 clients whose retainers come up for review next, and write a pass mark for the welcome, basket and checkout messages from each flow’s own delay.',
        'Run each journey once as a new customer, with a new address for each, and log what arrived after 48 hours.',
        'Ask each client for 3 rivals and sign up to them now, before the teasers and early access sends of early November.',
        'Add a page called “What your customers received” to the next monthly report, with every email linked as it arrived.',
        'Time the hours, multiply by the client list, and put the total into the payback sum.',
      ],
    },
    {
      kind: 'cta',
      text: 'Obsession makes the first AI customers that work for you. Name 5 stores, prospects or clients with their OK: an AI customer becomes each one’s new customer for 48 hours, covering the pop up and its code, the welcome email, texts and a basket, and your agency sees what happened within 4 days, with proof.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Check 5 stores free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI for retention agencies' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What does a retention marketing agency do?',
          a: 'It runs a brand’s email and SMS, usually on Klaviyo, Postscript or Attentive, including the flows, campaigns, segments and reporting, for a monthly retainer.',
        },
        {
          q: 'Is there an AI agent for Klaviyo?',
          a: 'Yes. Klaviyo’s AI page lists Composer, a marketing agent that builds marketing for the brand’s review, and Customer Agent, which it calls “The AI customer service agent that already knows your customers”. Both work inside the brand’s account. An AI customer works outside it, as a subscriber of the store, and records what arrived.',
        },
        {
          q: 'What should an email marketing reporting template include?',
          a: 'The platform’s revenue report with its attribution window, and a page on what customers received: each flow, its deadline, what arrived and when, a status of fired, late or did not fire, and the dates of any fix.',
        },
        {
          q: 'What AI tools can an email marketing agency use?',
          a: 'For building and sending, the platform’s own agents, such as Klaviyo’s Composer and Postscript’s Shopper, and AI assistants for drafting. For checking, AI customers, which sign up to each client store, rival and prospect and keep every email and text as it arrived.',
        },
        {
          q: 'How much does a Klaviyo agency cost?',
          a: 'Darkroom’s October 2026 guide puts retainers at $3,000 to $5,000 a month for brands at $1M to $5M in revenue, rising to $8,000 to $10,000 or more over $15M. Netalico publishes plans from $1,200 a month for 4 emails.',
        },
        {
          q: 'Does an agency need a client’s OK to test its store?',
          a: 'Yes. Get each client’s OK before checking its store, and keep the test sign ups out of its reporting. For rivals and prospects, use only the public sign up any customer can use. This is not legal advice.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'The r/agency posts are public threads, opened on 3 October 2026. CallRail’s survey covers US marketing agencies of every kind. The store, the rival, the 20 client agency and the timings in the illustrations are invented examples. This is not legal advice.',
    },
  ],

  sources: [
    { title: '2026 marketing agency playbook: data-backed AI pivots that ignite growth', publisher: 'Search Engine Journal, sponsored by CallRail', url: CALLRAIL, date: '2026-01' },
    { title: 'How much does retention marketing cost in 2026? (Email, SMS & Lifecycle Pricing)', publisher: 'Darkroom', url: DARKROOM, date: '2026-10-23' },
    { title: 'Shopify Klaviyo agency', publisher: 'Netalico', url: NETALICO },
    { title: 'Register a lead', publisher: 'Klaviyo Academy', url: KL_REFERRAL },
    { title: 'Lost our biggest client today', publisher: 'r/agency', url: R_HALF, date: '2026-06-26' },
    { title: 'When to send Black Friday emails (and texts, and other marketing messages)', publisher: 'Klaviyo (Katherine Boyarsky)', url: KL_TIMING, date: '2026-06-26' },
    { title: 'Understanding flow analytics', publisher: 'Klaviyo Help Center', url: KL_FLOWS, date: '2026-10-07' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KLAVIYO_BENCH, date: '2026' },
    { title: 'Built for agencies', publisher: 'MailCharts', url: MAILCHARTS },
    { title: 'Free email marketing audit', publisher: 'Flowium', url: FLOWIUM },
    { title: 'I kept losing clients who couldn’t see what they were paying for', publisher: 'r/agency', url: R_SEE, date: '2026-03-26' },
    { title: 'Have you ever lost a retainer client without seeing it coming?', publisher: 'r/agency', url: R_NOWHERE, date: '2026-05-28' },
    { title: 'Market research analysts: Occupational Outlook Handbook', publisher: 'US Bureau of Labor Statistics', url: BLS },
    { title: 'How to create a segment or list triggered flow', publisher: 'Klaviyo Help Center', url: KL_LISTFLOW, date: '2026-10-08' },
    { title: 'Klaviyo AI', publisher: 'Klaviyo', url: KL_AI },
    { title: 'Introducing K:AI Marketing Agent', publisher: 'Klaviyo', url: KL_AGENT, date: '2025-09-25' },
    { title: 'Make more money from every message', publisher: 'Postscript', url: POSTSCRIPT },
    { title: 'Thinking about killing our retainer model and selling a 90 day handover instead', publisher: 'r/agency', url: R_PLATFORM, date: '2026-09-09' },
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-03-09' },
    { title: 'Gmail is entering the Gemini era', publisher: 'Google', url: GMAIL_GEMINI, date: '2026-01-08' },
    { title: 'Gmail is bringing Gemini to the inbox. Here’s why retail marketers should care.', publisher: 'Klaviyo (Michael Pattison)', url: KL_GMAIL, date: '2026-01-12' },
    { title: 'Adobe: U.S. holiday shopping season to hit record $275.1 billion online, rising 6.7% YoY', publisher: 'Adobe', url: ADOBE, date: '2026-09-28' },
    { title: 'Personal agents will drive more contact center traffic than they offset', publisher: 'Salesforce', url: SF_PERSONAL, date: '2026-10-19' },
    { title: 'Audit your Klaviyo account', publisher: 'Klaviyo Academy', url: KL_COURSE },
    { title: 'Pricing', publisher: 'GlockApps', url: GLOCKAPPS },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: CLOUD_BROWSER },
  ],
  related: [
    'why-ai-customers-matter',
    'customer-side-observability',
    'ai-customers-at-scale',
    'recipe:mystery-shopper',
    'recipe:email-sms-tracking',
    'recipe:competitor-tracking',
    'recipe:prospect-intelligence',
  ],
}
