import type { BlogPost } from './types'

/* The AI customers series, article 1 of 9 (24 Oct 2026): the definition, and the page that owns "AI customers" in search
   and in AI answers. Readers: anyone who meets the term (marketing, sales, agency, store, CX and AI agent teams, and
   developers) and analysts and journalists who need a clear definition to cite. Why now: AI agents now act for people
   and for companies, and the term is unclaimed (24 Oct 2026: Google reads "ai customer" as customer service, and
   HubSpot sells "Breeze Customer Agent", a support bot), so the first clear definition sets what it means.
   The definition is word for word the one in content/glossary.ts (and the JSON-LD's DefinedTerm). Then the 3 properties,
   the 5 lenses and the 3 kinds of company, then the neighbours an AI customer is often confused with (each described by
   what it does, from its own pages), the rules the category keeps, who uses it, limits and the FAQ.
   Obsession appears once in the body (who uses AI customers) and in the cta blocks, in the words of its live pages.
   Sources: the verified library in _research/seo/plan/ai-customers/facts.json (24 Oct 2026) and facts already checked in
   live articles (Klaviyo's 2026 benchmarks, Joy Joya's 362 brand test, Bain, T-ROC, Gmail's sender guidelines).
   Gartner's pages were behind a bot wall on 24 Oct, so machine customers are defined from CMSWire's 18 Feb 2026 piece,
   and ChatGPT agent (retired by OpenAI in Oct 2026) gives way to ChatGPT's cloud browser. The store in the illustration is invented. No dashes.
   22 Nov 2026 (the toolkit position): retitled in place to "AI agents as customers"; a persona on Obsession does the job. */

const KLAVIYO_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const HUBSPOT_AGENT = 'https://knowledge.hubspot.com/customer-agent/set-up-the-customer-agent'
const SIERRA = 'https://sierra.ai/product/meet-your-agent'
const BAIN = 'https://www.bain.com/insights/synthetic-customers-earn-their-stripes/'
const MACHINE = 'https://www.cmswire.com/customer-experience/machine-customers-the-structural-break-in-customer-experience'
const CLOUD_BROWSER = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'
const TROC = 'https://trocglobal.com/mystery-shopping-cost/'
const SYNTHETICS = 'https://docs.datadoghq.com/synthetics/'
const MILLED = 'https://milled.com/'
const AI_ACT = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'
const AI_ACT_113 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113'
const INVALID_CLICKS = 'https://support.google.com/google-ads/answer/42995?hl=en'
const BOT_AUTH = 'https://blog.cloudflare.com/signed-agents/'
const GMAIL_SENDERS = 'https://support.google.com/a/answer/81126?hl=en'

