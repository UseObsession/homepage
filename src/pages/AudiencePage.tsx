import { AppScreen, type Workspace } from '../components/AppScreen'
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

/* Marketing, Sales and Agencies: 1 layout, only the words and the screens change (content/pages/NAME.ts). Each block
   answers the question the last one leaves open (COPY.md, "Copy deck > Reader pages"):
   what it is for you (the hero, beside the app screen of the page's first use case) > what you can't see today and a
   customer can (the gap) > the jobs, 1 tab each, each with its screen and its recipe > how a customer agent lives >
   what you can ask it from the AI you already use (the ask section) > how it compares > a real one > questions > the call to action (#join).
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
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
