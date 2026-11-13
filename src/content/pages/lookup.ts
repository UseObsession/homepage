import type { Capture, ExConsole, Faq, Meta } from '../types'

/* /lookup: a site's entry in the index, looked up by its own domain (pages/Lookup.tsx), told the way a search engine
   would tell it: what the index holds of the site behind the login, not who collected it. One exact domain in, at most
   one entry out: no list, no browsing, no page per brand. The page itself is indexed (Seun, 14 Nov: in the sitemap and llms.txt, with its
   FAQ as FAQPage), and owns "klaviyo email audit" and "klaviyo flow audit" from the customer's side (docs/SEARCH.md §2); the
   entries it sends never are: each opens only from a link in the site owner's inbox.
   The card comes from the Edge Function store-lookup in the obsession-index Supabase project (lib/lookup.ts), which
   records every lookup. A site we haven't indexed gets a plain line and a form for an email, saved by the same
   function, never the waitlist sheet. The example under the box, hollin.example, is the invented store the site already
   uses (content/hollin.ts); its entry is a pinned sample in the function's database. This file is the page's words only; registry.ts keeps it out of the Page glob. */

export type LookupJourney = 'welcome' | 'browse' | 'cart' | 'checkout'
export type LookupStage = 'discover' | 'evaluate' | 'compare' | 'buy'

export type LookupPage = {
  meta: Meta
  pill: string
  headline: string
  sub: string
  /* Under the box (James, 13 Nov): the site's 1,500 line in its exact words; 84 of 170 abandoned checkouts in the
     index's entries with no email in their 48 hours (49%); every email event in the index on 13 Nov (4,196). */
  figures: { value: string; label: string }[]
  /* The hero's picture: the sample store's answers, as an entry shows them. */
  preview: { title: string; tag: string }
  /* Under the hero, for every visitor before any email (Seun and James, 14 Nov): what a new customer got from the
     stores in the index after each step, from the index's totals (content/lookupSample sampleTotals). It leads with the
     drop, never the welcome: most stores send one, and half go quiet after a basket or a checkout. */
  drop: { heading: string; line: string; asOf: string; got: (pct: number) => string; none: (pct: number) => string; close: string; button: string }
  /* A store we haven't indexed (14 Nov): what the owner can check tonight, under the request to add it. */
  selfCheck: { heading: string; line: string; steps: { title: string; line: string }[]; note: string }
  /* An agency can't open a store's entry (it goes only to someone at the store), so it gets early access with the
     agency offer (lib/join offerOf: a source with "agenc" gives 'clients'). James and Seun, 14 Nov. */
  agencies: { link: string; heading: string; line: string; points: string[]; capture: Capture }
  /* The sample store's whole entry, in the same console a found site gets. */
  sample: { heading: string; line: string }
  steps: { heading: string; items: { title: string; line: string }[] }
  /* What an entry covers, as the page promises it: some in every entry, some on request (13 Nov, James: project the
     whole check, not only email gaps). */
  checks: { heading: string; line: string; every: string; request: string; items: { title: string; line: string; every: boolean }[] }
  indexing: { heading: string; line: string; items: { title: string; line: string }[] }
  faq: Faq
  final: { heading: string; line: string; button: string }
  /* Above the closing call: the same data for any company, the other 2 uses, to early access. */
  others: { line: string; link: string; to: string }
  form: {
    label: string
    placeholder: string
    emailLabel: string
    emailPlaceholder: string
    button: string
    busy: string
    opening: string
    help: string
    example: string
    exampleDomain: string
  }
  errors: { domain: string; check: string; limit: string; server: string; email: string; match: (domain: string) => string; link: string }
  sent: { headline: string; line: (email: string, domain: string) => string; note: string }
  /* The console's words for an entry (components/v5/HeroExplorer): Search shows the entry's events. */
  console: Omit<ExConsole, 'companies'>
  entry: {
    indexed: (from: string, to: string) => string
    latest: (day: string) => string
    persona: string
    wall: string
    emails: string
    journeys: Record<LookupJourney, string>
    since: Record<LookupJourney, string>
    after: (wait: string, since: string) => string
    reply: (n: number, hours: number, first: string) => string
    noReply: (hours: number) => string
    faults: { blank_name: string; placeholder: string }
    head: { subject: string; arrived: string; after: string }
    proof: string
    scope: string
  }
  /* Insights: the entry's answers, worked out on the page from its events (pages/Lookup.tsx LookupInsights). */
  insights: {
    every: string
    changes: { heading: string; line: string }
    change: {
      reminder: Record<LookupJourney, string>
      reminderLine: (pct: number, runs: number, wait: string) => string
      blank: string
      placeholder: string
      inEmail: (where: string, subject: string) => string
      fix: Record<LookupJourney, string>
      stage: Record<LookupStage, string>
    }
    where: Record<LookupJourney, string>
    readiness: { heading: string; line: string; stages: Record<LookupStage, string>; verdicts: Record<'pass' | 'slow' | 'stalled', string>; missing: (domain: string) => string; ask: string; stopsAt: (stage: string) => string; passes: string }
    offers: { heading: string; missing: string; until: (day: string) => string; since: (day: string) => string; summary: (codes: number, list: string) => string; none: string }
    emails: { heading: string; summary: (got: number, all: number) => string }
    questions: Record<LookupJourney, string>
    yes: (wait: string) => string
    no: string
    count: (n: number) => string
    first: (subject: string) => string
    left: (items: string) => string
    nothing: (hours: number) => string
    index: (pct: number, runs: number, wait: string) => string
    from: (n: number) => string
    rhythmLabel: string
    rhythm: (sends: number, weeks: number, perWeek: number) => string
    weekly: (perWeek: number) => string
    weekday: (day: string) => string
    languages: (list: string) => string
    latestLabel: string
    note: string
  }
  missing: { headline: (domain: string) => string; line: string; button: string }
  update: { headline: string; line: (domain: string) => string; button: string }
  another: string
  takedown: string
  takedownEmail: string
}

