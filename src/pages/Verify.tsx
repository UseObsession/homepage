import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Gap } from '../components/sections/Gap'
import { Kinds } from '../components/sections/Kinds'
import { LinkGroups } from '../components/sections/LinkGroups'
import { Proof } from '../components/sections/Proof'
import { RecipeGrid } from '../components/sections/RecipeGrid'
import { CardGrid } from '../components/v5/CardGrid'
import { Hero5 } from '../components/v5/Hero5'
import { HeroExplorer } from '../components/v5/HeroExplorer'
import { connectionsFor } from '../lib/connections'
import { page } from '../content/pages/verify'
import './StoryPage.css'

/* /verify, what AI agents tell customers (9 Nov rewrite), composed from content/pages/verify.ts in its comment's order:
   the hero with Home's explorer on AI agents (every company an example, as the hero's note says) > what's in it > your
   vendor grades its own agent > every kind of agent > recipes > is this real (the real Brand G run, no AI agent run
   claimed) > questions > the early access form (#join). The old example runs, app screens and outcome ceilings are gone. */

export function Verify() {
  return (
    <>
      <Hero5 hero={page.hero} visual={page.explorer && <HeroExplorer ex={page.explorer} />} center />
      {page.dataKinds && <CardGrid grid={page.dataKinds} id="data" />}
      {page.gap && <Gap gap={page.gap} id="gap" />}
      {page.kinds && <Kinds kinds={page.kinds} id="kinds" />}
      {page.recipes && <RecipeGrid heading={page.recipes.heading} ids={page.recipes.ids} id="recipes" />}
      {page.proof && <Proof proof={page.proof} id="proof" />}
      <LinkGroups groups={connectionsFor('/verify', 'reader')} />
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
