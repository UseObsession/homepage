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
  register: { piece: 'phone', name: 'US texting registration', amount: '$30', unit: 'once, then $15 a month', value: 15, per: 'month', note: 'US carriers ask every business that texts to register its use (10DLC), and we file it for you. Developer and Startup include your first campaign’s filing and monthly fee, so this price is for each extra campaign. If the carriers reject a filing, sending it again costs $15.' },
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

/* What a persona costs at the rates (James, 21 Nov), worked out here so it follows any price change. /pricing and the
   personas page both say it. */
const PERSONA_HOURS = 10
export const personaCostLine = `A persona with an inbox, a US number and ${PERSONA_HOURS} browser hours costs $${(prices.inbox.value + prices.number.value + PERSONA_HOURS * prices.browser.value).toFixed(2)} a month, before texts and emails.`

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

/* What Free's 1 number receives each month (James, 21 Nov): texts and call minutes in, such as login codes. Past these,
   messages still arrive and are kept, but the agent isn't woken until an upgrade. It sends no texts and makes no calls. */
export const freeNumber = { texts: 50, minutes: 30 }

export const plans: Plan[] = [
  { id: 'free', name: 'Free', monthly: 0, included: { inbox: 3, email: 3000, number: 1, browser: 10, sandbox: 10, log: 100000 } },
  {
    id: 'developer',
    name: 'Developer',
    monthly: 20,
    /* `register`: the first filing and the monthly fee for 1 low volume campaign (it costs us $1.50 a month); Startup's
       covers 1 standard campaign. Neither plan pays the $30 filing fee (James, 21 Nov). */
    included: { inbox: 10, email: 10000, number: 1, sms: 200, register: 1, voice: 100, browser: 50, sandbox: 25, memory: 100, log: 1000000 },
  },
  {
    id: 'startup',
    name: 'Startup',
    monthly: 200,
    included: { inbox: 100, email: 100000, number: 10, register: 1, sms: 2000, voice: 1000, browser: 500, sandbox: 200, memory: 800, log: 5000000 },
  },
  { id: 'enterprise', name: 'Enterprise', monthly: null, included: {} },
]

/* Each blueprint's own plans (James, 21 Nov 2026), in place of the $500 pilot: the same 4 tiers on every blueprint page
   and on /agencies, priced per site, store or agent by how often the blueprint runs (the shape of ottom.io/pricing). No
   Enterprise tier here: anything bigger links to /pricing. A run costs us about $1.20 to $1.70 (journey cost, measured
   14 and 15 Nov), so daily (about 30 runs a month) keeps about a 55% margin. */
export type BlueprintPlanId = 'free' | 'monthly' | 'weekly' | 'daily'
export type BlueprintPlan = { id: BlueprintPlanId; name: string; monthly: number; every: 'once' | 'month' | 'week' | 'day' }
export const blueprintPlans: BlueprintPlan[] = [
  { id: 'free', name: 'Free', monthly: 0, every: 'once' },
  { id: 'monthly', name: 'Monthly', monthly: 19, every: 'month' },
  { id: 'weekly', name: 'Weekly', monthly: 49, every: 'week' },
  { id: 'daily', name: 'Daily', monthly: 99, every: 'day' },
]
