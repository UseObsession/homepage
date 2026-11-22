import type { BlogPost } from './types'

/* The AI customers series (24 Oct 2026): AI customer service agents and AI customers, side by side. It owns "ai customer
   service agent vs ai customer" and the questions around it ("what is an ai customer service agent", "is hubspot's
   customer agent an ai customer", "can an ai agent test my chatbot"). Readers: CX and support leaders who run or are
   buying a service agent, ecommerce and growth teams, agencies, and anyone who met both terms and wants them apart.
   The argument: the 2 names nearly match and face opposite ways. A service agent works for a company and answers its
   customers; an AI customer works for you and is the company's customer. Each is described by what it does well
   (service agents from their makers' own pages), then where they meet (an AI customer checking a company's service
   agent, which is customer-side observability at work), the third agent in the same conversations (a person's own
   agent), what each team sees with AI customers that a service agent's dashboard can't show, and which one a
   reader needs.
   Read on 24 Oct 2026 (from the verified library, _research/seo/plan/ai-customers/facts.json): HubSpot's knowledge
   base and its May 2025 release, Sierra, Decagon, Salesforce's May 2026 survey and 19 Oct 2026 opinion piece,
   Cloudflare's signed agents post, the CMA's 9 Mar 2026 guidance, Moffatt v Air Canada (McCarthy Tetrault, Fox
   Business) and the EU AI Act Service Desk. The store and the chat are invented. No dashes. */

const HUBSPOT_KB = 'https://knowledge.hubspot.com/customer-agent/set-up-the-customer-agent'
const HUBSPOT_NEWS = 'https://www.hubspot.com/company-news/customer-agent-expansion'
const SIERRA = 'https://sierra.ai/product/meet-your-agent'
const SIERRA_HOME = 'https://sierra.ai/'
const SALESFORCE_SURVEY = 'https://www.salesforce.com/news/stories/ai-service-agents-improve-customer-satisfaction/'
const MCCARTHY = 'https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot'
const FOX = 'https://foxbusiness.com/lifestyle/air-canada-chatbot-gave-customer-wrong-info-airline-pay'
const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const AI_ACT = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'
const AI_ACT_113 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113'
const CLOUDFLARE_AGENTS = 'https://blog.cloudflare.com/signed-agents/'
const SALESFORCE_PERSONAL = 'https://www.salesforce.com/news/stories/personal-agents-to-drive-more-contact-center-traffic/'
const DECAGON = 'https://decagon.ai/'

