/* Worked examples under Use cases in the nav: one job from start to finish, with made up names and numbers. */
export type UseCasePage = { path: string; label: string; line: string; title: string; description: string }

export const useCasePages: UseCasePage[] = [
  {
    path: '/use-cases/prospect-intelligence-with-clay',
    label: 'Prospect intelligence with Clay',
    line: 'Proof of a real gap at each brand, back in Clay.',
    title: 'Prospect intelligence with Clay · Obsession',
    description:
      'An illustrated example: an outbound agency sends a client’s list from Clay, Obsession becomes a customer of each brand and watches for 48 hours, and the facts and proof come back as columns on the same rows.',
  },
  {
    path: '/use-cases/member-prices-for-price-intelligence',
    label: 'Member prices for price intelligence',
    line: 'What retailers show only after sign up, fed to your platform.',
    title: 'Member prices for price intelligence · Obsession',
    description:
      'An illustrated example: a price intelligence firm adds member prices, welcome coupons and the offers that arrive after sign up to the flyers, shelves, online prices and newsletters it already collects, delivered as a feed with the proof.',
  },
]
