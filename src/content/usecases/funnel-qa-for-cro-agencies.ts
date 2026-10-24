import type { UseCaseStudy } from '../types'

/* Funnel QA for CRO agencies (/use-cases/funnel-qa-for-cro-agencies). Written 22 Oct 2026 for the founder or CRO audit
   lead at a conversion rate optimisation shop serving Shopify brands, the next group after retention agencies (Seun,
   22 Oct: 1,135 reachable people at 673 agencies). Their words: pop up, opt-in rate, message match, CVR, revenue per
   visitor, variant, QA, readout, mobile and desktop.
   The hook: their audit screenshots the pop up; nobody signs up through it. The offer, in James's framing (22 Oct): name
   3 brands you're about to pitch and get what happened after the sign up for each, with proof, in 4 days; the 5 stores
   are those 3 and 2 of their own clients, with each client's OK. No price. The name and the headline are James's picks;
   "Leak checks" stays the retention and ecommerce pages' name.
   The copy, its 3 adversarial reviews (a CRO agency founder, a house style editor, a truth checker) and James's
   decisions are in docs/copy/funnel-qa-for-cro-agencies.md.
   1 brand carries the page, as Larch & Lye carries the retention page: Ferrow Coffee, a US coffee subscription brand at
   ferrowcoffee.example (Sam Ortega, its founder; Jonah, the agency's audit lead). Its ad promises 20% off the first bag,
   its pop up offers 15%, the code arrives 7 hours later and checkout rejects it on a subscription. The agency pitches
   with the slide, wins, ships 3 quick wins, checks test 1's 2 variants every morning and catches 1 broken by a silent app
   update. Drawn in James's format (10 steps in 3 phases, each beside its app window) by src/pages/CroAgencies.tsx from
   his pieces. Every word here; the app windows' rows and numbers in the page.
   The agent opens the page behind a brand's live ad from the ad's own link, so no click is paid for (system.md, the
   law); variants are reached through the testing tool's preview link. "Proof", never "receipt": the agent goes as far
   as checkout, where a receipt is the order email. The real proof is the retention page's (93%, 128 stores, 77%, the 4
   findings), led by the 1 after a sign up. */

