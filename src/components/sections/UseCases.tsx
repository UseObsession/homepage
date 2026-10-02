import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import type { Recipe, RecipeId, Uses } from '../../content/types'
import { AppScreen, type Workspace } from '../AppScreen'
import './UseCases.css'

/* A numeral never ends a line apart from its word ("0 reminders", "48 hours"). */
const tie = (s: string) => s.replace(/(\d) /g, '$1\u00a0')

/* Each use case links the recipe it runs on, read from its own file (src/content/recipes/*.ts). */
const FILES = import.meta.glob('../../content/recipes/*.ts', { eager: true, import: 'recipe' }) as Record<string, Recipe>
const RECIPES = Object.fromEntries(Object.values(FILES).map((r) => [r.id, r])) as Record<RecipeId, Recipe>

/* The browser measures; the server never does. */
const useMeasure = typeof window === 'undefined' ? useEffect : useLayoutEffect
const reduced = () => typeof window !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

/* A tab row on navigation.css .ob-utabs (fit): 1 bar under the chosen tab that travels to the next one in 240ms
   (motion.css .ob-anim-indicator). Before the script runs, the chosen tab draws its own bar.
   - Arrows, Home and End move between tabs; the choice follows focus (WAI-ARIA tabs, automatic activation).
   - The row scrolls sideways when it runs out of room, keeps the chosen tab in view, and fades the edge that has more.
   - Picking a tab is the only thing that changes it: nothing advances on its own. */
