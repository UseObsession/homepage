import { page } from '../content/pages/marketing'
import { AudiencePage } from './AudiencePage'

/* /marketing: the shared audience story (AudiencePage) with content/pages/marketing.ts, in the reader's own company. */
export function Marketing() {
  return <AudiencePage key="marketing" page={page} workspace="company" reader="marketing" />
}
