import type { Capture, Recipe } from '../types'

/* AI checkout test (/recipes/ai-checkout-test). Check your own journeys. Screen: checkout (your-store.example, 3 Oct: 6
   AI checkout paths, each placing a £48.20 order for a linen shirt on its own card, used once and capped at £48.20, inside a
   £300 monthly budget; 5 land and are refunded, £241.00 in all; Assistant A's path finds the shirt in M, adds it, then
   reads "Basket: 0 items" because sizes are hidden from agents, and its card is never charged; the drafted fix, "Add
   sizes to the product feed", approved, and a retest booked for 14:00). The run matches it: £, the linen shirt, the
   store, the times and the 1 fix (3 Oct).
   Base: _research/recipes/ACTIVE-RECIPES.md, recipe 1 (research name retired; the plain name is Seun's, 3 Oct).
   It upgrades Mystery shopper from watching to buying: it pays, refunds and drafts the fix (live after the reader's OK).
   Red lines held: only the reader's own store, or a client's with the owner's written OK, never a competitor's; the agent
   is declared in the order note and every message; each order on its own card, locked to the store and capped to that
   order, inside a monthly budget the reader sets, and any total above the cap stops it before payment; the reader
   confirms the total at each confirm step; only the checkout routes built for agents and the normal web checkout, no
   disguised browsers, no CAPTCHA solving, and a person on the team runs any AI app leg whose terms bar agents; every
   order refunded through the store's normal process and kept out of ad conversions, reviews and email lists; where the
   payment provider bars real test payments, its test mode or a genuine purchase kept or returned; every fix and every
   AI channel application (and its terms) only after the reader's OK. No platform or company names: categories only.
   Up-to-50 rule: the 1 modelled figure (up to 40 more of every 100 AI shoppers reach checkout) carries its model in
   the same line, unattributed (Obsession's only real run is the September store check): when AI agents tried to buy
   from real stores, 45 in 100 reached the basket or checkout (27 of 60), and 40 of the 55 that didn't were stopped by
   the store (24 of 33), so the ceiling goes from 45 to 85. The run is an example and says so. */

const roles: Capture['roles'] = {
  question: 'Whose store should we test first?',
  options: ['Ours', 'A client’s, with their written OK', 'Both'],
}

const micro = 'We keep your email to set up your first run and tell you about Obsession.'

