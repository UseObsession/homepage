import { createElement, use, type ComponentType } from 'react'

/* Code and words the app loads only for the page that needs them (App.tsx). Once loaded they are there at once; a
   render that needs them before that waits (Suspense) until they land. The prerender and the browser's first render load
   the page they draw first (App.tsx preloadRoute), so neither ever waits, and the browser hydrates exactly the HTML the
   prerender wrote; a move to another page waits for its code while the old page stays (the router's transition). */
export type Once<T> = { preload: () => Promise<T>; read: () => T }

export function once<T>(load: () => Promise<T>): Once<T> {
  let value: T | undefined
  let ready = false
  let pending: Promise<T> | undefined
  const preload = () =>
    (pending ??= load().then((v) => {
      value = v
      ready = true
      return v
    }))
  /* Read while rendering: the value, or a wait (Suspense) until it lands. */
  function useLoaded(): T {
    return ready ? (value as T) : use(preload())
  }
  return { preload, read: useLoaded }
}

/* 1 loaded value per key (a recipe's words by its slug). */
export function onceEach<T>(load: (key: string) => Promise<T>) {
  const all = new Map<string, Once<T>>()
  return (key: string) => {
    let one = all.get(key)
    if (!one) all.set(key, (one = once(() => load(key))))
    return one
  }
}

/* A page component whose code loads with it: `preload` fetches it ahead. */
export function lazyPage<P extends object>(load: () => Promise<ComponentType<P>>) {
  const page = once(load)
  function LazyPage(props: P) {
    return createElement(page.read(), props)
  }
  return Object.assign(LazyPage, { preload: page.preload })
}
