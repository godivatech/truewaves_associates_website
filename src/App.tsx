import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import DifferentSection from './sections/DifferentSection';
import TestimonialsSection from './sections/TestimonialsSection';
import PartnersSection from './sections/PartnersSection';
import TeamSection from './sections/TeamSection';
import ContactSection from './sections/ContactSection';
import BlogSection from './sections/BlogSection';
import UnifiedFooter from './sections/UnifiedFooter';

// Page Components
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import CertificationsPage from './pages/CertificationsPage';

function ScrollToTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-colors"
        >
          <ArrowUp className="w-5 h-5 text-dark" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <DifferentSection />
        <TestimonialsSection />
        <PartnersSection />
        <TeamSection />
        <ContactSection />
        <BlogSection />
      </main>
      <UnifiedFooter />
    </>
  );
}

// Helper to handle auto-scrolling to top on route change if needed
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
