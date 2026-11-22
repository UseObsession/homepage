import { useEffect, useState } from 'react'
import { kitLinks } from '../../content/kitPaths'
import type { PersonaIcon } from '../../content/types'
import { useInView } from '../../hooks/useReveal'
import { PersonaGlyphAt } from '../persona/icons'
import './KitOrbit.css'

/* The kits' signature picture (/blueprints): Obsession in the middle, its 5 pieces on the inner ring, the 6 kits on the outer
   ring, a spoke to each. It draws in once when it enters the view; then a pulse travels each spoke, and the outer ring
   turns slowly. Under prefers-reduced-motion nothing moves and the pulses aren't drawn. On a phone the ring's labels give
   way to the kit cards under it (KitOrbit.css). */

const W = 800
const H = 460
const CX = 400
const CY = 226
const R_IN = 102
const R_OUT = 176

const PIECES: PersonaIcon[] = ['mail', 'phone', 'chat', 'browser', 'sandbox']
const rad = (deg: number) => (deg * Math.PI) / 180
const at = (r: number, deg: number) => ({ x: CX + r * Math.cos(rad(deg)), y: CY + r * Math.sin(rad(deg)) })

export function KitOrbit({ label, caption }: { label: string; caption: string }) {
  const { ref, inView } = useInView<HTMLElement>(0.2)
  const [moving, setMoving] = useState(false)
  const [armed, setArmed] = useState(false)
  useEffect(() => {
    setMoving(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])
  useEffect(() => {
    if (!inView) setArmed(true)
  }, [inView])
  const kits = kitLinks.map((k, i) => ({ ...k, deg: -90 + i * (360 / kitLinks.length) }))
  return (
    <figure ref={ref} className={'k-orbit' + (inView ? ' is-in' : '')} data-armed={armed ? '' : undefined}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label}>
        <defs>
          <radialGradient id="k-orbit-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" className="k-orbit__glow-in" />
            <stop offset="1" className="k-orbit__glow-out" />
          </radialGradient>
        </defs>
        <circle cx={CX} cy={CY} r={150} fill="url(#k-orbit-glow)" />
        <g className="k-orbit__spin" style={{ transformOrigin: `${CX}px ${CY}px` }}>
          <circle cx={CX} cy={CY} r={R_OUT} className="k-orbit__ring k-orbit__ring--out" />
        </g>
        <circle cx={CX} cy={CY} r={R_IN} className="k-orbit__ring" />

        {kits.map((k, i) => {
          const a = at(70, k.deg)
          const b = at(R_OUT - 30, k.deg)
          const d = `M${a.x.toFixed(1)} ${a.y.toFixed(1)} L${b.x.toFixed(1)} ${b.y.toFixed(1)}`
          return (
            <g key={k.id} className="k-orbit__spoke" style={{ ['--i' as string]: i }}>
              <path d={d} />
              {moving && (
                <circle r="3" className="k-orbit__pulse" opacity="0">
                  <animateMotion dur="2.8s" begin={`${1.2 + i * 0.46}s`} repeatCount="indefinite" path={d} />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="2.8s" begin={`${1.2 + i * 0.46}s`} repeatCount="indefinite" />
                </circle>
              )}
            </g>
          )
        })}

        {PIECES.map((p, i) => {
          const c = at(R_IN, -90 + 36 + i * 72)
          return (
            <g key={p} className="k-orbit__piece" style={{ ['--i' as string]: i }}>
              <circle cx={c.x} cy={c.y} r={17} />
              <PersonaGlyphAt name={p} x={c.x - 9} y={c.y - 9} size={18} />
            </g>
          )
        })}

        <g className="k-orbit__core">
          <circle cx={CX} cy={CY} r={62} />
          <text x={CX} y={CY - 2} textAnchor="middle" className="k-orbit__name">
            Obsession
          </text>
          <text x={CX} y={CY + 18} textAnchor="middle" className="k-orbit__sub">
            one API · one bill
          </text>
        </g>

        {kits.map((k, i) => {
          const c = at(R_OUT, k.deg)
          const cos = Math.cos(rad(k.deg))
          const anchor = Math.abs(cos) < 0.2 ? 'middle' : cos > 0 ? 'start' : 'end'
          const lx = anchor === 'middle' ? c.x : c.x + (cos > 0 ? 40 : -40)
          const ly = anchor === 'middle' ? c.y + (Math.sin(rad(k.deg)) < 0 ? -42 : 50) : c.y + 5
          return (
            <g key={k.id} className="k-orbit__kit" style={{ ['--i' as string]: i }}>
              <circle cx={c.x} cy={c.y} r={32} className="k-orbit__halo" />
              <circle cx={c.x} cy={c.y} r={25} className="k-orbit__node" />
              <PersonaGlyphAt name={k.icon} x={c.x - 11} y={c.y - 11} size={22} />
              <text x={lx} y={ly} textAnchor={anchor} className="k-orbit__label">
                {k.name}
              </text>
            </g>
          )
        })}
      </svg>
      <figcaption className="k-orbit__cap">{caption}</figcaption>
    </figure>
  )
}
