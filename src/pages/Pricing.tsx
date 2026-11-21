import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Mark } from '../components/Logo'
import { Faq } from '../components/sections/Faq'
import type { Cta } from '../content/types'
import { allowance, figure, pricingPage as p, type Plan, type PriceGroup } from '../content/pricing'
import { prices, type Price, type PriceKey } from '../content/prices'
import { NoticeHero } from './Notice'
import '../components/sections/FinalCta.css'
import './Pricing.css'

/* /pricing: each piece priced on its own (content/pricing.ts, every figure from content/prices.ts). The centred hero
   with 3 of the prices (no form of its own: the bar's button is the view's call to action, App.tsx NO_HERO_FORM); the
   price list, 1 row per piece (its name, line and page link on the left, its prices on the right), each row anchored at
   the piece's id (/pricing#email); the 3 ways to pay, Pay as you go raised, their tops lined up across the cards from
   960px; the estimator (a quantity per piece in; each line's cost after the free allowance, the US texting registration
   once there are texts, and the month's total out; drawn on the server at its defaults and live once the page runs); the
   questions; the closing call to early access. */

/* A numeral never ends a line apart from its word. */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1 ')

/* An email or another site is a plain link; a page of the site is a route. */
function CtaLink({ cta, className, children }: { cta: Cta; className: string; children?: ReactNode }) {
  const inner = (
    <>
      <span className="ob-btn-label">{cta.label}</span>
      {children}
    </>
  )
  return /^(mailto:|https?:)/.test(cta.to) ? (
    <a className={className} href={cta.to}>
      {inner}
    </a>
  ) : (
    <Link className={className} to={cta.to}>
      {inner}
    </Link>
  )
}

function Arrow() {
  return (
    <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3.5 8h9M9 4.5 12.5 8 9 11.5" />
    </svg>
  )
}

const priceOf = (key: PriceKey): Price => prices[key]

/* ---- The price list ---- */

function Group({ group }: { group: PriceGroup }) {
  return (
    <li className="s-pr-group" id={group.piece}>
      <div className="s-pr-group__head">
        <h3 className="s-pr-group__name">{group.name}</h3>
        <p className="s-pr-group__line">{tie(group.line)}</p>
        <CtaLink cta={group.link} className="ob-btn ob-btn--link s-pr-group__link">
          <Arrow />
        </CtaLink>
      </div>
      <dl className="s-pr-rows">
        {group.keys.map((key) => {
          const price = priceOf(key)
          return (
            <div className="s-pr-row" key={key}>
              <dt className="s-pr-row__name">{price.name}</dt>
              <dd className="s-pr-row__price">
                <span className="s-pr-row__amount">{price.amount}</span> <span className="s-pr-row__unit">{tie(price.unit)}</span>
                {price.note && <span className="s-pr-row__note">{tie(price.note)}</span>}
              </dd>
            </div>
          )
        })}
      </dl>
    </li>
  )
}

/* ---- The ways to pay ---- */

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <li className={plan.featured ? 'ob-card ob-card--raised s-pr-plan s-pr-plan--featured' : 'ob-card s-pr-plan'}>
      <h3 className="s-pr-plan__name">{plan.name}</h3>
      <p className="s-pr-plan__price">
        <span className="s-pr-plan__amount">{plan.price}</span>
        <span className="s-pr-plan__per">{plan.per}</span>
      </p>
      <p className="s-pr-plan__line">{tie(plan.line)}</p>
      <div className="s-pr-plan__cta">
        <CtaLink cta={plan.cta} className={plan.featured ? 'ob-btn ob-btn--block' : 'ob-btn ob-btn--secondary ob-btn--block'} />
      </div>
      <ul className="s-pr-plan__rows">
        {plan.includes.map((item) => (
          <li className="s-pr-plan__row" key={item}>
            {tie(item)}
          </li>
        ))}
      </ul>
    </li>
  )
}

/* ---- The estimator ---- */

/* Money in whole cents, so the lines always add up to the total: "$45.00", "$1,204.50". */
const money = (cents: number) => `$${figure(Math.floor(cents / 100))}.${String(cents % 100).padStart(2, '0')}`
/* What a reader types, as a count: commas and spaces dropped, never below 0, never past a billion. */
const count = (text: string) => Math.min(1e9, Number(text.replace(/\D/g, '')) || 0)
const FREE = new Map(allowance.map((a) => [a.key, a.count]))
/* A quantity at a price's `value`, rounded to the cent. */
const cents = (key: PriceKey, quantity: number) => Math.round(quantity * (priceOf(key).value ?? 0) * 100)

type Line = { key: PriceKey; label: string; sub?: string; cents: number }

/* The month's lines: each field's quantity past the free allowance, and after a field in use, the monthly price it
   brings with it (the US texting registration after texts). */
function linesOf(values: string[]): Line[] {
  const c = p.estimator.card
  return p.estimator.inputs.flatMap((input, i) => {
    const quantity = count(values[i])
    const free = FREE.get(input.key) ?? 0
    const own: Line = { key: input.key, label: input.label, sub: free ? c.free(figure(free)) : undefined, cents: cents(input.key, Math.max(0, quantity - free)) }
    if (!input.adds || quantity === 0) return [own]
    const added = priceOf(input.adds)
    return [own, { key: input.adds, label: added.name, sub: `${added.amount} ${added.unit}`, cents: cents(input.adds, 1) }]
  })
}

