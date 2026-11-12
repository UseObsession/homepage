import type { SamplePage, ViewerFormat } from './types'

/* The Sample output page (/sample-output) and the output viewer. Since 9 Nov it is the sample data Home points to:
   Brand G's whole record from the web behind the login, the 1 real run (a UK skincare store, September 2026, name
   hidden). The 4 shoppers are "test customers", never AI customers; the close is early access, not a free shop.
   State only what happened, from the report itself (public/report, Website/sample-report.html):
   - 4 labelled test customers, 1 inbox each (welcome, browse, basket, checkout); no phone number was used.
   - Every inbox watched for 48 hours. On Tuesday 22 September 2026 the basket was left at 02:57 and the checkout at 03:11
     UK time (the report image says the checkout inbox was seeded at 03:11). When welcome and browse began isn't recorded.
   - Basket: a Body Care Gift Set (£40) left at 02:57 (cart.g3). Checkout: a Deodorant (£21), left before paying at 03:11
     (checkout.g7). Neither inbox got a message in its 48 hours.
   - Welcome: 2 messages, too few to call (No verdict). Browse: 3 messages (Delivered). 5 messages, 15 screenshots.
   There was NO control message and NO second run, and the run is never shown as signed. UK time in September is
   BST, so the webhook window carries +01:00. Every other run or row on the page says it is an example.
   The report images still say "cart"; the site says "basket". "James" in the drafts is a placeholder name.
   The page reads in the order it renders (pages/SampleOutput): the finding > all 4 journeys > the basket gap > the
   checkout gap, which builds on it ("heard nothing either") > every kind of data, as it arrived and as data (12 Nov:
   it replaced the format viewer and its PDF) > the questions > early access. The drafts' words stay as the images show them. */

