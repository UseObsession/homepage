import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, recipeGroups, type NavPage } from '../content/nav'
import type { Cta } from '../content/types'
import { Lockup } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import './Nav.css'

/* The site navigation, on the design system's .ob-nav, .ob-menu and .ob-mnav (docs/REBUILD.md, section 7).
   Desktop: 3 disclosure menus (Solutions, Recipes, Use cases) that open on click and keys, plus 2 links, the theme
   switch and the page's call to action. Phone: a sheet with the same groups, focus held inside it and the page behind it locked.
   The menus are disclosures (a button with aria-expanded and a list of links), not ARIA menus. */

type MenuId = 'solutions' | 'recipes' | 'usecases'
/* The menus whose rows carry a name and a line. */
type RichId = Exclude<MenuId, 'recipes'>
type Focus = 'first' | 'last' | null

const groupByName = new Map(recipeGroups.map((g) => [g.name, g]))
const solutionPaths = new Set<string>(nav.solutions.items.map((i) => i.to))
const useCasePaths = new Set<string>(nav.useCases.items.map((i) => i.to))

/* Keeps a closing surface on screen long enough for its leave animation (.is-leaving). */
function usePresence(open: boolean, ms: number) {
  const [leaving, setLeaving] = useState(false)
  const was = useRef(open)
  useEffect(() => {
    const closing = was.current && !open
    was.current = open
    if (!closing) {
      setLeaving(false)
      return
    }
    setLeaving(true)
    const t = window.setTimeout(() => setLeaving(false), ms)
    return () => window.clearTimeout(t)
  }, [open, ms])
  return { present: open || leaving, leaving: !open && leaving }
}

/* At the very top the bar has no fill and no rule; once the page moves under it, it blurs (.ob-nav.is-top). The server
   renders the filled bar, the safe state. */
function onScroll(cb: () => void) {
  window.addEventListener('scroll', cb, { passive: true })
  return () => window.removeEventListener('scroll', cb)
}
const atTop = () => window.scrollY < 8
const filled = () => false

function links(el: HTMLElement | null) {
  return el ? Array.from(el.querySelectorAll<HTMLElement>('a[href]')) : []
}

/* Everything in the nav that can take focus and is on screen, in order. The bar's call to action is only hidden
   (visibility) while the sheet is open, so visibility counts too. */
