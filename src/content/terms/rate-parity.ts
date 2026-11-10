import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/rate-parity: the definition query for rate parity and parity clauses. "rate parity testing" stays with
   its own post (docs/SEARCH.md §2); this page owns "what is rate parity". General information, never legal advice. */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'Rate parity',
  line: 'When a hotel or other supplier shows the same price for the same room or product on every channel that sells it.',
  meta: {
    path: '/glossary/rate-parity',
    title: 'What is rate parity? Same room, same price, on every channel',
    description:
      'Rate parity means the same room or product carries the same price on every channel that sells it. Parity clauses, the EU ban, and prices after login.',
    answer:
      'Rate parity is when a hotel or other travel supplier offers the same price for the same room or product on every channel that sells it, including its own website and online travel agencies. A parity check that reads only signed-out prices misses the discounts some channels show only after login.',
    ogImage: '/og/glossary-rate-parity.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Rate parity', path: '/glossary/rate-parity' },
    ],
  },
  title: 'Rate parity: the same room at the same price on every site',
  dek: 'A hotel sells the same room on its own site and through several booking sites. Rate parity asks whether the price is the same on all of them, for the same dates.',
  primaryKeyword: 'rate parity',
  keywords: ['what is rate parity', 'rate parity meaning', 'hotel rate parity', 'parity clause', 'price parity'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'marketing',
  term: {
    name: 'rate parity',
    alternateName: ['price parity', 'hotel rate parity', 'parity clause'],
    definition:
      'Rate parity is when a hotel or other travel supplier offers the same price for the same room or product on every channel that sells it, including its own website and online travel agencies.',
  },
  blocks: [
    { kind: 'h2', id: 'what-it-means', text: 'What rate parity means' },
    {
      kind: 'p',
      text: 'A hotel’s room for a Friday night might be on sale on its own website, on two online travel agencies and on a metasearch site that compares them. Rate parity holds when every one of them shows the same price for the same room, dates and conditions. A disparity is any channel that undercuts or overprices the rest.',
    },
    {
      kind: 'p',
      text: 'Parity can also be written into a contract. The European Commission published a [factsheet on the Digital Markets Act and Booking.com](https://digital-markets-act.ec.europa.eu/factsheet-how-dma-ensures-businesses-using-bookingcom-are-free-set-their-prices-and-bookingcom-2026-09-28_en) on 28 September 2026. It describes parity clauses as contractual rules that stop a business, like a hotel, offering better terms on other channels than on the platform imposing them.',
    },
    { kind: 'h2', id: 'the-rules', text: 'The EU rules on parity clauses' },
    {
      kind: 'p',
      text: 'The same factsheet says the Digital Markets Act bans parity requirements of any kind for designated platforms such as Booking.com, which has had to comply since 14 November 2024. Hotels and other businesses can set different prices on and off Booking.com, including lower prices on other travel platforms. Other countries and platforms have their own rules. This is general information, not legal advice.',
    },
    { kind: 'h2', id: 'why-it-matters', text: 'Why revenue managers track rate parity' },
    {
      kind: 'p',
      text: 'A guest who finds the room cheaper on a booking site than on the hotel’s own website books there, and the hotel pays that site’s commission. Revenue and distribution managers check parity to see which channel is undercutting them and to push direct bookings. Pricing teams outside travel run the same check on any product sold through several retailers.',
    },
    {
      kind: 'p',
      text: 'Some disparities appear only after login. Booking.com’s [Genius page](https://www.booking.com/genius.html) says Genius discounts start at 10% off stays for anyone with a free account and asks visitors to sign in before searching to see all their discounts. A parity check that reads only the signed-out page misses that [signed-in price](/glossary/signed-in-price), and the [member price](/glossary/member-price) on the hotel’s own site too.',
    },
    { kind: 'h2', id: 'how-its-checked', text: 'How rate parity is checked' },
    {
      kind: 'p',
      text: 'Rate shopping tools read the public price on each channel. By hand, a revenue manager signs in to each channel and compares the signed-in price with the public one for the same room and dates.',
    },
    {
      kind: 'p',
      text: `${ENTITY} For rate parity, that means the public price and the signed-in or member price for the same room and dates on each channel, side by side. Each is dated with its screenshot, so a disparity shows the day it starts.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the difference between rate parity and a parity clause?',
          a: 'Rate parity is the same price on every channel. A parity clause is a contract term that requires it, and in the EU the Digital Markets Act bans them for designated platforms such as Booking.com.',
        },
        {
          q: 'Is rate parity illegal?',
          a: 'A hotel choosing the same price everywhere is its own decision. What regulators have acted on is platforms requiring it by contract, as the EU did under the Digital Markets Act. This is general information, not legal advice.',
          link: { label: 'Member prices for price intelligence', to: '/use-cases/member-prices-for-price-intelligence' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Factsheet: how the DMA ensures businesses using Booking.com are free to set their prices',
      publisher: 'European Commission, Digital Markets Act',
      url: 'https://digital-markets-act.ec.europa.eu/factsheet-how-dma-ensures-businesses-using-bookingcom-are-free-set-their-prices-and-bookingcom-2026-09-28_en',
      date: '2026-09-28',
    },
    {
      title: 'Genius loyalty programme',
      publisher: 'Booking.com',
      url: 'https://www.booking.com/genius.html',
    },
  ],
  related: [
    '/glossary/signed-in-price',
    '/glossary/member-price',
    '/glossary/login-wall',
    '/use-cases/member-prices-for-price-intelligence',
    'recipe:price-watch',
    'rate-parity-testing',
    'member-only-pricing',
  ],
}
