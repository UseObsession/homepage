import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { defaultRules, inputs, outputs, type QA } from '../content/shared'
import { recipes, type RecipeId } from '../content/recipes'
import { OutputFormats, type FormatId } from './OutputFormats'
import { Reveal } from './Reveal'
import { WaitlistForm } from './WaitlistForm'
import './Blocks.css'

export function SectionHead({
  kicker,
  title,
  lede,
  center = false,
}: {
  kicker?: string
  title: ReactNode
  lede?: ReactNode
  center?: boolean
}) {
  return (
    <Reveal className={`head ${center ? 'center' : ''}`}>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="h2">{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </Reveal>
  )
}

/* The four steps every watch follows. */
export function Steps({ steps }: { steps: { title: string; line: string; chips?: string[] }[] }) {
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} className="step">
          <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="h3">{s.title}</h3>
          <p className="muted">{s.line}</p>
          {s.chips && (
            <ul className="step-chips">
              {s.chips.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}
    </ol>
  )
}

/* Where companies come from, and where results go. */
export function InputsOutputs() {
  return (
    <div className="io">
      <div className="io-col">
        <p className="kicker">Add companies from</p>
        <ul>
          {inputs.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
      <div className="io-mid" aria-hidden="true">
        <span>Obsession</span>
      </div>
      <div className="io-col">
        <p className="kicker">Results go to</p>
        <ul>
          {outputs.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Watched({ items }: { items: string[] }) {
  return (
    <p className="watched">
      <span>Watches</span>
      {items.join(' · ')}
    </p>
  )
}

export type UseCase = { title: string; line: string; example?: string }

export function UseCases({ items }: { items: UseCase[] }) {
  return (
    <div className="uses">
      {items.map((u) => (
        <Reveal key={u.title} className="use card">
          <h3 className="h3">{u.title}</h3>
          <p className="muted">{u.line}</p>
          {u.example && <p className="use-ex">{u.example}</p>}
        </Reveal>
      ))}
    </div>
  )
}

export function RecipeGrid({ ids }: { ids: RecipeId[] }) {
  return (
    <ul className="tgrid">
      {ids.map((id) => {
        const t = recipes[id]
        return (
          <Reveal as="li" key={id}>
            <Link to={`/recipes/${t.slug}`} className="tcard card">
              <h3 className="h3">{t.name}</h3>
              <p className="muted">{t.line}</p>
              <div className="tcard-spins">
                <span className="kicker">Spins up</span>
                <ul>
                  {t.spins.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <p className="tcard-gets">
                <span className="kicker">You get</span>
                {t.gets}
              </p>
              <span className="tcard-go">Learn more →</span>
            </Link>
          </Reveal>
        )
      })}
    </ul>
  )
}

/* One real run, the September store check, shown in every format its output can arrive in. */
export function SampleTeaser({ start }: { start?: FormatId }) {
  return (
    <div className="sample">
      <Reveal className="sample-copy">
        <p className="kicker">Sample output</p>
        <h2 className="h2">One real run. The output, however you work.</h2>
        <p className="lede">
          Four test customers shopped a UK store in September, name hidden. Two left a basket or stopped at checkout, and in 48 hours
          nobody wrote to them. Here’s that run as a report, an email, a Slack message, Clay columns, a webhook or a workflow.
        </p>
        <ul className="sample-facts">
          <li>
            <b>4</b> journeys run
          </li>
          <li>
            <b>2</b> silent
          </li>
          <li>
            <b>15</b> screenshots
          </li>
          <li>
            <b>48h</b> watched
          </li>
        </ul>
        <Link className="btn-2" to="/sample-output">
          Read the full report
        </Link>
      </Reveal>
      <Reveal className="sample-formats">
        <OutputFormats start={start} />
      </Reveal>
    </div>
  )
}

export function Different({ intro, points }: { intro: ReactNode; points: { title: string; line: string }[] }) {
  return (
    <div className="diff">
      <Reveal className="diff-intro">
        <p className="lede">{intro}</p>
      </Reveal>
      <div className="diff-points">
        {points.map((p) => (
          <Reveal key={p.title} className="diff-point">
            <h3 className="h3">{p.title}</h3>
            <p className="muted">{p.line}</p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}


export function Rules({ rules = defaultRules }: { rules?: { title: string; line: string }[] }) {
  return (
    <ul className="rules">
      {rules.map((r) => (
        <Reveal as="li" key={r.title} className="rule">
          <span className="rule-sq" aria-hidden="true" />
          <div>
            <h3 className="h3">{r.title}</h3>
            <p className="muted">{r.line}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  )
}


export function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="faq">
      {items.map((item, i) => (
        <div key={item.q} className={`faq-item ${open === i ? 'is-open' : ''}`}>
          <h3>
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
              {item.q}
              <span className="pm" aria-hidden="true" />
            </button>
          </h3>
          <div className="faq-a">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

/* withCompany asks for the company to watch before the email. Worked examples ask for the email only. */
export function FinalCta({ title, line, source, withCompany = true }: { title: string; line: string; source: string; withCompany?: boolean }) {
  return (
    <section className="section final" id="join">
      <div className="wrap">
        <Reveal className="final-in">
          <h2 className="h1 final-h">{title}</h2>
          <p className="lede">{line}</p>
          <WaitlistForm source={source} withCompany={withCompany} />
        </Reveal>
      </div>
    </section>
  )
}
