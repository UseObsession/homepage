import { marketing } from '../content/audiences'
import { AudiencePage } from './AudiencePage'

/* /marketing. James's audience layout until the Pages phase rebuilds it from content/pages/marketing.ts. */
export function Marketing() {
  return <AudiencePage key="marketing" a={marketing} />
}
