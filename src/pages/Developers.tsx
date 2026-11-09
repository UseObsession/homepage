import { AppScreen } from '../components/AppScreen'
import { LinkGroups } from '../components/sections/LinkGroups'
import { connectionsFor } from '../lib/connections'
import { DevSection } from '../components/sections/DevSection'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { UseCases } from '../components/sections/UseCases'
import { CardGrid } from '../components/v5/CardGrid'
import { GapPair } from '../components/v5/GapPair'
import { Hero5 } from '../components/v5/Hero5'
import { OpenSource } from '../components/v5/OpenSource'
import { Ways } from '../components/v5/Ways'
import { page } from '../content/pages/developers'
import './StoryPage.css'

/* /developers, composed from content/pages/developers.ts in the order its comment gives: what your agent gets (beside
   the hero's screen) > what you'd build yourself > the ways in and the 5 verbs > the integrations (the nav links to
   each) > the code and the webhook > what developers build on it > open source, short > questions > "Get API access"
   (#join). */
const workspace = 'company'

export function Developers() {
  const screen = page.hero.screens?.[0]?.screen
  return (
    <>
      <Hero5 hero={page.hero} reader="developers" visual={screen && <AppScreen name={screen} workspace={workspace} camera />} />
      {page.gapPair && <GapPair gap={page.gapPair} id="gap" />}
      {page.ways && <Ways ways={page.ways} id="ways" />}
      {page.integrations && <CardGrid grid={page.integrations} id="integrations" />}
      {page.developers && <DevSection developers={page.developers} workspace={workspace} id="code" />}
      {page.uses && <UseCases uses={page.uses} workspace={workspace} reader="developers" id="uses" />}
      {page.openSource && <OpenSource open={page.openSource} id="open-source" />}
      <LinkGroups groups={connectionsFor('/developers', 'reader')} />
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
