import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { loadScreen, screenHtmlNow } from './screens'
import { forWorkspace, type Workspace } from './workspace'
/* The shared kit and base load with every page; each screen's own CSS comes with the screen (components/screens.ts). */
import '../screens/kit.css'
import '../screens/base.css'

/* Every app screen: one 720 x 450 window of the Obsession product, drawn in HTML and CSS (src/screens, synced from
   the workspace by scripts/sync-assets.mjs). Its rest state is the finished scene; adding .play runs its story.
   - The prerender writes each screen's HTML into the page, and React keeps it as it hydrates: the browser's bundle
     never carries the screens. A screen that mounts on a page reached client side fetches its HTML and CSS first.
   - data-screen names the screen, so the prerender can link its CSS in the page's head. */

export type { Workspace }
export type ScreenName = string

/* Hydration keeps the server's HTML only while React passes the same __html it was given: an empty string, constant
   until a client side mount sets the real one. */
const KEEP = { __html: '' }

function replay(el: Element | null) {
  if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  el.classList.remove('play')
  void (el as HTMLElement).offsetWidth
  el.classList.add('play')
}

type Props = {
  name: ScreenName
  /* Change it to play the story again, e.g. when the tab that holds the screen is selected. */
  playKey?: string | number
  className?: string
  /* Whose workspace the screen shows (components/workspace.ts). */
  workspace?: Workspace
  /* The quiet tag under the screen. Every screen shows example data, so it reads "Example" (matching the console's
     "Example runs"); only the real September report captures on /sample-output pass note="". */
  note?: string
}

export function AppScreen({ name, playKey, className, workspace = 'agency', note = 'Example' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  /* On the server: the screen's HTML. In the browser: undefined, so the prerendered HTML stays as it is. */
  const [html, setHtml] = useState(() => {
    const raw = screenHtmlNow(name)
    return raw && forWorkspace(raw, workspace)
  })
  /* The screen the page shows now, prerendered or fetched. */
  const [shown, setShown] = useState<string | null>(null)

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
    loadScreen(name).then((raw) => {
      if (!live || raw === undefined) return
      setHtml(forWorkspace(raw, workspace))
      setShown(name)
    })
    return () => {
      live = false
    }
  }, [name, workspace, html, shown])

  /* The story plays once, when the screen first comes into view (once its HTML is in place). */
  useEffect(() => {
    const il = ref.current?.querySelector('.il')
    if (!il || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          replay(il)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.2 },
    )
    io.observe(il)
    return () => io.disconnect()
  }, [name, shown])

  useEffect(() => {
    if (playKey !== undefined) replay(ref.current?.querySelector('.il') ?? null)
  }, [playKey])

  return (
    <>
      <div
        ref={ref}
        className={'ilwrap' + (className ? ' ' + className : '')}
        data-screen={name}
        onClick={() => replay(ref.current?.querySelector('.il') ?? null)}
        dangerouslySetInnerHTML={html === undefined ? KEEP : { __html: html }}
        suppressHydrationWarning
      />
      {note && <p className="s-screen-note">{note}</p>}
    </>
  )
}
