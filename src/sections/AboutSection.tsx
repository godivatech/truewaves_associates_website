import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Diamond, Rocket } from 'lucide-react';

interface CounterProps {
    target: number;
    suffix?: string;
    duration?: number;
}

function AnimatedCounter({ target, suffix = '', duration = 2000 }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [isInView, target, duration]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
}

const stats = [
    { label: 'GLOBAL REACH', sublabel: 'offices worldwide', value: 85, suffix: '+' },
    { label: 'LOCAL EXPERTISE', sublabel: 'employees', value: 1500, suffix: '+' },
    { label: 'OUR IMPACT', sublabel: 'projects done', value: 248, suffix: '+' },
];

export default function AboutSection() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 border border-dark/20 rounded-full text-xs font-medium tracking-wider text-dark">
                        WE ARE <span className="text-accent">-</span> WHO WE ARE
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column - Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight"
                        >
                            The largest privately held real estate investors and managers in the world
                        </motion.h2>

                        {/* Vision & Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <Diamond className="w-5 h-5 text-dark" />
                                    <h3 className="text-lg font-semibold text-dark">Our vision</h3>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    To empower businesses with cutting-edge web solutions that enhance their digital presence and drive growth.
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <Rocket className="w-5 h-5 text-dark" />
                                    <h3 className="text-lg font-semibold text-dark">Our mission</h3>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Our solutions are designed to meet the needs of modern enterprises, ensuring they thrive in today's competitive online landscape.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Images & Stats */}
                    <div className="space-y-6">
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative overflow-hidden rounded-3xl"
                            style={{ clipPath: 'polygon(0 8%, 15% 8%, 15% 0, 100% 0, 100% 100%, 0 100%)' }}
                        >
                            <img
                                src="/images/about-building.jpg"
                                alt="Modern building"
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.slice(0, 2).map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="bg-cream rounded-2xl p-6"
                                >
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                                        {stat.label}
                                    </p>
                                    <div className="text-4xl font-bold text-dark">
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">{stat.sublabel}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Row - Stat + Image */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-cream rounded-2xl p-6"
                            >
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                                    {stats[2].label}
                                </p>
                                <div className="text-4xl font-bold text-dark">
                                    <AnimatedCounter target={stats[2].value} suffix={stats[2].suffix} />
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">{stats[2].sublabel}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="rounded-2xl overflow-hidden"
                            >
                                <img
                                    src="/images/about-model.jpg"
                                    alt="Architectural model"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
