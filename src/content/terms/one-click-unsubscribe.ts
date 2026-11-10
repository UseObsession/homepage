import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/one-click-unsubscribe: the definition query. "one click unsubscribe requirements" and "law" stay with
   their own post (docs/SEARCH.md §2); this page owns "what is one-click unsubscribe" and how it works. */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'One-click unsubscribe',
  line: 'Leaving a mailing list with one action in the email app, set up by two email headers defined in RFC 8058.',
  meta: {
    path: '/glossary/one-click-unsubscribe',
    title: 'What is one-click unsubscribe? How RFC 8058 headers work',
    description:
      'One-click unsubscribe lets a reader leave a mailing list with one action in their email app. How the RFC 8058 headers work, and what Gmail and Yahoo want.',
    answer:
      'One-click unsubscribe is a way to leave a mailing list with a single action in the email app, set up by the List-Unsubscribe and List-Unsubscribe-Post headers defined in RFC 8058. The reader never visits a page or logs in, and Gmail and Yahoo require it from bulk senders of marketing email.',
    ogImage: '/og/glossary-one-click-unsubscribe.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'One-click unsubscribe', path: '/glossary/one-click-unsubscribe' },
    ],
  },
  title: 'One-click unsubscribe: leaving a mailing list in a single tap',
  dek: 'An email app can offer an Unsubscribe button beside the sender’s name when 2 lines in the email’s headers allow it. Without them, the reader hunts for the footer link.',
  primaryKeyword: 'one-click unsubscribe',
  keywords: ['what is one-click unsubscribe', 'one click unsubscribe', 'rfc 8058', 'list-unsubscribe-post', 'list-unsubscribe header'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'marketing',
  term: {
    name: 'one-click unsubscribe',
    alternateName: ['one click unsubscribe', 'RFC 8058 unsubscribe', 'List-Unsubscribe-Post'],
    definition:
      'One-click unsubscribe is a way to leave a mailing list with a single action in the email app, set up by the List-Unsubscribe and List-Unsubscribe-Post headers defined in RFC 8058.',
  },
  blocks: [
    { kind: 'h2', id: 'how-it-works', text: 'How one-click unsubscribe works' },
    {
      kind: 'p',
      text: '[RFC 8058](https://datatracker.ietf.org/doc/html/rfc8058), a Proposed Standard published in January 2017, sets out the mechanism. Every marketing email carries two headers, the lines of technical information above the message that readers rarely see.',
    },
    {
      kind: 'list',
      items: [
        '**List-Unsubscribe:** must contain one HTTPS address for the unsubscribe, and may also hold others such as a mailto address.',
        '**List-Unsubscribe-Post:** contains the value List-Unsubscribe=One-Click, which tells the email app it can unsubscribe the reader with a single request.',
      ],
    },
    {
      kind: 'p',
      text: 'When the reader taps Unsubscribe, the email app sends that request to the HTTPS address itself. The RFC says the request must not carry cookies or any other context, and the sender must not answer with a redirect. The email must also carry a valid [DKIM](/glossary/dkim) signature covering both headers.',
    },
    { kind: 'h2', id: 'who-requires-it', text: 'Who requires one-click unsubscribe' },
    {
      kind: 'p',
      text: 'Google’s [email sender guidelines](https://support.google.com/a/answer/81126) apply from 1 February 2024 to anyone sending more than 5,000 messages a day to Gmail accounts. Their marketing and subscribed messages must support one-click unsubscribe and show a clearly visible unsubscribe link in the body. Its [sender guidelines FAQ](https://support.google.com/a/answer/14229414) recommends fulfilling unsubscribe requests within 48 hours and says transactional messages are excluded. Yahoo’s [sender best practices](https://senders.yahooinc.com/best-practices/) ask bulk senders for a working list-unsubscribe header that supports one-click unsubscribe, and to honour unsubscribes within 2 days.',
    },
    {
      kind: 'p',
      text: 'The law sets its own floor. In the US, the FTC’s [CAN-SPAM compliance guide](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business) says senders must honour an opt-out within 10 business days. The opt-out must keep working for at least 30 days after the message is sent. This is general information, not legal advice.',
    },
    { kind: 'h2', id: 'how-its-checked', text: 'How one-click unsubscribe is checked' },
    {
      kind: 'p',
      text: 'By hand, a CRM or deliverability lead opens a message’s raw source (Show original in Gmail) and reads the 2 headers and the DKIM result. Then they tap Unsubscribe and watch the inbox for anything that still arrives.',
    },
    {
      kind: 'p',
      text: `${ENTITY} Because each email is kept raw with its sender checked, its unsubscribe headers and DKIM result sit beside the time it arrived, for your brand and for competitors’.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is an unsubscribe link in the footer enough?',
          a: 'For bulk senders to Gmail and Yahoo, no. Both ask for the one-click headers, and Google also asks for a clearly visible unsubscribe link in the message body.',
        },
        {
          q: 'How fast does an unsubscribe have to be honoured?',
          a: 'Yahoo asks for 2 days and Google recommends 48 hours. In the US, CAN-SPAM allows up to 10 business days. Other countries set their own rules.',
        },
      ],
    },
  ],
  sources: [
    {
      title: 'RFC 8058: Signaling One-Click Functionality for List Email Headers',
      publisher: 'IETF',
      url: 'https://datatracker.ietf.org/doc/html/rfc8058',
      date: '2017-01',
    },
    {
      title: 'Email sender guidelines',
      publisher: 'Google Workspace Admin Help',
      url: 'https://support.google.com/a/answer/81126',
    },
    {
      title: 'Email sender guidelines FAQ',
      publisher: 'Google Workspace Admin Help',
      url: 'https://support.google.com/a/answer/14229414',
    },
    {
      title: 'Sender best practices',
      publisher: 'Yahoo Sender Hub',
      url: 'https://senders.yahooinc.com/best-practices/',
    },
    {
      title: 'CAN-SPAM Act: A Compliance Guide for Business',
      publisher: 'US Federal Trade Commission',
      url: 'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business',
      date: '2023-08',
    },
  ],
  related: [
    '/glossary/dkim',
    '/glossary/sms-stop',
    '/glossary/click-to-cancel',
    '/glossary/triggered-flow',
    'one-click-unsubscribe-requirements',
    'recipe:email-sms-tracking',
    'email-marketing-audit',
    'competitor-email-tracking-tools',
  ],
}
