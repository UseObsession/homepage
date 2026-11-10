import type { LinkGroupRows, LinkRow } from '../components/sections/LinkGroups'
import { catalog } from '../content/catalog'
import { nav } from '../content/nav'
import { refUi } from '../content/reference'
import { blogUi, formatDate } from '../content/resources'

/* The rows a reference page (pages/Reference) and the hubs link to, read from the app's slim index (content/catalog.ts)
   and the nav, so a page never carries another page's words. A related entry is a path ("/glossary/dkim",
   "/compare/obsession-vs-exa", "/sample-output"), a post's slug, or "recipe:SLUG". Anything that doesn't exist yet (a
   post still to be published) is left out, so it appears the day it ships and never as a dead link. */

const refRow = (path: string): LinkRow | undefined => {
  const r = catalog.references.find((x) => x.path === path)
  return r && { label: r.name, to: r.path, line: r.line }
}

/* The site's own pages, named as the nav names them. */
type Named = { label: string; to: string; line?: string }
const named: Named[] = [
  ...nav.menus.products.items,
  ...nav.menus.solutions.columns.flatMap((c): Named[] => c.items),
  ...nav.menus.resources.items,
  ...nav.readers,
  ...catalog.studies.map((s) => ({ label: s.name, to: s.path, line: s.line })),
  { label: 'Saw an Obsession agent?', to: '/agents', line: 'Who visits a site, and the lines every agent keeps.' },
  { label: 'Alternatives', to: '/alternatives', line: refUi.compareList.alternatives.all.line },
]
const SITE_PAGES = new Map<string, LinkRow>(
  named.filter((p) => p.to.startsWith('/') && !p.to.includes('#')).map((p) => [p.to, { label: p.label, to: p.to, line: p.line }]),
)

const postRow = (slug: string): LinkRow | undefined => {
  const p = catalog.posts.find((x) => x.slug === slug)
  return p && { label: p.title, to: `/blog/${p.slug}`, line: p.dek, foot: `${formatDate(p.published)} · ${blogUi.read(p.readingMinutes)}` }
}

const recipeRow = (slug: string): LinkRow | undefined => {
  const r = catalog.recipes.find((x) => x.slug === slug)
  return r && { label: r.name, to: `/recipes/${r.slug}`, line: r.line }
}

/* What a reference page points to next, grouped: related terms, comparisons and alternatives, guides, recipes, the
   site's pages, and (on a term) where the term is used. `here` is never listed. */
export function relatedGroups(here: string, related: string[]): LinkGroupRows[] {
  const terms: LinkRow[] = []
  const compare: LinkRow[] = []
  const guides: LinkRow[] = []
  const recipes: LinkRow[] = []
  const pages: LinkRow[] = []
  const seen = new Set<string>([here])
  const add = (into: LinkRow[], row: LinkRow | undefined) => {
    if (!row || seen.has(row.to)) return
    seen.add(row.to)
    into.push(row)
  }
  for (const r of related) {
    if (r.startsWith('recipe:')) add(recipes, recipeRow(r.slice(7)))
    else if (r.startsWith('/glossary/')) add(terms, refRow(r))
    else if (r.startsWith('/compare/') || r.startsWith('/alternatives/')) add(compare, refRow(r))
    else if (r.startsWith('/blog/')) add(guides, postRow(r.slice(6)))
    else if (r.startsWith('/')) add(pages, SITE_PAGES.get(r))
    else add(guides, postRow(r))
  }
  /* A term lists the pages whose text links to it (catalog.usedBy). */
  const usedOn: LinkRow[] = []
  for (const p of catalog.usedBy[here] ?? []) add(usedOn, p.startsWith('/blog/') ? postRow(p.slice(6)) : refRow(p))
  const g = refUi.groups
  return [
    { id: 'terms', ...g.terms, rows: terms },
    { id: 'compare', ...g.compare, rows: compare },
    { id: 'guides', ...g.guides, rows: guides },
    { id: 'recipes', ...g.recipes, rows: recipes },
    { id: 'used-on', ...g.usedOn, rows: usedOn },
    { id: 'next', ...g.pages, rows: pages },
  ].filter((x) => x.rows.length > 0)
}

/* The reference pages of a kind, as link rows (the hubs and /compare). */
export const rowsOf = (kind: 'compare' | 'alternatives' | 'term'): LinkRow[] =>
  catalog.references.filter((r) => r.kind === kind).map((r) => ({ label: r.name, to: r.path, line: r.line }))
