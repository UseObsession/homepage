/* hollin (hollin.example): the invented linen shop the gap story's test customer lives through (sections/GapStory).
   Invented on purpose: a .example address, a name no clothing, linen or homeware brand trades under, and Pexels
   photographs with no people, logos or readable text (public/illus/gap/CREDITS.txt). It is another company's world, so
   it speaks in its own voice: plain and warm, no exclamation marks, small exact promises. Its 1 promise, "We reply within
   a day", is the line the outside reads and the inside proves false.
   Photographs live in public/illus/gap as NAME-WIDTH.webp; `img` is NAME. */

export type HollinPhoto = { img: string; widths: [number, number]; ratio: number }

const photo = (img: string, widths: [number, number], ratio: number): HollinPhoto => ({ img, widths, ratio })

export const hollin = {
  name: 'hollin',
  nav: ['Shirts', 'Trousers', 'Bed', 'Table'],
  hero: {
    line: 'Softer every wash.',
    sub: 'Stonewashed linen for the body and the home.',
    cta: 'Shop the shirts',
    wide: photo('hollin-hero', [300, 600], 8 / 3),
    tall: photo('hollin-hero-tall', [160, 320], 4 / 5),
  },
  strip: ['Free UK delivery over £75', 'Free returns for 30 days', 'We reply within a day'],
  products: [
    { name: 'Weekend Shirt', price: '£68', photo: photo('hollin-shirt', [120, 240], 1) },
    { name: 'Pillowcase Pair', price: '£48', photo: photo('hollin-pillowcases', [120, 240], 1) },
    { name: 'Stoneware Mug', price: '£24', photo: photo('hollin-mug', [120, 240], 1) },
  ],
  join: { title: '10% off your first order', button: 'Sign up', done: 'Thanks. Check your inbox.' },
  email: {
    from: 'hello@hollin.example',
    head: 'Welcome in.',
    body: 'Everything we make is stonewashed, so it arrives soft and only gets softer.',
    code: 'SOFTER10',
    cta: 'Shop new season',
    photo: photo('hollin-email', [240, 480], 8 / 3),
  },
  chat: { who: 'Assistant · automated replies', input: 'Write a message' },
  /* The bag: `away` says how far the bag is from free delivery ({n} pounds), `free` being the strip's £75. */
  bag: { title: 'Your bag', count: '1 item', qty: 'Qty 1', subtotal: 'Subtotal', away: '£{n} away from free UK delivery', free: 75, checkout: 'Checkout' },
} as const
