/* The app screens set their stories' timing and geometry as CSS custom properties on the element itself
   (style={{ '--d': '.04s' }} in src/screens/NAME.tsx). */
import 'react'

declare module 'react' {
  interface CSSProperties {
    [name: `--${string}`]: string | number | undefined
  }
}
