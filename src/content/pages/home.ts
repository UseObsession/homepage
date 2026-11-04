import { consoleHeading } from '../console'
import { AI_CUSTOMER } from '../glossary'
import { askExamples, askShared, life } from '../shared5'
import type { Page } from '../types'

/* Home (/), the November rewrite (COPY.md, "Copy deck > Home"; docs/copy/ai-customer-voice.md). 1 idea: Obsession
   sells an AI customer. You send one to any company, it does what a real customer does, and it keeps the receipts. Each block answers the question the last one
   leaves open, in this order (4 Nov: 9 blocks, from 11; every block from 2 to 8 names itself in a small label, as the
   readers band's "Who you send it to" does):
   1 what it is (the hero: intelligence on any company, from inside it; the form; the film) >
   2 what we found (the 93% study as a research note: the share, 1 supporting share, its source, 1 real run) >
   3 how it works (an agent's life: it signs up, sleeps, wakes when the company does something, files the receipt) >
   4 how to use it (1 Obsession run wired to every format it arrives in) >
   5 how it compares (where each kind of tool's view ends on 1 journey, and what only a customer catches under it) >
   6 who you send it to (James's reader band: each reader, where it sends its AI customers, its recipes) >
   7 what you can ask it (1 question per reader, asked in Claude Code, Codex or from code, answered with receipts) >
   8 questions, then the waitlist.
   Open source is the hero's tag (a link to the code) and 1 question; its section lives on /developers.
   The words a buyer uses come first (research/voc.md: "competitor emails", "sign up", "abandoned basket", "Promotions
   tab", "manually"); "receipt" is the brand's 1 device, always beside the plain word for it. Every company on the
   screens is invented, at a .example address. */

const waitlist = {
  kind: 'waitlist',
  button: 'Join the waitlist',
  interest: 'any',
} as const

