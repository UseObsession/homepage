import { page } from '../content/pages/sales'
import { AudiencePage } from './AudiencePage'

/* /sales: the shared audience story (AudiencePage) with content/pages/sales.ts, in the reader's own company. */
export function Sales() {
  return <AudiencePage key="sales" page={page} workspace="company" reader="sales" />
}
