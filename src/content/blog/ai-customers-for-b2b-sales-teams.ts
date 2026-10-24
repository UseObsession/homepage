import type { BlogPost } from './types'
import { AI_CUSTOMER, CUSTOMER_SIDE_OBSERVABILITY } from '../glossary'

/* The why series, Spec G (24 Oct 2026): why B2B sales teams need AI customers. It owns "speed to lead" (primary), with
   "what is speed to lead", "speed to lead meaning", "speed to lead ai", "speed to lead ai agent", "inbound lead response
   time", "inbound lead follow up" and "lead response time" (Google autocomplete, US and UK, 24 Oct 2026, in
   why-series/autocomplete_wave_b.json and _b2.json). "speed to lead test" and "lead response time audit" are left to
   /recipes/lead-leaks, linked with "speed to lead test" as the anchor; "speed to lead statistics" is kept for a later
   grading piece, so the studies appear here only where they make a point.
   Readers: heads of RevOps, sales development and marketing operations, VPs of Sales and founders at B2B companies of
   50 to 1,000 staff that take demo requests through a form, chat or phone.
   The case: a demo request dies quietly at the form, the router, the scheduler or the inbox, each owned by someone
   different. Inside reports start when a lead has an owner (HubSpot's report starts at assignment), so the requests that
   never become a record, the minutes before an owner and whether a person replied stay out of view. AI reply agents
   and AI SDRs move the question from speed to accuracy. AI customers send the request as a buyer would, every day and
   after every change, and time each reply with the evidence.
   The sum: requests a day on a broken path x request-to-won rate x first-year contract value, halved, x days until
   found, worked once on an invented company (all its figures invented), low and high, at 3, 6 and 12 months, payback
   against a daily test by hand at the BLS median wage for management analysts (May 2025), before any price.
   Opened on 24 Oct 2026 at each source's own page: InsideSales' 2007 announcement (the 5 minute and 21 times figure),
   HBR's March 2011 article page (teaser only; cited for its authors and date, not its figures), the BYU ScholarsArchive
   record of it, the Bridge Group's 2025 SDR and 2026 AE pages, RevenueHero's study (20 Mar 2024), Clay's study (22 Sep
   2026), HubSpot's sales analytics knowledge base page (updated 18 Jun 2026), Default's HubSpot round robin guide,
   HubSpot's May 2025 Customer Agent news, Intercom's pricing guide (Fin for Sales), Salesforce's State of Sales
   announcement (3 Feb 2026), the BLS handbook, and the pricing pages of Chili Piper, LeanData, Default, Qualified,
   Flying Fish (daily form testing) and Checkly. From the verified library (facts.json): the AI Act Service Desk
   (Articles 50 and 113) and Cloudflare's verified bots docs.
   Left out on purpose: Workato's 42 hours and its under 1% in 5 minutes, HBR's figures (the article page shows only its
   opening), Ebsta and Pavilion's win rate (in a chart and a gated report only), Apollo's 47 hours (secondary only),
   cost per lead figures (secondary roundups), CallRail (its page doesn't say which price is monthly), Gartner, any
   PilotX figure, the site's 93% and 128 stores, any Obsession price, and the Lead Leaks Business Case's proposed
   prices. quillstone.example and every figure in its 2 illustrations are invented. No dashes. */

