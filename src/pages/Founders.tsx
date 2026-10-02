import { pages } from '../content/registry'
import { Placeholder } from './Placeholder'

/* /founders. New with the rebuild: its hero stands in until the Pages phase builds the page from
   content/pages/founders.ts. */
export function Founders() {
  const { hero } = pages.founders
  return <Placeholder pill={hero.pill} headline={hero.headline} sub={hero.sub} capture={hero.capture} />
}
