import type { BlogPost } from './types'

/* How an AI agent signs up as a customer (24 Oct 2026; retitled 22 Nov 2026 for the toolkit position, address kept).
   Readers: developers and QA teams who want an agent to join a company the way a customer does, and anyone asking
   whether an agent can sign up, hold an email address or a phone number. It owns "ai agent sign up".
   The body walks one persona: inbox and number made, the sign-up in a browser that keeps its session, the code by text,
   every email after, each event in the log, and where it stops (payment, identity checks, CAPTCHAs). Obsession prices
   are from src/content/prices.ts (22 Nov 2026). Read on 24 Oct 2026: Cloudflare's Durable Objects pricing, Google's
   sender guidelines, RFC 6376, Gmail's header help, Shopify's abandoned checkout help, Mailchimp on double opt-in.
   The store in the illustrations is invented. No dashes. */

const GMAIL_SENDERS = 'https://support.google.com/a/answer/81126?hl=en'
const RFC_DKIM = 'https://www.rfc-editor.org/rfc/rfc6376'
const GMAIL_HEADERS = 'https://support.google.com/mail/answer/29436?hl=en'
const CF_DO_PRICING = 'https://developers.cloudflare.com/durable-objects/platform/pricing/'
const SHOPIFY_ABANDONED = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts'
const SHOPIFY_SECOND = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/migrate-abandoned-checkout'
const DOUBLE_OPTIN = 'https://mailchimp.com/help/about-double-opt-in/'
const MCP = 'https://modelcontextprotocol.io/docs/getting-started/intro'

