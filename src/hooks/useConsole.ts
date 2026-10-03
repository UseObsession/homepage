import { useEffect, useRef, useState, useSyncExternalStore } from 'react'

/* Shared by the hero's 2 consoles (components/sections/Console and ScreenTabs). */

export const RM = '(prefers-reduced-motion: reduce)'
const subscribeRm = (cb: () => void) => {
  const m = matchMedia(RM)
  m.addEventListener('change', cb)
  return () => m.removeEventListener('change', cb)
}
/* False on the server and while hydrating (the prerendered run is finished either way), then the reader's setting. */
export const useReducedMotion = () =>
  useSyncExternalStore(
    subscribeRm,
    () => matchMedia(RM).matches,
    () => false,
  )

/* The hero's tab row (the design system's .ob-ptabs scenario row), shared by the runs and Home's screen tabs: it
   scrolls sideways when the tabs outgrow it (phones), keeps the chosen tab in view, and fades the edge with more to
   see (navigation.css .is-scrollable). Scrolled by hand along the rail only, never the page. */
export function useTabRail(active: number) {
  const railRef = useRef<HTMLDivElement>(null)
  const [edges, setEdges] = useState({ scroll: false, start: true, end: true })

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    const measure = () => {
      const scroll = rail.scrollWidth > rail.clientWidth + 1
      setEdges({ scroll, start: rail.scrollLeft <= 1, end: rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 1 })
    }
    /* The observer reports once as it starts, after the browser's own layout, so the first measure costs no extra one. */
    rail.addEventListener('scroll', measure, { passive: true })
    const ro = new ResizeObserver(measure)
    ro.observe(rail)
    return () => {
      rail.removeEventListener('scroll', measure)
      ro.disconnect()
    }
  }, [])

  /* The first tab is in view as the page opens, so only a change of tab needs a look. */
  const opened = useRef(active)
  useEffect(() => {
    if (opened.current === active) return
    opened.current = -1
    const rail = railRef.current
    const tab = rail?.querySelectorAll<HTMLElement>('[role="tab"]')[active]
    if (!rail || !tab || rail.scrollWidth <= rail.clientWidth + 1) return
    const pad = 24
    const left = tab.offsetLeft - pad
    const right = tab.offsetLeft + tab.offsetWidth + pad
    const behavior = matchMedia(RM).matches ? 'auto' : 'smooth'
    if (left < rail.scrollLeft) rail.scrollTo({ left, behavior })
    else if (right > rail.scrollLeft + rail.clientWidth) rail.scrollTo({ left: right - rail.clientWidth, behavior })
  }, [active])

  const railClass =
    'ob-ptabs s-console-tabs' + (edges.scroll ? ' is-scrollable' : '') + (edges.start ? ' is-scroll-start' : '') + (edges.end ? ' is-scroll-end' : '')
  return { railRef, railClass }
}
