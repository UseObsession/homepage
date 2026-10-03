import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { bandRoles } from '../content/band'
import '../styles/tokens.css'
import '../styles/base.css'
import '../../JamesPage.css'
import './PersonaBand.css'

/* His reveal on scroll (components/Reveal and hooks/useReveal, as he wrote them), kept here beside the band. Those 2
   files are shared by his use case pages, so importing them from Home would make the bundler cut a new shared chunk
   that Home and both of his pages then each load; this copy keeps the band's code in Home's own chunk. */
function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [inView])

  return (
    <div ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`}>
      {children}
    </div>
  )
}

/* Six audiences, cut on the diagonal in 2 rows of 3. Each one opens its own page. James's band (his first commit,
   src/components/PersonaBand), with his markup and classes as he wrote them: only the data (content/band.ts) and the
   colours (PersonaBand.css, the site's reader palette) are the site's. The sr-only stops are the one addition, so a
   panel reads as sentences to a screen reader. */
export function PersonaBand() {
  return (
    <nav className="pband" aria-label="Who it's for">
      {bandRoles.map((r, i) => (
        <Link key={r.id} to={r.page} className="pband-item" data-reader={r.id}>
          <span className="pband-n" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="pband-name">
            {r.bandName}
            <span className="sr-only">. </span>
          </span>
          <span className="pband-line">
            {r.bandLine}
            <span className="sr-only">. </span>
          </span>
          <span className="pband-ways">
            {r.ways.map((w, wi) => (
              <span key={w}>
                {w}
                {wi < r.ways.length - 1 && <span className="sr-only">, </span>}
              </span>
            ))}
          </span>
          <span className="pband-go" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </Link>
      ))}
    </nav>
  )
}

/* His Home section around it ("Who it's for"), the head and the band each revealing as they scroll into view. */
export function PersonaSection({ id = 'for' }: { id?: string }) {
  return (
    <section className="section" id={id}>
      <div className="wrap">
        <Reveal className="head">
          <p className="kicker">Who it’s for</p>
          <h2 className="h2">Pick who you are.</h2>
          <p className="lede">Recipes, a task in plain words, or the API. Each page shows the parts that fit you.</p>
        </Reveal>
        <Reveal>
          <PersonaBand />
        </Reveal>
      </div>
    </section>
  )
}
