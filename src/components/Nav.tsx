import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
  type RefObject,
} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, recipeJobs, type NavCard, type NavReader } from '../content/nav'
import type { Cta } from '../content/types'
import { Lockup, Mark } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import './Nav.css'

/* The site navigation, on the design system's .ob-nav, .ob-menu and .ob-mnav (docs/REBUILD.md, section 7; the spec is
   _research/nav/NAV.md in the workspace).
   Bar: the lockup; the 5 readers as plain links (self selection first); Recipes and Resources, each a link to its page
   plus a chevron button that opens its menu; the theme switch; the page's 1 call to action. Where the bar is too narrow
   for the 5 readers, they fold into 1 "For" menu; under 860px the menu button opens the phone sheet.
   The menus are disclosures (a button with aria-expanded and aria-controls over a panel of links), not ARIA menus. They
   open on click and keys, and on a fine pointer also on hover after a short pause; Escape closes and returns focus.
   The sheet starts with "Who are you?", holds focus inside the nav and locks the page behind it. */

type MenuId = 'for' | 'recipes' | 'resources'
type Focus = 'first' | 'last' | null

/* The sheet and the folded menu belong to these widths of the bar (Nav.css). */
const COMPACT_BELOW = 860
/* Hover opens a menu after this pause, and a menu opened by hover closes this long after the pointer leaves it. */
const HOVER_OPEN = 140
const HOVER_CLOSE = 220

const readerPaths = new Set<string>(nav.readers.map((r) => r.to))
const isRecipe = (path: string) => path === nav.recipes.to || path.startsWith(`${nav.recipes.to}/`)
/* The pages under Resources: the hub, the use cases, the sample output, and the blog while it has posts. */
const isResource = (path: string) =>
  path === nav.resources.to ||
  path === nav.resources.useCases.to ||
  path.startsWith(`${nav.resources.useCases.to}/`) ||
  path === nav.resources.run.to ||
  path === '/blog' ||
  path.startsWith('/blog/')

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

/* The ground under the bar (styles/tones.css). Over a section that flips the page's theme (an ink chapter or the ink
   footer on paper, the paper break on ink), the bar takes that section's scope, so it reads as that ground's own bar
   and never as a grey band of frosted paper over ink, or of ink over paper. The bar's middle line decides. */
type Ground = 'dark' | 'light' | null
const FLIPPED = '#main [data-tone="ink"], #main [data-tone="paper"], .s-foot'
function groundUnder(bar: HTMLElement): Ground {
  const page: Ground = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
  const line = bar.getBoundingClientRect().top + bar.offsetHeight / 2
  for (const el of document.querySelectorAll<HTMLElement>(FLIPPED)) {
    const r = el.getBoundingClientRect()
    if (r.top > line || r.bottom <= line) continue
    const own: Ground = el.classList.contains('ob-theme-dark') ? 'dark' : 'light'
    return own === page ? null : own
  }
  return null
}
function useGround(navRef: RefObject<HTMLElement | null>, path: string) {
  const [ground, setGround] = useState<Ground>(null)
  useEffect(() => {
    /* A handful of rectangles per scroll event: cheap enough to read straight away, so the bar changes with the
       ground under it on the same frame. React skips the render when the answer is the same. */
    const check = () => {
      if (navRef.current) setGround(groundUnder(navRef.current))
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    /* The theme switch flips what counts as flipped, and the page can move under a still bar as its screens and
       images arrive. */
    const mo = new MutationObserver(check)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    const main = document.getElementById('main')
    const ro = main && 'ResizeObserver' in window ? new ResizeObserver(check) : null
    if (main) ro?.observe(main)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
      mo.disconnect()
      ro?.disconnect()
    }
  }, [path, navRef])
  return ground
}

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
    (n) => shown(n) && !n.closest('[hidden]'),
  )
}

