import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { catalog } from '../content/catalog'
import { blueprintPricings, recipePage } from '../content/recipe-page'
import type { BlueprintPricingOption, PricingTabs } from '../content/types'
import { BlueprintPrices } from './BlueprintPricing'
import './BlueprintPricingTabs.css'

/* The audience pages' pricing (James, 21 Nov 2026: /agencies, /marketing, /sales): 1 tab per blueprint the page sells,
   and the chosen blueprint's own pricing table (BlueprintPricing) beside the list. The ARIA tabs pattern: a vertical tab
   list, the design system's pill tabs (navigation.css .ob-ptab), the arrow keys, Home and End move between tabs and
   choose them, and only the chosen tab is in the tab order. The first tab is chosen in the prerendered page. Every panel
   is in the page, the others hidden, so each tab's aria-controls points at its panel; every panel is read into
   llms-full.txt (data-llms="keep"), since each blueprint has its own tiers. From 900px the list stands beside the
   panel; under it the tabs wrap in a row above it. A blueprint whose months change with the buyer (mystery shopping)
   opens with its switch (BlueprintPrices) on the page's own buyer (PricingTabs `variant`: Agencies on /agencies,
   Ecommerce brands on /marketing). */

export type PricingTab = { id: string; label: string; options: BlueprintPricingOption[] }

/* An audience page's #pricing section: its h2 and line, then the tabs, each blueprint's table made from content/catalog
   (its tiers, priced by the pricing engine at build time), so the page never imports a recipe's words. A blueprint not
   in the catalog is left out. */
export function BlueprintPricingSection({ pricing, id = 'pricing' }: { pricing: PricingTabs; id?: string }) {
  const tabs: PricingTab[] = pricing.recipes.flatMap((rid) => {
    const r = catalog.recipes.find((x) => x.id === rid)
    return r ? [{ id: r.id, label: r.name, options: blueprintPricings(r) }] : []
  })
  return (
    <section className="s-section" id={id} aria-labelledby={`${id}-h`}>
      <div className="s-wrap">
        <header className="s-head s-head--wide">
          <h2 className="ob-type-h2" id={`${id}-h`}>
            {pricing.heading}
          </h2>
          {pricing.line && <p>{pricing.line}</p>}
        </header>
        <BlueprintPricingTabs tabs={tabs} label={pricing.label} variant={pricing.variant} />
      </div>
    </section>
  )
}

export function BlueprintPricingTabs({ tabs, label, variant }: { tabs: PricingTab[]; label: string; variant?: string }) {
  const uid = useId()
  const [cur, setCur] = useState(0)
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const n = tabs.length
    let next = -1
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (cur + 1) % n
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (cur - 1 + n) % n
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = n - 1
    if (next < 0) return
    e.preventDefault()
    setCur(next)
    refs.current[next]?.focus()
  }

  return (
    <div className="s-bpt">
      <div className="s-bpt__list" role="tablist" aria-orientation="vertical" aria-label={label} onKeyDown={onKey}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el
            }}
            type="button"
            role="tab"
            id={`${uid}-t${i}`}
            aria-selected={i === cur}
            aria-controls={`${uid}-p${i}`}
            tabIndex={i === cur ? 0 : -1}
            className="ob-ptab s-bpt__tab"
            onClick={() => setCur(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`${uid}-p${i}`}
          aria-labelledby={`${uid}-t${i}`}
          hidden={i !== cur}
          data-llms="keep"
          className="s-bpt__panel"
        >
          <BlueprintPrices options={t.options} label={recipePage.pricing.switch} initial={variant} />
        </div>
      ))}
    </div>
  )
}
