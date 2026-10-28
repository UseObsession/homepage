import type { BlogPost } from './types'
import { AI_CUSTOMER, CUSTOMER_SIDE_OBSERVABILITY } from '../glossary'

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
  dek: 'Two kinds of AI agent with nearly the same name face opposite ways. An AI customer service agent works for a company and answers that company’s customers. An AI customer works for your company and becomes a customer of any company you name, your own included.',
  metaTitle: 'AI customer service agent vs AI customer: the difference',
  description:
    'An AI customer service agent answers a company’s customers. An AI customer works for your company as a customer of any company you name. Where they meet.',
  answer:
    'An AI customer service agent works for a company and answers that company’s customers. An AI customer works for your company and becomes a customer of any company you name, your own included, keeping what that company sends and shows it as evidence. They meet when an AI customer asks a company’s service agent what its customers ask, and Obsession’s AI customers do that at any company you name and keep the transcript.',
  primaryKeyword: 'ai customer service agent vs ai customer',
  keywords: [
    'ai customer vs ai customer service agent',
    'ai customer service agent',
    'what is an ai customer service agent',
    'difference between ai customer and ai customer service agent',
    'hubspot customer agent',
    'personal ai agents',
    'test ai customer service agent',
    'customer-side observability',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-28',
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
          name: 'AI customer',
          who: 'Obsession',
          nodes: ['Your company', 'AI customer', 'Any company'],
          links: ['hires', 'is a customer of'],
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
        '), and search engines read “AI customer” as customer service. The difference is direction. Each kind of agent works for someone and faces someone else, and those two answers decide everything it can see.',
    },
    {
      kind: 'p',
      text: 'An AI customer service agent is deployed by a company to answer the people who buy from it. An AI customer is hired by a company, or a team inside one, to be a customer: of its own business, to see what its customers get, or of a rival, a prospect or a partner. The full definition is in [what AI customers are](/blog/ai-customers).',
    },

    { kind: 'h2', id: 'difference', text: 'The difference, line by line' },
    {
      kind: 'table',
      caption: 'AI customer service agents and AI customers, compared on the same 8 points',
      cols: ['Compared on', 'AI customer service agent', 'AI customer'],
      rows: [
        ['Works for', 'The company that deploys it', 'Your company, or a team in it'],
        ['Faces', 'That company’s customers', 'A company you name: yours, a rival, a prospect'],
        ['Starts when', 'A customer writes or calls', 'Your team names a company'],
        ['Lasts', 'One conversation', 'Months, asleep between events'],
        ['Lives in', 'The company’s site, app and help desk', 'Its own inbox, phone number and browser'],
        ['Measured by', 'Resolutions and handle time', 'What arrived, when, against what was promised'],
        ['Leaves behind', 'A resolved ticket', 'Evidence, kept as it arrived'],
        ['Examples', 'HubSpot Customer Agent, Sierra, Decagon', 'Obsession'],
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

    { kind: 'h2', id: 'ai-customers', text: 'What an AI customer does' },
    { kind: 'p', text: `**${AI_CUSTOMER.definition}**` },
    {
      kind: 'list',
      items: [
        '**A real identity.** Its own inbox, phone number and browser, created for the job, never a real person’s.',
        '**Time.** It stays a customer for weeks or months and waits for what arrives: the welcome, the reminder, the price change, the renewal.',
        '**Evidence.** It keeps each email, text and page exactly as it arrived, with the time it arrived.',
      ],
    },
    {
      kind: 'p',
      text: `The practice it carries out has a name. ${CUSTOMER_SIDE_OBSERVABILITY.definition} Its view starts where a service agent’s ends: the emails, texts, prices, pages and checkout around the conversation, and the conversation itself as the customer had it ([customer-side observability](/blog/customer-side-observability)).`,
    },

    { kind: 'h2', id: 'where-they-meet', text: 'Where they meet: checking a service agent' },
    {
      kind: 'p',
      text: 'The two face each other in one place: when an AI customer asks a company’s service agent the questions its customers ask. The company’s dashboard records that conversation from the inside. The AI customer records it from the customer’s side, and checks the answer against the company’s own policy page.',
    },
    {
      kind: 'art',
      art: {
        kind: 'chat',
        title: 'Returns question · ivywell.example',
        turns: [
          { from: 'customer', text: 'Hi, I’m an AI customer checking answers for Ivywell. How long do I have to return an order?', time: '07:00' },
          { from: 'bot', name: 'Ivy, AI assistant', text: 'You have 60 days from delivery to return any item.', time: '07:00' },
        ],
        check: { tone: 'fail', label: 'Against the returns page', text: 'The policy says 30 days' },
      },
      caption: 'An invented store’s own team hires an AI customer to check its chat. The AI customer says it’s an AI, asks what customers ask, and checks the answer against the store’s returns page.',
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
          '). An AI customer says so in its first message, and the same check records whether the service agent says so too.',
        '**Answers change without notice.** A prompt edit, a new help article or a model update can change what the agent says. A check every day and after every update catches it the day it happens. The method for a store is in [how to test your store’s chatbot](/blog/test-store-chatbot-returns-policy).',
      ],
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI customers ask your AI agents what your customers ask on chat, email and phone, every day and after every update, and keep each answer as proof. Your first AI agent check is free: 3 AI customers use a chat page or phone number your company runs, and your report lands within 4 days.',
      to: '/verify',
      label: 'Check your AI agents',
    },

    { kind: 'h2', id: 'personal-agents', text: 'Personal AI agents' },
    {
      kind: 'p',
      text: 'A third kind of AI agent now joins the same conversations: a personal agent, sent by one individual to deal with a company on their behalf. Cloudflare describes such agents as [generally directed by an end user instead of a single company or entity](' +
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
            name: 'AI customer',
            who: 'Works for a company, for months',
            nodes: ['Your company', 'AI customer', 'Any company'],
            links: ['hires', 'is a customer of'],
            lit: 1,
            ours: true,
          },
        ],
      },
      caption: 'Who sends each kind of AI agent, and who it faces. A personal agent acts for one individual, one task at a time. An AI customer works for a company and stays a customer of every company that company names.',
    },
    {
      kind: 'p',
      text: 'A personal agent and an AI customer both stand on the customer’s side, and they work for different people. A personal agent works for one individual and finishes that person’s task, such as chasing a delayed order. An AI customer works for a company: it stays a customer of every company that company names, its own included, and keeps what it receives as evidence. More personal agents also means more of a company’s questions arrive from agents, which makes what its service agent tells them worth checking.',
    },

    { kind: 'h2', id: 'by-team', text: 'Customer-side observability, team by team' },
    {
      kind: 'table',
      caption: 'What a service agent’s own dashboard shows each team, and what AI customers working for that team add',
      cols: ['Team', 'A service agent’s dashboard', 'What AI customers add'],
      rows: [
        ['CX and support', 'Resolutions, handle time, deflection', 'Whether answers match policy, daily and after updates'],
        ['Ecommerce', 'Chats about orders', 'Whether the welcome, reminder and code arrive as promised'],
        ['Marketing', 'Not covered', 'Every rival’s emails, offers and prices as a customer gets them'],
        ['Sales', 'Not covered', 'How each prospect treats its own customers before the call'],
        ['Agencies', 'Only what clients share', 'Every client’s journeys, checked as a customer, with evidence'],
        ['Developers', 'Their own agent’s traces', 'Customer-side facts as a tool for their own agent'],
      ],
    },
    {
      kind: 'p',
      text: 'How each team puts this to work in a normal week is in [AI customers for commercial teams](/blog/ai-customers-for-commercial-teams), and the practice itself, with the checks and pass marks, is in [customer-side observability](/blog/customer-side-observability).',
    },

    { kind: 'h2', id: 'which', text: 'Which one you need' },
    {
      kind: 'list',
      items: [
        '**To answer your customers faster, at any hour:** an AI customer service agent.',
        '**To see what customers receive, from your company or from a rival:** use Obsession. Its AI customers sign up to any company you name and keep every email, offer and price it sends, so you can find revenue leaks, watch rivals and prospect with proof.',
        '**If you run a service agent:** both. The service agent answers; AI customers check what it tells people, every day and after every update.',
        '**If you run no AI agent and watch 1 or 2 rivals:** a monthly check by hand covers it, and AI customers earn their place as the list or the pace grows.',
      ],
    },

    { kind: 'h2', id: 'limits', text: 'What each one can’t see' },
    {
      kind: 'list',
      items: [
        '**A service agent sees the conversations that reach it.** The welcome email that never arrived, the code refused at checkout and every rival sit outside its view.',
        '**An AI customer sees what any customer sees.** Why the company sent something sits inside the company’s own systems, and a bot wall or a CAPTCHA stops it, with the step it couldn’t test named in the report.',
        '**Neither replaces the other.** One answers for the company; the other watches it as a customer.',
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
          a: 'Direction. An AI customer service agent works for a company and answers that company’s customers. An AI customer works for your company and becomes a customer of any company you name, your own included, keeping what that company sends and shows it as evidence.',
        },
        {
          q: 'Is HubSpot’s Customer Agent an AI customer?',
          a: 'No. Despite the name, it is a customer service agent: HubSpot describes it as set up to automatically respond to customer questions using the company’s existing content.',
        },
        {
          q: 'Can an AI customer test my AI customer service agent?',
          a: 'Yes. It says it’s an AI, asks what your customers ask, keeps the transcript, and checks each answer against your policy pages, every day and after every update.',
        },
        {
          q: 'What is a personal AI agent?',
          a: 'An AI agent directed by one individual to deal with a company on their behalf, such as chasing an order. It completes that person’s task. An AI customer works for a company, stays a customer for months and keeps the evidence.',
        },
        { q: 'What is customer-side observability?', a: CUSTOMER_SIDE_OBSERVABILITY.definition },
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
