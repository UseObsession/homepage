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
   (src/screens/cam.ts) is filmed as its story plays, panning and zooming to what happens. Its module loads with the
   first screen it films, never with the page, and never with reduced motion. Everywhere else a screen plays as drawn. */
let lens: Promise<typeof import('./camera')> | undefined
function film(el: Element | null, shoot: string | undefined) {
  if (!shoot || !(el instanceof HTMLElement) || matchMedia(RM).matches) return
  lens ??= import('./camera').catch((e) => {
    lens = undefined
    throw e
  })
  /* Without it the screen plays as drawn. */
  lens.then((c) => c.film(el, shoot)).catch(() => {})
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
  if (!el || matchMedia(RM).matches) return
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

type Props = {
  name: ScreenName
  /* Change it to play the story again, e.g. when the tab that holds the screen is selected. */
  playKey?: string | number
  className?: string
  /* Whose workspace the screen shows (components/workspace.ts). */
  workspace?: Workspace
  /* The quiet tag under the screen. Every screen shows example data, so it reads "Example" (matching the hero
     console's Example tag); only the real September report captures on /sample-output pass note="", and Home's hero
     screens, which carry the tag in their own line (ScreenTabs). */
  note?: string
  /* Films the story with the camera (components/camera.ts): Home's hero tabs only. */
  camera?: boolean
}

export function AppScreen({ name, playKey, className, workspace = 'agency', note = 'Example', camera = false }: Props) {
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
    </>
  )
}
