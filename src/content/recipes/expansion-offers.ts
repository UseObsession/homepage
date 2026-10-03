import type { Capture, Recipe } from '../types'

/* Expansion offers (/recipes/expansion-offers). Keep and grow customers. For sales, customer success and SaaS founders.
   Screen: expansion (Your company / Accounts / Expansion: 5 moments this week, each from connected usage or public news;
   Freight broker, 120 seats, £43,200 a year, 113 of 120 seats used, 94% of plan after 90 days of growth; the offer from
   the price book, 25 more seats for £9,000 a year; approved by AM and sent from AM's own thread, Mon 14:02; offer sent,
   order form to sign, PO next; follow up Thu. The others: Dental group 12 new seats, Logistics app a US office, Outdoor
   gear a Series B and its order form signed, Payroll SaaS hiring 12 sales roles, the account Account watch hands over).
   On the page AM is always "your rep": next to a time, "AM" reads as a.m., and nobody outside knows who AM is. The
   rep is the approver on every line too: "your rep's OK", never "your OK".
   Seun approved the recipe on 3 Oct. It upgrades Account watch from a flag to a signed order: Account watch sees the
   growth coming; Expansion offers builds the case, drafts the offer and every reminder, and tracks it to a signed order
   form and a PO.
   Red lines held: existing customers only, never a prospect, a bought list or anyone outside the account's thread; inside
   data only through the tools the customer connects, read only, with consent; public signals read from public pages
   only (news, job boards, the customer's own site), never by contacting the customer's staff; the agent never writes
   to a customer as itself or as a person: every offer, every follow up and every reminder for the order form or the PO
   is drafted in the rep's own thread and goes only after that rep approves the words; offers come from the price book and the discounts approved in
   advance, and anything off it waits for a person; people sign, and the agent never accepts terms; a "no" or a "not
   now" stops it for that account until a new moment and the rep's OK; an open complaint or a falling health score
   holds the offer and flags the account instead.
   Up-to-50 rule: the 1 modelled figure is the example account's ceiling, with its sum in the same line: up to £9,000 a
   year more from 1 account, 25 seats at the £360 a seat it already pays (£43,200 ÷ 120 = £360; 25 × £360 = £9,000),
   21% on its £43,200 (9,000 ÷ 43,200 = 20.8%). No sources, prices of Obsession or real names on the page. The run is
   an example and says so. */

