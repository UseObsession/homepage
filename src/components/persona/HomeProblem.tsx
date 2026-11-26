import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { blueprintPieces, pieceChips } from '../../content/blueprint-ui'
import { catalog } from '../../content/catalog'
import { kitLinks } from '../../content/kitPaths'
import { kits } from '../../content/kits'
import type { HomeProblem as Words } from '../../content/types'
import { useInView } from '../../hooks/useReveal'
import { PersonaGlyph } from './icons'
import './HomeProblem.css'

/* Home's problem and answer (#act, 22 Nov 2026), right after the hero: an AI agent can think but can't act until it's
   equipped, as a new hire is on day one. One example agent's ID card in two states. On its own, it can plan, write and
   decide, but every ability to act is locked and its email and phone read "None". Equipped by Obsession, each ability
   unlocks with the piece that gives it (each a link to that piece, with the site's chevron), its email and number fill
   in, and it shows "Ready for work". Beside the card, the blueprints for teams who'd rather have the job done, each
   linking its page, then the link down to the pieces.

   Motion explains the change: when the card enters the view it shows the agent on its own, then switches once to
   equipped, unlocking the abilities in turn. The reader can switch between the two states at any time. One quiet loop,
   the "Ready for work" light. Under prefers-reduced-motion nothing moves and nothing switches by itself: the card shows
   the agent equipped, and the switch still works. Before the page's script runs (the prerender, crawlers, no-script
   readers), the card is equipped and every word is in the page. Words: content/pages/home.ts (homeProblem). */

type State = 'alone' | 'equipped'
/* 26 Nov 2026: on a borrowed login (Maya's address, her password, the event under her name) every ability reads
   "Not as itself"; the hold is long enough to read it before the card switches to equipped. */
const HOLD = 2400

const nameOf = Object.fromEntries(catalog.recipes.map((r) => [r.slug, r]))
/* Each blueprint wears its type's reader colour (content/kitPaths), as on Home's blueprints section. */
const readerOfType = Object.fromEntries(kitLinks.map((k) => [k.id, k.reader]))
const readerOf = Object.fromEntries(kits.flatMap((k) => (k.blueprints?.slugs ?? []).map((s) => [s, readerOfType[k.id]])))

const Chev = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M6 3.5 10.5 8 6 12.5" />
  </svg>
)
const Check = () => (
  <svg className="h-pr__mark h-pr__mark--yes" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M3.5 8.5l3 3 6-7" />
  </svg>
)
const Lock = () => (
  <svg className="h-pr__mark h-pr__mark--lock" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <rect x="4" y="7.2" width="8" height="6" rx="1.3" />
    <path d="M5.8 7.2V5.6a2.2 2.2 0 0 1 4.4 0v1.6" />
  </svg>
)

