import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Added for SEO management across pages

// Layout & Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop'; // (Optional but recommended) Resets scroll to top on page change

// Pages
import HomePage from './pages/HomePage'; // (Extracted Hero, Services, Stats, Testimonials into here)
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PublicationsPage from './pages/PublicationsPage';
import PartnersPage from './pages/PartnersPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* <ScrollToTop /> Uncomment if you create a simple ScrollToTop component */}
        
        {/* Layout Wrapper ensures footer is pushed to the bottom */}
        <div className="flex flex-col min-h-screen bg-[#F7F9FC]"> 
          
          <Navbar />
          
          {/* pt-24 offsets the fixed glass navbar */}
          <main className="flex-grow pt-24">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/booking" element={<BookingPage />} />
              
              <Route path="/about/overview" element={<AboutPage />} />
              {/* Passing a prop allows TeamPage to distinguish between Board and Management */}
              <Route path="/about/board" element={<TeamPage type="board" />} />
              <Route path="/about/team" element={<TeamPage type="management" />} />
              <Route path="/about/testimonials" element={<TestimonialsPage />} />
              
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/partners-affiliations" element={<PartnersPage />} />
              
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
        
        <WhatsAppButton />
        <BackToTop />
      </Router>
    </HelmetProvider>
  );
}

export default App;