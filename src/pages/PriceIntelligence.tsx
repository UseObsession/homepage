import { LinkGroups } from '../components/sections/LinkGroups'
import { JamesPage } from '../legacy/JamesPage'
import { connectionsFor } from '../lib/connections'
import { PriceIntelligence as Page } from '../legacy/james/pages/PriceIntelligence'

/* /use-cases/member-prices-for-price-intelligence: James's page, as he built it (src/legacy/james), inside the site's nav
   and footer. Its head, meta and JSON-LD are the site's (content/usecases). */
export function PriceIntelligence() {
  return (
    <JamesPage>
      <Page />
      <LinkGroups groups={connectionsFor('/use-cases/member-prices-for-price-intelligence', 'useCase')} className="s-lg--then-final" />
    </JamesPage>
  )
}
