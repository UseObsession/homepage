import { useEffect, useId, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Mark } from '../components/Logo'
import { Faq } from '../components/sections/Faq'
import { counts, figure, pricingPage as p, quantity, type CalcPiece, type CalcQuantity, type PlanCard } from '../content/pricing'
import { plans, prices, type Plan, type Price, type PriceKey } from '../content/prices'
import { NoticeHero } from './Notice'
import '../components/sections/FinalCta.css'
import './Pricing.css'

/* /pricing: plans first (content/pricing.ts; every figure from content/prices.ts). The centred hero (no form of its
   own: the bar's button is the view's call to action, App.tsx NO_HERO_FORM); the 4 plans as cards (#plans), Startup
   raised with the row's 1 primary button, their top rows lined up from 1080px, and the line that sends extra usage to
   /pricing/rates; the calculator (#estimate): a card per piece with an on/off switch, its quantities as steppers and,
   where the range is large, a slider, in 1 column; beside it the summary (the plan whose price plus extra usage costs
   least, each line included or extra, the month's total), held in view on desktop and a bar pinned to the foot of the
   screen on a phone. It renders at its defaults on the server and goes live once the page runs. Then the questions and
   the closing call. */

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

/* ---- The plans ---- */

function PlanItem({ plan }: { plan: PlanCard }) {
  const id = useId()
  return (
    <article role="listitem" className={plan.featured ? 'ob-card ob-card--raised s-pr-plan s-pr-plan--featured' : 'ob-card s-pr-plan'} aria-labelledby={`${id}-name`}>
      <div className="s-pr-plan__top">
        <h2 className="s-pr-plan__name" id={`${id}-name`}>
          {plan.name}
        </h2>
        {plan.featured && <span className="ob-badge s-pr-plan__tag">{p.plans.tag}</span>}
      </div>
      <p className="s-pr-plan__price">
        <span className="s-pr-plan__amount">{plan.price}</span>
        <span className="s-pr-plan__per">{plan.per}</span>
      </p>
      <p className="s-pr-plan__for">{tie(plan.for)}</p>
      <div className="s-pr-plan__cta">
        <Link className={plan.featured ? 'ob-btn ob-btn--block' : 'ob-btn ob-btn--secondary ob-btn--block'} to={plan.cta.to}>
          <span className="ob-btn-label">{plan.cta.label}</span>
        </Link>
      </div>
      <div className="s-pr-plan__lists">
        <p className="s-pr-plan__k" id={`${id}-inc`}>
          {p.plans.includes}
        </p>
        <ul className="s-pr-plan__rows" aria-labelledby={`${id}-inc`}>
          {plan.includes.map((item) => (
            <li className="s-pr-plan__row" key={item}>
              {tie(item)}
            </li>
          ))}
        </ul>
        <p className="s-pr-plan__k" id={`${id}-also`}>
          {p.plans.features}
        </p>
        <ul className="s-pr-plan__rows" aria-labelledby={`${id}-also`}>
          {plan.features.map((item) => (
            <li className="s-pr-plan__row" key={item}>
              {tie(item)}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

/* ---- The calculator ---- */

/* Money in whole cents, so the lines always add up to the total: "$45.00", "$1,204.50". */
const money = (cents: number) => `$${figure(Math.floor(cents / 100))}.${String(cents % 100).padStart(2, '0')}`
/* What a reader types, as a count: commas and spaces dropped, never below 0, never past a billion. */
const MAX = 1e9
const count = (text = '') => Math.min(MAX, Number(text.replace(/\D/g, '')) || 0)
/* A quantity at a price's `value`, rounded to the cent. */
const cents = (key: PriceKey, n: number) => Math.round(n * (priceOf(key).value ?? 0) * 100)
/* The slider's stops: 0, the quantity's own stops and every plan's included amount, in order. */
const stopsOf = (q: CalcQuantity) => [...new Set([0, ...(q.stops ?? []), ...plans.map((pl) => pl.included[q.key] ?? 0)])].sort((a, b) => a - b)

type Used = { q: CalcQuantity; n: number }
type Row = { key: string; label: string; sub: string; cents: number; included: boolean }
type Bill = { plan: Plan; rows: Row[]; extra: number; total: number }

/* A plan's month for what is used: each quantity past the plan's amount at its rate, and after a quantity in use, the
   monthly price it brings with it (the US texting registration after texts), unless the plan includes it. */
function billOf(plan: Plan, used: Used[]): Bill {
  const s = p.calc.summary
  const rows: Row[] = used.flatMap(({ q, n }) => {
    if (n === 0) return []
    const inc = plan.included[q.key] ?? 0
    const extra = Math.max(0, n - inc)
    const sub = inc === 0 ? s.extra(quantity(n)) : extra === 0 ? s.included(quantity(n)) : s.split(quantity(inc), quantity(extra))
    const own: Row = { key: q.key, label: q.label, sub, cents: cents(q.key, extra), included: extra === 0 }
    if (!q.adds) return [own]
    const added = priceOf(q.adds)
    const inPlan = (plan.included[q.adds] ?? 0) > 0
    const addedSub = inPlan ? s.inPlan : `${added.amount} ${added.unit}`
    return [own, { key: q.adds, label: added.name, sub: addedSub, cents: inPlan ? 0 : cents(q.adds, 1), included: inPlan }]
  })
  const extra = rows.reduce((sum, r) => sum + r.cents, 0)
  return { plan, rows, extra, total: (plan.monthly ?? 0) * 100 + extra }
}

/* The plan that costs least for this month. Enterprise is priced by contract, so it never comes out of the sum; a free
   plan has no card on file, so it fits only when nothing goes past it. Ties go to the cheaper plan. */
function bestOf(used: Used[]): Bill {
  const bills = plans
    .filter((pl) => pl.monthly !== null)
    .map((pl) => billOf(pl, used))
    .filter((b) => b.plan.monthly !== 0 || b.extra === 0)
  return bills.reduce((best, b) => (b.total < best.total ? b : best), bills[0])
}

function Glyph({ d }: { d: string }) {
  return (
    <svg className="ob-btn-glyph" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d={d} />
    </svg>
  )
}

function Quantity({ q, text, set }: { q: CalcQuantity; text: string; set: (text: string) => void }) {
  const id = useId()
  const n = count(text)
  const price = priceOf(q.key)
  const many = counts[q.key]?.many ?? q.label
  const stops = q.stops ? stopsOf(q) : null
  const at = stops ? stops.reduce((i, stop, j) => (stop <= n ? j : i), 0) : 0
  return (
    <div className={stops ? 's-pr-q s-pr-q--range' : 's-pr-q'}>
      <label className="s-pr-q__label" htmlFor={`${id}-n`}>
        {q.label}
      </label>
      <p className="s-pr-q__rate" id={`${id}-rate`}>
        {price.amount} {tie(price.unit)}
      </p>
      <div className="s-pr-step">
        <button
          type="button"
          className="ob-btn ob-btn--secondary ob-btn--icon ob-btn--square"
          aria-label={p.calc.less(many)}
          onClick={() => set(figure(Math.max(0, n - q.step)))}
        >
          <Glyph d="M3.5 8h9" />
        </button>
        <input
          id={`${id}-n`}
          className="ob-input s-pr-step__input"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          spellCheck={false}
          value={text}
          aria-describedby={`${id}-rate`}
          onChange={(e) => set(e.target.value.replace(/[^\d,\s]/g, ''))}
          onBlur={() => set(figure(n))}
        />
        <button
          type="button"
          className="ob-btn ob-btn--secondary ob-btn--icon ob-btn--square"
          aria-label={p.calc.more(many)}
          onClick={() => set(figure(Math.min(MAX, n + q.step)))}
        >
          <Glyph d="M8 3.5v9M3.5 8h9" />
        </button>
      </div>
      {stops && (
        <input
          className="ob-range s-pr-q__range"
          type="range"
          min={0}
          max={stops.length - 1}
          step={1}
          value={at}
          aria-label={q.label}
          aria-valuetext={figure(n)}
          style={{ '--ob-range-value': `${(at / (stops.length - 1)) * 100}%` } as CSSProperties}
          onChange={(e) => set(figure(stops[Number(e.target.value)] ?? 0))}
        />
      )}
    </div>
  )
}

type CardProps = { piece: CalcPiece; on: boolean; toggle: () => void; texts: Record<string, string>; set: (key: PriceKey, text: string) => void }

function PieceCard({ piece, on, toggle, texts, set }: CardProps) {
  const id = useId()
  return (
    <li className={on ? 'ob-card s-pr-piece is-on' : 'ob-card s-pr-piece'}>
      <label className="ob-switch ob-switch--row s-pr-piece__switch">
        <input
          className="ob-switch-input"
          type="checkbox"
          role="switch"
          checked={on}
          onChange={toggle}
          aria-labelledby={`${id}-name`}
          aria-describedby={`${id}-line`}
          aria-controls={on ? `${id}-body` : undefined}
        />
        <span className="ob-switch-track" aria-hidden="true">
          <span className="ob-switch-thumb" />
        </span>
        <span className="ob-choice-text s-pr-piece__name" id={`${id}-name`}>
          {piece.name}
        </span>
        <span className="ob-choice-desc s-pr-piece__line" id={`${id}-line`}>
          {tie(piece.line)}
        </span>
      </label>
      {on && (
        <div className="s-pr-piece__body" id={`${id}-body`}>
          {piece.quantities.map((q) => (
            <Quantity q={q} text={texts[q.key] ?? '0'} set={(text) => set(q.key, text)} key={q.key} />
          ))}
          {piece.note && <p className="s-pr-piece__note">{tie(piece.note)}</p>}
        </div>
      )}
    </li>
  )
}

function Summary({ bill }: { bill: Bill }) {
  const s = p.calc.summary
  const total = money(bill.total)
  const name = bill.plan.name

  /* 1 polite announcement once the inputs settle, never on load and never on every keystroke. */
  const [said, setSaid] = useState('')
  const first = useRef(true)
  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const t = window.setTimeout(() => setSaid(s.announce(name, total)), 600)
    return () => window.clearTimeout(t)
  }, [name, total, s])

  return (
    <div className="s-pr-sum">
      <div className="s-pr-sum__bar">
        <p className="s-pr-sum__best">
          <span className="s-pr-sum__k">{s.best}</span>
          <span className="s-pr-sum__plan">{name}</span>
        </p>
        <p className="s-pr-sum__total">
          <span className="s-pr-sum__figure">{total}</span>
          <span className="s-pr-sum__per">{s.month}</span>
        </p>
      </div>
      <div className="s-pr-sum__body">
        <dl className="ob-calc-outs s-pr-sum__rows" aria-label={s.rows}>
          <div>
            <dt>{s.plan(name)}</dt>
            <dd>{money((bill.plan.monthly ?? 0) * 100)}</dd>
          </div>
          {bill.rows.map((r) => (
            <div key={r.key}>
              <dt>
                {r.label}
                <span className="s-pr-sum__sub">{tie(r.sub)}</span>
              </dt>
              <dd className={r.included ? 's-pr-sum__in' : undefined}>{r.included ? s.free : money(r.cents)}</dd>
            </div>
          ))}
        </dl>
        <p className="ob-calc-note s-pr-sum__rest">{tie(s.rest)}</p>
        <div className="s-pr-sum__actions">
          <Link className="ob-btn ob-btn--block" to={s.cta.to}>
            <span className="ob-btn-label">{s.cta.label}</span>
          </Link>
          <Link className="ob-btn ob-btn--link" to={s.secondary.to}>
            <span className="ob-btn-label">{s.secondary.label}</span>
            <Arrow />
          </Link>
        </div>
        <p className="s-sr" aria-live="polite">
          {said}
        </p>
      </div>
    </div>
  )
}

function Calculator({ headId }: { headId: string }) {
  const c = p.calc
  const [on, setOn] = useState<Record<string, boolean>>(() => Object.fromEntries(c.pieces.map((piece) => [piece.id, piece.on])))
  const [texts, setTexts] = useState<Record<string, string>>(() =>
    Object.fromEntries(c.pieces.flatMap((piece) => piece.quantities.map((q) => [q.key, figure(q.start)]))),
  )
  const used: Used[] = c.pieces.flatMap((piece) => (on[piece.id] ? piece.quantities.map((q) => ({ q, n: count(texts[q.key]) })) : []))
  const set = (key: PriceKey, text: string) => setTexts((t) => ({ ...t, [key]: text }))

  return (
    <div className="s-pr-calc">
      <ul className="s-pr-calc__pieces" aria-labelledby={headId}>
        {c.pieces.map((piece) => (
          <PieceCard
            piece={piece}
            on={on[piece.id]}
            toggle={() => setOn((o) => ({ ...o, [piece.id]: !o[piece.id] }))}
            texts={texts}
            set={set}
            key={piece.id}
          />
        ))}
      </ul>
      <Summary bill={bestOf(used)} />
    </div>
  )
}

/* ---- The page ---- */

export function Pricing() {
  const id = useId()
  const f = p.final
  return (
    <>
      <NoticeHero pill={p.pill} headline={p.headline} sub={p.sub} />

      <section className="s-section s-pr-plans" id="plans" aria-label={p.plans.label}>
        <div className="s-wrap">
          <div className="s-pr-grid" role="list">
            {p.plans.items.map((plan) => (
              <PlanItem plan={plan} key={plan.id} />
            ))}
          </div>
          <p className="s-pr-extra">
            {tie(p.plans.extra.line)}{' '}
            <Link className="ob-btn ob-btn--link ob-btn--inline" to={p.plans.extra.link.to}>
              <span className="ob-btn-label">{p.plans.extra.link.label}</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="s-section s-pr-est" id="estimate" data-tone="alt" aria-labelledby={`${id}-est`}>
        <div className="s-wrap">
          <header className="s-head s-pr-head">
            <h2 className="ob-type-h2" id={`${id}-est`}>
              {tie(p.calc.heading)}
            </h2>
            <p>{tie(p.calc.line)}</p>
          </header>
          <Calculator headId={`${id}-est`} />
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
