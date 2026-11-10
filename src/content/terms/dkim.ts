import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/dkim: for a CRM or compliance lead who needs to know what the "dkim=pass" beside a kept email proves.
   Every fact is from RFC 6376 itself, read 11 Nov 2026. The picture is the check as a log, at an invented domain. */
const DEFINITION =
  'DKIM, short for DomainKeys Identified Mail, is a signature a sending domain adds to each email, which any receiver can check against a public key the domain publishes in its DNS.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'DKIM',
  line: 'A signature a sending domain adds to each email, checked against a public key it publishes in its DNS.',
  meta: {
    path: '/glossary/dkim',
    title: 'What is DKIM? How an email signature proves who sent it',
    description:
      'DKIM is a signature a sending domain adds to each email, checked against a key in its DNS. What the selector and record are, and what a DKIM pass proves.',
    answer: `${DEFINITION} A pass shows that the domain named in the signature took responsibility for the email, and that the parts it signed haven’t changed since.`,
    ogImage: '/og/glossary-dkim.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'DKIM', path: '/glossary/dkim' },
    ],
  },
  title: 'DKIM: the signature that shows which domain sent an email',
  dek: 'Every email from a domain that signs its mail carries a DKIM signature in its headers. Checking it tells you which domain stands behind the message and whether its signed parts changed after sending.',
  primaryKeyword: 'dkim',
  keywords: ['what is dkim', 'dkim meaning', 'dkim signature', 'dkim selector', 'dkim record', 'dkim check'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'marketing',
  term: {
    name: 'DKIM',
    alternateName: ['DomainKeys Identified Mail', 'DKIM signature'],
    definition: DEFINITION,
  },
  art: {
    kind: 'log',
    title: 'northwind.example · DKIM check',
    who: 'A new subscriber’s inbox',
    status: { tone: 'info', text: 'Example' },
    rows: [
      { time: '09:01:05', text: 'Email arrives: “Welcome to Northwind, here’s 20% off”', detail: 'From: hello@northwind.example', tone: 'info' },
      { time: '09:01:05', text: 'DKIM-Signature header read', detail: 'd=northwind.example · s=mail2026', tone: 'info' },
      { time: '09:01:06', text: 'Public key fetched from DNS', detail: 'TXT record at mail2026._domainkey.northwind.example', tone: 'info' },
      { time: '09:01:06', text: 'Body hash recomputed', detail: 'Matches bh= in the signature', tone: 'ok' },
      { time: '09:01:06', text: 'Signature verified', detail: 'dkim=pass, signed by northwind.example', tone: 'ok' },
    ],
    foot: 'Northwind is an invented company. The receiver needs nothing from the sender beyond the key its DNS already publishes.',
  },
  blocks: [
    { kind: 'h2', id: 'what-a-signature-holds', text: 'What a DKIM signature holds' },
    {
      kind: 'p',
      text: 'DKIM is defined in [RFC 6376](https://www.rfc-editor.org/rfc/rfc6376), an Internet Standard published in September 2011. The sending server adds a header called DKIM-Signature to each email. It carries a hash of the body and a list of the headers that were signed. The signature over both is made with the domain’s private key.',
    },
    {
      kind: 'list',
      items: [
        '**d= (the signing domain):** the domain that takes responsibility for the email, such as northwind.example.',
        '**s= (the selector):** the name of the key that signed it. The standard lets a domain publish several keys at once, and the selector says which one to use.',
        '**The DNS record:** a TXT record at selector._domainkey.domain, for example mail2026._domainkey.northwind.example, that holds the public key.',
        '**bh= and h=:** the body hash and the list of signed headers, which the receiver recomputes and compares.',
      ],
    },
    { kind: 'h2', id: 'what-a-pass-proves', text: 'What a DKIM pass proves to a CRM or compliance team' },
    {
      kind: 'p',
      text: 'A pass means the domain in d= claimed responsibility for the email, and the hashed content hasn’t changed since it was signed. RFC 6376 is careful about the limits. Verifying the signature asserts nothing else about the message, and a failed check doesn’t by itself force a receiver to reject it. The signing domain also needn’t match the address in the From line, so a careful reader checks d= beside From.',
    },
    {
      kind: 'p',
      text: 'For a CRM lead, that means a colleague can check that a competitor’s domain sent this welcome offer, in these words, on this date. For a compliance lead, a signed renewal notice or cancel confirmation shows which company sent it and that its signed parts are exactly as sent.',
    },
    { kind: 'h2', id: 'how-a-check-works', text: 'How a DKIM check works' },
    {
      kind: 'p',
      text: 'The receiving server runs the check without asking the sender anything. It reads the selector and domain from the header, fetches the TXT record from DNS, recomputes the body hash and verifies the signature with the public key. The result is a pass or a fail, with the domain that signed.',
    },
    { kind: 'h2', id: 'how-signed-email-is-kept', text: 'How signed emails are kept as evidence' },
    {
      kind: 'p',
      text: 'An email forwarded inline is a new message from whoever forwarded it, and a PDF of an email drops its headers, so both lose the signature. The raw message file keeps every header, and the check can be run again for as long as the domain still publishes that key. Once a company retires the key, a later check fails, which is why the result recorded on arrival is the one worth keeping.',
    },
    {
      kind: 'p',
      text: `${ENTITY} Every email it keeps is the raw message, with its sender checked by DKIM and the time it arrived. At any company you name, a welcome offer, a price-rise notice or a cancel confirmation can be traced to the domain that sent it. An agent fetches the raw email and its DKIM result with the evidence call, over the [API or MCP](/developers).`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Does a DKIM pass mean an email is safe or honest?',
          a: 'No. A pass shows which domain took responsibility for the email and that its signed parts are unchanged. It says nothing about whether the offer inside is fair or the links are safe.',
        },
        {
          q: 'What is a DKIM selector?',
          a: 'The name in the s= tag that tells a receiver which of the domain’s keys signed the email. The public key sits in a TXT record at selector._domainkey.domain.',
        },
        {
          q: 'Can a DKIM signature be checked months later?',
          a: 'Yes, if the raw message was kept with its headers and the domain still publishes the key under the same selector. Keep the result recorded when the email arrived, because keys are retired.',
          link: { label: 'See sample data', to: '/sample-output' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'RFC 6376: DomainKeys Identified Mail (DKIM) Signatures',
      publisher: 'RFC Editor (IETF)',
      url: 'https://www.rfc-editor.org/rfc/rfc6376',
      date: '2011-09',
    },
  ],
  related: [
    '/glossary/welcome-series',
    '/glossary/triggered-flow',
    '/glossary/one-click-unsubscribe',
    '/glossary/point-in-time-data',
    '/developers',
    'recipe:email-sms-tracking',
    'competitor-email-tracking-tools',
    'welcome-basket-email-not-sending',
    'one-click-unsubscribe-requirements',
  ],
}
