import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/web-bot-auth: for an engineer whose agent visits other companies' sites, and the site teams who see it.
   It identifies which company's agent is visiting; it is not a login. Facts from Cloudflare's developer docs, the IETF
   webbotauth charter and its working draft, and RFC 9421, read 11 Nov 2026. The live site doesn't say Obsession signs
   with Web Bot Auth, so this page doesn't either. */
const DEFINITION =
  'Web Bot Auth is a way for a bot or AI agent to sign each request it sends, so a website can check which company’s agent is visiting.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Web Bot Auth',
  line: 'A signature a bot or AI agent adds to each request, so a website can check which company’s agent it is.',
  meta: {
    path: '/glossary/web-bot-auth',
    title: 'What is Web Bot Auth? How a site checks whose agent it is',
    description:
      'Web Bot Auth lets a bot or AI agent sign each request so a website can check which company’s agent is visiting. How the signature and key directory work.',
    answer: `${DEFINITION} It names the company that runs the agent, never the person it acts for. It is separate from a login, so a signed agent sees what any visitor sees until it has an account of its own.`,
    ogImage: '/og/glossary-web-bot-auth.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Web Bot Auth', path: '/glossary/web-bot-auth' },
    ],
  },
  title: 'Web Bot Auth: a signature that tells a site whose agent is visiting',
  dek: 'A user agent string can say anything. A signed request can be checked against keys the agent’s operator publishes on its own domain.',
  primaryKeyword: 'web bot auth',
  keywords: ['what is web bot auth', 'web bot auth meaning', 'signed agents', 'bot authentication', 'http message signatures for bots'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'developers',
  term: {
    name: 'Web Bot Auth',
    alternateName: ['Web Bot Authentication', 'signed agents'],
    definition: DEFINITION,
  },
  art: {
    kind: 'log',
    title: 'A signed request at shop.example',
    who: 'The site’s edge, checking an agent',
    status: { tone: 'info', text: 'Example' },
    rows: [
      { time: '10:42:07', text: 'Request for /pricing arrives', detail: 'Signature-Agent: agents.lanternhq.example', tone: 'info' },
      { time: '10:42:07', text: 'Key directory fetched', detail: '/.well-known/http-message-signatures-directory', tone: 'info' },
      { time: '10:42:07', text: 'Signature checked against the published key', detail: 'Signature and Signature-Input match', tone: 'ok' },
      { time: '10:42:07', text: 'Operator identified: Lantern HQ', detail: 'The site applies its rule for this agent', tone: 'ok' },
      { time: '10:42:08', text: 'Page served as to any visitor', detail: 'No account, no login', tone: 'info' },
    ],
    foot: 'Lantern HQ and its shop are invented. The signature says whose agent it is; what the agent may see is still up to the site.',
  },
  blocks: [
    { kind: 'h2', id: 'how-the-signature-works', text: 'How a Web Bot Auth signature works' },
    {
      kind: 'p',
      text: 'Web Bot Auth builds on [HTTP Message Signatures](https://www.rfc-editor.org/rfc/rfc9421), an IETF standard from 2024 for signing parts of an HTTP request. [Cloudflare’s developer docs](https://developers.cloudflare.com/bots/reference/bot-verification/web-bot-auth/) set out what the operator of a bot does:',
    },
    {
      kind: 'list',
      items: [
        '**Publishes its public keys** as a JSON Web Key Set at /.well-known/http-message-signatures-directory on its own domain. Cloudflare supports Ed25519 keys.',
        '**Adds 3 headers to each request:** Signature-Input (what was signed), Signature (the signature itself) and Signature-Agent (where its keys live).',
        '**Lets the site check:** the site fetches the key, verifies the signature and knows which operator sent the request.',
      ],
    },
    {
      kind: 'p',
      text: 'The IETF’s [Web Bot Authentication working group](https://datatracker.ietf.org/wg/webbotauth/about/) is standardising it. Its working draft, [HTTP Message Signatures for automated traffic](https://datatracker.ietf.org/doc/draft-ietf-webbotauth-httpsig-protocol/), was last revised on 29 October 2026 and is still an Internet-Draft.',
    },
    { kind: 'h2', id: 'what-a-signature-tells-a-site', text: 'What a signed request tells a website' },
    {
      kind: 'p',
      text: 'A valid signature tells a site which operator sent the request, so it can allow a known agent, slow it down or block it. The working group’s charter names the weakness of the old methods, IP allowlists and user agent strings. It also keeps authenticating the end user out of scope, along with tracking bots or scoring their reputation.',
    },
    {
      kind: 'p',
      text: 'Web Bot Auth is no login. A signed agent still sees what any visitor sees, and an account at the site needs its own sign-up, as it would for a person.',
    },
    { kind: 'h2', id: 'declared-agents', text: 'How a declared agent introduces itself to people' },
    {
      kind: 'p',
      text: 'A signature introduces an agent to a server. A [declared agent](/glossary/declared-agent) also says what it is to the people it meets in chat, email or on the phone.',
    },
    {
      kind: 'p',
      text: `${ENTITY} Every Obsession agent is a declared agent, and says it’s an AI when it talks to a person.`,
    },
    {
      kind: 'p',
      text: 'An Obsession agent never gets round a CAPTCHA or a bot block. Where a site puts one in front of a step, the record of that visit names the step it couldn’t reach. The full set of lines is on [the page for companies an Obsession agent visits](/agents).',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is Web Bot Auth a login?',
          a: 'No. It proves which company’s agent sent a request. A login proves who owns an account, and a signed agent still needs an account of its own to see what customers see.',
        },
        {
          q: 'Who uses Web Bot Auth?',
          a: 'Cloudflare documents it as a way to verify bots and agents. The IETF working group’s charter covers crawlers for search and for AI training, web archivers and link checkers. It covers AI agents acting for their users too.',
        },
        {
          q: 'Does Web Bot Auth say who the agent is acting for?',
          a: 'No. The working group’s charter keeps authenticating the end user out of scope. The signature identifies the operator that runs the agent.',
          link: { label: 'Declared agent, defined', to: '/glossary/declared-agent' },
        },
      ],
    },
  ],
  sources: [
    { title: 'RFC 9421: HTTP Message Signatures', publisher: 'RFC Editor (IETF)', url: 'https://www.rfc-editor.org/rfc/rfc9421', date: '2024' },
    {
      title: 'Web Bot Auth',
      publisher: 'Cloudflare developer docs',
      url: 'https://developers.cloudflare.com/bots/reference/bot-verification/web-bot-auth/',
      date: '2026-10-08',
    },
    { title: 'Web Bot Authentication (webbotauth): charter', publisher: 'IETF Datatracker', url: 'https://datatracker.ietf.org/wg/webbotauth/about/' },
    {
      title: 'HTTP Message Signatures for automated traffic',
      publisher: 'IETF Datatracker',
      url: 'https://datatracker.ietf.org/doc/draft-ietf-webbotauth-httpsig-protocol/',
      date: '2026-10-29',
    },
  ],
  related: [
    '/glossary/declared-agent',
    '/glossary/headless-browser',
    '/glossary/web-scraping',
    '/glossary/login-wall',
    '/agents',
    'agent-ready-website',
    'agentic-commerce-for-merchants',
    'can-ai-agents-log-in-to-websites',
    'long-running-ai-agents',
  ],
}
