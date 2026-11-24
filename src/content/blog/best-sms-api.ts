import type { BlogPost } from './types'

/* Wave 2 best-of guide (_research/seo/agent-business-24nov/PLAN.md, 24 Nov 2026): the best SMS API.
   Primary "best sms api"; also "best sms api for developers" and "best sms api provider" (Google suggestions, US,
   24 Nov 2026, autocomplete_best_24nov.json). /blog/sms-for-ai-agents keeps "sms api for ai agents" and the agent
   mechanics, /blog/10dlc-registration keeps "10dlc registration"; this guide links both. Readers: developers choosing
   a provider to send and receive texts in the US.
   Every other provider is described only from its own US pricing page, read on 24 Nov 2026: Twilio (long code $0.0083 a
   segment, number $1.15, carrier fees by carrier, current as of November 2026), Telnyx (local $0.004, toll-free $0.0055,
   plus carrier fees for AT&T, T-Mobile and Verizon, number $1.00; its page lists no 10DLC fees), Plivo (long code
   $0.0077, toll-free $0.0079, carrier surcharges $0.0035 to $0.005 sent, number $0.50), Sinch (its first price block,
   which the page does not label as the US one: 10DLC $0.0078, number $1.00, carrier fees apply but no amounts), Bird
   (long code $0.0035 sent and $0.001 received, brand registration $4.50, campaign vetting $15, subscription $1.50 to $30
   a month billed every 3 months, carrier fees and number price not listed), Bandwidth (US 10DLC $0.004, "full product
   pricing available on request") and AgentPhone's home page (numbers from $3 a month, SMS from 2 cents a segment,
   US and Canada). Vonage's pricing pages refused automated reads (403) so its price is not stated. Twilio's toll-free
   rule is its own docs page, as read for /blog/sms-for-ai-agents (25 Sep 2026 date on the page). Obsession's figures
   are typed from src/content/prices.ts as of 24 Nov 2026 (number $2 a month, texts $0.015 with carrier fees included,
   registration $25 once then $17 a month, plans Free, $20, $99, $499) and the words of src/content/pieces/phone.ts.
   The worked months use example inputs (one US number, 1,000 and 20,000 sent texts). General information, not legal
   advice. supplier.example and Harrowgate are invented. British English, no dashes. */

const TWILIO_SMS = 'https://www.twilio.com/en-us/sms/pricing/us'
const TWILIO_TF = 'https://www.twilio.com/docs/messaging/compliance/toll-free/console-onboarding'
const TELNYX = 'https://telnyx.com/pricing/messaging'
const PLIVO = 'https://www.plivo.com/sms/pricing/us/'
const SINCH = 'https://sinch.com/pricing/sms/'
const BIRD = 'https://bird.com/pricing/sms'
const BANDWIDTH = 'https://www.bandwidth.com/pricing/'
const AGENTPHONE = 'https://agentphone.ai/'

