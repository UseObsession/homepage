import type { Recipe } from '../types'

/* Competitor tracking (/recipes/competitor-tracking). Watch other companies. Screen: rivals.
   The persona version (20 Nov 2026): a persona the reader defines signs up at each competitor they name and keeps the
   account open for as long as they hold it. Everything it is sent, every email, text, offer, member price and public
   ad, comes back on 1 dated timeline with screenshots, by API, MCP, a table or Slack. Kept from James's page: the
   headline, the event log dated from a known sign up, the welcome series mapped, the week 1 timeline. Sold as designed:
   no index, no "already covered", no caps. The run is an example on an invented skincare store and says so. */

export const recipe: Recipe = {
  id: 'competitor',
  slug: 'competitor-tracking',
  name: 'Competitor tracking',
  group: 'Watch other companies',
  line: 'A persona signs up at each competitor and keeps every email, text, offer and price it’s sent, on 1 timeline.',
  gets: 'A dated timeline per competitor: every email, text, offer and price, each with its screenshot.',
  kit: [
    'A persona at each competitor, in your country',
    'Its own inbox and phone number',
    'Every email kept with its arrival time',
    'Member prices and pages, checked daily',
    'The ads they run in public, followed to each page',
    'A screenshot of every step',
  ],

  meta: {
    path: '/recipes/competitor-tracking',
    title: 'Competitor tracking: a persona on every competitor’s list',
    description:
      'A persona you define signs up at each competitor and keeps every email, text, offer and price it’s sent, on 1 dated timeline. By API, MCP, Clay or Slack.',
    answer:
      'Competitor tracking signs up at each competitor you name as a persona you define, and keeps the account open. Every email, text, offer and price it’s sent comes back on 1 dated timeline, with screenshots.',
    ogImage: '/og/competitor-tracking.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Competitor tracking', path: '/recipes/competitor-tracking' },
    ],
  },

  hero: {
    headline: 'Every email, text, ad and offer your competitors send, on 1 timeline.',
    sub: 'Competitor tracking signs up at each competitor you name as a persona you define, and keeps the account open. Every email, text, offer and price it’s sent comes back on 1 dated timeline, with screenshots.',
    screen: 'rivals',
    capture: {
      kind: 'waitlist',
      source: 'recipe-competitor-hero',
      button: 'Request early access',
      interest: 'competitor',
    },
  },

  run: {
    tab: 'A skincare competitor, week 1',
    recipe: 'competitor',
    task: 'Sign up to this competitor’s emails and texts as a new subscriber in the UK. Log every offer, price and public ad, and post what changed each Monday.',
    targets: 'skincare-competitor.example, a skincare store',
    journey: ['Sign up from the pop up', 'Opt in to texts', 'Ask the site’s chat bot', 'Check pages, prices and ads daily'],
    schedule: 'Daily checks, a summary every Monday',
    report: 'A Monday summary in Slack, every change in your table',
    kit: ['Persona: new subscriber, UK', 'Own inbox', 'Own phone number', 'Home connection, UK'],
    events: [
      { time: 'Mon 07:02', text: 'Signs up from the pop up, with its own inbox and number.' },
      { time: 'Mon 07:04', text: 'Welcome email: 15% off your first order.' },
      { time: 'Mon 07:20', text: 'Asks the site’s chat bot how long delivery takes. Answered in 6 seconds.' },
      { time: 'Tue 19:30', text: 'First text: a free gift on orders over £40.' },
      { time: 'Thu 08:15', text: 'Free delivery now starts at £35, down from £50.' },
      { time: 'Fri 11:40', text: '14 new public ads, 9 of them leading with the free gift.' },
    ],
    finding: 'The competitor is leading with a free gift over £40, by text and in 9 of its 14 new ads, and cut free delivery to £35.',
    fix: 'In your Clay table and #competitors in Slack, each with its screenshot.',
    ledger: 'Week 1: 5 emails, 2 texts, 1 price change, 14 new ads, each kept as it arrived and dated.',
  },

  steps: [
    {
      title: 'Name your competitors',
      line: 'Paste their web addresses, upload a CSV, connect Clay or call the API. Any company, with no list to check first.',
    },
    {
      title: 'Define the persona',
      line: 'A new subscriber in the UK, a trial user in the US. What a company shows changes with who signs up.',
    },
    {
      title: 'The persona signs up and stays',
      line: 'It joins the emails and texts the way anyone can, and keeps the account open for as long as you hold it. Who asked is never shown.',
    },
    {
      title: 'Everything comes back, dated',
      line: 'Each email, text, offer and price, with its screenshot, by API, MCP, a table or Slack.',
    },
  ],

  checks: [
    {
      group: 'Inbox and phone',
      items: [
        {
          title: 'Every email',
          line: 'The time it arrived and the day since sign up, the sender, subject, offer or code, a screenshot and the original email.',
        },
        { title: 'The welcome series', line: 'How many steps, the gap between each, and the offer each one carries.' },
        { title: 'Texts', line: 'Every message with its sender and time, short links followed to their page, and what happens after STOP.' },
      ],
    },
    {
      group: 'Prices and offers',
      items: [
        { title: 'Member prices', line: 'The price a signed in member sees, beside the public one.' },
        { title: 'Offers and codes', line: 'Sitewide banners, delivery thresholds, pop up offers and checkout codes.' },
        { title: 'Trial offers', line: 'On software competitors, every email in the trial and the offer at its end.' },
      ],
    },
    {
      group: 'Ads and pages',
      items: [
        { title: 'The ads they run in public', line: 'The creative, the day it started and the page it lands on.' },
        { title: 'Pages', line: 'Screenshots of the pages you name, with what changed between them.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Payment', line: 'Every step short of paying, unless you give it your own payment card.' },
        { title: 'People', line: 'The persona says it’s an AI when it talks to a person.' },
      ],
    },
  ],

  outputs: {
    heading: 'What changed this week, with the event log behind every line.',
    items: [
      { format: 'A timeline per competitor', line: 'Every email, text, offer and change in date order, each with its screenshot.' },
      { format: 'The welcome series, mapped', line: 'Each step, the delay before it and the offer it carries.' },
      { format: 'A weekly summary', line: 'What changed since the last one. Quiet weeks stay quiet.' },
      { format: 'Slack', line: 'A new code, a price drop or a changed welcome offer, the day it lands.' },
      { format: 'A table or webhook', line: 'Every email, text and price as a row in Clay or Google Sheets, or as JSON at your endpoint.' },
      { format: 'API and MCP', line: 'Ask your AI agent what a competitor sent this month.' },
    ],
  },

  settings: [
    { k: 'Competitors', v: 'Any companies you name, by web address' },
    { k: 'Persona', v: 'For example: a new subscriber in the UK' },
    { k: 'Journeys', v: 'Email sign up, text opt in, a free trial, a basket' },
    { k: 'How often', v: 'Daily, weekly or monthly, set for each channel' },
    { k: 'Where it lands', v: 'API, MCP, Clay, Google Sheets, Slack or a webhook' },
    { k: 'How long', v: 'As long as you hold the persona' },
  ],

  forWho: [
    { audience: 'marketing', line: 'See what competitors send before a sale, and plan your own calendar around it.' },
    { audience: 'agencies', line: 'A competitor report for every client, built on what competitors sent.' },
    { audience: 'sales', line: 'Battlecards built from what a competitor sends a new subscriber.' },
    { audience: 'founders', line: 'Answer every competitor move the week it lands.' },
    { audience: 'developers', line: 'Competitors’ emails and prices in your own product, through the API.' },
  ],

  table: {
    heading: 'A new subscriber to this competitor gets 5 emails and 2 texts in its first 7 days.',
    line: 'Every message placed by the time since sign up, so you see the sequence and its rhythm.',
    cols: ['Channel', 'What arrived'],
    rows: [
      { label: '0 min', values: ['Pop up', 'Signed up'] },
      { label: '+2 min', values: ['Email', 'Welcome, 15% off'] },
      { label: '+1 day', values: ['Text', 'A free gift over £40'] },
      { label: '+2 days', values: ['Email', 'Bestsellers, no code'] },
      { label: '+3 days', values: ['Email', 'Free delivery now from £35'] },
      { label: '+4 days', values: ['Email', 'Reminder: the code ends tonight'] },
      { label: '+5 days', values: ['Text', 'The free gift, last day'] },
      { label: '+7 days', values: ['Email', 'Founder story, no offer'] },
    ],
  },

  faq: {
    heading: 'Every message dated from a known sign up. Who asked is never shown.',
    items: [
      {
        q: 'How do I track competitors without signing up to each one by hand?',
        a: 'Name them once. Competitor tracking signs up at each one as a persona you define, keeps the account open, and logs every email, text, offer and price on 1 timeline.',
      },
      {
        q: 'Where do the emails and prices come from?',
        a: 'From a real account at each competitor. The persona signs up the way anyone can, from the country you choose, and keeps the account open for months as the same person.',
      },
      {
        q: 'When does the event log start?',
        a: 'The day the persona signs up. From then on every message is dated from that sign up, so you see the sequence in order for as long as you hold it.',
      },
      {
        q: 'Will the competitor know who asked?',
        a: 'No. The persona has its own name, inbox and number, and who asked is never shown. When it talks to a person, it says it’s an AI.',
      },
      {
        q: 'How is it different from a competitive intelligence tool?',
        a: 'Tools like Klue and Crayon keep what competitors publish. Competitor tracking keeps what they send the people who sign up: the emails, texts, member prices and offers.',
      },
      {
        q: 'How many competitors can it follow?',
        a: 'As many as you name, each with its own persona, inbox and number. Run one, or a fleet of thousands.',
      },
      { q: 'What if a competitor asks for ID?', a: 'The persona hands that step to a person, then carries on.' },
    ],
  },

  final: {
    heading: 'See your competitors’ next offer the day it lands.',
    sub: 'Tell us which competitors to watch. We’ll set up the first personas with you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-competitor-final',
      button: 'Request early access',
      interest: 'competitor',
    },
  },
}
