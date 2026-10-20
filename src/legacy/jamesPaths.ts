/* The use case pages drawn in James's format: his 2, restored as he built them (src/legacy/james), and the retention
   agencies page (src/pages/RetentionAgencies.tsx), built from his pieces on 20 Oct 2026. They keep their own addresses;
   the app routes these paths to their pages, and every other worked example (content/usecases) to the study system. */
export const JAMES_PATHS = {
  prospect: '/use-cases/prospect-intelligence-with-clay',
  price: '/use-cases/member-prices-for-price-intelligence',
  retention: '/use-cases/competitor-emails-for-retention-agencies',
}

export const isJamesPath = (path: string) => Object.values(JAMES_PATHS).includes(path)
