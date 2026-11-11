import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/point-in-time-data: for a fund analyst testing a signal on consumer companies. The one outside fact (what
   ALFRED keeps) is from the St. Louis Fed's own page, read 11 Nov 2026. The picture is a signed-in price recorded day
   by day at an invented company, to show why a history started later can't see what came before. */
const DEFINITION =
  'Point-in-time data is data stored as it was known on each date, so a backtest or study sees only what an analyst could have seen that day.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Point-in-time data',
  line: 'Data kept as it was known on each date, so a backtest sees only what an analyst could have seen that day.',
  meta: {
    path: '/glossary/point-in-time-data',
    title: 'What is point-in-time data? Each fact as it was known then',
    description:
      'Point-in-time data keeps each fact as it was known on its date, with no later revisions, so backtests avoid look-ahead bias. Why it can’t be backfilled.',
    answer: `${DEFINITION} Later corrections and additions are kept as new versions instead of overwriting the old ones. A history of what a company showed its customers can’t be rebuilt afterwards, because nobody can see last month’s email or signed-in price today.`,
    ogImage: '/og/glossary-point-in-time-data.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Point-in-time data', path: '/glossary/point-in-time-data' },
    ],
  },
  title: 'Point-in-time data: each fact as it was known on the day',
  dek: 'A series as first published and the same series after revisions tell different stories. A fund testing a signal needs the first.',
  primaryKeyword: 'point in time data',
  keywords: ['what is point in time data', 'point-in-time data meaning', 'point-in-time database', 'look-ahead bias', 'vintage data'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'sales',
  term: {
    name: 'point-in-time data',
    alternateName: ['PIT data', 'vintage data', 'as-known data'],
    definition: DEFINITION,
  },
  art: {
    kind: 'log',
    title: 'northwind.example · price by day',
    who: 'A member account, checked daily',
    status: { tone: 'info', text: 'Example' },
    rows: [
      { time: '3 Mar', text: 'Signed-in price £24', detail: 'Public page shows £29', tone: 'info' },
      { time: '10 Mar', text: 'Email: “Members’ week, 30% off”', detail: 'Signed-in price £16.80 until 13 Mar', tone: 'ok' },
      { time: '14 Mar', text: 'Signed-in price back to £24', tone: 'info' },
      { time: '25 Mar', text: 'Email: “Our prices are changing”', detail: 'Notice of a rise from 1 Apr', tone: 'late' },
      { time: '1 Apr', text: 'Signed-in price £26', detail: 'Public page shows £31', tone: 'info' },
    ],
    foot: 'Northwind is an invented company. A history started on 1 April opens at £26 and holds nothing of March’s members’ week.',
  },
  blocks: [
    { kind: 'h2', id: 'what-point-in-time-means', text: 'What point-in-time means' },
    {
      kind: 'p',
      text: 'Most databases keep the latest value, so a revised figure overwrites the old one. A point-in-time dataset keeps every version with the date it became known. The St. Louis Fed’s [ALFRED](https://alfred.stlouisfed.org/) archive works this way for economic statistics. It lets you retrieve each release of a series, called a vintage, as it was available on a given date.',
    },
    {
      kind: 'p',
      text: 'Testing a strategy on overwritten data gives it knowledge nobody had at the time. That error is called look-ahead bias, and it makes a backtest look better than the strategy could have done in the market.',
    },
    { kind: 'h2', id: 'why-it-cant-be-backfilled', text: 'Why point-in-time history can’t be backfilled' },
    {
      kind: 'p',
      text: 'A revised statistic can often be recovered from an archive like ALFRED. What a company showed only to its customers can’t. If nobody was signed up in March, there is no copy of that month’s member price or the sale email that went out, and no later search will find one.',
    },
    {
      kind: 'p',
      text: 'For an analyst reading a consumer company, that history is the dataset. It shows how deep the company’s discounts ran each month, when its member prices rose and how often it emailed customers. It counts in a backtest only if it was recorded on the day, with the evidence that it was seen then.',
    },
    { kind: 'h2', id: 'how-its-kept', text: 'How a point-in-time record of what companies show customers is kept' },
    {
      kind: 'p',
      text: 'Each entry needs the value, the date it was seen and the evidence behind it, such as the email itself or a screenshot of the signed-in page. Kept by hand, that means one person per company signing in on a schedule and filing every email, for years.',
    },
    {
      kind: 'p',
      text: `${ENTITY} Each fact is filed with the date it arrived, so the history shows what a company showed on each day, for as long as anyone follows it. Funds use it as [alternative data for investors](/use-cases/consumer-promotions-data-for-funds), with history from the day collection starts.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is look-ahead bias?',
          a: 'Using information in a backtest that wasn’t available on the date being tested, such as a revised figure or a company added to a list later. It makes past results look better than they could have been.',
        },
        {
          q: 'Can point-in-time data be bought for past years?',
          a: 'Only if someone recorded it at the time. A vendor can sell an archive it kept, but nobody can create one afterwards for data that was never captured.',
        },
        {
          q: 'Why does the date a fact was seen matter to a fund?',
          a: 'A trading signal, such as a retailer’s discounts getting deeper, is usable only if it was knowable then. The date seen, with the evidence behind it, lets a backtest and a compliance review agree on what was known and when.',
          link: { label: 'Alternative data, defined', to: '/glossary/alternative-data' },
        },
      ],
    },
  ],
  sources: [
    { title: 'ALFRED: Archival Federal Reserve Economic Data', publisher: 'Federal Reserve Bank of St. Louis', url: 'https://alfred.stlouisfed.org/' },
  ],
  related: [
    '/glossary/alternative-data',
    '/glossary/member-price',
    '/glossary/signed-in-price',
    '/glossary/dkim',
    '/glossary/llm-grounding',
    'alternative-data-consumer-promotions',
    'recipe:price-watch',
    'recipe:email-sms-tracking',
    '/sample-output',
  ],
}
