import type { UseCaseStudy } from '../types'

/* Opt-out and cancel checks for compliance teams (/use-cases/opt-out-and-cancel-checks-for-compliance-teams), 12 Nov
   2026: what a subscription company shows a customer who leaves (each cancel step and save offer, renewal and
   price-rise notices, every email after an unsubscribe and every text after STOP), at the reader's own company and the
   competitors a regulator compares it with, looked up in Search or Insights, a table or a webhook. The plan, the search
   phrases and the fact-check are in the Obsession folder, _research/seo/usecases-compliance-funds-12nov/. Every law and
   date was read on its own page on 12 Nov (EUR-Lex, gov.uk, the FTC, Google, Yahoo, eCFR); the wording follows that
   check (the UK date as gov.uk gives it, Gmail's 48 hours as a recommendation, no finding of illegality from the sweep).
   Fernhill and its competitors are invented, and `fine` says so. The agents appear only in the answer on where the
   evidence comes from. General information, never legal advice. */

export const study: UseCaseStudy = {
  name: 'Opt-out and cancel checks for compliance teams',
  line: 'Every cancel step, and every email or text sent after an opt-out, dated.',

  meta: {
    path: '/use-cases/opt-out-and-cancel-checks-for-compliance-teams',
    title: 'Opt-out compliance: proof cancel, unsubscribe and STOP work',
    description:
      'Dated proof that cancel flows, unsubscribes and SMS STOP work, at your company and your competitors: each step’s screenshot and every message sent after.',
    answer:
      'Opt-out compliance means proving that cancelling, unsubscribing and texting STOP work the way the law and your own terms say. Obsession keeps that proof for your company and your competitors: each step of the cancel flow with its screenshot, and every email or text that arrives after an opt-out. Each one is dated, and every email’s signature is checked on arrival.',
    ogImage: '/og/opt-out-and-cancel-checks-for-compliance-teams.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Opt-out and cancel checks for compliance teams', path: '/use-cases/opt-out-and-cancel-checks-for-compliance-teams' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'Proof for compliance teams that cancel, unsubscribe and STOP work.',
    sub: 'Each step of the cancel flow with its screenshot, and every email or text that arrives after an unsubscribe or a STOP, with the time it came. At your company and the competitors a regulator compares you with, for as long as you follow them.',
    example: { chips: ['Fernhill, a gym membership app', '3 competitors', 'Cancel, unsubscribe and STOP'] },
    flow: [
      {
        label: 'What you name',
        title: 'Your company and 3 competitors',
        items: ['The plan to cancel', 'The emails to unsubscribe from', 'The texts to reply STOP to', 'The deadlines to check against'],
        foot: 'In the UK, the EU or the US',
      },
      {
        label: 'What comes back',
        title: 'Every step, dated',
        items: ['Each cancel step and save offer', 'Renewal and price-rise notices', 'Every email after an unsubscribe', 'Every text after STOP'],
        foot: 'Each with its screenshot or the message',
      },
      {
        label: 'Where it lands',
        title: 'Where your team works',
        items: ['Search: one company', 'Insights: a question across many', 'A webhook, a sheet or the API'],
        foot: 'An evidence file per company',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-compliance-hero',
      button: 'Request early access',
      interest: 'email-sms',
    },
  },

  how: {
    heading: 'Name the companies and your deadlines. Every opt-out is followed for months.',
    sub: 'Fernhill, a gym membership app, follows its own cancel flow and opt-outs, and 3 competitors’.',
    steps: [
      {
        title: 'Set it up',
        line: 'Which companies, as which customer, and what each result is checked against.',
        chips: ['Your company and any competitor', 'New member · UK', 'Monthly plan', 'Says it’s AI to a person'],
        steps: [
          {
            title: 'Name the companies',
            line: 'Your own company and each competitor, on the web or in the app.',
            example: 'Fernhill names itself and 3 competitors: Brackenridge, Calder Club and Dunmore Fit.',
          },
          {
            title: 'Pick the plan and the country',
            line: 'The plan a customer cancels and where they live. The flow and the rules can differ by country.',
            example: 'A monthly membership in the UK, and the same plan in Ireland.',
          },
          {
            title: 'Say what to check against',
            line: 'Your terms and the deadlines you hold yourself to. A result that misses one becomes a finding, with the evidence beside it.',
            example: 'Unsubscribes honoured within 2 days, nothing after STOP, and cancelling online in no more steps than signing up.',
          },
        ],
      },
      {
        title: 'Obsession follows each company',
        line: 'It signs up, cancels, unsubscribes and texts STOP, then keeps everything that arrives after.',
        screen: 'optout',
        chips: ['Its own inbox', 'Its own phone number', 'Its own browser', 'Says it’s AI'],
        steps: [
          {
            title: 'The cancel flow, step by step',
            line: 'Every screen from the account page to the confirmation, each with its screenshot and the time.',
            example: '1 Nov at Fernhill: 4 steps, with a save offer of 50% off for 3 months on step 2.',
          },
          {
            title: 'Every email after an unsubscribe',
            line: 'Each one kept as it arrived, with its time and its DKIM check, which shows which company signed it.',
            example: 'Unsubscribed 1 Nov at 09:14. On 10 Nov at 08:02: “Last chance: 30% off annual”, DKIM pass.',
          },
          {
            title: 'Every text after STOP',
            line: 'The confirmation, and anything sent after it.',
            example: 'STOP sent 1 Nov at 09:20, confirmed at 09:20. Nothing since.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'The rules on leaving get tighter in 2026 and 2027.',
    sub: 'Regulators already test from the outside. In a 2024 review of 642 subscription websites and apps by 27 consumer authorities in 26 countries, about 76% used at least one possible dark pattern. The authorities made no finding on whether any practice was unlawful.',
    items: [
      { title: 'EU withdrawal button', line: 'From 19 June 2026, for contracts made online that carry a right to withdraw (Directive (EU) 2023/2673).' },
      { title: 'UK subscription rules', line: 'The government says the Digital Markets, Competition and Consumers Act’s rules come into force in January 2027.' },
      { title: 'Unsubscribes', line: 'Gmail and Yahoo require one-click unsubscribe from bulk senders. In the US, CAN-SPAM allows 10 business days.' },
      { title: 'Texts', line: 'In the US, a STOP reply revokes consent to marketing texts, and the FCC’s rule gives 10 business days to honour it.' },
    ],
    answer: 'Tag and consent tools scan your pages. Obsession keeps what a customer gets after they leave: each step’s screenshot and every message itself, dated.',
  },

  outputs: {
    heading: 'What compliance, legal and product teams do with it.',
    groups: [
      {
        items: [
          {
            title: 'Answer a regulator with dates',
            line: 'Not with a description of how the flow should work.',
            example: 'Asked how cancelling worked in March, the team sent the 4 screenshots and their times in one file.',
          },
          {
            title: 'Catch a send that ignored an opt-out',
            line: 'The morning it arrives, before a complaint does.',
            example: 'The 10 Nov email reached the compliance team’s webhook at 08:03, and the list rule was fixed that day.',
          },
          {
            title: 'See where you stand',
            line: 'How many steps each competitor takes to cancel, and what each offers to stay.',
            example: 'Asked “Which competitors make cancelling longer than signing up?”, Insights named Brackenridge and Calder Club, with the screens.',
          },
          {
            title: 'Show the board what changed',
            line: 'A dated history of the flow, release by release.',
            example: 'A new save offer on step 2 appeared on 14 Oct, the day of an app update.',
          },
        ],
      },
    ],
  },

  more: {
    recipe: {
      label: 'The recipe',
      title: 'Email and SMS tracking',
      line: 'Every email and text a company sends a subscriber, on 1 timeline. When a watch ends, it texts STOP and checks the texts stop.',
      cta: { label: 'Learn more', to: '/recipes/email-sms-tracking' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample data',
      line: 'Brand G, a real skincare store: a £40 basket left at 02:57 on 22 Sep, still no reminder 48 hours later.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'Fernhill, its competitors and their .example addresses, every step, message and date in the example are made up. The rules above are general information, not legal advice.',

  faq: {
    heading: 'What compliance teams ask.',
    items: [
      {
        q: 'What does Obsession do for compliance teams?',
        a: 'Opt-out compliance means proving that cancelling, unsubscribing and texting STOP work the way the law and your own terms say. Obsession keeps that proof for your company and your competitors: each step of the cancel flow with its screenshot, and every email or text that arrives after an opt-out. Each one is dated, and every email’s signature is checked on arrival.',
      },
      {
        q: 'Where does the evidence come from?',
        a: 'From real subscriptions. Obsession’s agents sign up, cancel, unsubscribe and text STOP the way any customer can. They use the country and plan you choose, and keep each account open for months. They say they’re an AI when they talk to a person, never invent identity details and stop at an identity check.',
        link: { label: 'The lines every agent keeps', to: '/agents' },
      },
      {
        q: 'What counts as proof?',
        a: 'For each step, a screenshot and the time it was taken. For each email, the message itself, the time it arrived and its DKIM result, which shows the sending company signed it. For each text, the message and its time. Everything is kept exactly as it arrived.',
      },
      {
        q: 'Is it legal to check a competitor’s cancel flow?',
        a: 'Usually, when it goes through the same steps any customer can and says it’s an AI when a person asks. Our guide sets out the rules by country. It is general information, not legal advice, so check your own position with your lawyers.',
        link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
      },
      {
        q: 'What about the FTC’s click-to-cancel rule?',
        a: 'A US federal appeals court vacated it on procedural grounds in July 2025. Federal law on online subscriptions and state laws still apply. California, for one, requires online cancellation for anyone who signed up online, on contracts made or renewed from 1 July 2025.',
        link: { label: 'What is click-to-cancel?', to: '/glossary/click-to-cancel' },
      },
      {
        q: 'How long does it watch after an opt-out?',
        a: 'For as long as you follow the company. Emails and texts are kept the moment they arrive, so a message sent 3 days or 3 months after an unsubscribe is caught.',
      },
    ],
  },

  final: {
    heading: 'Which companies’ cancel flows should we look up first?',
    sub: 'Early access includes API and MCP access, lookups of every company already covered, and up to 5 companies added for you, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-compliance-final',
      button: 'Request early access',
      interest: 'email-sms',
    },
  },
}
