import { plans, prices, registration } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /alternatives/telnyx (AI visibility wave, 23 Nov 2026: _research/seo/ai-visibility-23nov/PLAN.md). Owns "telnyx
   alternatives". Every tool fact is from the tool's own pricing, product or docs page, read 23 Nov 2026; where a page gives
   no figure or says nothing, the table says so. Vonage's pricing page was not readable on 23 Nov (403) and Sinch's price
   pages were not read, so those rows give products, not prices. SMS, calls and WhatsApp for the same options sit on
   /alternatives/twilio. Obsession's side is the phone piece (src/content/pieces/phone.ts). Prices are read from prices.ts. */

const TELNYX = 'https://telnyx.com/pricing'
const TELNYX_WA = 'https://telnyx.com/products/whatsapp-api'
const TELNYX_10DLC = 'https://telnyx.com/resources/10dlc-registration'
const TWILIO_SMS = 'https://www.twilio.com/en-us/sms/pricing/us'
const TWILIO_VOICE = 'https://www.twilio.com/en-us/voice/pricing/us'
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
  name: 'Telnyx alternatives',
  company: 'Telnyx',
  line: 'Twilio, Vonage, SignalWire, Plivo, Bandwidth, Sinch, Bird and agent-first options for numbers, texts, calls and voice AI.',
  meta: {
    path: '/alternatives/telnyx',
    title: 'Telnyx alternatives (2026): numbers, SMS and voice AI',
    description: `Telnyx alternatives for numbers, texts, calls and voice AI, each priced from its own page, with Obsession’s number at ${prices.number.amount} a month for AI agents.`,
    answer: `The main Telnyx alternatives are Twilio, Vonage, SignalWire, Plivo, Bandwidth, Sinch and Bird, and AgentPhone for a number built for an AI agent. Each is priced from its own page, checked 23 November 2026. For an agent that also needs an inbox, a browser and a sandbox, Obsession puts them under one persona with one event log and one bill, with a number at ${prices.number.amount} a month.`,
    ogImage: '/og/alternatives-telnyx.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
      { name: 'Telnyx', path: '/alternatives/telnyx' },
    ],
  },
  title: 'Telnyx alternatives: numbers, texts, calls and voice AI for products and agents',
  dek: 'Teams look past Telnyx for a different platform, a wider set of channels, a voice agent at a different listed rate, or a number that comes with an inbox and a browser. Each option is sorted by the job it does, with its price as listed.',
  primaryKeyword: 'telnyx alternatives',
  keywords: ['telnyx alternative', 'telnyx competitors', 'telnyx vs twilio'],
  checked: '2026-11-23',
  readingMinutes: 7,
  reader: 'developers',
  art: {
    kind: 'sides',
    title: 'Where an agent’s numbers, texts and calls come from',
    rows: [
      {
        name: 'Messaging and voice APIs',
        who: 'Telnyx, Twilio, Vonage, Plivo, Sinch, Bird',
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
    { kind: 'h2', id: 'why', text: 'Why teams look for a Telnyx alternative' },
    {
      kind: 'p',
      text: `[Telnyx](${TELNYX}) sells voice, messaging and numbers by API, and lists a Voice AI Agent that bundles the call, speech-to-text, the language model and text-to-speech at $0.05 a minute. Its pricing page shows US texts from $0.004, a US local number at $1.00 a month, and a Voice API platform fee of $0.002 a minute with SIP fees on top. It also sells [WhatsApp](${TELNYX_WA}) messages from $0.004 plus Meta’s fee, on the same number as its voice and AI products. Everything here was read on 23 November 2026. Teams look elsewhere for one of these reasons:`,
    },
    {
      kind: 'list',
      items: [
        '**A different mix of channels.** Telnyx’s pricing page lists many products, each priced on its own. Some teams want a smaller surface, or one provider that also covers email.',
        '**An agent that needs more than a number.** An agent that signs up to a website needs an inbox for the confirm link and a browser to click it. Telnyx’s pages describe numbers, voice, messages and AI inference, and don’t describe an inbox or a browser.',
        '**Registration costs.** US business texting needs 10DLC registration. Telnyx’s pricing page lists a $4.50 brand fee and $10 a month for each campaign, on top of the texts.',
      ],
    },

    { kind: 'h2', id: 'by-job', text: 'Telnyx alternatives by job', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'From each company’s own pages, checked 23 November 2026, with the US price each lists. Not described means its page doesn’t say.',
      cols: ['Option', 'What it does well', 'Price as listed', 'Where it stops', 'Best for'],
      rows: [
        [
          'Telnyx (the baseline)',
          'A Voice API, a built-in Voice AI Agent, texts, numbers and WhatsApp messages and calls on one number',
          'Texts from $0.004\nNumber $1.00 a month\nVoice AI Agent $0.05 a minute\nWhatsApp from $0.004 plus Meta’s fee',
          'Not described: a browser, an inbox or a persona',
          'Developers who want voice AI and WhatsApp on one number',
        ],
        [
          'Twilio',
          'SMS, MMS, RCS, voice and WhatsApp on one account',
          'Texts $0.0083 each way plus carrier fees\nNumber $1.15 a month\nCalls $0.0140 out, $0.0085 in a minute',
          'US registration fees apply; the SMS page gives no amounts',
          'Teams that want one vendor for every channel',
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
          'Calls run through the voice agent you bring or connect; stops at any identity check',
          'Agents that text, call, email and browse',
        ],
      ],
    },
    { kind: 'h3', id: 'telephony', text: 'For the same job on another platform' },
    {
      kind: 'p',
      text: `[Twilio](${TWILIO_SMS}) is the usual comparison: texts at $0.0083 each way before carrier fees, a US number at $1.15 a month and calls at $0.0140 a minute out on [its voice page](${TWILIO_VOICE}). [Bandwidth](${BANDWIDTH}) lists US texts at $0.004 on 10DLC and calls at $0.0100 out and $0.0055 in. [Vonage](${VONAGE}) and [Sinch](${SINCH}) cover SMS, voice and WhatsApp, and neither page read lists a price. [Bird](${BIRD}) lists texts at $0.0035 plus carrier fees and a US number at $0.50 a month. The same options are priced for SMS, calls and WhatsApp on [Twilio alternatives](/alternatives/twilio).`,
    },
    { kind: 'h3', id: 'voice-ai', text: 'For a voice agent priced per minute' },
    {
      kind: 'p',
      text: `[SignalWire](${SIGNALWIRE}) lists an AI agent runtime at $0.16 a minute, with speech, the model and orchestration included and voice transport billed on top. [Plivo](${PLIVO}) lists Voice AI agents at $0.03 a minute, with telephony billed separately, and pay as you go covers the US and India. Telnyx’s own Voice AI Agent is $0.05 a minute with its SIP, speech-to-text, model and text-to-speech included. Obsession’s calls are ${prices.voice.amount} a minute and run through the voice agent you bring or connect, so the speech model stays your choice.`,
    },
    { kind: 'h3', id: 'agents', text: 'For a number built for an AI agent' },
    {
      kind: 'p',
      text: `[AgentPhone](${AGENTPHONE}) gives an AI agent its own US or Canadian number by API. Calls are transcribed in real time and sent to one webhook, with texts in the same event format, and it has Python and Node SDKs and an MCP server. Its page lists numbers from $3 a month, calls from 13 cents a minute and texts from 2 cents, with $5 of free credit. It doesn’t mention WhatsApp.`,
    },
    { kind: 'h3', id: 'obsession', text: 'For a number beside an inbox, a browser and a sandbox' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: `The [phone piece](/phone) is a number for the agent. obsession.numbers.create() returns a US number your agent owns. It sends and receives texts, gets verification codes pulled out of the text, and makes and takes calls through your voice agent. Every text and call reaches your webhook as sms.received or call.received. A number is ${prices.number.amount} a month, texts are ${prices.sms.amount}, and calls are ${prices.voice.amount} a minute.`,
    },
    {
      kind: 'p',
      text: `The difference is what sits beside the number. A [persona](/personas) is one agent with its own [inbox](/email), number, [browser](/browser) and [sandbox](/sandbox) under one name, so a code sent by text or by email reaches the browser that asked for it. [Messaging](/messaging) adds WhatsApp, iMessage, Slack and Telegram, and every email, text, call and page goes into one event log on one bill. The four vendors this replaces are priced side by side on [AgentMail, Twilio, Browserbase and E2B in one API](/compare/agentmail-twilio-browserbase-e2b).`,
    },
    {
      kind: 'p',
      text: `US texting needs registration with every provider here. [Telnyx’s guide](${TELNYX_10DLC}) describes six steps and says it may approve within 24 to 48 hours. Obsession files it for you: ${registration.once} once for each campaign, then ${registration.monthly} a month while it’s active, in no plan. [10DLC registration](/blog/10dlc-registration) covers the steps and the common rejections.`,
    },
    {
      kind: 'cta',
      text: 'A number for your agent in one call, with an inbox, browser and sandbox on the same key. No credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which Telnyx alternative to choose' },
    {
      kind: 'list',
      items: [
        '**You want the widest set of channels on one account:** Twilio.',
        '**You want a voice agent priced per minute:** SignalWire or Plivo, each at its own listed rate.',
        '**You want low-cost US calls and texts:** Bandwidth or Bird.',
        '**You want one provider for messages, voice and number checks:** Vonage or Sinch.',
        '**Your agent only needs a number:** AgentPhone.',
        '**Your agent also emails, signs in to websites or runs code:** Obsession, with every piece on one key, one event log and one bill.',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best Telnyx alternative?',
          a: 'It depends on the job. Twilio covers the widest set of channels, SignalWire and Plivo list voice AI agents at their own rates, Bandwidth and Bird list low US text rates, and AgentPhone sells a number for an agent. Obsession fits when the agent also needs an inbox, a browser and a sandbox under one identity.',
        },
        {
          q: 'Who are Telnyx’s competitors?',
          a: 'Twilio, Vonage, SignalWire, Plivo, Bandwidth, Sinch and Bird for numbers, texts and calls, and AgentPhone for a number built for an AI agent. Obsession puts the number beside an inbox, messaging, a browser and a sandbox on one key.',
          link: { label: 'Twilio alternatives', to: '/alternatives/twilio' },
        },
        {
          q: 'How much does Telnyx cost?',
          a: `Telnyx lists US texts from $0.004, a US local number at $1.00 a month and a Voice AI Agent at $0.05 a minute, checked on 23 November 2026. Obsession’s number is ${prices.number.amount} a month, texts are ${prices.sms.amount} with carrier fees included, and calls are ${prices.voice.amount} a minute.`,
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Is there a Telnyx alternative built for AI agents?',
          a: 'AgentPhone sells numbers for AI agents, with calls and texts on one webhook. Obsession gives the agent a number, an inbox, a browser and a sandbox under one persona, with one event log.',
          link: { label: 'See the phone piece', to: '/phone' },
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
    { title: 'Pricing', publisher: 'Telnyx', url: TELNYX },
    { title: 'WhatsApp Business API', publisher: 'Telnyx', url: TELNYX_WA },
    { title: '10DLC registration', publisher: 'Telnyx', url: TELNYX_10DLC },
    { title: 'SMS pricing in the United States', publisher: 'Twilio', url: TWILIO_SMS },
    { title: 'Programmable Voice pricing in the United States', publisher: 'Twilio', url: TWILIO_VOICE },
    { title: 'Communications APIs', publisher: 'Vonage', url: VONAGE },
    { title: 'Pricing', publisher: 'SignalWire', url: SIGNALWIRE },
    { title: 'Pricing', publisher: 'Plivo', url: PLIVO },
    { title: 'Pricing', publisher: 'Bandwidth', url: BANDWIDTH },
    { title: 'Pricing', publisher: 'Sinch', url: SINCH },
    { title: 'Pricing', publisher: 'Bird', url: BIRD },
    { title: 'Phone numbers for AI agents', publisher: 'AgentPhone', url: AGENTPHONE },
  ],
  related: [
    '/alternatives/twilio',
    '/compare/agentmail-twilio-browserbase-e2b',
    '/alternatives/agentmail',
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
