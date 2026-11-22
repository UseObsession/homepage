import { useEffect, useId, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Crumbs } from '../components/Crumbs'
import { FormatIcon } from '../components/nocode/formats'
import { PersonaGlyph } from '../components/persona/icons'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { catalog } from '../content/catalog'
import { noCodePage as p } from '../content/noCode'
import { plans } from '../content/prices'
import { useInView } from '../hooks/useReveal'
import './NoCode.css'

/* /no-code: the page for teams that don't write code. The hero offers two ways in, each drawn as it happens: a blueprint
   running, and a team's own AI making a call through Obsession. Then what AI can't do on its own, the jobs by team
   (typical months from the catalog), connecting your own AI (#connect), every size, the rules and the cost, questions,
   the form. Words: content/noCode.ts. */

const recipeBySlug = Object.fromEntries(catalog.recipes.map((r) => [r.slug, r]))
const typicalOf = (slug: string) => {
  const r = recipeBySlug[slug]
  if (!r) throw new Error(`pages/NoCode.tsx: no blueprint "${slug}" in the catalog (content/noCode.ts)`)
  const months = r.tiers.filter((t) => !t.free)
  return { name: r.name, month: (months.find((t) => t.featured) ?? months[months.length - 1])?.estimate ?? 0 }
}
const usd = (n: number) => (Number.isInteger(n) ? `$${n.toLocaleString('en-US')}` : `$${n.toFixed(2)}`)
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1 ')
const delay = (n: number) => ({ ['--d' as string]: n }) as CSSProperties

/* Entrances play once, as a block first scrolls into view. Items hide for it only after the page's script has armed the
   block, so the prerender, crawlers and readers without script get every word at once. */
function useEntrance<T extends Element>(threshold = 0.1) {
  const { ref, inView } = useInView<T>(threshold)
  const [armed, setArmed] = useState(false)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (inView) setSeen(true)
    else if (!seen) setArmed(true)
  }, [inView, seen])
  return { ref, armed, seen, cls: seen ? ' is-in' : '' }
}

const Chev = () => (
  <svg className="nc-chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M6 3.5 10.5 8 6 12.5" />
  </svg>
)
const Glyph = ({ name }: { name: Parameters<typeof PersonaGlyph>[0]['name'] }) => (
  <span className="nc-ic" aria-hidden="true">
    <PersonaGlyph name={name} />
  </span>
)

/* ---- The two ways in ---- */

function BlueprintWindow() {
  const b = p.doors.blueprint
  return (
    <div className="nc-win" aria-hidden="true">
      <div className="nc-win__bar">
        <span className="nc-win__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="nc-win__crumb">Blueprints / {b.name}</span>
      </div>
      <div className="nc-win__head">
        <div>
          <p className="nc-win__name">{b.name}</p>
          <p className="nc-win__sub">{b.company}</p>
        </div>
        <span className="nc-live">
          <i />
          {b.status}
        </span>
      </div>
      <ol className="nc-win__rows">
        {b.rows.map((r, i) => (
          <li key={r.text} className="nc-anim" style={delay(i + 1)}>
            <time>{r.at}</time>
            <Glyph name={r.icon} />
            <span>{r.text}</span>
          </li>
        ))}
      </ol>
      <p className="nc-win__out nc-anim" style={delay(b.rows.length + 1)}>
        <FormatIcon id={b.result.format} />
        {b.result.text}
      </p>
    </div>
  )
}

