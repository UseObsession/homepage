import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/the-web-behind-the-login: the category's definition, said the same way everywhere (docs/SEARCH.md §2).
   Home owns the brand phrase and the blog's guide (/blog/the-web-behind-the-login) owns "web behind the login" as a
   search; this page owns the definition and is the glossary's lead DefinedTerm, and links the guide in its text. */
const DEFINITION =
  'The web behind the login is everything companies show only to people who become their customers: the emails and texts after a sign-up, member and signed-in prices, trial limits, quotes behind forms, checkout and cancel offers, and what support tells a customer.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'The web behind the login',
  line: 'What companies show only to their customers: emails after a sign-up, member prices, trial limits and cancel offers.',
  meta: {
    path: '/glossary/the-web-behind-the-login',
    title: 'The web behind the login: a definition, and what sits there',
    description:
      'The web behind the login is what companies show only to customers: emails after a sign-up, member prices, trial limits, quotes and cancel offers. Defined.',
    answer: `${DEFINITION} Search engines index the pages anyone can open, so none of it reaches a search result or a web search API.`,
    ogImage: '/og/glossary-the-web-behind-the-login.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'The web behind the login', path: '/glossary/the-web-behind-the-login' },
    ],
  },
  title: 'The web behind the login: what companies show only to their customers',
  dek: 'Every company runs two websites: the one anyone can open, and the one it shows to people who sign up, log in, ask for a quote, check out or try to cancel.',
  primaryKeyword: 'web behind the login definition',
  keywords: ['what is the web behind the login', 'content behind login'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'sales',
  term: { name: 'the web behind the login', alternateName: ['data behind the login'], definition: DEFINITION },
  blocks: [
    { kind: 'h2', id: 'what-sits-there', text: 'What sits behind the login' },
    {
      kind: 'p',
      text: 'Each step a site puts between a visitor and its customers, a [login wall](/glossary/login-wall), hides a different kind of fact. Together they are the half of a company that only its customers see.',
    },
    {
      kind: 'list',
      items: [
        '**After a sign-up:** the [welcome series](/glossary/welcome-series), every [triggered flow](/glossary/triggered-flow) and the texts, each with the time it arrived.',
        '**After a login:** the [member price](/glossary/member-price) beside the public one, a free plan’s [trial limit](/glossary/trial-limit) and the [upgrade prompt](/glossary/upgrade-prompt).',
        '**Behind a form:** quotes for finance, insurance and services, given to the profile that asked.',
        '**In the basket and checkout:** codes, fees, delivery promises and the [abandoned cart email](/glossary/abandoned-cart-email) after someone leaves.',
        '**On the way out:** the [cancel flow](/glossary/cancel-flow), its [save offer](/glossary/save-offer), renewal notices and what arrives after an unsubscribe.',
      ],
    },
    { kind: 'h2', id: 'why-search-misses-it', text: 'Why search engines and AI agents miss it' },
    {
      kind: 'p',
      text: 'A crawler reads pages anyone can open, at the moment it visits. It doesn’t sign up, wait a week for the third email or try to cancel, so a [web search API](/glossary/web-search-api) can’t return what a company sends its customers. An AI agent that answers questions about a named company has the same gap: it can quote the pricing page, but not the price a signed-in member pays or the offer in the cancel flow. The guide to [the web behind the login](/blog/the-web-behind-the-login) covers the research on how much of the web search engines never index.',
    },
    { kind: 'h2', id: 'who-uses-it', text: 'Who uses the web behind the login' },
    {
      kind: 'p',
      text: 'Marketing and CRM teams compare a competitor’s first 30 days with their own. Pricing teams track member prices and quotes. Compliance teams prove that a cancel flow and an unsubscribe work. Competitive intelligence teams tear down competitors’ trials. Agencies open pitches with a prospect’s own emails, funds read what consumer companies offer over time, and AI agents answer users with evidence instead of a guess.',
    },
    { kind: 'h2', id: 'how-its-indexed', text: 'How the web behind the login is collected' },
    {
      kind: 'p',
      text: `${ENTITY} A company’s history starts the day it is covered and builds for as long as anyone follows it, so it can’t be filled in later.`,
    },
    {
      kind: 'p',
      text: 'An Obsession agent signs up as any customer can, says it’s an AI when it talks to a person, goes every step short of paying, never invents identity details and never gets round a CAPTCHA or a bot block ([what every agent keeps to](/agents)). How it compares with search APIs, scrapers and email archives is on [the compare page](/compare), and one real record is in [the sample data](/sample-output).',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is the web behind the login the same as the deep web?',
          a: 'It is the part of the deep web that companies show their own customers. The deep web is every page search engines don’t index, private email and banking included; the web behind the login is what a company shows anyone who becomes its customer.',
        },
        {
          q: 'Can a web search API reach the web behind the login?',
          a: 'Not on its own. Search APIs read pages anyone can open. What a company sends and shows after a sign-up needs an account at that company, kept open while the emails and offers arrive.',
          link: { label: 'Obsession vs Exa', to: '/compare/obsession-vs-exa' },
        },
        {
          q: 'Is collecting it legal?',
          a: 'Obsession does only what any customer can, on the pages and forms anyone can use. It says it’s an AI when it talks to a person and never signs in to an account that isn’t its own.',
        },
      ],
    },
  ],
  sources: [],
  related: [
    'the-web-behind-the-login',
    '/glossary/login-wall',
    '/glossary/member-price',
    '/glossary/web-search-api',
    '/glossary/point-in-time-data',
    '/compare/obsession-vs-exa',
    '/compare/obsession-vs-firecrawl',
    'can-ai-agents-log-in-to-websites',
    'scrape-data-behind-login',
    'customer-side-observability',
    '/developers',
    '/sample-output',
  ],
}
