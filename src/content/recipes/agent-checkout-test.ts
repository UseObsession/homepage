import type { Recipe } from '../types'

/* Agent checkout test (/blueprints/agent-checkout-test, 23 Nov 2026, _research/seo/agentic-commerce-23nov/PLAN.md §3).
   Buy, book and order, the store side: ecommerce and travel teams see their checkout the way shoppers' AI agents meet
   it. Each morning personas, each with its own inbox, number and cloud browser, shop the store from product page to
   payment and name the step where each got stuck (a bot check or CAPTCHA, a pop-up over the button, a size picker with
   no labels, a code, a forced account), then wait for the abandoned checkout email and texts. It stops at payment unless
   the team gives it its own card (then the order is real, and the team cancels and refunds it). A CAPTCHA or bot block
   ends the run and is the finding; it never gets round one. Owns "ai agent checkout test", "agentic checkout testing"
   and "agentic commerce test" (Google suggestions, 23 Nov: "ai agent checkout", "agentic commerce test"); "agentic
   checkout" and the readiness check stay with /blog/agentic-commerce-for-merchants, "ai shopping agent verification"
   and blocking with /blog/agent-ready-website, both linked. Protocols (ACP, UCP) appear only in one FAQ answer, to say
   what they cover. No competitor named. Screen: agentcheckout. Haldane is invented, at haldane.example. The run:
   3 shoppers at 07:00; 2 reach payment (07:03:04, 07:03:21); the US desktop shopper meets a CAPTCHA at checkout at
   07:03:10; abandoned checkout emails at 07:44 and 07:46; 14 screenshots (5 + 5 + 4). Example. */

