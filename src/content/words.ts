/* Each recipe's and each worked example's words, loaded for its own page only: every file is its own small chunk, found
   through content/catalog.ts (App.tsx loads the one a page shows before drawing it). */
import { hydrating } from '../lib/hydration'
import { onceEach } from '../lib/lazy'
import { siteStyles } from '../lib/siteStyles'
import { catalog } from './catalog'
import type { ReferencePage } from './reference'
import type { Recipe, UseCaseStudy } from './types'

const recipeFiles = import.meta.glob<Recipe>('./recipes/*.ts', { import: 'recipe' })
const studyFiles = import.meta.glob<UseCaseStudy>('./usecases/*.ts', { import: 'study' })
const refFiles = import.meta.glob<ReferencePage>(['./compare/*.ts', './alternatives/*.ts', './terms/*.ts'], { import: 'ref' })

/* 1 file's words (src/content/FOLDER/NAME.ts), loaded once; for a page reached client side, with the site's whole
   stylesheet (lib/siteStyles.ts), as a page's code brings it. */
function words<T>(files: Record<string, () => Promise<T>>, folder: string, find: (key: string) => string | undefined) {
  return onceEach((key) => {
    const load = files[`./${folder}/${find(key)}.ts`]
    if (!load) throw new Error(`No content file in src/content/${folder} for ${key}`)
    return Promise.all([load(), hydrating() ? undefined : siteStyles()]).then(([w]) => w)
  })
}

/* A recipe's words, by its slug. */
export const recipeWords = words(recipeFiles, 'recipes', (slug) => catalog.recipes.find((r) => r.slug === slug)?.file)

/* A worked example's words, by its address (/use-cases/SLUG). */
export const studyWords = words(studyFiles, 'usecases', (path) => catalog.studies.find((s) => s.path === path)?.file)

/* A comparison's, an alternatives page's or a glossary term's words, by its address. Its file is FOLDER/NAME
   (catalog.references: compare/obsession-vs-exa, terms/dkim), so the folder comes with it. */
export const refWords = onceEach((path) => {
  const file = catalog.references.find((r) => r.path === path)?.file
  const load = file ? refFiles[`./${file}.ts`] : undefined
  if (!load) throw new Error(`No reference file in src/content for ${path}`)
  return Promise.all([load(), hydrating() ? undefined : siteStyles()]).then(([w]) => w)
})
