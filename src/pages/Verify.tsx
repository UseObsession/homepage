import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Gap } from '../components/sections/Gap'
import { Hero } from '../components/sections/Hero'
import { How } from '../components/sections/How'
import { Kinds } from '../components/sections/Kinds'
import { Outcomes } from '../components/sections/Outcomes'
import { Proof } from '../components/sections/Proof'
import { RecipeGrid } from '../components/sections/RecipeGrid'
import { UseCases } from '../components/sections/UseCases'
import { page } from '../content/pages/verify'
import './StoryPage.css'

/* /verify, Check your AI agents (the 4th way in, content/ways.ts), composed from content/pages/verify.ts in the story
   order of docs/REBUILD.md 2: hero (the example runs in the console) > how it works > the gap > use cases > outcomes >
   every kind of AI agent > recipes > proof (the real September store check, the method behind every check: no Verify
   run is claimed until a real one lands) > questions > the free AI agent check (#join).
   The console is drawn in the reader's own company. How and the use cases show every screen as it was drawn ('agency'
   leaves a screen as it is), so the voice agent check in How keeps its agency and its client, Dental group. */

export function Verify() {
  return (
    <>
      <Hero hero={page.hero} workspace="company" />
      <How how={page.how} workspace="agency" id="how" />
      <Gap gap={page.gap} id="gap" />
      <UseCases uses={page.uses} workspace="agency" id="uses" />
      {page.outcomes && <Outcomes outcomes={page.outcomes} id="outcomes" />}
      {page.kinds && <Kinds kinds={page.kinds} id="kinds" />}
      {page.recipes && <RecipeGrid heading={page.recipes.heading} ids={page.recipes.ids} id="recipes" />}
      {page.proof && <Proof proof={page.proof} id="proof" />}
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
