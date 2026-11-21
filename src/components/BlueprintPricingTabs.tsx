import { useId, useRef, useState, type KeyboardEvent } from 'react'
import type { BlueprintPricing as Pricing } from '../content/types'
import { BlueprintPricing } from './BlueprintPricing'
import './BlueprintPricingTabs.css'

/* /agencies' pricing (James, 21 Nov 2026): 1 tab per blueprint resellers sell, and the chosen blueprint's pricing table
   (BlueprintPricing) beside the list. The ARIA tabs pattern: a vertical tab list, the design system's pill tabs
   (navigation.css .ob-ptab), the arrow keys, Home and End move between tabs and choose them, and only the chosen tab
   is in the tab order. The first tab is chosen in the prerendered page. Every panel is in the page, the others hidden,
   so each tab's aria-controls points at its panel; only the chosen one is read into llms-full.txt, since every table
   carries the same 4 prices. From 900px the list stands beside the panel; under it the tabs wrap in a row above it. */

export type PricingTab = { id: string; label: string; pricing: Pricing }

export function BlueprintPricingTabs({ tabs, label }: { tabs: PricingTab[]; label: string }) {
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
          className="s-bpt__panel"
        >
          <BlueprintPricing pricing={t.pricing} />
        </div>
      ))}
    </div>
  )
}
