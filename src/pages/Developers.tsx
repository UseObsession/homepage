import { DevSection } from '../components/sections/DevSection'
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
import { page } from '../content/pages/developers'
import './StoryPage.css'

/* /developers, composed from content/pages/developers.ts in the order of docs/REBUILD.md 2, with the code (the
   `developers` beat: the SDK call beside the `dev` screen) straight after How, as James had the code at the top:
   hero > how it works > the code > the gap > use cases > outcomes > every kind of product > recipes > proof >
   questions > "Get API access" (#join). Drawn in the reader's own company. The page's hue is the developers' (the
   hero's glow and caret, the use case tabs' bar: styles/accents.css). */
const workspace = 'company'

export function Developers() {
  return (
    <>
      <Hero hero={page.hero} workspace={workspace} reader="developers" />
      <How how={page.how} workspace={workspace} id="how" />
      {page.developers && <DevSection developers={page.developers} workspace={workspace} id="code" />}
      <Gap gap={page.gap} id="gap" />
      <UseCases uses={page.uses} workspace={workspace} reader="developers" id="uses" />
      {page.outcomes && <Outcomes outcomes={page.outcomes} id="outcomes" />}
      {page.kinds && <Kinds kinds={page.kinds} id="kinds" />}
      {page.recipes && <RecipeGrid heading={page.recipes.heading} ids={page.recipes.ids} id="recipes" />}
      {page.proof && <Proof proof={page.proof} id="proof" />}
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
