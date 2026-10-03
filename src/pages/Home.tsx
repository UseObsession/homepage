import { DevSection } from '../components/sections/DevSection'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Gap } from '../components/sections/Gap'
import { GapStory } from '../components/sections/GapStory'
import { Hero } from '../components/sections/Hero'
import { How } from '../components/sections/How'
import { Jobs } from '../components/sections/Jobs'
import { Outputs } from '../components/sections/Outputs'
import { PersonaBand } from '../components/sections/PersonaBand'
import { Proof } from '../components/sections/Proof'
import { RecipeGrid } from '../components/sections/RecipeGrid'
import { Rules } from '../components/sections/Rules'
import { page } from '../content/pages/home'
import './StoryPage.css'

/* Home (/), composed from content/pages/home.ts in the order of docs/REBUILD.md 1b:
   hero > who it's for (the reader picker, right under the console: the fork for readers who know who they are) >
   how it works > the gap > the 4 jobs > the AI agent checks (the 4th way in: the claim beside its screen, linking
   /verify) > recipes > proof (the real September store check, in every output, with "Try your first shop free") >
   developers > the rules every run follows (the trust beat, docs/REBUILD.md 1d) > questions > the waitlist (#join,
   where the nav's call to action lands).
   Home is drawn in the agency workspace, like Agencies.
   Its grounds (styles/tones.css) alternate down the page: paper and stone on paper, ink and lifted ink on ink, with the
   gap and the closing call as ink chapters, and the real run (Outputs) as the paper break on ink. */
const workspace = 'agency'

export function Home() {
  return (
    <>
      <Hero hero={page.hero} workspace={workspace} />
      {page.audiences && <PersonaBand audiences={page.audiences} id="for" />}
      <How how={page.how} workspace={workspace} id="how" />
      <Gap gap={page.gap} story={page.gap.story && <GapStory story={page.gap.story} />} id="gap" />
      {page.jobs && <Jobs jobs={page.jobs} workspace={workspace} id="jobs" />}
      {page.verify && <Proof proof={page.verify} workspace={workspace} tone="alt" id="verify" />}
      {page.recipes && <RecipeGrid heading={page.recipes.heading} ids={page.recipes.ids} tone="base" id="recipes" />}
      {page.outputs && <Outputs {...page.outputs} initial="pdf" id="proof" />}
      {page.developers && <DevSection developers={page.developers} workspace={workspace} id="developers" />}
      {page.rules && <Rules rules={page.rules} id="rules" />}
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
