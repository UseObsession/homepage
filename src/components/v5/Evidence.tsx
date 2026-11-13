import { Fragment, type ReactNode } from 'react'
import type { ExEvent, ExLook } from '../../content/types'
import { Capture } from './Capture'
import { evKey, type EvGroup } from './evidenceGroups'
import './Evidence.css'

/* The console's Evidence (12 Nov, James): the events in view, drawn the way each kind arrived, one kind at a time with
   back and next between kinds. Screens are a row of frames, emails an inbox beside the picked email, texts one phone
   thread, push and in-app a lock screen beside the in-app message, ads the cards public ad libraries show, chats and
   calls their transcripts, and receipts, statements, parcels, letters, quotes, displays, job posts, DNS and registers
   cards side by side. Under the drawing sits the picked event as it arrived: its headers and its proof. No heading names
   the kind (the chips and tabs already do); back and next sit at the bottom, as in Facts. A row's link in Facts opens
   its kind here with that event picked. */

function Tags({ e }: { e: ExEvent }) {
  if (!e.facts?.length) return null
  return (
    <span className="hx-tags">
      {e.facts.map((f) => (
        <span className="hx-tag" key={f.kind}>
          <span className="hx-tagk">{f.kind}</span>
          {f.text}
        </span>
      ))}
    </span>
  )
}

export function Look({ e, small }: { e: ExEvent; small?: boolean }) {
  const ev = e.evidence
  if (!ev) return null
  return ev.look ? (
    <Capture look={ev.look} small={small} />
  ) : (
    <div className="hx-ev-body ev-plain">
      {ev.body.map((l) => (
        <p key={l}>{l}</p>
      ))}
    </div>
  )
}

const lookOf = (e: ExEvent) => e.evidence?.look

export function Evidence({
  groups,
  group,
  sel,
  pick,
  step,
}: {
  groups: EvGroup[]
  group: EvGroup
  sel: ExEvent
  pick: (e: ExEvent) => void
  step: (d: number) => void
}) {
  const list = group.events
  const on = (e: ExEvent) => evKey(e) === evKey(sel)
  const choose = (e: ExEvent, className: string, children: ReactNode) => (
    <button key={evKey(e)} type="button" className={'ev-pick ' + className} aria-pressed={on(e)} onClick={() => pick(e)}>
      {children}
    </button>
  )
  const when = (e: ExEvent) => (
    <span className="ev-when">
      {e.at} · {e.kind}
    </span>
  )

  let body: ReactNode
  switch (group.id) {
    case 'screens':
      body = (
        <div className="ev-film">
          {list.map((e) =>
            choose(e, 'ev-frame', (
              <>
              <Look e={e} small />
              <span className="ev-cap">
                {when(e)}
                <span className="ev-what">{e.text}</span>
                <Tags e={e} />
              </span>
              </>
            )),
          )}
        </div>
      )
      break
    case 'mail':
      body = (
        <div className="ev-split">
          <ul className="ev-inbox">
            {list.map((e) => (
              <li key={evKey(e)}>
                {choose(e, 'ev-row', (
                  <>
                  {when(e)}
                  <span className="ev-what">{e.text}</span>
                  <Tags e={e} />
                  </>
                ))}
              </li>
            ))}
          </ul>
          <Look e={sel} />
        </div>
      )
      break
    case 'thread': {
      const first = list.map(lookOf).find((l) => l?.t === 'sms')
      const msgs = list.flatMap((e) => {
        const l = lookOf(e)
        return l?.t === 'sms' ? l.msgs : [{ text: e.text, at: e.at }]
      })
      body = (
        <div className="ev-split ev-split--phone">
          <Capture look={{ t: 'sms', from: first?.t === 'sms' ? first.from : '', msgs }} />
          <div className="ev-stack">
            {list.map((e) =>
              choose(e, 'ev-card', (
                <>
                {when(e)}
                <span className="ev-what">{e.text}</span>
                <Tags e={e} />
                </>
              )),
            )}
          </div>
        </div>
      )
      break
    }
    case 'device': {
      const pushes = list.filter((e) => lookOf(e)?.t === 'push')
      const others = list.filter((e) => lookOf(e)?.t !== 'push')
      const last = pushes.map(lookOf).filter((l): l is Extract<ExLook, { t: 'push' }> => l?.t === 'push')
      const lock: ExLook | undefined = last.length
        ? { t: 'push', day: last[last.length - 1].day, app: last[0].app, items: [...last].reverse().flatMap((l) => l.items) }
        : undefined
      body = (
        <div className="ev-split ev-split--phone">
          {lock && <Capture look={lock} />}
          <div className="ev-stack">
            {others.map((e) =>
              choose(e, 'ev-card', (
                <>
                {when(e)}
                <span className="ev-narrow">
                  <Look e={e} />
                </span>
                <Tags e={e} />
                </>
              )),
            )}
            {pushes.map((e) =>
              choose(e, 'ev-card', (
                <>
                {when(e)}
                <span className="ev-what">{e.text}</span>
                <Tags e={e} />
                </>
              )),
            )}
          </div>
        </div>
      )
      break
    }
    case 'ads':
      body = (
        <div className="ev-grid">
          {list.map((e) =>
            choose(e, 'ev-tile', (
              <>
              <Look e={e} />
              </>
            )),
          )}
        </div>
      )
      break
    default:
      body = (
        <div className={group.id === 'docs' ? 'ev-grid' : 'ev-stack'}>
          {list.map((e) =>
            choose(e, 'ev-tile', (
              <>
              <Look e={e} />
              <span className="ev-cap">
                {when(e)}
                <Tags e={e} />
              </span>
              </>
            )),
          )}
        </div>
      )
  }

  const ev = sel.evidence
  return (
    <div className="hx-drill ev">
      {body}
      {ev && (
        <div className="ev-meta">
          <p className="hx-drillfact">
            <span className="hx-when">{sel.at}</span>
            <span className="hx-kind">{sel.kind}</span>
            <span>{sel.text}</span>
          </p>
          <dl className="hx-ev-head">
            {ev.head.map(([k, v]) => (
              <Fragment key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </Fragment>
            ))}
          </dl>
          {ev.look && (
            <div className="sr-only">
              {ev.body.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          )}
          <ul className="hx-ev-proof">
            {ev.proof.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      )}
      {groups.length > 1 && (
        <div className="hx-pager">
          <span className="hx-stepper">
            <button type="button" aria-label="Previous kind" onClick={() => step(-1)}>
              ‹
            </button>
            <button type="button" aria-label="Next kind" onClick={() => step(1)}>
              ›
            </button>
          </span>
        </div>
      )}
    </div>
  )
}
