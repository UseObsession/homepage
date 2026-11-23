import type { BlogPost } from './blog/types'

/* The blog's topics (23 Nov 2026, Seun: "the naming and groups of articles ... dont make sense"). A guide sits under the
   subject its reader came for, named the way they'd say it, so the index reads like a shelf, not like the site's types of
   blueprints. A post keeps its `category` (its type of blueprint) for the links between guides and the blueprint and team
   pages (lib/connections.ts); what a reader sees on a card, an article's kicker, the index, llms.txt and the RSS feed is
   its topic. Every post has exactly 1 topic: a new post is added here the day it ships, or the build stops. */

export type BlogTopicId =
  | 'build'
  | 'messaging'
  | 'browsers'
  | 'test'
  | 'at-work'
  | 'ai-business'
  | 'stores'
  | 'ai-shopping'
  | 'sales'
  | 'competitors'
  | 'agencies'

export type BlogTopic = {
  id: BlogTopicId
  name: string
  /* 1 line under the name: what the reader finds here, in their words. */
  line: string
  /* The reader colour (styles/accents.css) its cards and articles take. */
  reader: 'developers' | 'founders' | 'marketing' | 'sales' | 'agencies'
  /* The 3 guides the topic opens on, strongest first; the rest follow newest first. */
  picks: string[]
  slugs: string[]
}

/* The 2 shelves, as the site's 2 doors: people building agents, then people putting them to work. */
export const topicShelves: { name: string; topics: BlogTopicId[] }[] = [
  { name: 'Build with agents', topics: ['build', 'messaging', 'browsers', 'test'] },
  { name: 'Put agents to work', topics: ['at-work', 'ai-business', 'stores', 'ai-shopping', 'sales', 'competitors', 'agencies'] },
]

