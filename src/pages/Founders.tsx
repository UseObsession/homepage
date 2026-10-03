import { page } from '../content/pages/founders'
import { AudiencePage } from './AudiencePage'

/* /founders: the shared audience story (AudiencePage) with content/pages/founders.ts, in the reader's own company. */
export function Founders() {
  return <AudiencePage key="founders" page={page} workspace="company" reader="founders" />
}