export function TabRail({
  base,
  labelledBy,
  tabs,
  index,
  onPick,
}: {
  base: string
  /* The id of the heading that names the tabs. */
  labelledBy: string
  tabs: string[]
  index: number
  onPick: (i: number) => void
}) {
  const list = useRef<HTMLDivElement>(null)
  const [bar, setBar] = useState<{ x: number; w: number; instant: boolean } | null>(null)
  const [edge, setEdge] = useState({ scrollable: false, start: true, end: true })

  const place = useCallback(
    (instant: boolean) => {
      const tab = list.current?.querySelectorAll<HTMLElement>('[role="tab"]')[index]
      if (!tab) return
      const pad = parseFloat(getComputedStyle(tab).paddingLeft) || 12
      setBar({ x: tab.offsetLeft + pad, w: Math.max(0, tab.offsetWidth - pad * 2), instant })
    },
    [index],
  )

  /* First paint places the bar instantly; a pick slides it. */
  const placed = useRef(false)
  useMeasure(() => {
    place(!placed.current)
    placed.current = true
  }, [place])

  /* Resizes and the web font arriving re-measure instantly, for whichever tab is chosen by then. */
  const latest = useRef(place)
  useEffect(() => {
    latest.current = place
  }, [place])

  useEffect(() => {
    const el = list.current
    if (!el) return
    const sync = () => {
      const max = el.scrollWidth - el.clientWidth
      const next = { scrollable: max > 1, start: el.scrollLeft <= 1, end: el.scrollLeft >= max - 1 }
      setEdge((e) => (e.scrollable === next.scrollable && e.start === next.start && e.end === next.end ? e : next))
    }
    let seen = false
    const ro = new ResizeObserver(() => {
      sync()
      /* The observer reports once as it starts; the bar is already placed by then. */
      if (seen) latest.current(true)
      seen = true
    })
    ro.observe(el)
    el.addEventListener('scroll', sync, { passive: true })
    let live = true
    document.fonts?.ready.then(() => live && latest.current(true))
    sync()
    return () => {
      live = false
      ro.disconnect()
      el.removeEventListener('scroll', sync)
    }
  }, [])

  /* After an instant placement, the next move slides again. */
  useEffect(() => {
    if (!bar?.instant) return
    let id = requestAnimationFrame(() => {
      id = requestAnimationFrame(() => setBar((b) => (b ? { ...b, instant: false } : b)))
    })
    return () => cancelAnimationFrame(id)
  }, [bar])

  function keepInView(i: number) {
    const el = list.current
    const tab = el?.querySelectorAll<HTMLElement>('[role="tab"]')[i]
    if (!el || !tab) return
    const rr = el.getBoundingClientRect()
    const tr = tab.getBoundingClientRect()
    const pad = 24
    let d = 0
    if (tr.left - pad < rr.left) d = tr.left - pad - rr.left
    else if (tr.right + pad > rr.right) d = tr.right + pad - rr.right
    if (d) el.scrollBy({ left: d, behavior: reduced() ? 'auto' : 'smooth' })
  }

  function pick(i: number, focus: boolean) {
    onPick(i)
    keepInView(i)
    if (focus) list.current?.querySelectorAll<HTMLElement>('[role="tab"]')[i]?.focus({ preventScroll: true })
  }

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    const n = tabs.length
    const next =
      e.key === 'ArrowRight' ? (index + 1) % n : e.key === 'ArrowLeft' ? (index - 1 + n) % n : e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : -1
    if (next < 0) return
    e.preventDefault()
    pick(next, true)
  }

  const cls = ['ob-utabs', 's-rail__list', edge.scrollable && 'is-scrollable', edge.start && 'is-scroll-start', edge.end && 'is-scroll-end']
  return (
    <div className="s-rail">
      <div ref={list} className={cls.filter(Boolean).join(' ')} role="tablist" aria-labelledby={labelledBy} onKeyDown={onKey}>
        {tabs.map((t, i) => (
          <button
            key={t}
            className="ob-utab"
            type="button"
            role="tab"
            id={`${base}-tab-${i}`}
            aria-selected={i === index}
            aria-controls={`${base}-panel-${i}`}
            tabIndex={i === index ? 0 : -1}
            onClick={() => pick(i, false)}
          >
            {t}
          </button>
        ))}
        {bar && (
          <span
            className={'ob-utabs__indicator ob-anim-indicator' + (bar.instant ? ' is-instant' : '')}
            style={{ '--ob-x': `${bar.x}px`, '--ob-w': String(bar.w) } as CSSProperties}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  )
}

/* Use cases (docs/REBUILD.md, story beat 4): a tab per moment in the reader's week. Each panel holds the moment, the
   outcome as its heading, what the agents do, why only agents can, the recipe it runs on, and its own app screen,
   which plays its story when the tab is picked. Every panel is in the page's HTML. Side by side, the ones not chosen
   keep their place in the grid but stay hidden, so the section never changes height between tabs; stacked on a phone,
   only the chosen one takes room. */
export function UseCases({
  uses,
  workspace = 'company',
  initial = 0,
  id = 'uses',
  className = '',
}: {
  uses: Uses
  workspace?: Workspace
  initial?: number
  id?: string
  className?: string
}) {
  const base = useId().replace(/[^a-zA-Z0-9_-]/g, '') + id
  const [index, setIndex] = useState(initial)
  /* How many times the reader has picked a tab: the chosen screen replays on each pick, and panels only rise in once
     the reader is choosing (nothing moves on load). */
  const [picks, setPicks] = useState(0)

  if (!uses.items.length) return null

  return (
    <section className={`s-section s-uses ${className}`} id={id} aria-labelledby={`${base}-h`}>
      <div className="s-wrap">
        <div className="s-head s-head--wide">
          <h2 className="ob-type-h2" id={`${base}-h`}>
            {tie(uses.heading)}
          </h2>
        </div>

        <TabRail
          base={base}
          labelledBy={`${base}-h`}
          tabs={uses.items.map((u) => u.tab)}
          index={index}
          onPick={(i) => {
            setIndex(i)
            setPicks((p) => p + 1)
          }}
        />

        <div className="s-uses__panels">
          {uses.items.map((u, i) => {
            const on = i === index
            const recipe = u.recipe === 'task' ? undefined : RECIPES[u.recipe]
            return (
              <div
                key={u.tab}
                className={'s-uses__panel' + (on && picks > 0 ? ' ob-anim-rise' : '')}
                role="tabpanel"
                id={`${base}-panel-${i}`}
                aria-labelledby={`${base}-tab-${i}`}
                hidden={!on}
                tabIndex={on && !recipe ? 0 : undefined}
              >
                <div className="s-uses__copy">
                  <p className="s-uses__moment">{tie(u.moment)}</p>
                  <h3 className="s-uses__outcome">{tie(u.outcome)}</h3>
                  <p className="s-uses__line">{tie(u.line)}</p>
                  <p className="s-uses__why">{tie(u.whyOnly)}</p>
                  {recipe && (
                    <Link className="ob-btn ob-btn--secondary ob-btn--sm s-uses__recipe" to={`/recipes/${recipe.slug}`}>
                      <span className="ob-btn-label">{recipe.name}</span>
                      <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </Link>
                  )}
                </div>
                <div className="s-uses__screen">
                  <AppScreen name={u.screen} workspace={workspace} playKey={on && picks > 0 ? picks : undefined} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
