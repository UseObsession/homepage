import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/sms-stop: the definition query for the STOP reply and the opt-out behind it, from the CTIA guidelines and
   the FCC's revocation rule as published in the Federal Register. US rules; general information, never legal advice. */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'SMS STOP',
  line: 'The reply a person texts to a business to end its marketing texts, and the opt-out the business must then honour.',
  meta: {
    path: '/glossary/sms-stop',
    title: 'What is SMS STOP? The one-word reply that ends brand texts',
    description:
      'SMS STOP is the reply that ends a business’s marketing texts. Which words count, the confirmation it may send and the US limit of 10 business days.',
    answer:
      'SMS STOP is the reply a person texts to a business to stop its marketing texts, and the opt-out the business must then honour. In the US, the FCC’s rules treat words such as stop, quit, end, cancel and unsubscribe as an opt-out. The business may send one confirmation text and has no more than 10 business days to stop.',
    ogImage: '/og/glossary-sms-stop.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'SMS STOP', path: '/glossary/sms-stop' },
    ],
  },
  title: 'SMS STOP: the one-word reply that ends a brand’s texts',
  dek: 'Every marketing text ends with “Reply STOP to opt out”. What happens after a customer does is where a brand keeps its word or doesn’t.',
  primaryKeyword: 'sms stop',
  keywords: ['what is sms stop', 'reply stop to opt out', 'text stop to unsubscribe', 'sms opt out', 'stop keyword'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'marketing',
  term: {
    name: 'SMS STOP',
    alternateName: ['STOP keyword', 'reply STOP', 'SMS opt-out'],
    definition:
      'SMS STOP is the reply a person texts to a business to stop its marketing texts, and the opt-out the business must then honour.',
  },
  blocks: [
    { kind: 'h2', id: 'what-it-means', text: 'What SMS STOP means' },
    {
      kind: 'p',
      text: 'A customer who joined a brand’s text list replies STOP to leave it. The brand’s texting platform reads the reply, marks the number as opted out and sends one message to confirm. After that, no more marketing texts should arrive.',
    },
    {
      kind: 'p',
      text: 'The wireless industry’s [CTIA Messaging Principles and Best Practices](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf) (May 2023) ask senders to use standard STOP wording in opt-out instructions. They also ask senders to act on everyday language such as “please opt me out”. Senders should send one final confirmation per campaign, with nothing after it.',
    },
    { kind: 'h2', id: 'the-us-rule', text: 'The US rule on texting STOP' },
    {
      kind: 'p',
      text: 'The Federal Communications Commission (FCC) changed its rules under the Telephone Consumer Protection Act (TCPA) in a [2024 order published in the Federal Register](https://www.govinfo.gov/content/pkg/FR-2024-03-05/html/2024-04587.htm). Consumers can revoke consent in any reasonable manner that clearly says they want no more calls or texts. A reply using the words stop, quit, end, revoke, opt out, cancel or unsubscribe counts. A request must be honoured within a reasonable time not exceeding 10 business days. A sender may send a one-time text confirming the request, which the FCC presumes falls within the consumer’s consent if it goes within 5 minutes.',
    },
    {
      kind: 'p',
      text: 'The FCC set [11 April 2025](https://www.govinfo.gov/content/pkg/FR-2024-10-11/html/2024-23605.htm) as the date those rules took effect. This is general information about US rules, not legal advice. Other countries set their own.',
    },
    { kind: 'h2', id: 'how-its-checked', text: 'How a STOP reply is checked' },
    {
      kind: 'p',
      text: 'CRM and compliance teams test it by joining the list from a spare phone, replying STOP and logging what comes back. The confirmation should arrive within minutes. Any marketing text after it is a breach worth knowing about, and the same test with “please stop texting me” shows whether everyday wording is honoured too.',
    },
    {
      kind: 'p',
      text: `${ENTITY} For SMS STOP, that means the reply sent, the confirmation with the time it arrived and any text that still came afterwards. Each is dated, for your own brand and for competitors’.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Does “please stop texting me” count as an opt-out?',
          a: 'In the US, the FCC’s rules accept any reasonable way of saying it, and the CTIA guidelines ask senders to act on everyday language as well as the STOP keyword. This is general information, not legal advice.',
        },
        {
          q: 'Can a brand send a text after someone replies STOP?',
          a: 'One confirmation of the opt-out. The FCC presumes it falls within the consumer’s consent if it is sent within 5 minutes, and the CTIA guidelines say no further messages should follow it.',
          link: { label: 'What is one-click unsubscribe?', to: '/glossary/one-click-unsubscribe' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Messaging Principles and Best Practices',
      publisher: 'CTIA',
      url: 'https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf',
      date: '2023-05',
    },
    {
      title: 'Strengthening the Ability of Consumers To Stop Robocalls (final rule, 89 FR 15756)',
      publisher: 'Federal Register (Federal Communications Commission), GovInfo',
      url: 'https://www.govinfo.gov/content/pkg/FR-2024-03-05/html/2024-04587.htm',
      date: '2024-03-05',
    },
    {
      title: 'Strengthening the Ability of Consumers To Stop Robocalls (effective date, 89 FR 82518)',
      publisher: 'Federal Register (Federal Communications Commission), GovInfo',
      url: 'https://www.govinfo.gov/content/pkg/FR-2024-10-11/html/2024-23605.htm',
      date: '2024-10-11',
    },
  ],
  related: [
    '/glossary/one-click-unsubscribe',
    '/glossary/triggered-flow',
    '/glossary/click-to-cancel',
    'recipe:email-sms-tracking',
    'recipe:outbound-agent-check',
    '/use-cases/leak-checks-for-retention-agencies',
    'one-click-unsubscribe-requirements',
  ],
}
