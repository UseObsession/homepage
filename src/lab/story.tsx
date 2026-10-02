import { How } from '../components/sections/How'
import { Gap } from '../components/sections/Gap'
import { Jobs } from '../components/sections/Jobs'
import { page as home } from '../content/pages/home'

/* Home's story beats in order: how it works, the gap, the 4 jobs. */
export default function StoryLab() {
  return (
    <>
      <How how={home.how} id="how" />
      <Gap gap={home.gap} />
      {home.jobs && <Jobs jobs={home.jobs} />}
    </>
  )
}
