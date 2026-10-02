import type { SamplePage, ViewerFormat } from './types'

/* The Sample output page (/sample-output) and the output viewer, rebuilt from James's report.ts, OutputFormats.tsx and
   SampleOutput.tsx. The 1 real run: the September 2026 store check of a skincare store ("Brand G", name hidden).
   State only what happened, from the report itself (public/report, Website/sample-report.html):
   - 4 labelled test customers, 1 inbox each (welcome, browse, basket, checkout); no phone number was used.
   - Every inbox watched for 48 hours. On Tuesday 22 September 2026 the basket was left at 02:57 and the checkout at 03:11
     UK time (the report image says the checkout inbox was seeded at 03:11). When welcome and browse began isn't recorded.
   - Basket: a Body Care Gift Set (£40) left at 02:57 (cart.g3). Checkout: a Deodorant (£21), left before paying at 03:11
     (checkout.g7). Neither inbox got a message in its 48 hours.
   - Welcome: 2 messages, too few to call (No verdict). Browse: 3 messages (Delivered). 5 messages, 15 screenshots.
   There was NO control message and NO second run, and the run is never shown as signed. UK time in September is
   BST, so the webhook window carries +01:00. Every other run or row on the page says it is an example.
   The report images still say "cart"; the site says "basket". "James" in the drafts is a placeholder name. */

/* The same run in every format it can arrive in. Home imports this too, and opens it on its own format. */
export const outputFormats: ViewerFormat[] = [
  {
    id: 'pdf',
    label: 'PDF report',
    line: 'A report to forward to anyone: the verdicts first, then the proof behind each one.',
    view: {
      kind: 'pdf',
      to: '/sample-output#report',
      pages: [
        {
          src: '/report/page-1.jpg',
          alt: 'Page 1 of the report: the 4 journeys and their verdicts, a checkout screenshot and the test customer set up',
          width: 992,
          height: 1404,
        },
        {
          src: '/report/page-2.jpg',
          alt: 'Page 2 of the report: nothing followed up the shopper who left at checkout, beside the reminder we drafted',
          width: 992,
          height: 1404,
        },
      ],
    },
  },
  {
    id: 'email',
    label: 'Email',
    line: 'An alert the moment a verdict lands, or 1 digest on the schedule you set.',
    view: {
      kind: 'email',
      from: 'Obsession',
      to: 'you@your-company.example',
      subject: 'Brand G: no basket reminder in 48 hours',
      tag: 'Silent · Basket journey',
      timeline: [
        { time: '22 Sep, 02:57', text: 'Left a Body Care Gift Set (£40) in the basket' },
        { time: '24 Sep, 02:57', text: 'Nothing arrived in the 48 hours we watched.' },
      ],
      button: 'Open the proof',
    },
  },
  {
    id: 'slack',
    label: 'Slack',
    line: 'A message in the channel you choose, with the verdict and a link to the proof.',
    view: {
      kind: 'slack',
      channel: '#store-checks',
      app: 'Obsession',
      time: '02:58',
      title: 'Silent: Brand G, basket journey',
      line: 'No reminder 48 hours after a £40 basket was left.',
      buttons: ['View proof', 'All journeys'],
    },
  },
  {
    id: 'clay',
    label: 'Sheet or Clay',
    line: 'New columns on the rows you already have: the gap, the day it was seen and a proof link.',
    view: {
      kind: 'clay',
      cols: ['Company', 'Gap', 'Seen on', 'Proof'],
      added: ['Gap', 'Seen on', 'Proof'],
      rows: [
        { cells: ['Brand G', 'No basket reminder', '24 Sep', 'link'], gap: true, example: false },
        { cells: ['Candle store', 'No gap', '24 Sep', 'link'], gap: false, example: true },
        { cells: ['Pet food store', 'No text after opt in', '25 Sep', 'link'], gap: true, example: true },
        { cells: ['Coffee roaster', 'Checking', '·', '·'], gap: false, example: true },
      ],
      note: 'Brand G is the real run. The other rows are examples.',
    },
  },
  {
    id: 'webhook',
    label: 'Webhook',
    line: 'Every verdict as JSON, posted to your endpoint, with a link to the evidence.',
    view: {
      kind: 'webhook',
      request: 'POST https://your-app.example/hooks/obsession',
      body: `{
  "target": "brand-g.example",
  "journey": "basket",
  "verdict": "silent",
  "window": ["2026-09-22T02:57:00+01:00", "2026-09-24T02:57:00+01:00"],
  "messages_in_window": 0,
  "checks": { "journey_completed": true, "full_window_watched": true },
  "evidence": "https://api.useobsession.com/v1/evidence/run_g3_0922"
}`,
    },
  },
  {
    id: 'workflow',
    label: 'Workflow',
    line: 'A verdict can start anything: the steps you set, then whatever you build next.',
    view: {
      kind: 'workflow',
      steps: [
        { k: 'When', v: 'A verdict comes in: Silent' },
        { k: 'Only if', v: 'The store is Client A’s' },
        { k: 'Then', v: 'Post to Slack', branch: true },
        { k: 'Then', v: 'Add the gap to the Clay row', branch: true },
        { k: 'Then', v: 'Your own step: open a ticket, draft the fix, brief the team', branch: true, custom: true },
      ],
      note: 'Example workflow on the real verdict.',
    },
  },
]

