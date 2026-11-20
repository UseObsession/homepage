import type { Recipe } from '../types'

/* Ad tracking (/recipes/ad-tracking). Watch other companies. Screen: ads.
   The persona version (20 Nov 2026): a persona in the reader's country reads the ads competitors run in public each
   morning and follows each one to the page, price and code behind it, on phone and desktop. Where an ad offers a code
   for signing up, the persona signs up and keeps what arrives. Each page is opened directly, so no click is paid for.
   No platform names. Competitors only: the reader's own ads are Ad landing check. The run and the table match the `ads`
   screen (Friday 07:06: Competitor A's 9 new ads, a gift set at £56, £2 under your £58). Example. Never £40 for a gift
   set here. Sold as designed: no index, no "already covered", no caps. */

export const recipe: Recipe = {
  id: 'ads',
  slug: 'ad-tracking',
  name: 'Ad tracking',
  group: 'Watch other companies',
  line: 'The ads your competitors run in public, each followed by a persona to its page, price and code.',
  gets: 'Each new competitor ad and its offer, every morning, beside the page it lands on.',
  kit: [
    'A persona in your country, reading each competitor’s public ads daily',
    'Each landing page, on phone and desktop',
    'Its own inbox, for sign up codes',
    'A check every morning',
    'A screenshot of every ad and page',
    'Each page opened directly, so no click is paid for',
  ],

  meta: {
    path: '/recipes/ad-tracking',
    title: 'Ad tracking: every competitor ad, followed to its offer',
    description:
      'A persona reads the ads your competitors run in public each morning and follows each one to its page, price and code. Every offer dated, with screenshots.',
    answer:
      'Ad tracking sends a persona in your country to read the ads your competitors run in public each morning, and to follow each one to its page, price and code. Every new offer comes back dated, beside the ad that led to it.',
    ogImage: '/og/ad-tracking.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Ad tracking', path: '/recipes/ad-tracking' },
    ],
  },

  hero: {
    headline: 'Your competitors’ ads, followed to the offer behind each one.',
    sub: 'Ad tracking sends a persona in your country to read the ads your competitors run in public each morning, and to follow each one to its page, price and code. Every new offer comes back dated, beside the ad that led to it.',
    screen: 'ads',
    capture: {
      kind: 'waitlist',
      source: 'recipe-ad-tracking-hero',
      button: 'Request early access',
      interest: 'ads',
    },
  },

  run: {
    tab: 'Friday’s new ads',
    recipe: 'ads',
    task: 'Every morning, read the ads our 3 competitors run in public. Follow each to its page and flag any offer that undercuts us.',
    targets: 'competitor-a.example, competitor-b.example, competitor-c.example',
    journey: ['Read the ads they run in public', 'Open each page on phone and desktop', 'Sign up where an ad offers a code', 'Compare the offer with yours'],
    schedule: 'Every morning at 07:00',
    report: 'Slack for new offers, a weekly PDF',
    kit: ['Persona · UK, phone and desktop', '3 inboxes, for sign up codes', 'Every morning', 'Screenshots of every ad and page'],
    events: [
      { time: 'Fri 07:00', text: 'Read the ads 3 competitors run in public. Competitor A started 9 overnight.' },
      { time: 'Fri 07:04', text: 'Opened the page behind Competitor A’s “Free gift over £40” ad, on phone and desktop.' },
      { time: 'Fri 07:06', text: 'That page shows code GIFT40 and a gift set at £56, £2 under yours.' },
      { time: 'Fri 07:09', text: 'Competitor B’s ad offers 15% off for signing up. The persona signs up, and the code arrives in 2 minutes.' },
      { time: 'Fri 07:12', text: 'Competitor C’s free UK delivery ad has run 41 days, unchanged.' },
    ],
    finding: 'Competitor A started 9 ads overnight, led by a free gift and a gift set £2 under yours.',
    fix: 'Posted to #pricing in Slack, with the ad and its page side by side.',
    ledger: 'Every ad and page screenshotted on phone and desktop. Each page opened directly, so nobody paid for a click.',
  },

  steps: [
    {
      title: 'Name the brands',
      line: 'Your competitors, or a client’s. Paste a list, upload a CSV, connect Clay or call the API.',
    },
    {
      title: 'A persona reads their ads',
      line: 'The ads they run in public, each morning, from your country: the words, the image or video, and the day each started.',
    },
    {
      title: 'It follows every ad',
      line: 'To its page, opened directly on phone and desktop. Where an ad offers a code for signing up, it signs up and keeps what arrives.',
    },
    {
      title: 'Every offer comes back, dated',
      line: 'The ad and its page side by side, in Slack, a table or from the API.',
    },
  ],

  checks: [
    {
      group: 'The ads they run in public',
      items: [
        { title: 'New and stopped ads', line: 'The words, the image or video, and the day each starts and stops.' },
        { title: 'How long each runs', line: 'The ads a competitor keeps paying for, and the ones it drops in a week.' },
        { title: 'The offer it leads with', line: 'Every discount, gift, free delivery line and code.' },
      ],
    },
    {
      group: 'Where each ad lands',
      items: [
        { title: 'The page', line: 'Opened directly on phone and desktop, with the price, stock and offer it shows.' },
        { title: 'Sign up offers', line: 'Where an ad offers a code for signing up, the persona signs up and keeps what arrives, and when.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every new competitor offer, with its ad and its page.',
    items: [
      { format: 'Slack or email', line: 'Each morning a competitor has a new offer, with the ad and the page side by side.' },
      { format: 'Ad timeline', line: 'Every ad each competitor starts and stops, and how long it ran.' },
      { format: 'Weekly PDF', line: 'What every competitor is pushing, and the ads they keep running.' },
      { format: 'A table, webhook or API', line: 'Each ad, page and offer as a row in Clay, JSON at your endpoint, or an event from the API.' },
    ],
  },

  settings: [
    { k: 'Brands', v: 'Any competitor you name, or a client’s competitors' },
    { k: 'Persona', v: 'Who reads the ads, and the country it connects from' },
    { k: 'Devices', v: 'Phone, desktop or both' },
    { k: 'How often', v: 'Every morning, or more often in a sale week' },
    { k: 'Alerts', v: 'New offers only, or every new ad' },
  ],

  forWho: [
    { audience: 'agencies', line: 'Every ad each client’s competitors run in public, followed to its page, price and code.' },
    { audience: 'marketing', line: 'The offer behind every competitor ad, the morning it starts.' },
    { audience: 'founders', line: 'What your competitors are pushing this week, and the price behind it.' },
  ],

  table: {
    heading: 'Competitor A started 9 ads overnight. Competitor C’s free delivery ad has run 41 days.',
    line: 'The ads 3 competitors were running in public on Friday at 07:00.',
    cols: ['Competitor', 'Running', 'Lands on', 'Offer on the page'],
    rows: [
      { label: 'Free gift over £40', values: ['Competitor A', '1 day', 'Offers page', 'GIFT40, gift set at £56'] },
      { label: 'Shop bestsellers', values: ['Competitor A', '1 day', 'Bestsellers', 'No offer'] },
      { label: 'New travel size', values: ['Competitor B', '7 days', 'Travel tin', '£12, sign up for 15% off'] },
      { label: '2 for £30', values: ['Competitor B', '15 days', 'Bundle page', '2 candles for £30'] },
      { label: 'Free UK delivery', values: ['Competitor C', '41 days', 'Home page', 'Free delivery, no minimum'] },
    ],
  },

  faq: {
    heading: 'Nobody pays for a click. Every offer is dated, with its screenshot.',
    items: [
      {
        q: 'How do I see what happens after a competitor’s ad, not only the ad?',
        a: 'Ad tracking’s persona opens the page each public ad points to on phone and desktop, signs up where the ad offers a code, and keeps the offer behind every ad, dated.',
      },
      {
        q: 'Does Ad tracking click on paid ads?',
        a: 'No. It reads the ads in the public ad libraries and opens each landing page from its link, so nobody pays for a click.',
      },
      {
        q: 'Does it sign up at competitors?',
        a: 'Where an ad offers a code for signing up, yes, so you see what a new subscriber gets. The persona has its own inbox, and who asked is never shown.',
      },
      { q: 'Can it check our own ads?', a: 'That’s Ad landing check: every live ad of yours, opened from its link each morning.' },
      {
        q: 'How many brands can it follow?',
        a: 'As many as you name, every morning, for as long as you need. Run one, or a fleet of thousands.',
      },
    ],
  },

  final: {
    heading: 'See the offer behind your competitors’ ads.',
    sub: 'Tell us which competitors to follow. We’ll set up the first personas with you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-ad-tracking-final',
      button: 'Request early access',
      interest: 'ads',
    },
  },
}
