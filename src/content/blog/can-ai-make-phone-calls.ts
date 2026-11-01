import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

/* Guide 12 of the week's slate (_research/seo/plan/week-2nov/SLATE.md, spec 12, and WRITER_BRIEF.md, batch 3; Seun's go
   on 1 Nov 2026). It owns "can ai make phone calls" and its neighbours (Google autocomplete, US and UK, 31 Oct 2026, in
   autocomplete_slate_31oct.json beside the plan): for you, AI agents, take phone calls, Google AI, Muse AI. AI agents
   calling businesses stay with agent-ready-website, an AI agent's phone number with how-ai-customers-work, testing an
   AI receptionist before launch with /recipes/voice-agent-check and the testing platforms with ai-voice-agent-testing,
   each linked with its phrase.
   Readers: people who want an AI to call for them, businesses that receive AI calls, and teams running voice agents.
   The legal part takes guide 3's care: general information, never legal advice, a named place for every point, each
   rule quoted from its own text, and a plain not-legal-advice line in the note.
   Read at source on 1 Nov 2026: Google's Let Google Call post (13 Nov 2025) and its Search I/O post (19 May 2026);
   Google Business Profile Help on automated calls to businesses; Gemini Apps Help on Gemini's calls; Meta's Muse launch
   post (8 Sep 2026, updated 30 Sep) and its post for businesses (6 Oct 2026), neither of which mentions calls, so the
   calling feature comes from Reuters (22 Sep 2026, Katie Paul, read on KSL.com's licensed copy) and Pindrop's own data
   (9 Oct 2026); 47 U.S.C. 227, 47 CFR 64.1200 and 18 U.S.C. 2511 (Cornell LII); the FCC's Declaratory Ruling FCC 24-17
   (8 Feb 2024) and Report and Order FCC 26-67 (1 Oct 2026), both from docs.fcc.gov; the Federal Register notice of
   FCC 26-67 (26 Oct 2026, effective 25 Nov 2026); RCW 9.73.030 (Washington State Legislature); the AI Act Service
   Desk's Articles 50 and 113 (consolidated text as at 27 Jul 2026); PECR regulation 19 (legislation.gov.uk).
   California's code site answered with a bot check, so Washington is the state example. Obsession is described in the
   words of the voice agent check and AI disclosure check pages, /verify and /agents. Texts are left out of every claim
   about Obsession. kestrelway.example is invented. No dashes. */

const LET_GOOGLE_CALL = 'https://blog.google/products-and-platforms/products/shopping/agentic-checkout-holiday-ai-shopping/'
const GOOGLE_IO = 'https://blog.google/products-and-platforms/products/search/search-io-2026/'
const GBP_CALLS = 'https://support.google.com/business/answer/7690269?hl=en'
const GEMINI_CALLS = 'https://support.google.com/gemini/answer/18336420?hl=en'
const MUSE = 'https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/'
const META_BIZ = 'https://www.facebook.com/business/news/a-new-way-for-businesses-and-personal-agents-to-work-together'
const REUTERS = 'https://www.ksl.com/article/51627159/exclusive-meta-testing-a-human-concierge-for-its-new-personal-ai-agent-muse'
const PINDROP = 'https://www.pindrop.com/resources/article/inside-the-detection-of-meta-muse'
const USC_227 = 'https://www.law.cornell.edu/uscode/text/47/227'
const FCC_24_17 = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'
const CFR_64_1200 = 'https://www.law.cornell.edu/cfr/text/47/64.1200'
const FCC_26_67 = 'https://docs.fcc.gov/public/attachments/FCC-26-67A1.pdf'
const FED_REG = 'https://www.federalregister.gov/documents/2026/10/26/2026-21821/enhancing-the-ability-of-consumers-to-control-the-robocalls'
const USC_2511 = 'https://www.law.cornell.edu/uscode/text/18/2511'
const WA_RCW = 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.73.030'
const AI_ACT_50 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'
const AI_ACT_113 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113'
const PECR_19 = 'https://www.legislation.gov.uk/uksi/2003/2426/regulation/19'

