import type { BlogPost } from './types'

/* The AI customers series, article 2 of 9 (24 Oct 2026): how an AI customer works, from its identity to the evidence
   it keeps. Readers: technical buyers, developers, ops and CX leads, and anyone who wants to know how a customer that
   stays for months can be cheap enough to run at scale. It owns "how AI customers work" and the questions people ask
   about agents: can an AI agent sign up, have an email address, have a phone number.
   The life of an AI customer in 6 steps (identity, sign up, sleep, wake, keep, report), then each step with what makes
   it work and where it stops, then how facts reach the reader's tools, shared history, limits and the FAQ. The
   mechanism follows the design the site already states publicly (asleep costs nothing, learn once per platform, the
   share of sign ups run as a plain request, a replayed script or an agent, 100,000 companies, built for millions, which
   the founders confirmed on 24 Oct 2026). Obsession appears in up to 3 sentences where the article describes how it runs
   these steps, and in the cta blocks.
   Read on 24 Oct 2026: Cloudflare's Durable Objects pricing page (idle objects eligible for hibernation are not billed
   for duration; requests $0.15 a million on Workers Paid), Google's sender guidelines, RFC 6376, Gmail's header help,
   and the library in _research/seo/plan/ai-customers/facts.json. The store in the illustrations is invented. No dashes. */

const GMAIL_SENDERS = 'https://support.google.com/a/answer/81126?hl=en'
const RFC_DKIM = 'https://www.rfc-editor.org/rfc/rfc6376'
const GMAIL_HEADERS = 'https://support.google.com/mail/answer/29436?hl=en'
const CF_DO_PRICING = 'https://developers.cloudflare.com/durable-objects/platform/pricing/'
const SHOPIFY_ABANDONED = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts'
const SHOPIFY_SECOND = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/migrate-abandoned-checkout'
const DOUBLE_OPTIN = 'https://mailchimp.com/help/about-double-opt-in/'
const MCP = 'https://modelcontextprotocol.io/docs/getting-started/intro'
const AGENTMAIL = 'https://docs.agentmail.to/welcome'
const BROWSERBASE = 'https://docs.browserbase.com/introduction/what-is-browserbase'

