import type { Recipe } from '../types'

/* Partner checks (/blueprints/partner-checks). Check your own journeys. For partnership and affiliate teams.
   Screen: partners (6 partners checked for link, code and offer on Mon 07:00; Deals site still shows SUMMER20, rejected
   in the basket; a note drafted in JO's thread, sent with your OK at 09:14). JO is always "your partnerships lead".
   The persona version (20 Nov 2026, James): each Monday a persona you define reads every partner's page as a visitor,
   and each partner newsletter in its own inbox, finds your link, code and banner, follows the link to your store and
   tries the code in a basket there, stopped before payment. Results land in Slack, a sheet or the API, and a note is
   drafted for any partner out of date. The run is an example. */

export const recipe: Recipe = {
  id: 'partners',
  slug: 'partner-checks',
  name: 'Partner checks',
  group: 'Check your own journeys',
  line: 'Each Monday a persona reads every partner’s page, follows your link and tries the code.',
  gets: 'Every partner’s link, code and offer each Monday, with a screenshot, and the ones out of date flagged.',
  kit: [
    'Your partner list, codes and banners',
    'A persona that visits each partner page',
    'Its own inbox, for partner newsletters',
    'A basket on your own store, stopped before payment',
    'Notes drafted in your team’s own thread',
    'Results in Slack, a sheet or the API',
  ],

  meta: {
    path: '/blueprints/partner-checks',
    title: 'Check every partner’s link, code and banner each Monday',
    description:
      'Each Monday a persona reads every partner page as a visitor, follows your link, tries the code in your basket and flags any that’s out of date.',
    answer:
      'Partner checks sends a persona to every partner each Monday, as a visitor. It finds your link, code and banner, follows the link, tries the code and flags any that’s out of date.',
    ogImage: '/og/partner-checks.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Partner checks', path: '/blueprints/partner-checks' },
    ],
  },

  hero: {
    headline: 'What every partner shows its readers about you, each Monday.',
    sub: 'Partner checks sends a persona to every partner each Monday, as a visitor. It finds your link, code and banner, follows the link, tries the code and flags any that’s out of date.',
    screen: 'partners',
    capture: {
      kind: 'waitlist',
      source: 'recipe-partners-hero',
      button: 'Start free',
      interest: 'partners',
    },
  },

  unit: 'partner check',
  per: 'partner',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['Each partner page read as a visitor', 'Your link followed and the code tried in your basket', 'A screenshot of each, stopped before payment'] },
    { name: 'Starter', includes: ['Your link, code, offer and banner on each page', 'Partner newsletters read in the persona’s own inbox', 'Results in Slack or a sheet'] },
    { name: 'Growth', includes: ['A note drafted for each partner out of date', 'Each note sent only after your OK'] },
    { name: 'Scale', includes: ['Your partner list synced from a CSV or the API', 'A monthly report you can share'] },
  ],

  run: {
    tab: '6 partners, every Monday',
    recipe: 'partners',
    task: 'Every Monday, send a persona to each partner page as a visitor, follow our link to the store and try their code in the basket. Flag any link, code or banner that’s out of date.',
    targets: 'Your 6 affiliates and partners, from a hiking blog to a newsletter',
    journey: ['Open each partner page', 'Follow the link to your store', 'Try the code in your basket', 'Flag what’s out of date'],
    schedule: 'Every Monday at 07:00',
    report: 'Slack on Monday, and a note to approve',
    kit: ['Visitor · UK', 'Your partner list', 'A basket on your store', 'Your team’s thread'],
    events: [
      { time: 'Mon 07:00', text: '6 partner pages read: 3 affiliates and 3 partners, each with its own link and code.' },
      { time: 'Mon 07:08', text: 'Hiking blog and Run club pass. The links land, and HIKE15 and RUN15 take 15% off in your basket.' },
      { time: 'Mon 07:12', text: 'Deals site still shows your summer sale: 20% off with SUMMER20. In your basket, SUMMER20 is rejected.' },
      { time: 'Mon 07:15', text: 'Gift guide, Podcast and Newsletter pass. Deals site is the only partner out of date.' },
      {
        time: 'Mon 07:16',
        text: 'A note drafted in your partnerships lead’s thread: SUMMER20 ended 31 Aug, please use DEALS15, new banner attached.',
      },
      { time: 'Mon 09:14', text: 'Sent with your OK. Deals site is read again next Monday.' },
    ],
    finding: 'Deals site still sends shoppers to SUMMER20, a code that ended on 31 Aug, under last season’s banner.',
    fix: 'In Slack at 07:16 with the screenshot, and the note with DEALS15 sent from your partnerships lead’s thread at 09:14.',
    ledger: 'Every visit and basket kept with its screenshot.',
  },

  steps: [
    {
      title: 'Add your partners',
      line: 'Each partner page, link and code, with your current codes and banners.',
    },
    {
      title: 'Each Monday, a persona reads every page',
      line: 'As a visitor and a newsletter subscriber, finding your link, code, banner and offer.',
    },
    {
      title: 'Follow the link, try the code',
      line: 'The link must keep the partner’s tag, and the code must work in your basket.',
    },
    {
      title: 'Anything out of date lands Monday',
      line: 'In Slack or a sheet, with the screenshot and a note drafted for your OK.',
    },
  ],

  checks: [
    {
      group: 'On each partner’s page',
      items: [
        { title: 'Your link', line: 'It’s there, it works, and it points to the page you agreed.' },
        { title: 'Your code', line: 'The code they show is the code you gave them, and it’s still live.' },
        { title: 'Your offer and banner', line: 'This season’s offer and banner, not last season’s.' },
        { title: 'Their newsletter', line: 'Your code and offer as each subscriber gets them, in the persona’s inbox.' },
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
        { title: 'Before any note', line: 'Every note waits for your OK, then goes from your team’s thread.' },
        { title: 'With a person', line: 'If anyone writes back to the persona, it says it’s an AI.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every partner read each Monday, with the old ones flagged.',
    items: [
      { format: 'A line per partner', line: 'Link, code and offer, with a screenshot of their page and your basket.' },
      { format: 'Codes that fail', line: 'Every code your basket rejects, which partner shows it, and since when.' },
      { format: 'The note, drafted', line: 'With the right code and the current banner.' },
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

  table: {
    heading: 'The link, the code and the offer at every partner.',
    line: 'Monday at 07:00: 5 partners current, 1 showing a code that ended on 31 Aug.',
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
        a: 'Send a persona to them every Monday. It follows each partner’s link, tries their code in a basket on your store and flags any link, code or banner that’s out of date.',
        link: { label: 'See how a persona works', to: '/personas' },
      },
      {
        q: 'Does Partner checks contact our partners?',
        a: 'Through your team. Each note is drafted in your team’s thread and goes after your OK.',
      },
      {
        q: 'Does Partner checks buy anything?',
        a: 'No. The persona tries each code in a basket on your store and stops before payment, so no partner earns a commission.',
      },
      {
        q: 'Which partners can Partner checks cover?',
        a: 'Any partner with a public page or newsletter that links to you: affiliates, creators, newsletters, podcasts, review sites and gift guides, from the list you give it.',
      },
      {
        q: 'How is Partner checks different from Ad landing check?',
        a: 'Partner checks follows the links other sites run for you. Ad landing check opens the pages your own ads point to.',
        link: { label: 'See the blueprint', to: '/blueprints/ad-landing-check' },
      },
      {
        q: 'What does Partner checks cost?',
        a: 'It’s billed on the pieces it uses, at list rates. Each persona uses browser hours to read each page and try each code, and an inbox for newsletters. A persona is free while it waits. Try it on the Free plan.',
        link: { label: 'See the cloud browser', to: '/browser' },
      },
    ],
  },

  final: {
    heading: 'Know every partner sends shoppers to a code that works.',
    sub: 'Try it on the Free plan with your partner list, read every Monday.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-partners-final',
      button: 'Start free',
      interest: 'partners',
    },
    link: { label: 'See the Test sign-up and agents kit', to: '/kits/test-sign-up-and-agents' },
  },
}
