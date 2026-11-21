import type { ReactNode } from 'react'
import type { PersonaIcon } from '../../content/types'

/* The line drawings of Home's sections (the pieces' tiles, what's built in), each on a 16px grid in the nav's style
   (components/Nav ToolIcon: the pieces are drawn as the nav draws them). The svg sets no size: the caller's CSS does,
   with fill none and the stroke in currentColor. */
const PATHS: Record<PersonaIcon, ReactNode> = {
  mail: (
    <>
      <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
      <path d="m2.5 4.5 5.5 4.5 5.5-4.5" />
    </>
  ),
  phone: (
    <>
      <rect x="4.5" y="1.5" width="7" height="13" rx="1.5" />
      <path d="M7 12.2h2" />
    </>
  ),
  chat: <path d="M3 3h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.5L4.5 13.5V11H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />,
  browser: (
    <>
      <circle cx="8" cy="8" r="5.5" />
      <path d="M2.5 8h11M8 2.5c1.6 1.6 2.4 3.4 2.4 5.5S9.6 11.9 8 13.5C6.4 11.9 5.6 10.1 5.6 8S6.4 4.1 8 2.5Z" />
    </>
  ),
  sandbox: (
    <>
      <rect x="2" y="3" width="12" height="10" rx="1.5" />
      <path d="m4.8 6.5 2 1.5-2 1.5M8.2 10h3" />
    </>
  ),
  persona: (
    <>
      <rect x="2" y="2" width="12" height="12" rx="2" />
      <circle cx="8" cy="6.5" r="2" />
      <path d="M4.8 12c.5-1.7 1.7-2.6 3.2-2.6s2.7.9 3.2 2.6" />
    </>
  ),
  sleep: <path d="M13 9.6A5.5 5.5 0 1 1 6.4 3a4.4 4.4 0 0 0 6.6 6.6Z" />,
  home: (
    <>
      <path d="M2.5 7.5 8 3l5.5 4.5v5.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5Z" />
      <path d="M6.5 13.5V10h3v3.5" />
    </>
  ),
  person: (
    <>
      <circle cx="8" cy="5.5" r="2.5" />
      <path d="M3 13.5c.6-2.6 2.6-4 5-4s4.4 1.4 5 4" />
    </>
  ),
  users: (
    <>
      <circle cx="6" cy="5.5" r="2.2" />
      <path d="M2 13c.5-2.2 2-3.3 4-3.3s3.5 1.1 4 3.3M11 3.6a2 2 0 0 1 0 3.8M12 9.9c1 .4 1.7 1.4 2 3.1" />
    </>
  ),
  cap: (
    <>
      <path d="M2.5 11.5a5.5 5.5 0 1 1 11 0" />
      <path d="m8 11.5 2.6-3.2" />
    </>
  ),
  stop: (
    <>
      <path d="M5.5 2h5L14 5.5v5L10.5 14h-5L2 10.5v-5Z" />
      <path d="M5.5 8h5" />
    </>
  ),
  webhook: <path d="M9 1.5 3.5 9H8l-1 5.5L12.5 7H8Z" />,
  record: (
    <>
      <path d="M2 5V3a1 1 0 0 1 1-1h2M11 2h2a1 1 0 0 1 1 1v2M14 11v2a1 1 0 0 1-1 1h-2M5 14H3a1 1 0 0 1-1-1v-2" />
      <circle cx="8" cy="8" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="8" cy="8" r="5.5" />
      <path d="M8 5v3.2l2.2 1.4" />
    </>
  ),
  code: <path d="M5.5 4.5 2 8l3.5 3.5M10.5 4.5 14 8l-3.5 3.5M9 3l-2 10" />,
}

export function PersonaGlyph({ name }: { name: PersonaIcon }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      {PATHS[name]}
    </svg>
  )
}
