import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

/* Guide 11 of the week's slate (_research/seo/plan/week-2nov/SLATE.md, spec 11, and WRITER_BRIEF.md, batch 3; Seun's go
   on 1 Nov 2026). It owns "b2b mystery shopping", "b2b mystery shopper" and "saas mystery shopping" (Google
   autocomplete, US and UK, 31 Oct 2026, in autocomplete_slate_31oct.json beside the plan). AI mystery shopping tools stay
   with best-ai-mystery-shopping-tools, "AI mystery shopper" with /recipes/mystery-shopper, speed to lead statistics with
   speed-to-lead-statistics (batch 2, linked here), speed to lead with ai-customers-for-b2b-sales-teams and the speed to
   lead test with /recipes/lead-leaks, each linked with its phrase.
   Readers: B2B sales leaders, RevOps and founders of SaaS and service companies.
   The shape: what a buyer meets after the demo form (first reply, the answer, the questions, the follow ups, the quote
   against the pricing page, the meeting), SaaS trials, the method on a company's own funnel with pass marks, why not a
   competitor's sales team (it spends their staff's time on a lead that isn't real), AI agents on both sides of the form,
   how AI customers run it in the live pages' words, the options compared with the last row ours, and the FAQ.
   Read at source on 1 Nov 2026: Clay's test of 6,346 forms (22 Sep 2026), RevenueHero's study (20 Mar 2024), the MRS
   guideline on mystery shopping (March 2020), Service Monitor's trade and B2B page, PressTwo's SpotCheck page and
   Qualified's Test My Response Time page. Obsession is described in the words of the Lead leaks, Mystery shopper, Sales
   agent check and Outbound agent check pages and /agents. Texts are left out of every claim about Obsession. No Workato
   or Gartner figure. The request values are example inputs. larkfield.example and its replies are invented. No dashes. */

const CLAY = 'https://www.clay.com/blog/claygent-experiment-speed-to-lead'
const REVENUEHERO = 'https://www.revenuehero.io/blog/b2b-lead-response-times'
const MRS = 'https://www.mrs.org.uk/pdf/MRS-Guideline-Conducting-Mystery-Shopping.pdf'
const SERVICE_MONITOR = 'https://servicemonitor.co.uk/sectors/trade-b2b/'
const PRESSTWO = 'https://presstwo.ai/solutions/spotcheck'
const QUALIFIED = 'https://www.qualified.com/resources/test-my-response-time'

const B2B = '/blog/ai-customers-for-b2b-sales-teams'