function shown(n: HTMLElement) {
  if (typeof n.checkVisibility === 'function') return n.checkVisibility({ visibilityProperty: true })
  return n.getClientRects().length > 0 && getComputedStyle(n).visibility !== 'hidden'
}
function focusables(el: HTMLElement | null) {
  if (!el) return []
  return Array.from(el.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(
    (n) => shown(n) && !n.closest('[hidden], .ob-anim-expand:not(.is-open)'),
  )
}

/* The page's form for an in-page call to action: its own anchor, else the page's #join, else its first form. */
function formFor(hash: string) {
  const id = hash.slice(1)
  return (id && document.getElementById(id)) || document.getElementById('join') || document.querySelector<HTMLElement>('.s-capture')
}

function Chevron() {
  return (
    <svg className="ob-navicon ob-navicon--sm ob-anim-turn s-nav__chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M4.5 6.25 8 9.75l3.5-3.5" />
    </svg>
  )
}

function Arrow() {
  return (
    <svg className="ob-navicon ob-navicon--sm s-menu__arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3.5 8h9M9 4.5 12.5 8 9 11.5" />
    </svg>
  )
}

/* A call to action is an in-page anchor (#join) or a route. An anchor the page doesn't have falls back to the page's
   form, so the button always lands somewhere. From the keyboard it also puts focus in the form's first field. */
function CtaLink({ cta, className, onClick, children }: { cta: Cta; className: string; onClick?: () => void; children?: ReactNode }) {
  const inner = children ?? <span className="ob-btn-label">{cta.label}</span>
  if (cta.to.startsWith('/'))
    return (
      <Link className={className} to={cta.to} onClick={onClick}>
        {inner}
      </Link>
    )

  function go(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.()
    const target = formFor(cta.to)
    if (!target) return
    if (target.id !== cta.to.slice(1)) {
      e.preventDefault()
      target.scrollIntoView({ block: 'start' })
    }
    if (e.detail !== 0) return
    /* Wait for the sheet to close and the page to leave inert before moving focus. */
    requestAnimationFrame(() =>
      requestAnimationFrame(() => target.querySelector<HTMLElement>('input:not([type="hidden"]):not([tabindex="-1"])')?.focus({ preventScroll: true })),
    )
  }

  return (
    <a className={className} href={cta.to} onClick={go}>
      {inner}
    </a>
  )
}

export function Nav({ cta = nav.cta }: { cta?: Cta }) {
  const uid = useId()
  const { pathname, hash } = useLocation()
  const navRef = useRef<HTMLElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)
  const triggers = useRef<Record<MenuId, HTMLButtonElement | null>>({ solutions: null, recipes: null, usecases: null })
  const panels = useRef<Record<MenuId, HTMLDivElement | null>>({ solutions: null, recipes: null, usecases: null })

  /* What is open belongs to the page it was opened on, so a new page (or a jump to #join) closes everything. */
  const here = pathname + hash
  /* The prerendered pages can be served with a trailing slash (/agencies/). */
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname

  /* How much room the call to action needs (Nav.css): a longer label hides sooner on phones and keeps the compact bar
     to a wider width (950px, 990px, 1080px), so the links stay centred. */
  const ctaSize = cta.label.length > 22 ? 'l' : cta.label.length > 17 ? 'm' : ''
  const compactBelow = ctaSize === 'l' ? 1080 : ctaSize === 'm' ? 990 : 950
  const [menuAt, setMenuAt] = useState<{ id: MenuId; at: string } | null>(null)
  const [sheetAt, setSheetAt] = useState<string | null>(null)
  const menu = menuAt && menuAt.at === here ? menuAt.id : null
  const sheet = sheetAt === here
  const setMenu = (id: MenuId | null) => setMenuAt(id ? { id, at: here } : null)
  const setSheet = (open: boolean) => setSheetAt(open ? here : null)

  const focus = useRef<Focus>(null)
  const [group, setGroup] = useState<MenuId | null>(null)
  const top = useSyncExternalStore(onScroll, atTop, filled)

  const solutions = usePresence(menu === 'solutions', 160)
  const recipes = usePresence(menu === 'recipes', 160)
  const usecases = usePresence(menu === 'usecases', 160)
  const presence = { solutions, usecases }
  const sheetPresence = usePresence(sheet, 260)

  const ids = {
    solutions: `${uid}-solutions`,
    recipes: `${uid}-recipes`,
    usecases: `${uid}-usecases`,
    sheet: `${uid}-sheet`,
    ms: `${uid}-ms`,
    mr: `${uid}-mr`,
    mu: `${uid}-mu`,
  }

  /* An open menu moves focus in when it was opened from the keyboard. */
  useEffect(() => {
    const want = focus.current
    focus.current = null
    if (!menu || !want) return
    const list = links(panels.current[menu])
    ;(want === 'first' ? list[0] : list[list.length - 1])?.focus()
  }, [menu])

  /* A press anywhere outside the open menu closes it. */
  useEffect(() => {
    if (!menu) return
    const onDown = (e: PointerEvent) => {
      const li = triggers.current[menu]?.parentElement
      if (li && !li.contains(e.target as Node)) setMenuAt(null)
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [menu])

  /* The phone sheet: the page behind is locked and inert, focus stays in the nav, Escape closes it. */
  useEffect(() => {
    if (!sheet) return
    const navEl = navRef.current
    const html = document.documentElement
    const overflow = html.style.overflow
    html.style.overflow = 'hidden'
    const others = navEl?.parentElement ? Array.from(navEl.parentElement.children).filter((n) => n !== navEl) : []
    others.forEach((n) => n.setAttribute('inert', ''))
    const raf = requestAnimationFrame(() => focusables(sheetRef.current)[0]?.focus())

    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setSheetAt(null)
        menuBtnRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const list = focusables(navEl)
      if (!list.length) return
      const first = list[0]
      const last = list[list.length - 1]
      const active = document.activeElement as HTMLElement | null
      if (e.shiftKey && (active === first || !navEl?.contains(active))) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && (active === last || !navEl?.contains(active))) {
        e.preventDefault()
        first.focus()
      }
    }
    /* The sheet belongs to the phone layout: widening past it closes the sheet. */
    const wide = window.matchMedia(`(min-width: ${compactBelow}px)`)
    const onWide = () => wide.matches && setSheetAt(null)
    document.addEventListener('keydown', onKey)
    wide.addEventListener('change', onWide)
    return () => {
      cancelAnimationFrame(raf)
      html.style.overflow = overflow
      others.forEach((n) => n.removeAttribute('inert'))
      document.removeEventListener('keydown', onKey)
      wide.removeEventListener('change', onWide)
    }
  }, [sheet, compactBelow])

  function toggle(id: MenuId) {
    focus.current = null
    setMenuAt((m) => (m && m.at === here && m.id === id ? null : { id, at: here }))
  }

  function onTriggerKey(e: KeyboardEvent<HTMLButtonElement>, id: MenuId) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      focus.current = e.key === 'ArrowDown' ? 'first' : 'last'
      if (menu === id) {
        const list = links(panels.current[id])
        ;(focus.current === 'first' ? list[0] : list[list.length - 1])?.focus()
        focus.current = null
      } else setMenu(id)
    } else if (e.key === 'Escape' && menu === id) {
      e.preventDefault()
      setMenu(null)
    }
  }

  /* Arrow keys move through the links; left and right jump between the recipe columns. */
  function onPanelKey(e: KeyboardEvent<HTMLDivElement>, id: MenuId) {
    const panel = e.currentTarget
    const list = links(panel)
    const i = list.indexOf(document.activeElement as HTMLElement)
    const go = (n: number) => {
      e.preventDefault()
      list[(n + list.length) % list.length]?.focus()
    }
    switch (e.key) {
      case 'ArrowDown':
        return go(i + 1)
      case 'ArrowUp':
        return go(i < 0 ? -1 : i - 1)
      case 'Home':
        return go(0)
      case 'End':
        return go(-1)
      case 'ArrowRight':
      case 'ArrowLeft': {
        const cols = Array.from(panel.querySelectorAll<HTMLElement>('[data-col]'))
        if (!cols.length) return
        const c = cols.findIndex((col) => col.contains(document.activeElement))
        const next = cols[(c + (e.key === 'ArrowRight' ? 1 : -1) + cols.length) % cols.length]
        e.preventDefault()
        links(next)[0]?.focus()
        return
      }
      case 'Escape':
        e.preventDefault()
        setMenu(null)
        triggers.current[id]?.focus()
    }
  }

  /* Tabbing out of a menu closes it. A click on the menu's own padding moves focus nowhere, so it keeps it open. */
  function onItemBlur(e: FocusEvent<HTMLLIElement>) {
    const next = e.relatedTarget as Node | null
    if (next && !e.currentTarget.contains(next)) setMenu(null)
  }

  const close = () => {
    setMenu(null)
    setSheet(false)
  }

  const trigger = (id: MenuId, label: string, current: boolean) => (
    <button
      ref={(el) => {
        triggers.current[id] = el
      }}
      type="button"
      className={`ob-nav__link s-nav__trigger${current ? ' is-selected' : ''}`}
      aria-expanded={menu === id}
      aria-controls={ids[id]}
      onClick={() => toggle(id)}
      onKeyDown={(e) => onTriggerKey(e, id)}
    >
      {label}
      <Chevron />
    </button>
  )

  /* A menu of pages, each row a name and 1 line (Solutions, Use cases). */
  const richMenu = (id: RichId, label: string, items: NavPage[], current: boolean) => (
    <li className="s-nav__item" onBlur={onItemBlur}>
      {trigger(id, label, current)}
      <div
        ref={(el) => {
          panels.current[id] = el
        }}
        id={ids[id]}
        className={`ob-menu s-menu s-menu--rich ob-anim-pop${presence[id].leaving ? ' is-leaving' : ''}`}
        hidden={!presence[id].present}
        onKeyDown={(e) => onPanelKey(e, id)}
      >
        <ul className="s-menu__list">
          {items.map((i) => (
            <li key={i.to}>
              <NavLink className="ob-menu__item s-menu__item s-menu__item--rich" to={i.to} onClick={close}>
                <span className="s-menu__name">{i.label}</span>
                <span className="s-menu__line">{i.line}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )

  /* The same pages in the phone sheet, as a disclosure group. */
  const richGroup = (id: RichId, panelId: string, label: string, items: NavPage[]) => (
    <li>
      <button
        type="button"
        className="ob-mnav__link s-mnav__toggle"
        aria-expanded={group === id}
        aria-controls={panelId}
        onClick={() => setGroup((g) => (g === id ? null : id))}
      >
        {label}
        <Chevron />
      </button>
      <div id={panelId} className={`ob-anim-expand s-mnav__more${group === id ? ' is-open' : ''}`}>
        <div>
          <ul className="s-mnav__sub">
            {items.map((i) => (
              <li key={i.to}>
                <NavLink className="ob-mnav__link s-mnav__item s-mnav__item--rich" to={i.to} onClick={close}>
                  <span className="s-menu__name">{i.label}</span>
                  <span className="s-menu__line">{i.line}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )

  return (
    <nav
      ref={navRef}
      className={`ob-nav s-nav${top && !sheet ? ' is-top' : ''}${ctaSize ? ` s-nav--cta-${ctaSize}` : ''}`}
      aria-label={nav.label}
    >
      <div className="ob-nav__in s-nav__in">
        <Link className="ob-nav__brand ob-brand-link s-nav__brand" to="/" aria-label={nav.home} onClick={close}>
          <Lockup height={20} />
        </Link>

        <ul className="ob-nav__links s-nav__links">
          {richMenu('solutions', nav.solutions.label, nav.solutions.items, solutionPaths.has(path))}

          <li className="s-nav__item" onBlur={onItemBlur}>
            {trigger('recipes', nav.recipes.label, path === '/recipes' || path.startsWith('/recipes/'))}
            <div
              ref={(el) => {
                panels.current.recipes = el
              }}
              id={ids.recipes}
              className={`ob-menu s-menu s-menu--recipes ob-anim-pop is-large${recipes.leaving ? ' is-leaving' : ''}`}
              hidden={!recipes.present}
              onKeyDown={(e) => onPanelKey(e, 'recipes')}
            >
              <div className="s-menu__cols">
                {nav.recipes.columns.map((col) => (
                  <div className="s-menu__col" data-col key={col.join()}>
                    {col.map((name) => {
                      const g = groupByName.get(name)
                      if (!g) return null
                      const gid = `${ids.recipes}-${g.name.replace(/\W+/g, '-').toLowerCase()}`
                      return (
                        <div className="s-menu__group" key={g.name}>
                          <p className="s-menu__label" id={gid}>
                            {g.name}
                          </p>
                          <ul className="s-menu__list" aria-labelledby={gid}>
                            {g.items.map((r) => (
                              <li key={r.id}>
                                <NavLink className="ob-menu__item s-menu__item" to={r.to} onClick={close}>
                                  {r.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
              <hr className="ob-menu__sep" />
              <NavLink className="ob-menu__item s-menu__item s-menu__all" to={nav.recipes.all.to} end onClick={close}>
                {nav.recipes.all.label}
                <Arrow />
              </NavLink>
            </div>
          </li>

          {richMenu('usecases', nav.useCases.label, nav.useCases.items, useCasePaths.has(path))}

          {nav.links.map((l) => (
            <li key={l.to}>
              <NavLink className="ob-nav__link" to={l.to} onClick={close}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="ob-nav__end">
          <ThemeToggle className="s-nav__theme" />
          <CtaLink cta={cta} className="ob-btn ob-btn--sm ob-nav__cta" onClick={close} />
          <button
            ref={menuBtnRef}
            type="button"
            className="ob-btn ob-btn--ghost ob-btn--icon ob-nav__menu"
            aria-label={sheet ? nav.menu.close : nav.menu.open}
            aria-expanded={sheet}
            aria-controls={ids.sheet}
            onClick={() => {
              setMenu(null)
              setSheetAt((s) => (s === here ? null : here))
            }}
          >
            <span className="ob-navbtn__bars" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <div
        ref={sheetRef}
        id={ids.sheet}
        className={`ob-mnav s-mnav ob-anim-sheet${sheetPresence.leaving ? ' is-leaving' : ''}`}
        hidden={!sheetPresence.present}
        aria-label={nav.menu.sheet}
        role="region"
      >
        <ul className="ob-mnav__list">
          {richGroup('solutions', ids.ms, nav.solutions.label, nav.solutions.items)}
          <li>
            <button
              type="button"
              className="ob-mnav__link s-mnav__toggle"
              aria-expanded={group === 'recipes'}
              aria-controls={ids.mr}
              onClick={() => setGroup((g) => (g === 'recipes' ? null : 'recipes'))}
            >
              {nav.recipes.label}
              <Chevron />
            </button>
            <div id={ids.mr} className={`ob-anim-expand s-mnav__more${group === 'recipes' ? ' is-open' : ''}`}>
              <div>
                {recipeGroups.map((g) => {
                  const gid = `${ids.mr}-${g.name.replace(/\W+/g, '-').toLowerCase()}`
                  return (
                    <div className="s-mnav__group" key={g.name}>
                      <p className="s-menu__label" id={gid}>
                        {g.name}
                      </p>
                      <ul className="s-mnav__sub" aria-labelledby={gid}>
                        {g.items.map((r) => (
                          <li key={r.id}>
                            <NavLink className="ob-mnav__link s-mnav__item" to={r.to} onClick={close}>
                              {r.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
                <NavLink className="ob-mnav__link s-mnav__item s-mnav__all" to={nav.recipes.all.to} end onClick={close}>
                  {nav.recipes.all.label}
                  <Arrow />
                </NavLink>
              </div>
            </div>
          </li>
          {richGroup('usecases', ids.mu, nav.useCases.label, nav.useCases.items)}
          {nav.links.map((l) => (
            <li key={l.to}>
              <NavLink className="ob-mnav__link" to={l.to} onClick={close}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="ob-mnav__foot">
          <div className="ob-mnav__row">
            <span>{nav.theme.row}</span>
            <ThemeToggle />
          </div>
          <CtaLink cta={cta} className="ob-btn ob-btn--lg ob-btn--block" onClick={close} />
        </div>
      </div>
    </nav>
  )
}
