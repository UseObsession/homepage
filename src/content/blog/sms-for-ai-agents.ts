import type { BlogPost } from './types'

/* AI visibility wave (_research/seo/ai-visibility-23nov/PLAN.md, 23 Nov 2026): SMS for AI agents.
   Primary "sms for ai agents"; also "sms api for ai agents" (Google suggestions, US, 23 Nov 2026, autocomplete_23nov.json).
   "phone number for ai agent" stays with /phone, "10dlc registration" with /blog/10dlc-registration, "twilio for ai agents"
   with /blog/twilio-for-ai-agents; this post links all three.
   Reader: developers and founders giving an AI agent a number to send and receive texts, including verification codes.
   Provider facts were read on each provider's own pages on 23 Nov 2026: Twilio's US SMS pricing (current as of November
   2026: number $1.15 a month, $0.0083 a segment, carrier fees $0.0035 to $0.005 outbound; 10DLC onboarding fees in a
   help article, not on the page) and its toll-free verification doc (as of 25 September 2026); Telnyx's messaging pricing
   (page last modified 2026-08-10: 10DLC SMS $0.004 plus carrier fee, number $1.00, toll-free $0.0055); Plivo's US SMS
   pricing (undated: long code $0.0077, carrier surcharges, number $0.50); AgentPhone's home page (undated: numbers from $3
   a month, SMS from 2 cents a segment, US and Canada numbers). Vonage's pricing pages refused automated reads (HTTP 403)
   on 23 Nov 2026, so no Vonage price is stated. Rules: 47 CFR 64.1200 as published by Cornell's Legal Information
   Institute, the ICO's guide to electronic mail marketing, and CTIA's messaging principles and T-Mobile's code of conduct
   as read for /blog/10dlc-registration on 22 Nov 2026. Obsession's figures are typed from src/content/prices.ts on 23 Nov
   2026 (number $2 a month, texts $0.015 with carrier fees included, registration $25 once then $17 a month, plans Free,
   $20, $99, $499) and the words of src/content/pieces/phone.ts; update them if those files change. The worked months are
   example inputs (one US number, outbound and inbound texts counted together). General information, not legal advice.
   British English, no dashes. */

const TWILIO_SMS = 'https://www.twilio.com/en-us/sms/pricing/us'
const TWILIO_TF = 'https://www.twilio.com/docs/messaging/compliance/toll-free/console-onboarding'
const TELNYX = 'https://telnyx.com/pricing/messaging'
const PLIVO = 'https://www.plivo.com/sms/pricing/us/'
const AGENTPHONE = 'https://agentphone.ai/'
const CFR = 'https://www.law.cornell.edu/cfr/text/47/64.1200'
const ICO = 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/'
const EU_DIRECTIVE = 'https://eur-lex.europa.eu/eli/dir/2002/58/oj'
const CTIA = 'https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf'
const TMO_COC = 'https://www.t-mobile.com/support/public-files/attachments/TMobile_Code_of_Conduct_1113.2022.pdf'

