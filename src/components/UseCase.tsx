import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { prefersReducedMotion } from '../hooks/useReveal'
import { Reveal } from './Reveal'
import './UseCase.css'

/* The pieces every use case page is built from: a mock app window, its staggered animations, a counter and a step. */


const Playing = createContext(false)

/* Plays the animations inside it just before it scrolls into view. Nothing is hidden at rest: a window that is
   already on screen, a reader who prefers less motion, or a missed trigger all leave the finished illustration. */
export function Play({ className, children }: { className: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || !('IntersectionObserver' in window)) return
    if (el.getBoundingClientRect().top < window.innerHeight) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlaying(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px 120px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Playing.Provider value={playing}>
      <div ref={ref} className={`uc-play ${className} ${playing ? 'is-in' : ''}`}>
        {children}
      </div>
    </Playing.Provider>
  )
}

export function Win({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Play className="uc-win">
      <div className="uc-bar">
        <i />
        <i />
        <i />
        <span>{title}</span>
        <em className="tag idle">Example</em>
      </div>
      <div className="uc-body">{children}</div>
    </Play>
  )
}

/* Counts up from 0 when its window starts playing. At rest, and in the prerendered HTML, it shows the final number. */
export function Count({ to }: { to: number }) {
  const playing = useContext(Playing)
  const [n, setN] = useState(to)

  useEffect(() => {
    if (!playing || prefersReducedMotion()) return
    let raf = 0
    const start = performance.now() + 300
    const tick = (t: number) => {
      const p = Math.min(1, Math.max(0, (t - start) / 1400))
      setN(Math.round(to * (1 - (1 - p) ** 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing, to])

  return <>{n.toLocaleString('en-GB')}</>
}

export function Step({ n, title, line, pick, children }: { n: number; title: string; line: string; pick?: ReactNode; children: ReactNode }) {
  return (
    <div className="uc-step">
      <Reveal className="uc-step-text">
        <span className="uc-n">{String(n).padStart(2, '0')}</span>
        <h3 className="h3">{title}</h3>
        <p className="muted">{line}</p>
        {pick && (
          <p className="uc-pick">
            <span className="kicker">In this example</span>
            <span>{pick}</span>
          </p>
        )}
      </Reveal>
      {children}
    </div>
  )
}
