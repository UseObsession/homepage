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
import { nav, type NavIcon, type NavPage, type NavTool } from '../content/nav'
import type { Cta } from '../content/types'
import { Lockup } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import './Nav.css'

/* The site navigation, on the design system's .ob-nav, .ob-menu and .ob-mnav (docs/REBUILD.md, section 7; the spec is
   _research/nav/NAV.md in the workspace).
   Bar, since 9 Nov (James, after Exa's): the lockup; Products, Solutions and Resources, each a button that opens its
   menu; Developers as a plain link; the theme switch, Sample data and the page's 1 call to action. Products lists the
   ways to get the data with the integrations under them; Solutions puts the use cases beside the teams and industries;
   Resources keeps the proof and the reading, with the rest of the company in a side column. Each tool row has an icon,
   a name and 1 line. Under 860px the menu button opens the phone sheet, which lists the same 3 menus.
   The menus are disclosures (a button with aria-expanded and aria-controls over a panel of links), not ARIA menus. They
   open on click and keys, and on a fine pointer also on hover after a short pause; Escape closes and returns focus.
   The sheet holds focus inside the nav and locks the page behind it. */

type MenuId = 'products' | 'solutions' | 'resources'
type Focus = 'first' | 'last' | null

/* The sheet and the folded menu belong to these widths of the bar (Nav.css). */
const COMPACT_BELOW = 860
/* Hover opens a menu after this pause, and a menu opened by hover closes this long after the pointer leaves it. From a
   menu opened by hover, resting on another item switches to its menu after HOVER_SWITCH, so a pointer that only passes
   over an item on its way into the open menu never switches it. */
const HOVER_OPEN = 140
const HOVER_CLOSE = 220
const HOVER_SWITCH = 120

const { products, solutions, resources } = nav.menus
/* Which menu the current page belongs to: its trigger takes the square under its name. A page any menu lists exactly
   wins; then every recipe is a product, every worked example a solution, and the blog a resource. */
