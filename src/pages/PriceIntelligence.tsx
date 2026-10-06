import { JamesPage } from '../legacy/JamesPage'
import { PriceIntelligence as Page } from '../legacy/james/pages/PriceIntelligence'

/* /use-cases/member-prices-for-price-intelligence: James's page, as he built it (src/legacy/james), inside the site's nav
   and footer. Its head, meta and JSON-LD are the site's (content/usecases). */
export function PriceIntelligence() {
  return (
    <JamesPage>
      <Page />
    </JamesPage>
  )
}
