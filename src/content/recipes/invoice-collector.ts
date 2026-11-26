import type { Recipe } from '../types'

/* Invoice collector (/blueprints/invoice-collector). Work behind logins. Screen: invoicecollect, drawn for a company
   (Calder Foods, an invented food distributor: 64 vendor portals checked on Monday 7 December, 62 November invoices
   filed by 07:41; the telecoms bill at 2.5 times October's, and 2 vendors yet to post, so 3 need a look). The
   older `invoices` screen is the Get paid page and stays as it is. Wave 2 (23 Nov 2026, _research/seo/blueprints-22nov/
   PLAN.md §3): the job finance teams and bookkeepers already pay people for, logging in to each vendor portal to fetch
   each bill. No competitor or customer is named and no figure is borrowed. Owns "download invoices" from vendor portals
   (Google suggestions, 23 Nov: people search it vendor by vendor, with "invoice retrieval", "receipt collection
   software" and "ap automation software" beside it); "AI agent that chases invoices" stays with the Get paid
   redirect's owner, and "invoice collection software" is left alone because searchers mean debt collection. Logins the
   customer owns only, stops before payment and never pays a bill. */

export const recipe: Recipe = {
  id: 'invoices',
  slug: 'invoice-collector',
  name: 'Invoice collector',
  group: 'Work behind logins',
  line: 'Downloads every new invoice and receipt from your vendor portals each week and files it, with nothing missed.',
  gets: 'Every invoice and receipt in one folder and one sheet each week, with missing invoices and big changes first.',
  kit: [
    'A browser that stays signed in to each vendor portal',
    'One inbox and number for login codes and emailed bills',
    'Your vendor list, from a sheet or your accounting system',
    'Every portal checked each Monday',
    'Each PDF named and filed by month',
    'A dated screenshot of each portal page',
  ],
  build: {
    line: 'Start it with one call, then send each new invoice and its PDF to your own accounts payable code from the event log.',
    code: `await obsession.blueprints.run('invoice-collector', {
  vendors: { sheet: 'Vendor portals' },
  every: 'monday',
})

obsession.on('blueprint.result', async (e) => {
  if (e.data.invoice) await bills.create(e.data.invoice, e.data.pdf)
})`,
    events: [
      { kind: 'page.visited', text: 'Each billing page the browser opens, kept with its screenshot.' },
      { kind: 'email.received', text: 'A bill emailed to the persona’s address, or a login code, with any PDF attached.' },
      { kind: 'sms.received', text: 'A login code sent by text, caught at the persona’s own number.' },
      { kind: 'blueprint.result', text: 'Each new invoice: vendor, number, amount, due date and its PDF.' },
    ],
  },

  meta: {
    path: '/blueprints/invoice-collector',
    title: 'Download invoices from every vendor portal, each week',
    description:
      'Invoice collector downloads invoices from every vendor portal each week with the logins you give it, files each PDF and logs its amount and due date.',
    answer:
      'Invoice collector signs in to each vendor portal with the logins you give it every week and downloads every new invoice and receipt. It files each PDF and adds its vendor, number, amount and due date to a sheet or your accounting system.',
    ogImage: '/og/invoice-collector.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Invoice collector', path: '/blueprints/invoice-collector' },
    ],
  },

  hero: {
    headline: 'Download every invoice from your vendor portals, without logging in to one.',
    sub: 'Invoice collector signs in to each vendor portal with the logins you give it every week and downloads every new invoice and receipt. It files each PDF and adds its vendor, number, amount and due date to a sheet or your accounting system.',
    screen: 'invoicecollect',
    capture: {
      kind: 'waitlist',
      source: 'recipe-invoices-hero',
      button: 'Start free',
      interest: 'invoices',
    },
  },

  buyer: 'For finance and accounts payable teams, and the bookkeeping firms that close the books for clients.',
  unit: 'portal check',
  per: 'vendor portal',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['5 vendor portals, checked once', 'Each new invoice downloaded and named', 'Vendor, number, amount and due date in a sheet'] },
    { name: 'Business', includes: ['Every portal checked each Monday', 'Each PDF filed by month in your folder', 'Each login code caught at the persona’s own inbox or number'] },
    { name: 'Finance team', includes: ['Missing invoices and big changes posted to Slack', 'Each invoice sent to your bills inbox or by webhook', 'Duplicates caught before they reach your books'] },
    { name: 'Bookkeeping firm', includes: ['Each client’s vendors, folders and sheet kept apart', 'Every client’s month on one dashboard'] },
  ],

  run: {
    tab: 'Vendor invoices, every Monday',
    recipe: 'invoices',
    task: 'Every Monday at 07:00, sign in to Calder Foods’ 64 vendor portals with its own logins and download each new invoice. File the PDFs by month, add each one to the invoices sheet and post missing invoices and big changes to #finance.',
    targets: '64 vendor portals, signed in with Calder Foods’ own logins',
    journey: ['Sign in with your logins', 'Open the billing page', 'Download each new invoice', 'File it and add it to the sheet'],
    schedule: 'Every Monday at 07:00',
    report: 'The invoices sheet, the November folder, and #finance in Slack',
    kit: ['1 persona for your vendor logins', '1 inbox and number for codes and emailed bills', '8 browsers at once, kept signed in', 'Your vendor list'],
    events: [
      { time: 'Mon 07:00', text: '8 browsers start on 64 vendor portals. 58 are still signed in from last week.' },
      { time: 'Mon 07:03', text: 'The energy supplier asks for a login code. It reaches the persona’s inbox in 11 seconds.' },
      { time: 'Mon 07:41', text: '62 November invoices downloaded, named by vendor, date and number, and filed in Finance / Invoices / November.' },
      { time: 'Mon 07:42', text: 'The telecoms bill is 2.5 times October’s, and both sit side by side in the sheet.' },
      { time: 'Mon 07:44', text: 'No November invoice yet from the packaging supplier or the cloud host, which usually post by the 2nd.' },
      { time: 'Mon 07:45', text: 'Every invoice is in the sheet, and the 3 that need a look are in #finance.' },
    ],
    finding: '62 invoices filed by 07:45. The telecoms bill was 2.5 times October’s, and 2 vendors hadn’t posted November’s invoice.',
    fix: 'All 3 at the top of the sheet and in #finance, each with its PDF or the portal page that shows nothing posted, before anyone starts month end.',
    ledger: '64 vendor portals checked, 62 PDFs filed, each with the portal page it came from.',
  },

  steps: [
    { title: 'Connect your vendor portals', line: 'Your own logins for each vendor, kept in a browser that stays signed in.' },
    { title: 'Choose where invoices go', line: 'A Google Drive folder, your shared drive, your bills inbox or a webhook, with a sheet beside it.' },
    { title: 'It collects every Monday', line: 'It opens each billing page, downloads each new invoice and reads its vendor, number, amount and due date.' },
    { title: 'Gaps and changes land first', line: 'A missing invoice, a bill 25% above last month’s or a due date close, in Slack or by email.' },
  ],

  checks: [
    {
      group: 'What it collects',
      items: [
        { title: 'Every new invoice', line: 'Each PDF downloaded the week it’s posted, named by vendor, date and number.' },
        { title: 'Receipts and statements', line: 'Card receipts, credit notes and monthly statements, where the portal shows them.' },
        { title: 'The details', line: 'Vendor, invoice number, date, amount, tax and due date, read from each invoice into your sheet.' },
        { title: 'Bills by email', line: 'Invoices vendors email to the persona’s address, filed with the rest.' },
      ],
    },
    {
      group: 'What it flags',
      items: [
        { title: 'Missing invoices', line: 'A vendor that usually bills by now and hasn’t.' },
        { title: 'Amount changes', line: 'A bill more than 25% above last month’s, or the change you set, with both side by side.' },
        { title: 'Due dates', line: 'Invoices due within the days you set, so none runs late.' },
        { title: 'Duplicates', line: 'The same invoice number twice, before it reaches your accounting system.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Payment', line: 'It stops before payment. It never pays a bill or saves a payment card.' },
        { title: 'Your logins', line: 'Only logins your company owns, kept in a browser that stays signed in.' },
        { title: 'Steps for your team', line: 'A portal that needs someone on your team goes to them with the page and its screenshot.' },
        { title: 'Spend', line: 'It works within a monthly spend limit you set on its key.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every invoice in one folder and one sheet, each week.',
    items: [
      { format: 'A folder', line: 'Every PDF in Google Drive or your shared drive, named and filed by month.' },
      { format: 'A sheet', line: 'Vendor, number, date, amount and due date for every invoice.' },
      { format: 'Your accounting system', line: 'Each invoice forwarded to your bills inbox, or sent by webhook.' },
      { format: 'Slack', line: 'Missing invoices and big changes as they’re found.' },
      { format: 'Screenshots', line: 'The portal page each invoice came from, dated, for your auditor.' },
      { format: 'API and MCP', line: 'Ask your own agent for any invoice.' },
    ],
  },

  settings: [
    { k: 'Vendor portals', v: 'Every vendor your team logs in to for a bill, with the logins you give it' },
    { k: 'How often', v: 'Every Monday by default, or on the day each vendor bills' },
    { k: 'Where files go', v: 'A Google Drive folder, your shared drive or your bills inbox' },
    { k: 'What to read', v: 'Vendor, invoice number, date, amount, tax and due date' },
    { k: 'Alerts', v: 'A missing invoice, a bill 25% above last month’s, or a due date within 7 days' },
    { k: 'Login codes', v: 'To the persona’s own inbox or number' },
    { k: 'Where it lands', v: 'A sheet, Slack, your accounting system or a webhook' },
  ],

  table: {
    heading: 'Every vendor portal checked before anyone opens the accounts.',
    cols: ['By hand', 'With Invoice collector'],
    rows: [
      { label: 'Getting invoices', values: ['A login per vendor, a download per bill', 'Every portal checked each Monday'] },
      { label: 'Login codes', values: ['Sent to whoever set up the account', 'Caught at the persona’s own inbox or number'] },
      { label: 'A missing invoice', values: ['Found at month end, or as a late fee', 'Flagged the week it’s due'] },
      { label: 'A bill that jumps', values: ['Paid before anyone compares', 'Shown beside last month’s'] },
      { label: 'Filing', values: ['Renamed and dragged into folders', 'Named, filed and in the sheet'] },
      { label: 'Your auditor asks', values: ['Someone logs in again to find it', 'The PDF and its portal page, dated'] },
    ],
  },

  faq: {
    heading: 'Before it signs in to your first vendor portal.',
    items: [
      {
        q: 'How do we download invoices from every vendor portal without logging in to each one?',
        a: 'Invoice collector signs in to each portal with the logins you give it every week and downloads every new invoice and receipt. It files each PDF and adds each one to a sheet or your accounting system, so nobody on your team has to log in.',
      },
      {
        q: 'Which vendors does it work with?',
        a: 'Any vendor whose portal your team signs in to for a bill: utilities, telecoms, software, carriers, suppliers and cloud hosts. Vendors that email their invoices can send them to the persona’s address instead.',
      },
      {
        q: 'Does it pay the invoices?',
        a: 'No. It stops before payment and never saves or uses a payment card. Paying stays in your accounting system, after your own approval.',
      },
      {
        q: 'Where does it stop?',
        a: 'It signs in only with logins your company owns, works within a monthly spend limit you set on its key, and stops before any payment.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How does it fit our AP automation software?',
        a: 'It does the step before it: getting each invoice out of the vendor’s portal. Each PDF can go to your accounts payable (AP) tool’s email-in address or arrive by webhook, where its approval rules take over.',
      },
      {
        q: 'How do our engineers build on it?',
        a: 'Start it with obsession.blueprints.run and handle each blueprint.result in your own code. Each portal page arrives as page.visited with its screenshot, and each emailed bill as email.received with the PDF attached.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can a bookkeeping firm run it for clients?',
        a: 'Yes, with each client’s logins and agreement. Each client’s vendors, folders and sheet stay apart in your event log, across as many clients and vendor portals as you add.',
      },
      {
        q: 'What should we watch once it runs?',
        a: 'Days to close, missed invoices and late fees. The sheet dates every invoice the week it was collected, so you can see what it does to each.',
      },
      {
        q: 'What does Invoice collector cost?',
        a: 'It’s billed on the pieces it uses, at list rates: browser time for each portal check, plus one inbox and one number for login codes and emailed bills. The days between checks cost nothing.',
        link: { label: 'See browsers for AI agents', to: '/browser' },
      },
    ],
  },

  final: {
    heading: 'Start month end with every invoice already filed.',
    sub: 'Try it on the Free plan with 5 vendor portals.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-invoices-final',
      button: 'Start free',
      interest: 'invoices',
    },
    link: { label: 'More blueprints to work behind logins', to: '/blueprints/work-behind-logins' },
  },
}