export const post: BlogPost = {
  slug: 'best-sms-api',
  title: 'The best SMS API for developers: 8 providers priced, with 10DLC explained',
  dek: 'Twilio, Telnyx, Plivo, Vonage, Sinch, Bandwidth, Bird and AgentPhone compared on the US price per text, the number, carrier fees and registration, as listed on 24 November 2026, with a month costed at 2 sizes.',
  metaTitle: 'Best SMS API for developers: 8 providers priced per text',
  description:
    'The best SMS API compared: Twilio, Telnyx, Plivo, Vonage, Sinch, Bandwidth, Bird and AgentPhone on US price per text, carrier fees and 10DLC registration.',
  answer:
    'The best SMS API depends on what you send: Telnyx and Bird list the lowest US prices per text, Twilio has the widest set of developer tools, and Plivo has a flat rate card. As listed on 24 November 2026, US texts cost $0.0035 to $0.0083 each before carrier fees. Obsession charges $0.015 a text with carrier fees included, on a number an agent owns beside an inbox and a browser, and files your US registration for you.',
  primaryKeyword: 'best sms api',
  keywords: ['best sms api for developers', 'best sms api provider'],
  category: 'Talk to customers',
  order: 2,
  published: '2026-11-24',
  updated: '2026-11-24',
  readingMinutes: 11,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'price',
      title: 'US price per sent text, before carrier fees',
      rows: [
        { label: 'Bird', value: '$0.0035', note: 'long code' },
        { label: 'Bandwidth', value: '$0.004', note: '10DLC' },
        { label: 'Telnyx', value: '$0.004', note: 'local number' },
        { label: 'Plivo', value: '$0.0077', note: 'long code' },
        { label: 'Sinch', value: '$0.0078', note: '10DLC' },
        { label: 'Twilio', value: '$0.0083', note: 'long code' },
      ],
      total: { label: 'Obsession, carrier fees included', value: '$0.015', note: 'a text, sent or received' },
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An SMS API lets your software send text messages and receive replies. One call sends a text from a number you rent. A webhook, an address in your app, receives each incoming text. Developers choosing one compare the price per text, the monthly price of a number and the carrier fees. They also check how the provider handles registration, because US carriers require a business to register before it texts.',
    },
    {
      kind: 'p',
      text: 'These 8 providers fall into 3 kinds:',
    },
    {
      kind: 'list',
      items: [
        '**Carrier-grade SMS APIs:** Twilio, Telnyx, Plivo, Vonage, Sinch, Bandwidth and Bird, which sell texts and numbers to developers and businesses.',
        '**An agent-first number:** AgentPhone, which gives an AI agent a number with one webhook for calls and texts.',
        '**A number beside an inbox and a browser:** Obsession, where the number belongs to an AI agent that also has an inbox and a browser.',
      ],
    },
    {
      kind: 'p',
      text: 'Every provider is described from its own US pricing page as read on 24 November 2026, in US dollars. For what an AI agent needs from texting, such as reading a sign-in code, see [SMS for AI agents](/blog/sms-for-ai-agents), which owns that topic.',
    },

    { kind: 'h2', id: 'checks', text: 'What to check before you choose' },
    {
      kind: 'list',
      items: [
        '**Price per text.** A long text is cut into segments of a few hundred characters at most, and providers bill each segment.',
        '**Carrier fees.** US carriers such as AT&T, T-Mobile and Verizon add a fee per text on top of the provider’s price. Some pages list them, and some say only that they apply.',
        '**The number.** A local number, a toll-free number and a short code each cost different amounts and follow different registration rules.',
        '**Registration.** The business that texts registers with US carriers. The next section explains how.',
        '**Receiving.** Check the price of an incoming text as well as an outgoing one, and how fast the webhook calls your code.',
      ],
    },

    { kind: 'h2', id: 'registration', text: 'US registration in plain words' },
    {
      kind: 'p',
      text: 'US carriers do not let a business text from an ordinary 10-digit number until it has registered. [10DLC](/glossary/10dlc), short for 10-digit long code, is that system. A business registers itself, called a brand, and then registers what it will text about, called a campaign. The rules for texts sent to people on a business’s behalf are called [A2P messaging](/glossary/a2p-messaging).',
    },
    {
      kind: 'list',
      items: [
        '**Local number (10DLC):** register the brand and the campaign. [Bird’s page](' +
          BIRD +
          ') lists a $4.50 brand fee, a $15 campaign vetting fee and a monthly campaign fee of $1.50 to $30 depending on the use, billed every 3 months. [10DLC registration](/blog/10dlc-registration) covers each step and the common rejections.',
        '**Toll-free number:** a different check called [toll-free verification](/glossary/toll-free-verification). [Twilio’s docs](' +
          TWILIO_TF +
          ') say a toll-free number cannot send texts to the United States and Canada until it has been verified.',
        '**Short code:** a 5 or 6 digit number for high volume, leased for a fee. [Twilio](' +
          TWILIO_SMS +
          ') lists a random short code at $1,000, billed quarterly, plus a one-time setup fee.',
      ],
    },
    {
      kind: 'p',
      text: 'The business is the one texting, so the registration belongs to the business. Without it, carriers can block or filter the messages. General information, not legal advice. [Telnyx’s page](' +
        TELNYX +
        ') lists no 10DLC fees, so ask before you rely on one price.',
    },

    { kind: 'h2', id: 'providers', text: 'The providers' },

    { kind: 'h3', id: 'twilio', text: 'Twilio' },
    {
      kind: 'p',
      text: '[Twilio’s US SMS page](' +
        TWILIO_SMS +
        ') lists an outbound text at $0.0083 a segment on a long code, toll-free number or short code. A long code number is $1.15 a month and a toll-free number $2.15. Carrier fees are listed by carrier: $0.0035 on AT&T, $0.0045 on T-Mobile, $0.005 on Verizon and $0.0042 on other carriers. The page says its prices are current as of November 2026.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the widest developer toolkit for texts, calls and WhatsApp, with every fee listed on one page.',
        '**Price as listed:** $0.0083 a segment plus carrier fees of $0.0035 to $0.005; number $1.15 a month.',
        '**Where it stops:** its SMS page describes texts only, and carrier fees raise the cost of each text by about 40% to 60%. [Obsession vs Twilio](/alternatives/twilio) sets the choice out.',
        '**Best for:** teams that want texts, calls and WhatsApp from one mature developer account.',
      ],
    },

    { kind: 'h3', id: 'telnyx', text: 'Telnyx' },
    {
      kind: 'p',
      text: '[Telnyx’s messaging page](' +
        TELNYX +
        ') lists local texts at $0.004 a message part and toll-free texts at $0.0055, in and out, plus a carrier fee. Its example carrier fees are $0.0035 on AT&T and $0.0045 on T-Mobile and Verizon, and it shows none for carriers it does not list. A number is $1.00 a month. Volume discounts for local messaging start at 100 million messages a month.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** among the lowest local prices here, charged the same for incoming texts.',
        '**Price as listed:** $0.004 local, $0.0055 toll-free, plus carrier fees on the large carriers.',
        '**Where it stops:** the page lists no 10DLC fees. [Obsession vs Telnyx](/alternatives/telnyx) compares them.',
        '**Best for:** volume senders who watch the price per text.',
      ],
    },

    { kind: 'h3', id: 'plivo', text: 'Plivo' },
    {
      kind: 'p',
      text: '[Plivo’s US SMS page](' +
        PLIVO +
        ') lists $0.0077 a text on long codes and short codes and $0.0079 on toll-free, in and out. Carrier surcharges on a sent text are $0.0035 on AT&T, $0.0045 on T-Mobile and $0.005 on Verizon and other networks. A long code number is $0.50 a month and a toll-free number $1.00.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** one flat rate card across long code, toll-free and short code, with the cheapest number rental here.',
        '**Price as listed:** $0.0077 plus a surcharge of $0.0035 to $0.005; number $0.50 a month.',
        '**Where it stops:** the page lists no 10DLC fees.',
        '**Best for:** teams that want a simple rate card.',
      ],
    },

    { kind: 'h3', id: 'vonage', text: 'Vonage' },
    {
      kind: 'p',
      text: 'Vonage sells an SMS API with virtual numbers, toll-free numbers and short codes. Its pricing pages would not load for us on 24 November, so we state no price. Check [its SMS pricing page](https://www.vonage.com/communications-apis/sms/pricing/) before you compare.',
    },

    { kind: 'h3', id: 'sinch', text: 'Sinch' },
    {
      kind: 'p',
      text: '[Sinch’s SMS page](' +
        SINCH +
        ') lists 10DLC texts at $0.0078, in and out, with a $1.00 number and a $1.00 setup fee. Toll-free is $0.0078 with a $2.00 number. Its page says carrier fees apply and gives no amounts, and does not label which price block is the US one, so confirm the country in your quote.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the same price for incoming and outgoing texts, and a short code option.',
        '**Price as listed:** $0.0078 a text plus carrier fees, which it does not itemise.',
        '**Where it stops:** the page gives no carrier fee amounts.',
        '**Best for:** teams already buying messaging from Sinch in other countries.',
      ],
    },

    { kind: 'h3', id: 'bandwidth', text: 'Bandwidth' },
    {
      kind: 'p',
      text: '[Bandwidth’s pricing page](' +
        BANDWIDTH +
        ') lists US 10DLC texts at $0.004 a message, short codes at $0.008 and toll-free at $0.007. It says full product pricing is available on request, and lists no carrier fees, number prices or registration fees.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** a low headline price on 10DLC texts.',
        '**Price as listed:** $0.004 a text, before taxes and fees.',
        '**Where it stops:** other fees come with a quote.',
        '**Best for:** larger senders who work through a sales conversation.',
      ],
    },

    { kind: 'h3', id: 'bird', text: 'Bird' },
    {
      kind: 'p',
      text: '[Bird’s SMS page](' +
        BIRD +
        ') lists US sent texts at $0.0035 a segment on a long code or toll-free number and $0.007 on a short code. A received text is $0.001. It lists the 10DLC fees given above and says carrier fees apply on top, on a separate fees page. A rented number has its own monthly charge, which the page does not state.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the lowest sent price here and a very low price to receive, with 10DLC fees shown.',
        '**Price as listed:** $0.0035 sent, $0.001 received, plus carrier fees.',
        '**Where it stops:** the number price and carrier fees are on other pages.',
        '**Best for:** senders of mostly one-way texts.',
      ],
    },

    { kind: 'h3', id: 'agentphone', text: 'AgentPhone' },
    {
      kind: 'p',
      text: '[AgentPhone’s home page](' +
        AGENTPHONE +
        ') offers phone numbers for AI agents from $3 a month, calls from 13 cents a minute and texts from 2 cents a segment, with $5 of free credit. It provisions US and Canadian numbers through an API, with one webhook format for calls and texts and an MCP server, a way for AI tools to call it.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** a fast start with a number built for an agent.',
        '**Price as listed:** numbers from $3 a month, texts from 2 cents a segment.',
        '**Where it stops:** the page lists no inbox or browser.',
        '**Best for:** an agent that needs a number and little else.',
      ],
    },

    { kind: 'h2', id: 'compared', text: 'SMS APIs compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 24 November 2026. Prices are US dollars for US texts.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'SMS APIs. Prices from each provider’s own US pages, as listed on 24 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Twilio: [its US SMS page](' + TWILIO_SMS + ')',
          'The widest developer toolkit, every fee on one page',
          '$0.0083 a segment plus carrier fees of $0.0035 to $0.005; number $1.15 a month',
          'Its SMS page describes texts only',
          'Texts, calls and WhatsApp from one account',
        ],
        [
          'Telnyx: [its messaging page](' + TELNYX + ')',
          'Low local price, the same in and out',
          '$0.004 local, $0.0055 toll-free, plus carrier fees; number $1.00',
          'No 10DLC fees listed',
          'Volume senders',
        ],
        [
          'Plivo: [its US SMS page](' + PLIVO + ')',
          'A flat rate card',
          '$0.0077 plus a surcharge of $0.0035 to $0.005; number $0.50',
          'No 10DLC fees listed',
          'A simple rate card',
        ],
        [
          'Vonage',
          'An SMS API with several number types',
          'Not stated: its pricing pages would not load',
          'We could not read its price',
          'Teams already on Vonage',
        ],
        [
          'Sinch: [its SMS page](' + SINCH + ')',
          'Same price in and out, short codes',
          '$0.0078 plus carrier fees, not itemised; number $1.00',
          'Country of its price block not labelled',
          'Teams with Sinch elsewhere',
        ],
        [
          'Bandwidth: [its pricing page](' + BANDWIDTH + ')',
          'A low headline 10DLC price',
          '$0.004 a text; the rest on request',
          'Other fees come with a quote',
          'Larger senders',
        ],
        [
          'Bird: [its SMS page](' + BIRD + ')',
          'Lowest sent price, 10DLC fees shown',
          '$0.0035 sent, $0.001 received, plus carrier fees',
          'Number price not listed',
          'Mostly one-way texts',
        ],
        [
          'AgentPhone: [its home page](' + AGENTPHONE + ')',
          'A number built for an agent, with an MCP server',
          'Numbers from $3 a month; texts from 2 cents a segment',
          'No inbox or browser listed',
          'An agent that needs a number only',
        ],
        [
          'Obsession (ours): [Phone](/phone), [Email](/email), [Browser](/browser)',
          'A number an agent owns beside its inbox and browser, carrier fees included',
          'Number $2 a month; texts $0.015 with carrier fees included; US registration $25 once then $17 a month; plans from Free',
          'Dearer per text than a plain SMS API; registration is a separate fee',
          'Agents that text, email and sign in as one identity',
        ],
      ],
    },

    { kind: 'h2', id: 'cost', text: 'What a month of texts costs' },
    {
      kind: 'p',
      text: 'Both sizes use one US number and count every text as a sent text, at the rates in the comparison. Small is 1,000 texts a month and medium is 20,000. Carrier fees run from nothing to $0.005 a text depending on the carrier, so the totals show a range. They are example inputs, before any registration fee or plan fee.',
    },
    {
      kind: 'table',
      caption: 'Cost in US dollars for one month of sent texts on one number, from each provider’s listed prices on 24 November 2026',
      cols: ['Provider', 'Small: 1,000 texts', 'Medium: 20,000 texts'],
      rows: [
        ['Telnyx', '$5.00 to $9.50', '$81.00 to $171.00'],
        ['Plivo', '$11.70 to $13.20', '$224.50 to $254.50'],
        ['Twilio', '$12.95 to $14.45', '$237.15 to $267.15'],
        ['Sinch, before carrier fees', '$8.80', '$157.00'],
        ['Bird, before carrier fees and the number', '$3.50', '$70.00'],
        ['Obsession, carrier fees included', '$17.00', '$302.00'],
        ['AgentPhone, from its listed rates', '$23.00', '$403.00'],
      ],
    },
    {
      kind: 'p',
      text: 'Plain SMS APIs cost less per text. Obsession’s price puts the carrier fees inside the rate and keeps the number beside an inbox and a browser. At 20,000 texts a month, the gap to Twilio is about $35 to $65 a month. At 1,000,000 sent texts a month, the same rates come to about $8,300 on Twilio before $3,500 to $5,000 of carrier fees, and $15,000 on Obsession with the carrier fees inside.',
    },

    { kind: 'h2', id: 'obsession', text: 'A number that belongs to an agent' },
    {
      kind: 'p',
      text: 'Most SMS APIs give a developer a number to build on. An AI agent that does a job often needs more than texts. A sign-up sends a 6-digit code to a number and a confirmation link to an email address, then waits in a browser. Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill. [Its phone piece](/phone) gives an agent its own number in one call. The agent sends and receives texts, gets verification codes, and makes and takes calls through the voice agent you bring or connect.',
    },
    {
      kind: 'list',
      items: [
        '**A phone number:** a US or UK number the agent owns. Every text that comes in reaches your webhook as sms.received, a STOP included.',
        '**An inbox:** a real address the agent owns, for the confirmation link a site emails after it texts.',
        '**A browser:** a cloud browser that keeps its logins, so the agent finishes the sign-up.',
        '**One event log:** every text, email and page, dated, so you can show what the agent sent and received.',
      ],
    },
    {
      kind: 'p',
      text: 'A persona puts them under one identity. The code that arrives by text reaches the same agent whose browser is waiting, and a persona costs nothing while it waits, though its number and inbox bill monthly. US carriers require registration for texting from a local number, and no Obsession plan includes it. Obsession files it for you when you add a US number, at $25 once per campaign and then $17 a month while it is active.',
    },
    {
      kind: 'p',
      text: 'The usual alternative is one vendor for texts, another for email and a third for the browser, each with its own key, bill and log. The code lands at one vendor while the browser waits at another, and that is where a job breaks. For a job that only sends texts, a plain SMS API is cheaper. [The side-by-side](/compare/agentmail-twilio-browserbase-e2b) sets the options out.',
    },
    {
      kind: 'list',
      items: [
        '**obsession.numbers.create({ country: "US" })** gives the agent a number.',
        '**number.sms({ to, text })** sends a text from it.',
        '**obsession.events.subscribe({ events: ["sms.received"] })** delivers each incoming text to your webhook.',
      ],
    },
    {
      kind: 'p',
      text: 'Teams who don’t write code can use the [sign-in code check](/blueprints/sign-in-code-check) and [missed call text back](/blueprints/missed-call-text-back) blueprints. The Free plan includes a number that receives texts and calls, such as verification codes, with no credit card ([every rate](/pricing/rates)). The same number could also confirm bookings, chase a late invoice by text or catch the code a supplier portal sends each morning.',
    },
    {
      kind: 'cta',
      text: 'Give an agent its own number for texts and sign-in codes, with an inbox and a browser under the same identity. Free plan, no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which to choose, by job' },
    {
      kind: 'list',
      items: [
        '**The lowest price per text:** Bird or Telnyx, on their listed rates, with carrier fees on top.',
        '**Texts beside calls and WhatsApp:** Twilio. [Twilio for AI agents](/blog/twilio-for-ai-agents) covers what its agents get.',
        '**A flat rate card and a cheap number:** Plivo.',
        '**An agent that texts, emails and signs in under one identity:** Obsession.',
        '**A number and little else, built for an agent:** AgentPhone.',
        '**Large volume through a sales team:** Bandwidth or Sinch, with a quote.',
      ],
    },
    {
      kind: 'p',
      text: '[SMS for AI agents](/blog/sms-for-ai-agents) covers consent, STOP and verification codes, and [10DLC registration](/blog/10dlc-registration) walks through each carrier step.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about SMS APIs' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best SMS API?',
          a: 'It depends on the job. As listed on 24 November 2026, Bird and Telnyx show the lowest prices per text, Twilio has the widest toolkit and Plivo a flat rate card. Obsession fits an AI agent that also needs an inbox and a browser, with carrier fees in the price.',
        },
        {
          q: 'What is the best SMS API for developers?',
          a: 'Twilio, Telnyx and Plivo are the best-known with developer tools and listed prices. Check the carrier fees, the number price and whether registration is included, since those change the total.',
          link: { label: 'SMS for AI agents', to: '/blog/sms-for-ai-agents' },
        },
        {
          q: 'How much does an SMS API cost?',
          a: 'US texts list at $0.0035 to $0.0083 each before carrier fees on these pages, and a number costs $0.50 to $3 a month. Obsession charges $0.015 a text with carrier fees included.',
          link: { label: 'Every rate', to: '/pricing/rates' },
        },
        {
          q: 'What is 10DLC?',
          a: 'It is the US system for registering a business that texts from an ordinary 10-digit number. A business registers itself and then each campaign, and carriers can block messages from numbers that are not registered.',
          link: { label: '10DLC registration', to: '/blog/10dlc-registration' },
        },
        {
          q: 'Do I need to register to send texts?',
          a: 'In the US, yes. A local number needs 10DLC registration and a toll-free number needs toll-free verification. Obsession files the registration for you when you add a US number.',
          link: { label: 'What is toll-free verification', to: '/glossary/toll-free-verification' },
        },
        {
          q: 'Which SMS API can an AI agent use?',
          a: 'Any of them can send and receive texts through an API and a webhook. Obsession and AgentPhone are built for agents, and Obsession adds an inbox and a browser under the same identity.',
          link: { label: 'Phone numbers for AI agents', to: '/phone' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about another provider comes from its own pricing and documentation pages as read on 24 November 2026, in US dollars. Vonage’s pages would not load, so we state no price for it. We did not run the services. The monthly costs apply listed prices to example inputs. This is general information, not legal advice, and prices and rules change.',
    },
  ],

  sources: [
    { title: 'SMS API pricing', publisher: 'Vonage', url: 'https://www.vonage.com/communications-apis/sms/pricing/' },
    { title: 'US SMS pricing', publisher: 'Twilio', url: TWILIO_SMS },
    { title: 'Toll-free verification', publisher: 'Twilio documentation', url: TWILIO_TF, date: '2026-09-25' },
    { title: 'Messaging pricing', publisher: 'Telnyx', url: TELNYX },
    { title: 'US SMS pricing', publisher: 'Plivo', url: PLIVO },
    { title: 'SMS pricing', publisher: 'Sinch', url: SINCH },
    { title: 'SMS pricing', publisher: 'Bird', url: BIRD },
    { title: 'Pricing', publisher: 'Bandwidth', url: BANDWIDTH },
    { title: 'AgentPhone home page', publisher: 'AgentPhone', url: AGENTPHONE },
  ],

  related: [
    'sms-for-ai-agents',
    '10dlc-registration',
    '/glossary/10dlc',
    '/glossary/a2p-messaging',
    '/glossary/toll-free-verification',
    '/alternatives/twilio',
    '/alternatives/telnyx',
    '/phone',
  ],
}
