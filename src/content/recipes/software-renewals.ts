import type { Capture, Recipe } from '../types'

/* Software renewals (/recipes/software-renewals). Get paid and save. Screen: spend (6 tools on their own capped
   cards, £4,950 a month in all; Brindle, the design tool, renews 16% higher, £1,392 a month against its £1,200 cap,
   and the card holds it; a thread to keep last year's £30 a seat; 9 seats unused for 60 days removed under JO's OK,
   40 to 31; £5,544 a year saved: (£1,392 - 31 x £30) x 12). The run tells the same story, in the same words as the
   Founders page's Software renewals demo (3 Oct).
   Base: _research/recipes/ACTIVE-RECIPES.md, recipe 6 (research name retired; the plain name is Seun's, 3 Oct).
   Red lines held: only vendors the company already pays; each card is capped by the customer and enforced by the card
   issuer, and the agent can't raise its own limit; a charge above the cap is held for the customer's decision inside
   the vendor's grace period, so no tool lapses without them; declared as an AI agent for the company at every vendor;
   where a vendor needs the account holder, or asks for a person, it comes to the customer; no bluffing: other tools
   are cited only when switching is really on the table, never as a fake buyer, and no invented deadlines; new prices,
   seat cuts, notices, switches and cancellations only after the customer's OK; a new plan is bought only on a card capped to it,
   after OK. Up-to-50 rule: the modelled figures carry their model in the same line (up to 16.4% held off the software bill
   each year, software inflation's June 2026 record; up to £19,680 a year on a £120,000 bill, 16.4% of it; up to 36% of seats,
   the share of licences left unused). No sources on the page. The run is an example and says so. */