export const post: BlogPost = {
  slug: 'b2b-mystery-shopping',
  title: 'B2B mystery shopping: how sales teams test their own funnel the way a buyer meets it',
  dek: 'A test buyer asks for a demo and records what follows: who replies and how fast, the questions, the follow ups and the price quoted. Run on a company’s own form, chat and sales line, it shows sales teams each step a buyer meets, including steps the CRM never logs.',
  metaTitle: 'B2B mystery shopping: how sales teams test it as a buyer',
  description:
    'B2B mystery shopping tests a sales funnel the way a buyer meets it: the first reply, the questions, the follow ups and the quote. How sales teams run it.',
  answer:
    'B2B mystery shopping tests a sales funnel as a buyer meets it: a test buyer asks for a demo and records who replies, how fast, the questions and the price quoted. Run it on your company’s own form, chat and sales line, because a test lead sent to a competitor’s sales team spends their staff’s time on a lead that isn’t real. To run it daily and after every routing change, use Obsession: its AI customers ask for the demo, use the chat and call the sales line, keeping every reply with its time.',
  primaryKeyword: 'b2b mystery shopping',
  keywords: ['b2b mystery shopper', 'saas mystery shopping'],
  category: 'Check your own journeys',
  published: '2026-11-01',
  updated: '2026-11-01',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'larkfield.example · 1 demo request, 5 days',
      who: 'An AI customer asks Larkfield for a demo, as Larkfield’s own test buyer',
      rows: [
        { time: 'Mon 10:02', text: 'Demo form sent', detail: '“What would 40 seats cost from January?”', tone: 'info' },
        { time: 'Mon 10:03', text: 'Automatic reply', detail: 'A booking link, with no answer on price', tone: 'info' },
        { time: 'Mon 15:41', text: 'First reply from a rep', detail: '5 h 39 min after the form, against a 1 hour target', tone: 'late' },
        { time: 'Tue 11:20', text: 'Quote', detail: '$38 a seat. The pricing page says $32', tone: 'fail' },
        { time: 'Wed 09:05', text: 'Follow up 1', detail: 'A case study and a meeting link', tone: 'ok' },
        { time: 'Fri 17:00', text: 'Window closes', detail: 'No second follow up, though the sequence has 3', tone: 'fail' },
      ],
      foot: 'Each row is timed from the moment the form was sent. The quote was higher than the pricing page, and the second follow up never came. Larkfield, its prices and its replies are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'B2B mystery shopping tests a sales funnel as a buyer meets it: a test buyer asks for a demo and records who replies, how fast, the questions and the price quoted.',
    },
    {
      kind: 'p',
      text: 'A B2B mystery shopper is that test buyer. It can be a person on the team, a research agency’s assessor or an AI agent. It sends a real enquiry through a company’s own demo form, site chat or sales line. Sales leaders, RevOps teams, which run lead routing and the CRM, and founders of SaaS and service companies use the results to see each step from the buyer’s side.',
    },
    {
      kind: 'p',
      text: 'A CRM logs what the sales team records. The buyer meets more than that: the automatic reply that ignores the question, the quote that differs from the pricing page, the follow ups that stop after one email. In [Clay’s test of 6,346 demo and contact forms](' +
        CLAY +
        '), published in September 2026, two thirds of companies never replied.',
    },
    {
      kind: 'stat',
      value: '7%',
      label: 'of 6,346 demo and contact forms got a reply from a salesperson trying to start a sales conversation',
      source: 'Clay, September 2026',
      href: CLAY,
    },
    {
      kind: 'p',
      text: 'A demo request is worth the first-year contract value times the share of requests that become won deals. With 1 won deal in every 25 requests, each request is worth $40,000 of bookings at $1M contracts. At $100,000 contracts it is worth $4,000, and at $30,000 it is worth $1,200. These are example inputs, so put in the team’s own win rate and contract value.',
    },
    {
      kind: 'p',
      text: 'What a broken path costs at 3, 6 and 12 months, worked from a team’s own numbers, is set out in [speed to lead for B2B sales teams](' +
        B2B +
        ').',
    },

    { kind: 'h2', id: 'what-a-buyer-meets', text: 'What a buyer meets after the demo form' },
    {
      kind: 'p',
      text: 'A B2B mystery shop follows one enquiry from the moment the form is sent until the follow ups stop. Each step is scored against a pass mark the team writes before the first test.',
    },
    {
      kind: 'table',
      caption: 'What a B2B mystery shopper records after a demo request, with an example pass mark for each step',
      cols: ['Step', 'What the test buyer records', 'A pass looks like'],
      rows: [
        ['First reply', 'Minutes to the first answer, and who sent it', 'A person, within the team’s target'],
        ['The answer', 'Whether it answers the buyer’s question', 'Answered in the first reply'],
        ['Qualifying questions', 'Budget, team size, timeline, who decides', 'Questions that fit the buyer'],
        ['Follow ups', 'How many, by which channel, for how long', 'The sequence as designed'],
        ['The quote', 'The price quoted against the pricing page', 'The same price, or a stated reason'],
        ['The meeting', 'The booking, the invite and the reminder', 'All 3 arrive before the call'],
      ],
    },
    { kind: 'h3', id: 'first-reply', text: 'The first reply' },
    {
      kind: 'p',
      text: 'Published tests show how often the first reply goes wrong. In Clay’s test, 2,013 forms got an email response, and 64% of those replies were automated. Only 5% of replies arrived within 5 minutes, and the average wait for a reply from a person was 26 to 40 hours, depending on how the replies were counted.',
    },
    {
      kind: 'p',
      text: '[RevenueHero’s test of 1,000 B2B websites](' +
        REVENUEHERO +
        '), a study published in March 2024, got 365 responses. Of the companies that replied, 60.27% sent an automated response, and replies written by a person took 2 days, 3 hours and 11 minutes on average.',
    },
    { kind: 'h3', id: 'the-answer', text: 'The answer and the questions' },
    {
      kind: 'p',
      text: 'A fast reply can still leave the buyer’s question unanswered. Clay found that automated replies were almost never personalised, while 75.8% of replies from a person were fully personalised. A mystery shop records whether the first reply, automatic or written by a rep, answers what the buyer asked, such as the price for 40 seats.',
    },
    {
      kind: 'p',
      text: 'The qualifying questions come next: budget, team size, timeline and who decides. The test buyer notes whether they fit what it said in the form, and whether a rep asks for details the form already gave.',
    },
    { kind: 'h3', id: 'follow-ups', text: 'The follow ups' },
    {
      kind: 'p',
      text: 'Follow ups were few in both tests. RevenueHero received 2 follow ups on average. In Clay’s test, 96% of companies never called, though many forms required a phone number, and the calls that came arrived 34.5 hours after the form on average.',
    },
    { kind: 'h3', id: 'the-quote', text: 'The quote against the pricing page' },
    {
      kind: 'p',
      text: 'Where a pricing page shows a price, the quote should match it or say why it differs. Of the 1,000 companies RevenueHero asked for a demo, 165 had a pricing page, and 95 of those showed prices. The test buyer asks for the plan the page shows and compares the quote with the page line by line: seats, term, discounts and fees.',
    },

    { kind: 'h2', id: 'saas', text: 'SaaS mystery shopping: the trial and the demo' },
    {
      kind: 'p',
      text: 'SaaS mystery shopping adds the product to the funnel. Where a software company offers a free trial, the test buyer starts it. It records the sign-up fields, whether the trial asks for payment details, the time to the first email and each onboarding email by trial day. It also records the first contact from sales and the reminder before the trial ends.',
    },
    {
      kind: 'p',
      text: 'For a demo, the test buyer records whether the booking works and what follows it: the confirmation, the invite and the reminders. An [AI mystery shopper](/recipes/mystery-shopper) runs these steps as a new customer of a company’s own business, or a client’s with the client’s agreement. It starts the trial or requests the demo, then times every email and reply that follows.',
    },
    {
      kind: 'p',
      text: 'Tools that call staff, test chatbots or walk a website as a shopper are compared in [AI mystery shopping tools](/blog/best-ai-mystery-shopping-tools).',
    },

    { kind: 'h2', id: 'method', text: 'How to run a B2B mystery shop on your own funnel' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**List every way in.** Each demo and contact form, the site chat, the sales line and the published sales address. Name the person who owns each step behind them: the form, the routing, the reply and the follow ups. **A pass:** every way in has a named owner.',
        '**Write the buyer’s brief.** A real role, a company size and a question the team’s buyers ask, such as the price for 40 seats or a security review before January. Mark every test lead in the CRM with a hidden form field or a test address, so it stays out of attribution and quota. **A pass:** the CRM can tell every test lead apart.',
        '**Write the pass marks first.** For example, the CRM shows an owner within 5 minutes, and a person replies within the team’s target and answers the question. The follow ups arrive as the sequence promises, and the quote matches the pricing page. **A pass:** each step scores a yes or a no.',
        '**Tell the team that mystery shops happen.** The UK’s [Market Research Society guideline](' +
          MRS +
          '), March 2020, is not binding. It says a company’s own staff must have been told their service may be checked from time to time, though not when. They must be told in advance if any recording will be used, and for staff paid on commission the guideline asks that the time a shopper spends with them be weighed. **A pass:** the team knows, and the date of each test stays private.',
        '**Send it at different hours.** One request in working hours, one at 21:00 on a weekday and one at the weekend. Send another within the hour of every routing, CRM, form or pricing change. **A pass:** the out of hours request has an owner and a reply by the next working morning.',
        '**Score each step and give every fail to its owner.** Keep each reply with its time, compare what the CRM logged with what the buyer received, fix the cause and send the same request again. **A pass:** the retest passes where the first one failed.',
      ],
    },
    {
      kind: 'p',
      text: 'By hand, the method strains as it grows. Reps recognise a colleague’s name, and a repeat address merges into an existing contact and routes differently from a new buyer. Someone also has to be at a desk at 21:00 on a Friday. [Speed to lead statistics](/blog/speed-to-lead-statistics) grades the published figures a team can set its targets against, and the [speed to lead test](/recipes/lead-leaks) times every first reply each day.',
    },

    { kind: 'h2', id: 'competitors', text: 'Why not test a competitor’s sales team' },
    {
      kind: 'p',
      text: 'A test lead sent to a competitor’s sales team spends their staff’s time on a lead that isn’t real. A sales development rep (SDR) researches the company, replies, calls and holds a meeting slot for a buyer who will never buy.',
    },
    {
      kind: 'p',
      text: 'The MRS guideline points the same way. It asks that time with a competitor’s staff be “kept as short as possible” and “not be seen to waste the competitor’s resources”. A demo request is built to take up a rep’s time: the research, the reply, the call and the meeting slot.',
    },
    {
      kind: 'p',
      text: 'Posing as a buyer to another company’s staff is also where competitor research can turn into misrepresentation. [Is it legal to mystery shop competitors](/blog/is-it-legal-to-mystery-shop-competitors) sets out the rules in the US, the UK and the EU.',
    },
    {
      kind: 'p',
      text: 'Published tests already show how companies reply, and a team’s own form, chat and sales line are the ones it can fix. To watch competitors, [AI customers](/blog/ai-customers) join their public sign-ups the way any customer can and keep each email, offer and price they send, as [competitor tracking](/recipes/competitor-tracking) does.',
    },

    { kind: 'h2', id: 'ai-agents', text: 'AI agents on both sides of the form' },
    {
      kind: 'p',
      text: 'AI agents now fill in demo forms, and many first replies are automated. Clay’s 6,346 forms were filled in by agents with their own browser, inbox and phone number, and 64% of the replies they got were automated.',
    },
    {
      kind: 'p',
      text: 'An AI SDR is an AI agent that answers and writes to buyers for a sales team. Where one handles the first reply, a mystery shop checks what it says as well as how fast it says it. That covers the price it quotes, the customers it claims, the discounts it offers and whether it hands the buyer to a person when asked.',
    },
    {
      kind: 'list',
      items: [
        '[Sales agent check](/recipes/sales-agent-check) asks a company’s AI sales agent what it charges every day and checks each answer against the price list.',
        '[Outbound agent check](/recipes/outbound-agent-check) puts test prospects on an AI SDR’s lists, replies as prospects do and checks every email and call it sends them against the team’s rules.',
      ],
    },

    { kind: 'h2', id: 'ai-customers', text: 'How AI customers run B2B mystery shops' },
    {
      kind: 'p',
      text: '**' + AI_CUSTOMER.definition + '** For a sales team, AI customers are buyers of its own company. Each one asks for the demo, opens the chat or calls the sales line at the hours the team picks, and keeps every reply with its time and channel.',
    },
    {
      kind: 'p',
      text: '[Lead leaks](/recipes/lead-leaks) sends a test lead through a company’s own form, chat and phone, and times every first reply on each channel. It shows who in the CRM picked each lead up, names each lead nobody answered and drafts the routing fix in the CRM the team connects, live after the team’s OK. Callbacks are logged as replies, and automatic replies are logged apart.',
    },
    {
      kind: 'p',
      text: 'Every AI customer says it’s an AI when it talks to a person. It never uses fake payment details and never gets round a CAPTCHA or a bot block, as [what every AI customer will and won’t do](/agents) sets out. Whether it also says it’s a test from your company is your company’s setting. Where a form puts a CAPTCHA or a bot check in front of a step, the report names the step it couldn’t test.',
    },
    {
      kind: 'p',
      text: 'The team reads the result at 4, 12, 24 or 48 hours, or keeps the test buyer waiting for as long as its sales cycle runs. A follow up counts as missing only once the window the team chose has closed.',
    },
    {
      kind: 'p',
      text: 'Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026.',
    },
    {
      kind: 'cta',
      text: 'Name your company’s demo form, chat and sales line, and AI customers become its buyers. They ask for the demo, wait for the reply and keep every email, chat and call log exactly as it arrived, with its time.',
      to: '/',
      label: 'Meet your first AI customers',
    },

    { kind: 'h2', id: 'compared', text: 'Ways to mystery shop a B2B sales funnel, compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 1 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to mystery shop a B2B sales funnel, from each provider’s own pages on 1 November 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing: CRM reports', 'Times each assigned lead to its owner’s first touch', 'In the CRM plan', 'Starts once a lead has an owner', 'Coaching reps on response time'],
        [
          'By hand: a colleague, a new address and a sheet',
          'A person’s judgement on every reply',
          'Staff hours',
          'Reps may know the tester, and hours grow with every path',
          'A spot check after a change',
        ],
        [
          'Human mystery shopping: [Service Monitor](' + SERVICE_MONITOR + ')',
          'Recorded mystery calls and emails on enquiries, quotes and follow up',
          'Not listed',
          'Each contact takes an assessor’s time',
          'Recorded sales calls to coach from',
        ],
        [
          'AI test calls: [PressTwo SpotCheck](' + PRESSTWO + ')',
          'AI mystery shoppers call reps and score each call on the team’s checklist',
          '$149 a month for 100 test calls\n3 days free',
          'Phone calls only',
          'Coaching phone reps',
        ],
        [
          'A free response test: [Qualified](' + QUALIFIED + ')',
          'Tests how fast the sales team responds to an inbound enquiry',
          'Free',
          'The initial response time only',
          'A first response time number',
        ],
        [
          'Published studies: [Clay](' + CLAY + '), [RevenueHero](' + REVENUEHERO + ')',
          'Benchmarks from 6,346 and 1,000 test requests',
          'Free to read',
          'Averages across other companies, on one date',
          'Setting a target',
        ],
        [
          'Obsession (ours): [Lead leaks](/recipes/lead-leaks), [Mystery shopper](/recipes/mystery-shopper), [Sales agent check](/recipes/sales-agent-check), [Outbound agent check](/recipes/outbound-agent-check)',
          'AI customers ask for the demo, use the chat and call the sales line as buyers, and keep every reply with its time',
          'Running now\nCredit-based plans, like Claude’s',
          'Real leads and their deals stay in the team’s CRM',
          'What a buyer meets on every way in, every day',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If your company needs to know what a buyer meets on every form, chat and sales line, every day and after every change, use Obsession. For coaching phone reps at a listed monthly price, PressTwo SpotCheck fits, and Qualified’s free test gives a single first response time. A human programme such as Service Monitor’s suits recorded calls a manager can coach from, and a request sent by hand covers a spot check after a change.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about B2B mystery shopping' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is B2B mystery shopping?',
          a: 'B2B mystery shopping is a test of a company’s own sales funnel. A test buyer asks for a demo, a quote or a trial and records what the sales team does. It covers who replies and how fast, the questions they ask, the follow ups and whether the quote matches the pricing page.',
        },
        {
          q: 'What does a B2B mystery shopper do?',
          a: 'A B2B mystery shopper fills in the demo or contact form, opens the site chat or calls the sales line with a real question. It logs every reply with its time and channel. Each step is scored against pass marks the team wrote first, such as a reply from a person within the team’s target.',
        },
        {
          q: 'What is SaaS mystery shopping?',
          a: 'SaaS mystery shopping is B2B mystery shopping for software sold by subscription. Besides the demo request, the test buyer starts the free trial. It records the sign-up, each onboarding email by trial day, the first contact from sales and the reminder before the trial ends.',
        },
        {
          q: 'Can you mystery shop a competitor’s sales team?',
          a: 'Not with a test lead. A test lead sent to a competitor’s sales team spends their staff’s time on a lead that isn’t real. The Market Research Society also asks that a mystery shop of a competitor not be seen to waste its resources. Published tests such as Clay’s and RevenueHero’s show how companies reply, and a team’s own funnel is the one it can fix.',
        },
        {
          q: 'Should the sales team know about mystery shopping?',
          a: 'Yes, in general terms. The Market Research Society’s guideline, which is not binding, says a company’s own staff must have been told their service may be checked from time to time, without being told when. They must be told in advance if any recording will be used. Marking test leads in the CRM keeps them out of attribution and quota.',
        },
        {
          q: 'How often should a B2B company mystery shop its funnel?',
          a: 'Test each way in once every working day at set times, with one evening and one weekend test a week. Test again after every routing, CRM, form or pricing change. A break waits on average half the gap between tests to be found: about 15 days with a monthly check and half a day with a daily one.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the figures',
      text: 'Clay’s figures come from its test of 6,346 demo and contact forms, published on 22 September 2026. RevenueHero’s come from demo requests to 1,000 B2B websites, published on 20 March 2024. Clay sent the same made-up buyer, the founder of an AI startup, to every company, so some non-replies may have been decisions that he wasn’t a fit. RevenueHero found that 30.86% of the companies that never replied used an enrichment tool, which looks a company up from its email domain and may have screened the request out. The contract values in the request sum are example inputs. Larkfield is an invented company.',
    },
  ],

  sources: [
    { title: 'We asked 6,346 companies for a demo. Most never wrote back.', publisher: 'Clay', url: CLAY, date: '2026-09-22' },
    { title: 'We Tested Lead Response Times Of 1000 B2B Sales Teams. Here Are The Results.', publisher: 'RevenueHero', url: REVENUEHERO, date: '2024-03-20' },
    { title: 'MRS Guideline: Conducting Mystery Shopping', publisher: 'Market Research Society', url: MRS, date: '2020-03' },
    { title: 'Trade and B2B customer experience', publisher: 'Service Monitor', url: SERVICE_MONITOR },
    { title: 'SpotCheck', publisher: 'PressTwo', url: PRESSTWO },
    { title: 'Test My Response Time', publisher: 'Qualified', url: QUALIFIED },
  ],

  related: ['recipe:lead-leaks', 'recipe:sales-agent-check', 'recipe:outbound-agent-check', 'ai-customers-for-b2b-sales-teams'],
}
