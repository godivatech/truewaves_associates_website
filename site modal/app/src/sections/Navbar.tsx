import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Demos', href: '#' },
  { 
    name: 'Pages', 
    href: '#',
    dropdown: [
      { name: 'About Us', href: '#about' },
      { name: 'Core Values', href: '#' },
      { name: 'Our Awards', href: '#' },
      { name: 'Our Team', href: '#team' },
      { name: 'Team Single', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Error Page', href: '#' },
    ]
  },
  { 
    name: 'Services', 
    href: '#services',
    dropdown: [
      { name: 'Services Style 01', href: '#services' },
      { name: 'Services Style 02', href: '#services' },
      { name: 'Services Style 03', href: '#services' },
      { name: 'Service Details', href: '#services' },
    ]
  },
  { 
    name: 'Projects', 
    href: '#projects',
    dropdown: [
      { name: 'Projects Grid Style', href: '#projects' },
      { name: 'Projects List Style', href: '#projects' },
      { name: 'Project Details', href: '#projects' },
    ]
  },
  { 
    name: 'News', 
    href: '#',
    dropdown: [
      { name: 'News Gridview', href: '#' },
      { name: 'News Listview', href: '#' },
      { name: 'Single Post', href: '#' },
    ]
  },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav 
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-md shadow-lg' 
              : 'bg-white shadow-md'
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-lime rounded-sm transform rotate-45 translate-x-1 translate-y-1" />
              <div className="absolute inset-0 bg-lime/70 rounded-sm transform rotate-45" />
            </div>
            <span className="text-xl font-bold text-[#1a1a1a]">spaciaz</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-[#1a1a1a] hover:text-lime-dark transition-colors"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl py-3 overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-5 py-2.5 text-sm text-[#1a1a1a] hover:bg-lime/10 hover:text-lime-dark transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+08412345688" 
              className="flex items-center gap-2 text-sm text-[#1a1a1a] hover:text-lime-dark transition-colors"
            >
              <span className="text-muted-foreground">Call Us:</span>
              <span className="underline underline-offset-2">+(084) 123-456 88</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-lime text-[#1a1a1a] text-sm font-semibold rounded-full hover:bg-lime-dark transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1a1a1a]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-2 bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      className="block px-4 py-3 text-[#1a1a1a] hover:bg-lime/10 rounded-lg transition-colors font-medium"
                      onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                    {link.dropdown && (
                      <div className="pl-4 space-y-1">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-[#1a1a1a] rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <a
                    href="#contact"
                    className="block w-full px-4 py-3 bg-lime text-[#1a1a1a] text-center font-semibold rounded-lg"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
