import { useEffect, useRef, useState } from 'react'

/* True once an element has scrolled into view: Outcomes starts its figures counting with it. */
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
