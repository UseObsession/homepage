import type { BlogPost } from './types'

/* Agent search guides, week 2 (_research/seo/agent-search-23nov/PLAN.md, row 8; 23 Nov 2026). Primary "ai agent for
   real estate agents"; secondaries as briefed. Leads to speed-to-lead callback, missed call text back, appointment
   reminders and /no-code; lettings go to /use-cases/ai-agent-for-property-management, which owns property management.
   Read on 23 Nov 2026, each on its own page: BLS Occupational Outlook Handbook, real estate brokers and sales agents
   (May 2025 pay: sales agents the BLS median, brokers a higher figure; 54% and 55% self-employed); HUD press release 24-098 (2 May
   2024, Fair Housing Act and AI in tenant screening and advertising); Follow Up Boss pricing (Grow $69 a user, Pro
   $499 for 10 users, Platform $1,000 for 30 users, Calling add-on $39 a user, monthly billing); RingCentral AI
   Receptionist pricing ($49 a month with 100 minutes, $0.50 a minute after). Response speed: HBR, The Short Life of Online Sales Leads
   (March 2011), as used in /blog/speed-to-lead-statistics; it is not real estate specific and the post says so.
   Obsession's prices are from src/lib/pricing/pricing.json (Free, Developer $20 for $20 of usage, Startup $99 for $111,
   Scale $499 for $588). The two bills are worked below from list rates: number $2, inbox $0.50, emails $0.40 per
   1,000, texts $0.015, calls $0.012 a minute, browser $0.10 an hour, events $5 per million, model tokens from $0.975
   per million input tokens, US texting registration $25 once and $17 a month per campaign. Hartwell Realty,
   hartwell-realty.example and every row in the picture are invented. British English, no dashes. */

const BLS = 'https://www.bls.gov/ooh/sales/real-estate-brokers-and-sales-agents.htm'
const HUD = 'https://archives.hud.gov/news/2024/pr24-098.cfm'
const FUB = 'https://www.followupboss.com/pricing'
const RC = 'https://www.ringcentral.com/pricing/ai-receptionist'
const HBR = 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads'
const FCC_24_17 = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'

