import type { ReferencePage } from '../reference'

/* /glossary/magic-link: the definition query for passwordless email sign-in. Facts from the OWASP Forgot Password
   Cheat Sheet (single-use, expiring tokens) and NIST SP 800-63B-4, read 24 Nov 2026. */
const DEFINITION =
  'A magic link is a single-use link, sent to a person’s email address, that signs them in or confirms an action when they open it, with no password typed.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Magic link',
  line: 'A single-use link sent by email that signs someone in or confirms an action when opened, with no password.',
  meta: {
    path: '/glossary/magic-link',
    title: 'What is a magic link? Passwordless email login explained',
    description:
      'A magic link is a single-use sign-in link sent by email, with no password to type. How magic link login works, why it expires and how an agent opens one.',
    answer: `${DEFINITION} The link carries a random token that works once and expires, so whoever controls the inbox controls the sign-in.`,
    ogImage: '/og/glossary-magic-link.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Magic link', path: '/glossary/magic-link' },
    ],
  },
  title: 'Magic link: signing in from an email, with no password',
  dek: 'A site emails you a link instead of asking for a password. Opening it proves you control the inbox, and the link stops working.',
  primaryKeyword: 'magic link',
  keywords: ['what is a magic link', 'magic link login', 'magic link email', 'magic link authentication', 'passwordless login'],
  checked: '2026-11-24',
  readingMinutes: 3,
  reader: 'developers',
  term: {
    name: 'Magic link',
    alternateName: ['email sign-in link', 'passwordless email link'],
    definition: DEFINITION,
  },
  art: {
    kind: 'log',
    title: 'larkfield.example · magic link sign-in',
    who: 'An agent’s own inbox',
    rows: [
      { time: '14:20:10', text: 'Agent enters its address on the sign-in page', detail: 'sam@agents.example', tone: 'info' },
      { time: '14:20:12', text: 'Email arrives: “Your sign-in link for Larkfield”', detail: 'From: login@larkfield.example', tone: 'info' },
      { time: '14:20:12', text: 'Link read out of the email', detail: 'Token in the address, expires in 15 minutes', tone: 'ok' },
      { time: '14:20:13', text: 'Agent opens the link in its browser', detail: 'Signed in as sam@agents.example', tone: 'ok' },
      { time: '14:21:40', text: 'Same link opened again', detail: 'Site answers: link already used', tone: 'fail' },
    ],
    foot: 'Larkfield is an invented company. A magic link is only as private as the inbox that receives it.',
  },
  blocks: [
    { kind: 'h2', id: 'how-a-magic-link-works', text: 'How a magic link works' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'The person types their email address on the sign-in page.',
        'The site creates a random token, stores it and emails a link that contains it.',
        'The person opens the link. The site checks the token, signs them in and marks it used.',
      ],
    },
    {
      kind: 'p',
      text: 'The [OWASP Forgot Password Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html) sets the rules for a password-reset token, and they apply equally to a sign-in link. It should be single-use and expire after an appropriate period, generated with a cryptographically secure random number generator, and long enough to resist brute force. The link should use HTTPS.',
    },
    { kind: 'h2', id: 'magic-link-or-code', text: 'Magic link or one-time code' },
    {
      kind: 'p',
      text: 'A magic link and a [one-time password](/glossary/one-time-password) both prove control of an inbox or phone. The link opens in one tap, and the code has to be typed. [NIST’s SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html) says email must not be used for out-of-band authentication, though a code that only confirms an address, as at sign-up, is not authentication. Sites that need more assurance add another factor.',
    },
    { kind: 'h2', id: 'why-it-matters-to-an-agent', text: 'Why a magic link matters to an AI agent' },
    {
      kind: 'p',
      text: 'An agent has no password to remember and no way to answer a link sent to an address it does not own. With its own inbox, it receives the email, opens the link in its browser and carries on.',
    },
    {
      kind: 'p',
      text: 'Obsession gives each agent its own [email inbox](/email), and links and codes are pulled out of each message for it. The agent opens the link in its cloud browser, and the email arrives in the event log with its time. [Can AI agents log in to websites?](/blog/can-ai-agents-log-in-to-websites) covers the other ways in.',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is a magic link safe?',
          a: 'It is as safe as the inbox that receives it. Anyone who can read that email can sign in, so a good link is single-use, expires quickly and travels over HTTPS.',
        },
        {
          q: 'Why does my magic link say it has expired?',
          a: 'The site sets how long a link lasts and invalidates it once used. Request a new one and open it soon after it arrives.',
        },
        {
          q: 'Can an AI agent use a magic link?',
          a: 'Yes, if it has an inbox of its own. The link is read out of the email and opened in the agent’s browser.',
          link: { label: 'Email for AI agents', to: '/email' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Forgot Password Cheat Sheet',
      publisher: 'OWASP Cheat Sheet Series',
      url: 'https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html',
    },
    {
      title: 'Digital Identity Guidelines: Authentication and Authenticator Management (SP 800-63B-4)',
      publisher: 'NIST',
      url: 'https://pages.nist.gov/800-63-4/sp800-63b.html',
    },
  ],
  related: [
    '/email',
    '/blueprints/sign-in-code-check',
    '/glossary/one-time-password',
    '/glossary/dkim',
    '/glossary/welcome-series',
    'can-ai-agents-log-in-to-websites',
  ],
}
