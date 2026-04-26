import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

import Navbar   from './components/layout/Navbar'
import Footer   from './components/layout/Footer'

import Home            from './pages/Home'
import About           from './pages/About'
import BoardOfDirectors from './pages/BoardOfDirectors'
import ManagementTeam  from './pages/ManagementTeam'
import Services        from './pages/Services'
import ServiceDetail   from './pages/ServiceDetail'
import Publications    from './pages/Publications'
import Partners        from './pages/Partners'
import Booking         from './pages/Booking'
import Contact         from './pages/Contact'
import NotFound        from './pages/NotFound'

/* scroll to top on navigation */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/"                          element={<Home />} />
            <Route path="/about"                     element={<About />} />
            <Route path="/board"                     element={<BoardOfDirectors />} />
            <Route path="/team"                      element={<ManagementTeam />} />
            <Route path="/services"                  element={<Services />} />
            <Route path="/services/:slug"            element={<ServiceDetail />} />
            <Route path="/publications"              element={<Publications />} />
            <Route path="/partners"                  element={<Partners />} />
            <Route path="/booking"                   element={<Booking />} />
            <Route path="/contact"                   element={<Contact />} />
            <Route path="*"                          element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

