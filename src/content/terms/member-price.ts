import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/member-price: the definition query for a member price. "member only pricing" stays with its own post
   (docs/SEARCH.md §2); this page owns "what is a member price" and links the price watch recipe and use case. */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'Member price',
  line: 'A lower price a company gives only to loyalty members or account holders, shown beside the price everyone else pays.',
  meta: {
    path: '/glossary/member-price',
    title: 'What is a member price? Loyalty prices beside public ones',
    description:
      'A member price is a lower price shown only to loyalty members or account holders, beside the public one. Where it shows up, and how pricing teams track it.',
    answer:
      'A member price is a lower price a company gives only to people in its loyalty scheme or with an account, shown beside the higher price everyone else pays. A competitor’s public page shows one of the two prices, so a price check that never joins the scheme records the price members don’t pay.',
    ogImage: '/og/glossary-member-price.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Member price', path: '/glossary/member-price' },
    ],
  },
  title: 'Member price: the lower price a company gives only to its members',
  dek: 'Supermarkets, hotels and retailers often show two prices for the same product: one for anyone, and a lower one for people who joined their scheme or logged in.',
  primaryKeyword: 'member price',
  keywords: ['what is a member price', 'member price meaning', 'member pricing', 'loyalty pricing', 'dual pricing'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'marketing',
  term: {
    name: 'member price',
    alternateName: ['member pricing', 'loyalty price', 'dual pricing'],
    definition:
      'A member price is a lower price a company gives only to people in its loyalty scheme or with an account, shown beside the higher price everyone else pays.',
  },
  blocks: [
    { kind: 'h2', id: 'what-it-looks-like', text: 'What a member price looks like' },
    {
      kind: 'p',
      text: 'A member price sits beside the public price for the same product, and the gap is the reason to join. The UK’s Competition and Markets Authority (CMA) studied the practice in its [review of loyalty pricing in the groceries sector](https://www.gov.uk/government/publications/review-of-loyalty-pricing-in-the-groceries-sector/executive-summary). It describes a promotion where a retailer sells a product at two prices at once: a cheaper one for members of its loyalty scheme, and a higher one for everyone else. The CMA notes the practice is also called member pricing or dual pricing. Tesco introduced Clubcard Prices in September 2020, and the review found the same two-price promotions at Sainsbury’s, Waitrose, Morrisons, Co-op and Lidl.',
    },
    {
      kind: 'art',
      art: {
        kind: 'price',
        title: 'larder.example · olive oil, 1 litre',
        rows: [
          { label: 'Public price', value: '£8.50', note: 'What anyone sees, and what a crawler indexes' },
          { label: 'Member price', value: '£6.00', note: 'With a loyalty card linked to a signed-in account' },
        ],
        total: { label: 'Gap a public price check misses', value: '£2.50', note: '29% off for members' },
      },
      caption: 'Larder is an invented grocer. Its member price exists only for people who joined, so a check of the public page records £8.50.',
    },
    { kind: 'h2', id: 'why-pricing-teams-track-it', text: 'Why member prices matter to pricing teams' },
    {
      kind: 'p',
      text: 'If a competitor’s members pay less than its public page shows, a team benchmarking against public prices sets its own prices against a number its most loyal shoppers never pay. The gap is large. Across the 5 supermarkets it examined, the CMA found the average saving on loyalty-priced products ranged from 17% to 25%. It also found that 92% of around 50,000 products on a loyalty promotion offered a genuine saving against the usual price. For a shopper with a loyalty card, the member price is the price that counts.',
    },
    {
      kind: 'p',
      text: 'The same pattern runs beyond groceries. Hotel groups give members their own rates, and travel sites show discounts once you [sign in](/glossary/signed-in-price). Each is a price a competitor charges that a public price list leaves out.',
    },
    { kind: 'h2', id: 'how-its-tracked', text: 'How member prices are tracked' },
    {
      kind: 'p',
      text: 'A price scraper reads the public page, so it records the non-member price. By hand, an analyst joins each scheme, logs in and notes both prices, and a [competitor price comparison template](/blog/competitor-price-comparison-template) gives the member price its own column beside the public one. That works for a basket of products at a few competitors, and it stops when the list grows or promotions change every week.',
    },
    {
      kind: 'p',
      text: `${ENTITY} For member prices, that means the public price and the member price for the same product side by side. Each is dated with a screenshot of the page that showed it, for as long as you follow the competitor.`,
    },
    {
      kind: 'p',
      text: '[Price watch](/recipes/price-watch), a ready-made collection, gathers competitors’ public and member prices each morning as a customer in your country. [Member prices for price intelligence](/use-cases/member-prices-for-price-intelligence) shows the same data at work for a pricing team.',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is a member price the same as a signed-in price?',
          a: 'A member price belongs to a loyalty scheme or a paid membership. A signed-in price is any price a site shows only after login, so it covers member prices and also discounts for anyone with a free account.',
          link: { label: 'What is a signed-in price?', to: '/glossary/signed-in-price' },
        },
        {
          q: 'Are member prices always the cheapest option?',
          a: 'No. In its UK grocery review the CMA advised shoppers to keep shopping around, because some loyalty-priced products were cheaper at another supermarket. A pricing team gets the true picture only by setting the member price beside every competitor’s public and member prices.',
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Review of loyalty pricing in the groceries sector: executive summary',
      publisher: 'Competition and Markets Authority, GOV.UK',
      url: 'https://www.gov.uk/government/publications/review-of-loyalty-pricing-in-the-groceries-sector/executive-summary',
      date: '2024-11-27',
    },
  ],
  related: [
    '/glossary/signed-in-price',
    '/glossary/rate-parity',
    '/glossary/login-wall',
    '/use-cases/member-prices-for-price-intelligence',
    'recipe:price-watch',
    'member-only-pricing',
    'best-competitor-price-tracking-tools',
    'competitor-price-after-welcome-code',
    'competitor-price-comparison-template',
    'map-monitoring-software',
  ],
}
