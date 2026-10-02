import { useEffect, useState } from 'react'
import { roleById, roles, ways, type Role, type RoleId, type WayId } from '../content/roles'
import { recipes } from '../content/recipes'
import { useReducedMotion } from '../hooks/useReveal'
import { Code, sdkExample } from './Code'
import './WaysPicker.css'

/* Shown before anyone picks a role. */
const anyone: Role = {
  id: 'agency',
  label: 'Anyone',
  plural: '',
  bandName: '',
  bandLine: '',
  page: '/',
  ways: ['recipes', 'task', 'api'],
  recipes: ['competitor', 'prospect', 'mystery', 'speed'],
  task: 'Time how fast 300 dental practices answer a web enquiry, and tell me which never reply.',
  plan: [
    { k: 'Companies', v: '300 practices, from your list' },
    { k: 'Journey', v: 'Send an enquiry through each web form, marked as automated' },
    { k: 'Wait', v: 'Up to 5 working days' },
    { k: 'Capture', v: 'Every reply, call and text, timed' },
    { k: 'Report', v: 'Reply time per practice, as a sheet' },
  ],
}

type Props = {
  /* Fix the picker to one audience and hide the role chips. */
  fixedRole?: RoleId
}

export function WaysPicker({ fixedRole }: Props) {
  const [roleId, setRoleId] = useState<RoleId | null>(fixedRole ?? null)
  const role = roleId ? roleById[roleId] : anyone
  const available = role.ways
  const [chosenWay, setWayId] = useState<WayId>(available[0])
  const wayId = available.includes(chosenWay) ? chosenWay : available[0]

  function pickRole(id: RoleId) {
    const next = roleId === id ? null : id
    setRoleId(next)
    setWayId((next ? roleById[next] : anyone).ways[0])
  }

  return (
    <div className="ways">
      {!fixedRole && (
        <div className="ways-roles">
          <span className="ways-roles-k">I work in</span>
          <div className="ways-chips" role="group" aria-label="Who are you?">
            {roles.map((r) => (
              <button key={r.id} aria-pressed={roleId === r.id} onClick={() => pickRole(r.id)}>
                {r.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="ways-grid">
        <div className="ways-list" role="tablist" aria-label="Ways to use Obsession">
          {(fixedRole ? available : (['recipes', 'task', 'api'] as WayId[])).map((id) => {
            const w = ways[id]
            const on = available.includes(id)
            return (
              <button
                key={id}
                role="tab"
                aria-selected={wayId === id}
                aria-disabled={!on}
                tabIndex={on ? 0 : -1}
                className={`way ${wayId === id ? 'is-active' : ''} ${on ? '' : 'is-off'}`}
                onClick={() => on && setWayId(id)}
              >
                <span className="way-who">{w.who}</span>
                <span className="way-name">{w.name}</span>
                <span className="way-line">{w.line}</span>
              </button>
            )
          })}
          {roleId && role.note && <p className="ways-note">{role.note}</p>}
        </div>

        <div className="ways-stage" role="tabpanel" key={`${roleId}-${wayId}`}>
          {wayId === 'recipes' && <RecipesPreview role={role} />}
          {wayId === 'task' && <TaskPreview role={role} />}
          {wayId === 'api' && (
            <div className="stage-api">
              <Code code={sdkExample} label="TypeScript" />
              <p className="stage-foot">Illustrative. The API opens to early access teams first.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function RecipesPreview({ role }: { role: Role }) {
  const [open, setOpen] = useState(role.recipes[0])
  return (
    <div className="stage-tpl">
      <p className="stage-k">Recipes{role.plural ? ` for ${role.plural}` : ''}</p>
      <ul>
        {role.recipes.map((id) => {
          const t = recipes[id]
          const isOpen = open === id
          return (
            <li key={id} className={isOpen ? 'is-open' : ''}>
              <button onClick={() => setOpen(id)} aria-expanded={isOpen}>
                <span className="tpl-name">{t.name}</span>
              </button>
              <div className="tpl-more">
                <p className="muted">{t.line}</p>
                <ol className="tpl-steps">
                  {t.journey.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
                <p className="tpl-gets">
                  <span className="stage-k">You get</span> {t.gets}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function TaskPreview({ role }: { role: Role }) {
  const [count, setTyped] = useState(0)
  const full = role.task.length
  const typed = useReducedMotion() ? full : count
  const done = typed >= full

  useEffect(() => {
    if (done) return
    const t = window.setTimeout(() => setTyped((n) => Math.min(n + 2, full)), 22)
    return () => window.clearTimeout(t)
  }, [typed, full, done])

  return (
    <div className="stage-task">
      <div className="task-box">
        <span className="task-prompt" aria-hidden="true">
          ›
        </span>
        <p>
          {role.task.slice(0, typed)}
          {!done && <span className="caret" aria-hidden="true" />}
        </p>
      </div>
      <div className={`task-plan ${done ? 'in' : ''}`}>
        <p className="stage-k">The plan we confirm with you</p>
        <dl>
          {role.plan.map((p, i) => (
            <div key={p.k} style={{ transitionDelay: `${i * 90}ms` }}>
              <dt>{p.k}</dt>
              <dd>{p.v}</dd>
            </div>
          ))}
        </dl>
        <div className="task-actions">
          <span className="btn sm" aria-hidden="true">
            Looks right, run it
          </span>
          <span className="btn-2 sm" aria-hidden="true">
            Change something
          </span>
        </div>
      </div>
    </div>
  )
}