export function HomeProblem({ problem, id, tone }: { problem: Words; id?: string; tone?: 'alt' }) {
  const hid = useId()
  const p = problem
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const [state, setState] = useState<State>('equipped')
  const [motion, setMotion] = useState(false)
  const played = useRef(false)

  /* With motion allowed, the card starts on its own before it is seen. */
  useEffect(() => {
    const ok = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setMotion(ok)
    if (ok) setState('alone')
  }, [])

  /* Once seen, it switches to equipped, once. */
  useEffect(() => {
    if (!motion || !inView || played.current) return
    played.current = true
    const t = window.setTimeout(() => setState('equipped'), HOLD)
    return () => window.clearTimeout(t)
  }, [motion, inView])

  const pick = (s: State) => {
    played.current = true
    setState(s)
  }

  return (
    <section className="s-section h-pr" id={id} data-tone={tone} aria-labelledby={`${hid}-h`}>
      <div className="s-wrap">
        <div className="s-bp-head h-pr__head">
          <h2 className="s-bp-h" id={`${hid}-h`}>
            {p.heading}
          </h2>
          <p className="s-bp-line">{p.line}</p>
        </div>

        <figure className="h-pr__fig">
          <div ref={ref} className={'h-pr__stage' + (motion ? ' has-motion' : '')} data-state={state}>
            {/* The agent's ID card. */}
            <div className="h-pr__card">
              <div className="h-pr__switch" role="group" aria-label={p.states.label}>
                {(['alone', 'equipped'] as const).map((s) => (
                  <button key={s} type="button" className="h-pr__opt" aria-pressed={state === s} onClick={() => pick(s)}>
                    {s === 'alone' ? p.states.alone : p.states.equipped}
                  </button>
                ))}
              </div>

              <div className="h-pr__who">
                <span className="h-pr__avatar" aria-hidden="true">
                  <PersonaGlyph name="users" />
                </span>
                <span className="h-pr__name">
                  <b>{p.card.name}</b>
                  <span>{p.card.role}</span>
                </span>
                <span className="h-pr__online">
                  <i aria-hidden="true" />
                  <span className="h-pr__status">
                    <span className="h-pr__off">{p.card.offline}</span>
                    <span className="h-pr__on">{p.card.online}</span>
                  </span>
                </span>
              </div>

              <dl className="h-pr__ids">
                {p.card.ids.map((d) => (
                  <div key={d.label}>
                    <dt>{d.label}</dt>
                    <dd>
                      <span className={'h-pr__none' + (d.borrowed ? ' is-borrowed' : '')}>{d.none}</span>
                      <span className="h-pr__val">{d.value}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="h-pr__cols">
                <div className="h-pr__think">
                  <p className="h-pr__label">{p.card.think.label}</p>
                  <ul>
                    {p.card.think.items.map((t) => (
                      <li key={t}>
                        <Check />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="h-pr__act">
                  <p className="h-pr__label">{p.card.act.label}</p>
                  <ul>
                    {p.card.act.items.map((a, i) => (
                      <li key={a.ability} style={{ ['--i' as string]: i }}>
                        <Link className="h-pr__ability" to={a.to}>
                          <span className="h-pr__state" aria-hidden="true">
                            <Lock />
                            <Check />
                          </span>
                          <span className="h-pr__ability-text">{a.ability}</span>
                          <span className="h-pr__via">
                            <span className="h-pr__locked">{p.card.act.locked}</span>
                            <span className="h-pr__piece">
                              <PersonaGlyph name={pieceChips[a.piece].icon} />
                              <span className="h-pr__with">{p.card.act.with}</span> {a.name}
                            </span>
                          </span>
                          <Chev className="h-pr__chev" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="h-pr__event">
                <span className="h-pr__event-label">{p.card.event.label}</span>
                <span className="h-pr__event-body">
                  {p.card.event.borrowed ? (
                    <span className="h-pr__none h-pr__event-row is-borrowed">
                      <i aria-hidden="true" />
                      <span className="h-pr__event-at">{p.card.event.borrowed.at}</span>
                      <span className="h-pr__event-name">{p.card.event.borrowed.name}</span>
                      <span className="h-pr__event-text">{p.card.event.borrowed.text}</span>
                    </span>
                  ) : (
                    <span className="h-pr__none">{p.card.event.none}</span>
                  )}
                  <span className="h-pr__val h-pr__event-row">
                    <i aria-hidden="true" />
                    <span className="h-pr__event-at">{p.card.event.at}</span>
                    <span className="h-pr__event-name">{p.card.event.name}</span>
                    <span className="h-pr__event-text">{p.card.event.text}</span>
                  </span>
                </span>
              </div>
            </div>

            {/* Blueprints: the job done for you, on the same pieces. */}
            <div className="h-pr__bps">
              <p className="h-pr__bps-title">{p.blueprints.title}</p>
              <p className="h-pr__bps-line">{p.blueprints.line}</p>
              <ul className="h-pr__bp-list">
                {p.blueprints.slugs
                  .filter((s) => nameOf[s])
                  .map((s, i) => (
                    <li key={s} style={{ ['--i' as string]: i }}>
                      <Link className="h-pr__bp" to={`/blueprints/${s}`} data-reader={readerOf[s]}>
                        <span className="h-pr__bp-name">
                          {nameOf[s].name}
                          <Chev className="h-pr__chev" />
                        </span>
                        <span className="h-pr__bp-line">{nameOf[s].line}</span>
                        <span className="h-pr__bp-runs">
                          <span className="sr-only">{`${p.blueprints.runs}: `}</span>
                          {(['personas', ...(blueprintPieces[s] ?? [])] as const).map((pc) => (
                            <span className="h-pr__bp-piece" key={pc} title={pieceChips[pc].name}>
                              <PersonaGlyph name={pieceChips[pc].icon} />
                              <span className="sr-only">{pieceChips[pc].name}</span>
                            </span>
                          ))}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
              <p className="h-pr__out">{p.blueprints.out}</p>
              <Link className="h-pr__bps-all" to={p.blueprints.link.to}>
                {p.blueprints.link.label}
                <Chev className="h-pr__chev" />
              </Link>
            </div>
          </div>
          <figcaption className="h-pr__cap">{p.caption}</figcaption>
        </figure>

        <a className="h-pr__more" href={p.link.to}>
          {p.link.label}
          <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M3.5 6 8 10.5 12.5 6" />
          </svg>
        </a>
      </div>
    </section>
  )
}
