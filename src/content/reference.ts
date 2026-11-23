/* The reference pages (11 Nov 2026, from the competitor teardown, _research/seo/competitors-11nov/TEARDOWN.md §5 and §6):
   comparisons (/compare/obsession-vs-SLUG), alternatives (/alternatives/SLUG) and the glossary (/glossary/SLUG), each
   1 file in its own folder that exports `ref`, found by content/registry.ts and drawn by 1 component (pages/Reference),
   so a new page is 1 file. Their 2 hubs (/alternatives, /glossary) and the words around every reference page live here;
   /compare stays its own page and lists the comparisons (pages/Compare).

   Every page keeps the website's laws (obsession-website): Obsession introduced once with the entity sentence (ENTITY,
   imported, so it is word for word), the other company first by what it does well, from its own pages, dated; where its
   pages are silent, "its pages don't describe ..."; competitors' links nofollow (lib/competitors); early access, never
   a waitlist, never a free offer. Blocks and inline text are the blog's (content/blog/types.ts): [words](url) and **bold**. */
import type { ArtSpec, BlogBlock } from './blog/types'
import type { Capture, Cta, Final, Meta, ReaderId } from './types'

export type ReferenceKind = 'compare' | 'alternatives' | 'term'

/* The reader colour the page reads in (styles/accents.css), as the blog's hubs do. */
export type ReferenceReader = 'founders' | 'marketing' | 'agencies' | 'developers' | 'sales'

export type ReferencePage = {
  kind: ReferenceKind
  /* The page's own name, short: "Obsession vs Exa", "MailCharts alternatives", "DKIM". */
  name: string
  /* 1 line for the hubs and the link rows that list the page (a term's plain definition, under 120 characters). */
  line: string
  /* meta.path: /compare/obsession-vs-SLUG, /alternatives/SLUG or /glossary/SLUG; ogImage /og/compare-SLUG.png,
     /og/alternatives-SLUG.png or /og/glossary-SLUG.png, so a card never takes a recipe's or a post's. */
  meta: Meta & { ogImage: string }
  /* The H1. */
  title: string
  /* 1 or 2 sentences under the title. */
  dek: string
  primaryKeyword: string
  keywords: string[]
  /* The day every fact was read on its own page (ISO). */
  checked: string
  readingMinutes: number
  reader?: ReferenceReader
  /* The company a comparison or an alternatives page is about. */
  company?: string
  /* A glossary term's name and definition, for its DefinedTerm (lib/jsonld.ts). The definition is the answer's first
     sentence. */
  term?: { name: string; alternateName?: string[]; definition: string }
  /* The 1 picture under the title, drawn in code (components/blog/Art): the page's 1 idea. Every company in it is
     invented, at a .example address, and the picture says so. */
  art?: ArtSpec
  blocks: BlogBlock[]
  sources: { title: string; publisher: string; url: string; date?: string }[]
  /* What the page points to next: other reference pages and site pages by path, posts by slug, recipes as
     "recipe:SLUG". Anything that no longer exists is left out. */
  related: string[]
}

/* The words around every reference page (pages/Reference): chrome, not copy. */
export const refUi = {
  kicker: { compare: 'Compare', alternatives: 'Alternatives', term: 'Glossary' } satisfies Record<ReferenceKind, string>,
  hub: { compare: '/compare', alternatives: '/alternatives', term: '/glossary' } satisfies Record<ReferenceKind, string>,
  checked: 'Facts checked',
  read: (n: number) => `${n} min read`,
  sources: 'Sources',
  sourcesNote: (checked: string) => `In the order the page cites them. Every page was read on ${checked}.`,
  groups: {
    terms: { name: 'Related terms', line: 'Each defined in a sentence, with where it shows up.' },
    compare: { name: 'Compare and choose', line: 'Obsession beside the tools teams already use, from each tool’s own pages.' },
    guides: { name: 'Guides that use it', line: 'Step-by-step guides, each with every source linked.' },
    recipes: { name: 'Blueprints for this', line: 'Ready jobs Obsession runs on the pieces, with every result in your event log.' },
    pages: { name: 'Where to go next', line: 'The pieces, use cases and rules this page draws on, each on its own page.' },
    usedOn: { name: 'Where this term is used', line: 'The comparisons, alternatives and terms that lean on it.' },
  },
  /* /compare's list of the comparison pages and the alternatives hub (pages/Compare). */
  compareList: {
    vs: { id: 'one-by-one', name: 'Obsession beside each tool', line: 'One page per tool: what each holds, how it is read, its price as listed, and when to use both.' },
    alternatives: {
      id: 'alternatives',
      name: 'Alternatives, by job',
      line: 'For teams leaving an agent inbox, a cloud browser, a sandbox, a testing tool or a competitor tracker, every option sorted by the job it does.',
      all: { label: 'Every alternatives page', to: '/alternatives', line: 'AgentMail, Browserbase, E2B, Mailosaur, MailCharts, Panoramata, Klue, Crayon and Competiscan, each beside the tools that do the same job.' },
    },
    glossary: { label: 'The glossary', to: '/glossary', line: 'The words of this work, from login wall to save offer, each defined in a sentence.' },
  },
}

const access = (source: string): Capture => ({ kind: 'waitlist', source, button: 'Start free', interest: 'competitor' })

/* The close every reference page shares: Start free, and the blueprints as the quiet second path. */
export const refFinal = (source: string): Final => ({
  heading: 'Start with the piece your agent needs, or a ready-made job.',
  capture: access(source),
  link: { label: 'Browse blueprints', to: '/blueprints' },
})

/* A hub: the page's meta, its hero (the reader pages' hero: the words and early access on the left, the hub's 1 picture
   on the right), its questions and the close. Its lists come from the reference pages themselves (pages/ReferenceHub). */
