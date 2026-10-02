import { pages } from '../content/registry'
import { AudiencePage } from './AudiencePage'

/* /sales: the shared audience story (AudiencePage) with content/pages/sales.ts, in the reader's own company. */
export function Sales() {
  return <AudiencePage key="sales" page={pages.sales} workspace="company" reader="sales" />
}
