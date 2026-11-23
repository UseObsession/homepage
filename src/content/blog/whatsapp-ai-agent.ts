import type { BlogPost } from './types'

/* AI visibility wave (_research/seo/ai-visibility-23nov/PLAN.md, 23 Nov 2026): WhatsApp AI agent.
   Primary "whatsapp ai agent"; also "whatsapp ai agent for business", "whatsapp ai agent price", "whatsapp ai agent free"
   (Google suggestions, US, 23 Nov 2026, autocomplete_23nov.json). "whatsapp api for ai agents" stays with /messaging,
   which this post links.
   Reader: owners and developers weighing how to put an AI agent on WhatsApp for support, sales, bookings and notifications.
   Every Meta fact was read on Meta's own pages on 23 Nov 2026: the WhatsApp Business Platform pricing page ("pricing
   updates that became effective as of October 1, 2026"), its 2026 updates page (1,000 free service messages a month a
   number), the USD list rate card (xlsx linked from the pricing page, "effective October 1, 2026": North America marketing
   $0.025, utility $0.0034, authentication $0.0034, service $0.0034; United Kingdom marketing $0.0635, utility $0.022;
   India marketing $0.0118, utility $0.0014), the send-messages guide (24-hour customer service window, only templates
   outside it), the Cloud API overview (templates need approval, opt-in before templates) and the Business Messaging Policy
   (last updated 23 September 2026: opt-in, opting out, automation inside the window needs an escalation path).
   Providers: Twilio's WhatsApp pricing (current as of September 2026: $0.005 a message plus Meta's fee), 360dialog's
   pricing page (published 11 Nov 2026, EUR only, "no markup on Meta fees") and Wati's pricing page (undated, USD, billed
   annually). Obsession's figures are typed from src/content/prices.ts as it stood on 23 Nov 2026 (WhatsApp: Meta's fee
   passed through at cost plus $0.004 a message; plans Free, $20, $99, $499); update them if that file changes.
   The worked months are example inputs (outbound template messages only, US rates, all sent outside an open window) and
   Harrowgate in the picture is invented. General information, not legal advice. British English, no dashes. */

const META_PRICING = 'https://developers.facebook.com/docs/whatsapp/pricing'
const META_UPDATES = 'https://developers.facebook.com/docs/whatsapp/pricing/updates-to-pricing/'
const META_SEND = 'https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-messages'
const META_API = 'https://developers.facebook.com/docs/whatsapp/cloud-api/overview'
const META_POLICY = 'https://whatsappbusiness.com/policy/'
const TWILIO_WA = 'https://www.twilio.com/en-us/whatsapp/pricing'
const D360 = 'https://360dialog.com/pricing'
const WATI = 'https://www.wati.io/pricing/'

