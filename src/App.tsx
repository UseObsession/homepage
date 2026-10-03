import { Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, useNavigationType, useParams } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { catalog } from './content/catalog'
import { headFor } from './content/head'
import { storyCtas } from './content/heads'
import { ctaFor, nav } from './content/nav'
import { absolute, cleanPath } from './content/paths'
import { recipeWords, studyWords } from './content/words'
import { lazyPage } from './lib/lazy'

/* Each page's code (and its words) is its own chunk, loaded for the page that shows it (lib/lazy.tsx): the app itself
   carries only the nav, the footer and the index of every page (content/catalog.ts, content/heads.ts). */
const Home = lazyPage(() => import('./pages/Home').then((m) => m.Home))
const Agencies = lazyPage(() => import('./pages/Agencies').then((m) => m.Agencies))
const Founders = lazyPage(() => import('./pages/Founders').then((m) => m.Founders))
const Sales = lazyPage(() => import('./pages/Sales').then((m) => m.Sales))
const Marketing = lazyPage(() => import('./pages/Marketing').then((m) => m.Marketing))
const Developers = lazyPage(() => import('./pages/Developers').then((m) => m.Developers))
const Verify = lazyPage(() => import('./pages/Verify').then((m) => m.Verify))
const Recipes = lazyPage(() => import('./pages/Recipes').then((m) => m.Recipes))
const Recipe = lazyPage(() => import('./pages/Recipe').then((m) => m.Recipe))
const Resources = lazyPage(() => import('./pages/Resources').then((m) => m.Resources))
const UseCases = lazyPage(() => import('./pages/UseCases').then((m) => m.UseCases))
const UseCase = lazyPage(() => import('./pages/UseCase').then((m) => m.UseCaseAt))
const Blog = lazyPage(() => import('./pages/Blog').then((m) => m.Blog))
const BlogPost = lazyPage(() => import('./pages/BlogPost').then((m) => m.BlogPostAt))
const SampleOutput = lazyPage(() => import('./pages/SampleOutput').then((m) => m.SampleOutput))
const Privacy = lazyPage(() => import('./pages/Privacy').then((m) => m.Privacy))
const Agents = lazyPage(() => import('./pages/Agents').then((m) => m.Agents))
const NotFound = lazyPage(() => import('./pages/NotFound').then((m) => m.NotFound))

const RECIPES = new Set(catalog.recipes.map((r) => r.slug))
const STUDIES = new Set(catalog.studies.map((s) => s.path))
const POSTS = new Set(catalog.posts.map((p) => p.slug))
const PAGES: Record<string, { preload: () => Promise<unknown> }> = {
  '/': Home,
  '/agencies': Agencies,
  '/founders': Founders,
  '/sales': Sales,
  '/marketing': Marketing,
  '/developers': Developers,
  '/verify': Verify,
  '/recipes': Recipes,
  '/resources': Resources,
  '/use-cases': UseCases,
  '/sample-output': SampleOutput,
  '/privacy': Privacy,
  '/agents': Agents,
  ...(catalog.blogLive ? { '/blog': Blog } : {}),
}

/* Loads the code and words of the page at a path, so it draws at once: the prerender awaits it before drawing a page
   (entry-server.tsx) and the browser before hydrating it (main.tsx), as AppRoutes would find it. */
// oxlint-disable-next-line react/only-export-components -- the routes' own loader, beside the routes it mirrors
export function preloadRoute(path: string): Promise<unknown> {
  const p = cleanPath(path)
  const [, first, slug] = p.split('/')
  if (PAGES[p]) return PAGES[p].preload()
  if (first === 'recipes' && slug && RECIPES.has(slug)) return Promise.all([Recipe.preload(), recipeWords(slug).preload()])
  if (first === 'use-cases' && STUDIES.has(p)) return Promise.all([UseCase.preload(), studyWords(p).preload()])
  if (first === 'blog' && catalog.blogLive && slug && POSTS.has(slug)) return BlogPost.preload()
  return NotFound.preload()
}

const idOf = (hash: string) => {
  try {
    return decodeURIComponent(hash.slice(1))
  } catch {
    return hash.slice(1)
  }
}

/* The head follows the page on every route change, so a tab, a bookmark or a share made after moving around the site
   names the page the reader is on. The prerender writes the full head for each page; this keeps the 3 that change. */
function syncHead(pathname: string) {
  const head = headFor(pathname)
  document.title = head.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', head.description)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', absolute(head.path))
}

const SCROLL_STORE = 'obs-scroll'

/* Where each page opens:
   - A link to another page opens at its top (or its #anchor), with focus on the page itself so a screen reader starts
     reading there.
   - Back and Forward return to where the reader was on that page. The site keeps each history entry's position itself
     (the browser's own restore runs before the page it returns to has rendered, so it lands in the wrong place), and
     hands restoring back to the browser when the page is left, so a reload or a return from another site works too.
   - The first load keeps the browser's own position, or the #anchor in the address. */
