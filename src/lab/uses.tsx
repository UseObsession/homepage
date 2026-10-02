import { page as agencies } from '../content/pages/agencies'
import { page as home } from '../content/pages/home'
import { page as marketing } from '../content/pages/marketing'
import { Audiences } from '../components/sections/Audiences'
import { FinalCta } from '../components/sections/FinalCta'
import { Proof } from '../components/sections/Proof'
import { RecipeGrid } from '../components/sections/RecipeGrid'
import { UseCases } from '../components/sections/UseCases'

/* Lab: use cases, who it's for, recipes, proof and the final call, with the real copy. */
export default function UsesLab() {
  return (
    <>
      {/* labRule: site.css gives a ruled section no top padding after another section; the lab adds it back. */}
      <style>{'.s-section--rule{padding-top:var(--ob-space-section)}'}</style>
      <UseCases uses={agencies.uses} workspace="agency" />
      <UseCases uses={marketing.uses} id="uses-marketing" className="s-section--rule" />
      {home.audiences && <Audiences audiences={home.audiences} className="s-section--rule" />}
      {home.recipes && <RecipeGrid heading={home.recipes.heading} ids={home.recipes.ids} className="s-section--rule" />}
      {agencies.proof && <Proof proof={agencies.proof} className="s-section--rule" />}
      <FinalCta final={home.final} className="s-section--rule" />
    </>
  )
}
