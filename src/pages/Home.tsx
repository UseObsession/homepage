import { DevSection } from '../components/sections/DevSection'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Gap } from '../components/sections/Gap'
import { Hero } from '../components/sections/Hero'
import { How } from '../components/sections/How'
import { Jobs } from '../components/sections/Jobs'
import { Outputs } from '../components/sections/Outputs'
import { PersonaBand } from '../components/sections/PersonaBand'
import { RecipeGrid } from '../components/sections/RecipeGrid'
import { pages } from '../content/registry'
import './StoryPage.css'

/* Home (/), composed from content/pages/home.ts in the order of docs/REBUILD.md 1b:
   hero > who it's for (the reader picker, right under the console: the fork for readers who know who they are) >
   how it works > the gap > the 4 jobs > recipes > proof (the real September store check, in every output, with "Try
   your first shop free") > developers > questions > the waitlist (#join, where the nav's call to action lands).
   Home is drawn in the agency workspace, like Agencies. */
const page = pages.home
const workspace = 'agency'

export function Home() {
  return (
    <>
      <Hero hero={page.hero} workspace={workspace} />
      {page.audiences && <PersonaBand audiences={page.audiences} id="for" />}
      <How how={page.how} workspace={workspace} id="how" />
      <Gap gap={page.gap} id="gap" />
      {page.jobs && <Jobs jobs={page.jobs} workspace={workspace} id="jobs" />}
      {page.recipes && <RecipeGrid heading={page.recipes.heading} ids={page.recipes.ids} id="recipes" />}
      {page.outputs && <Outputs {...page.outputs} initial="pdf" id="proof" />}
      {page.developers && <DevSection developers={page.developers} workspace={workspace} id="developers" />}
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