export const post: BlogPost = {
  slug: 'ai-customer-service-agent-vs-ai-customer',
  title: 'AI customer service agents vs AI customers: who each one works for',
  dek: 'An AI customer service agent works for a company and answers that company’s customers. An AI agent as a customer signs up and buys like anyone, for the team that sent it. On Obsession it runs as a persona with its own inbox, number and browser.',
  metaTitle: 'AI customer service agent vs AI customer: the difference',
  description:
    'An AI customer service agent answers a company’s customers. An AI agent as a customer signs up and buys like anyone, for the team that sent it.',
  answer:
    'An AI customer service agent works for a company and answers that company’s customers. An AI agent as a customer works for the team that sent it, and signs up, books or buys at any company that team names. On Obsession that agent is a persona with its own inbox, phone number and browser, and the two meet when a persona asks a company’s service agent what its customers ask.',
  primaryKeyword: 'ai customer service agent vs ai customer',
  keywords: [
    'ai customer vs ai customer service agent',
    'ai customer service agent',
    'what is an ai customer service agent',
    'difference between ai customer and ai customer service agent',
    'hubspot customer agent',
    'personal ai agents',
    'test ai customer service agent',
  ],
  category: 'Behind the login',
  published: '2026-10-24',
  updated: '2026-11-22',
  readingMinutes: 7,
  order: 2,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'Who each AI agent works for',
      rows: [
        {
          name: 'AI customer service agent',
          who: 'HubSpot Customer Agent, Sierra, Decagon',
          nodes: ['A company', 'AI service agent', 'Its customers'],
          links: ['deploys', 'answers'],
        },
        {
          name: 'AI agent as a customer',
          who: 'A persona on Obsession',
          nodes: ['Your team', 'Persona', 'Any company'],
          links: ['sends', 'signs up at'],
          lit: 1,
          ours: true,
        },
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'The two names nearly match, and the overlap is real: HubSpot’s support product is called [Customer Agent](' +
        HUBSPOT_KB +
        '), and search engines read “AI customer” as customer service. The difference is direction. Each of the two works for someone and faces someone else, and those two answers decide everything it can see.',
    },
    {
      kind: 'p',
      text: 'An AI customer service agent is deployed by a company to answer the people who buy from it. An AI agent as a customer is sent by a team to be a customer. It might sign up at the team’s own company to see what its customers get, or at a competitor, a supplier or a partner. On Obsession it runs as a persona, an AI agent with its own inbox, phone number and browser under one name.',
    },

    { kind: 'h2', id: 'difference', text: 'The difference, line by line' },
    {
      kind: 'table',
      caption: 'AI customer service agents and AI agents as customers, compared on the same 8 points',
      cols: ['Compared on', 'AI customer service agent', 'AI agent as a customer'],
      rows: [
        ['Works for', 'The company that deploys it', 'The team that sends it'],
        ['Faces', 'That company’s customers', 'A company the team names: its own, a competitor, a supplier'],
        ['Starts when', 'A customer writes or calls', 'The team names a company and a job'],
        ['Lasts', 'One conversation', 'Days or months, free while it waits'],
        ['Lives in', 'The company’s site, app and help desk', 'Its own inbox, phone number and browser'],
        ['Measured by', 'Resolutions and handle time', 'What arrived, when, against what was promised'],
        ['Leaves behind', 'A resolved ticket', 'Every email, text, call and page, dated'],
        ['Examples', 'HubSpot Customer Agent, Sierra, Decagon', 'A persona on Obsession'],
      ],
    },

    { kind: 'h2', id: 'service-agents', text: 'What an AI customer service agent does well' },
    {
      kind: 'p',
      text: 'A service agent answers at any hour, in the company’s voice, from the company’s own knowledge. HubSpot’s knowledge base describes a customer agent set up [to automatically respond to customer questions using your existing content](' +
        HUBSPOT_KB +
        '). [Sierra](' +
        SIERRA +
        ') says its agent takes action to solve customers’ problems, and that one agent can be [deployed across chat, SMS, WhatsApp, email, voice and ChatGPT](' +
        SIERRA_HOME +
        ').',
    },
    {
      kind: 'list',
      items: [
        '**It resolves conversations on its own.** In May 2025 HubSpot reported that its own Customer Agent was [resolving over 50% of customer conversations autonomously](' +
          HUBSPOT_NEWS +
          ').',
        '**It has become the norm.** Salesforce’s own 2026 survey of service teams found that [66% of customer service organisations use agentic AI](' +
          SALESFORCE_SURVEY +
          '), up from 39% in 2025.',
        '**Its view is the conversation.** It knows what it was asked and what it answered, inside the company’s own systems, which is exactly the view a support team needs to run it.',
      ],
    },

    { kind: 'h2', id: 'agents-as-customers', text: 'What an AI agent as a customer does' },
    {
      kind: 'p',
      text: 'An AI agent as a customer signs up, fills a basket, books, asks a question or calls, the way any customer can. Then it waits for what the company sends, and keeps all of it.',
    },
    {
      kind: 'list',
      items: [
        '**Its own identity.** An inbox, a phone number and a browser that stays signed in, made for the job, never a real person’s.',
        '**Time.** It stays a customer for days or months, free while it waits, and wakes in 50 ms when the welcome, the reminder or the renewal arrives.',
        '**Every event kept.** Each email, text, call and page lands in one event log, in order, dated, with the email or screenshot.',
      ],
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, through one API and one bill. It gives every agent an inbox, a phone number and a browser, and a [persona](/personas) puts them under one identity. Teams that test their own emails, texts, pages and chat this way call it [customer-side observability](/blog/customer-side-observability), which starts where a service agent’s view ends.',
    },

    { kind: 'h2', id: 'where-they-meet', text: 'Where they meet: checking a service agent' },
    {
      kind: 'p',
      text: 'The two meet when a persona asks a company’s service agent the questions its customers ask. The company’s dashboard keeps that conversation from the inside. The persona keeps it from the customer’s side, and the answer is checked against the company’s own policy page.',
    },
    {
      kind: 'art',
      art: {
        kind: 'chat',
        title: 'Returns question · ivywell.example',
        turns: [
          { from: 'customer', text: 'Hi, I’m an AI agent checking answers for Ivywell. How long do I have to return an order?', time: '07:00' },
          { from: 'bot', name: 'Ivy, AI assistant', text: 'You have 60 days from delivery to return any item.', time: '07:00' },
        ],
        check: { tone: 'fail', label: 'Against the returns page', text: 'The policy says 30 days' },
      },
      caption: 'An invented store’s own team sends a persona to check its chat. The persona says it’s an AI, asks what customers ask, and its answer is checked against the store’s returns page.',
    },
    {
      kind: 'quote',
      text: 'It makes no difference whether the information comes from a static page or a chatbot.',
      cite: 'Civil Resolution Tribunal, Moffatt v. Air Canada, quoted by McCarthy Tétrault',
      href: MCCARTHY,
    },
    {
      kind: 'list',
      items: [
        '**The company answers for its agent.** In February 2024 the tribunal ordered Air Canada to pay a customer [CA$812](' +
          FOX +
          ') after its chatbot gave the wrong policy. The UK’s Competition and Markets Authority says a business is [responsible for what an AI agent does in the same way it is responsible for what an employee does](' +
          CMA +
          ').',
        '**Both sides say they’re AI.** Under [Article 50 of the EU AI Act](' +
          AI_ACT +
          '), AI systems that talk to people must be designed so people are told, and the Act [applies from 2 August 2026](' +
          AI_ACT_113 +
          '). An agent on Obsession says so in its first message, and the same check notes whether the service agent says so too.',
        '**Answers change without notice.** A prompt edit, a new help article or a model update can change what the agent says. A check every morning and after every update catches it the day it happens. The method for a store is in [how to test your store’s chatbot](/blog/test-store-chatbot-returns-policy).',
      ],
    },
    {
      kind: 'cta',
      text: 'Every answer your support bot gives a customer, word for word and dated, beside the policy page it should match, every morning and after every update.',
      to: '/blueprints/support-bot-check',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'personal-agents', text: 'Personal AI agents' },
    {
      kind: 'p',
      text: 'A third AI agent now joins the same conversations: a personal agent, sent by one individual to deal with a company on their behalf. Cloudflare describes such agents as [generally directed by an end user instead of a single company or entity](' +
        CLOUDFLARE_AGENTS +
        '). Salesforce writes that [consumers are starting to hand a wide variety of work to personal AI agents](' +
        SALESFORCE_PERSONAL +
'), in a piece by the executive who runs its service products, and Decagon now advertises [detection of personal agents](' +
        DECAGON +
        ') with a dedicated channel to serve them.',
    },
    {
      kind: 'art',
      art: {
        kind: 'sides',
        title: '3 AI agents around one company',
        rows: [
          {
            name: 'AI customer service agent',
            who: 'Works for a company',
            nodes: ['A company', 'AI service agent', 'Its customers'],
            links: ['deploys', 'answers'],
          },
          {
            name: 'Personal AI agent',
            who: 'Works for one individual, one task at a time',
            nodes: ['One person', 'Personal agent', 'A company'],
            links: ['sends', 'asks'],
          },
          {
            name: 'AI agent as a customer',
            who: 'Works for a team, for days or months',
            nodes: ['Your team', 'Persona', 'Any company'],
            links: ['sends', 'signs up at'],
            lit: 1,
            ours: true,
          },
        ],
      },
      caption: 'Who sends each AI agent, and who it faces. A personal agent acts for one individual, one task at a time. An AI agent as a customer works for a team and stays a customer of every company that team names.',
    },
    {
      kind: 'p',
      text: 'A personal agent and an AI agent as a customer both stand on the customer’s side, and they work for different people. A personal agent works for one individual and finishes that person’s task, such as chasing a delayed order. An AI agent as a customer works for a team. It signs up wherever that team points it, its own company included, and keeps every event. Developers give both kinds the same pieces: an inbox, a number and a browser for each agent. More personal agents also means more of a company’s questions arrive from agents, which makes what its service agent tells them worth checking.',
    },

    { kind: 'h2', id: 'by-team', text: 'What each team sees from the customer’s side' },
    {
      kind: 'table',
      caption: 'What a service agent’s own dashboard shows each team, and what a persona working for that team adds',
      cols: ['Team', 'A service agent’s dashboard', 'What a persona adds'],
      rows: [
        ['CX and support', 'Resolutions, handle time, deflection', 'Whether answers match policy, every morning and after updates'],
        ['Ecommerce', 'Chats about orders', 'Whether the welcome, reminder and code arrive as promised'],
        ['Marketing', 'Not covered', 'Every competitor’s emails, offers and prices as a customer gets them'],
        ['Sales', 'Not covered', 'How each prospect treats its own customers before the call'],
        ['Agencies', 'Only what clients share', 'Every client’s sign-up, basket and checkout emails, every event kept'],
        ['Developers', 'Their own agent’s traces', 'An inbox, number and browser for their own agent, on one API'],
      ],
    },
    {
      kind: 'p',
      text: 'How each team uses this in a normal week is in [the guide for commercial teams](/blog/ai-customers-for-commercial-teams). Testing your own journeys, with the checks and pass marks, is in [customer-side observability](/blog/customer-side-observability).',
    },

    { kind: 'h2', id: 'which', text: 'Which one you need' },
    {
      kind: 'list',
      items: [
        '**To answer your customers faster, at any hour:** an AI customer service agent.',
        '**To see what customers receive, from your company or a competitor:** a persona on Obsession. It signs up and waits. Every email, text, call and page lands in one event log, dated, with the email or screenshot. Any team can pick a [blueprint](/blueprints), and Obsession runs it and sends the results.',
        '**If you run a service agent:** both. The service agent answers; a persona checks what it tells people, every morning and after every update.',
        '**If you run no AI agent and watch 1 or 2 competitors:** a monthly check by hand covers it, and a persona earns its place as the list or the pace grows.',
      ],
    },

    { kind: 'h2', id: 'limits', text: 'What each one can’t see' },
    {
      kind: 'list',
      items: [
        '**A service agent sees the conversations that reach it.** The welcome email that never arrived, the code refused at checkout and every competitor sit outside its view.',
        '**An AI agent as a customer sees what any customer sees.** Why the company sent something sits in the company’s own systems. It never gets round a CAPTCHA or a bot block, stops at any identity check, and the event log keeps the step where it stopped.',
        '**Neither replaces the other.** One answers for the company; the other meets it as a customer.',
      ],
    },

    { kind: 'h2', id: 'questions', text: 'Questions about the difference' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is an AI customer service agent?',
          a: 'An AI agent a company deploys to answer its customers on chat, email, phone or messaging, from the company’s own content. HubSpot’s Customer Agent, Sierra and Decagon are examples.',
        },
        {
          q: 'What is the difference between an AI customer and an AI customer service agent?',
          a: 'Direction. An AI customer service agent works for a company and answers that company’s customers. An AI agent as a customer works for the team that sent it. It signs up, books or buys at any company that team names, its own included, and keeps every email, text, call and page it gets.',
        },
        {
          q: 'Is HubSpot’s Customer Agent an AI customer?',
          a: 'No. Despite the name, it is a customer service agent. HubSpot describes it as set up to automatically respond to customer questions using the company’s existing content.',
        },
        {
          q: 'Can an AI agent test my AI customer service agent?',
          a: 'Yes. A persona says it’s an AI, asks what your customers ask, keeps the transcript and checks each answer against your policy pages, every morning and after every update. Teams who don’t code run it as the support bot check blueprint.',
          link: { label: 'See the blueprint', to: '/blueprints/support-bot-check' },
        },
        {
          q: 'What is a personal AI agent?',
          a: 'An AI agent directed by one individual to deal with a company on their behalf, such as chasing an order. It completes that person’s task. An AI agent as a customer works for a team, stays a customer for days or months and keeps every event.',
        },
        {
          q: 'What does an AI agent as a customer cost on Obsession?',
          a: 'A persona is free while it waits; you pay for the pieces it uses, such as $0.50 an inbox a month and $0.10 a browser hour. The Free plan includes 3 inboxes, 1 number and 10 browser hours, and Developer is $20 a month.',
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'What is customer-side observability?',
          a: 'Testing your own emails, texts, prices, pages and chat the way customers meet them, from outside, over days and weeks, with every step dated.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every product here is described from its maker’s own pages as of 24 October 2026. The store and the chat in the illustrations are invented examples.',
    },
  ],

  sources: [
    { title: 'Set up the customer agent', publisher: 'HubSpot Knowledge Base', url: HUBSPOT_KB, date: '2026-09-16' },
    { title: 'Meet your agent', publisher: 'Sierra', url: SIERRA },
    { title: 'Sierra', publisher: 'Sierra', url: SIERRA_HOME },
    { title: 'HubSpot expands Breeze Customer Agent to offer AI support for the entire buyer journey', publisher: 'HubSpot', url: HUBSPOT_NEWS, date: '2025-05-08' },
    { title: 'New research: AI service agents are scaling and delivering CSAT', publisher: 'Salesforce', url: SALESFORCE_SURVEY, date: '2026-05-20' },
    { title: 'Moffatt v. Air Canada: A Misrepresentation by an AI Chatbot', publisher: 'McCarthy Tétrault', url: MCCARTHY, date: '2024-02-19' },
    { title: 'Air Canada chatbot gave a customer wrong info and the airline had to pay', publisher: 'Fox Business', url: FOX, date: '2024-02-19' },
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-03-09' },
    { title: 'Article 50: transparency obligations', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT },
    { title: 'Article 113: entry into force and application', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_113 },
    { title: 'The age of agents: cryptographically recognizing agent traffic', publisher: 'Cloudflare Blog', url: CLOUDFLARE_AGENTS, date: '2025-08-28' },
    { title: 'Personal agents will drive more contact center traffic than they offset', publisher: 'Salesforce', url: SALESFORCE_PERSONAL, date: '2026-10-19' },
    { title: 'The AI concierge for every customer', publisher: 'Decagon', url: DECAGON },
  ],
  related: ['ai-customers', 'customer-side-observability', 'test-store-chatbot-returns-policy', 'how-ai-customers-work', 'recipe:support-bot-check', 'recipe:ai-disclosure-check'],
}
