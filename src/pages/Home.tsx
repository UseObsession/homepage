import { Audiences } from '../components/sections/Audiences'
import { DevSection } from '../components/sections/DevSection'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Gap } from '../components/sections/Gap'
import { Hero } from '../components/sections/Hero'
import { How } from '../components/sections/How'
import { Jobs } from '../components/sections/Jobs'
import { Outputs } from '../components/sections/Outputs'
import { RecipeGrid } from '../components/sections/RecipeGrid'
import { pages } from '../content/registry'
import './StoryPage.css'

/* Home (/), composed from content/pages/home.ts in the order of docs/REBUILD.md 1b:
   hero > how it works > the gap > the 4 jobs > who it's for > recipes > proof (the real September store check, in every
   output, with "Try your first shop free") > developers > questions > the waitlist (#join, where the nav's call to
   action lands). Home is drawn in the agency workspace, like Agencies. */
const page = pages.home
const workspace = 'agency'

export function Home() {
  return (
    <>
      <Hero hero={page.hero} workspace={workspace} />
      <How how={page.how} workspace={workspace} id="how" />
      <Gap gap={page.gap} id="gap" />
      {page.jobs && <Jobs jobs={page.jobs} workspace={workspace} id="jobs" />}
      {page.audiences && <Audiences audiences={page.audiences} id="for" />}
      {page.recipes && <RecipeGrid heading={page.recipes.heading} ids={page.recipes.ids} id="recipes" />}
      {page.outputs && <Outputs {...page.outputs} initial="pdf" id="proof" />}
      {page.developers && <DevSection developers={page.developers} workspace={workspace} id="developers" />}
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
