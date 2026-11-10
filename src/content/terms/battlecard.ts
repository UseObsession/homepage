import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/battlecard: for a CI lead or sales enablement. "competitor battlecard template" stays with its owner
   (docs/SEARCH.md §2); this page owns the definition. Klue is described from its own integrations page, read
   11 Nov 2026; the project management example is invented and says so. */
const DEFINITION =
  'A battlecard is a short reference a sales rep uses in a deal against a named competitor, setting out how it sells, where it is weak and how to answer its claims.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Battlecard',
  line: 'A short reference a sales rep uses against a named competitor: its pitch, weak spots and the answers that win.',
  meta: {
    path: '/glossary/battlecard',
    title: 'What is a battlecard? The page reps use against a competitor',
    description:
      'A battlecard is a short reference a rep uses against a named competitor: its pitch, weak spots and the answers that win. What goes on one, and why it ages.',
    answer: `${DEFINITION} A competitive intelligence or product marketing team keeps it current. Each card ages the day a competitor changes its price, plans or trial, so the best are rebuilt from dated facts.`,
    ogImage: '/og/glossary-battlecard.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Battlecard', path: '/glossary/battlecard' },
    ],
  },
  title: 'Battlecard: the page a rep opens when a competitor is in the deal',
  dek: 'A buyer names a competitor on the call, and the rep has seconds to answer. The battlecard is what they open.',
  primaryKeyword: 'battlecard',
  keywords: ['what is a battlecard', 'sales battlecard', 'competitive battlecard', 'battlecard meaning', 'battle card sales'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'sales',
  term: {
    name: 'battlecard',
    alternateName: ['battle card', 'sales battlecard', 'competitive battlecard'],
    definition: DEFINITION,
  },
  blocks: [
    { kind: 'h2', id: 'what-goes-on-one', text: 'What goes on a battlecard' },
    {
      kind: 'list',
      items: [
        '**Their pitch:** how the competitor describes itself, in its own words.',
        '**Pricing and packaging:** its plans, their limits and what a buyer actually pays.',
        '**Where each side wins:** the deals the competitor tends to take, and the ones you do.',
        '**Objections and answers:** what its reps say about you, and the line that answers each.',
        '**Landmines:** questions a rep can ask that expose a gap in the competitor’s product.',
      ],
    },
    {
      kind: 'p',
      text: 'Say a rep at a project management company is up against a competitor with a free plan. The card says the free plan caps projects at 3 and an upgrade prompt appears on day 7. It also notes that the price inside the product is higher than the pricing page. So the rep asks the buyer what happened on day 7. That company and its numbers are invented; the shape is what a good card holds.',
    },
    { kind: 'h2', id: 'why-cards-go-stale', text: 'Why battlecards go stale' },
    {
      kind: 'p',
      text: 'Much of a card’s pricing and packaging comes from the competitor’s public pages and from what reps hear on calls. Public pages change quietly. What a trial user meets inside the product never appears on the pricing page at all, from the [trial limit](/glossary/trial-limit) and the [upgrade prompt](/glossary/upgrade-prompt) to the offer when they cancel.',
    },
    {
      kind: 'p',
      text: 'A card built on last quarter’s screenshots loses the rep’s trust the first time a buyer corrects it in a meeting.',
    },
    { kind: 'h2', id: 'how-cards-stay-current', text: 'How battlecards are kept current' },
    {
      kind: 'p',
      text: 'Competitive intelligence (CI) teams sign up for competitors’ trials by hand and rewrite the card when something changes. Tools then put the card where reps work; [Klue](https://klue.com/product/integrations), for example, lets sellers open a deal-specific competitor battlecard from any Salesforce object. The options are compared in [Obsession vs Klue](/compare/obsession-vs-klue), [Klue alternatives](/alternatives/klue) and [Crayon alternatives](/alternatives/crayon).',
    },
    {
      kind: 'p',
      text: `${ENTITY} For a battlecard, every changed line can then link to the dated screenshot of the competitor’s trial limit, upgrade prompt or cancel offer behind it.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Who owns the battlecard?',
          a: 'Competitive intelligence or product marketing usually writes it, sales leadership decides where reps see it, and reps feed it with what they hear on calls.',
        },
        {
          q: 'How often should a battlecard be updated?',
          a: 'Whenever a fact on it changes: a price, a plan limit, a new feature or a new objection. A card that dates each fact shows reps how fresh it is.',
          link: { label: 'Competitive intelligence, defined', to: '/glossary/competitive-intelligence' },
        },
        {
          q: 'What is the difference between a battlecard and a competitor profile?',
          a: 'A profile is the full picture of a competitor, used for planning. A battlecard is the part a rep needs in a live deal, short enough to read during a call.',
        },
      ],
    },
  ],
  sources: [{ title: 'Integrations', publisher: 'Klue', url: 'https://klue.com/product/integrations' }],
  related: [
    '/glossary/competitive-intelligence',
    '/glossary/trial-limit',
    '/glossary/upgrade-prompt',
    '/glossary/signed-in-price',
    '/compare/obsession-vs-klue',
    '/alternatives/klue',
    '/alternatives/crayon',
    'competitor-battlecard-template',
    'recipe:trial-teardown',
    'recipe:competitor-tracking',
  ],
}
