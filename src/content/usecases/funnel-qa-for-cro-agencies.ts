import type { UseCaseStudy } from '../types'

/* Funnel QA for CRO agencies (/use-cases/funnel-qa-for-cro-agencies), 9 Nov rewrite: the record of what each brand's
   funnel shows and sends after a sign-up (the pop-up's offer, the welcome email and its code, the reminders, the texts),
   dated, before the pitch and before and after every test, by Search, Insights, a table or a webhook. 1 brand carries
   the 10 steps (Ferrow Coffee, invented, at a .example address); the only real facts are our 1,500 runs and Brand G.
   Drawn by src/pages/CroAgencies.tsx, which keeps the app windows' rows and numbers. */

export const study: UseCaseStudy = {
  name: 'Funnel QA for CRO agencies',
  line: 'Every message a brand sends after its pop-up, before and after each test.',

  meta: {
    path: '/use-cases/funnel-qa-for-cro-agencies',
    title: 'Funnel QA for CRO agencies: from the pop-up to checkout',
    description:
      'What each brand’s funnel sends after the sign-up: the pop-up’s code, the welcome email, basket and checkout reminders, each dated, before and after a test.',
    answer:
      'Obsession collects what each brand’s funnel shows and sends after a sign-up: the pop-up’s offer, the welcome email and its code, the basket and checkout reminders and the texts. Each one is dated, with the email itself and the time it arrived. CRO agencies look up a prospect before the pitch, and check every test variant before launch and each morning it’s live.',
    ogImage: '/og/funnel-qa-for-cro-agencies.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Funnel QA for CRO agencies', path: '/use-cases/funnel-qa-for-cro-agencies' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'What each brand’s funnel sends, before and after every test.',
    sub: 'The pop-up’s offer, the welcome email and its code, the basket and checkout reminders and the texts, at every brand you pitch or test. Each one dated, with the email itself and the time it arrived.',
    video: { youtube: 'g7w1gAbIAWc', label: 'Watch how it works', title: 'Funnel QA for CRO agencies: how it works' },
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
        title: 'A new account at each brand',
        items: ['From the page behind a live ad', 'Its own inbox and number', 'Its own browser, on mobile', 'New customer · US'],
        foot: 'Every message, dated',
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
      button: 'Request early access',
      interest: 'mystery',
    },
  },

  /* The 10 steps, in the 3 phases the page draws them in. Each step's app window is in the page. */
  how: {
    heading: 'The pitch, the test and the readout, from 1 record.',
    sub: 'How an agency looks up Ferrow Coffee’s funnel, wins the account and checks every variant it tests.',
    steps: [
      {
        title: 'Before the pitch',
        line: 'Steps 1 to 4',
        steps: [
          {
            title: 'Look up the brands you’ll pitch',
            line: 'Paste a list, upload a CSV, connect Clay or call the API. A brand already in the index returns its record at once. One that isn’t, you Watch.',
            example: 'The agency pastes the 12 brands in November’s pipeline. 8 are in the index. Ferrow Coffee and 3 others aren’t, so it watches them. Ferrow’s founder has a call booked for Thursday.',
          },
          {
            title: 'Choose who signs up, and where',
            line: 'Pick the customer profile and country, where the visit starts and what it does. Each step has its own deadline, so a missing email counts once its time is up.',
            example: 'New customer · US, on mobile. Start from the page behind each live ad, sign up through the pop-up, take the code to checkout. Each new fact goes by webhook to #new-business.',
          },
          {
            title: 'A new account at each brand',
            line: 'Its own inbox, mobile number and browser, for that brand only. It opens the page behind the live ad from the ad’s own link, so no click is paid for, signs up and keeps a screenshot of every step.',
            example: 'Ferrow Coffee, 10:12 on Monday 2 Nov: opened the page behind its “20% off your first bag” ad and signed up through the pop-up on mobile. The pop-up offered 15%.',
          },
          {
            title: '1 question across the pipeline',
            line: 'Ask Insights across the list and get a report with a row per brand: the offer against the ad, what showed on screen, the minutes to the first email and the code at checkout.',
            example:
              '“Which of November’s brands lose the code after the pop-up?” 4 pop-ups didn’t match the ad, 6 sent no email within an hour and 3 codes were rejected at checkout. 6 have 2 or more leaks, Ferrow Coffee among them.',
          },
        ],
      },
      {
        title: 'The pitch',
        line: 'Steps 5 and 6',
        steps: [
          {
            title: 'A slide for the teardown',
            line: 'Each brand’s record as a slide: the ad, the pop-up, the email and the checkout, each dated, on 1 link anyone can open, the brand included.',
            example:
              'Ferrow Coffee: the ad said 20% off, the pop-up 15%. The welcome email came 7 hours later, and FERROW15 was rejected at checkout on a subscription.',
          },
          {
            title: 'The prospect beside its competitors',
            line: 'Look up its competitors the same way, so the pitch shows the brand’s sign-up next to theirs.',
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
            line: 'Give it each variant’s preview link. Before launch, a new account signs up through every variant on mobile and desktop, waits for the email and takes the code to checkout.',
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
            title: 'Before and after, on record',
            line: 'The client’s funnel stays watched from the page behind its live ads: the pop-up, the email and the code. The record from the pitch is the before, from day 1.',
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
        line: 'Waiting for the email and trying the code at checkout, on every variant, every morning a test is live, is a strategist’s whole week. So nobody does it.',
      },
    ],
    answer:
      'Obsession keeps the record of what each brand sends after the sign-up, dated, with the email itself and the time it arrived, before anyone hands you a login.',
  },

  fit: {
    heading: 'Your audit covers the page. Obsession covers what comes after.',
    line: 'Nothing changes in how you research, test or report. Your team still owns the hypothesis, the test and the call.',
    items: [
      { title: 'Search', line: 'One brand: its facts, the emails and screenshots behind them, and its record.' },
      { title: 'Insights', line: 'One question across your pipeline, answered as a report with a row per brand.' },
      { title: 'Where you work', line: 'Columns in Clay or Google Sheets, a webhook to Slack, the API or MCP.' },
    ],
  },

  outputs: {
    heading: 'What you do with the record.',
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

  /* Our own runs, right after the invented pipeline: the count Home uses, and Brand G, the 1 real record (content/sample.ts),
     fact for fact. `shop` is required by the type and is not drawn on this page. */
  found: {
    heading: '1,500 sign-ups, baskets and checkouts run at real companies, and counting.',
    line: 'Brand G, a real skincare store, checked in September: what came after each step, and what never came.',
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
    cta: { label: 'See the sample data', to: '/sample-output' },
  },

  /* The 3 recipes the page runs (before the pitch, every test, every ad), and the 1 real run. */
  more: {
    recipe: {
      label: 'Before the pitch',
      title: 'Prospect intelligence',
      line: 'What each brand on your list sends after the sign-up.',
      cta: { label: 'Learn more', to: '/recipes/prospect-intelligence' },
    },
    second: {
      label: 'Every test',
      title: 'Website audit',
      line: 'A new sign-up after every release or every morning, with a screenshot of any break.',
      cta: { label: 'Learn more', to: '/recipes/website-audit' },
    },
    third: {
      label: 'Every ad',
      title: 'Ad landing check',
      line: 'Every live ad’s page, opened from its link each morning.',
      cta: { label: 'Learn more', to: '/recipes/ad-landing-check' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample data',
      line: 'Brand G, a real skincare store: a £40 basket left at 02:57 on 22 Sep, still no reminder 48 hours later.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'The agency, the brands and their .example addresses, the people, the ads, the test, the phone number and every figure on their screens are made up. The 1,500 runs and Brand G’s record are real. Clay, Google Sheets and Slack are trademarks of their owners.',

  faq: {
    heading: 'What CRO agencies ask.',
    items: [
      {
        q: 'What does Obsession do for CRO agencies?',
        a: 'Obsession collects what each brand’s funnel shows and sends after a sign-up: the pop-up’s offer, the welcome email and its code, the basket and checkout reminders and the texts. Each one is dated, with the email itself and the time it arrived. CRO agencies look up a prospect before the pitch, and check every test variant before launch and each morning it’s live.',
      },
      {
        q: 'We do conversion, not email. Why does this matter to us?',
        a: 'Because the conversion isn’t finished at the sign-up. A code that never comes, or one rejected at checkout, loses the first order from paid visitors who already gave their email. That’s CVR and revenue per visitor, in the step neither your audit nor your testing tool can see.',
      },
      {
        q: 'Can’t we sign up with a spare inbox?',
        a: 'A VA can sign up through 12 pop-ups in an afternoon. Obsession keeps every account open, tries each code on a subscription the minute it lands, keeps each email as it arrived with its headers, and does it again every morning a test is live, across your whole pipeline.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. Obsession’s agents sign up through each brand’s pop-up the way any customer can, from the customer profiles and countries you choose, and keep each account open for months. Every email is kept as it arrived, with its sender checked.',
      },
      {
        q: 'What if a brand isn’t in the index yet?',
        a: 'Click Watch. Obsession signs up from the page behind its live ad, as the customer profile and country you pick, and keeps the account open. What it is sent joins the brand’s record the day it arrives. A brand already covered returns its history at once.',
      },
      {
        q: 'What counts as a leak?',
        a: 'Anything a new customer should get and doesn’t, by a deadline you set: a pop-up off the ad’s offer, nothing on screen after the sign-up, no email within the hour, the promised code missing, a code rejected at checkout, a link to a closed store.',
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
        a: 'Yes. A client’s store is checked with the client’s OK, and they install nothing. A brand you’re about to pitch you can look up before the call.',
      },
      {
        q: 'Will a brand or another agency know who’s asking?',
        a: 'No. Anyone can see that a brand is covered, and since when, but never who asked. Your list, your settings and your slides stay yours.',
      },
      {
        q: 'Can the slide go out under our name?',
        a: 'Yes. The slide carries your name and logo. The evidence link opens on a page anyone can check, under Obsession’s name or, with white label, yours.',
      },
      {
        q: 'How many brands can it cover?',
        a: 'Your whole pipeline and every client at once: a list of 1,000 brands is looked up in one go, and each account stays open for months.',
      },
      {
        q: 'Does it buy anything?',
        a: 'If you choose. A code check stops at checkout. A real order goes on a card you fund, never on fake payment details.',
      },
      {
        q: 'Is it legal?',
        a: 'Obsession does only what any customer can, on the pages and forms anyone can use. It says it’s an AI when it talks to a person, never uses fake payment details and never signs in to an account that isn’t its own. Any company can opt out at useobsession.com/agents. This isn’t legal advice.',
        link: { label: 'Is it legal to sign up to a competitor?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
      },
    ],
  },

  final: {
    heading: 'Which brands should we look up first?',
    sub: 'Early access includes API and MCP access, lookups of every company already covered, and up to 5 companies added for you, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-cro-final',
      button: 'Request early access',
      interest: 'mystery',
    },
    link: { label: 'See how agencies use Obsession', to: '/agencies' },
  },
}