const INSIDESALES = 'https://www.insidesales.com/?p=5512'
const HBR = 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads'
const BRIDGE_SDR = 'https://www.bridgegroupinc.com/research/2025-sdr-models-metrics-report-the-bridge-group'
const BRIDGE_AE = 'https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics'
const CLAY = 'https://www.clay.com/blog/claygent-experiment-speed-to-lead'
const HUBSPOT_KB = 'https://knowledge.hubspot.com/reports/create-sales-reports-in-the-sales-analytics-suite'
const LEANDATA = 'https://www.leandata.com/pricing/'
const DEFAULT_GUIDE = 'https://www.default.com/post/hubspot-round-robin'
const REVENUEHERO = 'https://www.revenuehero.io/blog/b2b-lead-response-times'
const BLS = 'https://www.bls.gov/ooh/business-and-financial/management-analysts.htm'
const HUBSPOT_NEWS = 'https://www.hubspot.com/company-news/customer-agent-expansion'
const INTERCOM_GUIDE = 'https://www.intercom.com/learning-center/intercom-pricing'
const SF_SALES = 'https://www.salesforce.com/news/stories/state-of-sales-report-announcement-2026/'
const AI_ACT_50 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'
const AI_ACT_113 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113'
const CLOUDFLARE_BOTS = 'https://developers.cloudflare.com/bots/concepts/bot/verified-bots/'
const CHILIPIPER = 'https://www.chilipiper.com/pricing'
const DEFAULT_PRICING = 'https://www.default.com/pricing'
const QUALIFIED = 'https://www.qualified.com/pricing'
const FLYINGFISH = 'https://flyingfish.ie/daily-form-testing/'
const CHECKLY = 'https://www.checklyhq.com/pricing/'

const LEAKS = '/blog/ai-customers-find-revenue-leaks'
const COMMERCIAL = '/blog/ai-customers-for-commercial-teams'