export const post: BlogPost = {
  slug: 'ai-agent-for-real-estate-agents',
  title: 'AI agent for real estate agents: every enquiry answered in a minute, every viewing booked',
  dek: 'What an agent with its own phone number, inbox and browser does in a real estate week, what it costs a solo agent and a 50-agent brokerage, and the rules it keeps.',
  metaTitle: 'AI agent for real estate agents: every lead answered fast',
  description:
    'An AI agent for real estate agents answers every portal enquiry in a minute, books viewings and follows up for weeks. See the jobs, the cost and the rules.',
  answer:
    'An AI agent for real estate agents answers every portal and website enquiry within a minute, texts and calls the lead back, books the viewing and keeps following up for weeks. It does this from its own phone number, inbox and browser. At list rates, one agent’s usage comes to about $40 a month, and a 50-agent brokerage’s to about $1,100 on Scale.',
  primaryKeyword: 'ai agent for real estate agents',
  keywords: [
    'ai agent for real estate lead generation',
    'ai agent for real estate brokers',
    'ai agent for real estate investors',
    'ai virtual assistant for real estate agents',
  ],
  category: 'Talk to customers',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 9,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'An enquiry at 19:42, a viewing by 19:44',
      who: 'Ava, the AI agent at Hartwell Realty',
      rows: [
        { time: '19:42', text: 'email.received', detail: 'Portal enquiry: 3-bed at 14 Elm Row · +1 512 555 0148', tone: 'info' },
        { time: '19:42', text: 'sms.sent', detail: 'Says she’s an AI, offers Sat 10:30 or Sun 14:00', tone: 'ok' },
        { time: '19:43', text: 'sms.received', detail: '“Sat 10:30 works.”', tone: 'info' },
        { time: '19:44', text: 'Viewing booked', detail: 'Calendar updated · confirmation emailed from ava@hartwell-realty.example', tone: 'ok' },
        { time: 'Fri 18:00', text: 'sms.sent', detail: 'Reminder for tomorrow, with the address and a parking note', tone: 'ok' },
        { time: 'Sat 11:20', text: 'Follow-up queued', detail: 'Day 3, day 7 and day 21 messages scheduled, stop on reply', tone: 'info' },
      ],
      foot: 'Example: every email, text and call lands in one event log. Hartwell Realty and hartwell-realty.example are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI agent for real estate agents answers each new enquiry from a portal, your website or a missed call within a minute, books the viewing, confirms it and keeps following up long after a person would have stopped. It works from its own phone number and inbox, so the lead hears from one name on every channel. Solo agents, teams and brokers can all use one, and none of them need to write code.',
    },

    { kind: 'h2', id: 'week', text: 'Where leads die in a real estate week' },
    {
      kind: 'p',
      text: 'Agents lose leads in three places, and none of them is the lead’s fault. The enquiry arrives while you are at a viewing, so it sits for hours. A call comes in during that viewing and goes to voicemail. And the follow-up that would have turned a cold “just looking” into an offer stops after two tries, because the next enquiry needs your attention.',
    },
    {
      kind: 'p',
      text: 'The cost of slow replies is the best-studied number in sales. A Harvard Business Review study of online leads is the study most often cited on how fast to make first contact ([HBR, March 2011](' +
        HBR +
        ')); it is behind a paywall, so read its own figures there. It covered several industries, not only property, so treat it as the direction of the effect, not a forecast for your area. [Speed-to-lead statistics](/blog/speed-to-lead-statistics) sets out what each study measured and what is folklore.',
    },
    {
      kind: 'p',
      text: 'Being busy is the normal state of the job. The US Bureau of Labor Statistics counts 427,000 real estate sales agents and 103,500 brokers, and 54% and 55% of them are self-employed, which means most are running their own inbox and phone around viewings ([BLS, May 2025 data](' +
        BLS +
        ')).',
    },
    {
      kind: 'stat',
      value: '427,000',
      label: 'real estate sales agents in the US in 2025, 54% of them self-employed',
      source: 'US Bureau of Labor Statistics, Occupational Outlook Handbook',
      href: BLS,
    },
    {
      kind: 'p',
      text: 'Work out your own number before you buy anything. Take the enquiries you answer late each month (say 15 a month), multiply by your close rate (1 in 100) and your average commission ($9,000): $1,350 a month. Across a 50-agent brokerage that is $67,500 a month, and across a 5,000-agent network $6.75 million. Replace each of those four inputs with yours.',
    },

    { kind: 'h2', id: 'jobs', text: 'The jobs an agent with its own number, inbox and browser takes' },
    {
      kind: 'p',
      text: 'Each job here needs a piece an AI chat window doesn’t have: a number that can text and call, an inbox that receives, or a browser that can sign in. That is why the agent can finish the job, not just draft it.',
    },
    {
      kind: 'list',
      items: [
        '**Answer every enquiry within a minute.** A portal email or website form arrives in its inbox, and it texts or calls the lead back from its own number, in your business’s name. It says it is an AI, asks what they are looking for and answers from your listings. This is the [speed-to-lead callback](/blueprints/speed-to-lead-callback).',
        '**Catch every missed call.** When you are mid-viewing, a caller who gets no answer receives a text within seconds that answers their question and offers a time. This is [missed call text back](/blueprints/missed-call-text-back).',
        '**Book viewings.** It reads your calendar, offers free slots and books the one the lead picks, then emails directions from its own address.',
        '**Confirm and remind.** A text the day before cuts no-shows, and a viewing that is missed gets an offer of a new time. This is [appointment reminders](/blueprints/appointment-reminders).',
        '**Follow up for weeks.** It messages on day 3, day 7 and day 21 with a new listing or a price change, and stops the moment the lead replies or says STOP.',
        '**Collect documents.** For a buyer under offer, it chases proof of funds and ID copies by email until they arrive.',
        '**Keep the CRM current.** Every reply, booking and call summary is passed to your CRM, so nobody enters notes at 10pm.',
      ],
    },
    {
      kind: 'p',
      text: 'Brokers can give each of their agents their own agent, or run one for the whole office. Investors use the same agent for a different list: it contacts owners who have said they would like offers, and logs each answer. Leasing is a separate job with its own rhythm, covered in [AI agent for property management](/use-cases/ai-agent-for-property-management).',
    },
    {
      kind: 'cta',
      text: 'Every new web or portal lead called or texted back within a minute from your agent’s own number, with the viewing booked and every reply in your CRM.',
      to: '/blueprints/speed-to-lead-callback',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'cost', text: 'What one agent costs a month' },
    {
      kind: 'p',
      text: 'Obsession bills each piece by use, and spoken calls are the biggest line. These bills use Obsession’s list rates and the same example month for each agent: 40 new leads, about 8 texts per lead (320), 150 spoken call minutes, 400 emails, 10 browser hours and 3 million model tokens.',
    },
    {
      kind: 'table',
      caption: 'Example month at Obsession’s list rates, as listed on 23 November 2026. US dollars. Model tokens priced from $0.975 per million input tokens, so about $3 here',
      cols: ['Item', 'One agent', '50 agents'],
      rows: [
        ['Number ($2) and inbox ($0.50)', '$2.50', '$125'],
        ['Texts at $0.015', '$4.80', '$240'],
        ['Spoken calls, about $0.08 a minute ($0.012 call plus $0.0676 voice)', '$11.94', '$597'],
        ['Emails at $0.40 per 1,000', '$0.16', '$8'],
        ['Browser at $0.10 an hour', '$1', '$50'],
        ['Events, $5 per million', 'under $0.02', 'under $1'],
        ['Model tokens, about', '$3', '$150'],
        ['US texting registration, one campaign a month', '$17', '$17'],
        ['Total at list rates', 'about $40', 'about $1,188'],
        ['On the cheapest plan', 'Developer $20, about $40', 'Scale $499, about $1,099'],
      ],
    },
    {
      kind: 'p',
      text: 'A paid plan’s fee covers that much usage at list rates, so the solo agent pays Developer’s $20 plus about $20 beyond it, and the 50-agent brokerage pays Scale’s $499, which covers $588, plus about $600 beyond it, so the $1,188 at list rates comes to about $1,099 on Scale. That is about $22 an agent a month. Texting also has a one-off $25 registration for the campaign. [10DLC registration](/blog/10dlc-registration) explains why US carriers require it. A brokerage texting as one business needs one campaign; agents who text as separate businesses need one each.',
    },
    {
      kind: 'p',
      text: 'The sum scales one way. Ten times the leads is ten times the texts, calls and tokens, and the number and inbox don’t change. An agent that waits costs nothing beyond its number and inbox.',
    },

    { kind: 'h2', id: 'rules', text: 'The rules an agent for real estate keeps' },
    {
      kind: 'p',
      text: 'This is general information, not legal advice, and the rules differ by state and country. Three matter most.',
    },
    {
      kind: 'list',
      items: [
        '**Consent for texts and calls.** An AI voice counts as an artificial voice under the US Telephone Consumer Protection Act, according to the [FCC’s February 2024 ruling](' +
          FCC_24_17 +
          '), so calling and texting a lead needs their prior express consent. A portal enquiry that includes a phone number and permission is the usual basis. The agent texts only people who gave your business their number and stops at STOP.',
        '**Say it is an AI.** Every Obsession agent says so to anyone it speaks to. [Chatbot disclosure laws](/blog/chatbot-disclosure-laws) sets out where the law demands it.',
        '**Fair housing.** The Fair Housing Act covers housing providers and advertisers, and [HUD’s May 2024 release](' +
          HUD +
          ') says AI tools used in screening and advertising must still follow the Act. In practice, give the agent no instruction that treats leads differently by protected characteristics, don’t let it steer a lead towards or away from an area, and read its transcripts. The event log keeps each one.',
      ],
    },
    {
      kind: 'p',
      text: 'The agent also stops at any identity check and before payment, unless you give it your own card, and it never gets round a CAPTCHA or a bot block. [What every agent keeps to](/agents) lists the rest.',
    },

    { kind: 'h2', id: 'options', text: 'Real estate CRMs, voice receptionists and assistants compared', compare: true },
    {
      kind: 'p',
      text: 'Most agents already have a CRM, so the real choice is what to add to it. The table uses each provider’s own pages as listed on 23 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Options for answering real estate leads, as listed on 23 November 2026. US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          `[Follow Up Boss](${FUB}): CRM with AI summaries and messages`,
          'Holds every lead in one place, with calling add-on, smart messages, suggested tasks and lead prioritisation',
          'Monthly: Grow $69 a user, Pro $499 for 10 users, Platform $1,000 for 30 users\nYearly is cheaper: $58, $416 and $833\nCalling add-on on Grow $39 a user',
          'A CRM first; calling and texting are an add-on on Grow ($39 a user) and included on Pro and Platform. Check what its AI does without a person',
          'Teams who want one shared record of every lead',
        ],
        [
          `[RingCentral AI Receptionist](${RC}): inbound calls`,
          'Answers your calls with an AI voice',
          '$49 a month with 100 minutes\n$0.50 a minute after',
          'Its page describes an AI voice that answers calls; it lists no inbox or browser, so enquiries by email and portal need another tool',
          'Agents whose main loss is missed calls',
        ],
        [
          'An ISA or virtual assistant: a person',
          'Judgement and warmth on a hard conversation',
          'A wage you set, by the hour or the year',
          'Works set hours, so the 19:42 enquiry waits until morning',
          'Qualifying and nurturing leads that need a person',
        ],
        [
          'Obsession (ours): an agent with its own number, inbox and browser, run as blueprints',
          'One identity answers by text, call and email, books, reminds and follows up, with every step in one log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'It follows the rules you give it and hands a hard conversation to you',
          'Solo agents to brokerages that want every channel in one place',
        ],
      ],
    },

    { kind: 'h2', id: 'obsession', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. A real estate agent’s week uses three of those pieces. The **inbox** is a real address the agent owns: it receives the portal email, keeps each thread and passes every new message to your own system. The **phone number**, US or UK, sends and receives texts and takes and makes calls, with texts sent from the agent’s own number in your business’s name. The **browser** keeps its logins between runs, so the agent signs in once to a portal or lender site with the logins you give it and stays signed in.',
    },
    {
      kind: 'p',
      text: 'A persona puts those pieces under one identity: one name, one address, one number, one browser profile. A buyer who replies to the email and then calls reaches the same agent, with the whole history, and a code texted for a portal login reaches the agent whose browser is waiting at the login page. A waiting persona costs nothing, beyond its number ($2) and inbox ($0.50) billing monthly, and answers a new message in about 50 milliseconds.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page lands in one event log, dated, with the email, screenshot or recording behind it. For an agent that is a morning summary in Slack, an entry in your CRM and proof for a seller who asks whether you chased every buyer.',
    },
    {
      kind: 'p',
      text: 'The usual route is four vendors: an email API, a phone and texting API, a cloud browser and a sandbox, each with its own key, bill, webhook (a message to your own system) and log. That is four integrations to keep working, and jobs break at the seams, such as the call log and the email thread sitting in different places. If your job needs one piece, a single specialist can be enough. The side-by-side of [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) holds each vendor’s prices, dated.',
    },
    {
      kind: 'p',
      text: 'There are two ways to run it. Pick a ready-made blueprint, or [describe the job in your own words](/no-code) and Obsession sets it up and spins up the agent. Either way, one agent for a solo agent or one for every agent in a brokerage, each has its own identity and is paid for by what each one uses.',
    },
    {
      kind: 'p',
      text: 'The same persona can also take on other jobs in your world:',
    },
    {
      kind: 'list',
      items: [
        'Text every past client a year after closing, with a one-line market update, and book the review call when they reply.',
        'Check your listings on each portal weekly, with a login you give it, and report any that are out of date.',
        'Call the owners on your list who asked for an offer, say it is an AI, and log who wants a valuation.',
      ],
    },
    {
      kind: 'cta',
      text: 'Describe the job in your own words, and Obsession sets it up as a blueprint and runs it on an agent with its own inbox, number and browser.',
      to: '/no-code',
      label: 'Start free',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about AI agents for real estate agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is an AI agent for real estate agents?',
          a: 'It is software with its own phone number, inbox and browser that does the follow-up work a busy agent can’t: it answers portal and website enquiries within a minute, texts and calls back, books viewings, sends reminders and keeps following up. It hands the hard conversations to you.',
        },
        {
          q: 'Can an AI agent do real estate lead generation?',
          a: 'It handles the part after the enquiry arrives: speed, follow-up and booking. Buying leads, running ads and listing on portals stay with you, and the agent replies to whatever those bring in. Texting or calling a cold list needs consent from each person.',
          link: { label: 'Speed-to-lead callback', to: '/blueprints/speed-to-lead-callback' },
        },
        {
          q: 'Is it useful for real estate brokers?',
          a: 'Yes. A broker can give each agent their own agent, each with its own number, or run one for the office. On Obsession’s list rates a 50-agent brokerage’s usage comes to about $1,100 a month on the Scale plan, about $22 an agent.',
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Can a real estate investor use one?',
          a: 'Yes, for a different list. It contacts owners who gave consent, says it is an AI, logs each answer and passes interested ones to you. The same rules on consent and disclosure apply.',
        },
        {
          q: 'How is it different from an AI virtual assistant?',
          a: 'A virtual assistant, human or AI, usually works your inbox from inside your accounts. An agent with its own identity replies from its own number and address, so leads reach one named agent at any hour, and every step is in one log.',
          link: { label: 'What every agent keeps to', to: '/agents' },
        },
        {
          q: 'Does it have to say it is an AI?',
          a: 'Every Obsession agent says it is an AI to anyone it speaks to, on every text and call. Disclosure rules differ by place, and saying it every time keeps one rule for every lead.',
        },
        {
          q: 'Can it follow fair housing rules?',
          a: 'You set the rules and read the transcripts. The Fair Housing Act applies to housing providers and advertisers, and HUD’s May 2024 release says AI tools used in screening and advertising must still follow the Act. Give the agent instructions that are the same for every lead, and review its log.',
        },
        {
          q: 'How much does one cost?',
          a: 'At Obsession’s list rates, about $40 a month for one agent in the example month, and about $1,100 for 50 agents on Scale, plus a $25 one-off texting registration. Real use varies with your leads and texts.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sources',
      text: 'This is general information, not legal advice. The consent, disclosure and fair housing points are from the FCC’s ruling and HUD’s release as published, and differ by state and country, so check them with a lawyer for your own business. Prices are from each provider’s own page on 23 November 2026. The response-speed study covers several industries. Hartwell Realty in the illustration is invented.',
    },
  ],

  sources: [
    { title: 'Real Estate Brokers and Sales Agents, Occupational Outlook Handbook', publisher: 'US Bureau of Labor Statistics', url: BLS },
    { title: 'HUD No. 24-098: guidance on AI in tenant screening and advertising', publisher: 'US Department of Housing and Urban Development', url: HUD, date: '2024-05-02' },
    { title: 'Follow Up Boss pricing', publisher: 'Follow Up Boss', url: FUB },
    { title: 'AI Receptionist plans and pricing', publisher: 'RingCentral', url: RC },
    { title: 'The Short Life of Online Sales Leads', publisher: 'Harvard Business Review', url: HBR, date: '2011-03' },
    { title: 'Declaratory Ruling FCC 24-17: AI technologies and unwanted robocalls', publisher: 'Federal Communications Commission', url: FCC_24_17, date: '2024-02-08' },
  ],

  related: [
    '/no-code',
    'recipe:speed-to-lead-callback',
    'recipe:missed-call-text-back',
    'recipe:appointment-reminders',
    'speed-to-lead-statistics',
    'ai-voice-agent-for-small-business',
  ],
}