export const recipe: Recipe = {
  id: 'agent-checkout',
  slug: 'agent-checkout-test',
  name: 'Agent checkout test',
  group: 'Buy, book and order',
  line: 'Personas shop your store each morning the way shoppers’ AI agents do, and show the step where each got stuck.',
  gets: 'Every step to payment with its screenshot, the step that stopped an agent and why, and every email and text your store sent after.',
  kit: [
    'Personas that shop like AI agents, each with its own inbox and number',
    'A cloud browser for each, from the countries you sell in',
    'Your products, sizes and codes, set by you',
    'A screenshot of every step to payment',
    'Days of waiting for the emails and texts that follow',
    'Your own payment card, only if you want real orders',
  ],
  build: {
    line: 'One call starts a daily test shop. Each step comes back as page.visited and the step that stopped it as a blueprint.result, on the same event log as every other piece.',
    code: `await obsession.blueprints.run('agent-checkout-test', {
  store: 'https://your-store.example',
  basket: { product: '/products/merino-crew', size: 'M', code: 'WELCOME10' },
  shoppers: ['UK desktop', 'UK phone', 'US desktop'],
  stopAt: 'payment',
})
obsession.on('blueprint.result', async (e) => {
  if (e.stoppedAt) await openTicket(e.stoppedAt, e.screenshot) // your tracker
})`,
    events: [
      { kind: 'page.visited', text: 'Each step from product page to payment, with its screenshot and what the page said.' },
      { kind: 'blueprint.result', text: 'Reached payment, or the step that stopped it and why, such as a CAPTCHA at checkout.' },
      { kind: 'email.received', text: 'The abandoned checkout email, or the order confirmation when it paid with your card.' },
      { kind: 'sms.received', text: 'A reminder or shipping text on the persona’s own number.' },
    ],
  },

  meta: {
    path: '/blueprints/agent-checkout-test',
    title: 'Test your checkout as an AI shopping agent, every day',
    description:
      'Agentic checkout testing for online stores: personas shop your checkout like AI shopping agents every morning and show the step where each got stuck.',
    answer:
      'Agent checkout test sends personas through your online store each morning the way shoppers’ AI agents shop it, from product page to payment. It shows the step where each got stuck and why, then waits for the emails and texts your store sends.',
    ogImage: '/og/agent-checkout-test.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Agent checkout test', path: '/blueprints/agent-checkout-test' },
    ],
  },

  hero: {
    headline: 'Test your checkout as an AI shopping agent, every morning.',
    sub: 'Agent checkout test sends personas through your online store each morning the way shoppers’ AI agents shop it, from product page to payment. It shows the step where each got stuck and why, then waits for the emails and texts your store sends.',
    screen: 'agentcheckout',
    capture: {
      kind: 'waitlist',
      source: 'recipe-agent-checkout-hero',
      button: 'Start free',
      interest: 'agent-checkout',
    },
  },

  buyer: 'For ecommerce and travel teams getting their checkout ready for shoppers’ AI agents.',
  unit: 'test shop',
  per: 'store',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['3 test shops to payment, from 3 personas', 'The step where each got stuck, with its screenshot', 'The emails and texts your store sent, for 48 hours'] },
    { name: 'Weekly', includes: ['3 test shops every Monday, and after each release', 'The products, sizes and codes you choose', 'Alerts in Slack when a step stops an agent'] },
    { name: 'Daily', includes: ['3 test shops every morning, from the countries you sell in', 'Phone-sized and desktop screens', 'A real order with your card once a week, if you want it'] },
    { name: 'Every store', includes: ['Each of your stores and country sites, every morning', 'Each store’s results kept apart in your event log'] },
  ],

  run: {
    tab: 'Haldane’s checkout, every morning',
    recipe: 'agent-checkout',
    task: 'Every morning at 07:00, shop haldane.example as 3 AI shopping agents. Buy the merino crew in navy, size M, with the code WELCOME10. Stop at payment, then wait 48 hours for every email and text.',
    targets: 'haldane.example, Haldane’s own online store, in the UK and the US',
    journey: ['Find the product and pick a size', 'Add to basket and try the code', 'Check out as a guest', 'Stop at payment, then wait'],
    schedule: 'Daily at 07:00',
    report: 'Slack #ecommerce by 07:15',
    kit: ['3 personas · UK and US shoppers', '3 inboxes and 3 numbers', 'A cloud browser each', 'Stops at payment'],
    events: [
      { time: '07:00', text: '3 personas open the merino crew page on haldane.example: a UK desktop, a UK phone and a US desktop.' },
      { time: '07:01', text: 'Each picks navy in size M from labelled buttons and adds it to the basket. The code WELCOME10 takes 10% off.' },
      { time: '07:03', text: 'Both UK shoppers check out as guests and reach payment. Delivery first shows on the checkout page.' },
      { time: '07:03', text: 'The US shopper opens checkout and meets a CAPTCHA. The run stops there, and the page is kept with its screenshot.' },
      { time: '07:05', text: 'In Slack #ecommerce: a CAPTCHA stopped an AI shopping agent at checkout on the US site.' },
      { time: '07:44', text: 'The first UK shopper’s abandoned checkout email arrives, 41 minutes after it reached payment. The second arrives at 07:46.' },
    ],
    finding: 'The US shopper was stopped at checkout by a CAPTCHA. Both UK shoppers reached payment in just over 3 minutes, and both abandoned checkout emails came within 45 minutes.',
    fix: 'The CAPTCHA’s screenshot and step reached #ecommerce at 07:05, so the team could review its bot rules for checkout before the day’s shoppers arrived.',
    ledger: '3 test shops, 14 screenshots and 2 emails, each dated.',
  },

  steps: [
    {
      title: 'Give it your store',
      line: 'Your store’s address, the products, sizes and codes to try, and the countries you sell in.',
    },
    {
      title: 'Choose the shoppers',
      line: 'Personas on a phone or a desktop, from each country, as guests or in an account you own.',
    },
    {
      title: 'It shops like an agent',
      line: 'Each finds the product, picks options, applies the code and checks out, stopping at payment unless you give it your card.',
    },
    {
      title: 'Every step lands where you work',
      line: 'Slack by 07:15, a sheet or the API, each step with its screenshot and what arrived after.',
    },
  ],

  checks: [
    {
      group: 'Where an AI agent gets stuck',
      items: [
        { title: 'Bot checks and CAPTCHAs', line: 'The step where a bot check or a CAPTCHA stopped it. The run ends there, and the page is kept as the finding.' },
        { title: 'Pop-ups and banners', line: 'A sign-up pop-up or cookie banner that covers Add to basket or the checkout button.' },
        { title: 'Sizes and colours', line: 'Whether each option has a name an agent can read, or only a swatch with no label.' },
        { title: 'Codes', line: 'Whether the code is accepted, what it takes off, and the message when it isn’t.' },
        { title: 'Guest checkout', line: 'Whether it can buy without making an account, or the step where an account is forced.' },
      ],
    },
    {
      group: 'What it was told, and what came after',
      items: [
        { title: 'Prices and totals', line: 'The price on the product page, in the basket and at checkout, and the step where delivery first shows.' },
        { title: 'Stock and delivery dates', line: 'What each page says about stock and when the order arrives.' },
        { title: 'Ways to pay', line: 'The payment options offered at the last step.' },
        { title: 'The abandoned checkout email', line: 'Waited for on the persona’s own inbox, timed from the minute it reached payment.' },
        { title: 'The order confirmation', line: 'When it pays with your card: the confirmation and every delivery email and text.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Payment', line: 'It stops at payment unless you give it your own payment card. Orders it places with your card are real, so you cancel and refund them in your store admin.' },
        { title: 'Walls', line: 'It never gets round a CAPTCHA or a bot block, and it stops at any identity check.' },
        { title: 'Says it’s an AI', line: 'If your chat or a person answers, it says it’s an AI testing for your team.' },
        { title: 'How many shops', line: '3 a morning by default, or as many as you set.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every test shop comes back step by step, with what your store sent after.',
    items: [
      { format: 'The step that stopped it', line: 'Named, with its screenshot and what the page said.' },
      { format: 'Every step to payment', line: 'Each page dated, with a screenshot, for every shopper.' },
      { format: 'Totals', line: 'The price on each page beside the checkout total, and where delivery first showed.' },
      { format: 'What arrived after', line: 'Each email and text with the time it came, or the hours waited when none did.' },
      { format: 'What changed', line: 'After each release, the steps that changed since the last run.' },
      { format: 'Where you work', line: 'Slack, a sheet, a webhook or the API.' },
    ],
  },

  settings: [
    { k: 'Store', v: 'Your online store or booking site, and each country site' },
    { k: 'Shoppers', v: '3 personas a morning, each with its own inbox, number and cloud browser' },
    { k: 'Screens', v: 'Phone-sized and desktop' },
    { k: 'Basket', v: 'The products, sizes and codes you choose' },
    { k: 'Checkout', v: 'As a guest, or in an account you own' },
    { k: 'Payment', v: 'Stops at payment, or pays with your own card' },
    { k: 'Waiting', v: '48 hours after each test shop, or as long as you set' },
    { k: 'How often', v: 'Every morning at 07:00, and after every release' },
    { k: 'Where it lands', v: 'Slack, a sheet, a webhook or the API' },
  ],

  table: {
    heading: 'Your team tests checkout from the office. Shoppers’ AI agents arrive from cloud browsers.',
    cols: ['A test order by hand', 'With Agent checkout test'],
    rows: [
      { label: 'A CAPTCHA at checkout', values: ['Never shown to the office', 'Found the morning it appears, with its screenshot'] },
      { label: 'A size picker with no labels', values: ['Fine to a person’s eye', 'Flagged when an agent can’t read it'] },
      { label: 'A pop-up over the basket button', values: ['Closed without a thought', 'Logged as the step that blocked it'] },
      { label: 'The code at checkout', values: ['Tried before a launch', 'Tried every morning'] },
      { label: 'The abandoned checkout email', values: ['Assumed to send', 'Timed on the persona’s own inbox'] },
      { label: 'After a release', values: ['A test order, if someone has time', 'Shopped again the same day'] },
    ],
  },

  faq: {
    heading: 'A persona shops your checkout the way shoppers’ agents do, and keeps every step.',
    items: [
      {
        q: 'What is an AI agent checkout test?',
        a: 'A test shop on your own store by an AI agent, the way shoppers’ assistants now buy for them. Agent checkout test runs one every morning, from product page to payment, and names the step where it got stuck.',
        link: { label: 'Agentic commerce for merchants', to: '/blog/agentic-commerce-for-merchants' },
      },
      {
        q: 'What happens when it meets a CAPTCHA or a bot check?',
        a: 'It stops. It never gets round a CAPTCHA or a bot block, so the run ends there and the step is reported with a screenshot of what it saw. Whether to let shoppers’ agents through is your call, and the next morning’s run shows the result.',
        link: { label: 'Should you block AI agents?', to: '/blog/agent-ready-website' },
      },
      {
        q: 'Does Agent checkout test place real orders?',
        a: 'Only if you say so. By default it stops at payment, then waits for your abandoned checkout email and texts. Give it your own payment card and it completes the order, so the confirmation and every delivery update join your event log. Cancel and refund those orders in your store admin.',
      },
      {
        q: 'Does it test agent checkout protocols such as ACP and UCP?',
        a: 'Those protocols let an assistant order through your store’s own product feed and checkout, where you’ve set them up. Agent checkout test shops your pages in a browser, the path an agent takes wherever that setup isn’t in place.',
        link: { label: 'See agentic commerce infrastructure', to: '/use-cases/agentic-commerce' },
      },
      {
        q: 'Can it test a hotel or flight booking site?',
        a: 'Yes. It searches dates, picks a room or a fare and fills in the traveller details from a profile you give it, then stops at payment or at any identity check. It never invents identity details.',
      },
      {
        q: 'Which products and codes does it try?',
        a: 'The ones you set: a best seller, a product with sizes or colours, a launch code. Change them before a sale and the next morning’s run uses them.',
      },
      {
        q: 'Will test shops show up in our analytics?',
        a: 'Yes, as 3 sessions a morning by default, and as abandoned checkouts when it stops at payment. You know each persona’s email address and number, so you can filter them out of your reports.',
        link: { label: 'See how a persona works', to: '/personas' },
      },
      {
        q: 'What does Agent checkout test cost?',
        a: 'It’s billed on the pieces it uses, at list rates. That’s a cloud browser for each test shop, an inbox and a number for each persona, and the model tokens that read each page. The hours spent waiting for emails cost nothing.',
        link: { label: 'See the cloud browser', to: '/browser' },
      },
    ],
  },

  final: {
    heading: 'See your checkout the way shoppers’ AI agents meet it, every morning.',
    sub: 'Try it on the Free plan with 3 test shops on your own store, and watch failed agent checkouts and conversion from agent shoppers.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-agent-checkout-final',
      button: 'Start free',
      interest: 'agent-checkout',
    },
    link: { label: 'More blueprints to buy, book and order', to: '/blueprints/buy-book-and-order' },
  },
}
