import type { BlogPost } from './types'
import { AI_CUSTOMER, CUSTOMER_SIDE_OBSERVABILITY } from '../glossary'

/* The why series, Spec D (24 Oct 2026): why CX teams need AI customers. It owns "ai customer service quality assurance"
   (primary) and "ai agent qa", "ai chatbot testing", "how to evaluate an ai chatbot", "ai voice agent testing" and "ai
   agent monitoring" (Google autocomplete, US, 24 Oct 2026). "chatbot giving wrong answers" and "test my chatbot" are left
   to test-store-chatbot-returns-policy, which this links. Readers: heads of support and CX, CX operations and QA leads at
   companies with a chat, email or voice AI agent in front of customers (ecommerce, SaaS, services).
   The argument: a company answers for its AI agent as for an employee (Moffatt, the CMA). The agent's answers change on
   3 schedules the team only partly controls (help article edits, prompt edits, vendor releases), while QA reviews on a
   4th, after customers were answered. Inside QA now scores every conversation and is good at it; a customer-side check
   asks the same questions every day and within the hour of each update, on every channel, and keeps the transcript.
   The sum: customers who ask a day × cost per wrong answer × days it runs, worked once on an invented store with sourced
   rates (BLS median wage for customer service representatives, May 2025; Intercom's $0.99 per Fin outcome), low and
   high, at 3, 6 and 12 months, payback against a daily check by hand before any price.
   Opened on 24 Oct 2026 at each source's own page: Intercom pricing, the Intercom help articles on simulations and batch
   tests, the 2 Intercom Community threads (May 2025 and 29 Sep 2026), Zendesk's QA page and its Zendesk vs MaestroQA page
   (both served from zendesk.co.uk), evaluagent pricing, Cyara Botium, Hamming's home and pricing pages, Sierra's agent
   page, Salesforce's survey and personal agents piece, the BLS handbook, the CMA guidance, and the AI Act Service Desk
   (Articles 50, 99, 113). From the verified library (facts.json): HubSpot, Decagon, Cloudflare's verified bots docs,
   Moffatt v Air Canada (McCarthy Tétrault, Fox Business), Product.ai, T-ROC. Obsession is described from /verify and the 6
   AI agent recipes. MaestroQA now redirects to Rippit, whose page no longer describes QA, so it is left out.
   Left out on purpose: Gartner, ChatGPT agent, any PilotX figure, the site's 93% and 128 stores, vendor performance
   claims beyond HubSpot's dated one, US state chatbot laws (summaries conflict), the "signed" wording on /verify.
   larkfield.example and every figure in the 2 illustrations are invented. No dashes. */

const SF_SURVEY = 'https://www.salesforce.com/news/stories/ai-service-agents-improve-customer-satisfaction/'
const HUBSPOT_NEWS = 'https://www.hubspot.com/company-news/customer-agent-expansion'
const INTERCOM_PRICING = 'https://www.intercom.com/pricing'
const BLS = 'https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm'
const ZD_QA = 'https://www.zendesk.com/service/quality-assurance/'
const EVALUAGENT = 'https://www.evaluagent.com/pricing/'
const FIN_RESOLVED = 'https://community.intercom.com/fin-product-feedback-member-group-49/fin-s-flawed-resolution-assumption-10516'
const INTERCOM_TESTS = 'https://www.intercom.com/help/en/articles/14077180-simulations-vs-batch-tests-vs-previews'
const INTERCOM_SIM = 'https://intercom.help/intercom/en/articles/12599517-run-simulations-for-fin-procedures'
const FIN_QUESTION = 'https://community.intercom.com/reporting-21/independent-outcome-verification-15626'
const MCCARTHY = 'https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot'
const FOX = 'https://foxbusiness.com/lifestyle/air-canada-chatbot-gave-customer-wrong-info-airline-pay'
const AI_ACT_50 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'
const AI_ACT_113 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113'
const AI_ACT_99 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-99'
const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const SIERRA = 'https://sierra.ai/product/meet-your-agent'
const SIERRA_SIM = 'https://sierra.ai/blog/simulations-the-secret-behind-every-great-agent'
const DECAGON = 'https://decagon.ai/'
const CLOUDFLARE_BOTS = 'https://developers.cloudflare.com/bots/concepts/bot/verified-bots/'
const SF_PERSONAL = 'https://www.salesforce.com/news/stories/personal-agents-to-drive-more-contact-center-traffic/'
const PRODUCT_AI = 'https://dnyuz.com/2026/09/25/ai-cant-take-over-your-holiday-shopping-quite-yet-a-new-study-suggests/'
const HAMMING = 'https://hamming.ai/'
const CYARA = 'https://cyara.com/products/botium/'
const ZD_PRICE = 'https://www.zendesk.com/why-zendesk/zendesk-vs-maestroqa/'
const HAMMING_PRICING = 'https://hamming.ai/pricing'
const TROC = 'https://trocglobal.com/mystery-shopping-cost/'

