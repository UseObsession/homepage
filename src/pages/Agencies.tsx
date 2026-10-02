import { agencies } from '../content/audiences'
import { AudiencePage } from './AudiencePage'

/* /agencies. James's audience layout until the Pages phase rebuilds it from content/pages/agencies.ts. */
export function Agencies() {
  return <AudiencePage key="agencies" a={agencies} />
}
