import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EVOLUTION_STAGES = [
  {
    image: '/images/chennai office images/after.png',
    label: 'Structural Flow',
    year: '2025 Phase 02',
    description: 'Implementing architectural precision. Crafting an environment that balances productivity with modern aesthetics, optimized for our specialized team.'
  },
  {
    image: '/images/chennai office images/inside.png',
    label: 'Workspace Excellence',
    year: '2026 Final Phase',
    description: 'Our current headquarters. A professional interior execution where every detail is curated to enhance the professional engineering experience.'
  }
];

export default function ProjectEvolution() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % EVOLUTION_STAGES.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentStage = EVOLUTION_STAGES[activeIndex];

  return (
    <section className="py-24 lg:py-32 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content Column (Narrative) */}
          <div className="relative flex flex-col justify-center min-h-[400px]">
            <header className="mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-6 text-accent text-[10px] font-black uppercase tracking-[0.5em]"
              >
                <span className="w-8 h-[1px] bg-accent/30" />
                Our Headquarters
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tighter leading-[0.9]"
              >
                Workspace <br />
                <span className="text-accent italic font-light">Transformation.</span>
              </motion.h2>
            </header>

            {/* Dynamic Descriptions */}
            <div className="relative flex-grow min-h-[150px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-x-0 top-0"
                >
                  <div className="text-sm sm:text-base font-extrabold text-gray-600 mb-3 uppercase tracking-[0.25em]">
                    {currentStage.year}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-5 tracking-tight">
                    {currentStage.label}
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-700 max-w-lg font-normal leading-relaxed">
                    {currentStage.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress dots at bottom of text col */}
            <div className="mt-8 flex gap-4">
              {EVOLUTION_STAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="group relative h-4 flex items-center justify-center focus:outline-none"
                  aria-label={`Go to stage ${index + 1}`}
                >
                  <motion.div
                    animate={{ 
                      width: activeIndex === index ? 48 : 16,
                      backgroundColor: activeIndex === index ? '#0066cc' : '#d1d5db' // Custom accent or gray
                    }}
                    transition={{ duration: 0.4 }}
                    className="h-1.5 rounded-full bg-accent"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Gallery Column (Portrait Images) */}
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto group">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-accent/5 blur-3xl rounded-full opacity-50 transition-opacity duration-1000" />

            {/* Image Frame */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 border border-gray-200">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={currentStage.image}
                  alt={currentStage.label}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              {/* Gentle overlay for light theme legibility if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

