/* The content contract. Every page's words live in src/content as data of these types; components never hold copy.
   Copy rules: docs/REBUILD.md, "Copy". Screens are names of src/screens/html/NAME.html (see components/AppScreen). */

export type ScreenName = string
/* Recipe slugs (/recipes/SLUG): competitor-tracking, prospect-intelligence, mystery-shopper, lead-leaks (id 'speed'; was
   speed-to-lead, which redirects), price-watch, ad-tracking, trial-teardown, email-sms-tracking, website-audit,
   delivery-monitoring, account-watch, business-case, get-paid, supplier-quotes, listings-ai-answers, ai-checkout-test
   ('checkout'), inbound-quotes ('quotes'), renewal-negotiation ('renewal'), cancellation-saves ('saves'),
   account-handover ('handover'), software-renewals ('spend'), expansion-offers ('expansion'), client-upsells
   ('upsells'), review-requests ('reviews'), ad-landing-check ('adcheck'), partner-checks ('partners').
   Check your AI agents (3 Oct, _research/verify/VERIFY.md): support-bot-check ('support-bot'), voice-agent-check
   ('voice-agent'), outbound-agent-check ('outbound-agent'), sales-agent-check ('sales-agent'), vendor-agent-check
   ('vendor-agent'), resolution-check ('resolution'), ai-disclosure-check ('disclosure'), drift-watch ('drift'). */
export type RecipeId =
  | 'competitor' | 'prospect' | 'mystery' | 'speed' | 'prices' | 'ads' | 'trial'
  | 'email-sms' | 'audit' | 'delivery' | 'account-watch' | 'business-case' | 'get-paid' | 'supplier-quotes' | 'listings'
  | 'checkout' | 'quotes' | 'renewal' | 'saves' | 'handover' | 'spend'
  | 'expansion' | 'upsells' | 'reviews' | 'adcheck' | 'partners'
  | 'support-bot' | 'voice-agent' | 'outbound-agent' | 'sales-agent' | 'vendor-agent' | 'resolution' | 'disclosure' | 'drift'
export type AudienceId = 'agencies' | 'founders' | 'sales' | 'marketing'
/* The 5 readers, each with its own hue (styles/accents.css: [data-reader] sets --s-accent and --s-accent-glow). */
export type ReaderId = AudienceId | 'developers'
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
   the free mystery shop of a store the reader owns or has the owner's OK to test. `verify` asks for the AI agent
   first (its chat page or phone number), then the email: the free check of an AI agent the reader runs, or a
   client's with their OK. It asks "Whose AI agent is it?" after the sign up unless the page sets its own roles. */