function ChatWindow() {
  const c = p.doors.chat
  return (
    <div className="nc-win nc-win--chat" aria-hidden="true">
      <div className="nc-win__bar">
        <span className="nc-win__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="nc-win__crumb">{c.app}</span>
      </div>
      <div className="nc-chat">
        <p className="nc-chat__ask nc-anim" style={delay(1)}>
          {c.ask}
        </p>
        <p className="nc-chat__tool nc-anim" style={delay(2)}>
          <Glyph name="persona" />
          {c.tool}
        </p>
        <ol className="nc-chat__steps">
          {c.steps.map((s, i) => (
            <li key={s.text} className="nc-anim" style={delay(i + 3)}>
              <time>{s.at}</time>
              <span>{s.text}</span>
            </li>
          ))}
        </ol>
        <p className="nc-chat__answer nc-anim" style={delay(c.steps.length + 3)}>
          {c.answer}
        </p>
      </div>
    </div>
  )
}

function Doors() {
  const e = useEntrance<HTMLDivElement>(0.08)
  const [job, ai] = p.doors.items
  return (
    <figure className="nc-doors-fig">
      <div ref={e.ref} className={'nc-doors' + e.cls} data-armed={e.armed ? '' : undefined}>
        {[job, ai].map((d) => (
          <article key={d.id} className={`nc-door nc-door--${d.id}`} data-reader={d.id === 'job' ? 'founders' : 'developers'}>
            <div className="nc-door__words">
              <p className="nc-door__kicker">{d.kicker}</p>
              <h2 className="nc-door__title">{d.title}</h2>
              <p className="nc-door__line">{tie(d.line)}</p>
              {d.cta.to.startsWith('#') ? (
                <a className="nc-door__cta" href={d.cta.to}>
                  {d.cta.label}
                  <Chev />
                </a>
              ) : (
                <Link className="nc-door__cta" to={d.cta.to}>
                  {d.cta.label}
                  <Chev />
                </Link>
              )}
            </div>
            {d.id === 'job' ? <BlueprintWindow /> : <ChatWindow />}
          </article>
        ))}
      </div>
      <figcaption className="nc-caption">{p.doors.caption}</figcaption>
    </figure>
  )
}

/* ---- What AI can't do on its own ---- */

