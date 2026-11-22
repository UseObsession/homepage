import { useId } from 'react'
import { Link } from 'react-router-dom'
import { Crumbs } from '../components/Crumbs'
import { NoCodeFormats } from '../components/nocode/NoCodeFormats'
import { NoCodeWeek } from '../components/nocode/NoCodeWeek'
import { HomeTeams } from '../components/persona/HomeTeams'
import { PersonaGlyph } from '../components/persona/icons'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { catalog } from '../content/catalog'
import { noCodePage as p } from '../content/noCode'
import { plans } from '../content/prices'
import '../components/persona/blueprint.css'
import './NoCode.css'

/* /no-code (23 Nov 2026): the front door for teams that don't write code, beside /developers. The hero and its picture,
   a working week at one invented company; what an agent does for each team (8 teams, 3 blueprints each, the KPIs they
   move); how it works (Home's teams section, its own heading); the same result in any format; what it costs, from
   prices.ts; the rules every agent follows; the handoff to developers; questions; the form. Words:
   content/noCode.ts. */

const nameOf = Object.fromEntries(catalog.recipes.map((r) => [r.slug, r.name]))

const Chev = () => (
  <svg className="nc-chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M6 3.5 10.5 8 6 12.5" />
  </svg>
)

function money(n: number) {
  return `$${n.toLocaleString('en-US')}`
}

export function NoCode() {
  const hid = useId()
  return (
    <>
      <section className="s-section nc-hero" aria-labelledby={`${hid}-h`}>
        <div className="s-wrap">
          <Crumbs className="nc-crumbs" />
          <div className="nc-hero__words ob-anim-hero">
            <p className="nc-pill">{p.hero.pill}</p>
            <h1 className="nc-h1" id={`${hid}-h`}>
              {p.hero.headline}
            </h1>
            <p className="nc-sub">{p.hero.sub}</p>
            <div className="nc-act">
              <Link className="ob-btn ob-btn--lg" to={p.hero.primary.to}>
                <span className="ob-btn-label">{p.hero.primary.label}</span>
              </Link>
              <a className="ob-btn ob-btn--lg ob-btn--secondary" href={p.hero.secondary.to}>
                <span className="ob-btn-label">{p.hero.secondary.label}</span>
              </a>
            </div>
            <div className="nc-examples">
              <p className="nc-examples__label">{p.hero.examples.label}</p>
              <ul className="nc-examples__list">
                {p.hero.examples.items.map((x) => (
                  <li key={x.slug}>
                    <Link className="nc-example" to={`/blueprints/${x.slug}`}>
                      {x.label}
                      <Chev />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="nc-note">{p.hero.note}</p>
          </div>
          <NoCodeWeek week={p.week} />
        </div>
      </section>

      <section className="s-section nc-teams" data-tone="alt" id="teams" aria-labelledby={`${hid}-t`}>
        <div className="s-wrap">
          <div className="s-bp-head">
            <h2 className="s-bp-h" id={`${hid}-t`}>
              {p.teams.heading}
            </h2>
            <p className="s-bp-line">{p.teams.line}</p>
          </div>
          <ul className="nc-teams__grid">
            {p.teams.items.map((t) => (
              <li key={t.id} className="nc-team" data-reader={t.reader}>
                <p className="nc-team__head">
                  <span className="nc-team__ic" aria-hidden="true">
                    <PersonaGlyph name={t.icon} />
                  </span>
                  <b>{t.name}</b>
                </p>
                <ul className="nc-team__jobs">
                  {t.jobs.map((j) => (
                    <li key={j.slug + j.line}>
                      <Link className="nc-team__job" to={`/blueprints/${j.slug}`}>
                        <span className="nc-team__job-words">
                          <span>{j.line}</span>
                          <span className="nc-team__bp">{nameOf[j.slug]}</span>
                        </span>
                        <Chev />
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="nc-team__kpis">
                  <span>{p.teams.kpisLabel}</span>
                  {t.kpis.join(', ')}
                </p>
              </li>
            ))}
          </ul>
          <Link className="nc-more" to={p.teams.all.to}>
            {p.teams.all.label}
            <Chev />
          </Link>
        </div>
      </section>

      <HomeTeams words={p.how} id="how" />

      <section className="s-section nc-formats" data-tone="alt" id="formats" aria-labelledby={`${hid}-f`}>
        <div className="s-wrap">
          <div className="s-bp-head">
            <h2 className="s-bp-h" id={`${hid}-f`}>
              {p.formats.heading}
            </h2>
            <p className="s-bp-line">{p.formats.line}</p>
          </div>
          <NoCodeFormats formats={p.formats} />
        </div>
      </section>

      <section className="s-section nc-base" id="cost" aria-labelledby={`${hid}-c`}>
        <div className="s-wrap nc-base__grid">
          <div className="nc-card nc-cost">
            <h2 className="nc-card__h" id={`${hid}-c`}>
              {p.cost.heading}
            </h2>
            <p className="nc-card__line">{p.cost.line}</p>
            <ul className="nc-plans">
              {plans.map((pl) => (
                <li key={pl.id} className="nc-plan">
                  <b>{pl.name}</b>
                  <span>{pl.monthly != null ? (pl.monthly === 0 ? '$0' : `${money(pl.monthly)} a month`) : pl.from != null ? `from ${money(pl.from)} a month` : ''}</span>
                </li>
              ))}
            </ul>
            <p className="nc-card__note">{p.cost.free}</p>
            <Link className="nc-more" to={p.cost.link.to}>
              {p.cost.link.label}
              <Chev />
            </Link>
          </div>

          <div className="nc-card nc-rules">
            <h2 className="nc-card__h">{p.rules.heading}</h2>
            <p className="nc-card__line">{p.rules.line}</p>
            <ul className="nc-rules__list">
              {p.rules.items.map((r) => (
                <li key={r.text}>
                  <span className="nc-rules__ic" aria-hidden="true">
                    <PersonaGlyph name={r.icon} />
                  </span>
                  {r.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="nc-dev" data-reader="developers">
            <div className="nc-dev__words">
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
