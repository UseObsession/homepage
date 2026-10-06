import { Difference } from '../components/sections/Difference'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Gap } from '../components/sections/Gap'
import { Hero } from '../components/sections/Hero'
import { HowRail } from '../components/sections/HowRail'
import { Outputs } from '../components/sections/Outputs'
import { RecipeJobs } from '../components/sections/RecipeJobs'
import { PersonaSection } from '../legacy/james/components/PersonaBand'
import { page } from '../content/pages/home'
import './StoryPage.css'

/* Home (/), composed from content/pages/home.ts: 7 blocks, each with 1 job.
   1 what it is: the hero (the form, then the 5 tabs of app screens) >
   2 who it's for: James's persona band, restored in src/legacy/james with 6 panels and the reader palette, inside a
     div.james, exactly as he built it >
   3 how it works: the 4 steps on 1 rail, each over a small slice of the app doing its 1 thing (sections/HowRail; #how,
     where "Type a task" links) >
   4 the difference, shown: the gap's claim and the difference block (sections/Difference), 5 reader stories on 1 stage
     and the points row, with no comparison rows >
   5 recipes: what a recipe is, then the 6 jobs as doors on 1 grid of hairlines, 2 examples each, and the link to every
     recipe (sections/RecipeJobs; #recipes). It sits right after whatever renders the gap >
   6 proof: the 1 real run, compact (its story in 1 line beside the output viewer, the link to the full report, and how
     the agents behave in 1 row) >
   7 questions: 6, closed until opened, on the page's own ground again, so the edge out of the run marks where they
     begin, with no hairline (_research/colour/THEMES.md 12, Never 10) >
   8 start: the waitlist (#join, where the nav's call to action lands) and the agencies' free audits.
   Grounds (Paper and Gloss, styles/tones.css): how it works stands on the page's own ground between the band and the
   gap, its slices the product objects. Then the ink gap, the recipes on the page's own ground (an ink chapter never
   touches an alt ground, THEMES.md 12, Never 3), the real run as Home's 1 paper break (stone on paper, the black stage
   on it either way, THEMES.md 1 and 6), the questions on the page's own ground, and the closing call as the second
   ink chapter. The recipes keep the break off the gap (Never 3) and each change of ground ends a block.
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
      <Gap gap={page.gap} story={page.gap.difference && <Difference d={page.gap.difference} />} id="gap" className="s-gap--diff" />
      {page.recipeJobs && <RecipeJobs {...page.recipeJobs} id="recipes" />}
      {page.outputs && <Outputs {...page.outputs} initial="pdf" compact id="proof" />}
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
