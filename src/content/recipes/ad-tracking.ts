import type { Capture, Recipe } from '../types'

/* Ad tracking (/recipes/ad-tracking). Watch rivals. Screen: ads.
   Rewritten from James's "Ad tracking". Kept: following every ad to the page it lands on, the ad and the page side
   by side, new and stopped ads with how long each ran. Kept his line that nobody pays for a click. His checks on your
   own (or a client's) ads, sold out, offer mismatch, dead links and slow pages, moved to Ad landing check (3 Oct),
   so this recipe is rivals only and the 2 never sell the same job.
   Fixed: no platform names and no claim of collecting from any ad platform ("the ads they run in public", review
   CL-10). The kit lists only what the run uses (review P2): the inbox is real, because where an ad offers a code for
   signing up, the declared agent signs up and records what arrives. No phone. At rivals: public ads, public pages
   and public sign ups only. Never a basket, a checkout or a person.
   The run and the table tell the same story as the `ads` screen and the Marketing page's "Rival ads" use case
   (Friday 07:06: Rival A's 9 new ads overnight, a gift set at £56, £2 under your £58; Rival C's ad at 41 days). Example.
   Never £40 for a gift set here: that is the real September run's basket. */

const roles: Capture['roles'] = {
  question: 'Whose ads should we follow first?',
  options: ['Our rivals’', 'A client’s rivals’'],
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'ads',
  slug: 'ad-tracking',
  name: 'Ad tracking',
  group: 'Watch rivals',
  line: 'Reads the ads your rivals run in public and follows each one to its page, price and code.',
  gets: 'Each new rival ad and its offer, every morning, side by side with the page it lands on.',
  kit: [
    'A declared AI agent per rival',
    'Phone and desktop browsers',
    'An inbox for sign up codes',
    'A check every morning',
    'Screenshots of every ad and page',
    'Every step signed and dated',
  ],

  meta: {
    path: '/recipes/ad-tracking',
    title: 'Ad tracking: AI agents follow your rivals’ ads to the offer',
    description:
      'Declared AI agents read the ads your rivals run in public each morning and follow each one to its page, price and code. Every new offer arrives signed.',
    answer:
      'Ad tracking is an Obsession recipe. Declared AI agents read the ads your rivals run in public each morning, open the page each ad points to on phone and desktop, sign up where an ad offers a code, and send every new offer next to yours, with every step signed.',
    ogImage: '/og/ad-tracking.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Ad tracking', path: '/recipes/ad-tracking' },
    ],
  },

  hero: {
    headline: 'AI agents that follow your rivals’ ads to the offer behind each one.',
    sub: 'Declared AI agents read the ads your rivals run in public each morning and follow each one to its page, price and code. Every new offer reaches you next to yours, signed.',
    screen: 'ads',
    capture: {
      kind: 'waitlist',
      source: 'recipe-ad-tracking-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'ads',
    },
  },

  run: {
    tab: 'Example: Friday’s new ads',
    recipe: 'ads',
    task: 'Every morning, read the ads our 3 rivals run in public. Follow each to its page and flag any offer that undercuts us.',
    targets: 'rival-a.example, rival-b.example, rival-c.example',
    journey: ['Read the ads they run in public', 'Open each page on phone and desktop', 'Sign up where an ad offers a code', 'Compare the offer with yours'],
    schedule: 'Every morning at 07:00',
    report: 'Slack alert, weekly PDF',
    kit: ['Agent ID, declared as AI', 'Phone and desktop browsers', '3 inboxes, for sign up codes', 'Screenshots of every ad and page'],
    events: [
      { time: 'Fri 07:00', text: 'Read the ads 3 rivals run in public. Rival A started 9 overnight.' },
      { time: 'Fri 07:04', text: 'Opened the page behind Rival A’s “Free gift over £40” ad, on phone and desktop.' },
      { time: 'Fri 07:06', text: 'That page shows code GIFT40 and a gift set at £56, £2 under yours.' },
      { time: 'Fri 07:09', text: 'Rival B’s ad offers 15% off for signing up. The agent signs up as an AI agent, and the code arrives in 2 minutes.' },
      { time: 'Fri 07:12', text: 'Rival C’s free UK delivery ad has run 41 days, unchanged.' },
    ],
    finding: 'Rival A started 9 ads overnight, led by a free gift and a gift set £2 under yours.',
    fix: 'A reply for your £58 gift set, as an ad and an email, drafted for your OK.',
    ledger: 'Example run. Every ad and page screenshotted on phone and desktop, and signed. Each page opened directly, so nobody paid for a click.',
  },

  steps: [
    {
      title: 'Add the brands',
      line: 'Your rivals, or a client’s rivals. Paste a list, upload a CSV, connect Clay or use the API.',
    },
    {
      title: 'An agent reads their ads',
      line: 'The ads they run in public, each morning: the words, the image or video, and the day each started.',
    },
    {
      title: 'It follows every ad',
      line: 'To its page, opened directly on phone and desktop. Where an ad offers a code for signing up, it signs up as an AI agent.',
    },
    {
      title: 'You get the offer next to yours',
      line: 'An alert each morning a rival has a new offer, with the ad and its page side by side.',
    },
  ],

  checks: [
    {
      group: 'The ads they run in public',
      items: [
        { title: 'New and stopped ads', line: 'The words, the image or video, and the day each starts and stops.' },
        { title: 'How long each runs', line: 'The ads a rival keeps paying for, and the ones it drops in a week.' },
        { title: 'The offer it leads with', line: 'Every discount, gift, free delivery line and code.' },
      ],
    },
    {
      group: 'Where each ad lands',
      items: [
        { title: 'The page', line: 'Opened directly on phone and desktop, with the price, stock and offer it shows.' },
        { title: 'Sign up offers', line: 'Where an ad offers a code for signing up, the agent signs up and records what arrives, and when.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every new rival offer reaches you with its ad and its page.',
    items: [
      { format: 'Slack or email alert', line: 'Each morning a rival has a new offer, with the ad and the page side by side.' },
      { format: 'Ad timeline', line: 'Every ad each rival starts and stops, and how long it ran.' },
      { format: 'Weekly PDF', line: 'What every rival is pushing, and the ads they keep running.' },
      { format: 'Sheet, Clay or webhook', line: 'Each ad, page and offer as a row, a column or JSON.' },
    ],
  },

  settings: [
    { k: 'Brands', v: 'Any rival you name, or a client’s rivals' },
    { k: 'Devices', v: 'Phone, desktop or both' },
    { k: 'How often', v: 'Every morning, or more often in a sale week' },
    { k: 'Alerts', v: 'New offers only, or every new ad' },
  ],

  forWho: [
    { audience: 'agencies', line: 'See every ad each client’s rivals run in public, followed to its page, price and code.' },
    { audience: 'marketing', line: 'See the offer behind every rival ad the morning it starts.' },
    { audience: 'founders', line: 'See what your rivals are pushing this week, and the price behind it.' },
  ],

  table: {
    heading: 'Rival A started 9 ads overnight. Rival C’s free delivery ad has run 41 days.',
    line: 'Example: the ads 3 rivals were running in public on Friday at 07:00.',
    cols: ['Rival', 'Running', 'Lands on', 'Offer on the page'],
    rows: [
      { label: 'Free gift over £40', values: ['Rival A', '1 day', 'Offers page', 'GIFT40, gift set at £56'] },
      { label: 'Shop bestsellers', values: ['Rival A', '1 day', 'Bestsellers', 'No offer'] },
      { label: 'New travel size', values: ['Rival B', '7 days', 'Travel tin', '£12, sign up for 15% off'] },
      { label: '2 for £30', values: ['Rival B', '15 days', 'Bundle page', '2 candles for £30'] },
      { label: 'Free UK delivery', values: ['Rival C', '41 days', 'Home page', 'Free delivery, no minimum'] },
    ],
  },

  faq: {
    heading: 'Nobody pays for a click, and nobody at a rival is contacted.',
    items: [
      {
        q: 'Does it click on paid ads?',
        a: 'No. It opens each ad’s page directly, so nobody pays for a click.',
      },
      {
        q: 'Which ads does it read?',
        a: 'The ads your rivals run in public, and the pages they point to. Nothing behind a login, and nothing bought.',
      },
      {
        q: 'Does it sign up at rivals?',
        a: 'Only where an ad offers a code for signing up. It says it’s an AI agent and links to useobsession.com/agents, a page explaining Obsession. It never names you and never replies.',
      },
      {
        q: 'Can it check our own ads, or a client’s?',
        a: 'That’s Ad landing check: each morning it opens the page every live ad of yours points to, as a customer, and drafts the fix for your OK. Ad tracking follows the ads rivals run in public.',
      },
      {
        q: 'How many brands can it follow?',
        a: 'As many as you add. Name them or paste a list, and it reads their ads every morning, continuously.',
      },
    ],
  },

  final: {
    heading: 'See the offer behind your rivals’ ads.',
    sub: 'Join the waitlist. Ad tracking comes ready to run on the rivals you name.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-ad-tracking-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'ads',
    },
  },
}
