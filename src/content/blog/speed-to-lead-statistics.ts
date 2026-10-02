import type { BlogPost } from './types'

/* Post 4 (docs/SEARCH.md section 5): a source-graded ledger of every speed to lead number in circulation, the 2026
   measurements read with their own caveats, and the own-funnel test (labelled, the owner's OK, never another company's
   staff). Hub: Speed to lead. Thought leadership: studies are named as sources only, no product is reviewed.
   Every figure was read at its source between 1 and 3 October 2026. The 2007 study is cited from its 2013 archived copy
   because its original address now serves a rewritten page. No design partner run is included (no written consent
   yet); the worked example and both screens are examples and say so. Marklinea's results (due 1 Oct 2026) were not up
   when checked on 3 Oct 2026: re-check before publishing and add them to the ledger if they are. */

const HBR = 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads'
const LRM = 'https://web.archive.org/web/2013/http://www.leadresponsemanagement.org/lrm_study'
const CLAY = 'https://www.clay.com/blog/claygent-experiment-speed-to-lead'
const CLAY_BENCH = 'https://makes.clay.com/benchmarks/speed-to-lead'
const RH = 'https://www.revenuehero.io/blog/b2b-lead-response-times'
const DRIFT = 'https://www.salesloft.com/resources/blog/lead-response-survey'
const WORKATO = 'https://www.workato.com/the-connector/lead-response-time-study/'
const EXPERTISE = 'https://www.expertise.ai/stats/speed-to-lead-statistics'
const EA = 'https://emailanalytics.com/lead-response-time/'
const HUBSPOT = 'https://cdn2.hubspot.net/hubfs/53/assets/hubspot.com/research/reports/HubSpot%20Live%20Chat%20Go-to-Market.pdf'
const OPTIFAI = 'https://optif.ai/learn/questions/lead-response-time-benchmark/'
const VM = 'https://visionary-marketing.co.uk/blog/lead-response-time-statistics-2026'
const TENBOUND = 'https://tenbound.com/issue-01/the-42-hour-problem/'
const ARTEMIS = 'https://artemisgtm.ai/resources/research/speed-to-lead-benchmark-2026/'
const MB = 'https://marketbetter.ai/blog/speed-to-lead-guide/'
const SAASTR =
  'https://www.saastr.com/our-1-25-humans-20-ai-agents-closed-140-of-what-our-all-human-sales-team-did-last-year-but-im-not-sure-thats-the-real-story/'
const MARKLINEA = 'https://marklinea.com/blog/inbound-response-benchmark'
const GARTNER =
  'https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience'

