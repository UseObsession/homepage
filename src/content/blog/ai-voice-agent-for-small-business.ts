import type { BlogPost } from './types'

/* Kit article (_research/seo/revamp-22nov/PLAN_articles.md, row 4; Seun's "write them", 22 Nov 2026): an AI voice agent
   for small business. Primary "ai voice agent for small business"; secondaries from Google autocomplete (US and UK,
   22 Nov 2026, autocomplete_articles_22nov.json and a fresh run for the cost and answering-service phrases): ai voice
   agent pricing, ai voice agent cost per minute, ai answering service for small business, ai phone answering service
   for small business. /use-cases/ai-receptionist keeps "ai receptionist" and "ai receptionist for small business";
   /blog/ai-voice-agent-testing keeps testing; /blog/can-ai-make-phone-calls keeps the calling law; /blog/10dlc-registration
   keeps registration. Every provider price was read on its own pricing page on 22 Nov 2026: Retell AI, Vapi, Goodcall,
   Smith.ai's AI Receptionist and Ruby. Synthflow was read and left out (one annual Enterprise agreement, no listed price).
   The Campaign Registry's 2026 introduction, CSP user guide (April 2026) and fee list (13 Aug 2026), the CTIA Messaging
   Principles (May 2023), the FCC's Declaratory Ruling FCC 24-17 and the BLS receptionist page (29 Oct 2026, May 2025
   wages) were read the same day. Obsession's prices are from src/content/prices.ts (number $2 a month, calls $0.012 a
   minute, texts $0.015, US texting registration $25 once then $17 a month, plans $20, $99, $499); the three-size bill
   was worked with the pricing engine on the cheapest plan for each size. The missed-call and three-size inputs are
   labelled examples. Fernhill Plumbing at fernhill.example is invented. British English, no dashes. */

const TCR_INTRO = 'https://www.campaignregistry.com/wp-content/uploads/TCR-Intro-2026-v4_comp.pdf'
const TCR_GUIDE = 'https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Apr_2026-v2_comp.pdf'
const TCR_FEES = 'https://www.campaignregistry.com/Assets/TCR%20Fees%20and%20Pricing.pdf'
const CTIA = 'https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf'
const FCC_24_17 = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'
const BLS = 'https://www.bls.gov/ooh/office-and-administrative-support/receptionists.htm'
const RETELL = 'https://www.retellai.com/pricing'
const VAPI = 'https://vapi.ai/pricing'
const GOODCALL = 'https://www.goodcall.com/pricing'
const SMITH = 'https://smith.ai/pricing/ai-receptionist'
const RUBY = 'https://www.ruby.com/pricing/'

