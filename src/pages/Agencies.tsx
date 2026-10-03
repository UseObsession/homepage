import { page } from '../content/pages/agencies'
import { AudiencePage } from './AudiencePage'

/* /agencies: the shared audience story (AudiencePage) with content/pages/agencies.ts, in the agency workspace. */
export function Agencies() {
  return <AudiencePage key="agencies" page={page} workspace="agency" reader="agencies" />
}