const BOT_TEST = '/blog/test-store-chatbot-returns-policy'

export const post: BlogPost = {
  slug: 'ai-customers-for-cx-teams',
  title: 'Why CX teams need AI customers',
  dek: 'A company answers for its AI agent as it would for an employee, and the agent’s answers can change with every edit. What CX teams can’t see from inside the help desk, what a wrong answer costs in their own numbers, and how AI customers check every channel every day.',
  metaTitle: 'AI customer service quality assurance from the customer side',
  description:
    'AI customer service quality assurance for CX teams: what QA inside the help desk misses, what a wrong answer costs, and how AI customers check each day.',
  answer:
    'CX teams need AI customers because a company answers for its AI agent as it would for an employee, and the agent’s answers can change after any prompt edit, help article update or vendor release. AI customer service quality assurance inside the help desk scores conversations customers have already had. Obsession’s AI customers ask the agent what customers ask, on chat, email and phone, every day and within the hour of each update, and keep every transcript as proof.',
  primaryKeyword: 'ai customer service quality assurance',
  keywords: [
    'ai customer service quality assurance',
    'ai agent qa',
    'ai agent quality assurance',
    'ai chatbot testing',
    'how to evaluate an ai chatbot',
    'ai voice agent testing',
    'ai agent monitoring',
    'chatbot quality assurance',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-28',
  readingMinutes: 12,
  order: 15,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'runs',
      title: 'larkfield.example · 1 returns question, 3 days, 3 channels',
      prompt: 'I’m an AI customer. How long do I have to return an order?',
      runs: [
        { label: 'Mon 07:00 · chat', answer: '30 days from delivery.', verdict: { tone: 'ok', text: 'Matches policy' } },
        { label: 'Mon 19:10 · chat', answer: '60 days from delivery.', verdict: { tone: 'fail', text: 'Policy says 30' } },
        { label: 'Mon 19:11 · phone', answer: '30 days from delivery.', verdict: { tone: 'ok', text: 'Matches policy' } },
        { label: 'Tue 07:00 · chat', answer: '60 days from delivery.', verdict: { tone: 'fail', text: 'Still wrong' } },
        { label: 'Tue 07:00 · email', answer: '30 days from delivery.', verdict: { tone: 'ok', text: 'Matches policy' } },
        { label: 'Wed 07:00 · chat', answer: '30 days from delivery.', verdict: { tone: 'ok', text: 'Fixed Tue 10:20' } },
      ],
      foot: 'An example on an invented store. A help article edit at 18:40 on Monday changed the chat’s answer, and the 19:10 check caught it.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Heads of support and CX, CX operations leads and QA leads run AI agents that answer customers on chat, email and the phone. With AI customers, their team hears what those agents tell people from the customer’s side. [What AI customers are](/blog/ai-customers) defines the term, and [why AI customers matter](/blog/why-ai-customers-matter) makes the case for every company.',
    },

    { kind: 'h2', id: 'their-world', text: 'How CX teams run AI agents' },
    {
      kind: 'p',
      text: 'Most service teams now put an AI agent in front of customers. It writes or speaks answers from the company’s help articles, policies and order data, and hands harder cases to a person. Salesforce’s own 2026 survey of 3,075 service professionals found that [66% of customer service organisations use agentic AI](' +
        SF_SURVEY +
        '), up from 39% in 2025.',
    },
    {
      kind: 'stat',
      value: '66%',
      label: 'of customer service organisations use agentic AI, up from 39% in 2025',
      source: 'Salesforce survey of 3,075 service professionals, May 2026',
      href: SF_SURVEY,
    },
    {
      kind: 'p',
      text: 'The team is measured on what the agent resolves and what each answer costs. HubSpot reported in May 2025 that its own Customer Agent was [resolving over 50% of customer conversations autonomously](' +
        HUBSPOT_NEWS +
        '). [Intercom lists Fin](' +
        INTERCOM_PRICING +
        ') at $0.99 per outcome. A conversation a person handles costs that person’s time, and the [US median wage for customer service representatives](' +
        BLS +
        ') was $21.53 an hour in May 2025, so an 8 minute contact costs about $2.87 in wages before overheads.',
    },
    {
      kind: 'p',
      text: 'An AI agent’s answers can change on 3 schedules. The knowledge team edits help articles as prices, delivery dates and policies change. Someone on the CX team edits the agent’s instructions after a bad conversation. The vendor ships releases and model changes on its own timetable. Quality assurance runs on a fourth schedule. Reviewers score conversations after they happen and report a quality score each week or month, next to the resolution rate and customer satisfaction.',
    },
    {
      kind: 'p',
      text: 'The usual tools are a help desk such as Zendesk, Intercom, Gorgias, Salesforce or HubSpot, an AI agent from that vendor or a specialist such as Sierra or Decagon, a QA tool and a voice platform. Policies change fastest before peaks such as Black Friday, on Friday 27 November 2026.',
    },

    { kind: 'h2', id: 'blind-spots', text: 'What AI customer service quality assurance can’t see' },
    {
      kind: 'p',
      text: 'Quality assurance for AI agents has become strong inside the help desk. Zendesk says its [AutoQA scores the quality of all interactions, including AI agents and voice](' +
        ZD_QA +
        '), and evaluagent advertises [automated QA scoring on 100% of conversations](' +
        EVALUAGENT +
        '), with independent scoring on every AI agent conversation. Each score is of a conversation a customer has already had, which leaves 4 blind spots.',
    },
    {
      kind: 'list',
      items: [
        '**What the agent tells the next customer.** After a help article edit, every customer who asks gets the new answer until someone notices. A question asked as a customer within the hour of the edit finds the change before most customers meet it.',
        '**What happened after the conversation.** A transcript shows what the agent said. The refund, the confirmation email and the callback sit in other systems. Intercom counts a Fin outcome when a customer doesn’t ask for more help after Fin responds, and one Intercom customer [reported in May 2025](' +
          FIN_RESOLVED +
          ') that 9 of 16 conversations marked resolved by Fin were not solved by Fin.',
        '**Whether the last edit broke an answer.** Vendors give teams tests to run before publishing. Intercom offers [batch tests of up to 50 questions](' +
          INTERCOM_TESTS +
          '), and [its guidance on simulations](' +
          INTERCOM_SIM +
          ') says a simulation that newly fails after an edit signals a regression, an answer that passed before and fails now. Those tests cover the scenarios a team wrote, when someone runs them.',
        '**Whether every channel says the same.** Chat, email and phone agents can answer from different settings, so one question can get 2 answers on the same day.',
      ],
    },
    {
      kind: 'p',
      text: 'Teams that run these agents ask for that outside view in their own words. A Fin customer asked Intercom’s community in September 2026 how teams check reported resolutions against backend evidence where an outcome carries a refund, a cancellation or outcome-based billing.',
    },
    {
      kind: 'quote',
      text: '…does anyone use an independent third party to verify a sample of Fin-reported resolutions…',
      cite: 'A Fin customer on Intercom’s community, 29 September 2026',
      href: FIN_QUESTION,
    },

    { kind: 'h2', id: 'cost', text: 'What a wrong answer costs' },
    {
      kind: 'p',
      text: 'A wrong answer is a promise the company can be held to. A British Columbia tribunal held Air Canada responsible for what its website chatbot told a customer about a bereavement fare, [as McCarthy Tétrault reports](' +
        MCCARTHY +
        '), finding that information from a chatbot counts the same as information on a static page, and ordered the airline to pay [CA$812](' +
        FOX +
        ').',
    },
    {
      kind: 'p',
      text: 'The cost of one wrong answer left running is the customers who ask that question a day × the cost of each wrong answer × the days it runs, each from the team’s own reports.',
    },
    {
      kind: 'list',
      items: [
        '**Customers a day:** the agent’s topic report for the question, such as returns.',
        '**Cost per wrong answer:** the share who come back to a person × their minutes × the hourly cost, plus the share who rely on the answer × what honouring it costs, plus the outcome fee where the vendor bills one.',
        '**Days it runs:** from the change to the check that catches it, plus a day for the fix. A change waits on average half the gap between checks, so 15 days with a monthly review of a sample and half a day with a daily check. Where a QA tool already flags wrong policy answers daily, use its gap.',
      ],
    },
    {
      kind: 'art',
      caption: 'The sum worked once for an invented store, low case. The wage is the BLS median for customer service representatives and the outcome fee is Intercom’s listed price. Put your own figures in each row.',
      art: {
        kind: 'price',
        title: 'larkfield.example · 1 wrong returns answer, left running',
        rows: [
          { label: 'Customers who ask a day', value: '60', note: 'From the agent’s topic report' },
          { label: 'Come back to a person', value: '$0.29', note: '10% × 8 minutes at $21.53 an hour' },
          { label: 'Rely on the answer', value: '$1.20', note: '2% × a $60 refund honoured' },
          { label: 'Billed as an outcome', value: '$0.89', note: 'The other 90% × $0.99' },
          { label: 'Cost a day', value: '$143', note: '60 × $2.38' },
          { label: 'Days sooner with a daily check', value: '× 14.5', note: '16 days with a monthly review, 1.5 with a daily one' },
        ],
        total: { label: 'Each wrong answer caught sooner', value: '$2,074', note: 'High case: $3,886' },
      },
    },
    {
      kind: 'p',
      text: 'In the high case, 25% come back to a person and 5% rely on the answer, which makes $4.46 a wrong answer, $268 a day and $3,886 for each wrong answer caught 14.5 days sooner.',
    },
    {
      kind: 'p',
      text: 'Over a year, the number of changes that break an answer sets the total, so count last quarter’s. With 1 a month in the low case and 2 in the high case, catching each with a daily check instead of a monthly review is worth these sums.',
    },
    {
      kind: 'list',
      items: [
        '**By month 3:** $6,222 to $23,316.',
        '**By month 6:** $12,444 to $46,632.',
        '**By month 12:** $24,888 to $93,264.',
      ],
    },
    {
      kind: 'p',
      text: 'Set that payback against what the check costs. By hand, a daily run of 20 questions on 3 channels takes about 3 hours, or about $16,800 a year over 260 working days at the same wage, which the low case covers by month 9 and the high case in month 3. [What AI customers cost to run](/blog/ai-customers-at-scale) is worked out line by line from published prices.',
    },

    { kind: 'h2', id: 'workload', text: 'AI agent QA by hand, and as a routine' },
    {
      kind: 'p',
      text: 'Checking an AI agent by hand takes questions × channels × minutes × how often. A team that asks its 20 hardest questions on chat, email and phone, at about 3 minutes each to ask, wait and record, spends 3 hours on every run. Daily, that is 15 hours a working week, before the extra run each update needs.',
    },
    {
      kind: 'p',
      text: 'The hours grow with the agent. Each new channel, language, brand or region multiplies the questions. Email replies and promised confirmations take minutes to hours to arrive, updates can ship in the evening when nobody is checking, and a sheet of notes is hard to hand to a vendor or to legal as evidence.',
    },
    {
      kind: 'p',
      text: `Run as a routine, this work is [customer-side observability](/blog/customer-side-observability). ${CUSTOMER_SIDE_OBSERVABILITY.definition} For a CX team it has 3 parts, written before the first check.`,
    },
    {
      kind: 'list',
      items: [
        '**Pass marks.** Each question’s right answer, taken from the policy page as it reads that morning, plus a target time to reach a person and an AI notice in the first message.',
        '**A cadence.** Every morning at a set time, and within the hour of every prompt edit, help article change, vendor release or model change.',
        '**An owner for each fail.** A wrong policy answer goes to the help article’s owner, a regression after a release to whoever manages the vendor, a slow handoff to workforce planning, and a missing AI notice to compliance.',
      ],
    },

    { kind: 'h2', id: 'jobs', text: 'What AI customers do for CX teams' },
    { kind: 'p', text: `**${AI_CUSTOMER.definition}**` },
    {
      kind: 'p',
      text: 'A CX team uses AI customers as customers of its own company. They say they are AI, ask the company’s AI agents what customers ask on the channels customers use, and keep each answer with its time and channel. An AI customer service agent works for the company and answers its customers. An AI customer works for the CX team as one of those customers, as [AI customer service agents vs AI customers](/blog/ai-customer-service-agent-vs-ai-customer) sets out.',
    },
    {
      kind: 'table',
      caption: '6 jobs for AI customers in a CX team, each with its check, its pass mark and what the team does with the result that week',
      cols: ['Job', 'The check', 'A pass', 'That week'],
      rows: [
        [
          'Daily answers: [Support bot check](/recipes/support-bot-check)',
          'Hardest questions asked on chat, email and portal',
          'Each answer matches that morning’s policy page',
          'Wrong answers go to the article’s owner',
        ],
        [
          'After every update: [Drift watch](/recipes/drift-watch)',
          'The same cases within the hour of a change',
          'No case that passed at 07:00 fails',
          'Before and after sent to the vendor',
        ],
        [
          'Phone: [Voice agent check](/recipes/voice-agent-check)',
          'Calls that book a slot, ask a price and ask for a person',
          'Right price, real slot, a person within target',
          'Price list or call script corrected',
        ],
        [
          'AI notice: [AI disclosure check](/recipes/ai-disclosure-check)',
          '“Am I talking to a person?” on every channel',
          'An AI notice first, and a true answer',
          'Missing notices go to compliance',
        ],
        [
          'Billed outcomes: [Resolution check](/recipes/resolution-check)',
          'Billed resolutions against payments and the help desk',
          'Every promised refund or change happened',
          'Outcomes that weren’t real disputed with proof',
        ],
        [
          'Before signing: [Vendor agent check](/recipes/vendor-agent-check)',
          'Real cases on each shortlisted vendor’s agent',
          'Answers and handoffs within policy',
          'A side by side report for procurement',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Obsession runs these checks today. It makes AI customers that sign up to any company and keep every email, offer and price it sends, so your company can find its revenue leaks, watch its rivals and prospect with proof. For a CX team, its AI customers call, chat and email the company’s AI agents every day, as its customers do. They check each agent answers right, hands over to a person and says it’s an AI. For a store’s chat checked by hand, [how to test your store’s chatbot](' +
        BOT_TEST +
        ') gives the questions and a scoring sheet.',
    },
    {
      kind: 'cta',
      text: 'AI customers ask your AI agents what your customers ask, on chat, email and phone, every day and after every update, and keep each answer as proof.',
      to: '/verify',
      label: 'Check your AI agents',
    },

    { kind: 'h2', id: 'next', text: 'What changes in 2026 and 2027' },
    {
      kind: 'list',
      items: [
        '**Live: the AI notice is law in the EU.** [Article 50 of the EU AI Act](' +
          AI_ACT_50 +
          ') requires AI systems that talk to people to be designed so those people are told they are dealing with an AI, unless it is obvious, and the Act [applies from 2 August 2026](' +
          AI_ACT_113 +
          ').',
        '**Live: regulators expect monitoring.** The UK’s Competition and Markets Authority says a business is [responsible for what an AI agent does in the same way it is responsible for what an employee does](' +
          CMA +
          '), expects a person to check its decisions, and says a business could be fined up to 10% of its worldwide turnover.',
        '**Live: inside QA now covers AI agents.** QA tools score AI agent conversations, and AI vendors ship their own tests, such as [Sierra’s simulations](' +
          SIERRA_SIM +
          ') and Intercom’s batch tests.',
        '**Live: companies now detect personal agents.** A personal agent is an AI agent one individual sends to deal with a company for them. Decagon advertises [detection of personal agents](' +
          DECAGON +
          ') and a dedicated channel to serve them, and [Cloudflare’s bot documentation](' +
          CLOUDFLARE_BOTS +
          '), updated 8 October 2026, lists agents directed by users and visiting pages on a person’s behalf as their own category.',
        '**Forecast: more of the volume will be agents.** Salesforce, which sells service agents, has its EVP for Agentforce and Service Cloud writing that [personal agents could turn peak volume into the new status quo](' +
          SF_PERSONAL +
          '), because an agent asked to watch a delayed order can call back every few hours until it ships.',
        '**Live: AI assistants answer about the company.** In a study Product.ai ran and [Business Insider reported](' +
          PRODUCT_AI +
          '), 85% of 913 checkable price answers matched the current or listed price. [What ChatGPT says about your store](/blog/what-chatgpt-says-about-your-store) shows how to check those answers.',
      ],
    },
    {
      kind: 'stat',
      value: 'Up to €15m',
      label: 'or 3% of worldwide annual turnover, whichever is higher, for breaching the EU AI Act’s Article 50 transparency duties (whichever is lower for smaller firms)',
      source: 'EU AI Act, Article 99, AI Act Service Desk',
      href: AI_ACT_99,
    },
    {
      kind: 'p',
      text: 'Each change raises the value of a fixed set of questions asked the same way every day. Their answers form a dated baseline that shows the effect of every update, and the transcripts give a vendor, a regulator or legal a record to read.',
    },

    { kind: 'h2', id: 'options', text: 'AI agent QA options, compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 24 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to check what an AI agent tells customers. Prices from each provider’s own pages, 24 October 2026. Zendesk’s QA is an add-on to a Zendesk plan. T-ROC’s range is for institutional quality shops',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'Customers meet each wrong answer first', 'An agent that rarely changes'],
        [
          'By hand: a phone, a test account and a sheet',
          'Your own judgement on any channel',
          'Your hours\nUS median for service reps: $21.53 an hour',
          'Hours grow with each question, channel and update',
          'Up to 10 questions, weekly',
        ],
        [
          'The AI vendor’s own tests: [Intercom Fin](' + INTERCOM_TESTS + '), [Sierra](' + SIERRA + ')',
          'Tests a change before it goes live',
          'Intercom: batch tests at no charge\nSierra: not listed',
          'Scenarios the team wrote, in the vendor’s tools',
          'Checking an edit before publishing',
        ],
        [
          'Conversation QA: [Zendesk QA](' + ZD_PRICE + '), [evaluagent](' + EVALUAGENT + ')',
          'Scores every conversation, AI agents included',
          'Zendesk: from $35 per agent a month\nevaluagent: from $35 per user a month',
          'Scores conversations after customers had them',
          'Coaching and quality scores across the team',
        ],
        [
          'AI agent testing: [Cyara Botium](' + CYARA + '), [Hamming](' + HAMMING_PRICING + ')',
          'Simulated customers at volume, before and after launch',
          'Cyara: not listed\nHamming: contact us',
          'Their pages stop at the conversation itself',
          'Teams building their own agent',
        ],
        [
          'Human mystery shoppers: [T-ROC](' + TROC + ')',
          'A trained person judges tone and service',
          '$50 to $200 a shop',
          '1 visit per fee',
          'Phone and in person service',
        ],
        [
          'Obsession (ours): [Support bot check](/recipes/support-bot-check), [Voice agent check](/recipes/voice-agent-check), [Drift watch](/recipes/drift-watch), [AI disclosure check](/recipes/ai-disclosure-check), [Resolution check](/recipes/resolution-check), [Vendor agent check](/recipes/vendor-agent-check)',
          'AI customers ask on live channels daily and after updates, and keep each answer',
          'Running now: first AI agent check free\nCredit-based plans, like Claude’s',
          'Sees what its own AI customers are told',
          'What customers are told on every channel, after every update, kept as proof',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If your team needs to know what its AI agents tell customers on every channel, every day and after each update, use Obsession. A team running an AI agent at volume can combine 2 of these. A QA tool scores every real conversation, including questions no test anticipated. A customer-side check shows what the agent says now, on every channel, and what follows the conversation.',
    },
    {
      kind: 'p',
      text: 'Testing platforms suit teams that build their own agent. [Hamming](' +
        HAMMING +
        ') lists more than 50,000 concurrent test calls in more than 65 languages and accents, and [Cyara’s Botium](' +
        CYARA +
        ') simulates customer personas for regression and production testing.',
    },

    { kind: 'h2', id: 'when-not', text: 'When a CX team doesn’t need AI customers' },
    {
      kind: 'list',
      items: [
        '**No AI writes or speaks the answers.** A menu of fixed replies, or a form that emails the team, changes only when someone edits it.',
        '**1 channel, a handful of questions and rare changes.** A person asking them from a sheet once a week covers it.',
        '**Volume low enough to read everything.** Where the team reads every conversation each day, problems show in the reading.',
        '**Judging tone and empathy on a call.** A trained person, as a QA reviewer or a mystery shopper, judges that best.',
        '**Load testing before launch.** A testing platform runs thousands of simulated conversations at once.',
      ],
    },

    { kind: 'h2', id: 'start', text: 'Start this week' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**List the 20 questions that cost money when answered wrong.** Refunds, delivery dates, cancellations, prices, codes and a request for a person, each with the line on the policy page that decides it.',
        '**Ask each one on every channel the agent answers,** logged out, as a customer, and keep each transcript with its time.',
        '**Write a pass mark and an owner for each,** and agree with the vendor that test conversations are tagged, so none is billed as an outcome.',
        '**Put every prompt edit, help article change and vendor release in one calendar,** and ask the questions again within the hour of each.',
        '**Fill in the cost sum** with last month’s figures to set how often to check.',
      ],
    },
    {
      kind: 'cta',
      text: 'Obsession makes the first AI customers that work for you. Your first AI agent check is free: name a chat page or phone number your company runs, 3 AI customers use it, and your report lands within 4 days.',
      to: '/verify',
      label: 'Check your AI agents',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI agent QA' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is AI customer service quality assurance?',
          a: 'AI customer service quality assurance is checking that an AI agent’s answers to customers are correct, follow policy and reach a person when they should. QA tools score past conversations, and AI customers ask the agent what customers ask, every day and after every update.',
        },
        {
          q: 'How do you evaluate an AI chatbot?',
          a: 'Ask it the questions customers ask and score each answer against the policy page: correct, wrong, made up or no handoff. Repeat the same questions on every channel, every day and after every update, so a change shows the day it happens.',
        },
        {
          q: 'What is AI agent QA?',
          a: 'AI agent QA is the quality assurance of an AI agent’s conversations with customers: scoring past conversations from inside the help desk, testing changes before they publish, and checking live answers as a customer.',
        },
        {
          q: 'How does AI voice agent testing work?',
          a: 'A caller rings the voice agent’s real number, books a slot, asks a price and asks for a person, and checks each answer against the price list and the handoff target. It says at the start that it is an AI and that the call is recorded.',
        },
        {
          q: 'What is AI agent monitoring?',
          a: 'AI agent monitoring is tracking what an AI agent says and does once it is live. Engineering tools watch its traces and errors, QA tools score its conversations, and AI customers check its answers from the customer’s side.',
        },
        {
          q: 'How often should a CX team test its AI agent?',
          a: 'Every morning at a set time, and within the hour of every prompt edit, help article change, vendor release or model change.',
        },
        {
          q: 'Is a company responsible for what its AI chatbot says?',
          a: 'In the UK, the CMA says a business is responsible for its AI agent as it is for an employee, and a Canadian tribunal held Air Canada to its chatbot’s answer. This is not legal advice.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'The store and every figure in its examples are invented, except the 2 rates in the cost sum: the BLS median wage and Intercom’s listed price. Prices are in US dollars as each provider listed them on 24 October 2026. This is not legal advice.',
    },
  ],

  sources: [
    { title: 'New research: AI service agents improve customer satisfaction', publisher: 'Salesforce', url: SF_SURVEY, date: '2026-05-20' },
    { title: 'HubSpot expands Breeze Customer Agent to offer AI support for the entire buyer journey', publisher: 'HubSpot', url: HUBSPOT_NEWS, date: '2025-05-08' },
    { title: 'Pricing', publisher: 'Intercom', url: INTERCOM_PRICING },
    { title: 'Customer service representatives: Occupational Outlook Handbook', publisher: 'US Bureau of Labor Statistics', url: BLS },
    { title: 'Quality assurance', publisher: 'Zendesk', url: ZD_QA },
    { title: 'Pricing', publisher: 'evaluagent', url: EVALUAGENT },
    { title: 'Fin’s flawed resolution assumption', publisher: 'Intercom Community', url: FIN_RESOLVED, date: '2025-05-27' },
    { title: 'Simulations vs batch tests vs previews', publisher: 'Intercom Help Center', url: INTERCOM_TESTS },
    { title: 'Run simulations for Fin Procedures', publisher: 'Intercom Help Center', url: INTERCOM_SIM },
    { title: 'Independent outcome verification', publisher: 'Intercom Community', url: FIN_QUESTION, date: '2026-09-29' },
    { title: 'Moffatt v. Air Canada: A Misrepresentation by an AI Chatbot', publisher: 'McCarthy Tétrault', url: MCCARTHY, date: '2024-02-19' },
    { title: 'Air Canada chatbot gave a customer wrong info and the airline had to pay', publisher: 'Fox Business', url: FOX, date: '2024-02-19' },
    { title: 'Article 50: transparency obligations', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_50 },
    { title: 'Article 113: entry into force and application', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_113 },
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-03-09' },
    { title: 'Simulations: the secret behind every great agent', publisher: 'Sierra', url: SIERRA_SIM, date: '2025-08-19' },
    { title: 'Meet your agent', publisher: 'Sierra', url: SIERRA },
    { title: 'The AI concierge for every customer', publisher: 'Decagon', url: DECAGON },
    { title: 'Verified bots', publisher: 'Cloudflare Docs', url: CLOUDFLARE_BOTS, date: '2026-10-08' },
    { title: 'Personal agents will drive more contact center traffic than they offset', publisher: 'Salesforce', url: SF_PERSONAL, date: '2026-10-19' },
    { title: 'AI can’t take over your holiday shopping quite yet, a new study suggests (Product.ai study)', publisher: 'Business Insider, republished by DNYUZ', url: PRODUCT_AI, date: '2026-09-25' },
    { title: 'Article 99: penalties', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_99 },
    { title: 'Zendesk vs MaestroQA', publisher: 'Zendesk', url: ZD_PRICE },
    { title: 'Botium', publisher: 'Cyara', url: CYARA },
    { title: 'Pricing', publisher: 'Hamming', url: HAMMING_PRICING },
    { title: 'Hamming', publisher: 'Hamming', url: HAMMING },
    { title: 'How much does mystery shopping cost? 2026 pricing guide', publisher: 'T-ROC', url: TROC, date: '2026' },
  ],
  related: [
    'ai-customer-service-agent-vs-ai-customer',
    'customer-side-observability',
    'why-ai-customers-matter',
    'recipe:support-bot-check',
    'recipe:drift-watch',
    'recipe:voice-agent-check',
    'recipe:resolution-check',
  ],
}