export const post: BlogPost = {
  slug: 'whatsapp-ai-agent',
  title: 'WhatsApp AI agent for business: the rules, what a month costs and how to build one',
  dek: 'A WhatsApp AI agent answers customers on the app they already use. Here is what Meta’s rules allow, what a month costs at 3 sizes on Meta’s rate card of 1 October 2026, and how Meta’s own API, Twilio, 360dialog, Wati and Obsession compare.',
  metaTitle: 'WhatsApp AI agent for business: rules, price and options',
  description:
    'A WhatsApp AI agent for business: Meta’s rules on templates and the 24-hour window, what a month costs, what is free, and how to build one, compared.',
  answer:
    'A WhatsApp AI agent is software that answers and starts WhatsApp conversations for a business. Meta lets it reply freely for 24 hours after a customer’s last message and requires an approved template after that, and charges per delivered message by category and country: from 1 October 2026, $0.0034 for a US utility message and $0.025 for a US marketing one. You can connect Meta’s Cloud API yourself, use a provider such as Twilio, 360dialog or Wati, or connect WhatsApp through Obsession.',
  primaryKeyword: 'whatsapp ai agent',
  keywords: ['whatsapp ai agent for business', 'whatsapp ai agent price', 'whatsapp ai agent free'],
  category: 'Talk to customers',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 11,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'chat',
      title: 'harrowgate.example on WhatsApp',
      turns: [
        { from: 'customer', name: 'Guest', text: 'Is late checkout still free on Sunday?', time: '08:02' },
        { from: 'bot', name: 'Harrowgate’s agent', text: 'Yes, until 13:00. Want me to add it to booking 4471?', time: '08:02' },
        { from: 'customer', name: 'Guest', text: 'Please.', time: '08:03' },
        { from: 'bot', name: 'Harrowgate’s agent', text: 'Done. Checkout is now 13:00 on Sunday.', time: '08:03' },
      ],
      check: { tone: 'ok', text: 'Inside the 24-hour window, so no template needed', label: 'Window' },
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A WhatsApp AI agent is an AI that holds conversations for a business on WhatsApp. It reads what a customer writes, answers from the business’s own information, and takes the next step: it books, confirms, follows up or hands the conversation to a person. Businesses use one for 4 jobs: support, sales, bookings and notifications. Three questions decide how to build it: what Meta’s rules allow, what each message costs, and which route gets you running.',
    },

    { kind: 'h2', id: 'what-it-does', text: 'What a WhatsApp AI agent does for a business' },
    {
      kind: 'list',
      items: [
        '**Support:** answers questions about orders, opening hours, returns and policies at any hour, and passes anything it cannot settle to a person with the conversation attached.',
        '**Sales:** replies to an enquiry within seconds, asks the qualifying questions and follows up with people who went quiet.',
        '**Bookings:** offers times, confirms a booking, then sends a reminder and handles a change or a cancellation in the same thread.',
        '**Notifications:** sends delivery updates, appointment reminders and payment confirmations, and answers the reply someone sends back.',
      ],
    },
    {
      kind: 'p',
      text: 'WhatsApp suits these jobs because customers start the conversation on an app they already open every day. The agent’s part is the same on any channel. What differs on WhatsApp is the set of rules Meta, which owns WhatsApp, puts around who may message whom and when. [WhatsApp API for AI agents](/messaging) covers the API side of the same channel.',
    },

    { kind: 'h2', id: 'rules', text: 'Meta’s rules for a business on WhatsApp' },
    {
      kind: 'p',
      text: 'Every rule here comes from Meta’s own pages, read on 23 November 2026. Meta’s business messaging service is reached through the Cloud API, a way for software to send and receive WhatsApp messages. [Meta’s Cloud API overview](' +
        META_API +
        ') says a business needs a business portfolio and a phone number, real or virtual, to send and receive.',
    },
    {
      kind: 'list',
      items: [
        '**Opt-in first.** [Meta’s Business Messaging Policy](' +
          META_POLICY +
          ') (last updated 23 September 2026) says you may contact people only if they gave you their number and confirmed they want to receive your messages. The overview adds: “You must obtain user opt-in before sending message templates.” You must also respect a request to opt out, on or off WhatsApp.',
        '**The 24-hour customer service window.** [Meta’s guide to sending messages](' +
          META_SEND +
          ') says that when a person contacts you, “a 24-hour timer called a customer service window starts”, and each new message from them resets it to 24 hours. Inside it your agent can send any message, including free text.',
        '**Templates outside the window.** The same guide says that when the window closes, “you can only send pre-approved template messages”. Meta’s overview adds that templates “generally require approval before you can send them”.',
        '**Automation needs a way out.** The policy lets you use automation to respond during the 24-hour window. It also expects automated responses to come with a way to reach a person, such as a transfer, a phone number or an email address.',
      ],
    },
    {
      kind: 'p',
      text: 'In practice, an agent that answers customers who write first has little to configure. An agent that starts conversations, such as a reminder the day before an appointment, sends a template your business has had approved, to someone who agreed to hear from you. Nothing here is legal advice, and rules for your country or your industry may add to Meta’s.',
    },

    { kind: 'h2', id: 'price', text: 'What WhatsApp charges per message' },
    {
      kind: 'p',
      text: '[Meta’s pricing page](' +
        META_PRICING +
        ') says it charges “on a per-message basis” from 1 July 2025, only when a message is delivered, and that rates vary by category and by the recipient’s country. Its page says it reflects pricing effective 1 October 2026. Meta lists 5 categories; the 4 an agent you build sends are marketing, utility, authentication and service. Marketing, utility and authentication are template messages; service messages are the free-form replies inside the window.',
    },
    {
      kind: 'table',
      caption: 'Meta’s list rates per delivered message in US dollars, from its rate card effective 1 October 2026, read on 23 November 2026',
      cols: ['Recipient’s market', 'Marketing', 'Utility', 'Authentication', 'Service'],
      rows: [
        ['North America (US and Canada)', '$0.025', '$0.0034', '$0.0034', '$0.0034'],
        ['United Kingdom', '$0.0635', '$0.022', '$0.022', '$0.022'],
        ['India', '$0.0118', '$0.0014', '$0.0014', '$0.0014'],
      ],
    },
    {
      kind: 'p',
      text: 'Meta’s card lists many more markets, and some are grouped into regions such as “Rest of Western Europe”. Utility and authentication also have volume tiers that lower the rate as monthly volume grows. [Its 2026 updates page](' +
        META_UPDATES +
        ') says each business phone number gets 1,000 free service messages a month, which do not roll over, with messages beyond that charged from 1 October 2026.',
    },

    { kind: 'h2', id: 'free', text: 'What is free on WhatsApp' },
    {
      kind: 'list',
      items: [
        '**The first 1,000 service messages a month** for each business phone number, per Meta’s updates page.',
        '**Messages after a click-to-WhatsApp ad.** Meta’s pricing page lists a free entry point window, up to 7 days on that page, that opens when someone messages from a Click to WhatsApp ad. Marketing, utility, authentication and service messages are free in it.',
        '**Test numbers.** Meta’s overview says the test account and phone number it creates for you “don’t require a payment method on file in order to send template messages”.',
        '**A free trial from a provider.** Wati’s pricing page offers a 7-day free trial.',
      ],
    },
    {
      kind: 'p',
      text: 'None of this makes a running agent free. Template messages that reach customers outside the window are charged, and so is any provider’s monthly fee. A WhatsApp AI agent is free to try and priced when it works.',
    },

    { kind: 'h2', id: 'ways', text: 'How to build a WhatsApp AI agent' },

    { kind: 'h3', id: 'direct', text: 'Meta’s Cloud API, directly' },
    {
      kind: 'p',
      text: 'You register with Meta, get a number approved and write the code that sends and receives messages through the Cloud API. There is no provider between you and Meta, so you pay only [Meta’s own rates](' +
        META_PRICING +
        '). You also build and host everything else: the webhook that receives each message, the template approvals, the opt-in records and the hand-off to a person.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the lowest message cost, and full control of the build.',
        '**Where it stops:** the engineering and the compliance work are yours.',
        '**Best for:** engineering teams who want no provider in the middle.',
      ],
    },

    { kind: 'h3', id: 'bsp', text: 'A provider such as Twilio, 360dialog or Wati' },
    {
      kind: 'p',
      text: 'A business solution provider (BSP) sits between you and Meta and handles the connection, support and tooling. Three describe themselves on their own pages:',
    },
    {
      kind: 'list',
      items: [
        '**Twilio:** [its WhatsApp pricing page](' +
          TWILIO_WA +
          '), current as of September 2026, lists its own fee of $0.005 a message, inbound or outbound, plus Meta’s per-template fee passed through. It is a developer API, and its other products cover SMS and voice.',
        '**360dialog:** [its pricing page](' +
          D360 +
          '), published 11 November 2026, shows EUR prices only: the WhatsApp API starts at €49 a month for each number, with a Premium plan at €99 and Scale at €500. Meta’s fees are added, and the page says there is “no markup on Meta fees”. Its Premium plan lists a Messaging MCP, the Model Context Protocol that lets AI assistants such as Claude call tools.',
        '**Wati:** [its pricing page](' +
          WATI +
          ') lists Growth at $59 a month billed annually, with 3 users and 1 AI agent, Pro at $119 and Business at $279. It lists chatbots and AI agents on each plan, and says per-message charges vary by category without stating a markup. The page shows no date.',
      ],
    },
    {
      kind: 'p',
      text: 'Pick a provider when you want support and ready-made tools for your team. Check each page’s own terms for how it treats AI agents, because plans differ on that.',
    },

    { kind: 'h3', id: 'no-code', text: 'A no-code WhatsApp bot builder' },
    {
      kind: 'p',
      text: 'Some builders let a team set up a WhatsApp agent without code, by pasting its help pages and rules into a form. Wati is one, with its AI agents on every plan. The trade-off is the usual one for a closed tool: quick to start, and the agent lives inside that product’s limits.',
    },

    { kind: 'h3', id: 'obsession', text: 'Obsession' },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026. Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill. [Its messaging piece](/messaging) connects WhatsApp in one call, `obsession.messaging.connect({ channel: "whatsapp" })`, alongside iMessage, Slack and Telegram, and every message from every app reaches one webhook in one shape. WhatsApp is for support, sales, bookings and notifications. Your agent replies any time within 24 hours of a person’s last message and opens a new conversation with a template WhatsApp has approved.',
    },
    {
      kind: 'p',
      text: `Obsession passes Meta’s fee through at cost and adds $0.004 a message. The WhatsApp line is on the same identity as the agent’s [inbox](/email) and [phone number](/phone), so a customer who emails, texts and writes on WhatsApp meets one agent with one record. Teams who don’t write code can run a [blueprint](/blueprints), a ready job, such as [appointment reminders](/blueprints/appointment-reminders).`,
    },
    {
      kind: 'cta',
      text: 'Connect WhatsApp to an agent in one call, with the same inbox, number and event log under it. Free plan, no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'month', text: 'What a month costs at 3 sizes' },
    {
      kind: 'p',
      text: 'The table counts only template messages your agent sends, all outside an open window, at Meta’s North America rates in the table in the section on price, so it is the dearest case. Replies inside the window are service messages, and the first 1,000 a month for each number are free. Small is 500 utility messages, such as booking reminders. Medium is 5,000 utility and 2,000 marketing messages. Large is 50,000 utility and 20,000 marketing messages. They are example inputs, not typical figures.',
    },
    {
      kind: 'table',
      caption: 'Messaging cost in US dollars for one month, from each source’s own price as listed on 23 November 2026, before any plan or platform fee',
      cols: ['Route', 'Small: 500 utility', 'Medium: 5,000 utility, 2,000 marketing', 'Large: 50,000 utility, 20,000 marketing'],
      rows: [
        ['Meta’s Cloud API directly', '$1.70', '$67.00', '$670.00'],
        [`Obsession: Meta’s fee plus $0.004 a message`, '$3.70', '$95.00', '$950.00'],
        ['Twilio: Meta’s fee plus $0.005 a message', '$4.20', '$102.00', '$1,020.00'],
        ['360dialog: €49 a number plus Meta’s fees', '€49 + $1.70', '€49 + $67.00', '€49 + $670.00'],
        ['Wati: $59 a month, Growth, plus Meta’s charges', '$59 + $1.70', '$59 + $67.00', '$59 + $670.00'],
      ],
      compare: false,
    },
    {
      kind: 'p',
      text: `Meta’s fee is the bulk of the bill at every size, and it is the same wherever you buy. What differs is the margin on top and what you build yourself. Wati and 360dialog are priced by plan, so their cost barely moves with volume. Obsession’s $0.004 and Twilio’s $0.005 move with it. Obsession’s paid plans, from $20 a month, cover set amounts of usage at its list rates, and the same bill also holds the agent’s inbox, number and browser ([every rate](/pricing/rates)).`,
    },

    { kind: 'h2', id: 'compared', text: 'WhatsApp AI agent options compared', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'WhatsApp AI agent options. Prices from each provider’s own pages as listed on 23 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Meta’s Cloud API directly', 'Lowest message cost, full control', 'Meta’s rates only', 'You build and run everything', 'Engineering teams'],
        ['Twilio', 'A developer API with SMS and voice beside WhatsApp', '$0.005 a message plus Meta’s fee', 'Its WhatsApp page doesn’t describe an inbox or a browser', 'Developers who also need SMS and calls'],
        ['360dialog', 'A WhatsApp-only provider with support plans and no stated markup on Meta’s fees', 'From €49 a month a number plus Meta’s fees', 'Prices shown in euros only; its pricing page describes WhatsApp, not other channels', 'Teams that want WhatsApp support and an MCP'],
        ['Wati', 'Chatbots and AI agents for teams without engineers', 'From $59 a month, billed annually, plus Meta’s charges', 'Its pricing page doesn’t state a markup on Meta’s fees', 'Support and sales teams without engineers'],
        ['Obsession (ours): [Messaging](/messaging), [Phone](/phone), [Email](/email)', 'WhatsApp, iMessage, Slack and Telegram through one webhook, on the same identity as the agent’s inbox and number', `Meta’s fee plus $0.004 a message; plans from Free`, 'Meta’s rules still apply: opt-in, the window and templates', 'Agents that work across WhatsApp, email and phone'],
      ],
    },
    {
      kind: 'p',
      text: 'Choose Meta directly when you have the engineers and want the lowest cost. Choose Wati when a team without engineers needs a WhatsApp agent this week. Choose 360dialog when WhatsApp is the only channel and you want its support plans. Choose Twilio when the same developers also run SMS and voice on it. Choose Obsession when the agent works across WhatsApp, email, text and the web, because one record then covers all of it. [The Twilio guide](/blog/twilio-for-ai-agents), [the text message guide](/blog/sms-for-ai-agents) and [the AI voice agent guide](/blog/ai-voice-agent-for-small-business) cover the phone side.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about WhatsApp AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is a WhatsApp AI agent?',
          a: 'It is an AI that holds WhatsApp conversations for a business. It answers questions, books and confirms, follows up and sends notifications, and passes a conversation to a person when it should.',
          link: { label: 'WhatsApp API for AI agents', to: '/messaging' },
        },
        {
          q: 'How much does a WhatsApp AI agent cost?',
          a: `Meta charges per delivered message by category and country. From 1 October 2026 its US list rates are $0.0034 for utility and authentication messages and $0.025 for marketing. On top you pay a provider or a plan: Twilio adds $0.005 a message, Obsession $0.004, and 360dialog and Wati charge a monthly plan.`,
        },
        {
          q: 'Is there a free WhatsApp AI agent?',
          a: 'You can start free, but a working agent is not free. Meta gives each business phone number 1,000 free service messages a month, a free window after a click-to-WhatsApp ad, and test numbers with no payment method. Template messages sent to customers outside the window are charged.',
        },
        {
          q: 'Can an AI agent message customers first on WhatsApp?',
          a: 'Only with an approved template, and only to people who opted in. Inside 24 hours of a customer’s last message your agent can send any message, and after that Meta allows pre-approved templates only.',
        },
        {
          q: 'What is the 24-hour window?',
          a: 'It is the 24 hours after a customer’s last message, during which your agent can reply with any message. A new message from the customer resets it to 24 hours.',
        },
        {
          q: 'Do I need a provider to use Meta’s business API for WhatsApp?',
          a: 'No. Meta’s Cloud API is open to any business with a business portfolio and a phone number, and you pay Meta’s rates directly. A provider handles the connection and support, or adds tools such as chatbots.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about Meta and other providers comes from their own pages as listed on 23 November 2026, with prices in US dollars unless a page shows only euros. We did not run the services. The monthly costs apply listed rates to example inputs. This is general information, not legal advice, and WhatsApp’s rules and rates change. Harrowgate in the picture is an invented example.',
    },
  ],
  sources: [
    { title: 'WhatsApp Business Platform pricing', publisher: 'Meta for Developers', url: META_PRICING },
    { title: 'Updates to pricing', publisher: 'Meta for Developers', url: META_UPDATES },
    { title: 'Send messages', publisher: 'Meta for Developers', url: META_SEND },
    { title: 'Cloud API overview', publisher: 'Meta for Developers', url: META_API },
    { title: 'WhatsApp Business Messaging Policy', publisher: 'Meta', url: META_POLICY, date: '2026-09-23' },
    { title: 'WhatsApp pricing', publisher: 'Twilio', url: TWILIO_WA },
    { title: 'Pricing', publisher: '360dialog', url: D360, date: '2026-11-11' },
    { title: 'Pricing', publisher: 'Wati', url: WATI },
  ],
  related: [
    '/messaging',
    'twilio-for-ai-agents',
    'sms-for-ai-agents',
    'how-to-build-an-ai-receptionist',
    '/blueprints/appointment-reminders',
    '/developers',
  ],
}
