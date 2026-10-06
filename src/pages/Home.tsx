import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Gap } from '../components/sections/Gap'
import { GapStory } from '../components/sections/GapStory'
import { Hero } from '../components/sections/Hero'
import { Outputs } from '../components/sections/Outputs'
import { RecipeJobs } from '../components/sections/RecipeJobs'
import { PersonaSection } from '../legacy/james/components/PersonaBand'
import { page } from '../content/pages/home'
import './StoryPage.css'

/* Home (/), composed from content/pages/home.ts: 7 blocks, each with 1 job.
   1 what it is: the hero (the form, then the 5 tabs of app screens) >
   2 who it's for: James's persona band, restored in src/legacy/james with 6 panels and the reader palette, inside a
     div.james, exactly as he built it >
   3 the difference, shown: the gap's claim and hollin's picture, with no comparison rows >
   4 recipes: what a recipe is, then the 6 jobs as doors on 1 grid of hairlines, 2 examples each, and the link to every
     recipe (sections/RecipeJobs; #recipes). It sits right after whatever renders the gap >
   5 proof: the 1 real run, compact (its story in 1 line beside the output viewer, the link to the full report, and how
     the agents behave in 1 row) >
   6 questions: 6, closed until opened, on the page's own ground again, so the edge out of the run marks where they
     begin, with no hairline (_research/colour/THEMES.md 12, Never 10) >
   7 start: the waitlist (#join, where the nav's call to action lands) and the agencies' free audits.
   Grounds (Paper and Gloss, styles/tones.css): the ink gap, then the recipes on the page's own ground (an ink chapter
   never touches an alt ground, THEMES.md 12, Never 3), then the real run as Home's 1 paper break (stone on paper, the
   black stage on it either way, THEMES.md 1 and 6), then the questions on the page's own ground, and the closing call
   as the second ink chapter. The recipes keep the break off the gap (Never 3) and each change of ground ends a block.
   Home is drawn in the agency workspace, like Agencies. */
const workspace = 'agency'

export function Home() {
  return (
    <>
      <Hero hero={page.hero} workspace={workspace} />
      <div className="james">
        <PersonaSection id="for" />
      </div>
      <Gap gap={page.gap} story={page.gap.story && <GapStory story={page.gap.story} />} id="gap" />
      {page.recipeJobs && <RecipeJobs {...page.recipeJobs} id="recipes" />}
      {page.outputs && <Outputs {...page.outputs} initial="pdf" compact id="proof" />}
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