export type Capture = {
  kind: 'waitlist' | 'mystery' | 'verify'
  source: string
  button: string
  placeholder?: string
  /* `mystery` and `verify` only: the first field's name for screen readers, when the placeholder asks for something
     other than the shared label does (the AI SDR check asks for the company's website, not a chat page). */
  label?: string
  micro?: string
  /* After a sign up: 1 tap tells us what to set up first. */
  roles?: { question: string; options: string[] }
  interest?: RecipeId | 'any'
  /* `mystery` and `verify` only: a blank first field (the store, or the AI agent) joins the waitlist instead of asking
     for one. The micro line says so. */
  orWaitlist?: boolean
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

/* A tab of Home's hero console: a kind of work, shown as its full app screen, which plays its story when its tab is
   chosen. `line` sits under the screen (1 short line); the tab links to the recipe it runs on, or to `link` when the
   tab is a whole way in rather than 1 recipe (the AI agent checks, /verify). A tab whose screen is not in
   src/screens/html yet is left out, so nothing renders broken. */
export type HeroScreen = { tab: string; screen: ScreenName; line: string } & ({ recipe: RecipeId; link?: never } | { recipe?: never; link: Cta })

/* The hero (docs/REBUILD.md 1c). `consoleHeading` is the typed heading over the console: it types the first line,
   holds, erases, types the second and rests there (content/console.ts). The console is either category tabs of app
   screens (`screens`, Home) or example runs (`demos`, the audience pages and Developers). */
export type Hero = {
  pill: string
  headline: string
  sub: string
  capture: Capture
  secondary?: Cta
  proof: { value: string; label: string }[]
  consoleHeading: string[]
  screens?: HeroScreen[]
  demos?: Demo[]
}

/* The story every page tells, in this order:
   hero (what Obsession is, for this reader) > how it works > gap (why it matters to them, today vs with Obsession) >
   use cases (each with its own screen) > outcomes > kinds (every kind of reader it fits) > recipes > proof >
   questions (trust and red lines) > final call to action. A page may skip a beat, never reorder it. */
export type How = { heading: string; sub?: string; steps: { title: string; line: string; screen: ScreenName; chips?: string[] }[] }
export type Gap = { heading: string; sub?: string; story?: GapStory; rows: { today: string; obsession: string }[] }
/* The gap's picture (components/sections/GapStory): 1 invented company over 3 days, 2 lanes on 1 clock. Above, what a
   tool that reads the outside sees: 1 look, at 1 moment (`outside`). Below, a declared AI test customer living it: each
   step lands on its day, drops a signed receipt on the stack, and the last day holds the finding (`inside`).
   Days run 0 to 3. Every step happens at `time` on its `day`; the clock shows each in turn. `label` tells the whole story
   in 1 or 2 sentences for a screen reader (and llms-full.txt), and it opens with "Example". */
export type GapStoryStep =
  | { kind: 'signup'; day: number; time: string; title: string; field: string; mail: string; mailTime: string }
  | { kind: 'chat'; day: number; time: string; title: string; ask: string; reply: string; promise: string }
  | { kind: 'basket'; day: number; time: string; title: string; item: string; price: string }
  | { kind: 'wait'; day: number; time: string; title: string; since: string }
export type GapStory = {
  label: string
  site: string
  outside: {
    name: string
    kind: 'page' | 'dashboard'
    day: number
    time: string
    /* page: the page's headline and the 1 line it publishes; dashboard: the row's name and what it counts. */
    title: string
    line: string
    tally: string
  }
  inside: {
    name: string
    agent: string
    steps: GapStoryStep[]
    finding: { day: number; time: string; title: string; meta: string }
    tally: string
    hash: string
  }
}
/* Every use case screen shows example data: the Uses render puts a quiet "Example" tag on each screen, matching the
   hero console's Example tag. No copy field needed. */
export type UseCase = { tab: string; moment: string; outcome: string; line: string; whyOnly: string; recipe: RecipeId | 'task'; screen: ScreenName }
export type Uses = { heading: string; items: UseCase[] }
export type Outcomes = { heading: string; sub?: string; items: { value: string; label: string; note?: string }[] }
export type Kinds = { heading: string; label: string; items: { name: string; line: string; recipes: RecipeId[] }[] }
/* The claim beside its object. Without `screen` the object is the real September report (story beat 8); with it, the
   object is that app screen, under its Example tag (Home's short section on the AI agent checks). */
export type Proof = { heading: string; line: string; cta: Cta; screen?: ScreenName }
export type Faq = { heading: string; items: { q: string; a: string }[] }
/* The rules every run follows (James's "Built to behave.", docs/REBUILD.md 1d): the trust beat before the questions. A
   claim heading, 1 line, each rule as a short claim with 1 line under it, and `link` to the page every company an
   agent meets can read (/agents). Never "it follows robots.txt". */
export type Rules = { heading: string; line?: string; items: { title: string; line: string }[]; link?: Cta }
export type Final = { heading: string; sub: string; capture: Capture }

/* Home's own beats, kept from James's Home and rebuilt. */
export type Jobs = { heading: string; items: { title: string; line: string; example?: string; screen?: ScreenName }[] }
/* Who it's for. Home shows it as the reader picker (components/sections/PersonaBand): each reader's name, 1 line
   (70 characters at most, so it sits on 3 lines in the band) and `picks`, the 2 recipes or ways in that reader starts
   with, different on every panel; the whole panel is a link to `to`. `screen` is only drawn by the tabbed Audiences
   section, which no page uses now. */
export type Audiences = {
  heading: string
  items: { audience: AudienceId | 'developers'; name: string; line: string; picks?: string[]; screen?: ScreenName; to: string }[]
}
export type Outputs = { heading: string; line: string; facts?: { value: string; label: string }[]; formats: { format: string; line: string }[]; cta: Cta }
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
  /* Home only: the short section on the 4th way in, Check your AI agents (VERIFY.md 10), after the 4 jobs. */
  verify?: Proof
  rules?: Rules
  faq: Faq
  final: Final
}