/* The same run in every format it can arrive in. Home imports this too, and opens it on its own format. */
export const outputFormats: ViewerFormat[] = [
  {
    id: 'pdf',
    label: 'PDF report',
    line: 'A report to forward to anyone: the facts first, then the evidence behind each one.',
    view: {
      kind: 'pdf',
      to: '/sample-output#report',
      pages: [
        {
          src: '/report/page-1.jpg',
          small: '/report/page-1-640.webp',
          alt: 'Page 1 of the report: the 4 journeys and their verdicts, a checkout screenshot and the test customer set up',
          width: 992,
          height: 1404,
        },
        {
          src: '/report/page-2.jpg',
          small: '/report/page-2-640.webp',
          alt: 'Page 2 of the report: nothing followed up the test customer who left at checkout, beside the reminder we drafted',
          width: 992,
          height: 1404,
        },
      ],
    },
  },
  {
    id: 'email',
    label: 'Email',
    line: 'Each new fact the moment it lands, or 1 digest on the schedule you set.',
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
      button: 'Open the evidence',
    },
  },
  {
    id: 'slack',
    label: 'Slack',
    line: 'A message in the channel you choose, with the fact and a link to its evidence.',
    view: {
      kind: 'slack',
      channel: '#store-checks',
      app: 'Obsession',
      time: '02:58',
      title: 'Silent: Brand G, basket journey',
      line: 'No reminder 48 hours after a £40 basket was left.',
      buttons: ['View evidence', 'All journeys'],
    },
  },
  {
    id: 'clay',
    label: 'Sheet or Clay',
    line: 'New columns on the rows you already have: the fact, the day it was seen and its screenshot.',
    view: {
      kind: 'clay',
      cols: ['Company', 'Fact', 'Seen on', 'Screenshot'],
      added: ['Fact', 'Seen on', 'Screenshot'],
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
    label: 'JSON webhook',
    line: 'Every fact as JSON, posted to your endpoint, with its receipt.',
    view: {
      kind: 'webhook',
      request: 'POST https://your-app.example/hooks/obsession',
      body: `{
  "event": "fact.created",
  "company": "brand-g.example",
  "sentence": "A basket left at 02:57 got no reminder in 48 hours.",
  "seen_at": "2026-09-24T02:57:00+01:00",
  "verdict": "silent",
  "receipt": {
    "journey": "basket",
    "messages_in_window": 0,
    "url": "/v1/evidence/run_g3_0922"
  }
}`,
    },
  },
  {
    id: 'workflow',
    label: 'Workflow',
    line: 'A new fact can start anything: the steps you set, then whatever you build next.',
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
    title: 'Sample data: a real store’s record, and 0 basket reminders',
    description:
      'A real UK store’s record, September 2026: 1 basket and 1 checkout left, 0 reminders in 48 hours. Then every kind of data, as it arrived and as rows.',
    answer:
      'Sample data from a real UK skincare store in September 2026: 4 test customers, 1 inbox each, every inbox watched for 48 hours. A £40 basket left at 02:57 and a checkout left at 03:11 got no reminder. Below it, every kind of data Obsession keeps (screens, emails, texts, push, prices, ads, chat, calls and receipts) is shown as it arrived and as the rows an API returns.',
    ogImage: '/og/sample-output.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Sample output', path: '/sample-output' },
    ],
  },

  hero: {
    pill: 'Real record · September 2026 · name hidden',
    headline: 'A £40 basket left at 02:57. 48 hours later, still no reminder.',
    sub: 'Sample data from a real UK skincare store in September 2026: 4 test customers, 1 inbox each, every inbox watched for 48 hours. Below is Brand G’s whole record, then every other kind of data we keep.',
    figures: [
      { value: '4', label: 'test customers, 1 inbox each' },
      { value: '5', label: 'messages, all on welcome and browse' },
      { value: '15', label: 'screenshots kept with the record' },
    ],
    cta: { label: 'Request early access', to: '#get-one' },
  },

  /* Every kind, as it arrived and as data (12 Nov, James). Home's console with the same data, and tabs on top: each tab
     picks a company, who asks, a wall (null is every wall) and the kinds (as the console's events name them), and
     opens Evidence. Prices are facts read off screens, texts and emails, and comparing them is Insights' job, so they
     have no tab of their own. */
  kinds: {
    heading: 'Everything a customer sees, kept as data.',
    line: 'Screens, emails, texts, prices, ads and answers from behind the login. See each one the way it arrived, then as the row your tools get.',
    tabsLabel: 'Kinds of data',
    tabs: [
      { label: 'Screens', company: 'sportswear-brand.example', persona: 'New customer · US', wall: 'Purchase', kinds: ['Page'] },
      { label: 'Emails', company: 'sportswear-brand.example', persona: 'New customer · US', wall: null, kinds: ['Email'] },
      { label: 'Texts', company: 'sim-network.example', persona: 'Leaving customer · UK', wall: null, kinds: ['Text'] },
      { label: 'Push and in-app', company: 'reading-app.example', persona: 'Trial user · UK', wall: 'Device', kinds: ['Push', 'In-app'] },
      { label: 'Ads', company: 'sportswear-brand.example', persona: 'New customer · US', wall: 'Open', kinds: ['Ad'] },
      { label: 'Chat answers', company: 'online-bank.example', persona: 'New saver · UK', wall: null, kinds: ['Chat'] },
      { label: 'Calls', company: 'self-storage.example', persona: 'Renter · UK', wall: 'Call', kinds: ['Call', 'No answer'] },
      { label: 'Post and receipts', company: 'sportswear-brand.example', persona: 'New customer · US', wall: null, kinds: ['Receipt', 'Statement', 'Parcel'] },
      { label: 'Quotes and in store', company: 'self-storage.example', persona: 'Renter · UK', wall: null, kinds: ['Document', 'Display'] },
    ],
    arrivesLabel: 'Arrives in',
    arrives: ['API', 'MCP', 'Clay', 'Google Sheets', 'Webhook', 'Slack'],
  },

  report: {
    heading: 'Welcome and browse got messages. Basket and checkout got none.',
    line: '£61 was left at basket and checkout, and no message asked either customer back.',
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
      heading: 'Nothing followed up a £40 basket left at 02:57.',
      finding: 'No email arrived in the 48 hours after our test customer put a Body Care Gift Set in the basket and left.',
      consent: 'Our test customer subscribed with the marketing box ticked before this journey, so Brand G had permission to write.',
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
      heading: 'The customer who stopped at checkout heard nothing either.',
      finding: 'No email arrived in the 48 hours after our test customer started checkout and left without paying.',
      consent: 'Our test customer subscribed with the marketing box ticked before this journey, so Brand G had permission to write.',
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
        q: 'What does an abandoned cart test report show?',
        a: 'Each journey’s verdict and the evidence behind it. In this one, the basket customer left a £40 gift set at 02:57 and the checkout customer left at 03:11, neither inbox got a reminder in 48 hours, and 15 screenshots were kept.',
      },
      {
        q: 'Is this a real store?',
        a: 'Yes. Obsession recorded a skincare store in September 2026. We hide its name and show the rest as it happened.',
      },
      {
        q: 'Why does silence count as a gap?',
        a: 'Because both journeys completed on the storefront, both test customers had ticked the marketing box, and Obsession watched each inbox for the full 48 hours. Nothing arrived.',
      },
      {
        q: 'Did Obsession buy anything?',
        a: 'No. This run stopped before payment, so the checkout customer left at the last step.',
      },
      {
        q: 'How do I get a record like this for another company?',
        a: 'Look it up. A company already covered returns its history at once. For one that isn’t, click Watch: Obsession signs up as the customer profile and country you pick, keeps the account open, and each email, price and offer joins the record the day it arrives.',
      },
      {
        q: 'Who sees what I look up?',
        a: 'Only you. Anyone can see that a company is covered, and since when, but never who asked.',
      },
    ],
  },

  final: {
    heading: 'Get this record for any company you name.',
    capture: {
      kind: 'waitlist',
      source: 'sample-output-final',
      button: 'Request early access',
      interest: 'any',
    },
  },
}
