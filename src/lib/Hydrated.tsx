import { useEffect } from 'react'
import { hydrated } from './hydration'

/* Renders nothing: its effect runs once the first render has committed, after every other component's, and tells the
   app the page is hydrated (lib/hydration.ts). src/main.tsx draws it last. */
export function Hydrated() {
  useEffect(hydrated, [])
  return null
}