/* A recipe's own page (/recipes/SLUG). James's recipe pages are the base: their structure stays.
   A recipe comes with all its infrastructure already set up; `kit` is what choosing it spins up. */
export type RecipeGroup =
  | 'Win customers'
  | 'Keep and grow customers'
  | 'Watch rivals'
  | 'Check your own journeys'
  | 'Get paid and save'
  | 'Check your AI agents'
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

/* ---- Use case studies (/use-cases/SLUG, content/usecases): James's worked examples, 1 job from start to finish for
   1 kind of customer, with invented names and numbers. Appended 2 Oct; nothing above changes.
   The story, in order: hero > how (his set up and run phases) > problem (the gap) > split (who does what) > outputs
   (what the reader does with it) > recipe > proof (his last phase: what lands, on its screen) > questions > final.
   Every name and figure is an example; `hero.example.note` and `fine` say so on the page. ---- */

/* 1 of James's numbered steps. `example` is what the customer in the example chose or got. */
export type StudyStep = { title: string; line: string; example?: string }
/* 1 stop on the way from the reader's list to their own tools (his hero diagram). */
export type StudyNode = { label: string; title: string; items: string[]; foot: string }
export type StudyLink = { label: string; title: string; line: string; cta: Cta }

export type UseCaseStudy = {
  meta: Meta
  /* The study's short name and 1 line, for the Resources menu, the phone sheet, the footer and the Use cases index. */
  name: string
  line: string
  hero: {
    pill?: string
    headline: string
    sub: string
    /* Who the example is about, as chips, and the line that says it is made up. */
    example: { chips: string[]; note: string }
    flow?: StudyNode[]
    capture: Capture
  }
  /* His phases in order. A phase plays its screen beside its numbered steps; a phase without a screen shows its chips. */
  how: { heading: string; sub?: string; steps: { title: string; line: string; screen?: ScreenName; chips?: string[]; steps: StudyStep[] }[] }
  /* `answer` is the 1 line that turns the problem into what Obsession hands back. */
  problem: { heading: string; sub?: string; items: { title: string; line: string }[]; answer?: string }
  /* How it fits the reader's own tools: in and out of the place they already work. */
  fit?: { heading: string; line: string; items: { title: string; line: string }[] }
  /* What the reader keeps, and what Obsession runs. */
  split?: { yours: { label: string; heading: string; items: string[] }; ours: { label: string; heading: string; items: string[] } }
  outputs?: { heading: string; sub?: string; groups: { label?: string; line?: string; items: { label?: string; title: string; line: string; example: string }[] }[] }
  /* What lands, on its screen. `opener` is the first email the reader writes from it, with their own mockup. */
  proof: {
    heading: string
    line: string
    screen: ScreenName
    steps?: StudyStep[]
    opener?: {
      heading: string
      line: string
      mail: { from: string; to: string; subject: string; body: string[]; attachments: string[]; note: string }
      mockup: { label: string; sender: string; channel: string; messages: { day: string; text: string }[] }
    }
  }
  /* The recipe it runs and the 1 real run. */
  more: { recipe: StudyLink; sample: StudyLink }
  fine: string
  faq: Faq
  final: Final
}

/* ---- Resources (appended 3 Oct): the Resources hub (/resources), the Use cases index (/use-cases) and the Blog
   index (/blog), in content/resources.ts. Each is a centred hero, rows of links, and the waitlist. The blog's posts
   follow their own contract (content/blog/types.ts). ---- */
export type IndexHero = { headline: string; sub: string }
/* 1 group of link rows: its name and line on the left, the rows on the right. */
export type LinkGroup = { id: string; name: string; line: string }
export type ResourcesPage = {
  meta: Meta
  hero: IndexHero
  groups: {
    useCases: LinkGroup
    sample: LinkGroup & { link: Cta & { line: string } }
    blog: LinkGroup & { all: Cta; empty: { label: string; line: string } }
  }
  final: Final
}
export type UseCasesIndexPage = { meta: Meta; hero: IndexHero; group: LinkGroup; final: Final }
export type BlogIndexPage = {
  meta: Meta
  hero: IndexHero
  /* With no posts yet, the page points at the work itself instead (the use cases and the real run). */
  empty: { heading: string; line: string }
  final: Final
}
