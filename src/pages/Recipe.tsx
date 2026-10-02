import { recipeBySlug as legacy } from '../content/recipes'
import { recipeBySlug } from '../content/registry'
import { Placeholder } from './Placeholder'
import { RecipePage } from './RecipePage'

/* /recipes/SLUG, for every recipe in content/recipes. James's recipe page renders the recipes it already knows; the
   others show their hero from the new content. The Pages phase rebuilds them all from content/recipes. */
export function Recipe({ slug }: { slug: string }) {
  const r = recipeBySlug[slug]
  if (!r) return null
  if (legacy[slug]) return <RecipePage />
  return <Placeholder headline={r.hero.headline} sub={r.hero.sub} capture={r.hero.capture} />
}
