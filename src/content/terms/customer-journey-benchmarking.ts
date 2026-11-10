import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/customer-journey-benchmarking: for a journey or CX lead at a bank, card issuer, insurer or telecom, and
   product teams at software companies. "customer journey testing" stays with its owner (docs/SEARCH.md §2); this page
   owns the definition. No outside facts: the method is described in plain words, and Competiscan only in the site's
   own words (a fixed list behind a client login). */
const DEFINITION =
  'Customer journey benchmarking is comparing the steps a customer goes through at your company with the same steps at competitors, such as opening an account or cancelling.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Customer journey benchmarking',
  line: 'Comparing the steps a customer takes at your company with the same steps at competitors, screen by screen.',
  meta: {
    path: '/glossary/customer-journey-benchmarking',
    title: 'What is customer journey benchmarking? Your steps vs theirs',
    description:
      'Customer journey benchmarking compares the steps a customer takes at your company with competitors’, from sign-up to cancel. How it’s done, and by whom.',
    answer: `${DEFINITION} Each journey is run with the same customer profile at every company, and each screen, email and wait is recorded with its time. The results show where your journey is slower, harder or worse value.`,
    ogImage: '/og/glossary-customer-journey-benchmarking.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Customer journey benchmarking', path: '/glossary/customer-journey-benchmarking' },
    ],
  },
  title: 'Customer journey benchmarking: your steps beside a competitor’s',
  dek: 'A bank wants to know how long it takes to open a savings account with it and with 3 competitors, and what each one sends afterwards. The answer is a journey benchmark.',
  primaryKeyword: 'customer journey benchmarking',
  keywords: ['what is customer journey benchmarking', 'journey benchmarking', 'competitor journey benchmarking', 'customer experience benchmarking'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'founders',
  term: {
    name: 'customer journey benchmarking',
    alternateName: ['journey benchmarking', 'competitive journey benchmarking'],
    definition: DEFINITION,
  },
  blocks: [
    { kind: 'h2', id: 'what-gets-compared', text: 'What a journey benchmark compares' },
    {
      kind: 'p',
      text: 'A journey is one job a customer does, from the first screen to the last message. Opening an account, starting a trial, getting a quote and cancelling are all journeys. A benchmark runs the same job at each company with the same customer profile, such as a new saver in the UK, and lines up what each one got.',
    },
    {
      kind: 'list',
      items: [
        '**Steps and time:** how many screens and fields, and how long from the first click to the first email.',
        '**The offer:** the rate or price offered once signed in, beside the public one.',
        '**What follows:** every email and text in the days after, and any that never came.',
        '**Where it stops:** a step that asks for a document, a call or a branch visit.',
      ],
    },
    { kind: 'h2', id: 'who-benchmarks', text: 'Who benchmarks customer journeys' },
    {
      kind: 'p',
      text: 'Journey and CX teams at banks, card issuers, insurers and telecoms, where a slower application can lose the customer to the next provider. Product and UX teams at software companies benchmark sign-up, onboarding and the [cancel flow](/glossary/cancel-flow) against the best in their market. Pricing teams use the same runs to see the rate a new customer is offered, which can differ from the advertised one.',
    },
    { kind: 'h2', id: 'how-journeys-are-benchmarked', text: 'How customer journeys are benchmarked' },
    {
      kind: 'p',
      text: 'Research firms run journeys by hand with trained [mystery shoppers](/glossary/mystery-shopping) and report on each round of fieldwork. Panels such as [Competiscan](/alternatives/competiscan) sell a fixed list of companies behind a client login. A study run by hand is a snapshot, so a competitor that changes its application the week after the fieldwork waits for the next round.',
    },
    {
      kind: 'p',
      text: `${ENTITY} A journey benchmark then becomes a standing comparison, with every step up to an identity check kept with its screenshot and every email after it dated as it lands.`,
    },
    {
      kind: 'p',
      text: '[Journey checks for banks and fintechs](/use-cases/journey-checks-for-banks-and-fintechs) shows it for a savings bank and 3 competitors, with new and existing customer rates side by side.',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'How is journey benchmarking different from customer journey mapping?',
          a: 'Mapping draws your own customer’s path, usually from research and analytics. Benchmarking runs the path at your company and at competitors, and compares what each customer actually got.',
        },
        {
          q: 'How often should journeys be benchmarked?',
          a: 'Whenever a competitor is likely to change something: a new rate, a redesigned app or a price rise. A benchmark that keeps running catches each change on the day it lands.',
        },
        {
          q: 'Can an automated agent run a bank’s account opening?',
          a: 'Up to the identity check. An Obsession agent never goes past one. The record of the run names the step it stopped at, and every screen and email before it is kept.',
          link: { label: 'What every Obsession agent keeps to', to: '/agents' },
        },
      ],
    },
  ],
  sources: [],
  related: [
    '/glossary/mystery-shopping',
    '/glossary/competitive-intelligence',
    '/glossary/cancel-flow',
    '/glossary/save-offer',
    '/use-cases/journey-checks-for-banks-and-fintechs',
    '/alternatives/competiscan',
    'bank-competitor-analysis',
    'consumer-duty-fair-value-assessment',
    'ai-customers-find-revenue-leaks',
    'recipe:trial-teardown',
  ],
}
