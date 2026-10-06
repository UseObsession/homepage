import { useEffect, type ReactNode } from 'react'
import { hydrated } from './hydration'

/* Wraps the app in src/main.tsx: its effect runs once the first render has committed, after every other component's,
   and tells the app the page is hydrated (lib/hydration.ts). It wraps rather than sits beside the app, so the tree keeps
   the shape the prerender drew and React's useId gives the same ids in the browser as on the server. */
export function Hydrated({ children }: { children: ReactNode }) {
  useEffect(hydrated, [])
  return children
}
