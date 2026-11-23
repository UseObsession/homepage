import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { hydrating } from '../lib/hydration'
import { loadScreen, screenHtmlNow } from './screens'
import type { Workspace } from './workspace'
/* The shared kit and base load with every page; each screen's own CSS comes with the screen (components/screens.ts). */
import '../screens/kit.css'
import '../screens/base.css'

/* Every app screen: one 720 x 450 window of the Obsession product, a React component and its CSS (src/screens/NAME.tsx,
   src/screens/css/NAME.css). Its rest state is the finished scene; adding .play runs its story.
   - The prerender draws each screen's component into the page as static HTML, and React keeps that HTML as it
     hydrates: the browser's bundle never carries the screens. A screen that mounts on a page reached client side
     fetches its HTML (drawn at build time, components/screens.ts) and CSS first.
   - data-screen names the screen, so the prerender can link its CSS in the page's head.
   - The frame is a product object (.ob-object): glossy black on paper, lit on ink (styles/tones.css). */

export type { Workspace }
export type ScreenName = string

/* Hydration keeps the server's HTML only while React passes the same __html it was given: an empty string, constant
   until a client side mount sets the real one. */
const KEEP = { __html: '' }

const RM = '(prefers-reduced-motion: reduce)'

/* The camera (components/camera): on a page that asks for it (Home's hero tabs, ScreenTabs), a screen with a shot list
   (src/screens/cam.ts) is filmed as its story plays, leaning in to each beat and noting its point. Its module loads with
   the first screen it films, never with the page. With reduced motion nothing moves: it loads only to draw the screen's
   last note at rest, where that reads cleanly without the camera. Everywhere else a screen plays as drawn. */
let lens: Promise<typeof import('./camera')> | undefined
function film(el: Element | null, shoot: string | undefined) {
  if (!shoot || !(el instanceof HTMLElement)) return
  const still = matchMedia(RM).matches
  lens ??= import('./camera').catch((e) => {
    lens = undefined
    throw e
  })
  /* Without it the screen plays as drawn. */
  lens.then((c) => (still ? c.still(el, shoot) : c.film(el, shoot))).catch(() => {})
}
/* Back to the screen as drawn, when its tab is left. */
function unfilm(el: Element | null) {
  if (el instanceof HTMLElement && lens) lens.then((c) => c.cut(el)).catch(() => {})
}

/* When each story last started from the start. */
const started = new WeakMap<Element, number>()
/* A story asked to play again this soon after it started (its screen came into view as its tab was first chosen) carries
   on where it is, rather than snapping back to the start. */
const AGAIN_MS = 600
const fresh = (el: Element | null) => !!el && performance.now() - (started.get(el) ?? -Infinity) < AGAIN_MS

/* Plays the story: from the start again if it has played before (the reflow restarts its animations in the same
   frame), straight away the first time, which needs no reflow. */
function replay(el: Element | null, shoot?: string) {
  if (!el) return
  /* Reduced motion: the finished screen, with its last note if the camera has one (film). */
  if (matchMedia(RM).matches) return film(el, shoot)
  if (el.classList.contains('play')) {
    el.classList.remove('play')
    void (el as HTMLElement).offsetWidth
  }
  el.classList.add('play')
  started.set(el, performance.now())
  film(el, shoot)
}

/* A story the page's boot script started (src/boot.ts) before the app was there: true once, the first time a tab or step
   asks for it, so it isn't started over as the app takes over. */
function bootPlayed(el: Element | null | undefined) {
  if (!el?.hasAttribute('data-boot')) return false
  el.removeAttribute('data-boot')
  return true
}

/* The full-size view on a phone (23 Nov 2026, Seun: "digestible in phone format ... illustrations easy to capture"): a
   720 x 450 window drawn at a phone's width sets its 12px type at about 7px. One tap opens it in a sheet at its real
   size, to swipe across or read with the phone turned, and its story plays again. The sheet copies the window as drawn,
   so nothing in the page moves; it closes on its button, Escape or a tap outside, and focus returns to the button. */
const ZOOM = { open: 'Zoom in', close: 'Close', label: 'The screen at full size', hint: 'Swipe across, or turn your phone to see it whole.' }

function zoom(src: HTMLElement | null, from: HTMLButtonElement) {
  if (!src || typeof document === 'undefined') return
  const d = document.createElement('dialog')
  d.className = 's-zoom'
  d.setAttribute('aria-label', ZOOM.label)
  d.innerHTML = `<div class="s-zoom__bar"><p class="s-zoom__hint">${ZOOM.hint}</p><button type="button" class="s-zoom__close">${ZOOM.close}</button></div><div class="s-zoom__scroll"><div class="ilwrap ob-object s-zoom__screen" data-screen="${src.dataset.screen ?? ''}">${src.innerHTML}</div></div>`
  const fit = d.querySelector<HTMLElement>('.appx-fit')
  if (fit) {
    fit.style.setProperty('--fit', '1')
    fit.style.setProperty('--fitc', '1')
    fit.dataset.fit = ''
    fit.dataset.full = ''
  }
  const close = () => d.close()
  d.querySelector('.s-zoom__close')?.addEventListener('click', close)
  d.addEventListener('click', (e) => {
    if (e.target === d) close()
  })
  d.addEventListener('close', () => {
    d.remove()
    from.focus()
  })
  document.body.append(d)
  d.showModal()
  const il = d.querySelector('.il')
  if (il && !matchMedia(RM).matches) {
    il.classList.remove('play')
    void (il as HTMLElement).offsetWidth
    il.classList.add('play')
  }
}

