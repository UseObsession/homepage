import type { BlogIndexPage, Capture, Final, ResourcesPage, UseCasesIndexPage } from './types'

/* The Resources hub (/resources), the Use cases index (/use-cases) and the Blog index (/blog), plus the words every
   post shares (content/blog/*.ts carries the posts). Since 9 Nov the hub and the index say what Home says: the web
   behind the login, as data. Resources is the data at work (the use cases and Brand G's real record); the use cases
   are what each kind of team looks up and where it lands. Every form is early access, never a waitlist. The worked
   examples carry their own names and lines (content/usecases), and so does every post. */

const access = (source: string): Capture => ({
  kind: 'waitlist',
  source,
  button: 'Start free',
  interest: 'any',
})

/* The shared close (the blog index uses it too). Its line, "Free plan, no credit card.", is content/join.ts. */
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
    title: 'AI agent use cases by job: calls, QA, portals and more',
    description:
      'AI agent use cases by job: answering customers, testing sign-up, building agent products, working in portals, watching the market and running evals.',
    answer:
      'Obsession use cases show one job in one industry at a time, sorted by the type of blueprint that does it: the pieces it runs on, the blueprint that runs it for you, and what lands in your tools.',
    ogImage: '/og/use-cases.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
    ],
  },
  hero: {
    headline: 'Use cases, sorted by the job your agent does.',
    sub: 'Obsession use cases show one job in one industry at a time, sorted by the type of blueprint that does it: the pieces it runs on, the blueprint that runs it for you, and what lands in your tools.',
  },
  byKit: [
    {
      kit: 'talk',
      paths: [
        '/use-cases/ai-receptionist',
        '/use-cases/ai-agent-for-insurance',
        '/use-cases/ai-agent-for-dental-practices',
        '/use-cases/ai-agent-for-property-management',
        '/use-cases/ai-recruiter',
        '/use-cases/ai-agent-for-customer-support',
        '/sales',
      ],
    },
    {
      kit: 'test',
      paths: [
        '/use-cases/otp-testing',
        '/use-cases/trial-checks-for-software-companies',
        '/use-cases/leak-checks-for-ecommerce-stores',
        '/use-cases/journey-checks-for-banks-and-fintechs',
        '/use-cases/opt-out-and-cancel-checks-for-compliance-teams',
        '/use-cases/funnel-qa-for-cro-agencies',
        '/verify',
      ],
    },
    { kit: 'build', paths: ['/use-cases/ai-sdr', '/use-cases/imessage-ai-assistant', '/use-cases/prospect-intelligence-with-clay'] },
    { kit: 'portals', paths: ['/use-cases/prior-authorization-ai-agent', '/use-cases/ai-agent-for-freight-brokers', '/use-cases/web-behind-the-login'] },
    {
      kit: 'watch',
      paths: [
        '/marketing',
        '/agencies',
        '/use-cases/member-prices-for-price-intelligence',
        '/use-cases/leak-checks-for-retention-agencies',
        '/use-cases/sales-intelligence-behind-the-login',
        '/use-cases/consumer-promotions-data-for-funds',
      ],
    },
    { kit: 'train', paths: ['/use-cases/ai-agent-evaluation'] },
    { kit: 'buy', paths: ['/use-cases/agentic-commerce'] },
  ],
  orbit: {
    label: 'Obsession in the middle, its five pieces around it, and the seven types of blueprints on the outer ring: every use case below belongs to one of them.',
    caption: 'Every use case below belongs to one of the seven types of blueprints.',
  },
  group: {
    id: 'examples',
    name: 'Worked examples',
    line: 'Every fact dated, with the email or screenshot behind it.',
  },
  guides: {
    id: 'every-job',
    name: 'Every use case, in depth',
    line: '2 long guides, with the blueprint for each use case.',
    rows: [
      {
        label: 'AI agent use cases for business',
        to: '/blog/ai-agent-use-cases-for-business',
        line: 'What AI agents do for teams in every industry, with the pieces and blueprint for each job.',
      },
      {
        label: 'Agentic AI use cases in ecommerce',
        to: '/blog/agentic-ai-use-cases-in-ecommerce',
        line: 'What AI agents do for ecommerce brands and their agencies, from mystery shopping to price watch.',
      },
    ],
  },
  final: final('use-cases-final'),
}

export const blogPage: BlogIndexPage = {
  meta: {
    path: '/blog',
    title: 'The Obsession blog: what companies show only to customers',
    description:
      'Guides for teams that track what companies show only to customers: competitors’ emails, member prices, trial limits, cancel offers and what AI agents say.',
    answer:
      'Guides for teams that track what companies show only to customers: competitors’ emails and offers, member prices, trial limits, cancel flows and what AI agents say. Each shows the method by hand, with every source linked, and where Obsession’s index takes over.',
    ogImage: '/og/blog.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  hero: {
    headline: 'Find out what any company’s customers actually receive.',
    sub: 'Guides for teams that track what companies show only to customers: competitors’ emails and offers, member prices, trial limits, cancel flows and what AI agents say. From both founders of Obsession, with every source linked.',
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
  recipes: 'Blueprints for this',
  rss: 'RSS feed',
  featured: 'Latest',
  posts: (n: number) => (n === 1 ? '1 post' : `${n} posts`),
  more: 'More posts',
  feedTitle: 'The Obsession blog',
  share: 'Share',
  screenCaption: 'The same job, run as an Obsession blueprint.',
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
