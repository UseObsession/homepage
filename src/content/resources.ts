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
  heading: 'What should your first AI agent do?',
  capture: access(source),
})

export const resourcesPage: ResourcesPage = {
  meta: {
    path: '/resources',
    title: 'Obsession resources: use cases, blueprints and guides',
    description:
      'Use cases that follow one team from a job to its result, the blueprints that run them, a sample result in every format, and guides from the founders.',
    answer:
      'Obsession’s resources show AI agents at work: use cases that follow one team from a job to its result, the blueprints that run them, a sample result in every format it lands in, and guides from both founders.',
    ogImage: '/og/resources.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
    ],
  },
  hero: {
    headline: 'See AI agents at work, job by job.',
    sub: 'Obsession’s resources show AI agents at work: use cases that follow one team from a job to its result, the blueprints that run them, a sample result in every format it lands in, and guides from both founders.',
  },
  groups: {
    useCases: {
      id: 'use-cases',
      name: 'Use cases',
      line: 'One kind of team, one job, and where its results land. Every company and number is an example.',
      all: { label: 'Every use case', to: '/use-cases' },
    },
    sample: {
      id: 'sample-output',
      name: 'Sample data',
      line: 'A real mystery shopping run at a UK skincare store, September 2026, its name hidden.',
      link: { label: 'See the sample result', to: '/sample-output', line: 'Every email, text, screen and price the run kept, in each format a result can land in.' },
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
  /* Above the types (23 Nov 2026, Seun: "appeal to the masses ... any type of industry or 1 person to large enterprise"):
     the range pages, each showing every job an industry or a size of team runs, across the types of blueprints. */
  byWho: {
    id: 'any-size',
    heading: 'Any industry, any size.',
    line: 'From one freelancer to a company running 100,000 agents, each agent with its own number, inbox and browser.',
    groups: [
      {
        label: 'By industry',
        paths: [
          '/use-cases/ai-agents-for-saas',
          '/use-cases/ai-agents-for-financial-services',
          '/use-cases/healthcare-ai-agents',
          '/use-cases/ai-agents-for-professional-services',
          '/use-cases/ai-agent-for-home-services',
          '/use-cases/ai-agent-for-hotels',
          '/use-cases/ai-agent-for-higher-education',
          '/use-cases/ai-agent-for-contact-centers',
        ],
      },
      {
        label: 'By size',
        paths: [
          '/use-cases/ai-agents-for-freelancers',
          '/agencies',
          '/use-cases/ai-agent-platforms',
          '/use-cases/ai-agents-for-enterprise',
        ],
      },
    ],
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
    label: 'Obsession in the middle, its six pieces around it, and the seven types of blueprints on the outer ring: every use case below belongs to one of them.',
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
    title: 'The Obsession blog: guides for teams putting AI agents to work',
    description:
      'Guides for teams giving AI agents an inbox, a phone number and a browser, and for teams handing whole jobs to blueprints: methods, tools and prices.',
    answer:
      'Guides for teams giving AI agents an inbox, a phone number and a browser, and for teams handing whole jobs to blueprints. Each shows the method by hand, with every source linked, and where an Obsession blueprint takes over.',
    ogImage: '/og/blog.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  hero: {
    headline: 'Guides for putting AI agents to work.',
    sub: 'Guides for teams giving AI agents an inbox, a phone number and a browser, and for teams handing whole jobs to blueprints. From both founders of Obsession, with every source linked.',
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