export const post: BlogPost = {
  slug: 'how-ai-customers-work',
  title: 'How AI customers work: from sign up to evidence',
  dek: 'An AI customer gets its own inbox, phone number and browser, signs up like any customer, sleeps until the company acts, and keeps what arrives as evidence. Each step, what makes it cheap enough to run millions, and where it stops.',
  metaTitle: 'How AI customers work: sign up, sleep, wake and keep proof',
  description:
    'How AI customers work: their own inbox, number and browser, a public sign up, sleep until the company acts, and evidence kept as it arrived, at any scale.',
  answer:
    'An AI customer works in 6 steps: it gets its own inbox, phone number and browser, signs up through a company’s public forms, sleeps until the company sends something or a check is due, wakes, keeps what arrived as evidence, and reports each fact with a link to that evidence. Because it costs nothing while it sleeps and most sign ups run as programs, one system can hold millions of AI customers at once.',
  primaryKeyword: 'how ai customers work',
  keywords: [
    'can ai agents sign up',
    'can an ai agent have an email address',
    'ai agent phone number',
    'ai agent inbox',
    'give your ai agent a phone number',
    'email api for ai agents',
    'dkim verification',
    'double opt in',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-24',
  readingMinutes: 8,
  order: 3,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'flow',
      title: 'The life of 1 AI customer at ivywell.example',
      status: { tone: 'info', text: 'Asleep for most of its life' },
      steps: [
        { label: 'Identity', detail: 'A new Gmail address, a UK phone number and a browser, made for it', tone: 'ok' },
        { label: 'Sign up', detail: 'The pop up form, then the link in the confirmation email', tone: 'ok' },
        { label: 'Sleep', detail: 'No process runs and nothing is billed while it waits', tone: 'info' },
        { label: 'Wake', detail: 'Tue 09:02: a basket reminder arrives in its inbox', tone: 'ok' },
        { label: 'Keep', detail: 'The email as it arrived, its time, tab and verified sender', tone: 'ok' },
        { label: 'Report', detail: '1 fact with a link to the email, in Slack and the owner’s AI agent', tone: 'ok' },
      ],
      foot: 'An example on an invented store. The same 6 steps run at every company an AI customer joins.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI customer has to do what a person does over weeks: hold an address and a number, sign up, wait, notice what arrives and remember it. The hard part is doing that at thousands of companies at once without paying for thousands of people, or for thousands of AI models thinking all day.',
    },
    {
      kind: 'p',
      text: 'The design that makes it work is simple to state. An AI customer is asleep almost all the time, and the outside world wakes it: an email arrives, a text lands, a scheduled check comes due. Asleep, it costs nothing. That is why one system is built to run 100,000 companies at once, and built for millions.',
    },

    { kind: 'h2', id: 'lifecycle', text: 'The life of an AI customer' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Identity.** It is given its own inbox, phone number and browser, and later the accounts it opens.',
        '**Sign up.** It joins through the company’s public forms, the same ones any customer uses, and confirms by email or text where the company asks.',
        '**Sleep.** It waits, with no process running, for as long as the watch lasts.',
        '**Wake.** A new email, a text or a scheduled check wakes it.',
        '**Keep.** It stores what arrived exactly as it arrived, with the time and, for email, the sender’s authentication.',
        '**Report.** It turns what arrived into facts, each with a link to its evidence, and sends them where its owner works.',
      ],
    },

    { kind: 'h2', id: 'identity', text: 'The identity: an inbox, a number and a browser' },
    {
      kind: 'p',
      text: 'Each AI customer belongs to 1 company and 1 watch. Its inbox receives what a subscriber receives, and a Gmail inbox also shows which tab Gmail chose for each email. Its phone number receives texts and calls. Its browser opens pages, fills baskets and reaches checkout.',
    },
    {
      kind: 'p',
      text: 'The parts already exist as services built for AI agents: [AgentMail](' +
        AGENTMAIL +
        ') gives agents their own inboxes, and [Browserbase](' +
        BROWSERBASE +
        ') runs browsers for them. An AI customer adds the parts those services leave out: a customer’s life at one company, kept over months, and a record of what arrived.',
    },
    {
      kind: 'p',
      text: 'The identity is created for the job and plainly belongs to whoever runs it. It never borrows a real person’s name, address or card.',
    },
    { kind: 'h3', id: 'one-per-journey', text: 'One AI customer per journey' },
    {
      kind: 'p',
      text: 'A customer who left a basket gets different emails from one who bought, and both differ from one who only joined the list. So each journey gets its own AI customer: one for the welcome, one for the basket, one that buys where the owner funds an order, and one for each market where prices and messages differ. Each keeps a clean history, so every finding names the journey it came from.',
    },

    { kind: 'h2', id: 'sign-up', text: 'Signing up, once per platform' },
    {
      kind: 'p',
      text: 'An AI customer signs up where any customer would: the pop up, the footer form, the checkout tick box, the trial form. Where the company uses double opt in, it opens the confirmation email and clicks the link, as [a subscriber must before being added](' +
        DOUBLE_OPTIN +
        ').',
    },
    {
      kind: 'p',
      text: 'Most companies sign customers up on the same few platforms, so a sign up learned at one company runs at every company built the same way. The first sign up on a platform is worked out step by step and kept as a program. Every company after it runs that program in seconds, and only an unusual form needs an agent to think.',
    },
    {
      kind: 'art',
      art: {
        kind: 'report',
        title: 'How 10,000 sign ups run, by method',
        period: 'An example watch of 10,000 stores',
        cols: ['Method', 'Share', 'What it uses'],
        rows: [
          { name: 'A plain request', cells: ['70%', 'No browser, no model'], tone: 'ok' },
          { name: 'A replayed script', cells: ['25%', 'A browser for under a minute'], tone: 'ok' },
          { name: 'An agent', cells: ['5%', 'A model, for a new kind of form'], tone: 'info' },
        ],
        notes: ['The shares are the ones Obsession’s home page states for its own runs.', 'Each new kind of form an agent solves becomes a program for the next company.'],
      },
      caption: 'How sign ups split between a plain request, a replayed script and an agent. An example on invented numbers of stores, with the shares Obsession states for its runs.',
    },

    { kind: 'h2', id: 'waiting', text: 'Waiting costs nothing' },
    {
      kind: 'p',
      text: 'A customer’s most useful information arrives late: the reminder a day after the basket, the win back email after 60 days, the renewal notice after 11 months. A system that keeps a process running for each customer pays for every hour of waiting. An AI customer pays for none of it.',
    },
    {
      kind: 'p',
      text: 'Serverless runtimes make this possible. [Cloudflare’s pricing for Durable Objects](' +
        CF_DO_PRICING +
        ') states that objects that are idle and eligible for hibernation are not billed for duration, and lists requests at $0.15 a million on the paid plan beyond the first million. An AI customer that wakes 20 times a month is 20 requests.',
    },
    {
      kind: 'stat',
      value: '$0.15',
      label: 'a million requests on Cloudflare Durable Objects, and nothing for an idle object eligible for hibernation',
      source: 'Cloudflare Durable Objects pricing',
      href: CF_DO_PRICING,
    },
    {
      kind: 'p',
      text: 'The count of AI customers is then set by sign ups and storage; model time barely moves it. Obsession can run millions of AI customers this way, and a company another customer already watches starts with its history on day one.',
    },

    { kind: 'h2', id: 'wake', text: 'Waking: what it checks' },
    {
      kind: 'p',
      text: 'Each wake is a comparison. The AI customer holds what the company promised (the pop up’s offer, the flow’s timing, the policy page) and checks what arrived against it.',
    },
    {
      kind: 'table',
      caption: 'What an AI customer checks each time it wakes, with an example finding for each',
      cols: ['What woke it', 'What it checks', 'A finding looks like'],
      rows: [
        ['An email arrives', 'Sender, tab, offer, links and code', 'Welcome code refused on the sale price'],
        ['A text arrives', 'Sender, offer and the STOP reply', 'STOP confirmed, texts kept coming'],
        ['A check comes due', 'Page price, stock and the chatbot’s answer', 'Chat says 60 day returns, policy says 30'],
        ['A deadline passes', 'Whether the promised message came', 'No welcome email 24 hours after sign up'],
      ],
    },
    {
      kind: 'p',
      text: '**Silence is a finding.** The last row is the one no internal report produces. An email platform logs what it sent, and nothing logs the email a broken trigger never sent. An AI customer knows what it was promised and when, so a missing message becomes a dated fact.',
    },
    {
      kind: 'p',
      text: 'The clock comes from the company’s own settings where they are public. On Shopify, a checkout counts as abandoned once it stays incomplete [for more than ten minutes after the customer gives an email](' +
        SHOPIFY_ABANDONED +
        '), the merchant chooses when the reminder goes, and a [second abandoned checkout automation defaults to a 10 hour wait](' +
        SHOPIFY_SECOND +
        '). An AI customer that left a basket at 9:00 knows when a reminder was due, and records when one came.',
    },

    { kind: 'h2', id: 'evidence', text: 'Keeping the evidence' },
    {
      kind: 'p',
      text: 'Each email is stored exactly as it arrived: its headers, body, images and the time it landed. Bulk senders to Gmail must authenticate their mail under [Google’s sender guidelines](' +
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
        '**Pages:** a capture of what the page showed, with the time and the address.',
        '**Checkout:** each step up to payment, with the total after codes.',
        '**Chats and calls:** the full transcript, with the time of each turn.',
      ],
    },

    { kind: 'h2', id: 'facts', text: 'From evidence to facts' },
    {
      kind: 'p',
      text: 'Evidence becomes facts a person or an AI agent can use: 1 sentence each, with a link to what proves it. "Welcome email arrived 2 minutes after sign up, Promotions tab." "Code IVY10 refused at checkout on the sale price." "Chat said 60 days for returns, the returns page says 30." A fact without evidence is never reported.',
    },

    { kind: 'h2', id: 'where-facts-go', text: 'Where the facts go' },
    {
      kind: 'p',
      text: 'Facts are useful where people already work. An AI customer system sends them to Slack, a CRM, a sheet, a report or a webhook, and to the owner’s own AI agent through the [Model Context Protocol](' +
        MCP +
        '), the open standard that lets AI assistants call tools.',
    },
    {
      kind: 'p',
      text: 'Obsession exposes 5 verbs over MCP and an API: lookup, facts, evidence, become_customer and notify. An agent asks which companies are already covered, reads their facts and evidence, starts AI customers at the companies that aren’t, and gets told when something new arrives ([AI customers for developers](/blog/ai-customers-for-developers)).',
    },
    {
      kind: 'cta',
      text: 'Give your own AI agent an AI customer at any company: 5 verbs over MCP, an API and an SDK, with every email and page kept as proof. The runtime is open source.',
      to: '/developers',
      label: 'See the API and MCP',
    },

    { kind: 'h2', id: 'limits', text: 'Limits' },
    {
      kind: 'list',
      items: [
        '**A bot wall or a CAPTCHA stops it.** An AI customer never gets round one, and records the block as a finding.',
        '**A new customer sees what new customers get.** Engaged, long standing customers can receive other emails and other inbox placement.',
        '**Countries differ.** Prices, offers and delivery messages vary by market, so a watch needs a number and an address in each market it covers.',
        '**Some journeys need a real purchase.** Delivery and returns messages arrive only after an order, which needs a card the owner funds.',
        '**It reads outputs.** Why a company sent something sits in its own systems.',
      ],
    },

    { kind: 'h2', id: 'questions', text: 'Questions about how AI customers work' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Can AI agents sign up for newsletters and accounts?',
          a: 'Yes. An AI customer with its own inbox and phone number signs up through public forms as any customer can, and confirms by email or text where the company asks. It stops at a CAPTCHA or a bot wall.',
        },
        {
          q: 'Can an AI agent have its own email address?',
          a: 'Yes. Services such as AgentMail give AI agents their own inboxes, and an AI customer uses one inbox per company it joins.',
        },
        {
          q: 'Can an AI agent have a phone number?',
          a: 'Yes. An AI customer can hold a phone number to receive texts and calls, so it can confirm text sign ups and record what a company sends by SMS.',
        },
        {
          q: 'What happens when nothing arrives?',
          a: 'The AI customer records it. It knows what the company promised and when, so a welcome email that never came, or a basket reminder that came a day late, becomes a dated fact, which no internal report can show.',
        },
        {
          q: 'How does an AI customer prove an email is real?',
          a: 'It keeps the email as it arrived, with its headers, its time and a hash. Its DKIM signature, checked on arrival and kept with the key it was checked against, shows which domain signed it and that it wasn’t changed. Domains retire old keys, so the check is recorded when the email lands.',
        },
        {
          q: 'Does an AI customer use an AI model for every step?',
          a: 'No. Most sign ups run as programs learned once per platform, and a model is used only for an unusual form or a judgement a program can’t make.',
        },
        {
          q: 'How many AI customers can run at once?',
          a: 'Because an AI customer costs nothing while it sleeps, the count is limited by sign ups and storage. Obsession can run millions of AI customers.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Cloudflare’s prices and every outside source were read on 24 October 2026. The store and the 10,000 store watch in the illustrations are invented; the shares by method are the ones Obsession’s home page states.',
    },
  ],

  sources: [
    { title: 'Welcome', publisher: 'AgentMail docs', url: AGENTMAIL },
    { title: 'What is Browserbase?', publisher: 'Browserbase docs', url: BROWSERBASE },
    { title: 'About double opt-in', publisher: 'Mailchimp Help', url: DOUBLE_OPTIN },
    { title: 'Durable Objects pricing', publisher: 'Cloudflare', url: CF_DO_PRICING },
    { title: 'Recovering abandoned checkouts', publisher: 'Shopify Help Center', url: SHOPIFY_ABANDONED },
    { title: 'Opt in to the new abandoned checkout automation', publisher: 'Shopify Help Center', url: SHOPIFY_SECOND },
    { title: 'Email sender guidelines', publisher: 'Gmail Help', url: GMAIL_SENDERS },
    { title: 'RFC 6376: DomainKeys Identified Mail (DKIM) Signatures', publisher: 'IETF', url: RFC_DKIM, date: '2011-09' },
    { title: 'Trace an email with its full header', publisher: 'Gmail Help', url: GMAIL_HEADERS },
    { title: 'What is the Model Context Protocol (MCP)?', publisher: 'Model Context Protocol', url: MCP },
  ],
  related: ['ai-customers', 'ai-customers-at-scale', 'ai-customers-for-developers', 'recipe:delivery-monitoring', 'recipe:website-audit'],
}
