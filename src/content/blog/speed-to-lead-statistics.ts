import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

/* Guide 8 of the week's slate (_research/seo/plan/week-2nov/SLATE.md and WRITER_BRIEF.md, Seun's go on 1 Nov 2026),
   built on the 3 Oct Post 4 spec in docs/SEARCH.md section 5 with the brief's changes. It owns "speed to lead
   statistics" and its neighbours (speed to lead data, speed to lead facts, speed to lead harvard study, lead response
   time study, lead response time statistics, 5 minute rule lead response). "Speed to lead" and "what is speed to lead"
   stay with ai-customers-for-b2b-sales-teams, linked with "speed to lead" as the anchor; the speed to lead test stays
   with /recipes/lead-leaks, linked with that phrase.
   Readers: sales leaders, revenue operations teams and founders who quote these figures in targets and business cases.
   The shape: a ledger of every widely quoted figure with its source, date, sample and grade (holds up, directional, no
   traceable source); where the 5 minute rule and the Harvard study come from; the 2 figures with no source; the 2024
   and 2026 tests; why the averages disagree (where each clock starts); the method, a labelled test lead through the
   team's own form, chat and phone at several times of day, after hours included, timed against a target; how AI
   customers run it; the options compared with Obsession last; the FAQ.
   Read at source on 1 Nov 2026: InsideSales' 2007 announcement (the 21 times figure, dated 17 Oct 2007); the study's
   own page, presented 16 Oct 2007, through a July 2008 print of leadresponsemanagement.com/mit_study.html hosted by
   Mortech (the 100 times figure, the sample, "This study did not address close ratios"; the Internet Archive was not
   reachable from this machine); InsideSales' Annual 2014 Lead Response Report on its own domain (its 2013 audit, and
   both 2007 figures and the HBR figures restated); HBR's article page (teaser only, so cited for title, authors and
   date); BYU ScholarsArchive's record (the authors' institutions); SmartCompany, 1 Jul 2011, which quotes the HBR text
   with the audit and the 1.25 million lead figures; Velocify's release of 26 May 2016 on PR Newswire; RevenueHero's
   study (20 Mar 2024); Clay's test (22 Sep 2026); Optifai's benchmark (updated 20 Apr 2026); Expertise.ai (updated
   6 Jul 2026) and EmailAnalytics (updated 2026) on the untraceable figures; HubSpot's knowledge base (18 Jun 2026);
   Qualified's free test page; Checkly's pricing.
   Left out on purpose: Workato's figures, every Gartner figure, Marklinea's re-test (its page shows no results on
   1 Nov 2026), Drift's 433 company report (its original could not be read), SaaStr's own account (no date on its page),
   6sense's buyer survey (its figures don't show on its own pages), Apollo, and any PilotX figure. corrivale.example
   and every time in both illustrations are invented. No dashes. */

const LRM = 'https://www.mortech.com/hs-fs/hub/25649/file-13535879-pdf/docs/mit_study.pdf'
const INSIDESALES_2007 = 'https://www.insidesales.com/?p=5512'
const HBR = 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads'
const IS_2014 = 'https://resources.insidesales.com/wp-content/uploads/2019/11/2014-Lead-Response-Report.pdf'
const VELOCIFY =
  'https://prnewswire.com/news-releases/velocify-research-shows-time-of-day-has-minimal-impact-on-sales-effectiveness-consider-quick-and-strategic-follow-up-instead-300275320.html'
const REVENUEHERO = 'https://www.revenuehero.io/blog/b2b-lead-response-times'
const CLAY = 'https://www.clay.com/blog/claygent-experiment-speed-to-lead'
const OPTIFAI = 'https://optif.ai/learn/questions/lead-response-time-benchmark/'
const BYU = 'https://scholarsarchive.byu.edu/facpub/9711'
const SMART = 'https://www.smartcompany.com.au/marketing/20110704-are-you-letting-online-leads-go-cold/'
const EXPERTISE = 'https://www.expertise.ai/stats/speed-to-lead-statistics'
const EMAILANALYTICS = 'https://emailanalytics.com/lead-response-time/'
const HUBSPOT_KB = 'https://knowledge.hubspot.com/reports/create-sales-reports-in-the-sales-analytics-suite'
const QUALIFIED_TEST = 'https://www.qualified.com/resources/test-my-response-time'
const CHECKLY = 'https://www.checklyhq.com/pricing/'