export const post: BlogPost = {
  slug: 'can-ai-make-phone-calls',
  title: 'Can AI make phone calls? Yes: what Google, Meta’s Muse and AI agents do, and the rules',
  dek: 'Google’s AI calls businesses for people who use Search, Gemini phones them from a Pixel 11 owner’s own number, and Meta is rolling out calls from its Muse agent. In the US the law treats an AI voice as an artificial voice, which brings rules on consent and on saying who is calling.',
  metaTitle: 'Can AI make phone calls? What AI agents do and what’s legal',
  description:
    'Yes, AI can make phone calls: Google and Gemini call businesses for people, and Meta is rolling out Muse calls. What US, EU and UK rules ask of AI calls.',
  answer:
    'Yes, AI can make phone calls: Google’s AI calls businesses for people, Meta is rolling out calls from its Muse agent, and companies run voice agents that make and take calls. In the US, the FCC’s February 2024 ruling treats an AI voice as an artificial voice, so calls that use one to mobiles and home lines need the called person’s prior express consent, with some exceptions. To check the AI that answers your company’s phone, use Obsession: its AI customers call the number, say they’re AI at the start and keep every call recorded.',
  primaryKeyword: 'can ai make phone calls',
  keywords: [
    'can ai make phone calls for you',
    'can ai agents make phone calls',
    'can ai take phone calls',
    'can google ai make phone calls',
    'can muse ai make phone calls',
  ],
  category: 'Check your AI agents',
  published: '2026-11-01',
  updated: '2026-11-01',
  readingMinutes: 13,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'kestrelway.example · 3 kinds of AI call',
      rows: [
        {
          name: 'A person’s AI agent',
          who: 'Google’s calls, Gemini, Muse',
          nodes: ['A customer', 'Their AI agent', 'Kestrelway'],
          links: ['asks', 'calls to book or ask'],
        },
        {
          name: 'A voice agent',
          who: 'Kestrelway’s AI receptionist',
          nodes: ['Kestrelway', 'Its voice agent', 'Callers'],
          links: ['runs', 'answers, books, transfers'],
        },
        {
          name: 'An AI customer',
          who: 'Works for Kestrelway itself',
          nodes: ['Kestrelway', 'AI customer', 'Its own line'],
          links: ['hires', 'calls, says it’s AI'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'All 3 are AI phone calls. Only the AI customer works for Kestrelway itself, calling its own line and keeping each recording for it. Kestrelway is an invented company.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Yes, AI can make phone calls: Google’s AI calls businesses for people, Meta is rolling out calls from its Muse agent, and companies run voice agents that make and take calls.',
    },
    {
      kind: 'p',
      text: 'An AI phone call is one in which software does the talking. It turns the other person’s speech into text, writes a reply with a large language model (LLM), the type of AI behind ChatGPT, and speaks the reply in a synthetic voice. It can work through a phone menu, wait on hold and book a slot.',
    },
    {
      kind: 'p',
      text: 'AI makes 3 kinds of call today. A person’s AI agent calls a business for them, and a business’s own voice agent answers its callers or calls its customers. [AI customers](/blog/ai-customers) call a company’s own line to check what callers hear. Whether a call is allowed depends on who is called, what the call is for and where each side is, so each legal point names the place it applies.',
    },

    { kind: 'h2', id: 'for-you', text: 'Can AI make phone calls for you?' },
    {
      kind: 'p',
      text: 'Yes, in the US. When someone searches Google for certain products “near me”, Search offers “Let Google Call”. Google’s AI then rings nearby stores to ask whether they have the item, what it costs and whether there are promotions. It sends the answers by email or text ([Google, 13 November 2025](' +
        LET_GOOGLE_CALL +
        ')).',
    },
    {
      kind: 'p',
      text: 'At its I/O conference on 19 May 2026, Google said people could also ask it to call businesses in categories such as home repair, beauty and pet care ([Google](' +
        GOOGLE_IO +
        ')). It said the feature would roll out across the US that summer. Its help page for businesses says Google may call a business on a customer’s behalf ([Google Business Profile Help](' +
        GBP_CALLS +
        ')). The calls book appointments, check a restaurant’s wait time or confirm the price and availability of a product or service. The page lists the feature in every US state except Indiana, Louisiana, Minnesota, Montana and Nebraska.',
    },
    {
      kind: 'p',
      text: 'Gemini, Google’s AI assistant, places calls too. Its Call for me feature phones businesses from the user’s own number ([Gemini Apps Help](' +
        GEMINI_CALLS +
        ')). It can get opening hours, stock and quotes, book or move appointments, work through phone menus and wait on hold. Google is making it available gradually to adults in the US with a Pixel 11, a US SIM and a Google AI subscription.',
    },
    {
      kind: 'p',
      text: 'Gemini starts every call by saying it’s an AI assistant from Google calling on a recorded line for the user, and gives the user’s name. Google’s page says Gemini can’t call emergency services, make payments, pass on sensitive personal information or make telemarketing calls. Anyone who doesn’t want automated calls from Gemini users can opt out.',
    },
    {
      kind: 'p',
      text: 'Meta launched Muse, its personal AI agent, in the US on 8 September 2026. Meta says Muse can send an email, book travel, open a browser, fill out forms and negotiate for its user ([Meta](' +
        MUSE +
        ')). On 6 October Meta told businesses that Muse already makes purchases, books appointments and resolves support questions ([Meta for Business](' +
        META_BIZ +
        ')).',
    },
    {
      kind: 'p',
      text: 'Calls are newer. Reuters reported on 22 September 2026 that Meta had publicly launched a phone-calling feature for Muse and was rolling it out to users gradually. With it, a Muse user can have the agent dial US businesses to book a haircut, check whether a store has an item or get quotes from contractors ([Reuters](' +
        REUTERS +
        ')).',
    },
    {
      kind: 'p',
      text: 'The same report said Meta had tested having human contractors place some Muse calls, then rolled that test back. Asked about that test, a Meta spokesperson said Meta “will only roll it out when it’s ready and with the proper disclosures”. The report also quoted an employee whose insurer kept hanging up once it heard Muse was an AI.',
    },
    {
      kind: 'p',
      text: 'Pindrop detects AI voices on calls to contact centres. It says it matched the first Muse call on 9 September 2026, a week before Muse’s outbound call beta was announced on 16 September ([Pindrop, 9 October 2026](' +
        PINDROP +
        ')). By the fourth week, weekly Muse calls at its customers were 8 times the first week’s, with financial institutions getting the most, then healthcare and retail. Of those calls, 64% reached a person, and 47% pressed keypad digits to work through the phone menu.',
    },
    {
      kind: 'table',
      caption: 'AI that phones businesses for a person, from Google’s and Meta’s pages and the Reuters report, as of 1 November 2026',
      cols: ['Agent', 'Who it calls', 'What for', 'Where'],
      rows: [
        ['Let Google Call, in Search', 'Stores near the searcher', 'Stock, price and promotions', 'US'],
        ['Google’s calls for customers', 'Businesses on Google', 'Bookings, wait times, prices', 'US, most states'],
        ['Gemini’s Call for me', 'Businesses, from the user’s number', 'Hours, stock, quotes, bookings', 'US, Pixel 11'],
        ['Meta’s Muse', 'US businesses', 'Haircuts, stock, quotes', 'US, beta rolling out'],
      ],
    },

    { kind: 'h2', id: 'for-business', text: 'Can AI agents make phone calls for a business?' },
    {
      kind: 'p',
      text: 'Yes. A voice agent is software a business runs to answer or make its own calls, such as an AI receptionist that books appointments or a line that calls customers back. Teams build them on voice platforms or buy them from vendors, and [AI voice agent testing](/blog/ai-voice-agent-testing) compares the tools they use to test one before launch.',
    },
    {
      kind: 'p',
      text: 'Businesses’ agents and customers’ agents now meet on the phone. Pindrop says it identified 727K confirmed AI agent interactions across its customers in 2 months. It labelled 94% of them good agents and 6% bad ones, from healthcare providers’ agents checking a claim’s status to fraud bots asking for refunds.',
    },
    {
      kind: 'p',
      text: 'A business that receives AI calls has practical choices to make. Pindrop advises contact centres to verify the customer, and what the agent may do for them, before sharing account details or making changes. Google’s help page says Google won’t call to ask about stock a business has already shared through Google Merchant Center.',
    },
    {
      kind: 'p',
      text: 'A business can stop Google’s automated calls by telling the caller, for example “Please stop calling my business”, or in its Business Profile settings. The checks for [AI agents calling businesses](/blog/agent-ready-website) cover what to test on the website, the phone line and the chat.',
    },

    { kind: 'h2', id: 'take-calls', text: 'Can AI take phone calls?' },
    {
      kind: 'p',
      text: 'Yes. AI receptionists and voice agents answer a business’s own number. They greet the caller, answer questions on prices and opening hours, book or move an appointment and transfer the call to a person when asked. Each of those steps can fail on a real call, so teams [test an AI receptionist before going live](/recipes/voice-agent-check) and again after every update.',
    },

    { kind: 'h2', id: 'legal', text: 'Is it legal for AI to make phone calls?' },
    {
      kind: 'p',
      text: 'Whether an AI call is allowed usually turns on who is called, what the call is for, whether that person agreed to it and where each side is. In the US the TCPA and the FCC’s rules apply nationwide, and states add rules of their own, such as on recording calls. The EU and the UK set their own.',
    },
    { kind: 'h3', id: 'us-artificial-voice', text: 'US: an AI voice is an artificial voice' },
    {
      kind: 'p',
      text: 'The Telephone Consumer Protection Act (TCPA) is the US federal law on automated calls. It makes it unlawful to call a mobile number using “an artificial or prerecorded voice” unless the call is made for emergency purposes or with the called party’s prior express consent. It also bars such calls to a residential line to deliver a message without that consent, subject to exceptions ([47 U.S.C. §227](' +
        USC_227 +
        ')).',
    },
    {
      kind: 'p',
      text: 'In February 2024 the Federal Communications Commission (FCC), which makes the rules under the TCPA, confirmed that AI voices fall under it. Its ruling says voice cloning and similar technologies produce “artificial” voice messages “because a person is not speaking them” ([FCC 24-17](' +
        FCC_24_17 +
        ')). So callers need the called party’s prior express consent before such a call to a mobile or home line, absent an emergency purpose or an exemption. Where the call advertises or telemarkets, the FCC’s rules require prior express written consent.',
    },
    {
      kind: 'quote',
      text: 'In this Declaratory Ruling, we confirm that the TCPA’s restrictions on the use of “artificial or prerecorded voice” encompass current AI technologies that generate human voices.',
      cite: 'Federal Communications Commission, Declaratory Ruling FCC 24-17, 8 February 2024',
      href: FCC_24_17,
    },
    {
      kind: 'p',
      text: 'Before the ruling, the FCC said its authority covers uses of AI such as “emulating human speech and interacting with consumers as though they were live human callers”. The ruling adds that the TCPA “does not allow for any carve out of technologies that purport to provide the equivalent of a live agent”.',
    },
    {
      kind: 'p',
      text: 'The TCPA lets a person or business sue over a breach, where a state’s laws or court rules permit, for their actual losses or $500 for each violation, whichever is greater. A court may raise the award to up to 3 times that where the violation was wilful or knowing (47 U.S.C. §227(b)(3)).',
    },
    { kind: 'h3', id: 'us-identify', text: 'US: say who is calling' },
    {
      kind: 'p',
      text: 'The FCC’s rules set out what every artificial or prerecorded voice message must say ([47 CFR §64.1200](' +
        CFR_64_1200 +
        ')). At the beginning, it must “state clearly the identity of the business, individual, or other entity that is responsible for initiating the call”. During or after the message, it must give a phone number for that caller. Where it advertises or telemarkets to a home or mobile line, it must also offer an automated way to opt out by voice or keypad.',
    },
    {
      kind: 'p',
      text: 'The February 2024 ruling says these requirements apply to “any AI technology that initiates any outbound telephone call using an artificial or prerecorded voice to consumers”.',
    },
    { kind: 'h3', id: 'us-stop', text: 'US: stopping the calls' },
    {
      kind: 'p',
      text: 'Consent to these calls can be withdrawn. In an order released on 1 October 2026, the FCC let callers name one or more of 3 automated ways as the only ways for consumers to withdraw consent ([FCC 26-67](' +
        FCC_26_67 +
        ')). One of the ways allowed is “an automated, interactive voice or key press-activated opt-out mechanism on a call”. A caller that sets one must disclose it clearly on the call. The order counts any call made with an artificial or prerecorded voice as a robocall.',
    },
    {
      kind: 'p',
      text: 'The changes take effect on 25 November 2026 ([Federal Register](' +
        FED_REG +
        ')). From then, a caller may treat a stop in response to an informational call, such as an appointment reminder, as covering only that type of call. A stop in response to telemarketing still covers all of that caller’s future telemarketing calls. A caller that names its ways need not process a stop made any other way, and each stop made a named way must still be honoured “within a reasonable time not to exceed ten business days”, as the rules already required.',
    },
    { kind: 'h3', id: 'us-recording', text: 'US: recording the call' },
    {
      kind: 'p',
      text: 'Google says its calls for customers are “monitored and recorded for quality assurance”, and Gemini opens each call by saying it’s on a recorded line. Under US federal law, a party to a call may record it, unless the recording is made to commit a criminal or tortious act ([18 U.S.C. §2511](' +
        USC_2511 +
        ')).',
    },
    {
      kind: 'p',
      text: 'Some states ask for everyone’s consent. Washington makes it unlawful to record a private phone call without “the consent of all the participants in the communication”. It treats consent as given once one party announces, in any reasonably effective manner, that the call is about to be recorded, and the announcement is recorded too ([RCW 9.73.030](' +
        WA_RCW +
        ')).',
    },
    { kind: 'h3', id: 'eu', text: 'EU: say it’s an AI' },
    {
      kind: 'p',
      text: 'Article 50(1) of the EU AI Act covers AI systems “intended to interact directly with natural persons” ([Article 50](' +
        AI_ACT_50 +
        ')). Their providers must design them so those people are informed they are interacting with an AI system. The exception is where that is obvious to a reasonably well-informed person in the circumstances. Under Article 50(5), the information must come “at the latest at the time of the first interaction or exposure”, and the rule applies from 2 August 2026 ([Article 113](' +
        AI_ACT_113 +
        ')).',
    },
    { kind: 'h3', id: 'uk', text: 'UK: automated marketing calls' },
    {
      kind: 'p',
      text: 'In the UK, regulation 19 of the Privacy and Electronic Communications Regulations (PECR) bars direct marketing calls “comprising recorded matter” made through an automated calling system ([PECR, regulation 19](' +
        PECR_19 +
        ')). The exception is a subscriber who has told the caller they consent to such calls, where the caller shows its number or one on which it can be contacted. The regulation defines an automated calling system as one that can start a sequence of calls automatically and transmit “sounds which are not live speech”.',
    },
    {
      kind: 'p',
      text: 'Whether an AI voice generated during the call counts as recorded matter is a question for a lawyer.',
    },
    {
      kind: 'table',
      caption: 'Rules that apply to AI phone calls, by place, in short. Each rule has exceptions in its own text',
      cols: ['Where', 'Rule', 'What it asks of an AI call'],
      rows: [
        ['US federal', 'TCPA and FCC 24-17', 'Consent before calling mobiles and homes'],
        ['US federal', '47 CFR §64.1200(b)', 'Say at the start who is calling'],
        ['US federal', '§64.1200(a)(10), as revised from 25 Nov 2026', 'Honour stops made the named way within 10 business days'],
        ['Washington', 'RCW 9.73.030', 'Consent of everyone on a recorded call'],
        ['EU', 'AI Act, Article 50(1)', 'Tell people it’s an AI'],
        ['UK', 'PECR, regulation 19', 'Consent for automated marketing calls'],
      ],
    },
    { kind: 'h3', id: 'lawyer', text: 'When to ask a lawyer' },
    {
      kind: 'p',
      text: 'Ask a lawyer where your company makes or receives the calls before any of these:',
    },
    {
      kind: 'list',
      items: [
        '**Calls to people.** An AI voice calling consumers’ mobiles or home lines, and any telemarketing call, which needs prior express written consent.',
        '**A real person’s voice.** A cloned voice, which the FCC names among the technologies the TCPA covers.',
        '**Recording.** Calls to or from states that need everyone’s consent, and recordings kept or shared later.',
        '**Health care and banking.** Both have exemptions in the FCC’s rules, each with conditions of its own.',
        '**More than one country.** A caller in one country and the person called in another, where both sets of rules can apply.',
      ],
    },

    { kind: 'h2', id: 'ai-customers', text: 'How AI customers call a company’s own line' },
    {
      kind: 'p',
      text: '**' + AI_CUSTOMER.definition + '** It works for the company that sends it, and the term is explained in full in [what AI customers are](/blog/ai-customers). Each AI customer rings from [its own phone number](/blog/how-ai-customers-work), which takes calls back too.',
    },
    {
      kind: 'p',
      text: '[Voice agent check](/recipes/voice-agent-check) calls a company’s AI receptionist every morning as new customers. The AI customers book a real slot, ask a price and ask for a person, then check each answer against the price list and opening hours. Each says at the start of the call that it’s an AI customer, who it works for and that the call is recorded, in voices and accents used with consent.',
    },
    {
      kind: 'p',
      text: 'It calls the numbers a company gives it, its own or a client’s with the client’s agreement, and 3 calls a morning leave the line free for real callers. Every call comes back with a verdict on each check and the recording, with the transcript timed to the second.',
    },
    {
      kind: 'p',
      text: '[AI disclosure check](/recipes/ai-disclosure-check) asks a company’s AI agents “Am I talking to a person?” every day and keeps each answer with its date and the wait for a person.',
    },
    {
      kind: 'p',
      text: 'Every AI customer says it’s an AI when it talks to a person. It never uses fake payment details and never gets round a CAPTCHA or a bot block, as [what every AI customer will and won’t do](/agents) sets out.',
    },
    {
      kind: 'p',
      text: 'Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026. If your company needs to know what callers hear on its own line every morning, with each call recorded and checked against its price list, use Obsession.',
    },
    {
      kind: 'cta',
      text: 'Your first AI agent check is free: 3 AI customers use a chat page or phone number your company runs, and your report lands within 4 days.',
      to: '/verify',
      label: 'Check your AI agents',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI phone calls' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Can AI make phone calls for you?',
          a: 'Yes, in the US. Google’s Search can ring nearby stores about stock and prices, or businesses about bookings, and send back the answers. Gemini’s Call for me phones businesses from a Pixel 11 owner’s own number, and Meta is rolling out calls to US businesses from its Muse agent.',
        },
        {
          q: 'Can Google AI make phone calls?',
          a: 'Yes. Google’s AI calls businesses for people who use Search or Maps, to book appointments, check restaurant wait times or confirm prices and stock, and Google records these calls. A business can opt out by telling the caller, for example “Please stop calling my business”, or in its Business Profile settings.',
        },
        {
          q: 'Can Muse AI make phone calls?',
          a: 'Yes, in the US, as a feature Meta is rolling out. Reuters reported in September 2026 that a Muse user can have the agent call US businesses to book a haircut, check stock or get quotes, and Pindrop matched Muse calls at contact centres from 9 September 2026.',
        },
        {
          q: 'Can AI take phone calls?',
          a: 'Yes. AI receptionists and voice agents answer a business’s own number, book appointments, answer questions on prices and opening hours and transfer callers to a person. In the EU, from 2 August 2026, the AI Act asks providers to design AI systems that talk to people so the people are told it’s an AI, unless that is obvious.',
        },
        {
          q: 'Is it legal for an AI to call me?',
          a: 'In the US, an AI voice counts as an artificial voice under the TCPA, so a call to your mobile or home line that uses one needs your prior express consent, absent an emergency purpose or an exemption. Telemarketing needs prior express written consent, and the call must say at the start who is responsible for it.',
        },
        {
          q: 'Do AI callers have to say they’re AI?',
          a: 'In the EU, from 2 August 2026, AI systems that talk to people must be designed so the people are told it’s an AI, unless that is obvious. In the US, the FCC’s rules ask an artificial voice call to name the business or person responsible at the start. Gemini says it’s an AI assistant from Google at the start of every call.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'General information, not legal advice',
      text: 'Each legal point names the place it applies and links to the law, the regulator’s own text or the official register, as they stood on 1 November 2026. It’s general information, not legal advice. For a specific plan, ask a lawyer where your company makes or receives the calls. Kestrelway is an invented company.',
    },
  ],

  sources: [
    { title: 'Let AI do the hard parts of your holiday shopping', publisher: 'Google', url: LET_GOOGLE_CALL, date: '2025-11-13' },
    { title: 'A new era for AI Search', publisher: 'Google', url: GOOGLE_IO, date: '2026-05-19' },
    { title: 'About automated calls and texts from Google to your business', publisher: 'Google Business Profile Help', url: GBP_CALLS },
    { title: 'Ask Gemini to handle your everyday phone calls', publisher: 'Gemini Apps Help', url: GEMINI_CALLS },
    { title: 'Introducing Muse: the world’s first personal AI agent built for everyone', publisher: 'Meta', url: MUSE, date: '2026-09-08' },
    { title: 'A new way for businesses and personal agents to work together', publisher: 'Meta for Business', url: META_BIZ, date: '2026-10-06' },
    {
      title: 'Exclusive: Meta testing a ‘human concierge’ for its new personal AI agent, Muse',
      publisher: 'Reuters, on KSL.com',
      url: REUTERS,
      date: '2026-09-22',
    },
    { title: 'Inside the detection of Meta Muse: two AI voices, one new security challenge', publisher: 'Pindrop', url: PINDROP, date: '2026-10-09' },
    { title: '47 U.S.C. §227, restrictions on the use of telephone equipment (TCPA)', publisher: 'Legal Information Institute, Cornell Law School', url: USC_227, date: '2019-12-30' },
    {
      title: 'Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts, Declaratory Ruling (FCC 24-17)',
      publisher: 'Federal Communications Commission',
      url: FCC_24_17,
      date: '2024-02-08',
    },
    { title: '47 CFR §64.1200, delivery restrictions', publisher: 'Legal Information Institute, Cornell Law School', url: CFR_64_1200 },
    {
      title: 'Rules and Regulations Implementing the Telephone Consumer Protection Act of 1991, Report and Order (FCC 26-67)',
      publisher: 'Federal Communications Commission',
      url: FCC_26_67,
      date: '2026-10-01',
    },
    { title: 'Enhancing the Ability of Consumers To Control the Robocalls (91 FR 67214)', publisher: 'Federal Register', url: FED_REG, date: '2026-10-26' },
    { title: '18 U.S.C. §2511, interception of communications', publisher: 'Legal Information Institute, Cornell Law School', url: USC_2511, date: '1986' },
    { title: 'RCW 9.73.030: intercepting, recording, or divulging private communication', publisher: 'Washington State Legislature', url: WA_RCW, date: '2021' },
    { title: 'AI Act, Article 50: transparency obligations', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_50, date: '2026-07-27' },
    { title: 'AI Act, Article 113: entry into force and application', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_113, date: '2026-07-27' },
    { title: 'The Privacy and Electronic Communications (EC Directive) Regulations 2003, regulation 19', publisher: 'legislation.gov.uk', url: PECR_19, date: '2016-05-16' },
  ],

  related: ['recipe:voice-agent-check', 'recipe:ai-disclosure-check', 'agent-ready-website', 'how-ai-customers-work'],
}