export const post: BlogPost = {
  slug: 'ai-voice-agent-for-small-business',
  title: 'AI voice agent for small business: what it answers, the number it needs and what it costs',
  dek: 'Owners and office managers use voice agents to answer after-hours and overflow calls, book jobs and text the booking. Setup takes 8 steps, and US texting needs registering first. The costs are worked out at 200, 1,000 and 3,000 calls a month.',
  metaTitle: 'AI voice agent for small business: setup, numbers and costs',
  description:
    'An AI voice agent for small business answers calls, books jobs and texts after the call. Setup steps, the number it needs, US texting rules and costs.',
  answer:
    'An AI voice agent for small business answers your phone at any hour, books jobs into your calendar, quotes from your price list and passes urgent calls to a person. It needs a phone number to answer on and, to text customers in the US afterwards, a texting registration filed before the first text. On 22 November 2026, voice-agent builders listed $0.07 to $0.31 a minute, AI answering services started at $79 a month, and live receptionists at $250 a month for 50 minutes.',
  primaryKeyword: 'ai voice agent for small business',
  keywords: [
    'ai voice agent pricing',
    'ai voice agent cost per minute',
    'ai answering service for small business',
    'ai phone answering service for small business',
  ],
  category: 'Talk to customers',
  published: '2026-11-22',
  updated: '2026-11-22',
  readingMinutes: 13,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'fernhill.example · one after-hours call',
      who: 'The voice agent on Fernhill Plumbing’s number',
      rows: [
        { time: '19:42', text: 'Answered: “Fernhill’s AI assistant”', detail: 'Burst pipe under a kitchen sink', tone: 'ok' },
        { time: '19:45', text: 'Booked tomorrow at 08:00', detail: 'Written into the shared calendar', tone: 'ok' },
        { time: '19:45', text: 'Text sent with the booking', detail: 'Date, address and “Reply STOP to opt out”', tone: 'ok' },
        { time: '19:46', text: 'Call summary emailed to the owner', detail: 'Transcript attached', tone: 'info' },
        { time: '07:15', text: 'Reminder text sent', detail: 'The engineer’s name and arrival window', tone: 'ok' },
        { time: '07:21', text: 'Customer replied: “Gate code 4417”', detail: 'Passed to the engineer’s phone', tone: 'info' },
      ],
      foot: 'Example: Fernhill Plumbing, its customer and every time here are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI voice agent for small business answers your phone line in a natural voice and does what a front desk does on a call. It books the job, quotes from your price list, answers questions about hours and service areas, takes a message or puts the call through to you. Plumbers, salons, dental and vet practices, law firms, garages and property managers use them. They run from an owner with one van to a group with a dozen locations. Most start with the calls that go to voicemail today: after hours, weekends and the times the line is busy.',
    },

    { kind: 'h2', id: 'what-it-does', text: 'What an AI voice agent does on a call' },
    {
      kind: 'p',
      text: 'A voice agent turns the caller’s speech into text and writes a reply with a large language model (LLM), the AI model behind tools such as ChatGPT. It speaks the reply fast enough to hold a normal conversation. What it can do on the call depends on what you connect to it:',
    },
    {
      kind: 'list',
      items: [
        '**Book and reschedule.** With your calendar or booking system connected, it offers real slots and writes the booking in.',
        '**Answer from your own facts.** Hours, service areas, prices from your list, parking and what to bring. For anything off the list, it takes a message.',
        '**Sort the call.** It asks what the job is, how urgent it is and where, then books it, rings the on-call mobile or takes details for a callback.',
        '**Take messages.** It writes a summary of each call and sends it to you by email or text, with the transcript.',
        '**Hand over to a person.** It puts emergencies and upset callers through to a number you choose.',
        '**Follow up.** After the call it texts the booking, the address or a link to your forms, and emails a quote.',
      ],
    },

    { kind: 'h2', id: 'missed-calls', text: 'What missed calls cost at three sizes' },
    {
      kind: 'p',
      text: 'Your phone bill or phone system shows how many calls went unanswered last month. The value of answering them is your own sum: missed calls, times the share of those callers who would have booked, times what a job is worth to you.',
    },
    {
      kind: 'table',
      caption: 'Example inputs: 1 in 10 calls goes unanswered, 1 in 5 of those callers would have booked, and a job is worth $300. Put in your own numbers',
      cols: ['Calls a month', 'Missed calls', 'Jobs lost', 'Lost a month', 'Lost a year'],
      rows: [
        ['3,000, across 3 locations', '300', '60', '$18,000', '$216,000'],
        ['1,000, one busy location', '100', '20', '$6,000', '$72,000'],
        ['200, an owner-run trade', '20', '4', '$1,200', '$14,400'],
      ],
    },
    {
      kind: 'p',
      text: 'A voice agent works on the second column: it answers every call at once, day or night, so the response time on a new enquiry drops to the first ring. The numbers to watch are booked jobs each month and the booking rate on calls that used to reach voicemail.',
    },

    { kind: 'h2', id: 'number', text: 'The phone number your voice agent answers on' },
    {
      kind: 'p',
      text: 'Every voice agent needs a phone number to answer. There are 3 ways to give it one, and the choice decides what your customers dial:',
    },
    {
      kind: 'list',
      items: [
        '**Forward your existing number.** Keep the number on your van, website and Google listing. Set your phone system to forward calls to the agent’s number after hours, when the line is busy or after a few rings. Customers dial the number they know, and you can turn forwarding off in a minute.',
        '**Port your number to the agent’s provider.** The number moves to the new provider and the agent answers it first. Porting needs your account details from the old provider and takes days, so plan it outside a busy week.',
        '**Use a new number.** A local number for the agent alone suits a new location, a campaign or a separate after-hours line. Every listing that shows your old number then needs changing.',
      ],
    },
    {
      kind: 'p',
      text: 'Forwarding is the usual first step. The agent takes after-hours and overflow calls from day one, and you move more calls to it once its answers and bookings check out.',
    },

    { kind: 'h2', id: 'texts', text: 'Texts after the call, and US texting registration' },
    {
      kind: 'p',
      text: 'Much of what a call is worth lands in the text that follows it. That’s the booking with its date and address, a link to the forms, the quote or a reminder the day before. A text from the agent’s own number also gives the customer something to reply to, and the reply reaches the same agent.',
    },
    {
      kind: 'p',
      text: `In the US, a business that texts customers from an ordinary 10-digit number registers first, a process known as 10DLC. The Campaign Registry, which holds the register for US carriers, says [any business that texts its customers on 10DLC is required to register](${TCR_INTRO}), including businesses that send individual messages that aren’t marketing. Your messaging provider files your brand (your legal name and tax ID) and a campaign (what you text and how people agree to it). The registry puts review at 1 to 4 weeks. Its [user guide](${TCR_GUIDE}) names a single doctor’s office and a single pizza shop as examples for the Low Volume Mixed campaign, and its [fee list](${TCR_FEES}) prices that campaign at $1.50 a month. The steps, the fees and the usual reasons a filing is rejected are in [10DLC registration: a plain guide](/blog/10dlc-registration).`,
    },
    {
      kind: 'p',
      text: `Consent matters as much as registration. CTIA, the US wireless industry’s trade association, publishes [messaging principles](${CTIA}) that treat appointment reminders and welcome texts as informational: the customer agrees to texts for that purpose when they give their number. So the agent asks on the call, for example “Can I text you the booking?”, and the first text says how to reply [STOP](/glossary/sms-stop) to opt out.`,
    },

    { kind: 'h2', id: 'outbound', text: 'Calls your agent places, and saying it’s an AI' },
    {
      kind: 'p',
      text: `Answering the calls customers place is the simple case. Calls the agent places are different. In February 2024 the Federal Communications Commission (FCC) confirmed that AI-generated voices count as an “artificial” voice under the Telephone Consumer Protection Act ([FCC 24-17](${FCC_24_17})). So a call in an AI voice to a mobile or home line needs the person’s prior express consent, unless it’s an emergency or exempt. A marketing call needs that consent in writing.`,
    },
    {
      kind: 'p',
      text: 'For a local business, the usual outbound call is the callback a customer asked for. Record that they asked, and keep sales calls out of the agent’s job until your consent records are in order. Have the agent say it’s an AI assistant at the start of every call, so callers know who they’re talking to and asking for a person feels natural. This is general information, never legal advice; [can AI make phone calls](/blog/can-ai-make-phone-calls) covers the calling law in more detail.',
    },

    { kind: 'h2', id: 'setup', text: 'How to set up an AI voice agent, step by step' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**List why people call.** Take a week of calls from your phone bill or call log and sort them: new bookings, prices, hours, job status, emergencies. It’s ready when you have the top 5 reasons, each with the answer you’d give.',
        '**Write the rules.** Which slots it can book, which prices it can quote, what counts as an emergency and whose mobile it rings, and when it takes a message. It’s ready when a new receptionist could follow the page.',
        '**Pick a service or a builder.** An AI answering service can be answering the same day. A voice-agent builder, where you pick the AI model and the voice, suits a developer or an agency building the agent to your rules.',
        '**Connect your calendar and price list.** It’s ready when a test booking appears in your calendar with the caller’s name and number.',
        '**Set up the number.** Forward after-hours and overflow calls first. It’s ready when a call to your number at 9pm reaches the agent.',
        '**Register for texting before the first text.** It’s ready when your provider shows the campaign as approved.',
        '**Call it as a customer before launch.** Book a slot, ask a price, ask for a person, call from a noisy street and call at 11pm. It’s ready when every answer is right, the booking lands in your calendar and the promised text arrives within a minute. [How to test a voice agent as a caller](/blog/ai-voice-agent-testing) has a fuller checklist.',
        '**Go live in stages, and watch the numbers.** After hours first, then overflow, then every call. Each week, watch booked jobs, the booking rate, calls put through to a person and callbacks kept.',
      ],
    },

    { kind: 'h2', id: 'costs', text: 'What an AI voice agent costs at three sizes' },
    {
      kind: 'p',
      text: 'Providers price by different units: voice-agent builders by the minute, AI answering services by the call or by the caller, and live receptionists by the minute. The table works each one out from the prices listed on 22 November 2026 for three sizes of business, so you can find your own row.',
    },
    {
      kind: 'table',
      caption: 'Example inputs: calls average 3 minutes, each caller gets 1 text after the call and 1 in 4 replies. US dollars a month, from each provider’s own pricing page as listed on 22 November 2026',
      cols: ['Option', '3,000 calls a month', '1,000 calls a month', '200 calls a month'],
      rows: [
        ['Retell AI: voice minutes, $0.07 to $0.31', '$630 to $2,790', '$210 to $930', '$42 to $186'],
        ['Vapi: its own calculator, $82 to $129 per 1,000 minutes', '$738 to $1,161', '$246 to $387', '$49 to $77'],
        ['Goodcall: priced per caller', '$299', 'About $172', 'About $105'],
        ['Smith.ai AI Receptionist: priced per call', 'Quoted', '$1,000 or more', '$385'],
        ['Ruby: live receptionists, priced per minute', 'Quoted', 'Quoted', '$1,725 or more'],
        ['One receptionist on the US median wage', '$3,168, office hours', '$3,168, office hours', '$3,168, office hours'],
        ['Obsession: number, call minutes, texts and the $17 a month texting registration (plus $25 once), beside your voice agent', '$171', '$74', '$37'],
      ],
    },
    {
      kind: 'list',
      items: [
        `**Retell AI and Vapi** price the voice agent’s minutes. [Retell](${RETELL}) adds $2 a month a number, and texts at $20 a month plus $0.01 each. [Vapi](${VAPI}) includes 1 number on pay as you go and its calculator puts 1,000 minutes at $82 to $129.`,
        `**[Goodcall](${GOODCALL})** counts unique callers, about 1.5 calls each by its own figures. Its $79 plan covers about 150 calls, $129 about 750 and $299 about 3,000, each with a local number.`,
        `**[Smith.ai](${SMITH})** charges per call: its Pro plan is $270 for 150 calls, each extra call $2.30, and it quotes for more than 1,000 calls.`,
        `**[Ruby](${RUBY})** lists $1,725 a month for 500 minutes, short of the 600 minutes the smallest business here uses.`,
        `**The receptionist line** is the [US median pay for receptionists](${BLS}), $38,010 a year in May 2025, before payroll taxes and cover for holidays.`,
      ],
    },

    { kind: 'h2', id: 'compared', text: 'AI voice agents and answering services compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 22 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to answer a local business’s calls, from each provider’s own pages, as listed on 22 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Voicemail', 'Costs nothing and takes every message', 'Free', 'A caller who wanted a booking may ring the next business', 'Owners who return every call within the hour'],
        ['A receptionist on staff', 'Knows your customers, jobs and walk-ins', '$38,010 a year, US median pay', 'Office hours, one call at a time', 'Busy front desks'],
        ['Ruby', 'Live receptionists around the clock, with bilingual support', '$250 a month for 50 minutes\n$1,725 for 500 minutes', 'Priced by the minute', 'Calls where a person matters most'],
        ['Smith.ai AI Receptionist', 'AI answering 24/7, lead qualification and transfer to a live North America-based receptionist', 'Free for 25 calls\n$150 to $500 a month for 75 to 300 calls', 'Billed per call; quoted past 1,000 calls', 'Firms that want a person on standby'],
        ['Goodcall', 'An AI agent with a local number included, or your number forwarded', '$79, $129 or $299 a month\nAbout 150 to 3,000 calls', 'Billed per unique caller', 'Owner-run shops and multi-site groups'],
        ['Retell AI', 'Build your own agent, pick the model and voice; 20 calls at once included', '$0.07 to $0.31 a minute\n$2 a month a number\n$10 free credit', 'You build and test the agent, or pay someone to', 'A developer or agency building to your rules'],
        ['Vapi', 'Bring any speech, model and voice provider; Vapi’s own telephony is free, carrier fees are extra', '$0.05 a minute plus providers\n$5 free credit', '4 calls at once on pay as you go; you build the agent', 'Developers building agents for many businesses'],
        [
          'Obsession (ours): [Phone](/phone), [Voice agent check](/blueprints/voice-agent-check)',
          'Its own number for calls and texts, an inbox and a browser under one identity; every call, text and email in one event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Your voice agent speaks, or one connects through us; US texting registration is extra',
          'Agents that call, text and email from one identity, checked every morning',
        ],
      ],
    },

    { kind: 'h2', id: 'which-fits', text: 'Which option fits your business' },
    {
      kind: 'list',
      items: [
        '**One location, answering this week:** Goodcall from $79 a month, or Smith.ai’s free plan for 25 calls.',
        '**A person ready behind the AI:** Smith.ai, whose AI can put a call through to a live receptionist. For a person on every call, Ruby from $250 a month.',
        '**An agent built to your rules by a developer or an agency, priced by the minute:** Retell AI or Vapi.',
        '**Texts, emails and callbacks after the call from the agent’s own number, checked every morning:** Obsession’s number and inbox beside your voice agent, with the Voice agent check blueprint.',
        '**Fewer than 5 calls a day, each returned within the hour:** voicemail and your own phone.',
      ],
    },

    { kind: 'h2', id: 'own-identity', text: 'What changes when the agent has its own number, inbox and browser' },
    {
      kind: 'p',
      text: 'A voice agent that only talks stops when the call ends. The jobs a business loses sit after it: the text with the booking, the emailed quote, the reply that comes two days later, the callback promised for the next morning. An [AI receptionist](/use-cases/ai-receptionist) with its own number, inbox and browser handles those itself. It texts from the number the customer called, emails the quote from its own address, reads the reply and fills in a supplier’s booking form in the browser. Every call, text and email sits on one timeline per customer, in order and dated.',
    },
    {
      kind: 'p',
      text: 'Obsession, the toolkit for AI agents, gives your voice agent its own [phone number](/phone), inbox and browser, and keeps every call, text and email in one event log ([Talk to customers](/blueprints/talk-to-customers)). For teams that don’t build agents, its [Voice agent check](/blueprints/voice-agent-check) blueprint calls your voice agent each morning as a new customer, then waits for the text, email and callback it promised.',
    },
    {
      kind: 'cta',
      text: 'Find out whether your voice agent books the slot, quotes your price and sends the text it promised. Voice agent check calls it every morning as a new customer and keeps every call recorded and transcribed.',
      to: '/blueprints/voice-agent-check',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'limits', text: 'Where AI voice agents go wrong, and how to catch it' },
    {
      kind: 'list',
      items: [
        '**Prices it wasn’t given.** An agent without your price list may guess. Give it the list, and tell it to take a message for anything not on it.',
        '**Addresses, names and noise.** Street names, spelled surnames and calls from a busy road are where transcription slips. Have it read back the address and the slot before it books.',
        '**Emergencies.** Decide what counts, such as a gas smell, a flood or a patient in pain, and put those calls through to a person at once.',
        '**Callbacks.** A promise to call back is a job for the next morning. Check each one was kept.',
        '**Changes.** A new price list, holiday hours or a new script changes what the agent says, so call it again after every change.',
        '**Recording.** Recording rules differ by US state and country, and the calling law guide linked earlier covers them.',
      ],
    },
    {
      kind: 'p',
      text: 'A business that answers nearly every call itself, and returns the rest within the hour, can wait. So can a practice whose calls are long, sensitive conversations a person should hold from the first word.',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about AI voice agents for small business' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How much does an AI voice agent cost for a small business?',
          a: 'On 22 November 2026, Retell AI listed $0.07 to $0.31 a minute and Vapi $0.05 a minute plus its speech and model providers. Goodcall listed $79 to $299 a month, Smith.ai $150 to $500 a month for 75 to 300 calls, and Ruby’s live receptionists $250 a month for 50 minutes. At 1,000 calls a month of about 3 minutes each, the monthly cost runs from about $172 at Goodcall to $1,000 or more at Smith.ai.',
        },
        {
          q: 'What does an AI voice agent cost per minute?',
          a: 'Retell AI listed $0.07 to $0.31 a minute on 22 November 2026, depending on the model and voice chosen. Vapi listed $0.05 a minute for hosting plus the speech-to-text, model and voice providers, and its own calculator put 1,000 minutes at $82 to $129. Extra numbers and texts are priced on top on both.',
        },
        {
          q: 'Can an AI voice agent answer my existing business number?',
          a: 'Yes. Forward your number to the agent’s number after hours, when the line is busy or after a few rings, and customers keep dialling the number they know. You can also port the number to the agent’s provider so the agent answers first, which takes days and needs your old provider’s account details.',
        },
        {
          q: 'Do I need to register before my voice agent texts customers?',
          a: 'In the US, yes. The Campaign Registry says any business texting its customers from a 10-digit number must register, including businesses sending individual messages that aren’t marketing. Your provider files your brand and a campaign, and the registry puts review at 1 to 4 weeks, so start before launch day.',
          link: { label: '10DLC registration, step by step', to: '/blog/10dlc-registration' },
        },
        {
          q: 'Does an AI voice agent have to say it’s an AI?',
          a: 'For calls the agent places, the FCC’s February 2024 ruling treats an AI voice as an artificial voice. Calls to mobiles and home lines then need the person’s prior express consent, and marketing calls need it in writing. For calls customers place to you, have the agent introduce itself as an AI assistant at the start, so callers know who they’re talking to and can ask for a person. This is general information, not legal advice.',
          link: { label: 'Can AI make phone calls?', to: '/blog/can-ai-make-phone-calls' },
        },
        {
          q: 'What is the difference between an AI voice agent and an AI answering service?',
          a: 'A voice-agent builder such as Retell AI or Vapi gives a developer the parts to build an agent, the speech, AI model and voice, and charges by the minute. An AI answering service such as Goodcall or Smith.ai sells the finished agent for a monthly fee by caller or by call, ready the same day. A traditional answering service such as Ruby is people answering in your name, priced by the minute.',
        },
        {
          q: 'How do I know my voice agent is giving the right answers?',
          a: 'Call it as a customer after every change and once a week: book a slot, ask a price on your list, ask for a person and call out of hours. Check that the booking lands, the price matches your list and the promised text arrives. Read 10 transcripts a week for wrong prices and missed emergencies.',
          link: { label: 'AI voice agent testing', to: '/blog/ai-voice-agent-testing' },
        },
        {
          q: 'How does Obsession work with an AI voice agent?',
          a: 'Obsession gives your voice agent its own US or UK number for calls and texts, an inbox and a browser under one identity. Every call, text and email lands in one event log. A number is $2 a month, calls $0.012 a minute and texts $0.015 each. Obsession files your US texting registration for $25 once per campaign, then $17 a month while it’s active. Bring your own voice agent or connect one. Developers create the number with obsession.numbers.create({ country: "US" }) and receive call.received and sms.received events at their webhook, the address their app listens on. The Free plan’s number receives texts and calls but sends none and makes none; sending starts on a paid plan at $20, $99 or $499 a month.',
          link: { label: 'Phone numbers for AI agents', to: '/phone' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Prices and the law',
      text: 'Every price is as each provider listed it on 22 November 2026, in US dollars, and prices change; check each page before you buy. The FCC ruling and the texting rules are US rules, given as general information and never as legal advice. Fernhill Plumbing in the picture and every input in the two tables are examples.',
    },
    {
      kind: 'cta',
      text: 'Give your voice agent its own number for calls and texts, with an inbox beside it, on one bill. Start free to receive calls and texts; sending starts on a paid plan from $20 a month.',
      to: '/blueprints/talk-to-customers#join',
      label: 'Start free',
    },
  ],

  sources: [
    { title: 'The Campaign Registry and 10DLC', publisher: 'The Campaign Registry', url: TCR_INTRO, date: '2026' },
    { title: 'CSP User Guide', publisher: 'The Campaign Registry', url: TCR_GUIDE, date: '2026-04' },
    { title: 'TCR Fees and Pricing: General Guide', publisher: 'The Campaign Registry', url: TCR_FEES, date: '2026-08-13' },
    { title: 'Messaging Principles and Best Practices', publisher: 'CTIA', url: CTIA, date: '2023-05' },
    {
      title: 'Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts, Declaratory Ruling (FCC 24-17)',
      publisher: 'Federal Communications Commission',
      url: FCC_24_17,
      date: '2024-02-08',
    },
    { title: 'Pricing', publisher: 'Retell AI', url: RETELL },
    { title: 'Pricing', publisher: 'Vapi', url: VAPI },
    { title: 'Pricing', publisher: 'Goodcall', url: GOODCALL },
    { title: 'AI Receptionist pricing', publisher: 'Smith.ai', url: SMITH },
    { title: 'Pricing', publisher: 'Ruby', url: RUBY },
    { title: 'Receptionists: Occupational Outlook Handbook', publisher: 'U.S. Bureau of Labor Statistics', url: BLS, date: '2026-10-29' },
  ],

  related: ['/use-cases/ai-receptionist', '/blueprints/talk-to-customers', 'recipe:voice-agent-check', 'ai-voice-agent-testing', 'can-ai-make-phone-calls', '10dlc-registration', 'recipe:missed-call-text-back', 'recipe:appointment-reminders'],
}
