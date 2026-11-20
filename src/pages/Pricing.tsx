import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Mark } from '../components/Logo'
import { Faq } from '../components/sections/Faq'
import type { Cta } from '../content/types'
import { figure, pricingPage as p, type Plan } from '../content/pricing'
import { NoticeHero } from './Notice'
import '../components/sections/FinalCta.css'
import './Pricing.css'

/* /pricing: what a persona costs (content/pricing.ts). The centred hero with 3 true numbers (no form of its own: the
   bar's "Spawn a persona" is the view's call to action, App.tsx NO_HERO_FORM); the 4 plans, Team raised, their rows
   lined up across the cards from 1080px; the rules behind every bill; the estimator (sliders in, the plan that fits and
   the month's total out, drawn on the server at its defaults and live once the page runs); the questions; the closing
   call, to the early access form on Home. */

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

/* ---- The plans ---- */

function PlanCard({ plan, headId }: { plan: Plan; headId: string }) {
  return (
    <li className={plan.featured ? 'ob-card ob-card--raised s-pr-plan s-pr-plan--featured' : 'ob-card s-pr-plan'}>
      <h3 className="s-pr-plan__name" id={headId}>
        {plan.name}
      </h3>
      <p className="s-pr-plan__price">
        {plan.from && <span className="s-pr-plan__from">{plan.from} </span>}
        <span className="s-pr-plan__amount">{plan.price}</span>
        <span className="s-pr-plan__per"> {plan.per}</span>
      </p>
      <p className="s-pr-plan__line">{tie(plan.line)}</p>
      <div className="s-pr-plan__cta">
        <CtaLink cta={plan.cta} className={plan.featured ? 'ob-btn ob-btn--block' : 'ob-btn ob-btn--secondary ob-btn--block'} />
      </div>
      <dl className="s-pr-plan__rows">
        {p.plans.rows.map((label, i) => (
          <div className="s-pr-plan__row" key={label}>
            <dt>{label}</dt>
            <dd>{tie(plan.values[i] ?? '')}</dd>
          </div>
        ))}
      </dl>
    </li>
  )
}

/* ---- The estimator ---- */

/* Money in cents, so $0.10 a minute never drifts: "$59", "$10.50". */
const RATE_CENTS = 10
const money = (cents: number) => {
  const rest = cents % 100
  return `$${figure(Math.floor(cents / 100))}${rest ? `.${String(rest).padStart(2, '0')}` : ''}`
}

type Estimate = { plan: Plan; minutes: number; extra: number; cents: number | null }

/* The plan that fits: of the plans that hold this many personas at once, the one whose month costs least (its price,
   plus any minutes past its allowance at $0.10). On a tie the bigger plan wins: the same money holds more personas and
   keeps records longer. A free allowance is never topped up in the estimate, so past 30 minutes Free gives way to Builder.
   More personas than Team holds is Scale, by contract. */
const PLANS = p.plans.items
const SCALE = PLANS[PLANS.length - 1]
function estimate(personas: number, runs: number, perRun: number): Estimate {
  const minutes = runs * perRun
  let best: Estimate | null = null
  for (const plan of PLANS) {
    if (plan.dollars === null || plan.minutes === null || plan.personas === null || personas > plan.personas) continue
    if (plan.dollars === 0 && minutes > plan.minutes) continue
    const extra = Math.max(0, minutes - plan.minutes)
    const cents = plan.dollars * 100 + extra * RATE_CENTS
    if (!best || best.cents === null || cents <= best.cents) best = { plan, minutes, extra, cents }
  }
  return best ?? { plan: SCALE, minutes, extra: 0, cents: null }
}

/* The stops that land on a power of 10 get a tick under the slider; the ends always do. */
const isRound = (n: number) => /^10*$/.test(String(n))

function Stops({
  id,
  label,
  stops,
  index,
  onIndex,
  value,
}: {
  id: string
  label: string
  stops: number[]
  index: number
  onIndex: (i: number) => void
  value: (n: number) => string
}) {
  const last = stops.length - 1
  const at = (i: number) => `${(i / last) * 100}%`
  return (
    <div className="ob-calc-input s-pr-input">
      <div className="ob-calc-row">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id}>{value(stops[index])}</output>
      </div>
      <input
        id={id}
        className="ob-range"
        type="range"
        min={0}
        max={last}
        step={1}
        value={index}
        aria-valuetext={value(stops[index])}
        onChange={(e) => onIndex(Number(e.target.value))}
        style={{ '--ob-range-value': at(index) } as CSSProperties}
      />
      <div className="ob-calc-ticks" aria-hidden="true">
        {stops.map((n, i) =>
          i === 0 || i === last || isRound(n) ? (
            <span key={n} className={i === 0 || i === last ? undefined : 'is-minor'} style={{ left: at(i) }}>
              {figure(n)}
            </span>
          ) : null,
        )}
      </div>
    </div>
  )
}

