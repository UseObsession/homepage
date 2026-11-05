import { consoleHeading } from '../console'
import { AI_CUSTOMER } from '../glossary'
import { look } from '../look'
import { outputFormats } from '../sample'
import { askExamples, askShared, life, openSource } from '../shared5'
import type { Page, ViewerFormat } from '../types'

/* Home (/), the November rewrite (COPY.md, "Copy deck > Home"; docs/copy/ai-customer-voice.md). 1 idea, since 5 Nov
   (James): Obsession is the index of what companies send their customers, and AI customers are how it fills, as
   Googlebot is a piece of Google. Headings and the sub name the index, never a visit (a visit reads as mystery
   shopping); AI customers appear where the page explains how (How does it work, the questions) and on the wall, which
   shows them at work. Until 5 Nov the idea was that Obsession sells an AI customer. Each block answers the question the last one
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

/* Home's code tile (5 Nov): the shared watch example, with a software company and a bank in place of 2 shops. */
const HOME_CODE = `import os
from obsession import Obsession

ob = Obsession(api_key=os.environ["OBSESSION_API_KEY"])

# Add every company on the list to the index
ob.become_customer(["quillon.example", "kittiwake.example"],
                   how="newsletter", shared=True)

# Push each new fact to your webhook as it lands
ob.notify(on="fact.created", destination="https://example.com/hooks/obsession")

for fact in ob.facts("quillon.example", since="30d"):
    print(fact.seen_at, fact.sentence, fact.receipt_url)`

/* Home's format tiles (5 Nov, James: the tiles were all a store's). The PDF stays the real store run; email, Slack,
   Clay, webhook and workflow show the wall's invented companies (Kittiwake Bank's chat, Larkfield's welcome links,
   Quillon's trial offer), and the Clay table keeps Brand G, the real run, as its first row. /sample-output keeps the real
   run on every tile. */
function homeFormats(): ViewerFormat[] {
  const views: Partial<Record<ViewerFormat['id'], ViewerFormat['view']>> = {
    email: {
      kind: 'email',
      from: 'Obsession',
      to: 'you@your-company.example',
      subject: 'Kittiwake Bank: chat called a variable rate fixed',
      tag: 'Wrong answer · Chat',
      timeline: [
        { time: 'Tue 07:04', text: 'Asked in chat: Is the 4.6% rate fixed? Answer: Yes, fixed for 12 months.' },
        { time: 'Tue 07:05', text: 'The Easy Access Saver page says 4.6% variable.' },
      ],
      button: 'Open the proof',
    },
    slack: {
      kind: 'slack',
      channel: '#growth',
      app: 'Obsession',
      time: '09:05',
      title: 'Broken: Larkfield, welcome email',
      line: 'Every link in the welcome email opens staging.larkfield.example, a closed site.',
      buttons: ['View proof', 'All findings'],
    },
    clay: {
      kind: 'clay',
      cols: ['Company', 'Finding', 'Seen on', 'Proof'],
      added: ['Finding', 'Seen on', 'Proof'],
      rows: [
        { cells: ['Brand G', 'No basket reminder', '24 Sep', 'link'], gap: true, example: false },
        { cells: ['Larkfield', 'Dead welcome links', '3 Nov', 'link'], gap: true, example: true },
        { cells: ['Kittiwake Bank', 'Chat: wrong rate', '4 Nov', 'link'], gap: true, example: true },
        { cells: ['Quillon', '40% off, trial only', '5 Nov', 'link'], gap: false, example: true },
      ],
      note: 'Brand G is a real run. The other rows are examples.',
    },
    webhook: {
      kind: 'webhook',
      request: 'POST https://your-app.example/hooks/obsession',
      body: `{
  "event": "fact.created",
  "company": "larkfield.example",
  "sentence": "Every link in the welcome email opens a closed site.",
  "seen_at": "2026-11-03T09:04:00+00:00",
  "verdict": "broken",
  "receipt": {
    "journey": "welcome",
    "url": "https://api.useobsession.com/v1/evidence/run_l1_1103"
  }
}`,
    },
    workflow: {
      kind: 'workflow',
      steps: [
        { k: 'When', v: 'A finding comes in: Broken' },
        { k: 'Only if', v: 'The company is Client A’s' },
        { k: 'Then', v: 'Post to Slack', branch: true },
        { k: 'Then', v: 'Add the finding to the Clay row', branch: true },
        { k: 'Then', v: 'Your own step: open a ticket, draft the fix, brief the team', branch: true, custom: true },
      ],
      note: 'Example workflow on an example finding.',
    },
  }
  /* The Clay tile's line says finding, not gap, since a rival's offer is a finding but not a gap. */
  const lines: Partial<Record<ViewerFormat['id'], string>> = {
    clay: 'New columns on the rows you already have: the finding, the day it was seen and a proof link.',
  }
  return outputFormats.map((f) => ({ ...f, line: lines[f.id] ?? f.line, view: views[f.id] ?? f.view }))
}

