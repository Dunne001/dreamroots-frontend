import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'
import BookingPage from './pages/BookingPage'
import AboutPage from './pages/AboutPage'
import TeamPage from './pages/TeamPage'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ServicesSection />
            <StatsSection />
            <TestimonialsSection />
            <Footer />
          </>
        } />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about/overview" element={<AboutPage />} />
        <Route path="/about/board" element={<TeamPage />} />
        <Route path="/about/team" element={<TeamPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  )
}

export default App