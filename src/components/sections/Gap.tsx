import { useId, type CSSProperties, type ReactNode } from 'react'
import type { Gap as GapContent, ReaderId } from '../../content/types'
import { Mark } from '../Logo'
import './Gap.css'

/* The gap (docs/REBUILD.md 2, beat 3): today vs with Obsession, read as 1 claim, not a table of cards.
   Each row pairs what a reader lives with today and what changes. "Today" sits quiet on the page; the Obsession
   column is 1 raised panel down the whole comparison, in full ink, so it carries the weight. Each cell also says
   its column to a screen reader, so a row reads as a sentence pair.
   The 2 column names are the page's own words for the comparison ("today vs with Obsession").
   It is the page's ink chapter (Paper and Gloss, styles/tones.css): full bleed ink on paper, lit from above on ink. On a
   reader's page (`reader`) that light is the reader's hue.
   A page whose gap has a `story` (Home, Marketing) passes the picture as `story`, and it shows first (sections/GapStory):
   the difference felt in 1 look, then the rows say it in words. There the picture holds the chapter's 1 lit thing (its
   receipts are the bone paper), so the rows drop the sheet and read as words on the ink, opened by the ink rule. The
   page imports the picture, never this section, so only the pages that show it load its code (the app's chunks, App.tsx).
   A gap with no rows (Home) is the claim and its picture alone. */

type Props = {
  gap: GapContent
  id?: string
  labels?: { today: string; obsession: string }
  reader?: ReaderId
  /* The page's picture of the gap (sections/GapStory), drawn from `gap.story`. */
  story?: ReactNode
}

export function Gap({ gap, id, labels = { today: 'Today', obsession: 'With Obsession' }, reader, story }: Props) {
  const uid = useId()
  const headId = `${uid}-h`

  return (
    <section
      className={'s-section s-gap ob-theme-dark' + (story ? ' s-gap--story' : '') + (gap.rows.length ? '' : ' s-gap--bare')}
      data-tone="ink"
      data-reader={reader}
      id={id}
      aria-labelledby={headId}
    >
      <div className="s-wrap">
        <header className="s-head s-gap-head">
          <h2 id={headId} className="ob-type-h2">
            {gap.heading}
          </h2>
          {gap.sub && <p className="ob-type-body-lg">{gap.sub}</p>}
        </header>

        {story}

        {gap.rows.length > 0 && (
          <div className="s-gap-cmp" style={{ '--s-gap-rows': gap.rows.length } as CSSProperties}>
            <div className="s-gap-panel" aria-hidden="true" />
            <div className="s-gap-cols" aria-hidden="true">
              <span className="s-gap-col s-gap-col--today">
                {labels.today}
                <svg className="s-gap-arrow" viewBox="0 0 16 16" focusable="false">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
              <span className="s-gap-col s-gap-col--obs">
                <Mark size={16} />
                {labels.obsession}
              </span>
            </div>
            <ul className="s-gap-rows">
              {gap.rows.map((r) => (
                <li key={r.today} className="s-gap-row">
                  <p className="s-gap-today">
                    <span className="ob-sr">{labels.today}: </span>
                    {r.today}
                  </p>
                  <p className="s-gap-obs">
                    <span className="ob-sr">{labels.obsession}: </span>
                    {r.obsession}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