function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const how = useNavigationType()
  /* The entry whose position was last set: null until the first load is handled. React's development double run of
     effects sees the same entry again and leaves it alone. */
  const handled = useRef<string | null>(null)
  const current = useRef(key)
  const saved = useRef<Record<string, number>>({})

  useEffect(() => {
    try {
      saved.current = JSON.parse(sessionStorage.getItem(SCROLL_STORE) ?? '{}') as Record<string, number>
    } catch {
      /* storage blocked: positions last for this page only */
    }
    const own = () => {
      history.scrollRestoration = 'manual'
    }
    const save = () => {
      saved.current[current.current] = window.scrollY
    }
    const leave = () => {
      save()
      try {
        sessionStorage.setItem(SCROLL_STORE, JSON.stringify(saved.current))
      } catch {
        /* storage blocked */
      }
      history.scrollRestoration = 'auto'
    }
    const back = (e: PageTransitionEvent) => {
      if (e.persisted) own()
    }
    own()
    window.addEventListener('scroll', save, { passive: true })
    window.addEventListener('pagehide', leave)
    window.addEventListener('pageshow', back)
    return () => {
      window.removeEventListener('scroll', save)
      window.removeEventListener('pagehide', leave)
      window.removeEventListener('pageshow', back)
      history.scrollRestoration = 'auto'
    }
  }, [])

  useLayoutEffect(() => {
    /* From here on, scrolling is saved against the entry now showing. */
    current.current = key
    syncHead(pathname)
    if (handled.current === null || handled.current === key) {
      handled.current = key
      return
    }
    handled.current = key
    const target = hash ? document.getElementById(idOf(hash)) : null
    if (how === 'POP') {
      const y = saved.current[key]
      if (typeof y === 'number') window.scrollTo(0, y)
      else if (target) target.scrollIntoView()
      else window.scrollTo(0, 0)
      return
    }
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
    if (!hash) document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname, hash, key, how])

  return null
}

/* The story pages (Home, Agencies, Founders, Sales, Marketing, Developers, Check your AI agents) and every recipe take
   the nav's call to action from their own capture: the hero form's button, landing on the page's final form (#join). */
const STORY_CTAS = new Map(Object.entries(storyCtas).map(([path, label]) => [path, { label, to: '#join' }]))

/* Pages without a form of their own send the nav's call to action to Home's waitlist. */
const NO_FORM = new Set(['/privacy', '/agents'])
function ctaAt(pathname: string) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const story = STORY_CTAS.get(clean)
  if (story) return story
  const cta = ctaFor(pathname)
  return NO_FORM.has(clean) && cta.to.startsWith('#') ? { ...cta, to: `/${cta.to}` } : cta
}

/* The pages whose first view has no button of their own (their hero has no form), so the bar's call to action is the
   view's 1 primary from the first paint. Everywhere else it starts as the secondary beside the hero's own (Nav.tsx). */
const NO_HERO_FORM = new Set(['/privacy', '/agents', '/recipes', '/resources', '/use-cases', '/blog'])
const heroFormAt = (clean: string) => !NO_HERO_FORM.has(clean) && !clean.startsWith('/blog/')

function Layout() {
  const { pathname } = useLocation()
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return (
    <>
      <ScrollManager />
      <a className="ob-skip s-skip" href="#main">
        {nav.skip}
      </a>
      <Nav cta={ctaAt(pathname)} heroForm={heroFormAt(clean)} />
      <main id="main" tabIndex={-1}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

/* /recipes/SLUG for every recipe in src/content/recipes; any other slug is the 404 page. */
function RecipeRoute() {
  const { slug = '' } = useParams()
  return RECIPES.has(slug) ? <Recipe key={slug} slug={slug} /> : <NotFound />
}

/* /use-cases/SLUG for every worked example in src/content/usecases (James sends these to prospects). */
function UseCaseRoute() {
  const { slug = '' } = useParams()
  const path = `/use-cases/${slug}`
  return STUDIES.has(path) ? <UseCase key={slug} path={path} /> : <NotFound />
}

/* /blog/SLUG for every post in src/content/blog. */
function PostRoute() {
  const { slug = '' } = useParams()
  return POSTS.has(slug) ? <BlogPost key={slug} slug={slug} /> : <NotFound />
}

/* James's old /templates/SLUG links. The host answers these with a 301 (public/_redirects); this covers a link
   followed inside the app. */
function TemplatesRedirect() {
  const { '*': rest = '' } = useParams()
  return <Navigate to={rest ? `/recipes/${rest}` : '/recipes'} replace />
}

/* The route tree, shared by the browser (BrowserRouter) and the prerender (StaticRouter). Each route maps to 1 named
   page component in src/pages. The old addresses also have a 301 in public/_redirects. */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="agencies" element={<Agencies />} />
        <Route path="founders" element={<Founders />} />
        <Route path="sales" element={<Sales />} />
        <Route path="marketing" element={<Marketing />} />
        <Route path="developers" element={<Developers />} />
        <Route path="verify" element={<Verify />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/prospect-research" element={<Navigate to="/recipes/prospect-intelligence" replace />} />
        <Route path="recipes/:slug" element={<RecipeRoute />} />
        <Route path="resources" element={<Resources />} />
        <Route path="use-cases" element={<UseCases />} />
        <Route path="use-cases/:slug" element={<UseCaseRoute />} />
        {catalog.blogLive && <Route path="blog" element={<Blog />} />}
        {catalog.blogLive && <Route path="blog/:slug" element={<PostRoute />} />}
        <Route path="sample-output" element={<SampleOutput />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="agents" element={<Agents />} />
        <Route path="sample-report" element={<Navigate to="/sample-output" replace />} />
        <Route path="templates" element={<Navigate to="/recipes" replace />} />
        <Route path="templates/*" element={<TemplatesRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
