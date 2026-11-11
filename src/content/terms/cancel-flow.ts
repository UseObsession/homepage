import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/cancel-flow: the definition query for the steps between a cancel button and a confirmation.
   "dark patterns subscription cancellation" and "subscription trap law uk" stay with their own posts
   (docs/SEARCH.md §2); this page owns "what is a cancel flow" and links click-to-cancel for the law. */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'Cancel flow',
  line: 'The screens, questions and messages a customer meets to end a subscription, from cancel button to confirmation.',
  meta: {
    path: '/glossary/cancel-flow',
    title: 'What is a cancel flow? The steps from cancel to confirmed',
    description:
      'A cancel flow is every screen, question and message a customer meets when ending a subscription. What sits inside one, the rules on it, and how it is kept.',
    answer:
      'A cancel flow is the sequence of screens, questions and messages a customer goes through to end a subscription, from the cancel button to the confirmation. It often holds a survey, a save offer and an email after the fact. It exists only for a signed-in subscriber, so no search engine or public crawler ever sees it.',
    ogImage: '/og/glossary-cancel-flow.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Cancel flow', path: '/glossary/cancel-flow' },
    ],
  },
  title: 'Cancel flow: every step between “cancel” and “you’ve cancelled”',
  dek: 'Signing up usually takes one form. Leaving can take a survey, an offer to stay, a confirm button and an email, and every company designs its own path.',
  primaryKeyword: 'cancel flow',
  keywords: ['what is a cancel flow', 'cancellation flow', 'subscription cancel flow', 'cancel flow examples', 'cancellation journey'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'founders',
  term: {
    name: 'cancel flow',
    alternateName: ['cancellation flow', 'cancellation journey', 'cancel path'],
    definition:
      'A cancel flow is the sequence of screens, questions and messages a customer goes through to end a subscription, from the cancel button to the confirmation.',
  },
  art: {
    kind: 'flow',
    title: 'streamline.example · cancel',
    status: { tone: 'info', text: 'Example' },
    steps: [
      { label: 'Manage plan', detail: 'Account settings, then a Cancel link at the foot of the page.', tone: 'info' },
      { label: 'Why are you leaving?', detail: 'A survey with 6 reasons and a free-text box.', tone: 'info' },
      { label: 'Save offer', detail: '50% off for 3 months, or pause for up to 3 months.', tone: 'info' },
      { label: 'Confirm', detail: 'A second Cancel button. The plan ends at the close of the billing month.', tone: 'ok' },
      { label: 'Confirmation email', detail: 'Arrived 2 minutes later, with the end date.', tone: 'ok' },
    ],
    foot: 'Streamline is an invented company. Every step here exists only for a signed-in subscriber.',
  },
  blocks: [
    { kind: 'h2', id: 'whats-inside', text: 'What sits inside a cancel flow' },
    {
      kind: 'p',
      text: 'Most cancel flows share the same parts, in an order each company chooses. Each part is a decision about how hard leaving should be.',
    },
    {
      kind: 'list',
      items: [
        '**The way in:** a cancel link in account settings, or a phone number or chat window instead.',
        '**The survey:** a question about why the customer is leaving, sometimes required before the next step.',
        '**The [save offer](/glossary/save-offer):** a discount, a pause or a cheaper plan to stay.',
        '**The confirmation:** the screen and the email that say the subscription has ended, and when.',
        '**What follows:** a win-back email days or weeks later, or a renewal charge if the cancel didn’t take.',
      ],
    },
    { kind: 'h2', id: 'why-it-matters', text: 'Why cancel flows are watched by retention and compliance teams' },
    {
      kind: 'p',
      text: 'Retention teams compare their own cancel flow with competitors’ to see who offers what to stay. Compliance teams need evidence that leaving is as easy as the law requires. In the UK, the government said on 9 August 2026 that [new subscription rules will come into force in January 2027](https://www.gov.uk/government/news/pm-starts-roll-out-of-everyday-fixes-on-the-cost-of-living-ending-rip-off-discounts-and-subscription-traps), promising a much easier exit from contracts. In the EU, Article 25 of the [Digital Services Act](https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng) bars online platforms from interfaces that deceive or manipulate users. It names “making the procedure for terminating a service more difficult than subscribing to it” as a practice the European Commission may issue guidelines on.',
    },
    {
      kind: 'p',
      text: 'The US rule known as [click-to-cancel](/glossary/click-to-cancel) has its own history, and a cancel path built to wear people down is a classic [dark pattern](/glossary/dark-pattern). This is general information, not legal advice.',
    },
    { kind: 'h2', id: 'how-its-kept', text: 'How a cancel flow is kept as evidence' },
    {
      kind: 'p',
      text: 'By hand, someone subscribes, waits, clicks cancel and screenshots each screen, then watches the inbox for what follows. The whole round starts again whenever the company changes the flow.',
    },
    {
      kind: 'p',
      text: `${ENTITY} For a cancel flow, that means each screen from the cancel button to the confirmation, the offer made on the way and every email after it. Each is dated, so a change to the flow shows up as a new version beside the old one. Compliance teams keep it as evidence ([opt-out and cancel checks](/use-cases/opt-out-and-cancel-checks-for-compliance-teams)).`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the difference between a cancel flow and click-to-cancel?',
          a: 'A cancel flow is whatever path a company builds for leaving. Click-to-cancel is the principle, and in some places the law, that the path should be as easy as signing up was.',
          link: { label: 'What is click-to-cancel?', to: '/glossary/click-to-cancel' },
        },
        {
          q: 'Can a cancel flow include a save offer?',
          a: 'Yes, and most do. A save offer becomes a problem when it stands between the customer and the exit, for example when the cancel button appears only after the customer declines it more than once.',
          link: { label: 'What is a save offer?', to: '/glossary/save-offer' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'PM starts roll out of ‘everyday fixes’ on the cost of living, ending rip-off discounts and subscription traps',
      publisher: 'Prime Minister’s Office, 10 Downing Street, GOV.UK',
      url: 'https://www.gov.uk/government/news/pm-starts-roll-out-of-everyday-fixes-on-the-cost-of-living-ending-rip-off-discounts-and-subscription-traps',
      date: '2026-08-09',
    },
    {
      title: 'Regulation (EU) 2022/2065 on a Single Market for Digital Services (Digital Services Act)',
      publisher: 'EUR-Lex, Publications Office of the European Union',
      url: 'https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng',
      date: '2022-10-19',
    },
  ],
  related: [
    '/glossary/save-offer',
    '/glossary/click-to-cancel',
    '/glossary/dark-pattern',
    '/glossary/login-wall',
    'recipe:trial-teardown',
    '/use-cases/trial-checks-for-software-companies',
    'subscription-trap-laws',
    '/sample-output',
  ],
}
