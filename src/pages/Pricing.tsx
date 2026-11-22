import { useEffect, useId, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Mark } from '../components/Logo'
import { PersonaGlyph } from '../components/persona/icons'
import { Faq } from '../components/sections/Faq'
import { catalog } from '../content/catalog'
import { kitLinks } from '../content/kitPaths'
import { counts, figure, pricingPage as p, quantity, ratePer, type CalcPiece, type CalcQuantity, type PlanCard } from '../content/pricing'
import { billing, listAmounts, plans, prices, type Price, type PriceKey } from '../content/prices'
import { useInView } from '../hooks/useReveal'
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
   data, so the JSON never ships), shows the cheapest line by line at list rates with its fee and what the plan covers
   taken off, model tokens on top, and lists the month on every plan with what each covers. Held in view on desktop and a bar pinned to the foot of the screen on a phone. It
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

/* A tick before a fact the reader can count on. */
function Tick() {
  return (
    <svg className="s-pr-tick" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
    </svg>
  )
}

/* Entrances play once, when a block first scrolls into view. Items hide for it only after the page's script has armed
   the block, so the prerender, crawlers and readers without script get every word at once. */
function useEntrance<T extends Element>(threshold: number) {
  const { ref, inView } = useInView<T>(threshold)
  const [armed, setArmed] = useState(false)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (inView) setSeen(true)
    else if (!seen) setArmed(true)
  }, [inView, seen])
  return { ref, armed, seen }
}
const delay = (n: number) => ({ ['--d' as string]: n }) as CSSProperties

/* ---- The plans ---- */

