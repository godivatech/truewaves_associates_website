import { motion } from 'framer-motion';


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
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Youtube', href: '#' },
    { name: 'Twitter', href: '#' },
];

export default function Footer() {
    return (
        <footer className="relative bg-navy px-4 sm:px-6 lg:px-8 pb-8 pt-12">
            {/* Main Footer Card */}
            <div className="max-w-[1400px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-[2.5rem] p-8 lg:p-14 shadow-2xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 lg:gap-x-0">
                        {/* Logo & Description */}
                        <div className="md:col-span-4 flex flex-col justify-between lg:pr-10">
                            <a href="#" className="flex items-center gap-3">
                                <img
                                    src="/images/Logo.png"
                                    alt="TrueWaves Logo"
                                    className="h-20 w-auto object-contain"
                                />
                                <span className="text-2xl font-bold text-navy tracking-tight">TrueWaves</span>
                            </a>
                            <div className="mt-16 sm:mt-24">
                                <p className="text-[15px] text-muted-foreground leading-relaxed font-medium md:max-w-xs">
                                    True Waves Group of Companies. Engaged with professional engineering and construction since 2008.
                                </p>
                            </div>
                        </div>

                        {/* Links Column 1 */}
                        <div className="md:col-span-2 lg:border-l lg:border-gray-200 lg:pl-10">
                            <ul className="space-y-4">
                                {footerLinks.column1.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-[15px] font-bold text-navy hover:text-accent transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Links Column 2 */}
                        <div className="md:col-span-2 lg:pl-4">
                            <ul className="space-y-4">
                                {footerLinks.column2.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-[15px] font-bold text-navy hover:text-accent transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="md:col-span-4 lg:border-l lg:border-gray-200 lg:pl-10 flex flex-col justify-between">
                            <div>
                                <a
                                    href="tel:04522535226"
                                    className="block text-[28px] font-bold text-navy hover:text-accent transition-colors mb-4 border-b border-accent pb-2 inline-block max-w-max"
                                >
                                    0452 2535226
                                </a>
                                <a
                                    href="mailto:info@truewavesgroup.com"
                                    className="block text-[22px] font-bold text-navy hover:text-accent transition-colors mb-6 border-b border-accent pb-2 inline-block max-max"
                                >
                                    info@truewavesgroup.com
                                </a>
                                <p className="text-[15px] font-medium text-muted-foreground mb-10 max-w-xs leading-relaxed hidden">
                                    {/* Address hidden here to match strictly the layout of Image 1 which had no address */}
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-3 text-sm font-bold text-muted-foreground">
                                {socialLinks.map((social, index) => (
                                    <div key={social.name} className="flex items-center gap-3">
                                        <a
                                            href={social.href}
                                            className="hover:text-navy transition-colors"
                                            aria-label={social.name}
                                        >
                                            {social.name}
                                        </a>
                                        {index < socialLinks.length - 1 && <span>•</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-200 mt-14 mb-8" />

                    {/* Copyright */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                        <p className="text-[15px] text-muted-foreground font-medium">
                            © 2026 <span className="text-navy font-bold">TrueWaves</span>. All Rights Reserved.
                        </p>
                        <span className="hidden sm:inline text-muted-foreground">•</span>
                        <p className="text-[15px] text-muted-foreground font-medium">
                            Designed and developed by <a href="https://godivatech.com" className="text-navy font-bold hover:text-accent transition-colors">godivatech</a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
