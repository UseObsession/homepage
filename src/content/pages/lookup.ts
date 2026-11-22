import { CONTACT_EMAIL } from '../site'
import type { Capture, ExConsole, Faq, Meta } from '../types'

/* /lookup: the store lookup, one blueprint of the toolkit (mystery shopping, /blueprints/mystery-shopper) offered as a
   free lookup (23 Nov 2026, the 21 Nov position): a persona with its own inbox signs up at an online store as a new
   customer, stops before payment and keeps every email, timestamped. The reader gets a report on their own store, looked
   up by its domain (pages/Lookup.tsx). Never "the index", "entry", "record" or "early access" in reader copy; the code
   names (entry, indexing, fromIndex) stay. One exact domain in, at most one report out: no list, no browsing, no page per brand. The page itself is indexed (Seun, 14 Nov: in the sitemap and llms.txt, with its
   FAQ as FAQPage), and owns "klaviyo email audit" ("klaviyo flow audit" stays with /blog/audit-prospect-email-without-klaviyo-login) (docs/SEARCH.md §2); the
   entries it sends never are: each opens only from a link in the site owner's inbox.
   The card comes from the Edge Function store-lookup in the obsession-index Supabase project (lib/lookup.ts), which
   records every lookup. A site we haven't indexed gets a plain line and a form for an email, saved by the same
   function, never the waitlist sheet. The example under the box, hollin.example, is the invented store the site already
   uses (content/hollin.ts); its entry is a pinned sample in the function's database. This file is the page's words only; registry.ts keeps it out of the Page glob. */

export type LookupJourney = 'welcome' | 'browse' | 'cart' | 'checkout'