/* 1 primary button per view (docs/REBUILD.md, Look). While a primary button of the page's own is on screen (the hero's
   capture, the final form, Sample output's button), the bar's call to action steps down to secondary; it is the primary
   again once they have scrolled away. `atTop` is the first view's answer, so the prerendered bar already matches it. */
const PRIMARY = 'main .ob-btn:not(.ob-btn--secondary):not(.ob-btn--ghost):not(.ob-btn--link):not(.ob-btn--icon)'
function usePagePrimaryShown(path: string, atTop: boolean, navRef: RefObject<HTMLElement | null>) {
  const [state, setState] = useState({ path, shown: atTop })
  useEffect(() => {
    const main = document.getElementById('main')
    if (!main || !('IntersectionObserver' in window)) return
    const seen = new Set<Element>()
    const top = navRef.current?.offsetHeight ?? 0
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) seen.add(e.target)
          else seen.delete(e.target)
        }
        setState({ path, shown: seen.size > 0 })
      },
      { rootMargin: `${-top}px 0px 0px 0px` },
    )
    /* A page that arrives later (a new route) brings its own buttons: watch them as they mount. */
    const watch = () => {
      io.disconnect()
      seen.clear()
      document.querySelectorAll(PRIMARY).forEach((b) => io.observe(b))
    }
    watch()
    const mo = new MutationObserver(watch)
    mo.observe(main, { childList: true })
    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [path, navRef])
  /* Until this page's buttons are measured, the first view's answer stands. */
  return state.path === path ? state.shown : atTop
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
  /* An email or another site: a plain link. */
  if (/^(mailto:|https?:)/.test(cta.to))
    return (
      <a className={className} href={cta.to} onClick={onClick}>
        {inner}
      </a>
    )
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

