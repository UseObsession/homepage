/* Structured data for every page (docs/REBUILD.md, section 8), written into the head by the prerender as 1
   <script type="application/ld+json"> holding a schema.org @graph:
   - Organization and WebSite on every page.
   - WebPage on every page; a FAQPage too wherever the page shows questions (the same words, so they match the page).
   - SoftwareApplication on Home.
   - BreadcrumbList wherever the page's Meta has a breadcrumb: every page below Home, matching the breadcrumb the page
     shows (components/Crumbs reads the same list).
   - BlogPosting on every post, with both founders as its authors (docs/REBUILD.md 9c), and Blog on /blog, listing them.
   No prices, ratings or offers: the site states none. */
import { absolute, entries, SITE, type Entry } from '../content/meta'
import { CONTACT_EMAIL, llms } from '../content/site'

const ORG = `${SITE}/#organization`
const WEBSITE = `${SITE}/#website`
const APP = `${SITE}/#software`

type Node = Record<string, unknown>

const organization: Node = {
  '@type': 'Organization',
  '@id': ORG,
  name: 'Obsession',
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: `${SITE}/logo/obsession-app-icon-1024.png`, width: 1024, height: 1024 },
  description: llms.summary,
  email: CONTACT_EMAIL,
}

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

/* A founder, as the byline names them. */
const person = (a: { name: string; role: string }): Node => ({ '@type': 'Person', name: a.name, jobTitle: a.role, worksFor: { '@id': ORG } })

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
