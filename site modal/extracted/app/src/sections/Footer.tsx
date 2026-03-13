import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  column1: [
    { name: 'About Us', href: '#' },
    { name: 'Why Choose Us', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Core Values', href: '#' },
  ],
  column2: [
    { name: 'Our Projects', href: '#projects' },
    { name: 'News & Updates', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Support Center', href: '#' },
    { name: 'Contact', href: '#contact' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Youtube', icon: Youtube, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-light">
      {/* Main Footer Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-lime rounded-sm transform rotate-45 translate-x-1 translate-y-1" />
                  <div className="absolute inset-0 bg-lime/70 rounded-sm transform rotate-45" />
                </div>
                <span className="text-xl font-bold text-dark">spaciaz</span>
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We are creators of transformative spaces that inspire, innovate, and endure.
              </p>
            </div>

            {/* Links Column 1 */}
            <div>
              <ul className="space-y-3">
                {footerLinks.column1.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-dark hover:text-lime-dark transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <ul className="space-y-3">
                {footerLinks.column2.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-dark hover:text-lime-dark transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <a
                href="tel:+08412345688"
                className="block text-2xl font-bold text-dark hover:text-lime-dark transition-colors mb-2"
              >
                +(084) 123-456 88
              </a>
              <a
                href="mailto:spaciaz@example.com"
                className="block text-xl font-medium text-dark hover:text-lime-dark transition-colors mb-6"
              >
                spaciaz@example.com
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-sm text-muted-foreground hover:text-dark transition-colors"
                    aria-label={social.name}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 <span className="font-medium text-dark">Spaciaz</span>. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom spacing */}
      <div className="h-8" />
    </footer>
  );
}
