import { useEffect, useState } from 'react';
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
import FooterCTA from './sections/FooterCTA';
import Footer from './sections/Footer';

function App() {
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
    <div className="relative min-h-screen bg-white overflow-x-hidden">
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
        <FooterCTA />
      </main>
      
      <Footer />
      
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-lime rounded-full flex items-center justify-center shadow-lg hover:bg-lime-dark transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-dark" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