function Gap({ hid }: { hid: string }) {
  const g = p.gap
  const e = useEntrance<HTMLDivElement>(0.1)
  return (
    <div ref={e.ref} className={'nc-gap' + e.cls} data-armed={e.armed ? '' : undefined} role="table" aria-labelledby={hid}>
      <div className="nc-gap__row nc-gap__row--head" role="row">
        <span role="columnheader">{g.cols.task}</span>
        <span role="columnheader">{g.cols.alone}</span>
        <span role="columnheader">{g.cols.with}</span>
      </div>
      {g.rows.map((r, i) => (
        <div key={r.task} className="nc-gap__row nc-anim" style={delay(i)} role="row">
          <span className="nc-gap__task" role="rowheader">
            <Glyph name={r.icon} />
            {r.task}
          </span>
          <span className="nc-gap__alone" role="cell">
            <svg className="nc-mark" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M4.5 4.5 11.5 11.5M11.5 4.5 4.5 11.5" />
            </svg>
            <span>
              <b className="nc-gap__label">{g.cols.alone}</b>
              {r.alone}
            </span>
          </span>
          <span className="nc-gap__with" role="cell">
            <svg className="nc-mark" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
            </svg>
            <span>
              <b className="nc-gap__label">{g.cols.with}</b>
              {r.with}
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

/* ---- The jobs, by team ---- */

function Jobs() {
  const j = p.jobs
  const [at, setAt] = useState(0)
  const tabsId = useId()
  return (
    <div className="nc-jobs">
      <div className="nc-tabs" role="tablist" aria-label="Teams">
        {j.teams.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`${tabsId}-tab-${t.id}`}
            aria-selected={i === at}
            aria-controls={`${tabsId}-panel-${t.id}`}
            tabIndex={i === at ? 0 : -1}
            className="nc-tab"
            data-reader={t.reader}
            onClick={() => setAt(i)}
            onKeyDown={(e) => {
              if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
              const next = (at + (e.key === 'ArrowRight' ? 1 : -1) + j.teams.length) % j.teams.length
              setAt(next)
              document.getElementById(`${tabsId}-tab-${j.teams[next].id}`)?.focus()
            }}
          >
            <Glyph name={t.icon} />
            {t.name}
          </button>
        ))}
      </div>
      {j.teams.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`${tabsId}-panel-${t.id}`}
          aria-labelledby={`${tabsId}-tab-${t.id}`}
          hidden={i !== at}
          className="nc-panel"
          data-reader={t.reader}
        >
          <ul className="nc-panel__jobs">
            {t.jobs.map((job, k) => {
              const bp = typicalOf(job.slug)
              return (
                <li key={job.slug + job.line} className="nc-job" style={delay(k)}>
                  <Link className="nc-job__link" to={`/blueprints/${job.slug}`}>
                    <span className="nc-job__name">
                      {bp.name}
                      <Chev />
                    </span>
                    <span className="nc-job__line">{tie(job.line)}</span>
                    <span className="nc-job__month">
                      <span>{j.typical}</span>
                      <b>
                        {usd(bp.month)} <small>a month</small>
                      </b>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
          <p className="nc-moves">
            <span>{j.moves}</span>
            {t.moves.map((m) => (
              <b key={m}>{m}</b>
            ))}
          </p>
        </div>
      ))}
      <div className="nc-formats">
        <p className="nc-formats__label">{j.formats.label}</p>
        <ul className="nc-formats__list">
          {j.formats.items.map((f) => (
            <li key={f.id}>
              <FormatIcon id={f.id} />
              {f.name}
            </li>
          ))}
        </ul>
        <p className="nc-formats__note">{j.formats.note}</p>
      </div>
      <Link className="nc-more" to={j.all(catalog.recipes.length).to}>
        {j.all(catalog.recipes.length).label}
        <Chev />
      </Link>
    </div>
  )
}

/* ---- Every size, biggest first ---- */

function Scale() {
  const s = p.scale
  const e = useEntrance<HTMLOListElement>(0.1)
  const top = Math.log10(Math.max(...s.rows.map((r) => r.agents)) + 1)
  return (
    <figure className="nc-scale-fig">
      <ol ref={e.ref} className={'nc-scale' + e.cls} data-armed={e.armed ? '' : undefined}>
        {s.rows.map((r, i) => (
          <li key={r.name} className="nc-scale__row nc-anim" style={delay(i)}>
            <span className="nc-scale__who">
              <b>{r.name}</b>
              <span>{r.size}</span>
            </span>
            <span className="nc-scale__bar" aria-hidden="true">
              <i style={{ width: `${Math.max(6, (Math.log10(r.agents + 1) / top) * 100).toFixed(1)}%` }} />
            </span>
            <span className="nc-scale__n">
              {r.agents.toLocaleString('en-US')} <small>{r.agents === 1 ? 'agent' : 'agents'}</small>
            </span>
            <Link className="nc-scale__job" to={`/blueprints/${r.slug}`}>
              {tie(r.job)}
              <Chev />
            </Link>
          </li>
        ))}
      </ol>
      <figcaption className="nc-caption">{s.caption}</figcaption>
    </figure>
  )
}

/* ---- The page ---- */

export function NoCode() {
  const hid = useId()
  const c = p.connect
  return (
    <>
      <section className="s-section nc-hero" aria-labelledby={`${hid}-h`}>
        <div className="s-wrap s-wrap--wide">
          <Crumbs className="nc-crumbs" />
          <div className="nc-hero__words ob-anim-hero">
            <p className="nc-pill">{p.hero.pill}</p>
            <h1 className="nc-h1" id={`${hid}-h`}>
              {p.hero.headline}
            </h1>
            <p className="nc-sub">{p.hero.sub}</p>
          </div>
          <Doors />
          <p className="nc-note">{p.hero.note}</p>
        </div>
      </section>

      <section className="s-section nc-sec" data-tone="alt" id="gap" aria-labelledby={`${hid}-g`}>
        <div className="s-wrap">
          <header className="nc-head">
            <h2 className="nc-h2" id={`${hid}-g`}>
              {p.gap.heading}
            </h2>
            <p className="nc-line">{p.gap.line}</p>
          </header>
          <Gap hid={`${hid}-g`} />
        </div>
      </section>

      <section className="s-section nc-sec" id="jobs" aria-labelledby={`${hid}-j`}>
        <div className="s-wrap">
          <header className="nc-head">
            <p className="nc-kicker">{p.doors.items[0].kicker}</p>
            <h2 className="nc-h2" id={`${hid}-j`}>
              {p.jobs.heading}
            </h2>
            <p className="nc-line">{p.jobs.line}</p>
          </header>
          <Jobs />
        </div>
      </section>

      <section className="s-section nc-sec" data-tone="alt" id="connect" aria-labelledby={`${hid}-c`}>
        <div className="s-wrap nc-connect">
          <div className="nc-connect__words">
            <p className="nc-kicker">{p.doors.items[1].kicker}</p>
            <h2 className="nc-h2" id={`${hid}-c`}>
              {c.heading}
            </h2>
            <p className="nc-line">{c.line}</p>
            <ol className="nc-steps">
              {c.steps.map((s, i) => (
                <li key={s.title}>
                  <span className="nc-steps__n">{i + 1}</span>
                  <span>
                    <b>{s.title}</b>
                    {s.line}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="nc-connect__tools">
            <ul className="nc-tools">
              {c.tools.map((t) => (
                <li key={t.name} className="nc-tool">
                  <Glyph name={t.icon} />
                  <b>{t.name}</b>
                  <span>{t.how}</span>
                </li>
              ))}
            </ul>
            <p className="nc-formats__note">{c.note}</p>
          </div>
        </div>
      </section>

      <section className="s-section nc-sec" id="scale" aria-labelledby={`${hid}-s`}>
        <div className="s-wrap">
          <header className="nc-head">
            <h2 className="nc-h2" id={`${hid}-s`}>
              {p.scale.heading}
            </h2>
            <p className="nc-line">{p.scale.line}</p>
          </header>
          <Scale />
        </div>
      </section>

      <section className="s-section nc-sec" data-tone="alt" id="rules" aria-labelledby={`${hid}-r`}>
        <div className="s-wrap nc-base">
          <div className="nc-card nc-rules">
            <h2 className="nc-card__h" id={`${hid}-r`}>
              {p.rules.heading}
            </h2>
            <ul className="nc-rules__list">
              {p.rules.items.map((r) => (
                <li key={r.text}>
                  <Glyph name={r.icon} />
                  {r.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="nc-card nc-cost">
            <h2 className="nc-card__h">{p.cost.heading}</h2>
            <p className="nc-card__line">{p.cost.line}</p>
            <ul className="nc-plans">
              {plans.map((pl) => (
                <li key={pl.id}>
                  <b>{pl.name}</b>
                  <span>
                    {pl.monthly != null ? (pl.monthly === 0 ? '$0' : `${usd(pl.monthly)} a month`) : pl.from != null ? `from ${usd(pl.from)} a month` : ''}
                  </span>
                </li>
              ))}
            </ul>
            <Link className="nc-more" to={p.cost.link.to}>
              {p.cost.link.label}
              <Chev />
            </Link>
          </div>
          <div className="nc-dev" data-reader="developers">
            <div>
              <h2 className="nc-card__h">{p.dev.heading}</h2>
              <p className="nc-card__line">{p.dev.line}</p>
            </div>
            <Link className="ob-btn ob-btn--secondary" to={p.dev.link.to}>
              <span className="ob-btn-label">{p.dev.link.label}</span>
            </Link>
          </div>
        </div>
      </section>

      <Faq faq={p.faq} id="questions" className="s-faq--ruled" />
      <FinalCta final={p.final} id="join" />
    </>
  )
}
