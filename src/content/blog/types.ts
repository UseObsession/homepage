/* The blog's content contract. Each post is src/content/blog/SLUG.ts exporting `post: BlogPost`.
   Inline text supports a small markdown subset: [link text](url) and **bold**. Internal links are root relative (/recipes/mystery-shopper). */

export type BlogBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h2'; id: string; text: string }
  | { kind: 'h3'; id: string; text: string }
  | { kind: 'list'; ordered?: boolean; items: string[] }
  | { kind: 'quote'; text: string; cite: string; href?: string }
  /* An Obsession app screen (src/screens/html/NAME.html) placed beside the paragraph it proves. */
  | { kind: 'screen'; screen: string; caption: string; workspace?: 'agency' | 'company' }
  /* A diagram or image in public/blog/SLUG/, drawn on the design system (SVG preferred). */
  | { kind: 'figure'; src: string; alt: string; caption: string; width: number; height: number }
  | { kind: 'table'; caption: string; cols: string[]; rows: string[][] }
  /* A sourced number: every stat on the blog links to where it came from. */
  | { kind: 'stat'; value: string; label: string; source: string; href: string }
  | { kind: 'note'; title: string; text: string }
  | { kind: 'faq'; items: { q: string; a: string }[] }
  /* The quiet link back to the product: a recipe or page that does what the post describes. */
  | { kind: 'cta'; text: string; to: string; label: string }

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
  hero: { screen?: string; workspace?: 'agency' | 'company'; image?: { src: string; alt: string; width: number; height: number } }
  blocks: BlogBlock[]
  sources: { title: string; publisher: string; url: string; date?: string }[]
  /* Slugs of related posts, recipe slugs prefixed "recipe:", or page paths. */
  related: string[]
}