export const post: BlogPost = {
  slug: 'ai-customers-for-b2b-sales-teams',
  title: 'Why B2B sales teams need AI customers',
  dek: 'Many demo requests get no reply from a person, and a CRM reports only on the leads it holds. What speed to lead reports miss, what a slow reply costs in a sales team’s own numbers, and how AI customers test every form, chat and sales line.',
  metaTitle: 'Speed to lead for B2B sales teams, tested with AI customers',
  description:
    'Speed to lead for B2B sales teams: what CRM reports miss, what a slow demo request costs, and how AI customers test every form, chat and sales line.',
  answer:
    'B2B sales teams need AI customers because speed to lead, the time from a buyer’s demo request to the company’s first reply, is usually measured inside the CRM from the moment a lead has an owner, so requests that never reach an owner go uncounted. AI customers fill in the team’s own demo form, use its chat and call its sales line as a buyer would, every day and after every routing change, and time each first reply with the evidence.',
  primaryKeyword: 'speed to lead',
  keywords: [
    'speed to lead',
    'what is speed to lead',
    'speed to lead meaning',
    'speed to lead ai',
    'speed to lead ai agent',
    'inbound lead response time',
    'inbound lead follow up',
    'lead response time',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-24',
  readingMinutes: 12,
  order: 18,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'runs',
      title: 'quillstone.example · 1 demo request at 21:00, 4 evenings',
      prompt: 'Demo request: 40 seats for a 300 person team in US East. What does it cost?',
      runs: [
        { label: 'Mon 21:00 · demo form', answer: 'Owner set at 21:00. A rep replied Tue 08:41 with the price.', verdict: { tone: 'ok', text: 'Owned, replied in 11 h' } },
        { label: 'Wed 21:00 · demo form', answer: 'Automatic reply only. Owner set Thu 13:05, reply Thu 14:20.', verdict: { tone: 'late', text: 'Replied in 17 h' } },
        { label: 'Fri 21:00 · demo form', answer: 'Automatic reply only. No owner in the CRM, no reply by Wednesday.', verdict: { tone: 'fail', text: 'No owner, no reply' } },
        { label: 'Fri 21:01 · site chat', answer: 'The bot offered a meeting link. Booked for Monday 10:00.', verdict: { tone: 'ok', text: 'Booked in 2 minutes' } },
        { label: 'Fri 21:03 · sales line', answer: 'Rang out. No voicemail and no callback.', verdict: { tone: 'fail', text: 'No callback' } },
        { label: 'Mon 21:00 · demo form', answer: 'Owner set at 21:00. A rep replied Tue 08:30.', verdict: { tone: 'ok', text: 'Fixed and retested' } },
      ],
      foot: 'An example on an invented company. A holiday rule added on Thursday left Friday’s form requests with no owner, and Friday’s test found it.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Heads of RevOps, sales development and marketing operations, VPs of Sales and founders at B2B companies of 50 to 1,000 staff depend on demo requests that arrive through a form, a chat or the sales line. [AI customers](/blog/ai-customers) send those requests as buyers would and time every reply from the buyer’s side. [Why every company needs AI customers](/blog/why-ai-customers-matter) sets out the case for any company. For a sales team, it rests on the requests that fail before the CRM sees them and on how long a buyer waits for a person.',
    },
    {
      kind: 'stat',
      value: '7%',
      label: 'of 6,346 demo and contact forms got a reply from a salesperson, and two thirds of companies never replied at all',
      source: 'Clay, September 2026',
      href: CLAY,
    },

    { kind: 'h2', id: 'their-world', text: 'How B2B sales teams handle inbound leads' },
    {
      kind: 'p',
      text: 'In a sales-led B2B company, a buyer who wants to talk to sales fills in a demo or contact form, opens the site chat or calls the sales line. Enrichment adds the company’s size and industry from a data provider, routing rules pick an owner by territory, segment or in turn (round robin), and a scheduler may offer a meeting on the spot. A sales development rep (SDR) replies, qualifies the buyer and books a first meeting for an account executive (AE).',
    },
    {
      kind: 'p',
      text: 'Each step has a different owner. Marketing operations runs the forms and enrichment, revenue operations (RevOps) runs routing and the CRM, the SDR manager owns response times, demand generation pays for the traffic, and the VP of Sales owns the number. The usual tools are Salesforce or HubSpot, a router and scheduler such as Chili Piper, LeanData or Default, a sequencing tool such as Outreach or Salesloft, and a chat or AI agent on the site.',
    },
    {
      kind: 'p',
      text: '[The Bridge Group’s 2025 report](' +
        BRIDGE_SDR +
        ') on 351 B2B companies puts the median monthly SDR quota at 10 meetings held and median annual SDR attrition at 40%. [Its 2026 report](' +
        BRIDGE_AE +
        ') on 158 companies puts the median AE quota at $960,000, with 48% of AEs at quota.',
    },
    {
      kind: 'stat',
      value: '60%',
      label: 'of SDRs at quota, the lowest share in the study’s history',
      source: 'The Bridge Group, SDR Models, Motions & Metrics, February 2025',
      href: BRIDGE_SDR,
    },
    {
      kind: 'p',
      text: 'One demo request is worth the team’s first-year contract value × the share of requests that become won deals. At $30,000 and 1 won deal for every 25 requests, each request carries $1,200 of expected bookings.',
    },
    {
      kind: 'p',
      text: '[A 2007 study by XANT, now InsideSales, with James Oldroyd of MIT](' +
        INSIDESALES +
        '), presented at MarketingSherpa’s B2B summit, found that contacting a lead within 5 minutes yielded 21 times more qualifications than waiting 30 minutes. Harvard Business Review published [a separate study by Oldroyd and colleagues](' +
        HBR +
        ') in March 2011.',
    },

    { kind: 'h2', id: 'blind-spots', text: 'What speed to lead reports can’t see' },
    {
      kind: 'p',
      text: 'Inside reports start once a lead exists. HubSpot’s [lead response time report](' +
        HUBSPOT_KB +
        ') measures the time from a contact being assigned to a user to that user’s first interaction, such as an email, call or chat, and resets when the contact is reassigned. Routers log each assignment, and [LeanData’s advanced edition](' +
        LEANDATA +
        ') adds SLA tracking, escalations and dashboards. From the buyer’s side, the same request has 5 blind spots.',
    },
    {
      kind: 'list',
      items: [
        '**Requests that never become a lead.** A form that fails to submit, enrichment that drops an unknown company, a chat that closes without creating a record and a voicemail nobody logs leave nothing in the CRM to report on.',
        '**The minutes before an owner.** Default, which sells routing, warns in [its 2026 guide to HubSpot round robin](' +
          DEFAULT_GUIDE +
          ') that without fallback rules leads can be skipped, overwritten or left unassigned, and that the rotation ignores time off unless someone blocks it by hand.',
        '**Whether a person replied.** In [RevenueHero’s test of 1,000 B2B SaaS companies](' +
          REVENUEHERO +
          '), a study published in March 2024, 60% of the companies that replied sent an automated first response, and replies written by a person took 2 days, 3 hours and 11 minutes on average. A report that counts any email sent can count an automatic one as the first touch.',
        '**Evenings, weekends and reps who have left.** A request at 21:00 on a Friday meets out of hours rules, holiday calendars and territory maps that nobody tests at that hour. With SDR attrition at 40% a year, rules can still point at people who have gone.',
        '**The phone and the follow up.** In [Clay’s test of 6,346 demo and contact forms](' +
          CLAY +
          '), published in September 2026, 96% of companies never called, and the calls that came arrived 34.5 hours after the form on average. RevenueHero received 2 follow ups on average.',
      ],
    },
    {
      kind: 'quote',
      text: '…small misconfigurations can quietly create routing gaps and delayed follow-up.',
      cite: 'Default’s 2026 guide to HubSpot round robin, by Stan Rymkiewicz',
      href: DEFAULT_GUIDE,
    },
    {
      kind: 'p',
      text: 'Both studies state their limits. RevenueHero found that 30.86% of the companies that never replied used an enrichment tool, so some may have screened its test lead out, and Clay sent the same made-up buyer, the founder of an AI startup, to every company, so some non-replies may have been correct decisions that he wasn’t a fit. Each is an average across many companies on one date.',
    },

    { kind: 'h2', id: 'cost', text: 'What a slow demo request costs' },
    {
      kind: 'p',
      text: 'A break in one path costs the expected bookings of every request it touches until someone finds it. The sum uses the team’s own numbers.',
    },
    {
      kind: 'list',
      items: [
        '**Bookings at risk a day:** demo requests a day on the broken path × the share of requests that become won deals × the first-year contract value, halved for a cautious figure, since some buyers write again, call or wait.',
        '**Days until found:** on average half the gap between checks, so about 15 days with a monthly check, 3.5 with a weekly test and half a day with a daily one ([how AI customers find revenue leaks](' +
          LEAKS +
          ') explains the rule).',
        '**Cost of the break:** bookings at risk a day × days until found.',
      ],
    },
    {
      kind: 'art',
      caption: 'The sum worked once with invented figures for an invented company, low case. Put the team’s own numbers in each row.',
      art: {
        kind: 'price',
        title: 'quillstone.example · out of hours requests with no owner',
        rows: [
          { label: 'Demo requests a day out of hours', value: '3', note: 'From the form tool' },
          { label: 'Requests that become won deals', value: '4%', note: 'From the CRM, last 12 months' },
          { label: 'First-year contract value', value: '$30,000', note: 'From the CRM' },
          { label: 'Bookings at risk a day', value: '$1,800', note: '3 × 4% × $30,000, halved' },
          { label: 'Days until found', value: '× 15', note: 'The average wait with a monthly check' },
        ],
        total: { label: 'Expected bookings lost', value: '$27,000', note: '$6,300 with a weekly test, $900 with a daily one' },
      },
    },
    {
      kind: 'p',
      text: 'In the high case, 6 out of hours requests a day, 5% won and $40,000 contracts put $6,000 a day at risk. That is $90,000 for a break found by a monthly check and $3,000 for one found by a daily test.',
    },
    {
      kind: 'p',
      text: 'Over a year, the number of breaks sets the total, so count last quarter’s routing, CRM, form and site changes that stopped a path working. With 1 break a quarter in the low case and 2 in the high case, finding each with a daily test instead of a monthly check is worth these sums in expected first-year bookings.',
    },
    {
      kind: 'list',
      items: [
        '**By month 3:** $26,100 to $174,000.',
        '**By month 6:** $52,200 to $348,000.',
        '**By month 12:** $104,400 to $696,000.',
      ],
    },
    {
      kind: 'p',
      text: 'Set that payback against what the test costs. By hand, a daily test of 4 ways in takes about 6 hours a week, or about $15,300 a year at the [US median wage for management analysts](' +
        BLS +
        '), $48.97 an hour in May 2025, which the low case covers with the first break it finds. [What AI customers cost to run](/blog/ai-customers-at-scale) is worked out line by line from published prices.',
    },

    { kind: 'h2', id: 'workload', text: 'Testing inbound lead response time by hand' },
    {
      kind: 'p',
      text: 'A test by hand takes ways in × tests a week × minutes. A team with a demo form, a contact form, a site chat and a sales line, each tested once every weekday, one of those in the evening, and once at the weekend, runs 24 tests a week. At about 15 minutes each, to set up a new identity, send the request or make the call, watch the inbox and phone for the next few days and look the lead up in the CRM, that is 6 hours a week. A second region or language doubles it.',
    },
    {
      kind: 'p',
      text: 'As the team grows, the test drifts from what a buyer meets. SDRs recognise a colleague’s name and may reply faster. A repeat address merges into the existing contact and routes differently from a new buyer. Evening and weekend tests need someone at a desk at 21:00 on a Friday, and notes in a spreadsheet are hard to put in front of a router’s vendor as evidence.',
    },
    {
      kind: 'p',
      text: `Run as a routine, this work is [customer-side observability](/blog/customer-side-observability). ${CUSTOMER_SIDE_OBSERVABILITY.definition} For a sales team it has 3 parts, written before the first test.`,
    },
    {
      kind: 'list',
      items: [
        '**Pass marks.** For each way in, an owner in the CRM within 5 minutes, a first reply from a person within the team’s own target, and the buyer’s question answered. Out of hours, a reply by 09:30 the next working day.',
        '**A cadence.** Every way in each weekday at set times, one evening and one weekend test a week, a monthly request from a company enrichment can’t match, and a retest within the hour of every routing, CRM, form or site change.',
        '**An owner for each fail.** No record goes to marketing operations, no owner to RevOps, a slow or missing reply to the SDR manager, a missed call to whoever runs the phone system, and a wrong answer from an AI agent to that agent’s owner.',
      ],
    },

    { kind: 'h2', id: 'jobs', text: 'What AI customers do for B2B sales teams' },
    { kind: 'p', text: `**${AI_CUSTOMER.definition}**` },
    {
      kind: 'p',
      text: 'A sales team uses AI customers as buyers of its own company. Each has its own inbox and phone number, fills in the demo form, opens the chat or calls the sales line, says it is an AI to anyone who talks to it, and keeps every reply with its time and channel. An AI SDR, an AI agent that answers and writes to buyers, works for the company, while an AI customer works for RevOps as one of those buyers, as [AI customer service agents vs AI customers](/blog/ai-customer-service-agent-vs-ai-customer) sets out.',
    },
    {
      kind: 'table',
      caption: '6 jobs for AI customers in a B2B sales team, each with its check, its pass mark and what the team does with the result that week',
      cols: ['Job', 'The check', 'A pass', 'That week'],
      rows: [
        [
          'Every way in: [Lead leaks](/recipes/lead-leaks)',
          'Form, chat and sales line at set times each weekday',
          'A person replies within target, with an owner in the CRM',
          'Each fail goes to its owner with the evidence',
        ],
        [
          'Evenings and weekends: [Lead leaks](/recipes/lead-leaks)',
          'A request at 21:00 on Friday and on Sunday',
          'An owner set and a reply by 09:30 the next working day',
          'Out of hours rule or holiday calendar fixed',
        ],
        [
          'After every change: [Lead leaks](/recipes/lead-leaks)',
          'The same paths after every routing change',
          'Every path that passed before still passes',
          'The change fixed or rolled back that day',
        ],
        [
          'The AI agent’s answers: [Sales agent check](/recipes/sales-agent-check)',
          'Price and offer questions to the AI agent in chat each morning',
          'Each answer matches the price list',
          'The agent’s source content corrected',
        ],
        [
          'What the AI SDR sends: [Outbound agent check](/recipes/outbound-agent-check)',
          'Test prospects on its lists receive every email, text and call',
          'Claims, discounts and send times within the team’s rules',
          'The sequence corrected or paused',
        ],
        [
          'Accounts after the sale: [Account watch](/recipes/account-watch)',
          'A customer of each account, with the CRM and tickets read with consent',
          'Every churn signal has a play',
          'The account manager runs the drafted play',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Obsession’s Lead leaks sends a test lead through a company’s own form, chat and phone, times every first reply and shows each lead the team never answered. The [speed to lead test](/recipes/lead-leaks) runs at the times the team picks, evenings and weekends included, and drafts the routing fix in the CRM the team connects, live after the team’s OK. The prospect side of a sales team’s week is covered in [AI for sales teams](' +
        COMMERCIAL +
        '#sales).',
    },

    { kind: 'h2', id: 'next', text: 'Speed to lead AI and what changes in 2026 and 2027' },
    {
      kind: 'list',
      items: [
        '**Live: AI agents give the first reply.** HubSpot said in May 2025 that in sales its customer agent [responds instantly to pricing and trial questions](' +
          HUBSPOT_NEWS +
          '), and [Intercom’s pricing guide](' +
          INTERCOM_GUIDE +
          ') lists Fin for Sales at $9.99 for each prospect it qualifies and routes to the sales team. In Clay’s test, 64% of replies were automated, which makes the accuracy of each answer and the handoff to a person the next things to test.',
        '**Live and forecast: sellers adopt agents.** In [Salesforce’s survey of 4,050 sales professionals](' +
          SF_SALES +
          '), published in February 2026, 54% of sellers said they had used agents, and nearly 9 in 10 planned to by 2027.',
        '**Live: the AI notice is law in the EU.** [Article 50 of the EU AI Act](' +
          AI_ACT_50 +
          ') requires AI systems that talk to people to be designed so those people are told they are dealing with an AI, unless it is obvious, and the Act [applies from 2 August 2026](' +
          AI_ACT_113 +
          ').',
        '**Live: buyers send agents too.** Clay’s 6,346 forms were filled in by agents run from a Clay table, with a browser agent built by Subconscious, and [Cloudflare’s bot documentation](' +
          CLOUDFLARE_BOTS +
          '), updated 8 October 2026, lists agents directed by users and visiting pages on a person’s behalf as their own category. A demo form now meets agents as well as people.',
      ],
    },
    {
      kind: 'p',
      text: 'Each change raises the value of a fixed set of test leads sent the same way every day. Their replies form a dated baseline of what each AI agent update, routing change or new hire did to the first reply a buyer gets.',
    },

    { kind: 'h2', id: 'options', text: 'Speed to lead tools compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 24 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to measure and protect speed to lead. Prices from each provider’s own pages, 24 October 2026. Flying Fish’s test is an add-on to its website care plans',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'A broken path shows up as a weak quarter', 'A founder who answers every request'],
        [
          'By hand: a fresh address, a phone and a sheet',
          'A person’s judgement on any channel',
          'Staff hours\nUS median for management analysts: $48.97 an hour',
          'The team knows the tester, and hours grow with every path',
          'A spot check after a change',
        ],
        [
          'Published studies: [RevenueHero](' + REVENUEHERO + '), [Clay](' + CLAY + ')',
          'Benchmarks from 1,000 to 6,346 test requests',
          'Free to read',
          'An average across companies on one date',
          'Setting a target',
        ],
        [
          'CRM reports: [HubSpot lead response time](' + HUBSPOT_KB + ')',
          'Times every assigned lead to its owner’s first touch',
          'In Sales Hub from Starter',
          'Starts at assignment, so leads with no record or owner are missing',
          'Coaching reps on response time',
        ],
        [
          'Routers and schedulers: [Chili Piper](' + CHILIPIPER + '), [LeanData](' + LEANDATA + '), [Default](' + DEFAULT_PRICING + ')',
          'Assigns each lead and offers a meeting from the form',
          'Chili Piper: from $15,000 a year with 15 seats\nLeanData: not listed\nDefault: $12,000 a year plus $540 per user a year',
          'Logs what the system did once a lead reaches it',
          'Routing at volume across territories',
        ],
        [
          'AI inbound agents: [Qualified](' + QUALIFIED + '), [Intercom Fin for Sales](' + INTERCOM_GUIDE + ')',
          'Answers and qualifies buyers in real time on the site',
          'Qualified: contact us\nFin for Sales: $9.99 per qualified lead',
          'The person after the handoff',
          'Instant first replies on the site',
        ],
        [
          'Form monitors: [Flying Fish](' + FLYINGFISH + '), [Checkly](' + CHECKLY + ')',
          'Submits a form on a schedule and alerts when it fails',
          'Flying Fish: €10 a month plus €50 setup\nCheckly: $24 or $64 a month, billed annually',
          'Confirms the form and its alert, before any reply',
          'Forms that break outright',
        ],
        [
          'Obsession (ours): [Lead leaks](/recipes/lead-leaks), [Sales agent check](/recipes/sales-agent-check), [Outbound agent check](/recipes/outbound-agent-check), [Account watch](/recipes/account-watch)',
          'Test leads use the form, chat and phone at set times and time every first reply',
          'Not listed\nJoin the waitlist',
          'Real leads’ outcomes sit in the CRM the team connects',
          'Several ways in, regions and routing changes',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Many teams combine 2 of these. A router and a CRM report time every lead the system holds, and a customer-side test times the path around them, from the buyer pressing send to the first reply.',
    },

    { kind: 'h2', id: 'when-not', text: 'When a sales team doesn’t need AI customers' },
    {
      kind: 'list',
      items: [
        '**No sales team between the buyer and the product.** A self-serve product with no demo request has no reply to time.',
        '**Low volume answered by a founder.** Where one person reads every request the same day, problems show in the reading.',
        '**One path and rare changes.** A person sending a test request from a new address once a month covers a single form that nobody edits.',
        '**Coaching reps on time to first touch.** A CRM report such as HubSpot’s times every assigned lead for each rep.',
      ],
    },

    { kind: 'h2', id: 'start', text: 'Start this week' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**List every way in** with its staffed hours: each demo and contact form, the chat, the sales line and the published sales address, and who owns each step behind it.',
        '**Write the pass marks:** an owner in the CRM within 5 minutes, a first reply from a person within the team’s target, and the buyer’s question answered.',
        '**Send 1 tagged test request through each path** at 21:00 on a weekday and on Saturday, from a new address with a real question, and keep every reply with its time.',
        '**Compare what the CRM logged with what the inbox and phone received,** including requests that never appeared in the CRM.',
        '**Fill in the cost sum** with last quarter’s figures to set how often to test, and write the brief as [hiring AI customers](/blog/hire-ai-customers) sets out.',
      ],
    },
    {
      kind: 'cta',
      text: 'Obsession makes the first AI customers that work for you. Join the waitlist, and Lead leaks comes ready to run on your team’s own form, chat and phone, timing every first reply and showing each lead your team never answered.',
      to: '/recipes/lead-leaks',
      label: 'Join the waitlist',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about speed to lead' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is speed to lead?',
          a: 'Speed to lead is the time from a buyer’s enquiry, such as a demo request, to the company’s first reply on any channel. It means how long a buyer who asked to talk to sales waits to hear back.',
        },
        {
          q: 'What is a good inbound lead response time?',
          a: 'A reply from a person within minutes in working hours. The 2007 study by XANT, now InsideSales, found 21 times more qualifications within 5 minutes than at 30, and in Clay’s 2026 test only 5% of replies arrived within 5 minutes.',
        },
        {
          q: 'How do you measure lead response time?',
          a: 'Time each request from the moment the form is sent to the first reply on any channel, and log automatic replies separately. CRM reports such as HubSpot’s start the clock when the lead is assigned, so the minutes before that need a test from the buyer’s side.',
        },
        {
          q: 'What is a speed to lead AI agent?',
          a: 'An AI agent that answers new leads within seconds on chat or email, qualifies them and routes them to sales or books a meeting, such as Qualified’s Piper or Intercom’s Fin for Sales. It works for the company, and an AI customer tests it as a buyer.',
        },
        {
          q: 'What is inbound lead follow up?',
          a: 'Inbound lead follow up is every contact after the first reply until the buyer books a meeting or says no. In RevenueHero’s 2024 test, the companies that replied sent 2 follow ups on average.',
        },
        {
          q: 'Do test leads distort a sales team’s numbers?',
          a: 'Not when the team marks them. A hidden form field or a dedicated test address lets the CRM keep test leads out of attribution and quota. Whether a test lead also says it is a test is the team’s setting, and it says it is an AI to any rep who talks to it.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'The company and every figure in its examples are invented, except the BLS wage in the cost of testing by hand. Prices are as each provider listed them on 24 October 2026. This is not legal advice.',
    },
  ],

  sources: [
    { title: 'We asked 6,346 companies for a demo. Most never wrote back.', publisher: 'Clay', url: CLAY, date: '2026-09-22' },
    { title: 'SDR Models, Motions & Metrics: 2025 Research Report', publisher: 'The Bridge Group', url: BRIDGE_SDR, date: '2025-02-06' },
    { title: 'AE Models, Motions & Metrics: 2026 Research Report', publisher: 'The Bridge Group', url: BRIDGE_AE, date: '2026-06-22' },
    { title: 'XANT Research Stuns 2007 Marketing Sherpa B2B Summit', publisher: 'InsideSales', url: INSIDESALES, date: '2007-10' },
    { title: 'The Short Life of Online Sales Leads', publisher: 'Harvard Business Review', url: HBR, date: '2011-03' },
    { title: 'Create sales reports in the sales analytics suite', publisher: 'HubSpot Knowledge Base', url: HUBSPOT_KB, date: '2026-06-18' },
    { title: 'Pricing', publisher: 'LeanData', url: LEANDATA },
    { title: 'HubSpot Round Robin: Setup, Types and Limitations (2026 guide)', publisher: 'Default', url: DEFAULT_GUIDE, date: '2026' },
    { title: 'We Tested Lead Response Times Of 1000 B2B Sales Teams. Here Are The Results.', publisher: 'RevenueHero', url: REVENUEHERO, date: '2024-03-20' },
    { title: 'Management analysts: Occupational Outlook Handbook', publisher: 'US Bureau of Labor Statistics', url: BLS },
    { title: 'HubSpot expands Breeze Customer Agent to offer AI support for the entire buyer journey', publisher: 'HubSpot', url: HUBSPOT_NEWS, date: '2025-05-08' },
    { title: 'Intercom Pricing: Plans, Features and Costs (2026)', publisher: 'Intercom', url: INTERCOM_GUIDE, date: '2026' },
    { title: 'The Productivity Gap: New Survey Shows 9 in 10 Sellers Are Betting on AI and Agents To Help', publisher: 'Salesforce', url: SF_SALES, date: '2026-02-03' },
    { title: 'Article 50: transparency obligations', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_50 },
    { title: 'Article 113: entry into force and application', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_113 },
    { title: 'Verified bots', publisher: 'Cloudflare Docs', url: CLOUDFLARE_BOTS, date: '2026-10-08' },
    { title: 'Pricing', publisher: 'Chili Piper', url: CHILIPIPER },
    { title: 'Pricing', publisher: 'Default', url: DEFAULT_PRICING },
    { title: 'Pricing', publisher: 'Qualified', url: QUALIFIED },
    { title: 'Daily Form Testing', publisher: 'Flying Fish Web Design', url: FLYINGFISH },
    { title: 'Pricing', publisher: 'Checkly', url: CHECKLY },
  ],
  related: [
    'ai-customers-for-commercial-teams',
    'customer-side-observability',
    'why-ai-customers-matter',
    'recipe:lead-leaks',
    'recipe:sales-agent-check',
    'recipe:outbound-agent-check',
    'recipe:account-watch',
  ],
}
