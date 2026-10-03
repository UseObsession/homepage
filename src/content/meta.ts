/* What describes each page to search engines, answer engines and link previews, read from the content's own Meta
   (content/types). The prerender (scripts/prerender.mjs) writes it into each page's head, with the JSON-LD from
   lib/jsonld; the share images (scripts/og.mjs), sitemap.xml and llms.txt are made from the same list. */
import { nav } from './nav'
import { agentsPage, blogLive, notFoundPage, pages, postFileOf, posts, privacyPage, recipes, recipesPage, sample, studies } from './registry'
import { blogPage, resourcesPage, useCasesPage } from './resources'
import type { Faq, Meta } from './types'

export const SITE = 'https://useobsession.com'

export type PageKind =
  | 'home'
  | 'audience'
  | 'developers'
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
  | 'agents'
  | 'not-found'

/* A post's facts for its BlogPosting JSON-LD and the RSS feed. */
export type Article = {
  headline: string
  description: string
  published: string
  updated: string
  section: string
  keywords: string[]
  authors: { name: string; role: string }[]
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
}

/* The share image's line on an audience page: the line the nav gives its reader. */
const solutionLine = (path: string) => nav.readers.find((s) => s.to === path)?.line ?? ''
const firstSentence = (s: string) => s.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? s

const ogFor = (meta: Meta) => ({ ...meta, ogImage: meta.ogImage ?? `/og/${meta.path === '/' ? 'home' : meta.path.split('/').pop()}.png` })
const crumbName = (meta: Meta, fallback: string) => meta.breadcrumb?.[meta.breadcrumb.length - 1]?.name ?? fallback

const AUDIENCES = ['agencies', 'founders', 'sales', 'marketing'] as const

const home = pages.home
const dev = pages.developers
const verify = pages.verify

/* Every prerendered page, in the order the sitemap and llms.txt list them. */
export const entries: Entry[] = [
  { kind: 'home', meta: ogFor(home.meta), name: 'Home', headline: home.hero.headline, line: home.hero.pill, faq: home.faq, source: 'src/content/pages/home.ts' },
  ...AUDIENCES.map(
    (a): Entry => ({
      kind: 'audience',
      meta: ogFor(pages[a].meta),
      name: crumbName(pages[a].meta, a),
      headline: pages[a].hero.headline,
      line: solutionLine(pages[a].meta.path) || pages[a].hero.pill,
      faq: pages[a].faq,
      source: `src/content/pages/${a}.ts`,
    }),
  ),
  {
    kind: 'developers',
    meta: ogFor(dev.meta),
    name: crumbName(dev.meta, 'Developers'),
    headline: dev.hero.headline,
    line: dev.hero.proof[0] ? `${dev.hero.proof[0].value} ${dev.hero.proof[0].label}` : dev.hero.pill,
    faq: dev.faq,
    source: 'src/content/pages/developers.ts',
  },
  {
    kind: 'verify',
    meta: ogFor(verify.meta),
    name: crumbName(verify.meta, 'Check your AI agents'),
    headline: verify.hero.headline,
    line: firstSentence(verify.hero.sub),
    faq: verify.faq,
    source: 'src/content/pages/verify.ts',
  },
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
      },
    }
  }),
  {
    kind: 'agents',
    meta: ogFor(agentsPage.meta),
    name: crumbName(agentsPage.meta, 'Obsession agents'),
    headline: agentsPage.headline,
    line: agentsPage.sub,
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

/* A path as the router sees it, without a trailing slash or a .html ending (except the root). */
export const cleanPath = (path: string) => {
  const p = path.split(/[?#]/)[0].replace(/(\/index)?\.html$/, '').replace(/\/+$/, '')
  return p === '' ? '/' : p
}

/* Absolute URLs: the canonical has no trailing slash, except the root. */
export const absolute = (path: string) => SITE + (path === '/' ? '/' : path)

const byPath = new Map(entries.map((e) => [e.meta.path, e]))

export function entryFor(path: string): Entry {
  return byPath.get(cleanPath(path)) ?? notFound
}

export function metaFor(path: string): Meta {
  return entryFor(path).meta
}