export const post: BlogPost = {
  slug: 'sms-for-ai-agents',
  title: 'SMS for AI agents: numbers, registration, codes and 5 providers priced',
  dek: 'An AI agent sends and receives texts through a phone number and an SMS API. Here is what the US registration and consent rules ask, how an agent reads verification codes, and what Twilio, Telnyx, Plivo, AgentPhone and Obsession charge, as listed on 23 November 2026.',
  metaTitle: 'SMS for AI agents: SMS API, 10DLC rules and 5 providers',
  description:
    'SMS for AI agents: how an agent gets a number, US 10DLC and toll-free rules, consent and STOP, verification codes, and 5 SMS providers priced.',
  answer:
    `An AI agent sends and receives texts through a phone number tied to an SMS API, which posts every incoming text to your code. In the US, business texting from a local number needs 10DLC registration, or toll-free verification for a toll-free number, and marketing texts need written consent. Providers such as Twilio, Telnyx and Plivo charge $0.004 to $0.0083 a text plus carrier fees, and Obsession charges $0.015 a text with carrier fees included.`,
  primaryKeyword: 'sms for ai agents',
  keywords: ['sms api for ai agents'],
  category: 'Talk to customers',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 8,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'harrowgate.example · the agent’s number',
      who: 'Texts in and out of one AI agent’s number',
      rows: [
        { time: '09:12', text: 'Text sent', detail: 'Your table for 6 is booked for Friday at 19:30. Reply STOP to opt out.', tone: 'ok' },
        { time: '11:02', text: 'Text received', detail: 'Can we make it 8 people?', tone: 'ok' },
        { time: '11:03', text: 'Text received', detail: 'A booking system’s code: 551204', tone: 'info' },
        { time: '11:03', text: 'Webhook called', detail: 'The code reached the agent in the same second', tone: 'ok' },
        { time: '11:20', text: 'Text received: STOP', detail: 'Opted out, so the agent sends nothing more', tone: 'late' },
      ],
      foot: 'Every text in or out is an event your code receives. Harrowgate is an invented example.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'SMS for AI agents means giving an agent a phone number it can text from and receive texts on. A booking agent confirms a table by text. A support agent answers the reply. A sign-up agent reads the 6-digit code a website texts it. An SMS API is the way software does this: one call sends a text, and a webhook, a web address in your app, receives each incoming one. The questions that decide the build are how the number is registered, what consent you hold, and what each text costs.',
    },

    { kind: 'h2', id: 'how', text: 'How an AI agent gets a number to text from' },
    {
      kind: 'p',
      text: 'An agent needs 3 parts from a provider: a number, a way to send, and a way to receive. The number comes from the provider’s API, in one call. Sending is a second call with the number, the recipient and the text. Receiving is a webhook: the provider calls your address the moment a text arrives, and your code passes it to the agent. Long texts are cut into segments, and providers bill each one.',
    },
    {
      kind: 'p',
      text: 'Which number you pick shapes the rules you meet in the US. 3 types of number can send business texts there:',
    },
    {
      kind: 'list',
      items: [
        '**A local number (10DLC):** an ordinary 10-digit number. Carriers require the business and its use of texting to be registered. [10DLC registration](/blog/10dlc-registration) covers every step, fee and common rejection.',
        '**A toll-free number:** an 8XX number. [Twilio’s verification doc](' +
          TWILIO_TF +
          '), as of 25 September 2026, says toll-free numbers “can’t send SMS messages to the United States and Canada until you’ve completed toll-free verification” and Twilio approved it. Telnyx lists toll-free texts at $0.0055 plus carrier fees.',
        '**A short code:** a 5 or 6-digit number for high volume. [Plivo’s pricing page](' +
          PLIVO +
          ') lists one at $500 a month, billed quarterly, with a $1,500 one-time setup fee.',
      ],
    },
    {
      kind: 'p',
      text: 'An AI agent texting for a business is the business texting, so the registration belongs to the business, not to the agent.',
    },

    { kind: 'h2', id: 'rules', text: 'Consent, STOP and the law in brief' },
    {
      kind: 'p',
      text: 'This is general information, not legal advice. Each point is tied to the regulator’s or carrier’s own text, read on 23 November 2026 unless it says otherwise, and your country or industry may add more.',
    },
    {
      kind: 'list',
      items: [
        '**United States, the FCC.** [47 CFR 64.1200](' +
          CFR +
          ') bars autodialled calls to cellular numbers without “the prior express consent of the called party”, and requires “prior express written consent” when the message is advertising or telemarketing. It treats a reply of “stop” to a text as a reasonable way to withdraw consent, and says a request must be honoured “within a reasonable time not to exceed ten business days”. Its own text says a “call” includes a text message, in section (a)(9).',
        '**United Kingdom, the ICO.** [The ICO’s guide](' +
          ICO +
          ') says you must not send marketing texts to individuals unless “they have specifically consented”, with an exception for existing customers who bought a similar product and were given a clear chance to opt out when you collected their details and in every message. It also asks for a simple way to opt out and a list of the people who opted out, checked before every send.',
        '**European Union.** [Article 13 of Directive 2002/58/EC](' +
          EU_DIRECTIVE +
          ') sets the same pattern for electronic mail, which includes texts: prior consent for direct marketing, with a narrow exception for existing customers. Each country writes its own version into law.',
        '**STOP, every time.** [T-Mobile’s code of conduct](' +
          TMO_COC +
          ') asks senders to honour STOP, END, CANCEL, UNSUBSCRIBE and QUIT, and [CTIA’s principles](' +
          CTIA +
          ') ask for one confirmation and then no more messages. After an opt-out, the agent texts that number nothing more. The [glossary](/glossary/sms-stop) has the full rule.',
      ],
    },
    {
      kind: 'p',
      text: 'The practical step is the same everywhere: record how each person agreed, say what the texts will be, put the opt-out in the first message, and make the agent treat an incoming STOP as final. Calls are a separate rule set, covered in [can AI make phone calls](/blog/can-ai-make-phone-calls).',
    },

    { kind: 'h2', id: 'codes', text: 'Verification codes: when the agent is the one signing up' },
    {
      kind: 'p',
      text: 'A site that texts a 6-digit code to confirm a sign-up sends it to a number, and an agent signing up needs a number that receives it. The agent enters the phone number, the site texts a code, the provider posts it to your webhook, and your code reads the digits and types them in. The code expires in minutes, so the webhook has to be fast. Many sign-ups also send a confirmation link by email, so the agent needs an inbox as well ([the best email API for AI agents](/blog/best-email-api-for-ai-agents) compares them).',
    },
    {
      kind: 'p',
      text: 'Every provider in the comparison can receive a code, because receiving is part of an SMS API. What differs is whether the code is pulled out of the text for you, and whether the number, the inbox and the browser doing the sign-up share one identity.',
    },

    { kind: 'h2', id: 'compared', text: 'SMS API providers for AI agents compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026. Prices are US dollars for US texts. Vonage’s pricing pages refused automated reads on 23 November, so its price is not stated here: check its own page.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'SMS for AI agents. Prices from each provider’s own pages, as listed on 23 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Twilio: [its US SMS page](' + TWILIO_SMS + ')',
          'The widest developer API for texts, calls and WhatsApp, with an open source SDK on its conversational AI pages',
          'Number $1.15 a month; $0.0083 a segment, in or out, plus carrier fees of $0.0035 to $0.005; its 10DLC fees are in a help article',
          'Its SMS page describes texts, not an inbox or a browser',
          'Developers who already run on Twilio',
        ],
        [
          'Telnyx: [its messaging page](' + TELNYX + ')',
          'The lowest listed text price among the carriers here',
          'Local texts $0.004 plus carrier fees; number $1.00 a month; toll-free $0.0055',
          'Its messaging page lists no 10DLC fees',
          'Volume senders who watch the per-text price',
        ],
        [
          'Plivo: [its US SMS page](' + PLIVO + ')',
          'Flat texts in and out on long codes, toll-free and short codes',
          '$0.0077 a text plus carrier surcharges of $0.0035 to $0.005 on a sent text; long code number $0.50 a month',
          'Its page lists no 10DLC fees and no date',
          'Teams that want a simple rate card',
        ],
        [
          'AgentPhone: [its home page](' + AGENTPHONE + ')',
          'Built for agents: numbers, calls and texts through one webhook, with an MCP server',
          'Numbers from $3 a month, texts from 2 cents a segment, $5 free credit',
          'US and Canada numbers; other countries “coming soon”; its page shows no date',
          'Agents that need a number and little else',
        ],
        [
          'Obsession (ours): [Phone](/phone), [Email](/email), [Browser](/browser)',
          'A number, an inbox and a browser under one identity, with each code pulled out of its text for the agent',
          `Number $2 a month; texts $0.015 with carrier fees included; US registration $25 once then $17 a month; plans from Free`,
          'Dearer per text than a plain SMS API; registration is a separate fee',
          'Agents that sign up to websites and read the code themselves',
        ],
      ],
    },

    { kind: 'h2', id: 'month', text: 'What a month costs at 2 sizes' },
    {
      kind: 'p',
      text: 'Both sizes use one US number and count every text as one the agent sends, at the rates in the comparison. Small is 1,000 texts a month and medium is 20,000. Carrier fees on a sent text run from nothing to $0.005, depending on the carrier, so the totals show a range; Twilio and Telnyx list no carrier fee on a received text, so a month that mixes both costs less. They are example inputs, before any US registration fees or plan fee.',
    },
    {
      kind: 'table',
      caption: 'Cost in US dollars for one month of texts on one number, from each provider’s listed prices on 23 November 2026',
      cols: ['Provider', 'Small: 1,000 texts', 'Medium: 20,000 texts'],
      rows: [
        ['Telnyx', '$5.00 to $10.00', '$81.00 to $181.00'],
        ['Plivo', '$11.70 to $13.20', '$224.50 to $254.50'],
        ['Twilio', '$12.95 to $14.45', '$237.15 to $267.15'],
        ['Obsession, carrier fees included', '$17.00', '$302.00'],
        ['AgentPhone, from its listed rates', '$23.00', '$403.00'],
      ],
    },
    {
      kind: 'p',
      text: `Plain SMS APIs are cheaper per text. Obsession’s price buys carrier fees inside the rate and the same number sitting beside an inbox and a browser. Its paid plans, from $20 a month, cover set amounts of usage at list rates, and the Free plan includes a number that receives texts and calls, such as [verification codes](/glossary/one-time-password), with no credit card ([every rate](/pricing/rates)).`,
    },

    { kind: 'h2', id: 'obsession', text: 'Where Obsession fits' },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill. [Its phone piece](/phone) gives each agent its own number in one call. The agent sends and receives texts, gets verification codes, and makes and takes calls through the voice agent you bring or connect. Every text that comes in reaches your webhook as sms.received, and each stays in the agent’s event log beside its emails and calls.',
    },
    {
      kind: 'list',
      items: [
        '**obsession.numbers.create({ country: "US" })** gives the agent a number.',
        '**number.sms({ to, text })** sends a text from it.',
        '**obsession.events.subscribe({ events: ["sms.received"] })** delivers each incoming text, a STOP included, to your webhook.',
      ],
    },
    {
      kind: 'p',
      text: `A [persona](/developers) puts the number, an inbox and a browser under one identity, so a site that texts a code and emails a link reaches the same agent. US carriers require registration for texting from a local number, and no Obsession plan includes it: Obsession files it for you at $25 once per campaign and then $17 a month while it is active. For teams who don’t write code, the [sign-in code check](/blueprints/sign-in-code-check) and [missed call text back](/blueprints/missed-call-text-back) blueprints run the job without it.`,
    },
    {
      kind: 'cta',
      text: 'Give an agent its own number for texts, calls and sign-in codes, with an inbox and a browser under the same identity. Free plan, no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which to choose, by job' },
    {
      kind: 'list',
      items: [
        '**An agent that signs up to sites and reads its own codes:** Obsession, because the number, inbox and browser share one identity.',
        '**The lowest price per text at volume:** Telnyx, on its listed rates.',
        '**Texts beside calls and WhatsApp with one developer account:** Twilio. [Twilio for AI agents](/blog/twilio-for-ai-agents) covers what its agents get.',
        '**A simple rate card on long codes, toll-free and short codes:** Plivo.',
        '**A fast start for a number and little else:** AgentPhone.',
      ],
    },
    {
      kind: 'p',
      text: 'If the conversation moves to WhatsApp, [the WhatsApp AI agent guide](/blog/whatsapp-ai-agent) covers Meta’s rules and costs.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about SMS for AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How does an AI agent send and receive SMS?',
          a: 'It uses a phone number from an SMS API. One call sends a text from the number, and the provider posts each incoming text to a webhook in your app, which passes it to the agent.',
          link: { label: 'Phone numbers for AI agents', to: '/phone' },
        },
        {
          q: 'What is the best SMS API for AI agents?',
          a: 'It depends on the job. As listed on 23 November 2026, Telnyx has the lowest text price, Twilio the widest range of developer tools and Plivo a flat rate card. Obsession fits agents that also need an inbox and a browser, and AgentPhone is an agent-first number with a webhook.',
        },
        {
          q: 'Does an AI agent need 10DLC registration?',
          a: 'In the US, a business texting from an ordinary local number needs it, and the business is the one texting, even when an AI agent writes the messages. A toll-free number needs toll-free verification instead.',
          link: { label: '10DLC registration', to: '/blog/10dlc-registration' },
        },
        {
          q: 'Can an AI agent receive verification codes by text?',
          a: 'Yes. The site texts a code to the agent’s number, the provider posts it to your webhook and your code reads the digits. Obsession pulls the code out of the text for the agent, and its Free plan includes a number that receives texts and calls with no credit card.',
          link: { label: 'Sign-in code check', to: '/blueprints/sign-in-code-check' },
        },
        {
          q: 'How much does SMS for an AI agent cost?',
          a: `As listed on 23 November 2026, Telnyx charges $0.004 a US text plus carrier fees, Plivo $0.0077, Twilio $0.0083 and Obsession $0.015 with carrier fees included. A number costs $0.50 to $3 a month, and US registration fees come on top.`,
          link: { label: 'Every rate', to: '/pricing/rates' },
        },
        {
          q: 'Can an AI agent text people who have not opted in?',
          a: 'Not for marketing in the US, UK or EU, where the rules above require prior consent. A reply to someone who texted you first, or a message they asked for, stands on firmer ground. Ask a lawyer about your own case.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about another provider comes from its own pricing and documentation pages as listed on 23 November 2026, in US dollars, apart from the carrier and T-Mobile pages read on 22 November. We did not run the services. The monthly costs apply listed prices to example inputs. This is general information, not legal advice, and the rules and prices change. Harrowgate in the picture is an invented example.',
    },
  ],
  sources: [
    { title: 'US SMS pricing', publisher: 'Twilio', url: TWILIO_SMS },
    { title: 'Toll-free verification', publisher: 'Twilio documentation', url: TWILIO_TF, date: '2026-09-25' },
    { title: 'Messaging pricing', publisher: 'Telnyx', url: TELNYX, date: '2026-08-10' },
    { title: 'US SMS pricing', publisher: 'Plivo', url: PLIVO },
    { title: 'AgentPhone home page', publisher: 'AgentPhone', url: AGENTPHONE },
    { title: '47 CFR 64.1200, delivery restrictions', publisher: 'Legal Information Institute, Cornell Law School', url: CFR },
    { title: 'Electronic mail marketing', publisher: 'Information Commissioner’s Office', url: ICO },
    { title: 'Directive 2002/58/EC on privacy and electronic communications', publisher: 'EUR-Lex', url: EU_DIRECTIVE },
    { title: 'Code of Conduct', publisher: 'T-Mobile', url: TMO_COC },
    { title: 'Messaging Principles and Best Practices', publisher: 'CTIA', url: CTIA, date: '2023-05' },
  ],
  related: [
    '/phone',
    '10dlc-registration',
    'twilio-for-ai-agents',
    'whatsapp-ai-agent',
    'can-ai-make-phone-calls',
    '/blueprints/sign-in-code-check',
    '/developers',
  ],
}
