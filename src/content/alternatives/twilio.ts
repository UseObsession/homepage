import { plans, prices, registration } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /alternatives/twilio (AI visibility wave, 23 Nov 2026: _research/seo/ai-visibility-23nov/PLAN.md). Every tool fact is
   from the tool's own pricing, product or docs page, read 23 Nov 2026. Where a page gives no figure or says nothing, the
   table says so, and no limit is stated that the tool's pages don't state. Vonage's pricing page was not readable on
   23 Nov (403), so its row gives products, not prices; Sinch's price pages were not read, so its row does the same.
   "twilio for ai agents" stays with /blog/twilio-for-ai-agents; US texting registration is /blog/10dlc-registration.
   Obsession's side is the phone piece beside the inbox, browser and sandbox under one persona, with calls through the
   voice agent you bring or connect (src/content/pieces/phone.ts). Prices are read from prices.ts, never retyped. */

const TWILIO_SMS = 'https://www.twilio.com/en-us/sms/pricing/us'
const TWILIO_VOICE = 'https://www.twilio.com/en-us/voice/pricing/us'
const TWILIO_WA = 'https://www.twilio.com/en-us/whatsapp/pricing'
const TWILIO_10DLC = 'https://www.twilio.com/docs/messaging/compliance/a2p-10dlc'
const TELNYX = 'https://telnyx.com/pricing'
const TELNYX_WA = 'https://telnyx.com/products/whatsapp-api'
const VONAGE = 'https://developer.vonage.com/en/home'
const SIGNALWIRE = 'https://signalwire.com/pricing'
const PLIVO = 'https://www.plivo.com/pricing/'
const BANDWIDTH = 'https://www.bandwidth.com/pricing/'
const SINCH = 'https://sinch.com/pricing/'
const BIRD = 'https://bird.com/pricing'
const AGENTPHONE = 'https://agentphone.ai/'

/* Obsession's plans, as the site writes them: "Free, then $20, $99 or $499 a month; usage per piece". */
const paid = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const PLANS = `Free, then ${paid.slice(0, -1).join(', ')} or ${paid[paid.length - 1]} a month; usage per piece`

