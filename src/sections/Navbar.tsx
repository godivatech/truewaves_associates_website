import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
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
                    className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-lg border border-gray-100'
                        : 'bg-white shadow-md'
                        }`}
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-lime rounded-xl flex items-center justify-center">
                            <span className="text-dark font-bold text-xl">T</span>
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-dark">
                            TrueWaves
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative">
                                {link.href.startsWith('/') && !link.href.includes('#') ? (
                                    <Link
                                        to={link.href}
                                        className="flex items-center gap-1 text-sm font-medium text-[#1a1a1a] hover:text-lime transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-1 text-sm font-medium text-[#1a1a1a] hover:text-lime transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="hidden lg:flex items-center gap-6">
                        <a
                            href="tel:+919487525226"
                            className="flex items-center gap-2 text-sm text-[#1a1a1a] hover:text-lime transition-colors"
                        >
                            <span className="text-muted-foreground">Call Us:</span>
                            <span className="underline underline-offset-2">+(91) 9487525226</span>
                        </a>
                        <button
                            className="px-6 py-2.5 bg-lime text-dark text-sm font-semibold rounded-full hover:bg-lime-dark transition-all transform hover:scale-105"
                        >
                            Get In Touch
                        </button>
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
                            className="lg:hidden mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                            <div className="p-4 space-y-2">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        {link.href.startsWith('/') && !link.href.includes('#') ? (
                                            <Link
                                                to={link.href}
                                                className="block px-4 py-3 text-[#1a1a1a] hover:bg-lime/10 rounded-lg transition-colors font-medium"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className="block px-4 py-3 text-[#1a1a1a] hover:bg-lime/10 rounded-lg transition-colors font-medium"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </div>
                                ))}
                                <div className="pt-4 border-t">
                                    <button
                                        className="w-full px-4 py-3 bg-lime text-dark text-center font-semibold rounded-lg"
                                    >
                                        Get In Touch
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
