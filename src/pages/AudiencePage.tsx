import { AppScreen, type Workspace } from '../components/AppScreen'
import { LinkGroups } from '../components/sections/LinkGroups'
import { connectionsFor } from '../lib/connections'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Proof } from '../components/sections/Proof'
import { UseCases } from '../components/sections/UseCases'
import { AgentLife } from '../components/v5/AgentLife'
import { Ask } from '../components/v5/Ask'
import { Compare } from '../components/v5/Compare'
import { GapPair } from '../components/v5/GapPair'
import { Hero5 } from '../components/v5/Hero5'
import type { Page, ReaderId } from '../content/types'
import './StoryPage.css'

/* Marketing, Sales and Agencies: 1 layout, only the words and the screens change (content/pages/NAME.ts). Since the
   9 Nov rewrite each page reads: what you get from the web behind the login (the hero, beside an app screen) > the hand
   work you do today (the gap) > the jobs, 1 tab each, each with its screen and its recipe > what you can ask from the
   AI you already use (the ask section) > Brand G, the 1 real run > questions > early access (#join). The 3 pages leave
   out `life` and `compare`, which repeated Home; the blocks stay here for any page that sets them.
   `workspace` names whose workspace the app screens show: 'agency' on Agencies, 'company' everywhere else. `reader`
   gives the hero its hue (styles/accents.css). */
export function AudiencePage({ page, workspace, reader }: { page: Page; workspace: Workspace; reader: ReaderId }) {
  const screen = page.hero.screens?.[0]?.screen
  return (
    <>
      <Hero5 hero={page.hero} reader={reader} visual={screen && <AppScreen name={screen} workspace={workspace} camera />} />
      {page.gapPair && <GapPair gap={page.gapPair} id="gap" />}
      {page.uses && <UseCases uses={page.uses} workspace={workspace} reader={reader} id="uses" />}
      {page.life && <AgentLife life={page.life} id="how" />}
      {page.ask && <Ask ask={page.ask} id="ask" />}
      {page.compare && <Compare compare={page.compare} id="compare" />}
      {page.proof && <Proof proof={page.proof} id="proof" />}
      <LinkGroups groups={connectionsFor(page.meta.path, 'reader')} />
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
