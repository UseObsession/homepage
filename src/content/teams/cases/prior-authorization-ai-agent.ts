import { personaCostLine, plans } from '../../prices'
import type { TeamPage } from '../types'

/* Prior authorization AI agent (/use-cases/prior-authorization-ai-agent, 22 Nov 2026, _research/seo/revamp-22nov/
   PLAN_usecases.md): work behind logins, for revenue cycle teams and the companies that build agents for them. Modelled
   on the revenue cycle pattern in the Product Marketing book's portals job (claims and authorizations worked in payer
   portals, codes caught, every page kept); no competitor or customer is named and no figure is borrowed. Owns "prior
   authorization ai agent" and "prior authorization ai automation" (Google suggestions, 22 Nov), so the US spelling of
   the searched term stays. No clinical claims; HIPAA only as a question for sales. Northgate and the portal are
   invented. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const path = '/use-cases/prior-authorization-ai-agent'

const sub =
  'Obsession, the toolkit for AI agents, gives your prior authorization AI agent a browser that stays signed in to payer portals, plus its own inbox and number for login codes. It checks every open request each morning and sends each answer to your work queue with a screenshot.'

export const useCase: TeamPage = {
  id: 'prior-authorization-ai-agent',
  kind: 'case',
  name: 'Prior authorization AI agent',
  meta: {
    path,
    title: 'Prior authorization AI agent: payer portals, codes, status',
    description:
      'Your prior authorization AI agent stays signed in to every payer portal, catches each login code and checks every open request before your clinics open.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Prior authorization AI agent', path },
    ],
  },

  hero: {
    pill: 'Revenue cycle teams',
    headline: 'Prior authorization AI agent: every payer portal checked before clinics open.',
    sub,
  },

  scene: {
    steps: [
      { icon: 'browser', label: 'The agent opens the payer portal' },
      { icon: 'phone', label: 'The login code reaches its number' },
      { icon: 'clock', label: 'It checks each open request' },
      { icon: 'record', label: 'Each answer goes to your queue' },
    ],
    who: 'Auth agent 2 at northgate.example',
    note: 'Both answers in your queue by 06:32',
    fleet: '15 agents · 6,000 requests a month',
    rows: [
      { at: 'Mon · 06:30', kind: 'page.visited', text: 'portal.payer.example/login' },
      { at: 'Mon · 06:30', kind: 'sms.received', text: 'Your one-time code is 307518' },
      { at: 'Mon · 06:31', kind: 'page.visited', text: 'Request PA-44817 · approved · screenshot saved' },
      { at: 'Mon · 06:31', kind: 'page.visited', text: 'Request PA-44902 · more information requested · screenshot saved' },
      { at: 'Mon · 06:32', kind: 'webhook', text: 'Both answers sent to your work queue', tone: 'ok' },
    ],
    caption: 'Sign-in, code and status checks done before the first clinic opens, every page kept. Northgate, a clinic group, and the payer portal are invented examples.',
  },

  uses: {
    heading: 'Every payer portal, signed in and checked each morning.',
    line: 'Every piece runs on one API and one bill, so the browser, the inbox and the number share one key and one event log.',
    items: [
      {
        kit: 'portals',
        name: 'Status checks every morning',
        line: 'The agent signs in to each payer portal and reads every open request, with a dated screenshot.',
        pieces: ['browser'],
      },
      {
        kit: 'portals',
        name: 'Login codes caught',
        line: 'Each portal’s one-time code reaches the agent’s own inbox or number, so a sign-in never waits on staff.',
        pieces: ['email', 'phone'],
      },
      {
        kit: 'portals',
        name: 'A persona per payer',
        line: 'A persona, one identity with its own inbox, number and browser, keeps each payer login for weeks.',
        pieces: ['personas'],
      },
      {
        kit: 'portals',
        name: 'New requests filled from your data',
        line: 'It fills each new request from your billing system’s fields and attaches the notes your team chose.',
        pieces: ['browser', 'sandbox'],
      },
      {
        kit: 'talk',
        name: 'Status by phone',
        line: 'Where a payer has no portal, the agent calls the provider line, says it’s an AI and keeps the transcript.',
        pieces: ['phone'],
      },
      {
        kit: 'test',
        name: 'Before you sign a vendor',
        line: 'A persona runs your hardest cases on each shortlisted vendor’s AI agent, and shows every answer side by side.',
        blueprint: 'vendor-agent-check',
        pieces: ['email', 'phone'],
      },
    ],
  },

  blueprints: {
    heading: 'Read every prior authorisation in payer portals, and check the agents your team relies on.',
    line: 'Each runs without code and posts what it found to Slack, a sheet or your webhook.',
    slugs: ['prior-authorization-status', 'vendor-agent-check', 'resolution-check', 'voice-agent-check'],
  },

  prices: ['browser', 'inbox', 'number', 'sms', 'voice', 'persona'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Revenue cycle director', gets: 'Every open request checked each morning, with a screenshot of each answer.', watch: 'Authorization turnaround, denial rate, days in A/R' },
      { role: 'Prior authorization team lead', gets: 'A work queue of only the requests that need a person, ready when staff start.', watch: 'Requests worked per day, staff hours, write-offs' },
      { role: 'Engineers at a revenue cycle company', gets: 'Browsers that stay signed in to each payer for weeks, with an inbox and number for every code.', watch: 'Task success rate, cost per request' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/ai-agent-for-dental-practices', '/use-cases/ai-agent-for-freight-brokers', '/use-cases/journey-checks-for-banks-and-fintechs'],
  },

  faq: {
    heading: 'Before your agent signs in to a payer portal.',
    items: [
      {
        q: 'What does a prior authorization AI agent cost?',
        a: `${personaCostLine} It costs nothing while it waits. Start on the Free plan, with no credit card, then ${orList(fees)} a month.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Where does prior authorization AI automation stop?',
        a: 'At clinical judgement, payment and identity checks. The agent reads and fills what your team decides, stops at any identity check and never gets round a CAPTCHA. When it talks to a person, it says it’s an AI.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How do our engineers connect a payer portal?',
        a: 'Create a browser with obsession.browsers.create({ home: "US" }) and drive it with Playwright over CDP. It keeps its session for weeks, and each login code reaches your code as email.received or sms.received.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'Can we use it with patient data?',
        a: 'Raise HIPAA and a business associate agreement with our sales team when you talk about Enterprise, and settle both before patient data reaches an agent.',
        link: { label: 'See Enterprise', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Check every payer portal before your clinics open.',
    capture: { kind: 'waitlist', source: 'case-prior-authorization-ai-agent', button: 'Start free', interest: 'any' },
  },
}
