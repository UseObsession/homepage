import { pages } from '../content/registry'
import { AudiencePage } from './AudiencePage'

/* /marketing: the shared audience story (AudiencePage) with content/pages/marketing.ts, in the reader's own company. */
export function Marketing() {
  return <AudiencePage key="marketing" page={pages.marketing} workspace="company" />
}
