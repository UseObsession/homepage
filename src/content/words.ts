/* Each recipe's and each worked example's words, loaded for its own page only: every file is its own small chunk, found
   through content/catalog.ts (App.tsx loads the one a page shows before drawing it). */
import { onceEach } from '../lib/lazy'
import { catalog } from './catalog'
import type { Recipe, UseCaseStudy } from './types'

const recipeFiles = import.meta.glob<Recipe>('./recipes/*.ts', { import: 'recipe' })
const studyFiles = import.meta.glob<UseCaseStudy>('./usecases/*.ts', { import: 'study' })

/* 1 file's words (src/content/FOLDER/NAME.ts), loaded once. */
function words<T>(files: Record<string, () => Promise<T>>, folder: string, find: (key: string) => string | undefined) {
  return onceEach((key) => {
    const load = files[`./${folder}/${find(key)}.ts`]
    if (!load) throw new Error(`No content file in src/content/${folder} for ${key}`)
    return load()
  })
}

/* A recipe's words, by its slug. */
export const recipeWords = words(recipeFiles, 'recipes', (slug) => catalog.recipes.find((r) => r.slug === slug)?.file)

/* A worked example's words, by its address (/use-cases/SLUG). */
export const studyWords = words(studyFiles, 'usecases', (path) => catalog.studies.find((s) => s.path === path)?.file)
