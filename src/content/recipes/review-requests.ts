import type { Capture, Recipe } from '../types'

/* Review requests (/recipes/review-requests). Keep and grow customers. For customer marketing.
   Screen: reviews (Your company / Missions / Review requests, October. Each existing customer asked at their moment:
   Coffee roaster, Mara L., delivered, asked 09:14; Dental group, Ravi S., ticket solved, asked Tue, then a 5 star
   review; Outdoor gear, Ines P., onboarded, asked Mon, then a reference call on Tue 27 Oct; Pet food, Joel T.,
   delivered, a 3 star review; Candles, Hana W., onboarded, a case study approved; Garden centre, Kofi A., ticket
   solved, asked Mon. Reviews this month go from 13 to 14 (8 five star, 3 four, 2 three, 1 two, 0 one), the ask from 41
   sent to 42. The ask: "How did we do? Leave us a review, good or bad.", to existing customers, from
   hi@company.example, approved by AM. "Everyone asked the same way". The toast: a new 5 star review from Dental
   group). Never a skincare customer here: the 1 real run is a skincare store, and on /marketing the 2 sit together.
   On the page AM is "you".
   The job (Seun, 3 Oct): every real customer asked the same way at the right moment, sent from the brand's own channel
   after its OK.
   Red lines held: real customers only; every customer gets the same words at their moment, whatever they might say
   (never review gating: every ask carries the same review link, so nobody is pointed to a review only after a happy
   reply; no asking only the happy ones, no sorting by mood or score, no steering unhappy customers away from a public
   review); nothing offered for a review, and it never writes, suggests or posts a review; the ask is
   approved once (words, review link, who and the address), and any change to it and every reply to a customer waits for the OK;
   each ask comes from the brand's own address and says its AI agent sent it; a review stands as written, and the
   agent never asks anyone to change or remove one; reference calls and case studies only from customers who offer
   them, drafted for the OK, and a case study used only once the customer approves it; stops for anyone who asks.
   Up-to-50 rule: the 1 modelled figure is the example's ceiling, with its sum in the same line: up to 1 review for
   every 3 customers asked, 14 of the 42 asked in October (14 ÷ 42 = 1 in 3). No sources, prices of Obsession or real
   names (review sites included) on the page. The run is an example and says so. */

