import type { ReactNode } from 'react'
import { FinalCta } from '../components/sections/FinalCta'
import { Faq } from '../components/sections/Faq'
import { Gap } from '../components/sections/Gap'
import { Hero } from '../components/sections/Hero'
import { How } from '../components/sections/How'
import { Kinds } from '../components/sections/Kinds'
import { Outcomes } from '../components/sections/Outcomes'
import { Proof } from '../components/sections/Proof'
import { RecipeGrid } from '../components/sections/RecipeGrid'
import { UseCases } from '../components/sections/UseCases'
import type { Workspace } from '../components/AppScreen'
import { readerPartners } from '../content/partners'
import type { Page, ReaderId } from '../content/types'
import './StoryPage.css'

/* Agencies, Founders, Sales and Marketing: 1 layout, only the words and the screens change (content/pages/NAME.ts).
   The story of docs/REBUILD.md 2, in order, each beat skipped when the page has no words for it:
   hero > how it works > the gap > use cases > outcomes > every kind of reader > recipes > proof > questions > the
   final call to action (#join, where the nav's call to action and the hero's second path land).
   `workspace` names whose workspace the app screens show: 'agency' on Agencies, 'company' everywhere else.
   `reader` is the page's reader, whose hue marks its room: the hero's glow and caret, the ink chapter's light (the gap)
   and the use case tabs' bar (styles/accents.css, 1 hue per page). How's last step, where the results land, carries
   the reader's own tools as 1 quiet line of marks (content/partners.ts).
   `gapStory` is the gap's picture where the page has one (Marketing's, sections/GapStory): the page that shows it
   imports it, so the pages without one never load its code. */
export function AudiencePage({
  page,
  workspace,
  reader,
  gapStory,
}: {
  page: Page
  workspace: Workspace
  reader: ReaderId
  gapStory?: ReactNode
}) {
  return (
    <>
      <Hero hero={page.hero} workspace={workspace} reader={reader} />
      {page.how && <How how={page.how} workspace={workspace} partners={readerPartners[reader]} id="how" />}
      <Gap gap={page.gap} reader={reader} story={gapStory} id="gap" />
      <UseCases uses={page.uses} workspace={workspace} reader={reader} id="uses" />
      {page.outcomes && <Outcomes outcomes={page.outcomes} id="outcomes" />}
      {page.kinds && <Kinds kinds={page.kinds} id="kinds" />}
      {page.recipes && <RecipeGrid heading={page.recipes.heading} ids={page.recipes.ids} id="recipes" />}
      {page.proof && <Proof proof={page.proof} id="proof" />}
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
