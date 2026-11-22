import { Link } from 'react-router-dom'
import { recipePage as ui } from '../../content/recipe-page'
import type { Recipe } from '../../content/types'
import { CodeWindow } from '../sections/DevSection'
import './BlueprintDoors.css'

/* Two doors on every blueprint page (23 Nov 2026): run it as it is, for teams that don't code (3 plain steps and the
   formats results arrive in, any of them), or build on it, for developers (the call that starts it and the events it
   writes to the event log). A blueprint's own `build` gives its call and events; one without it shows the general call
   and its blueprint.result event, so every page opens both doors. Words: content/recipe-page.ts (doors). */

const Chev = () => (
  <svg className="bp-doors__chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M6 3.5 10.5 8 6 12.5" />
  </svg>
)

function fallback(r: Recipe) {
  const code = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// Start it with the settings above, as fields
await obsession.blueprints.run("${r.slug}", { /* settings */ })

// Its results reach you as events
await obsession.events.subscribe({ events: ["blueprint.result"] })`
  return { line: ui.doors.build.line, code, events: [{ kind: 'blueprint.result', text: r.gets }] }
}

export function BlueprintDoors({ r }: { r: Recipe }) {
  const d = ui.doors
  const b = r.build ?? fallback(r)
  return (
    <div className="bp-doors">
      <div className="bp-doors__door" data-reader="marketing">
        <p className="bp-doors__who">{d.run.who}</p>
        <h3 className="bp-doors__name">{d.run.name}</h3>
        <ol className="bp-doors__steps">
          {d.run.steps.map((s, i) => (
            <li key={s}>
              <span className="bp-doors__n" aria-hidden="true">
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
        <p className="bp-doors__formats">
          {d.run.formats.map((f) => (
            <span key={f} className="bp-doors__format">
              {f}
            </span>
          ))}
        </p>
        <p className="bp-doors__note">{d.run.formatsNote}</p>
        <a className="ob-btn bp-doors__cta" href={d.run.cta.to}>
          <span className="ob-btn-label">{d.run.cta.label}</span>
        </a>
      </div>

      <div className="bp-doors__door" data-reader="developers">
        <p className="bp-doors__who">{d.build.who}</p>
        <h3 className="bp-doors__name">{d.build.name}</h3>
        <p className="bp-doors__line">{b.line}</p>
        <div className="bp-doors__code">
          <CodeWindow code={b.code} label={d.build.label} />
        </div>
        <p className="bp-doors__events-h">{d.build.events}</p>
        <ul className="bp-doors__events">
          {b.events.map((e) => (
            <li key={e.kind + e.text}>
              <span className="bp-doors__kind">{e.kind}</span>
              <span>{e.text}</span>
            </li>
          ))}
        </ul>
        <Link className="bp-doors__link" to={d.build.cta.to}>
          {d.build.cta.label}
          <Chev />
        </Link>
      </div>
    </div>
  )
}