export const sample: SamplePage = {
  meta: {
    path: '/sample-output',
    title: 'Sample output: a real store check with 0 basket reminders',
    description:
      'A real September 2026 check of a skincare store: 4 test customers, 48 hours watched, 2 full baskets left, 0 reminders. As a PDF, email, Slack and more.',
    answer:
      'Obsession’s sample output is a real September 2026 store check: 4 labelled test customers shopped a skincare store, name hidden, and in the 48 hours watched, 2 left full baskets and neither got a reminder. The same run is shown as a PDF report, an email, a Slack message, sheet or Clay columns, a webhook and a workflow.',
    ogImage: '/og/sample-output.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Sample output', path: '/sample-output' },
    ],
  },

  hero: {
    pill: 'Real run · September 2026 · name hidden',
    headline: '2 shoppers left full baskets. Neither heard a thing in 48 hours.',
    sub: 'Obsession’s agents shopped a skincare store as 4 labelled test customers, 1 inbox each, and watched every inbox for 48 hours.',
    figures: [
      { value: '4', label: 'test customers, 1 inbox each' },
      { value: '5', label: 'messages, all on welcome and browse' },
      { value: '15', label: 'screenshots kept as proof' },
    ],
    cta: { label: 'Get one for your store', to: '#get-one' },
  },

  formats: {
    heading: 'The same run, however you work.',
    line: 'The PDF is the real report. The other tabs show its verdict the way you’d get it: email, Slack, Clay or a sheet, your app, or a workflow.',
    start: 'pdf',
  },

  report: {
    heading: 'Welcome and browse got messages. Basket and checkout got none.',
    line: '£61 was left in those 2 baskets, and nothing asked either shopper back.',
    journeys: [
      {
        n: 1,
        name: 'Welcome',
        verdict: 'No verdict',
        line: 'Signed up and waited for the welcome message. 2 messages in 48 hours, too few to call.',
      },
      {
        n: 2,
        name: 'Browse',
        verdict: 'Delivered',
        line: 'Viewed products and left without adding to the basket. 3 messages in 48 hours.',
      },
      {
        n: 3,
        name: 'Basket',
        verdict: 'Silent',
        line: 'Left a Body Care Gift Set (£40) in the basket at 02:57. No reminder in 48 hours.',
      },
      {
        n: 4,
        name: 'Checkout',
        verdict: 'Silent',
        line: 'Began checkout with a Deodorant (£21) and left before paying at 03:11. No reminder in 48 hours.',
      },
    ],
    shot: {
      src: '/report/checkout-capture.png',
      alt: 'The store’s checkout page with the test customer’s inbox address filled in and the marketing box ticked',
      width: 760,
      height: 475,
      caption: 'The checkout session: the test customer’s inbox filled in, the marketing box ticked. 1 of 4 frames it recorded. Payment buttons and product photo blurred.',
    },
    setup: {
      heading: 'Test customer set up',
      tag: 'Verified',
      rows: [
        { k: 'Journeys', v: 'Welcome, browse, basket and checkout' },
        { k: 'Inboxes', v: '4, 1 per journey' },
        { k: 'Basket inbox', v: 'cart.g3@test.useobsession.com', mono: true },
        { k: 'Checkout inbox', v: 'checkout.g7@test.useobsession.com', mono: true },
        { k: 'Basket left', v: 'Tuesday 22 September 2026, 02:57 UK time' },
        { k: 'Checkout left', v: 'Tuesday 22 September 2026, 03:11 UK time' },
        { k: 'Watched', v: '48 hours per inbox, to Thursday 24 September' },
        { k: 'Shopped from', v: 'United Kingdom' },
      ],
    },
    observation: {
      heading: 'What arrived in 48 hours',
      tag: '2 gaps',
      rows: [
        { k: 'Messages', v: '5 in 48 hours, all on welcome and browse' },
        { k: 'Verdict', v: 'Basket: no email. Checkout: no email.' },
      ],
      line: 'No message reached the basket or checkout inbox in its 48 hours, UK time.',
    },
  },

  gaps: [
    {
      n: 1,
      journey: 'Basket',
      heading: 'Nothing followed up a shopper who left a full basket.',
      finding: 'No email arrived in the 48 hours after our test customer put a Body Care Gift Set in the basket and left.',
      consent: 'Our test shopper subscribed with the marketing box ticked before this journey, so Brand G had permission to write.',
      nothing: {
        heading: 'Nothing arrived',
        line: 'We watched cart.g3@test.useobsession.com from 22 Sep 2026, 02:57 to 24 Sep 2026, 02:57 UK time. No message from Brand G reached it.',
      },
      why: 'The storefront capture shows the journey completed, so there was something to answer.',
      basket: {
        label: 'Left in the basket',
        item: 'Body Care Gift Set',
        price: '£40',
        note: 'Read off the storefront during the session, not from the store’s systems.',
      },
      draft: {
        show: 'See the reminder we drafted',
        hide: 'Hide the draft',
        band: 'Draft · written from the evidence · not sent',
        subject: 'James, your Body Care Gift Set is still in your bag',
        image: {
          src: '/report/draft-cart.png',
          alt: 'The reminder we drafted for Brand G, not sent: James, your Body Care Gift Set is still in your bag',
          width: 1200,
          height: 1594,
        },
        text: 'Still in your bag. James, your Body Care Gift Set is still in your bag. You added it late on Monday night and left before checking out. We’ve kept it exactly as you left it. Resume your order. Nothing has been charged. If something made you stop, reply and tell us what it was.',
        note: 'James is a placeholder name. The test customer gave the store none.',
      },
    },
    {
      n: 2,
      journey: 'Checkout',
      heading: 'Nothing followed up a shopper who left at checkout.',
      finding: 'No email arrived in the 48 hours after our test customer started checkout and left without paying.',
      consent: 'Our test shopper subscribed with the marketing box ticked before this journey, so Brand G had permission to write.',
      nothing: {
        heading: 'Nothing arrived',
        line: 'We watched checkout.g7@test.useobsession.com from 22 Sep 2026, 03:11 to 24 Sep 2026, 03:11 UK time. No message from Brand G reached it.',
      },
      why: 'The storefront capture shows the journey completed, so there was something to answer.',
      basket: {
        label: 'Left at checkout',
        item: 'Deodorant',
        price: '£21',
        note: 'Read off the storefront during the session, not from the store’s systems.',
      },
      draft: {
        show: 'See the reminder we drafted',
        hide: 'Hide the draft',
        band: 'Draft · written from the evidence · not sent',
        subject: 'James, you were one step from done',
        image: {
          src: '/report/draft-checkout.png',
          alt: 'The reminder we drafted for Brand G, not sent: James, your order is one step from done',
          width: 1200,
          height: 1644,
        },
        text: 'One step left. James, your order is one step from done. You filled in your details late on Monday night and stopped at payment. The Deodorant is still in your order, and nothing has been charged. Finish your order. If something at payment put you off, reply and tell us. We’d rather fix it than lose the order.',
        note: 'James is a placeholder name. The test customer gave the store none.',
      },
    },
  ],

  faq: {
    heading: 'Nothing was bought. The checkout stopped before payment.',
    items: [
      {
        q: 'Is this a real store?',
        a: 'Yes. A skincare store, checked in September 2026. We hide its name and show the rest as it happened.',
      },
      {
        q: 'Why does silence count as a gap?',
        a: 'Both journeys completed on the storefront, both shoppers had ticked the marketing box, and we watched each inbox for the full 48 hours. Nothing arrived.',
      },
      {
        q: 'Did the test customers buy anything?',
        a: 'No. The checkout shopper stopped before payment. On anyone else’s store, every checkout does.',
      },
      {
        q: 'What would a check of my store include?',
        a: '4 test customers, each a declared AI agent with its own inbox, through welcome, browse, basket and checkout, watched for 48 hours, with every step signed and dated. You get each journey’s verdict, the proof, and a reminder drafted for every gap, within 4 days.',
      },
      {
        q: 'Can I check a client’s store?',
        a: 'Yes, with their OK. Tell us it’s a client’s when you sign up, and we confirm their OK before anything runs.',
      },
    ],
  },

  final: {
    heading: 'See what your shoppers hear after they leave.',
    sub: 'Your first mystery shop is free: 4 test customers, 48 hours watched, the report within 4 days. A store you run, or a client’s with their OK.',
    capture: {
      kind: 'mystery',
      source: 'sample-output-final',
      button: 'Get one for your store',
      placeholder: 'Store address, e.g. your-store.example',
      micro: 'No store? Leave the address blank and you join the waitlist. We keep your email and store address to run the shop, send your report and tell you about Obsession.',
      orWaitlist: true,
      roles: { question: 'Whose store is it?', options: ['Mine', 'A client’s, with their OK'] },
      interest: 'mystery',
    },
  },
}
