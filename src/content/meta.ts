/* What describes each page to search engines, answer engines and link previews, read from the content's own Meta
   (content/types). The prerender (scripts/prerender.mjs) writes it into each page's head, with the JSON-LD from
   lib/jsonld; the share images (scripts/og.mjs), sitemap.xml and llms.txt are made from the same list. */
import { agentsPage, blogLive, notFoundPage, pages, postFileOf, posts, privacyPage, recipes, recipesPage, references, refFileOf, sample, studies } from './registry'
import { alternativesHub, glossaryHub, type ReferenceHub, type ReferenceKind } from './reference'
import { blogPage, resourcesPage, useCasesPage } from './resources'
import { SITE, absolute, cleanPath } from './paths'
import { lookupPage } from './pages/lookup'
import { noCodePage } from './noCode'
import { pieces } from './pieces'
import { kits } from './kits'
import { cases, teams } from './teams'
import { pricingPage, ratesPage } from './pricing'
import { securityPage } from './security'
import type { Faq, Meta, ShareFindings } from './types'
import { citedSources } from '../lib/sources'

export { SITE, absolute, cleanPath }

export type PageKind =
  | 'home'
  | 'audience'
  | 'developers'
  | 'no-code'
  | 'compare'
  | 'verify'
  | 'recipes'
  | 'recipe'
  | 'sample'
  | 'resources'
  | 'use-cases'
  | 'use-case'
  | 'blog'
  | 'post'
  | 'privacy'
  | 'security'
  | 'agents'
  | 'comparison'
  | 'alternatives-hub'
  | 'alternatives'
  | 'glossary'
  | 'term'
  | 'not-found'
  | 'lookup'
  | 'pricing'
  | 'piece'
  | 'kit'
  | 'team'

/* A post's facts for its BlogPosting JSON-LD and the RSS feed. */
export type Article = {
  headline: string
  description: string
  published: string
  updated: string
  section: string
  keywords: string[]
  authors: { name: string; role: string }[]
  /* The sources its text links to, in the order it cites them (lib/sources), for the JSON-LD's citation. */
  citations: { name: string; url: string; publisher: string; date?: string }[]
  /* The post's photograph, where it has one, for sitemap.xml's image entries. */
  image?: { src: string; alt: string }
}

export type Entry = {
  kind: PageKind
  /* Every Meta field, with the share image filled in (meta.ogImage, else /og/LAST-SEGMENT.png). */
  meta: Meta & { ogImage: string }
  /* The page's short name, for llms.txt and the share image's foot. */
  name: string
  /* The page's h1, which is also the share image's headline. */
  headline: string
  /* The share image's 1 line under the headline, taken from the page's own words. */
  line: string
  /* Home's share image only: the findings card drawn beside the headline (home.shareFindings, scripts/og.mjs). */
  findings?: ShareFindings
  /* The questions the page shows, for FAQPage JSON-LD. */
  faq?: Faq
  /* The content file the page's words live in, for the sitemap's lastmod. */
  source: string
  /* A date the page states itself (a post's updated date), used for the sitemap's lastmod instead of the last commit. */
  lastmod?: string
  /* Where the page sits, for the share image's foot. Defaults to its breadcrumb after Home. */
  place?: string
  /* A post's facts (BlogPosting JSON-LD, the RSS feed). */
  article?: Article
  /* A glossary term's name and definition (its DefinedTerm), on /glossary/SLUG. */
  term?: { name: string; alternateName?: string[]; definition: string }
  /* A comparison's or an alternatives page's company, for its JSON-LD. */
  company?: string
}

const firstSentence = (s: string) => s.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? s

const ogFor = (meta: Meta) => ({ ...meta, ogImage: meta.ogImage ?? `/og/${meta.path === '/' ? 'home' : meta.path.split('/').pop()}.png` })
const crumbName = (meta: Meta, fallback: string) => meta.breadcrumb?.[meta.breadcrumb.length - 1]?.name ?? fallback


