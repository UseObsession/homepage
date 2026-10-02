import { useEffect } from 'react'
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { agencies, marketing, sales } from './content/audiences'
import { AudiencePage } from './pages/AudiencePage'
import { Developers } from './pages/Developers'
import { Home } from './pages/Home'
import { SampleReport } from './pages/SampleReport'
import { RecipePage } from './pages/RecipePage'
import { Recipes } from './pages/Recipes'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (pathname === '/') document.title = 'Obsession · The intelligence infrastructure for commercial teams'
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
  return (
    <>
      <ScrollManager />
      <Nav />
      <main>
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
      </div>
    </section>
  )
}

export default function App() {
  return (
    <BrowserRouter>
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
          <Route path="sample-report" element={<SampleReport />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