function Estimator({ headId }: { headId: string }) {
  const e = p.estimator
  const c = e.card
  const id = useId()
  const [personasAt, setPersonasAt] = useState(() => Math.max(0, e.personas.stops.indexOf(e.personas.start)))
  const [runsAt, setRunsAt] = useState(() => Math.max(0, e.runs.stops.indexOf(e.runs.start)))
  const [perRun, setPerRun] = useState(e.minutes.start)
  const personas = e.personas.stops[personasAt]
  const runs = e.runs.stops[runsAt]
  const est = estimate(personas, runs, perRun)
  const scale = est.cents === null
  const total = scale ? c.byContract : money(est.cents ?? 0)
  const big = !scale && (est.cents ?? 0) >= 200000

  /* 1 polite announcement once the inputs settle, never on load and never on every step of a slider. */
  const [said, setSaid] = useState('')
  const first = useRef(true)
  const line = c.announce(est.plan.name, total)
  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const t = window.setTimeout(() => setSaid(line), 500)
    return () => window.clearTimeout(t)
  }, [line])

  return (
    <div className="s-pr-est__grid">
      <div className="s-pr-est__inputs" role="group" aria-labelledby={headId}>
        <Stops
          id={`${id}-personas`}
          label={e.personas.label}
          stops={e.personas.stops}
          index={personasAt}
          onIndex={setPersonasAt}
          value={e.personas.value}
        />
        <Stops id={`${id}-runs`} label={e.runs.label} stops={e.runs.stops} index={runsAt} onIndex={setRunsAt} value={e.runs.value} />
        <div className="ob-calc-input s-pr-input">
          <div className="ob-calc-row">
            <span className="s-pr-input__label" id={`${id}-per`}>
              {e.minutes.label}
            </span>
            <output>{e.minutes.value(perRun)}</output>
          </div>
          <div
            className="ob-segmented s-pr-seg"
            role="radiogroup"
            aria-labelledby={`${id}-per`}
            style={{ '--ob-segmented-count': e.minutes.options.length } as CSSProperties}
          >
            <span className="ob-segmented-thumb" aria-hidden="true" />
            {e.minutes.options.map((n) => (
              <label className="ob-segmented-option" key={n}>
                <input
                  className="ob-segmented-input"
                  type="radio"
                  name={`${id}-per`}
                  value={n}
                  checked={perRun === n}
                  aria-label={e.minutes.value(n)}
                  onChange={() => setPerRun(n)}
                />
                <span className="ob-segmented-label">{n}</span>
              </label>
            ))}
          </div>
          <p className="s-pr-input__hint">{tie(e.minutes.hint)}</p>
        </div>
      </div>

      <div className="ob-calc ob-object s-pr-est__card">
        <p className="s-pr-est__title">{c.title}</p>
        <dl className="ob-calc-outs">
          <div>
            <dt>
              {c.used}
              <span className="s-pr-est__sub">{c.usedLine(e.runs.value(runs), perRun)}</span>
            </dt>
            <dd>{figure(est.minutes)}</dd>
          </div>
          <div>
            <dt>
              {c.plan(est.plan.name)}
              <span className="s-pr-est__sub">{scale ? est.plan.values[0] : c.included(figure(est.plan.minutes ?? 0))}</span>
            </dt>
            <dd>{scale ? `${est.plan.from ?? ''} ${est.plan.price}`.trim() : money((est.plan.dollars ?? 0) * 100)}</dd>
          </div>
          {est.extra > 0 && (
            <div>
              <dt>
                {c.extra}
                <span className="s-pr-est__sub">{c.extraLine(figure(est.extra))}</span>
              </dt>
              <dd>{money(est.extra * RATE_CENTS)}</dd>
            </div>
          )}
          <div>
            <dt>
              {c.waiting}
              <span className="s-pr-est__sub">{c.waitingLine}</span>
            </dt>
            <dd>{money(0)}</dd>
          </div>
          <div className={scale ? 'ob-calc-total s-pr-est__words' : 'ob-calc-total'}>
            <dt>{c.total}</dt>
            <dd>{total}</dd>
          </div>
        </dl>
        {(scale || big) && <p className="s-pr-est__note">{tie(scale ? c.scaleLine : c.bigLine)}</p>}
        <p className="ob-calc-note">{tie(c.phones)}</p>
        <CtaLink cta={scale || big ? c.scaleCta : c.cta} className="ob-btn ob-btn--block s-pr-est__cta" />
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
              <PlanCard plan={plan} headId={`${id}-${plan.id}`} key={plan.id} />
            ))}
          </ul>
        </div>
      </section>

      <section className="s-section s-pr-rules" id="rules" aria-labelledby={`${id}-rules`}>
        <div className="s-wrap s-pr-rules__grid">
          <header className="s-pr-rules__head">
            <h2 className="ob-type-h2 s-pr-rules__h" id={`${id}-rules`}>
              {tie(p.rules.heading)}
            </h2>
            <p className="s-pr-rules__line">{tie(p.rules.line)}</p>
          </header>
          <ul className="s-pr-rules__list">
            {p.rules.items.map((r) => (
              <li className="s-pr-rule" key={r.title}>
                <h3 className="s-pr-rule__title">{tie(r.title)}</h3>
                <p className="s-pr-rule__line">{tie(r.line)}</p>
              </li>
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
