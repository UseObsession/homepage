import type { BlogIndexPage, Capture, Final, ResourcesPage, UseCasesIndexPage } from './types'

/* The Resources hub (/resources), the Use cases index (/use-cases) and the Blog index (/blog), plus the words every
   post shares (content/blog/*.ts carries the posts). Copy rules: docs/REBUILD.md, "Copy". The worked examples carry
   their own names and lines (content/usecases), and so does every post.
   Narrative edit (3 Oct): each hero is a complete claim and its sub names what the rows below hold; the real run's row
   states what it found (1 basket, 1 checkout, nobody wrote), as every page does; the blog's words name the topics its
   posts cover (mystery shopping, competitor tracking, prospect audits, speed to lead); the shared close names the
   job ("every company on your list") instead of "on your list". */

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
  heading: 'Send declared AI agents to every company on your list.',
  sub: 'Join the waitlist and tell us the first job to set up. We confirm the plan with you before anything runs.',
  capture: waitlist(source),
})

export const resourcesPage: ResourcesPage = {
  meta: {
    path: '/resources',
    title: 'Obsession resources: worked examples and a real store check',
    description:
      'Obsession at work: worked examples of declared AI agents from set up to proof, and the real September store check in every format it arrives in.',
    answer:
      'Obsession’s resources show the work before you join: worked examples that follow 1 job from set up to proof, and the 1 real store check in every format it arrives in.',
    ogImage: '/og/resources.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
    ],
  },
  hero: {
    headline: 'See the work before you join.',
    sub: 'Obsession’s resources show the work before you join: worked examples that follow 1 job from set up to proof, and the 1 real store check in every format it arrives in.',
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
      link: { label: 'The September store check', to: '/sample-output', line: '4 test customers, every inbox watched for 48 hours. 1 left a basket, 1 stopped at checkout, and nobody wrote to either.' },
    },
    blog: {
      id: 'blog',
      name: 'Blog',
      line: 'Guides from both founders, with every price dated and every source linked.',
      all: { label: 'Every post', to: '/blog' },
      /* The row while the blog has no posts. */
      empty: { label: 'Guides from the founders', line: 'Mystery shopping, competitor tracking, prospect audits and speed to lead.' },
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
      'Obsession use cases are worked examples: declared AI agents run 1 job for 1 kind of customer, from the set up to what lands in their own tools. The names and numbers are made up.',
    ogImage: '/og/use-cases.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
    ],
  },
  hero: {
    headline: 'See 1 job run from a list to proof in the tools you already use.',
    sub: 'Obsession use cases are worked examples: declared AI agents run 1 job for 1 kind of customer, from the set up to what lands in their own tools. The names and numbers are made up.',
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
      'Guides to mystery shopping, competitor tracking, prospect audits and speed to lead, by the founders of Obsession, with every price dated and source linked.',
    answer:
      'The Obsession blog covers the commercial legwork AI agents can do as a declared customer: mystery shopping, competitor tracking, prospect audits and speed to lead, written by both founders with every source linked.',
    ogImage: '/og/blog.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  hero: {
    headline: 'Find out what any company’s customers actually receive.',
    sub: 'Guides to mystery shopping, competitor tracking, prospect audits and speed to lead, from both founders of Obsession, with every source linked.',
  },
  empty: {
    heading: 'Start with the work itself.',
    line: 'A job from start to finish, and a real store check in every format.',
  },
  final: final('blog-final'),
}

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
  more: 'More posts',
  feedTitle: 'The Obsession blog',
}

/* Dates as the site writes them, the same on every machine: 3 Oct 2026, 28 Sep 2026. */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${MONTHS[m - 1]} ${y}`
}
