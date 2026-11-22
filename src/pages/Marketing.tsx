import { page, pricing } from '../content/pages/marketing'
import { AudiencePage } from './AudiencePage'

/* /marketing: the shared audience story (AudiencePage) with content/pages/marketing.ts, in the reader's own company, and
   its pricing tabs (`pricing`: the blueprints a brand's marketing team runs). */
export function Marketing() {
  return <AudiencePage key="marketing" page={page} workspace="company" reader="marketing" pricing={pricing} />
}
