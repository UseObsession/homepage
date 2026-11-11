import type { BlogPost } from './types'

/* Revenue teams series, guide 8 (_research/seo/revenue-teams-11nov/WRITER_BRIEF.md and PLAN.md, 11 Nov 2026). It owns
   "win loss analysis" and win loss analysis template, win loss analysis example and why deals are lost to competitors
   (docs/SEARCH.md §2), with competitive win rate beside them (Google autocomplete, US and UK, 11 Nov: demand.json).
   Reader: sales leaders (CRO, VP or head of sales) at B2B software companies; persona key sales_leader.
   The case: page 1 runs on buyer interviews and CRM loss reasons. Credit both, and Klue, Clozd and Crayon, from their
   own pages. Then add what interviews miss: what the competitor showed the buyer during the trial (emails, limits,
   upgrade prompts, the discount when the buyer went quiet, the save offer), dated. The template, the process, the
   cadence, a worked example for 3 kinds of vendor, the cost by hand and where it stops (a trial started after a loss
   shows this month's offer).
   Read at the source on 11 Nov 2026: Clozd's "5 lies your CRM is telling you" (the 1,000-deal comparison; undated on
   the page), Clozd's win-loss guide (updated Aug 2026) and software page; Klue's home page, pricing page and its
   win-loss guide (20 Nov 2024); HubSpot's default deal properties and pipeline pages (both 29 Sep 2026); Crayon's home
   and pricing pages; Salesforce's main services agreement (the PDF, last updated 15 Oct 2026); Exa's home page.
   Left out on purpose: Klue's guide's Anova and Salesforce figures (second hand on Klue's page, not read at their
   source), Gartner (walled), Primary Intelligence (its domain served a placeholder page on 11 Nov). Obsession is
   described in the words of /sales, the trial teardown and competitor tracking recipes, the software trials use case,
   /compare/obsession-vs-exa and site.ts. Corvane, Pellow and Veridyn are invented, at .example addresses, as are every
   offer, deal and figure in the pictures and the examples. No dashes. Trial terms: general information, never legal
   advice. */

const CLOZD_CRM = 'https://www.clozd.com/blog/5-lies-your-crm-is-telling-you-about-your-buyers'
const CLOZD_GUIDE = 'https://www.clozd.com/guides/win-loss-analysis'
const CLOZD = 'https://www.clozd.com/solutions/win-loss-analysis-software'
const KLUE = 'https://klue.com/'
const KLUE_GUIDE = 'https://klue.com/blog/win-loss-analysis-guide'
const KLUE_PRICING = 'https://klue.com/pricing'
const HUBSPOT_PROPS = 'https://knowledge.hubspot.com/properties/hubspots-default-deal-properties'
const HUBSPOT_PIPELINES = 'https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines'
const CRAYON = 'https://www.crayon.co/'
const CRAYON_PRICING = 'https://www.crayon.co/pricing'
const SALESFORCE = 'https://www.salesforce.com/company/msa.jsp'
const EXA = 'https://exa.ai/'