const B2B = '/blog/ai-customers-for-b2b-sales-teams'

export const post: BlogPost = {
  slug: 'speed-to-lead-statistics',
  title: 'Speed to lead statistics: which numbers hold up, and how sales teams time their own',
  dek: 'The 5 minute rule comes from a 2007 study of phone calls at 6 companies, and 2 of the most quoted figures come from no study anyone has found. Each figure is graded by source, date and sample, and a labelled test lead times a sales team’s own replies.',
  metaTitle: 'Speed to lead statistics for sales teams: what holds up',
  description:
    'Speed to lead statistics, graded: where the 5 minute rule and the Harvard study come from, what Clay found in 2026 and how sales teams time their replies.',
  answer:
    'The speed to lead statistics that hold up state their method and sample, like Clay’s 2026 test, in which two thirds of 6,346 companies never replied to a demo request. The 5 minute rule comes from a 2007 study of phone calls at 6 companies, and no study has been found behind “78% buy from the first to respond”. To time your team’s replies, use Obsession: its AI customers fill in the form, open the chat and call the sales line at the hours the team picks, and time every reply.',
  primaryKeyword: 'speed to lead statistics',
  keywords: [
    'speed to lead data',
    'speed to lead facts',
    'speed to lead harvard study',
    'lead response time study',
    'lead response time statistics',
    '5 minute rule lead response',
  ],
  category: 'AI customers',
  published: '2026-11-01',
  updated: '2026-11-01',
  readingMinutes: 14,
  order: 5,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'corrivale.example · 1 test lead at 09:00',
      who: 'Demo form, site chat and sales line, on a Tuesday',
      rows: [
        { time: '09:00', text: 'Test lead uses 3 ways in', detail: 'Fills the demo form, opens the chat, calls sales', tone: 'info' },
        { time: '09:00', text: 'Chat answers in 38 seconds', detail: 'The lead lands in the CRM with an owner', tone: 'ok' },
        { time: '09:01', text: 'Sales line rings out', detail: 'No voicemail and no callback', tone: 'fail' },
        { time: '13:12', text: 'Form gets its first reply', detail: '4 hours 12 minutes after it was sent', tone: 'late' },
        { time: '17:00', text: 'Day ends with no callback', detail: 'The call is logged as missed', tone: 'fail' },
      ],
      foot: 'Against a 5 minute target, the chat passed, the form was late and the phone was missed. Corrivale is an invented company.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: '[Speed to lead](' +
        B2B +
        ') is the time from a buyer’s enquiry, such as a demo request, to the company’s first reply. Sales leaders, revenue operations teams and founders quote its statistics to set reply targets and to argue for more sales development reps, routing tools or AI agents.',
    },
    {
      kind: 'p',
      text: 'The figures they quote come from 7 studies published between 2007 and 2026, each measuring something different. Two of the most repeated come from no study at all. A team’s own number comes from timing its own form, chat and phone the way a buyer meets them.',
    },

    { kind: 'h2', id: 'graded', text: 'Speed to lead statistics, graded' },
    {
      kind: 'p',
      text: 'Each statistic is traced to the page that first published it, with that source’s date, the sample behind the figure and one of 3 grades.',
    },
    {
      kind: 'list',
      items: [
        '**Holds up:** a public source states the figure, how it was measured and on how many companies, and the figure is quoted the way the source states it.',
        '**Directional:** the source is real, but its sample, method or age limits what the figure says about a sales team today.',
        '**No traceable source:** no study behind the figure has been found.',
      ],
    },
    {
      kind: 'table',
      caption: 'Speed to lead statistics as their sources published them, oldest first, with each source’s date, its sample and a grade',
      cols: ['Statistic', 'Source and date', 'Sample', 'Grade'],
      rows: [
        [
          'Odds of reaching a lead by phone 100 times higher at 5 minutes than at 30',
          '[InsideSales.com and MIT](' + LRM + '), October 2007',
          '6 companies, 15,000+ web leads, 100,000+ calls',
          'Directional: phone contact only',
        ],
        [
          'Odds of qualifying a lead 21 times higher at 5 minutes than at 30',
          '[InsideSales.com and MIT](' + INSIDESALES_2007 + '), October 2007',
          'The same 6 companies',
          'Directional: each company defined qualified',
        ],
        [
          'Average first reply of 42 hours, and 23% of companies never replied',
          '[Harvard Business Review](' + HBR + '), March 2011',
          '2,241 US companies, 1 test lead each',
          'Holds up, for 2011',
        ],
        [
          'Nearly 7 times likelier to qualify a lead contacted within an hour',
          'Harvard Business Review, March 2011',
          '1.25 million leads at 42 US companies',
          'Holds up, for 2011',
        ],
        [
          '47% of companies never replied, and those that phoned took a median 3 hours 8 minutes',
          '[InsideSales.com](' + IS_2014 + '), published 2014',
          '9,538 US companies sent a test lead in 2013',
          'Holds up, for business hours in 2013',
        ],
        [
          'Prospects called within 1 minute were 391% more likely to convert than those called later',
          '[Velocify](' + VELOCIFY + '), May 2016',
          'Millions of its clients’ lead records',
          'Directional: no counts or dates',
        ],
        [
          'Average reply after 1 day, 5 hours and 17 minutes, and 63.5% never replied',
          '[RevenueHero](' + REVENUEHERO + '), published March 2024',
          '1,000 B2B SaaS companies, 1 demo request each',
          'Holds up, for 2024',
        ],
        [
          '60% replied first with an automated response, and a person’s reply took over 2 days',
          'RevenueHero, published March 2024',
          'The 365 companies that replied',
          'Holds up, for 2024',
        ],
        [
          'Two thirds never replied, and only 100 companies phoned',
          '[Clay](' + CLAY + '), published September 2026',
          '6,346 demo and contact forms in 100 countries',
          'Holds up, with Clay’s own caveats',
        ],
        [
          'About 7% of forms got a reply from a salesperson, and 5% of replies came within 5 minutes',
          'Clay, published September 2026',
          'The same 6,346 forms',
          'Holds up, with Clay’s own caveats',
        ],
        ['64% of replies were automated', 'Clay, published September 2026', 'The 2,013 replies', 'Directional: an AI judged the split'],
        [
          'Average reply of 47 hours, and 23% of companies within 5 minutes',
          '[Optifai](' + OPTIFAI + '), updated April 2026',
          'CRM data from 939 B2B companies',
          'Directional: selection not published',
        ],
        ['78% of customers buy from the company that responds first', 'Credited to a Lead Connect survey', 'None published', 'No traceable source'],
        ['35 to 50% of sales go to the vendor that responds first', 'Credited to InsideSales.com', 'None published', 'No traceable source'],
      ],
    },

    { kind: 'h2', id: 'five-minute-rule', text: 'Where the 5 minute rule comes from' },
    {
      kind: 'p',
      text: 'The 5 minute rule comes from the Lead Response Management Study. InsideSales.com, the sales software company now called InsideSales, ran it with James Oldroyd, then a faculty fellow at MIT’s Sloan School of Management. Oldroyd and InsideSales.com’s chief executive, Dave Elkington, presented it on 16 October 2007 at MarketingSherpa’s B2B Demand Generation Summit, and [InsideSales.com announced the findings](' +
        INSIDESALES_2007 +
        ') the same week.',
    },
    {
      kind: 'p',
      text: '[The study’s own page](' +
        LRM +
        ') describes 3 years of data from 6 companies that took leads through web forms. It covers over 15,000 leads and over 100,000 call attempts, all logged in InsideSales.com’s own system. It found that the odds of reaching a lead by phone were 100 times higher when the first call came within 5 minutes than at 30 minutes. The odds of qualifying the lead were 21 times higher.',
    },
    {
      kind: 'p',
      text: 'Both figures describe phone calls. A contact meant a call that reached a live person for a set number of seconds, and each company used its own definition of a qualified lead. The study’s page states, “This study did not address close ratios.”',
    },
    {
      kind: 'p',
      text: 'The rule is often credited to Harvard. The link is a later article by Oldroyd, Elkington and a Harvard Business School researcher, published by Harvard Business Review in 2011.',
    },

    { kind: 'h2', id: 'harvard-study', text: 'What the Harvard study found' },
    {
      kind: 'p',
      text: '[The Short Life of Online Sales Leads](' +
        HBR +
        ') appeared in the March 2011 issue of Harvard Business Review (HBR). [Its authors](' +
        BYU +
        ') were James Oldroyd of Brigham Young University, Kristina McElheran of Harvard Business School and David Elkington of InsideSales.com.',
    },
    {
      kind: 'p',
      text: 'The authors audited 2,241 US companies, sending each a test lead through its website and timing the response. [SmartCompany’s report of 1 July 2011](' +
        SMART +
        '), which quotes the article, gives the results.',
    },
    {
      kind: 'list',
      items: [
        '37% replied within an hour, 16% within 1 to 24 hours and 24% after more than 24 hours.',
        '23% never replied.',
        'Among companies that replied within 30 days, the average first reply came after 42 hours.',
      ],
    },
    {
      kind: 'p',
      text: 'A separate analysis in the same article covered 1.25 million leads received by 42 US companies, 29 selling to consumers and 13 to businesses. Companies that tried to reach a lead within an hour were nearly 7 times as likely to qualify it as those that tried an hour later. Against companies that waited 24 hours or longer, they were over 60 times as likely. Qualifying meant reaching a key decision maker for a meaningful conversation.',
    },
    {
      kind: 'p',
      text: 'HBR’s article opens in full to subscribers. [InsideSales.com’s 2014 report](' +
        IS_2014 +
        ') gives the same 37%, 24% and 42 hour figures and cites the article, and [Expertise.ai](' +
        EXPERTISE +
        ') notes that the 42 hours is often misquoted as 47.',
    },

    { kind: 'h2', id: 'no-source', text: 'Figures with no traceable source' },
    {
      kind: 'p',
      text: 'Two of the most repeated speed to lead statistics trace to no study anyone has found.',
    },
    {
      kind: 'list',
      items: [
        '**78% of customers buy from the company that responds first.** [Expertise.ai’s statistics page](' +
          EXPERTISE +
          '), updated in July 2026, traces it to a Lead Connect survey with no published method or original report.',
        '**35 to 50% of sales go to the vendor that responds first.** It is usually credited to InsideSales.com. [EmailAnalytics](' +
          EMAILANALYTICS +
          '), which had cited a 2014 InsideSales report for it, says the share has no traceable primary source and that the report no longer publishes a method it can check.',
      ],
    },
    {
      kind: 'p',
      text: 'Faster contact does raise the odds of a qualified conversation, as the 2007 and 2011 studies found. These 2 figures can’t be checked, so neither belongs in a business case or a board deck.',
    },

    { kind: 'h2', id: 'recent-tests', text: 'What the 2024 and 2026 tests show' },
    {
      kind: 'p',
      text: '[RevenueHero](' +
        REVENUEHERO +
        ') requested a demo from 1,000 B2B SaaS companies, most with 51 to 500 staff, in a study published in March 2024. Of the 1,000, 365 replied and 635 never did. The average reply took 1 day, 5 hours and 17 minutes. The fastest 172 companies replied instantly, in about 2 minutes on average, and 31 more replied within the hour.',
    },
    {
      kind: 'p',
      text: 'Of the companies that replied, 60% sent an automated first response. Automated first responses took 17 hours and 20 minutes on average, and replies written by a person took 2 days, 3 hours and 11 minutes. RevenueHero adds that 31% of the companies that never replied used an enrichment tool, software that looks up the company behind a form, so some may have screened its request out.',
    },
    {
      kind: 'p',
      text: '[Clay](' +
        CLAY +
        ') published its test on 22 September 2026. Agents built in Clay filled in 6,346 demo and contact forms at companies in 100 countries and sent no follow up. Every form came from the same made-up buyer, the founder of an AI startup.',
    },
    {
      kind: 'stat',
      value: 'Two thirds',
      label: 'of companies never replied to a demo request in Clay’s test of 6,346 forms',
      source: 'Clay, September 2026',
      href: CLAY,
    },
    {
      kind: 'p',
      text: 'Email replies came to 2,013 forms, 32% of the total. Only 100 companies phoned, about 5% of those that replied, and their calls arrived 34.5 hours after the form on average. About 7% of the forms got a reply from a salesperson, and 5% of replies arrived within 5 minutes.',
    },
    {
      kind: 'p',
      text: 'Clay puts its average speed to lead at 15 to 24 hours depending on the cut, or 26 to 40 hours for replies written by a person. It lists its own caveats: a missing reply may have been a deliberate choice, spam filters may have blocked some forms, and an AI judged which replies were automated. Bigger companies replied faster on average and automated more of their first replies.',
    },
    {
      kind: 'p',
      text: '[Optifai](' +
        OPTIFAI +
        '), a sales software company, reports an average of 47 hours on a page updated in April 2026, with 23% of companies responding within 5 minutes. Its figures come from CRM and marketing automation data at 939 B2B companies, from the second quarter of 2025 to the first of 2026. It times from the lead’s creation in the CRM to the first sales activity, and its page doesn’t say how the companies were chosen.',
    },
    {
      kind: 'p',
      text: 'Every audit since 2011 found a large share of companies that never answered the test lead. The share was 23% in HBR’s audit, 47% in InsideSales.com’s 2013 audit, 63.5% in RevenueHero’s and about two thirds in Clay’s. Each used its own method, so the rise between them isn’t a like-for-like trend.',
    },

    { kind: 'h2', id: 'clock', text: 'Why the numbers disagree' },
    {
      kind: 'p',
      text: 'Published averages run from hours to days because each study starts its clock in a different place, counts different replies and tests at different hours.',
    },
    {
      kind: 'list',
      items: [
        '**Where the clock starts.** The audits start it when the buyer sends the form. Optifai starts it when the lead is created in the CRM. [HubSpot’s lead response time report](' +
          HUBSPOT_KB +
          ') starts it when a contact is assigned to a user, and starts it again when the contact is reassigned.',
        '**What counts as a reply.** HubSpot counts the owner’s first email, call, chat, task marked in progress or done, or meeting. RevenueHero timed automated first responses and a person’s replies separately, and Clay had an AI sort the two.',
        '**When the test runs.** InsideSales.com’s 2013 audit sent its test leads between 08:00 and 17:00 local time, so it measured no evening or weekend leads. RevenueHero and Clay don’t say when they sent theirs.',
        '**Who asks.** Clay sent the same made-up founder to every company, so a company that rightly judged him a poor fit counts as a non-reply.',
      ],
    },
    {
      kind: 'art',
      caption: 'One demo request at an invented company, timed from the 3 points where studies and CRM reports start their clocks.',
      art: {
        kind: 'flow',
        title: 'corrivale.example · 3 clocks, 1 reply',
        steps: [
          { label: 'Form sent', detail: '09:00 · the buyer starts waiting', tone: 'info' },
          { label: 'Lead in the CRM', detail: '09:00 · a lead creation clock starts', tone: 'info' },
          { label: 'Owner assigned', detail: '12:40 · the CRM report’s clock starts', tone: 'late' },
          { label: 'First reply', detail: '13:12 · 4 hours 12 minutes for the buyer', tone: 'late' },
        ],
        foot: 'The same reply reads as 32 minutes in a report that starts at assignment, and as 4 hours 12 minutes to the buyer.',
      },
    },
    {
      kind: 'p',
      text: 'A team’s own report can show 32 minutes while the buyer waited more than 4 hours, because its clock starts later and a lead that never became a record never counts. A test from the buyer’s side starts the clock when the buyer presses send.',
    },

    { kind: 'h2', id: 'method', text: 'How sales teams time their own' },
    {
      kind: 'p',
      text: 'A labelled test lead goes through the team’s own form, chat and phone at several times of day, after hours included, and each reply is timed against a target set first.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**List every way in.** Each demo and contact form, the site chat, the sales line and the published sales email address, with the owner of each step behind it. A pass: the list holds every way a buyer can reach sales.',
        '**Set the target first.** For example, an owner in the CRM within 5 minutes and a first reply from a person within 5 minutes in staffed hours. Outside them, a reply by 09:30 the next working day. A pass: sales, marketing and revenue operations agree the numbers before the first test.',
        '**Label every test lead.** A hidden form field, a tagged email address or a fixed company name lets the CRM keep test leads out of attribution and quota. A pass: every test lead appears in the CRM marked as a test.',
        '**Send it at several times.** Spread 5 tests a week across the day and the week, for example at 09:00, 13:00 and 17:00 on different weekdays, at 21:00 on a Friday and once on a Sunday. Each test asks a question a real buyer would ask. A pass: every time slot meets its target.',
        '**Use each way in as a buyer does.** Fill in the form, open the chat and call the sales line, leaving a voicemail if nobody answers. A pass: the reply answers the question that was asked.',
        '**Set the window, then compare.** Read the results at 4, 12, 24 or 48 hours, or keep watching as long as the team wants. Call a reply missing only once that window closes. Then set the log beside what the CRM recorded. A pass: every test lead has an owner in the CRM and a reply inside the window.',
        '**Test again after every change** to routing, the CRM, a form or the site. A pass: every path that passed before still passes.',
      ],
    },
    {
      kind: 'table',
      caption: 'What to record for each test lead, with an example row from an evening test',
      cols: ['Field', 'What to record', 'Example'],
      rows: [
        ['Sent', 'Day, time and time zone', 'Fri 21:00, UK time'],
        ['Way in', 'The form, chat, line or address used', 'Demo form'],
        ['First reply', 'Time and channel, of any kind', 'Fri 21:00, automatic email'],
        ['First reply from a person', 'Time and channel', 'Mon 09:41, phone call'],
        ['Owner in the CRM', 'Who, and when they were assigned', 'Next rep in the round robin, Mon 08:55'],
        ['Question answered', 'Yes, partly or no', 'Partly'],
        ['Follow ups', 'How many, on which channels, in the window', '2 emails in 5 working days'],
      ],
    },
    {
      kind: 'p',
      text: 'A team with 5 ways in, each tested 5 times a week, runs 25 tests a week before any retest. Each one needs an inbox and a phone watched for days, and reps soon learn the tester’s name.',
    },

    { kind: 'h2', id: 'ai-customers', text: 'How AI customers time a team’s replies' },
    {
      kind: 'p',
      /* The first mention of AI customers in the guide's own text carries the definition link (the lead's rule, 1 Nov 2026). */
      text: '**' +
        AI_CUSTOMER.definition.replace('An AI customer', 'An [AI customer](/blog/ai-customers)') +
        '** For a sales team, the evidence is the reply itself, with the time and channel it came on. [How AI customers work](/blog/how-ai-customers-work) shows each step.',
    },
    {
      kind: 'p',
      text: 'AI customers act as the test leads. Each has its own inbox and phone number. It fills in the form, opens the chat and calls the sales line at the times the team picks, evenings and weekends included. It keeps every reply with its time and channel. Whether it also says it’s a test is the team’s setting.',
    },
    {
      kind: 'p',
      text: 'Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. Lead leaks, its [speed to lead test](/recipes/lead-leaks), times the first reply to every enquiry on the form, chat and phone the team owns. It shows each lead nobody answered and drafts the routing fix in the CRM the team connects, for the team to approve. The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026.',
    },
    {
      kind: 'p',
      text: 'The same AI customers check the team’s own AI agents. [Sales agent check](/recipes/sales-agent-check) asks the AI agent in the site chat about prices, stock and delivery every day and checks each answer against the price list. [Outbound agent check](/recipes/outbound-agent-check) joins the lists of an AI SDR, an AI agent that writes to prospects for the team, and checks every email and call it sends against the team’s rules. [AI customer service agents vs AI customers](/blog/ai-customer-service-agent-vs-ai-customer) sets out who each agent works for.',
    },
    {
      kind: 'p',
      text: 'Each AI customer says it’s an AI when it talks to a person and never gets round a CAPTCHA, a puzzle that blocks automated visitors, or a bot block. Where a form puts a CAPTCHA in front of a step, the report names the step it couldn’t test. [What every AI customer will and won’t do](/agents) sets out the full list. Why a lead went to the wrong owner sits in the router and the CRM, where the team’s own tools show it.',
    },

    { kind: 'h2', id: 'compared', text: 'Ways to time your replies, compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 1 November 2026. Tools that act as a customer of a business in other ways, such as calling staff or testing a chatbot, are compared in [AI mystery shopping tools](/blog/best-ai-mystery-shopping-tools). Tools that watch competitors, such as email archives and page monitors, are set beside Obsession in [Obsession and other tools](/compare).',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways a sales team can time its own speed to lead, from each provider’s own pages on 1 November 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'A missed lead shows only as a weaker quarter', 'A founder who answers every request the same day'],
        [
          'By hand: a new address, a phone and a sheet',
          'A person’s judgement on any way in',
          'Staff hours',
          'Reps come to recognise the tester, and evenings need someone at a desk',
          'A spot check after a change',
        ],
        [
          'CRM reports: [HubSpot lead response time](' + HUBSPOT_KB + ')',
          'Times every assigned contact to its owner’s first touch',
          'In Sales Hub Starter, Professional and Enterprise',
          'Starts at assignment and resets when a lead is reassigned',
          'Coaching reps on time to first touch',
        ],
        [
          'Free response tests: [Qualified Test My Response Time](' + QUALIFIED_TEST + ')',
          'A free test of how fast reps answer a website enquiry',
          'Free',
          'Its page doesn’t say how the test is sent or what it reports',
          'A single first-reply time',
        ],
        [
          'Form monitors: [Checkly](' + CHECKLY + ')',
          'Browser checks fill in a form on a schedule and alert when it fails',
          'Free plan\n$24 or $64 a month, billed annually',
          'Confirms the form works, before anyone replies',
          'Forms that break outright',
        ],
        [
          'Obsession (ours): [Lead leaks](/recipes/lead-leaks), [Sales agent check](/recipes/sales-agent-check), [Outbound agent check](/recipes/outbound-agent-check)',
          'AI customers use the form, chat and phone at set times and time every first reply',
          'Running now\nCredit-based plans, like Claude’s',
          'Why a lead was misrouted sits in the CRM the team connects',
          'The first reply a buyer gets on every way in, at the times the team picks',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If your team needs to know the first reply a buyer gets on every form, chat and sales line, at the times it picks, evenings and weekends included, use Obsession. A CRM report suits coaching reps once a lead has an owner. A form monitor catches a form that breaks outright, and a test by hand suits a spot check after a change.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI customers send a test lead through a sales team’s own form, chat and phone at the hours it picks, evenings and weekends included, and time every first reply.',
      to: '/',
      label: 'Meet your first AI customers',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about speed to lead statistics' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is the Harvard speed to lead study real?',
          a: 'Yes. Harvard Business Review published “The Short Life of Online Sales Leads” in March 2011, by James Oldroyd of Brigham Young University, Kristina McElheran of Harvard Business School and David Elkington of InsideSales.com. It audited 2,241 US companies with a web test lead and found an average first reply of 42 hours among those that replied within 30 days. The 5 minute and 100 times figures often credited to it come from the 2007 InsideSales.com study with Oldroyd.',
        },
        {
          q: 'What is the 5 minute rule for lead response?',
          a: 'It is the rule that a sales team should try to reach a new web lead within 5 minutes. It comes from the 2007 InsideSales.com and MIT study, which found the odds of reaching a lead by phone 100 times higher at 5 minutes than at 30. The odds of qualifying it were 21 times higher. The study used phone data from 6 companies and did not address close rates.',
        },
        {
          q: 'Do faster lead responses close more deals?',
          a: 'The strongest studies stop at contact and qualification. The 2007 study did not address close rates, and Harvard Business Review measured qualified conversations. Velocify reported in 2016 that prospects called within 1 minute were 391% more likely to convert than those called any time after that, from its clients’ call data, without publishing counts or dates.',
        },
        {
          q: 'Does an automatic reply count for speed to lead?',
          a: 'A report that counts any email as a first touch can count an automatic one, while the buyer still waits for a person. In RevenueHero’s study, published in March 2024, 60% of the companies that replied sent an automated first response. Replies written by a person took 2 days, 3 hours and 11 minutes on average. Time automatic replies and a person’s first reply separately.',
        },
        {
          q: 'Can a sales team test a competitor’s response time?',
          a: 'Not with a test lead. A test lead sent to a competitor’s sales team spends their staff’s time on a lead that isn’t real. Published tests such as Clay’s and RevenueHero’s already show how companies reply, and a team’s own form, chat and phone are the ones it can fix.',
        },
        {
          q: 'Which speed to lead statistics belong in a business case?',
          a: 'Use figures that name their source, date and sample. Clay’s 2026 test and RevenueHero’s 2024 study show how companies reply now, and Harvard Business Review’s 2011 audit shows how long the gap has existed. Leave out the 78% and 35 to 50% claims, and add the team’s own test results, which no outside study can supply.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the figures',
      text: 'Each figure is given as its source published it, with that source’s date and sample, and every other option is described from its own pages as of 1 November 2026. The 2007 study is linked through a copy of its original page, printed in July 2008. Corrivale is invented, as is every time in both illustrations.',
    },
  ],

  sources: [
    { title: 'The InsideSales.com/MIT Lead Response Management Study', publisher: 'InsideSales.com and James Oldroyd, copy hosted by Mortech', url: LRM, date: '2007-10-16' },
    { title: 'XANT Research Stuns 2007 Marketing Sherpa B2B Summit', publisher: 'InsideSales', url: INSIDESALES_2007, date: '2007-10' },
    { title: 'The Short Life of Online Sales Leads', publisher: 'Harvard Business Review', url: HBR, date: '2011-03' },
    { title: 'Annual 2014 Lead Response Report', publisher: 'InsideSales (XANT)', url: IS_2014, date: '2014' },
    { title: 'Velocify research shows time of day has minimal impact on sales effectiveness', publisher: 'Velocify, via PR Newswire', url: VELOCIFY, date: '2016-05-26' },
    { title: 'We Tested Lead Response Times Of 1000 B2B Sales Teams. Here Are The Results.', publisher: 'RevenueHero', url: REVENUEHERO, date: '2024-03-20' },
    { title: 'We asked 6,346 companies for a demo. Most never wrote back.', publisher: 'Clay', url: CLAY, date: '2026-09-22' },
    { title: 'Lead Response Time Benchmarks: How Fast Is Fast Enough? (939 Companies)', publisher: 'Optifai', url: OPTIFAI, date: '2026-04-20' },
    { title: 'The Short Life of Online Sales Leads: faculty publication record', publisher: 'Brigham Young University ScholarsArchive', url: BYU, date: '2011' },
    { title: 'Are you letting online leads go cold?', publisher: 'SmartCompany', url: SMART, date: '2011-07-01' },
    { title: 'Speed-to-Lead Statistics: Verified, With Folklore Debunked', publisher: 'Expertise.ai', url: EXPERTISE, date: '2026-07-06' },
    { title: 'Lead Response Time Benchmarks and Sources 2026', publisher: 'EmailAnalytics', url: EMAILANALYTICS, date: '2026' },
    { title: 'Create sales reports in the sales analytics suite', publisher: 'HubSpot Knowledge Base', url: HUBSPOT_KB, date: '2026-06-18' },
    { title: 'Test My Response Time', publisher: 'Qualified', url: QUALIFIED_TEST },
    { title: 'Pricing', publisher: 'Checkly', url: CHECKLY },
  ],

  related: ['recipe:lead-leaks', 'recipe:sales-agent-check', 'recipe:outbound-agent-check', 'ai-customers-for-b2b-sales-teams'],
}