/* A reference page (content/reference.ts): a comparison, an alternatives page or a glossary term. */
const REF_KIND: Record<ReferenceKind, PageKind> = { compare: 'comparison', alternatives: 'alternatives', term: 'term' }
const REF_PLACE: Record<ReferenceKind, string> = { compare: 'Compare', alternatives: 'Compare / Alternatives', term: 'Glossary' }
const refEntries = (kind: ReferenceKind): Entry[] =>
  references
    .filter((r) => r.kind === kind)
    .map((r) => {
      const faq = r.blocks.flatMap((b) => (b.kind === 'faq' ? b.items : []))
      return {
        kind: REF_KIND[kind],
        meta: r.meta,
        name: r.name,
        headline: r.title,
        line: r.dek,
        faq: faq.length ? { heading: r.title, items: faq } : undefined,
        source: `src/content/${refFileOf[r.meta.path]}.ts`,
        lastmod: r.checked,
        place: REF_PLACE[kind],
        term: r.term,
        company: r.company,
      }
    })
const hubEntry = (hub: ReferenceHub, kind: PageKind): Entry => ({
  kind,
  meta: hub.meta,
  name: crumbName(hub.meta, kind),
  headline: hub.hero.headline,
  line: firstSentence(hub.hero.sub),
  faq: hub.faq,
  source: 'src/content/reference.ts',
})

const home = pages.home
const dev = pages.developers
const compare = pages.compare
const behind = pages['web-behind-the-login']

