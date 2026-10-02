import { useEffect, useRef, useState, useSyncExternalStore } from 'react'

/* Adds the "in" state once an element scrolls into view. Used for reveal on scroll and to start animations. */
export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null)
  /* Without an observer (very old browsers) the element counts as seen from the start. */
  const [inView, setInView] = useState(() => typeof window !== 'undefined' && !('IntersectionObserver' in window))

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [inView, threshold])

  return { ref, inView }
}

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/* The same question as a hook, safe to read while rendering: the server and the hydration pass both answer false (what
   the prerendered HTML shows), then the reader's own setting applies, so a reduced motion reader never causes a
   hydration mismatch. It also follows the setting if it changes while the page is open. */
const REDUCE = '(prefers-reduced-motion: reduce)'
function onMotionChange(cb: () => void) {
  const mq = window.matchMedia(REDUCE)
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}
export function useReducedMotion() {
  return useSyncExternalStore(onMotionChange, () => window.matchMedia(REDUCE).matches, () => false)
}
