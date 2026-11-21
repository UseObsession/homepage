import { useId } from 'react'
import { Link } from 'react-router-dom'
import { Mark } from '../components/Logo'
import { Faq } from '../components/sections/Faq'
import { ratesPage as r, type PriceGroup } from '../content/pricing'
import { prices, type Price, type PriceKey } from '../content/prices'
import { NoticeHero } from './Notice'
import '../components/sections/FinalCta.css'
import './PricingRates.css'

/* /pricing/rates: every rate Obsession bills, past what a plan includes (content/pricing.ts `ratesPage`; every figure
   from content/prices.ts). The centred hero; the rate list, 1 ruled row per piece in the nav's order (its name, line
   and page link on the left, its prices on the right, each with its amount, unit and note), each row anchored at the
   piece's id (/pricing/rates#email); the questions; the closing call back to the plans. */

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

function Group({ group }: { group: PriceGroup }) {
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
                <span className="s-rt-row__amount">{price.amount}</span> <span className="s-rt-row__unit">{tie(price.unit)}</span>
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
  return (
    <>
      <NoticeHero pill={r.pill} headline={r.headline} sub={r.sub} />

      <section className="s-section s-rt-list" id="rates" aria-label={r.list.label}>
        <div className="s-wrap">
          <div className="s-rt-groups" role="list">
            {r.list.groups.map((group) => (
              <Group group={group} key={group.piece} />
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
