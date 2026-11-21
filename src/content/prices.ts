/* Every price on the site, in one place (21 Nov 2026, checked on each supplier's own page that day). Each piece is
   priced on its own: the cheapest good wholesale rate we buy at, plus at least 30%, and under what agent-native APIs
   charge for the same piece. /pricing, the piece
   pages and the developers page read these; Home shows no prices (James, 20 Nov). `value` is the number in US dollars
   per `per`, for the estimator; `amount` and `unit` are the words a reader sees. Change a number here and it changes
   everywhere. The suppliers' rates behind each line are in the workspace (research_notes, price_sheet.md). */
export type PieceId = 'email' | 'phone' | 'messaging' | 'browser' | 'sandbox' | 'personas'

export type Price = {
  piece: PieceId
  /* What is billed, as a reader names it. */
  name: string
  /* The price as written, and what it is per. */
  amount: string
  unit: string
  /* The same price as a number, for the estimator: dollars per `per`. Absent where the price isn't a fixed number. */
  value?: number
  per?: string
  note?: string
}

export const prices = {
  inbox: { piece: 'email', name: 'Inbox', amount: '$0.50', unit: 'an inbox a month', value: 0.5, per: 'inbox a month', note: 'The first 3 inboxes are free.' },
  email: { piece: 'email', name: 'Emails', amount: '$0.40', unit: 'per 1,000 emails, sent or received', value: 0.0004, per: 'email' },
  number: { piece: 'phone', name: 'Phone number', amount: '$1.50', unit: 'a US or UK number a month', value: 1.5, per: 'number a month', note: 'Numbers in other countries are priced by country, shown before you add one.' },
  sms: { piece: 'phone', name: 'Texts', amount: '$0.015', unit: 'a text, sent or received', value: 0.015, per: 'text', note: 'Carrier fees included.' },
  register: { piece: 'phone', name: 'US texting registration', amount: '$30', unit: 'once, then $15 a month', value: 15, per: 'month', note: 'US carriers ask every business that texts to register its use (10DLC). We file it for you.' },
  voice: { piece: 'phone', name: 'Calls', amount: '$0.01', unit: 'a minute, in or out', value: 0.01, per: 'minute', note: 'Bring your own voice agent, or connect one.' },
  imessage: { piece: 'messaging', name: 'iMessage line', amount: '$140', unit: 'a line a month', value: 140, per: 'line a month' },
  whatsapp: { piece: 'messaging', name: 'WhatsApp', amount: 'Meta’s fee plus $0.004', unit: 'a message', note: 'Meta prices each message by country and kind; we pass its fee through at cost.' },
  chat: { piece: 'messaging', name: 'Slack and Telegram', amount: 'Free', unit: 'on every plan' },
  browser: { piece: 'browser', name: 'Browser', amount: '$0.08', unit: 'a browser hour', value: 0.08, per: 'browser hour', note: 'Its home connection is included, with no charge per GB.' },
  stealth: { piece: 'browser', name: 'Stealth browser', amount: '$0.65', unit: 'a browser hour, with a full screen', value: 0.65, per: 'browser hour' },
  home: { piece: 'browser', name: 'Home connection', amount: 'Included', unit: 'with every browser' },
  sandbox: { piece: 'sandbox', name: 'Sandbox', amount: '$0.10', unit: 'an active vCPU hour', value: 0.1, per: 'active vCPU hour', note: 'Billed only while the CPU works, so a sandbox waiting on a task costs almost nothing.' },
  memory: { piece: 'sandbox', name: 'Sandbox memory', amount: '$0.015', unit: 'a GiB hour', value: 0.015, per: 'GiB hour' },
  persona: { piece: 'personas', name: 'Persona', amount: 'Free', unit: 'while it waits', note: 'You pay only for the pieces it uses.' },
  log: { piece: 'personas', name: 'Event log', amount: '$5', unit: 'per million events', value: 0.000005, per: 'event', note: 'Every event kept for 30 days at no extra charge; longer on Enterprise.' },
  tokens: { piece: 'personas', name: 'Model tokens', amount: 'Cost plus 30%', unit: 'or free with your own key' },
} satisfies Record<string, Price>

export type PriceKey = keyof typeof prices

/* The plans (21 Nov 2026, proposed, for the founders to sign off): a monthly price that includes an amount of each piece;
   anything past it is billed at the rates above. Sized against 12 suppliers' own tiers so no included amount loses money
   at full use (research_notes, plan_tiers.md in the workspace). Enterprise is priced by contract. `included` counts each piece
   in its own unit: inboxes, emails, numbers, texts, call minutes, browser hours, vCPU hours, events in the event log. */
export type PlanId = 'free' | 'developer' | 'startup' | 'enterprise'
export type Plan = {
  id: PlanId
  name: string
  /* Dollars a month; null where the price is set by contract. */
  monthly: number | null
  included: Partial<Record<PriceKey, number>>
}

export const plans: Plan[] = [
  { id: 'free', name: 'Free', monthly: 0, included: { inbox: 3, email: 3000, browser: 10, sandbox: 10, log: 100000 } },
  {
    id: 'developer',
    name: 'Developer',
    monthly: 20,
    included: { inbox: 10, email: 10000, number: 1, sms: 200, voice: 100, browser: 50, sandbox: 25, memory: 100, log: 1000000 },
  },
  {
    id: 'startup',
    name: 'Startup',
    monthly: 200,
    included: { inbox: 100, email: 100000, number: 10, register: 1, sms: 2000, voice: 1000, browser: 500, sandbox: 200, memory: 800, log: 5000000 },
  },
  { id: 'enterprise', name: 'Enterprise', monthly: null, included: {} },
]
