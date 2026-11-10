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
    recipes: { name: 'Recipes for this', line: 'Ready-made collections that keep it dated, company by company.' },
    pages: { name: 'Where to go next', line: 'The pages that explain Obsession in depth.' },
    usedOn: { name: 'Where this term is used', line: 'The comparisons, alternatives and terms that lean on it.' },
  },
  /* /compare's list of the comparison pages and the alternatives hub (pages/Compare). */
  compareList: {
    vs: { id: 'one-by-one', name: 'Obsession beside each tool', line: 'One page per tool: what each holds, how it is read, its price as listed, and when to use both.' },
    alternatives: {
      id: 'alternatives',
      name: 'Alternatives, by job',
      line: 'For teams leaving an email archive or a competitive intelligence tool, every option sorted by the job it does.',
      all: { label: 'Every alternatives page', to: '/alternatives', line: 'MailCharts, Panoramata, Klue, Crayon and Competiscan, each beside the tools that do the same job.' },
    },
    glossary: { label: 'The glossary', to: '/glossary', line: 'The words of this work, from login wall to save offer, each defined in a sentence.' },
  },
}

const access = (source: string): Capture => ({ kind: 'waitlist', source, button: 'Request early access', interest: 'competitor' })

/* The close every reference page shares: early access, and the sample data as the quiet second path. */
export const refFinal = (source: string): Final => ({
  heading: 'Which company should we look up first?',
  capture: access(source),
  link: { label: 'See sample data', to: '/sample-output' },
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

const sample: Cta = { label: 'See sample data', to: '/sample-output' }

export const alternativesHub: ReferenceHub = {
  meta: {
    path: '/alternatives',
    title: 'Alternatives to MailCharts, Panoramata, Klue and Crayon',
    description:
      'Alternatives to MailCharts, Panoramata, Klue, Crayon and Competiscan, sorted by job from each tool’s own pages, with what competitors show customers.',
    answer:
      'Each alternatives page sorts the tools that do the same job as MailCharts, Panoramata, Klue, Crayon or Competiscan by the job a team needs done, from each tool’s own pages with its price as listed. The last job on every page is what competitors show only to signed-up customers, which Obsession keeps for any company you name.',
    ogImage: '/og/alternatives.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'Alternatives', path: '/alternatives' },
    ],
  },
  reader: 'marketing',
  hero: {
    headline: 'Alternatives to the tools teams use to watch competitors.',
    sub: 'Each alternatives page sorts the tools that do the same job as MailCharts, Panoramata, Klue, Crayon or Competiscan by the job a team needs done, from each tool’s own pages with its price as listed. The last job on every page is what competitors show only to signed-up customers, which Obsession keeps for any company you name.',
    capture: access('alternatives-hero'),
    secondary: sample,
  },
  art: {
    kind: 'report',
    title: 'What each tool keeps',
    period: 'From each tool’s own pages, read 11 Nov 2026',
    cols: ['Kind of tool', 'For example', 'Whose companies'],
    rows: [
      { name: 'Email archives', cells: ['MailCharts, Panoramata', 'Brands on their index or your plan'] },
      { name: 'Competitive intelligence', cells: ['Klue, Crayon', 'What competitors publish and your team hears'] },
      { name: 'Consumer panels', cells: ['Competiscan', 'The sectors the panel covers'] },
      { name: 'Behind the login', cells: ['Obsession', 'Any company you name'], tone: 'ok' },
    ],
    notes: ['Each page sorts the alternatives by the job they do, with the price each tool lists.'],
  },
  faq: {
    heading: 'Questions about these pages.',
    items: [
      {
        q: 'How were the alternatives chosen?',
        a: 'Each page lists the tools whose own pages describe the same job, read on 11 November 2026, with the price each page lists. A tool whose page shows no price says so.',
      },
      {
        q: 'Why is Obsession on every page?',
        a: 'Because one job none of these tools describe is keeping what a company shows only to signed-up customers: its emails after a sign-up, member prices, trial limits and the offer in its cancel flow. Obsession keeps that for any company you name, so it sits last on every page, beside the tools rather than instead of them.',
      },
      {
        q: 'Is there an Exa, Tavily or Firecrawl alternatives page?',
        a: 'Our guides cover the web search and scraping tools. These pages stay with the tools that watch competitors’ emails, offers and positioning.',
      },
    ],
  },
  final: refFinal('alternatives-final'),
}

export const glossaryHub: ReferenceHub = {
  meta: {
    path: '/glossary',
    title: 'Glossary: login walls, member prices, save offers and more',
    description:
      'Plain definitions of the words for what companies show only to customers: login wall, member price, trial limit, save offer, one-click unsubscribe, DKIM.',
    answer:
      'The glossary defines the words for what companies show only to signed-up customers, from a login wall and a member price to a save offer, one-click unsubscribe and DKIM, each in a sentence or two. Each term links the guides, recipes and comparisons that use it.',
    ogImage: '/og/glossary.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
    ],
  },
  reader: 'sales',
  hero: {
    headline: 'The words for what companies show only to customers.',
    sub: 'The glossary defines the words for what companies show only to signed-up customers, from a login wall and a member price to a save offer, one-click unsubscribe and DKIM, each in a sentence or two. Each term links the guides, recipes and comparisons that use it.',
    capture: access('glossary-hero'),
    secondary: sample,
  },
  art: {
    kind: 'flow',
    title: 'northwind.example · terms',
    status: { tone: 'info', text: 'Example' },
    steps: [
      { label: 'Pricing page', detail: 'Public: search reads it', tone: 'info' },
      { label: 'Login wall', detail: 'The sign-up form', tone: 'late' },
      { label: 'Welcome series', detail: 'Day 0: 20% off', tone: 'ok' },
      { label: 'Member price', detail: '£24, not £29', tone: 'ok' },
      { label: 'Save offer', detail: '50% off to stay', tone: 'ok' },
    ],
    foot: 'Northwind is an invented company. Every step past the login wall is shown only to customers, and each is a term in the glossary.',
  },
  final: refFinal('glossary-final'),
}