export function Nav({ cta = nav.cta, heroForm = false }: { cta?: Cta; heroForm?: boolean }) {
  const uid = useId()
  const { pathname, hash } = useLocation()
  const navRef = useRef<HTMLElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)
  const triggers = useRef<Record<MenuId, HTMLButtonElement | null>>({ for: null, recipes: null, resources: null })
  const panels = useRef<Record<MenuId, HTMLDivElement | null>>({ for: null, recipes: null, resources: null })

  /* What is open belongs to the page it was opened on, so a new page (or a jump to #join) closes everything. */
  const here = pathname + hash
  /* The prerendered pages can be served with a trailing slash (/agencies/). */
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname

  /* How much room the call to action needs (Nav.css): a longer label folds the readers sooner, and hides sooner on
     phones. Measured in Geist at the button's size: up to 17 letters 138px, 18 to 22 up to 186px, longer up to 225px. */
  const ctaSize = cta.label.length > 22 ? 'l' : cta.label.length > 17 ? 'm' : ''
  const [menuAt, setMenuAt] = useState<{ id: MenuId; at: string } | null>(null)
  const [sheetAt, setSheetAt] = useState<string | null>(null)
  const menu = menuAt && menuAt.at === here ? menuAt.id : null
  const sheet = sheetAt === here
  const setMenu = (id: MenuId | null) => setMenuAt(id ? { id, at: here } : null)
  const setSheet = (open: boolean) => setSheetAt(open ? here : null)

  const focus = useRef<Focus>(null)
  /* How the open menu was opened: by hover it closes when the pointer leaves; by click or keys it stays. */
  const openedBy = useRef<'hover' | 'press' | null>(null)
  const hoverTimer = useRef(0)
  const fine = useRef(false)
  /* A menu that opens while another is open switches at once, without its entrance. */
  const [instant, setInstant] = useState(false)

  const top = useSyncExternalStore(onScroll, atTop, filled)
  const quiet = usePagePrimaryShown(path, heroForm, navRef)
  /* The phone sheet keeps the page's own theme: it covers the page, whatever ground is under the bar. */
  const ground = useGround(navRef, path)
  const scope = ground && !sheet ? (ground === 'dark' ? ' ob-theme-dark' : ' ob-theme-light') : ''

  const forMenu = usePresence(menu === 'for', 160)
  const recipesMenu = usePresence(menu === 'recipes', 160)
  const resourcesMenu = usePresence(menu === 'resources', 160)
  const presence = { for: forMenu, recipes: recipesMenu, resources: resourcesMenu }
  const sheetPresence = usePresence(sheet, 260)

  const ids = { for: `${uid}-for`, recipes: `${uid}-recipes`, resources: `${uid}-resources`, sheet: `${uid}-sheet` }

  /* Hover only on a mouse or trackpad: touch and pens open the menus by pressing. */
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const read = () => {
      fine.current = mq.matches
    }
    read()
    mq.addEventListener('change', read)
    return () => {
      mq.removeEventListener('change', read)
      window.clearTimeout(hoverTimer.current)
    }
  }, [])

  /* An open menu moves focus in when it was opened from the keyboard. */
  useEffect(() => {
    const want = focus.current
    focus.current = null
    if (!menu || !want) return
    const list = links(panels.current[menu])
    ;(want === 'first' ? list[0] : list[list.length - 1])?.focus()
  }, [menu])

  /* Each menu opens under its own item, centred on it, and never past the window's 16px edge. */
  useLayoutEffect(() => {
    if (!menu) return
    const place = () => {
      const panel = panels.current[menu]
      const item = panel?.parentElement
      if (!panel || !item) return
      const edge = 16
      const vw = document.documentElement.clientWidth
      const r = item.getBoundingClientRect()
      const w = panel.offsetWidth
      const left = Math.max(edge, Math.min(r.left + r.width / 2 - w / 2, vw - edge - w))
      panel.style.setProperty('--s-menu-x', `${Math.round(left - r.left)}px`)
    }
    place()
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [menu])

  /* A press anywhere outside the open menu closes it; so does Escape, from anywhere. */
  useEffect(() => {
    if (!menu) return
    const onDown = (e: globalThis.PointerEvent) => {
      const li = triggers.current[menu]?.parentElement
      if (li && !li.contains(e.target as Node)) setMenuAt(null)
    }
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key !== 'Escape') return
      const li = triggers.current[menu]?.parentElement
      const inside = !!li && li.contains(document.activeElement)
      setMenuAt(null)
      if (inside) {
        e.preventDefault()
        triggers.current[menu]?.focus()
      }
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
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
    const wide = window.matchMedia(`(min-width: ${COMPACT_BELOW}px)`)
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
  }, [sheet])

  function open(id: MenuId, by: 'hover' | 'press') {
    window.clearTimeout(hoverTimer.current)
    openedBy.current = by
    setInstant(menu !== null && menu !== id)
    setMenu(id)
  }

  /* A press on the chevron opens its menu, or closes it. A menu that hover has just opened stays open on the press,
     so reaching for the chevron never shuts what the pointer already opened. */
  function toggle(id: MenuId) {
    window.clearTimeout(hoverTimer.current)
    focus.current = null
    if (menu === id && openedBy.current === 'hover') {
      openedBy.current = 'press'
      return
    }
    if (menu === id) setMenu(null)
    else open(id, 'press')
  }

  function onEnter(e: PointerEvent<HTMLLIElement>, id: MenuId) {
    if (e.pointerType !== 'mouse' || !fine.current) return
    window.clearTimeout(hoverTimer.current)
    if (menu === id) return
    /* From an open menu to the next, the switch is immediate; from nothing, it waits for intent. */
    if (menu) open(id, 'hover')
    else hoverTimer.current = window.setTimeout(() => open(id, 'hover'), HOVER_OPEN)
  }
  function onLeave(e: PointerEvent<HTMLLIElement>, id: MenuId) {
    if (e.pointerType !== 'mouse') return
    window.clearTimeout(hoverTimer.current)
    if (menu !== id || openedBy.current !== 'hover') return
    hoverTimer.current = window.setTimeout(() => setMenuAt((m) => (m && m.id === id ? null : m)), HOVER_CLOSE)
  }

  function onTriggerKey(e: KeyboardEvent<HTMLButtonElement>, id: MenuId) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      focus.current = e.key === 'ArrowDown' ? 'first' : 'last'
      if (menu === id) {
        const list = links(panels.current[id])
        ;(focus.current === 'first' ? list[0] : list[list.length - 1])?.focus()
        focus.current = null
      } else open(id, 'press')
    }
  }

  /* Arrow keys move through the links; left and right jump between the menu's columns. */
  function onPanelKey(e: KeyboardEvent<HTMLDivElement>) {
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
      }
    }
  }

  /* Tabbing out of a menu closes it. A click on the menu's own padding moves focus nowhere, so it keeps it open. */
  function onItemBlur(e: FocusEvent<HTMLLIElement>) {
    const next = e.relatedTarget as Node | null
    if (next && !e.currentTarget.contains(next)) setMenu(null)
  }

  const close = () => {
    window.clearTimeout(hoverTimer.current)
    setMenu(null)
    setSheet(false)
  }

  /* The item that holds a menu: its trigger (and for Recipes and Resources, the page link before it) and its panel. */
  const item = (id: MenuId, className: string, children: ReactNode) => (
    <li
      className={`s-nav__item ${className}${menu === id ? ' is-open' : ''}`}
      onBlur={onItemBlur}
      onPointerEnter={(e) => onEnter(e, id)}
      onPointerLeave={(e) => onLeave(e, id)}
    >
      {children}
    </li>
  )

  /* The chevron button of a split item, or the whole trigger of the folded readers. */
  const trigger = (id: MenuId, props: { label?: string; name?: string; className: string; current?: boolean; reader?: string }) => (
    <button
      ref={(el) => {
        triggers.current[id] = el
      }}
      type="button"
      className={`ob-nav__link ${props.className}${props.current ? ' is-selected' : ''}`}
      aria-expanded={menu === id}
      aria-controls={ids[id]}
      aria-label={props.name}
      data-menu={id}
      data-reader={props.reader}
      onClick={() => toggle(id)}
      onKeyDown={(e) => onTriggerKey(e, id)}
    >
      {props.label}
      <Chevron />
    </button>
  )

  const panel = (id: MenuId, className: string, children: ReactNode) => (
    <div
      ref={(el) => {
        panels.current[id] = el
      }}
      id={ids[id]}
      className={`ob-menu s-menu ${className} ob-anim-pop is-large${instant ? ' is-instant' : ''}${presence[id].leaving ? ' is-leaving' : ''}`}
      hidden={!(menu === id || (presence[id].leaving && !instant))}
      onKeyDown={onPanelKey}
    >
      {children}
    </div>
  )

  /* A reader row: its name and 1 line. In the sheet its key square (the reader's hue) sits beside the name; in the
     folded menu only the current page's square takes the hue (Nav.css). */
  const readerRow = (r: NavReader, where: 'menu' | 'sheet') => (
    <NavLink
      className={where === 'menu' ? 'ob-menu__item s-menu__item s-menu__item--rich' : 'ob-mnav__link s-mnav__reader'}
      to={r.to}
      end
      onClick={close}
      data-reader={r.id}
    >
      {where === 'sheet' && <span className="s-mnav__key" aria-hidden="true" />}
      <span className="s-menu__text">
        <span className="s-menu__name">{r.label}</span>
        <span className="s-menu__line">{r.line}</span>
      </span>
    </NavLink>
  )

  /* A proof card: what it is or who it is for, its name, and what happened in 1 line. */
  const card = (c: NavCard, className: string, image?: ReactNode) => (
    <Link className={`ob-menu__item s-card ${className}`} to={c.to} onClick={close}>
      <span className="s-card__text">
        <span className="s-card__kicker">{c.kicker}</span>
        <span className="s-menu__name">{c.label}</span>
        <span className="s-menu__line">{c.line}</span>
      </span>
      {image}
    </Link>
  )

  const run = nav.resources.run
  const peek = (
    <span className="s-card__peek" aria-hidden="true">
      <img src={run.image.src} width={run.image.width} height={run.image.height} alt="" loading="lazy" decoding="async" />
    </span>
  )

  return (
    <nav
      ref={navRef}
      className={`ob-nav s-nav${top && !sheet ? ' is-top' : ''}${ctaSize ? ` s-nav--cta-${ctaSize}` : ''}${scope}`}
      aria-label={nav.label}
    >
      <div className="ob-nav__in s-nav__in">
        <Link className="ob-nav__brand ob-brand-link s-nav__brand" to="/" aria-label={nav.home} onClick={close}>
          <Lockup height={20} />
        </Link>

        <ul className="ob-nav__links s-nav__links">
          {nav.readers.map((r) => (
            <li className="s-nav__reader" key={r.to}>
              <NavLink className="ob-nav__link" to={r.to} end data-reader={r.id} onClick={close}>
                {r.label}
              </NavLink>
            </li>
          ))}

          {item(
            'for',
            's-nav__for',
            <>
              {trigger('for', {
                label: nav.readersMenu.label,
                className: 's-nav__trigger',
                current: readerPaths.has(path),
                reader: nav.readers.find((r) => r.to === path)?.id,
              })}
              {panel(
                'for',
                's-menu--for',
                <ul className="s-menu__list">
                  {nav.readers.map((r) => (
                    <li key={r.to}>{readerRow(r, 'menu')}</li>
                  ))}
                </ul>,
              )}
            </>,
          )}

          {item(
            'recipes',
            's-nav__split s-nav__group',
            <>
              <NavLink
                className={`ob-nav__link s-nav__main${isRecipe(path) && path !== nav.recipes.to ? ' is-selected' : ''}`}
                to={nav.recipes.to}
                end
                onClick={close}
              >
                {nav.recipes.label}
              </NavLink>
              {trigger('recipes', { name: nav.recipes.button, className: 's-nav__more' })}
              {panel(
                'recipes',
                's-menu--recipes',
                <>
                  <div className="s-rm">
                    <ul className="s-rm__jobs">
                      {recipeJobs.map((j) => (
                        <li className="s-rm__job" key={j.name} data-col>
                          <Link className="ob-menu__item s-menu__item--rich s-rm__head" to={j.to} onClick={close}>
                            <span className="s-menu__name">{j.name}</span>
                            <span className="s-menu__line">{j.line}</span>
                          </Link>
                          <ul className="s-rm__eg" aria-label={j.name}>
                            {j.examples.map((r) => (
                              <li key={r.id}>
                                <NavLink className="ob-menu__item s-rm__ex" to={r.to} onClick={close}>
                                  {r.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                    <div className="s-rm__side" data-col>
                      <Link className="ob-menu__item s-feature" to={nav.recipes.feature.to} onClick={close}>
                        <span className="s-feature__mark">
                          <Mark size={24} />
                        </span>
                        <span className="s-menu__name s-feature__name">{nav.recipes.feature.label}</span>
                        <span className="s-menu__line">{nav.recipes.feature.line}</span>
                        <span className="s-feature__act">
                          {nav.recipes.feature.action}
                          <Arrow />
                        </span>
                      </Link>
                      <Link className="ob-menu__item s-menu__all s-rm__run" to={nav.recipes.run.to} onClick={close}>
                        {nav.recipes.run.label}
                        <Arrow />
                      </Link>
                    </div>
                  </div>
                  <hr className="ob-menu__sep" />
                  <Link className="ob-menu__item s-menu__all" to={nav.recipes.all.to} onClick={close}>
                    {nav.recipes.all.label}
                    <Arrow />
                  </Link>
                </>,
              )}
            </>,
          )}

          {item(
            'resources',
            's-nav__split',
            <>
              <NavLink
                className={`ob-nav__link s-nav__main${isResource(path) && path !== nav.resources.to ? ' is-selected' : ''}`}
                to={nav.resources.to}
                end
                onClick={close}
              >
                {nav.resources.label}
              </NavLink>
              {trigger('resources', { name: nav.resources.button, className: 's-nav__more' })}
              {panel(
                'resources',
                's-menu--resources',
                <>
                  <div className="s-xm__run" data-col>
                    {card(run, 's-card--run', peek)}
                  </div>
                  <p className="s-menu__label" id={`${ids.resources}-uc`}>
                    {nav.resources.useCases.label}
                  </p>
                  <ul className="s-xm__cases" aria-labelledby={`${ids.resources}-uc`}>
                    {nav.resources.useCases.items.map((c) => (
                      <li key={c.to} data-col>
                        {card(c, 's-card--case')}
                      </li>
                    ))}
                  </ul>
                  <hr className="ob-menu__sep" />
                  <Link className="ob-menu__item s-menu__all" to={nav.resources.all.to} onClick={close}>
                    {nav.resources.all.label}
                    <Arrow />
                  </Link>
                </>,
              )}
            </>,
          )}
        </ul>

        <div className="ob-nav__end">
          <ThemeToggle className="s-nav__theme" />
          <CtaLink cta={cta} className={`ob-btn ob-btn--sm ob-nav__cta${quiet ? ' ob-btn--secondary' : ''}`} onClick={close} />
          <button
            ref={menuBtnRef}
            type="button"
            className="ob-btn ob-btn--ghost ob-btn--icon ob-nav__menu"
            aria-label={sheet ? nav.menu.close : nav.menu.open}
            aria-expanded={sheet}
            aria-controls={ids.sheet}
            data-menu="sheet"
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
        <section className="s-mnav__sec" aria-labelledby={`${ids.sheet}-who`}>
          <p className="s-mnav__head s-mnav__ask" id={`${ids.sheet}-who`}>
            {nav.readersMenu.ask}
          </p>
          <ul className="ob-mnav__list s-mnav__readers">
            {nav.readers.map((r) => (
              <li key={r.to}>{readerRow(r, 'sheet')}</li>
            ))}
          </ul>
        </section>

        <section className="s-mnav__sec" aria-labelledby={`${ids.sheet}-recipes`}>
          <p className="s-mnav__head" id={`${ids.sheet}-recipes`}>
            {nav.recipes.label}
          </p>
          <ul className="ob-mnav__list s-mnav__jobs">
            {recipeJobs.map((j) => (
              <li key={j.name}>
                <Link className="ob-mnav__link s-mnav__row" to={j.to} onClick={close}>
                  <span className="s-menu__text">
                    <span className="s-menu__name">{j.name}</span>
                    <span className="s-menu__line">{j.line}</span>
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link className="ob-mnav__link s-mnav__all" to={nav.recipes.all.to} onClick={close}>
                {nav.recipes.all.label}
                <Arrow />
              </Link>
            </li>
          </ul>
        </section>

        <section className="s-mnav__sec" aria-labelledby={`${ids.sheet}-resources`}>
          <p className="s-mnav__head" id={`${ids.sheet}-resources`}>
            {nav.resources.label}
          </p>
          <ul className="ob-mnav__list s-mnav__proof">
            <li>{card(run, 's-card--run s-card--sheet', peek)}</li>
            {nav.resources.useCases.items.map((c) => (
              <li key={c.to}>{card(c, 's-card--case s-card--sheet')}</li>
            ))}
            <li>
              <Link className="ob-mnav__link s-mnav__all" to={nav.resources.all.to} onClick={close}>
                {nav.resources.all.label}
                <Arrow />
              </Link>
            </li>
          </ul>
        </section>

        <div className="ob-mnav__row s-mnav__theme">
          <span>{nav.theme.row}</span>
          <ThemeToggle />
        </div>

        <div className="ob-mnav__foot s-mnav__foot">
          <CtaLink cta={cta} className="ob-btn ob-btn--lg ob-btn--block" onClick={close} />
        </div>
      </div>
    </nav>
  )
}
