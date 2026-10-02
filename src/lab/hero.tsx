import { useEffect, useState } from 'react'
import { Hero } from '../components/sections/Hero'
import { page } from '../content/pages/home'

/* Lab: the hero and console with Home's words.
   ?rm   previews reduced motion (lab only): every run finished, nothing advances.
   ?axis measures each hero element's centre against the page's centre and lists the offsets in px.
   ?tab=N clicks the console's tab N (from 0) once the page has loaded, as a reader would.
   ?focus=SELECTOR focuses the first match (no pointer, so it shows the keyboard ring). */
if (typeof window !== 'undefined' && /[?&]rm\b/.test(window.location.search)) {
  const real = window.matchMedia.bind(window)
  window.matchMedia = (q: string) =>
    q.includes('prefers-reduced-motion')
      ? ({ ...real(q), matches: q.includes('reduce'), media: q, addEventListener() {}, removeEventListener() {} } as MediaQueryList)
      : real(q)
}

const PARTS: [string, string][] = [
  ['pill', '.s-hero-pill'],
  ['headline', '.s-hero-h'],
  ['typed (all tasks)', '.s-typed'],
  ['sub', '.s-hero-sub'],
  ['form pill', '.s-hero .ob-pill-field'],
  ['micro', '.s-hero .ob-field-help'],
  ['privacy', '.s-hero .s-capture__privacy a'],
  ['second path', '.s-hero-secondary'],
  ['proof row', '.s-hero-proof'],
  ['console label', '.s-console-label'],
  ['tabs', '.s-console-tabs'],
  ['window', '.s-console-win'],
]

export function Axis() {
  const [rows, setRows] = useState<string[]>([])
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const tab = q.get('tab')
    const focus = q.get('focus')
    const t = window.setTimeout(() => {
      if (tab !== null) document.querySelectorAll<HTMLButtonElement>('.s-console-tab')[Number(tab)]?.click()
      if (focus !== null) document.querySelectorAll<HTMLElement>(focus)[0]?.focus()
    }, 300)
    return () => window.clearTimeout(t)
  }, [])
  useEffect(() => {
    if (!/[?&]axis\b/.test(window.location.search)) return
    const t = window.setTimeout(() => {
      const mid = document.documentElement.clientWidth / 2
      const out = [`viewport ${document.documentElement.clientWidth}px, centre ${mid}`]
      for (const [name, sel] of PARTS) {
        const el = document.querySelector(sel)
        if (!el) continue
        const r = el.getBoundingClientRect()
        out.push(`${name}: centre offset ${(r.left + r.width / 2 - mid).toFixed(1)}  (left ${r.left.toFixed(0)}, width ${r.width.toFixed(0)})`)
      }
      const h = document.querySelector('.s-hero-h')
      if (h) {
        const range = document.createRange()
        range.selectNodeContents(h)
        const lines = Array.from(range.getClientRects())
        out.push(`headline lines: ${lines.length}; ` + lines.map((l) => `${(l.left + l.width / 2 - mid).toFixed(1)}`).join(', '))
      }
      setRows(out)
    }, 2500)
    return () => window.clearTimeout(t)
  }, [])
  if (!rows.length) return null
  return (
    <pre style={{ position: 'fixed', left: 8, top: 72, zIndex: 999, margin: 0, padding: 12, font: '12px/1.5 monospace', background: '#000c', color: '#9f9', borderRadius: 8 }}>
      {rows.join('\n')}
    </pre>
  )
}

export default function HeroLab() {
  return (
    <>
      <Hero hero={page.hero} cta />
      <Axis />
    </>
  )
}
