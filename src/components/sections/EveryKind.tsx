import { Fragment, useId, useState } from 'react'
import type { SampleItem, SampleKinds, SampleKindTab } from '../../content/types'
import { Capture } from '../v5/Capture'
import { Chips, Json } from '../v5/HeroExplorer'
import { SectionHead } from './DevSection'
import '../v5/HeroExplorer.css'
import './EveryKind.css'

/* /sample-output's kinds section (12 Nov, James picked it from 4 designs): each kind of data a company shows only to
   customers, at one example company, drawn the way it arrived (Capture) or switched to the rows an API returns. Pill
   tabs pick the kind; the window is Home's explorer window, with the same Persona, Wall and Kind chips (persona 2,
   wall 3, kind 4, the rest behind "…"). Persona picks who asks: the first holds the example, the others show Home's
   line for nothing yet. Wall filters to one wall; Kind to any number of kinds (none on is every kind; one picked from
   "…" is added and the row stays). A second click clears either. It follows the page's theme. */

type View = 'seen' | 'data'
/* Walls in the order a customer meets them. */
const WALLS = ['Open', 'Sign-up', 'Login', 'Conversation', 'Form', 'Identity check', 'Device', 'Purchase', 'Cancel', 'Call', 'In person', 'Post']

/* What passes Wall (one, or none for all) and Kind (many, or none for all). An act has no kind, so it stays. */
const pass = (it: SampleItem, wall: string | null, kinds: string[]) => (!wall || it.w.includes(wall)) && (!kinds.length || !it.k || kinds.includes(it.k))
const keep = <T extends SampleItem>(list: T[], wall: string | null, kinds: string[]) => list.filter((it) => pass(it, wall, kinds))

/* Whether anything in a tab's drawing passes the Wall and Kind filters. */
function anySeen(tab: SampleKindTab, wall: string | null, kinds: string[]) {
  const ok = (it: SampleItem) => pass(it, wall, kinds)
  const v = tab.view
  switch (v.t) {
    case 'flow':
      return v.screens.some(ok)
    case 'inbox':
      return v.emails.some(ok)
    case 'thread':
      return v.msgs.some(ok)
    case 'device':
      return v.pushes.some(ok) || ok(v.inapp)
    case 'prices':
      return v.rows.some(ok)
    case 'ads':
      return v.ads.some(ok)
    case 'chat':
      return ok(v.chat) || ok(v.page)
    case 'call':
      return ok(v.call)
    case 'post':
      return v.cards.some(ok)
  }
}

