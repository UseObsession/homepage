import { AppScreen } from '../components/AppScreen'
import { BlueprintPricingSection } from '../components/BlueprintPricingTabs'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Kinds } from '../components/sections/Kinds'
import { CardGrid } from '../components/v5/CardGrid'
import { GapPair } from '../components/v5/GapPair'
import { Hero5 } from '../components/v5/Hero5'
import { page, pricing, whiteLabel } from '../content/pages/agencies'
import './StoryPage.css'

/* /agencies, for resellers (21 Nov 2026), composed from content/pages/agencies.ts in its comment's order, from the blocks
   AudiencePage and Verify already use: the hero with its form, beside every client's checks on one board (the agency
   workspace) > the gap > #resell: the 6 kinds of reseller and the recipes each would sell > #white-label: the terms >
   #pricing: 1 tab per blueprint resellers sell, each with that blueprint's own pricing table (BlueprintPricingSection)
   > questions > #join: the early access form. */

export function Agencies() {
  const screen = page.hero.screens?.[0]?.screen
  return (
    <>
      <Hero5 hero={page.hero} reader="agencies" visual={screen && <AppScreen name={screen} workspace="agency" camera />} />
      {page.gapPair && <GapPair gap={page.gapPair} id="gap" />}
      {page.kinds && <Kinds kinds={page.kinds} id="resell" />}
      <CardGrid grid={whiteLabel} id="white-label" />
      <BlueprintPricingSection pricing={pricing} />
      <Faq faq={page.faq} id="questions" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}
