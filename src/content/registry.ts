/* Every page and recipe the site renders, discovered from the content files, so adding a file adds its route's words,
   meta, sitemap entry, share image and llms.txt lines with nothing else to register:
   - src/content/pages/NAME.ts exports `page` (a Page), served at its meta.path.
   - src/content/recipes/SLUG.ts exports `recipe` (a Recipe), served at /recipes/SLUG.
   - src/content/usecases/SLUG.ts exports `study` (a UseCaseStudy), served at its meta.path (/use-cases/SLUG).
   - src/content/blog/SLUG.ts exports `post` (a BlogPost), served at /blog/SLUG. types.ts there is the contract.
   The site's own pages (Recipes index, Sample output, Privacy, Agents, 404, Resources, Use cases, Blog) live in
   site.ts, sample.ts and resources.ts. */
import { sample } from './sample'
import { agentsPage, notFoundPage, privacyPage, recipesPage } from './site'
import type { BlogPost } from './blog/types'
import type { Page, Recipe, RecipeId, UseCaseStudy } from './types'

const pageFiles = import.meta.glob<Page>('./pages/*.ts', { eager: true, import: 'page' })
const recipeFiles = import.meta.glob<Recipe>('./recipes/*.ts', { eager: true, import: 'recipe' })
const studyFiles = import.meta.glob<UseCaseStudy>('./usecases/*.ts', { eager: true, import: 'study' })
const postFiles = import.meta.glob<BlogPost>(['./blog/*.ts', '!./blog/types.ts'], { eager: true, import: 'post' })

const nameOf = (file: string) => file.slice(file.lastIndexOf('/') + 1, -'.ts'.length)

/* The pages built on the Page contract, by file name: home, agencies, founders, sales, marketing, developers, and
   verify (/verify, Check your AI agents). */
export type PageName = 'home' | 'agencies' | 'founders' | 'sales' | 'marketing' | 'developers' | 'verify'
export const pages = Object.fromEntries(Object.entries(pageFiles).map(([file, p]) => [nameOf(file), p])) as Record<PageName, Page>

/* Every recipe, in the order the nav menu, the phone sheet, the footer and the Recipes index list them within their job.
   Each recipe's job (group), name and address come from its own file, and content/nav builds its groups from this list,
   so every surface names and groups a recipe the same way. */
const ORDER: RecipeId[] = [
  /* Win customers */
  'prospect',
  'listings',
  'handover',
  'quotes',
  /* Keep and grow customers: see it coming, grow it, prove it, renew it, save it, ask for the review */
  'account-watch',
  'expansion',
  'upsells',
  'business-case',
  'renewal',
  'saves',
  'reviews',
  /* Watch rivals */
  'competitor',
  'prices',
  'ads',
  'email-sms',
  'trial',
  /* Check your own journeys */
  'mystery',
  'checkout',
  'speed',
  'audit',
  'adcheck',
  'partners',
  'delivery',
  /* Get paid and save */
  'get-paid',
  'supplier-quotes',
  'spend',
  /* Check your AI agents */
  'support-bot',
  'voice-agent',
  'outbound-agent',
  'sales-agent',
  'vendor-agent',
  'resolution',
  'disclosure',
  'drift',
]
const rank = (id: RecipeId) => {
  const i = ORDER.indexOf(id)
  return i === -1 ? ORDER.length : i
}
export const recipes: Recipe[] = Object.values(recipeFiles).sort((a, b) => rank(a.id) - rank(b.id))
export const recipeBySlug: Record<string, Recipe | undefined> = Object.fromEntries(recipes.map((r) => [r.slug, r]))
export const recipeById = Object.fromEntries(recipes.map((r) => [r.id, r])) as Record<RecipeId, Recipe>

/* The worked examples, in the order the Resources menu, the footer and the Use cases index list them. */
const STUDY_ORDER = ['/use-cases/prospect-intelligence-with-clay', '/use-cases/member-prices-for-price-intelligence']
const studyRank = (path: string) => {
  const i = STUDY_ORDER.indexOf(path)
  return i === -1 ? STUDY_ORDER.length : i
}
export const studies: UseCaseStudy[] = Object.values(studyFiles).sort((a, b) => studyRank(a.meta.path) - studyRank(b.meta.path))
export const studyByPath: Record<string, UseCaseStudy | undefined> = Object.fromEntries(studies.map((s) => [s.meta.path, s]))

/* Every post, newest first. A post's address is its slug, which must match its file's name (the prerender checks). */
export const posts: BlogPost[] = Object.values(postFiles).sort((a, b) =>
  a.published === b.published ? a.title.localeCompare(b.title) : a.published < b.published ? 1 : -1,
)
/* The file each post came from, for the prerender's checks and the sitemap. */
export const postFileOf: Record<string, string> = Object.fromEntries(Object.entries(postFiles).map(([file, p]) => [p.slug, nameOf(file)]))
export const postBySlug: Record<string, BlogPost | undefined> = Object.fromEntries(posts.map((p) => [p.slug, p]))

export { agentsPage, notFoundPage, privacyPage, recipesPage, sample }
