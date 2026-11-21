import { useId } from 'react'
import { Link } from 'react-router-dom'
import type { BlueprintPlanCard, BlueprintPricing as Pricing } from '../content/types'
import './BlueprintPricing.css'

/* A blueprint's pricing table (James, 21 Nov 2026), on every blueprint page (pages/RecipePage, #pricing) and in each tab
   of the audience pages' pricing (BlueprintPricingTabs: /agencies, /marketing, /sales). Every word and price comes in
   `pricing` (content/recipe-page.ts `blueprintPricing`, from the blueprint's tiers as the pricing engine priced them,
   content/blueprint-tiers.ts). The section around it holds the h2, so each card is an article named by its h3,
   in a list (an h2 inside a list item fails the prerender): its name, who it's for, its price with what it covers under
   it, what's included and its button, the featured tier raised with the row's 1 primary button. Under the cards, the
   line to /pricing. The cards follow their own width, not the screen's: 1 column, 2 from 560px, 4 from 960px, where
   each card's rows line up across the row. */

/* A numeral never ends a line apart from its word. */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1 ')

function Plan({ plan, tag, includes }: { plan: BlueprintPlanCard; tag: string; includes: string }) {
  const id = useId()
  const button = plan.featured ? 'ob-btn ob-btn--block' : 'ob-btn ob-btn--secondary ob-btn--block'
  const label = <span className="ob-btn-label">{plan.cta.label}</span>
  return (
    <article
      role="listitem"
      className={plan.featured ? 'ob-card ob-card--raised s-bpp__plan s-bpp__plan--featured' : 'ob-card s-bpp__plan'}
      aria-labelledby={`${id}-name`}
    >
      <div className="s-bpp__top">
        <h3 className="s-bpp__name" id={`${id}-name`}>
          {plan.name}
        </h3>
        {plan.featured && <span className="ob-badge s-bpp__tag">{tag}</span>}
      </div>
      <p className="s-bpp__for">{tie(plan.for)}</p>
      <div className="s-bpp__price">
        <p className="s-bpp__cost">
          <span className="s-bpp__amount">{plan.price}</span>
          {plan.per && <span className="s-bpp__per">{tie(plan.per)}</span>}
        </p>
        {plan.covers && <p className="s-bpp__covers">{tie(plan.covers)}</p>}
      </div>
      <ul className="s-bpp__rows" aria-label={includes}>
        {plan.includes.map((item) => (
          <li className="s-bpp__row" key={item}>
            {tie(item)}
          </li>
        ))}
      </ul>
      <div className="s-bpp__cta">
        {plan.cta.to.startsWith('#') ? (
          <a className={button} href={plan.cta.to}>
            {label}
          </a>
        ) : (
          <Link className={button} to={plan.cta.to}>
            {label}
          </Link>
        )}
      </div>
    </article>
  )
}

export function BlueprintPricing({ pricing }: { pricing: Pricing }) {
  return (
    <div className="s-bpp">
      <div className="s-bpp__grid" role="list" aria-label={pricing.label}>
        {pricing.plans.map((plan) => (
          <Plan plan={plan} tag={pricing.tag} includes={pricing.includes} key={plan.id} />
        ))}
      </div>
      <p className="s-bpp__more">
        {tie(pricing.more.line)}{' '}
        <Link className="ob-btn ob-btn--link ob-btn--inline" to={pricing.more.link.to}>
          <span className="ob-btn-label">{pricing.more.link.label}</span>
        </Link>
      </p>
    </div>
  )
}
