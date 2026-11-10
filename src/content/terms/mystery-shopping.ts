import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/mystery-shopping: for a CX or research lead who wants the practice defined fairly. "mystery shopping
   software", "AI mystery shopping" and "AI mystery shopper" stay with their pages, and "is mystery shopping legal" with
   the legality post (docs/SEARCH.md §2); this page owns the definition and links them. Obsession is never a mystery
   shopping firm here. The definition and the competitor guidance are the MRS guideline's (March 2020), read 11 Nov
   2026. */
const DEFINITION =
  'Mystery shopping is the practice of paying people to act as customers of a business and report in detail what they experienced, without staff knowing the visit is a test.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Mystery shopping',
  line: 'Paying people to act as customers of a business and report in detail what they experienced.',
  meta: {
    path: '/glossary/mystery-shopping',
    title: 'What is mystery shopping? How businesses test as a customer',
    description:
      'Mystery shopping pays people to act as customers and report what they experienced. How it works, the rules for shopping competitors, and online journeys.',
    answer: `${DEFINITION} Companies use it to check their own service, and research firms also use it to see how competitors treat a customer, within professional guidelines.`,
    ogImage: '/og/glossary-mystery-shopping.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Mystery shopping', path: '/glossary/mystery-shopping' },
    ],
  },
  title: 'Mystery shopping: paying people to be customers and report what happened',
  dek: 'A trained shopper visits a branch, calls a helpline or buys online, follows a brief and fills in a report. The business learns what its customers actually get.',
  primaryKeyword: 'mystery shopping',
  keywords: ['what is mystery shopping', 'mystery shopping meaning', 'mystery shopping definition', 'mystery shopper meaning', 'mystery customer research'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'founders',
  term: {
    name: 'mystery shopping',
    alternateName: ['mystery shopper', 'mystery customer research', 'secret shopping'],
    definition: DEFINITION,
  },
  blocks: [
    { kind: 'h2', id: 'how-it-works', text: 'How mystery shopping works' },
    {
      kind: 'p',
      text: 'The UK’s Market Research Society defines it in its [guideline on mystery shopping](https://www.mrs.org.uk/pdf/MRS-Guideline-Conducting-Mystery-Shopping.pdf) of March 2020. Trained people act as potential customers and report back in detail on what happened. What sets it apart from other research is that the shopper doesn’t declare themselves, so staff treat the visit as a normal customer contact.',
    },
    {
      kind: 'p',
      text: 'In a typical brief for a bank, shoppers visit 40 branches over a month and ask about a personal loan. They time the wait, note whether the adviser mentioned fees and record any email that follows. Each shopper fills in a scored form, and the agency reports by branch and region. The guideline says results are best used for training and rewards. It also says staff can be told in advance, in their contracts or handbooks, that mystery shopping is used.',
    },
    { kind: 'h2', id: 'shopping-competitors', text: 'Mystery shopping competitors' },
    {
      kind: 'p',
      text: 'The same guideline covers shopping competitors. Time with a competitor’s staff should be as short as possible, so it doesn’t waste the competitor’s resources, and results are reported in aggregate, never contact by contact. Whether a given study is lawful depends on where and how it is run; [is it legal to mystery shop competitors](/blog/is-it-legal-to-mystery-shop-competitors) covers the common cases.',
    },
    { kind: 'h2', id: 'online-journeys', text: 'How mystery shopping works online' },
    {
      kind: 'p',
      text: 'Online, much of what a customer gets arrives after the visit: the welcome email, the reminder 2 days later, the price change a month on. A shopper can fill in a sign-up form, but watching an inbox for 30 days at 50 companies is a different job. Software now runs part of the online work, and the options are compared in [the best AI mystery shopping tools](/blog/best-ai-mystery-shopping-tools).',
    },
    { kind: 'h2', id: 'collected-as-data', text: 'What companies show customers, collected as data' },
    {
      kind: 'p',
      text: `${ENTITY} Where a mystery shopper keeps the test hidden, every Obsession agent says it’s an AI when it talks to a person.`,
    },
    {
      kind: 'p',
      text: 'Each account stays open for as long as you follow the company. For a bank, that means a competitor’s account opening up to the identity check, its signed-in rates and every email after, as [journey checks for banks and fintechs](/use-cases/journey-checks-for-banks-and-fintechs) shows. Panels such as Competiscan, and the options beside them, are compared in [Competiscan alternatives](/alternatives/competiscan).',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the difference between mystery shopping and a customer survey?',
          a: 'A survey asks real customers what they remember. Mystery shopping sends a trained person through the same steps on purpose, with a checklist, so each visit is measured the same way.',
        },
        {
          q: 'Do staff know they are being mystery shopped?',
          a: 'Not at the moment of the visit. The Market Research Society’s guideline says a company’s own staff can be told in advance, in contracts, handbooks or newsletters. They needn’t be told when it will happen.',
        },
        {
          q: 'Can mystery shopping be done online?',
          a: 'Yes. Shoppers sign up, buy, call or chat online the same way, and software now runs some online journeys. What an online journey adds is time, because emails and texts arrive days after the visit.',
          link: { label: 'The best AI mystery shopping tools', to: '/blog/best-ai-mystery-shopping-tools' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'MRS Guideline: Conducting Mystery Shopping',
      publisher: 'Market Research Society',
      url: 'https://www.mrs.org.uk/pdf/MRS-Guideline-Conducting-Mystery-Shopping.pdf',
      date: '2020-03',
    },
  ],
  related: [
    '/glossary/customer-journey-benchmarking',
    '/glossary/competitive-intelligence',
    '/glossary/declared-agent',
    '/glossary/login-wall',
    '/alternatives/competiscan',
    '/use-cases/journey-checks-for-banks-and-fintechs',
    'best-ai-mystery-shopping-tools',
    'is-it-legal-to-mystery-shop-competitors',
    'b2b-mystery-shopping',
    'recipe:mystery-shopper',
  ],
}
