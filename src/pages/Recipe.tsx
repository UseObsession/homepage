import { recipeWords } from '../content/words'
import { RecipePage } from './RecipePage'

/* /recipes/SLUG, for every recipe in src/content/recipes (the route renders the 404 page for any other slug). */
export function Recipe({ slug }: { slug: string }) {
  return <RecipePage recipe={recipeWords(slug).read()} />
}
