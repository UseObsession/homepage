import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import type { BlueprintPlanCard, BlueprintPricing as Pricing, BlueprintPricingOption } from '../content/types'
import './BlueprintPricing.css'

/* What a typical month of a blueprint costs (founders, 22 Nov 2026), on every blueprint page (pages/RecipePage,
   #pricing) and in each tab of the audience pages' pricing (BlueprintPricingTabs: /agencies, /marketing, /sales). A
   blueprint run counts toward what the buyer's plan covers at list rates, so each card is a typical month, never a plan:
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
/* "$206", "$5.50", as content/recipe-page.ts writes a card's price. */
const dollars = (n: number) => `$${n.toLocaleString('en-GB', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 })}`
/* The engine's roundEstimate: the nearest dollar, or under `wholeFrom` the nearest `smallStep`, never below it. */
const roundTo = (x: number, r: { step: number; smallStep: number; wholeFrom: number }) => {
  if (!(x > 0)) return 0
  const step = x >= r.wholeFrom ? r.step : r.smallStep
  return Math.max(Math.round(x / step) * step, step)
}

function Plan({ plan, tag, includes, price }: { plan: BlueprintPlanCard; tag: string; includes: string; price?: string }) {
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
        <span className="s-bpp__amount">{price ?? plan.price}</span>
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

/* `journeys` shows the journeys the buyer ticks above the cards, where the months add up from journeys (founders, 22 Nov
   2026: mystery shopping, on its own page); each card's price is then its base plus the ticked journeys, rounded the
   engine's way. The prerendered page shows the default ticks, the engine's own figures. At least 1 stays ticked. */
export function BlueprintPricing({ pricing, journeys: show = false }: { pricing: Pricing; journeys?: boolean }) {
  const uid = useId()
  const j = show ? pricing.journeys : undefined
  const [ticked, setTicked] = useState<string[]>(() => j?.defaults ?? [])
  const toggle = (id: string) => setTicked((t) => (t.includes(id) ? t.filter((x) => x !== id) : [...t, id]))
  const priceAt = (plan: BlueprintPlanCard, i: number) => {
    const t = j?.tiers[i]
    if (!j || !t || plan.price === 'Free') return undefined
    return dollars(roundTo(t.base + ticked.reduce((s, id) => s + (t.each[id] ?? 0), 0), j.round))
  }
  return (
    <div className="s-bpp">
      {j && (
        <fieldset className="s-bpp-journeys">
          <legend className="s-bpp-journeys__legend">{j.legend}</legend>
          <div className="s-bpp-journeys__list">
            {j.items.map((item) => {
              const on = ticked.includes(item.id)
              return (
                <label className={on ? 's-bpp-journey is-on' : 's-bpp-journey'} key={item.id} htmlFor={`${uid}-${item.id}`}>
                  <input
                    id={`${uid}-${item.id}`}
                    className="s-bpp-journey__box"
                    type="checkbox"
                    checked={on}
                    disabled={on && ticked.length === 1}
                    onChange={() => toggle(item.id)}
                  />
                  <span className="s-bpp-journey__text">
                    <span className="s-bpp-journey__name">{item.name}</span>
                    <span className="s-bpp-journey__line">{tie(item.line)}</span>
                  </span>
                </label>
              )
            })}
          </div>
        </fieldset>
      )}
      <div className="s-bpp__grid" role="list" aria-label={pricing.label}>
        {pricing.plans.map((plan, i) => (
          <Plan plan={plan} tag={pricing.tag} includes={pricing.includes} price={priceAt(plan, i)} key={plan.id} />
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
export function BlueprintPrices({ options, label, initial, journeys = false }: { options: BlueprintPricingOption[]; label: string; initial?: string; journeys?: boolean }) {
  const uid = useId()
  const [cur, setCur] = useState(() => Math.max(0, options.findIndex((o) => o.id === initial)))
  const refs = useRef<(HTMLButtonElement | null)[]>([])
  if (options.length < 2) return options[0] ? <BlueprintPricing pricing={options[0].pricing} journeys={journeys} /> : null

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
          <BlueprintPricing pricing={o.pricing} journeys={journeys} />
        </div>
      ))}
    </div>
  )
}
