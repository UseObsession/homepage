/* The content contract. Every page's words live in src/content as data of these types; components never hold copy.
   Copy rules: docs/REBUILD.md, "Copy". Screens are names of src/screens/html/NAME.html (see components/AppScreen). */

export type ScreenName = string
/* Recipe slugs (/recipes/SLUG): competitor-tracking, prospect-intelligence, mystery-shopper, speed-to-lead, price-watch, ad-tracking, trial-teardown,
   email-sms-tracking, website-audit, delivery-monitoring, account-watch, business-case, get-paid, supplier-quotes, listings-ai-answers. */
export type RecipeId =
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
  interest?: RecipeId | 'any'
}

export type Cta = { label: string; to: string }

/* A run shown in the hero console: a recipe (or a typed task) running against real-looking targets. */
export type Demo = {
  tab: string
  recipe: RecipeId | 'task'
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
   use cases (each with its own screen) > outcomes > kinds (every kind of reader it fits) > recipes > proof >
   questions (trust and red lines) > final call to action. A page may skip a beat, never reorder it. */
export type How = { heading: string; sub?: string; steps: { title: string; line: string; screen: ScreenName; chips?: string[] }[] }
export type Gap = { heading: string; sub?: string; rows: { today: string; obsession: string }[] }
/* Every use case screen shows example data: the Uses render puts a quiet "Example" tag on each screen, matching the
   console's "Example runs". No copy field needed. */
export type UseCase = { tab: string; moment: string; outcome: string; line: string; whyOnly: string; recipe: RecipeId | 'task'; screen: ScreenName }
export type Uses = { heading: string; items: UseCase[] }
export type Outcomes = { heading: string; sub?: string; items: { value: string; label: string; note?: string }[] }
export type Kinds = { heading: string; label: string; items: { name: string; line: string; recipes: RecipeId[] }[] }
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
  recipes?: { heading: string; ids: RecipeId[] }
  proof?: Proof
  jobs?: Jobs
  audiences?: Audiences
  outputs?: Outputs
  developers?: Developers
  faq: Faq
  final: Final
}

/* A recipe's own page (/recipes/SLUG). James's recipe pages are the base: their structure stays.
   A recipe comes with all its infrastructure already set up; `kit` is what choosing it spins up. */
export type RecipeGroup = 'Win customers' | 'Keep customers' | 'Watch rivals' | 'Check your own journeys' | 'Get paid and save'
export type Recipe = {
  id: RecipeId
  slug: string
  name: string
  group: RecipeGroup
  /* 1 line for cards and menus. */
  line: string
  /* What you get, in 1 line. */
  gets: string
  /* What choosing it sets up, a few words each (agent ID, inboxes, numbers, browsers, schedule, screenshots of every step). */
  kit: string[]
  meta: Meta
  hero: { headline: string; sub: string; screen: ScreenName; capture: Capture }
  /* The example run played on the page (labelled Example unless it is the real September store check). */
  run: Demo
  steps: { title: string; line: string }[]
  checks: { group: string; items: { title: string; line: string }[] }[]
  outputs: { heading: string; items: { format: string; line: string }[] }
  settings?: { k: string; v: string }[]
  forWho: { audience: AudienceId | 'developers'; line: string }[]
  /* Optional depth for the templates that need it: a comparison, a timeline, what is allowed where. */
  table?: { heading: string; line?: string; cols: string[]; rows: { label: string; values: string[] }[] }
  faq: Faq
  final: Final
}

/* ---- Site pages: Sample output and the output viewer (content/sample.ts); Recipes index, Privacy, Agents, 404 and
   llms.txt (content/site.ts). Appended 2 Oct; nothing above changes. ---- */

/* A verdict on 1 journey, as the report states it. Only 'Silent' is a gap; colour is never the status. */
export type SampleVerdict = 'Delivered' | 'Silent' | 'No verdict' | 'Couldn’t test'

/* The output viewer: the 1 real run shown in every format it can arrive in. Each format carries the data its mock
   renders, so Home (and any page) can reuse it and open on its own format. */
export type ViewerFormatId = 'pdf' | 'email' | 'slack' | 'clay' | 'webhook' | 'workflow'
export type ViewerImage = { src: string; alt: string; width: number; height: number }
export type ViewerView =
  | { kind: 'pdf'; to: string; pages: ViewerImage[] }
  | { kind: 'email'; from: string; to: string; subject: string; tag: string; timeline: { time: string; text: string }[]; button: string }
  | { kind: 'slack'; channel: string; app: string; time: string; title: string; line: string; buttons: string[] }
  /* `added` names the columns Obsession adds to the reader's own table; rows marked `example` are illustrative. */
  | { kind: 'clay'; cols: string[]; added: string[]; rows: { cells: string[]; gap: boolean; example: boolean }[]; note: string }
  | { kind: 'webhook'; request: string; body: string }
  | { kind: 'workflow'; steps: { k: string; v: string; branch?: boolean; custom?: boolean }[]; note: string }
export type ViewerFormat = { id: ViewerFormatId; label: string; line: string; view: ViewerView }

export type SampleJourney = { n: number; name: string; verdict: SampleVerdict; line: string }
export type SampleGap = {
  n: number
  journey: string
  heading: string
  finding: string
  consent: string
  nothing: { heading: string; line: string }
  why: string
  basket: { label: string; item: string; price: string; note: string }
  /* The follow up drafted from the evidence, never sent. `text` is the email in words, under the image. */
  draft: { show: string; hide: string; band: string; subject: string; image: ViewerImage; text: string; note: string }
}
export type SamplePage = {
  meta: Meta
  /* `cta.to` points at the final capture's anchor (#get-one). */
  hero: { pill: string; headline: string; sub: string; figures: { value: string; label: string }[]; cta: Cta }
  formats: { heading: string; line: string; start: ViewerFormatId }
  report: {
    heading: string
    line: string
    journeys: SampleJourney[]
    shot: ViewerImage & { caption: string }
    setup: { heading: string; tag: string; rows: { k: string; v: string; mono?: boolean }[] }
    observation: { heading: string; tag: string; rows: { k: string; v: string }[]; line: string }
  }
  gaps: SampleGap[]
  faq: Faq
  final: Final
}

/* /recipes: the groups render the recipes whose `group` matches, in the order given. */
export type RecipesIndexPage = {
  meta: Meta
  hero: { headline: string; sub: string }
  groups: { group: RecipeGroup; line: string }[]
  hub: { heading: string; line: string; inputs: string[]; outputs: string[] }
  faq: Faq
  final: Final
}

/* A plain page of short sections (privacy, agents): a claim heading, a few lines, an optional list. */
export type NoticeSection = { id: string; heading: string; lines: string[]; list?: string[] }
export type PrivacyPage = { meta: Meta; headline: string; sub: string; updated: string; sections: NoticeSection[] }
export type AgentsPage = {
  meta: Meta
  pill: string
  headline: string
  sub: string
  sections: NoticeSection[]
  contact: { heading: string; line: string; email: string; cta: Cta; secondary: Cta }
}
export type NotFoundPage = { meta: Meta; headline: string; sub: string; links: Cta[]; capture: Capture }
export type Llms = { summary: string; intro: string }
