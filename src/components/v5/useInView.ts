import { useEffect, useRef, useState } from 'react'

/* True once the element has come into view, and then for good (a section that plays its story once). Under reduced
   motion it is true from the start, so nothing waits to be drawn. Before the app hydrates, the boot script sets
   data-on on the same elements ([data-v5-play], src/boot.ts), so a story can start before the app arrives. */
export function useInView<T extends Element>(threshold = 0.3) {
  const ref = useRef<T>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || el.hasAttribute('data-on')) {
      setOn(true)
      return
    }
    if (!('IntersectionObserver' in window)) {
      setOn(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, on] as const
}
