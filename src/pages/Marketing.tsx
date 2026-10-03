import { GapStory } from '../components/sections/GapStory'
import { page } from '../content/pages/marketing'
import { AudiencePage } from './AudiencePage'

/* /marketing: the shared audience story (AudiencePage) with content/pages/marketing.ts, in the reader's own company.
   Its gap opens with the picture (sections/GapStory), imported here so only the pages that show it load its code. */
export function Marketing() {
  const story = page.gap.story
  return (
    <AudiencePage
      key="marketing"
      page={page}
      workspace="company"
      reader="marketing"
      gapStory={story && <GapStory story={story} />}
    />
  )
}