export const post: BlogPost = {
  slug: 'how-ai-customers-work',
  title: 'How an AI agent signs up as a customer: from the form to every email it gets',
  dek: 'A persona is an AI agent with its own inbox, phone number and browser under one name. It signs up through a company’s public form, enters the code it is sent and keeps every email that follows, each step dated in one event log.',
  metaTitle: 'How an AI agent signs up as a customer, from form to inbox',
  description:
    'How an AI agent signs up as a customer: its own inbox and number, a browser that keeps the session, the code by text, and every email the company sends.',
  answer:
    'An AI agent signs up as a customer with an inbox, a phone number and a browser of its own, and enters the code the company sends like any new customer. It then waits for free, and every email that follows lands in one event log, dated. It stops before payment, at any identity check and at any CAPTCHA.',
  primaryKeyword: 'ai agent sign up',
  keywords: [
    'can ai agents sign up',
    'can an ai agent have an email address',
    'ai agent verification code',
    'ai agent signup',
    'dkim verification',
    'double opt in',
  ],
  category: 'Work behind logins',
  published: '2026-10-24',
  updated: '2026-11-22',
  readingMinutes: 8,
  order: 3,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'ivywell.example',
      who: 'Persona for the basket journey, made Tue 3 Nov at 08:58',
      status: { tone: 'info', text: 'Free while it waits' },
      rows: [
        { time: 'Tue 08:58', text: 'Inbox and US number made', detail: 'A new address and number, in one call', tone: 'info' },
        { time: 'Tue 09:00', text: 'page.visited: sign-up form', detail: 'Filled in, the session kept in its browser', tone: 'ok' },
        { time: 'Tue 09:01', text: 'sms.received: code 482913', detail: 'Entered in the same session', tone: 'ok' },
        { time: 'Tue 09:02', text: 'email.received: welcome', detail: 'Code IVY10, Promotions tab', tone: 'ok' },
        { time: 'Tue 09:05', text: 'Basket left at checkout', detail: 'Stopped before payment', tone: 'info' },
        { time: 'Wed 09:10', text: 'email.received: reminder', detail: '24 hours after the basket', tone: 'late' },
      ],
      foot: 'Each step is one event in the log, dated, and the persona waited for free between them. ivywell.example is an invented store.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI agent can sign up as a customer the way a person does when it has an inbox, a phone number and a browser of its own. It joins a list, opens an account or starts a trial through the same public form, enters the code the company sends, and keeps every email that follows.',
    },
    {
      kind: 'p',
      text: 'On Obsession that agent is a persona, an AI agent with its own inbox, number and browser under one name. It is free while it waits, wakes in 50 ms when a message lands, and each step it takes arrives as an event in one log, dated.',
    },

    { kind: 'h2', id: 'lifecycle', text: 'From the form to the inbox' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**An inbox and a number.** The persona gets a new email address and a US or UK phone number, made for the job.',
        '**The sign-up.** Its browser opens the company’s public form and fills it in, keeping the session so the account stays signed in.',
        '**The code.** The company texts or emails a code or a link, and the persona enters it.',
        '**The wait.** Nothing runs while it waits, for a day or for months.',
        '**Every email after.** The welcome, the reminder, the offer and the renewal each land in its inbox and wake it.',
        '**Where it stops.** Payment, an identity check or a CAPTCHA ends the run, and the log names the step.',
      ],
    },

    { kind: 'h2', id: 'identity', text: 'An inbox and a number, made for it' },
    {
      kind: 'p',
      text: 'The identity is created for the job and plainly belongs to whoever runs it. It never borrows a real person’s name, address or card. One call, obsession.personas.create({ inbox: true, phone: "US", browser: true }), returns the persona with its address, its number and a browser profile.',
    },
    { kind: 'h3', id: 'one-per-journey', text: 'One persona per journey' },
    {
      kind: 'p',
      text: 'A customer who left a basket gets different emails from one who only joined the list. So the welcome, the basket and each market get a persona of their own, and every event names the journey it came from.',
    },

    { kind: 'h2', id: 'sign-up', text: 'Signing up in a browser that keeps the session' },
    {
      kind: 'p',
      text: 'The persona signs up where any customer would, on the pop-up, the footer form, the checkout tick box or the trial form. Its browser keeps the cookies and the signed-in session, so an account opened on day 1 is still signed in on day 30. Each page it opens lands in the log as a page.visited event, with a screenshot.',
    },
    {
      kind: 'p',
      text: 'Most companies sign customers up through the same few form builders, such as Shopify’s and Klaviyo’s. A sign-up worked out once runs as a program at every company built the same way, and only an unusual form needs a model to think. How an agent handles logins after that is in [can AI agents log in to websites](/blog/can-ai-agents-log-in-to-websites).',
    },
    {
      kind: 'art',
      art: {
        kind: 'report',
        title: 'How 10,000 sign-ups run, by method',
        period: 'An example watch of 10,000 stores',
        cols: ['Method', 'Share', 'What it uses'],
        rows: [
          { name: 'A plain request', cells: ['70%', 'No browser, no model'], tone: 'ok' },
          { name: 'A replayed script', cells: ['25%', 'A browser for under a minute'], tone: 'ok' },
          { name: 'An agent', cells: ['5%', 'A model, for a form it hasn’t seen'], tone: 'info' },
        ],
        notes: ['The shares by method are an example.', 'Each new form an agent solves becomes a program for the next company built the same way.'],
      },
      caption: 'How sign-ups can split between a plain request, a replayed script and an agent. An example on invented numbers of stores.',
    },

    { kind: 'h2', id: 'code', text: 'The code, by text or email' },
    {
      kind: 'p',
      text: 'Where a company confirms a sign-up, the code or link arrives on the persona’s own number or inbox. A text lands as an sms.received event and an email as email.received, so the agent reads the code and enters it in the same browser session.',
    },
    {
      kind: 'p',
      text: 'Double opt in works the same way. A subscriber must click the link in the confirmation email [before being added to the list](' +
        DOUBLE_OPTIN +
        '), and the persona clicks it.',
    },

    { kind: 'h2', id: 'waiting', text: 'Waiting days costs nothing' },
    {
      kind: 'p',
      text: 'A customer’s most useful messages arrive late, such as the reminder a day after the basket, the win-back email after 60 days and the renewal notice after 11 months. A system that keeps a process running for every customer pays for every hour of that wait.',
    },
    {
      kind: 'p',
      text: 'A persona pays for none of it. Its state is stored as an actor, no machine runs while nothing happens, and it wakes in 50 ms when an email, text or call arrives. [Cloudflare’s pricing for Durable Objects](' +
        CF_DO_PRICING +
        ') shows the same design: idle objects eligible for hibernation are not billed for duration.',
    },
    {
      kind: 'p',
      text: 'On Obsession you pay for the pieces a persona uses, and nothing while it waits. An inbox is $0.50 a month and a US or UK number $2 a month, with emails at $0.40 per 1,000 and events at $5 per million. A fleet of them, priced line by line, is in [AI agent cost per month](/blog/ai-customers-at-scale).',
    },

    { kind: 'h2', id: 'wake', text: 'Every email after the sign-up' },
    {
      kind: 'p',
      text: 'Each email wakes the persona, and it compares what arrived with what the company promised on its pop-up, in its flow timing and on its policy page.',
    },
    {
      kind: 'table',
      caption: 'What wakes a persona, what it checks and an example finding for each',
      cols: ['What woke it', 'What it checks', 'A finding looks like'],
      rows: [
        ['An email, email.received', 'Sender, tab, offer, links and code', 'Welcome code refused on the sale price'],
        ['A text, sms.received', 'Sender, offer and the STOP reply', 'STOP confirmed, texts kept coming'],
        ['A scheduled check, page.visited', 'Page price, stock and the chatbot’s answer', 'Chat says 60-day returns, policy says 30'],
        ['A deadline passes', 'Whether the promised message came', 'No welcome email 24 hours after sign-up'],
      ],
    },
    {
      kind: 'p',
      text: '**Silence is a finding.** An email platform logs what it sent, and nothing logs the email a broken trigger never sent. A persona knows what it was promised and when, so a missing message becomes a dated event. [How a full welcome series runs, day by day](/blog/welcome-email-series-best-practices) shows what to expect after the first email.',
    },
    {
      kind: 'p',
      text: 'The clock comes from the company’s own settings where they are public. On Shopify, a checkout counts as abandoned once it stays incomplete [for more than ten minutes after the customer gives an email](' +
        SHOPIFY_ABANDONED +
        '), the merchant chooses when the reminder goes, and a [second abandoned checkout automation defaults to a 10 hour wait](' +
        SHOPIFY_SECOND +
        '). A persona that left a basket at 9:00 knows when a reminder was due, and the log shows when one came.',
    },

    { kind: 'h2', id: 'evidence', text: 'Each event in one log' },
    {
      kind: 'p',
      text: 'Every page the persona visited and every email, text and call it got lands in one event log, in order and dated. Developers read it through the API, or at a webhook, a web address in their own code that receives each event as it lands.',
    },
    {
      kind: 'p',
      text: 'Each email is kept exactly as it arrived, with its headers, body, images and the time it landed. Bulk senders to Gmail must authenticate their mail under [Google’s sender guidelines](' +
        GMAIL_SENDERS +
        '), and a DKIM signature, checked when the email arrives and kept with its key, shows which domain signed the message and that it wasn’t changed after sending ([RFC 6376](' +
        RFC_DKIM +
        ')). The same details are visible to any Gmail user under Show original ([Gmail’s header help](' +
        GMAIL_HEADERS +
        ')).',
    },
    {
      kind: 'list',
      items: [
        '**Emails and texts:** the message as it arrived, its time, and for email its tab and verified sender.',
        '**Pages:** a screenshot of what the page showed, with the time and the address.',
        '**Checkout:** each step up to payment, with the total after codes.',
        '**Calls:** the transcript, with the time of each turn.',
      ],
    },
    {
      kind: 'p',
      text: 'Events reach Slack, a CRM, a sheet or a webhook, and your own agent through the [Model Context Protocol](' +
        MCP +
        '), the open standard that lets AI assistants call tools. Building on the events in code is covered in [the developer guide](/blog/ai-customers-for-developers).',
    },
    {
      kind: 'cta',
      text: 'Give your agent an inbox, a number and a browser in one call, free while it waits, with every email, text and page in one event log.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'limits', text: 'Where it stops' },
    {
      kind: 'list',
      items: [
        '**Payment.** It stops before payment unless you give it your own payment card, and never uses fake payment details.',
        '**Identity checks.** It stops at any identity check, and the log keeps what the check asked for.',
        '**CAPTCHAs and bot blocks.** It never gets round one, and the log names the step it couldn’t reach.',
        '**People.** It says it’s an AI when it talks to a person.',
        '**New customers see what new customers get.** Long-standing customers can receive other emails and other inbox placement.',
        '**Countries differ.** Prices, offers and delivery messages vary by market, so each market needs its own number.',
      ],
    },
    {
      kind: 'cta',
      text: 'Not building agents? QA on your own flows sends a persona through your sign-up after every release and reports the step that breaks.',
      to: '/blueprints/website-audit',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI agent sign-ups' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Can AI agents sign up for newsletters and accounts?',
          a: 'Yes. An agent with its own inbox and phone number signs up through public forms as any customer can, and confirms by email or text where the company asks. It stops at a CAPTCHA, a bot block or an identity check.',
        },
        {
          q: 'Can an AI agent have its own email address?',
          a: 'Yes. On Obsession an inbox costs $0.50 a month and the Free plan includes 3. A persona uses one inbox for each company it joins.',
          link: { label: 'Email for AI agents', to: '/email' },
        },
        {
          q: 'Can an AI agent have a phone number?',
          a: 'Yes. A US or UK number costs $2 a month on Obsession and receives texts and calls, so the agent can confirm a sign-up by text and keep what the company sends by SMS.',
          link: { label: 'Phone numbers for AI agents', to: '/phone' },
        },
        {
          q: 'How does the agent get the verification code?',
          a: 'The code arrives on its own number or inbox as an sms.received or email.received event. The agent reads it and enters it in the same browser session that opened the form.',
        },
        {
          q: 'What happens when nothing arrives?',
          a: 'The log shows it. The persona knows what the company promised and when, so a welcome email that never came, or a basket reminder a day late, becomes a dated event.',
        },
        {
          q: 'How does the agent prove an email is real?',
          a: 'It keeps the email as it arrived, with its headers, its time and a hash. Its DKIM signature, checked on arrival and kept with the key it was checked against, shows which domain signed it and that it wasn’t changed. Domains retire old keys, so the check is recorded when the email lands.',
        },
        {
          q: 'Does the agent use an AI model for every step?',
          a: 'No. Most sign-ups run as programs learned once for each form builder, such as Shopify’s or Klaviyo’s, and a model is used only for an unusual form or a judgement a program can’t make.',
        },
        {
          q: 'How many personas can run at once?',
          a: 'A persona costs nothing while it waits, so a fleet of thousands costs its inboxes and numbers. Obsession is built for millions of personas, all on one key and one event log.',
          link: { label: 'Personas', to: '/personas' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the examples',
      text: 'Cloudflare’s prices and every outside source are as of 24 October 2026, and Obsession’s prices as of 22 November 2026. ivywell.example, the 10,000-store example and the shares by method are invented.',
    },
  ],

  sources: [
    { title: 'About double opt-in', publisher: 'Mailchimp Help', url: DOUBLE_OPTIN },
    { title: 'Durable Objects pricing', publisher: 'Cloudflare', url: CF_DO_PRICING },
    { title: 'Recovering abandoned checkouts', publisher: 'Shopify Help Center', url: SHOPIFY_ABANDONED },
    { title: 'Opt in to the new abandoned checkout automation', publisher: 'Shopify Help Center', url: SHOPIFY_SECOND },
    { title: 'Email sender guidelines', publisher: 'Gmail Help', url: GMAIL_SENDERS },
    { title: 'RFC 6376: DomainKeys Identified Mail (DKIM) Signatures', publisher: 'IETF', url: RFC_DKIM, date: '2011-09' },
    { title: 'Trace an email with its full header', publisher: 'Gmail Help', url: GMAIL_HEADERS },
    { title: 'What is the Model Context Protocol (MCP)?', publisher: 'Model Context Protocol', url: MCP },
  ],
  related: ['/personas', '/email', '/phone', '/browser', 'ai-customers-at-scale', 'can-ai-agents-log-in-to-websites', 'recipe:website-audit', 'recipe:delivery-monitoring'],
}
