import { JamesPage } from '../legacy/JamesPage'
import { ProspectIntelligence as Page } from '../legacy/james/pages/ProspectIntelligence'

/* /use-cases/prospect-intelligence-with-clay: James's page, as he built it (src/legacy/james), inside the site's nav and
   footer. Its head, meta and JSON-LD are the site's (content/usecases). */
export function ProspectIntelligence() {
  return (
    <JamesPage>
      <Page />
    </JamesPage>
  )
}