function Estimator({ headId }: { headId: string }) {
  const e = p.estimator
  const c = e.card
  const id = useId()
  const [values, setValues] = useState(() => e.inputs.map((input) => figure(input.start)))
  const lines = linesOf(values)
  const total = money(lines.reduce((sum, l) => sum + l.cents, 0))
  const set = (i: number, text: string) => setValues((v) => v.map((old, j) => (j === i ? text : old)))

  /* 1 polite announcement once the inputs settle, never on load and never on every keystroke. */
  const [said, setSaid] = useState('')
  const first = useRef(true)
  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const t = window.setTimeout(() => setSaid(c.announce(total)), 600)
    return () => window.clearTimeout(t)
  }, [total, c])

  return (
    <div className="s-pr-est__grid">
      <div className="s-pr-est__inputs" role="group" aria-labelledby={headId}>
        {e.inputs.map((input, i) => {
          const price = priceOf(input.key)
          const fid = `${id}-${input.key}`
          return (
            <div className="ob-field s-pr-field" key={input.key}>
              <div className="ob-field-head">
                <label className="ob-label" htmlFor={fid}>
                  {input.label}
                </label>
              </div>
              <input
                id={fid}
                className="ob-input s-pr-field__input"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                spellCheck={false}
                value={values[i]}
                aria-describedby={`${fid}-rate`}
                onChange={(ev) => set(i, ev.target.value.replace(/[^\d,\s]/g, ''))}
                onBlur={() => set(i, figure(count(values[i])))}
              />
              <p className="ob-field-help s-pr-field__rate" id={`${fid}-rate`}>
                {price.amount} {tie(price.unit)}
              </p>
            </div>
          )
        })}
      </div>

      <div className="ob-calc ob-object s-pr-est__card">
        <p className="s-pr-est__title">{c.title}</p>
        <dl className="ob-calc-outs">
          {lines.map((l) => (
            <div key={l.key}>
              <dt>
                {l.label}
                {l.sub && <span className="s-pr-est__sub">{tie(l.sub)}</span>}
              </dt>
              <dd>{money(l.cents)}</dd>
            </div>
          ))}
          <div className="ob-calc-total">
            <dt>{c.total}</dt>
            <dd>{total}</dd>
          </div>
        </dl>
        <p className="ob-calc-note">{tie(c.rest)}</p>
        <div className="s-pr-est__actions">
          <CtaLink cta={c.cta} className="ob-btn ob-btn--block" />
          <CtaLink cta={c.secondary} className="ob-btn ob-btn--link">
            <Arrow />
          </CtaLink>
        </div>
        <p className="s-sr" aria-live="polite">
          {said}
        </p>
      </div>
    </div>
  )
}

/* ---- The page ---- */

export function Pricing() {
  const id = useId()
  const f = p.final
  return (
    <>
      <NoticeHero pill={p.pill} headline={p.headline} sub={p.sub}>
        <ul className="s-pr-facts">
          {p.facts.map((fact) => (
            <li className="s-pr-facts__item" key={fact.label}>
              <span className="s-pr-facts__value">{fact.value}</span>
              <span className="s-pr-facts__label">{tie(fact.label)}</span>
            </li>
          ))}
        </ul>
      </NoticeHero>

      <section className="s-section s-pr-list" id="prices" aria-labelledby={`${id}-list`}>
        <div className="s-wrap">
          <header className="s-head s-pr-head">
            <h2 className="ob-type-h2" id={`${id}-list`}>
              {tie(p.list.heading)}
            </h2>
            <p>{tie(p.list.line)}</p>
          </header>
          <ul className="s-pr-groups">
            {p.list.groups.map((group) => (
              <Group group={group} key={group.piece} />
            ))}
          </ul>
        </div>
      </section>

      <section className="s-section s-pr-plans" id="plans" aria-labelledby={`${id}-plans`}>
        <div className="s-wrap">
          <header className="s-head s-head--center s-pr-head">
            <h2 className="ob-type-h2" id={`${id}-plans`}>
              {tie(p.plans.heading)}
            </h2>
            <p>{tie(p.plans.line)}</p>
          </header>
          <ul className="s-pr-grid">
            {p.plans.items.map((plan) => (
              <PlanCard plan={plan} key={plan.id} />
            ))}
          </ul>
        </div>
      </section>

      <section className="s-section s-pr-est" id="estimate" data-tone="alt" aria-labelledby={`${id}-est`}>
        <div className="s-wrap">
          <header className="s-head s-pr-head">
            <h2 className="ob-type-h2" id={`${id}-est`}>
              {tie(p.estimator.heading)}
            </h2>
            <p>{tie(p.estimator.line)}</p>
          </header>
          <Estimator headId={`${id}-est`} />
        </div>
      </section>

      <Faq faq={p.faq} id="questions" />

      <section className="s-section s-final s-pr-final ob-theme-dark" data-tone="ink" id="start" aria-labelledby={`${id}-final`}>
        <div className="s-wrap s-final__in">
          <div className="s-final__mark">
            <Mark size={64} />
          </div>
          <h2 className="ob-type-h1 s-final__h" id={`${id}-final`}>
            {tie(f.heading)}
          </h2>
          <p className="s-final__sub">{tie(f.line)}</p>
          <div className="s-pr-final__actions">
            <CtaLink cta={f.cta} className="ob-btn ob-btn--lg" />
            <CtaLink cta={f.secondary} className="ob-btn ob-btn--link">
              <Arrow />
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  )
}
