import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { blueprintPieces, blueprintUi as ui, pieceChips } from '../../content/blueprint-ui'
import { piecePaths } from '../../content/piecePaths'
import type { PieceId } from '../../content/prices'
import { PersonaGlyph } from '../persona/icons'
import './blueprint.css'

/* The pieces a blueprint runs on (content/blueprint-ui.ts), as a row of chips under the page's first claim: the persona
   first, then each piece, every chip linking its page. Once, when the row scrolls into view, the chips switch on in turn
   (each from quiet to full ink), so the reader sees the job is these pieces working together. The prerendered row is
   finished: the script arms it (data-armed) only below the fold, and reduced motion never arms it. */

const RM = '(prefers-reduced-motion: reduce)'

export function piecesOf(slug: string): PieceId[] {
  return ['personas', ...(blueprintPieces[slug] ?? [])]
}

export function RunsOn({ slug }: { slug: string }) {
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<'rest' | 'armed' | 'play'>('rest')

  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia(RM).matches || !('IntersectionObserver' in window)) return
    let first = true
    const io = new IntersectionObserver(
      ([e]) => {
        if (first) {
          first = false
          /* Already on screen when the script starts: leave it finished. */
          if (e.isIntersecting) return io.disconnect()
          setState('armed')
          return
        }
        if (!e.isIntersecting) return
        setState('play')
        io.disconnect()
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const pieces = piecesOf(slug)
  return (
    <div className="bp-runs" ref={ref} data-armed={state !== 'rest' ? '' : undefined} data-play={state === 'play' ? '' : undefined}>
      <span className="bp-runs__label" id={`${id}-l`}>
        {ui.runsOn}
      </span>
      <ul className="bp-runs__list" aria-labelledby={`${id}-l`}>
        {pieces.map((p, i) => (
          <li key={p} style={{ ['--bp-i' as string]: i }}>
            <Link className="bp-runs__chip" to={piecePaths[p]}>
              <PersonaGlyph name={pieceChips[p].icon} />
              {pieceChips[p].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
