/* Small pieces the console (HeroExplorer) and its question run (InsightRun) share: icons, a timer, the reduced motion
   check and a checklist. */

export const SEARCH_IC =
  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/><path d="m10.5 10.5 3 3"/></svg>'
export const ASK_IC =
  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M8 1.8 9.4 6.6 14.2 8 9.4 9.4 8 14.2 6.6 9.4 1.8 8 6.6 6.6Z"/></svg>'
export const ENTER =
  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 3.5v4.5a2 2 0 0 1-2 2H3.5"/><path d="m6.5 7-3 3 3 3"/></svg>'
const CHECK =
  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3.5 8.5 3 3 6-7"/></svg>'
export const LINK =
  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.8 9.2a2.6 2.6 0 0 0 3.7 0l2.2-2.2a2.6 2.6 0 0 0-3.7-3.7l-.9.9"/><path d="M9.2 6.8a2.6 2.6 0 0 0-3.7 0L3.3 9a2.6 2.6 0 0 0 3.7 3.7l.9-.9"/></svg>'

export const wait = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms))
export const still = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const Svg = ({ html, className }: { html: string; className?: string }) => (
  <span className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
)

/* A checklist whose first `done` steps are ticked and the next one is in progress. */
export function Steps({ items, done }: { items: string[]; done: number }) {
  return (
    <ol className="hx-steps">
      {items.map((st, k) => (
        <li key={st} data-st={k < done ? 'done' : k === done ? 'now' : 'next'}>
          <span className="hx-check" aria-hidden="true" dangerouslySetInnerHTML={{ __html: k < done ? CHECK : '' }} />
          {st}
        </li>
      ))}
    </ol>
  )
}
