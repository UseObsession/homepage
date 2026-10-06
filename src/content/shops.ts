/* The 4 shops on the mystery shopping use case's proof (components/study/Found). Each retells 1 finding from a real
   audit (Seun, 7 Oct: the anonymised examples, already chosen), with the store, the brand and the product changed, so
   nothing on the page points at a real shop. Every name is invented and checked against its trade (7 Oct): pellam
   (clothing), Celandre (cosmetics), quinnet (drinks), ferula (natural beauty), each at a .example address.
   Each is drawn as its own world, the way hollin is (content/hollin.ts): a wordmark, its colours, its product, and the
   email it actually sent, in its own voice. The facts stay as the audits found them, and nothing is added: no revenue,
   no dates, no other journeys. Only email was watched, so every absence is "no email". Their colours and type live
   in components/study/Found.css, on their own surfaces only, never on a tag or a mark of ours. */

export const shops = {
  /* Fashion, basket left: a buyer treated as a browser. 2 hours after the basket, the browse email arrived, asking if
     they were "just window shopping", with 1 viewed product and no basket. */
  pellam: {
    name: 'pellam',
    from: 'hello@pellam.example',
    product: { name: 'Wool Overshirt', detail: 'Oat · Size M' },
    trail: [
      { glyph: 'basket', title: 'Added to basket', time: '10:12' },
      { glyph: 'leave', title: 'Left the site', time: '10:14' },
      { glyph: 'mail', title: 'Email in', time: '12:14' },
    ],
    wait: '2 hours',
    mail: {
      subject: 'Just window shopping?',
      head: 'Still thinking it over?',
      seen: 'You looked at',
      cta: 'Take another look',
    },
  },
  /* Cosmetics, basket left: 2 cart emails, both with an empty item table, no product name and a blank total. The
     blanks are drawn as blanks; nothing stands in for them. */
  celandre: {
    name: 'Celandre',
    from: 'care@celandre.example',
    inbox: [
      { subject: 'You left something behind', time: '11:12' },
      { subject: 'Still in your bag', time: 'Next day' },
    ],
    mail: {
      head: 'Your bag is waiting',
      table: 'In your bag',
      qty: 'Quantity:',
      total: 'Total: $',
      cta: 'Return to my bag',
    },
  },
  /* Drinks, new subscriber: the welcome email arrived, but every product link and button went to a closed development
     store, not the live shop. */
  quinnet: {
    name: 'quinnet',
    from: 'hi@quinnet.example',
    mail: {
      time: '09:31',
      subject: 'Welcome to quinnet',
      head: 'Welcome to the fizz.',
      body: 'Small batch sodas, brewed with real botanicals.',
      product: 'Blood Orange Soda',
      code: 'FIRSTFIZZ',
      cta: 'Shop the range',
      link: 'dev.quinnet.example/shop',
    },
    closed: { url: 'dev.quinnet.example', head: 'This store is closed.', line: 'Only its owner can enter.' },
  },
  /* Natural beauty, basket left: the shopper was already a subscriber and got the welcome email, then no cart email in
     48 hours. The store had their address, so there was someone to write to. The bar is calendula: a rosemary bar sat
     too close to a well known natural brand's own line. */
  ferula: {
    name: 'ferula',
    from: 'hello@ferula.example',
    welcome: {
      time: 'Day 0 · 09:02',
      subject: 'Welcome to ferula',
      head: 'Welcome, friend.',
      body: 'Bars for hair and body, made with what grows.',
    },
    basket: { label: 'Left in the basket', item: 'Calendula Body Bar', time: 'Day 0 · 09:40' },
    watch: { ticks: ['0 h', '12 h', '24 h', '36 h', '48 h'], none: 'No cart email' },
  },
} as const
