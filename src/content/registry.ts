/* Every page and recipe the site renders, discovered from the content files, so adding a file adds its route's words,
   meta, sitemap entry, share image and llms.txt lines with nothing else to register:
   - src/content/pages/NAME.ts exports `page` (a Page), served at its meta.path.
   - src/content/recipes/SLUG.ts exports `recipe` (a Recipe), served at /recipes/SLUG.
   The site's own pages (Recipes index, Sample output, Privacy, Agents, 404) live in site.ts and sample.ts. */
import { recipeGroups } from './nav'
import { sample } from './sample'
import { agentsPage, notFoundPage, privacyPage, recipesPage } from './site'
import type { Page, Recipe, RecipeId } from './types'

const pageFiles = import.meta.glob<Page>('./pages/*.ts', { eager: true, import: 'page' })
const recipeFiles = import.meta.glob<Recipe>('./recipes/*.ts', { eager: true, import: 'recipe' })

const nameOf = (file: string) => file.slice(file.lastIndexOf('/') + 1, -'.ts'.length)

/* The pages built on the Page contract, by file name: home, agencies, founders, sales, marketing, developers. */
export type PageName = 'home' | 'agencies' | 'founders' | 'sales' | 'marketing' | 'developers'
export const pages = Object.fromEntries(Object.entries(pageFiles).map(([file, p]) => [nameOf(file), p])) as Record<PageName, Page>

/* Every recipe, in the order the nav, the footer and the Recipes index list them. */
const navOrder = recipeGroups.flatMap((g) => g.items.map((r) => r.id))
const rank = (id: RecipeId) => {
  const i = navOrder.indexOf(id)
  return i === -1 ? navOrder.length : i
}
export const recipes: Recipe[] = Object.values(recipeFiles).sort((a, b) => rank(a.id) - rank(b.id))
export const recipeBySlug: Record<string, Recipe | undefined> = Object.fromEntries(recipes.map((r) => [r.slug, r]))
export const recipeById = Object.fromEntries(recipes.map((r) => [r.id, r])) as Record<RecipeId, Recipe>

export { agentsPage, notFoundPage, privacyPage, recipesPage, sample }
