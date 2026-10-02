import { privacyPage as p } from '../content/site'
import { NoticeHero, NoticeSections } from './Notice'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

/* "2 October 2026" as 2026-10-02, for <time>. */
function isoDate(d: string) {
  const [day, month, year] = d.split(' ')
  const m = MONTHS.indexOf(month) + 1
  return m && year ? `${year}-${String(m).padStart(2, '0')}-${day.padStart(2, '0')}` : undefined
}

/* /privacy: what the waitlist and the free mystery shop keep, and why (content/site.ts). */
export function Privacy() {
  return (
    <>
      <NoticeHero headline={p.headline} sub={p.sub}>
        <p className="s-notice-hero__meta">
          Updated <time dateTime={isoDate(p.updated)}>{p.updated}</time>
        </p>
      </NoticeHero>
      <NoticeSections sections={p.sections} />
    </>
  )
}