function PlanItem({ plan, i }: { plan: PlanCard; i: number }) {
  const id = useId()
  return (
    <article
      role="listitem"
      className={plan.featured ? 'ob-card ob-card--raised s-pr-plan s-pr-plan--featured' : `ob-card s-pr-plan s-pr-plan--${plan.id}`}
      style={delay(i)}
      aria-labelledby={`${id}-name`}
    >
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
        {/* The value tag (James, 22 Nov 2026, the pill): the usage the fee covers at list rates, the figure big between
            small words, in its own colour. Inside the price line, so the cards keep their 5 shared rows and a screen
            reader hears "$99 a month covers $111 of usage". */}
        {plan.covers && (
          <span className="s-pr-covers">
            <span className="s-pr-covers__chip">
              <span className="s-pr-covers__word">{p.plans.covers.before}</span> <span className="s-pr-covers__amount">{plan.covers}</span>{' '}
              <span className="s-pr-covers__word">{p.plans.covers.after}</span>
            </span>
          </span>
        )}
      </p>
      <p className="s-pr-plan__for">{tie(plan.for)}</p>
      <div className="s-pr-plan__cta">
        <Link className={plan.featured ? 'ob-btn ob-btn--block' : 'ob-btn ob-btn--secondary ob-btn--block'} to={plan.cta.to}>
          <span className="ob-btn-label">{plan.cta.label}</span>
        </Link>
      </div>
      <div className="s-pr-plan__lists">
        <ul className="s-pr-plan__rows" aria-label={p.plans.includes}>
          {plan.payg && (
            <li className="s-pr-plan__row">
              {tie(plan.payg.text)}{' '}
              <Link className="s-pr-plan__rates" to={plan.payg.link.to}>
                {plan.payg.link.label}
              </Link>
            </li>
          )}
          {plan.includes.map((item) => (
            <li className="s-pr-plan__row" key={item}>
              <Tick />
              <span>{tie(item)}</span>
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

/* The month as the engine counts it: each piece in its own unit (model tokens in millions); a quantity that brings
   another price with it (texts bring 1 active US texting campaign, the same fixed monthly fee on every plan) adds 1 of
   it. */
function usageOf(used: Used[]): Record<string, number> {
  const usage: Record<string, number> = {}
  for (const { q, n } of used) {
    if (!n) continue
    usage[q.key] = (usage[q.key] ?? 0) + n
    if (q.adds) usage[q.adds] = Math.max(usage[q.adds] ?? 0, 1)
  }
  return usage
}

/* Each line's label: the quantity's own, or the price's name for one added with it. */
const labels: Record<string, string> = Object.fromEntries(p.calc.pieces.flatMap((piece) => piece.quantities.map((q) => [q.key, q.label])))
const labelOf = (key: string) => labels[key] ?? (key in prices ? priceOf(key as PriceKey).name : key)

/* What a line counts, at what rate on the bill's plan: "20,000 at $0.32 per 1,000", "10 in Free". */
function subOf(l: Line): string {
  const s = p.calc.summary
  if (l.billable === 0) return s.allowance(quantity(l.n))
  return s.at(quantity(l.billable), `${listAmounts[l.piece]} ${ratePer[l.piece as PriceKey] ?? ''}`.trim())
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
          <span className="s-pr-piece__icon">
            <PersonaGlyph name={piece.icon} />
          </span>
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

function Summary({ bill, bills }: { bill: Bill; bills: Bill[] }) {
  const s = p.calc.summary
  const total = money(toCents(bill.total ?? 0))
  const name = bill.name
  const covers = bill.covers ?? 0
  /* Every line at list rates, then what the plan covers taken off (founders, 22 Nov 2026), then model tokens on top, so
     the rows add up to the total: fee + lines - covered. */
  const line = (l: Bill['lines'][number]) => {
    const included = l.billable === 0
    return (
      <div key={l.piece}>
        <dt>
          {labelOf(l.piece)}
          <span className="s-pr-sum__sub">{tie(subOf(l))}</span>
        </dt>
        <dd className={included ? 's-pr-sum__in' : undefined}>{included ? s.free : money(l.cents)}</dd>
      </div>
    )
  }

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
          {bill.lines.filter((l) => !l.outside).map(line)}
          {covers > 0 && bill.covered > 0 && (
            <div>
              <dt>
                {s.covered}
                <span className="s-pr-sum__sub">{tie(s.coveredSub(name, `$${figure(covers)}`))}</span>
              </dt>
              <dd className="s-pr-sum__in">{money(-toCents(bill.covered))}</dd>
            </div>
          )}
          {bill.lines.filter((l) => l.outside).map(line)}
        </dl>
        {covers > 0 && bill.unused > 0 && <p className="ob-calc-note s-pr-sum__rest">{tie(s.unused(money(toCents(bill.unused)), name))}</p>}
        <div className="s-pr-sum__each">
          <p className="s-pr-sum__k">{s.each}</p>
          <dl className="s-pr-sum__plans">
            {bills.map((b) => (
              <div key={b.plan} className={b.plan === bill.plan ? 'is-best' : undefined}>
                <dt>
                  {b.name}
                  <span className="s-pr-sum__sub">{b.covers ? s.eachCovers(`$${figure(b.covers)}`) : s.eachFree}</span>
                </dt>
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
      {best && <Summary bill={best} bills={bills} />}
    </div>
  )
}

/* ---- What a job costs: 1 blueprint per type, its months from the pricing engine (content/catalog.ts) ---- */

const recipeBySlug = Object.fromEntries(catalog.recipes.map((r) => [r.slug, r]))
const kitByName = Object.fromEntries(kitLinks.map((k) => [k.name, k]))
/* A month's estimate as the blueprint pages show it: whole dollars, or to the cent under $10. */
const usd = (n: number) => (Number.isInteger(n) ? `$${figure(n)}` : `$${figure(Math.floor(n))}.${String(Math.round((n % 1) * 100)).padStart(2, '0')}`)
const jobCards = p.jobs.picks.map((slug) => {
  const r = recipeBySlug[slug]
  if (!r) throw new Error(`pages/Pricing.tsx: no blueprint "${slug}" in the catalog (content/pricing.ts jobs.picks)`)
  const kit = kitByName[r.group]
  if (!kit) throw new Error(`pages/Pricing.tsx: the blueprint ${slug} is in "${r.group}", which is not a type in content/kitPaths.ts`)
  const months = r.tiers.filter((t) => !t.free)
  const featured = months.find((t) => t.featured) ?? months[months.length - 1]
  return { r, kit, months, featured }
})

function Jobs({ headId }: { headId: string }) {
  const j = p.jobs
  const { ref, armed, seen } = useEntrance<HTMLUListElement>(0.12)
  return (
    <ul ref={ref} className={'s-pr-jobs' + (seen ? ' is-in' : '')} data-armed={armed ? '' : undefined} aria-labelledby={headId}>
      {jobCards.map(({ r, kit, months, featured }, i) => (
        <li key={r.slug} className="s-pr-jobs__item" data-reader={kit.reader} style={delay(i)}>
          <Link className="s-pr-job" to={`/blueprints/${r.slug}`}>
            <span className="s-pr-job__type">
              <span className="s-pr-job__icon">
                <PersonaGlyph name={kit.icon} />
              </span>
              {kit.name}
            </span>
            <span className="s-pr-job__name">
              {r.name}
              <svg className="s-pr-job__go" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M6 3.5 10.5 8 6 12.5" />
              </svg>
            </span>
            <span className="s-pr-job__price">
              <span className="s-pr-job__amount">{usd(featured.estimate)}</span> <span className="s-pr-job__per">{j.per}</span>
            </span>
            <span className="s-pr-job__covers">{tie(featured.covers)}</span>
            <ol className="s-pr-job__range" aria-label={j.range}>
              {months.map((t) => (
                <li key={t.name} className={t === featured ? 'is-featured' : undefined}>
                  <span className="s-pr-job__tier">{t.name}</span>
                  <span className="s-pr-job__est">{usd(t.estimate)}</span>
                </li>
              ))}
            </ol>
          </Link>
        </li>
      ))}
      <li className="s-pr-jobs__item s-pr-jobs__more" style={delay(jobCards.length)}>
        <Link className="s-pr-job s-pr-job--more" to={j.more.link.to}>
          <span className="s-pr-job__name">{j.more.heading}</span>
          <span className="s-pr-job__covers">{tie(j.more.line(catalog.recipes.length))}</span>
          <span className="s-pr-job__cta">
            {j.more.link.label}
            <Arrow />
          </span>
        </Link>
      </li>
    </ul>
  )
}

/* ---- The page ---- */

export function Pricing() {
  const id = useId()
  const f = p.final
  return (
    <>
      <NoticeHero pill={p.pill} headline={p.headline} sub={p.sub}>
        <ul className="s-pr-trust" aria-label={p.pill}>
          {p.trust.map((t) => (
            <li key={t}>
              <Tick />
              {t}
            </li>
          ))}
        </ul>
      </NoticeHero>

      <section className="s-section s-pr-plans" id="plans" aria-label={p.plans.label}>
        <div className="s-wrap s-wrap--wide">
          <div className="s-pr-grid" role="list">
            {p.plans.items.map((plan, i) => (
              <PlanItem plan={plan} i={i} key={plan.id} />
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

      <section className="s-section s-pr-jobs-sec" id="blueprints" aria-labelledby={`${id}-jobs`}>
        <div className="s-wrap s-wrap--wide">
          <header className="s-head s-pr-head">
            <h2 className="ob-type-h2" id={`${id}-jobs`}>
              {tie(p.jobs.heading)}
            </h2>
            <p>{tie(p.jobs.line)}</p>
          </header>
          <Jobs headId={`${id}-jobs`} />
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
