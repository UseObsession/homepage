import { useEffect, useRef } from 'react'
import working from '../assets/logo/states/working.svg?raw'
import waiting from '../assets/logo/states/waiting.svg?raw'
import needsYou from '../assets/logo/states/needs-you.svg?raw'
import landed from '../assets/logo/states/landed.svg?raw'

/* The final Obsession logo (Brand/Logo, 2 Oct 2026), synced by scripts/sync-assets.mjs.
   Outlined SVG files only: never retype the wordmark, recolour the ring or add an arrowhead.
   - Lockups: the nav lockup from 16 to 24px tall, the full lockup from 32px up.
   - White (bone) files on dark grounds, black (ink) files on paper. "auto" shows the right one for the section's theme.
   - Status: the 4 animated marks from Brand/Logo/states, inline so they take the text colour. */

type Tone = 'auto' | 'white' | 'black'

const LOCKUP = {
  nav: { file: 'obsession-lockup-nav', ratio: 5907.5 / 749 },
  full: { file: 'obsession-lockup', ratio: 5719 / 749 },
}

export function Lockup({ height = 20, tone = 'auto', className }: { height?: number; tone?: Tone; className?: string }) {
  const kind = height < 32 ? LOCKUP.nav : LOCKUP.full
  const width = Math.round(height * kind.ratio * 10) / 10
  const img = (ink: 'white' | 'black', extra: string) => (
    <img
      key={ink}
      className={'s-lockup ' + extra + (className ? ' ' + className : '')}
      src={`/logo/${kind.file}-${ink}.svg`}
      width={width}
      height={height}
      alt="Obsession"
      decoding="async"
    />
  )
  if (tone !== 'auto') return img(tone, '')
  return (
    <>
      {img('white', 's-on-dark')}
      {img('black', 's-on-paper')}
    </>
  )
}

/* The ring on its own, in the text colour. The small mark (heavier) holds at 16 to 24px; the full mark from 32px. */
export function Mark({ size = 22, label }: { size?: number; label?: string }) {
  const small = size < 32
  return (
    <svg
      className="s-mark"
      width={size}
      height={size}
      viewBox="10 10 80 80"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <path
        fill="currentColor"
        d={
          small
            ? 'M88.73 40A40 40 0 1 1 60 11.27V27.087A25 25 0 1 0 72.913 40ZM65 15h20v20h-20Z'
            : 'M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402ZM65.404 16.011h18.585v18.585h-18.585Z'
        }
      />
    </svg>
  )
}

/* The site's logo link target: the nav lockup, themed. */
export function Logo({ height = 20 }: { height?: number }) {
  return <Lockup height={height} />
}

export type Status = 'working' | 'waiting' | 'needs-you' | 'landed'
const STATES: Record<Status, { svg: string; label: string }> = {
  working: { svg: working, label: 'Working' },
  waiting: { svg: waiting, label: 'Waiting on the other company' },
  'needs-you': { svg: needsYou, label: 'Needs you' },
  landed: { svg: landed, label: 'Landed' },
}

/* An agent's status, as the brand's animated mark. With reduced motion it holds still on its finished frame. */
export function StatusMark({ state, size = 16, label }: { state: Status; size?: number; label?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const s = STATES[state]
  const svg = s.svg.replace('<svg ', `<svg width="${size}" height="${size}" aria-hidden="true" focusable="false" `)

  useEffect(() => {
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) return
    ref.current?.querySelectorAll('animate, animateTransform').forEach((a) => a.remove())
  }, [state])

  return (
    <span
      ref={ref}
      className="s-status"
      role="img"
      aria-label={label ?? s.label}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