const roles: Capture['roles'] = {
  question: 'What’s your role?',
  options: ['Founder or owner', 'Finance or operations', 'Agency', 'Something else'],
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'spend',
  slug: 'software-renewals',
  name: 'Software renewals',
  group: 'Get paid and save',
  line: 'Pays each software vendor from its own capped card, so a price rise at renewal starts a negotiation instead of a charge.',
  gets: 'Every tool at a price you approved, with the next invoice checked.',
  kit: [
    'An agent ID, declared as AI for your company',
    'A card per vendor, locked to it and capped at the price you agreed',
    'Its own billing inbox',
    'Seat counts from your tools, read only',
    'Every renewal and notice date on 1 calendar',
    'Every charge, offer and OK signed and dated',
  ],

  meta: {
    path: '/recipes/software-renewals',
    title: 'Software renewals: negotiate every price rise · Obsession',
    description:
      'Each software vendor is paid from its own capped card, so a price rise at renewal starts a negotiation instead of a charge. You approve every new price.',
    answer:
      'Software renewals turns every software price rise into a negotiation, not a charge: each vendor is paid from its own card, capped at the price you agreed, and a declared AI agent negotiates any higher renewal with your real usage. You approve every new price.',
    ogImage: '/og/software-renewals.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Software renewals', path: '/recipes/software-renewals' },
    ],
  },

  hero: {
    headline: 'Every software price rise starts a negotiation, not a charge.',
    sub: 'Software renewals turns every software price rise into a negotiation, not a charge: each vendor is paid from its own card, capped at the price you agreed, and a declared AI agent negotiates any higher renewal with your real usage. You approve every new price.',
    screen: 'spend',
    capture: {
      kind: 'waitlist',
      source: 'recipe-software-renewals-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'spend',
    },
  },

  run: {
    tab: 'Example: a design tool renewal',
    recipe: 'spend',
    task: 'Pay every tool from its own capped card. When one tries to charge more, hold it, ask to keep last year’s price, and bring me the seats nobody uses to remove.',
    targets: 'Every software vendor you pay, from your accounting tool and card feed',
    journey: ['Cap each vendor’s card', 'Hold any charge above it', 'Negotiate with real usage', 'Check the next invoice'],
    schedule: 'Every charge, and 90 days before each notice date',
    report: 'A Slack note when a charge is held, and a monthly savings sheet',
    kit: ['Agent ID, declared as AI', 'A capped card per vendor', 'Billing inbox', 'Seat counts, read only'],
    events: [
      { time: 'Day 1, 06:12', text: 'The design tool renews 16% higher: £1,392 a month against its £1,200 cap. Held for your decision.' },
      { time: 'Day 1, 06:20', text: 'Seat use read: 31 of 40 seats used, 9 unused for 60 days.' },
      { time: 'Day 1, 09:10', text: 'After your OK, your declared AI agent asks the vendor to renew 31 seats at last year’s £30 a seat.' },
      { time: 'Day 3, 11:30', text: 'The vendor agrees in writing. 9 seats removed: £930 a month from here.' },
    ],
    finding: 'A 16% rise held at the cap, last year’s price kept and 9 unused seats removed: £5,544 a year saved.',
    fix: 'The cap lowered to £930 to match, ready for your OK. The next invoice is checked against it, and if the saving is missing, the case reopens.',
    ledger: 'Example run. Every charge, email, offer and OK dated and signed.',
  },

  steps: [
    {
      title: 'Connect your books and cards',
      line: 'Your accounting tool, card feed and contracts, read only. It lists every vendor’s price, seats, renewal date and notice window.',
    },
    {
      title: 'Each vendor gets its own card',
      line: 'Capped at the price you agreed. A charge above it is held for your decision, never paid unseen.',
    },
    {
      title: 'A rise starts a negotiation',
      line: 'It reads the contract, then negotiates with the vendor by email, chat or phone, using your real usage, and brings you the offers in writing.',
    },
    {
      title: 'You approve, it checks',
      line: 'Your OK moves the cap to the new price and no higher, or cancels the tool with written proof. Then it checks the next invoice.',
    },
  ],

  checks: [
    {
      group: 'Every renewal',
      items: [
        { title: 'Price rises', line: 'Every charge above the cap held, and the contract checked for what the vendor may raise, and when.' },
        { title: 'Unused seats', line: 'Seat use read from the tools you connect, and unused seats removed after your OK.' },
        { title: 'Notice dates', line: '90 days before each one, 1 plan: renew, cut seats, ask for a better price or cancel.' },
        { title: 'Outage credits', line: 'Downtime checked against each vendor’s service promise, and the credit claimed inside its window.' },
        { title: 'Billing errors', line: 'Double charges and wrong plans disputed with the vendor, with the record attached.' },
        { title: 'The next invoice', line: 'Checked against the agreed price. If the saving or credit is missing, the case reopens.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Only your vendors', line: 'Tools you already pay, nothing else.' },
        { title: 'Your caps', line: 'You set each cap and the card issuer enforces it. The agent can’t raise its own limit.' },
        { title: 'No tool cut off', line: 'A held charge comes to you inside the vendor’s grace period, so nothing lapses without your say.' },
        { title: 'You decide', line: 'New prices, seat cuts, notices, switches and cancellations wait for your OK.' },
        { title: 'No bluffing', line: 'It cites other tools only when you’d really switch, and never invents a deadline.' },
        { title: 'A person if asked', line: 'If a vendor needs the account holder or asks for a person, it comes to you with the thread.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every saving in writing, and on the next invoice.',
    items: [
      { format: 'Slack', line: 'When a charge is held, with the contract line and the next step.' },
      { format: 'Email', line: 'A monthly note: held, negotiated, cancelled and saved.' },
      { format: 'Sheet', line: 'Every vendor’s price, seats, cap, renewal date and notice window.' },
      { format: 'Your accounting tool', line: 'Each saving and credit, ready to post against its vendor.' },
      { format: 'Webhook', line: 'Every held charge and new price as it happens.' },
      { format: 'The record', line: 'Every charge, offer and OK, dated and signed, for your finance team or your accountant.' },
    ],
  },

  settings: [
    { k: 'Vendors', v: 'Every tool you pay, from your accounting tool and card feed' },
    { k: 'Caps', v: 'The price you agreed, per vendor, set by you' },
    { k: 'Your limits', v: 'The price, seats and term you’d accept, set by you' },
    { k: 'Over the cap', v: 'Held for your decision inside the vendor’s grace period' },
    { k: 'Seats', v: 'Used and unused, from the tools you connect' },
    { k: 'Renewals', v: 'A plan 90 days before each notice date' },
    { k: 'Negotiation', v: 'By email, chat, the vendor’s support bot or its retention line' },
    { k: 'Decisions', v: 'New prices, seat cuts, notices and cancellations only after your OK' },
  ],

  forWho: [
    { audience: 'founders', line: 'Catch every software price rise before it’s paid, without a finance hire.' },
    { audience: 'agencies', line: 'Hold the price on your own tools, and your clients’ with their OK. Every saving goes on record for their review.' },
    { audience: 'marketing', line: 'Catch a price rise on any marketing tool before it hits your budget.' },
    { audience: 'developers', line: 'Get every held charge by webhook, and approve new prices from your own app through the API.' },
  ],

  table: {
    heading: 'A higher charge is held at the cap, not paid on the renewal date.',
    line: 'Example: a £120,000 a year software bill. Software inflation hit 16.4% in June 2026, so a cap at the agreed price holds up to £19,680 a year of rises off it.',
    cols: ['Today', 'With a capped card'],
    rows: [
      { label: 'The renewal email', values: ['Lost in an inbox', 'Read the day it lands, contract checked'] },
      { label: 'A higher charge', values: ['Paid on the renewal date', 'Held at the cap for your decision'] },
      { label: 'Unused seats', values: ['Renewed with the rest', 'Removed after your OK'] },
      { label: 'The notice window', values: ['Missed', 'A plan 90 days before it'] },
      { label: 'Outage credits', values: ['Never claimed', 'Claimed inside the window'] },
      { label: 'The next invoice', values: ['Not checked', 'Checked against the agreed price'] },
    ],
  },

  faq: {
    heading: 'Your caps, your OK, and a declared agent at every vendor.',
    items: [
      {
        q: 'What can I do when a software vendor raises its price at renewal?',
        a: 'Software renewals holds the rise and negotiates: each vendor is paid from its own card capped at the price you agreed, so a higher charge waits for your decision, and a declared AI agent negotiates with your real usage and brings you the offers in writing.',
      },
      {
        q: 'How does a card stop a price rise?',
        a: 'Software renewals pays each vendor from its own card, capped at the price you agreed. A higher charge is held instead of paid, and the agent negotiates with the vendor before any money moves.',
      },
      {
        q: 'Will a tool we need get cut off?',
        a: 'Not without your say: Software renewals brings a held charge to you at once, inside the vendor’s grace period, and you decide whether to pay it.',
      },
      {
        q: 'Does Software renewals pretend to be us?',
        a: 'No. The Software renewals agent says it’s an AI agent for your company. Where a vendor needs the account holder, it comes to you with the thread.',
      },
      {
        q: 'Does Software renewals bluff?',
        a: 'Never. Software renewals uses your real usage, cites other tools only when you’d really switch, and never invents a deadline.',
      },
      {
        q: 'Does holding a charge end the contract?',
        a: 'No, so Software renewals tracks every notice window too, and brings you a plan 90 days before each one.',
      },
      {
        q: 'Can Software renewals cancel a tool?',
        a: 'Yes, after your OK. Software renewals sends notice to the address in the contract, keeps proof of delivery and gets the cancellation in writing.',
      },
      {
        q: 'How much can Software renewals save?',
        a: 'Software renewals holds up to 16.4% off your software bill each year: software inflation hit 16.4% in June 2026, and a cap at the agreed price stops a rise being charged unseen. Plus up to 36% of seats removed, the share of licences companies leave unused.',
      },
    ],
  },

  final: {
    heading: 'Pay only the prices you approve, at every renewal.',
    sub: 'Join the waitlist. Software renewals comes ready with a capped card per vendor and its own billing inbox.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-software-renewals-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'spend',
    },
  },
}
