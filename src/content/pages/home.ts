import { consoleHeading } from '../console'
import { AI_CUSTOMER } from '../glossary'
import { look } from '../look'
import { askExamples, askShared, life, openSource } from '../shared5'
import type { Page } from '../types'

/* Home (/), the November rewrite (COPY.md, "Copy deck > Home"; docs/copy/ai-customer-voice.md). 1 idea: Obsession
   sells an AI customer. You send one to any company, it does what a real customer does, and it keeps the receipts. Each block answers the question the last one
   leaves open, in this order (Seun's order of 4 Nov evening, from his Home draft: a picture, then proof, then uses,
   then the objection, then how). Every block from 2 to 9 is labelled with the reader's own question, so the labels
   read as the page's argument (COPY.md's reading path):
   1 what it is (the hero: see what any company shows only its customers; the form; the film) >
   2 What does that look like? (a wall of companies, 4 AI customers each, that answers a question, a Clay table or a PDF) >
   3 Is this real? (our own runs as a research note: the store count, the 2 shares, its source, 1 real report) >
   4 What would I use it for? (James's band as 3 uses in the sub's order: prospects, clients, competitors) >
   5 Why can't my tools do this? (where each kind of tool's view ends on 1 journey, and what only a customer catches) >
   6 How does it work? (breadth: a list fans out to 10,000 companies, each lane wakes when its company acts) >
   7 Where do the findings go? (1 run wired to your AI agent, every format and your own code; it took in the ask section) >
   8 Can I run it myself? (the open source runtime beside what Obsession Cloud adds; on a wide screen only) >
   9 What else would I ask? (the questions), then the waitlist.
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
    title: 'Obsession: see what any company shows only its customers',
    description:
      'Obsession sends AI customers to prospects, clients and competitors. They sign up, shop and talk to support, then bring back every email, offer and reply.',
    /* The sentence AI assistants quote: the hero's sub, word for word, then how to use it. */
    answer:
      'Obsession sends AI customers to any company you name. Each one signs up, buys, talks to support and stays for months, keeping every email, offer, price and reply it gets, with proof. Send them from your own AI agent through MCP or the API, or from our website; the runtime is open source.',
    ogLine: 'Obsession sends AI customers to prospects, clients and competitors.',
    ogImage: '/og/home.png',
  },

  hero: {
    pill: 'Open source',
    headline: 'See what any company shows only its customers.',
    sub: 'Obsession sends AI customers to prospects, clients and competitors. They sign up, shop and talk to support, then bring back every email, text, offer and reply, plus what broke or never came, with proof.',
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

  /* What does that look like (5 Nov, James): the wall in content/look.ts, in place of 4 Nov's receipt (rejected: too much
     to read, and the receipt object unclear). Many companies of every kind, so the picture is never only a shop (hero
     goal 3); it shows, it doesn't tell. */
  look,

  /* Is this real (4 Nov evening, Seun's order): our own runs, right after the invented receipt, so the doubt it raises
     is answered at once. Set as a research note, as before. The count leads, because the question is whether it runs at
     all: 1,500 journeys (Seun's draft's 1,500, which James says counts journeys, not stores), at the 376 stores our AI
     customers have joined (James's count, 5 Nov; 128 until then). The 2 shares back it, from the use case pages
     (content/usecases/leak-checks-for-retention-agencies.ts, `found`): a leak at 93% of the stores shopped on every
     journey, 77% of those leaks silence. The rest of Seun's block (the agency pilot, every store letting a customer
     down, nearly half silent after a full basket) is not lifted. */
  finding: {
    kicker: 'Is this real?',
    value: '1,500',
    /* Since 5 Nov the headings below the wall answer their questions without the words AI customer (James: they
       stacked until they said nothing); the wall's heading is the 1 that names them. Until then: journeys our AI
       customers have run at 376 real stores so far. */
    heading: 'journeys run at 376 real stores so far.',
    also: [
      { value: '93%', text: 'of the stores where they ran every journey had a leak.' },
      { value: '77%', text: 'of those leaks were silence: an email that never came.' },
    ],
    source: 'Source: our own runs at real stores.',
    cta: { label: 'See the skincare store’s report', to: '/sample-output' },
  },

  /* The shared block, with Home's own heading, line and last step (4 Nov). The heading is breadth and time, what the
     lanes show, and never a shopper: "An AI customer is a mystery shopper who never goes home" (Seun's draft) made it a
     better mystery shopper, the frame the product exists to leave (James); mystery shopping stays in the questions, as
     the reader's own search term. The line explains the 10,000 by how an agent sleeps, in place of "No spare inbox, no
     VA, no spreadsheet" (the comparison's By hand row names the spare inbox). The last step files findings, not only a
     receipt, so it leads into Where do the findings go. */
  life: {
    ...life,
    kicker: 'How does it work?',
    /* How it can stay for months at 10,000 companies, and why the wall's foot counts who woke (5 Nov). Until then: A
       customer of every company on your list, for months. */
    heading: 'Each one sleeps until its company makes a move.',
    line: 'Name 5 companies or 10,000. Each gets its own AI customer, which sleeps between emails and page checks, so it can stay as long as you need and tell you about every break, leak, price cut and new offer the day it happens.',
    phases: [
      ...life.phases.slice(0, 3),
      {
        title: 'It files its findings',
        line: 'A dead welcome link, a wrong rate in chat, a rival’s price cut: each with its proof, its time and its sender checked.',
      },
    ],
  },

  /* The Kinds section ("Send an AI customer anywhere. A rival, a prospect, or your own company.", 4 cards over their
     filmed screens) was cut on 4 Nov: at 1,713px it was the page's longest section and named the places the hero, the
     readers and the ask section already name. Its heading and its 13 recipe links moved into the readers band (option 5
     of obsession/targets-options.html, legacy/james/content/band.ts). components/v5/Targets stays in place. */

  /* The scale section ("Learn it once. Run it for 1 company, 1,000 or 100,000.") was cut on 4 Nov: it explained a
     mechanism with modelled numbers instead of showing a result. A measured benchmark may take its place later. */

  /* The ask section ("Make your agent see what customers see.", 3 questions taking turns, the Ask from list) folded
     into the run section on 4 Nov (James): asking in your own AI agent is 1 more place the findings go. Its Claude Code
     and Codex questions are 1 thread there, its code example is the Use from your code tile, and its Ask from list sits
     under the thread as pills. The reader pages keep the full section. */

  /* The comparison as 1 journey (4 Nov, option 1 of 5 in obsession/compare-options.html). The full table stays on
     /compare and the reader pages. By hand reaches every step, so its line runs the whole way and thins out: what fails
     is how many companies and for how long, not a step (James, 4 Nov). */
  stopTrack: {
    kicker: 'Why can’t my tools do this?',
    /* What the track shows: every tool's line ends before the journey does (5 Nov). Until then: Other tools read what a
       company says. AI customers see what it does. */
    heading: 'Every other tool stops before the customer does.',
    line: 'The code at checkout, the reminder after a basket, the reply from support: each reaches only the customer it was meant for. Your AI customers stay to the end, and keep the receipts.',
    steps: ['Ad', 'Page', 'Sign up', 'Emails and texts', 'Checkout', 'Support', 'Month 3'],
    rows: [
      { name: 'Ad libraries', who: 'Foreplay, Meta Ad Library', stop: 1, note: 'Stops at the ad' },
      { name: 'Page monitors', who: 'Visualping', stop: 2, note: 'Stops at the page' },
      /* The tools marketing and sales teams already own (Seun's draft, 4 Nov). They collect pages, prices, news and job
         posts; no source describes them signing up for a rival's emails. */
      { name: 'Competitive intelligence', who: 'Klue, Crayon', stop: 2, note: 'Collects what competitors publish, not what they send customers' },
      { name: 'Your own AI agent', who: 'A browser for one session', stop: 3, note: 'Its session ends before the first email' },
      { name: 'Email archives', who: 'Panoramata, MailCharts, Milled', stop: 4, note: 'Stops at the newsletter, for its own list of brands' },
      { name: 'By hand', who: 'A spare inbox and a spreadsheet', fade: true, note: 'Every step, for a few companies, until someone stops checking' },
      { name: 'Your AI customers', who: 'Obsession', stop: 7, ours: true, note: 'Every step short of paying, at every company you name, with the receipt' },
    ],
    catches: {
      label: 'What only a customer catches',
      items: [
        'The checkout that broke mid campaign',
        'The promo code that stopped working',
        'Your private codes leaking to resellers and coupon sites',
        'A competitor’s price cut or new offer',
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
    kicker: 'Where do the findings go?',
    heading: 'Every finding, wherever your team works.',
    node: { title: 'Obsession run', line: 'Any company, any job' },
    label: 'Ways to use it',
    /* The ask section's 2 chat questions as 1 thread in Claude Code, each answer cut to its first 2 lines so the window
       fits the stage every tile shares, and its Ask from list as pills under it. */
    agent: {
      label: 'Asked in your AI agent',
      line: 'None of it is on the web, so no AI can search for it. Connect Obsession once, then ask in plain words.',
      where: 'Claude Code',
      connect: askShared.connect['Claude Code'],
      thread: [askExamples.blackFriday, askExamples.brief].map((x) => ({ ...x, a: x.a.slice(0, 2) })),
      from: askShared.from,
    },
    code: {
      label: 'Use from your code',
      line: 'Send AI customers to every company on your list, and get each new finding at your webhook.',
      file: askExamples.watch.file,
      code: askExamples.watch.code,
    },
  },

  /* Open source, names only (4 Nov, James: too many descriptions). Each capability's line, and the rest, live on
     /developers. Each cloud line fits 1 line. It left Home and came back the same day (James), under its own question. */
  openSource: {
    ...openSource,
    kicker: 'Can I run it myself?',
    /* The question's answer, first (5 Nov). Until then: An open source runtime for 100,000 AI customers. */
    heading: 'Yes. The runtime is open source.',
    line: undefined,
    core: { title: openSource.core.title, items: openSource.core.items.map(({ name }) => ({ name })) },
    cloud: {
      title: openSource.cloud.title,
      items: ['Inboxes, phones and browsers', 'Months of history already kept', 'A shared record from day one', 'About 250 integrations', 'Our website and watch planner'],
    },
  },

  /* The questions a reader asks before joining (4 Nov): Seun's draft of 4 Nov, reworded, in place of Home's own 11, so
     all 5 show and none hide behind a button (his 6th, How much does it cost?, went: James). The first answer opens with meta.answer's first sentence, which
     the page must show (scripts/prerender.mjs). How soon is answered as an AI customer, not a mystery shopper: when it
     reports is the job's setting (James, 4 Nov). */
  faq: {
    kicker: 'What else would I ask?',
    heading: 'Before you join.',
    items: [
      {
        q: 'What is an AI customer?',
        a: `Obsession sends AI customers to any company you name. ${AI_CUSTOMER.definition} It works for you. An AI customer service agent is the opposite: it works for a company and answers its customers.`,
        link: { label: 'Read the full guide to AI customers', to: AI_CUSTOMER.path },
      },
      {
        q: 'Is this AI mystery shopping?',
        a: 'Mystery shopping is 1 job an AI customer does. A mystery shopper visits once; an AI customer stays for months. It also watches competitors and prospects, and tests support bots and phone lines.',
      },
      {
        q: 'Is it legal to mystery shop a competitor?',
        a: 'Usually, yes. An AI customer does only what any customer can, on the pages and forms anyone can use, and says it’s an AI when it talks to a person. Our guide sets out the law in the US, the UK and the EU; it isn’t legal advice.',
        link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
      },
      {
        q: 'How soon do I see something?',
        a: 'It depends on the job you give it. An AI customer can tell you the moment something happens, like a reminder that arrives or a gap it finds; report at the times you set, like 4 hours after it signs up and again at 48; or keep watching for as long as you keep it there. If one is already a customer of that company, its history is there the moment you ask.',
      },
      {
        q: 'Can anyone else see what I watch?',
        a: 'No. Your list, your questions and your reports are yours alone. Anyone can see that a company is covered, and since when, but never who asked. What a company sends every new subscriber, its emails, pages and prices, goes into a shared record, the same thing anyone gets by signing up, so its history is there on day one. Anything more, like replying to a salesperson or placing an order, runs on an AI customer that works only for you.',
      },
    ],
  },

  /* The claim and the form. The agency link ("Agency? Get 5 client stores checked free") went on 4 Nov: beside the
     form's own line (name up to 5 brands to check first) it was a second version of the same offer. Agencies reach
     their page from the uses band, where each panel links the readers who use it. */
  final: {
    /* Ends on the hero's own words (5 Nov). Until then: Name a company. Send it an AI customer. */
    heading: 'Name a company. See what its customers see.',
    capture: { ...waitlist, source: 'home-final' },
  },
}
