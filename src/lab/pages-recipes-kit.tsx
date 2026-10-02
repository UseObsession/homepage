import { useEffect } from 'react'
import { RecipeKit } from '../components/sections/RecipeKit'
import { recipePage } from '../content/recipe-page'
import { recipeBySlug } from '../content/registry'

/* Lab: the recipe kit replayed by a click 600ms after load, to see it part way through. Removed before shipping. */
export default function KitLab() {
  const r = recipeBySlug['mystery-shopper']!
  useEffect(() => {
    const t = window.setTimeout(() => document.querySelector<HTMLDivElement>('.s-kit')?.click(), 600)
    return () => window.clearTimeout(t)
  }, [])
  return (
    <div className="s-wrap" style={{ maxWidth: 760, paddingBlock: 48 }}>
      <RecipeKit name={r.name} items={r.kit} ui={recipePage.kit} />
    </div>
  )
}