type Props = {
  name: ScreenName
  /* Change it to play the story again, e.g. when the tab that holds the screen is selected. */
  playKey?: string | number
  className?: string
  /* Whose workspace the screen shows (components/workspace.ts). */
  workspace?: Workspace
  /* A quiet line under the screen, when a page wants one. The screens need no "Example" tag: their companies are
     invented, at .example addresses, and data-nosnippet keeps their data out of search snippets. */
  note?: string
  /* Films the story with the camera (components/camera.ts): Home's hero tabs only. */
  camera?: boolean
}

export function AppScreen({ name, playKey, className, workspace = 'agency', note = '', camera = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  /* What the camera films: this screen, when the page asks for it. */
  const shoot = camera ? name : undefined
  /* On the server: the screen's HTML. In the browser: undefined, so the prerendered HTML stays as it is. */
  const [html, setHtml] = useState(() => screenHtmlNow(name, workspace))
  /* The screen the page shows now, prerendered or fetched: while hydrating, the prerendered one. */
  const [shown, setShown] = useState<string | null>(() => (hydrating() ? name : null))

  /* A screen with nothing in it (a client side mount, or a new name) fetches its HTML and CSS. */
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (html === undefined && el.firstElementChild && shown === null) {
      setShown(name)
      return
    }
    if (shown === name && (html !== undefined || el.firstElementChild)) return
    let live = true
    loadScreen(name, workspace).then((h) => {
      if (!live || h === undefined) return
      setHtml(h)
      setShown(name)
    })
    return () => {
      live = false
    }
  }, [name, workspace, html, shown])

  /* The story plays once, when the screen first comes into view (once its HTML is in place), unless it already has. */
  useEffect(() => {
    const il = ref.current?.querySelector('.il')
    if (!il || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          /* A story the boot script started is joined by the camera where it is. */
          if (!il.classList.contains('play')) replay(il, shoot)
          else film(il, shoot)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.2 },
    )
    io.observe(il)
    return () => io.disconnect()
  }, [name, shown, shoot])

  /* A new playKey plays the story again; the first one a screen mounts with is not a change, so it waits to be seen. A
     story that has only just started (by the boot script, or as its screen came into view) carries on. No playKey any
     more (another tab plays) stops the camera. */
  const firstKey = useRef(true)
  useEffect(() => {
    if (firstKey.current) {
      firstKey.current = false
      return
    }
    const il = ref.current?.querySelector('.il') ?? null
    if (playKey === undefined) unfilm(il)
    else if (bootPlayed(il) || fresh(il)) film(il, shoot)
    else replay(il, shoot)
  }, [playKey, shoot])

  /* The window's scale, measured (23 Nov 2026): CSS scales each 720 x 450 window to its frame on its own (screens/kit.css),
     and this sets the same scale from the frame's real width, so every browser draws the window whole, whatever CSS it
     reads. On a phone the frame crops to the main panel (styles/site.css), at its own scale. */
  useEffect(() => {
    const fit = ref.current?.querySelector<HTMLElement>('.appx-fit')
    if (!fit || !('ResizeObserver' in window)) return
    const ro = new ResizeObserver(([e]) => {
      const w = e.contentRect.width
      if (!w) return
      fit.style.setProperty('--fit', String(w / 720))
      fit.style.setProperty('--fitc', String(w / 556))
      fit.dataset.fit = ''
    })
    ro.observe(fit)
    return () => ro.disconnect()
  }, [name, shown])

  return (
    <>
      <div
        ref={ref}
        className={'ilwrap ob-object' + (className ? ' ' + className : '')}
        data-screen={name}
        /* Keeps a screen's example data ("Rival B: free delivery now from £35") out of Google's snippets, AI Overviews
           and AI Mode, so it is never quoted as fact; the page's own words around it are. */
        data-nosnippet=""
        onClick={() => replay(ref.current?.querySelector('.il') ?? null, shoot)}
        dangerouslySetInnerHTML={html === undefined ? KEEP : { __html: html }}
        suppressHydrationWarning
      />
      {note && <p className="s-screen-note">{note}</p>}
      {/* Phones: the window at full size, one tap away (styles/site.css shows the button under 520px). */}
      <button type="button" className="s-screen-zoom" onClick={(e) => zoom(ref.current, e.currentTarget)}>
        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path d="M9.5 2.5h4v4M6.5 13.5h-4v-4M13.5 2.5 9 7M2.5 13.5 7 9" />
        </svg>
        {ZOOM.open}
      </button>
    </>
  )
}
