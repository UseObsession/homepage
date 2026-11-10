import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/login-wall: the term the whole index rests on. "data behind login" stays with Home (docs/SEARCH.md §2);
   this page owns the definition of a login wall and links Home for the category. */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'Login wall',
  line: 'Any step a site puts between a visitor and what it shows customers: a sign-up, a login, a form or a checkout.',
  meta: {
    path: '/glossary/login-wall',
    title: 'What is a login wall? What sites show only past the sign-up',
    description:
      'A login wall is any step between a visitor and what a site shows customers, such as a sign-up, a form or a checkout. What sits behind it, and who reads it.',
    answer:
      'A login wall is any step a website puts between a visitor and what it shows its customers, such as a sign-up, a login, a quote form, a checkout or a cancel flow. Search engines and crawlers stop at it, so the emails a company sends after sign-up, its member prices and the offer in its cancel flow never reach a search result.',
    ogImage: '/og/glossary-login-wall.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Login wall', path: '/glossary/login-wall' },
    ],
  },
  title: 'Login wall: the step between what anyone sees and what customers see',
  dek: 'Every company shows two versions of itself: the pages anyone can open, and what it shows people who sign up, log in, ask for a quote or try to cancel.',
  primaryKeyword: 'login wall',
  keywords: ['what is a login wall', 'login wall meaning', 'content behind a login', 'sign-up wall'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'sales',
  term: {
    name: 'login wall',
    alternateName: ['sign-up wall', 'login-gated content'],
    definition:
      'A login wall is any step a website puts between a visitor and what it shows its customers, such as a sign-up, a login, a quote form, a checkout or a cancel flow.',
  },
  art: {
    kind: 'flow',
    title: 'northwind.example · the wall',
    status: { tone: 'info', text: 'Example' },
    steps: [
      { label: 'Pricing page', detail: 'Pro £29 a month. Anyone can open it, and search engines index it.', tone: 'info' },
      { label: 'The wall: sign up', detail: 'An email address and a password. Crawlers stop here.', tone: 'late' },
      { label: 'Day 0 email', detail: '“Welcome to Northwind”, with 20% off the first month.', tone: 'ok' },
      { label: 'Signed-in price', detail: 'Pro £24 a month once logged in.', tone: 'ok' },
      { label: 'Cancel flow', detail: '50% off for 3 months to stay.', tone: 'ok' },
    ],
    foot: 'Northwind is an invented company. Everything after the second step exists only for people who signed up.',
  },
  blocks: [
    { kind: 'h2', id: 'what-it-covers', text: 'What counts as a login wall' },
    {
      kind: 'p',
      text: 'The name comes from the login screen, but any step that asks a visitor to become a customer works the same way. A sign-up form, a login, a quote engine that wants a postcode and a date of birth, a basket and checkout, and the steps a site shows only when someone tries to cancel are all walls. A chat window that answers only signed-in customers is one too.',
    },
    {
      kind: 'list',
      items: [
        '**Sign-up:** the welcome email, the texts that follow and every triggered flow.',
        '**Login:** member and signed-in prices, the free plan’s limits and the upgrade prompts inside a product.',
        '**Form:** quotes for finance, insurance and services, given only to the profile that asked.',
        '**Checkout:** fees, delivery promises and codes that appear only in the basket.',
        '**Cancel:** the [save offer](/glossary/save-offer), the renewal notice and what arrives after an unsubscribe.',
      ],
    },
    { kind: 'h2', id: 'why-search-stops', text: 'Why search engines stop at the wall' },
    {
      kind: 'p',
      text: 'A crawler reads pages anyone can open. It doesn’t create accounts, wait 3 days for the next email or try to cancel, so what a site shows past those steps never enters a search index. [Web scraping](/glossary/web-scraping) tools and a [headless browser](/glossary/headless-browser) can go through a login when someone writes the steps and supplies an account, but they read the page in front of them at that moment and keep no history of what the company sent before.',
    },
    { kind: 'h2', id: 'who-reads-it', text: 'Who needs what sits behind it' },
    {
      kind: 'p',
      text: 'Anyone whose decisions depend on what other companies do to their customers. Marketing and CRM teams compare a competitor’s first 30 days of emails with their own. Pricing teams need the [member price](/glossary/member-price), not only the public one. Compliance teams need proof that a cancel flow and an unsubscribe work. Agencies open a pitch with a prospect’s own emails, and AI agents need the same facts to answer questions about a named company.',
    },
    { kind: 'h2', id: 'how-its-kept', text: 'How what sits behind a login wall is kept' },
    {
      kind: 'p',
      text: 'By hand, a team signs up with a spare inbox, screenshots each step and logs it in a sheet, which works for a few companies and stops when the list grows or someone forgets to check.',
    },
    {
      kind: 'p',
      text: `${ENTITY} Each account stays open for as long as you follow the company, so every new email, price and offer lands dated the day it arrives, and the history builds from the first day.`,
    },
    {
      kind: 'p',
      text: 'An Obsession agent never gets round a CAPTCHA or a bot block, and never goes past an identity check. Where a site puts one in front of a step, the record names the step it couldn’t reach. The lines every agent keeps are on [the page for companies an agent visits](/agents).',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is a login wall the same as a paywall?',
          a: 'A paywall is one kind of login wall: it asks for payment before showing an article or a product. A login wall is any step that turns a visitor into a customer, free sign-ups and quote forms included.',
        },
        {
          q: 'Can Google index content behind a login wall?',
          a: 'Only what a site chooses to show its crawler. Emails sent after sign-up, signed-in prices and cancel offers are shown to customers, not to crawlers, so they stay out of search results.',
        },
        {
          q: 'Is it legal to look behind a competitor’s login wall?',
          a: 'Signing up as any customer can, on the forms anyone can use, is how most teams already watch competitors. Read the site’s terms first; some ban competitive use. An Obsession agent says it’s an AI when it talks to a person and never signs in to an account that isn’t its own.',
          link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
        },
      ],
    },
  ],
  sources: [],
  related: [
    'the-web-behind-the-login',
    '/glossary/the-web-behind-the-login',
    '/glossary/member-price',
    '/glossary/save-offer',
    '/glossary/web-scraping',
    '/glossary/headless-browser',
    '/compare/obsession-vs-exa',
    'scrape-data-behind-login',
    'can-ai-agents-log-in-to-websites',
    'ecommerce-competitive-intelligence',
    'recipe:competitor-tracking',
    '/sample-output',
  ],
}
