/* What the app knows about every recipe, worked example and post without carrying their words: the nav, the footer,
   the recipe lists and the links between pages read this. Each page's own words load with the page (App.tsx).
   On the server (the prerender) it is worked out here from the content. In the browser this module is the build's copy
   of its values (vite.config.ts contentIndex), so the app ships these lines instead of every page's words. */
import { agentsPage, blogLive, posts, recipeFileOf, recipes, refFileOf, references, studies, studyFileOf } from './registry'
import { CONTACT_EMAIL } from './site'

export const catalog = {
  /* Every recipe, in the registry's order, and the file its words are in. */
  recipes: recipes.map(({ id, slug, name, group, line }) => ({ id, slug, name, group, line, file: recipeFileOf[slug] })),
  studies: studies.map(({ name, line, meta }) => ({ name, line, path: meta.path, file: studyFileOf[meta.path] })),
  /* Every post, newest first: what a list of posts shows, and the hub and lead the Resources menu shows. */
  posts: posts.map(({ slug, title, dek, category, published, readingMinutes, featured }) => ({
    slug,
    title,
    dek,
    category,
    published,
    readingMinutes,
    featured: !!featured,
  })),
  blogLive,
  /* Every comparison, alternatives page and glossary term (content/reference.ts), in the registry's order: what the
     hubs, /compare and the link rows show, and the file each page's words are in. */
  references: references.map(({ kind, name, line, meta, company, term }) => ({
    kind,
    name,
    line,
    path: meta.path,
    company: company ?? '',
    term: term?.name ?? '',
    file: refFileOf[meta.path],
  })),
  /* For each glossary term, the reference pages and posts whose text links to it, so a term lists where it is used and
     a new page that links a term appears on it the day it ships. */
  usedBy: Object.fromEntries(
    references
      .filter((r) => r.kind === 'term')
      .map((t) => {
        const path = t.meta.path
        const links = (blocks: unknown) => {
          const s = JSON.stringify(blocks)
          return s.includes(`](${path})`) || s.includes(`"to":"${path}"`)
        }
        return [
          path,
          [
            ...references.filter((r) => r.meta.path !== path && links(r.blocks)).map((r) => r.meta.path),
            ...posts.filter((p) => links(p.blocks)).map((p) => `/blog/${p.slug}`),
          ],
        ]
      }),
  ) as Record<string, string[]>,
  /* The call to action on /agents, which the nav carries there (content/nav.ts). */
  agentsCta: agentsPage.contact.cta,
  /* The 1 address every notice gives (content/site.ts): the footer's Contact. */
  contact: CONTACT_EMAIL,
}

export type CatalogRecipe = (typeof catalog.recipes)[number]
export type CatalogReference = (typeof catalog.references)[number]
