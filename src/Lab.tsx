import type React from 'react'
import { useParams } from 'react-router-dom'

/* Builders' previews: each section is shown at /lab/NAME with the real copy, only in builds made with VITE_LAB=1.
   src/lab is deleted before the rebuild ships; production never registers the route. */
const LABS = import.meta.glob('./lab/*.tsx', { eager: true }) as Record<string, { default: () => React.ReactNode }>

export function Lab() {
  const { name } = useParams()
  const mod = LABS[`./lab/${name}.tsx`]
  return mod ? <>{mod.default()}</> : <p style={{ padding: 40 }}>No lab named {name}.</p>
}
