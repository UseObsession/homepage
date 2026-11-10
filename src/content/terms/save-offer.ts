import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/save-offer: the definition query for the offer a company makes to a customer who is leaving. A plain
   definition with no outside facts; the law sits on click-to-cancel and the cancel flow page. */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'Save offer',
  line: 'A discount, pause or cheaper plan a company shows a customer who has started to cancel, to keep them subscribed.',
  meta: {
    path: '/glossary/save-offer',
    title: 'What is a save offer? The deal a company makes as you cancel',
    description:
      'A save offer is a discount, pause or cheaper plan shown to a customer who starts to cancel. Where save offers appear, and how retention teams compare them.',
    answer:
      'A save offer is a discount, pause or cheaper plan a company shows a customer who has started to cancel, to keep them subscribed. It appears only inside the cancel flow of a live account, so a competitor’s public pages never show it.',
    ogImage: '/og/glossary-save-offer.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Save offer', path: '/glossary/save-offer' },
    ],
  },
  title: 'Save offer: the deal a company makes when a customer tries to leave',
  dek: 'Click cancel at a streaming service, a meal kit or a software company, and the next screen is often a price nobody else is offered.',
  primaryKeyword: 'save offer',
  keywords: ['what is a save offer', 'save offer meaning', 'cancellation offer', 'retention offer', 'cancel offer'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'marketing',
  term: {
    name: 'save offer',
    alternateName: ['retention offer', 'cancellation offer', 'cancel offer'],
    definition:
      'A save offer is a discount, pause or cheaper plan a company shows a customer who has started to cancel, to keep them subscribed.',
  },
  blocks: [
    { kind: 'h2', id: 'what-it-looks-like', text: 'What a save offer looks like' },
    {
      kind: 'p',
      text: 'A save offer is the retention team’s last move before a customer goes. It usually appears in the [cancel flow](/glossary/cancel-flow), after the customer clicks cancel and often after a question about why they are leaving. The answer to that question can decide which offer comes next.',
    },
    {
      kind: 'list',
      items: [
        '**A discount:** 50% off the next 3 months, or a month free.',
        '**A pause:** keep the account and skip billing for a set time.',
        '**A downgrade:** a cheaper plan with fewer features.',
        '**A switch:** move from monthly to annual billing at a lower monthly price.',
        '**A person:** a chat or call with the retention team, who can offer more.',
      ],
    },
    {
      kind: 'p',
      text: 'A related offer arrives after the customer has gone. A win-back email days or weeks later offers a price to come back, and that price is set apart from the public pricing page too.',
    },
    { kind: 'h2', id: 'why-it-matters', text: 'Why retention teams track competitors’ save offers' },
    {
      kind: 'p',
      text: 'A competitor’s save offer shows the price it will offer a customer it is about to lose. A retention lead who knows it can judge whether their own offer is too generous or too thin, and a pricing team learns how far a competitor will move off list price.',
    },
    {
      kind: 'p',
      text: 'Save offers also sit close to the rules on leaving. An offer that has to be refused again and again before the cancel button appears can turn a fair cancel flow into a [dark pattern](/glossary/dark-pattern). That design is what [click-to-cancel](/glossary/click-to-cancel) rules target.',
    },
    { kind: 'h2', id: 'how-its-seen', text: 'How save offers are collected' },
    {
      kind: 'p',
      text: 'A save offer shows only to an account that starts to cancel, and it can change with the reason given, the plan and the country. By hand, a team keeps live subscriptions at each competitor, starts to cancel, screenshots the offer and backs out. Seeing the offer change means repeating that every month.',
    },
    {
      kind: 'p',
      text: `${ENTITY} For a save offer, that means the screen that made it, its exact terms and the date it was shown, with any win-back email that followed. The history builds for as long as you follow the company, so a deeper offer shows up the week it starts.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the difference between a save offer and a win-back offer?',
          a: 'A save offer appears before the cancellation completes, inside the cancel flow. A win-back offer arrives after the customer has left, usually by email, to bring them back.',
        },
        {
          q: 'Is a save offer allowed?',
          a: 'Offering a better price to stay is common practice. What draws regulators’ attention is an exit made harder than signing up, for example several offers to refuse before the cancel button appears. Rules differ by country, and this is general information, not legal advice.',
          link: { label: 'What is click-to-cancel?', to: '/glossary/click-to-cancel' },
        },
      ],
    },
  ],
  sources: [],
  related: [
    '/glossary/cancel-flow',
    '/glossary/click-to-cancel',
    '/glossary/dark-pattern',
    '/glossary/upgrade-prompt',
    '/glossary/login-wall',
    'recipe:competitor-tracking',
    'recipe:trial-teardown',
    'subscription-trap-laws',
  ],
}
