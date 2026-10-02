import type { StudyNode } from '../../content/types'
import { StatusMark } from '../Logo'
import './Flow.css'

/* The use case's hero object: the way from the reader's own list to their own tools, as 1 strip in 3 stops (James's
   hero diagram). The middle stop is raised, as James had it; when it is Obsession it carries the 1 mark in view that
   moves (working). Each stop is its label, its title, what it holds, and a foot in the agent's mono. A source the
   reader gains ("After sign up, new") is marked New, as James marked it. Stacked on a phone, the arrows turn down.
   Read as a list, in order, by a screen reader. */
const NEW = ', new'

function Arrow() {
  return (
    <span className="s-flow__arrow" aria-hidden="true">
      <svg viewBox="0 0 16 16" focusable="false">
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </span>
  )
}

export function Flow({ nodes, label }: { nodes: StudyNode[]; label: string }) {
  const mid = Math.floor(nodes.length / 2)
  return (
    <ol className="s-flow ob-object" aria-label={label} style={{ ['--s-flow-n' as string]: nodes.length }}>
      {nodes.map((n, i) => (
        <li key={n.label} className={'s-flow__stop' + (i === mid ? ' is-obsession' : '')}>
          {i > 0 && <Arrow />}
          <p className="s-flow__label">
            {i === mid && n.label === 'Obsession' && <StatusMark state="working" size={14} />}
            {n.label}
          </p>
          <p className="s-flow__title">{n.title}</p>
          <ul className="s-flow__items">
            {n.items.map((it) =>
              it.endsWith(NEW) ? (
                <li key={it} className="is-new">
                  {it.slice(0, -NEW.length)}
                  <span className="ob-tag s-flow__new">New</span>
                </li>
              ) : (
                <li key={it}>{it}</li>
              ),
            )}
          </ul>
          <p className="s-flow__foot">{n.foot}</p>
        </li>
      ))}
    </ol>
  )
}
