import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Diamond, Rocket } from 'lucide-react';

interface CounterProps {
    target: number;
    suffix?: string;
    duration?: number;
    suffixClassName?: string;
}

function AnimatedCounter({ target, suffix = '', duration = 2000, suffixClassName = '' }: CounterProps) {
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
            {count.toLocaleString()}
            <span className={suffixClassName}>{suffix}</span>
        </span>
    );
}

const stats = [
    { label: 'EXPERIENCE', sublabel: 'years in industry', value: 18, suffix: '+' },
    { label: 'COMPLETED', sublabel: 'projects delivered', value: 122, suffix: '+' },
    { label: 'ONGOING', sublabel: 'active projects', value: 9, suffix: '+' },
];

export default function AboutSection() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-24">
                    <div className="lg:col-span-5 flex items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center gap-3 px-6 py-2.5 border border-[#daf552] rounded-full text-[10px] font-bold tracking-[0.2em] text-dark uppercase">
                                WE ARE <span className="text-[#daf552] text-xl leading-none mt-[-2px]">•</span> WHO WE ARE
                            </span>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-7">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark leading-[1.05] tracking-tight mb-12 max-w-3xl"
                        >
                            Your Premier Partner in Real Estate & Engineering Solutions
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-10"
                        >
                            <div className="pr-4 lg:pr-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Diamond className="w-5 h-5 text-dark" />
                                    <h3 className="text-lg font-bold text-dark">Our vision</h3>
                                </div>
                                <p className="text-dark/70 text-sm leading-relaxed font-medium">
                                    To lead the industry by delivering innovative, high-quality architectural and engineering solutions that redefine modern living.
                                </p>
                            </div>
                            <div className="pr-4 lg:pr-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Rocket className="w-5 h-5 text-dark" />
                                    <h3 className="text-lg font-bold text-dark">Our mission</h3>
                                </div>
                                <p className="text-dark/70 text-sm leading-relaxed font-medium">
                                    To provide seamless, end-to-end project execution that exceeds client expectations through transparency and excellence.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* BOTTOM ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Left Column - Large Image */}
                    <div className="lg:col-span-5 h-[400px] lg:h-auto lg:min-h-[600px] relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative w-full h-full rounded-[2rem] overflow-hidden"
                            style={{ backgroundColor: '#f5f5f5' }}
                        >
                            <img
                                src="/images/Projects/TVS emerald penisula, chennai.png"
                                alt="TVS Emerald Peninsula"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Seamless Tab Cutout */}
                            <div className="absolute top-0 left-0 w-24 sm:w-32 h-20 sm:h-24 bg-white rounded-br-[2rem] z-10"></div>
                            <div className="absolute top-0 left-24 sm:left-32 w-8 h-8 bg-transparent rounded-tl-[2rem] shadow-[-1.2rem_-1.2rem_0_1.2rem_white] z-10"></div>
                            <div className="absolute top-20 sm:top-24 left-0 w-8 h-8 bg-transparent rounded-tl-[2rem] shadow-[-1.2rem_-1.2rem_0_1.2rem_white] z-10"></div>
                        </motion.div>
                    </div>

                    {/* Right Column - Stats Grid */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                            {/* Stat 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-[#f7f7f7] rounded-[2rem] p-8 flex flex-col min-h-[250px] sm:min-h-[280px]"
                            >
                                <h4 className="text-[10px] font-bold tracking-[0.15em] text-dark uppercase">{stats[0].label}</h4>
                                <hr className="w-full border-dark/10 my-4" />
                                <div className="mt-auto">
                                    <div className="text-6xl lg:text-[5rem] font-bold tracking-tighter text-dark mb-1 leading-none">
                                        <AnimatedCounter target={stats[0].value} suffix={stats[0].suffix} suffixClassName="text-[#c1eb25]" />
                                    </div>
                                    <p className="text-sm text-dark/50 font-medium mt-3">{stats[0].sublabel}</p>
                                </div>
                            </motion.div>

                            {/* Stat 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-[#f7f7f7] rounded-[2rem] p-8 flex flex-col min-h-[250px] sm:min-h-[280px]"
                            >
                                <h4 className="text-[10px] font-bold tracking-[0.15em] text-dark uppercase">{stats[1].label}</h4>
                                <hr className="w-full border-dark/10 my-4" />
                                <div className="mt-auto">
                                    <div className="text-6xl lg:text-[5rem] font-bold tracking-tighter text-dark mb-1 leading-none">
                                        <AnimatedCounter target={stats[1].value} suffix={stats[1].suffix} suffixClassName="text-[#c1eb25]" />
                                    </div>
                                    <p className="text-sm text-dark/50 font-medium mt-3">{stats[1].sublabel}</p>
                                </div>
                            </motion.div>

                            {/* Stat 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-[#f7f7f7] rounded-[2rem] p-8 flex flex-col min-h-[250px] sm:min-h-[280px]"
                            >
                                <h4 className="text-[10px] font-bold tracking-[0.15em] text-dark uppercase">{stats[2].label}</h4>
                                <hr className="w-full border-dark/10 my-4" />
                                <div className="mt-auto">
                                    <div className="text-6xl lg:text-[5rem] font-bold tracking-tighter text-dark mb-1 leading-none">
                                        <AnimatedCounter target={stats[2].value} suffix={stats[2].suffix} suffixClassName="text-[#c1eb25]" />
                                    </div>
                                    <p className="text-sm text-dark/50 font-medium mt-3">{stats[2].sublabel}</p>
                                </div>
                            </motion.div>

                            {/* Image 4 */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="rounded-[2rem] overflow-hidden min-h-[250px] sm:min-h-[280px]"
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
