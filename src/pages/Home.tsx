import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { AgentLife } from '../components/v5/AgentLife'
import { CardGrid } from '../components/v5/CardGrid'
import { Finding } from '../components/v5/Finding'
import { Hero5 } from '../components/v5/Hero5'
import { HeroExplorer } from '../components/v5/HeroExplorer'
import { RunReports } from '../components/v5/RunReports'
import { StopTrack } from '../components/v5/StopTrack'
import { page } from '../content/pages/home'
import './StoryPage.css'

/* Home (/), composed from content/pages/home.ts in the order its comment gives (9 Nov, the data company rewrite): what
   it is, with the explorer as the hero's object; what is behind the login; whether it is real (our count and the 1 real
   record); who uses it; where else the data lives; how a company not covered yet is added; how to use it; questions;
   the early access form. The wall (Look), the uses band, the film and the open source section left Home on 9 Nov;
   their components stay for the other pages. */
export function Home() {
  return (
    <>
      <Hero5 hero={page.hero} visual={page.explorer && <HeroExplorer ex={page.explorer} />} crumbs={false} center />
      {page.dataKinds && <CardGrid grid={page.dataKinds} id="data" />}
      {page.finding && <Finding finding={page.finding} id="found" />}
      {page.users && <CardGrid grid={page.users} id="for" />}
      {page.stopTrack && <StopTrack track={page.stopTrack} id="compare" />}
      {page.life && <AgentLife life={page.life} id="how" />}
      {page.runReports && <RunReports runs={page.runReports} id="formats" />}
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
