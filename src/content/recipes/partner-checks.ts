import type { Recipe } from '../types'

/* Partner checks (/recipes/partner-checks). Check your own journeys. For partnership and affiliate teams.
   Screen: partners (Your company / Missions / Partner checks, as a customer, Mon 07:00: 6 affiliates and partners, each
   checked for Link, Code and Offer. Hiking blog (affiliate) HIKE15, Run club (partner) RUN15, Gift guide (partner)
   GIFT15, Podcast (affiliate) POD15 and Newsletter (partner) NEWS15 all pass at 15% off. Deals site (affiliate),
   07:12: deals-site.example still shows "Summer sale, 20% off" with SUMMER20; SUMMER20 is rejected in the basket and
   last season's offer is shown. The note, drafted in JO's thread: "SUMMER20 ended 31 Aug. Please use DEALS15 instead.
   New banner attached." Edit or Send; "Sent with your OK 09:14". On the page JO is always "your partnerships lead",
   as AM is "your rep" on Expansion offers: nobody outside knows who JO is. The note on screen: "Links and codes only, never
   prices". The toast: "Note sent to 1 partner, check again Mon"). Partner names are categories, the site's style,
   never a business name: invented names kept landing on real ones. 07:12, not 07:04, so it never opens on the same
   minute as Ad landing check beside it on /marketing.
   Seun approved the recipe on 3 Oct. It is the partner side of Ad landing check: that recipe opens the pages the
   reader's own ads point to; this 1 follows the links other sites run for the reader.
   Rules: only the 3 lines in system.md; everything else is the reader's setting. It checks links, codes and banners
   (1 word for what is checked, on every line a reader sees) at the partners on the reader's list, reading their
   public pages as any visitor would; anything else on a partner's page, prices included, is the reader's to add. The
   code is tried in a basket on the reader's own store, where the agent stops before payment (so no partner earns a
   commission from a check) or buys on a capped card and refunds, as the reader chooses. Each note is drafted in the
   team's own thread and goes after the reader's OK; a client's partners with the client's agreement are said once.
   Up-to-50 rule: no money figure is modelled, because the screen has no traffic or sales to model it on. The flat
   specific instead: a weekly check means a dead code, link or banner is found within 7 days (within a day when the
   check runs daily in a sale). It is found, not taken down: only the partner can change their page. No sources,
   prices of Obsession or real names on the page. The run is an example and says so. */

