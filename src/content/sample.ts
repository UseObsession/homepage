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

  /* Every kind, as it arrived and as data (12 Nov, James chose it over 3 other designs): replaces the format viewer and
     its PDF, since Obsession sells the data, not a report. Each tab is one kind of data at one example company, drawn
     the way it arrived, and the same events as the rows an API returns. The side has the homepage's Persona, Wall and
     Kind (labels as Home's explorer shows them); the first persona of each tab holds the example, others have nothing
     yet. Every company is invented, on the reserved .example domain. */
  kinds: {
    heading: 'Everything a customer sees, kept as data.',
    line: 'Screens, emails, texts, prices, ads and answers from behind the login. See each one the way it arrived, then as the row your tools get.',
    ui: {
      tabs: 'Kinds of data',
      seen: 'As it arrived',
      data: 'As data',
      persona: 'Persona',
      hint: 'Change who asks',
      wall: 'Wall',
      kind: 'Kind',
      none: 'Nothing behind this wall for this persona yet. Pick another.',
      cols: ['At', 'Kind', 'What', 'Facts'],
      one: 'One row, as the API returns it',
      arrives: 'Arrives in',
      more: 'More',
    },
    arrives: ['API', 'MCP', 'Clay', 'Google Sheets', 'Webhook', 'Slack'],
    tabs: [
      {
        id: 'screens',
        label: 'Screens',
        company: 'sportswear-brand.example',
        personas: ['New customer · UK', 'New customer · US', 'Member · UK', 'Returning customer · UK'],
        view: {
          t: 'flow',
          title: 'Checkout, left at the payment step',
          meta: 'Thu 5 Nov 2026 · 10:01 to 10:02 · exit country UK',
          actsLabel: 'What our customer did',
          screens: [
            { w: ['Open'], k: 'Screens', at: '10:01:12', name: 'Product page', fact: ['prices', 'Trail Runner 2 · £120'], look: { t: 'screen', url: 'sportswear-brand.example/p/trail-runner-2', brand: 'Sportswear Brand', img: true, title: 'Trail Runner 2', lines: ['£120 · free delivery over £50'], button: 'Add to basket' } },
            { w: ['Purchase'], k: 'Screens', at: '10:01:40', name: 'Basket', fact: ['prices', 'Basket · £120'], look: { t: 'screen', url: 'sportswear-brand.example/basket', brand: 'Sportswear Brand', title: 'Your basket', lines: ['1 item · £120'], fields: ['Trail Runner 2 · UK 9 · £120', 'Promo code'], button: 'Checkout' } },
            { w: ['Purchase'], k: 'Screens', at: '10:02:05', name: 'Checkout', fact: ['form', 'email, name, postcode'], look: { t: 'screen', url: 'sportswear-brand.example/checkout', brand: 'Sportswear Brand', title: 'Delivery details', lines: ['Step 1 of 2'], fields: ['Email', 'Full name', 'Postcode'], button: 'Continue to payment' } },
            { w: ['Purchase'], k: 'Screens', at: '10:02:35', name: 'Pop-up on leaving checkout', fact: ['flow', 'Exit offer · 10% off'], look: { t: 'screen', url: 'sportswear-brand.example/checkout', brand: 'Sportswear Brand', title: 'Payment', lines: ['Step 2 of 2'], fields: ['Card number', 'Expiry'], button: 'Pay £120', popup: { title: 'Wait! Take 10% off before you go.', button: 'Claim 10%' } } },
          ],
          acts: [
            { w: ['Open'], at: '10:01:12', text: 'Viewed a product' },
            { w: ['Purchase'], at: '10:01:38', text: 'Added it to the basket' },
            { w: ['Purchase'], at: '10:02:01', text: 'Began checkout' },
            { w: ['Purchase'], at: '10:02:38', text: 'Left at the payment step' },
          ],
        },
        rows: [
          { w: ['Open'], k: 'Screens', at: '10:01:12', label: 'Screen', what: 'Product page · Trail Runner 2', facts: 'prices: £120' },
          { w: ['Purchase'], k: 'Screens', at: '10:01:40', label: 'Screen', what: 'Basket · 1 item', facts: 'prices: £120' },
          { w: ['Purchase'], k: 'Screens', at: '10:02:05', label: 'Screen', what: 'Checkout · delivery details', facts: 'form: email, name, postcode' },
          { w: ['Purchase'], k: 'Screens', at: '10:02:35', label: 'Screen', what: 'Pop-up on leaving checkout', facts: 'flow: exit offer, 10% off' },
          { w: ['Purchase'], k: '', at: '10:02:38', label: 'Act', what: 'Left at the payment step', facts: '' },
        ],
        record: { kind: 'page', firm: 'sportswear-brand.example', persona: 'New customer · UK', channel: 'web', wall: ['purchase'], at: '2026-11-05T10:02:35Z', ref: 'https://sportswear-brand.example/checkout', fields: { trigger: 'exit intent' }, digest: 'sha256:8a1f…', raw: { screenshot: 'sha256:41b7…', html: 'sha256:c2e0…' }, reads: [{ kind: 'flow', value: { flow: 'exit_offer', purpose: '10% off' }, reader: 'gemini-read@2026-11-09' }] },
      },
      {
        id: 'emails',
        label: 'Emails',
        company: 'sportswear-brand.example',
        personas: ['New customer · UK', 'New customer · US', 'Member · UK'],
        view: {
          t: 'inbox',
          emails: [
            { w: ['Sign-up'], k: 'Emails', at: 'Thu 5 Nov 09:01', responder: 'Klaviyo', subject: 'Welcome! Here’s 10% off', flow: 'welcome', code: 'WELCOME10', head: [['Arrived', 'Sent 09:01:02 · arrived 09:01:05'], ['Checked', 'dkim=pass · spf=pass · dmarc=pass'], ['After', 'Signed up with the footer form, 09:00']], look: { t: 'email', from: 'Sportswear Brand <hello@sportswear-brand.example>', subject: 'Welcome! Here’s 10% off', lines: ['Here’s 10% off your first order. Use it on anything for 14 days.'], button: 'Shop new in' } },
            { w: ['Purchase'], k: 'Emails', at: 'Thu 5 Nov 11:03', responder: 'Klaviyo', subject: 'You left something behind', flow: 'abandoned basket', code: 'none', head: [['Arrived', 'Sent 11:03:17 · arrived 11:03:20'], ['Checked', 'dkim=pass · spf=pass · dmarc=pass'], ['After', 'Left checkout at the payment step, 10:02']], look: { t: 'email', from: 'Sportswear Brand <hello@sportswear-brand.example>', subject: 'You left something behind', lines: ['Your Trail Runner 2 is still in your basket. Sizes go fast.'], button: 'Back to my basket' } },
            { w: ['Purchase'], k: 'Emails', at: 'Fri 6 Nov 10:05', responder: 'Klaviyo', subject: '15% off your basket, 48 hours', flow: 'abandoned basket', code: 'BACK15', head: [['Arrived', 'Sent 10:05:09 · arrived 10:05:12'], ['Checked', 'dkim=pass · spf=pass · dmarc=pass'], ['After', 'Left checkout at the payment step, 5 Nov 10:02']], look: { t: 'email', from: 'Sportswear Brand <hello@sportswear-brand.example>', subject: '15% off your basket, 48 hours', lines: ['Finish your order with BACK15. It ends Sunday at midnight.'], button: 'Use my 15%' } },
            { w: ['Sign-up'], k: 'Emails', at: 'Sun 8 Nov 18:00', responder: 'Klaviyo', subject: 'New in: winter trail', flow: 'campaign', code: 'none', head: [['Arrived', 'Sent 18:00:04 · arrived 18:00:07'], ['Checked', 'dkim=pass · spf=pass · dmarc=pass'], ['After', 'Signed up with the footer form, 5 Nov 09:00']], look: { t: 'email', from: 'Sportswear Brand <hello@sportswear-brand.example>', subject: 'New in: winter trail', lines: ['Waterproof layers and grippier soles for the dark months.'], button: 'See what’s new' } },
          ],
        },
        rows: [
          { w: ['Sign-up'], k: 'Emails', at: '5 Nov 09:01', label: 'Email', what: 'Welcome! Here’s 10% off', facts: 'flow: welcome · Klaviyo' },
          { w: ['Purchase'], k: 'Emails', at: '5 Nov 11:03', label: 'Email', what: 'You left something behind', facts: 'flow: abandoned basket · Klaviyo' },
          { w: ['Purchase'], k: 'Emails', at: '6 Nov 10:05', label: 'Email', what: '15% off your basket, 48 hours', facts: 'flow: abandoned basket · Klaviyo' },
          { w: ['Sign-up'], k: 'Emails', at: '8 Nov 18:00', label: 'Email', what: 'New in: winter trail', facts: 'flow: campaign · Klaviyo' },
        ],
        record: { kind: 'email', firm: 'sportswear-brand.example', persona: 'New customer · UK', channel: 'email', wall: ['purchase'], at: '2026-11-06T10:05:12Z', t_firm: '2026-11-06T10:05:09Z', after: 'leave · 5 Nov 10:02:38', subject: '15% off your basket, 48 hours', fields: { code: 'BACK15' }, auth: 'dkim=pass spf=pass dmarc=pass', digest: 'sha256:51ad…', raw: { mime: 'sha256:9f3c…' }, reads: [{ kind: 'flow', value: { flow: 'abandoned_basket', purpose: '15% off, 48 hours' } }, { kind: 'responder', value: { responder: 'Klaviyo', by: 'dkim' } }] },
      },
      {
        id: 'texts',
        label: 'Texts',
        company: 'sim-network.example',
        personas: ['Leaving customer · UK', 'New customer · UK', 'Leaving customer · IE'],
        view: {
          t: 'thread',
          from: 'SIMNET',
          factsLabel: 'Facts read from each text',
          msgs: [
            { w: ['Cancel'], k: 'Texts', ours: true, at: 'Fri 6 Nov 10:00 · to 75075', text: 'STAC' },
            { w: ['Cancel'], k: 'Texts', at: '10:00', text: 'Your STAC is ST4 829 117. It is valid for 30 days. Your service ends when your new provider switches you. You have no early exit charge.' },
            { w: ['Cancel'], k: 'Texts', at: '10:06', text: 'Before you go: stay with us for 50GB at £6 a month for 12 months. Reply YES by Sunday and keep your number.' },
            { w: ['Cancel'], k: 'Texts', at: '09:12', day: 'Mon 9 Nov', text: 'Last chance: 50GB for £5 a month for 12 months if you stay. Reply YES today.' },
          ],
          facts: [
            { w: ['Cancel'], k: 'Texts', at: '6 Nov 10:00 · Text · after “STAC”', flow: 'switching code · valid 30 days', fields: 'sender SIMNET' },
            { w: ['Cancel'], k: 'Texts', at: '6 Nov 10:06 · Text · after “STAC”', flow: 'offer to stay · 50GB, 12 months', fields: 'price £6 · data 50GB · term 12 months' },
            { w: ['Cancel'], k: 'Texts', at: '9 Nov 09:12 · Text · after “STAC”', flow: 'offer to stay · 50GB, 12 months', fields: 'price £5 · data 50GB · term 12 months' },
          ],
        },
        rows: [
          { w: ['Cancel'], k: '', at: '6 Nov 10:00', label: 'Act', what: 'Texted STAC to 75075', facts: '' },
          { w: ['Cancel'], k: 'Texts', at: '6 Nov 10:00', label: 'Text', what: 'Your STAC is ST4 829 117…', facts: 'flow: switching code' },
          { w: ['Cancel'], k: 'Texts', at: '6 Nov 10:06', label: 'Text', what: 'Before you go: 50GB for £6 a month', facts: 'flow: offer to stay' },
          { w: ['Cancel'], k: 'Texts', at: '9 Nov 09:12', label: 'Text', what: 'Last chance: 50GB for £5 a month', facts: 'flow: offer to stay' },
        ],
        record: { kind: 'sms', firm: 'sim-network.example', persona: 'Leaving customer · UK', channel: 'sms', wall: ['cancel'], at: '2026-11-06T10:06:12Z', after: 'ask · 10:00:00', body: 'Before you go: stay with us for 50GB at £6 a month for 12 months. Reply YES by Sunday and keep your number.', fields: { sender: 'SIMNET', price: '£6', data: '50GB', term: '12 months' }, digest: 'sha256:9c03…', raw: { text: 'sha256:d40b…' }, reads: [{ kind: 'flow', value: { flow: 'retention_offer', purpose: '50GB for £6 a month, 12 months' } }] },
      },
      {
        id: 'push',
        label: 'Push and in-app',
        company: 'reading-app.example',
        personas: ['Trial user · UK', 'Trial user · US', 'Lapsed reader · UK'],
        view: {
          t: 'device',
          day: 'Sunday 8 November',
          app: 'Reading App',
          pushes: [
            { w: ['Device', 'Purchase'], k: 'Push', time: '18:02', title: '40% off your first year ends tonight', body: 'Your trial ends Monday. Keep reading for £47.99 instead of £79.99.' },
            { w: ['Device'], k: 'Push', time: 'Fri 09:00', title: 'Day 5: you’ve read 3 books', body: 'Pick up where you left off.' },
          ],
          inapp: {
            w: ['Device', 'Purchase'],
            k: 'In-app',
            label: 'In-app · shown on opening the app · 8 Nov 18:05',
            look: { t: 'screen', url: 'Reading App · in-app message', brand: 'Reading App', img: true, title: 'Unlock everything', lines: ['40% off your first year: £47.99, then £79.99 a year.'], button: 'Keep my 40%' },
            facts: [['flow', 'trial end offer · 40% off'], ['prices', '£47.99 first year · £79.99 after']],
          },
        },
        rows: [
          { w: ['Device'], k: 'Push', at: '6 Nov 09:00', label: 'Push', what: 'Day 5: you’ve read 3 books', facts: 'flow: engagement' },
          { w: ['Device', 'Purchase'], k: 'Push', at: '8 Nov 18:02', label: 'Push', what: '40% off your first year ends tonight', facts: 'flow: trial end offer' },
          { w: ['Device', 'Purchase'], k: 'In-app', at: '8 Nov 18:05', label: 'In-app', what: 'Unlock everything', facts: 'prices: £47.99, then £79.99' },
        ],
        record: { kind: 'in_app_message', firm: 'reading-app.example', persona: 'Trial user · UK', channel: 'app', wall: ['device', 'purchase'], at: '2026-11-08T18:05:40Z', subject: 'Unlock everything', body: '40% off your first year: £47.99, then £79.99 a year.', digest: 'sha256:7e40…', raw: { screenshot: 'sha256:b1c9…' }, reads: [{ kind: 'prices', value: { items: [{ name: 'First year', price: '£47.99' }, { name: 'Then yearly', price: '£79.99' }] } }] },
      },
      {
        id: 'prices',
        label: 'Prices and offers',
        company: 'sim-network.example',
        personas: ['Customer · UK', 'New customer · UK', 'Leaving customer · UK'],
        view: {
          t: 'prices',
          title: 'Every price sim-network.example showed our customer, 6 to 9 Nov',
          cols: ['Seen', 'Where', 'Wall', 'Plan', 'Price a month'],
          rows: [
            { w: ['Login'], k: 'Screens', at: '6 Nov 09:58', where: 'Account page, signed in', wall: 'Login', plan: '30GB', price: '£10', pct: 100 },
            { w: ['Open'], k: 'Screens', at: '6 Nov 10:05', where: 'Plans page, public', wall: 'Open', plan: '50GB', price: '£8', pct: 80 },
            { w: ['Open'], k: 'Screens', at: '6 Nov 10:05', where: 'Plans page, public', wall: 'Open', plan: '100GB', price: '£10', pct: 100 },
            { w: ['Cancel'], k: 'Texts', at: '6 Nov 10:06', where: 'Text after STAC', wall: 'Cancel', plan: '50GB, 12 months', price: '£6', pct: 60 },
            { w: ['Cancel'], k: 'Texts', at: '9 Nov 09:12', where: 'Text, 3 days later', wall: 'Cancel', plan: '50GB, 12 months', price: '£5', pct: 50 },
          ],
        },
        rows: [
          { w: ['Login'], k: 'Screens', at: '6 Nov 09:58', label: 'Screen', what: 'Account page, signed in', facts: 'prices: 30GB £10' },
          { w: ['Open'], k: 'Screens', at: '6 Nov 10:05', label: 'Screen', what: 'Plans page, public', facts: 'prices: 50GB £8 · 100GB £10' },
          { w: ['Cancel'], k: 'Texts', at: '6 Nov 10:06', label: 'Text', what: 'Text after STAC', facts: 'prices: 50GB £6, 12 months' },
          { w: ['Cancel'], k: 'Texts', at: '9 Nov 09:12', label: 'Text', what: 'Text, 3 days later', facts: 'prices: 50GB £5, 12 months' },
        ],
        record: { kind: 'page', firm: 'sim-network.example', persona: 'Customer · UK', channel: 'web', wall: ['login'], at: '2026-11-06T09:58:03Z', ref: 'https://sim-network.example/account', digest: 'sha256:f2b8…', raw: { screenshot: 'sha256:aa30…', html: 'sha256:1d9e…' }, reads: [{ kind: 'prices', value: { items: [{ name: '30GB', price: '£10 a month' }] } }] },
      },
      {
        id: 'ads',
        label: 'Ads',
        company: 'sportswear-brand.example',
        personas: ['Anyone · public ad library'],
        view: {
          t: 'ads',
          besideLabel: 'Beside it in the record',
          beside: [['Screen', 'Exit pop-up · 10% off · 5 Nov'], ['Email', '15% off your basket, 48 hours · 6 Nov']],
          ads: [
            { w: ['Open'], k: 'Ads', look: { t: 'ad', brand: 'Sportswear Brand', headline: '10% off your first order', since: '28 Oct 2026', where: 'Facebook, Instagram · public ad library', tone: 1 } },
            { w: ['Open'], k: 'Ads', look: { t: 'ad', brand: 'Sportswear Brand', headline: 'Winter trail is here', since: '2 Nov 2026', where: 'Instagram · public ad library', tone: 2 } },
            { w: ['Open'], k: 'Ads', look: { t: 'ad', brand: 'Sportswear Brand', headline: 'Free returns, always', since: '4 Nov 2026', where: 'Facebook · public ad library', tone: 3 } },
          ],
        },
        rows: [
          { w: ['Open'], k: 'Ads', at: '28 Oct', label: 'Ad', what: '10% off your first order', facts: 'prices: 10% off' },
          { w: ['Open'], k: 'Ads', at: '2 Nov', label: 'Ad', what: 'Winter trail is here', facts: 'flow: launch' },
          { w: ['Open'], k: 'Ads', at: '4 Nov', label: 'Ad', what: 'Free returns, always', facts: 'flow: brand' },
        ],
        record: { kind: 'ad', firm: 'sportswear-brand.example', channel: 'web', wall: ['open'], at: '2026-11-05T06:00:00Z', fields: { headline: '10% off your first order', running_since: '2026-10-28', platforms: ['facebook', 'instagram'] }, digest: 'sha256:0d77…', raw: { screenshot: 'sha256:3a41…' }, collector: 'fetcher:ad-library' },
      },
      {
        id: 'chat',
        label: 'Chat answers',
        company: 'online-bank.example',
        personas: ['New saver · UK', 'Joint applicants · UK', 'New saver · IE'],
        view: {
          t: 'chat',
          chat: {
            w: ['Conversation'],
            k: 'Chat',
            look: {
              t: 'chat',
              who: 'Online Bank · Help · Wed 4 Nov 10:24',
              msgs: [
                { ours: true, text: 'Is the Easy Access Saver rate fixed?' },
                { text: 'Yes. The Easy Access Saver pays 4.5% AER, fixed for 12 months.' },
                { ours: true, text: 'Can I take money out at any time?' },
                { text: 'Yes, as often as you like, with no notice.' },
              ],
            },
          },
          page: {
            w: ['Open'],
            k: 'Screens',
            label: 'Same day, the rate page',
            look: { t: 'screen', url: 'online-bank.example/savings', brand: 'Online Bank', title: 'Easy Access Saver', lines: ['4.5% AER (variable)', 'Take money out whenever you like.'], button: 'Apply now' },
            facts: [['Chat', '10:24'], ['Screen', '10:20'], ['prices', '4.5% AER']],
          },
        },
        rows: [
          { w: ['Open'], k: 'Screens', at: '4 Nov 10:20', label: 'Screen', what: 'Savings page', facts: 'prices: 4.5% AER, variable' },
          { w: ['Conversation'], k: '', at: '4 Nov 10:24', label: 'Act', what: 'Asked: is the rate fixed?', facts: '' },
          { w: ['Conversation'], k: 'Chat', at: '4 Nov 10:24', label: 'Chat', what: 'Yes. 4.5% AER, fixed for 12 months.', facts: 'prices: 4.5% AER, fixed' },
        ],
        record: { kind: 'chat_message', firm: 'online-bank.example', persona: 'New saver · UK', channel: 'chat', wall: ['conversation'], at: '2026-11-04T10:24:18Z', after: 'ask · 10:24:05', body: 'Yes. The Easy Access Saver pays 4.5% AER, fixed for 12 months.', digest: 'sha256:c4e2…', raw: { text: 'sha256:19aa…', screenshot: 'sha256:5b02…' }, reads: [{ kind: 'prices', value: { items: [{ name: 'Easy Access Saver', price: '4.5% AER', term: 'fixed 12 months' }] } }] },
      },
      {
        id: 'calls',
        label: 'Calls',
        company: 'self-storage.example',
        personas: ['Renter · UK', 'Business renter · UK'],
        view: {
          t: 'call',
          title: 'Call to self-storage.example, asking for a 50 sq ft unit',
          meta: 'Wed 4 Nov · 14:20 · 3 min 12 s',
          call: {
            w: ['Call'],
            k: 'Calls',
            look: {
              t: 'call',
              length: '3:12',
              lines: [
                { who: 'Store', text: 'Thanks for calling. How can I help?' },
                { who: 'Our caller', text: 'Hi, I’m an AI assistant calling for a customer. How much is a 50 square foot unit?' },
                { who: 'Store', text: 'A 50 square foot unit is £95 a month.', quote: '£95 a month · 50 sq ft' },
                { who: 'Our caller', text: 'Is there an offer on at the moment?' },
                { who: 'Store', text: 'If you book this week, the first month is £1.', quote: '£1 first month · if booked this week' },
              ],
            },
          },
        },
        rows: [
          { w: ['Call'], k: '', at: '4 Nov 14:20', label: 'Act', what: 'Called the store line', facts: '' },
          { w: ['Call'], k: 'Calls', at: '4 Nov 14:20', label: 'Call', what: '3 min 12 s', facts: 'transcript: £95 a month · £1 first month' },
        ],
        record: { kind: 'call_audio', firm: 'self-storage.example', persona: 'Renter · UK', channel: 'voice', wall: ['call'], at: '2026-11-04T14:20:02Z', fields: { duration_s: 192 }, digest: 'sha256:aa18…', raw: { audio: 'sha256:6d3f…' }, reads: [{ kind: 'transcript', value: { quoted: [{ price: '£95', unit: 'month', item: '50 sq ft unit' }, { price: '£1', unit: 'first month', if: 'booked this week' }] } }] },
      },
      {
        id: 'post',
        label: 'Post and receipts',
        company: 'sportswear-brand.example',
        personas: ['Customer · UK', 'Customer · US'],
        view: {
          t: 'post',
          cards: [
            { w: ['Purchase'], k: 'Receipts', caption: '7 Nov 12:14 · Receipt', look: { t: 'doc', title: 'Receipt · order SB-4411', sub: 'Sat 7 Nov 2026', rows: [['Trail Runner 2, UK 9', '£120.00'], ['Code BACK15', '£18.00 off'], ['Delivery', '£0.00'], ['Total', '£102.00']] } },
            { w: ['Purchase'], k: 'Statements', caption: '7 Nov 12:15 · Statement', look: { t: 'record', text: 'Card statement · pending\n7 Nov 2026\nSPORTSWEAR BRAND*SB4411 LONDON   £102.00' } },
            { w: ['Purchase', 'Post'], k: 'Parcels', caption: '10 Nov 09:40 · Parcel · photo of the insert', look: { t: 'photo', caption: 'the insert, 10 Nov', lines: ['Thanks for your order.', '15% off your next one with THANKS15.'] } },
          ],
        },
        rows: [
          { w: ['Purchase'], k: '', at: '7 Nov 12:14', label: 'Act', what: 'Paid with code BACK15', facts: '' },
          { w: ['Purchase'], k: 'Receipts', at: '7 Nov 12:14', label: 'Receipt', what: 'Order SB-4411 · £102.00', facts: 'prices: £120, £18 off' },
          { w: ['Purchase'], k: 'Statements', at: '7 Nov 12:15', label: 'Statement', what: 'SPORTSWEAR BRAND*SB4411', facts: 'prices: £102.00' },
          { w: ['Purchase', 'Post'], k: 'Parcels', at: '10 Nov 09:40', label: 'Parcel', what: 'Insert card', facts: 'flow: next order offer, 15% off' },
        ],
        record: { kind: 'parcel', firm: 'sportswear-brand.example', persona: 'Customer · UK', channel: 'post', wall: ['purchase', 'post'], at: '2026-11-10T09:40:00Z', at_precision: 'hour', after: 'buy · 7 Nov 12:14', body: 'Thanks for your order. 15% off your next one with THANKS15.', digest: 'sha256:e1f0…', raw: { photo: 'sha256:72cd…' }, collector: 'partner:london-02', reads: [{ kind: 'flow', value: { flow: 'next_order_offer', purpose: '15% off' } }] },
      },
    ],
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