export type ReferenceHub = {
  meta: Meta & { ogImage: string }
  reader: ReaderId
  hero: { headline: string; sub: string; capture: Capture; secondary: Cta }
  art: ArtSpec
  faq?: { heading: string; items: { q: string; a: string }[] }
  final: Final
}

export const alternativesHub: ReferenceHub = {
  meta: {
    path: '/alternatives',
    title: 'Alternatives to AgentMail, Browserbase, E2B and Klue',
    description:
      'Alternatives to AgentMail, Browserbase, E2B, Mailosaur, MailCharts, Klue and Crayon, sorted by job from each tool’s own pages, with Obsession last.',
    answer:
      'Each page sorts the tools that do the same job as AgentMail, Browserbase, E2B, Mailosaur, MailCharts, Panoramata, Klue, Crayon or Competiscan, from each tool’s own pages with its price as listed. Obsession sits last, with the piece or blueprint that does the job.',
    ogImage: '/og/alternatives.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
    ],
  },
  reader: 'marketing',
  hero: {
    headline: 'Alternatives to AgentMail, Browserbase, E2B and the tools teams use to watch competitors.',
    sub: 'Each page sorts the tools that do the same job as AgentMail, Browserbase, E2B, Mailosaur, MailCharts, Panoramata, Klue, Crayon or Competiscan, from each tool’s own pages with its price as listed. Obsession sits last, with the piece or blueprint that does the job.',
    capture: access('alternatives-hero'),
    secondary: { label: 'Browse blueprints', to: '/blueprints' },
  },
  art: {
    kind: 'report',
    title: 'What each tool does',
    period: 'From each tool’s own pages, read 11 and 23 Nov 2026',
    cols: ['Type of tool', 'For example', 'What it covers'],
    rows: [
      { name: 'Agent inboxes', cells: ['AgentMail, Nylas, Resend', 'Email for an agent'] },
      { name: 'Cloud browsers', cells: ['Browserbase, Steel, Browser Use', 'A browser an agent drives'] },
      { name: 'Code sandboxes', cells: ['E2B, Daytona, Modal', 'A computer to run an agent’s code'] },
      { name: 'Email and SMS testing', cells: ['Mailosaur, MailSlurp, Mailtrap', 'Test inboxes and numbers'] },
      { name: 'Email archives', cells: ['MailCharts, Panoramata', 'Competitors’ emails'] },
      { name: 'Competitive intelligence', cells: ['Klue, Crayon', 'What competitors publish'] },
      { name: 'Consumer panels', cells: ['Competiscan', 'The sectors a panel covers'] },
      { name: 'Obsession', cells: ['Every piece under one identity, and blueprints', 'Your agents, and any company you name'], tone: 'ok' },
    ],
    notes: ['Each page sorts the alternatives by the job they do, with the price each tool lists.'],
  },
  faq: {
    heading: 'Questions about these pages.',
    items: [
      {
        q: 'How were the alternatives chosen?',
        a: 'Each page lists the tools whose own pages describe the same job, read on 11 or 23 November 2026, with the price each page lists. A tool whose page shows no price says so.',
      },
      {
        q: 'Why is Obsession on every page?',
        a: 'Because it does the same jobs: an inbox, a phone number, a browser and a sandbox for an agent, under one identity, and blueprints that sign up to each competitor and keep every email, price and offer in the event log. It sits last on every page, beside the tools rather than instead of them.',
      },
      {
        q: 'Is there an Exa, Tavily or Firecrawl alternatives page?',
        a: 'Our guides cover the web search and scraping tools. These pages cover agent inboxes, cloud browsers, sandboxes and testing tools, and the tools that watch competitors.',
      },
    ],
  },
  final: refFinal('alternatives-final'),
}

export const glossaryHub: ReferenceHub = {
  meta: {
    path: '/glossary',
    title: 'AI agent glossary: the terms for agents, texts and email',
    description:
      'Plain definitions of the words around AI agents: harness, webhook, OTP, magic link, 10DLC, A2P messaging, voice agent, MCP, DKIM and headless browser.',
    answer:
      'The glossary defines the words around AI agents and the pieces they use, from an agent’s harness, webhooks and one-time codes to 10DLC, MCP and DKIM, each in a sentence or two. Each term links the piece, blueprint and guides that use it.',
    ogImage: '/og/glossary.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
    ],
  },
  reader: 'sales',
  hero: {
    headline: 'The words around AI agents, in a sentence or two.',
    sub: 'The glossary defines the words around AI agents and the pieces they use, from an agent’s harness, webhooks and one-time codes to 10DLC, MCP and DKIM, each in a sentence or two. Each term links the piece, blueprint and guides that use it.',
    capture: access('glossary-hero'),
    secondary: { label: 'Browse blueprints', to: '/blueprints' },
  },
  art: {
    kind: 'log',
    title: 'One sign-up, term by term',
    who: 'Juno, an agent at larkfield.example',
    rows: [
      { time: '09:00', text: 'Its harness plans the job', detail: 'AI agent harness: the loop around the model', tone: 'info' },
      { time: '09:01', text: 'Fills the sign-up form in a cloud browser', detail: 'Headless browser', tone: 'info' },
      { time: '09:01', text: 'A 6-digit code arrives by text', detail: 'One-time password, on a 10DLC number', tone: 'ok' },
      { time: '09:02', text: 'A magic link lands in its inbox', detail: 'Magic link, signed with DKIM', tone: 'ok' },
      { time: '09:02', text: 'The event reaches your code', detail: 'Webhook: sms.received, email.received', tone: 'ok' },
    ],
    foot: 'Larkfield is an invented company. Each step is a term in the glossary.',
  },
  final: refFinal('glossary-final'),
}
