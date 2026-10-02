import { page as agencies } from '../content/pages/agencies'
import { page as home } from '../content/pages/home'
import { page as sales } from '../content/pages/sales'
import { Audiences } from '../components/sections/Audiences'
import { FinalCta } from '../components/sections/FinalCta'
import { Proof } from '../components/sections/Proof'
import { RecipeGrid } from '../components/sections/RecipeGrid'
import { UseCases } from '../components/sections/UseCases'

/* Lab: other starting tabs (the bar measured under them), a page's own recipe subset, the mystery shop final call. */
export default function UsesStatesLab() {
  return (
    <>
      {/* labRule: site.css gives a ruled section no top padding after another section; the lab adds it back. */}
      <style>{'.s-section.s-section--rule{padding-top:var(--ob-space-section)}'}</style>
      <UseCases uses={agencies.uses} workspace="agency" initial={4} />
      <UseCases uses={sales.uses} initial={7} id="uses-sales" className="s-section--rule" />
      {home.audiences && <Audiences audiences={home.audiences} initial={4} className="s-section--rule" />}
      {agencies.recipes && <RecipeGrid heading={agencies.recipes.heading} ids={agencies.recipes.ids} className="s-section--rule" />}
      {sales.proof && <Proof proof={sales.proof} className="s-section--rule" />}
      <FinalCta final={agencies.final} className="s-section--rule" />
    </>
  )
}
