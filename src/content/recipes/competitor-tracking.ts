import type { Recipe } from '../types'

/* Competitor tracking (/recipes/competitor-tracking). A ready-made collection (9 Nov): an account open at each
   competitor the reader names, as the customer profile they pick, and everything it is sent, every email, text, offer,
   signed-in price and public ad, on 1 dated timeline, by API, MCP, a table or Slack. Kept from James's page: the
   headline, the record dated from a known sign-up, the welcome series mapped, the week 1 timeline. The run is an
   example on an invented skincare store and says so. */

export const recipe: Recipe = {
  id: 'competitor',
  slug: 'competitor-tracking',
  name: 'Competitor tracking',
  group: 'Watch other companies',
  line: 'Everything a competitor sends a signed-up customer: emails, texts, offers and prices, on 1 timeline.',
  gets: 'A dated timeline per competitor: every email, text, offer and price, each with its receipt.',
  kit: [
    'An account at each competitor, in your country',
    'An inbox and phone number for each',
    'Every email kept with its arrival time',
    'Signed-in prices and pages, checked daily',
    'The ads they run in public, followed to each page',
    'A screenshot of every step',
  ],

  meta: {
    path: '/recipes/competitor-tracking',
    title: 'Competitor tracking: see competitors as their customers do',
    description:
      'Every email, text, offer and price your competitors show signed-up customers, on 1 dated timeline with screenshots. By API, MCP, Clay or Slack.',
    answer:
      'Competitor tracking keeps an account open at each competitor you name and records what it sends signed-up customers: every email, text, offer and price, on 1 dated timeline.',
    ogImage: '/og/competitor-tracking.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Competitor tracking', path: '/recipes/competitor-tracking' },
    ],
  },

  hero: {
    headline: 'Every email, text, ad and offer your competitors send, on 1 timeline.',
    sub: 'Competitor tracking keeps an account open at each competitor you name and records what it sends signed-up customers: every email, text, offer and price, on 1 dated timeline.',
    screen: 'rivals',
    capture: {
      kind: 'waitlist',
      source: 'recipe-competitor-hero',
      button: 'Request early access',
      interest: 'competitor',
    },
  },

  run: {
    tab: 'Example: a skincare competitor, week 1',
    recipe: 'competitor',
    task: 'Sign up to this competitor’s emails and texts as a UK customer. Log every offer, price and public ad, and post what changed each Monday.',
    targets: 'skincare-competitor.example, a skincare store',
    journey: ['Sign up from the pop up', 'Opt in to texts', 'Ask the site’s chat bot', 'Check pages, prices and ads daily'],
    schedule: 'Daily checks, a summary every Monday',
    report: 'A Monday summary in Slack, every fact in your table',
    kit: ['Profile: new customer, UK', 'Own inbox', 'Own phone number', 'Browser set to the UK'],
    events: [
      { time: 'Mon 07:02', text: 'Signs up from the pop up, with its own inbox and number.' },
      { time: 'Mon 07:04', text: 'Welcome email: 15% off your first order.' },
      { time: 'Mon 07:20', text: 'Asks the site’s chat bot how long delivery takes. Answered in 6 seconds.' },
      { time: 'Tue 19:30', text: 'First text: a free gift on orders over £40.' },
      { time: 'Thu 08:15', text: 'Free delivery now starts at £35, down from £50.' },
      { time: 'Fri 11:40', text: '14 new public ads, 9 of them leading with the free gift.' },
    ],
    finding: 'The competitor is leading with a free gift over £40, by text and in 9 of its 14 new ads, and cut free delivery to £35.',
    fix: 'In your Clay table and #competitors in Slack, each fact with its screenshot.',
    ledger: 'Example run. Week 1: 5 emails, 2 texts, 1 price change, 14 new ads, each kept raw and dated.',
  },

  steps: [
    {
      title: 'Name your competitors',
      line: 'Paste their web addresses, upload a CSV, connect Clay or call the API. Any company, with no list to check first.',
    },
    {
      title: 'Pick the profile',
      line: 'A new customer in the UK, a trial user in the US. What a company shows changes with who asks.',
    },
    {
      title: 'Obsession signs up and stays',
      line: 'It joins the emails and texts as any customer can, and keeps the account open. Who asked is never shown.',
    },
    {
      title: 'Every fact lands, dated',
      line: 'Each email, text, offer and price, with its screenshot, by API, MCP, a table or Slack.',
    },
  ],

  checks: [
    {
      group: 'Inbox and phone',
      items: [
        {
          title: 'Every email',
          line: 'The time it arrived and the day since sign-up, the sender, subject, offer or code, a screenshot and the raw email.',
        },
        { title: 'The welcome series', line: 'How many steps, the gap between each, and the offer each one carries.' },
        { title: 'Texts', line: 'Every message with its sender and time, short links followed to their page, and what happens after STOP.' },
      ],
    },
    {
      group: 'Prices and offers',
      items: [
        { title: 'Signed-in prices', line: 'The price a signed-in customer sees, beside the public one.' },
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
        { title: 'Payment', line: 'Every step short of paying.' },
        { title: 'People', line: 'It says it’s an AI when it talks to a person.' },
      ],
    },
  ],

  outputs: {
    heading: 'What changed this week, with the receipt behind every line.',
    items: [
      { format: 'A timeline per competitor', line: 'Every email, text, offer and change in date order, each with its screenshot.' },
      { format: 'The welcome series, mapped', line: 'Each step, the delay before it and the offer it carries.' },
      { format: 'A weekly summary', line: 'What changed since the last one. Quiet weeks stay quiet.' },
      { format: 'Slack', line: 'A new code, a price drop or a changed welcome offer, the day it lands.' },
      { format: 'A table or webhook', line: 'Every fact as a row in Clay or Google Sheets, or as JSON at your endpoint.' },
      { format: 'API and MCP', line: 'Ask your AI agent what a competitor sent this month.' },
    ],
  },

  settings: [
    { k: 'Competitors', v: 'Any companies you name, by web address' },
    { k: 'Profile', v: 'For example: a new customer in the UK' },
    { k: 'Journeys', v: 'Email sign-up, text opt in, a free trial, a basket' },
    { k: 'How often', v: 'Daily, weekly or monthly, set for each channel' },
    { k: 'Where it lands', v: 'API, MCP, Clay, Google Sheets, Slack or a webhook' },
    { k: 'How long', v: 'As long as you need' },
  ],

  forWho: [
    { audience: 'marketing', line: 'See what competitors send before a sale, and plan your own calendar around it.' },
    { audience: 'agencies', line: 'A competitor report for every client, built on what competitors sent.' },
    { audience: 'sales', line: 'Battlecards built from what a competitor’s customers receive.' },
    { audience: 'founders', line: 'Answer every competitor move the week it lands.' },
    { audience: 'developers', line: 'Competitors’ emails and prices in your own product, through the API.' },
  ],

  table: {
    heading: 'A new customer of this competitor gets 5 emails and 2 texts in its first 7 days.',
    line: 'Example. Every message placed by the time since sign-up, so you see the sequence and its rhythm.',
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
    heading: 'Every message dated from a known sign-up. Who asked is never shown.',
    items: [
      {
        q: 'How do I track competitors without signing up to each one by hand?',
        a: 'Name them once. Obsession signs up as the customer profile you pick, keeps each account open, and logs every email, text, offer and price on 1 timeline.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. Obsession’s agents sign up the way any customer can, from the profile and country you choose, and keep each account open for months.',
      },
      {
        q: 'Can you show their past emails?',
        a: 'If the competitor is already covered, its history comes back at once. If not, Watch it, and the record starts the day Obsession signs up.',
      },
      {
        q: 'Will the competitor know who asked?',
        a: 'No. Who asked is never shown. When Obsession talks to a person, it says it’s an AI.',
      },
      {
        q: 'How is it different from a competitive intelligence tool?',
        a: 'Tools like Klue and Crayon keep what competitors publish. Competitor tracking keeps what they send signed-up customers: the emails, texts, member prices and offers.',
      },
      { q: 'How many competitors can it follow?', a: 'As many as you name. Each gets its own account, inbox and number.' },
      { q: 'What if they show a CAPTCHA?', a: 'Obsession stops, and the record says it couldn’t test that step.' },
    ],
  },

  final: {
    heading: 'See your competitors’ next offer the day it lands.',
    sub: 'Early access includes every competitor already covered, and up to 5 added for you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-competitor-final',
      button: 'Request early access',
      interest: 'competitor',
    },
  },
}
