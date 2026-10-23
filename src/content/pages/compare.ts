import { consoleHeading } from '../console'
import { compare } from '../shared5'
import type { Page } from '../types'

/* /compare (COPY.md, "Copy deck > Compare"): the comparison Home links to, in full. The same table as Home (shared5),
   then each tool on its own line: what it keeps and when to pick it instead of Obsession, or beside it (Archil's
   comparison page opens with "When you might want something else"; this page does the same). Every fact is from the
   tool's own pages in October 2026 (research/competitors.md); where a tool's page says nothing, nothing is claimed.
   No prices for tools whose pages show none. */

const waitlist = {
  kind: 'waitlist',
  button: 'Join the waitlist',
  interest: 'competitor',
} as const

export const page: Page = {
  meta: {
    path: '/compare',
    title: 'Obsession vs Foreplay, Panoramata, MailCharts and Visualping',
    description:
      'How Obsession compares with ad libraries, email archives, page monitors and competitive intelligence tools, by what each can see, from their own pages.',
    answer:
      'Other tools read the outside of a company: its ads, its archived newsletters, its pages. Obsession signs up and stays its customer, so it sees what comes after the click, with proof.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
    ],
  },

  hero: {
    pill: '',
    headline: 'Obsession compared with ad libraries, email archives and page monitors',
    sub: 'Other tools read the outside of a company: its ads, its archived newsletters, its pages. Obsession signs up and stays its customer, so it sees what comes after the click, with proof.',
    capture: { ...waitlist, source: 'compare-hero' },
    proof: [],
    consoleHeading,
  },

  compare: {
    ...compare,
    heading: 'What each kind of tool can see',
    line: 'From each tool’s own pages, October 2026. Partly means some of it, as the note under the table says.',
    more: undefined,
  },

  parity: {
    heading: 'When you might want something else',
    line: 'Each of these is good at its own job. Here is what each keeps, and when to pick it instead of Obsession, or beside it.',
    items: [
      {
        tool: 'Foreplay',
        job: 'Pick it for a searchable library of winning ads, and reports on your own creative.',
        data: 'Saves ads from Meta, TikTok and other ad libraries for good, with a picture of the landing page behind each. API and MCP. From $59 a month.',
      },
      {
        tool: 'Panoramata',
        job: 'Pick it for one place to follow a set list of competitors across channels.',
        data: 'Newsletters, flows, ads, landing pages, SMS and socials for the competitors on your plan: 20 on Startup, from $99 a month, with 6 months of history.',
      },
      {
        tool: 'MailCharts',
        job: 'Pick it to plan email and SMS campaigns from a curated index of ecommerce brands.',
        data: 'Signs up to and triggers the journeys of its own index of more than 2,500 hand picked brands, and sorts them. Now part of Validity; pricing on request.',
      },
      {
        tool: 'Milled',
        job: 'Pick it to search years of ecommerce newsletters.',
        data: 'A search engine of more than 52 million emails from about 103,000 brands, going back to 2012.',
      },
      {
        tool: 'Visualping',
        job: 'Pick it when you only need to know that a page changed.',
        data: 'Watches the pages you choose and sends an alert when they change.',
      },
      {
        tool: 'Klue and Crayon',
        job: 'Pick them when a sales team needs battlecards kept in one place.',
        data: 'Collect news, site changes, reviews and what your reps hear, and turn it into battlecards.',
      },
      {
        tool: 'By hand',
        job: 'Pick it when you watch a few companies and someone has the time.',
        data: 'A spare inbox, screenshots and a spreadsheet. Free, until you count the hours.',
      },
    ],
  },

  faq: {
    heading: 'Questions about the comparison.',
    items: [
      {
        q: 'How is Obsession different from Panoramata or MailCharts?',
        a: 'They keep what a company sends to its list, for the brands on their index or your plan. Obsession becomes a customer of any company you name, follows the ad, the trial or the basket, and keeps every email with the Gmail tab it landed in and its signature checked.',
      },
      {
        q: 'How is it different from Foreplay?',
        a: 'Foreplay saves and searches ads, with a picture of the page behind each one. Obsession follows the ad’s link as a customer and keeps going: the sign up, the emails, the offer at checkout.',
      },
      {
        q: 'Does Obsession replace Exa or Browserbase?',
        a: 'No, it sits beside them. Exa searches the web and Browserbase drives a browser; Obsession is a customer that stays for months, with its own inbox, phone number and record. Your agent can call all 3.',
      },
      {
        q: 'Is this comparison fair?',
        a: 'We read each tool’s own pages in October 2026 and mark only what they show. If something here is wrong or out of date, tell us and we will fix it.',
      },
    ],
  },

  final: {
    heading: 'Name a rival. See what its customers get.',
    capture: { ...waitlist, source: 'compare-final' },
  },
}
