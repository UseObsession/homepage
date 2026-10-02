import { useEffect } from 'react'
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
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
import { SampleOutput } from './pages/SampleOutput'
import { RecipePage } from './pages/RecipePage'
import { Recipes } from './pages/Recipes'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = metaFor(pathname).title
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function Layout() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollManager />
      <a className="s-skip" href="#main">
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
          <Route path="sample-output" element={<SampleOutput />} />
          <Route path="sample-report" element={<Navigate to="/sample-output" replace />} />
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
