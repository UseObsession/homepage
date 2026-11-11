/* Every page and recipe the site renders, discovered from the content files, so adding a file adds its route's words,
   meta, sitemap entry, share image and llms.txt lines with nothing else to register:
   - src/content/pages/NAME.ts exports `page` (a Page), served at its meta.path.
   - src/content/recipes/SLUG.ts exports `recipe` (a Recipe), served at /recipes/SLUG.
   - src/content/usecases/SLUG.ts exports `study` (a UseCaseStudy), served at its meta.path (/use-cases/SLUG).
   - src/content/blog/SLUG.ts exports `post` (a BlogPost), served at /blog/SLUG. types.ts there is the contract;
     content/blog/archive/ holds posts kept but not published.
   - src/content/compare/obsession-vs-SLUG.ts, alternatives/SLUG.ts and terms/SLUG.ts export `ref` (a ReferencePage,
     content/reference.ts), served at its meta.path (/compare/obsession-vs-SLUG, /alternatives/SLUG, /glossary/SLUG).
   The site's own pages (Recipes index, Sample output, Privacy, Agents, 404, Resources, Use cases, Blog) live in
   site.ts, sample.ts and resources.ts; the 2 reference hubs (/alternatives, /glossary) in reference.ts. */
import { sample } from './sample'
import { agentsPage, notFoundPage, privacyPage, recipesPage } from './site'
import type { BlogPost } from './blog/types'
import type { ReferenceKind, ReferencePage } from './reference'
import type { Page, Recipe, RecipeId, UseCaseStudy } from './types'

const pageFiles = import.meta.glob<Page>('./pages/*.ts', { eager: true, import: 'page' })
const recipeFiles = import.meta.glob<Recipe>('./recipes/*.ts', { eager: true, import: 'recipe' })
const studyFiles = import.meta.glob<UseCaseStudy>('./usecases/*.ts', { eager: true, import: 'study' })
const postFiles = import.meta.glob<BlogPost>(['./blog/*.ts', '!./blog/types.ts'], { eager: true, import: 'post' })
const refFiles = import.meta.glob<ReferencePage>(['./compare/*.ts', './alternatives/*.ts', './terms/*.ts'], { eager: true, import: 'ref' })

const nameOf = (file: string) => file.slice(file.lastIndexOf('/') + 1, -'.ts'.length)

/* The pages built on the Page contract, by file name: home, agencies, sales, marketing, developers, compare, and
   verify (/verify, Check your AI agents). */
export type PageName = 'home' | 'agencies' | 'sales' | 'marketing' | 'developers' | 'verify' | 'compare'
export const pages = Object.fromEntries(Object.entries(pageFiles).map(([file, p]) => [nameOf(file), p])) as Record<PageName, Page>

/* Every recipe, in the order the nav menu, the phone sheet, the footer and the Recipes index list them within their job.
   Each recipe's job (group), name and address come from its own file, and content/nav builds its groups from this list,
   so every surface names and groups a recipe the same way. */
const ORDER: RecipeId[] = [
  /* Watch other companies: rivals, prospects and accounts, as their customer */
  'competitor',
  'ads',
  'email-sms',
  'prices',
  'trial',
  'prospect',
  'account-watch',
  /* Check your own journeys: your own ads, funnel, checkout and partners, as a customer */
  'mystery',
  'adcheck',
  'speed',
  'partners',
  'audit',
  'delivery',
  'listings',
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
/* The file each recipe came from, by slug: the app loads 1 recipe's words for its page (content/catalog.ts). */
export const recipeFileOf: Record<string, string> = Object.fromEntries(Object.entries(recipeFiles).map(([file, r]) => [r.slug, nameOf(file)]))
export const recipeById = Object.fromEntries(recipes.map((r) => [r.id, r])) as Record<RecipeId, Recipe>

/* The worked examples, in the order the Resources menu, the footer and the Use cases index list them. */
const STUDY_ORDER = [
  '/use-cases/prospect-intelligence-with-clay',
  '/use-cases/sales-intelligence-behind-the-login',
  '/use-cases/leak-checks-for-retention-agencies',
  '/use-cases/funnel-qa-for-cro-agencies',
  '/use-cases/leak-checks-for-ecommerce-stores',
  '/use-cases/member-prices-for-price-intelligence',
  '/use-cases/trial-checks-for-software-companies',
  '/use-cases/journey-checks-for-banks-and-fintechs',
]
const studyRank = (path: string) => {
  const i = STUDY_ORDER.indexOf(path)
  return i === -1 ? STUDY_ORDER.length : i
}
export const studies: UseCaseStudy[] = Object.values(studyFiles).sort((a, b) => studyRank(a.meta.path) - studyRank(b.meta.path))
export const studyByPath: Record<string, UseCaseStudy | undefined> = Object.fromEntries(studies.map((s) => [s.meta.path, s]))
/* The file each worked example came from, by its address. */
export const studyFileOf: Record<string, string> = Object.fromEntries(Object.entries(studyFiles).map(([file, s]) => [s.meta.path, nameOf(file)]))

/* Every post, newest first; on the same day by its order, then its title. A post's address is its slug, which must
   match its file's name (the prerender checks). */
export const posts: BlogPost[] = Object.values(postFiles).sort((a, b) =>
  a.published === b.published ? (a.order ?? 99) - (b.order ?? 99) || a.title.localeCompare(b.title) : a.published < b.published ? 1 : -1,
)
/* The file each post came from, for the prerender's checks and the sitemap. */
export const postFileOf: Record<string, string> = Object.fromEntries(Object.entries(postFiles).map(([file, p]) => [p.slug, nameOf(file)]))
export const postBySlug: Record<string, BlogPost | undefined> = Object.fromEntries(posts.map((p) => [p.slug, p]))
/* The blog shows only while it has a live post (it was archived in content/blog/archive from 3 to 23 Oct 2026). With
   none: no /blog pages, nav or footer link, Resources group, sitemap lines or feed. */
export const blogLive = posts.length > 0

/* The reference pages (content/reference.ts): comparisons in the order /compare lists them, alternatives likewise, and
   the glossary A to Z. A page's file is named for the last part of its address (the prerender checks). */
const REF_ORDER: Record<ReferenceKind, string[]> = {
  compare: ['exa', 'firecrawl', 'tavily', 'parallel', 'browserbase', 'mailcharts', 'panoramata', 'klue'].map((s) => `/compare/obsession-vs-${s}`),
  alternatives: ['mailcharts', 'panoramata', 'klue', 'crayon', 'competiscan'].map((s) => `/alternatives/${s}`),
  term: [],
}
const KIND_RANK: ReferenceKind[] = ['compare', 'alternatives', 'term']
const refRank = (r: ReferencePage) => {
  const i = REF_ORDER[r.kind].indexOf(r.meta.path)
  return i === -1 ? REF_ORDER[r.kind].length : i
}
export const references: ReferencePage[] = Object.values(refFiles).sort(
  (a, b) => KIND_RANK.indexOf(a.kind) - KIND_RANK.indexOf(b.kind) || refRank(a) - refRank(b) || a.name.localeCompare(b.name),
)
export const refByPath: Record<string, ReferencePage | undefined> = Object.fromEntries(references.map((r) => [r.meta.path, r]))
/* The folder and file each reference page came from, by its address (compare/obsession-vs-exa). */
export const refFileOf: Record<string, string> = Object.fromEntries(
  Object.entries(refFiles).map(([file, r]) => [r.meta.path, file.slice(2, -'.ts'.length)]),
)

export { agentsPage, notFoundPage, privacyPage, recipesPage, sample }
