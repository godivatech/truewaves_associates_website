import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const EVOLUTION_STAGES = [
  {
    image: '/images/chennai office images/before.png',
    label: 'The Foundation',
    year: '2024 Phase 01',
    description: 'Our Chennai Headquarters at its raw stage. A vision for a collaborative workspace that embodies the TrueWaves spirit of engineering excellence.'
  },
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
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smoother progress for transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate opacities for each stage
  const opacity0 = useTransform(smoothProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const opacity1 = useTransform(smoothProgress, [0.25, 0.35, 0.6, 0.7], [0, 1, 1, 0]);
  const opacity2 = useTransform(smoothProgress, [0.6, 0.7, 1], [0, 1, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#fafafa]">
      {/* Sticky Content Wrapper */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Content Column (Narrative) */}
            <div className="relative h-[50vh] flex flex-col justify-center">
              <header className="mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-3 mb-6 text-accent text-[10px] font-black uppercase tracking-[0.5em]"
                >
                  <span className="w-8 h-[1px] bg-accent/30" />
                  Our Headquarters
                </motion.div>
                
                <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tighter leading-[0.9] mb-8">
                  Workspace <br />
                  <span className="text-accent italic font-light">Transformation.</span>
                </h2>
              </header>

              {/* Dynamic Descriptions */}
              <div className="relative flex-grow">
                {EVOLUTION_STAGES.map((stage, index) => {
                  const opacity = index === 0 ? opacity0 : index === 1 ? opacity1 : opacity2;
                  const x = useTransform(smoothProgress, 
                    [index * 0.33, index * 0.33 + 0.1, index * 0.33 + 0.23, index * 0.33 + 0.33], 
                    [30, 0, 0, -30]
                  );

                  return (
                    <motion.div
                      key={index}
                      style={{ opacity, x }}
                      className="absolute inset-x-0 top-0"
                    >
                      <div className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">{stage.year}</div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">{stage.label}</h3>
                      <p className="text-lg text-gray-500 max-w-md font-light leading-relaxed">
                        {stage.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress dots at bottom of text col */}
              <div className="mt-12 flex gap-4 mt-auto">
                {EVOLUTION_STAGES.map((_, index) => {
                  const width = useTransform(smoothProgress, 
                    [index * 0.33, index * 0.33 + 0.16, index * 0.33 + 0.33], 
                    ["12px", "32px", "12px"]
                  );
                  const opacity = useTransform(smoothProgress, 
                    [index * 0.33, index * 0.33 + 0.16, index * 0.33 + 0.33], 
                    [0.2, 1, 0.2]
                  );
                  return (
                    <motion.div 
                      key={index}
                      style={{ width, opacity }}
                      className="h-1 bg-accent rounded-full"
                    />
                  );
                })}
              </div>
            </div>

            {/* Right Gallery Column (Portrait Images) */}
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto group">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-accent/5 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
              
              {/* Image Frame */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 border border-gray-200">
                {EVOLUTION_STAGES.map((stage, index) => {
                  const opacity = index === 0 ? opacity0 : index === 1 ? opacity1 : opacity2;
                  const scale = useTransform(smoothProgress, 
                    [index * 0.33, index * 0.33 + 0.16, index * 0.33 + 0.33], 
                    [1.1, 1.02, 1.1]
                  );

                  return (
                    <motion.div
                      key={index}
                      style={{ opacity }}
                      className="absolute inset-0"
                    >
                      <motion.img
                        src={stage.image}
                        alt={stage.label}
                        style={{ scale }}
                        className="w-full h-full object-cover"
                      />
                      {/* Gentle overlay for light theme legibility if needed */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Architectural Detail Markrs */}
              <motion.div 
                style={{ opacity: opacity0 }}
                className="absolute top-8 -right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-xl border border-gray-100 hidden lg:block"
              >
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Status</div>
                <div className="text-xs font-black text-gray-900 uppercase tracking-widest">Ground Zero</div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0.95, 1], [1, 0]) }}
          className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end gap-3"
        >
          <div className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] rotate-90 origin-right translate-x-12 mb-8">
            Scroll to Experience
          </div>
          <div className="w-[1px] h-20 bg-gradient-to-b from-gray-200 to-accent" />
        </motion.div>
      </div>
    </section>
  );
}
