import { pages } from '../content/registry'
import { AudiencePage } from './AudiencePage'

/* /founders: the shared audience story (AudiencePage) with content/pages/founders.ts, in the reader's own company. */
export function Founders() {
  return <AudiencePage key="founders" page={pages.founders} workspace="company" reader="founders" />
}
