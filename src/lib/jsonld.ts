/* Structured data for every page (docs/REBUILD.md, section 8), written into the head by the prerender as 1
   <script type="application/ld+json"> holding a schema.org @graph:
   - Organization and WebSite on every page.
   - WebPage on every page; a FAQPage too wherever the page shows questions (the same words, so they match the page).
   - SoftwareApplication on Home.
   - BreadcrumbList wherever the page's Meta has a breadcrumb: every page below Home, matching the breadcrumb the page
     shows (components/Crumbs reads the same list).
   - BlogPosting on every post, with both founders as its authors (docs/REBUILD.md 9c), and Blog on /blog, listing them.
   - On /agents, the WebPage is about what an Obsession agent is (2 DefinedTerms), and the Organization's contactPoint is
     where any company writes about an agent it met, or to keep agents off its site.
   No prices, ratings or offers: the site states none. Nothing here is invented: every fact is on the site or in
   docs/REBUILD.md, and a profile link goes in only when a founder supplies it (SAME_AS below). */
import { absolute, entries, SITE, type Entry } from '../content/meta'
import { agentsPage, CONTACT_EMAIL, llms } from '../content/site'

const ORG = `${SITE}/#organization`
const WEBSITE = `${SITE}/#website`
const APP = `${SITE}/#software`

type Node = Record<string, unknown>

/* Profiles that are the same company or person elsewhere (schema.org sameAs: LinkedIn, X, Crunchbase, GitHub, Product
   Hunt). TODO (founders): add each real URL once it exists and you've confirmed it is yours. None is in the repo or the
   workspace yet (_research/seo/AI-SEARCH-FOUNDERS.md lists what to send). An empty list writes no sameAs. */
const SAME_AS: { organization: string[]; people: Record<string, string[]> } = {
  organization: [],
  people: { 'Seun Akinniranye': [], 'James Akinniranye': [] },
}
const sameAs = (urls: string[] | undefined) => (urls?.length ? { sameAs: urls } : {})

/* A founder (docs/REBUILD.md 9c: both are Cofounders), with 1 @id wherever they appear: the Organization's founders
   and a post's authors. */
const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const person = (a: { name: string; role: string }): Node => ({
  '@type': 'Person',
  '@id': `${SITE}/#${slug(a.name)}`,
  name: a.name,
  jobTitle: a.role,
  worksFor: { '@id': ORG },
  ...sameAs(SAME_AS.people[a.name]),
})
const FOUNDERS = [
  { name: 'Seun Akinniranye', role: 'Cofounder' },
  { name: 'James Akinniranye', role: 'Cofounder' },
]

const firstSentence = (s: string) => s.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? s

const organization: Node = {
  '@type': 'Organization',
  '@id': ORG,
  name: 'Obsession',
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: `${SITE}/logo/obsession-app-icon-1024.png`, width: 1024, height: 1024 },
  description: llms.summary,
  email: CONTACT_EMAIL,
  founder: FOUNDERS.map(person),
  /* /agents: any company an agent met writes here with a question, or to keep agents off its site. */
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Questions about an Obsession agent',
    email: CONTACT_EMAIL,
    url: `${SITE}/agents`,
    availableLanguage: 'English',
  },
  ...sameAs(SAME_AS.organization),
}

/* What /agents is about: what an Obsession agent is, and what "declared" means (the term the page owns). */
const agentTerms = (): Node[] => [
  {
    '@type': 'DefinedTerm',
    '@id': `${SITE}/agents#obsession-agent`,
    name: 'Obsession agent',
    description: firstSentence(agentsPage.meta.answer),
  },
  {
    '@type': 'DefinedTerm',
    '@id': `${SITE}/agents#declared-ai-agent`,
    name: 'declared AI agent',
    /* The first line of the page's "declared" section, which defines the term. */
    description: agentsPage.sections.find((x) => x.id === 'declared')?.lines[0] ?? '',
  },
]

const website: Node = {
  '@type': 'WebSite',
  '@id': WEBSITE,
  url: `${SITE}/`,
  name: 'Obsession',
  description: llms.summary,
  inLanguage: 'en-GB',
  publisher: { '@id': ORG },
}

const BLOG = `${SITE}/blog#blog`

function posting(e: Entry): Node {
  const a = e.article!
  const url = absolute(e.meta.path)
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: a.headline,
    description: a.description,
    abstract: e.meta.answer,
    url,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    isPartOf: { '@id': BLOG },
    datePublished: a.published,
    dateModified: a.updated,
    author: a.authors.map(person),
    publisher: { '@id': ORG },
    image: { '@type': 'ImageObject', url: absolute(e.meta.ogImage), width: 1200, height: 630 },
    articleSection: a.section,
    keywords: a.keywords.join(', '),
    inLanguage: 'en-GB',
  }
}

function blog(e: Entry): Node {
  return {
    '@type': 'Blog',
    '@id': BLOG,
    name: 'The Obsession blog',
    url: absolute(e.meta.path),
    description: e.meta.description,
    inLanguage: 'en-GB',
    publisher: { '@id': ORG },
    blogPost: entries.filter((p) => p.kind === 'post').map((p) => ({ '@id': `${absolute(p.meta.path)}#article` })),
  }
}

/* Says what Obsession is as a product, for meaning only. Google's Software App rich result also needs offers.price and a
   rating or review; the site states no prices and has no reviews, so Search Console lists this item as "invalid" with
   "Missing field offers". That is expected and only means no rich result (Google's Software App guide, updated 8 Sep
   2026): never add a price, a free offer, a rating or a review to clear it (docs/REBUILD.md 3: no Obsession prices,
   nothing invented). */
function software(e: Entry): Node {
  return {
    '@type': 'SoftwareApplication',
    '@id': APP,
    name: 'Obsession',
    url: `${SITE}/`,
    description: e.meta.answer,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    image: absolute(e.meta.ogImage),
    publisher: { '@id': ORG },
  }
}

export function jsonLd(e: Entry): Node {
  const url = absolute(e.meta.path)
  const crumbs = e.meta.breadcrumb
  const questions = e.faq?.items ?? []

  const page: Node = {
    '@type': questions.length ? ['WebPage', 'FAQPage'] : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: e.meta.title,
    description: e.meta.description,
    abstract: e.meta.answer,
    inLanguage: 'en-GB',
    isPartOf: { '@id': WEBSITE },
    publisher: { '@id': ORG },
    primaryImageOfPage: { '@type': 'ImageObject', url: absolute(e.meta.ogImage), width: 1200, height: 630 },
    ...(e.kind === 'home' ? { about: { '@id': APP } } : {}),
    ...(e.kind === 'agents' ? { about: agentTerms() } : {}),
    ...(crumbs?.length ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
    ...(questions.length
      ? {
          mainEntity: questions.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }
      : {}),
  }

  const graph: Node[] = [organization, website, page]
  if (e.kind === 'home') graph.push(software(e))
  if (e.kind === 'blog') graph.push(blog(e))
  if (e.kind === 'post' && e.article) graph.push(posting(e))
  if (crumbs?.length)
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: absolute(c.path) })),
    })

  return { '@context': 'https://schema.org', '@graph': graph }
}

/* The JSON-LD as a <script> element's text: "<" is escaped so no string in the copy can close the element. */
export function jsonLdScript(e: Entry): string {
  return JSON.stringify(jsonLd(e)).replace(/</g, '\\u003c')
}

/* Every page's JSON-LD, for checks. */
export const allJsonLd = () => entries.map((e) => ({ path: e.meta.path, data: jsonLd(e) }))