export const post: BlogPost = {
  slug: 'speed-to-lead-statistics',
  title: 'Speed to lead statistics: which numbers hold up in 2026',
  dek: 'The 5 minute rule came from phone calls at 6 companies in 2007, and it never measured a sale. Every number in circulation, traced to its source and graded, plus a test you can run on your own leads this week.',
  metaTitle: 'Speed to lead statistics: which numbers hold up in 2026',
  description:
    'The 5 minute rule came from a 2007 InsideSales study, not Harvard. Every speed to lead statistic graded by source, plus how to time your own funnel.',
  answer:
    'The best known speed to lead statistics come from a 2007 InsideSales.com study analysed by James Oldroyd, not from Harvard Business Review: leads called within 5 minutes were 100 times likelier to be reached than leads called after 30. Harvard Business Review’s 2011 audit of 2,241 companies found an average first reply of 42 hours among those that replied, and in September 2026 Clay reported that 68% of 6,346 companies never replied to a demo or contact form.',
  primaryKeyword: 'speed to lead statistics',
  keywords: [
    'speed to lead harvard study',
    'lead response time study',
    'lead response time harvard business review',
    'lead response time statistics',
    'speed to lead benchmark 2026',
    'what is speed to lead',
    '5 minute rule lead response',
    'how to test lead response time',
    'speed to lead data',
  ],
  category: 'Speed to lead',
  published: '2026-10-03',
  updated: '2026-10-03',
  readingMinutes: 12,
  author: { name: 'Obsession', role: 'Research' },
  hero: {},

  blocks: [
    {
      kind: 'p',
      text: `The best known speed to lead statistics come from a 2007 InsideSales.com study analysed by James Oldroyd, not from Harvard Business Review: leads called within 5 minutes were 100 times likelier to be reached than leads called after 30. [Harvard Business Review’s 2011 audit](${HBR}) of 2,241 companies found an average first reply of 42 hours among those that replied, and in September 2026 [Clay reported](${CLAY}) that 68% of 6,346 companies never replied to a demo or contact form.`,
    },
    {
      kind: 'p',
      text: 'Those 3 numbers are real. Much of what gets said around them isn’t. The 100 times measured whether a phone call connected, not whether anyone bought. The 42 hours leaves out every company that never replied. And a line on plenty of vendor pages, that 78% of buyers go with whoever replies first, has no study behind it that anyone has found.',
    },

    { kind: 'h2', id: 'what-is-speed-to-lead', text: 'What is speed to lead?' },
    {
      kind: 'p',
      text: 'Speed to lead is the time between a buyer asking to talk to you and your first reply. The ask might be a form, a chat, a call, a text or an email. The reply might be an automatic email, a bot, a salesperson’s call or a real answer to the question. Each pairing is a different clock, and the studies people quote rarely use the same one.',
    },
    {
      kind: 'p',
      text: 'So before a number goes in your deck, check what it timed, whose leads it counted and which question it answers.',
    },
    {
      kind: 'list',
      items: [
        `**What it timed.** [RevenueHero’s 2024 test](${RH}) counted automatic replies, so 172 companies “replied” within 2 minutes. [Marklinea’s 2026 test](${MARKLINEA}) won’t let an automatic reply stop its clock at all.`,
        `**Whose leads.** A test lead sent from outside sees everything, silence included. CRM records show only the leads someone logged. That’s how [one 2026 CRM study](${VM}) reports a median reply of 1 hour 42 minutes, while the test lead audits of 2024 and 2026 found about two thirds of companies silent.`,
        '**Which question.** How fast companies reply and whether replying fast changes the outcome need different evidence. Most of the folklore answers one with the other.',
      ],
    },

    { kind: 'h2', id: 'five-minute-rule', text: 'Where does the 5 minute rule come from?' },
    {
      kind: 'p',
      text: `From the [Lead Response Management Study](${LRM}), presented in 2007 by InsideSales.com’s chief executive David Elkington and James Oldroyd, then a faculty fellow at MIT. People call it the MIT study. The data came from InsideSales.com’s own system: 3 years of call records from 6 companies, over 15,000 web leads and over 100,000 call attempts.`,
    },
    {
      kind: 'stat',
      value: '100x',
      label: 'higher odds of reaching a web lead by phone when the first call came within 5 minutes rather than 30. The odds of qualifying it were 21 times higher.',
      source: 'Lead Response Management Study, InsideSales.com and James Oldroyd, 2007 (archived copy)',
      href: LRM,
    },
    {
      kind: 'p',
      text: 'Qualifying meant the lead entered the sales process. From 5 to 10 minutes alone, those odds fell 4 times, and after 20 hours every extra dial made contact less likely.',
    },
    {
      kind: 'p',
      text: '2 things get dropped when it’s quoted. The study says it did not address close ratios, so it tells you nothing about sales. And it timed phone calls only, for a company whose lead response software was used heavily by mortgage and insurance firms. Its old web address now serves a rewritten copy beside links to casino reviews; the 2013 archive keeps the original.',
    },
    {
      kind: 'p',
      text: 'Use it to argue for calling web leads within minutes. It never tested whether a fast email reply sells more.',
    },

    { kind: 'h2', id: 'harvard-business-review-study', text: 'What did the Harvard Business Review study actually find?' },
    {
      kind: 'p',
      text: `[The Short Life of Online Sales Leads](${HBR}) ran in the March 2011 issue, by Oldroyd, Kristina McElheran and Elkington. It reports 2 pieces of work, and neither mentions 5 minutes.`,
    },
    {
      kind: 'p',
      text: 'The first is an audit: a web test lead sent to 2,241 US companies. 37% replied within an hour, 16% within 1 to 24 hours, 24% took longer and 23% never replied.',
    },
    {
      kind: 'stat',
      value: '42 hours',
      label: 'average first reply among the audited US companies that answered a web test lead within 30 days. The 23% of 2,241 that never answered aren’t in it.',
      source: 'Harvard Business Review, The Short Life of Online Sales Leads, March 2011',
      href: HBR,
    },
    {
      kind: 'p',
      text: 'The second used 1.25 million leads at 42 companies, 13 of them selling to businesses. Firms that tried to reach a lead within an hour were nearly 7 times as likely to qualify it as firms that tried an hour later, and over 60 times as likely as firms that waited a day or more. Qualifying meant a meaningful conversation with a key decision maker.',
    },
    {
      kind: 'p',
      text: 'The authors blamed the system more than the reps: leads pulled from the CRM once a day, salespeople busy with their own prospects, and leads shared out by territory and by rules meant to be fair to reps. Elkington ran InsideSales.com at the time, which the article states.',
    },
    {
      kind: 'p',
      text: `Then the 2 studies blur. [Workato’s lead response study](${WORKATO}), dated March 2026, credits Harvard Business Review with the 2007 sample of 15,000 leads and 100,000 call attempts, and turns the 2007 study’s 4 times drop into “400%”.`,
    },

    { kind: 'h2', id: 'statistics-with-no-source', text: 'Which speed to lead statistics have no source?' },
    {
      kind: 'p',
      text: `The 2 most repeated. “78% of customers buy from the company that responds first” is usually credited to a Lead Connect survey. [Expertise.ai’s July 2026 audit](${EXPERTISE}) found no report, sample or method behind it, and our own search found only pages citing each other. [Some 2026 vendor guides](${MB}) now credit it to Oldroyd’s study, which never looked at sales.`,
    },
    {
      kind: 'p',
      text: `“35 to 50% of sales go to the vendor that responds first” is pinned on InsideSales. [EmailAnalytics](${EA}), whose guide once quoted it without comment, now says it has no traceable primary source. For a business case, use the 7 times from Harvard Business Review. It’s smaller, and somebody measured it.`,
    },
    {
      kind: 'table',
      caption: 'Every widely quoted speed to lead number, traced to its source and graded. Checked 1 to 3 October 2026.',
      cols: ['The number', 'Source', 'What it measured', 'Grade'],
      rows: [
        [
          '100x likelier to reach a lead at 5 minutes than at 30',
          `[Lead Response Management Study](${LRM}), 2007`,
          'Phone calls connecting; 6 companies, 15,000+ leads',
          'Holds up, for phone contact',
        ],
        [
          '21x likelier to qualify at 5 minutes than at 30',
          'Same study',
          'Leads entering the sales process; no close rates',
          'Holds up, for qualification',
        ],
        [
          'Odds drop 400% from 5 to 10 minutes',
          `Same study, [often credited to HBR](${WORKATO})`,
          'Qualification odds fell 4 times',
          'Holds up as 4 times; the 400% and the HBR credit are wrong',
        ],
        [
          '42 hour average reply; 23% never reply',
          `[Harvard Business Review](${HBR}), 2011`,
          '1 test lead each to 2,241 US companies; average of those replying within 30 days',
          'Holds up, but the average leaves out the silent 23%',
        ],
        [
          '7x likelier to qualify within the hour, 60x against a day',
          'Harvard Business Review, 2011',
          '1.25 million leads at 42 companies',
          'Holds up; a ratio with no baseline',
        ],
        [
          'Only 7% reply within 5 minutes',
          `[Drift](${DRIFT}), 2017`,
          'Test leads to 433 B2B SaaS companies',
          'Holds up; 9 years old',
        ],
        [
          '78% buy from the company that replies first',
          'Credited to a Lead Connect survey, or to Oldroyd',
          'No report, sample or method found',
          'No traceable source',
        ],
        [
          '35 to 50% of sales go to the first responder',
          'Credited to InsideSales',
          'No published sample found',
          'No traceable source',
        ],
        [
          '82% expect an immediate reply',
          `[HubSpot research](${HUBSPOT}), 2018`,
          'Share rating an immediate reply important; immediate meant 10 minutes or less',
          'Directional: what buyers say, not what they do',
        ],
        [
          'Average reply takes 47 hours',
          `[Optifai](${OPTIFAI}), 2025 to 2026`,
          'CRM records at 939 companies',
          'Directional: vendor data, no dataset published',
        ],
        [
          '21x qualification lift at 5 minutes, 2026 data',
          `[Visionary Marketing](${VM}), 2026`,
          'CRM records for 28,400 leads at 184 client accounts',
          'Directional: the page sets its 21x against 4 different time windows',
        ],
        [
          'Median reply is 42 hours, 2026 benchmark',
          `A vendor benchmark, [analysed by Tenbound](${TENBOUND})`,
          '253,817 submissions; sample given as both 1,247 and 127 companies',
          `Gone: [the page now](${ARTEMIS}) summarises older studies instead`,
        ],
        [
          '68% of companies never reply',
          `[Clay](${CLAY}), 2026`,
          'Email and phone replies to 6,346 forms from 1 identity',
          'Holds up, for what it measured',
        ],
        [
          '63.5% never reply; 1 day 5 hours on average',
          `[RevenueHero](${RH}), 2024`,
          'Demo requests to 1,000 B2B SaaS companies, automatic replies counted',
          'Holds up, for what it measured',
        ],
      ],
    },

    { kind: 'h2', id: 'measurements-2026', text: 'What do the 2026 measurements show?' },
    {
      kind: 'p',
      text: 'The largest test lead audit is Clay’s. Its agents filled in 6,346 B2B demo and contact forms, sent no follow up, and timed what came back. The results went up on 22 September 2026.',
    },
    {
      kind: 'stat',
      value: '68%',
      label: 'of 6,346 companies never replied by email or phone to a demo or contact form filled in by Clay’s agents. About 7% of forms got a reply from a salesperson.',
      source: 'Clay, We asked 6,346 companies for a demo, 22 September 2026',
      href: CLAY,
    },
    {
      kind: 'list',
      items: [
        '2,013 forms (32%) got an email reply, and 64% of those replies were automatic.',
        '96% of companies never phoned. The calls that did come took 34.5 hours on average.',
        '445 replies came from a salesperson trying to start a sales conversation.',
        'Average speed to lead was 15 to 24 hours, depending on the cut. 5% of replies landed within 5 minutes.',
      ],
    },
    {
      kind: 'p',
      text: `Read it with Clay’s caveats. Every form carried 1 identity: the founder of the startup that built the browser agent, which [Clay’s benchmark page](${CLAY_BENCH}) calls synthetic. Some of the 68% may have ruled him out, correctly. The post doesn’t say the forms told companies an agent had filled them in, and more than 50 companies looked him up and called his real number. It also timed email and phone only.`,
    },
    {
      kind: 'p',
      text: 'The pattern holds anyway. Replies were a template within seconds or a personal note a day later, and of 1,281 automatic replies, 4 were fully personalised. Clay’s own conclusion is that coverage is a bigger problem than speed.',
    },
    {
      kind: 'p',
      text: `The nearest comparison is [RevenueHero’s March 2024 test](${RH}) of 1,000 B2B SaaS companies: 365 replied, at an average of 1 day 5 hours 17 minutes, automatic replies included. Only 113 had any way to book a meeting on the spot.`,
    },
    {
      kind: 'p',
      text: `2 studies from 2026 read CRM records instead. [Optifai](${OPTIFAI}) reports a 47 hour average across 939 companies, with no dataset published. [Visionary Marketing](${VM}) reports a median of 1 hour 42 minutes across 28,400 leads at its clients. Both see only the leads that reached a CRM.`,
    },
    {
      kind: 'p',
      text: `SaaStr has the clearest before and after. [Jason Lemkin wrote in April 2026](${SAASTR}) that his human team answered fewer than 40% of inbound leads, often days later, and that AI agents now answer all of them, instantly.`,
    },
    {
      kind: 'quote',
      text: 'That’s not intelligence. That’s coverage.',
      cite: 'Jason Lemkin, SaaStr, April 2026',
      href: SAASTR,
    },
    {
      kind: 'p',
      text: 'He’s open that other things changed too: a fast growing market, and every qualified lead going to his best closers.',
    },
    {
      kind: 'p',
      text: `The one to watch is [Marklinea’s test](${MARKLINEA}) of 100 B2B software companies, its method published before any data, which times both the first human reply and the first real answer to a specific question. Results were due on 1 October 2026. When we checked on 3 October, they weren’t up.`,
    },

    {
      kind: 'h2',
      id: 'time-your-own-lead-response',
      text: 'How do you time your own lead response across form, chat, phone and text?',
    },
    {
      kind: 'p',
      text: 'Send a labelled test lead through every channel a buyer can use, at the hours buyers actually write, and time each reply against a target you set first. Clay ends its study with the same advice: fill in your own company’s form and see what happens.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Get the owner’s OK in writing.** Your head of sales, your founder or, for an [agency running lead generation](/agencies), the client. Tell the team tests will arrive, not when.',
        '**Label every test** with a name like “Test lead, RevOps” and an address you control, such as test-lead@yourcompany.example. If an AI agent sends it, it says so.',
        '**Cover every way in:** each form, site chat, every phone line, your texting number and your published email address, the old contact form included.',
        '**Ask 1 specific question** in your buyers’ words, one that takes 2 sentences to answer, so you can time the answer as well as the reply.',
        '**Book 3 slots each working day for a week,** at 09:00, 13:00 and 20:00, plus 1 on Saturday morning. That’s 16 tests, rotated so each channel meets each weekday slot. [Founders who answer leads themselves](/founders) should watch 20:00.',
        '**Set targets before the first test,** or you’ll set them where you landed. When a person replies, tell them it’s the test, thank them and book nothing. Fix the biggest leak, then rerun that slot.',
      ],
    },
    { kind: 'p', text: 'Log 1 row per test, with these columns:' },
    {
      kind: 'list',
      items: [
        'Channel, day and time sent',
        'First touch: anything at all, automatic replies included',
        'First human reply, and who sent it',
        'First real answer to the question',
        'In the CRM with an owner, and after how long',
        'Target met, with a link to the screenshot or call recording',
      ],
    },
    {
      kind: 'p',
      text: 'A labelled test has 1 limit: once a rep opens it, they know. What it measures well is how long your system takes to put a lead in front of a person, which is where Harvard Business Review’s authors found the time going.',
    },
    {
      kind: 'p',
      text: 'Pair it with your CRM: for your last 20 inbound leads, note when each arrived, when a person replied and when the question was answered. Calls that rang out and chats that never became leads only show up in the test.',
    },
    {
      kind: 'p',
      text: 'An invented example: a 30 person software company tests its form, chat and sales line at 09:00. Chat answers in 38 seconds. The phone rings out. The form waits 4 hours 12 minutes with no owner in the CRM. A routing rule now sends form and phone leads to the next free rep within 1 minute, and the 17:00 retest gets a reply in 3 minutes 40 seconds.',
    },
    {
      kind: 'screen',
      screen: 'inbound',
      workspace: 'company',
      caption:
        'A labelled test lead at 09:00, 13:00 and 17:00 against a 5 minute target, with the routing fix approved and the 17:00 retest timed.',
    },
    {
      kind: 'p',
      text: 'The same test works on a free trial, a booking or a checkout, which is [mystery shopping your own business](/recipes/mystery-shopper). We also compared the [AI mystery shopping tools](/blog/best-ai-mystery-shopping-tools) that run tests like these.',
    },
    {
      kind: 'cta',
      text: 'Our Speed to lead recipe runs this test for you: a labelled test lead, declared as AI, with its own inbox and phone number, on your own form, chat and phone, or a client’s with their OK. Every reply is timed and signed.',
      to: '/recipes/speed-to-lead',
      label: 'See the Speed to lead recipe',
    },

    { kind: 'h2', id: 'good-lead-response-time', text: 'What is a good lead response time in 2026?' },
    {
      kind: 'p',
      text: 'The evidence supports minutes for a phone call and an hour at most for a qualified conversation. Past that, any target is a judgement call. Ours, for a demo or pricing request:',
    },
    {
      kind: 'list',
      items: [
        '**Chat:** an answer to the question in under a minute, from a bot or a person.',
        '**Phone:** answered live in working hours, and a missed call returned within 5 minutes.',
        '**Form, email and text in working hours:** a human reply within 5 minutes.',
        '**Out of hours:** an instant reply that answers what it can and says when a person will follow up, then a human reply by 09:30 the next working day.',
        '**Leads you rule out:** a reply anyway, with a next step such as a recorded demo or the pricing page.',
      ],
    },
    {
      kind: 'p',
      text: 'Then track 3 numbers, in this order: the share of leads that never get a reply, the 90th percentile and the median. In the test lead audits, companies that never replied went from 23% in 2011 to 63.5% in 2024 and 68% in 2026. Samples and methods differ, so read that as a warning rather than a trend line.',
    },
    {
      kind: 'screen',
      screen: 'pilot',
      workspace: 'company',
      caption:
        'A 30 day pilot on an account’s own inbound, run with their OK: answered within an hour goes from 6 to 17 of 20 questions, the median reply from 9 h 40 m to 38 m, wrong answers from 5 to 1.',
    },
    {
      kind: 'p',
      text: 'For a client report or a [sales pilot](/sales), add wrong answers to those numbers. A fast reply that gets the price wrong isn’t progress.',
    },

    { kind: 'h2', id: 'speed-to-lead-in-b2b', text: 'Does speed to lead matter in B2B?' },
    {
      kind: 'p',
      text: `Yes, though the evidence is thinner than the folklore. Harvard Business Review’s 1.25 million leads included 13 B2B companies, and every test lead audit here since 2017 is B2B. The buyer has changed: [Gartner’s survey of 646 B2B buyers](${GARTNER}), published in March 2026, found 67% prefer to buy without a sales rep, and 45% had used AI in a recent purchase. A buyer who’d rather skip the rep still wants an answer, so time the first useful answer as well as the first reply.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is the Harvard speed to lead study real?',
          a: 'Yes. The Short Life of Online Sales Leads ran in Harvard Business Review in March 2011 and is the source of the 42 hours and the 7 times. It never mentions 5 minutes: the 5 minute and 100 times figures come from a separate 2007 InsideSales.com study.',
        },
        {
          q: 'Should an AI agent answer new leads?',
          a: 'For the first reply, often yes, if it says it’s AI and can actually answer the question. Coverage is the strongest case: SaaStr went from answering fewer than 40% of inbound leads to all of them. The weak spot is the template. In Clay’s study, 4 of 1,281 automatic replies were fully personalised. Let the agent answer and book the meeting, and send your best fit leads to a person within the hour.',
        },
        {
          q: 'Can I test a competitor’s response time?',
          a: 'We don’t, and we’d advise against it. A test lead at another company spends their staff’s time on a buyer who doesn’t exist: in Clay’s study, 445 salespeople tried to start a sales conversation and more than 50 companies rang a real founder’s own number. Read what’s public instead, such as their stated reply times and what their chat bot says, and test your own funnel for a number you can change. [Is it legal to mystery shop your competitors?](/blog/is-it-legal-to-mystery-shop-competitors) covers where the lines sit.',
        },
        {
          q: 'Does an automatic reply count as a response?',
          a: 'Count it on its own clock. RevenueHero’s 2024 test included automatic replies in its average; Marklinea’s 2026 test doesn’t let them stop the clock. An instant reply that answers the buyer’s question is worth having. One that only says you’ll be in touch starts the wait.',
        },
        {
          q: 'How should we handle leads that arrive after hours?',
          a: 'Test them first, because the classic studies say little about evenings: the 2007 study left the hours before 8am and after 6pm out of its time of day analysis. Send test leads at 20:00 and on a Saturday, then give out of hours leads an instant reply that answers what it can and says when a person will follow up.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'Every figure here was read at its source between 1 and 3 October 2026',
      text: 'We read each study on its own page, or an archived copy where the original has gone, and graded it on what it timed and whose leads it counted. Vendor data is marked as such. Obsession publishes this post and makes a recipe that times your own leads; it isn’t in the ledger. Marklinea’s results go in when they’re out.',
    },
  ],

  sources: [
    { title: 'The Short Life of Online Sales Leads', publisher: 'Harvard Business Review', url: HBR, date: '2011-03-01' },
    {
      title: 'The Lead Response Management Study (2007), archived copy',
      publisher: 'InsideSales.com and James Oldroyd, via the Internet Archive',
      url: LRM,
    },
    { title: 'We asked 6,346 companies for a demo. Most never wrote back.', publisher: 'Clay', url: CLAY, date: '2026-09-22' },
    { title: 'The 2026 Speed to Lead Benchmark', publisher: 'Clay', url: CLAY_BENCH },
    { title: 'We Tested Lead Response Times Of 1000 B2B Sales Teams', publisher: 'RevenueHero', url: RH, date: '2024-03-20' },
    { title: 'Is Your Lead Management Leaking? Testing 433 Companies', publisher: 'Drift (now Salesloft)', url: DRIFT, date: '2017-02-27' },
    { title: 'B2B Lead Response Times: What We Learned from 114 Companies', publisher: 'Workato', url: WORKATO, date: '2026-03-19' },
    { title: 'Speed-to-Lead Statistics, With Folklore Debunked', publisher: 'Expertise AI', url: EXPERTISE, date: '2026-07-06' },
    { title: 'Lead Response Time: Benchmarks, Sources and How to Measure It', publisher: 'EmailAnalytics', url: EA, date: '2026-09-08' },
    { title: 'How Live Chat Exposes a Fatal Flaw in Your Go-to-Market', publisher: 'HubSpot Research', url: HUBSPOT },
    { title: 'Lead Response Time Benchmarks (939 Companies)', publisher: 'Optifai', url: OPTIFAI, date: '2026-04-20' },
    { title: 'Lead Response Time Statistics 2026', publisher: 'Visionary Marketing', url: VM, date: '2026-05-31' },
    { title: 'The 42-hour problem', publisher: 'Tenbound', url: TENBOUND, date: '2026-06-26' },
    { title: '2026 Speed to Lead Benchmark Study', publisher: 'Artemis GTM', url: ARTEMIS, date: '2026-09-30' },
    { title: 'Speed to Lead in 2026', publisher: 'MarketBetter', url: MB, date: '2026-02-16' },
    {
      title: 'Our 1.25 Humans + 20 AI Agents Closed 140% of What Our All-Human Sales Team Did Last Year',
      publisher: 'SaaStr (Jason Lemkin)',
      url: SAASTR,
      date: '2026-04-15',
    },
    { title: 'The Inbound Response Benchmark', publisher: 'Marklinea', url: MARKLINEA, date: '2026-08-27' },
    {
      title: 'Gartner Sales Survey Finds 67% of B2B Buyers Prefer a Rep-Free Experience',
      publisher: 'Gartner',
      url: GARTNER,
      date: '2026-03-09',
    },
  ],

  related: [
    'is-it-legal-to-mystery-shop-competitors',
    'best-ai-mystery-shopping-tools',
    'recipe:speed-to-lead',
    'recipe:mystery-shopper',
    '/sales',
    '/founders',
    '/agencies',
  ],
}
