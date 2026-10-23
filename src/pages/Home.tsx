import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Outputs } from '../components/sections/Outputs'
import { AgentLife } from '../components/v5/AgentLife'
import { Ask } from '../components/v5/Ask'
import { Compare } from '../components/v5/Compare'
import { GapPair } from '../components/v5/GapPair'
import { Hero5 } from '../components/v5/Hero5'
import { HeroVideo } from '../components/v5/HeroVideo'
import { OpenSource } from '../components/v5/OpenSource'
import { Scale } from '../components/v5/Scale'
import { Targets } from '../components/v5/Targets'
import { PersonaSection } from '../legacy/james/components/PersonaBand'
import { page } from '../content/pages/home'
import './StoryPage.css'

/* Home (/), composed from content/pages/home.ts in the order its comment gives: what it is, why other tools can't, how
   (closing on what it found: 93% of stores had a gap, 1 store's report in every format), who you are, who you can be a
   customer of, what you can ask it from the AI you already use, how it compares, how far it goes, what is open,
   questions, the waitlist. Every block stands on the page's own ground; the
   receipt's paper is the 1 material that changes. */
export function Home() {
  return (
    <>
      <Hero5 hero={page.hero} visual={page.heroVideo && <HeroVideo video={page.heroVideo} />} crumbs={false} center />
      {page.gapPair && <GapPair gap={page.gapPair} id="gap" />}
      {page.life && <AgentLife life={page.life} id="how" />}
      {page.outputs && <Outputs {...page.outputs} initial="pdf" compact className="v5-proof" id="proof" />}
      <div className="james">
        <PersonaSection id="for" />
      </div>
      {page.targets && <Targets targets={page.targets} id="recipes" />}
      {page.ask && <Ask ask={page.ask} id="ask" />}
      {page.compare && <Compare compare={page.compare} id="compare" />}
      {page.scale && <Scale scale={page.scale} id="scale" />}
      {page.openSource && <OpenSource open={page.openSource} id="open-source" deskOnly />}
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
