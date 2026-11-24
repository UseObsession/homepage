import { kitPathOf } from '../kitPaths'
import { personaCostLine, plans } from '../prices'
import type { UseCaseStudy } from '../types'

/* Opt-out and cancel checks for compliance teams (/use-cases/opt-out-and-cancel-checks-for-compliance-teams), 22 Nov 2026
   rewrite for the toolkit position: a persona (its own browser, inbox and number) cancels, unsubscribes and texts STOP at
   the reader's company and its competitors, and keeps each cancel step and every message after an opt-out in the event
   log. Delivery monitoring and QA on your own flows run it; Email and SMS tracking covers competitors' lists. Part of the
   Test sign-up and agents kit. The laws and dates were read on their own pages on 12 Nov (EUR-Lex, gov.uk, the FTC,
   Google, Yahoo, eCFR; the research is in the Obsession folder, _research/seo/usecases-compliance-funds-12nov/) and are
   kept word for word. Fernhill and its competitors are invented, and `fine` says so. General information, never legal
   advice. Prices come from prices.ts. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const planWords = `the Free plan, then ${fees.slice(0, -1).join(', ')} or ${fees[fees.length - 1]} a month`

export const study: UseCaseStudy = {
  name: 'Opt-out and cancel checks for compliance teams',
  line: 'Every cancel step, and every email or text sent after an opt-out, dated.',

  meta: {
    path: '/use-cases/opt-out-and-cancel-checks-for-compliance-teams',
    title: 'Opt-out compliance: proof cancel, unsubscribe and STOP work',
    description:
      'AI agents cancel, unsubscribe and text STOP at your company and your competitors, and keep each step’s screenshot and every message sent after, dated.',
    answer:
      'Opt-out compliance means proving that cancelling, unsubscribing and texting STOP work the way the law and your own terms say. Obsession’s AI agents cancel, unsubscribe and text STOP at your company and your competitors, and keep every step and every message that follows, dated. Each is a persona with its own browser, inbox and number, and every email’s signature is checked on arrival.',
    ogImage: '/og/opt-out-and-cancel-checks-for-compliance-teams.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Opt-out and cancel checks for compliance teams', path: '/use-cases/opt-out-and-cancel-checks-for-compliance-teams' },
    ],
  },

  hero: {
    pill: 'Test sign-up and agents blueprints',
    headline: 'Proof for compliance teams that cancel, unsubscribe and STOP work.',
    sub: 'Opt-out compliance means proving that cancelling, unsubscribing and texting STOP work the way the law and your own terms say. Obsession’s AI agents cancel, unsubscribe and text STOP at your company and your competitors, and keep every step and every message that follows, dated.',
    example: { chips: ['Fernhill, a gym membership app', '3 competitors', 'Cancel, unsubscribe and STOP'] },
    flow: [
      {
        label: 'What you name',
        title: 'Your company and 3 competitors',
        items: ['The plan to cancel', 'The emails to unsubscribe from', 'The texts to reply STOP to', 'The deadlines to check against'],
        foot: 'In the UK, the EU or the US',
      },
      {
        label: 'Obsession',
        title: 'A persona at each company',
        items: ['A browser for the cancel flow', 'An inbox for every email after', 'A number for every text after STOP', 'Kept for months'],
        foot: 'Free while it waits',
      },
      {
        label: 'Where it lands',
        title: 'An evidence file per company',
        items: ['Each cancel step and save offer', 'Every email after an unsubscribe', 'Every text after STOP', 'A webhook, a sheet or your event log'],
        foot: 'Each with its screenshot or the message',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-compliance-hero',
      button: 'Start free',
      interest: 'delivery',
    },
    secondary: { label: 'See the blueprint', to: '/blueprints/delivery-monitoring' },
  },

  how: {
    heading: 'Name the companies and your deadlines. Every opt-out is followed for months.',
    sub: 'Fernhill, a gym membership app, follows its own cancel flow and opt-outs, and 3 competitors’.',
    steps: [
      {
        title: 'Set it up',
        line: 'Which companies, as which customer, and what each result is checked against.',
        chips: ['Your company and any competitor', 'New member · UK', 'Monthly plan', 'Says it’s an AI to a person'],
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
        title: 'A persona follows each company',
        line: 'It signs up, cancels, unsubscribes and texts STOP, then keeps everything that arrives after.',
        screen: 'optout',
        chips: ['Its own browser', 'Its own inbox', 'Its own number', 'Says it’s an AI'],
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
    answer: 'Tag and consent tools scan your pages. A persona keeps what a customer gets after they leave, each step’s screenshot and every message itself, dated.',
  },

  outputs: {
    heading: 'What compliance, legal and product teams do with it.',
    sub: 'Each use shows up in audit readiness, findings and complaints, where you can watch it.',
    groups: [
      {
        items: [
          {
            title: 'Answer a regulator with dates',
            line: 'With the screenshots and the time each was taken.',
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
            example: 'Brackenridge and Calder Club take more steps to cancel than to sign up, with the screens to show it.',
            link: { label: 'Email and SMS tracking', to: '/blueprints/email-sms-tracking' },
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
      label: 'The blueprint',
      title: 'Delivery monitoring',
      line: 'Personas time every message after each sign-up and opt-out, and flag any that should never have come.',
      cta: { label: 'See the blueprint', to: '/blueprints/delivery-monitoring' },
    },
    sample: {
      label: 'After every release',
      title: 'QA on your own flows',
      line: 'A new persona through your cancel flow after every release, each step screenshotted.',
      cta: { label: 'See the blueprint', to: '/blueprints/website-audit' },
    },
  },

  fine: 'Fernhill, its competitors and their .example addresses, every step, message and date in the example are made up. The rules above are general information, not legal advice.',

  faq: {
    heading: 'What compliance teams ask.',
    items: [
      {
        q: 'Where does the evidence come from?',
        a: 'From real subscriptions. A persona signs up, cancels, unsubscribes and texts STOP the way any customer can, in the country and plan you choose, and keeps each account open for months. It says it’s an AI when it talks to a person and never invents identity details.',
        link: { label: 'The lines every agent keeps', to: '/agents' },
      },
      {
        q: 'What counts as proof?',
        a: 'For each step, a screenshot and the time it was taken. For each email, the message itself, the time it arrived and its DKIM result, which shows the sending company signed it. For each text, the message and its time. Everything is kept exactly as it arrived.',
      },
      {
        q: 'Is it legal to check a competitor’s cancel flow?',
        a: 'Usually, when a persona goes through the same steps any customer can and says it’s an AI when a person asks. Our guide sets out the rules by country. It is general information, not legal advice, so check your own position with your lawyers.',
        link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
      },
      {
        q: 'What about the FTC’s click-to-cancel rule?',
        a: 'A US federal appeals court vacated it on procedural grounds in July 2025. Federal law on online subscriptions and state laws still apply. California, for one, requires online cancellation for anyone who signed up online, on contracts made or renewed from 1 July 2025.',
        link: { label: 'What is click-to-cancel?', to: '/glossary/click-to-cancel' },
      },
      {
        q: 'How long does it watch after an opt-out?',
        a: 'For as long as you keep the persona. It waits for free, and its inbox and number stay live, so a message sent days or months after an unsubscribe is caught.',
      },
      {
        q: 'How is it priced?',
        a: `${personaCostLine} It costs nothing while it waits, and each blueprint is billed on the pieces it uses. Start on ${planWords}.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Keep proof that every cancel, unsubscribe and STOP works.',
    sub: 'Start with your own cancel flow and one competitor’s, so you can see it in audit-ready evidence before a regulator asks.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-compliance-final',
      button: 'Start free',
      interest: 'delivery',
    },
    link: { label: 'See the Test sign-up and agents blueprints', to: kitPathOf.test },
  },
}