/* Every prerendered page, in the order the sitemap and llms.txt list them. */
export const entries: Entry[] = [
  { kind: 'home', meta: ogFor(home.meta), name: 'Home', headline: home.hero.headline, line: home.meta.ogLine ?? home.hero.pill ?? home.hero.headline, findings: home.shareFindings, faq: home.faq, source: 'src/content/pages/home.ts' },
  /* Each piece's own page (content/pieces, 21 Nov): Email, Phone, Messaging, Browser, Sandbox, Personas. */
  ...pieces.map(
    (p): Entry => ({
      kind: 'piece',
      meta: ogFor(p.meta),
      name: p.name,
      headline: p.hero.headline,
      line: firstSentence(p.hero.sub),
      faq: p.faq,
      source: `src/content/pieces/${p.id}.ts`,
    }),
  ),
  /* The six types of blueprints (content/kits, 22 Nov): each job agents do, at /blueprints/SLUG. */
  ...kits.map(
    (k): Entry => ({
      kind: 'kit',
      meta: ogFor(k.meta),
      name: k.name,
      headline: k.hero.headline,
      line: firstSentence(k.hero.sub),
      faq: k.faq,
      source: `src/content/kits/${k.id}.ts`,
      place: 'Blueprints',
    }),
  ),
  {
    kind: 'developers',
    meta: ogFor(dev.meta),
    name: crumbName(dev.meta, 'Developers'),
    headline: dev.hero.headline,
    line: firstSentence(dev.hero.sub),
    faq: dev.faq,
    source: 'src/content/pages/developers.ts',
  },
  /* The front door for teams that don't write code (content/noCode.ts, 23 Nov 2026), beside /developers. */
  {
    kind: 'no-code',
    meta: ogFor(noCodePage.meta),
    name: crumbName(noCodePage.meta, 'No code'),
    headline: noCodePage.hero.headline,
    line: firstSentence(noCodePage.hero.sub),
    faq: noCodePage.faq,
    source: 'src/content/noCode.ts',
  },
  /* What each piece costs (content/pricing.ts): its own words, not a Page, like the lookup. Its share card's line is
     its own `line`, and its questions are FAQPage. */
  {
    kind: 'pricing',
    meta: ogFor(pricingPage.meta),
    name: crumbName(pricingPage.meta, 'Pricing'),
    headline: pricingPage.headline,
    line: pricingPage.line,
    faq: pricingPage.faq,
    source: 'src/content/pricing.ts',
  },
  /* Every per-piece rate, on its own page since 21 Nov so /pricing holds only the plans and the calculator. */
  {
    kind: 'pricing',
    meta: ogFor(ratesPage.meta),
    name: crumbName(ratesPage.meta, 'Every rate'),
    headline: ratesPage.headline,
    line: ratesPage.line,
    faq: ratesPage.faq,
    source: 'src/content/pricing.ts',
    place: 'Pricing',
  },
  {
    kind: 'compare',
    meta: ogFor(compare.meta),
    name: crumbName(compare.meta, 'Compare'),
    headline: compare.hero.headline,
    line: firstSentence(compare.hero.sub),
    faq: compare.faq,
    source: 'src/content/pages/compare.ts',
  },
  ...refEntries('compare'),
  hubEntry(alternativesHub, 'alternatives-hub'),
  ...refEntries('alternatives'),
  /* Each team's page (content/teams, 22 Nov): /sales, /marketing, /verify, /agencies and the 4 industry pages. */
  ...teams.map(
    (t): Entry => ({
      kind: 'team',
      meta: ogFor(t.meta),
      name: t.name,
      headline: t.hero.headline,
      line: firstSentence(t.hero.sub),
      faq: t.faq,
      source: `src/content/teams/${t.id}.ts`,
    }),
  ),
  /* The use case pages in the team template (content/teams/cases, 22 Nov): one job in one industry each. */
  ...cases.map(
    (c): Entry => ({
      kind: 'use-case',
      meta: ogFor(c.meta),
      name: c.name,
      headline: c.hero.headline,
      line: firstSentence(c.hero.sub),
      faq: c.faq,
      source: `src/content/teams/cases/${c.meta.path.split('/').pop()}.ts`,
      place: 'Resources / Use cases',
    }),
  ),
  {
    kind: 'recipes',
    meta: ogFor(recipesPage.meta),
    name: crumbName(recipesPage.meta, 'Recipes'),
    headline: recipesPage.hero.headline,
    line: firstSentence(recipesPage.hero.sub),
    faq: recipesPage.faq,
    source: 'src/content/site.ts',
  },
  ...recipes.map(
    (r): Entry => ({
      kind: 'recipe',
      meta: ogFor(r.meta),
      name: r.name,
      headline: r.hero.headline,
      line: r.gets,
      faq: r.faq,
      source: `src/content/recipes/${r.slug}.ts`,
    }),
  ),
  {
    kind: 'resources',
    meta: ogFor(resourcesPage.meta),
    name: crumbName(resourcesPage.meta, 'Resources'),
    headline: resourcesPage.hero.headline,
    line: resourcesPage.hero.sub,
    source: 'src/content/resources.ts',
  },
  {
    kind: 'use-cases',
    meta: ogFor(useCasesPage.meta),
    name: crumbName(useCasesPage.meta, 'Use cases'),
    headline: useCasesPage.hero.headline,
    line: firstSentence(useCasesPage.hero.sub),
    source: 'src/content/resources.ts',
  },
  /* The old Home, a use case built on the pieces since 21 Nov (content/pages/web-behind-the-login.ts). */
  {
    kind: 'use-case',
    meta: ogFor(behind.meta),
    name: crumbName(behind.meta, 'The web behind the login'),
    headline: behind.hero.headline,
    line: firstSentence(behind.hero.sub),
    faq: behind.faq,
    source: 'src/content/pages/web-behind-the-login.ts',
    place: 'Resources / Use cases',
  },
  ...studies.map(
    (st): Entry => ({
      kind: 'use-case',
      meta: ogFor(st.meta),
      name: st.name,
      headline: st.hero.headline,
      line: st.line,
      faq: st.faq,
      source: `src/content/usecases/${st.meta.path.split('/').pop()}.ts`,
      place: 'Resources / Use cases',
    }),
  ),
  {
    kind: 'sample',
    meta: ogFor(sample.meta),
    name: crumbName(sample.meta, 'Sample output'),
    headline: sample.hero.headline,
    line: sample.hero.pill,
    faq: sample.faq,
    source: 'src/content/sample.ts',
  },
  /* The store lookup (content/pages/lookup.ts), indexed since 14 Nov (Seun): in the sitemap and llms.txt, its own share
     card, its questions as FAQPage. The entries it sends stay private: each opens only from a link in the owner's inbox. */
  {
    kind: 'lookup',
    meta: ogFor(lookupPage.meta),
    name: crumbName(lookupPage.meta, 'Look up your site'),
    headline: lookupPage.headline,
    line: lookupPage.pill,
    faq: lookupPage.faq,
    source: 'src/content/pages/lookup.ts',
  },
  /* The blog index only while a post is live (content/blog/archive holds the rest). */
  ...(blogLive
    ? [
        {
          kind: 'blog',
          meta: ogFor(blogPage.meta),
          name: crumbName(blogPage.meta, 'Blog'),
          headline: blogPage.hero.headline,
          line: blogPage.hero.sub,
          source: 'src/content/resources.ts',
          lastmod: posts[0]?.updated,
        } satisfies Entry,
      ]
    : []),
  ...posts.map((p): Entry => {
    const path = `/blog/${p.slug}`
    const faq = p.blocks.flatMap((b) => (b.kind === 'faq' ? b.items : []))
    return {
      kind: 'post',
      meta: {
        path,
        title: p.metaTitle,
        description: p.description,
        answer: p.answer,
        /* Posts share the /og/ folder with every page, so their cards carry a prefix: a post can never take a recipe's. */
        ogImage: `/og/blog-${p.slug}.png`,
        breadcrumb: [
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: p.title, path },
        ],
      },
      name: p.title,
      headline: p.title,
      line: p.dek,
      faq: faq.length ? { heading: p.title, items: faq } : undefined,
      source: `src/content/blog/${postFileOf[p.slug] ?? p.slug}.ts`,
      lastmod: p.updated || p.published,
      place: `Blog / ${p.category}`,
      article: {
        headline: p.title,
        description: p.description,
        published: p.published,
        updated: p.updated || p.published,
        section: p.category,
        keywords: [p.primaryKeyword, ...p.keywords.filter((k) => k !== p.primaryKeyword)],
        authors: p.authors,
        citations: citedSources(p).map((c) => ({ name: c.title, url: c.url, publisher: c.publisher, date: c.date })),
        image: p.hero.image ? { src: p.hero.image.src, alt: p.hero.image.alt } : undefined,
      },
    }
  }),
  hubEntry(glossaryHub, 'glossary'),
  ...refEntries('term'),
  {
    kind: 'agents',
    meta: ogFor(agentsPage.meta),
    name: crumbName(agentsPage.meta, 'Obsession agents'),
    headline: agentsPage.headline,
    line: agentsPage.sub,
    faq: agentsPage.faq,
    source: 'src/content/site.ts',
  },
  {
    kind: 'privacy',
    meta: ogFor(privacyPage.meta),
    name: crumbName(privacyPage.meta, 'Privacy'),
    headline: privacyPage.headline,
    line: privacyPage.sub,
    source: 'src/content/site.ts',
  },
  {
    kind: 'security',
    meta: ogFor(securityPage.meta),
    name: crumbName(securityPage.meta, 'Security'),
    headline: securityPage.headline,
    /* The share card's line: the sub's first sentence is too long for it. */
    line: securityPage.contact.line,
    source: 'src/content/security.ts',
  },
]

/* dist/404.html: noindex, and it shares Home's image. */
export const notFound: Entry = {
  kind: 'not-found',
  meta: { ...notFoundPage.meta, ogImage: entries[0].meta.ogImage },
  name: 'Page not found',
  headline: notFoundPage.headline,
  line: notFoundPage.sub,
  source: 'src/content/site.ts',
}

/* The store lookup's entry, in `entries` since 14 Nov (indexed), named for the code that asks for it by itself. */
export const lookup: Entry = entries.find((e) => e.kind === 'lookup')!

const byPath = new Map(entries.map((e) => [e.meta.path, e]))

export function entryFor(path: string): Entry {
  return byPath.get(cleanPath(path)) ?? notFound
}

export function metaFor(path: string): Meta {
  return entryFor(path).meta
}
