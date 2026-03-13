import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const teamMembers = [
    {
        name: 'K. Rajendran',
        role: 'Founder & CEO',
        image: '/images/team-1.jpg',
    },
    {
        name: 'S. Karthik',
        role: 'Executive Assistant',
        image: '/images/team-2.jpg',
    },
    {
        name: 'R. Venkatesh',
        role: 'Director of Architecture',
        image: '/images/team-3.jpg',
    },
];

interface TeamCardProps {
    name: string;
    role: string;
    image: string;
    index: number;
}

function TeamCard({ name, role, image, index }: TeamCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="relative overflow-hidden rounded-3xl">
                {/* Image */}
                <div className="relative h-[450px] overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                {/* Arrow button */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform cursor-pointer">
                    <ArrowUpRight className="w-5 h-5 text-navy" />
                </div>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-1">
                        {role}
                    </p>
                    <h3 className="text-xl font-semibold text-white">{name}</h3>
                </div>
            </div>
        </motion.div>
    );
}

export default function TeamSection() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 border border-navy/20 rounded-full text-xs font-medium tracking-wider text-navy">
                            MEET THE TEAM
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy"
                    >
                        Global executive
                        <br />
                        leadership
                    </motion.h2>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={member.name}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
