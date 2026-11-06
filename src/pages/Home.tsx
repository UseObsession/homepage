import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { AgentLife } from '../components/v5/AgentLife'
import { Finding } from '../components/v5/Finding'
import { Hero5 } from '../components/v5/Hero5'
import { HeroFilm } from '../components/v5/HeroFilm'
import { HeroVideo } from '../components/v5/HeroVideo'
import { Look } from '../components/v5/Look'
import { OpenSource } from '../components/v5/OpenSource'
import { RunReports } from '../components/v5/RunReports'
import { StopTrack } from '../components/v5/StopTrack'
import { PersonaSection } from '../legacy/james/components/PersonaBand'
import { page } from '../content/pages/home'
import './StoryPage.css'

/* Home (/), composed from content/pages/home.ts in the order its comment gives (Seun's order since 4 Nov evening): what
   it is, what that looks like (1 AI customer's receipt at 1 company), whether it is real (our own runs, as a research
   note), what you would use it for (James's band as 3 uses), why other tools can't (where every other tool stops, and
   what only a customer catches), how it works (a list fans out to 10,000 companies), where the findings go (1 run
   wired to your AI agent, every format and your own code), what is open (the runtime beside Obsession Cloud, on a wide
   screen only), questions, the waitlist. Every block from the receipt to the questions is labelled with the reader's
   own question. Every block stands on the page's own ground; the receipt's paper is the 1 material that changes. */
export function Home() {
  const video = page.heroVideo
  /* The film plays in the page where we hold its file, else it sits behind the play button. */
  const heroVisual = video && (video.file ? <HeroFilm video={{ ...video, file: video.file }} /> : <HeroVideo video={video} />)
  return (
    <>
      <Hero5 hero={page.hero} visual={heroVisual} crumbs={false} center />
      {page.look && <Look look={page.look} id="look" />}
      {page.finding && <Finding finding={page.finding} id="found" />}
      <div className="james">
        <PersonaSection id="for" />
      </div>
      {page.stopTrack && <StopTrack track={page.stopTrack} id="compare" />}
      {page.life && <AgentLife life={page.life} id="how" />}
      {page.runReports && <RunReports runs={page.runReports} id="formats" />}
      {page.openSource && <OpenSource open={page.openSource} id="open-source" />}
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
