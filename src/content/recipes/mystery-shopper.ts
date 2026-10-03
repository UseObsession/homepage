import type { Recipe } from '../types'

/* Mystery shopper (/recipes/mystery-shopper). James's strongest page with Competitor tracking: his headline, his
   journey checks, his verdicts, his rivals comparison and his FAQ are kept. Fixed: it shows its range (software
   trials and demos, stores, bookings and services), only on the reader's own business or a client's with their OK;
   rivals get the public steps and the site's chat bot only; on anyone else's store every checkout stops before
   payment, and real orders run only on the reader's own store, on a budget they set.
   The run is the 1 real run, the September 2026 store check, stated exactly as the report records it (sample.ts):
   4 labelled test customers (welcome, browse, basket, checkout), 1 inbox each, shopped from the UK; a Body Care Gift
   Set (£40) left in the basket at 02:57 and a Deodorant (£21) left at checkout, before payment, at 03:11 on Tuesday
   22 September; each inbox watched for 48 hours; 0 reminders reached either; browse got 3 messages (Delivered),
   welcome 2, too few to call (No verdict); 15 screenshots and 5 messages kept. No control message, no second run and
   no signature are claimed on it. The final capture is the free store mystery shop. */

export const recipe: Recipe = {
  id: 'mystery',
  slug: 'mystery-shopper',
  name: 'Mystery shopper',
  group: 'Check your own journeys',
  line: 'Goes through your business, or a client’s, as a customer does, from the first click to the last email.',
  gets: 'A verdict on every journey, with the proof behind each one.',
  kit: [
    'A declared AI test customer per journey',
    'Its own inbox, number and browser',
    'Mobile, desktop or both',
    'A screenshot of every step',
    'Every inbox watched to the end of the wait',
    'Every step signed and dated',
  ],

  meta: {
    path: '/recipes/mystery-shopper',
    title: 'AI mystery shopper: see what your customers get · Obsession',
    description:
      'Declared AI agents go through your store, trial, demo or booking, or a client’s with their OK, and time every email, text and reply that follows.',
    answer:
      'Mystery shopper is AI mystery shopping for digital journeys: declared AI test customers sign up, shop, book and start trials at your business, or a client’s with their OK, and time every email, text and reply that follows.',
    ogImage: '/og/mystery-shopper.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Mystery shopper', path: '/recipes/mystery-shopper' },
    ],
  },

  hero: {
    headline: 'See what a customer actually gets after they show up.',
    sub: 'Mystery shopper is AI mystery shopping for digital journeys: declared AI test customers sign up, shop, book and start trials at your business, or a client’s with their OK, and time every email, text and reply that follows.',
    screen: 'shop',
    capture: {
      kind: 'mystery',
      source: 'recipe-mystery-hero',
      button: 'Get my free report',
      placeholder: 'Store address, e.g. your-store.example',
      micro: 'Free for a store you run, or a client’s with their OK: 4 test customers, 48 hours watched, your report within 4 days.',
      interest: 'mystery',
    },
  },

  run: {
    tab: 'Real run, September 2026',
    recipe: 'mystery',
    task: 'Shop a skincare store as 4 labelled test customers: welcome, browse, basket and checkout. Watch every inbox for 48 hours.',
    targets: 'A skincare store, name hidden',
    journey: ['Sign up for emails', 'Browse and leave', 'Leave a basket', 'Leave at checkout, before payment'],
    schedule: 'Once, 22 to 24 September 2026',
    report: 'A report with every screenshot and message as proof',
    kit: ['4 labelled test customers', '4 inboxes, 1 per journey', 'Shopped from the UK', '48 hour watch'],
    events: [
      { time: '22 Sep, 02:57', text: 'The basket shopper leaves a £40 gift set in the basket.' },
      { time: '22 Sep, 03:11', text: 'The checkout shopper leaves a £21 deodorant at checkout, before payment.' },
      { time: '22 to 24 Sep', text: 'Browse: 3 messages arrive. Welcome: 2, too few to call.' },
      { time: '24 Sep, 02:57', text: '48 hours on. No reminder for the £40 basket.' },
      { time: '24 Sep, 03:11', text: '48 hours on. No reminder for the £21 checkout.' },
    ],
    finding: '1 shopper left £40 in the basket and 1 stopped at checkout with £21. No reminder reached either in 48 hours.',
    fix: 'The 2 missing reminders drafted in the report, ready for the store to approve.',
    ledger: 'Real run, September 2026. Store name hidden. 15 screenshots and 5 messages kept as proof.',
  },

  steps: [
    {
      title: 'Pick the journeys',
      line: 'A store’s basket and checkout, a software trial, a demo request, a booking or a quote. Yours, or a client’s with their OK.',
    },
    {
      title: 'Test customers go through them',
      line: 'Each is a declared AI agent with its own inbox, number and browser. It signs up, books, starts the trial or fills the basket, and screenshots every step.',
    },
    {
      title: 'They wait, and watch',
      line: 'Every inbox and number is watched for the window you set, so a reminder that never comes shows up too.',
    },
    {
      title: 'You get a verdict on every journey',
      line: 'Delivered, silent, no verdict or couldn’t test, with the proof and the missing message drafted. Run it once, or after every change.',
    },
  ],

  checks: [
    {
      group: 'Stores',
      items: [
        { title: 'From the ad', line: 'Whether the page an ad points to is live, in stock and shows the same offer.' },
        {
          title: 'Sign up and welcome',
          line: 'Whether the form works, whether double opt in is needed, the time to the welcome email and the offer in it.',
        },
        {
          title: 'Basket and checkout',
          line: 'When delivery costs appear, every step up to payment, and whether a reminder follows a basket that’s left: when, how many, and whether the right item is named.',
        },
        {
          title: 'Delivery and returns',
          line: 'With a real order on your own store, on a budget you set: confirmation, dispatch, delivery and refund.',
        },
      ],
    },
    {
      group: 'Software',
      items: [
        { title: 'Trial sign up', line: 'The fields asked, whether a card or a code by text is needed, and the time to the first email.' },
        { title: 'Onboarding', line: 'Every onboarding email and in app prompt, timed by trial day, and the reminder before the trial ends.' },
        { title: 'Demo requests', line: 'Whether the booking works, and what follows: the confirmation, the invite and the reminders.' },
      ],
    },
    {
      group: 'Bookings and services',
      items: [
        { title: 'Booking', line: 'Whether a slot can be booked on a phone, and the confirmation and reminder texts that follow.' },
        { title: 'Quote requests', line: 'Whether the form sends, the time to the first reply, and on which channel it comes.' },
        { title: 'Chat and phone', line: 'Whether the bot answers, whether the line picks up, and how long each one took.' },
      ],
    },
    {
      group: 'Every business',
      items: [
        { title: 'Texts and STOP', line: 'The opt in, the confirmation text, how often texts come, and whether STOP really stops them.' },
        { title: 'Privacy', line: 'Whether tracking still fires after a visitor clicks reject on the cookie banner.' },
        { title: 'Support', line: 'The same question on every channel at the same minute, timed to each reply.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every journey ends in a verdict you can forward.',
    items: [
      { format: 'A verdict per journey', line: 'Delivered, silent, no verdict or couldn’t test, with the rule that decided it.' },
      { format: 'A timed log', line: 'Every step and message with its time, from the first click to the last email.' },
      {
        format: 'The evidence',
        line: 'Screenshots, the raw emails with headers, the texts as received, and the network log for the privacy check.',
      },
      { format: 'A report to share', line: 'A page and a PDF, like the one in the sample output, or an email, Slack, a sheet or a webhook.' },
      { format: 'The fix, drafted', line: 'The missing email or text written for you, live only after your OK.' },
      { format: 'What changed', line: 'On a schedule, the journeys that broke or recovered since the last run.' },
    ],
  },

  settings: [
    { k: 'Business', v: 'Yours, or a client’s with their OK' },
    { k: 'Journeys', v: 'Sign up, texts, basket, checkout, trial, demo, booking, quote, support, STOP' },
    { k: 'Wait', v: '24 hours, 48 hours, 72 hours or 7 days for what follows' },
    { k: 'What counts', v: 'For example: no basket reminder within 24 hours, no booking confirmation within 10 minutes' },
    { k: 'Device', v: 'Mobile, desktop or both' },
    { k: 'Payment', v: 'Every checkout stops before payment, unless it’s your own store and you set a budget' },
    { k: 'Rivals', v: 'The same public steps on competitors, to compare' },
    { k: 'How often', v: 'Once, weekly, monthly or after every release' },
  ],

  forWho: [
    { audience: 'agencies', line: 'Pick a client. See what their customers get. A check on every client store, and a report to show for it.' },
    { audience: 'marketing', line: 'Know your own journeys still work after every launch and change.' },
    { audience: 'founders', line: 'Test your sign up, trial and checkout as a new customer after every release.' },
    { audience: 'sales', line: 'With an account’s OK, show what its customers get on day 0 and day 28 of a pilot.' },
    { audience: 'developers', line: 'Run your own sign up or checkout as a new customer, from your code, on a schedule.' },
  ],

  table: {
    heading: 'Rival A welcomes new customers 5 minutes faster, with a bigger offer.',
    line: 'Example. Rivals get the public steps only: sign up, texts and the site’s chat bot. Baskets need the owner’s OK.',
    cols: ['You', 'Rival A', 'Rival B'],
    rows: [
      { label: 'Time to welcome email', values: ['6 min', '1 min', 'None in 24 h'] },
      { label: 'Welcome offer', values: ['10% off', '15% off', 'Free delivery'] },
      { label: 'Text confirmation', values: ['Yes', 'Yes', 'None'] },
      { label: 'The site’s chat bot', values: ['Answered in 4 s', 'A person picked up, step ended', 'No bot'] },
      { label: 'STOP honoured', values: ['Yes', 'A text after STOP', 'Yes'] },
    ],
  },

  faq: {
    heading: 'Every test customer says it’s AI. Nothing is bought without your OK.',
    items: [
      {
        q: 'What is AI mystery shopping?',
        a: 'AI mystery shopping for digital journeys means a declared AI test customer lives your online journey, from sign up to the last email, and every message that follows is timed. It never pretends to be a person.',
      },
      {
        q: 'Can you do mystery shopping online?',
        a: 'Yes. Obsession’s Mystery shopper runs your online journeys, a store’s basket and checkout, a software trial, a demo request or a booking, each lived by a declared AI test customer with its own inbox, number and browser.',
      },
      {
        q: 'How do I test my abandoned cart and checkout emails without a dummy address?',
        a: 'Obsession uses real inboxes. 4 declared AI test customers sign up, browse, leave a basket and stop at checkout before payment on your store, and every inbox is watched for 48 hours, so you see which reminders came and which never did.',
      },
      {
        q: 'Is the September run on this page real?',
        a: 'Yes. In September 2026, Obsession’s 4 labelled test customers shopped a skincare store, name hidden, and every inbox was watched for 48 hours. The full report is in the sample output.',
      },
      {
        q: 'Do you need our logins?',
        a: 'No. Mystery shopper’s agents use your business the way a customer does. Baskets, checkouts, bookings and demo requests need your OK, or your client’s.',
      },
      {
        q: 'Do you place real orders?',
        a: 'Mystery shopper never pays on anyone else’s store: every checkout stops before payment. On your own store, only on a budget you set.',
      },
      {
        q: 'Does Mystery shopper pretend to be a person?',
        a: 'No. Every Obsession test customer is a declared AI agent and says who it works for, so your team can see it’s a test.',
      },
      {
        q: 'Can Mystery shopper test a software trial or a booking?',
        a: 'Yes. Mystery shopper starts your trial, requests a demo or books a slot like a new customer, then times every email, text and reply that follows.',
      },
      {
        q: 'How is Mystery shopper different from a site audit?',
        a: 'Mystery shopper uses the page, then waits days for what arrives afterwards: the emails, texts and replies. An audit only reads it.',
      },
      { q: 'How long does Mystery shopper take?', a: 'Mystery shopper checks pages in minutes and messages within hours, and gives every verdict when the wait you set ends.' },
      { q: 'What happens at a CAPTCHA?', a: 'Mystery shopper stops. If the CAPTCHA would block real customers too, that’s a finding.' },
      {
        q: 'Can Mystery shopper run on a schedule?',
        a: 'Yes. Mystery shopper runs weekly, monthly or after every release. You hear when a journey breaks, and when it’s fixed.',
      },
      {
        q: 'What’s in the free report?',
        a: 'The free report is a Mystery shopper run on a store you run, or a client’s with their OK: 4 test customers sign up, browse and leave baskets, stopping before payment, and every inbox is watched for 48 hours. Within 4 days you get what arrived, what didn’t and the fix.',
      },
    ],
  },

  final: {
    heading: 'Your first store mystery shop is free.',
    sub: 'Name a store you run, or a client’s with their OK. 4 test customers shop it, every inbox is watched for 48 hours, and your report lands within 4 days.',
    capture: {
      kind: 'mystery',
      source: 'recipe-mystery-final',
      button: 'Get my free report',
      placeholder: 'Store address, e.g. your-store.example',
      micro: 'You join the waitlist too. We keep your store address and email to run the report and tell you about Obsession.',
      interest: 'mystery',
    },
  },
}
