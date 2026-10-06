import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Gap } from '../components/sections/Gap'
import { GapStory } from '../components/sections/GapStory'
import { Hero } from '../components/sections/Hero'
import { HowRail } from '../components/sections/HowRail'
import { Outputs } from '../components/sections/Outputs'
import { PersonaSection } from '../legacy/james/components/PersonaBand'
import { page } from '../content/pages/home'
import './StoryPage.css'

/* Home (/), composed from content/pages/home.ts: 7 blocks, each with 1 job.
   1 what it is: the hero (the form, then the 5 tabs of app screens and 1 quiet line to every other recipe) >
   2 who it's for: James's persona band, restored in src/legacy/james with 6 panels and the reader palette, inside a
     div.james, exactly as he built it >
   3 how it works: the 4 steps on 1 rail, each over a small slice of the app doing its 1 thing (sections/HowRail; #how,
     where "Type a task" links) >
   4 the difference, shown: the gap's claim and hollin's picture, with no comparison rows >
   5 proof: the 1 real run, compact (its story in 1 line beside the output viewer, the link to the full report, and how
     the agents behave in 1 row) >
   6 questions: 6, closed until opened, under a hairline: the run and the questions share the page's ground, so the rule
     marks where 1 block ends, with the same section space on each side as an edge between 2 grounds has >
   7 start: the waitlist (#join, where the nav's call to action lands) and the agencies' free audits.
   Grounds (Paper and Gloss, styles/tones.css): the gap and the closing call are the ink chapters. How it works stands
   on the page's own ground between the band and the gap, its slices the product objects. The real run stands on
   the page's own ground, not the paper break: right under the gap, the break would touch an ink chapter
   (_research/colour/THEMES.md 12, Never 3), so on ink its viewer is the lit product object and on paper the glossy one.
   Home is drawn in the agency workspace, like Agencies. */
const workspace = 'agency'

export function Home() {
  return (
    <>
      <Hero hero={page.hero} workspace={workspace} />
      <div className="james">
        <PersonaSection id="for" />
      </div>
      {page.howRail && <HowRail rail={page.howRail} id="how" />}
      <Gap gap={page.gap} story={page.gap.story && <GapStory story={page.gap.story} />} id="gap" />
      {page.outputs && <Outputs {...page.outputs} initial="pdf" tone="base" compact id="proof" />}
      <Faq faq={page.faq} id="questions" className="s-faq--ruled" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
