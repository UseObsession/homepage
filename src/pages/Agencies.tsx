import { AppScreen } from '../components/AppScreen'
import { BlueprintPricingTabs, type PricingTab } from '../components/BlueprintPricingTabs'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Kinds } from '../components/sections/Kinds'
import { CardGrid } from '../components/v5/CardGrid'
import { GapPair } from '../components/v5/GapPair'
import { Hero5 } from '../components/v5/Hero5'
import { catalog } from '../content/catalog'
import { page, pricing, whiteLabel } from '../content/pages/agencies'
import { blueprintPricing } from '../content/recipe-page'
import './StoryPage.css'

/* /agencies, for resellers (21 Nov 2026), composed from content/pages/agencies.ts in its comment's order, from the blocks
   AudiencePage and Verify already use: the hero with its form, beside every client's checks on one board (the agency
   workspace) > the gap > #resell: the 6 kinds of reseller and the recipes each would sell > #white-label: the terms >
   #pricing: 1 tab per blueprint resellers sell, each with its pricing table counted per client > questions > #join: the
   early access form. */

/* Each tab's blueprint, named and counted as its own page counts it (content/catalog), priced per client. */
const tabs: PricingTab[] = pricing.recipes.flatMap((id) => {
  const r = catalog.recipes.find((x) => x.id === id)
  return r ? [{ id: r.id, label: r.name, pricing: blueprintPricing(r, pricing.per) }] : []
})

export function Agencies() {
  const screen = page.hero.screens?.[0]?.screen
  return (
    <>
      <Hero5 hero={page.hero} reader="agencies" visual={screen && <AppScreen name={screen} workspace="agency" camera />} />
      {page.gapPair && <GapPair gap={page.gapPair} id="gap" />}
      {page.kinds && <Kinds kinds={page.kinds} id="resell" />}
      <CardGrid grid={whiteLabel} id="white-label" />
      <section className="s-section" id="pricing" aria-labelledby="pricing-h">
        <div className="s-wrap">
          <header className="s-head s-head--wide">
            <h2 className="ob-type-h2" id="pricing-h">
              {pricing.heading}
            </h2>
            {pricing.line && <p>{pricing.line}</p>}
          </header>
          <BlueprintPricingTabs tabs={tabs} label={pricing.label} />
        </div>
      </section>
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
