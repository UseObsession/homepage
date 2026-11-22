import type { LinkGroupRows, LinkRow } from '../components/sections/LinkGroups'
import { guidesCopy, readerHubs } from '../content/connections'
import { blogUi, formatDate } from '../content/resources'
import { posts } from '../content/registry'
import type { BlogPost } from '../content/blog/types'

/* The site's guide connections: every recipe, use case and reader page lists the guides that teach its job. The guides
   are found in the posts themselves (a recipe a post names in `related`, or any link in its text or call to action), so
   a new post wires itself in the day it ships and nothing here is kept by hand. */

/* 3 guides, each its title and date (founder, 22 Nov 2026: the shorter page; the titles say what each guide is). */
const MAX_GUIDES = 3

const asRow = (p: BlogPost): LinkRow => ({
  label: p.title,
  to: `/blog/${p.slug}`,
  foot: `${formatDate(p.published)} · ${blogUi.read(p.readingMinutes)}`,
})

const recipesOf = (p: BlogPost) => p.related.filter((r) => r.startsWith('recipe:'))

/* Does a post link this path, in its text, a list, a table or its call to action? */
const links = (p: BlogPost, path: string) => {
  const s = JSON.stringify(p.blocks)
  return s.includes(`](${path})`) || s.includes(`"to":"${path}"`)
}

/* The guides for a recipe or a use case: posts that name the recipe or the page in `related`, then posts that link the
   page. The closest come first: a post that names this recipe before any other, then the posts that name the fewest
   recipes (a post that lists every recipe teaches none of them in particular). */
export function guidesFor(path: string): LinkRow[] {
  const recipe = path.startsWith('/blueprints/') ? `recipe:${path.slice('/blueprints/'.length)}` : ''
  const fit = (p: BlogPost) => (recipe !== '' && recipesOf(p)[0] === recipe ? 0 : 1000) + recipesOf(p).length
  const named = posts
    .filter((p) => p.related.includes(path) || (recipe !== '' && p.related.includes(recipe)))
    .sort((a, b) => fit(a) - fit(b))
  const linked = posts.filter((p) => !named.includes(p) && links(p, path))
  return [...named, ...linked].slice(0, MAX_GUIDES).map(asRow)
}

/* The guides for a reader page: its hubs' newest posts, then posts that link the page. */
export function guidesForReader(path: string): LinkRow[] {
  const hubs = readerHubs[path] ?? []
  const inHub = posts.filter((p) => hubs.includes(p.category))
  const linked = posts.filter((p) => !inHub.includes(p) && links(p, path))
  return [...inHub, ...linked].slice(0, MAX_GUIDES).map(asRow)
}

/* The guide group a recipe, use case or reader page ends on, when it has matching guides. */
export function connectionsFor(here: string, kind: 'recipe' | 'useCase' | 'reader'): LinkGroupRows[] {
  const rows = kind === 'recipe' || kind === 'useCase' ? guidesFor(here) : guidesForReader(here)
  const copy = guidesCopy[kind]
  return rows.length ? [{ id: 'guides', name: copy.name, line: copy.line, rows }] : []
}
