import { sales } from '../content/audiences'
import { AudiencePage } from './AudiencePage'

/* /sales. James's audience layout until the Pages phase rebuilds it from content/pages/sales.ts. */
export function Sales() {
  return <AudiencePage key="sales" a={sales} />
}
