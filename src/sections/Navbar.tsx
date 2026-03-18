import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Certifications', href: '/certifications' },
    // { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <nav
                    className={`flex items-center justify-between px-6 py-3 rounded-3xl transition-all duration-300 ${isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-lg border border-gray-100'
                        : 'bg-white shadow-md'
                        }`}
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center mr-20 sm:mr-48 lg:mr-64">
                        <img
                            src="/images/Logo%202.png"
                            alt="TrueWaves Logo"
                            className="h-20 w-auto object-contain scale-[3] sm:scale-[4.5] transform origin-left ml-2 sm:-ml-2 -translate-y-1 sm:-translate-y-2 lg:-translate-y-3"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative">
                                {link.href.startsWith('/') && !link.href.includes('#') ? (
                                    <Link
                                        to={link.href}
                                        className="flex items-center gap-1 text-base font-medium text-navy hover:text-accent transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-1 text-base font-medium text-navy hover:text-accent transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Link
                            to="/contact"
                            className="px-6 py-2.5 bg-accent text-navy text-base font-bold rounded-full hover:opacity-90 transition-all transform hover:scale-105"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-navy"
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
                            className="lg:hidden mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                            <div className="p-4 space-y-2">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        {link.href.startsWith('/') && !link.href.includes('#') ? (
                                            <Link
                                                to={link.href}
                                                className="block px-4 py-3 text-navy hover:bg-accent/10 rounded-lg transition-colors font-medium"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className="block px-4 py-3 text-navy hover:bg-accent/10 rounded-lg transition-colors font-medium"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </div>
                                ))}
                                <div className="pt-4 border-t">
                                    <Link
                                        to="/contact"
                                        className="block w-full px-4 py-3 bg-accent text-navy text-center font-semibold rounded-lg"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Get In Touch
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
