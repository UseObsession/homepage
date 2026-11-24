import type { BlogPost } from './types'

/* Wave 2, batch A, page 8 (_research/seo/wave2-pull-23nov/PLAN.md): Twilio for AI agents. Primary "twilio for ai agents";
   secondaries "twilio voice ai agents" (both suggested, US and UK, autocomplete_23nov.json), "twilio ai agent phone
   number" (the brief's), and "twilio ai agent pricing" and "twilio sms ai agent" (suggested in a fresh run on 23 Nov
   2026). Never "twilio alternatives" (the giants own it) and never bare "phone number for ai agent" (/phone owns it).
   Reader: developers building voice and text agents who are weighing Twilio as the phone line.
   Every Twilio fact was read on Twilio's own pages on 23 Nov 2026 and saved with its address in
   _research/seo/wave2-pull-23nov/research/twilio-for-ai-agents.json: US SMS pricing (current as of November 2026), US
   voice pricing (October 2026), the conversational AI pricing page (October 2026: Conversation Relay $0.07 a minute,
   "Voice costs are calculated separately"), the Conversation Relay and conversational AI product pages, the 22 April
   2026 Conversation Relay post, WhatsApp pricing (September 2026), SendGrid's Inbound Parse doc, Event Streams and the
   Twilio MCP doc (public beta, docs only). It agrees with the bundle page's 22 Nov figures.
   Left out on purpose: Twilio's Gartner line (never Gartner), the voice page's Dialogflow CX rate (looks mistyped), and
   AI Assistants (not on Twilio's AI pages on 23 Nov).
   Obsession's prices are from src/content/prices.ts on 23 Nov 2026 (number $2 a month, texts $0.015 with carrier fees
   included, calls $0.012 a minute, inbox $0.50 a month, browser hour $0.10, WhatsApp Meta's fee plus $0.004, plans
   Free, $20, $99 and $499). Blog posts can't import prices.ts (check_post.mjs loads the file on its own), so the figures
   are typed here: change them with prices.ts. The three-size costs are labelled example inputs; Larkfield in the hero is
   invented. British English, no dashes. */

const SMS = 'https://www.twilio.com/en-us/sms/pricing/us'
const VOICE = 'https://www.twilio.com/en-us/voice/pricing/us'
const CAI = 'https://www.twilio.com/en-us/products/conversational-ai'
const CAI_PRICING = 'https://www.twilio.com/en-us/products/conversational-ai/pricing'
const RELAY = 'https://www.twilio.com/en-us/products/conversational-ai/conversationrelay'
const RELAY_POST = 'https://www.twilio.com/en-us/blog/products/launches/the-evolution-of-conversation-relay'
const WHATSAPP = 'https://www.twilio.com/en-us/whatsapp/pricing'
const PARSE = 'https://www.twilio.com/docs/sendgrid/for-developers/parsing-email/setting-up-the-inbound-parse-webhook'
const EVENTS = 'https://www.twilio.com/docs/events'
const MCP = 'https://www.twilio.com/docs/ai/mcp'
const FCC = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'

