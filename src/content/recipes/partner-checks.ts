import type { Recipe } from '../types'

/* Partner checks (/recipes/partner-checks). Check your own journeys. For partnership and affiliate teams.
   Screen: partners (6 partners checked for link, code and offer on Mon 07:00; Deals site still shows SUMMER20, rejected
   in the basket; a note drafted in JO's thread, sent with your OK at 09:14). JO is always "your partnerships lead".
   The 9 Nov story: the record of what every partner shows your customers, your link, code and banner, read each Monday
   as any visitor would, with each code tried in a basket on your own store, stopped before payment. Results land in
   Slack, a sheet or the API, and a note is drafted for any partner out of date. The run is an example. */

export const recipe: Recipe = {
  id: 'partners',
  slug: 'partner-checks',
  name: 'Partner checks',
  group: 'Check your own journeys',
  line: 'Every partner’s link, code and banner as a visitor sees them, collected each Monday, with each code tried in your basket.',
  gets: 'Every partner’s link, code and offer each Monday, with a screenshot, and the ones out of date flagged.',
  kit: [
    'Your partner list, codes and banners',
    'A browser that visits each partner page',
    'A basket on your own store, stopped before payment',
    'A screenshot of each partner page',
    'Notes drafted in your team’s own thread',
    'Results in Slack, a sheet or the API',
  ],

  meta: {
    path: '/recipes/partner-checks',
    title: 'Partner checks: every partner link and code, every week',
    description:
      'Each Monday, Partner checks reads every partner page as a visitor, follows your link, tries the code in your basket and flags any that’s out of date.',
    answer:
      'Partner checks is the record of what every partner shows your customers: your link, your code and your banner. Each Monday Obsession opens each partner page as a visitor, follows the link to your store, tries the code in your basket and flags any that’s out of date.',
    ogImage: '/og/partner-checks.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Partner checks', path: '/recipes/partner-checks' },
    ],
  },

  hero: {
    headline: 'What every partner shows your customers, each Monday.',
    sub: 'Partner checks is the record of what every partner shows your customers: your link, your code and your banner. Each Monday Obsession opens each partner page as a visitor, follows the link to your store, tries the code in your basket and flags any that’s out of date.',
    screen: 'partners',
    capture: {
      kind: 'waitlist',
      source: 'recipe-partners-hero',
      button: 'Request early access',
      interest: 'partners',
    },
  },

  run: {
    tab: 'Example: 6 partners, every Monday',
    recipe: 'partners',
    task: 'Every Monday, open each partner page as a visitor, follow our link to the store and try their code in the basket. Flag any link, code or banner that’s out of date.',
    targets: 'Your 6 affiliates and partners, from a hiking blog to a newsletter',
    journey: ['Open each partner page', 'Follow the link to your store', 'Try the code in your basket', 'Flag what’s out of date'],
    schedule: 'Every Monday at 07:00',
    report: 'Slack on Monday, and a note to approve',
    kit: ['Visitor · UK', 'Your partner list', 'A basket on your store', 'Your team’s thread'],
    events: [
      { time: 'Mon 07:00', text: '6 partner pages read: 3 affiliates and 3 partners, each with its own link and code.' },
      { time: 'Mon 07:08', text: 'Hiking blog and Run club pass. The links land, and HIKE15 and RUN15 take 15% off in your basket.' },
      { time: 'Mon 07:12', text: 'Deals site still shows your summer sale: 20% off with SUMMER20. In your basket, SUMMER20 is rejected.' },
      { time: 'Mon 07:15', text: 'Gift guide, Podcast and Newsletter pass. 5 of 6 partners are current.' },
      {
        time: 'Mon 07:16',
        text: 'A note drafted in your partnerships lead’s thread: SUMMER20 ended 31 Aug, please use DEALS15, new banner attached.',
      },
      { time: 'Mon 09:14', text: 'Sent with your OK. Deals site is read again next Monday.' },
    ],
    finding: 'Deals site still sends customers to SUMMER20, a code that ended on 31 Aug, under last season’s banner.',
    fix: 'In Slack at 07:16 with the screenshot, and the note with DEALS15 sent from your partnerships lead’s thread at 09:14.',
    ledger: 'Example run. Every visit and basket kept with its screenshot.',
  },

  steps: [
    {
      title: 'Add your partners',
      line: 'Each partner page, link and code, from a list, a CSV or the API, with your current codes and banners.',
    },
    {
      title: 'Each Monday, read every page',
      line: 'Obsession opens each partner page as any visitor would, finds your link, code and banner, and notes the offer.',
    },
    {
      title: 'Follow the link, try the code',
      line: 'The link must land with the partner’s tag still on it, and the code must work in a basket on your store. It stops before payment, so no partner earns a commission.',
    },
    {
      title: 'Out of date? You hear Monday',
      line: 'In Slack or a sheet, with the screenshot, and a note drafted in your team’s thread for your OK.',
    },
  ],

  checks: [
    {
      group: 'On each partner’s page',
      items: [
        { title: 'Your link', line: 'It’s there, it works, and it points to the page you agreed.' },
        { title: 'Your code', line: 'The code they show is the code you gave them, and it’s still live.' },
        { title: 'Your offer and banner', line: 'This season’s offer and banner, not last season’s.' },
      ],
    },
    {
      group: 'On your own store',
      items: [
        { title: 'The landing page', line: 'It loads, shows what the partner promised, and keeps their tag so they get the credit.' },
        { title: 'The code in the basket', line: 'Applied to a real basket, with the discount read against the offer.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'At payment', line: 'Every basket stops before payment, so no partner earns a commission.' },
        { title: 'Before any note', line: 'Every note waits for your OK, then goes from your team’s own thread.' },
        { title: 'At a block', line: 'A CAPTCHA or a bot block on a partner page ends that visit, and Monday’s results name it.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every partner read each Monday, with the old ones flagged.',
    items: [
      { format: 'A line per partner', line: 'Link, code and offer, with a screenshot of their page and your basket.' },
      { format: 'Codes that fail', line: 'Every code your basket rejects, which partner shows it, and since when.' },
      { format: 'The note, drafted', line: 'In your team’s thread, with the right code and the current banner, for your OK.' },
      { format: 'Read again', line: 'Each partner read again next Monday, and marked fixed once their page is right.' },
      { format: 'Slack, sheet or API', line: 'Every partner’s line as a message, a row or JSON.' },
    ],
  },

  settings: [
    { k: 'Partners', v: 'Every affiliate and partner, or the ones you pick' },
    { k: 'Your list', v: 'Each partner page, link and code: paste it, upload a CSV or use the API' },
    { k: 'Offers', v: 'Your current codes, offers and banners' },
    { k: 'How often', v: 'Every Monday at 07:00, or daily in a sale' },
    { k: 'Needs your OK', v: 'Every note to a partner' },
    { k: 'Where it lands', v: 'Slack, a sheet, a webhook or the API' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Know every partner sends customers to a code that works and this season’s offer.' },
    { audience: 'agencies', line: 'Every client’s affiliates and creators, read each week with their OK.' },
    { audience: 'founders', line: 'Every partner’s link and code tried each Monday, with nobody on the team checking by hand.' },
  ],

  table: {
    heading: 'The link, the code and the offer at every partner.',
    line: 'Example run: 5 partners current, 1 showing a code that ended on 31 Aug. Read every Monday, a dead code is found within 7 days, or within a day when you read daily in a sale.',
    cols: ['Link', 'Code', 'Offer'],
    rows: [
      { label: 'Hiking blog', values: ['Lands', 'HIKE15 works', '15% off'] },
      { label: 'Run club', values: ['Lands', 'RUN15 works', '15% off'] },
      { label: 'Deals site', values: ['Lands', 'SUMMER20 rejected', '20% off, last season’s'] },
      { label: 'Gift guide', values: ['Lands', 'GIFT15 works', '15% off'] },
      { label: 'Podcast', values: ['Lands', 'POD15 works', '15% off'] },
      { label: 'Newsletter', values: ['Lands', 'NEWS15 works', '15% off'] },
    ],
  },

  faq: {
    heading: 'Every link, code and banner read. Every note sent after your OK.',
    items: [
      {
        q: 'How do I check my affiliates’ links and codes still work?',
        a: 'Partner checks reads them every Monday: it follows each partner’s link to your store, tries their code in a basket on your store and flags any link, code or banner that’s out of date, with a screenshot.',
      },
      {
        q: 'Does Partner checks contact our partners?',
        a: 'Through your team. Partner checks drafts each note in your team’s own thread, and it goes after your OK.',
      },
      {
        q: 'Does Partner checks buy anything?',
        a: 'No. Partner checks tries each code in a basket on your own store and stops before payment, so no partner earns a commission.',
      },
      {
        q: 'Which partners can Partner checks cover?',
        a: 'Partner checks covers any partner with a public page that links to you: affiliates, creators, newsletters, podcasts, review sites and gift guides, from the list you give it.',
      },
      {
        q: 'How is Partner checks different from Ad landing check?',
        a: 'Partner checks follows the links other sites run for you. Ad landing check opens the pages your own ads point to.',
      },
    ],
  },

  final: {
    heading: 'Know every partner sends customers to a code that works.',
    sub: 'Early access includes Partner checks on your partner list, read every Monday from the first week.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-partners-final',
      button: 'Request early access',
      interest: 'partners',
    },
  },
}