export const ref: ReferencePage = {
  kind: 'alternatives',
  name: 'Twilio alternatives',
  company: 'Twilio',
  line: 'Telnyx, Vonage, SignalWire, Plivo, Bandwidth, Sinch, Bird and agent-first options for SMS, calls and WhatsApp.',
  meta: {
    path: '/alternatives/twilio',
    title: 'Twilio alternatives (2026): SMS, calls and WhatsApp APIs',
    description: `Twilio alternatives for SMS, calls and WhatsApp, each priced from its own page, plus Obsession’s agent number, inbox and browser from ${prices.number.amount} a month.`,
    answer: `The main Twilio alternatives are Telnyx, Vonage, SignalWire, Plivo, Bandwidth, Sinch and Bird for SMS, calls and WhatsApp, and AgentPhone for a number built for an AI agent. Each is priced from its own page, checked 23 November 2026. For an agent that also needs an inbox, a browser and a sandbox, Obsession puts them under one persona with one event log and one bill, with a number at ${prices.number.amount} a month.`,
    ogImage: '/og/alternatives-twilio.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
      { name: 'Twilio', path: '/alternatives/twilio' },
    ],
  },
  title: 'Twilio alternatives: SMS, calls and WhatsApp for products and AI agents',
  dek: 'Teams look past Twilio for a lower price per message, calls on their own network, a voice agent built in, or a number that comes with an inbox and a browser. Each option is sorted by the job it does, with its price as listed.',
  primaryKeyword: 'twilio alternatives',
  keywords: ['twilio alternatives for sms', 'twilio alternatives for calls', 'twilio alternatives for whatsapp', 'twilio competitors'],
  checked: '2026-11-23',
  readingMinutes: 8,
  reader: 'developers',
  art: {
    kind: 'sides',
    title: 'Where an agent’s texts and calls come from',
    rows: [
      {
        name: 'Messaging and voice APIs',
        who: 'Twilio, Telnyx, Vonage, Plivo, Sinch, Bird',
        nodes: ['Your code', 'A number by API', 'Webhook'],
        links: ['rents', 'posts to'],
      },
      {
        name: 'Direct-to-carrier and agent runtimes',
        who: 'Bandwidth, SignalWire',
        nodes: ['Your code', 'Voice and SMS routes', 'Webhook'],
        links: ['sends through', 'posts to'],
      },
      {
        name: 'Numbers built for agents',
        who: 'AgentPhone',
        nodes: ['Your agent', 'Its own number', 'One webhook'],
        links: ['owns', 'posts to'],
      },
      {
        name: 'Obsession',
        who: 'Phone, Email, Browser, Sandbox',
        nodes: ['One persona', 'Number, inbox and browser', 'One event log'],
        links: ['holds', 'writes to'],
        lit: 1,
        ours: true,
      },
    ],
    foot: 'Each row follows the tools’ own pages, checked 23 November 2026.',
  },
  blocks: [
    { kind: 'h2', id: 'why', text: 'Why teams look for a Twilio alternative' },
    {
      kind: 'p',
      text: `[Twilio](${TWILIO_SMS}) is a widely used API for texts and calls, and it covers SMS, MMS, RCS, voice and WhatsApp on one account. Its SMS page lists US texts at $0.0083 each way before carrier fees, which run from $0.0035 to $0.005 a message on outbound long-code texts. A US local number is $1.15 a month on [its voice page](${TWILIO_VOICE}), with calls at $0.0140 a minute out and $0.0085 in. WhatsApp is $0.005 a message plus Meta’s fee on [its WhatsApp page](${TWILIO_WA}). All three were read on 23 November 2026. Teams usually look elsewhere for one of these reasons:`,
    },
    {
      kind: 'list',
      items: [
        '**The price per message or minute.** Others list lower rates, shown in the table below, and some publish their registration fees where Twilio’s SMS page gives no amounts.',
        '**A voice agent built in.** Twilio’s voice rate buys the call. Its voice pricing page lists Conversation Relay, which connects a call to your own AI, at $0.07 a minute.',
        '**An agent that needs more than a number.** Twilio’s texts and calls are one piece. An agent that signs up to a website also needs an inbox for the confirm link and a browser to click it, from other vendors.',
      ],
    },

    { kind: 'h2', id: 'by-job', text: 'Twilio alternatives by job', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'From each company’s own pages, checked 23 November 2026, with the US price each lists. Not described means its page doesn’t say.',
      cols: ['Option', 'What it does well', 'Price as listed', 'Where it stops', 'Best for'],
      rows: [
        [
          'Twilio (the baseline)',
          'SMS, MMS, RCS, voice and WhatsApp on one account, with a long-running developer platform',
          'Texts $0.0083 each way plus carrier fees\nNumber $1.15 a month\nCalls $0.0140 out, $0.0085 in a minute\nWhatsApp $0.005 plus Meta’s fee',
          'US registration fees apply; the SMS page gives no amounts',
          'Teams that want one vendor for every channel',
        ],
        [
          'Telnyx',
          'A Voice API, a built-in Voice AI Agent, and WhatsApp messages and calls on the same number',
          'Texts from $0.004\nNumber $1.00 a month\nVoice AI Agent $0.05 a minute\nWhatsApp from $0.004 plus Meta’s fee',
          'Not described: a browser, an inbox or a persona',
          'Developers who want voice AI and WhatsApp on one number',
        ],
        [
          'Vonage',
          'SMS, a Voice API with voice bots and speech tools, WhatsApp through its Messages API, and 10DLC registration',
          'Not described on the page read',
          'Not described: a price, an inbox or a browser',
          'Teams that want one provider for messages, voice and number checks',
        ],
        [
          'SignalWire',
          'A $0.16 a minute AI agent runtime, voice and texts, and registration fees shown on the page',
          'Texts $0.00415 (local)\nNumber $0.50 a month\nAI agent $0.16 a minute\nWhatsApp $0.005 plus Meta’s fee',
          'Not described: an inbox or a browser',
          'Voice agents at a listed per-minute rate',
        ],
        [
          'Plivo',
          'Voice AI agents at $0.03 a minute and low telephony rates',
          'Calls from $0.0010 out, $0.0028 in a minute\nVoice AI $0.03 a minute\nTexts from $0.0077\nWhatsApp from $0.0034',
          'Pay as you go covers the US and India; texts and WhatsApp are on Enterprise from $1,000 a month',
          'Low-cost calls and voice AI in the US',
        ],
        [
          'Bandwidth',
          'Direct-to-carrier voice and messaging with emergency calling',
          'Texts $0.004 (10DLC)\nCalls $0.0100 out, $0.0055 in a minute\nNumbers not priced on the page',
          'WhatsApp is not on the page read',
          'High-volume US voice and texts',
        ],
        [
          'Sinch',
          'Pay-as-you-go SMS and voice worldwide, RCS, and WhatsApp as a channel product',
          'Priced on separate pages, not read',
          'Not described on the page read: an inbox or a browser',
          'Global messaging at scale',
        ],
        [
          'Bird (formerly MessageBird)',
          'One balance for SMS, WhatsApp, email and Apple Messages',
          'Texts $0.0035 plus carrier fees\nNumber $0.50 a month\nWhatsApp $0.005 plus Meta’s fee\nEmail from $15 a month',
          'Not described: a browser or a sandbox',
          'Teams that want email and messaging on one balance',
        ],
        [
          'AgentPhone',
          'A number for an AI agent, with calls transcribed to one webhook and an MCP server',
          'Number from $3 a month\nCalls from 13 cents a minute\nTexts from 2 cents\n$5 free credit',
          'US and Canadian numbers; WhatsApp not mentioned',
          'An agent that needs only a number',
        ],
        [
          'Obsession (ours): Phone, Email, Messaging, Browser, Sandbox, Personas',
          'A number with an inbox, WhatsApp, iMessage, a browser and a sandbox under one identity',
          `Number ${prices.number.amount} a month\nTexts ${prices.sms.amount}, carrier fees included\nCalls ${prices.voice.amount} a minute\n${PLANS}`,
          'Calls run through the voice agent you bring or connect',
          'Agents that text, call, email and browse',
        ],
      ],
    },
    { kind: 'h3', id: 'sms', text: 'Twilio alternatives for SMS' },
    {
      kind: 'p',
      text: `On price per text, [Telnyx](${TELNYX}) lists US texts from $0.004, [Bird](${BIRD}) $0.0035 plus carrier fees, [SignalWire](${SIGNALWIRE}) $0.00415 on a local number and [Bandwidth](${BANDWIDTH}) $0.004 on 10DLC. [Plivo](${PLIVO}) lists texts from $0.0077, on its Enterprise plan from $1,000 a month. [Vonage](${VONAGE}) lists SMS through its Messages API, and [Sinch](${SINCH}) lists pay-as-you-go SMS worldwide; neither page read gives a price. [AgentPhone](${AGENTPHONE}) lists texts from 2 cents, and Obsession’s are ${prices.sms.amount} each with carrier fees included, so the number on the bill is the whole cost.`,
    },
    {
      kind: 'p',
      text: `Registration comes before any of these. US carriers require every business that texts from a local number to register what it sends, known as 10DLC. [Twilio’s own page](${TWILIO_10DLC}) says it applies to anyone sending from a 10DLC number to US recipients through an application, and that unregistered traffic costs extra carrier fees. SignalWire’s pricing page shows a one-time $4.50 brand fee and $10 a month for a standard campaign. Obsession files it for you: ${registration.once} once for each campaign, then ${registration.monthly} a month while it’s active, in no plan. [10DLC registration](/blog/10dlc-registration) walks through the steps and the common rejections.`,
    },
    { kind: 'h3', id: 'calls', text: 'Twilio alternatives for calls' },
    {
      kind: 'p',
      text: `For calls, Telnyx’s Voice API charges a $0.002 a minute platform fee with its SIP fees on top, and a built-in Voice AI Agent at $0.05 a minute. SignalWire lists an AI agent runtime at $0.16 a minute, Plivo’s Voice AI agents are $0.03 a minute before telephony, and Bandwidth lists US calls at $0.0100 out and $0.0055 in. Vonage’s Voice API lists voice bots and text-to-speech in more than 50 languages. AgentPhone sends each call to your webhook as a live transcript and speaks your reply. Obsession’s calls are ${prices.voice.amount} a minute, in or out, and run through the voice agent you bring or connect, so you keep the speech model you already chose.`,
    },
    { kind: 'h3', id: 'whatsapp', text: 'Twilio alternatives for WhatsApp' },
    {
      kind: 'p',
      text: `Every WhatsApp price here carries Meta’s own message fee on top. Twilio charges $0.005 a message, [Telnyx](${TELNYX_WA}) from $0.004, SignalWire $0.005, Bird $0.005 on US marketing messages and Plivo from $0.0034 on Enterprise. Telnyx also lists WhatsApp calling at $0.0025 a minute. Bandwidth’s page doesn’t mention WhatsApp. Obsession’s [messaging piece](/messaging) covers WhatsApp, iMessage, Slack and Telegram: ${prices.whatsapp.amount} a message, with Meta’s fee passed through at cost.`,
    },
    { kind: 'h3', id: 'obsession', text: 'For a number beside an inbox, a browser and a sandbox' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `The [phone piece](/phone) does Twilio’s job for an agent. obsession.numbers.create() returns a US number your agent owns. It sends and receives texts, gets verification codes pulled out of the text, and makes and takes calls through your voice agent. Every text and call reaches your webhook as sms.received or call.received. A number is ${prices.number.amount} a month, texts are ${prices.sms.amount}, and calls are ${prices.voice.amount} a minute.`,
    },
    {
      kind: 'p',
      text: `The difference is what sits beside the number. A [persona](/personas) is one agent with its own [inbox](/email), number, [browser](/browser) and [sandbox](/sandbox) under one name, so a code sent by text or by email reaches the browser that asked for it. Every email, text, call and page goes into one event log, and the pieces share one bill. The four vendors this replaces are priced side by side on [AgentMail, Twilio, Browserbase and E2B in one API](/compare/agentmail-twilio-browserbase-e2b). If you are weighing Twilio itself as an agent’s phone line, [Twilio for AI agents](/blog/twilio-for-ai-agents) covers what it gives and what the agent still needs.`,
    },
    {
      kind: 'cta',
      text: 'A number for your agent in one call, with an inbox, browser and sandbox on the same key. No credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which Twilio alternative to choose' },
    {
      kind: 'list',
      items: [
        '**You want the lowest price per text:** compare Telnyx, Bird, SignalWire and Bandwidth, then add the registration fees.',
        '**You want a voice agent priced per minute:** Telnyx, SignalWire or Plivo, each at its own listed rate.',
        '**You need WhatsApp at volume:** Telnyx, Bird, SignalWire or Plivo, with Meta’s fee on top.',
        '**You want one provider for messages, voice and checks:** Vonage or Sinch.',
        '**Your agent only needs a number:** AgentPhone.',
        '**Your agent also emails, signs in to websites or runs code:** Obsession, with every piece on one key, one event log and one bill.',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best Twilio alternative?',
          a: 'It depends on the job. Telnyx, SignalWire, Bandwidth and Bird list lower US text rates, Telnyx, SignalWire and Plivo list voice AI agents, and Vonage and Sinch cover messages, voice and WhatsApp. Obsession fits when the agent also needs an inbox, a browser and a sandbox under one identity.',
        },
        {
          q: 'What are the best Twilio alternatives for SMS?',
          a: 'Telnyx lists US texts from $0.004, Bird $0.0035, SignalWire $0.00415 and Bandwidth $0.004, checked 23 November 2026, against Twilio’s $0.0083 plus carrier fees. Every US option needs 10DLC registration for business texting, so add its fees to the comparison.',
          link: { label: '10DLC registration', to: '/blog/10dlc-registration' },
        },
        {
          q: 'What are the best Twilio alternatives for calls?',
          a: 'Telnyx, SignalWire, Plivo and Bandwidth each list their own call and voice agent rates, and Vonage offers a Voice API with voice bots. For an AI agent that calls and also texts, emails and browses, Obsession runs calls through the voice agent you bring or connect.',
          link: { label: 'See the phone piece', to: '/phone' },
        },
        {
          q: 'What are the best Twilio alternatives for WhatsApp?',
          a: 'Telnyx, SignalWire, Bird and Plivo list WhatsApp messages from about half a cent, plus Meta’s own fee. Obsession’s messaging piece covers WhatsApp beside iMessage, Slack and Telegram, with Meta’s fee passed through at cost.',
          link: { label: 'See messaging', to: '/messaging' },
        },
        {
          q: 'Is there a Twilio alternative built for AI agents?',
          a: `AgentPhone sells numbers for AI agents, with calls and texts on one webhook. Obsession gives the agent a number, an inbox, a browser and a sandbox under one persona, with one event log. A number is ${prices.number.amount} a month.`,
          link: { label: 'Twilio for AI agents', to: '/blog/twilio-for-ai-agents' },
        },
        {
          q: 'Do I need to register to text in the US with these?',
          a: `Yes. US carriers require business texting from a local number to be registered, known as 10DLC, whichever provider you pick. Obsession files it for you at ${registration.once} once for each campaign, then ${registration.monthly} a month while it’s active.`,
          link: { label: '10DLC registration', to: '/blog/10dlc-registration' },
        },
      ],
    },
  ],
  sources: [
    { title: 'SMS pricing in the United States', publisher: 'Twilio', url: TWILIO_SMS },
    { title: 'Programmable Voice pricing in the United States', publisher: 'Twilio', url: TWILIO_VOICE },
    { title: 'WhatsApp pricing', publisher: 'Twilio', url: TWILIO_WA },
    { title: 'A2P 10DLC', publisher: 'Twilio', url: TWILIO_10DLC },
    { title: 'Pricing', publisher: 'Telnyx', url: TELNYX },
    { title: 'WhatsApp Business API', publisher: 'Telnyx', url: TELNYX_WA },
    { title: 'Communications APIs', publisher: 'Vonage', url: VONAGE },
    { title: 'Pricing', publisher: 'SignalWire', url: SIGNALWIRE },
    { title: 'Pricing', publisher: 'Plivo', url: PLIVO },
    { title: 'Pricing', publisher: 'Bandwidth', url: BANDWIDTH },
    { title: 'Pricing', publisher: 'Sinch', url: SINCH },
    { title: 'Pricing', publisher: 'Bird', url: BIRD },
    { title: 'Phone numbers for AI agents', publisher: 'AgentPhone', url: AGENTPHONE },
  ],
  related: [
    '/alternatives/telnyx',
    '/compare/agentmail-twilio-browserbase-e2b',
    '/alternatives/agentmail',
    '/glossary/model-context-protocol',
    'twilio-for-ai-agents',
    '10dlc-registration',
    'can-ai-make-phone-calls',
    'ai-voice-agent-testing',
    'recipe:missed-call-text-back',
    '/phone',
    '/messaging',
    '/personas',
    '/blueprints/talk-to-customers',
    '/developers',
    '/agents',
  ],
}
