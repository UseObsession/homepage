import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/click-to-cancel: the definition query for click-to-cancel, with each jurisdiction's status as its own
   pages state it on 11 Nov 2026. "subscription trap law uk" and "dark patterns subscription cancellation" stay with
   their own posts (docs/SEARCH.md §2). General information, never legal advice. */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'Click-to-cancel',
  line: 'The principle that ending a subscription should be as easy as starting it, so what began online can end online.',
  meta: {
    path: '/glossary/click-to-cancel',
    title: 'What is click-to-cancel? The rule, and where it stands now',
    description:
      'Click-to-cancel means ending a subscription is as easy as starting it. The US FTC rule’s status, UK rules due January 2027 and the EU withdrawal button.',
    answer:
      'Click-to-cancel is the principle that ending a subscription should be as easy as signing up for it, so a customer who joined online can cancel online in a few clicks, without a phone call or a chat. The US Federal Trade Commission’s 2024 click-to-cancel rule was vacated by a federal appeals court in 2025, while UK rules with an easier exit are due in January 2027.',
    ogImage: '/og/glossary-click-to-cancel.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Click-to-cancel', path: '/glossary/click-to-cancel' },
    ],
  },
  title: 'Click-to-cancel: leaving a subscription as easily as you joined',
  dek: 'If signing up took one form, cancelling shouldn’t take a phone call. Where that principle is law, where it was struck down, and what each rule asks for.',
  primaryKeyword: 'click to cancel',
  keywords: ['what is click to cancel', 'click-to-cancel rule', 'ftc click to cancel', 'click to cancel law', 'negative option rule'],
  checked: '2026-11-11',
  readingMinutes: 4,
  reader: 'founders',
  term: {
    name: 'click-to-cancel',
    alternateName: ['click to cancel', 'click-to-cancel rule', 'easy cancellation'],
    definition:
      'Click-to-cancel is the principle that ending a subscription should be as easy as signing up for it, so a customer who joined online can cancel online in a few clicks, without a phone call or a chat.',
  },
  blocks: [
    { kind: 'h2', id: 'what-it-means', text: 'What click-to-cancel means' },
    {
      kind: 'p',
      text: 'Click-to-cancel compares the path into a subscription with the path out. A service that takes payment in one screen but makes a leaving customer phone during office hours fails it. A service with a cancel button in account settings, one confirmation and an email with the end date passes it. The idea covers every step of the [cancel flow](/glossary/cancel-flow), including any [save offer](/glossary/save-offer).',
    },
    { kind: 'h2', id: 'united-states', text: 'The US click-to-cancel rule and its status' },
    {
      kind: 'p',
      text: 'The Federal Trade Commission (FTC) announced its final click-to-cancel rule on 16 October 2024, as amendments to its [Negative Option Rule](https://www.ftc.gov/legal-library/browse/rules/negative-option-rule), which covers offers that renew unless the customer acts. The US Court of Appeals for the Eighth Circuit vacated the 2024 rule in 2025, finding the FTC’s failure to issue a preliminary regulatory analysis procedurally insufficient. On 12 February 2026 the FTC [restored the rule to its pre-2024 text](https://www.govinfo.gov/content/pkg/FR-2026-02-12/html/2026-02866.htm). On 11 March 2026 it [asked for public comment](https://www.ftc.gov/news-events/news/press-releases/2026/03/ftc-seeks-public-comment-response-advance-notice-proposed-rulemaking-regarding-negative-option) on amending it again, including with parts of the vacated rule.',
    },
    { kind: 'h2', id: 'united-kingdom', text: 'The UK subscription rules' },
    {
      kind: 'p',
      text: 'The Digital Markets, Competition and Consumers Act 2024 contains a chapter on subscription contracts, and [legislation.gov.uk](https://www.legislation.gov.uk/ukpga/2024/13/part/4/chapter/2) still marks it as prospective, meaning not yet in force. On 9 August 2026 the government said the [new rules will come into force in January 2027](https://www.gov.uk/government/news/pm-starts-roll-out-of-everyday-fixes-on-the-cost-of-living-ending-rip-off-discounts-and-subscription-traps). They bring clearer information up front, regular reminders, a much easier exit and a 14-day cooling-off period after a trial or long-term contract renews.',
    },
    { kind: 'h2', id: 'european-union', text: 'The EU withdrawal button' },
    {
      kind: 'p',
      text: '[Directive (EU) 2023/2673](https://eur-lex.europa.eu/eli/dir/2023/2673/oj/eng) requires traders to offer a withdrawal function, labelled “withdraw from contract here” or an unambiguous equivalent, for contracts made through an online interface. Member States apply it from 19 June 2026. It covers withdrawing from a new contract, beside each country’s own rules on ending a subscription later. This is general information, not legal advice.',
    },
    { kind: 'h2', id: 'how-its-checked', text: 'How a cancel path is checked against click-to-cancel' },
    {
      kind: 'p',
      text: 'A compliance team proves a cancel path works by walking it as a customer and keeping every screen and email with its date. One walk proves little, because a release can add a step the next week.',
    },
    {
      kind: 'p',
      text: `${ENTITY} For click-to-cancel, that means each screen from the cancel button to the confirmation and every email after it, for your service and competitors’, each dated with its screenshot or the raw email. Compliance teams use it to prove their own flow ([opt-out and cancel checks](/use-cases/opt-out-and-cancel-checks-for-compliance-teams)).`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is the FTC click-to-cancel rule in effect?',
          a: 'No. A federal appeals court vacated the 2024 rule in 2025, and in February 2026 the FTC restored the earlier version of its Negative Option Rule. This is general information, not legal advice.',
        },
        {
          q: 'Does click-to-cancel ban save offers?',
          a: 'The principle is about how easy the exit is. A save offer that a customer can decline in one step leaves the exit easy. One that has to be refused again and again before the cancel button appears does not.',
          link: { label: 'What is a save offer?', to: '/glossary/save-offer' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Negative Option Rule',
      publisher: 'US Federal Trade Commission',
      url: 'https://www.ftc.gov/legal-library/browse/rules/negative-option-rule',
    },
    {
      title: 'Revision of the Negative Option Rule, Withdrawal of the CARS Rule, Removal of the Non-Compete Rule To Conform These Rules to Federal Court Decisions',
      publisher: 'Federal Register (US Federal Trade Commission), GovInfo',
      url: 'https://www.govinfo.gov/content/pkg/FR-2026-02-12/html/2026-02866.htm',
      date: '2026-02-12',
    },
    {
      title: 'FTC Seeks Public Comment in Response to Advance Notice of Proposed Rulemaking Regarding Negative Option',
      publisher: 'US Federal Trade Commission',
      url: 'https://www.ftc.gov/news-events/news/press-releases/2026/03/ftc-seeks-public-comment-response-advance-notice-proposed-rulemaking-regarding-negative-option',
      date: '2026-03-11',
    },
    {
      title: 'Digital Markets, Competition and Consumers Act 2024, Part 4, Chapter 2: Subscription contracts',
      publisher: 'legislation.gov.uk',
      url: 'https://www.legislation.gov.uk/ukpga/2024/13/part/4/chapter/2',
      date: '2024',
    },
    {
      title: 'PM starts roll out of ‘everyday fixes’ on the cost of living, ending rip-off discounts and subscription traps',
      publisher: 'Prime Minister’s Office, 10 Downing Street, GOV.UK',
      url: 'https://www.gov.uk/government/news/pm-starts-roll-out-of-everyday-fixes-on-the-cost-of-living-ending-rip-off-discounts-and-subscription-traps',
      date: '2026-08-09',
    },
    {
      title: 'Directive (EU) 2023/2673 amending Directive 2011/83/EU as regards financial services contracts concluded at a distance',
      publisher: 'EUR-Lex, Publications Office of the European Union',
      url: 'https://eur-lex.europa.eu/eli/dir/2023/2673/oj/eng',
      date: '2023-11-22',
    },
  ],
  related: [
    '/glossary/cancel-flow',
    '/glossary/save-offer',
    '/glossary/dark-pattern',
    '/glossary/one-click-unsubscribe',
    '/glossary/sms-stop',
    'subscription-trap-laws',
    'recipe:trial-teardown',
    '/sample-output',
  ],
}