export const blogTopics: BlogTopic[] = [
  {
    id: 'build',
    name: 'Build an agent',
    line: 'The stack, the SDKs and the tools an agent calls, with the steps from a model to an agent that acts.',
    reader: 'developers',
    picks: ['ai-agent-infrastructure-stack', 'how-to-build-an-ai-agent-from-scratch', 'ai-agent-tools-vs-mcp'],
    slugs: [
      'ai-agent-infrastructure-stack',
      'how-to-build-an-ai-agent-from-scratch',
      'ai-agent-tools-vs-mcp',
      'openai-agents-sdk-tools',
      'vercel-ai-sdk-tools',
      'how-to-build-an-ai-receptionist',
      'how-to-build-an-ai-sdr',
      'best-sandbox-for-ai-agents',
      'what-to-build-with-ai-customers',
      'why-ai-customers-matter',
      'how-ai-customers-work',
      'ai-customers-at-scale',
    ],
  },
  {
    id: 'messaging',
    name: 'Email, phone and messaging',
    line: 'Inboxes, numbers, texts, WhatsApp and calls for agents, compared and priced.',
    reader: 'developers',
    picks: ['best-email-api-for-ai-agents', 'whatsapp-ai-agent', 'sms-for-ai-agents'],
    slugs: [
      'best-email-api-for-ai-agents',
      'whatsapp-ai-agent',
      'sms-for-ai-agents',
      'twilio-for-ai-agents',
      'n8n-email-agent',
      'email-for-claude-code',
      'mcp-server-email',
      'langchain-email-agent',
      '10dlc-registration',
      'can-ai-make-phone-calls',
      'ai-customers-for-developers',
    ],
  },
  {
    id: 'browsers',
    name: 'Browsers, logins and search',
    line: 'Cloud browsers, signing in, staying signed in and the search APIs agents read the web with.',
    reader: 'developers',
    picks: ['best-browser-for-ai-agents', 'can-ai-agents-log-in-to-websites', 'best-web-search-api-for-ai-agents'],
    slugs: [
      'best-browser-for-ai-agents',
      'can-ai-agents-log-in-to-websites',
      'best-web-search-api-for-ai-agents',
      'browser-automation-tools-for-ai-agents',
      'scrape-data-behind-login',
      'the-web-behind-the-login',
      'exa-vs-tavily-vs-firecrawl',
      'exa-alternatives',
      'long-running-ai-agents',
    ],
  },
  {
    id: 'test',
    name: 'Test and evaluate agents',
    line: 'Evals, voice and chatbot tests, traces of what an agent did, and signing up as a customer to see what it gets.',
    reader: 'founders',
    picks: ['how-to-test-ai-agents', 'how-to-evaluate-ai-agent-performance', 'ai-voice-agent-testing'],
    slugs: [
      'how-to-test-ai-agents',
      'how-to-evaluate-ai-agent-performance',
      'ai-voice-agent-testing',
      'best-ai-chatbot-testing-tools',
      'ai-agent-observability',
      'rl-environments-for-llms',
      'ai-chatbot-fails',
      'chatbot-disclosure-laws',
      'ai-customers-for-cx-teams',
      'test-store-chatbot-returns-policy',
      'customer-side-observability',
      'ai-customer-service-agent-vs-ai-customer',
      'best-ai-mystery-shopping-tools',
      'b2b-mystery-shopping',
      'hire-ai-customers',
    ],
  },
  {
    id: 'at-work',
    name: 'AI agents at work',
    line: 'What agents take off a team’s plate, job by job and industry by industry, with what each costs.',
    reader: 'founders',
    picks: ['what-can-ai-agents-do-for-business', 'ai-employees', 'ai-agents-for-small-business'],
    slugs: [
      'what-can-ai-agents-do-for-business',
      'ai-employees',
      'ai-agents-for-small-business',
      'ai-agents-that-do-work-for-you',
      'ai-agent-use-cases-for-business',
      'no-code-ai-agents',
      'ai-agent-templates-free',
      'virtual-assistant-vs-ai-agent',
      'rpa-vs-ai-agents',
      'ai-that-answers-emails',
      'ai-for-scheduling-appointments',
      'ai-agent-fill-out-forms',
      'ai-voice-agent-for-small-business',
      'ai-agent-for-healthcare',
      'ai-agent-for-law-firms',
      'ai-agent-for-accountants',
      'ai-agent-for-real-estate-agents',
      'ai-agent-for-restaurants',
    ],
  },
  {
    id: 'ai-business',
    name: 'Start an AI business',
    line: 'Ideas, prices and first customers for founders and freelancers building a business on agents.',
    reader: 'founders',
    picks: ['ai-agent-business-ideas', 'how-to-make-money-with-ai-agents', 'start-an-ai-automation-agency'],
    slugs: [
      'ai-agent-business-ideas',
      'how-to-make-money-with-ai-agents',
      'start-an-ai-automation-agency',
      'one-person-company-ai-agents',
      'how-to-start-an-ai-business',
      'sell-ai-agents-to-local-businesses',
      'build-and-sell-ai-automations',
      'ai-saas-ideas',
    ],
  },
  {
    id: 'stores',
    name: 'Online stores and email',
    line: 'Checkout, flows, benchmarks and audits: what a store sends a new customer, and how to check it.',
    reader: 'marketing',
    picks: ['abandoned-cart-email-sequence', 'shopify-checkout-not-working', 'ecommerce-email-marketing-benchmarks'],
    slugs: [
      'abandoned-cart-email-sequence',
      'shopify-checkout-not-working',
      'ecommerce-email-marketing-benchmarks',
      'welcome-email-series-best-practices',
      'browse-abandonment-email',
      'klaviyo-audit-tools',
      'welcome-basket-email-not-sending',
      'email-marketing-audit',
      'shopify-store-audit-checklist',
      'how-to-test-your-shopify-store-as-a-customer',
      'traffic-but-no-sales',
      'black-friday-checklist-new-customer',
      'ai-customers-find-revenue-leaks',
      'ai-customers-for-ecommerce-brands',
      'agentic-ai-use-cases-in-ecommerce',
      'where-your-ads-land-morning-check',
      'shopify-simgym-review-ai-shoppers-vs-ai-customers',
    ],
  },
  {
    id: 'ai-shopping',
    name: 'Agentic commerce',
    line: 'How agents buy, book and order for people, the protocols behind it, and what stores do about it.',
    reader: 'founders',
    picks: ['agentic-commerce', 'agentic-commerce-protocols', 'chatgpt-shopping-for-brands'],
    slugs: [
      'agentic-commerce',
      'agentic-commerce-protocols',
      'chatgpt-shopping-for-brands',
      'agentic-commerce-companies',
      'agentic-commerce-for-merchants',
      'agent-ready-website',
      'what-chatgpt-says-about-your-store',
      'ai-customers',
      'future-of-ai-customers',
    ],
  },
  {
    id: 'sales',
    name: 'Sales and revenue teams',
    line: 'Buying signals, first lines, business cases and renewals, built on what each account sends its own customers.',
    reader: 'sales',
    picks: ['buying-signals-examples', 'cold-email-first-line-examples', 'speed-to-lead-statistics'],
    slugs: [
      'buying-signals-examples',
      'cold-email-first-line-examples',
      'speed-to-lead-statistics',
      'sales-trigger-events',
      'battlecard-template',
      'win-loss-analysis',
      'sales-business-case-template',
      'churn-risk-indicators',
      'qbr-template',
      'crm-data-enrichment-fields',
      'clay-custom-signals',
      'ai-customers-for-b2b-sales-teams',
      'ai-customers-for-commercial-teams',
      'ai-customers-for-ecommerce-vendors',
    ],
  },
  {
    id: 'competitors',
    name: 'Competitors and pricing',
    line: 'Track competitors’ prices, member offers, ads and emails, and the rules that apply when you do.',
    reader: 'marketing',
    picks: ['best-competitor-price-tracking-tools', 'competitor-email-tracking-tools', 'competitor-ad-tracking-tools'],
    slugs: [
      'best-competitor-price-tracking-tools',
      'competitor-email-tracking-tools',
      'competitor-ad-tracking-tools',
      'competitor-price-comparison-template',
      'map-monitoring-software',
      'member-only-pricing',
      'competitor-price-after-welcome-code',
      'how-to-see-competitor-ads',
      'can-chatgpt-track-competitor-emails',
      'competitor-monitoring',
      'ecommerce-competitive-intelligence',
      'competitive-intelligence-for-product-marketing',
      'bank-competitor-analysis',
      'consumer-duty-fair-value-assessment',
      'is-it-legal-to-mystery-shop-competitors',
    ],
  },
  {
    id: 'agencies',
    name: 'For agencies',
    line: 'Win ecommerce clients with proof, keep them, and report every flow that fired.',
    reader: 'agencies',
    picks: ['get-clients-as-a-marketing-agency', 'how-to-get-email-marketing-clients', 'ecommerce-agency-client-retention-with-ai-customers'],
    slugs: [
      'get-clients-as-a-marketing-agency',
      'how-to-get-email-marketing-clients',
      'ecommerce-agency-client-retention-with-ai-customers',
      'how-to-find-ecommerce-clients',
      'klaviyo-experts-win-upwork-jobs-from-shopify-brands',
      'audit-prospect-email-without-klaviyo-login',
      'show-clients-every-flow-fired',
      'ai-customers-for-retention-agencies',
      'ai-customers-for-cro-agencies',
      'ai-customers-for-shopify-plus-agencies',
      'ecommerce-cro-audit-template',
      'black-friday-competitor-email-report-template',
    ],
  },
]

/* The guides the index leads with (23 Nov 2026, Seun: "promoting the best blogs for SEO or interesting topics"): the
   pillar that owns the idea, then 1 for each kind of reader: the guide Google already tests for its category's words,
   the one a founder starting out wants, the developer comparison, and the guide on hiring an agent for a role. */
export const blogLeadSlug = 'ai-agent-infrastructure-stack'
export const blogStartHere = [
  'best-competitor-price-tracking-tools',
  'ai-agent-business-ideas',
  'best-email-api-for-ai-agents',
  'ai-employees',
]

const bySlug = new Map<string, BlogTopic>()
for (const t of blogTopics) for (const s of t.slugs) bySlug.set(s, t)

const OTHER: BlogTopic = { id: 'at-work', name: 'AI agents at work', line: '', reader: 'founders', picks: [], slugs: [] }

/* A post's topic. The build checks every post has one (scripts/check-network.mjs reads the same map). */
export const topicOf = (p: Pick<BlogPost, 'slug'>): BlogTopic => bySlug.get(p.slug) ?? OTHER
export const topicById = (id: string) => blogTopics.find((t) => t.id === id)
/* Every slug filed, for the build's check. */
export const filedSlugs = () => [...bySlug.keys()]
