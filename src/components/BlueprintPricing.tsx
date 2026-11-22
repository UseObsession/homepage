import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import type { BlueprintPlanCard, BlueprintPricing as Pricing, BlueprintPricingOption } from '../content/types'
import './BlueprintPricing.css'

/* What a typical month of a blueprint costs (founders, 22 Nov 2026), on every blueprint page (pages/RecipePage,
   #pricing) and in each tab of the audience pages' pricing (BlueprintPricingTabs: /agencies, /marketing, /sales). A
   blueprint run is paid from the buyer's plan credit at the piece rates, so each card is a typical month, never a plan:
   every word and figure comes in `pricing` (content/recipe-page.ts `blueprintPricing`, from the months the pricing
   engine works out, content/blueprint-tiers.ts). The section around it holds the h2 and the 1 line on how every price
   is worked out, so each card is an article named by its h3, in a list (an h2 inside a list item fails the prerender):
   the month it describes, its price, what a month like it brings and its button, the free run first and the featured
   month raised with the row's 1 primary button. Under the cards, the line to every rate. The cards follow their own
   width, not the screen's: 1 column, 2 from 560px, 4 from 960px, where each card's rows line up across the row.

   BlueprintPrices puts a switch above the table for a blueprint whose months change with the buyer (founders, 22 Nov
   2026: mystery shopping, Agencies or Ecommerce brands): a segmented control on the design system's pill tabs, a radio
   group whose arrow keys, Home and End move the choice, only the chosen pill in the tab order. The page's default is
   chosen in the prerendered HTML; every table is in the page, the others hidden, and read into llms-full.txt
   (data-llms="keep"). */

/* A numeral never ends a line apart from its word. */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1 ')

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
          {tie(plan.name)}
        </h3>
        {plan.featured && tag && <span className="ob-badge s-bpp__tag">{tag}</span>}
      </div>
      <p className="s-bpp__cost">
        <span className="s-bpp__amount">{plan.price}</span>
        {plan.per && <span className="s-bpp__per">{tie(plan.per)}</span>}
      </p>
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

/* A blueprint's pricing: its 1 table, or the switch and 1 table per option, `initial` (an option's id) chosen first. */
export function BlueprintPrices({ options, label, initial }: { options: BlueprintPricingOption[]; label: string; initial?: string }) {
  const uid = useId()
  const [cur, setCur] = useState(() => Math.max(0, options.findIndex((o) => o.id === initial)))
  const refs = useRef<(HTMLButtonElement | null)[]>([])
  if (options.length < 2) return options[0] ? <BlueprintPricing pricing={options[0].pricing} /> : null

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const n = options.length
    let next = -1
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (cur + 1) % n
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (cur - 1 + n) % n
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = n - 1
    if (next < 0) return
    e.preventDefault()
    setCur(next)
    refs.current[next]?.focus()
  }

  return (
    <div className="s-bpp-switch">
      <div className="ob-ptabs s-bpp-switch__rail" role="radiogroup" aria-label={label} onKeyDown={onKey}>
        {options.map((o, i) => (
          <button
            key={o.id}
            ref={(el) => {
              refs.current[i] = el
            }}
            type="button"
            role="radio"
            aria-checked={i === cur}
            aria-controls={`${uid}-o${i}`}
            tabIndex={i === cur ? 0 : -1}
            className={i === cur ? 'ob-ptab is-selected' : 'ob-ptab'}
            onClick={() => setCur(i)}
          >
            {o.label}
          </button>
        ))}
      </div>
      {options.map((o, i) => (
        <div key={o.id} id={`${uid}-o${i}`} role="group" aria-label={o.label} hidden={i !== cur} data-llms="keep" className="s-bpp-switch__panel">
          <BlueprintPricing pricing={o.pricing} />
        </div>
      ))}
    </div>
  )
}
