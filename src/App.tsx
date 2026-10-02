import { useEffect, useRef } from 'react'
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useLocation, useNavigationType } from 'react-router-dom'
import { CaptureForm } from './components/CaptureForm'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { waitlistCapture } from './content/capture'
import { ctaFor, nav } from './content/nav'
import { agencies, marketing, sales } from './content/audiences'
import { metaFor } from './content/meta'
import { AudiencePage } from './pages/AudiencePage'
import { Developers } from './pages/Developers'
import { Home } from './pages/Home'
import { PriceIntelligence } from './pages/PriceIntelligence'
import { ProspectIntelligence } from './pages/ProspectIntelligence'
import { SampleOutput } from './pages/SampleOutput'
import { RecipePage } from './pages/RecipePage'
import { Recipes } from './pages/Recipes'
import { Lab } from './Lab'

const idOf = (hash: string) => {
  try {
    return decodeURIComponent(hash.slice(1))
  } catch {
    return hash.slice(1)
  }
}

/* After a link to another page: the top of that page (or its #anchor), with focus on the page itself so a screen reader
   starts reading there. On the first load and on Back or Forward the browser keeps its own scroll position. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  const how = useNavigationType()
  const first = useRef(true)

  useEffect(() => {
    document.title = metaFor(pathname).title
    if (first.current) {
      first.current = false
      return
    }
    if (how === 'POP') return
    const target = hash ? document.getElementById(idOf(hash)) : null
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
    if (!hash) document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname, hash, how])

  return null
}

function Layout() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollManager />
      <a className="ob-skip s-skip" href="#main">
        {nav.skip}
      </a>
      <Nav cta={ctaFor(pathname)} />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function NotFound() {
  return (
    <section className="section">
      <div className="wrap head">
        <h1 className="h2">That page doesn’t exist.</h1>
        <p className="lede">
          <Link to="/">Back to the home page</Link>
        </p>
        <div id="join">
          <CaptureForm capture={waitlistCapture('404')} />
        </div>
      </div>
    </section>
  )
}

/* The route tree, shared by the browser (BrowserRouter) and the prerender (StaticRouter). */
export function AppRoutes() {
  return (
    <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="agencies" element={<AudiencePage key="agencies" a={agencies} />} />
          <Route path="sales" element={<AudiencePage key="sales" a={sales} />} />
          <Route path="marketing" element={<AudiencePage key="marketing" a={marketing} />} />
          <Route path="developers" element={<Developers />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/:slug" element={<RecipePage />} />
          <Route path="templates/*" element={<Navigate to="/recipes" replace />} />
          <Route path="use-cases/prospect-intelligence-with-clay" element={<ProspectIntelligence />} />
          <Route path="use-cases/member-prices-for-price-intelligence" element={<PriceIntelligence />} />
          <Route path="sample-output" element={<SampleOutput />} />
          <Route path="sample-report" element={<Navigate to="/sample-output" replace />} />
          {import.meta.env.VITE_LAB === '1' && <Route path="lab/:name" element={<Lab />} />}
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
