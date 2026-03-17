// @ts-ignore
import { addMinutes } from 'date-fns';
import { motion } from 'framer-motion';
// @ts-ignore
import { ClipboardList, PencilRuler, HardHat, Tractor, Building2, Key, ArrowUpRight } from 'lucide-react';

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
    title: 'Building and Construction',
    description:
      'Residential, Commercial & Government construction projects delivered with precision.',
    image: '/images/svc-5.jpg',
  },
  {
    title: 'Post-Construction & Handover',
    description:
      'Final inspections, client walkthrough, official handover with completion certificate, and maintenance support.',
    image: '/images/svc-6.jpg',
  },
];

/* 
const processSteps = [
  { 
    id: 1, 
    title: 'PRE-PLANNING & FEASIBILITY', 
    icon: ClipboardList, 
    points: ['Identifying client needs and budget', 'Site selection and feasibility studies', 'Preliminary cost estimates', 'Getting necessary legal clearances'],
    x: 250, 
    y: 80 
  },
  { 
    id: 2, 
    title: 'DESIGN DEVELOPMENT', 
    icon: PencilRuler, 
    points: ['Concept design creation', 'Detailed architectural drawings', 'Structural & MEP Design', 'Client approvals and revisions'],
    x: 750, 
    y: 80 
  },
  { 
    id: 3, 
    title: 'PRE-CONSTRUCTION', 
    icon: HardHat, 
    points: ['Finalizing construction documents', 'Getting permits & statutory approvals', 'Preparing tender & bidding process', 'Selecting contractors & suppliers'],
    x: 750, 
    y: 450 
  },
  { 
    id: 4, 
    title: 'SITE PREPARATION', 
    icon: Tractor, 
    points: ['Land clearing & levelling', 'Temporary utilities & site office setup', 'Soil testing & excavation', 'Foundation work begins'],
    x: 250, 
    y: 450 
  },
  { 
    id: 5, 
    title: 'MAIN CONSTRUCTION', 
    icon: Building2, 
    points: ['Structural framework construction', 'Brickwork, roofing, plastering', 'Electrical, plumbing & HVAC installation', 'Interior & exterior finishes'],
    x: 250, 
    y: 820 
  },
  { 
    id: 6, 
    title: 'POST-CONSTRUCTION & HANDOVER', 
    icon: Key, 
    points: ['Final inspections & snag rectification', 'Client walkthrough & approvals', 'Official handover with completion certificate', 'Maintenance guidance & support'],
    x: 750, 
    y: 820 
  },
];

const processStepsMobile = [...processSteps].sort((a, b) => a.id - b.id);
*/

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
            className="text-[10rem] lg:text-[15rem] font-bold text-white whitespace-nowrap leading-none tracking-tighter"
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
              className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.85]"
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
                <span className="w-8 h-px bg-secondary" />
                Home <span className="text-secondary">/</span> Services
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-xs font-semibold tracking-widest text-accent uppercase mb-6"
              >
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Our Expertise
              </motion.div>
            </div>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-navy leading-tight"
              >
                Comprehensive Solutions for Every Stage
              </motion.h2>
            </div>
          </div>

          {/* Services Grid (Visible) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Background Image / Texture */}
                <div className="absolute inset-0 bg-navy/90 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700 ease-out"
                  />
                </div>

                {/* Dark Gradient Overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy w-full h-full via-navy/50 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Number Indicator */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="text-5xl font-black text-white/10 group-hover:text-accent/30 transition-colors duration-500 font-sans tracking-tighter">
                    0{index + 1}
                  </span>
                </div>

                {/* Content aligned to bottom */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end">
                  <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-2xl font-bold text-white mb-4 shadow-sm">{service.title}</h3>
                    
                    <div className="h-px w-10 bg-accent mb-4 group-hover:w-full transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100" />
                    
                    <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm leading-relaxed max-w-[280px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ────── PROCESS TIMELINE SECTION (Commented Out for Future Use) ────── */}
          {/* 
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-navy mb-4"
            >
              Our Construction Process
            </motion.h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured roadmap to ensure excellence and precision in every project we undertake.
            </p>
          </div>

          <div className="hidden lg:block relative w-full max-w-[1000px] mx-auto h-[1250px] mt-10">
            <div className="absolute inset-0 pointer-events-none">
              <svg viewBox="0 0 1000 1200" className="w-full h-full" preserveAspectRatio="none">
                <path 
                  d="M 50 80 H 950 V 450 H 50 V 820 H 950" 
                  fill="none" 
                  stroke="#2b2b2b" 
                  strokeWidth="50" 
                  strokeLinecap="square" 
                  strokeLinejoin="miter" 
                />
                
                <path 
                  d="M 50 60 H 970 V 470 H 30 V 840 H 950" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="1.5" 
                  strokeDasharray="14 10" 
                  opacity="1"
                  strokeLinecap="square" 
                  strokeLinejoin="miter" 
                />
                
                <path 
                  d="M 50 80 H 950 V 450 H 50 V 820 H 950" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeDasharray="24 16" 
                  opacity="0.8"
                  strokeLinecap="square" 
                  strokeLinejoin="miter" 
                />

                <path 
                  d="M 50 100 H 930 V 430 H 70 V 800 H 950" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="1.5" 
                  strokeDasharray="14 10" 
                  opacity="1"
                  strokeLinecap="square" 
                  strokeLinejoin="miter" 
                />
              </svg>
            </div>

            {processSteps.map((step, index) => {
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  className="absolute z-20 flex flex-col items-center"
                  style={{
                    left: `${(step.x / 1000) * 100}%`,
                    top: `${(step.y / 1200) * 100}%`,
                  }}
                >
                  <div className="absolute top-0 left-0 w-12 h-12 -mx-6 -my-6 rounded-full bg-accent border-4 border-white shadow-xl flex items-center justify-center text-white font-black text-[22px] z-30">
                    {step.id}
                  </div>

                  <div className="absolute top-[32px] left-1/2 -translate-x-1/2 w-[340px] flex flex-col items-center text-center z-10">
                    <h3 className="text-[17px] font-extrabold text-accent tracking-wide mb-6 uppercase">
                      {step.title}
                    </h3>
                    <div className="flex justify-center mb-6">
                       <step.icon className="w-[80px] h-[80px] text-black opacity-90 transition-transform duration-300 hover:scale-105" strokeWidth={0.8} />
                    </div>
                    <ul className="space-y-1.5 px-4 text-center pb-8">
                      {step.points.map((point, i) => (
                        <li key={i} className="text-[14px] text-dark font-medium leading-snug">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="lg:hidden relative mt-10">
            <div className="absolute top-0 bottom-0 left-6 w-8 bg-[#2b2b2b] rounded-full overflow-hidden">
               <div className="w-full h-full border-x-2 border-dashed border-white/20" />
               <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 border-l-[1.5px] border-dashed border-white/80" />
            </div>
            
            <div className="flex flex-col space-y-16 relative z-10 py-10">
              {processStepsMobile.map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start pl-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent border-2 border-white shadow-md flex items-center justify-center text-white font-bold text-sm relative z-20 mt-1">
                    {step.id}
                  </div>
                  
                  <div className="flex-grow pl-8 pr-4">
                    <h3 className="text-[15px] font-black text-accent tracking-widest mb-3 uppercase">
                      {step.title}
                    </h3>
                    <div className="mb-4">
                      <step.icon className="w-12 h-12 text-black" strokeWidth={1} />
                    </div>
                    <ul className="space-y-1.5">
                      {step.points.map((pt, i) => (
                        <li key={i} className="text-[13.5px] text-dark/80 font-medium leading-relaxed">
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          */}

        </div>
      </div>
    </section>
  );
}
