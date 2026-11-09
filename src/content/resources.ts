import type { BlogIndexPage, Capture, Final, ResourcesPage, UseCasesIndexPage } from './types'

/* The Resources hub (/resources), the Use cases index (/use-cases) and the Blog index (/blog), plus the words every
   post shares (content/blog/*.ts carries the posts). Since 9 Nov the hub and the index say what Home says: the web
   behind the login, as data. Resources is the data at work (the use cases and Brand G's real record); the use cases
   are what each kind of team looks up and where it lands. Every form is early access, never a waitlist. The worked
   examples carry their own names and lines (content/usecases), and so does every post. */

const access = (source: string): Capture => ({
  kind: 'waitlist',
  source,
  button: 'Request early access',
  interest: 'any',
})

/* The shared close (the blog index uses it too). Its line, "Onboarding a limited number of teams.", is content/join.ts. */
const final = (source: string): Final => ({
  heading: 'Which company should we look up first?',
  capture: access(source),
})

export const resourcesPage: ResourcesPage = {
  meta: {
    path: '/resources',
    title: 'Obsession resources: use cases and one real store’s record',
    description:
      'Obsession’s data at work: use cases that follow 1 team from its question to the data, and a real store’s record in every format it comes in.',
    answer:
      'Obsession’s resources show the data at work: use cases that follow 1 team from its question to the data, and 1 real store’s record in every format it comes in.',
    ogImage: '/og/resources.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
    ],
  },
  hero: {
    headline: 'See the data first.',
    sub: 'Obsession’s resources show the data at work: use cases that follow 1 team from its question to the data, and 1 real store’s record in every format it comes in.',
  },
  groups: {
    useCases: {
      id: 'use-cases',
      name: 'Use cases',
      line: 'What 1 kind of team looks up, and where it lands. The names and numbers are made up.',
      all: { label: 'Every use case', to: '/use-cases' },
    },
    sample: {
      id: 'sample-output',
      name: 'Sample data',
      line: 'A real record: a UK skincare store in September 2026, its name hidden.',
      link: { label: 'Brand G’s record', to: '/sample-output', line: '4 test customers, every inbox watched for 48 hours. 1 left a basket, 1 stopped at checkout, and nobody wrote to either.' },
    },
    blog: {
      id: 'blog',
      name: 'Blog',
      line: 'Guides from both founders, with every price dated and every source linked.',
      all: { label: 'Every post', to: '/blog' },
      /* The row while the blog has no posts. */
      empty: { label: 'Guides from the founders', line: 'Competitors’ emails, prices, trials and Black Friday offers.' },
    },
  },
  final: final('resources-final'),
}

export const useCasesPage: UseCasesIndexPage = {
  meta: {
    path: '/use-cases',
    title: 'Obsession use cases: who looks up the web behind the login',
    description:
      'Worked examples of Obsession: what 1 kind of team looks up behind the login, from the companies it names to the data in its own tools. Names made up.',
    answer:
      'Obsession use cases are worked examples: what 1 kind of team looks up behind the login, from the companies it names to the data in its own tools. The names and numbers are made up.',
    ogImage: '/og/use-cases.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
    ],
  },
  hero: {
    headline: 'What each team looks up, and where it lands.',
    sub: 'Obsession use cases are worked examples: what 1 kind of team looks up behind the login, from the companies it names to the data in its own tools. The names and numbers are made up.',
  },
  group: {
    id: 'examples',
    name: 'Worked examples',
    line: 'Every fact dated, with the email or screenshot behind it.',
  },
  guides: {
    id: 'every-job',
    name: 'Every use case, by industry',
    line: '2 long guides, with the recipe for each use case.',
    rows: [
      {
        label: 'AI agent use cases for business',
        to: '/blog/ai-agent-use-cases-for-business',
        line: 'What teams in every industry look up about competitors, prospects, partners and their own company.',
      },
      {
        label: 'Agentic AI use cases in ecommerce',
        to: '/blog/agentic-ai-use-cases-in-ecommerce',
        line: 'What ecommerce brands, and the agencies that serve them, look up behind the login.',
      },
    ],
  },
  final: final('use-cases-final'),
}

export const blogPage: BlogIndexPage = {
  meta: {
    path: '/blog',
    title: 'The Obsession blog: AI customers and what customers get',
    description:
      'Guides to AI customers and what companies send them: tests for ecommerce stores and the agencies that run them, with every source linked and dated.',
    answer:
      'Checklists and tests for ecommerce stores and the agencies that run them, from both founders of Obsession, with every source linked. Each shows how to see what a new customer actually gets, from the welcome email to the checkout reminder, and how to check it by hand.',
    ogImage: '/og/blog.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  hero: {
    headline: 'Find out what any company’s customers actually receive.',
    sub: 'Checklists and tests for ecommerce stores and the agencies that run them, from both founders of Obsession, with every source linked.',
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
  compareJump: 'Go straight to the comparison',
  compareTag: 'Compared',
  oursTag: 'Ours',
  sourcesNote: (checked: string) => `In the order the article cites them. Every link was checked on ${checked}.`,
  related: 'Read next',
  recipes: 'Recipes for this',
  rss: 'RSS feed',
  featured: 'Latest',
  posts: (n: number) => (n === 1 ? '1 post' : `${n} posts`),
  more: 'More posts',
  feedTitle: 'The Obsession blog',
  share: 'Share',
  screenCaption: 'The same job, run by Obsession’s AI customers.',
  photo: 'Photo:',
  onPexels: 'on Pexels',
  readPost: 'Read the article',
  all: 'Every article',
  everything: 'All',
  filter: 'Show articles about',
  shareOn: (where: string) => `Share on ${where}`,
  copy: 'Copy link',
  copied: 'Link copied',
}

/* Dates as the site writes them, the same on every machine: 3 Oct 2026, 28 Sep 2026. */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${MONTHS[m - 1]} ${y}`
}