export const post: BlogPost = {
  slug: 'ai-customers',
  title: 'AI agents as customers: what an agent sees when it signs up, buys and asks',
  dek: 'An AI agent can be a customer of any company. It signs up, fills a basket, starts a trial or asks the chat a question, the way a person does. On Obsession, a persona does it with its own inbox, phone number and browser, for the team that sent it, and every email, text and page lands in one event log.',
  metaTitle: 'AI agents as customers: what an agent sees when it signs up',
  description:
    'An AI agent as a customer signs up, fills a basket and asks questions like any customer, with its own inbox, number and browser, every event dated.',
  answer:
    'An AI agent as a customer signs up, fills a basket and asks questions at a company the way any customer can, for the team that sent it. It works the other way round from an AI customer service agent, which works for the company and answers its customers. On Obsession, a persona does it with its own inbox, phone number and browser, and every email, text and page lands in one event log.',
  primaryKeyword: 'ai agent as a customer',
  keywords: [
    'ai customers',
    'what are ai customers',
    'ai customer',
    'synthetic customers',
    'ai mystery shopper',
    'ai agent shoppers',
  ],
  category: 'Work behind logins',
  published: '2026-10-24',
  updated: '2026-11-22',
  readingMinutes: 9,
  order: 1,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'ivywell.example · a persona’s week 1',
      who: 'Its own inbox, UK phone number and browser, created on Monday',
      rows: [
        { time: 'Mon 09:00', text: 'Signed up through the pop up', detail: 'It promised 10% off by email', tone: 'ok' },
        { time: 'Mon 09:02', text: 'Welcome email with code IVY10', detail: 'Kept as it arrived, sender verified', tone: 'ok' },
        { time: 'Mon 09:04', text: 'Text sign up confirmed', detail: 'STOP tested on Tuesday, and it worked', tone: 'ok' },
        { time: 'Tue 14:10', text: 'Left a basket: linen bedding set, £84', detail: 'Waiting for the reminder', tone: 'info' },
        { time: 'Wed 16:40', text: 'Basket reminder, 26 hours later', detail: 'The product photo was missing', tone: 'late' },
        { time: 'Thu 11:20', text: 'Asked the chat about returns', detail: 'It said 60 days. The returns page says 30', tone: 'fail' },
        { time: 'Fri 08:00', text: 'Bedding set now £79 on the page', detail: 'Subscribers got £72 with a code the night before', tone: 'info' },
      ],
      foot: 'An example on an invented store. Each row is an event in the log, kept with its email, text or page.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A company measures what it sends: emails delivered, pages served, chats closed. What reaches a customer, and when, is seen by the customer: the welcome email in the Promotions tab, the code refused at checkout, the reminder that came a day late, the chatbot that quoted an old returns window.',
    },
    {
      kind: 'p',
      text: 'An AI agent can be that customer, at any company, for as long as it takes. It signs up the way a person does, waits for what arrives and keeps each email, text and page with the time it arrived.',
    },
    {
      kind: 'p',
      text: 'Most of what decides a customer’s experience travels through private channels. Klaviyo’s own [2026 benchmarks](' +
        KLAVIYO_BENCH +
        ') show that automated flows such as welcome and basket emails were 5.3% of email sends and nearly 41% of email revenue, and only subscribers and shoppers who left a basket receive them.',
    },
    {
      kind: 'stat',
      value: '41%',
      label: 'of email revenue comes from automated flows that only subscribers receive, from 5.3% of sends',
      source: 'Klaviyo benchmarks, 2026',
      href: KLAVIYO_BENCH,
    },

    { kind: 'h2', id: 'definition', text: 'What an AI agent as a customer is' },
    {
      kind: 'p',
      text: '**An AI agent as a customer signs up, fills a basket, starts a trial or asks a question at a company the way any customer can, and keeps what the company sends, dated, for the team that sent it.**',
    },
    {
      kind: 'p',
      text: 'It is a customer of the company, and it works for whoever sent it. That can be a brand watching its competitors, an agency checking a client’s store, a sales team researching a prospect, or a company testing its own checkout and support bot. On Obsession, the agent is a persona: an AI agent with its own inbox, number and browser under one name.',
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, through one API and one bill. Its pieces are email inboxes, phone numbers and texts, iMessage, WhatsApp, Slack and Telegram, a cloud browser and a sandbox to run code. A persona puts the pieces under one identity, free while it waits. Teams with no engineers pick a blueprint, and Obsession runs the job and sends them the results. Every event and result lands in one event log developers subscribe to.',
    },
    { kind: 'h3', id: 'identity', text: 'A real identity' },
    {
      kind: 'p',
      text: 'A persona has its own [inbox](/email), [phone number](/phone) and [browser](/browser), created for it. It signs up through the same public forms any customer uses, so it receives what any new customer receives. It never uses a real person’s identity, and it stops at any identity check.',
    },
    { kind: 'h3', id: 'time', text: 'Time' },
    {
      kind: 'p',
      text: 'It stays a customer for weeks or months and waits for what arrives: the welcome, the reminder, the price change, the renewal notice. Most of what matters happens after the first visit, and a single session ends before it arrives. A persona is free while it waits and wakes in about 50 ms when a message lands.',
    },
    { kind: 'h3', id: 'evidence', text: 'One event log' },
    {
      kind: 'p',
      text: 'Every email, text, call and page lands in the event log as it arrived, with the time. For email, the sender’s authentication travels with the message: [Google’s sender guidelines](' +
        GMAIL_SENDERS +
        ') require bulk senders to authenticate their mail, so a stored email can show which domain sent it. A dated original settles a question that a description or a screenshot leaves open.',
    },
    {
      kind: 'p',
      text: 'Together these make a persona cheap to keep. It waits almost all the time and wakes when the company sends something or a check is due, so one team can run a fleet of personas across thousands of companies. Each event reaches your webhook, a message to your own system, the moment it lands. [What agents cost at scale](/blog/ai-customers-at-scale) works through the bill.',
    },

    { kind: 'h2', id: 'what-it-sees', text: 'What an AI agent sees as a customer' },
    {
      kind: 'p',
      text: 'An agent as a customer keeps everything a customer of a company sees, on every channel, in 5 areas.',
    },
    {
      kind: 'table',
      caption: 'The 5 areas an agent keeps as a customer, and who else can see each one',
      cols: ['Area', 'What the agent keeps', 'Who else sees it'],
      rows: [
        ['Email and SMS', 'Every email and text, its time, and the codes and offers inside', 'Subscribers only'],
        ['Ads, and what happens after the click', 'The ad, the page it opens, the offer, the sign up and the emails that follow', 'The ad is public\nWhat follows reaches only people who click'],
        ['Prices, offers and pages', 'List prices, subscriber prices, sold out pages and policies, and every change', 'Anyone today\nThe history only if someone kept it'],
        ['Journeys', 'Basket, checkout total after codes, trial emails, delivery messages, account emails, support replies', 'Only the customer on that journey'],
        ['AI agents and AI answers', 'What a company’s chatbot, voice agent or AI sales agent says, and what AI assistants say about the company', 'Whoever asks, at the moment they ask'],
      ],
    },
    {
      kind: 'p',
      text: 'The gap between what a company intends and what a customer receives is measurable. [A test of 362 ecommerce brands](' +
        JOYJOYA +
        ') by Joy Joya, using new email addresses and phone numbers, found that 158 sent no welcome email and 20 sent an offer that didn’t match the pop up.',
    },

    { kind: 'h2', id: 'whose-customer', text: 'Whose customer it can be' },
    {
      kind: 'list',
      items: [
        '**Competitors and the market.** Every email, text, offer, price and ad a competitor sends its customers, on 1 timeline.',
        '**Your own company.** Your ads’ landing pages, sign up forms, checkout, codes, delivery messages and support bot, checked the way your customers meet them, every week and after every change.',
        '**Partners and AI assistants.** The deals and affiliate sites showing your codes, and what ChatGPT and other assistants tell people about you.',
      ],
    },

    { kind: 'h2', id: 'not-the-same', text: 'What an AI agent as a customer is not' },
    {
      kind: 'p',
      text: 'Six other terms share part of the name or part of the job. They differ in who they work for, what they do and how long they last.',
    },
    {
      kind: 'table',
      caption: 'AI agents as customers and the terms they are often confused with',
      cols: ['Term', 'Works for', 'What it does', 'How long', 'What it keeps'],
      rows: [
        ['AI agent as a customer', 'Whoever sent it', 'Becomes a customer of a company and keeps what arrives', 'Weeks or months', 'Each email, text and page as it arrived'],
        ['AI customer service agent', 'The company', 'Answers the company’s customers', 'Ongoing', 'The company’s own conversations'],
        ['Synthetic customers', 'The researcher', 'Predicts how people would answer a question', '1 study', 'Predicted answers'],
        ['Machine customers', 'A person or organisation', 'Buys goods or services on their behalf', 'As long as it buys', 'Its orders'],
        ['AI browser agent', 'The user', 'Completes 1 task in a browser', '1 session', 'What the user saves'],
        ['Human mystery shopper', 'The client', 'Visits as a customer and reports', '1 visit', 'The shopper’s report'],
        ['Synthetic monitoring', 'The site owner', 'Runs scripted checks of the owner’s own pages and paths', 'Ongoing', 'Pass or fail results'],
      ],
    },
    {
      kind: 'list',
      items: [
        '**AI customer service agents** answer customers for a company. [HubSpot’s Breeze Customer Agent](' +
          HUBSPOT_AGENT +
          ') and [Sierra](' +
          SIERRA +
          ') are examples. An agent as a customer sits on the other side of the same conversation, and [the two sides of a support chat](/blog/ai-customer-service-agent-vs-ai-customer) sets them out.',
        '**Synthetic customers** are AI stand ins that predict how people would answer. [Bain](' +
          BAIN +
          ') reports that digital twins built from past survey data replicated about 90% of key outcomes in its test. They answer questions about people. An agent as a customer keeps what a company did.',
        '**Machine customers** buy for someone. They are [nonhuman economic actors that obtain goods or services in exchange for payment](' +
          MACHINE +
          '), in a definition CMSWire attributes to Gartner. An agent as a customer stops before payment unless it is given the customer’s own card. Where buying for someone leads next is in [machine customers](/blog/future-of-ai-customers).',
        '**AI browser agents** such as [ChatGPT’s cloud browser](' +
          CLOUD_BROWSER +
          ') read pages, click buttons and fill in forms to complete a task for a user. The help page describes no inbox or phone number of their own.',
        '**Human mystery shoppers** visit as customers and report. [T-ROC’s cost guide](' +
          TROC +
          ') puts a shop at $50 to $200, which prices them per visit and per moment.',
        '**Synthetic monitoring** runs scripted checks of your own site. [Datadog’s documentation](' +
          SYNTHETICS +
          ') describes synthetic tests as a way to observe how your systems and applications perform using simulated requests.',
        '**Email archives** such as [Milled](' +
          MILLED +
          ') let you search the marketing emails of the brands they collect.',
      ],
    },

    { kind: 'h2', id: 'rules', text: 'The rules an agent on Obsession keeps' },
    {
      kind: 'p',
      text: 'An agent as a customer stands where any customer stands, so it keeps the rules a fair customer keeps, plus the ones that apply to AI.',
    },
    {
      kind: 'list',
      items: [
        '**It says it’s an AI when it talks to a person.** [Article 50](' +
          AI_ACT +
          ') of the EU AI Act requires AI systems that talk to people to be designed so people are told, unless it is obvious, and the Act [applies from 2 August 2026](' +
          AI_ACT_113 +
          ').',
        '**It stops before payment unless it is given the customer’s own card,** and never uses fake payment details.',
        '**It never gets round a CAPTCHA or a bot block,** and never disguises itself to pass one. The event log names the step where it stopped. Standards for AI agents to identify themselves to websites, such as [Cloudflare’s Web Bot Auth](' +
          BOT_AUTH +
          '), point the same way.',
        '**It stops at any identity check,** and the event log keeps what the check asked for.',
        '**It never clicks paid ads at volume.** [Google’s Ads policy](' +
          INVALID_CLICKS +
          ') counts clicks from automated tools as invalid traffic.',
        '**Every email, text, call and page lands in the event log exactly as it arrived.**',
      ],
    },

    { kind: 'h2', id: 'who-uses', text: 'Who sends AI agents as customers' },
    {
      kind: 'p',
      text: 'Marketing, sales and agency teams pick a blueprint, and Obsession runs it. Developers build their own on the pieces.',
    },
    {
      kind: 'list',
      items: [
        '**Marketing teams** see every competitor’s emails, texts, offers and prices the day they land ([Competitor tracking](/blueprints/competitor-tracking)).',
        '**Sales teams** open each call on what the prospect does to its own customers ([Prospect intelligence](/blueprints/prospect-intelligence)).',
        '**Agencies** bring a finding to every pitch and check every client’s store weekly ([Mystery shopping](/blueprints/mystery-shopper)).',
        '**Store and CX teams** shop their own sign-up, basket and checkout after every change ([QA on your own flows](/blueprints/website-audit)).',
        '**Teams running AI agents** test their support bot, voice agent and AI sales agent as a customer ([Support bot check](/blueprints/support-bot-check), [Voice agent check](/blueprints/voice-agent-check)).',
        '**Developers** give their own agents a customer’s identity in one call ([personas](/personas), and [the developer guide](/blog/ai-customers-for-developers)).',
      ],
    },
    {
      kind: 'p',
      text: 'How a persona signs up, waits, wakes and lands each event is in [how agents work as customers](/blog/how-ai-customers-work), and the case for them is in [why every company needs one](/blog/why-ai-customers-matter).',
    },
    {
      kind: 'cta',
      text: 'See what a persona brings back: a real UK skincare store, September 2026, every email and screenshot kept, and a £40 basket left at 02:57 that got no reminder in 48 hours.',
      to: '/sample-output',
      label: 'See sample data',
    },

    { kind: 'h2', id: 'limits', text: 'Limits' },
    {
      kind: 'list',
      items: [
        '**A new customer sees what new customers get.** Long standing, engaged subscribers can receive different emails and different inbox placement.',
        '**It keeps outputs.** Why a flow didn’t send sits inside the company’s own tools, which an outside customer can’t read.',
        '**It stops where a site says no to machines,** and the event log names the step.',
        '**An email proves more than a screenshot.** An authenticated email shows who sent it. A page capture shows what a page displayed at a moment.',
        '**Not every company needs one.** A business that changes rarely and runs no paid traffic can check its sign-up and checkout by hand once a month.',
      ],
    },
    {
      kind: 'cta',
      text: 'Give your own agent an inbox, a phone number and a browser under one identity in one call, and get each email, text and page at your webhook as it lands. The Free plan includes 3 inboxes and 1 number.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI agents as customers' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are AI customers?',
          a: 'It is one name for AI agents acting as customers. The agent signs up, fills a basket, starts a trial or asks a question at a company the way any customer can, and keeps what arrives, dated, for the team that sent it.',
        },
        {
          q: 'What is the difference between an AI agent as a customer and an AI customer service agent?',
          a: 'An agent as a customer is a customer of a company and works for whoever sent it. An AI customer service agent works for the company and answers its customers.',
        },
        {
          q: 'Are AI agents as customers the same as synthetic customers?',
          a: 'No. Synthetic customers are AI stand ins that predict how people would answer research questions. An agent as a customer signs up at a real company and keeps what the company sends.',
        },
        {
          q: 'What are machine customers?',
          a: 'Machine customers are nonhuman economic actors that obtain goods or services in exchange for payment, in a definition CMSWire attributes to Gartner, such as a voice assistant or a system that reorders supplies. An agent as a customer watches a company and stops before payment unless it is given the customer’s own card.',
        },
        {
          q: 'Is it legal to send an AI agent as a customer?',
          a: 'An agent on Obsession signs up through public forms as any customer can and says it’s an AI when it talks to a person. It uses no fake payment details, stops at any identity check and never gets round a CAPTCHA or a bot block. The rules differ by country and by use, so take legal advice for your case.',
        },
        {
          q: 'Can an AI agent buy something as a customer?',
          a: 'It fills a basket and goes up to payment, then stops, unless it is given the customer’s own card. Most of what it keeps arrives without a purchase: emails, texts, prices, basket reminders and chat answers.',
        },
        {
          q: 'How long does a persona stay a customer?',
          a: 'For as long as the team keeps it: weeks or months. A persona is free while it waits and wakes when the company sends something or a scheduled check is due. It is billed on the pieces it uses, such as an inbox at $0.50 a month and a US number at $2.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Each company and term was read on its own pages on 24 October 2026. The store in the illustration is invented. For legal questions, take advice for your own case.',
    },
  ],

  sources: [
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KLAVIYO_BENCH, date: '2026' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Email sender guidelines', publisher: 'Gmail Help', url: GMAIL_SENDERS },
    { title: 'Set up the customer agent', publisher: 'HubSpot Knowledge Base', url: HUBSPOT_AGENT, date: '2026-09-16' },
    { title: 'Meet your agent', publisher: 'Sierra', url: SIERRA },
    { title: 'Synthetic customers earn their stripes', publisher: 'Bain & Company', url: BAIN, date: '2026-05-04' },
    { title: 'Machine customers: the structural break in customer experience', publisher: 'CMSWire (Ricardo Saltz Gulko)', url: MACHINE, date: '2026-02-18' },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: CLOUD_BROWSER },
    { title: 'How much does mystery shopping cost? 2026 pricing guide', publisher: 'T-ROC', url: TROC, date: '2026' },
    { title: 'Synthetic Testing and Monitoring', publisher: 'Datadog Docs', url: SYNTHETICS },
    { title: 'Milled', publisher: 'Milled', url: MILLED },
    { title: 'Article 50: transparency obligations', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT },
    { title: 'Article 113: entry into force and application', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_113 },
    { title: 'The age of agents: cryptographically recognizing agent traffic', publisher: 'Cloudflare Blog', url: BOT_AUTH, date: '2025-08-28' },
    { title: 'Invalid clicks: definition', publisher: 'Google Ads Help', url: INVALID_CLICKS },
  ],
  related: ['how-ai-customers-work', 'why-ai-customers-matter', 'hire-ai-customers', 'recipe:mystery-shopper', 'recipe:competitor-tracking', '/sample-output'],
}