export const recipe: Recipe = {
  id: 'partners',
  slug: 'partner-checks',
  name: 'Partner checks',
  group: 'Check your own journeys',
  line: 'Follows every partner’s link and code to your basket as a customer each week, and drafts a note when one is out of date.',
  gets: 'Every partner’s link, code and banner checked as a customer each Monday, and a note drafted for any that’s out of date.',
  kit: [
    'An AI agent with its own ID',
    'Your partner list, codes and banners',
    'A browser to visit every partner',
    'A basket on your own store',
    'Notes in your team’s own thread',
    'Every check and OK kept with its receipt',
  ],

  meta: {
    path: '/recipes/partner-checks',
    title: 'Partner checks: test every partner link and code · Obsession',
    description:
      'Each week an AI customer follows every partner’s link to your store, tries their code in your basket, and drafts a note for any that’s out of date.',
    answer:
      'Partner checks catches every partner still sharing an expired code or an old banner: each Monday an AI agent follows every partner’s link to your store and tries their code in your basket, then drafts a note for your OK.',
    ogImage: '/og/partner-checks.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Partner checks', path: '/recipes/partner-checks' },
    ],
  },

  hero: {
    headline: 'AI agents that catch every partner still sharing an expired code or an old banner.',
    sub: 'Partner checks catches every partner still sharing an expired code or an old banner: each Monday an AI agent follows every partner’s link to your store and tries their code in your basket, then drafts a note for your OK.',
    screen: 'partners',
    capture: {
      kind: 'waitlist',
      source: 'recipe-partners-hero',
      button: 'Join the waitlist',
      interest: 'partners',
    },
  },

  run: {
    tab: 'Example: 6 partners, every Monday',
    recipe: 'partners',
    task: 'Every Monday, visit each partner as a customer, follow our link to the store and try their code in the basket. Draft a note to any partner whose link, code or banner is out of date.',
    targets: 'Your 6 affiliates and partners, from a hiking blog to a newsletter',
    journey: ['Visit each partner’s page', 'Follow the link to your store', 'Try the code in your basket', 'Draft the note for your OK'],
    schedule: 'Every Monday at 07:00',
    report: 'A Monday note, and drafts ready to approve',
    kit: ['Its own agent ID', 'Your partner list', 'A basket on your store', 'Your team’s thread'],
    events: [
      { time: 'Mon 07:00', text: '6 partners visited as a customer: 3 affiliates and 3 partners, each with its own link and code.' },
      { time: 'Mon 07:08', text: 'Hiking blog and Run club pass. The links land, and HIKE15 and RUN15 take 15% off in your basket.' },
      {
        time: 'Mon 07:12',
        text: 'Deals site still shows your summer sale: 20% off with SUMMER20. In your basket, SUMMER20 is rejected.',
      },
      { time: 'Mon 07:15', text: 'Gift guide, Podcast and Newsletter pass. 5 of 6 partners are current.' },
      {
        time: 'Mon 07:16',
        text: 'A note drafted in your partnerships lead’s own thread: SUMMER20 ended 31 Aug, please use DEALS15, new banner attached.',
      },
      { time: 'Mon 09:14', text: 'Sent with your OK. Deals site is checked again next Monday.' },
    ],
    finding: 'Deals site still sends customers to SUMMER20, a code that ended on 31 Aug, under last season’s banner.',
    fix: 'A note from your partnerships lead’s thread with DEALS15 and the new banner, sent with your OK at 09:14. Checked again next Monday.',
    ledger: 'Example run. Every visit, basket and OK kept with its receipt.',
  },

  steps: [
    {
      title: 'Visit every partner as a customer',
      line: 'Each Monday it opens each partner’s page, finds your link, code and banner, and notes the offer it shows. It reads what any visitor can see.',
    },
    {
      title: 'Follow the link to your store',
      line: 'It checks the link lands on the page the partner means, with their tag still on it, so they get the credit.',
    },
    {
      title: 'Try the code in your basket',
      line: 'On your own store, it applies the partner’s code to a basket and checks the discount. It stops before payment, or buys on a capped card and refunds, as you choose.',
    },
    {
      title: 'Draft the note for your OK',
      line: 'When a link, code or banner is out of date, it drafts a note in your team’s own thread, with the right code and the current banner. It goes after your OK, and the partner is checked again next Monday.',
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
        { title: 'The code in the basket', line: 'Applied to a real basket, with the discount checked against the offer.' },
        { title: 'At payment', line: 'It stops there, or buys on a capped card and refunds, as you choose. Stopping means no partner earns a commission.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Before any note', line: 'Every note waits for your OK, then goes from your team’s own thread.' },
        { title: 'At a block', line: 'A CAPTCHA or a bot block on a partner’s page ends that visit, and the Monday note names it.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every partner is checked each Monday, with a note ready for any that’s out of date.',
    items: [
      { format: 'A verdict per partner', line: 'Link, code and offer, with a screenshot of their page and your basket.' },
      { format: 'The note, drafted', line: 'In your team’s own thread, with the right code and the current banner, waiting for your OK.' },
      { format: 'Codes that fail', line: 'Every code your basket rejects, which partner shows it, and since when.' },
      { format: 'Checked again', line: 'The partner checked again the next Monday, and marked fixed once their page is right.' },
      { format: 'A weekly note', line: 'Partners checked, problems found, notes sent and pages fixed.' },
      { format: 'A record to share', line: 'Every visit, basket and OK kept with its receipt.' },
    ],
  },

  settings: [
    { k: 'Partners', v: 'Every affiliate and partner, or the ones you pick' },
    { k: 'Your list', v: 'Each partner’s page, link and code: paste it, upload a CSV or use the API' },
    { k: 'Offers', v: 'Your current codes, offers and banners' },
    { k: 'How often', v: 'Every Monday at 07:00, or daily in a sale' },
    { k: 'Store', v: 'Yours: stop at the basket, or buy on a capped card and refund' },
    { k: 'Notes from', v: 'Your team’s own thread' },
    { k: 'Needs your OK', v: 'Every note to a partner' },
    { k: 'Also log', v: 'Anything else on a partner’s page, prices included' },
  ],

  forWho: [
    {
      audience: 'marketing',
      line: 'Partnership and affiliate teams know every partner sends customers to a code that works and this season’s offer.',
    },
    {
      audience: 'agencies',
      line: 'Check every client’s affiliates and creators each week with their OK, and send a record of every code you caught, with proof.',
    },
    { audience: 'founders', line: 'A few partners and nobody to check them? Every link and code tried each Monday, and the note drafted for you.' },
  ],

  table: {
    heading: 'It checks the link, the code and the offer at every partner.',
    line: 'From the example run: 5 partners current, and 1 showing a code that ended on 31 Aug. Checked every Monday, a dead code, link or banner is found within 7 days, or within a day when you check daily in a sale.',
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
    heading: 'Every link, code and banner checked. Every note sent after your OK.',
    items: [
      {
        q: 'How do I check my affiliates’ links and codes still work?',
        a: 'Partner checks tries them every Monday: an AI agent follows each partner’s link to your store, applies their code to a basket on your own store and checks the discount, then drafts a note for your OK when a link, code or banner is out of date.',
      },
      {
        q: 'Does Partner checks contact our partners?',
        a: 'Through your team: Partner checks drafts each note in your team’s own thread, and it goes after your OK.',
      },
      {
        q: 'Does Partner checks buy anything?',
        a: 'If you choose. Partner checks tries the code in a basket on your own store and stops before payment, so no partner earns a commission. Or it buys on a capped card and refunds the order.',
      },
      {
        q: 'Which partners can Partner checks cover?',
        a: 'Partner checks covers any partner with a public page that links to you: affiliates, creators, newsletters, podcasts, review sites and gift guides, from the list you give it.',
      },
      {
        q: 'How does Partner checks know what’s current?',
        a: 'Partner checks reads it from the codes, offers and banners you give it. Change an offer, and the next check makes sure every partner shows the new one.',
      },
      {
        q: 'Does Partner checks say it’s AI?',
        a: 'Yes, whenever it talks to a person. On a partner’s page it reads what any visitor can see.',
      },
      {
        q: 'What’s it worth?',
        a: 'With Partner checks, a dead code, link or banner is found within 7 days, not when a customer complains or the month’s numbers dip. Check daily in a sale, and it’s found within a day.',
      },
      {
        q: 'How is Partner checks different from Ad landing check?',
        a: 'Partner checks follows the links other sites run for you, and drafts the note when one is out of date. Ad landing check opens the pages your own ads point to.',
      },
    ],
  },

  final: {
    heading: 'Know every partner sends customers to a code that works.',
    sub: 'Join the waitlist. Partner checks comes ready to follow every partner’s link and code to your basket each Monday, and to draft each note for your OK.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-partners-final',
      button: 'Join the waitlist',
      interest: 'partners',
    },
  },
}
