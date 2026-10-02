import { How } from '../components/sections/How'
import { Gap } from '../components/sections/Gap'
import { Outcomes } from '../components/sections/Outcomes'
import { Kinds } from '../components/sections/Kinds'
import { page as founders } from '../content/pages/founders'
import { page as sales } from '../content/pages/sales'
import { page as marketing } from '../content/pages/marketing'
import { page as developers } from '../content/pages/developers'

/* The other pages' variants: How in the company workspace, 6 gap rows, 4 figures, the longest headings. */
export default function StoryMoreLab() {
  return (
    <>
      <How how={founders.how} workspace="company" />
      <Gap gap={developers.gap} />
      {founders.outcomes && <Outcomes outcomes={founders.outcomes} />}
      {sales.outcomes && <Outcomes outcomes={sales.outcomes} />}
      {developers.outcomes && <Outcomes outcomes={developers.outcomes} />}
      {marketing.kinds && <Kinds kinds={marketing.kinds} />}
    </>
  )
}