export const lookupPage: LookupPage = {
  meta: {
    path: '/lookup',
    /* Seun, 14 Nov: owns "klaviyo email audit" (autocomplete US and UK, 14 Nov). Every audit on Google page 1 for it reads
       the account from inside; this one shows what a new customer receives, with no login (plan in the Obsession folder,
       _research/seo/lookup-14nov/PLAN.md). */
    title: 'Klaviyo email audit: see what your store sends new customers',
    description:
      'Look up your store’s welcome, basket and checkout emails as a new customer gets them: which arrive, how fast and what’s broken, with no Klaviyo login.',
    answer:
      'The store lookup is a Klaviyo email audit from the customer’s side. It shows what your store actually sends a new customer after a sign-up, a product view, a basket and a checkout, whichever email tool sends it. It needs an email at your own site and no login, and each email in the entry is dated and checked against every store in Obsession’s index of what companies show only to signed-up customers.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Look up your site', path: '/lookup' },
    ],
  },
  pill: 'Store lookup',
  headline: 'See what your store sends a new customer.',
  sub: 'The screens, emails, prices and offers your store shows only to signed-up customers, step by step and dated, set against every store in the index. Type your email at your site and we’ll send you the entry.',
  figures: [
    { value: '1,500', label: 'sign-ups, baskets and checkouts at real companies' },
    { value: '1 in 2', label: 'abandoned checkouts got no reminder within 48 hours' },
    { value: '4,196', label: 'emails kept as they arrived, and counting' },
  ],
  preview: { title: 'hollin.example', tag: 'Sample entry' },
  drop: {
    heading: 'The welcome comes. After a basket or a checkout, nearly 1\u00a0in\u00a02 stores go quiet.',
    line: 'What a new customer got from the stores in the index after each step. Where does your store sit?',
    asOf: 'Every sign-up, product view, basket and checkout in the index, as of 13 Nov 2026.',
    got: (pct) => `${pct}% sent an email`,
    none: (pct) => `${pct}% sent nothing`,
    close: 'Each checkout that gets no reminder is a shopper who typed their email and left. See whether yours get one.',
    button: 'Look up your store',
  },
  selfCheck: {
    heading: 'While you wait, check it yourself tonight',
    line: 'Four steps and about 10 minutes, then the waiting. Use a new email address your store has never seen.',
    steps: [
      { title: 'Sign up', line: 'Through your own pop-up or footer form. Most stores send a welcome within a minute.' },
      { title: 'Look at a product', line: 'Open the store from the welcome email’s link, so it knows who you are, then view a product. Give it a day.' },
      { title: 'Leave a basket', line: 'Add the product and close the tab. Half the reminders that come arrive within about an hour. Give it 24 hours.' },
      { title: 'Start a checkout and leave', line: 'Type the same email at checkout and leave before paying. Give it 48 hours.' },
    ],
    note: 'For each email, note when it came and whether your first name and any code work. Note too which never came.',
  },
  agencies: {
    link: 'At an agency? Look up the stores you run or pitch',
    heading: 'Looking up a client, or a store you’re pitching?',
    line: 'An entry only goes to someone at the store itself. For agencies, early access looks up every store already in the index, and adds up to 5 stores you run or pitch, with the owner’s OK.',
    points: [
      'Every store already in the index, in a table you already use, like Clay or Google Sheets, or through our API and MCP for your own tools and AI agents.',
      'Up to 5 stores added for you: your clients, or the brands you’re pitching.',
      'Every email and screen dated, ready to open a pitch or a client review.',
    ],
    capture: { kind: 'waitlist', source: 'lookup-agencies', button: 'Request early access', interest: 'any' },
  },
  sample: {
    heading: 'A whole entry, for our sample store',
    line: 'This is the entry for hollin.example, our sample store. It opens on what to change first. Below that sit the emails after each step, the offers and the campaigns, each against the index. Search lists every step and every email, with a copy you can open.',
  },
  steps: {
    heading: 'How you get your entry',
    items: [
      { title: 'Type your email at your site', line: 'you@yourstore.com for yourstore.com. The entry only goes to someone at the site it describes.' },
      { title: 'We look your site up', line: 'If it’s in the index, the link leaves at once. If it isn’t, leave your email and we’ll add it.' },
      { title: 'Open the link', line: 'It opens your entry, the page the index keeps for your store: what to change first, every finding with its proof, and every email as it arrived. It works for 7 days.' },
    ],
  },
  checks: {
    heading: 'What an entry checks',
    line: 'What your store shows a signed-up customer, step by step and dated, with each finding next to the change to make.',
    every: 'In every entry',
    request: 'On request',
    items: [
      { title: 'What your store shows behind the login', line: 'Every screen, email and offer your store gave our account after a sign-up, a basket and a checkout, each one dated.', every: true },
      { title: 'What to change first', line: 'Every finding next to the change it asks for, ranked against how many stores in the index already do it.', every: true },
      { title: 'Your emails after each step', line: 'The welcome, product view, basket and checkout emails: whether one comes, how fast, and what’s wrong in it.', every: true },
      { title: 'Your offers', line: 'Every code and discount your emails give a new customer, where it came and when it ended.', every: true },
      { title: 'Your campaigns', line: 'How often your store emails after that, on which days and in which languages.', every: true },
      { title: 'Can an AI shopper buy from you', line: 'An AI agent tries to find, read, compare and buy your products, and the entry shows where it stops.', every: false },
    ],
  },
  indexing: {
    heading: 'How we check a site',
    line: 'Our accounts sign up and shop your store the way a new customer would, then keep what your store shows and sends back.',
    items: [
      { title: 'A new customer’s steps', line: 'Sign up, look at a product, leave a basket, start a checkout. Every screen and email that follows is dated from its step.' },
      { title: 'Kept as it arrived', line: 'Every screen and email, with links, tracking images, and our account’s name and address taken out.' },
      { title: 'Never a real order', line: 'Our accounts stop before payment. Every email in an entry was sent to one of them, never to your customers.' },
      { title: 'An AI shopper, on request', line: 'An AI agent tries to find, read, compare and buy your products, and the entry shows the stage where it stops.' },
    ],
  },
  faq: {
    heading: 'Questions about your entry',
    items: [
      {
        q: 'What is the store lookup?',
        a: 'The store lookup is a Klaviyo email audit from the customer’s side. It shows what your store actually sends a new customer after a sign-up, a product view, a basket and a checkout, whichever email tool sends it, Klaviyo or another. Each email is dated and checked for how fast it came and what’s wrong in it, against every store in the index.',
      },
      {
        q: 'How is it different from a Klaviyo flow audit?',
        a: 'A Klaviyo flow audit reads your flows from inside the account: triggers, filters, delays and revenue. Your entry shows the other side, what a new customer actually receives. A flow that looks live but never sends shows up as a missing email, and a broken first name or a placeholder shows up in the email itself.',
      },
      {
        q: 'Do you need my Klaviyo or Shopify login?',
        a: 'No. Your entry comes from what your store sent our own accounts, so it works whichever email platform you use: Klaviyo, Shopify Email, Omnisend, Mailchimp or another.',
      },
      {
        q: 'How do I test my abandoned cart email myself?',
        a: 'Use a new email address, add an item to the basket, start a checkout and leave, then watch the inbox for the window your flow is set to. Repeat it for the sign-up and the product view, and after every change to your theme, apps or flows.',
        link: { label: 'How to test your Shopify store as a customer', to: '/blog/how-to-test-your-shopify-store-as-a-customer' },
      },
      {
        q: 'I run an agency. Can I look up a client’s store?',
        a: 'Not from this box, because an entry only goes to someone at the store itself. Early access looks up every store already in the index, and adds up to 5 stores you run or pitch, with the owner’s OK.',
        link: { label: 'Obsession for agencies', to: '/agencies' },
      },
      { q: 'Why does it need an email at my site?', a: 'So an entry only goes to someone at the site it describes. The address has to be at the domain you look up, and the link goes to that address.' },
      { q: 'How long does the link work?', a: '7 days. After that, look up your site again and we’ll send a new one.' },
      { q: 'My site isn’t in the index. Can you add it?', a: 'Yes. Look it up, leave your work email, and we’ll add it. You can name your other sites in the same form.' },
      { q: 'Can AI agents buy from my store?', a: 'Ask for the check in the form under your entry. Our agent tries to find, read, compare and buy your products, and your entry shows the stage where it stops and why.' },
      { q: 'Where do the numbers next to each finding come from?', a: 'From every store in the index that took the same step: how many of them do it, and how fast half of them are.' },
      { q: 'Will you place orders on my store?', a: 'No. Our accounts stop before payment and never place an order.' },
      { q: 'Do you see my customers or their data?', a: 'No. Every email in an entry was sent to one of our own accounts. We never see your customers, their orders or their emails.' },
      { q: 'Can I have my entry taken down?', a: 'Yes. Email james@useobsession.com from an address at your site and we’ll remove it from the index.' },
    ],
  },
  final: { heading: 'See your site’s entry', line: 'Type your email at your site and the link comes to your inbox.', button: 'Look up your site' },
  others: { line: 'The same data for any company: watch your competitors, or open a pitch with a prospect’s own emails.', link: 'Request early access', to: '/#join' },
  form: {
    label: 'Your site’s domain',
    placeholder: 'yoursite.com',
    emailLabel: 'Your email, the part before the @',
    emailPlaceholder: 'you',
    button: 'Send me the link',
    busy: 'Looking up your site',
    opening: 'Opening your site’s entry',
    help: 'We email the link to this address. It has to be at your own site.',
    example: 'Example:',
    exampleDomain: 'hollin.example',
  },
  errors: {
    domain: 'Type one domain, like yoursite.com.',
    check: 'The browser check didn’t pass. Try again.',
    limit: 'That’s the most lookups we take in an hour. Try again later.',
    server: 'The lookup didn’t work. Try again in a minute.',
    email: 'Type the start of your email, the part before the @.',
    match: (domain) => `Use an email at ${domain}, so we know the site is yours.`,
    link: 'This link has run out or isn’t complete. Look up your site again for a new one.',
  },
  sent: {
    headline: 'Check your inbox',
    line: (email, domain) => `We’ve sent a link to ${email}. It opens ${domain}’s entry in the index and works for 7 days.`,
    note: 'Not there in a few minutes? Check your spam folder, or look up your site again.',
  },
  console: {
    placeholder: { search: 'yoursite.com' },
    modes: { search: 'Search', insights: 'Insights' },
    buttons: { search: 'Look up' },
    tryLabel: { search: 'Other sites' },
    groups: { persona: 'Persona', wall: 'Wall', kind: 'Kind' },
    tabs: { facts: 'Facts', evidence: 'Evidence', record: 'Record' },
    output: { search: 'Events' },
    hint: '',
    none: 'Nothing here for these choices. Pick another.',
    fromIndex: 'From the index',
    newRun: '',
    notCovered: 'Not in the index yet',
    unindexed: { title: '', line: '', cta: '' },
    said: 'The site’s entry in Obsession’s index. Insights answers 4 questions from its events, one for each step our account took. Search lists the events, what our account did and each email the site sent, with the facts read from it; open one to see its clean copy and its record. Evidence shows the clean copies, one after another.',
    ready: () => '',
  },
  entry: {
    indexed: (from, to) => (from === to ? `indexed ${from}` : `indexed ${from} to ${to}`),
    latest: (day) => `latest email ${day}`,
    persona: 'New customer',
    wall: 'Sign-up',
    emails: 'Emails',
    journeys: {
      welcome: 'Signed up for emails',
      browse: 'Looked at a product',
      cart: 'Left an item in the basket',
      checkout: 'Started a checkout and left',
    },
    since: {
      welcome: 'the sign-up',
      browse: 'the product view',
      cart: 'the basket',
      checkout: 'the checkout',
    },
    after: (wait, since) => `${wait} after ${since}`,
    reply: (n, hours, first) => `${n} in ${hours} hours, the first after ${first}`,
    noReply: (hours) => `None in ${hours} hours`,
    faults: { blank_name: 'Greeting with a blank first name', placeholder: 'A placeholder where words should be' },
    head: { subject: 'Subject', arrived: 'Arrived', after: 'After' },
    proof: 'Clean copy: links and tracking images taken out, and the address it went to.',
    scope: 'This entry holds only what your site sent to our own accounts, with their names and addresses taken out.',
  },
  insights: {
    every: 'Every step',
    changes: { heading: 'What to change first', line: 'Each finding next to the change it asks for, against the index.' },
    change: {
      reminder: {
        welcome: 'Send a welcome email',
        browse: 'Send a product view reminder',
        cart: 'Send a basket reminder',
        checkout: 'Send a checkout reminder',
      },
      reminderLine: (pct, runs, wait) => `${pct}% of ${runs} stores in the index send one${wait ? `, half of those ${wait}` : ''}.`,
      blank: 'Fill in the first name',
      placeholder: 'Fix a placeholder in an email',
      inEmail: (where, subject) => `In the ${where}: “${subject}”`,
      fix: {
        welcome: 'Fix the welcome email',
        browse: 'Fix the product view reminder',
        cart: 'Fix the basket reminder',
        checkout: 'Fix the checkout reminder',
      },
      stage: {
        discover: 'Let AI shoppers find your products',
        evaluate: 'Make sizes and policies readable',
        compare: 'Give AI shoppers what they compare on',
        buy: 'Let an AI shopper reach checkout',
      },
    },
    where: { welcome: 'welcome email', browse: 'product view reminder', cart: 'basket reminder', checkout: 'checkout reminder' },
    readiness: {
      heading: 'Can an AI shopper buy from you?',
      line: 'An AI agent tries to find, read, compare and buy, the way a shopper’s assistant would.',
      stages: { discover: 'Find', evaluate: 'Read', compare: 'Compare', buy: 'Buy' },
      verdicts: { pass: 'Passes', slow: 'Slow', stalled: 'Stops here' },
      missing: (domain) => `Not checked for ${domain} yet. Ask for it and your next entry shows where an AI shopper stops.`,
      ask: 'Ask for the check',
      stopsAt: (stage) => `Stops at ${stage.toLowerCase()}`,
      passes: 'Gets through',
    },
    offers: {
      heading: 'Offers it made',
      missing: 'No code or discount in the emails we hold.',
      until: (day) => `ended ${day}`,
      since: (day) => `from ${day}`,
      summary: (codes, list) => (codes ? `${codes} ${codes === 1 ? 'code' : 'codes'}, ${list}` : list),
      none: 'No codes yet',
    },
    emails: { heading: 'Emails after each step', summary: (got, all) => `${got} of ${all} steps get one` },
    questions: {
      welcome: 'Does a sign-up get a welcome?',
      browse: 'Does a product view get a reminder?',
      cart: 'Does a basket get a reminder?',
      checkout: 'Does a checkout get a reminder?',
    },
    yes: (wait) => `Yes, after ${wait}`,
    no: 'No reminder',
    count: (n) => `${n} ${n === 1 ? 'email' : 'emails'} in all.`,
    first: (subject) => `The first: “${subject}”`,
    left: (items) => `Left in the bag: ${items}.`,
    nothing: (hours) => `Nothing came in the ${hours} hours we watched.`,
    index: (pct, runs, wait) => `Index: ${pct}% of ${runs} stores send one${wait ? `, half of those ${wait}` : ''}`,
    from: (n) => (n === 1 ? 'From 1 event' : `From ${n} events`),
    rhythmLabel: 'Campaign emails',
    rhythm: (sends, weeks, perWeek) => `${sends} ${sends === 1 ? 'email' : 'emails'} in ${weeks} ${weeks === 1 ? 'week' : 'weeks'}, about ${perWeek} a week`,
    weekly: (perWeek) => `About ${perWeek} emails a week`,
    weekday: (day) => `Most often on a ${day}.`,
    languages: (list) => `Written in ${list}.`,
    latestLabel: 'Latest subjects',
    note: 'Each answer is worked out when you look, from the events in Search. The index keeps the events, never the answers.',
  },
  missing: {
    headline: (domain) => `We haven’t indexed ${domain} yet.`,
    line: 'Leave your work email and we’ll add your site to the index.',
    button: 'Add my site',
  },
  update: {
    headline: 'Ask for a fuller check',
    line: (domain) => `Leave your work email and we’ll check ${domain} again, with the AI shopper check and any other sites your company runs.`,
    button: 'Ask for the check',
  },
  another: 'Look up another site',
  takedown: 'Your site, and you want its entry taken down? Email',
  takedownEmail: 'james@useobsession.com',
}
