import type { BlogIndexPage, Capture, Final, ResourcesPage, UseCasesIndexPage } from './types'

/* The Resources hub (/resources), the Use cases index (/use-cases) and the Blog index (/blog), plus the words every
   post shares (content/blog/*.ts carries the posts). Copy rules: docs/REBUILD.md, "Copy". The worked examples carry
   their own names and lines (content/usecases), and so does every post. */

const waitlist = (source: string): Capture => ({
  kind: 'waitlist',
  source,
  button: 'Join the waitlist',
  placeholder: 'Your work email',
  micro: 'We keep your email to tell you about Obsession, and nothing else.',
  roles: {
    question: 'What should we set up first for you?',
    options: ['Agency', 'Founder', 'Sales', 'Marketing', 'Developer', 'Something else'],
  },
  interest: 'any',
})

const final = (source: string): Final => ({
  heading: 'Put declared AI agents on your list.',
  sub: 'Join the waitlist and tell us the first job to set up. We confirm the plan with you before anything runs.',
  capture: waitlist(source),
})

export const resourcesPage: ResourcesPage = {
  meta: {
    path: '/resources',
    title: 'Resources: worked examples, a real store check and the blog',
    description:
      'Obsession at work: worked examples from set up to proof, the real September store check in every format it arrives in, and the blog on agents at work.',
    answer:
      'The Obsession resources are worked examples of declared AI agents doing 1 job from start to finish, the real September 2026 store check shown in every format it can arrive in, and the blog.',
    ogImage: '/og/resources.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
    ],
  },
  hero: {
    headline: 'See the work before you join.',
    sub: 'Worked examples from set up to proof, a real store check in every format, and the blog.',
  },
  groups: {
    useCases: {
      id: 'use-cases',
      name: 'Use cases',
      line: '1 job, start to finish, for 1 kind of customer. The names and numbers are made up.',
    },
    sample: {
      id: 'sample-output',
      name: 'Sample output',
      line: 'The 1 real run: a store check from September 2026, with the store’s name hidden.',
      link: { label: 'Sample output', to: '/sample-output', line: '4 test customers, 48 hours watched, shown in every format it arrives in.' },
    },
    blog: {
      id: 'blog',
      name: 'Blog',
      line: 'Mystery shopping, competitor tracking and prospect intelligence, with every source linked.',
      all: { label: 'Every post', to: '/blog' },
    },
  },
  final: final('resources-final'),
}

export const useCasesPage: UseCasesIndexPage = {
  meta: {
    path: '/use-cases',
    title: 'Use cases: 1 job for 1 kind of customer, start to finish',
    description:
      'Worked examples of Obsession: declared AI agents run 1 job for 1 kind of customer, from set up to the proof in their own tools. The names are made up.',
    answer:
      'Obsession use cases are worked examples: declared AI agents run 1 job for 1 kind of customer, from set up to the proof that lands in the tools they already use. The companies, people and figures in them are made up.',
    ogImage: '/og/use-cases.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
    ],
  },
  hero: {
    headline: '1 job, start to finish, for 1 kind of customer.',
    sub: 'Each example follows the set up, the agents’ work and what lands in the customer’s own tools. The names and numbers are made up.',
  },
  group: {
    id: 'examples',
    name: 'Worked examples',
    line: 'Every agent says it’s AI, and every step is signed.',
  },
  final: final('use-cases-final'),
}

export const blogPage: BlogIndexPage = {
  meta: {
    path: '/blog',
    title: 'The Obsession blog: AI agents that do commercial legwork',
    description:
      'Guides to mystery shopping, competitor tracking, prospect intelligence and verifying AI agents, from the founders of Obsession, with every source linked.',
    answer:
      'The Obsession blog covers the commercial legwork AI agents can do as a declared customer: mystery shopping, competitor tracking, prospect intelligence and verifying other companies’ AI agents, written by the founders with every source linked.',
    ogImage: '/og/blog.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  hero: {
    headline: 'What you learn by being every company’s customer.',
    sub: 'Guides to mystery shopping, competitor tracking and prospect intelligence, from the founders of Obsession.',
  },
  empty: {
    heading: 'Start with the work itself.',
    line: 'A job from start to finish, and a real store check in every format.',
  },
  final: final('blog-final'),
}

/* Every post is by both founders (docs/REBUILD.md 9c). The byline and the article's structured data list both. */
export const blogAuthors = [
  { name: 'Seun Akinniranye', role: 'Cofounder' },
  { name: 'James Akinniranye', role: 'Cofounder' },
]

/* The words around every post (pages/BlogPost): chrome, not copy. */
export const blogUi = {
  toc: 'On this page',
  read: (n: number) => `${n} min read`,
  updated: 'Updated',
  by: 'By',
  sources: 'Sources',
  related: 'Read next',
  recipes: 'Recipes for this',
  rss: 'RSS feed',
  featured: 'Latest',
  posts: (n: number) => (n === 1 ? '1 post' : `${n} posts`),
  feedTitle: 'The Obsession blog',
}

/* Dates as the site writes them: 3 Oct 2026. */
export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
