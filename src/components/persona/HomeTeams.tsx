import { useEffect, useId, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { catalog } from '../../content/catalog'
import type { HomeTeams as Words } from '../../content/types'
import { useInView } from '../../hooks/useReveal'
import { PersonaGlyph } from './icons'
import './HomeTeams.css'

/* Home's section for teams that don't write code (#teams, 23 Nov 2026). Seun: will non-technical teams understand they
   can use blueprints to do great things; give them a section that's clear to anyone and shows them the whole of
   Obsession. The reader picks their team, and one blueprint's window teaches the three steps in order: the blueprint
   they'd pick, the job as one plain sentence with the blanks they fill in, and the message that lands where they work,
   with the KPIs it moves under it. Then what every blueprint comes with (its own phone number, inbox and browser, proof,
   results where you work, the rules it keeps), and the two doors.

   Motion explains the order: the steps arrive one after another and each blank fills in turn, once when the window first
   enters the view and again when the reader picks another team. Under prefers-reduced-motion nothing moves; before the
   page's script runs the first team shows whole and every word is in the page. Each team wears its reader colour
   (styles/accents.css). Words: content/pages/home.ts (homeTeams); each blueprint's name and line from its own file. */

const bySlug = Object.fromEntries(catalog.recipes.map((r) => [r.slug, r]))

const Chev = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M6 3.5 10.5 8 6 12.5" />
  </svg>
)

/* A numeral never ends a line apart from its word ("48 hours", "3 new patients"). */
const tie = (s: string) => s.replace(/(\d) /g, '$1\u00a0')

const d = (n: number) => ({ ['--d' as string]: n }) as CSSProperties

export function HomeTeams({ words, id, tone }: { words: Words; id?: string; tone?: 'alt' }) {
  const hid = useId()
  const [i, setI] = useState(0)
  const { ref, inView } = useInView<HTMLDivElement>(0.15)
  const [armed, setArmed] = useState(false)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (inView) setSeen(true)
    else if (!seen) setArmed(true)
  }, [inView, seen])

  const t = words.teams[i]
  const bp = bySlug[t.slug]
  let blank = 0
  const blanks = t.sentence.filter((p) => typeof p !== 'string').length

  return (
    <section className="s-section h-tm" id={id} data-tone={tone} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head h-tm__head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {words.heading}
          </h2>
          <p className="s-bp-line">{words.line}</p>
        </div>

        <div className="h-tm__grid">
          <div className="h-tm__teams" role="group" aria-label={words.teamsLabel}>
            <p className="h-tm__teams-label" aria-hidden="true">
              {words.teamsLabel}
            </p>
            {words.teams.map((x, n) => (
              <button key={x.id} type="button" className="h-tm__team" aria-pressed={n === i} onClick={() => setI(n)} data-reader={x.reader}>
                <i className="h-tm__team-mark" aria-hidden="true" />
                <span className="h-tm__team-words">
                  <b>{x.name}</b>
                  <span>{bySlug[x.slug]?.name}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="h-tm__main">
            <div
              ref={ref}
              className={'h-tm__win' + (seen ? ' is-in' : '')}
              data-armed={armed ? '' : undefined}
              data-reader={t.reader}
              role="group"
              aria-label={`${t.name}: ${bp?.name ?? ''}`}
            >
              <div className="h-tm__bar">
                <span className="h-tm__dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="h-tm__crumb">
                  Blueprints<span aria-hidden="true">/</span>
                  <b>{bp?.name}</b>
                </span>
                <span className="h-tm__tag">{words.exampleTag}</span>
              </div>

              <div className="h-tm__body" key={t.id}>
                <div className="h-tm__step">
                  <p className="h-tm__label h-tm__anim" style={d(0)}>
                    <span className="h-tm__n">1</span>
                    {words.steps.pick}
                  </p>
                  {bp && (
                    <Link className="h-tm__bp h-tm__anim" style={d(1)} to={`/blueprints/${t.slug}`}>
                      <span className="h-tm__bp-words">
                        <b>{bp.name}</b>
                        <span>{bp.line}</span>
                      </span>
                      <span className="h-tm__bp-open">
                        {words.open}
                        <Chev className="h-tm__chev" />
                      </span>
                    </Link>
                  )}
                </div>

                <div className="h-tm__step">
                  <p className="h-tm__label h-tm__anim" style={d(2)}>
                    <span className="h-tm__n">2</span>
                    {words.steps.fill}
                  </p>
                  <p className="h-tm__sentence">
                    {t.sentence.map((p, n) =>
                      typeof p === 'string' ? (
                        <span key={n}>{tie(p)}</span>
                      ) : (
                        <mark key={n} className="h-tm__blank h-tm__anim" style={d(3 + blank++)}>
                          {tie(p.v)}
                        </mark>
                      ),
                    )}
                  </p>
                  {t.note && <p className="h-tm__note">{t.note}</p>}
                </div>

                <div className="h-tm__step">
                  <p className="h-tm__label h-tm__anim" style={d(3 + blanks)}>
                    <span className="h-tm__n">3</span>
                    {words.steps.get}
                  </p>
                  <div className="h-tm__msg h-tm__anim" style={d(4 + blanks)}>
                    <p className="h-tm__msg-head">
                      <span className="h-tm__av" aria-hidden="true">
                        <svg viewBox="0 0 16 16" focusable="false">
                          <circle cx="8" cy="8" r="4.75" />
                        </svg>
                      </span>
                      <b>Obsession</b>
                      <span className="h-tm__where">{`${t.result.app} · ${t.result.where}`}</span>
                      <span className="h-tm__at">{t.result.at}</span>
                    </p>
                    <p className="h-tm__msg-title">{t.result.title}</p>
                    <ul className="h-tm__lines">
                      {t.result.lines.map((l) => (
                        <li key={l.text} data-tone={l.tone}>
                          <i aria-hidden="true" />
                          {tie(l.text)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="h-tm__formats h-tm__anim" style={d(5 + blanks)}>
                    <span className="h-tm__formats-label">{words.formats.label}</span>
                    {words.formats.items.map((f) => (
                      <span key={f} className="h-tm__format">
                        {f}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <p className="h-tm__kpis" data-reader={t.reader}>
              <span className="h-tm__kpis-label">{words.kpisLabel}</span>
              {t.kpis.map((k) => (
                <span key={k} className="h-tm__kpi">
                  {k}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="h-tm__inc">
          <p className="h-tm__inc-h">{words.includes.heading}</p>
          <ul className="h-tm__inc-list">
            {words.includes.items.map((it) => (
              <li key={it.name} className="h-tm__inc-item">
                <span className="h-tm__inc-ic" aria-hidden="true">
                  <PersonaGlyph name={it.icon} />
                </span>
                <span className="h-tm__inc-words">
                  <b>{it.name}</b>
                  <span>{it.line}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-tm__ctas">
          <Link className="ob-btn h-tm__cta" to={words.primary.to}>
            {words.primary.label}
            <Chev className="h-tm__chev" />
          </Link>
          <a className="ob-btn ob-btn--secondary h-tm__cta" href={words.secondary.to}>
            {words.secondary.label}
          </a>
          <span className="h-tm__free">{words.free}</span>
        </div>
      </div>
    </section>
  )
}
