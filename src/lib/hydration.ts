/* Whether React is still hydrating the prerendered page (src/main.tsx). Everything it renders then is already in the
   HTML, the app screens too (components/AppScreen), so nothing has to be fetched or measured to show it. It ends once
   the first render has committed, or at once when there is nothing to hydrate (npm run dev). */
let pending = typeof document !== 'undefined'

export const hydrating = () => pending

export function hydrated() {
  pending = false
}
