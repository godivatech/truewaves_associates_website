import { motion } from 'framer-motion';
import { LayoutGrid, Zap, Handshake } from 'lucide-react';

const featureCards = [
    {
        icon: LayoutGrid,
        title: 'Our Vision',
        description: 'To become India\'s top construction Engineering company by exceeding Customer expectations with high standards.',
    },
    {
        icon: Zap,
        title: 'Our Mission',
        description: 'To build trust, deliver excellence: on Engineering Construction & Client Services.',
    },
    {
        icon: Handshake,
        title: 'Our Values',
        description: 'To deliver superior civil engineering services with uncompromising quality and architectural excellence.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    },
};

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <motion.img
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    src="/images/hero-bg.jpg"
                    alt="Modern architecture"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-72 pb-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-secondary/30 bg-white/10 backdrop-blur-md mb-8 group cursor-default transition-all duration-300 hover:border-secondary/60 hover:bg-white/15"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_#3ABEF9] animate-pulse" />
                        <span className="text-secondary text-[12px] sm:text-[13px] font-black uppercase tracking-[0.15em] leading-none">
                            The Construction Powerhouse of True Waves Group
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_#3ABEF9] animate-pulse" />
                    </motion.div>
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-normal leading-tight max-w-4xl mx-auto"
                    >
                        True Waves Associates
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="mt-6 text-xl text-white/80 max-w-2xl mx-auto"
                    >
                        India's Premier Multi-Disciplinary Group for Architectural Engineering, Strategic Project Management, and High-Scale Infrastructure Development.
                    </motion.p>
                </motion.div>
            </div>

            {/* Bottom Section */}
            <div className="relative z-10 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                    {/* Feature Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                    >
                        {featureCards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col h-full"
                            >
                                <div className="mb-6">
                                    <card.icon className="w-10 h-10 text-secondary" strokeWidth={1.5} />
                                </div>
                                <div className="h-px w-full bg-white/10 mb-8" />
                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{card.title}</h3>
                                <p className="text-base text-white/70 leading-relaxed font-medium">{card.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