export const post: BlogPost = {
  slug: 'twilio-for-ai-agents',
  title: 'Twilio for AI agents: calls, texts and voice AI, and what the agent still needs',
  dek: 'Twilio gives an AI agent a phone number, texts, WhatsApp and Conversation Relay for live calls, priced here as Twilio listed them on 23 November 2026. An agent that also signs up to websites needs an inbox and a browser beside it.',
  metaTitle: 'Twilio for AI agents: what developers get for calls and SMS',
  description:
    'Twilio for AI agents: numbers, SMS, WhatsApp and Conversation Relay voice AI at Twilio’s listed prices, and the inbox and browser an agent needs too.',
  answer:
    'Twilio for AI agents covers the phone line: numbers from $1.15 a month, texts, WhatsApp, and Conversation Relay, which puts your own AI model on a live call for $0.07 a minute. An agent that also signs up to websites needs its own inbox and a browser that stays signed in. Obsession gives an AI agent a phone number, an inbox, a browser and a sandbox on one API and one bill, under one identity.',
  primaryKeyword: 'twilio for ai agents',
  keywords: ['twilio voice ai agents', 'twilio ai agent phone number', 'twilio ai agent pricing', 'twilio sms ai agent'],
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
      kind: 'report',
      title: 'A phone agent’s needs, and Twilio’s part',
      period: 'From Twilio’s own pages, read 23 Nov 2026',
      cols: ['What the agent needs', 'Twilio product', 'As listed'],
      rows: [
        { name: 'A phone number', cells: ['Phone numbers', '$1.15 a month, US local'], tone: 'ok' },
        { name: 'Texts both ways', cells: ['Messaging', '$0.0083 a segment, plus carrier fees'], tone: 'ok' },
        { name: 'An AI voice on calls', cells: ['Conversation Relay', '$0.07 a minute, plus the call'], tone: 'ok' },
        { name: 'WhatsApp', cells: ['WhatsApp', '$0.005 a message, plus Meta’s fee'], tone: 'ok' },
        { name: 'Email codes from websites', cells: ['SendGrid Inbound Parse', 'Posts each email to your app'], tone: 'info' },
        { name: 'A browser that stays signed in', cells: ['Not on its pages', 'None listed'] },
        { name: 'One identity across all of it', cells: ['Not on its pages', 'None listed'] },
      ],
      notes: ['Not on its pages means Twilio’s product pages don’t describe it.'],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Twilio for AI agents means using Twilio’s phone numbers, texts and voice products as the phone line for an agent you build. Developers use it to let an agent answer calls, text customers back and hold WhatsApp conversations, at volumes from one number to thousands. Twilio’s voice AI product, Conversation Relay, turns a caller’s speech into text for your AI model and speaks its replies back. An agent that also works on the web, signing up to a portal or reading a login code from an email, needs an inbox and a browser beside the number.',
    },

    { kind: 'h2', id: 'what-twilio-gives', text: 'What Twilio gives an AI agent' },
    {
      kind: 'p',
      text: 'Every price here is from Twilio’s own pages as listed on 23 November 2026, in US dollars, for the United States.',
    },
    {
      kind: 'list',
      items: [
        `**A phone number.** [Twilio’s US messaging pricing](${SMS}) lists a local number at $1.15 a month and a toll-free number at $2.15. A number you already own can be brought for $0.50 a month.`,
        '**Texts both ways.** An SMS segment costs $0.0083, sent or received. US carriers add their own fee per message: $0.0035 to $0.005 for a text sent from a local number, depending on the carrier.',
        `**Calls.** [Twilio’s US voice pricing](${VOICE}) lists a call on a local number at $0.014 a minute to make and $0.0085 a minute to receive.`,
        `**WhatsApp.** [Twilio’s WhatsApp pricing](${WHATSAPP}) adds $0.005 a message, in or out, on top of the fee Meta charges for each template message.`,
        `**Email, through SendGrid.** SendGrid, Twilio’s email service, sends email at volume. Its [Inbound Parse webhook](${PARSE}) receives mail sent to a subdomain you point at SendGrid and posts each email to a web address in your app, its text and attachments included. A webhook is that address: a service calls it the moment something happens.`,
        `**One stream of Twilio events.** [Event Streams](${EVENTS}) sends events from Twilio’s messaging, voice and other products through one feed to your webhook, Amazon Kinesis or Twilio Segment.`,
      ],
    },

    { kind: 'h2', id: 'twilio-voice-ai', text: 'Twilio voice AI agents: Conversation Relay and Agent Connect' },
    {
      kind: 'p',
      text: `[Conversation Relay](${RELAY}) connects your AI agent to a live phone call. Twilio turns the caller’s speech into text and sends it to your app over a WebSocket, a connection that stays open so text flows both ways as people talk. Twilio then speaks your agent’s reply in a voice you choose. You bring the large language model (LLM), the AI model behind tools such as ChatGPT, so the prompts and the model are yours. Twilio’s page puts its median response time under 0.5 seconds in internal benchmarks. It also lists turn detection, handling for interruptions, HIPAA-eligible set-ups for US health data and PCI-compliant flows for card payments.`,
    },
    {
      kind: 'p',
      text: `[Twilio’s conversational AI pricing](${CAI_PRICING}) lists Conversation Relay at $0.07 a minute and says voice costs are calculated separately. An answered call on a local number therefore costs $0.0785 a minute, before your model’s own bill. Twilio’s [22 April 2026 post](${RELAY_POST}) dates general availability to about a year earlier. It also cites Scorpion, whose voice agent for answering calls and booking appointments generated $8.4 million in revenue in its first three months.`,
    },
    {
      kind: 'p',
      text: `Agent Connect, on [Twilio’s conversational AI page](${CAI}), links agents built on OpenAI, Amazon Bedrock or LangChain to Twilio’s voice and messaging channels. It comes with an open source SDK. Conversation Memory keeps a profile of each customer across conversations, and Conversation Orchestrator carries one conversation across voice, SMS, WhatsApp and chat. Twilio also runs an [MCP server](${MCP}) in public beta, where MCP is the Model Context Protocol, the standard way AI agents call tools. It lets a coding assistant search Twilio’s documentation for more than 1,800 API endpoints while it writes your Twilio code.`,
    },

    { kind: 'h2', id: 'phone-number', text: 'A phone number for a Twilio AI agent, step by step' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Buy a number.** Pick a local or toll-free number in the Twilio console or through the API. It’s ready when the number shows in your account with voice and SMS turned on.',
        '**Send its calls to your app.** Set the number’s voice webhook to your app, which answers each call with TwiML (Twilio’s instructions for a call, written in XML) that connects Conversation Relay. It’s ready when a test call opens a WebSocket to your server.',
        '**Put your agent behind the WebSocket.** Each turn arrives as text; your agent sends back what to say. It’s ready when the agent answers a question from your own facts, such as opening hours or a price list.',
        '**Send its texts to your app.** Set the number’s messaging webhook. It’s ready when a text to the number reaches your agent and its reply arrives on the sender’s phone.',
        '**Register for US texting before the first text to a customer.** US carriers require businesses that text from a 10-digit number to register a brand and a campaign, known as A2P 10DLC, and Twilio lists those fees separately. The steps and the reasons filings get rejected are in [10DLC registration](/blog/10dlc-registration). It’s ready when the campaign shows as approved.',
        `**Say it’s an AI, and get consent before calling out.** In [ruling FCC 24-17](${FCC}), the US Federal Communications Commission treats an AI voice as an artificial voice under the Telephone Consumer Protection Act. Calls the agent places therefore need the called person’s prior express consent, unless an emergency or an exemption applies. [Can AI make phone calls](/blog/can-ai-make-phone-calls) covers the rules as general information, never legal advice.`,
        '**Call it as a customer before launch.** Book a slot, ask a price, ask for a person and call from a noisy street. It’s ready when every answer is right and the promised text arrives within a minute. [AI voice agent testing](/blog/ai-voice-agent-testing) has the full checklist.',
      ],
    },

    { kind: 'h2', id: 'costs', text: 'What a Twilio voice agent costs at three sizes' },
    {
      kind: 'table',
      caption: 'Example inputs: every call is answered on a US local number, lasts 3 minutes and is followed by 1 text. From Twilio’s pages as listed on 23 November 2026. Before carrier fees, the number, US texting registration and your AI model’s bill',
      cols: ['Calls a month', 'Call minutes at $0.0085', 'Conversation Relay at $0.07', 'Texts at $0.0083', 'Total'],
      rows: [
        ['3,000 (9,000 minutes)', '$76.50', '$630.00', '$24.90', '$731.40'],
        ['1,000 (3,000 minutes)', '$25.50', '$210.00', '$8.30', '$243.80'],
        ['200 (600 minutes)', '$5.10', '$42.00', '$1.66', '$48.76'],
      ],
    },
    {
      kind: 'p',
      text: 'Conversation Relay is most of the bill at every size, because it covers the speech to text and the voice. A team that runs its own speech models can stream the raw call audio instead with Media Streams, listed at $0.0044 a minute. Put in your own call volume and average length from your call logs to get your row. [AI voice agent for small business](/blog/ai-voice-agent-for-small-business) compares the per-minute prices of other voice agent builders.',
    },

    { kind: 'h2', id: 'still-needs', text: 'What an agent needs beside Twilio' },
    {
      kind: 'p',
      text: 'A receptionist agent can live on the phone line alone. An agent that also books into a supplier’s portal, checks an order or signs up to a service works on the web as well. Beside the number, it needs an inbox, a browser, one identity and one log:',
    },
    {
      kind: 'list',
      items: [
        '**Its own inbox.** Most websites confirm a sign-up or a login by email. Inbound Parse can pass every email sent to your subdomain to your app, so an agent can read a code that way. It keeps no mailbox, so threads, replies and history are yours to build and store.',
        '**A browser that stays signed in.** Portals, booking systems and dashboards need a browser session that keeps its login from one week to the next. Twilio’s pages don’t describe a cloud browser, so teams add a browser vendor.',
        '**One identity.** A site that sends a code to the agent’s number expects it typed into the same browser session that asked. With three vendors, matching the code to the session is your own code.',
        '**One log of everything.** Event Streams covers Twilio’s own products. The inbox and the browser report on their own webhooks, each with its own format and bill.',
      ],
    },

    { kind: 'h2', id: 'side-by-side', text: 'Twilio and one API for every piece, side by side', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026. The [four-vendor bundle page](/compare/agentmail-twilio-browserbase-e2b) works out one agent’s month at Twilio, AgentMail, Browserbase and E2B beside Obsession.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Twilio’s rows are from its pricing and product pages, as listed on 23 November 2026. Obsession’s row is from its pricing page.',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Twilio: Phone Numbers, SMS, Voice, Conversation Relay, WhatsApp',
          'Numbers, texts and voice AI at any volume, with HIPAA-eligible and PCI options on calls',
          'Number $1.15 a month\nText $0.0083, plus carrier fees\nCalls $0.0085 in, $0.014 out\nConversation Relay $0.07 a minute',
          'No mailbox or cloud browser for each agent on its pages',
          'Voice and text agents at high volume',
        ],
        [
          'Twilio with SendGrid and a browser vendor',
          'A specialist for each piece',
          'Each vendor’s own plans and bills',
          'Codes, sessions and logs joined in your own code',
          'Teams already running all three',
        ],
        [
          'Obsession (ours): Phone, Email, Messaging, Browser, Sandbox, Personas',
          'A number, an inbox and a browser under one identity, with one event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment unless given the customer’s own payment card',
          'Agents that talk to customers and work on the web',
        ],
      ],
    },

    { kind: 'h2', id: 'twilio-alone', text: 'When Twilio alone is enough' },
    {
      kind: 'list',
      items: [
        '**The agent only talks.** A receptionist, a booking line or a text concierge that never signs in to a website runs on Twilio’s number, messaging and Conversation Relay.',
        '**The volume is high and the work is phone only.** Twilio’s number at $1.15 a month and its text at $0.0083 cost less than Obsession’s $2 and $0.015, before carrier fees.',
        '**The calls carry health or card data.** Twilio lists HIPAA-eligible set-ups and PCI-compliant flows for Conversation Relay.',
        '**Your contact centre already runs on Twilio.** Agent Connect and Conversation Memory sit beside the routing and profiles you have.',
      ],
    },

    { kind: 'h2', id: 'obsession', text: 'The number, inbox and browser on one key' },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill. One call, obsession.personas.create({ inbox: true, phone: "US", browser: true }), gives an agent a [phone number](/phone), an inbox and a browser under one identity. Every text, call and email reaches your webhook as an event, such as sms.received, about 50 ms after it lands.',
    },
    {
      kind: 'cta',
      text: 'Give your agent its own number, inbox and browser on one key and one bill. Start free to receive calls and texts; sending starts on a paid plan from $20 a month.',
      to: '/phone#join',
      label: 'Start free',
    },
    {
      kind: 'cta',
      text: 'Not building agents? Ready-made blueprints call back, remind and chase on a number Obsession runs for you, with every call and text in your event log.',
      to: '/blueprints/talk-to-customers',
      label: 'Browse blueprints',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'Is Twilio good for AI agents?',
          a: 'For the phone line, yes. Twilio gives an agent numbers, texts, WhatsApp and Conversation Relay, which connects your own AI model to live calls with a median response under 0.5 seconds in Twilio’s benchmarks. Its pages don’t describe an inbox for each agent or a cloud browser, which an agent that works on websites also needs.',
        },
        {
          q: 'How much does a Twilio voice AI agent cost?',
          a: 'Conversation Relay is listed at $0.07 a minute, and Twilio bills the call separately: $0.0085 a minute to receive on a US local number and $0.014 to make. An answered call costs $0.0785 a minute before your AI model’s bill, so 1,000 three-minute calls come to about $235.50, as listed on 23 November 2026.',
        },
        {
          q: 'How do I give a Twilio AI agent a phone number?',
          a: 'Buy a local or toll-free number, point its voice webhook at your app, answer each call with TwiML that connects Conversation Relay, and point its messaging webhook at your app for texts. Register for A2P 10DLC before texting customers in the US.',
          link: { label: '10DLC registration, step by step', to: '/blog/10dlc-registration' },
        },
        {
          q: 'Can a Twilio AI agent receive email?',
          a: 'Through SendGrid, Twilio’s email service. Inbound Parse passes every email sent to a subdomain you set up to your app as a web request, so an agent can read a code from it. It keeps no mailbox, so threads and history are yours to store.',
        },
        {
          q: 'Does Twilio have an MCP server?',
          a: 'Yes, in public beta. It gives a coding assistant structured access to Twilio’s documentation for more than 1,800 API endpoints. It is read only and makes no API calls, so your agent still calls Twilio’s API with its own code and credentials.',
        },
        {
          q: 'What does Obsession add beside a phone number?',
          a: 'It adds an inbox, a browser that stays signed in, messaging and a sandbox on the same key and bill. All of them sit under one identity, called a persona, so a code sent to the agent’s number or inbox reaches the browser session that asked for it. Its number answers calls through your own voice agent. A number is $2 a month, a text $0.015 with carrier fees included and a call $0.012 a minute.',
          link: { label: 'See the phone piece', to: '/phone' },
        },
      ],
    },
  ],
  sources: [
    { title: 'SMS pricing in the United States', publisher: 'Twilio', url: SMS, date: '2026-11' },
    { title: 'Programmable Voice pricing in the United States', publisher: 'Twilio', url: VOICE, date: '2026-10' },
    { title: 'WhatsApp pricing', publisher: 'Twilio', url: WHATSAPP, date: '2026-09' },
    { title: 'Setting up the Inbound Parse webhook', publisher: 'Twilio SendGrid', url: PARSE },
    { title: 'Event Streams', publisher: 'Twilio', url: EVENTS },
    { title: 'Conversation Relay', publisher: 'Twilio', url: RELAY },
    { title: 'Declaratory Ruling FCC 24-17', publisher: 'Federal Communications Commission', url: FCC, date: '2024-02-08' },
    { title: 'Conversations pricing', publisher: 'Twilio', url: CAI_PRICING, date: '2026-10' },
    { title: 'The art of teaching algorithms to listen: what’s new in Conversation Relay', publisher: 'Twilio', url: RELAY_POST, date: '2026-04-22' },
    { title: 'Conversational AI', publisher: 'Twilio', url: CAI },
    { title: 'Twilio MCP', publisher: 'Twilio', url: MCP },
  ],
  related: [
    '10dlc-registration',
    'ai-voice-agent-for-small-business',
    'can-ai-make-phone-calls',
    'ai-voice-agent-testing',
    'recipe:missed-call-text-back',
    'recipe:voice-agent-check',
    '/phone',
    '/compare/agentmail-twilio-browserbase-e2b',
    '/blueprints/talk-to-customers',
  ],
}
