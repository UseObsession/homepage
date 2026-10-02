import { How } from '../components/sections/How'
import { Gap } from '../components/sections/Gap'
import { Outcomes } from '../components/sections/Outcomes'
import { Kinds } from '../components/sections/Kinds'
import { page } from '../content/pages/agencies'

/* Agencies' story beats: how it works (every step with chips), the gap, outcomes (3 figures), every kind of agency. */
export default function StoryAgenciesLab() {
  return (
    <>
      <How how={page.how} />
      <Gap gap={page.gap} />
      {page.outcomes && <Outcomes outcomes={page.outcomes} />}
      {page.kinds && <Kinds kinds={page.kinds} />}
    </>
  )
}
