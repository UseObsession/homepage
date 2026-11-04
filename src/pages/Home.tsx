import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { AgentLife } from '../components/v5/AgentLife'
import { Finding } from '../components/v5/Finding'
import { Hero5 } from '../components/v5/Hero5'
import { HeroFilm } from '../components/v5/HeroFilm'
import { HeroVideo } from '../components/v5/HeroVideo'
import { RunReports } from '../components/v5/RunReports'
import { StopTrack } from '../components/v5/StopTrack'
import { PersonaSection } from '../legacy/james/components/PersonaBand'
import { page } from '../content/pages/home'
import './StoryPage.css'

/* Home (/), composed from content/pages/home.ts in the order its comment gives (8 blocks since 4 Nov): what it is,
   what we found (93% of stores had a leak, as a research note), how it works, where the findings go (1 run wired to
   your AI agent, every format and your own code; the ask section folded into it on 4 Nov), why other tools can't
   (where every other tool stops, and what only a customer catches), who you send it to (each reader and where it sends
   its AI customers; the Kinds section folded into it on 4 Nov), questions, the waitlist. Every block from the finding
   to the questions is labelled with the reader's own question. Every block stands on the page's own
   ground; the receipt's paper is the 1 material that changes. */
export function Home() {
  const video = page.heroVideo
  /* The film plays in the page where we hold its file, else it sits behind the play button. */
  const heroVisual = video && (video.file ? <HeroFilm video={{ ...video, file: video.file }} /> : <HeroVideo video={video} />)
  return (
    <>
      <Hero5 hero={page.hero} visual={heroVisual} crumbs={false} center />
      {page.finding && <Finding finding={page.finding} id="found" />}
      {page.life && <AgentLife life={page.life} id="how" />}
      {page.runReports && <RunReports runs={page.runReports} id="formats" />}
      {page.stopTrack && <StopTrack track={page.stopTrack} id="compare" />}
      <div className="james">
        <PersonaSection id="for" />
      </div>
      <Faq faq={page.faq} limit={4} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