export const recipe: Recipe = {
  id: 'checkout',
  slug: 'ai-checkout-test',
  name: 'AI checkout test',
  group: 'Check your own journeys',
  line: 'Places a real, refunded order through every AI checkout into your store each month, and drafts the fix for any that breaks.',
  gets: 'A real order through every AI checkout, refunded, and the fix for any that breaks.',
  kit: [
    'A declared AI agent that names your store',
    'A capped card per order, locked to your store',
    'Every AI checkout into your store, mapped',
    'Your store and orders, connected by you',
    'A refund for every test order',
    'Every order and refund signed and dated',
  ],

  meta: {
    path: '/recipes/ai-checkout-test',
    title: 'AI checkout test: make sure AI shoppers can buy · Obsession',
    description:
      'Each month a declared AI agent buys from your store through every AI checkout on a capped card, refunds the order and drafts the fix for any that breaks.',
    answer:
      'AI checkout test makes sure AI shoppers can buy from your store: every month a declared AI agent places a real order through each AI checkout on a card capped to that order, refunds it, and drafts the fix for any path that breaks.',
    ogImage: '/og/ai-checkout-test.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'AI checkout test', path: '/recipes/ai-checkout-test' },
    ],
  },

  hero: {
    headline: 'AI agents that make sure AI shoppers can buy from your store.',
    sub: 'AI checkout test makes sure AI shoppers can buy from your store: every month a declared AI agent places a real order through each AI checkout on a card capped to that order, refunds it, and drafts the fix for any path that breaks.',
    screen: 'checkout',
    capture: {
      kind: 'waitlist',
      source: 'recipe-checkout-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'checkout',
    },
  },

  run: {
    tab: 'Example: your store, monthly',
    recipe: 'checkout',
    task: 'Every month, place a real order through each AI checkout into our store, each on its own capped card. Check them, refund them, and draft the fix for any path that breaks.',
    targets: 'your-store.example, your own clothing store',
    journey: ['Map every AI checkout', 'Buy on a capped card', 'Check it, then refund it', 'Draft the fix for each break'],
    schedule: 'Monthly, and after every checkout change',
    report: 'A report by path, with fixes ready to approve',
    kit: ['Agent ID, declared as AI for your store', 'A capped card per order', 'Your store, connected by you', 'Checkouts built for agents'],
    events: [
      { time: '3 Oct, 09:00', text: '6 ways an AI shopper can buy from you, mapped. You’re not listed on 2 AI shopping channels.' },
      { time: '3 Oct, 09:10', text: 'You confirm the £48.20 total for a linen shirt on each path. Each order is paid on its own card, locked to your store and capped at £48.20.' },
      { time: '3 Oct, 09:15', text: '5 of 6 paths take a paid order, each with the right price, size, delivery and tax.' },
      { time: '3 Oct, 09:16', text: 'Assistant A finds the shirt in size M and adds it, then the basket shows 0 items: sizes are hidden from agents. It stops, logs why, and its card is never charged.' },
      { time: '3 Oct, 10:00', text: '5 orders refunded through your normal process, £241.00 back on their cards.' },
    ],
    finding: '1 of 6 AI checkouts fails: Assistant A’s basket empties after add, because sizes are hidden from agents.',
    fix: 'Sizes added to your product feed, drafted for your OK. Once it’s live, Assistant A’s path buys again at 14:00.',
    ledger: 'Example run. 5 orders placed and refunded, 1 blocked and never charged, every receipt signed.',
  },

  steps: [
    {
      title: 'Map every way an AI can buy from you',
      line: 'Checkouts built for AI agents, links from AI assistants, your product feeds and your normal checkout. It flags the AI shopping channels you’re not on.',
    },
    {
      title: 'Buy for real, on a capped card',
      line: 'A declared AI agent orders through every path, inside a monthly budget you set. Each order gets its own card, locked to your store and capped to its total, and you confirm the total first.',
    },
    {
      title: 'Check the order, then refund it',
      line: 'Price, size, delivery, tax, codes and the confirmation email, checked against your own records. Then refunded through your normal process.',
    },
    {
      title: 'Fix what breaks, then buy again',
      line: 'Every block gets its fix drafted, and every missing channel an application, both for your OK. Then a new order proves it, monthly and after every change.',
    },
  ],

  checks: [
    {
      group: 'Every way an AI can buy',
      items: [
        { title: 'Checkouts built for agents', line: 'Your store’s own checkout for AI agents, and the shared checkouts AI assistants buy through.' },
        { title: 'AI assistants', line: 'The link from an AI assistant’s product card into your checkout.' },
        { title: 'Product feeds', line: 'Whether every size, colour, price and stock level an AI reads matches your store.' },
        { title: 'Your normal checkout', line: 'The same order through your web checkout, as a declared agent.' },
      ],
    },
    {
      group: 'Every order it places',
      items: [
        { title: 'Price and stock', line: 'What the AI was shown, against what it paid and what your store recorded.' },
        { title: 'Delivery, tax and codes', line: 'Every cost added at checkout, and whether your discount codes work.' },
        {
          title: 'The confirmation',
          line: 'The order email, and whether the sale is credited to the AI channel it came from.',
        },
        { title: 'The refund', line: 'Cancelled and refunded your usual way, and the money back on its card.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        {
          title: 'At a block',
          line: 'A bot rule, a forced login, an empty basket or a hidden size. It stops, logs where and why, and drafts the fix. It never solves a CAPTCHA.',
        },
        { title: 'Above the cap', line: 'A total over its card’s cap, or over your monthly budget, stops it before it pays.' },
        {
          title: 'AI apps that bar agents',
          line: 'Where an app’s terms don’t allow agents, a person on your team runs that step. The agent sets it up and records it.',
        },
        { title: 'Anyone else’s store', line: 'Never. Your own store, or a client’s with their written OK.' },
      ],
    },
  ],

  outputs: {
    heading: 'A receipt for every path that works, and a fix for every one that doesn’t.',
    items: [
      { format: 'A verdict per path', line: 'Bought and refunded, or blocked, with where and why.' },
      { format: 'Signed receipts', line: 'The order, the amount on its card and the refund, for every path.' },
      {
        format: 'The fixes, drafted',
        line: 'A theme change, a feed fix, a checkout setting, or a rule that lets declared agents through with bot protection still on. Live only after your OK.',
      },
      {
        format: 'Missing channels',
        line: 'Applications to the AI shopping channels you’re not on, sent with their terms for your OK and chased every week until they answer.',
      },
      { format: 'What changed', line: 'After every theme, app or checkout change, the paths that broke or recovered.' },
      { format: 'A report to share', line: 'A page and a PDF for your team or your client, or an email, Slack, a sheet or a webhook.' },
    ],
  },

  settings: [
    { k: 'Store', v: 'Yours, or a client’s with their written OK' },
    { k: 'Products', v: 'The products and sizes you pick to test' },
    { k: 'Budget', v: 'A monthly cap you set, and each card capped to its order' },
    { k: 'Paths', v: 'Every AI checkout, every link from an AI assistant and your normal checkout' },
    { k: 'Your OK', v: 'The total at each confirm step, every fix, every channel application and its terms' },
    { k: 'Refunds', v: 'Through your normal process, kept out of your ads, reviews and email lists' },
    { k: 'How often', v: 'Monthly, and after every theme, app or checkout change' },
  ],

  forWho: [
    {
      audience: 'agencies',
      line: 'A monthly AI checkout test for every client store, with their written OK, and a signed report to show for it.',
    },
    { audience: 'founders', line: 'Know AI shoppers can pay you, and hear the day a change stops them.' },
    { audience: 'marketing', line: 'Join the AI shopping channels you’re missing, and know every one ends at a working checkout.' },
    {
      audience: 'developers',
      line: 'For software: run it from your code after every release, and know an AI agent can still sign up, get an API key and upgrade.',
    },
  ],

  table: {
    heading: 'Most AI shoppers that fail are stopped by the store, not the AI.',
    line: 'Up to 40 more of every 100 AI shoppers reach your basket or checkout once these blocks are fixed: when AI agents tried to buy from real stores, 45 in 100 got there, and 40 of the 55 that didn’t were stopped by the store itself.',
    cols: ['What the AI hits', 'The fix it drafts'],
    rows: [
      { label: 'Bot rule', values: ['Every agent turned away at checkout', 'Let declared, signed agents through, with bot protection still on'] },
      { label: 'Forced login', values: ['No way to check out as a guest', 'Guest checkout for agents'] },
      { label: 'Empty basket', values: ['The item vanishes after add', 'A theme fix for your developer'] },
      { label: 'Hidden sizes', values: ['The AI can’t see which sizes you sell', 'Sizes added to your product feed'] },
      { label: 'Price mismatch', values: ['The feed says £42, checkout says £48', 'Your feed matched to your store'] },
      { label: 'Missing channel', values: ['Not listed where AI shoppers look', 'The application, sent after your OK'] },
    ],
  },

  faq: {
    heading: 'Every order declared, capped and refunded. Never on a rival’s store.',
    items: [
      {
        q: 'Can AI shopping agents actually buy from my store?',
        a: 'Obsession’s AI checkout test finds out each month: a declared AI agent places a real order through each AI checkout on a card capped to that order, refunds it, and drafts the fix for any path that breaks.',
      },
      {
        q: 'Does AI checkout test really buy?',
        a: 'Yes. AI checkout test pays on a card capped to that order, then refunds it, because a check that stops before payment can’t tell you whether the order goes through.',
      },
      {
        q: 'Can AI checkout test check a competitor’s checkout?',
        a: 'No. AI checkout test runs only on your own store, or a client’s with their written OK.',
      },
      {
        q: 'Does AI checkout test pretend to be a person?',
        a: 'No. The AI checkout test agent says it’s an AI agent buying for your store as a monthly check, in the order note and in every message.',
      },
      {
        q: 'Who pays for the test orders?',
        a: 'You do, inside a monthly budget you set for AI checkout test. Each order is on its own card, locked to your store and capped to its total, and refunded through your normal process. Your payment provider may keep a small fee.',
      },
      {
        q: 'Will test orders skew our numbers?',
        a: 'No. Each AI checkout test order is marked as an AI test in its order note and kept out of your ad conversions, reviews and email lists.',
      },
      {
        q: 'What if our payment provider doesn’t allow real test orders?',
        a: 'Then AI checkout test uses the provider’s test mode, or makes a genuine purchase you keep or return as normal.',
      },
      {
        q: 'What happens at a CAPTCHA or a bot block?',
        a: 'AI checkout test stops and logs where. It never solves a CAPTCHA or hides that it’s AI. If the block turns away every AI shopper, that’s the finding, with the fix drafted.',
      },
      {
        q: 'What’s it worth?',
        a: 'AI checkout test is worth up to 40 more of every 100 AI shoppers reaching your basket or checkout: when AI agents tried to buy from real stores, 45 in 100 got there, and 40 of the 55 that didn’t were stopped by the store, not the AI. Those are the blocks it finds, with the fix drafted for each.',
      },
      {
        q: 'How is AI checkout test different from Mystery shopper?',
        a: 'AI checkout test places real orders through the checkouts AI agents use, refunds them and drafts the fix for any that breaks. Mystery shopper goes through your store as a customer does and watches what follows.',
      },
      {
        q: 'Does AI checkout test work for software?',
        a: 'Yes. AI checkout test checks whether an AI agent can sign up, get an API key, start a trial and upgrade, using your payment provider’s test mode.',
      },
    ],
  },

  final: {
    heading: 'Be ready the day your customers send their AI to buy.',
    sub: 'Join the waitlist. AI checkout test comes ready to run on your own store, or a client’s with their written OK.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-checkout-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'checkout',
    },
  },
}