function Seen({ tab, wall, kinds, email, setEmail }: { tab: SampleKindTab; wall: string | null; kinds: string[]; email: number; setEmail: (n: number) => void }) {
  const v = tab.view
  const ok = (it: SampleItem) => pass(it, wall, kinds)
  switch (v.t) {
    case 'flow': {
      const screens = keep(v.screens, wall, kinds)
      const acts = v.acts.filter((a) => !wall || a.w.includes(wall))
      if (!screens.length) return null
      return (
        <div className="s-ek-stack">
          <div className="s-ek-titlerow">
            <p className="s-ek-title">{v.title}</p>
            <span className="s-ek-meta">{v.meta}</span>
          </div>
          <div className="s-ek-film">
            {screens.map((s) => (
              <figure key={s.at} className="s-ek-frame">
                <Capture look={s.look} small />
                <figcaption>
                  <span className="s-ek-meta">{s.at} · Screen</span>
                  <span>{s.name}</span>
                  <span className="hx-tag">
                    <span className="hx-tagk">{s.fact[0]}</span>
                    {s.fact[1]}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          {acts.length > 0 && (
            <div className="s-ek-acts">
              <span className="hx-lab">{v.actsLabel}</span>
              <ol>
                {acts.map((a) => (
                  <li key={a.at}>
                    {a.at} <span>{a.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )
    }
    case 'inbox': {
      const emails = keep(v.emails, wall, kinds)
      if (!emails.length) return null
      const cur = emails[Math.min(email, emails.length - 1)]
      return (
        <div className="s-ek-split">
          <ul className="s-ek-inbox">
            {emails.map((e, n) => (
              <li key={e.at}>
                <button type="button" aria-pressed={e === cur} onClick={() => setEmail(n)}>
                  <span className="s-ek-meta s-ek-spread">
                    <span>{e.at}</span>
                    <span>{e.responder}</span>
                  </span>
                  <span className="s-ek-subject">{e.subject}</span>
                  <span className="hx-tags">
                    <span className="hx-tag">
                      <span className="hx-tagk">flow</span>
                      {e.flow}
                    </span>
                    <span className="hx-tag">
                      <span className="hx-tagk">code</span>
                      {e.code}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="s-ek-stack">
            <dl className="hx-ev-head">
              {cur.head.map(([k, val]) => (
                <Fragment key={k}>
                  <dt>{k}</dt>
                  <dd>{val}</dd>
                </Fragment>
              ))}
            </dl>
            <Capture look={cur.look} />
          </div>
        </div>
      )
    }
    case 'thread': {
      const msgs = keep(v.msgs, wall, kinds)
      if (!msgs.length) return null
      return (
        <div className="s-ek-split s-ek-split--phone">
          <Capture look={{ t: 'sms', from: v.from, msgs }} />
          <div className="s-ek-stack">
            <span className="hx-lab">{v.factsLabel}</span>
            {keep(v.facts, wall, kinds).map((f) => (
              <div className="s-ek-card" key={f.at}>
                <span className="s-ek-meta">{f.at}</span>
                <span className="hx-tag">
                  <span className="hx-tagk">flow</span>
                  {f.flow}
                </span>
                <span className="s-ek-meta">{f.fields}</span>
              </div>
            ))}
          </div>
        </div>
      )
    }
    case 'device': {
      const pushes = keep(v.pushes, wall, kinds)
      const inapp = ok(v.inapp)
      if (!pushes.length && !inapp) return null
      return (
        <div className="s-ek-split s-ek-split--phone">
          {pushes.length > 0 && <Capture look={{ t: 'push', day: v.day, app: v.app, items: pushes }} />}
          {inapp && (
            <div className="s-ek-stack">
              <span className="hx-lab">{v.inapp.label}</span>
              <div className="s-ek-narrow">
                <Capture look={v.inapp.look} />
              </div>
              <span className="hx-tags">
                {v.inapp.facts.map(([k, val]) => (
                  <span className="hx-tag" key={k}>
                    <span className="hx-tagk">{k}</span>
                    {val}
                  </span>
                ))}
              </span>
            </div>
          )}
        </div>
      )
    }
    case 'prices': {
      const rows = keep(v.rows, wall, kinds)
      if (!rows.length) return null
      return (
        <div className="s-ek-stack">
          <p className="s-ek-title">{v.title}</p>
          <div className="s-ek-tablewrap">
            <table className="s-ek-table">
              <thead>
                <tr>
                  {v.cols.map((c) => (
                    <th key={c}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.at + r.plan}>
                    <td className="s-ek-meta">{r.at}</td>
                    <td>{r.where}</td>
                    <td>
                      <span className="hx-tag">{r.wall}</span>
                    </td>
                    <td className="s-ek-dim">{r.plan}</td>
                    <td>
                      <span className="s-ek-bar">
                        <span className="s-ek-track">
                          <span style={{ width: `${r.pct}%` }} />
                        </span>
                        <span className="s-ek-price">{r.price}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    }
    case 'ads': {
      const ads = keep(v.ads, wall, kinds)
      if (!ads.length) return null
      return (
        <div className="s-ek-stack">
          <div className="s-ek-grid">
            {ads.map((a, n) => (
              <Capture key={n} look={a.look} />
            ))}
          </div>
          <div className="s-ek-acts">
            <span className="hx-lab">{v.besideLabel}</span>
            <span className="hx-tags">
              {v.beside.map(([k, val]) => (
                <span className="hx-tag" key={k}>
                  <span className="hx-tagk">{k}</span>
                  {val}
                </span>
              ))}
            </span>
          </div>
        </div>
      )
    }
    case 'chat': {
      const chat = ok(v.chat)
      const page = ok(v.page)
      if (!chat && !page) return null
      return (
        <div className="s-ek-split">
          {chat && <Capture look={v.chat.look} />}
          {page && (
            <div className="s-ek-stack">
              <span className="hx-lab">{v.page.label}</span>
              <Capture look={v.page.look} />
              <span className="hx-tags">
                {v.page.facts.map(([k, val]) => (
                  <span className="hx-tag" key={k}>
                    <span className="hx-tagk">{k}</span>
                    {val}
                  </span>
                ))}
              </span>
            </div>
          )}
        </div>
      )
    }
    case 'call':
      if (!ok(v.call)) return null
      return (
        <div className="s-ek-stack">
          <div className="s-ek-titlerow">
            <p className="s-ek-title">{v.title}</p>
            <span className="s-ek-meta">{v.meta}</span>
          </div>
          <Capture look={v.call.look} />
        </div>
      )
    case 'post': {
      const cards = keep(v.cards, wall, kinds)
      if (!cards.length) return null
      return (
        <div className="s-ek-grid">
          {cards.map((c) => (
            <figure className="s-ek-frame" key={c.caption}>
              <Capture look={c.look} />
              <figcaption>
                <span className="s-ek-meta">{c.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      )
    }
  }
}

export function EveryKind({ kinds, id }: { kinds: SampleKinds; id?: string }) {
  const headingId = useId()
  const { ui } = kinds
  const [ti, setTi] = useState(0)
  const [view, setView] = useState<View>('seen')
  const [persona, setPersona] = useState(0)
  const [wall, setWall] = useState<string | null>(null)
  const [onKinds, setOnKinds] = useState<string[]>([])
  const [email, setEmail] = useState(0)
  const tab = kinds.tabs[ti]

  const walls: string[] = []
  const kindList: string[] = []
  for (const r of tab.rows) {
    for (const w of r.w) if (!walls.includes(w)) walls.push(w)
    if (r.k && !kindList.includes(r.k)) kindList.push(r.k)
  }
  walls.sort((a, b) => WALLS.indexOf(a) - WALLS.indexOf(b))
  const pickTab = (n: number) => {
    setTi(n)
    setPersona(0)
    setWall(null)
    setOnKinds([])
    setEmail(0)
  }
  const own = persona === 0
  const rows = own ? keep(tab.rows, wall, onKinds) : []
  const empty = view === 'seen' ? !(own && anySeen(tab, wall, onKinds)) : rows.length === 0

  return (
    <section id={id} className="s-section s-ek" aria-labelledby={headingId}>
      <div className="s-wrap">
        <SectionHead id={headingId} heading={kinds.heading} line={kinds.line} />
        <div className="ob-ptabs s-ek-tabs" role="group" aria-label={ui.tabs}>
          {kinds.tabs.map((t, n) => (
            <button key={t.id} type="button" className={'ob-ptab' + (n === ti ? ' is-selected' : '')} aria-pressed={n === ti} onClick={() => pickTab(n)}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="v5-hx s-ek-x">
          <div className="hx-win">
            <div className="hx-ohead s-ek-head">
              <span className="hx-lab">{tab.label}</span>
              <span className="s-ek-co">{tab.company}</span>
              <div className="hx-tabs" role="group" aria-label={tab.label}>
                {(['seen', 'data'] as View[]).map((x) => (
                  <button type="button" key={x} aria-pressed={view === x} onClick={() => setView(x)}>
                    {ui[x]}
                  </button>
                ))}
              </div>
            </div>
            <div className="hx-main">
              <div className="hx-side">
                <div className="hx-grp">
                  <p className="hx-gl">
                    {ui.persona}
                    {tab.personas.length > 1 && <span className="hx-hint">{ui.hint}</span>}
                  </p>
                  <Chips key={`${tab.id}-persona`} items={tab.personas} on={(v) => v === tab.personas[persona]} pick={(v) => setPersona(tab.personas.indexOf(v))} limit={2} more={`${ui.more} ${ui.persona.toLowerCase()}s`} />
                </div>
                <div className="hx-grp">
                  <p className="hx-gl">{ui.wall}</p>
                  <Chips key={`${tab.id}-wall`} items={walls} on={(v) => v === wall} pick={(v) => setWall((w) => (w === v ? null : v))} limit={3} more={`${ui.more} ${ui.wall.toLowerCase()}s`} />
                </div>
                <div className="hx-grp">
                  <p className="hx-gl">{ui.kind}</p>
                  <Chips key={`${tab.id}-kind`} items={kindList} on={(v) => onKinds.includes(v)} pick={(v) => setOnKinds((ks) => (ks.includes(v) ? ks.filter((k) => k !== v) : [...ks, v]))} limit={4} more={`${ui.more} ${ui.kind.toLowerCase()}s`} multi />
                </div>
              </div>
              <div className="hx-out">
                <div className="hx-obody s-ek-body">
                  {empty ? (
                    <p className="hx-none">{ui.none}</p>
                  ) : view === 'seen' ? (
                    <Seen tab={tab} wall={wall} kinds={onKinds} email={email} setEmail={setEmail} />
                  ) : (
                    <div className="s-ek-split s-ek-split--data">
                      <div className="s-ek-tablewrap">
                        <table className="s-ek-table">
                          <thead>
                            <tr>
                              {ui.cols.map((c) => (
                                <th key={c}>{c}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map((r) => (
                              <tr key={r.at + r.what}>
                                <td className="s-ek-meta">{r.at}</td>
                                <td>
                                  <span className="hx-tag">{r.label}</span>
                                </td>
                                <td>{r.what}</td>
                                <td className="s-ek-meta">{r.facts}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="s-ek-stack">
                        <span className="hx-lab">{ui.one}</span>
                        <pre className="hx-rec s-ek-rec">
                          <Json v={tab.record} />
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="s-ek-arrives">
          <span className="s-ek-lab">{ui.arrives}</span>
          {kinds.arrives.map((a) => (
            <span className="s-ek-pill" key={a}>
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
