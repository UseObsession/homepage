import type { BlogPost } from './types'

/* Wave 2, batch B (_research/seo/wave2-pull-23nov/PLAN.md, row 11; 23 Nov 2026). Primary "how to build an ai
   receptionist"; secondaries from Google suggestions (US and UK, 23 Nov 2026, autocomplete_23nov.json): how to make an
   ai receptionist, how to set up an ai receptionist, how to make an ai receptionist for free, how to build an ai voice
   receptionist, how to build an ai dental receptionist. Never bare "ai receptionist" (/use-cases/ai-receptionist) or
   "ai receptionist phone number" (/blueprints/talk-to-customers). Readers: small-business owners and office managers,
   and the developers and agencies who build receptionists for them. Spine: the how-to guide, five steps in build order
   with a pass for each, the blueprints as the second door, costs, the rules, testing, the dental build, FAQ, note and
   sources. Facts with their URLs: _research/seo/wave2-pull-23nov/research/how-to-build-an-ai-receptionist.json.
   Read on 23 Nov 2026, each on its own page: Retell AI's and Vapi's pricing pages; Google Calendar's freebusy query and
   events.insert references; 18 U.S.C. § 2511 (Cornell LII); California Penal Code § 632 (leginfo); the FCC's
   Declaratory Ruling FCC 24-17 (released 8 Feb 2024); HHS's business associates FAQ. Obsession's prices are from
   src/content/prices.ts (number $2 a month, calls $0.012 a minute, texts $0.015, inbox $0.50, emails $0.40 per 1,000,
   a persona's own voice $0.0676 a minute, event log $5 per million, US texting registration $25 once then $17 a month,
   outside every plan; Free's number receives 50 texts and 30 call minutes and sends none). The three-size bill was
   worked with the pricing engine (monthlyBill) on the cheapest plan for each size, registration added on top: 3 numbers,
   9,000 minutes, 3,750 texts, 3 inboxes, 3,000 emails is Startup $160.95 + $17; 1 number, 3,000 minutes, 1,250 texts,
   1 inbox, 1,000 emails is Developer $57.65 + $17; 1 number, 600 minutes, 250 texts, 1 inbox, 200 emails is Developer
   $20 + $17. Product lines as /agents states them. No Inkbox or TinyFish. Alderbank Dental at alderbank.example and every
   row in the picture are invented; the phone number is in the range kept for fiction. British English, no dashes. */

const RETELL = 'https://www.retellai.com/pricing'
const VAPI = 'https://vapi.ai/pricing'
const GCAL_FREEBUSY = 'https://developers.google.com/workspace/calendar/api/v3/reference/freebusy/query'
const GCAL_INSERT = 'https://developers.google.com/workspace/calendar/api/v3/reference/events/insert'
const USC_2511 = 'https://www.law.cornell.edu/uscode/text/18/2511'
const CA_632 = 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=632'
const FCC_24_17 = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'
const HHS_BA = 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html'

