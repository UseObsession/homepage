/* What the app knows about every recipe, worked example and post without carrying their words: the nav, the footer,
   the recipe lists and the links between pages read this. Each page's own words load with the page (App.tsx).
   On the server (the prerender) it is worked out here from the content. In the browser this module is the build's copy
   of its values (vite.config.ts contentIndex), so the app ships these lines instead of every page's words. */
import { agentsPage, blogLive, posts, recipeFileOf, recipes, studies, studyFileOf } from './registry'
import { CONTACT_EMAIL, llms } from './site'

export const catalog = {
  /* Every recipe, in the registry's order, and the file its words are in. */
  recipes: recipes.map(({ id, slug, name, group, line }) => ({ id, slug, name, group, line, file: recipeFileOf[slug] })),
  studies: studies.map(({ name, line, meta }) => ({ name, line, path: meta.path, file: studyFileOf[meta.path] })),
  /* Every post, newest first: what a list of posts shows. */
  posts: posts.map(({ slug, title, dek, published, readingMinutes }) => ({ slug, title, dek, published, readingMinutes })),
  blogLive,
  /* The call to action on /agents, which the nav carries there (content/nav.ts). */
  agentsCta: agentsPage.contact.cta,
  /* The 1 sentence (docs/SEARCH.md 2), word for word as in llms.txt: the footer's tagline (content/footer.ts). */
  summary: llms.summary,
  /* The 1 address every notice gives (content/site.ts): the footer's Contact. */
  contact: CONTACT_EMAIL,
}

export type CatalogRecipe = (typeof catalog.recipes)[number]
