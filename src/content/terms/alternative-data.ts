import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/alternative-data: for a fund analyst or a fund's data sourcing lead. "alternative data providers" and
   "for hedge funds" stay with their owners (docs/SEARCH.md §2); this page owns the definition. The definition, its
   examples and the diligence points are from the SEC Division of Examinations' risk alert of 26 Apr 2022 (staff views,
   no legal force, as the alert itself says), read 11 Nov 2026. General information, never legal advice. */
const DEFINITION =
  'Alternative data is information investors use beyond financial statements, company filings and press releases, such as credit card spending totals, satellite images or data from phones and apps.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Alternative data',
  line: 'Information investors use beyond company filings and press releases, from card spending to satellite images.',
  meta: {
    path: '/glossary/alternative-data',
    title: 'What is alternative data? A plain definition for analysts',
    description:
      'Alternative data is what investors read beyond filings and press releases, from card spending to satellite images. What it covers and what diligence asks.',
    answer: `${DEFINITION} Funds use it to read a company between its quarterly results. In a 2022 risk alert, the US SEC’s examination staff said advisers should check the terms under which each dataset is collected.`,
    ogImage: '/og/glossary-alternative-data.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Alternative data', path: '/glossary/alternative-data' },
    ],
  },
  title: 'Alternative data: what investors read beyond filings and results',
  dek: 'Quarterly results arrive weeks after the quarter is over. Alternative data is what analysts read in between, from footfall to what a company emails its customers.',
  primaryKeyword: 'alternative data',
  keywords: ['what is alternative data', 'alternative data meaning', 'alternative data definition', 'alternative data examples'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'sales',
  term: {
    name: 'alternative data',
    alternateName: ['alt data'],
    definition: DEFINITION,
  },
  blocks: [
    { kind: 'h2', id: 'what-counts', text: 'What counts as alternative data' },
    {
      kind: 'p',
      text: 'The US Securities and Exchange Commission’s examination staff gave a working definition in an [April 2022 risk alert](https://www.sec.gov/files/code-ethics-risk-alert.pdf). It covers many kinds of information now used in financial analysis beyond traditional financial statements, filings and press releases, with these examples:',
    },
    {
      kind: 'list',
      items: [
        'Satellite and drone images of crop fields and retailers’ car parks.',
        'Aggregated credit card transactions.',
        'Social media and internet search data.',
        'Location data from consumers’ phones.',
        'Email data from apps and tools that consumers use.',
      ],
    },
    {
      kind: 'p',
      text: 'What these share is timing. A fund sees a retailer’s footfall or a brand’s card spending this month, weeks before the company reports.',
    },
    { kind: 'h2', id: 'what-diligence-asks', text: 'What diligence on an alternative dataset asks' },
    {
      kind: 'p',
      text: 'The same alert said some advisers hadn’t assessed the terms, conditions or legal obligations attached to how a dataset was collected or provided. Some also had no way to decide when diligence should be redone after a provider changed how it collects. The alert sets out staff views with no legal force of its own, and it notes that alternative data doesn’t necessarily contain material non-public information. This is general information, not legal advice.',
    },
    {
      kind: 'p',
      text: 'In practice a fund’s compliance team asks each vendor where the data came from and on whose permission, and keeps asking as the vendor’s methods change.',
    },
    { kind: 'h2', id: 'what-companies-send-customers', text: 'Alternative data on what consumer companies offer customers' },
    {
      kind: 'p',
      text: 'One gap in most datasets is what a company shows only to its own customers. That includes how deep the discounts in its emails run and how often it sends them, its member prices beside the public ones and the offer when someone cancels. Those facts change week to week and sit behind a [login wall](/glossary/login-wall), out of reach of search engines.',
    },
    {
      kind: 'p',
      text: `${ENTITY} Every email it keeps was sent to an account its own agents opened, so each series is [point-in-time](/glossary/point-in-time-data) data from its first day.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the difference between alternative data and traditional data?',
          a: 'Traditional data is what companies and markets publish: financial statements, filings, prices and press releases. Alternative data is gathered elsewhere, from transactions, devices, the web and what companies send their customers.',
        },
        {
          q: 'Does alternative data contain inside information?',
          a: 'Not necessarily, as the SEC’s 2022 risk alert says. The alert asked advisers to have written policies for that risk and to check how each dataset was collected. This is general information, not legal advice.',
        },
        {
          q: 'Why does the date a fact was collected matter?',
          a: 'A backtest can use only what was knowable at the time. A dataset that records the date each fact was seen, with its evidence, avoids look-ahead bias.',
          link: { label: 'Point-in-time data, defined', to: '/glossary/point-in-time-data' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Risk Alert: Investment Adviser MNPI Compliance Issues',
      publisher: 'US Securities and Exchange Commission, Division of Examinations',
      url: 'https://www.sec.gov/files/code-ethics-risk-alert.pdf',
      date: '2022-04-26',
    },
  ],
  related: [
    '/glossary/point-in-time-data',
    '/glossary/member-price',
    '/glossary/save-offer',
    '/glossary/login-wall',
    'alternative-data-consumer-promotions',
    'recipe:email-sms-tracking',
    'recipe:price-watch',
    'recipe:competitor-tracking',
    '/sample-output',
  ],
}
