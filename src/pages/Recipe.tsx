import { recipeBySlug } from '../content/registry'
import { RecipePage } from './RecipePage'

/* /recipes/SLUG, for every recipe in src/content/recipes (the route renders the 404 page for any other slug). */
export function Recipe({ slug }: { slug: string }) {
  const r = recipeBySlug[slug]
  return r ? <RecipePage recipe={r} /> : null
}
