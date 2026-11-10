import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/signed-in-price: the definition query for a price shown only after login. "scrape data behind login"
   stays with its own post (docs/SEARCH.md §2); this page owns "what is a signed-in price". */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'Signed-in price',
  line: 'A price a website shows only after a visitor logs in, which can differ from what a signed-out visitor sees.',
  meta: {
    path: '/glossary/signed-in-price',
    title: 'What is a signed-in price? The price shown after you log in',
    description:
      'A signed-in price is a price a site shows only after login, which can differ from the signed-out one. Where it appears, and why price checks often miss it.',
    answer:
      'A signed-in price is a price a website shows only after a visitor logs in to an account, which can differ from the price a signed-out visitor sees. Price scrapers and search engines read the signed-out page, so a competitor’s discounts for account holders never reach their results.',
    ogImage: '/og/glossary-signed-in-price.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Signed-in price', path: '/glossary/signed-in-price' },
    ],
  },
  title: 'Signed-in price: what a site charges once you log in',
  dek: 'The same product on the same day can carry two prices on one website: the one anyone sees, and the one an account holder sees after logging in.',
  primaryKeyword: 'signed-in price',
  keywords: ['what is a signed-in price', 'signed in price meaning', 'logged in price', 'price after login', 'account holder price'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'marketing',
  term: {
    name: 'signed-in price',
    alternateName: ['logged-in price', 'account price'],
    definition:
      'A signed-in price is a price a website shows only after a visitor logs in to an account, which can differ from the price a signed-out visitor sees.',
  },
  blocks: [
    { kind: 'h2', id: 'what-it-means', text: 'What a signed-in price means' },
    {
      kind: 'p',
      text: 'A signed-in price depends on the account looking at the page. A visitor who is signed out sees one price, and the same visitor sees another once logged in. Booking.com shows it plainly. Its [Genius page](https://www.booking.com/genius.html) tells signed-out visitors to sign in to use their Genius discount, and to sign in before searching to see every discount available to them. Level 1 needs only a free account and gives 10% off stays, rising to 10% to 20% at Level 3.',
    },
    {
      kind: 'p',
      text: 'Other signed-in prices are quieter. A trade supplier shows prices only to business accounts. A retailer shows a [member price](/glossary/member-price) once a loyalty scheme is linked to the account.',
    },
    { kind: 'h2', id: 'why-it-matters', text: 'Why signed-in prices matter to pricing and revenue teams' },
    {
      kind: 'p',
      text: 'A competitor’s signed-in price is often the price its regular customers actually pay. A pricing analyst who benchmarks against signed-out pages compares their prices with numbers those customers rarely see. A revenue manager checking [rate parity](/glossary/rate-parity) across travel sites misses every discount that appears only after login, and an AI agent asked what a company charges quotes the signed-out price.',
    },
    { kind: 'h2', id: 'how-its-seen', text: 'How signed-in prices are collected' },
    {
      kind: 'p',
      text: 'Price scrapers and search engines read pages anyone can open, so they record the signed-out price. A [headless browser](/glossary/headless-browser) can log in when someone writes the steps and supplies an account, and it reads one page at that moment. By hand, an analyst keeps an account at each competitor and screenshots both views on the same day.',
    },
    {
      kind: 'p',
      text: `${ENTITY} For signed-in prices, that means the signed-out price and the signed-in price for the same product on the same day, side by side. Each is dated with its screenshot, and the history builds for as long as you follow the company.`,
    },
    {
      kind: 'p',
      text: 'An Obsession agent never signs in to an account that isn’t its own and never goes past an identity check, as [the page for companies an agent visits](/agents) sets out.',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Why does a website show a different price after login?',
          a: 'Usually to reward an account, with a discount for members, a loyalty level or a trade price for a business. To measure the gap, set both views of the same product side by side on the same day.',
        },
        {
          q: 'Is a signed-in price the same as a member price?',
          a: 'A member price is a signed-in price tied to a loyalty scheme or paid membership. A signed-in price can also come from a free account with no scheme at all.',
          link: { label: 'What is a member price?', to: '/glossary/member-price' },
        },
        {
          q: 'Can an AI agent look up a signed-in price?',
          a: 'Only if something signed in and kept the price. Obsession answers that lookup over its API and MCP, with the price, the date it was seen and the screenshot.',
          link: { label: 'Obsession for developers', to: '/developers' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Genius loyalty programme',
      publisher: 'Booking.com',
      url: 'https://www.booking.com/genius.html',
    },
  ],
  related: [
    '/glossary/member-price',
    '/glossary/login-wall',
    '/glossary/rate-parity',
    '/glossary/the-web-behind-the-login',
    '/use-cases/member-prices-for-price-intelligence',
    'recipe:price-watch',
    'can-ai-agents-log-in-to-websites',
    'scrape-data-behind-login',
  ],
}