const roles: Capture['roles'] = {
  question: 'What’s your role?',
  options: ['Account management', 'Customer success', 'Sales leader', 'Founder or owner', 'Something else'],
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'expansion',
  slug: 'expansion-offers',
  name: 'Expansion offers',
  group: 'Keep and grow customers',
  line: 'Spots when a customer needs more, builds the case from its own usage and drafts the offer for your rep to send.',
  gets: 'Every customer ready to buy more, the offer drafted on your price book, and the deal tracked to a signed order form.',
  kit: [
    'An agent ID, declared as AI',
    'Usage, billing and CRM, read only',
    'Each customer’s public news, read daily',
    'Your price book, which it can’t change',
    'Drafts in each rep’s own thread',
    'Every moment, offer and OK signed and dated',
  ],

  meta: {
    path: '/recipes/expansion-offers',
    title: 'Expansion offers: sell more to your customers · Obsession',
    description:
      'A declared AI agent spots when a customer needs more, builds the case from its own usage and drafts the offer on your price book. Your rep sends it.',
    answer:
      'Expansion offers finds every customer ready to buy more: a declared AI agent watches each customer’s usage and public news, builds the case from that customer’s own usage and drafts the offer on your price book. Your rep approves and sends it.',
    ogImage: '/og/expansion-offers.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Expansion offers', path: '/recipes/expansion-offers' },
    ],
  },

  hero: {
    headline: 'AI agents that find every customer ready to buy more.',
    sub: 'Expansion offers finds every customer ready to buy more: a declared AI agent watches each customer’s usage and public news, builds the case from that customer’s own usage and drafts the offer on your price book. Your rep approves and sends it.',
    screen: 'expansion',
    capture: {
      kind: 'waitlist',
      source: 'recipe-expansion-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'expansion',
    },
  },

  run: {
    tab: 'Example: a £43,200 account',
    recipe: 'expansion',
    task: 'Watch every customer for the moment it needs more. Build the case from its own usage, draft the offer on our price book for the rep’s OK, and draft each reminder until the order form is signed and the PO lands.',
    targets: 'Your customers, among them a freight broker on 120 seats at £43,200 a year',
    journey: ['Watch usage and public news', 'Build the case from its usage', 'Draft the offer on your price book', 'Send from your rep’s thread after their OK'],
    schedule: 'Every morning, every customer',
    report: 'Each moment in Slack, the deal in your CRM',
    kit: ['Agent ID, declared as AI', 'Usage and CRM, read only', 'Your price book', 'Your rep’s own thread'],
    events: [
      { time: 'Mon 08:00', text: '5 moments this week. Freight broker is using 113 of its 120 seats, 94% of its plan, and has grown every month for 90 days.' },
      { time: 'Mon 08:20', text: 'The case, from its own usage: seats used week by week, and the 90 days of growth behind them.' },
      { time: 'Mon 08:25', text: 'Offer drafted on your price book: 25 more seats for £9,000 a year, the £360 a seat it already pays.' },
      { time: 'Mon 14:02', text: 'Your rep approves the words. The offer goes from their own thread, in their name.' },
      { time: 'Thu 09:00', text: 'No reply yet. A follow up drafted in the same thread waits for your rep’s OK.' },
      { time: 'Fri 11:30', text: 'Their operations lead says yes. The order form goes out for signature after your rep’s OK, and the PO is next.' },
    ],
    finding: 'Freight broker is at 94% of its seats and still growing: 25 more seats for £9,000 a year, on your price book.',
    fix: 'The offer went from your rep’s thread after their OK. Each reminder for the order form and the PO is drafted in the same thread for their OK.',
    ledger: 'Example run. Every moment, case, offer and OK signed and dated.',
  },

  steps: [
    {
      title: 'Watch every customer for the moment',
      line: 'Each morning it reads the usage, billing and CRM you connect, and each customer’s public news: a plan nearly full, new users joining, a new office, a funding round, a hiring push.',
    },
    {
      title: 'Build the case from their own usage',
      line: 'Seats used, growth over 90 days and the teams adding users, from that customer’s own account. Every figure opens its source, so their buyer can check it.',
    },
    {
      title: 'Draft the offer on your price book',
      line: 'Your list price, or a discount you approved in advance, in your rep’s own thread. Anything off the price book waits for you.',
    },
    {
      title: 'Your rep sends it. The agent tracks it to signature.',
      line: 'It goes only after your rep approves the words, and every follow up waits for their OK too. Then the order form goes out for signature, and each reminder for it and the PO waits for the same OK.',
    },
  ],

  checks: [
    {
      group: 'What counts as a moment',
      items: [
        { title: 'A plan nearly full', line: 'Seats, credits or volume close to what the plan allows, from the usage you connect.' },
        { title: 'New users joining', line: 'People signing up to the account on their own, a team at a time.' },
        {
          title: 'Public news',
          line: 'A new office, a funding round or a hiring push, read from public news, job boards and the customer’s own site.',
        },
        { title: 'Health first', line: 'An open complaint or a falling health score holds the offer and flags the account to your team instead.' },
      ],
    },
    {
      group: 'Every offer',
      items: [
        { title: 'The price', line: 'Your list price or a discount approved in advance. It can’t invent a discount or change your terms.' },
        { title: 'The case', line: 'Built from the customer’s own usage, so every figure in the offer can be checked.' },
        { title: 'Who it goes to', line: 'The people already in your rep’s thread or your CRM. Never a list it builds.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Before anything sends', line: 'The offer, every follow up, the order form and every reminder wait for your rep’s OK.' },
        { title: 'At a no', line: 'A “no” or a “not now” stops it for that account until a new moment and your rep’s OK.' },
        { title: 'At signature', line: 'People sign. It tracks the order form and the PO, and never accepts terms.' },
        { title: 'Prospects', line: 'Never. Customers already on your books only.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every offer stays on the record, from the moment to the PO.',
    items: [
      { format: 'Moments, as they land', line: 'Each account, what changed and where it came from, in Slack or email.' },
      { format: 'The case', line: 'A page and a PDF from the customer’s own usage, ready for their buyer.' },
      { format: 'The offer, drafted', line: 'In your rep’s own thread, on your price book, waiting for their OK.' },
      { format: 'Your CRM, kept current', line: 'An expansion deal on the account, with seats, price, stage and next step.' },
      { format: 'Order form and PO', line: 'Sent after your rep’s OK, tracked to signature, and matched to the PO.' },
      { format: 'A weekly note', line: 'Moments found, offers out, orders signed, and anything waiting on you.' },
    ],
  },

  settings: [
    { k: 'Accounts', v: 'Every customer, or the ones you pick' },
    { k: 'Moments', v: 'A plan nearly full, new users, a new office, funding, hiring, or your own' },
    { k: 'Data', v: 'Usage, billing and CRM from the tools you connect, read only' },
    { k: 'Price', v: 'Your price book and the discounts you approve in advance' },
    { k: 'Sends from', v: 'Your rep’s own thread' },
    { k: 'Needs your rep’s OK', v: 'Every offer, follow up, reminder and order form' },
    { k: 'Signing', v: 'Always a person' },
    { k: 'Stops', v: 'At a no, a not now, or an open complaint' },
  ],

  forWho: [
    {
      audience: 'sales',
      line: 'Account managers and customer success see every expansion moment the morning it happens, with the case and the offer drafted.',
    },
    { audience: 'founders', line: 'No account team? Every customer that outgrows its plan gets an offer, and you approve each one.' },
    { audience: 'developers', line: 'Send your own usage events through the API, and get each moment and its drafted offer back by webhook.' },
  ],

  table: {
    heading: 'The agent drafts. Your rep sends. People sign.',
    line: 'Up to £9,000 a year more from the account in the example: 25 more seats at the £360 a seat it already pays, 21% on its £43,200.',
    cols: ['The agent', 'Your rep'],
    rows: [
      { label: 'A moment on an account', values: ['Finds it in usage or public news', 'Sees it the same morning'] },
      { label: 'The case', values: ['Builds it from the customer’s own usage', 'Checks it'] },
      { label: 'The offer', values: ['Drafts it on your price book', 'Approves the words, then it sends from their thread'] },
      { label: 'Anything off the price book', values: ['Never on its own', 'Decides'] },
      { label: 'Each follow up', values: ['Drafts it in the same thread', 'Approves it'] },
      { label: 'Signature', values: ['Sends the order form after your rep’s OK, and tracks it', 'Signs, with their buyer'] },
      { label: 'The PO', values: ['Drafts each reminder in the same thread, and matches the PO to the order', 'Approves each reminder'] },
    ],
  },

  faq: {
    heading: 'Customers only. Nothing goes out without your rep’s OK.',
    items: [
      {
        q: 'Does Expansion offers contact prospects?',
        a: 'No. Expansion offers contacts only customers already on your books, and only the people already in your rep’s thread or your CRM.',
      },
      {
        q: 'Who sends the offer?',
        a: 'Your rep. The Expansion offers agent drafts it in their own thread, and it goes in their name only after they approve the words. Every follow up waits for their OK too.',
      },
      {
        q: 'Can Expansion offers change our prices?',
        a: 'No. Expansion offers uses your list price or a discount you approved in advance. Anything else waits for you.',
      },
      {
        q: 'Where do the moments come from?',
        a: 'Expansion offers reads the usage, billing and CRM you connect, without changing them, and each customer’s public news: funding, new offices and open roles. It never contacts their staff to find out.',
      },
      {
        q: 'What if the customer says no?',
        a: 'Expansion offers stops for that account and logs why. It won’t draft another offer until a new moment and your rep’s OK.',
      },
      {
        q: 'What if the account is unhappy?',
        a: 'Expansion offers holds the offer when an account has an open complaint or a falling health score, and flags the account to your team instead.',
      },
      {
        q: 'Does Expansion offers sign anything?',
        a: 'Never. Expansion offers sends the order form after your rep’s OK, tracks it to signature, and drafts each PO reminder for their OK. People sign.',
      },
      {
        q: 'What’s it worth?',
        a: 'Expansion offers is worth up to £9,000 a year more from the account in the example: 25 more seats at the £360 a seat it already pays, 21% on its £43,200 (£9,000 ÷ £43,200).',
      },
      {
        q: 'How is Expansion offers different from Account watch?',
        a: 'Expansion offers acts on the growth Account watch finds: it builds the case, drafts the offer for your rep and tracks it to a signed order form. Account watch tells you every morning who’s at risk and who’s ready to grow.',
      },
    ],
  },

  final: {
    heading: 'Offer every customer more the week they need it.',
    sub: 'Join the waitlist. Expansion offers comes ready to read your usage, price each offer from your price book and draft it in each rep’s own thread.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-expansion-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'expansion',
    },
  },
}
