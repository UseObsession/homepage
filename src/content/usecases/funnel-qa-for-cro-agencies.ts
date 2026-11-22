import { plans } from '../prices'
import type { UseCaseStudy } from '../types'

/* Funnel QA for CRO agencies (/use-cases/funnel-qa-for-cro-agencies), rewritten 22 Nov 2026 for the toolkit position: a
   persona goes through each brand's pop-up, waits for the email and takes the code to checkout, before the pitch and
   every morning a test is live. It runs on email, phone and the browser, through the Mystery shopping, QA on your own
   flows and Ad landing check blueprints. 1 brand carries the 10 steps (Ferrow Coffee, invented, at a .example address);
   Brand G is the only real run. Drawn by src/pages/CroAgencies.tsx (3 phases of 4, 2 and 4, so the step count stays),
   which keeps the app windows' rows and numbers. The film is left off: it closed on a free offer. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession, the toolkit for AI agents, sends a persona through each brand’s pop-up. A persona is an AI agent with its own inbox, number and browser under one name. It signs up, waits for the welcome email and takes the code to checkout, before the pitch and every morning a test is live.'

const answer = `${sub} Mystery shopping, QA on your own flows and Ad landing check run it, and each result lands in Slack, a Google Sheet or your webhook.`

export const study: UseCaseStudy = {
  name: 'Funnel QA for CRO agencies',
  line: 'Every message a brand sends after its pop-up, before and after each test.',

  meta: {
    path: '/use-cases/funnel-qa-for-cro-agencies',
    title: 'Funnel QA for CRO agencies: pop-up to checkout, as a shopper',
    description:
      'A persona signs up through each brand’s pop-up, waits for the email and tries the code at checkout, before the pitch and every morning a test is live.',
    answer,
    ogImage: '/og/funnel-qa-for-cro-agencies.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Funnel QA for CRO agencies', path: '/use-cases/funnel-qa-for-cro-agencies' },
    ],
  },

  hero: {
    headline: 'What each brand’s funnel sends, before and after every test.',
    sub,
    example: { chips: [] },
    flow: [
      {
        label: 'Your pipeline',
        title: 'Brands to pitch',
        items: ['Ferrow Coffee', 'Brindlecup', 'Oskerby Roasters', 'Tallis & Ash'],
        foot: '12 in November’s pipeline',
      },
      {
        label: 'Obsession',
        title: 'A persona at each brand',
        items: ['From the page behind a live ad', 'Its own inbox and number', 'Its own browser, on mobile', 'New customer · US'],
        foot: 'Every message, dated, in the event log',
      },
      {
        label: 'Back to you',
        title: 'What came after the sign-up',
        items: ['Ferrow Coffee: Code rejected', 'Brindlecup: No email', 'Oskerby Roasters: No leak', 'Tallis & Ash: Off the ad’s offer'],
        foot: 'Offer · On screen · First email · Code',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-cro-hero',
      button: 'Start free',
      interest: 'mystery',
    },
    secondary: { label: 'See the blueprint', to: '/blueprints/mystery-shopper' },
  },

  /* The 10 steps, in the 3 phases the page draws them in. Each step's app window is in the page. */
  how: {
    heading: 'The pitch, the test and the readout, from one event log.',
    sub: 'How an invented agency checks Ferrow Coffee’s funnel, wins the account and tests every variant.',
    steps: [
      {
        title: 'Before the pitch',
        line: 'Steps 1 to 4',
        steps: [
          {
            title: 'Name the brands you’ll pitch',
            line: 'Paste a list, upload a CSV, connect Clay or call the API. Each brand gets its own persona.',
            example: 'The agency pastes the 12 brands in November’s pipeline. Ferrow Coffee’s founder has a call booked for Thursday.',
          },
          {
            title: 'Choose who signs up, and where',
            line: 'Pick the customer profile and country, where the visit starts and what it does. Each step has its own deadline, so a missing email counts once its time is up.',
            example: 'New customer · US, on mobile. Start from the page behind each live ad, sign up through the pop-up, take the code to checkout. Each result goes by webhook to #new-business.',
          },
          {
            title: 'A persona at each brand',
            line: 'Its own inbox, mobile number and browser, for that brand only. It opens the page behind the live ad from the ad’s own link, so no click is paid for, then signs up and screenshots every step.',
            example: 'Ferrow Coffee, 10:12 on Monday 2 Nov: opened the page behind its “20% off your first bag” ad and signed up through the pop-up on mobile. The pop-up offered 15%.',
          },
          {
            title: 'The pipeline, side by side',
            line: 'A report with a row per brand: the offer against the ad, what showed on screen, the minutes to the first email and the code at checkout.',
            example:
              '4 pop-ups didn’t match the ad, 6 sent no email within an hour and 3 codes were rejected at checkout. 6 have 2 or more leaks, Ferrow Coffee among them.',
          },
        ],
      },
      {
        title: 'The pitch',
        line: 'Steps 5 and 6',
        steps: [
          {
            title: 'A slide for the teardown',
            line: 'Each brand’s result as a slide: the ad, the pop-up, the email and the checkout, each dated, on 1 link anyone can open, the brand included.',
            example:
              'Ferrow Coffee: the ad said 20% off, the pop-up 15%. The welcome email came 7 hours later, and FERROW15 was rejected at checkout on a subscription.',
          },
          {
            title: 'The prospect beside its competitors',
            line: 'Give its competitors a persona too, so the pitch shows the brand’s sign-up next to theirs.',
            example:
              'Ferrow’s first email came after 7 hours. Its 5 competitors averaged 4 minutes. Only Ferrow’s code fails on a subscription, and none of the 6 shows its code on screen.',
          },
        ],
      },
      {
        title: 'After you win',
        line: 'Steps 7 to 10',
        steps: [
          {
            title: 'Every variant, before launch',
            line: 'Give it each variant’s preview link. Before launch, a new persona signs up through every variant on mobile and desktop, waits for the email and takes the code to checkout.',
            example:
              'Ferrow signs, and 3 quick wins ship that week: the pop-up matches the ad, the welcome email sends at once and the code works on a subscription. Test 1 shows the code on screen. The night before launch, both variants’ emails come within a minute and both codes work.',
          },
          {
            title: 'A variant that breaks mid test',
            line: 'While a test is live, a new sign-up goes through every variant each morning, so a silent app update is caught that morning, before anyone calls a winner.',
            example:
              'Friday 20 Nov, day 5 of test 1: B is ahead on opt-in rate, not yet significant. After an overnight update to the pop-up app, B takes the email and gives no code. Fixed by 09:00, and the 26 hours since the last good check are left out of both arms.',
          },
          {
            title: 'Before and after, in the event log',
            line: 'The client’s funnel stays checked from the page behind its live ads: the pop-up, the email and the code. The check from the pitch is the before, from day 1.',
            example: 'Ferrow, from the pitch to Cyber Monday: the first email from 7 hours to 38 seconds, and a code that works on a subscription.',
          },
          {
            title: 'The month, in 1 readout',
            line: 'Every variant as a customer got it, the breaks caught and the before and after, each value linked to its email or screenshot.',
            example: 'November: 3 quick wins shipped, both variants of test 1 checked every morning, 1 break caught and fixed the same morning, none open.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'Your tools see the pop-up and the order. Nothing in between.',
    items: [
      {
        title: 'The teardown stops at the page',
        line: 'Pages, heuristics and speed, all from outside. None of it shows what came after the sign-up.',
      },
      {
        title: 'Your tools wait for a login',
        line: 'Heatmaps, recordings and the testing tool start after the brand signs. Before the pitch, you have the page and nothing after it.',
      },
      {
        title: 'QA stops at the submit',
        line: 'Waiting for the email and trying the code on every variant, every morning a test is live, is a strategist’s whole week.',
      },
    ],
    answer: 'Obsession keeps a persona at each brand, so you see what it sends after the sign-up before anyone hands you a login.',
  },

  fit: {
    heading: 'Your audit covers the page. Obsession covers what comes after.',
    line: 'Nothing changes in how you research, test or report. Your team still owns the hypothesis, the test and the call.',
    items: [
      { title: 'One brand', line: 'Its pop-up, its emails and the screenshot behind each step, in your event log.' },
      { title: 'Your pipeline', line: 'A report with a row per brand, every week or every morning a test is live.' },
      { title: 'Where you work', line: 'Columns in Clay or Google Sheets, Slack or a webhook.' },
    ],
  },

  outputs: {
    heading: 'From the first teardown to the monthly readout.',
    groups: [
      {
        items: [
          {
            label: 'Winning clients',
            title: 'Open the teardown with what came after the sign-up',
            line: 'Each brand you pitch, as a slide with the email and the screenshots.',
            example: 'Ferrow Coffee: 20% in the ad, 15% in the pop-up, a code that fails on a subscription.',
          },
          {
            label: 'Testing',
            title: 'Check every variant past the submit',
            line: 'Each variant’s sign-up, email and code, before launch and every morning it’s live.',
            example: 'Test 1, B: ahead on opt-in rate and giving no code, caught that morning.',
          },
          {
            label: 'Paid traffic',
            title: 'Check the page behind every ad',
            line: 'Connect a client’s ad accounts, read only, and every live ad’s page is opened from its link each morning.',
            example: 'A client’s ad sending clicks to a sold out bag, found at 07:04.',
          },
          {
            label: 'Reporting',
            title: 'Put the customer in the readout',
            line: 'Every variant as a customer got it, each value linked to its email or screenshot.',
            example: 'Ferrow, November: 3 quick wins, 1 break caught the same morning.',
          },
        ],
      },
    ],
  },

  /* The real run, right after the invented pipeline: Brand G (content/sample.ts), fact for fact. `shop` is required by
     the type and is not drawn on this page. */
  found: {
    heading: 'A real store, checked the same way in September.',
    line: 'Brand G, a UK skincare store: what came after each step, and what never came.',
    items: [
      {
        label: 'Brand G · Basket left',
        verdict: 'No reminder',
        finding: 'A £40 Body Care Gift Set left in the basket at 02:57 on 22 Sep. Still no reminder 48 hours later.',
        shop: 'ferula',
      },
      {
        label: 'Brand G · Checkout left',
        verdict: 'No reminder at checkout',
        finding: 'A £21 checkout left at 03:11 the same night. No reminder in 48 hours either.',
        shop: 'ferula',
      },
      {
        label: 'Brand G · 4 customer profiles',
        verdict: '5 messages',
        finding: '5 messages in 48 hours, all on welcome and browse.',
        shop: 'ferula',
      },
    ],
    cta: { label: 'See sample data', to: '/sample-output' },
  },

  /* The 3 blueprints the page runs (before the pitch, every test, every ad), and the 1 real run. */
  more: {
    recipe: {
      label: 'Before the pitch',
      title: 'Mystery shopping',
      line: 'A persona signs up through each brand’s pop-up and logs every email, text and code.',
      cta: { label: 'See the blueprint', to: '/blueprints/mystery-shopper' },
    },
    second: {
      label: 'Every test',
      title: 'QA on your own flows',
      line: 'A new persona through every variant after each release or each morning, with a screenshot of any break.',
      cta: { label: 'See the blueprint', to: '/blueprints/website-audit' },
    },
    third: {
      label: 'Every ad',
      title: 'Ad landing check',
      line: 'Every live ad’s page each morning: it loads, matches the ad’s offer and has stock.',
      cta: { label: 'See the blueprint', to: '/blueprints/ad-landing-check' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample data',
      line: 'Brand G, a real skincare store: a £40 basket left at 02:57 on 22 Sep, still no reminder 48 hours later.',
      cta: { label: 'See sample data', to: '/sample-output' },
    },
  },

  fine: 'The agency, the brands and their .example addresses, the people, the ads, the test, the phone number and every figure on their screens are made up. Brand G is a real store, its name hidden. Clay, Google Sheets and Slack are trademarks of their owners.',

  faq: {
    heading: 'What CRO agencies ask.',
    items: [
      {
        q: 'What does Obsession do for CRO agencies?',
        a: answer,
        link: { label: 'See the blueprint', to: '/blueprints/mystery-shopper' },
      },
      {
        q: 'We do conversion, not email. Why does this matter to us?',
        a: 'Because the conversion isn’t finished at the sign-up. A code that never comes, or one rejected at checkout, loses the first order from paid visitors who already gave their email. That’s conversion rate and revenue per visitor, in the step neither your audit nor your testing tool can see.',
      },
      {
        q: 'Which pieces does it use?',
        a: 'Email, phone and the browser, under 1 persona per brand. Mystery shopping runs the pitch, QA on your own flows runs every variant and Ad landing check runs every ad, on the same key and bill.',
        link: { label: 'See the Test sign-up and agents blueprints', to: '/blueprints/test-sign-up-and-agents' },
      },
      {
        q: 'Can’t we sign up with a spare inbox?',
        a: 'A VA can sign up through 12 pop-ups in an afternoon. A persona keeps every account open, tries each code on a subscription the minute it lands and keeps each email with its headers. It does it again every morning a test is live, across your whole pipeline.',
      },
      {
        q: 'Does it click the brand’s ads?',
        a: 'No. It reads the brand’s live ads in public and opens each one’s page from the ad’s own link, so it sees what an ad visitor sees and no click is paid for. A brand with no live ads starts from its home page.',
      },
      {
        q: 'How does it reach each variant, and will it skew the test?',
        a: 'Through your testing tool’s preview link for each one, a few visits a day at most. Every visit carries a parameter you can add to the test’s and the client’s exclusions.',
      },
      {
        q: 'Do our clients have to agree?',
        a: 'Yes. A client’s store is checked with the client’s OK, and they install nothing. A brand you’re about to pitch is signed up to the way any customer can.',
      },
      {
        q: 'How many brands can it cover?',
        a: 'Your whole pipeline and every client at once. A list of 1,000 brands runs in one go, and each persona stays for months.',
      },
      {
        q: 'What does it cost?',
        a: `Start on the Free plan, with no credit card. Paid plans are ${orList(fees)} a month, and a blueprint is billed on the pieces it uses.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Is it legal, and does it buy anything?',
        a: 'A persona does only what any customer can, on the pages and forms anyone can use. It says it’s an AI when it talks to a person and stops before payment unless given your own card. It never uses fake payment details, never gets round a CAPTCHA or a bot block, stops at any identity check and never clicks paid ads at volume. This isn’t legal advice.',
        link: { label: 'Is it legal to sign up to a competitor?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
      },
    ],
  },

  final: {
    heading: 'See what every brand you pitch sends after its pop-up.',
    sub: 'The same persona checks every test you run, so you can see it in conversion rate, pitches won and clients kept.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-cro-final',
      button: 'Start free',
      interest: 'mystery',
    },
    link: { label: 'See the Test sign-up and agents blueprints', to: '/blueprints/test-sign-up-and-agents' },
  },
}
