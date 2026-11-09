import type { Recipe } from '../types'

/* Ad landing check (/recipes/ad-landing-check). A ready-made collection (9 Nov): what every live ad's landing page
   shows a customer each morning, opened straight from the ad's link on a phone and a desktop (so no click is paid
   for): whether it loads, whether the offer and price match the ad, whether the product is in stock, beside what the
   ad spends a day. It reads the ad accounts the reader connects and changes nothing; failing pages land in Slack or a
   table, the costliest first. The twin of Ad tracking (competitors' public ads). The run matches the `adcheck` screen
   (Ad 4, $410 a day, a sold out table lamp, flagged 07:04, paused by the ads lead at 07:40). Example. */

export const recipe: Recipe = {
  id: 'adcheck',
  slug: 'ad-landing-check',
  name: 'Ad landing check',
  group: 'Check your own journeys',
  line: 'What every live ad’s landing page shows a customer each morning: whether it loads, the offer, the price and the stock.',
  gets: 'Every live ad’s landing page, checked each morning, and each one that can’t sell flagged with its screenshot.',
  kit: [
    'Your ad accounts, connected by you',
    'Each landing page, opened from the ad’s link',
    'A phone and a desktop browser',
    'A check every morning at 07:00',
    'Each ad’s daily spend beside its page',
    'A screenshot of every page',
  ],

  meta: {
    path: '/recipes/ad-landing-check',
    title: 'Ad landing check: each ad’s page, every morning · Obsession',
    description:
      'Each morning, every live ad’s landing page opened from its link on phone and desktop: whether it loads, and whether the offer, price and stock match.',
    answer:
      'Ad landing check opens every live ad’s landing page each morning, straight from the ad’s link. It records whether the page loads, whether the offer and price match the ad, and whether the product is in stock.',
    ogImage: '/og/ad-landing-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Ad landing check', path: '/recipes/ad-landing-check' },
    ],
  },

  hero: {
    headline: 'Every ad sending clicks to a page that can’t sell, found by morning.',
    sub: 'Ad landing check opens every live ad’s landing page each morning, straight from the ad’s link. It records whether the page loads, whether the offer and price match the ad, and whether the product is in stock.',
    screen: 'adcheck',
    capture: {
      kind: 'waitlist',
      source: 'recipe-adcheck-hero',
      button: 'Request early access',
      interest: 'adcheck',
    },
  },

  run: {
    tab: 'Example: 6 live ads, each morning',
    recipe: 'adcheck',
    task: 'Every morning, open the landing page of each live ad, straight from the ad’s link. Check it loads, the offer and price match the ad, and the product is in stock.',
    targets: 'A homeware store’s 6 live search and social ads, $1,069 a day between them',
    journey: ['Read every live ad', 'Open its page as a customer', 'Check offer, price and stock', 'Flag the costliest failure first'],
    schedule: 'Every morning at 07:00',
    report: 'Slack when an ad fails, a weekly summary',
    kit: ['Your ad accounts', 'Phone and desktop', 'Opens each ad’s page', 'Every morning'],
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
    ledger: 'Example run. Every check kept with its screenshot.',
  },

  steps: [
    {
      title: 'Connect your ad accounts',
      line: 'Yours, or a client’s. Obsession reads every live search and social ad: where it points, the offer and price it shows, and what it spends a day.',
    },
    {
      title: 'Each page opened as a customer',
      line: 'On a phone and a desktop, straight from the ad’s link, so no click is paid for.',
    },
    {
      title: '4 facts per page',
      line: 'Whether it loads, whether the offer and the price match the ad, and whether the product is in stock.',
    },
    {
      title: 'Failures land first',
      line: 'Each page that can’t sell, in Slack or your table, the costliest ad first, with its screenshot.',
    },
  ],

  checks: [
    {
      group: 'Every landing page',
      items: [
        { title: 'It loads', line: 'The page opens on a phone and a desktop, and how long it takes.' },
        { title: 'The offer matches', line: 'Free delivery, a gift or 20% off: what the ad promises is on the page.' },
        { title: 'The price matches', line: 'The price in the ad is the price on the page.' },
        { title: 'It’s in stock', line: 'The product in the ad can still be bought, in the size or colour the ad shows.' },
      ],
    },
    {
      group: 'Every ad',
      items: [
        { title: 'Where it points', line: 'The link the ad sends people to, followed through every redirect.' },
        { title: 'What it spends', line: 'Its daily spend from the account you connect, so the costliest failure comes first.' },
        { title: 'New ads', line: 'An ad that went live since yesterday is in the next morning’s check.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'At the page', line: 'It opens the page from the ad’s link, so no click is paid for and your numbers stay true.' },
        { title: 'Your ads', line: 'It reads your ad accounts and changes nothing.' },
        { title: 'At a block', line: 'A CAPTCHA or a bot block ends that check, and the record names the page.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every live ad checked before your day starts.',
    items: [
      { format: 'A verdict per ad', line: 'Loads, offer, price and stock, with a screenshot of what a customer sees.' },
      { format: 'The costliest first', line: 'Each failing page ranked by what its ad spends a day.' },
      { format: 'Slack or email', line: 'Only when an ad fails. Nothing when every ad passes.' },
      { format: 'A weekly summary', line: 'Ads checked, pages that failed, and how long each took to fix.' },
      { format: 'A table or webhook', line: 'Every check as a row, or as JSON at your endpoint.' },
    ],
  },

  settings: [
    { k: 'Ads', v: 'Every live search and social ad, or the campaigns you pick' },
    { k: 'Accounts', v: 'Yours, or a client’s, connected by you' },
    { k: 'How often', v: 'Every morning at 07:00, or more often in a sale' },
    { k: 'Checks', v: 'Loads, offer, price and stock, plus any of your own' },
    { k: 'Devices', v: 'Phone and desktop' },
    { k: 'Alerts', v: 'Slack or email, only when an ad fails' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Every ad sending clicks to a broken, wrong or sold out page, the same morning.' },
    { audience: 'agencies', line: 'Every client’s live ads checked each morning, with a record of every page that failed.' },
    { audience: 'founders', line: 'Running your own ads? Know each one lands on a page that can sell.' },
    { audience: 'developers', line: 'Run it through the API after every site release, and get each failing ad by webhook.' },
  ],

  table: {
    heading: 'Every ad you pay for, every morning, not the few someone remembers.',
    line: 'By hand, 6 ads’ pages at 5 minutes each is 3.5 hours a week.',
    cols: ['By hand', 'Ad landing check'],
    rows: [
      { label: 'Which ads', values: ['The few someone opens when there’s time', 'Every live ad, every morning'] },
      { label: 'How', values: ['Clicking the ad, which can cost a click', 'Opening its page directly, so no click is paid for'] },
      { label: 'Where', values: ['A desktop at the office', 'A phone and a desktop'] },
      { label: 'A sold out page', values: ['Found when sales drop', 'Found at 07:04, with the screenshot'] },
      { label: 'The record', values: ['A message in a chat', 'Every check kept with its screenshot'] },
    ],
  },

  faq: {
    heading: 'Every page opened from its ad’s link. Nothing changed in your accounts.',
    items: [
      {
        q: 'How do I stop my ads sending clicks to a sold out page?',
        a: 'Know the morning it happens. At 07:00 Ad landing check opens every live ad’s page from its link, checks the stock, offer and price, and puts each failing page in Slack with its screenshot.',
      },
      {
        q: 'How does it open each page?',
        a: 'Straight from the ad’s link, on a phone and a desktop. No click is paid for, so your ad numbers stay true.',
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
    sub: 'Early access includes API and MCP access, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-adcheck-final',
      button: 'Request early access',
      interest: 'adcheck',
    },
  },
}
