import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: 'Real Estate Development',
        image: '/images/service-1.jpg',
    },
    {
        title: 'Project Management',
        image: '/images/service-2.jpg',
    },
    {
        title: 'Investment & Capital',
        image: '/images/service-3.jpg',
    },
    {
        title: 'Construction Management',
        image: '/images/service-4.jpg',
    },
    {
        title: 'Architecture & Design',
        image: '/images/service-5.jpg',
    },
];

interface ServiceCardProps {
    title: string;
    image: string;
    index: number;
}

function ServiceCard({ title, image, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-3xl overflow-hidden cursor-pointer"
        >
            {/* Lime accent shape */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime rounded-bl-[100px] transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-right z-10" />

            {/* Arrow button */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center z-20 shadow-md transform scale-100 group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-5 h-5 text-dark" />
            </div>

            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Title */}
            <div className="p-6">
                <h3 className="text-lg font-semibold text-dark">{title}</h3>
            </div>
        </motion.div>
    );
}

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 lg:py-32 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-6"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 border border-dark/20 rounded-full text-xs font-medium tracking-wider text-dark uppercase">
                                WE OFFER <span className="text-lime">-</span> WHAT WE DO
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark tracking-tight"
                        >
                            Take a brief look at some of the services we offer
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <a href="/services" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-dark bg-transparent border border-dark/20 rounded-full hover:bg-dark hover:text-white transition-colors whitespace-nowrap">
                            View all services
                        </a>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.slice(0, 3).map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            image={service.image}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
                    {services.slice(3).map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            image={service.image}
                            index={index + 3}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
