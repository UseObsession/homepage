import type { CSSProperties } from 'react'

/* Position in a staggered entrance: children of .uc-seq play in order once their window starts playing. */
export const at = (i: number) => ({ '--i': i }) as CSSProperties
