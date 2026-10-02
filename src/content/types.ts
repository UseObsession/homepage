/* The content contract. Every page's words live in src/content as data of these types; components never hold copy.
   Copy rules: docs/REBUILD.md, "Copy". Screens are names of src/screens/html/NAME.html (see components/AppScreen). */

export type ScreenName = string
export type TemplateId =
  | 'competitor' | 'prospect' | 'mystery' | 'speed' | 'prices' | 'ads' | 'trial'
  | 'email-sms' | 'audit' | 'delivery' | 'account-watch' | 'business-case' | 'get-paid' | 'supplier-quotes' | 'listings'
export type AudienceId = 'agencies' | 'founders' | 'sales' | 'marketing'
export type RoleId = 'agency' | 'founder' | 'sales' | 'marketing' | 'developer' | 'other'

/* SEO and answer engines: 1 unique title (55 to 60 characters) and description (140 to 155) per page. `answer` is
   the 1 or 2 plain sentences an AI assistant should quote when asked what this page's subject is. */
export type Meta = {
  path: string
  title: string
  description: string
  answer: string
  ogImage?: string
  breadcrumb?: { name: string; path: string }[]
}

/* Every capture goes to the waitlist (waitlist/Code.js). `mystery` asks for the store first, then the email:
   the free mystery shop of a store the reader owns or has the owner's OK to test. */
export type Capture = {
  kind: 'waitlist' | 'mystery'
  source: string
  button: string
  placeholder?: string
  micro?: string
  /* After a sign up: 1 tap tells us what to set up first. */
  roles?: { question: string; options: string[] }
  interest?: TemplateId | 'any'
}

export type Cta = { label: string; to: string }

/* A run shown in the hero console: a template (or a typed task) running against real-looking targets. */
export type Demo = {
  tab: string
  template: TemplateId | 'task'
  task: string
  targets: string
  journey: string[]
  schedule: string
  report: string
  kit: string[]
  events: { time: string; text: string }[]
  finding: string
  fix: string
  ledger: string
}

export type Hero = {
  pill: string
  headline: string
  typed: string[]
  sub: string
  capture: Capture
  secondary?: Cta
  proof: { value: string; label: string }[]
  consoleLabel: string
  demos: Demo[]
}

/* The story every page tells, in this order:
   hero (what Obsession is, for this reader) > how it works > gap (why it matters to them, today vs with Obsession) >
   use cases (each with its own screen) > outcomes > kinds (every kind of reader it fits) > templates > proof >
   questions (trust and red lines) > final call to action. A page may skip a beat, never reorder it. */
export type How = { heading: string; sub?: string; steps: { title: string; line: string; screen: ScreenName; chips?: string[] }[] }
export type Gap = { heading: string; sub?: string; rows: { today: string; obsession: string }[] }
export type UseCase = { tab: string; moment: string; outcome: string; line: string; whyOnly: string; template: TemplateId | 'task'; screen: ScreenName }
export type Uses = { heading: string; items: UseCase[] }
export type Outcomes = { heading: string; sub?: string; items: { value: string; label: string; note?: string }[] }
export type Kinds = { heading: string; label: string; items: { name: string; line: string; templates: TemplateId[] }[] }
export type Proof = { heading: string; line: string; cta: Cta; screen?: ScreenName }
export type Faq = { heading: string; items: { q: string; a: string }[] }
export type Final = { heading: string; sub: string; capture: Capture }

/* Home's own beats, kept from James's Home and rebuilt. */
export type Jobs = { heading: string; items: { title: string; line: string; example?: string; screen?: ScreenName }[] }
export type Audiences = { heading: string; items: { audience: AudienceId | 'developers'; name: string; line: string; screen: ScreenName; to: string }[] }
export type Outputs = { heading: string; line: string; formats: { format: string; line: string }[]; cta: Cta }
export type Developers = { heading: string; line: string; code: string; screen: ScreenName; cta: Cta }

export type Page = {
  meta: Meta
  hero: Hero
  how: How
  gap: Gap
  uses: Uses
  outcomes?: Outcomes
  kinds?: Kinds
  templates?: { heading: string; ids: TemplateId[] }
  proof?: Proof
  jobs?: Jobs
  audiences?: Audiences
  outputs?: Outputs
  developers?: Developers
  faq: Faq
  final: Final
}

/* A template's own page (/templates/SLUG). James's recipe pages are the base: their structure stays. */
export type Template = {
  id: TemplateId
  slug: string
  name: string
  group: 'Win customers' | 'Watch rivals' | 'Check your own journeys' | 'Get paid and save'
  meta: Meta
  hero: { headline: string; sub: string; screen: ScreenName; capture: Capture }
  steps: { title: string; line: string }[]
  checks: string[]
  outputs: { heading: string; items: { format: string; line: string }[] }
  forWho: { audience: AudienceId; line: string }[]
  example?: Demo
  faq: Faq
  final: Final
}
