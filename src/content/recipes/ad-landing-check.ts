import type { Recipe } from '../types'

/* Ad landing check (/recipes/ad-landing-check). Check your own journeys. The persona version (20 Nov 2026, James):
   each morning a persona you define opens every live ad's landing page as a shopper, straight from the ad's link (so no
   click is paid for), on a phone and a desktop, from a home connection in the country the ad targets, so it sees the
   price and stock a local shopper sees. It records whether the page loads, whether the offer and price match the ad and
   whether the product is in stock, beside what the ad spends a day. It reads the ad accounts the reader connects and
   changes nothing; failing pages land in Slack or a table, the costliest first. The twin of Ad tracking (competitors'
   public ads). The run matches the `adcheck` screen (Ad 4, $410 a day, a sold out table lamp, flagged 07:04, paused by
   the ads lead at 07:40). Example. */

export const recipe: Recipe = {
  id: 'adcheck',
  slug: 'ad-landing-check',
  name: 'Ad landing check',
  group: 'Check your own journeys',
  line: 'Each morning a shopper persona checks every live ad’s landing page: loads, offer, price and stock.',
  gets: 'Every landing page that can’t sell, flagged each morning with its screenshot.',
  kit: [
    'Your ad accounts, connected by you',
    'A persona in each country your ads target',
    'Each page opened from the ad’s own link',
    'A phone and a desktop browser',
    'A check every morning at 07:00',
    'Each ad’s daily spend beside its page',
  ],

  meta: {
    path: '/blueprints/ad-landing-check',
    title: 'Check every ad’s landing page loads and sells, each morning',
    description:
      'Each morning a persona opens every live ad’s landing page from its link, on phone and desktop, and checks it loads and the offer, price and stock match.',
    answer:
      'Ad landing check sends a persona to every live ad’s landing page each morning, from the ad’s target country. It checks the page loads, the offer and price match the ad, and the product is in stock.',
    ogImage: '/og/ad-landing-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Ad landing check', path: '/blueprints/ad-landing-check' },
    ],
  },

  hero: {
    headline: 'Every ad sending clicks to a page that can’t sell, found by morning.',
    sub: 'Ad landing check sends a persona to every live ad’s landing page each morning, from the ad’s target country. It checks the page loads, the offer and price match the ad, and the product is in stock.',
    screen: 'adcheck',
    capture: {
      kind: 'waitlist',
      source: 'recipe-adcheck-hero',
      button: 'Request early access',
      interest: 'adcheck',
    },
  },

  unit: 'landing page check',
  per: 'site',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['Each page opened from its ad’s link, on phone and desktop', 'Loads, offer, price and stock checked against the ad', 'A screenshot of every page that can’t sell'] },
    { name: 'Weekly', includes: ['Opened from the country each ad targets', 'The costliest failure first, by the ad’s daily spend', 'Slack or email only when an ad fails'] },
    { name: 'Daily', includes: ['Yesterday’s new ads in the next morning’s check', 'A weekly summary of what failed and how long each fix took'] },
    { name: 'Scale', includes: ['Your own checks beside the 4 standard ones', 'A report you can share'] },
  ],

  run: {
    tab: '6 live ads, each morning',
    recipe: 'adcheck',
    task: 'Every morning, open the landing page of each live ad, straight from the ad’s link, as a shopper in the ad’s country. Check it loads, the offer and price match the ad, and the product is in stock.',
    targets: 'A homeware store’s 6 live search and social ads, $1,069 a day between them',
    journey: ['Read every live ad', 'Open its page as a shopper', 'Check offer, price and stock', 'Flag the costliest failure first'],
    schedule: 'Every morning at 07:00',
    report: 'Slack when an ad fails, a weekly summary',
    kit: ['Your ad accounts', 'A persona per country', 'Phone and desktop', 'Every morning'],
    events: [
      { time: 'Mon 07:00', text: '6 live ads read from your ad accounts: 3 search and 3 social, $1,069 a day between them.' },
      {
        time: 'Mon 07:04',
        text: 'Ad 4, a social ad at $410 a day, sends clicks to /table-lamp. The page loads and the price matches, but the lamp is sold out.',
      },
      { time: 'Mon 07:05', text: 'Posted to #ads in Slack, with the screenshot and the ad’s daily spend.' },
      {
        time: 'Mon 07:06',
        text: 'The other 5 pages pass all 4 checks. Each loads in 1.2 seconds or less, and the offer, price and stock match the ad.',
      },
      { time: 'Mon 07:40', text: 'Your ads lead pauses Ad 4, 36 minutes after it was flagged.' },
      { time: 'Tue 07:00', text: '5 live ads pass. The lamp is still sold out.' },
    ],
    finding: 'Ad 4 spends $410 a day sending clicks to a table lamp that’s sold out.',
    fix: 'Ad 4 paused by your ads lead at 07:40. The morning the lamp is back in stock, it’s in Slack.',
    ledger: 'Every check kept with its screenshot.',
  },

  steps: [
    {
      title: 'Connect your ad accounts',
      line: 'Every live search and social ad is read for its link, offer, price and daily spend.',
    },
    {
      title: 'A persona opens each page',
      line: 'On phone and desktop, from the country the ad targets, straight from the ad’s link.',
    },
    {
      title: '4 checks per page',
      line: 'It loads, the offer and price match the ad, and the product is in stock.',
    },
    {
      title: 'Failures land first',
      line: 'Each page that can’t sell, costliest ad first, in Slack or your table.',
    },
  ],

  checks: [
    {
      group: 'Every landing page',
      items: [
        { title: 'It loads', line: 'The page opens on a phone and a desktop, and how long it takes.' },
        { title: 'The offer matches', line: 'Free delivery, a gift or 20% off: what the ad promises is on the page.' },
        { title: 'The price matches', line: 'The price in the ad is the price a local shopper sees on the page.' },
        { title: 'It’s in stock', line: 'The product can still be bought, in the size or colour the ad shows.' },
      ],
    },
    {
      group: 'Every ad',
      items: [
        { title: 'Where it points', line: 'The link the ad sends people to, followed through every redirect.' },
        { title: 'What it spends', line: 'Its daily spend, so the costliest failure comes first.' },
        { title: 'New ads', line: 'An ad that went live since yesterday is in the next morning’s check.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'At the page', line: 'Opened from the ad’s link, so no click is paid for.' },
        { title: 'Your ads', line: 'It reads your ad accounts and changes nothing.' },
        { title: 'Before payment', line: 'To check stock it can add the item to a basket, and stops there.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every live ad checked before your day starts.',
    items: [
      { format: 'A verdict per ad', line: 'Loads, offer, price and stock, with a screenshot of what a shopper sees.' },
      { format: 'Slack or email', line: 'Only when an ad fails.' },
      { format: 'A weekly summary', line: 'Ads checked, pages that failed, and how long each took to fix.' },
      { format: 'A table or webhook', line: 'Every check as a row, or as JSON at your endpoint.' },
    ],
  },

  settings: [
    { k: 'Ads', v: 'Every live search and social ad, or the campaigns you pick' },
    { k: 'Accounts', v: 'Yours, or a client’s, connected by you' },
    { k: 'How often', v: 'Every morning at 07:00, or more often in a sale' },
    { k: 'Checks', v: 'Loads, offer, price and stock, plus any of your own' },
    { k: 'Persona', v: 'A shopper in each country your ads target, on phone and desktop' },
    { k: 'Alerts', v: 'Slack or email, only when an ad fails' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Every ad sending clicks to a broken, wrong or sold out page, the same morning.' },
    { audience: 'agencies', line: 'Every client’s live ads checked each morning, with failed pages in your event log.' },
    { audience: 'founders', line: 'Running your own ads? Know each one lands on a page that can sell.' },
    { audience: 'developers', line: 'Run it from the API after every site release, with failing ads by webhook.' },
  ],

  table: {
    heading: 'Every ad you pay for, every morning, not the few someone remembers.',
    line: 'By hand, 6 ads’ pages at 5 minutes each is 3.5 hours a week.',
    cols: ['By hand', 'Ad landing check'],
    rows: [
      { label: 'Which ads', values: ['The few someone opens when there’s time', 'Every live ad, every morning'] },
      { label: 'How', values: ['Clicking the ad, which can cost a click', 'Opening its page directly, so no click is paid for'] },
      { label: 'Where', values: ['A desktop at the office', 'A phone and a desktop, in the ad’s country'] },
      { label: 'A sold out page', values: ['Found when sales drop', 'Found at 07:04, with the screenshot'] },
      { label: 'The event log', values: ['A message in a chat', 'Every check kept with its screenshot'] },
    ],
  },

  faq: {
    heading: 'Every page opened from its ad’s link. Nothing changed in your accounts.',
    items: [
      {
        q: 'How do I stop my ads sending clicks to a sold out page?',
        a: 'Know the morning it happens. At 07:00 a persona opens every live ad’s page from its link, checks the stock, offer and price, and puts each failing page in Slack with its screenshot.',
      },
      {
        q: 'How does it open each page?',
        a: 'Straight from the ad’s link, on a phone and a desktop, from the country the ad targets. No click is paid for, so your ad numbers stay true.',
      },
      { q: 'Does it change our ads?', a: 'No. It reads your ad accounts and changes nothing. Pausing an ad stays with your team.' },
      {
        q: 'Which ads does it open?',
        a: 'Every live search and social ad in the accounts you connect, or the campaigns you pick. Yours, or a client’s with their agreement.',
      },
      {
        q: 'Can it follow a competitor’s ads?',
        a: 'That’s Ad tracking: the ads competitors run in public, followed to each page, price and code.',
      },
    ],
  },

  final: {
    heading: 'Know every ad you pay for lands on a page that can sell.',
    sub: 'Early access includes the API and MCP, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-adcheck-final',
      button: 'Request early access',
      interest: 'adcheck',
    },
  },
}
