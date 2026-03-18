import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, Kanban, BarChart4, Hammer, DraftingCompass } from 'lucide-react';

const services = [
    {
        title: 'Infrastructure Development',
        description: 'Pioneering large-scale urban and civil infrastructure projects with precision and excellence.',
        icon: Building2,
    },
    {
        title: 'Project Management',
        description: 'Streamlining complex workflows from conception to final delivery with expert oversight.',
        icon: Kanban,
    },
    {
        title: 'Cost Management & Consulting',
        description: 'Optimizing resources and ensuring financial feasibility for projects of any scale.',
        icon: BarChart4,
    },
    {
        title: 'Building and Construction',
        description: 'Delivering excellence in residential and commercial builds through sustainable practices.',
        icon: Hammer,
    },
    {
        title: 'Architecture & Design',
        description: 'Creating visionary spaces that blend functionality with aesthetic brilliance.',
        icon: DraftingCompass,
    },
];

interface ServiceCardProps {
    title: string;
    description: string;
    icon: any;
    index: number;
}

function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:shadow-2xl hover:shadow-azure/10 transition-all duration-500 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-azure/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Accent shape (retained for character) */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-azure/10 rounded-bl-[80px] transform scale-100 group-hover:scale-110 transition-transform duration-500 origin-top-right z-0" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className="mb-8 relative">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-azure group-hover:bg-azure group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-azure/30 group-hover:-translate-y-1">
                        <Icon className="w-8 h-8" />
                    </div>
                </div>

                {/* Arrow button */}
                <div className="absolute top-0 right-0 w-10 h-10 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-sm transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-navy" />
                </div>

                {/* Content */}
                <div className="mt-auto">
                    <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-azure transition-colors">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-azure uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Learn More
                        <div className="w-8 h-[1px] bg-azure" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 lg:py-32 bg-slate-50">
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
                            <span className="inline-flex items-center gap-2 px-4 py-2 border border-navy/20 rounded-full text-xs font-medium tracking-wider text-navy uppercase">
                                WHAT WE DO
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight"
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
                        <a href="/services" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-navy bg-transparent border border-navy/20 rounded-full hover:bg-navy hover:text-white transition-colors whitespace-nowrap">
                            View all services
                        </a>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.slice(0, 3).map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
                    {services.slice(3).map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            index={index + 3}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
