import { consoleHeading } from '../console'
import { compare } from '../shared5'
import type { Page } from '../types'

/* /compare (9 Nov rewrite): the comparison Home's "Where else can I get it?" links to. Every other source stops at the
   login; Obsession is the web behind it, at any company you name, by API, MCP or a table, with receipts. Then the table
   (shared5) and each tool on its own line: what it keeps and when to pick it instead, or beside. Every tool fact is from
   the tool's own pages (research/competitors.md, October 2026; the panels from _research intel-teams, November 2026).
   Where a tool's page says nothing, nothing is claimed, and no prices where none are shown. Early access, never a waitlist. */

const access = {
  kind: 'waitlist',
  button: 'Request early access',
  interest: 'competitor',
} as const

export const page: Page = {
  meta: {
    path: '/compare',
    title: 'Obsession vs Foreplay, Panoramata, MailCharts and Visualping',
    description:
      'How Obsession compares with search engines, email archives, panels, ad libraries and competitive intelligence tools, by how far past the login each sees.',
    answer:
      'Other tools stop at the login. Search engines index the pages anyone can open, and email archives and panels keep what their own list of brands sends. Obsession covers what comes after it, at any company you name, every step short of paying, by API, MCP or a table.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
    ],
  },

  hero: {
    pill: '',
    headline: 'Obsession compared with search engines, email archives and panels',
    sub: 'Other tools stop at the login. Obsession covers what comes after it, at any company you name, every step short of paying. Each fact is dated with its receipt, and you look it up by API, MCP or a table.',
    capture: { ...access, source: 'compare-hero' },
    proof: [],
    consoleHeading,
  },

  compare: {
    ...compare,
    heading: 'What each source can see',
    line: 'From each tool’s own pages, October and November 2026. Partly means some of it, as the note under the table says.',
    more: undefined,
  },

  parity: {
    heading: 'When you might want something else',
    line: 'Each of these is good at its own job. Here is what each keeps, and when to pick it instead of Obsession, or beside it.',
    items: [
      {
        tool: 'Panoramata',
        job: 'Pick it for one place to follow a set list of competitors across channels.',
        data: 'Newsletters, flows, ads, landing pages, SMS and socials for the competitors on your plan: 20 on Startup, from $99 a month, with 6 months of history.',
      },
      {
        tool: 'MailCharts',
        job: 'Pick it to plan email and SMS campaigns from a hand picked index of ecommerce brands.',
        data: 'Signs up to and triggers the journeys of its own index of more than 2,500 hand picked brands, and sorts them. Now part of Validity; pricing on request.',
      },
      {
        tool: 'Milled',
        job: 'Pick it to search years of ecommerce newsletters.',
        data: 'A search engine of more than 52 million emails from about 103,000 brands, going back to 2012.',
      },
      {
        tool: 'Competiscan and Comperemedia',
        job: 'Pick them for the mail, email and offers banks, card issuers and insurers send.',
        data: 'Built from consumer panels. Competiscan lists direct mail, email, display, social and print across banking, cards, insurance, telecom, energy, retail and travel. Comperemedia covers 5 channels in the US and Canada.',
      },
      {
        tool: 'Klue and Crayon',
        job: 'Pick them when a sales team needs battlecards kept in one place.',
        data: 'Collect news, site changes, reviews and what your reps hear, and turn it into battlecards.',
      },
      {
        tool: 'Foreplay',
        job: 'Pick it for a searchable library of winning ads, and reports on your own creative.',
        data: 'Saves ads from Meta, TikTok and other ad libraries for good, with a picture of the landing page behind each. API and MCP. From $59 a month.',
      },
      {
        tool: 'Visualping',
        job: 'Pick it when you only need to know that a page changed.',
        data: 'Watches the pages you choose and sends an alert when they change.',
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
        a: 'They keep what a company sends to its list, for the brands on their index or your plan. Obsession covers any company you name. It signs up, starts the trial or leaves the basket as the customer profile you pick, and keeps every email with its sender checked and the time it arrived.',
      },
      {
        q: 'How is it different from Competiscan or Comperemedia?',
        a: 'Their panels collect what members of the public are sent, for the sectors they cover, behind a client login. Obsession signs up to any company you name, as the customer profile and country you pick, and you look it up by API, MCP or a table.',
      },
      {
        q: 'How is it different from Foreplay?',
        a: 'Foreplay saves and searches ads, with a picture of the page behind each one. Obsession starts where that page ends: the sign-up, the emails, the offer at checkout.',
      },
      {
        q: 'Does Obsession replace Exa or Browserbase?',
        a: 'No, it sits beside them. Exa searches the web and Browserbase drives a browser. Obsession keeps accounts open for months and answers with what each company sent them, dated. Your agent can call all 3.',
      },
      {
        q: 'Is this comparison fair?',
        a: 'We read each tool’s own pages in October and November 2026 and mark only what they show. If something here is wrong or out of date, tell us and we’ll fix it.',
      },
    ],
  },

  final: {
    heading: 'Which competitor should we look up first?',
    capture: { ...access, source: 'compare-final' },
  },
}