export type LookupPage = {
  meta: Meta
  pill: string
  headline: string
  sub: string
  /* Under the box (James, 13 Nov): the site's 1,500 line in its exact words; 84 of 170 abandoned checkouts our personas
     ran with no email in their 48 hours (49%); every email they kept by 13 Nov (4,196). */
  figures: { value: string; label: string }[]
  /* The hero's picture: the sample store's answers, as an entry shows them. */
  preview: { title: string; tag: string }
  /* Under the hero, for every visitor before any email (Seun and James, 14 Nov): what a new customer got from the
     stores our personas shopped after each step, from their totals (content/lookupSample sampleTotals). It leads with the
     drop, never the welcome: most stores send one, and half go quiet after a basket or a checkout. */
  drop: { heading: string; line: string; asOf: string; got: (pct: number) => string; none: (pct: number) => string; close: string; button: string }
  /* A store we haven't indexed (14 Nov): what the owner can check tonight, under the request to add it. */
  selfCheck: { heading: string; line: string; steps: { title: string; line: string }[]; note: string }
  /* An agency can't open a store's report (it goes only to someone at the store), so it runs the mystery shopping
     blueprint on the Free plan, then at volume, with each brand's OK (lib/join offerOf: a source with "agenc" gives
     'clients'). James and Seun, 14 Nov; reworded 23 Nov. */
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
  /* Above the closing call: the toolkit and the mystery shopping blueprint this page runs, to the blueprint's page. */
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
  /* Insights: the entry's answers, worked out on the page from its events (pages/Lookup.tsx LookupInsights). The hero's
     picture (EntryPreview) uses `emails`, `offers.summary`, `rhythmLabel`, `weekly`, `weekday` and `languages`. */
  insights: {
    heading: string
    scope: (from: string, to: string) => string
    steps: Record<LookupJourney, string>
    share: (pct: number) => string
    none: string
    inBag: (total: string) => string
    within: (hours: number) => string
    faults: { blank_name: string; placeholder: string }
    campaigns: string
    since: (n: number, day: string) => string
    fixes: string
    change: {
      reminder: Record<LookupJourney, string>
      reminderLine: (pct: number, runs: number, wait: string) => string
      blank: string
      placeholder: string
      fix: Record<LookupJourney, string>
    }
    where: Record<LookupJourney, string>
    offers: { heading: string; missing: string; ended: (day: string) => string; summary: (codes: number, list: string) => string }
    often: (perWeek: number, weekday: string | null | undefined, languages: string) => string
    emails: { heading: string; summary: (got: number, all: number) => string }
    rhythmLabel: string
    weekly: (perWeek: number) => string
    weekday: (day: string) => string
    languages: (list: string) => string
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
      'The store lookup is a Klaviyo email audit from the customer’s side. It shows what your online store actually sends a new customer after a sign-up, a product view, a basket and a checkout, whichever email tool sends it. It runs Obsession’s mystery shopping blueprint, a ready-made job Obsession runs on any store. A persona with its own inbox signs up as a new customer, stops before payment and keeps every email, timestamped and set beside every other store Obsession has shopped. It needs an email at your own site and no login.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Store lookup', path: '/lookup' },
    ],
  },
  pill: 'Store lookup',
  headline: 'See what your online store sends a new customer.',
  sub: 'The store lookup is a Klaviyo email audit from the customer’s side, built on Obsession’s mystery shopping blueprint. A persona, an AI agent with its own inbox, signs up at your store as a new customer and leaves a basket and a checkout before payment. Every email that follows is kept, timestamped and set beside every other store we’ve shopped. Type your email at your site and we’ll send you the report.',
  figures: [
    { value: '1,500', label: 'sign-ups, baskets and checkouts at real companies' },
    { value: '1 in 2', label: 'abandoned checkouts got no reminder within 48 hours' },
    { value: '4,196', label: 'emails kept as they arrived, timestamped, and counting' },
  ],
  preview: { title: 'hollin.example', tag: 'Sample report' },
  drop: {
    heading: 'The welcome comes. After a basket or a checkout, nearly 1\u00a0in\u00a02 stores go quiet.',
    line: 'What a new customer got after each step, across every store our personas have shopped. Where does your store sit?',
    asOf: 'Every sign-up, product view, basket and checkout our personas ran, as of 13 Nov 2026.',
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
    link: 'At an ecommerce agency? Run it on every client and every store you pitch',
    heading: 'Run the same check on every client store, and every store you pitch.',
    line: 'A lookup report goes only to someone at the store itself. If you do email, retention or conversion work for ecommerce brands, use Obsession’s mystery shopping blueprint instead. It’s a ready-made job Obsession runs on every store you name, with each brand’s OK. Try it on the Free plan, then run it on 300 stores or 3,000, every week. We check each agency before we set up access.',
    points: [
      'Win the pitch: open with what the brand’s own store sent a new customer, across a list of 300 brands or 3,000, sorted by what each one’s emails are missing.',
      'Keep the client: the before picture on day one, then a fresh sign-up every week. A flow that stops working shows up in your report that week, with a screenshot of each step.',
      'Grow the account: the gaps outside your current work, such as texts never set up or a checkout that sends nothing, each with the email or screenshot the client can open.',
      'Report where you work: a row per store in Clay or Google Sheets, an alert in Slack, or a PDF per client. Your own tools and AI assistants such as Claude get every event through our API and MCP.',
    ],
    capture: { kind: 'waitlist', source: 'lookup-agencies', button: 'Start free', interest: 'any' },
  },
  sample: {
    heading: 'A full report, for our sample store',
    line: 'This is the report for hollin.example, our sample store. It opens on what to change first, then the emails after each step, the offers and the campaigns, each set beside every store we’ve shopped. Search lists every step and every email, with a copy you can open.',
  },
  steps: {
    heading: 'How you get your report',
    items: [
      { title: 'Type your email at your site', line: 'you@yourstore.com for yourstore.com. The report only goes to someone at the site it describes.' },
      { title: 'We look your store up', line: 'If a persona has already shopped your store, the link leaves at once. If not, leave your email and one signs up as a new customer.' },
      { title: 'Open the link', line: 'It opens your store’s report: what to change first, every finding with its evidence, and every email as it arrived. It works for 7 days.' },
    ],
  },
  checks: {
    heading: 'What your report checks',
    line: 'What your store shows a signed-up customer, step by step and timestamped, with each finding next to the change to make.',
    every: 'In every report',
    request: 'On request',
    items: [
      { title: 'What your store shows a new customer', line: 'Every screen, email and offer your store gave our persona after a sign-up, a basket and a checkout, each one timestamped.', every: true },
      { title: 'What to change first', line: 'Every finding next to the change it asks for, ranked by how many other stores already do it.', every: true },
      { title: 'Your emails after each step', line: 'The welcome, product view, basket and checkout emails: whether one comes, how fast, and what’s wrong in it.', every: true },
      { title: 'Your offers', line: 'Every code and discount your emails give a new customer, where it came and when it ended.', every: true },
      { title: 'Your campaigns', line: 'How often your store emails after that, on which days and in which languages.', every: true },
      { title: 'Can an AI shopper buy from you', line: 'An AI agent tries to find, read, compare and buy your products, and the report shows where it stops.', every: false },
      { title: 'A fresh sign-up every week', line: 'A new account runs every step again each week, so a flow that stops working shows up that week, beside the week it last worked.', every: false },
      { title: 'Prices and stock every morning', line: 'Your prices, stock and delivery promises, and your competitors’, read every morning the way a new customer sees them.', every: false },
      { title: 'Beside the leaders in your category', line: 'Your store next to the biggest names you compete with, the same steps read the same way, so you see what they send that you don’t.', every: false },
    ],
  },
  indexing: {
    heading: 'How a persona shops your store',
    line: 'A persona is an AI agent with its own inbox, phone number and browser. It signs up and shops your store the way a new customer would, then stays subscribed and keeps everything the store shows and sends, day after day. Every store is read the same way, the blueprint is built for millions of stores, and a store our personas have already shopped comes with its history from the first day.',
    items: [
      { title: 'A new customer’s steps', line: 'Sign up, look at a product, leave a basket, start a checkout. Every screen and email that follows is timestamped from its step.' },
      { title: 'Kept as it arrived', line: 'Every screen and email, with links, tracking images, and our persona’s name and address taken out.' },
      { title: 'Never a real order', line: 'Our personas stop before payment. Every email in a report was sent to one of them, never to your customers.' },
      { title: 'An AI shopper, on request', line: 'An AI agent tries to find, read, compare and buy your products, and the report shows the stage where it stops.' },
    ],
  },
  faq: {
    heading: 'Questions about your report',
    items: [
      {
        q: 'What is the store lookup?',
        a: 'The store lookup is a Klaviyo email audit from the customer’s side. It shows what your store actually sends a new customer after a sign-up, a product view, a basket and a checkout, whichever email tool sends it, Klaviyo or another. Each email is timestamped and checked for how fast it came and what’s wrong in it, beside every store Obsession has shopped.',
      },
      {
        q: 'How is it different from a Klaviyo flow audit?',
        a: 'A Klaviyo flow audit reads your flows from inside the account: triggers, filters, delays and revenue. Your report shows the other side, what a new customer actually receives. A flow that looks live but never sends shows up as a missing email, and a broken first name or a placeholder shows up in the email itself.',
      },
      {
        q: 'Do you need my Klaviyo or Shopify login?',
        a: 'No. Your report comes from what your store sent our own personas, so it works whichever email platform you use: Klaviyo, Shopify Email, Omnisend, Mailchimp or another.',
      },
      {
        q: 'How do I test my abandoned cart email myself?',
        a: 'Use a new email address, add an item to the basket, start a checkout and leave, then watch the inbox for the window your flow is set to. Repeat it for the sign-up and the product view, and after every change to your theme, apps or flows.',
        link: { label: 'How to test your Shopify store as a customer', to: '/blog/how-to-test-your-shopify-store-as-a-customer' },
      },
      {
        q: 'I run an ecommerce agency. Can I look up a client’s store?',
        a: 'Not from this box, because a report only goes to someone at the store itself. Agencies run the mystery shopping blueprint on every client and every store they pitch, with the brand’s OK. Try it on the Free plan, then run it on 300 stores or 3,000, every week. We check each agency before we set up access.',
        link: { label: 'Obsession for agencies', to: '/agencies' },
      },
      {
        q: 'How does the store lookup relate to Obsession?',
        a: 'Obsession is the toolkit for AI agents: inboxes, phone numbers and browsers, plus messaging and a sandbox to run code, on one API and one bill. The store lookup runs one of its blueprints, mystery shopping, a ready-made job Obsession runs for teams who don’t write code. Pick it and Obsession shops any store you choose, every week, with results in Slack, a sheet or your CRM.',
        link: { label: 'The mystery shopping blueprint', to: '/blueprints/mystery-shopper' },
      },
      {
        q: 'Can developers run this check from their own code?',
        a: 'Yes. Create a persona with an inbox through the API, SDKs or MCP and send it to any store. Every email reaches your webhook about 50 ms after it lands, and each step lands in your event log. Start on the Free plan, with no credit card.',
        link: { label: 'Obsession for developers', to: '/developers' },
      },
      { q: 'Why does it need an email at my site?', a: 'So a report only goes to someone at the site it describes. The address has to be at the domain you look up, and the link goes to that address.' },
      { q: 'How long does the link work?', a: '7 days. After that, look up your site again and we’ll send a new one.' },
      { q: 'My store hasn’t been shopped yet. Can you add it?', a: 'Yes. Look it up and leave your work email, and a persona signs up as a new customer. You can name your other sites in the same form.' },
      { q: 'Can AI agents buy from my store?', a: 'Ask for the check in the form under your report. Our agent tries to find, read, compare and buy your products, and your report shows the stage where it stops and why.' },
      {
        q: 'When do you call an email missing?',
        a: 'We read each step at 4, 8, 12, 24 and 48 hours, because every store runs its reminders on its own clock. We call an email missing once its window has closed, never before. The persona stays subscribed after that, so your report keeps filling with the store’s campaigns, codes and offers.',
        link: { label: 'When to send abandoned cart emails', to: '/blog/abandoned-cart-email-sequence' },
      },
      { q: 'Where do the numbers next to each finding come from?', a: 'From every store our personas have taken through the same step: how many of them do it, and how fast half of them are.' },
      { q: 'Will you place orders on my store?', a: 'No. Our personas stop before payment and never place an order.' },
      { q: 'Do you see my customers or their data?', a: 'No. Every email in a report was sent to one of our own personas. We never see your customers, their orders or their emails.' },
      { q: 'Can I have my report taken down?', a: `Yes. Email ${CONTACT_EMAIL} from an address at your site and we’ll remove it.` },
    ],
  },
  final: { heading: 'See your store’s report', line: 'Type your email at your site and the link comes to your inbox.', button: 'Look up your store' },
  others: {
    line: 'The store lookup runs one blueprint of Obsession, the toolkit for AI agents. Pick mystery shopping and Obsession shops your store, your competitors’ or every client’s, every week.',
    link: 'See the mystery shopping blueprint',
    to: '/blueprints/mystery-shopper',
  },
  form: {
    label: 'Your site’s domain',
    placeholder: 'yoursite.com',
    emailLabel: 'Your email, the part before the @',
    emailPlaceholder: 'you',
    button: 'Send me the link',
    busy: 'Looking up your site',
    opening: 'Opening your store’s report',
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
    line: (email, domain) => `We’ve sent a link to ${email}. It opens ${domain}’s report and works for 7 days.`,
    note: 'Not there in a few minutes? Check your spam folder, or look up your site again.',
  },
  console: {
    placeholder: { search: 'yoursite.com' },
    modes: { search: 'Search', insights: 'Insights' },
    buttons: { search: 'Look up' },
    tryLabel: { search: 'Other sites' },
    groups: { persona: 'Persona', wall: 'Step', kind: 'Kind' },
    tabs: { facts: 'Facts', evidence: 'Evidence', record: 'Event' },
    output: { search: 'Events' },
    hint: '',
    none: 'Nothing here for these choices. Pick another.',
    fromIndex: 'Already shopped',
    newRun: '',
    notCovered: 'Not shopped yet',
    unindexed: { title: '', line: '', cta: '' },
    said: 'The store’s report from Obsession’s mystery shopping blueprint. Insights answers 4 questions from its events, one for each step the persona took. Search lists the events, what the persona did and each email the store sent, with the facts read from it; open one to see its clean copy and its details. Evidence shows the clean copies, one after another.',
    ready: () => '',
  },
  entry: {
    indexed: (from, to) => (from === to ? `checked ${from}` : `checked ${from} to ${to}`),
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
    scope: 'Your site sent every one of these emails to our own personas. Their names and addresses are taken out.',
  },
  insights: {
    heading: 'What your store sent',
    scope: (from, to) => `As a new customer, ${from} to ${to}`,
    steps: { welcome: 'After the sign-up', browse: 'After a product view', cart: 'After a basket', checkout: 'After a checkout' },
    share: (pct) => `${pct}% of stores send one`,
    none: 'No email',
    inBag: (total) => `${total} left in the bag`,
    within: (hours) => `in ${hours} hours`,
    faults: { blank_name: 'No first name', placeholder: 'Placeholder' },
    campaigns: 'Campaigns',
    since: (n, day) => `${n} since ${day}`,
    fixes: 'Fix first',
    change: {
      reminder: {
        welcome: 'Send a welcome email',
        browse: 'Send a product view reminder',
        cart: 'Send a basket reminder',
        checkout: 'Send a checkout reminder',
      },
      reminderLine: (pct, runs, wait) => `${pct}% of ${runs} stores we’ve shopped send one${wait ? `, half of those ${wait}` : ''}.`,
      blank: 'Add the first name',
      placeholder: 'Fill in the placeholder',
      fix: {
        welcome: 'Fix the welcome email',
        browse: 'Fix the product view reminder',
        cart: 'Fix the basket reminder',
        checkout: 'Fix the checkout reminder',
      },
    },
    where: { welcome: 'welcome email', browse: 'product view reminder', cart: 'basket reminder', checkout: 'checkout reminder' },
    offers: {
      heading: 'Offers',
      missing: 'No code or discount in the emails we hold.',
      ended: (day) => `ended ${day}`,
      summary: (codes, list) => (codes ? `${codes} ${codes === 1 ? 'code' : 'codes'}, ${list}` : list),
    },
    often: (perWeek, weekday, languages) =>
      [perWeek >= 1 ? `About ${Math.round(perWeek)} a week` : `About 1 every ${Math.round(1 / perWeek)} weeks`, weekday && `mostly ${weekday}`, languages && `in ${languages}`]
        .filter(Boolean)
        .join(', '),
    emails: { heading: 'Emails after each step', summary: (got, all) => `${got} of ${all} steps get one` },
    rhythmLabel: 'Campaign emails',
    weekly: (perWeek) => `About ${perWeek} emails a week`,
    weekday: (day) => `Most often on a ${day}.`,
    languages: (list) => `Written in ${list}.`,
  },
  missing: {
    headline: (domain) => `We haven’t shopped ${domain} yet.`,
    line: 'Leave your work email and a persona signs up at your store as a new customer.',
    button: 'Add my store',
  },
  update: {
    headline: 'Ask for a fuller check',
    line: (domain) => `Leave your work email and we’ll check ${domain} again, with the AI shopper check and any other sites your company runs.`,
    button: 'Ask for the check',
  },
  another: 'Look up another site',
  takedown: 'Want your store’s report taken down? Email',
  takedownEmail: CONTACT_EMAIL,
}