export const study: UseCaseStudy = {
  name: 'Funnel QA for CRO agencies',
  line: 'Every pop up you pitch or test, checked past the sign up as a new customer, with proof.',

  meta: {
    path: '/use-cases/funnel-qa-for-cro-agencies',
    title: 'Funnel QA for CRO agencies, from the pop up to checkout',
    description:
      'AI customers follow a brand’s live ad as new shoppers and sign up through the pop up. See what comes after it before you pitch, and in every test you run.',
    answer:
      'Obsession’s AI agents follow any brand’s live ad as new customers, sign up through the pop up and take the code to checkout, then show you what happened, with proof. Before a pitch, you get a slide for your teardown; after you win, they check every test variant past the sign up, every morning it’s live, and the whole funnel every week.',
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
    headline: 'Be the new customer behind every pop up.',
    sub: 'Your audit screenshots the pop up. Obsession’s AI agents follow the brand’s live ad as new customers, sign up through it and take the code to checkout, then show you what happened, with proof. Before a pitch, you get a slide for your teardown. After you win, every test variant is checked past the sign up, every morning it’s live, and the whole funnel every week.',
    video: { youtube: 'g7w1gAbIAWc', label: 'Watch how it works', title: 'Funnel QA for CRO agencies: be the new customer behind every pop up' },
    example: { chips: [] },
    flow: [
      {
        label: 'Your pipeline in',
        title: 'Brands to pitch',
        items: ['Ferrow Coffee', 'Brindlecup', 'Oskerby Roasters', 'Tallis & Ash'],
        foot: '12 in November’s pipeline',
      },
      {
        label: 'Obsession',
        title: 'A new customer at each brand',
        items: ['From the page behind a live ad', 'Its own inbox', 'Its own browser, on mobile', 'Says it’s AI'],
        foot: 'Watching for 48 hours',
      },
      {
        label: 'Back to you',
        title: 'What happened after the sign up',
        items: ['Ferrow Coffee: Code rejected', 'Brindlecup: No email', 'Oskerby Roasters: No leak', 'Tallis & Ash: Off the ad’s offer'],
        foot: 'Offer · On screen · First email · Code',
      },
    ],
    capture: {
      kind: 'mystery',
      source: 'usecase-cro-hero',
      button: 'Check 5 brands free',
      interest: 'mystery',
    },
  },

  /* The 10 steps, in the 3 phases the page draws them in. Each step's app window is in the page. */
  how: {
    heading: 'From a prospect’s pop up to a test you can trust.',
    sub: 'How the agency in this example finds what happens after Ferrow Coffee’s pop up, wins the account and checks every variant it tests.',
    steps: [
      {
        title: 'Before the pitch',
        line: 'Steps 1 to 4',
        steps: [
          {
            title: 'Name the brands',
            line: 'Paste a list, upload a CSV, connect Clay or call the API. Any brand you can name, with no directory to check first.',
            example: 'The agency pastes the 12 brands in November’s pipeline, 4 of them coffee. Ferrow Coffee’s founder has a call booked for Thursday.',
          },
          {
            title: 'Choose where the visit starts',
            line: 'Pick where each visit starts, what the customer does and how long to watch. Each step has its own deadline, so a missing email counts as a leak once its time is up.',
            example: 'Start from the page behind each brand’s live ad. Sign up through the pop up on mobile, take the code to checkout and watch for 48 hours. Results to Slack, #new-business.',
          },
          {
            title: 'Each brand gets its own new customer',
            line: 'A real inbox, a real mobile number and its own browser, used for that brand only. It opens the page behind the brand’s live ad from the ad’s own link, so no click is paid for, then signs up and shops the way anyone would, saving a screenshot at every step. It says it’s AI when it talks to a person.',
            example: 'Ferrow Coffee, 10:12 on Monday 2 Nov: opened the page behind its “20% off your first bag” ad, then signed up through the pop up on mobile. The pop up offered 15%.',
          },
          {
            title: 'What happened after the sign up, brand by brand',
            line: 'After 48 hours, every brand has its slide: the offer against the ad, what showed on screen, the minutes to the first email and the code at checkout. A form that takes the email and shows nothing is a leak too.',
            example:
              '12 brands done. 4 pop ups broke message match with the ad, 6 sent no email within an hour and 3 codes were rejected at checkout. 6 have 2 or more leaks, Ferrow Coffee among them.',
          },
        ],
      },
      {
        title: 'The pitch',
        line: 'Steps 5 and 6',
        steps: [
          {
            title: 'A slide for the pre-call teardown',
            line: 'Each brand’s slide, ready for the teardown and the paid audit after it: the ad, the pop up, the email and the checkout, each screenshot dated, on 1 link anyone can open, including the brand.',
            example:
              'Ferrow Coffee: the ad said 20% off, the pop up 15%. The welcome email came 7 hours later, and FERROW15 was rejected at checkout on a subscription.',
          },
          {
            title: 'The prospect beside its rivals',
            line: 'Name its rivals with the list. Each gets its own new customer, so the pitch shows the brand’s sign up next to theirs.',
            example:
              'Wednesday’s pitch prep: Ferrow’s first email came after 7 hours, and the 5 rivals named on Monday averaged 4 minutes. Of the 6, only Ferrow’s code fails on a subscription, and none shows its code on screen.',
          },
        ],
      },
      {
        title: 'After you win',
        line: 'Steps 7 to 10',
        steps: [
          {
            title: 'Every variant, checked before launch',
            line: 'Give it each variant’s preview link. Before a test goes live, a new customer signs up through every variant on mobile and desktop, waits for the email and takes the code to checkout.',
            example:
              'Ferrow signs, and 3 quick wins ship that week: the pop up matches the ad, the welcome email sends at once and the code works on a subscription. Test 1 shows the code on screen after the sign up. The night before launch, both variants sign up, both emails come within a minute and both codes work.',
          },
          {
            title: 'A variant that stops working mid test',
            line: 'While a test is live, a new customer signs up through every variant each morning, so a silent app update is caught that morning, with the proof, before anyone calls a winner.',
            example:
              'Friday 20 Nov, day 5 of test 1: B is ahead on opt-in rate, not yet significant. After an overnight update to the pop up app, B takes the email and gives no code. Fixed by 09:00, and the 26 hours since the last good check are left out of both arms.',
          },
          {
            title: 'The whole funnel, every week',
            line: 'Every Monday, a new customer runs the client’s funnel from the page behind its live ads: the pop up, the email and the code at checkout. The check from the pitch stays on record, so the before is there from day 1.',
            example: 'Ferrow, from the pitch to Cyber Monday: the first email from 7 hours to 38 seconds, and a code that works on a subscription.',
          },
          {
            title: 'The month, in 1 readout',
            line: 'Every variant as a customer got it, the breaks caught and the before and after, every value linked to its proof. Ready for the monthly readout.',
            example: 'November: 3 quick wins shipped, both variants of test 1 checked every morning, 1 break caught and fixed the same morning, none open.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'Your tools see the pop up and the order. Not what happens in between.',
    items: [
      {
        title: 'The teardown stops at the page',
        line: 'Every pre-sale audit is built from outside: the pages, the heuristics, the speed. None of it shows what came after the sign up.',
      },
      {
        title: 'Your tools wait for a login',
        line: 'Heatmaps, recordings and your testing tool run only after the brand signs. Before the pitch, you see the page from outside and nothing after it.',
      },
      {
        title: 'QA stops at the submit',
        line: 'Your QA checks each variant renders and submits. Waiting for the email and trying the code at checkout, on every variant, every morning a test is live, is a strategist’s whole week. So nobody does it.',
      },
    ],
    answer:
      'Obsession’s AI agents sign up as new customers at every brand, from the page behind its live ads, so you see what happens after the sign up, with proof, before anyone hands you a login.',
  },

  fit: {
    heading: 'It checks the step after the sign up. Your audit still covers the page.',
    line: 'Nothing changes in how you research, test or report. Obsession shows what a new customer gets after the sign up; your team still owns the hypothesis, the test and the call.',
    items: [
      { title: 'Before the pitch', line: 'Name the brands. Each comes back as a slide for the teardown, with proof.' },
      { title: 'After you win', line: 'Every variant checked past the sign up every morning it’s live, and the whole funnel every week.' },
      { title: 'Where you work', line: 'Slack, the teardown deck, or a link in the monthly readout.' },
    ],
  },

  outputs: {
    heading: 'What you do with the leaks.',
    groups: [
      {
        items: [
          {
            label: 'Winning clients',
            title: 'Lead the teardown with what happens after the sign up',
            line: 'Name the brands you’re about to pitch; each comes back as a slide, with proof.',
            example: 'Ferrow Coffee: 20% in the ad, 15% in the pop up, a code that fails on a subscription.',
          },
          {
            label: 'Testing',
            title: 'Check every variant past the submit',
            line: 'Each variant’s sign up, email and code, before launch and every morning it’s live.',
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
            line: 'Every variant as a customer got it, every value linked to its proof.',
            example: 'Ferrow, November: 3 quick wins, 1 break caught the same morning.',
          },
        ],
      },
    ],
  },

  /* What real checks found, right after the invented pipeline: the retention page's proof, word for word, led by the
     finding after a sign up (the 2 shares are of the stores shopped on every journey and of the leaks they had; the 4
     findings are real, retold at invented shops, content/shops.ts). Only email was watched in those checks. */
  found: {
    heading: '93% of stores we shopped on every journey had a leak. 77% of the leaks were silence.',
    line: '128 stores shopped so far, watching what came by email after a sign up, a browse, a basket and a checkout. Silence is the leak a testing tool can’t see: the email that never came.',
    items: [
      {
        label: 'Drinks store · New subscriber',
        verdict: 'Broken links',
        finding: 'The welcome email came, but every product link and button opened a closed development store.',
        shop: 'quinnet',
      },
      {
        label: 'Fashion store · Basket left',
        verdict: 'Wrong email',
        finding: 'A buyer left a basket, and 2 hours later got a browse email instead.',
        shop: 'pellam',
      },
      {
        label: 'Cosmetics store · Basket left',
        verdict: 'Broken email',
        finding: '2 cart emails came, both with no product name and a blank total.',
        shop: 'celandre',
      },
      {
        label: 'Natural beauty store · Basket left',
        verdict: 'Cart silent',
        finding: 'A subscriber got the welcome, then left a basket. No cart email in 48 hours.',
        shop: 'ferula',
      },
    ],
    cta: { label: 'See a sample output', to: '/sample-output' },
  },

  /* The 3 recipes the page runs (before the pitch, every test, every ad), and the 1 real run. */
  more: {
    recipe: {
      label: 'Before the pitch',
      title: 'Prospect intelligence',
      line: 'Proof of what happens after the sign up at each brand on your list.',
      cta: { label: 'Learn more', to: '/recipes/prospect-intelligence' },
    },
    second: {
      label: 'Every test',
      title: 'Website audit',
      line: 'A new customer after every release or every morning, with a screenshot of any break.',
      cta: { label: 'Learn more', to: '/recipes/website-audit' },
    },
    third: {
      label: 'Every ad',
      title: 'Ad landing check',
      line: 'Every live ad’s page, opened from its link each morning, with the fix for any that can’t sell.',
      cta: { label: 'Learn more', to: '/recipes/ad-landing-check' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample output',
      line: 'A real store check from September 2026, shown in every format it can arrive in.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'The agency, the brands in the 10 steps and their .example addresses, the people, the ads, the test, the phone number and every figure on their screens are made up. The 93%, the 128 stores and the 77% are real, the 4 findings come from real checks with every store, brand and product changed, and the sample output is a real run. Clay and Slack are trademarks of their owners, named to show where a list can come from and where results go.',

  faq: {
    heading: 'What CRO agencies ask.',
    items: [
      {
        q: 'What does Obsession do for CRO agencies?',
        a: 'Obsession’s AI agents follow any brand’s live ad as new customers, sign up through the pop up and take the code to checkout, then show you what happened, with proof. Before a pitch, you get a slide for your teardown; after you win, they check every test variant past the sign up, every morning it’s live, and the whole funnel every week.',
      },
      {
        q: 'We do conversion, not email. Why does this matter to us?',
        a: 'Because the conversion isn’t finished at the sign up. A code that never comes, or one rejected at checkout, can lose the first order from your highest intent traffic: paid visitors who already gave their email. That’s CVR and revenue per visitor, in the step neither your audit nor your testing tool can see.',
      },
      {
        q: 'Our audit already covers pop ups. What does this add?',
        a: 'Your audit reviews the pop up as it looks. Obsession signs up through it as a new customer from the brand’s own ad, then records what arrives, when, and whether the code works at checkout, with proof the brand can open.',
      },
      {
        q: 'Can’t we sign up with a spare inbox?',
        a: 'A VA can sign up through 12 pop ups in an afternoon. Obsession also keeps every inbox open for 48 hours, tries each code on a subscription the minute it lands, keeps each email as it arrived with its headers, and does it again every morning a test is live.',
      },
      {
        q: 'What do the 5 free checks cover?',
        a: '3 brands you’re about to pitch and 2 of your clients, with their OK. At each, an AI agent follows a live ad as a new customer, signs up through the pop up, takes the code to checkout and watches the inbox for 48 hours. You get each brand’s slide within 4 days, with proof, in any format.',
      },
      {
        q: 'Do our clients have to agree?',
        a: 'Yes. A client’s store is checked with the client’s OK, and they install nothing. A brand you’re about to pitch you can check before the call.',
      },
      {
        q: 'Does it click the brand’s ads?',
        a: 'No. It reads the brand’s live ads in public and opens each one’s page from the ad’s own link, so it sees what an ad visitor sees and no click is paid for. A brand with no live ads starts from its home page.',
      },
      {
        q: 'How does it reach each variant?',
        a: 'Through your testing tool’s preview link for each one. A new customer signs up through every variant before launch and every morning while the test is live, so a silent app update is caught that morning.',
      },
      {
        q: 'Will it skew the test?',
        a: 'Barely. It reaches each variant through its preview link, a few visits a day at most, and every visit carries a parameter you can add to the test’s and the client’s exclusions.',
      },
      {
        q: 'Will this move ROAS?',
        a: 'It won’t change a bid. It stops paid clicks that became sign ups from dying at checkout, and with a client’s ad accounts connected, read only, it opens every live ad’s page each morning and flags any that’s sold out, broken or off the ad’s offer.',
      },
      {
        q: 'What counts as a leak?',
        a: 'Anything a new customer should get and doesn’t, by a deadline you set: a pop up that breaks message match with the ad, nothing on screen after the sign up, no email within the hour, the promised code missing, a code rejected at checkout, a link to a closed store.',
      },
      {
        q: 'Do we need the brand’s login?',
        a: 'No. It arrives the way any shopper would, from the brand’s own ad or page. Your testing tool and heatmaps still run inside, after the yes.',
      },
      {
        q: 'Does it buy anything?',
        a: 'If you choose. A code check stops at checkout. A real order goes on a card you fund, never on fake payment details.',
      },
      {
        q: 'Can the slide go out under our name?',
        a: 'Yes. The slide carries your name and logo. The proof link opens on a page anyone can check, under Obsession’s name or, with white label, yours.',
      },
      {
        q: 'Will a brand or another agency know who’s asking?',
        a: 'Not from us. Obsession shares what a brand did, never who asked, unless you choose to be named. Your list, your settings and your slides stay yours.',
      },
      {
        q: 'It’s Q4. Why now?',
        a: 'Because Black Friday pop ups and codes change every week this month, and nobody signs up through them again. 5 brands, 4 days, nothing to install, and the slides are ready for January, when brands review their agencies.',
      },
      {
        q: 'How many stores can it check at once?',
        a: 'Up to 1,000 stores in 48 hours, so a whole pipeline or every client store in one go.',
      },
      {
        q: 'Is it legal?',
        a: 'Every agent does only what any customer can do, and says it’s AI when it talks to a person. It never uses fake payment details or gets round a CAPTCHA. Any company can opt out at useobsession.com/agents. This is not legal advice.',
      },
    ],
  },

  final: {
    heading: 'Try it on 5 brands.',
    sub: 'Name 3 brands you’re about to pitch and 2 of your clients, with their OK. We’ll follow each one’s live ad as a new customer and send what happened after the sign up within 4 days, with proof.',
    capture: {
      kind: 'mystery',
      source: 'usecase-cro-final',
      button: 'Check 5 brands free',
      interest: 'mystery',
    },
    link: { label: 'See everything agents do for agencies', to: '/agencies' },
  },
}