export const post: BlogPost = {
  slug: 'how-to-build-an-ai-receptionist',
  title: 'How to build an AI receptionist: answer every call, book it and confirm by text',
  dek: 'Five steps in the order you build them, from the phone number to a log of every call. Each step says what a pass looks like, with prices from each provider’s own page as read on 23 November 2026.',
  metaTitle: 'How to build an AI receptionist that books your customers',
  description:
    'How to build an AI receptionist: a phone number, a voice agent, your calendar, a text and an email to confirm each booking, and a log of every call.',
  answer:
    'To build an AI receptionist, give it its own phone number, connect a voice agent that answers in your business’s name, and let it check your calendar and book the slot. Then confirm each booking by text and email from the same identity, and keep every call’s transcript in one log. Teams without developers can pick ready-made jobs instead, such as missed call text back and appointment reminders, and Obsession runs them.',
  primaryKeyword: 'how to build an ai receptionist',
  keywords: [
    'how to make an ai receptionist',
    'how to set up an ai receptionist',
    'how to make an ai receptionist for free',
    'how to build an ai voice receptionist',
    'how to build an ai dental receptionist',
  ],
  category: 'Talk to customers',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 10,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'A call at 21:04, booked by 21:08',
      who: 'Ava, the AI receptionist at Alderbank Dental',
      rows: [
        { time: '21:04', text: 'call.received', detail: '+1 512 555 0142 · Ava says she’s an AI and the call is recorded', tone: 'info' },
        { time: '21:05', text: 'Calendar checked', detail: 'Thursday: 08:30, 11:00 and 15:30 free', tone: 'info' },
        { time: '21:07', text: 'call.ended', detail: 'Booked: new patient exam, Thu 11:00 · transcript kept', tone: 'ok' },
        { time: '21:07', text: 'Confirmation texted', detail: 'From the number the caller rang', tone: 'ok' },
        { time: '21:08', text: 'email.sent', detail: 'Forms and directions from ava@alderbank.example', tone: 'ok' },
        { time: '21:31', text: 'sms.received', detail: '“Can I bring my daughter for a check-up too?”', tone: 'info' },
      ],
      foot: 'Example: every call, text and email lands in one event log. Alderbank Dental and alderbank.example are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI receptionist answers your business’s phone at any hour, books each caller into your calendar and confirms the booking by text and email. Building one takes five parts: a phone number, a [voice agent](/glossary/voice-agent), the calendar, the confirmation and a call log. The steps suit small businesses and clinics building their own, and the developers and agencies who build receptionists for them. Build them in order, and move on when each step passes its test.',
    },

    { kind: 'h2', id: 'decide', text: 'What to decide first' },
    {
      kind: 'p',
      text: 'Five decisions shape the build. Write them down before the first call, because the voice agent’s instructions come straight from them.',
    },
    {
      kind: 'list',
      items: [
        '**Which calls it takes:** calls after hours, calls nobody picks up within four rings, or every call.',
        '**What it books:** each service, how long it takes and who does it, such as a 30-minute new patient exam with any hygienist.',
        '**When it hands over to a person:** emergencies, complaints, a caller who asks for a person, and any question about money it hasn’t been given an answer for.',
        '**Which number it answers:** a new number of its own, or your existing line forwarded to it when nobody answers.',
        '**Whether it texts:** a confirmation and a reminder by text need a number that sends texts, and in the US a texting registration before the first one.',
      ],
    },

    { kind: 'h2', id: 'two-ways', text: 'Build it from pieces, or pick a blueprint' },
    {
      kind: 'p',
      text: 'Developers build the receptionist from four pieces: a number, a voice agent, the calendar and a webhook. A webhook is the address in your app where each new call, text or email arrives. Teams without developers pick ready-made jobs, and Obsession runs them. [Missed call text back](/blueprints/missed-call-text-back) texts every caller you miss within seconds, and [Appointment reminders](/blueprints/appointment-reminders) texts everyone booked the day before.',
    },

    { kind: 'h2', id: 'number', text: 'Step 1: give it a phone number' },
    {
      kind: 'p',
      text: 'The receptionist needs a number it owns, so the call, the confirmation text and the caller’s reply all reach the same place. Keep your existing number on your website and set your phone provider to forward calls to the receptionist when nobody answers or the line is busy. Or publish the receptionist’s own number for bookings.',
    },
    {
      kind: 'p',
      text: 'On Obsession, one call creates the number: obsession.numbers.create({ country: "US" }). A US or UK number costs $2 a month. The [Free plan](/pricing) includes one that receives up to 50 texts and 30 call minutes a month, enough to build and test with. Each call reaches your webhook as call.received. The step passes when a test call from your own mobile rings the number and shows up as an event.',
    },

    { kind: 'h2', id: 'voice', text: 'Step 2: connect a voice agent' },
    {
      kind: 'p',
      text: 'The voice agent listens, decides what to say and speaks. Bring one you have built, or connect one, and point the number at it so the audio streams both ways. The voice can come from a voice agent platform or from the receptionist’s own persona:',
    },
    {
      kind: 'table',
      caption: 'Ways to give an AI receptionist its voice, from each provider’s own pricing page as listed on 23 November 2026. Prices in US dollars',
      cols: ['Voice', 'What it includes', 'Price'],
      rows: [
        [`[Retell AI](${RETELL})`, 'Agent templates, call transcripts, simulated test calls and webhooks; 20 calls at once included', '$0.07 to $0.31 a minute\n$10 free credit'],
        [`[Vapi](${VAPI})`, 'Your choice of transcriber, model and voice, with test calls simulated before customers hear the agent', '$0.05 a minute hosting, plus models at cost\n$5 free credit'],
        ['A persona’s own voice on [Obsession](/phone)', 'The receptionist speaks for itself on its own number, every call in your event log', '$0.0676 a minute, on top of the call minute'],
      ],
    },
    {
      kind: 'p',
      text: 'Write the agent’s instructions from your five decisions. Its first sentence says it’s an AI and that the call is recorded, then asks how it can help. Give it your hours, services, prices and handover rules as plain text it reads on every call, and two tools: one that finds free slots and one that books. [How to build an AI agent from scratch](/blog/how-to-build-an-ai-agent-from-scratch) covers tools, the agent loop and guardrails in detail.',
    },
    {
      kind: 'p',
      text: 'The step passes when 20 test calls each end the way your rules say. Include a cancellation, an emergency, a caller who asks for a person and a question the agent has no answer to.',
    },

    { kind: 'h2', id: 'calendar', text: 'Step 3: let it check the calendar and book' },
    {
      kind: 'p',
      text:
        'The two tools call your calendar. On Google Calendar, the [freebusy query](' +
        GCAL_FREEBUSY +
        ') returns the busy times of the calendars you name between two times. Its [events.insert](' +
        GCAL_INSERT +
        ') method creates the booking, with sendUpdates set to all if the calendar should also email the guest. Booking tools and practice management systems offer the same two jobs to developers through their own interfaces.',
    },
    {
      kind: 'p',
      text: 'Have the agent read back the day, time and service before it books, and book only a slot the query returned as free. The step passes when a test booking appears in the right calendar, and a second test caller who asks for the same slot is offered the next free one.',
    },

    { kind: 'h2', id: 'confirm', text: 'Step 4: confirm by text and email' },
    {
      kind: 'p',
      text: 'When the call ends, the receptionist texts the time from the number the caller rang and emails the details, such as directions or forms, from its own inbox. Replies come back to the same identity, so a caller who texts “Can we make it 4pm?” reaches the receptionist that booked them.',
    },
    {
      kind: 'p',
      text: 'On Obsession that is number.sms({ to, text }) and inbox.send({ to, subject, text }), and each reply arrives as sms.received or email.received. A text costs $0.015 with carrier fees included, an inbox $0.50 a month and emails $0.40 per 1,000.',
    },
    {
      kind: 'p',
      text: 'US business texting needs a [10DLC registration](/blog/10dlc-registration) before the first text, which US carriers require for texts sent from ordinary 10-digit numbers. Obsession files it for you: $25 once per campaign, then $17 a month while it’s active, billed apart from every plan. Texting runs on every paid plan, since the Free plan’s number receives texts and sends none. The step passes when a test booking sends one text and one email, and a reply to each reaches your webhook.',
    },

    { kind: 'h2', id: 'log', text: 'Step 5: keep every call in one log' },
    {
      kind: 'p',
      text: 'Each call, text and email should land in one timeline per caller, so the morning review takes minutes. Subscribe once with obsession.events.subscribe, and every call.received, call.ended, sms.received and email.sent event reaches your webhook, with the call’s transcript on call.ended. The [event log](/personas) keeps them all, timestamped, at $5 per million events.',
    },
    {
      kind: 'p',
      text: 'The step passes when one test caller’s call, text and email appear as one thread, in order, with the transcript attached.',
    },

    { kind: 'h2', id: 'blueprints', text: 'Or pick the ready-made jobs' },
    {
      kind: 'p',
      text: 'Teams who don’t write code skip the five steps. They pick a blueprint, a ready-made job Obsession runs, connect the calendar and receive every result in Slack, a sheet or their inbox.',
    },
    {
      kind: 'list',
      items: [
        '**[Missed call text back](/blueprints/missed-call-text-back):** every caller you miss gets a text within seconds, in your business’s name, with their questions answered from your hours and prices and a time booked.',
        '**[Appointment reminders](/blueprints/appointment-reminders):** everyone booked gets a text the day before, anyone who hasn’t confirmed gets a call if they agreed to calls, and every no-show is offered a new time.',
        '**[Speed-to-lead callback](/blueprints/speed-to-lead-callback):** every new web form lead gets a call within a minute from your agent’s own number, and a text if they miss it.',
      ],
    },
    {
      kind: 'cta',
      text: 'Every caller you miss texted back within seconds, answered from your hours and prices and booked into your calendar, with every reply in Slack or your CRM.',
      to: '/blueprints/missed-call-text-back',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'costs', text: 'What an AI receptionist costs' },
    {
      kind: 'p',
      text: 'The bill has two parts: the voice agent’s minutes, from whichever provider runs it, and the number, call minutes, texts and inbox. Obsession’s part at three sizes, worked with its own pricing:',
    },
    {
      kind: 'table',
      caption: 'Example inputs: calls average 3 minutes, each caller gets 1 text and 1 email after the call, and 1 in 4 replies by text. Obsession’s part in US dollars on the cheapest plan, at prices as listed on 23 November 2026, before the voice agent’s own minutes',
      cols: ['Calls a month', 'Numbers', 'Plan', 'A month', 'Once'],
      rows: [
        ['3,000, across 3 locations', '3', 'Startup', '$178', '$25'],
        ['1,000, one busy location', '1', 'Developer', '$75', '$25'],
        ['200, an owner-run practice', '1', 'Developer', '$37', '$25'],
      ],
    },
    {
      kind: 'p',
      text: 'Each monthly figure includes the $17 texting registration, and the $25 is its filing, once per campaign. Add the voice agent: at Retell AI’s $0.07 to $0.31 a minute, 1,000 calls of 3 minutes add $210 to $930 a month. [AI voice agent for small business](/blog/ai-voice-agent-for-small-business) compares voice agent providers and answering services at each size, and what a missed call costs.',
    },

    { kind: 'h2', id: 'rules', text: 'The rules it keeps' },
    {
      kind: 'list',
      items: [
        '**It says it’s an AI.** The receptionist says so at the start of every call and in every first text. [Chatbot disclosure laws](/blog/chatbot-disclosure-laws) sets out where the law requires it; every Obsession agent does it everywhere.',
        `**It tells callers the call is recorded.** US federal law lets one party to a call consent to recording it ([18 U.S.C. § 2511](${USC_2511})), but some states need every party’s consent. California’s Penal Code [section 632](${CA_632}) covers recording a confidential call without “the consent of all parties”. Saying it at the start of every call means every caller hears it, wherever they are calling from.`,
        `**It calls out only with consent.** Reminder calls and callbacks use an AI voice, which the FCC’s [February 2024 ruling](${FCC_24_17}) puts under the Telephone Consumer Protection Act (TCPA), so each needs the called person’s prior express consent, unless an emergency or an exemption applies. [Can AI make phone calls](/blog/can-ai-make-phone-calls) covers the calling rules.`,
        '**It texts only people who gave the business their number,** and stops when someone replies STOP.',
        '**It stops at payment.** It stops before payment unless it’s given the customer’s own payment card.',
      ],
    },

    { kind: 'h2', id: 'test', text: 'Test it before it takes real calls' },
    {
      kind: 'p',
      text: 'Call it the way customers will: at 21:00, from a withheld number, with a question it has no answer to, and as a caller who asks for a person. [Voice agent check](/blueprints/voice-agent-check) calls your receptionist every morning as a new customer and keeps every answer word for word, and [AI voice agent testing](/blog/ai-voice-agent-testing) compares the tools that test voice agents.',
    },
    {
      kind: 'p',
      text: 'Once it is live, watch three numbers each week: missed calls, bookings made and the booking rate on calls that used to reach voicemail.',
    },

    { kind: 'h2', id: 'dental', text: 'Building an AI dental receptionist' },
    {
      kind: 'p',
      text: 'A dental practice adds three jobs to the build: new patient calls, recalls for patients due a cleaning, and forms emailed before the first visit. The receptionist books and confirms, and the handover rules send clinical questions to the dentist. The [AI agent for dental practices](/use-cases/ai-agent-for-dental-practices) shows the same build at a practice, from the first call to the six-month recall.',
    },
    {
      kind: 'p',
      text:
        'In the US, a provider that creates, receives, keeps or sends patients’ health information for a practice can be a business associate under HIPAA, the US health privacy law. [HHS](' +
        HHS_BA +
        ') sets out the business associate agreement the practice needs with each one. List every system a booking passes through, such as the practice management system, and confirm each agreement before patient details reach it.',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about building an AI receptionist' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How long does it take to build an AI receptionist?',
          a: 'The build takes five steps, each with a test to pass, from the phone number to a log of every call. Most of the time goes into the agent’s instructions and 20 test calls, since the voice agent platform and the calendar handle the audio and the booking.',
        },
        {
          q: 'How do I make an AI receptionist for free?',
          a: 'Build and test on free allowances. Obsession’s Free plan includes 3 inboxes and a number that receives 50 texts and 30 call minutes a month, without a credit card. On 23 November 2026, Retell AI listed $10 of free credit and Vapi $5. Texting customers and calling them back run on a paid plan, from $20 a month.',
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'How do I set up an AI receptionist on my existing number?',
          a: 'Keep your number and set your phone provider to forward calls to the receptionist’s number when nobody answers or the line is busy. Callers dial the number they know, and the receptionist answers the calls your team can’t take.',
        },
        {
          q: 'How do I build an AI voice receptionist?',
          a: 'Give it a phone number and point the number at a voice agent, one you build or one you connect, so the audio streams both ways. Then give the voice agent two tools, one that finds free slots in your calendar and one that books, and instructions written from your hours, services and handover rules.',
          link: { label: 'Phone numbers for AI agents', to: '/phone' },
        },
        {
          q: 'Does an AI receptionist have to say it’s an AI?',
          a: 'Every Obsession agent says it’s an AI to anyone it speaks to, on every call and in every first text, whatever the local rule. Disclosure laws differ by place and by what the bot is doing, and saying it every time keeps one rule for every caller.',
          link: { label: 'What every agent keeps to', to: '/agents' },
        },
        {
          q: 'What does an AI receptionist cost?',
          a: 'Two parts: the voice agent’s minutes and the phone side. On 23 November 2026, Retell AI listed $0.07 to $0.31 a minute. Obsession’s phone side came to about $178 a month at 3,000 calls across 3 locations and $37 at 200 calls. Both include the $17 a month US texting registration.',
        },
        {
          q: 'Can an AI receptionist text customers in the US?',
          a: 'Yes, once the number’s texting is registered under 10DLC, which US carriers require for business texts from 10-digit numbers. Obsession files the registration for you, at $25 once per campaign and then $17 a month while it’s active. The receptionist texts people who gave the business their number, and stops at STOP.',
          link: { label: '10DLC registration', to: '/blog/10dlc-registration' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sources',
      text: 'This is general information, not legal advice. The recording, calling and health privacy rules here are those of US federal law, California’s Penal Code, the FCC and HHS as published on 23 November 2026. They differ by state and country, so check them with a lawyer for your own business. Provider prices are from each provider’s own pricing page on 23 November 2026. Alderbank Dental in the illustration is invented.',
    },
  ],

  sources: [
    { title: 'Retell AI pricing', publisher: 'Retell AI', url: RETELL },
    { title: 'Vapi pricing', publisher: 'Vapi', url: VAPI },
    { title: 'Freebusy: query', publisher: 'Google for Developers (Google Calendar API)', url: GCAL_FREEBUSY },
    { title: 'Events: insert', publisher: 'Google for Developers (Google Calendar API)', url: GCAL_INSERT },
    { title: '18 U.S. Code § 2511, interception and disclosure of communications', publisher: 'Legal Information Institute, Cornell Law School', url: USC_2511 },
    { title: 'California Penal Code § 632', publisher: 'California Legislative Information', url: CA_632 },
    { title: 'Declaratory Ruling FCC 24-17: AI technologies and unwanted robocalls', publisher: 'Federal Communications Commission', url: FCC_24_17, date: '2024-02-08' },
    { title: 'Business Associates Frequently Asked Questions', publisher: 'US Department of Health and Human Services', url: HHS_BA },
  ],

  related: [
    '/use-cases/ai-receptionist',
    '/use-cases/ai-agent-for-dental-practices',
    '/phone',
    'recipe:missed-call-text-back',
    'recipe:appointment-reminders',
    'recipe:speed-to-lead-callback',
    'recipe:voice-agent-check',
    'ai-voice-agent-for-small-business',
    '10dlc-registration',
  ],
}