const solutionPaths = new Set<string>(solutions.columns.flatMap((c) => c.items.map((i) => i.to)))
const resourcePaths = new Set<string>([...resources.items, ...resources.more.items].map((i) => i.to))
const sectionOf = (path: string): MenuId | null => {
  if (solutionPaths.has(path)) return 'solutions'
  /* The comparisons, alternatives and glossary terms sit under Compare and Glossary (content/reference.ts). */
  if (resourcePaths.has(path) || ['/blog/', '/compare/', '/alternatives', '/glossary/'].some((p) => path.startsWith(p))) return 'resources'
  if (path === '/recipes' || path.startsWith('/recipes/')) return 'products'
  if (path.startsWith('/use-cases/')) return 'solutions'
  return null
}

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
    let io: IntersectionObserver | undefined
    /* A page that arrives later (a new route) brings its own buttons: watch them as they mount. */
    const watch = () => {
      if (!io) return
      io.disconnect()
      seen.clear()
      document.querySelectorAll(PRIMARY).forEach((b) => io?.observe(b))
    }
    const mo = new MutationObserver(watch)
    /* The bar's height is read in the next frame, with the browser's own layout, not a layout of its own. */
    const frame = requestAnimationFrame(() => {
      const top = navRef.current?.offsetHeight ?? 0
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) seen.add(e.target)
            else seen.delete(e.target)
          }
          setState({ path, shown: seen.size > 0 })
        },
        { rootMargin: `${-top}px 0px 0px 0px` },
      )
      watch()
      mo.observe(main, { childList: true })
    })
    return () => {
      cancelAnimationFrame(frame)
      io?.disconnect()
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

/* The tool icons: 1 line drawing each on a 16px grid, in a soft square tile beside the row's name (Nav.css .s-tool). */
const ICONS: Record<NavIcon, string> = {
  search: '<circle cx="7" cy="7" r="4.5"/><path d="m10.5 10.5 3 3"/>',
  insights: '<path d="M8 1.8 9.4 6.6 14.2 8 9.4 9.4 8 14.2 6.6 9.4 1.8 8 6.6 6.6Z"/>',
  watch: '<path d="M1.5 8s2.4-4.5 6.5-4.5S14.5 8 14.5 8s-2.4 4.5-6.5 4.5S1.5 8 1.5 8Z"/><circle cx="8" cy="8" r="2"/>',
  api: '<path d="m5.5 4.5-3.5 3.5 3.5 3.5M10.5 4.5l3.5 3.5-3.5 3.5"/>',
  recipes: '<path d="M8 2.5 14 5.5 8 8.5 2 5.5Z"/><path d="m2 8.5 6 3 6-3M2 11.2l6 3 6-3"/>',
  table: '<rect x="2.5" y="3" width="11" height="10" rx="1.5"/><path d="M2.5 6.5h11M6.5 6.5V13"/>',
  database: '<ellipse cx="8" cy="4" rx="5" ry="1.8"/><path d="M3 4v8c0 1 2.2 1.8 5 1.8s5-.8 5-1.8V4M3 8c0 1 2.2 1.8 5 1.8s5-.8 5-1.8"/>',
  webhook: '<path d="M9 1.5 3.5 9H8l-1 5.5L12.5 7H8Z"/>',
  target: '<circle cx="8" cy="8" r="5.5"/><circle cx="8" cy="8" r="2.8"/><circle cx="8" cy="8" r=".6"/>',
  mail: '<rect x="2" y="3.5" width="12" height="9" rx="1.5"/><path d="m2.5 4.5 5.5 4.5 5.5-4.5"/>',
  tag: '<path d="M2.5 2.5h5l6 6-5 5-6-6Z"/><circle cx="5.5" cy="5.5" r="1"/>',
  clock: '<circle cx="8" cy="8" r="5.5"/><path d="M8 5v3l2 1.5"/>',
  chat: '<path d="M3 3h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.5L4.5 13.5V11H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/>',
  megaphone: '<path d="M2.5 6.5v3h2l5 3v-9l-5 3Z"/><path d="M11.5 6a2.5 2.5 0 0 1 0 4"/>',
  briefcase: '<rect x="2" y="5" width="12" height="8" rx="1.5"/><path d="M6 5V3.5h4V5M2 8.5h12"/>',
  users: '<circle cx="6" cy="5.5" r="2.2"/><path d="M2 13c.5-2.2 2-3.3 4-3.3s3.5 1.1 4 3.3M11 3.6a2 2 0 0 1 0 3.8M12 9.9c1 .4 1.7 1.4 2 3.1"/>',
  bank: '<path d="M2 6 8 2.5 14 6M3.5 6.5v5M6.5 6.5v5M9.5 6.5v5M12.5 6.5v5M2 13.5h12"/>',
  software: '<rect x="2" y="3" width="12" height="10" rx="1.5"/><path d="M2 6h12"/><path d="m6.3 8-1.8 1.75 1.8 1.75M9.7 8l1.8 1.75-1.8 1.75"/>',
  cart: '<path d="M1.5 2.5h2l1.6 7.5h7l1.4-5.5H4.3"/><circle cx="6.5" cy="13" r=".9"/><circle cx="11.5" cy="13" r=".9"/>',
  shield: '<path d="M8 1.8 13 3.6v4c0 3-2.1 5.4-5 6.6-2.9-1.2-5-3.6-5-6.6v-4Z"/><path d="m5.8 8 1.6 1.6 2.9-3"/>',
  chart: '<path d="M2.5 2.5v11h11"/><path d="m4.5 10.5 3-3.5 2 2 4-5"/>',
}
function ToolIcon({ name }: { name: NavIcon }) {
  return (
    <svg
      className="s-tool__svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  )
}

/* A call to action is an in-page anchor (#join) or a route. An anchor the page doesn't have falls back to the page's
   form, so the button always lands somewhere. From the keyboard it also puts focus in the form's first field. */
function CtaLink({ cta, className, label, onClick }: { cta: Cta; className: string; label?: string; onClick?: () => void }) {
  const inner = <span className="ob-btn-label">{label ?? cta.label}</span>
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
  const triggers = useRef<Record<MenuId, HTMLButtonElement | null>>({ products: null, solutions: null, resources: null })
  const panels = useRef<Record<MenuId, HTMLDivElement | null>>({ products: null, solutions: null, resources: null })

  /* What is open belongs to the page it was opened on, so a new page (or a jump to #join) closes everything. */
  const here = pathname + hash
  /* The prerendered pages can be served with a trailing slash (/agencies/). */
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname

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

  const productsMenu = usePresence(menu === 'products', 160)
  const solutionsMenu = usePresence(menu === 'solutions', 160)
  const resourcesMenu = usePresence(menu === 'resources', 160)
  const presence = { products: productsMenu, solutions: solutionsMenu, resources: resourcesMenu }
  const sheetPresence = usePresence(sheet, 260)

  const ids = { products: `${uid}-products`, solutions: `${uid}-solutions`, resources: `${uid}-resources`, sheet: `${uid}-sheet` }

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
    /* preventScroll: the sheet is still sliding in from the side, and focusing into it would scroll the page sideways. */
    const raf = requestAnimationFrame(() => focusables(sheetRef.current)[0]?.focus({ preventScroll: true }))

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

  /* A menu opened by a press changes only on a press, Escape or a press outside: the pointer crossing another item on
     its way into the open panel never takes it away. */
  function onEnter(e: PointerEvent<HTMLLIElement>, id: MenuId) {
    if (e.pointerType !== 'mouse' || !fine.current) return
    window.clearTimeout(hoverTimer.current)
    if (menu === id) return
    if (menu && openedBy.current === 'press') return
    hoverTimer.current = window.setTimeout(() => open(id, 'hover'), menu ? HOVER_SWITCH : HOVER_OPEN)
  }
  /* Leaving any item starts the close of a menu that hover opened; coming back into it (or its panel) cancels it. */
  function onLeave(e: PointerEvent<HTMLLIElement>) {
    if (e.pointerType !== 'mouse') return
    window.clearTimeout(hoverTimer.current)
    if (!menu || openedBy.current !== 'hover') return
    const shut = menu
    hoverTimer.current = window.setTimeout(() => setMenuAt((m) => (m && m.id === shut ? null : m)), HOVER_CLOSE)
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

  /* The item that holds a menu: its trigger and its panel. */
  const item = (id: MenuId, children: ReactNode) => (
    <li
      className={`s-nav__item${menu === id ? ' is-open' : ''}`}
      onBlur={onItemBlur}
      onPointerEnter={(e) => onEnter(e, id)}
      onPointerLeave={onLeave}
    >
      {children}
    </li>
  )

  /* A menu's button: its name and chevron. The square under the name marks the menu the current page belongs to. */
  const trigger = (id: MenuId, props: { label: string; name: string }) => (
    <button
      ref={(el) => {
        triggers.current[id] = el
      }}
      type="button"
      className={`ob-nav__link s-nav__trigger${sectionOf(path) === id ? ' is-selected' : ''}`}
      aria-expanded={menu === id}
      aria-controls={ids[id]}
      aria-label={props.name}
      data-menu={id}
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

  /* A link to a route, or to a place on Home (/#search): a place is never marked current. Email links stay plain. */
  const go = (to: string, className: string, children: ReactNode) =>
    to.startsWith('mailto:') ? (
      <a className={className} href={to} onClick={close}>
        {children}
      </a>
    ) : to.includes('#') ? (
      <Link className={className} to={to} onClick={close}>
        {children}
      </Link>
    ) : (
      <NavLink className={className} to={to} end onClick={close}>
        {children}
      </NavLink>
    )

  /* A tool row: its icon tile, its name and 1 line. */
  const toolRow = (t: NavTool, extra = '') =>
    go(
      t.to,
      `ob-menu__item s-tool${extra}`,
      <>
        <span className="s-tool__ic" aria-hidden="true">
          <ToolIcon name={t.icon} />
        </span>
        <span className="s-menu__text">
          <span className="s-menu__name">{t.label}</span>
          <span className="s-menu__line">{t.line}</span>
        </span>
      </>,
    )

  /* A resource row: its name and 1 line, no icon. */
  const pageRow = (p: NavPage, extra = '') =>
    go(
      p.to,
      `ob-menu__item s-menu__item s-menu__item--rich${extra}`,
      <>
        <span className="s-menu__name">{p.label}</span>
        {p.line && <span className="s-menu__line">{p.line}</span>}
      </>,
    )

  return (
    <nav
      ref={navRef}
      className={`ob-nav s-nav${top && !sheet ? ' is-top' : ''}${scope}`}
      aria-label={nav.label}
    >
      <div className="ob-nav__in s-nav__in">
        <Link className="ob-nav__brand ob-brand-link s-nav__brand" to="/" aria-label={nav.home} onClick={close}>
          <Lockup height={20} />
        </Link>

        <ul className="ob-nav__links s-nav__links">
          {item(
            'products',
            <>
              {trigger('products', { label: products.label, name: products.button })}
              {panel(
                'products',
                's-menu--products',
                <>
                  <ul className="s-menu__list s-tm__list" data-col>
                    {products.items.map((t) => (
                      <li key={t.to}>{toolRow(t)}</li>
                    ))}
                  </ul>
                  <p className="s-menu__label s-menu__label--caps" id={`${ids.products}-int`}>
                    {products.integrations.label}
                  </p>
                  <ul className="s-tm__grid" aria-labelledby={`${ids.products}-int`} data-col>
                    {products.integrations.items.map((t) => (
                      <li key={t.label}>{toolRow(t, ' s-tool--compact')}</li>
                    ))}
                  </ul>
                  <hr className="ob-menu__sep" />
                  {go(
                    products.integrations.all.to,
                    'ob-menu__item s-menu__all',
                    <>
                      {products.integrations.all.label}
                      <Arrow />
                    </>,
                  )}
                </>,
              )}
            </>,
          )}

          {item(
            'solutions',
            <>
              {trigger('solutions', { label: solutions.label, name: solutions.button })}
              {panel(
                'solutions',
                's-menu--solutions',
                <div className="s-sm">
                  {solutions.columns.map((c, k) => (
                    <div className="s-sm__col" key={c.label} data-col>
                      <p className="s-menu__label s-menu__label--caps" id={`${ids.solutions}-${k}`}>
                        {c.label}
                      </p>
                      <ul className="s-menu__list" aria-labelledby={`${ids.solutions}-${k}`}>
                        {c.items.map((t) => (
                          <li key={t.to}>{toolRow(t)}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>,
              )}
            </>,
          )}

          {item(
            'resources',
            <>
              {trigger('resources', { label: resources.label, name: resources.button })}
              {panel(
                'resources',
                's-menu--resources',
                <div className="s-xm">
                  <div className="s-xm__main" data-col>
                    <p className="s-menu__label s-menu__label--caps">{resources.label}</p>
                    <ul className="s-menu__list">
                      {resources.items.map((p) => (
                        <li key={p.to}>{pageRow(p)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="s-xm__more" data-col>
                    <p className="s-menu__label s-menu__label--caps">{resources.more.label}</p>
                    <ul className="s-menu__list">
                      {resources.more.items.map((p) => (
                        <li key={p.to}>{pageRow(p, ' s-xm__link')}</li>
                      ))}
                    </ul>
                  </div>
                </div>,
              )}
            </>,
          )}

          <li className="s-nav__plain">
            <NavLink className="ob-nav__link" to={nav.menus.developers.to} end onClick={close}>
              {nav.menus.developers.label}
            </NavLink>
          </li>
        </ul>

        <div className="ob-nav__end">
          <ThemeToggle className="s-nav__theme" />
          <CtaLink cta={nav.github} className="ob-btn ob-btn--sm ob-btn--secondary s-nav__github" onClick={close} />
          <CtaLink
            cta={cta}
            label={cta.bar}
            className={`ob-btn ob-btn--sm ob-nav__cta${quiet ? ' ob-btn--secondary' : ''}`}
            onClick={close}
          />
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
        {[
          { id: 'products', label: products.label, rows: products.items },
          { id: 'integrations', label: products.integrations.label, rows: products.integrations.items },
          ...solutions.columns.map((c, k) => ({ id: `solutions-${k}`, label: c.label, rows: c.items })),
        ].map((sec) => (
          <section className="s-mnav__sec" aria-labelledby={`${ids.sheet}-${sec.id}`} key={sec.id}>
            <p className="s-mnav__head" id={`${ids.sheet}-${sec.id}`}>
              {sec.label}
            </p>
            <ul className="ob-mnav__list s-mnav__tools">
              {sec.rows.map((t) => (
                <li key={t.label}>{toolRow(t, ' s-tool--sheet')}</li>
              ))}
            </ul>
          </section>
        ))}

        <section className="s-mnav__sec" aria-labelledby={`${ids.sheet}-resources`}>
          <p className="s-mnav__head" id={`${ids.sheet}-resources`}>
            {resources.label}
          </p>
          <ul className="ob-mnav__list s-mnav__tools">
            {[...resources.items, nav.menus.developers, ...resources.more.items].map((p) => (
              <li key={p.to}>{pageRow(p, ' s-page--sheet')}</li>
            ))}
          </ul>
        </section>

        <div className="ob-mnav__row s-mnav__theme">
          <span>{nav.theme.row}</span>
          <ThemeToggle />
        </div>

        <div className="ob-mnav__foot s-mnav__foot">
          <CtaLink cta={nav.github} className="ob-btn ob-btn--lg ob-btn--block ob-btn--secondary" onClick={close} />
          <CtaLink cta={cta} className="ob-btn ob-btn--lg ob-btn--block" onClick={close} />
        </div>
      </div>
    </nav>
  )
}
