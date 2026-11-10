import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/competitive-intelligence: for a CI lead in product marketing. "competitive intelligence tools" stays
   with its owner, and "is competitive intelligence legal" with the legality post (docs/SEARCH.md §2); this page owns
   the definition and links both. Crayon is described from its own home page, read 11 Nov 2026. */
const DEFINITION =
  'Competitive intelligence is the practice of collecting and sharing facts about competitors, such as their prices and products, so a company can compete better against them.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Competitive intelligence',
  line: 'Gathering, checking and sharing facts about competitors so a company can decide and sell better against them.',
  meta: {
    path: '/glossary/competitive-intelligence',
    title: 'What is competitive intelligence? Where CI facts come from',
    description:
      'Competitive intelligence is gathering and sharing facts about competitors, such as prices, products and messaging, so teams sell better. Its three sources.',
    answer: `${DEFINITION} Its facts come from what competitors publish, what reps and buyers say, and what any customer sees after signing up. A CI team turns them into battlecards for sales, pricing notes for product and positioning for marketing.`,
    ogImage: '/og/glossary-competitive-intelligence.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Competitive intelligence', path: '/glossary/competitive-intelligence' },
    ],
  },
  title: 'Competitive intelligence: dated facts about competitors, for every team',
  dek: 'The rep who screenshots a competitor’s pricing page and the marketer on a competitor’s mailing list are both doing it. Competitive intelligence turns that into a practice the whole company can rely on.',
  primaryKeyword: 'competitive intelligence',
  keywords: ['what is competitive intelligence', 'competitive intelligence meaning', 'competitive intelligence definition', 'competitor intelligence'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'marketing',
  term: {
    name: 'competitive intelligence',
    alternateName: ['CI', 'competitor intelligence'],
    definition: DEFINITION,
  },
  blocks: [
    { kind: 'h2', id: 'what-ci-covers', text: 'What competitive intelligence covers' },
    {
      kind: 'p',
      text: 'A competitive intelligence (CI) team often sits inside product marketing. It answers questions such as what a competitor charges, what changed this month and why deals are lost to it. It publishes the answers where each team works, as [battlecards](/glossary/battlecard) for sales, pricing notes for product and positioning for marketing.',
    },
    { kind: 'h2', id: 'where-ci-comes-from', text: 'Where competitive intelligence comes from' },
    {
      kind: 'list',
      items: [
        '**What competitors publish:** websites, pricing pages, release notes, job posts, reviews and filings.',
        '**What people hear:** win-loss interviews, reps’ call notes and customers who switched.',
        '**What a customer sees:** a competitor’s sign-up, trial, emails, signed-in prices and cancel flow, seen by signing up as any customer can.',
      ],
    },
    {
      kind: 'p',
      text: 'CI platforms collect much of the first source and share it across a sales team. [Crayon](https://www.crayon.co/), for example, monitors competitors and alerts teams to relevant intel. It and Klue are set beside the other options in [Crayon alternatives](/alternatives/crayon) and [Klue alternatives](/alternatives/klue). The third source is usually worked by hand, with someone running a trial, screenshotting each screen and repeating it next quarter.',
    },
    { kind: 'h2', id: 'where-ci-draws-the-line', text: 'Where competitive intelligence draws the line' },
    {
      kind: 'p',
      text: 'Sound CI keeps to what any customer could see, as itself, and stops at anything confidential. Whether a given method is lawful depends on the country and on the site’s terms; [is it legal to mystery shop competitors](/blog/is-it-legal-to-mystery-shop-competitors) covers the common cases.',
    },
    { kind: 'h2', id: 'the-customer-source', text: 'How what competitors show customers is collected' },
    {
      kind: 'p',
      text: `${ENTITY} For a CI team, the third source becomes a standing feed for every competitor at once.`,
    },
    {
      kind: 'p',
      text: 'Each new email, price and offer lands dated the day it arrives, beside what the CI platform already holds. [Obsession vs Klue](/compare/obsession-vs-klue) shows how the two fit together.',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the difference between competitive intelligence and market research?',
          a: 'Market research studies customers and the market as a whole. Competitive intelligence studies named competitors and what they do, so a team can act on it in a deal, a launch or a price change.',
        },
        {
          q: 'Who uses competitive intelligence?',
          a: 'Sales reps in live deals, product managers deciding what to build, pricing teams setting prices and marketers writing positioning. A CI lead keeps the facts current and gets each team the part it needs.',
          link: { label: 'Battlecard, defined', to: '/glossary/battlecard' },
        },
        {
          q: 'Is competitive intelligence the same as spying?',
          a: 'No. CI works from what competitors publish, what people say openly and what any customer can see. Taking confidential information, or lying to get it, is where CI ends. The rules differ by country.',
          link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
        },
      ],
    },
  ],
  sources: [{ title: 'Crayon home page', publisher: 'Crayon', url: 'https://www.crayon.co/' }],
  related: [
    '/glossary/battlecard',
    '/glossary/customer-journey-benchmarking',
    '/glossary/mystery-shopping',
    '/glossary/trial-limit',
    '/compare/obsession-vs-klue',
    '/alternatives/klue',
    '/alternatives/crayon',
    'ecommerce-competitive-intelligence',
    'is-it-legal-to-mystery-shop-competitors',
    'recipe:competitor-tracking',
  ],
}
