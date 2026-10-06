import { useEffect, useId, useRef, useState, type CSSProperties, type FocusEvent, type KeyboardEvent, type PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { catalog } from '../../content/catalog'
import type { HeroScreen } from '../../content/types'
import { RM, useReducedMotion, useTabRail } from '../../hooks/useConsole'
import { AppScreen, type Workspace } from '../AppScreen'
import { hasScreen } from '../screenList'
import './ScreenTabs.css'

/* Home's hero console (Seun, 3 Oct): a tab per kind of work, each a full app screen that plays its story when its tab
   is chosen (components/AppScreen, playKey).
   - The tabs are the hero's scenario row (Console's .ob-ptabs rail), named by the typed heading above them.
   - Under the screen: the Example tag, 1 line on what it shows, and the recipe it runs on (or, for a tab that is a whole
     way in, its own page: the AI agent checks link /verify).
   - It moves through the tabs by itself, calmly, once, then rests on the last. Each tab stays for its screen's story
     plus time to read the finished scene, shown by the design system's autoplay bar in the chosen tab (motion.css
     .ob-anim-bar: it advances on the bar's animationend, so pausing the bar pauses the timer). Hover, keyboard focus,
     off screen or a hidden tab hold it; a click, a key or the pause button stops it for good.
   - A tab whose screen has not landed in src/screens/html yet is left out on the server and in the browser alike.
   - The camera films each screen's story (components/camera.ts): it pans and zooms to each beat, here only.
   - Every screen is in the page at once, stacked in 1 cell (only the chosen one shown and playing), so the console is
     as tall as its tallest panel and nothing below it moves when the tab changes. The prerendered HTML is the first
     screen, finished. Reduced motion keeps every screen finished and never advances. */

const UI = {
  example: 'Example',
  recipe: 'See the recipe',
  pause: 'Pause the example screens',
}

/* Time to read a finished scene before the next tab, and the bounds on a whole stay (motion.css --ob-autoplay-dwell
   is the floor). */
const READ_MS = 4000
const DWELL_MAX = 16000
const DWELL_FALLBACK = 7000

/* How long a screen's story runs once it plays: the latest end among its finite animations (the screens' spinners
   loop and are left out). */
function storyMs(il: Element | null | undefined): number {
  if (!il || typeof (il as HTMLElement).getAnimations !== 'function') return 0
  let end = 0
  for (const a of (il as HTMLElement).getAnimations({ subtree: true })) {
    const e = Number(a.effect?.getComputedTiming().endTime)
    if (Number.isFinite(e)) end = Math.max(end, e)
  }
  return end
}

export function ScreenTabs({ screens, labelledBy, workspace }: { screens: HeroScreen[]; labelledBy: string; workspace: Workspace }) {
  const tabs = screens.filter((s) => hasScreen(s.screen))
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const rootRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const [active, setActive] = useState(0)
  /* The story playing: which tab, and a key bumped for every play so its screen replays (AppScreen's playKey). */
  const [play, setPlay] = useState<{ i: number; key: number } | null>(null)
  const [dwell, setDwell] = useState(0)
  /* The tabs advance by themselves until the reader stops them, never with reduced motion. */
  const [autoOn, setAuto] = useState(true)
  const [seen, setSeen] = useState(false)
  const [away, setAway] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const reduced = useReducedMotion()
  const { railRef, railClass } = useTabRail(active)
  const last = tabs.length - 1
  const auto = autoOn && !reduced && tabs.length > 1

  /* Opens a tab and plays its screen's story (finished at once with reduced motion: AppScreen skips the replay). A
     reader's choice stops the tabs advancing for good. */
  function open(i: number, byReader: boolean) {
    if (byReader) setAuto(false)
    setActive(i)
    setDwell(0)
    setPlay((p) => ({ i, key: (p?.key ?? 0) + 1 }))
  }

  /* The tabs wait while the console is off screen or the browser tab is hidden. The first time the reader reaches the
     console, the first screen plays, and the bar starts with it (unless the reader has already chosen a tab). */
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        setSeen(e.isIntersecting)
        if (e.isIntersecting && !matchMedia(RM).matches) setPlay((p) => p ?? { i: 0, key: 1 })
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    const vis = () => setAway(document.hidden)
    document.addEventListener('visibilitychange', vis)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', vis)
    }
  }, [])

  /* Once a story starts, its tab stays for the story plus time to read it. AppScreen has replayed it by now (a child's
     effect runs first), so its animations are there to measure. */
  useEffect(() => {
    if (!play) return
    const il = stageRef.current?.children[play.i]?.querySelector('.il')
    const css = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--ob-autoplay-dwell'))
    const floor = Number.isFinite(css) && css > 0 ? css : DWELL_FALLBACK
    setDwell(Math.min(DWELL_MAX, Math.max(floor, storyMs(il) + READ_MS)))
  }, [play])

  function next() {
    if (active < last) open(active + 1, false)
    else setAuto(false)
  }

  /* Pause stops the tabs for good. Play starts them again from here (from the first tab, once the last has had its
     turn), replaying the chosen screen. */
  function togglePause() {
    if (auto) return setAuto(false)
    setAuto(true)
    open(play && active === last && play.i === last ? 0 : active, false)
  }

  /* Roving focus: arrows, Home and End move along the tabs and open each one (the reader chose it). */
  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    let i = -1
    if (e.key === 'ArrowRight') i = active === last ? 0 : active + 1
    else if (e.key === 'ArrowLeft') i = active === 0 ? last : active - 1
    else if (e.key === 'Home') i = 0
    else if (e.key === 'End') i = last
    if (i < 0) return
    e.preventDefault()
    open(i, true)
    tabRefs.current[i]?.focus()
  }

  const onPointerEnter = (e: PointerEvent) => e.pointerType === 'mouse' && setHovered(true)
  const onPointerLeave = () => setHovered(false)
  /* Keyboard focus on a tab or a screen holds the tabs; a click, or focus on the pause button, does not. */
  const onFocus = (e: FocusEvent) => {
    const t = e.target as HTMLElement
    setFocused(t.matches(':focus-visible') && !t.closest('.s-shots-pause'))
  }
  const onBlur = (e: FocusEvent) => {
    if (!rootRef.current?.contains(e.relatedTarget as Node | null)) setFocused(false)
  }

  if (!tabs.length) return null
  const running = auto && dwell > 0 && play?.i === active
  const held = hovered || focused || !seen || away

  return (
    <div
      className="s-shots s-stage ob-object"
      ref={rootRef}
      style={{ '--s-console-count': tabs.length } as CSSProperties}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {tabs.length > 1 && (
        <div className={railClass} role="tablist" aria-labelledby={labelledBy} ref={railRef} onKeyDown={onKey}>
          {tabs.map((t, i) => (
            <button
              key={t.screen}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${i}`}
              className="ob-ptab s-console-tab s-shots-tab"
              aria-selected={i === active}
              aria-controls={`${uid}-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => open(i, true)}
            >
              {t.tab}
              {i === active && running && (
                <i
                  key={play?.key}
                  className={'ob-anim-bar s-shots-bar is-running' + (held ? ' is-paused' : '')}
                  style={{ '--ob-autoplay-dwell': `${dwell}ms` } as CSSProperties}
                  onAnimationEnd={next}
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </div>
      )}

      <div className="s-shots-stage">
        <div className="s-shots-panels" ref={stageRef}>
          {tabs.map((t, i) => {
            const on = i === active
            const recipe = t.recipe ? catalog.recipes.find((r) => r.id === t.recipe) : undefined
            /* Where the tab leads: its own page, else its recipe. The tab's name or the recipe's completes the label
               for screen readers. */
            const go = t.link
              ? { to: t.link.to, label: t.link.label, name: t.tab }
              : recipe && { to: `/recipes/${recipe.slug}`, label: UI.recipe, name: recipe.name }
            return (
              <div
                key={t.screen}
                className={'s-shots-panel' + (on ? ' is-active' : '')}
                id={`${uid}-panel-${i}`}
                role={tabs.length > 1 ? 'tabpanel' : 'group'}
                aria-labelledby={tabs.length > 1 ? `${uid}-tab-${i}` : labelledBy}
                inert={!on}
              >
                <AppScreen name={t.screen} workspace={workspace} note="" playKey={play?.i === i ? play.key : undefined} className="s-shots-screen" camera />
                <div className="s-shots-foot">
                  <p className="s-shots-line">
                    <span className="ob-tag s-shots-tag">{UI.example}</span>
                    <span>{t.line}</span>
                  </p>
                  {go && (
                    <Link className="ob-btn ob-btn--link s-shots-link" to={go.to}>
                      <span className="ob-btn-label">
                        {go.label}
                        <span className="ob-sr">: {go.name}</span>
                      </span>
                      <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                        <path d="M3.5 8h9M9 4.5 12.5 8 9 11.5" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {tabs.length > 1 && !reduced && (
          <button type="button" className="ob-navbtn s-shots-pause" aria-label={UI.pause} aria-pressed={!auto} onClick={togglePause}>
            <svg className="ob-navicon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              {auto ? <path d="M6 4v8M10 4v8" /> : <path d="M5.5 3.75v8.5L12.25 8Z" strokeLinejoin="round" />}
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
