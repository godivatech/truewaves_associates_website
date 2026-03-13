import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    title: 'Pre-Planning & Feasibility',
    description:
      'Identifying client needs, site selection, feasibility studies, cost estimates, and getting necessary legal clearances.',
    image: '/images/svc-1.jpg',
  },
  {
    title: 'Design Development',
    description:
      'Concept design creation, detailed architectural drawings, structural & MEP design, and client approvals.',
    image: '/images/svc-2.jpg',
  },
  {
    title: 'Pre-Construction',
    description:
      'Finalizing documents, getting permits, preparing tender & bidding process, and selecting contractors.',
    image: '/images/svc-3.jpg',
  },
  {
    title: 'Site Preparation',
    description:
      'Land clearing, temporary utilities, soil testing & excavation, and beginning foundation work.',
    image: '/images/svc-4.jpg',
  },
  {
    title: 'Main Construction',
    description:
      'Structural framework, brickwork, roofing, electrical/plumbing/HVAC, and interior & exterior finishes.',
    image: '/images/svc-5.jpg',
  },
  {
    title: 'Post-Construction & Handover',
    description:
      'Final inspections, client walkthrough, official handover with completion certificate, and maintenance support.',
    image: '/images/svc-6.jpg',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <div className="relative h-[65vh] min-h-[500px] flex flex-col justify-end overflow-hidden">
        <img
          src="/images/svc-1.jpg"
          alt="Modern building facade"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Background Outline Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden h-full flex items-center">
            <motion.span
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 0.1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-[20rem] lg:text-[30rem] font-bold text-white whitespace-nowrap leading-none tracking-tighter"
                style={{ 
                    WebkitTextStroke: '1px rgba(255,255,255,0.3)',
                    color: 'transparent'
                }}
            >
                EXCELLENCE
            </motion.span>
        </div>
        
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl sm:text-8xl lg:text-[11rem] font-bold text-white tracking-tighter leading-[0.85]"
            >
              Our <br /> Services
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:mb-4 lg:text-right"
            >
              <div className="flex items-center lg:justify-end gap-3 text-white/70 text-sm font-medium tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-lime" />
                Home <span className="text-lime">/</span> Services
              </div>
              <p className="text-white/90 text-sm max-w-sm leading-relaxed uppercase tracking-wide">
                We provide a comprehensive range of construction and development services tailored to modern needs.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Main Content ────────────────────────────────────── */}
      <div className="bg-white rounded-t-[40px] -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-lime rounded-full text-xs font-medium tracking-wider text-dark mb-6"
              >
                WHAT WE OFFER
              </motion.span>
            </div>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-dark leading-tight"
              >
                Discover our
                <br />
                Design to Development
                <br />
                Process
              </motion.h2>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Reveal arrow on hover */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-lime rounded-full flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                  <div className="w-full h-px bg-gray-100 mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
