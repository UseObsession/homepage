import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { Mark } from '../components/Logo'
import { Faq } from '../components/sections/Faq'
import { ratesPage as r, type PriceGroup } from '../content/pricing'
import { prices, type Price, type PriceKey } from '../content/prices'
import { NoticeHero } from './Notice'
import '../components/sections/FinalCta.css'
import './PricingRates.css'

/* /pricing/rates: every rate Obsession bills, from a plan's monthly usage and past it (content/pricing.ts `ratesPage`;
   every figure from content/prices.ts). The centred hero; the rate list, 1 ruled row per piece in the nav's order (its
   name, line and page link on the left, its prices on the right, each with its list amount and unit (what Free and
   Developer pay), beside it the chosen plan's rate, and its note), each row anchored at the piece's id
   (/pricing/rates#email); the questions; the closing call back to the plans.

   The plan toggle (founder, 22 Nov 2026) sits above the list: Startup, Scale and Enterprise as a radio group on the
   design system's pill tabs, the arrow keys, Home and End moving the choice, only the chosen pill in the tab order.
   Startup (the recommended plan) is chosen in the prerendered page, so it reads right before the script runs; each
   row carries both plans' rates in data-startup and data-scale, and Enterprise shows "Contact us" with the link its
   plan card uses. A plan's rate is for usage paid from its credit; past the credit, every plan pays list (the note
   under the toggle, founders 22 Nov 2026). Every rate is the engine's (content/prices.ts): 10% off on Startup, 15% on Scale, model tokens the
   same on every plan. A fixed price (the US texting registration) shows the same price in every column, Enterprise's
   included. */

/* A numeral never ends a line apart from its word. */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1 ')

function Arrow() {
  return (
    <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3.5 8h9M9 4.5 12.5 8 9 11.5" />
    </svg>
  )
}

const priceOf = (key: PriceKey): Price => prices[key]

type PlanChoice = 'startup' | 'scale' | 'enterprise'
/* A piece's rate on Startup or Scale: the plan's own where it is lower, else the list rate, which the plan bills. */
const planPrice = (price: Price, plan: 'startup' | 'scale') => price[plan] ?? { amount: price.amount, unit: undefined }
const flat = (v: { amount: string; unit?: string }) => [v.amount, v.unit].filter(Boolean).join(' ')

function PlanToggle({ value, onChange }: { value: PlanChoice; onChange: (v: PlanChoice) => void }) {
  const id = useId()
  const t = r.list.plans
  const refs = useRef<(HTMLButtonElement | null)[]>([])
  const cur = t.options.findIndex((o) => o.id === value)
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const n = t.options.length
    let next = -1
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (cur + 1) % n
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (cur - 1 + n) % n
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = n - 1
    if (next < 0) return
    e.preventDefault()
    onChange(t.options[next].id)
    refs.current[next]?.focus()
  }
  return (
    <div className="s-rt-toggle">
      <p className="s-rt-toggle__label" id={`${id}-label`}>
        {tie(t.label)}
      </p>
      <div className="ob-ptabs s-rt-toggle__rail" role="radiogroup" aria-labelledby={`${id}-label`} onKeyDown={onKey}>
        {t.options.map((o, i) => (
          <button
            key={o.id}
            ref={(el) => {
              refs.current[i] = el
            }}
            type="button"
            role="radio"
            aria-checked={o.id === value}
            tabIndex={o.id === value ? 0 : -1}
            className={o.id === value ? 'ob-ptab is-selected' : 'ob-ptab'}
            onClick={() => onChange(o.id)}
          >
            {o.name}
          </button>
        ))}
      </div>
      <p className="s-rt-toggle__note">{tie(t.note)}</p>
    </div>
  )
}

/* The chosen plan's rate for 1 piece, beside its list rate. */
function PlanRate({ price, plan }: { price: Price; plan: PlanChoice }) {
  const t = r.list.plans
  const name = t.options.find((o) => o.id === plan)?.name ?? ''
  const v = plan === 'enterprise' ? (price.fixed ? { amount: price.amount, unit: price.unit } : null) : planPrice(price, plan)
  return (
    <span className="s-rt-row__plan" data-startup={flat(planPrice(price, 'startup'))} data-scale={flat(planPrice(price, 'scale'))}>
      <span className="s-rt-row__plan-name">{t.on(name, plan)}</span>{' '}
      {v ? (
        <>
          <span className="s-rt-row__plan-amount">{v.amount}</span>
          {v.unit && <> <span className="s-rt-row__plan-unit">{tie(v.unit)}</span></>}
        </>
      ) : (
        <Link className="ob-btn ob-btn--link ob-btn--inline s-rt-row__contact" to={t.contact.to}>
          <span className="ob-btn-label">{t.contact.label}</span>
        </Link>
      )}
    </span>
  )
}

function Group({ group, plan }: { group: PriceGroup; plan: PlanChoice }) {
  return (
    <article role="listitem" className="s-rt-group" id={group.piece}>
      <div className="s-rt-group__head">
        <h2 className="s-rt-group__name">{group.name}</h2>
        <p className="s-rt-group__line">{tie(group.line)}</p>
        <Link className="ob-btn ob-btn--link s-rt-group__link" to={group.link.to}>
          <span className="ob-btn-label">{group.link.label}</span>
          <Arrow />
        </Link>
      </div>
      <dl className="s-rt-rows">
        {group.keys.map((key) => {
          const price = priceOf(key)
          return (
            <div className="s-rt-row" key={key}>
              <dt className="s-rt-row__name">{price.name}</dt>
              <dd className="s-rt-row__price">
                <span className="s-rt-row__list">
                  <span className="s-rt-row__amount">{price.amount}</span> <span className="s-rt-row__unit">{tie(price.unit)}</span>
                </span>
                <PlanRate price={price} plan={plan} />
                {price.note && <span className="s-rt-row__note">{tie(price.note)}</span>}
              </dd>
            </div>
          )
        })}
      </dl>
    </article>
  )
}

export function PricingRates() {
  const id = useId()
  const f = r.final
  const [plan, setPlan] = useState<PlanChoice>('startup')
  return (
    <>
      <NoticeHero pill={r.pill} headline={r.headline} sub={r.sub} />

      <section className="s-section s-rt-list" id="rates" aria-label={r.list.label}>
        <div className="s-wrap">
          <PlanToggle value={plan} onChange={setPlan} />
          <div className="s-rt-groups" role="list">
            {r.list.groups.map((group) => (
              <Group group={group} plan={plan} key={group.piece} />
            ))}
          </div>
        </div>
      </section>

      <Faq faq={r.faq} id="questions" />

      <section className="s-section s-final s-rt-final ob-theme-dark" data-tone="ink" id="start" aria-labelledby={`${id}-final`}>
        <div className="s-wrap s-final__in">
          <div className="s-final__mark">
            <Mark size={64} />
          </div>
          <h2 className="ob-type-h1 s-final__h" id={`${id}-final`}>
            {tie(f.heading)}
          </h2>
          <p className="s-final__sub">{tie(f.line)}</p>
          <div className="s-rt-final__actions">
            <Link className="ob-btn ob-btn--lg" to={f.cta.to}>
              <span className="ob-btn-label">{f.cta.label}</span>
            </Link>
            <Link className="ob-btn ob-btn--link" to={f.secondary.to}>
              <span className="ob-btn-label">{f.secondary.label}</span>
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
