/* The September store check behind the sample report, as data. Text is from the report itself
   (site/sample-report.html), with the store name hidden as "Brand G". */

export const report = {
  kicker: 'Sample report · store name hidden · September 2026',
  store: 'Brand G',
  headline: 'Shoppers who left with a full cart, or at checkout, heard nothing',
  summary:
    '4 labelled test customers shopped Brand G for 48 hours, each with its own inbox. 3 journeys came back with a clear verdict, and 2 of those found a gap: no email arrived after a shopper left a full basket, or started checkout and left without paying.',
  figures: [
    { value: '4', label: 'Journeys shopped' },
    { value: '2', label: 'Gaps found' },
    { value: '15', label: 'Screenshots taken' },
    { value: '5', label: 'Messages received' },
    { value: '48h', label: 'Watched for' },
  ],
  journeys: [
    { n: 1, name: 'Welcome', tag: 'No verdict', tone: 'idle', body: 'Signed up and waited for the welcome message. 2 messages in the 48 hour window.' },
    { n: 2, name: 'Browse', tag: 'Delivered', tone: 'ok', body: 'Viewed products and left without adding to the basket. 3 messages in the window.' },
    { n: 3, name: 'Cart', tag: 'Silent', tone: 'bad', body: 'Added to the basket and left before checkout. No reminder in the window.' },
    { n: 4, name: 'Checkout', tag: 'Silent', tone: 'bad', body: 'Began checkout and left before paying. No reminder in the window.' },
  ],
  setup: [
    { k: 'Journeys', v: 'welcome, browse, cart, checkout, one inbox each' },
    { k: 'Inbox', v: 'checkout.g7@test.useobsession.com' },
    { k: 'Started', v: 'Tuesday 22 September 2026, 03:11 UK time' },
    { k: 'Watched to', v: 'Thursday 24 September 2026, 03:11 UK time' },
    { k: 'Shopped from', v: 'United Kingdom' },
  ],
  result: [
    { k: 'Messages', v: '5 received inside the 48 hour window' },
    { k: 'Verdict', v: 'checkout: email not received · cart: email not received' },
  ],
  observation:
    'No message reached checkout.g7@test.useobsession.com in the 48 hours from 03:11 UK time on 22 September 2026 to 03:11 UK time on 24 September 2026.',
  gaps: [
    {
      n: 1,
      journey: 'Checkout',
      title: 'Nothing followed up a shopper who left at checkout',
      finding: 'No email arrived in the 48 hours after we started checkout and left without paying.',
      inbox: 'checkout.g7@test.useobsession.com',
      window: '22 Sep 2026, 03:11 to 24 Sep 2026, 03:11 UK time',
      basket: { item: 'Deodorant', price: '£21' },
      draft: { subject: 'James, you were one step from done', image: '/report/draft-checkout.png' },
    },
    {
      n: 2,
      journey: 'Cart',
      title: 'Nothing followed up a shopper who left a full cart',
      finding: 'No email arrived in the 48 hours after we added an item to the basket and left.',
      inbox: 'cart.g3@test.useobsession.com',
      window: '22 Sep 2026, 02:57 to 24 Sep 2026, 02:57 UK time',
      basket: { item: 'Body Care Gift Set', price: '£40' },
      draft: { subject: 'James, your Body Care Gift Set is still in your bag', image: '/report/draft-cart.png' },
    },
  ],
  consent:
    'Our test shopper subscribed with the marketing box ticked before this journey, so Brand G had permission to write.',
}
