/* James's 2 use case pages, restored as he built them (src/legacy/james). They keep the addresses they always had; the
   app routes these 2 paths to his pages, and every other worked example (content/usecases) to the study system. */
export const JAMES_PATHS = {
  prospect: '/use-cases/prospect-intelligence-with-clay',
  price: '/use-cases/member-prices-for-price-intelligence',
}

export const isJamesPath = (path: string) => path === JAMES_PATHS.prospect || path === JAMES_PATHS.price