const waitlist = {
  kind: 'waitlist',
  button: 'Join the waitlist',
  interest: 'any',
} as const

export const page: Page = {
  meta: {
    path: '/',
    /* The index position (5 Nov). Until then: Obsession: see what any company shows only its customers; Obsession sends
       AI customers to prospects, clients and competitors (description and share line). */
    title: 'Obsession: an index of what companies send their customers',
    description:
      'Obsession indexes what companies send their customers: every email, text, offer, price and answer, and the ones that never came, kept with proof.',
    /* The sentence AI assistants quote: what Obsession is, then how it fills, then how to use it. */
    answer:
      'Obsession is an index of what companies send their customers. Its agents keep accounts open at every company you name and keep every email, text, offer, price and answer, with proof, including what never came. Search it from your own AI agent through MCP or the API, or on our website; the runtime is open source.',
    ogLine: 'What companies send their customers, searchable.',
    ogImage: '/og/home.png',
  },

  hero: {
    pill: 'Open source',
    /* The index, named by where it sits (5 Nov, James: "See what any company shows only its customers." was not enough,
       and the sub's AI customers signing up and shopping read as a mystery shopper). The sub sets it against the
       index everyone knows, then says what is in it. Until then the sub was: Obsession sends AI customers to
       prospects, clients and competitors. They sign up, shop and talk to support, then bring back every email, text,
       offer and reply, plus what broke or never came, with proof. */
    headline: 'The web behind the sign up.',
    sub: 'Search engines index what companies publish. Obsession indexes what they send their customers: every email, text, offer, price and answer, and the ones that never came. For any company you name, kept for months, searchable by your team and your AI agents.',
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
  /* Since 5 Nov 4 kinds of company, as the wall has: a software welcome email, a bank's chat, a shop's price, a trial
     offer. Until then all 4 were a store's (a broken checkout, a dead code, a price cut, a leaked code). */
  shareFindings: {
    title: 'New in the index',
    aside: 'This month',
    rows: [
      { company: 'Company 1', finding: 'Welcome links open a closed site', when: 'Day 3' },
      { company: 'Company 2', finding: 'Chat called a variable rate fixed', when: 'Day 9' },
      { company: 'Company 3', finding: 'Price cut from £24 to £19', when: 'Day 21' },
      { company: 'Company 4', finding: 'A private 40% off for trial users', when: 'Day 30' },
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
     the reader's own search term. The line gives the 10,000 and the months, in place of "No spare inbox, no VA, no
     spreadsheet" (the comparison's By hand row names the spare inbox). The last step files findings, not only a
     receipt, so it leads into Where do the findings go. */
  life: {
    ...life,
    kicker: 'How does it work?',
    /* The scale the lanes draw, as the claim (James, 5 Nov: how an agent sleeps is our saving, not the buyer's value;
       sleep stays only in the open source section). It echoes October's "Be a customer of every company." Until then,
       for a few hours: Each one sleeps until its company makes a move. Before that: A customer of every company on
       your list, for months. */
    /* The scale as 1 act, in the rhythm of Be a customer of 10,000 companies at once (James, 5 Nov evening: that one hit
       harder than What 10,000 companies send their customers, at once, which held it for a few hours), and the act the
       compare heading says every index stops at. Until then: Be a customer of 10,000 companies at once. The line
       names Obsession, not an AI customer (James: soften every AI customer on Home). */
    heading: 'Sign up to 10,000 companies at once.',
    line: 'Name 5 companies or 10,000. Obsession keeps an account open at each, and every email, text, offer, price and answer goes into the index the day it arrives, for as long as you need.',
    /* The lanes show what arrived at 3 kinds of company, not a basket (James, 5 Nov). The reader pages keep the shared
       lanes. */
    list: 'companies.csv · 10,000 companies',
    axis: { ...life.axis, end: 'Day 90: every message from all 10,000, kept' },
    lanes: [
      { name: 'An app', wakes: [{ day: 0.006, label: '09:09 · welcome email' }, { day: 12, label: 'Day 12 · 40% off, trial only' }] },
      { name: 'A bank', wakes: [{ day: 1, label: 'Day 1 · rate 4.6%' }, { day: 30, label: 'Day 30 · rate cut to 4.3%' }] },
      { name: 'A shop', wakes: [{ day: 2, label: 'Day 2 · 10% off' }, { day: 21, label: 'Day 21 · £24 to £19' }, { day: 47, label: 'Day 47 · 30% off' }] },
    ],
    phases: [
      life.phases[0],
      {
        title: 'An account at each',
        line: 'Obsession signs up, starts the trial or opens an account at each one, as you choose, so it starts sending.',
      },
      { title: 'It stays open', line: life.phases[2].line },
      {
        title: 'Into the index',
        line: 'A dead welcome link, a wrong rate in chat, a rival’s price cut: each kept with its proof and its time, ready to search.',
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
    /* What the track shows, as indexes (5 Nov, James: closer to data, with Google and Exa in it). Until then: Every other
       tool stops before the customer does (and before that: Other tools read what a company says. AI customers see
       what it does). Checkout became Offers and prices, so the track is not only a shop's. */
    heading: 'Every index stops at the sign up.',
    line: 'Google and Exa index the pages anyone can open. Ad libraries keep the ads, email archives keep the newsletters. The code at checkout, the answer from support and the reminder after sign up reach only the customer they were meant for, so no index has them. Obsession does.',
    steps: ['Ad', 'Page', 'Sign up', 'Emails and texts', 'Offers and prices', 'Support', 'Month 3'],
    rows: [
      { name: 'Ad libraries', who: 'Foreplay, Meta Ad Library', stop: 1, note: 'Stops at the ad' },
      { name: 'Search indexes', who: 'Google, Exa', stop: 2, note: 'Index the pages anyone can open, up to the sign up' },
      { name: 'Page monitors', who: 'Visualping', stop: 2, note: 'Stops at the page' },
      /* The tools marketing and sales teams already own (Seun's draft, 4 Nov). They collect pages, prices, news and job
         posts; no source describes them signing up for a rival's emails. */
      { name: 'Competitive intelligence', who: 'Klue, Crayon', stop: 2, note: 'Collects what competitors publish, not what they send customers' },
      { name: 'Your own AI agent', who: 'A browser for one session', stop: 3, note: 'Its session ends before the first email' },
      { name: 'Email archives', who: 'Panoramata, MailCharts, Milled', stop: 4, note: 'Stops at the newsletter, for its own list of brands' },
      { name: 'By hand', who: 'A spare inbox and a spreadsheet', fade: true, note: 'Every step, for a few companies, until someone stops checking' },
      { name: 'Obsession', who: 'The index behind the sign up', stop: 7, ours: true, note: 'Every step short of paying, at every company you name, with proof' },
    ],
    /* Until 5 Nov: What only a customer catches, with 6 catches that were mostly a store's. */
    catches: {
      label: 'What no other index holds',
      items: [
        'A welcome email whose links open a closed site',
        'A chat quoting a rate the terms don’t',
        'The promo code that stopped working',
        'A rival’s offer that never reaches its website',
        'The reminder that never came',
        'Support that took 31 hours after promising 24',
      ],
    },
    more: { label: 'See the full comparison', to: '/compare' },
  },

  /* How to use it: what a run arrives as (revision 2 of obsession/proof-section-design.html), after how it works. 1
     Obsession run wired to the 6 formats, the chosen format's view beside them. The formats are delivery options, not
     separate reports. Its foot (the 93% and the sample run) moved up into the finding on 4 Nov. */
  runReports: {
    /* Since 5 Nov evening: how you use the index. Until then: Where do the findings go? */
    kicker: 'How do I use the index?',
    /* Since 5 Nov: the index asked or delivered. Until then: Every finding, wherever your team works. */
    heading: 'Ask the index, or have it come to you.',
    node: { title: 'The index', line: 'Every company you name' },
    label: 'Ways to use it',
    /* The ask section's 2 chat questions as 1 thread in Claude Code, each answer cut to its first 2 lines so the window
       fits the stage every tile shares, and its Ask from list as pills under it. */
    agent: {
      label: 'Asked in your AI agent',
      line: 'None of it is on the web, so no AI can search for it. Connect Obsession once, then ask in plain words.',
      where: 'Claude Code',
      connect: askShared.connect['Claude Code'],
      /* Home's own 2 questions since 5 Nov, a bank's rivals and a software company, from the wall's and the use cases'
         invented companies (Quaystone's rate and chat, Quillon's trial offer). Until then the shared Black Friday and
         Wrenfield questions, both a shop's. */
      thread: [
        {
          q: 'Which of our rivals changed a rate this month, and what did their chat say?',
          a: ['Quaystone raised its easy access rate to 4.75% on Thursday.', 'Its chat kept quoting 4.5% until Friday.'],
          receipts: 'Receipts: 3 rate pages and 2 chat transcripts, linked',
        },
        {
          q: 'Brief me on Quillon before Thursday’s call.',
          a: ['Trial users get 40% off the first year on day 12. Its pricing page shows no offer.', 'Its welcome email came in 3 minutes, but support took 31 hours to answer.'],
          receipts: 'Receipts: 6 emails, 1 page and 1 support thread, linked',
        },
      ],
      from: askShared.from,
    },
    code: {
      label: 'Use from your code',
      line: 'Add every company on your list to the index, and get each new finding at your webhook.',
      file: askExamples.watch.file,
      code: HOME_CODE,
    },
    formats: homeFormats(),
  },

  /* Open source, names only (4 Nov, James: too many descriptions). Each capability's line, and the rest, live on
     /developers. Each cloud line fits 1 line. It left Home and came back the same day (James), under its own question. */
  openSource: {
    ...openSource,
    /* The developer product line under the index (5 Nov evening, James): as Google sells infrastructure through Google
       Cloud and nobody calls Google a cloud company, developers get the customer layer for AI agents, and the company
       is still the index. Of the 5 verbs, lookup, facts, evidence and notify read the index and become_customer fills
       it, so it is 1 product used from 2 sides. Until then: Can I run it myself? Yes. The runtime is open source. (and
       before that: An open source runtime for 100,000 AI customers). */
    kicker: 'Can I build on it?',
    heading: 'Yes. It’s the customer layer for AI agents.',
    line: 'Spin up 1 agent or 1,000, each with its own inbox and browser, or call become a customer over MCP. 4 of its 5 verbs read the index and 1 fills it. The runtime is open source, so you can run it yourself.',
    core: { title: openSource.core.title, items: openSource.core.items.map(({ name }) => ({ name })) },
    /* Since 5 Nov evening the cloud is more than the history: it runs the agents for you, with their inboxes, phone
       numbers and browsers, beside the index. Until then: Obsession Cloud: the history. */
    cloud: {
      title: 'Obsession Cloud: hosted, with the index',
      items: ['The runtime, run for you: 1 agent or 1,000', 'Inboxes, phone numbers and browsers', 'The index, with months of history', 'About 250 integrations', 'Our website and watch planner'],
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
      /* Since 5 Nov the first question is what Obsession is, the index, and AI customers come in as how it fills.
         Until then: What is an AI customer? */
      {
        q: 'What is Obsession?',
        a: `Obsession is an index of what companies send their customers. Search engines stop at the sign up. Obsession keeps accounts open at every company you name, each run by an agent with its own inbox and browser, and keeps every email, text, offer, price and answer, with proof.`,
        link: { label: 'How the agents behind it work', to: AI_CUSTOMER.path },
      },
      {
        q: 'Is this AI mystery shopping?',
        a: 'No. A mystery shopper visits one company once and writes a report. Obsession keeps accounts open at every company you name, for months, and keeps what they send in an index you can search. Checking your own company the way a mystery shopper would is 1 thing you can do with it.',
      },
      {
        q: 'Is it legal to mystery shop a competitor?',
        a: 'Usually, yes. Obsession does only what any customer can, on the pages and forms anyone can use, and says it’s an AI when it talks to a person. Our guide sets out the law in the US, the UK and the EU; it isn’t legal advice.',
        link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
      },
      {
        q: 'How soon do I see something?',
        a: 'If the company is already in the index, its history is there the moment you ask. Otherwise it depends on the job: an alert the moment something arrives or a gap shows up, a report at the times you set, like 4 hours after sign up and again at 48, or a watch that runs for as long as you keep it.',
      },
      {
        q: 'Can anyone else see what I watch?',
        a: 'No. Your list, your questions and your reports are yours alone. Anyone can see that a company is covered, and since when, but never who asked. What a company sends every new subscriber, its emails, pages and prices, goes into the shared index, the same thing anyone gets by signing up, so its history is there on day one. Anything more, like replying to a salesperson or placing an order, runs on an account that works only for you.',
      },
    ],
  },

  /* The claim and the form. The agency link ("Agency? Get 5 client stores checked free") went on 4 Nov: beside the
     form's own line (name up to 5 brands to check first) it was a second version of the same offer. Agencies reach
     their page from the uses band, where each panel links the readers who use it. */
  final: {
    /* Ends on what the index holds (5 Nov). Until then: Name a company. See what its customers see. (and before that:
       Name a company. Send it an AI customer.) */
    heading: 'Name a company. See what it sends its customers.',
    capture: { ...waitlist, source: 'home-final' },
  },
}

