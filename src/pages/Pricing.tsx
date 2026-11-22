import { useEffect, useId, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Mark } from '../components/Logo'
import { Faq } from '../components/sections/Faq'
import { counts, figure, pricingPage as p, quantity, ratePer, type CalcPiece, type CalcQuantity, type PlanCard } from '../content/pricing'
import { billing, plans, prices, rateAmounts, tokenUnitCost, type PlanId, type Price, type PriceKey } from '../content/prices'
import { cheapestPlan } from '../lib/pricing/engine.js'
import { NoticeHero } from './Notice'
import '../components/sections/FinalCta.css'
import './Pricing.css'

/* /pricing: plans first (content/pricing.ts; every figure from content/prices.ts). The centred hero (no form of its
   own: the bar's button is the view's call to action, App.tsx NO_HERO_FORM); the 5 plans as cards (#plans), Startup
   raised with the row's 1 primary button, their top rows lined up when all 5 sit in 1 row (from 1180px), and the line
   on how a plan's monthly usage works, with the link to /pricing/rates; the calculator (#estimate): a card per piece
   with an on/off switch, its quantities as steppers and, where the range is large, a slider, in 1 column; beside it the
   summary: the pricing engine's cheapestPlan bills the month on every plan (each plan as prices.ts `billing`, plain
   data, so the JSON never ships), shows the cheapest line by line with its fee and what its monthly usage covers, and
   lists the month on every plan. Held in view on desktop and a bar pinned to the foot of the screen on a phone. It
   renders at its defaults on the server and goes live once the page runs. Then the questions and the closing call. */

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
    <article role="listitem" className={plan.featured ? 'ob-card ob-card--raised s-pr-plan s-pr-plan--featured' : `ob-card s-pr-plan s-pr-plan--${plan.id}`} aria-labelledby={`${id}-name`}>
      <div className="s-pr-plan__top">
        <h2 className="s-pr-plan__name" id={`${id}-name`}>
          {plan.name}
        </h2>
        {plan.featured && <span className="ob-badge s-pr-plan__tag">{p.plans.tag}</span>}
      </div>
      <p className="s-pr-plan__price">
        {plan.lead && <span className="s-pr-plan__lead">{plan.lead}</span>}
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
        <ul className="s-pr-plan__rows" aria-label={p.plans.includes}>
          {plan.includes.map((item) => (
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
const money = (cents: number) => `${cents < 0 ? '-' : ''}$${figure(Math.floor(Math.abs(cents) / 100))}.${String(Math.abs(cents) % 100).padStart(2, '0')}`
/* Dollars to whole cents. */
const toCents = (dollars: number) => Math.round(dollars * 100)
/* What a reader types, as a count: commas and spaces dropped, never below 0, never past a billion. */
const MAX = 1e9
const count = (text = '') => Math.min(MAX, Number(text.replace(/\D/g, '')) || 0)
/* The slider's stops: 0, the quantity's own stops and Free's allowance, in order, so the slider lands on Free's edge. */
const freeAllowance = plans.find((pl) => pl.id === 'free')?.allowances ?? {}
const stopsOf = (q: CalcQuantity) => [...new Set([0, ...(q.stops ?? []), freeAllowance[q.key] ?? 0])].sort((a, b) => a - b)

type Used = { q: CalcQuantity; n: number }
type Bills = ReturnType<typeof cheapestPlan>
type Bill = Bills['bills'][number]
type Line = Bill['lines'][number]

/* The month as the engine counts it: each piece in its own unit. Model spend is typed in dollars at cost, so it is
   turned into the model tokens piece's unit; a quantity that brings another price with it (texts bring 1 active US
   texting campaign, the same fixed monthly fee on every plan) adds 1 of it. */
function usageOf(used: Used[]): Record<string, number> {
  const usage: Record<string, number> = {}
  for (const { q, n } of used) {
    if (!n) continue
    usage[q.key] = (usage[q.key] ?? 0) + (q.key === 'tokens' ? n / tokenUnitCost : n)
    if (q.adds) usage[q.adds] = Math.max(usage[q.adds] ?? 0, 1)
  }
  return usage
}

/* Each line's label: the quantity's own, or the price's name for one added with it. */
const labels: Record<string, string> = Object.fromEntries(p.calc.pieces.flatMap((piece) => piece.quantities.map((q) => [q.key, q.label])))
const labelOf = (key: string) => labels[key] ?? (key in prices ? priceOf(key as PriceKey).name : key)

/* What a line counts, at what rate on the bill's plan: "20,000 at $0.32 per 1,000", "10 in Free". */
function subOf(bill: Bill, l: Line, spend: number): string {
  const s = p.calc.summary
  if (l.billable === 0) return s.allowance(quantity(l.n))
  if (l.piece === 'tokens') {
    const t = prices.tokens
    return s.at(`$${figure(spend)}`, ((bill.plan === 'scale' && t.scale?.amount) || t.amount).toLowerCase())
  }
  return s.at(quantity(l.billable), `${rateAmounts[bill.plan as PlanId][l.piece]} ${ratePer[l.piece as PriceKey] ?? ''}`.trim())
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

function Summary({ bill, bills, spend }: { bill: Bill; bills: Bill[]; spend: number }) {
  const s = p.calc.summary
  const total = money(toCents(bill.total ?? 0))
  const name = bill.name
  const credit = bill.credit ?? 0
  /* Past the credit the rest of the month bills at list (founders, 22 Nov 2026): what that adds over the plan's rates, so
     the rows still add up to the total. */
  const listExtra = toCents(bill.payg) - (toCents(bill.used) - toCents(bill.creditUsed))

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
            <dd>{money(toCents(bill.fee ?? 0))}</dd>
          </div>
          {bill.lines.map((l) => {
            const covered = l.billable === 0
            return (
              <div key={l.piece}>
                <dt>
                  {labelOf(l.piece)}
                  <span className="s-pr-sum__sub">{tie(subOf(bill, l, spend))}</span>
                </dt>
                <dd className={covered ? 's-pr-sum__in' : undefined}>{covered ? s.free : money(l.cents)}</dd>
              </div>
            )
          })}
          {credit > 0 && bill.creditUsed > 0 && (
            <div>
              <dt>{s.covered(`$${figure(credit)}`)}</dt>
              <dd className="s-pr-sum__in">{money(-toCents(bill.creditUsed))}</dd>
            </div>
          )}
          {listExtra > 0 && (
            <div>
              <dt>
                {s.pastList}
                <span className="s-pr-sum__sub">{tie(s.pastListSub(money(toCents(bill.payg)), money(listExtra)))}</span>
              </dt>
              <dd>{money(listExtra)}</dd>
            </div>
          )}
        </dl>
        {credit > 0 && bill.unused > 0 && <p className="ob-calc-note s-pr-sum__rest">{tie(s.unused(money(toCents(bill.unused))))}</p>}
        <div className="s-pr-sum__each">
          <p className="s-pr-sum__k">{s.each}</p>
          <dl className="s-pr-sum__plans">
            {bills.map((b) => (
              <div key={b.plan} className={b.plan === bill.plan ? 'is-best' : undefined}>
                <dt>{b.name}</dt>
                <dd>{b.fits ? money(toCents(b.total ?? 0)) : s.over}</dd>
              </div>
            ))}
          </dl>
        </div>
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
  /* The month on every self-serve plan, and the cheapest (the engine; Free only when the month fits its allowances). */
  const { best, bills } = cheapestPlan(usageOf(used), billing)
  const spend = used.find((u) => u.q.key === 'tokens')?.n ?? 0

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
      {best && <Summary bill={best} bills={bills} spend={spend} />}
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
        <div className="s-wrap s-wrap--wide">
          <div className="s-pr-grid" role="list">
            {p.plans.items.map((plan) => (
              <PlanItem plan={plan} key={plan.id} />
            ))}
          </div>
          <p className="s-pr-extra s-pr-texting">{tie(p.plans.texting)}</p>
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
