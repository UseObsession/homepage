import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { AgentLife } from '../components/v5/AgentLife'
import { Compare } from '../components/v5/Compare'
import { Formats } from '../components/v5/Formats'
import { GapPair } from '../components/v5/GapPair'
import { Hero5 } from '../components/v5/Hero5'
import { OpenSource } from '../components/v5/OpenSource'
import { ReceiptStage } from '../components/v5/ReceiptStage'
import { Scale } from '../components/v5/Scale'
import { Targets } from '../components/v5/Targets'
import { Ways } from '../components/v5/Ways'
import { PersonaSection } from '../legacy/james/components/PersonaBand'
import { page } from '../content/pages/home'
import './StoryPage.css'

/* Home (/), composed from content/pages/home.ts in the order its comment gives: what it is, why other tools can't, how
   (closing on what you get, in every format), who you are, who you can be a customer of, how far it goes, how it
   compares, where you use it, what is open, questions, the waitlist. Every block stands on the page's own ground; the
   receipt's paper is the 1 material that changes. */
export function Home() {
  return (
    <>
      <Hero5 hero={page.hero} visual={page.stage && <ReceiptStage stage={page.stage} />} crumbs={false} />
      {page.gapPair && <GapPair gap={page.gapPair} id="gap" />}
      {page.life && <AgentLife life={page.life} id="how" />}
      {page.formats && <Formats formats={page.formats} id="formats" />}
      <div className="james">
        <PersonaSection id="for" />
      </div>
      {page.targets && <Targets targets={page.targets} id="recipes" />}
      {page.scale && <Scale scale={page.scale} id="scale" />}
      {page.compare && <Compare compare={page.compare} id="compare" />}
      {page.ways && <Ways ways={page.ways} id="ways" />}
      {page.openSource && <OpenSource open={page.openSource} id="open-source" />}
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
