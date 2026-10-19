import { AppScreen } from '../components/AppScreen'
import { DevSection } from '../components/sections/DevSection'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { UseCases } from '../components/sections/UseCases'
import { AgentLife } from '../components/v5/AgentLife'
import { GapPair } from '../components/v5/GapPair'
import { Hero5 } from '../components/v5/Hero5'
import { OpenSource } from '../components/v5/OpenSource'
import { Ways } from '../components/v5/Ways'
import { page } from '../content/pages/developers'
import './StoryPage.css'

/* /developers, composed from content/pages/developers.ts in the order its comment gives: what it is for you (beside
   the `dev` screen) > what you'd build yourself > how a customer agent lives > the 4 ways in and the 5 verbs > the
   code and the webhook > what developers build on it > open source > questions > "Get API access" (#join). */
const workspace = 'company'

export function Developers() {
  const screen = page.hero.screens?.[0]?.screen
  return (
    <>
      <Hero5 hero={page.hero} reader="developers" visual={screen && <AppScreen name={screen} workspace={workspace} camera />} />
      {page.gapPair && <GapPair gap={page.gapPair} id="gap" />}
      {page.life && <AgentLife life={page.life} id="how" />}
      {page.ways && <Ways ways={page.ways} id="ways" />}
      {page.developers && <DevSection developers={page.developers} workspace={workspace} id="code" />}
      {page.uses && <UseCases uses={page.uses} workspace={workspace} reader="developers" id="uses" />}
      {page.openSource && <OpenSource open={page.openSource} id="open-source" />}
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
