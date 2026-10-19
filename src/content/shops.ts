/* The 4 shops on the mystery shopping use case's proof (components/study/Found). Each retells 1 finding from a real
   audit (Seun, 7 Oct: the anonymised examples, already chosen), with the store, the brand and the product changed, so
   nothing on the page points at a real shop. Every name is invented and checked against its trade (7 Oct): pellam
   (clothing), Celandre (cosmetics), quinnet (drinks), ferula (natural beauty), each at a .example address.
   Redrawn 19 Oct (James: the drawn emails didn't look like anything a customer saw): each finding is now what the agent
   recorded, not a picture of the shop. Its log is what the agent did and the emails as they landed in its inbox
   (sender, subject, the first line), in order; its proof is the 1 thing that makes the point (what was expected beside
   what came, the blanks in the cart email, the closed store a button opened, the 48 hours with nothing in them).
   The facts stay as the audits found them, and nothing is added: no revenue, no dates, no other journeys. Only email was
   watched, so every absence is "no email". A row without a time had none in the audit. */

export type ShopRow =
  | { kind: 'did'; time?: string; text: string }
  | { kind: 'mail'; time: string; from: string; subject: string; preview: string }

export type ShopProof =
  | { kind: 'expect'; expected: string; got: string }
  | { kind: 'blanks'; label: string; fields: string[] }
  | { kind: 'closed'; url: string; head: string; line: string }
  | { kind: 'watch'; ticks: string[]; none: string }

export const shops: Record<'pellam' | 'celandre' | 'quinnet' | 'ferula', { rows: ShopRow[]; proof: ShopProof }> = {
  /* Fashion, basket left: a buyer treated as a browser. 2 hours after the basket, the browse email arrived, asking if
     they were "just window shopping", with 1 viewed product and no basket. */
  pellam: {
    rows: [
      { kind: 'did', time: '10:12', text: 'Added a Wool Overshirt, oat, size M, to the basket' },
      { kind: 'did', time: '10:14', text: 'Left the site' },
      {
        kind: 'mail',
        time: '12:14',
        from: 'pellam',
        subject: 'Just window shopping?',
        preview: 'Still thinking it over? You looked at: Wool Overshirt',
      },
    ],
    proof: { kind: 'expect', expected: 'A basket reminder, naming the overshirt', got: 'A browse email, with no basket in it' },
  },
  /* Cosmetics, basket left: 2 cart emails, both with an empty item table, no product name and a blank total. The
     blanks are shown as blanks; nothing stands in for them. */
  celandre: {
    rows: [
      { kind: 'did', text: 'Left a basket' },
      { kind: 'mail', time: '11:12', from: 'Celandre', subject: 'You left something behind', preview: 'Your bag is waiting' },
      { kind: 'mail', time: 'Next day', from: 'Celandre', subject: 'Still in your bag', preview: 'Your bag is waiting' },
    ],
    proof: { kind: 'blanks', label: 'In your bag, in both emails', fields: ['Product', 'Quantity', 'Total'] },
  },
  /* Drinks, new subscriber: the welcome email arrived, but every product link and button went to a closed development
     store, not the live shop. */
  quinnet: {
    rows: [
      { kind: 'did', text: 'Signed up for emails' },
      {
        kind: 'mail',
        time: '09:31',
        from: 'quinnet',
        subject: 'Welcome to quinnet',
        preview: 'Welcome to the fizz. Your code: FIRSTFIZZ',
      },
      { kind: 'did', text: 'Pressed “Shop the range”' },
    ],
    proof: { kind: 'closed', url: 'dev.quinnet.example/shop', head: 'This store is closed.', line: 'Only its owner can enter.' },
  },
  /* Natural beauty, basket left: the shopper was already a subscriber and got the welcome email, then no cart email in
     48 hours. The store had their address, so there was someone to write to. */
  ferula: {
    rows: [
      {
        kind: 'mail',
        time: 'Day 0, 09:02',
        from: 'ferula',
        subject: 'Welcome to ferula',
        preview: 'Welcome, friend. Bars for hair and body, made with what grows.',
      },
      { kind: 'did', time: 'Day 0, 09:40', text: 'Left a Calendula Body Bar in the basket' },
    ],
    proof: { kind: 'watch', ticks: ['0 h', '12 h', '24 h', '36 h', '48 h'], none: 'No cart email in 48 hours' },
  },
}
