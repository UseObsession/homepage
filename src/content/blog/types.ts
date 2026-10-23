/* The blog's content contract. Each post is src/content/blog/SLUG.ts exporting `post: BlogPost`.
   Inline text supports a small markdown subset: [link text](url) and **bold**. Internal links are root relative (/recipes/mystery-shopper). */

/* An illustration drawn in code on the design system (components/blog/Art.tsx): the agent's log, a chat, a journey,
   a price worked out, a one page report or the same question asked several times. Every company in one is invented,
   at a .example address, and its caption says it is an example. Tone carries meaning only: ok arrived or passed,
   late came late, fail never came or was wrong, info is neutral. */
export type ArtTone = 'ok' | 'late' | 'fail' | 'info'
export type ArtStatus = { tone: ArtTone; text: string }
export type ArtSpec =
  | { kind: 'log'; title: string; who: string; status?: ArtStatus; rows: { time: string; text: string; detail?: string; tone: ArtTone }[]; foot?: string }
  | { kind: 'chat'; title: string; turns: { from: 'customer' | 'bot'; name?: string; text: string; time?: string }[]; check?: ArtStatus & { label: string } }
  | { kind: 'flow'; title: string; status?: ArtStatus; steps: { label: string; detail: string; tone: ArtTone }[]; foot?: string }
  | { kind: 'price'; title: string; rows: { label: string; value: string; note?: string }[]; total: { label: string; value: string; note?: string } }
  | { kind: 'report'; title: string; period: string; cols: string[]; rows: { name: string; cells: string[]; tone?: ArtTone }[]; notes: string[] }
  | { kind: 'runs'; title: string; prompt: string; runs: { label: string; answer: string; verdict: ArtStatus }[]; foot?: string }

export type BlogBlock =
  | { kind: 'p'; text: string }
  /* A section. Its text is also its name in the article's side contents, so it stays short and plain. `compare` marks
     the section that compares the reader's options: the page links to it from the top and tags it in the contents. */
  | { kind: 'h2'; id: string; text: string; compare?: boolean }
  | { kind: 'h3'; id: string; text: string }
  | { kind: 'list'; ordered?: boolean; items: string[] }
  | { kind: 'quote'; text: string; cite: string; href?: string }
  /* An Obsession app screen (src/screens/NAME.tsx) placed beside the paragraph it proves. */
  | { kind: 'screen'; screen: string; caption: string; workspace?: 'agency' | 'company' }
  /* A diagram or image in public/blog/SLUG/, drawn on the design system (SVG preferred). */
  | { kind: 'figure'; src: string; alt: string; caption: string; width: number; height: number }
  /* `compare` marks a table of options: its head stays in view while it scrolls past. */
  /* A cell may break into lines with \n, 1 per tool. In a comparison (compare) every row is an option, written
     "Name: the tools it covers" (Obsession's as "Obsession (ours): its recipes"), and the columns are always
     Option, What it does well, Price, Where it stops, Best for. */
  | { kind: 'table'; caption: string; cols: string[]; rows: string[][]; compare?: boolean }
  /* A sourced number: every stat on the blog links to where it came from. */
  | { kind: 'stat'; value: string; label: string; source: string; href: string }
  | { kind: 'note'; title: string; text: string }
  | { kind: 'faq'; items: { q: string; a: string }[] }
  /* The quiet link back to the product: a recipe or page that does what the post describes. */
  | { kind: 'cta'; text: string; to: string; label: string }
  /* An illustration (ArtSpec), on the article's wide measure, with its caption. */
  | { kind: 'art'; art: ArtSpec; caption: string }

export type BlogPost = {
  slug: string
  /* The H1, written for people. */
  title: string
  /* 1 or 2 sentences under the title. */
  dek: string
  /* SEO: title 50 to 60 characters, description 140 to 155, primary keyword in both. */
  metaTitle: string
  description: string
  /* The 1 or 2 sentences an AI assistant should quote: a direct answer to the post's main question. */
  answer: string
  primaryKeyword: string
  keywords: string[]
  /* The hub it belongs to (see docs/SEARCH.md), e.g. 'Mystery shopping', 'Competitor intelligence'. */
  category: string
  published: string // ISO date
  updated: string // ISO date
  readingMinutes: number
  /* Both founders, listed as 2 authors in the structured data (docs/REBUILD.md section 9c). */
  authors: { name: string; role: string }[]
  /* The post's 1 picture under its title: a photograph where the post's own world is worth seeing (graded, credited, no
     face presented as a customer), else an illustration. The app screen, if any, sits in the text where the by-hand
     method stops. */
  hero: {
    screen?: string
    workspace?: 'agency' | 'company'
    image?: { src: string; alt: string; width: number; height: number; thumb?: string; credit?: { name: string; url: string } }
    art?: ArtSpec
  }
  blocks: BlogBlock[]
  sources: { title: string; publisher: string; url: string; date?: string }[]
  /* Slugs of related posts, recipe slugs prefixed "recipe:", or page paths. */
  related: string[]
  /* The post the blog index leads with; without one, the newest leads. */
  featured?: boolean
  /* Where it sits among posts published the same day, lowest first (the index mixes hubs and pictures); else by title. */
  order?: number
}