const roles: Capture['roles'] = {
  question: 'What’s your role?',
  options: ['Customer marketing', 'Customer success', 'Marketing leader', 'Founder or owner', 'Something else'],
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'reviews',
  slug: 'review-requests',
  name: 'Review requests',
  group: 'Keep and grow customers',
  line: 'Asks every real customer for a review at the right moment, with the same words for everyone, from your own address.',
  gets: 'Every customer asked the same way at the right moment, and every answer kept as they gave it.',
  kit: [
    'An agent ID, declared as AI',
    'Orders, tickets and onboarding, read only',
    'Your own sending address',
    'The ask you approved, which it can’t change',
    'A stop list it always honours',
    'Every ask and answer signed and dated',
  ],

  meta: {
    path: '/recipes/review-requests',
    title: 'Review requests: ask every customer the same way · Obsession',
    description:
      'A declared AI agent asks every real customer for a review at the right moment, with the same words for everyone, from your own address after your OK.',
    answer:
      'Review requests is an Obsession recipe. A declared AI agent asks every real customer for a review at the right moment, such as a delivery, a solved ticket or the end of onboarding. Everyone gets the same words, from your own address, once you approve the ask, and every answer is kept as the customer gave it.',
    ogImage: '/og/review-requests.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Review requests', path: '/recipes/review-requests' },
    ],
  },

  hero: {
    headline: 'AI agents that ask every customer for a review, the same way.',
    sub: 'A declared AI agent asks every real customer the day their order lands, their ticket is solved or their onboarding ends. Everyone gets the words you approved, from your own address, whatever they might say.',
    screen: 'reviews',
    capture: {
      kind: 'waitlist',
      source: 'recipe-reviews-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'reviews',
    },
  },

  run: {
    tab: 'Example: October’s customers',
    recipe: 'reviews',
    task: 'Ask every customer for a review at their moment: a delivery, a solved ticket or the end of onboarding. Same words for everyone, from hi@company.example, and keep every answer.',
    targets: 'Your existing customers, 42 asked in October',
    journey: ['Spot each customer’s moment', 'Ask with the words you approved', 'Send from your own address', 'Keep every answer'],
    schedule: 'Every day, at each customer’s moment',
    report: 'Every ask and answer, with a weekly note',
    kit: ['Agent ID, declared as AI', 'Orders and tickets, read only', 'Your own address', 'The ask you approved'],
    events: [
      { time: '1 Oct, 09:00', text: 'You approve the ask once: “How did we do? Leave us a review, good or bad.” The same link for every existing customer, from hi@company.example.' },
      { time: 'Mon 10:05', text: 'Outdoor gear finishes onboarding and Garden centre’s ticket is solved. Ines and Kofi get the same ask.' },
      { time: 'Tue 16:20', text: 'Dental group’s ticket is solved. Ravi gets the same ask.' },
      { time: 'Wed 11:30', text: 'Ines replies that she’d happily talk to a buyer. The booking is drafted for your OK, and the call is set for Tue 27 Oct.' },
      { time: 'Thu 09:14', text: 'Coffee roaster’s order is delivered. Mara gets the same ask, the 42nd this month.' },
      { time: 'Thu 09:40', text: 'Dental group leaves a 5 star review. That makes 14 this month.' },
    ],
    finding: '14 reviews from 42 asks this month, 1 in 3. Every one stands as the customer wrote it, from 2 stars to 5.',
    fix: 'Each new customer gets the same ask at their moment. Ines’s reference call is booked for Tue 27 Oct.',
    ledger: 'Example run. Every ask, answer and OK signed and dated.',
  },

  steps: [
    {
      title: 'Approve the ask once',
      line: 'The words, the review link, who gets them and the address they come from. Every customer gets exactly that, and the agent can’t change a word.',
    },
    {
      title: 'It spots each customer’s moment',
      line: 'A delivery, a solved ticket or the end of onboarding, from the orders, help desk and onboarding tools you connect, read only.',
    },
    {
      title: 'It asks everyone the same way',
      line: 'From your own address, the day the moment comes, whatever the customer might say. Each ask says your AI agent sent it.',
    },
    {
      title: 'Every answer is kept as given',
      line: 'Reviews stand as written, good or bad. A complaint reaches your team the same day, and an offer of a reference call or a case study is drafted for your OK.',
    },
  ],

  checks: [
    {
      group: 'Who gets asked',
      items: [
        { title: 'Every real customer', line: 'Anyone whose order was delivered, whose ticket was solved or whose onboarding ended. Never someone who didn’t buy.' },
        { title: 'Happy or not', line: 'No sorting by mood, score or past complaints. Everyone gets the same ask.' },
        { title: 'Not too often', line: 'Once for each moment, and never twice inside the gap you set.' },
        { title: 'Anyone who says stop', line: 'Never asked again, on any channel.' },
      ],
    },
    {
      group: 'Every ask',
      items: [
        { title: 'The same words', line: 'The ask you approved, word for word, with the same review link for every customer.' },
        { title: 'From your own address', line: 'Your company’s own email or number, and it says your AI agent sent it.' },
        { title: 'Nothing for a review', line: 'No discount, gift or prize for a review, and no hint of one.' },
        { title: 'Their own words', line: 'It never writes a review, suggests what to say or posts for anyone.' },
      ],
    },
    {
      group: 'What comes back',
      items: [
        { title: 'A review', line: 'Stands as the customer wrote it. It never asks anyone to change or remove one.' },
        {
          title: 'A complaint',
          line: 'Reaches your team the same day, with the order or the ticket. Nobody is steered away from leaving a public review.',
        },
        {
          title: 'An offer to help',
          line: 'A reference call or a case study in the customer’s own words, drafted for your OK and used only once they approve it.',
        },
      ],
    },
  ],

  outputs: {
    heading: 'Every ask stays on the record, and every answer stays as the customer gave it.',
    items: [
      { format: 'The ask log', line: 'Every customer, their moment, the ask and when it went, as a page, a PDF or a spreadsheet.' },
      { format: 'Reviews, as written', line: 'Each review with its stars and a link to it on your review page, good or bad.' },
      { format: 'Complaints, to your team', line: 'The same day, with the order or the ticket, so a person can put it right.' },
      { format: 'Reference calls and case studies', line: 'From customers who offer them, drafted into a booking or a story in their words for your OK.' },
      { format: 'Your CRM, kept current', line: 'The ask, the answer and the date on each customer’s record.' },
      { format: 'A weekly note', line: 'Asks sent, reviews in, the mix of stars, and anything waiting on you.' },
    ],
  },

  settings: [
    { k: 'Customers', v: 'Every real customer, from the tools you connect' },
    { k: 'Moments', v: 'Delivered, ticket solved, onboarding ended, or your own' },
    { k: 'The ask', v: 'Your words and review link, approved once, the same for everyone' },
    { k: 'Sends from', v: 'Your company’s own email address or number' },
    { k: 'How often', v: 'Once for each moment, and never twice in 90 days, or your own gap' },
    { k: 'Needs your OK', v: 'The ask, any change to it, and every reply to a customer' },
    { k: 'Data', v: 'Orders, tickets and onboarding from the tools you connect, read only' },
    { k: 'Stops', v: 'For anyone who asks, on every channel, for good' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Customer marketing gets a steady flow of reviews from every kind of customer, without picking who to ask.' },
    { audience: 'founders', line: 'No marketing team? Approve the ask once, and every customer hears from you at the right moment.' },
    { audience: 'sales', line: 'Reference calls and case studies from customers who offered them, ready for your next deal.' },
    { audience: 'agencies', line: 'Run it for each client from the client’s own address, with their OK, and report every review.' },
  ],

  table: {
    heading: 'Happy or not, every customer gets the same ask.',
    line: 'Up to 1 review for every 3 customers asked: in the example, 14 of the 42 customers asked in October left one.',
    cols: ['The ask', 'What happens next'],
    rows: [
      { label: 'A happy customer', values: ['The same words, at their moment', 'Their review stands as they wrote it'] },
      { label: 'An unhappy customer', values: ['The same words, at their moment', 'Their review stands too, and their reply reaches your team the same day'] },
      { label: 'A customer who offers more', values: ['The same words, at their moment', 'A reference call or a case study, drafted for your OK'] },
      { label: 'A customer who doesn’t answer', values: ['The same words, once', 'Left alone until their next moment'] },
      { label: 'A customer who says stop', values: ['Never asked again', 'Honoured on every channel'] },
    ],
  },

  faq: {
    heading: 'Every customer asked the same way. Nothing sent without your OK.',
    items: [
      {
        q: 'Does it only ask happy customers?',
        a: 'No. Every real customer gets the same ask and the same review link at their moment, whatever they might say. It never sorts customers by mood, score or past complaints.',
      },
      {
        q: 'What happens with a bad review?',
        a: 'It stands as the customer wrote it, and their reply reaches your team the same day. The agent never asks anyone to change or remove a review.',
      },
      {
        q: 'Does it write or post reviews?',
        a: 'Never. Reviews come from real customers, in their own words. It doesn’t suggest what to say or post for anyone.',
      },
      {
        q: 'Can it offer a discount for a review?',
        a: 'No. Nothing is offered for a review, and the ask never hints at a reward.',
      },
      {
        q: 'Who do customers hear from?',
        a: 'Your company, from your own address. Each ask says your AI agent sent it, and any reply that needs a person reaches your team.',
      },
      {
        q: 'Does it send without asking us?',
        a: 'You approve the ask once: the words, the review link, who gets them and the address. Any change to it, and every reply to a customer, waits for your OK.',
      },
      {
        q: 'How often is a customer asked?',
        a: 'Once for each moment, and never twice in 90 days unless you set another gap. Anyone who says stop is never asked again.',
      },
      {
        q: 'What’s it worth?',
        a: 'Up to 1 review for every 3 customers asked: in the example, 14 of the 42 customers asked in October left one (14 ÷ 42), from 2 stars to 5.',
      },
      {
        q: 'Where do reference calls and case studies come from?',
        a: 'From customers who offer them in a reply. The agent drafts the booking, or the story in their own words, for your OK, and a case study is used only once the customer approves it.',
      },
    ],
  },

  final: {
    heading: 'Hear from every customer, not only the happy ones.',
    sub: 'Join the waitlist. Review requests comes ready to send your ask from your own address, the same way for everyone.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-reviews-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'reviews',
    },
  },
}
