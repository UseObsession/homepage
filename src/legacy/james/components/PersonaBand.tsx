import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { catalog, type CatalogRecipe } from '../../../content/catalog'
import type { RecipeId } from '../../../content/types'
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

/* 4 audiences, cut on the diagonal in 1 row. Each one opens its own page. James's band (his first commit,
   src/components/PersonaBand), with his classes as he wrote them: only the data (content/band.ts) and the colours
   (PersonaBand.css, the site's reader palette) are the site's. Since 4 Nov a panel also says where that reader sends its
   AI customers and links the recipes that start there, so a panel is an article whose name is the link, stretched over
   the panel, instead of 1 link around everything (a recipe link can't sit inside another link). .pband-more around the
   line, the places and the recipes is the 1 block the reveal folds. */
const byId = Object.fromEntries(catalog.recipes.map((r) => [r.id, r])) as Record<RecipeId, CatalogRecipe>

export function PersonaBand() {
  return (
    <div className="pband">
      {bandRoles.map((r, i) => (
        <article key={r.id} className="pband-item" data-reader={r.id}>
          <span className="pband-n" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="pband-name">
            <Link to={r.page}>{r.bandName}</Link>
          </h3>
          <div className="pband-more">
            <div className="pband-more-in">
              <p className="pband-line">{r.bandLine}</p>
              <p className="pband-to">
                <span>Sends AI customers to</span> {r.sendsTo}
              </p>
              <ul className="pband-ways">
                {r.recipes
                  .map((id) => byId[id])
                  .filter(Boolean)
                  .map((rec) => (
                    <li key={rec.id}>
                      <Link to={`/recipes/${rec.slug}`}>{rec.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <span className="pband-go" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </article>
      ))}
    </div>
  )
}

/* His Home section around it, the head and the band each revealing as they scroll into view. Since 4 Nov it also does
   the Kinds section's job, so its head is where you send an AI customer, not who you are (COPY.md, "Readers"). */
export function PersonaSection({ id = 'for' }: { id?: string }) {
  return (
    <section className="section" id={id}>
      <div className="wrap">
        <Reveal className="head">
          <p className="kicker">Who you send it to</p>
          <h2 className="h2">Send an AI customer anywhere. A rival, a prospect, or your own company.</h2>
        </Reveal>
        <Reveal>
          <PersonaBand />
        </Reveal>
      </div>
    </section>
  )
}