export const page: Page = {
  meta: {
    path: '/',
    title: 'Obsession: intelligence on any company, from AI customers',
    description:
      'Intelligence on any company, from AI customers inside it. They sign up, buy, talk to support and stay for months, keeping every email, offer, price and reply.',
    /* The sentence AI assistants quote: the hero's sub, word for word, then how to use it. */
    answer:
      'Obsession sends AI customers to any company you name. Each one signs up, buys, talks to support and stays for months, keeping every email, offer, price and reply it gets, with proof. Send them from your own AI agent through MCP or the API, or from our website; the runtime is open source.',
    ogLine: 'Send AI customers to your prospects, your clients and rivals.',
    ogImage: '/og/home.png',
  },

  hero: {
    pill: 'Open source',
    headline: 'Intelligence on any company, from inside it.',
    sub: 'Send AI customers to your prospects, your clients and rivals. They sign up, shop, leave a cart and talk to support, then bring back every email, text, offer and reply, plus what broke, with proof.',
    capture: { ...waitlist, source: 'home-hero' },
    proof: [],
    consoleHeading,
  },

  /* The hero's film: why Obsession (the cut on YouTube, useobsession channel), played in the page from our own copy.
     A new cut gets a new file name (-v3 next), because public/film/ is cached for a year. */
  heroVideo: {
    youtube: 'xNoG39G4twQ',
    label: 'Watch why Obsession',
    title: 'Why Obsession: send an AI customer to any company',
    file: { src: '/film/why-obsession-v2.mp4', poster: '/film/why-obsession-v2.jpg', width: 960, height: 540 },
  },

  /* The share image's card (scripts/og.mjs): what AI customers caught inside 3 companies this month, the gap section's
     catches (a broken checkout, a dead code, a leaked code, a rival's price cut) at Company 1, 2 and 3. */
  shareFindings: {
    title: 'Your AI customers caught',
    aside: 'This month',
    rows: [
      { company: 'Company 1', finding: 'The checkout broke mid campaign', when: 'Day 3' },
      { company: 'Company 2', finding: 'The promo code stopped working', when: 'Day 9' },
      { company: 'Company 3', finding: 'Price cut from £24 to £19', when: 'Day 21' },
      { company: 'Company 1', finding: 'A private code on a coupon site', when: 'Day 30' },
    ],
    foot: 'Each one with proof',
  },

  /* The gap section ("Other tools read what a company says. AI customers see what it does.", 2 lists) folded into the
     comparison on 4 Nov: both made 1 argument with 2 "Other tools" headings. Its heading and its catches moved there
     (stopTrack); its "What other tools see" list is what the track's lines already show. */

  /* What we found (4 Nov): the study first, so the page shows a result before it explains anything, set as a research
     note, apart from what a run arrives as (James: the 2 were 1 sentence, and the study is not a format). The figures are
     the use case pages' real ones (content/usecases/leak-checks-for-retention-agencies.ts, `found`): a leak at 93% of
     the stores shopped on every journey, 77% of those leaks silence, 128 stores joined so far. */
  finding: {
    kicker: 'What we found',
    value: '93%',
    heading: 'of the stores where our AI customers ran every journey had a leak.',
    also: { value: '77%', text: 'of those leaks were silence: an email that never came.' },
    source: 'Source: our own runs at real stores, 128 joined so far.',
    cta: { label: 'See one of our runs and its results', to: '/sample-output' },
  },

  /* The shared block, with its line on Home in the heading's own numbers (5 or 5,000 beside 10,000) and without the
     spare inbox, which the comparison's By hand row already names. */
  life: {
    ...life,
    kicker: 'How it works',
    line: 'Name 5 companies or 10,000: each gets its own AI customer, which stays for months, so every break, leak, price cut and new offer reaches you the day it happens.',
  },

  /* The Kinds section ("Send an AI customer anywhere. A rival, a prospect, or your own company.", 4 cards over their
     filmed screens) was cut on 4 Nov: at 1,713px it was the page's longest section and named the places the hero, the
     readers and the ask section already name. Its heading and its 13 recipe links moved into the readers band (option 5
     of obsession/targets-options.html, legacy/james/content/band.ts). components/v5/Targets stays in place. */

  /* The scale section ("Learn it once. Run it for 1 company, 1,000 or 100,000.") was cut on 4 Nov: it explained a
     mechanism with modelled numbers instead of showing a result. A measured benchmark may take its place later. */

  /* The ask section (docs/positioning/ask-section.md), above the comparison: the commercial intelligence only a customer
     gets, its 4 areas in a small label above the heading, and 1 question from each reader, each asked somewhere else. It took the place of the 4
     ways in, which /developers keeps. */
  ask: {
    ...askShared,
    kicker: 'Ask from your agent',
    /* Home's line leaves out the list the hero already gives (every email, offer, price and reply). The areas label and
       the Ask from list are gone (4 Nov): the label named the readers band's places again, the list named 7 places. */
    line: 'What a company sends its customers is not on the web, so no AI can search for it. Connect Obsession once to Claude Code or Codex, or ask on our website, and every answer comes with its receipts.',
    from: undefined,
    examples: [askExamples.blackFriday, askExamples.brief, askExamples.watch],
  },

  /* The comparison as 1 journey (4 Nov, option 1 of 5 in obsession/compare-options.html). The full table stays on
     /compare and the reader pages. By hand reaches every step, so its line runs the whole way and thins out: what fails
     is how many companies and for how long, not a step (James, 4 Nov). */
  stopTrack: {
    kicker: 'How it compares',
    heading: 'Other tools read what a company says. AI customers see what it does.',
    line: 'Each line ends where that tool stops seeing. Your AI customers stay to the end, and keep the receipts.',
    steps: ['Ad', 'Page', 'Sign up', 'Emails and texts', 'Checkout', 'Support', 'Month 3'],
    rows: [
      { name: 'Ad libraries', who: 'Foreplay, Meta Ad Library', stop: 1, note: 'Stops at the ad' },
      { name: 'Page monitors', who: 'Visualping', stop: 2, note: 'Stops at the page' },
      { name: 'Your own AI agent', who: 'A browser for one session', stop: 3, note: 'Its session ends before the first email' },
      { name: 'Email archives', who: 'Panoramata, MailCharts, Milled', stop: 4, note: 'Stops at the newsletter, for its own list of brands' },
      { name: 'By hand', who: 'A spare inbox and a spreadsheet', fade: true, note: 'Every step, for a few companies, until someone stops checking' },
      { name: 'Your AI customers', who: 'Obsession', stop: 7, ours: true, note: 'Every step, at every company you name, with the receipt' },
    ],
    catches: {
      label: 'What your AI customers catch',
      items: [
        'The checkout that broke mid campaign',
        'The promo code that stopped working',
        'Your private codes leaking to resellers and coupon sites',
        'A rival’s price cut or new offer',
        'Where a prospect’s journey loses money',
        'What the support bot got wrong',
      ],
    },
    more: { label: 'See the full comparison', to: '/compare' },
  },

  /* How to use it: what a run arrives as (revision 2 of obsession/proof-section-design.html), after how it works. 1
     Obsession run wired to the 6 formats, the chosen format's view beside them. The formats are delivery options, not
     separate reports. Its foot (the 93% and the sample run) moved up into the finding on 4 Nov. */
  runReports: {
    kicker: 'How to use it',
    heading: 'Every run, in the format your team reads.',
    node: { title: 'Obsession run', line: 'Any company, any job' },
    label: 'Arrives as',
  },

  /* The open source section ("An open source runtime for 100,000 AI customers.") left Home on 4 Nov: /developers shows it
     in full, and Home keeps the hero's tag, which links to the code, and 1 question. */

  /* The questions a reader asks before joining. The first answer is meta.answer, word for word. */
  faq: {
    kicker: 'Questions',
    heading: 'Before you join.',
    items: [
      {
        q: 'What is Obsession?',
        a: 'Obsession sends AI customers to any company you name. Each one signs up, buys, talks to support and stays for months, keeping every email, offer, price and reply it gets, with proof. Send them from your own AI agent through MCP or the API, or from our website; the runtime is open source.',
      },
      {
        q: 'What are AI customers?',
        a: `${AI_CUSTOMER.definition} An AI customer works for you, at any company you name. An AI customer service agent is the opposite: it works for a company and answers its customers.`,
        link: { label: 'Read the full guide to AI customers', to: AI_CUSTOMER.path },
      },
      {
        q: 'What will and won’t every AI customer do?',
        a: 'When an AI customer talks to a person, it says it’s an AI; signing up, reading emails and following ads needs no conversation at all. It never uses fake payment details, gets round a CAPTCHA, clicks paid ads at volume or changes a receipt, and 1 email opts any site out.',
        link: { label: 'What every AI customer will and won’t do', to: '/agents' },
      },
      {
        q: 'Is it legal to send an AI customer to a competitor?',
        a: 'Signing up to a newsletter, starting a trial or filling a basket is what any customer can do. Your AI customer does the same, says it’s an AI when it talks to a person, and never uses fake payment details.',
        link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
      },
      {
        q: 'Do I need to connect anything?',
        a: 'No. Name the companies and your AI customers start. Connect Clay, Slack or your CRM only if you want what they find to land there.',
      },
      {
        q: 'What do I get back?',
        a: 'Each thing a company did, in 1 sentence, with its receipt: the email, page or price behind it, exactly as it arrived, and when. In your agent, Slack, Clay, your CRM, a sheet, a report or a webhook.',
      },
      {
        q: 'How soon do I see something?',
        a: 'Most companies send a welcome email within minutes. If an AI customer is already at a company, its history is there the moment you ask.',
      },
      {
        q: 'Can other customers see what I watch?',
        a: 'No. Anyone can see that a company is covered, and since when, but never who asked. A company’s AI customer is shared for what any customer gets, its emails, pages and prices, so its history is there on day one. Anything you set beyond that, like replying or buying, runs on an AI customer of your own, and your list, questions and reports are yours alone.',
      },
      {
        q: 'How do I get access?',
        a: 'Access opens from the waitlist, a team at a time. Join, and we set up your first watch with you.',
      },
      {
        q: 'Is Obsession open source?',
        a: 'Yes. The runtime is open source on GitHub: the AI customers, how they scale and learn, the record, recipes and the 5 verbs. Obsession Cloud runs it for you, with months of history already collected.',
        link: { label: 'What is open, and what the cloud adds', to: '/developers#open-source' },
      },
    ],
  },

  /* The claim and the form. The agency link ("Agency? Get 5 client stores checked free") went on 4 Nov: beside the
     form's own line (name up to 5 brands to check first) it was a second version of the same offer. Agencies reach
     their page from the readers band. */
  final: {
    heading: 'Name a company. Send it an AI customer.',
    capture: { ...waitlist, source: 'home-final' },
  },
}
