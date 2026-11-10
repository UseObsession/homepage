import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/dark-pattern: the definition query for deceptive design. "dark patterns subscription cancellation"
   stays with its own post (docs/SEARCH.md §2); this page owns "what is a dark pattern" and its meaning. */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'Dark pattern',
  line: 'A design choice in a site or app that pushes people into a decision they didn’t mean, or makes their choice harder.',
  meta: {
    path: '/glossary/dark-pattern',
    title: 'What is a dark pattern? Deceptive design, with examples',
    description:
      'A dark pattern is a design that pushes people into buying, subscribing or sharing data they didn’t mean to, or makes leaving harder. Examples and rules.',
    answer:
      'A dark pattern is a design choice in a website or app that pushes people into a decision they didn’t mean to make, such as buying, subscribing or sharing data, or makes the choice they want harder to take. Many appear only past a sign-up, in a checkout or in a cancel flow, so a compliance team sees them only by going through as a customer.',
    ogImage: '/og/glossary-dark-pattern.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Dark pattern', path: '/glossary/dark-pattern' },
    ],
  },
  title: 'Dark pattern: design that steers people into choices they didn’t mean',
  dek: 'A pre-ticked box, a fee that appears at the last step and a cancel button buried 4 screens deep are each a design choice that works against the person using it.',
  primaryKeyword: 'dark pattern',
  keywords: ['what is a dark pattern', 'dark patterns meaning', 'dark pattern examples', 'deceptive design', 'deceptive design patterns'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'founders',
  term: {
    name: 'dark pattern',
    alternateName: ['deceptive design', 'deceptive design pattern', 'manipulative design'],
    definition:
      'A dark pattern is a design choice in a website or app that pushes people into a decision they didn’t mean to make, such as buying, subscribing or sharing data, or makes the choice they want harder to take.',
  },
  blocks: [
    { kind: 'h2', id: 'examples', text: 'Dark pattern examples' },
    {
      kind: 'p',
      text: 'The US Federal Trade Commission published its staff report [Bringing Dark Patterns to Light](https://www.ftc.gov/reports/bringing-dark-patterns-light) in September 2022. It describes design practices that can trick or manipulate people into buying or giving up their privacy. Its [announcement](https://www.ftc.gov/news-events/news/press-releases/2022/09/ftc-report-shows-rise-sophisticated-dark-patterns-designed-trick-trap-consumers) groups the common tactics into 4 kinds.',
    },
    {
      kind: 'list',
      items: [
        '**Disguised ads:** advertising designed to look like independent editorial content.',
        '**Hard to cancel:** charging people without consent, or making a subscription difficult to leave.',
        '**Buried terms and junk fees:** material information hidden until late, such as a fee first shown at checkout.',
        '**Tricks around data:** choices about privacy settings presented so that people share more than they meant to.',
      ],
    },
    {
      kind: 'p',
      text: 'Others are familiar from everyday shopping. A pre-ticked box adds insurance to a basket. A countdown timer resets when the page reloads. In confirmshaming, the button to decline reads “No thanks, I prefer paying full price”.',
    },
    { kind: 'h2', id: 'the-rules', text: 'Where dark patterns meet the law' },
    {
      kind: 'p',
      text: 'In the EU, Article 25 of the [Digital Services Act](https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng), adopted on 19 October 2022, bars providers of online platforms from interfaces that deceive or manipulate the people using them. It lists “making the procedure for terminating a service more difficult than subscribing to it” among the practices the European Commission may issue guidelines on. Subscription exits have rules of their own, covered under [click-to-cancel](/glossary/click-to-cancel). This is general information, not legal advice.',
    },
    { kind: 'h2', id: 'how-theyre-found', text: 'How dark patterns are found and kept as evidence' },
    {
      kind: 'p',
      text: 'Many dark patterns sit behind a [login wall](/glossary/login-wall): the fee added at checkout, the [save offer](/glossary/save-offer) that has to be refused three times, the cancel link hidden in account settings. A design review of the public site misses them. Product and compliance teams find them by going through the journey as a customer and keeping a screenshot of every step, then repeating it after each release.',
    },
    {
      kind: 'p',
      text: `${ENTITY} For dark patterns, that means every screen of a checkout or [cancel flow](/glossary/cancel-flow) as a customer met it. Each is dated, so a fee added at the last step is on file as it looked that day.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Are dark patterns illegal?',
          a: 'Some are, depending on the practice and the country. In the EU, the Digital Services Act bars online platforms from interfaces that deceive or manipulate users. This is general information, not legal advice.',
        },
        {
          q: 'What is confirmshaming?',
          a: 'Confirmshaming is wording that makes the person feel foolish for declining, such as a button that reads “No thanks, I don’t like saving money”.',
        },
        {
          q: 'Is a save offer a dark pattern?',
          a: 'Not by itself. A single offer to stay, with a clear way to carry on cancelling, is ordinary retention. It becomes a dark pattern when it stands in the way of the exit.',
          link: { label: 'What is a save offer?', to: '/glossary/save-offer' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Bringing Dark Patterns to Light',
      publisher: 'US Federal Trade Commission',
      url: 'https://www.ftc.gov/reports/bringing-dark-patterns-light',
      date: '2022-09',
    },
    {
      title: 'FTC Report Shows Rise in Sophisticated Dark Patterns Designed to Trick and Trap Consumers',
      publisher: 'US Federal Trade Commission',
      url: 'https://www.ftc.gov/news-events/news/press-releases/2022/09/ftc-report-shows-rise-sophisticated-dark-patterns-designed-trick-trap-consumers',
      date: '2022-09-15',
    },
    {
      title: 'Regulation (EU) 2022/2065 on a Single Market for Digital Services (Digital Services Act)',
      publisher: 'EUR-Lex, Publications Office of the European Union',
      url: 'https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng',
      date: '2022-10-19',
    },
  ],
  related: [
    '/glossary/cancel-flow',
    '/glossary/click-to-cancel',
    '/glossary/save-offer',
    '/glossary/login-wall',
    'recipe:website-audit',
    'subscription-trap-laws',
    'shopify-checkout-not-working',
  ],
}