export const post: BlogPost = {
  slug: 'win-loss-analysis',
  title: 'Win loss analysis for sales leaders: add what the competitor sent the buyer',
  dek: 'The template, the interviews and the cadence sales leaders run, plus the evidence buyer interviews miss: what the competitor showed the buyer during its trial, each email and offer dated.',
  metaTitle: 'Win loss analysis for sales leaders: template and examples',
  description:
    'Win loss analysis for sales leaders: the template, process and cadence, plus what each competitor sent the buyer during its trial, every offer dated.',
  answer:
    'Win loss analysis finds out why a sales team wins and loses deals by comparing the loss reasons reps log in the CRM with what buyers say in interviews after they decide. Both record what people remember and believe, while the emails, discounts and save offers a competitor sent the buyer during its trial sit in that trial’s inbox, dated. Obsession keeps what each competitor shows only to its customers, from trial emails to save offers, dated with a screenshot and looked up by API, MCP (the standard way AI agents call tools) or a table.',
  primaryKeyword: 'win loss analysis',
  keywords: [
    'win loss analysis template',
    'win loss analysis example',
    'why deals are lost to competitors',
    'competitive win rate',
    'win loss analysis software',
    'win loss analysis sales',
  ],
  category: 'Watch other companies',
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 15,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'corvane.example · a 14-day trial',
      who: 'A new trial user in the US, the help desk plan, from 12 October',
      rows: [
        { time: 'Day 0, 09:02', text: 'Welcome email: a 6-step setup list', detail: 'Arrived 2 minutes after sign-up', tone: 'ok' },
        { time: 'Day 3, 09:00', text: 'Email: 3 customers who switched', detail: 'Each moved from another help desk', tone: 'info' },
        { time: 'Day 7, 11:40', text: 'Prompt: 500 AI replies used', detail: 'Upgrade to keep AI replies on', tone: 'info' },
        { time: 'Day 9', text: 'No sign-in for 2 days', detail: 'The trial user goes quiet', tone: 'info' },
        { time: 'Day 10, 08:15', text: 'Email: 40% off year 1 by Friday', detail: 'On no pricing page', tone: 'info' },
        { time: 'Day 14, 16:30', text: 'Cancel flow: 3 months at half price', detail: 'Shown before the trial closed', tone: 'info' },
      ],
      foot: 'Invented company and offers. The buyer later said “better value”; rows 5 and 6 show which price they meant.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Win loss analysis is how a sales team finds out why it wins and loses deals. It compares the reason a rep logs in the CRM with what the buyer says when someone outside the deal interviews them. Sales leaders use it to change pricing, positioning, battlecards and coaching against each named competitor.',
    },
    {
      kind: 'p',
      text: 'Interviews and CRM fields record what people remember and believe. A third source records what the competitor showed the buyer during the evaluation. That means its trial emails, the discount it sent when the buyer went quiet and the offer it made as the trial ended, each with its date. That evidence sits in the buyer’s trial inbox, and a team can collect it for itself.',
    },
    {
      kind: 'p',
      text: 'The number it moves is win rate against each competitor. On $500m of competitive pipeline decided in a year, each point of win rate is worth $5m in bookings. On $50m it is worth $500,000, and on $5m it is worth $50,000 (example pipeline values).',
    },

    { kind: 'h2', id: 'today', text: 'How win loss analysis works today' },
    {
      kind: 'p',
      text: 'Clozd, which runs win-loss interviews for software companies, defines win-loss analysis as “the process of capturing and analyzing feedback directly from your buyers” ([its guide](' +
        CLOZD_GUIDE +
        '), updated August 2026). In practice a programme draws on 4 sources, and each is good at its own part of the job.',
    },
    { kind: 'h3', id: 'crm', text: 'CRM loss reasons' },
    {
      kind: 'p',
      text: 'When a deal closes, the rep picks a reason. HubSpot lists Closed lost reason among [its default deal properties](' +
        HUBSPOT_PROPS +
        '). [Its pipeline settings](' +
        HUBSPOT_PIPELINES +
        ') let an admin make a property required when a deal moves to a stage, so a rep can’t close a lost deal without a reason. The field is fast, complete and easy to report on.',
    },
    {
      kind: 'p',
      text: 'It is also the rep’s view. When Clozd [compared the CRM data from 1,000 deals](' +
        CLOZD_CRM +
        ') with what buyers said in its interviews, the closed lost reasons matched the buyers’ accounts 15% of the time. Of the reasons, 44% were outcomes with no reason behind them, such as “Lost to Competitor”. The competitor tagged in the CRM was wrong in nearly 70% of deals.',
    },
    {
      kind: 'stat',
      value: '15%',
      label: 'of closed lost reasons in the CRM matched what the buyer said in an interview, across 1,000 deals',
      source: 'Clozd',
      href: CLOZD_CRM,
    },
    { kind: 'h3', id: 'interviews', text: 'Buyer interviews' },
    {
      kind: 'p',
      text: 'An interview asks the buyer, after the decision, what they weighed and why. Clozd’s guide describes live interviews of about 25 to 30 minutes. It says programmes reach saturation at around 25 to 30 interviews per segment, with participation of 15% to 30% for interviews against 3% to 5% for surveys. It gives the reason a person outside the deal asks: “Reps will seldom get true, honest responses as to why a deal was lost.” In [Klue’s guide](' +
        KLUE_GUIDE +
        ') (20 November 2024), the advice is to contact buyers within 90 days of the decision, schedule 30 minutes, and compare cohorts of at least 10 similar deals.',
    },
    {
      kind: 'p',
      text: 'Interviews find what no CRM field can. A buyer usually weighs several factors behind a decision, each with its context, against the single reason a rep picks from a list.',
    },
    { kind: 'h3', id: 'platforms', text: 'Win loss analysis software' },
    {
      kind: 'list',
      items: [
        '**[Klue](' +
          KLUE +
          ')** runs [competitive intelligence](/glossary/competitive-intelligence) and win-loss in one product, and calls itself “The AI platform for Competitive Intelligence & Win-Loss”. Its win-loss suite includes human expert interviews run by its analysts and an AI Interviewer for short voice conversations with buyers and sellers. Blindspots interviews reach buyers from evaluations a company was never part of, and win and loss stories are built from CRM data and call recordings. It says 250,000+ users rely on Klue.',
        '**[Clozd](' +
          CLOZD +
          ')** runs the programme for its clients, from outreach, scheduling and incentives to live and AI interviews. Each interview is recorded and transcribed, with themes and quotes tagged. It reports that nearly 70% of buyers name a different primary competitor from the one in the CRM.',
        '**[Crayon](' +
          CRAYON +
          ')** monitors competitors, puts battlecards in Salesforce, Slack and Highspot, and offers win/loss analysis that shows which competitors give a sales team the most trouble.',
      ],
    },
    { kind: 'h3', id: 'calls', text: 'Call recordings' },
    {
      kind: 'p',
      text: 'Recorded calls show what reps and buyers said while the deal was live, and Klue builds its win and loss stories partly from them. Clozd’s software page makes the limit plain: a recording shows what a rep said, and the buyer’s private reasoning happens elsewhere.',
    },

    { kind: 'h2', id: 'why-deals-are-lost', text: 'Why deals are lost to competitors, and what interviews miss' },
    {
      kind: 'p',
      text: 'Buyers lose interest, run out of budget, pick a product with a feature they need or choose a cheaper offer. When price is one of the reasons, the interview records “price” or “better value”. It rarely records which price: the one on the competitor’s pricing page, or the discount the competitor emailed on day 10 of the buyer’s trial, after the buyer stopped signing in.',
    },
    {
      kind: 'p',
      text: 'That second price goes to one inbox. The rep never sees it, and the competitor’s pricing page never shows it. By an interview up to 90 days later, the buyer may remember the offer without its terms, its date or its deadline. Klue’s and Clozd’s pages describe interviews, CRM data and call recordings. As of 11 November 2026, they don’t describe signing up to a competitor’s product or keeping what it sends a buyer during a trial.',
    },
    { kind: 'h3', id: 'during-trial', text: 'What a competitor shows a buyer during a trial' },
    {
      kind: 'list',
      items: [
        '**Onboarding emails,** by trial day: the welcome, the setup steps, the customer stories, the reminders before the end.',
        '**[Trial limits](/glossary/trial-limit)** and the moment an **[upgrade prompt](/glossary/upgrade-prompt)** appears, such as a cap on seats, AI replies or messages sent.',
        '**The discount when the buyer goes quiet,** with its size, its deadline and the trial day it arrived.',
        '**The [save offer](/glossary/save-offer)** in the cancel flow: a discount, a longer trial or a cheaper plan shown to a trial user who starts to leave.',
        '**The signed-in price** beside the public one, and any rep emails or calls that follow.',
      ],
    },
    {
      kind: 'p',
      text: 'Each item is a fact with a date and a screenshot or the email itself. Beside an interview, it turns “better value” into a specific offer: 40% off the first year, sent on day 10, ending that Friday. A sales leader can answer that with a pricing decision.',
    },

    { kind: 'h2', id: 'template', text: 'Win loss analysis template' },
    {
      kind: 'p',
      text: 'The template keeps 1 row per decided deal. The first 5 sections come from the CRM and the interview. The next 4 come from the competitor’s trial, as a new user met it while the buyer was deciding, and the last 2 turn the row into action.',
    },
    {
      kind: 'table',
      caption: 'A win loss analysis template: 1 row per decided deal, wins included',
      cols: ['Section', 'What to record', 'Where it comes from'],
      rows: [
        ['Deal facts', 'Segment, deal size, stage reached, days open', 'CRM'],
        ['Outcome', 'Won, lost or no decision, and to whom', 'CRM, checked in the interview'],
        ['Rep’s reason', 'The closed lost reason and the rep’s notes', 'CRM, at close'],
        ['Buyer’s decision drivers', 'Every reason in the buyer’s words, with quotes', 'Interview, within 90 days'],
        ['Competitors evaluated', 'Every vendor the buyer considered', 'Interview'],
        ['Competitor’s trial', 'Onboarding emails, limits, upgrade prompts, by trial day', 'A trial at the competitor, kept by day'],
        ['Competitor’s offer', 'Discount, trial day sent, deadline, price after it', 'The email or screen, dated'],
        ['Save offer', 'What it offered a trial user who started to leave', 'The cancel flow, screenshotted'],
        ['Price compared', 'List price beside the price offered', 'Pricing page and the offer email'],
        ['Theme codes', 'Product, price, process, people, competitor move', 'The analyst'],
        ['Action and owner', 'Battlecard change, pricing note, product ticket', 'Sales leader, enablement, product'],
      ],
    },
    {
      kind: 'p',
      text: 'Fill the competitor sections from the weeks the buyer was deciding, between the first meeting and the close date. Link every entry to its screenshot or email, so a pricing committee or a product lead can see the offer itself. Our guide to the [battlecard template](/blog/battlecard-template) uses the same evidence to keep each [battlecard](/glossary/battlecard) current.',
    },

    { kind: 'h2', id: 'example', text: 'Win loss analysis example, for 3 kinds of vendor' },
    {
      kind: 'p',
      text: 'The examples follow vendors whose product touches what their own customers’ customers see. Every company, offer and figure is invented.',
    },
    { kind: 'h3', id: 'help-desk', text: 'A help desk and AI support vendor' },
    {
      kind: 'p',
      text: 'A 120-seat deal is lost to corvane.example. The rep logs “Pricing”. The buyer says Corvane was “better value”. Corvane’s trial, kept by day, shows an upgrade prompt on day 7, once the trial had used 500 AI replies. On day 10, after 2 days with no sign-in, an email offered 40% off the first year, and on day 14 the cancel flow offered 3 months at half price. The action: enablement adds the day 10 offer to the Corvane battlecard, and reps ask buyers in week 2 whether Corvane has sent a discount yet.',
    },
    { kind: 'h3', id: 'email-sms', text: 'An email and SMS provider' },
    {
      kind: 'p',
      text: 'A retailer moves to pellow.example. The rep logs “Lost to competitor”, an outcome with no reason. The buyer says Pellow was “easier to switch to”. Pellow’s trial shows a day 1 email offering to move the buyer’s flows and templates for free, with 2 months free during the move, and neither appears on its public pages. The action: the sales leader prices a migration package and the business case leads with it in deals where Pellow appears. Our guide to the [sales business case template](/blog/sales-business-case-template) shows where that page sits.',
    },
    { kind: 'h3', id: 'identity', text: 'An identity verification vendor' },
    {
      kind: 'p',
      text: 'A fintech chooses veridyn.example. The rep logs “No decision”, though the buyer signed with Veridyn the next month. The buyer says Veridyn was “faster to get live”. Veridyn’s sandbox sends test keys in the welcome email 2 minutes after sign-up and books a setup call for day 1. The action: product shortens the path to a first test call, and the competitive win rate against Veridyn becomes the measure for next quarter.',
    },
    {
      kind: 'art',
      caption: 'Lost deals beside what each competitor sent new trial users in the same weeks. The deals, companies and offers are invented.',
      art: {
        kind: 'report',
        title: 'Q3 losses, beside the competitor’s trial',
        period: 'Example: 3 deals lost to 3 invented competitors',
        cols: ['Deal', 'CRM reason', 'Buyer said', 'Competitor sent'],
        rows: [
          { name: 'Help desk, 120 seats', cells: ['Pricing', '“Better value”', '40% off, trial day 10'], tone: 'fail' },
          { name: 'Email and SMS, retailer', cells: ['Lost to competitor', '“Easier to switch”', 'Free migration, day 1'], tone: 'fail' },
          { name: 'Identity, fintech', cells: ['No decision', '“Faster to get live”', 'Test keys in 2 minutes'], tone: 'fail' },
        ],
        notes: ['Each cell in the last column links to its email or screenshot.', 'Every company, deal and offer is invented.'],
      },
    },

    { kind: 'h2', id: 'how-to-run', text: 'How to run a win loss analysis' },
    {
      kind: 'p',
      text: 'A durable programme logs every close, interviews a steady share of buyers, keeps a trial running at each competitor the team meets, and reports monthly. Each step ends on what a pass looks like.',
    },
    { kind: 'h3', id: 'step-scope', text: '1. Set the questions and the deals in scope' },
    {
      kind: 'p',
      text: 'Write the 3 questions leadership wants answered this quarter, such as why the team loses to its top 2 competitors in mid-market deals. Put every competitive loss over a set deal size in scope, plus a sample of wins for contrast. A pass is a written scope with the segments, the competitors and the target number of interviews for each.',
    },
    { kind: 'h3', id: 'step-close', text: '2. Log the rep’s reason at close' },
    {
      kind: 'p',
      text: 'Make the loss reason and the competitor required fields at the lost stage, and add a free-text note. A pass is every closed deal with a reason, a competitor and a date, ready to set beside the interview.',
    },
    { kind: 'h3', id: 'step-interview', text: '3. Interview buyers within 90 days' },
    {
      kind: 'p',
      text: 'Have someone outside the deal ask, in about 30 minutes, what the buyer weighed, who else they considered and why they chose. Add 2 questions that point at the competitor’s offers: whether any vendor changed its price or terms during the evaluation, and whether the buyer will share that email. A pass is the buyer’s reasons in their own words, and every competitor they named.',
    },
    { kind: 'h3', id: 'step-trials', text: '4. Keep a trial running at each competitor' },
    {
      kind: 'p',
      text: 'Start a trial at each competitor the team meets, as a new user in the segment you sell to, with an inbox kept for that competitor. Sign in like a buyer comparing vendors for the first few days, then go quiet, which is when many trials send their offers. On the last day, start the cancel flow and screenshot what it offers. Keep every email with its arrival time and every limit, prompt and price with its trial day. A pass is a dated, day-by-day trial for every competitor named in the quarter’s interviews.',
    },
    {
      kind: 'p',
      text: 'Read each competitor’s terms before signing up, because some bar competitors outright. [Salesforce’s main services agreement](' +
        SALESFORCE +
        '), last updated on 15 October 2026, says it governs free trials. Its services “may not be accessed for purposes of monitoring their availability, performance or functionality, or for any other benchmarking or competitive purposes”. It also says “SFDC’s direct competitors are prohibited from accessing the Services, except with SFDC’s prior written consent.” Where terms bar your company, rely on the buyer’s forwarded emails and the interview. Our guide to [whether it’s legal to mystery shop competitors](/blog/is-it-legal-to-mystery-shop-competitors) sets out the questions that decide a method; none of this is legal advice.',
    },
    { kind: 'h3', id: 'step-match', text: '5. Match each deal to the competitor’s offers' },
    {
      kind: 'p',
      text: 'For each decided deal, pull what that competitor sent new trial users between the first meeting and the close date. Code each row by theme. A pass is a row where the buyer’s words and the competitor’s dated offer sit side by side, and an owner for each action.',
    },
    { kind: 'h3', id: 'step-report', text: '6. Report monthly, review quarterly' },
    {
      kind: 'p',
      text: 'Send sales leadership 1 page a month: the top reasons by competitor, the competitor moves that coincided with losses, and the actions taken. Review competitive win rate each quarter and refresh the interview guide. Product marketing takes the positioning findings, as in our guide to [competitive intelligence for product marketing](/blog/competitive-intelligence-for-product-marketing).',
    },
    { kind: 'h3', id: 'win-rate', text: 'How to calculate competitive win rate' },
    {
      kind: 'p',
      text: 'Competitive win rate is the deals won against a named competitor, divided by the deals won plus the deals lost where it was in the deal. Won 18 and lost 27 against one competitor in a quarter gives 18 ÷ 45, or 40%. Keep no-decision deals in their own column and the rule the same every quarter. Take the competitor from the interview where there is one, because Clozd found the CRM tag wrong in nearly 70% of deals.',
    },
    {
      kind: 'table',
      caption: 'A win loss analysis cadence for a sales team',
      cols: ['How often', 'What happens', 'Owner'],
      rows: [
        ['At every close', 'Reason, competitor and note logged', 'The rep'],
        ['Weekly', 'Interviews booked, new competitor emails and offers logged', 'Win loss lead'],
        ['Monthly', '1-page report, battlecard and pricing notes updated', 'Win loss lead, enablement'],
        ['Quarterly', 'Win rate by competitor, interview guide refreshed', 'Sales leader'],
      ],
    },

    { kind: 'h2', id: 'by-hand', text: 'What it costs to collect by hand' },
    {
      kind: 'p',
      text: 'Interviews take time to book, run and write up, and trials take time every day they run. Use your own numbers: competitors × buyer profiles × hours per trial × trials a year gives the trial hours, and a monthly trial at each competitor keeps the offers current.',
    },
    {
      kind: 'art',
      caption: 'The trial side of the largest programme, with example figures. Replace each line with your own.',
      art: {
        kind: 'price',
        title: 'Trials by hand, example figures',
        rows: [
          { label: 'Competitors the team meets', value: '10' },
          { label: 'Buyer profiles for each', value: '3', note: 'Mid-market admin, enterprise buyer, small business owner' },
          { label: 'Hours per 14-day trial', value: '5', note: 'Sign-ins, screenshots, logging each email' },
          { label: 'Trials a year at each', value: '12', note: 'One a month' },
          { label: 'Your team’s cost an hour', value: '$75' },
        ],
        total: { label: 'Cost a year', value: '$135,000', note: '1,800 hours × $75' },
      },
    },
    {
      kind: 'p',
      text: 'The same sum gives $45,000 a year for 5 competitors and 2 profiles. For 3 competitors and 1 profile it gives $13,500, before any interviews. By hand, the trial side holds for 3 to 5 competitors.',
    },
    {
      kind: 'p',
      text: 'Time is the smaller limit. Win loss analysis needs [point-in-time data](/glossary/point-in-time-data): what each competitor was sending trial users in the weeks the buyer was deciding. A trial started after a loss shows this month’s offer. The buyer saw last month’s. So the trials have to be running before the deals close, at every competitor the team meets, every month.',
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. For win loss analysis, its [trial teardown](/recipes/trial-teardown) keeps each competitor’s trial as a new user meets it. That covers the welcome email, the discount sent once the user goes quiet and the save offer. Each lost deal then sits beside what that competitor sent trial users the same week, for every competitor you name, for as long as you follow them. [Exa](' +
        EXA +
        ') calls itself “The world’s data for AI agents” and gives reps and their agents the public web in seconds, from a competitor’s pricing page to its press coverage. Its pages don’t describe keeping what a company sends the people who sign up, and the [comparison of the two](/compare/obsession-vs-exa) shows how teams use both. Run it on the competitors you lose to most for a quarter, so you can see what it does to win rate against each of them, opportunities and pipeline.',
    },
    {
      kind: 'cta',
      text: 'Every competitor’s trial as a new user meets it, from the welcome email to the discount and the save offer, dated with a screenshot, for as long as you follow them.',
      to: '/#join',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'software', text: 'Win loss analysis software compared', compare: true },
    {
      kind: 'p',
      text: 'Each option covers a different side of a decided deal. We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026. Facts checked 11 November 2026. For a closer look at one of them, see [Obsession vs Klue](/compare/obsession-vs-klue).',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Win loss analysis software and methods, by the side of the deal each covers. From each provider’s own pages, 11 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'Loss reasons stay as reps logged them', 'Teams with few competitive deals'],
        [
          'By hand: CRM fields, your own interviews and trials',
          'The buyer’s words and each competitor’s trial, first hand',
          'Free, plus about 5 hours a trial and the interview time',
          'Hours grow with every competitor\nHistory starts the day you begin',
          '3 to 5 competitors',
        ],
        [
          'Klue: [win-loss interviews, AI Interviewer, Blindspots](' + KLUE + ')',
          'Competitive intelligence and win-loss in one product, with cited answers for sellers',
          'Not listed\n[Demo only](' + KLUE_PRICING + ')',
          'Its pages don’t describe signing up to a competitor’s product',
          'Running CI and win-loss together',
        ],
        [
          'Clozd: [live and AI interviews](' + CLOZD + ')',
          'Runs outreach, scheduling, incentives and interviews, with themes and quotes tagged',
          'Not listed\nBook a demo',
          'Its pages don’t describe what competitors send buyers in a trial',
          'Buyer interviews at scale',
        ],
        [
          'Crayon: [monitoring, battlecards, win/loss](' + CRAYON + ')',
          'Alerts on competitor news and shows which competitors trouble sales most',
          'Not listed\n[Request an estimate](' + CRAYON_PRICING + ')',
          'Trials and onboarding not described',
          'Sales-led CI with automated alerts',
        ],
        [
          'Obsession (ours): [Trial teardown](/recipes/trial-teardown), [Competitor tracking](/recipes/competitor-tracking)',
          'Keeps what each competitor shows trial users: onboarding emails, limits, upgrade prompts, discounts and save offers, dated',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Why the buyer chose stays with interviews\nA competitor not yet covered starts its history the day it is added',
          'The competitor’s side of every decided deal, for as long as you follow it',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For the competitor’s side of a decided deal, use Obsession. It keeps what each competitor you name shows its trial users, from onboarding emails and upgrade prompts to the discount and the save offer, dated for as long as you follow them. For the buyer’s side, Clozd runs interviews at scale, Klue runs competitive intelligence and win-loss together, and Crayon ranks competitors by how often they trouble the sales team. Together they answer what the buyer weighed and what the competitor put in front of them.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**A trial shows what a new user sees.** A competitor that negotiates price on calls or by quote keeps those terms between its rep and the buyer, so the interview and any email the buyer forwards stay the source.',
        '**1 profile sees 1 buyer’s view.** A mid-market admin and an enterprise buyer can see different limits and offers. Record the profile with every entry.',
        '**Trial terms are your company’s call.** Read each competitor’s terms before a trial starts; this is general information, not legal advice.',
      ],
    },
    {
      kind: 'p',
      text: 'Start with the 2 competitors you lose to most: start a trial at each this week and interview the buyers from last month’s losses. Our guide to [competitor monitoring](/blog/competitor-monitoring) covers watching the same competitors between deals. [Sales intelligence from behind the login](/use-cases/sales-intelligence-behind-the-login) shows the same view for every role on a revenue team, with an example for each.',
    },
    {
      kind: 'cta',
      text: 'Sample data from a real UK store in September 2026: 4 test customers, every inbox watched for 48 hours, and the result in every format it comes in.',
      to: '/sample-output',
      label: 'See sample data',
    },

    { kind: 'h2', id: 'questions', text: 'Frequently asked questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is win loss analysis?',
          a: 'Win loss analysis is how a sales team finds out why it wins and loses deals. It compares the reason a rep logs in the CRM with what the buyer says in an interview after the decision. It can also add what each competitor sent the buyer during its trial, dated.',
        },
        {
          q: 'What should a win loss analysis template include?',
          a: 'One row per decided deal. It holds the deal facts, the outcome, the rep’s reason, the buyer’s decision drivers and every competitor evaluated. The competitor columns follow: its trial by day, its offer and save offer, and the price compared. Theme codes and an action with an owner close the row.',
        },
        {
          q: 'How many win loss interviews do you need?',
          a: 'Clozd’s guide says programmes reach saturation at around 25 to 30 interviews per segment. Klue’s guide says cohort comparisons need at least 10 similar deals. Interview wins as well as losses.',
        },
        {
          q: 'Who should run win loss interviews?',
          a: 'Someone outside the deal, either a colleague who didn’t sell it or a third party. Clozd’s guide says reps seldom get honest answers about why a deal was lost, and Klue’s guide asks for an interviewer who is impartial and matches the buyer’s seniority.',
        },
        {
          q: 'Why are deals lost to competitors?',
          a: 'Buyers usually name several reasons, such as price, a missing feature, ease of switching or how the sales process felt. When price is one, the offer the competitor sent during the trial often explains it, so keep that email or screen beside the interview.',
        },
        {
          q: 'How do you calculate competitive win rate?',
          a: 'Divide the deals won where a competitor was present by the deals won plus the deals lost where it was present. Keep no-decision deals separate, take the competitor from the buyer interview where you have one, and use the same rule every quarter.',
        },
        {
          q: 'Is it legal to sign up for a competitor’s free trial?',
          a: 'It depends on the trial’s terms and the law where you are; this is general information, not legal advice. Some terms bar competitors, such as Salesforce’s main services agreement, so read them before signing up.',
          link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sources',
      text: 'Every vendor fact is quoted from its own pages as they stood on 11 November 2026, and we tested none of the tools. Corvane, Pellow and Veridyn are invented companies, and every deal, offer and figure in the examples and the cost sum is an example. Trial terms are general information, not legal advice.',
    },
  ],

  sources: [
    { title: 'Win loss analysis: the ultimate guide for B2B teams', publisher: 'Clozd', url: CLOZD_GUIDE, date: '2026-08' },
    { title: 'HubSpot’s default deal properties', publisher: 'HubSpot', url: HUBSPOT_PROPS, date: '2026-09-29' },
    { title: 'Set up and customize pipelines', publisher: 'HubSpot', url: HUBSPOT_PIPELINES, date: '2026-09-29' },
    { title: '5 lies your CRM is telling you about your buyers', publisher: 'Clozd', url: CLOZD_CRM },
    { title: 'The ultimate 7-step guide to win-loss analysis', publisher: 'Klue', url: KLUE_GUIDE, date: '2024-11-20' },
    { title: 'The AI platform for competitive intelligence and win-loss', publisher: 'Klue', url: KLUE },
    { title: 'Win-loss analysis software', publisher: 'Clozd', url: CLOZD },
    { title: 'Drive more competitive wins with automated insights', publisher: 'Crayon', url: CRAYON },
    { title: 'Main Services Agreement', publisher: 'Salesforce', url: SALESFORCE, date: '2026-10-15' },
    { title: 'The world’s data for AI agents', publisher: 'Exa', url: EXA },
    { title: 'Pricing', publisher: 'Klue', url: KLUE_PRICING },
    { title: 'Pricing', publisher: 'Crayon', url: CRAYON_PRICING },
  ],

  related: [
    '/use-cases/sales-intelligence-behind-the-login',
    'battlecard-template',
    'competitive-intelligence-for-product-marketing',
    'sales-business-case-template',
    'competitor-monitoring',
    'recipe:trial-teardown',
    'recipe:competitor-tracking',
    '/sales',
  ],
}
