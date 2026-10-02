import { useEffect, useRef } from 'react'
import { StatusMark, type Status } from './Logo'

/* A status ring held on its first frame: every mark in a view but the 1 that moves (brand.css, "1 mark moves per
   view"). Decorative: the word beside it says the state. */
export function StillMark({ state, size, className = '' }: { state: Status; size: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const svg = ref.current?.querySelector('svg')
    if (!svg) return
    svg.pauseAnimations()
    svg.setCurrentTime(0)
  })
  return (
    <span ref={ref} className={className} aria-hidden="true">
      <StatusMark state={state} size={size} />
    </span>
  )
}
