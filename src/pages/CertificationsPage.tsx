import { motion } from 'framer-motion';
import Navbar from '../sections/Navbar';
import UnifiedFooter from '../sections/UnifiedFooter';
import AccreditationsSection from '../components/AccreditationsSection';

export default function CertificationsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Banner aligned with About/Projects design */}
        <div className="relative h-[65vh] min-h-[500px] flex flex-col justify-end overflow-hidden">
          <img
            src="/images/certificates-hero.png"
            alt="Engineering excellence and certifications"
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
              CREDENTIALS
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
                Our <br /> Credentials
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:mb-4 lg:text-right"
              >
                <div className="flex items-center lg:justify-end gap-3 text-white/70 text-sm font-medium tracking-widest uppercase mb-4">
                  <span className="w-8 h-px bg-accent" />
                  Home <span className="text-accent">/</span> Credentials
                </div>
                <p className="text-white/90 text-sm max-w-sm leading-relaxed uppercase tracking-wide">
                  Validated excellence through industry-leading accreditation and membership with prestigious engineering bodies.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-t-[40px] -mt-10 relative z-10 overflow-hidden">
          <AccreditationsSection />
          
          {/* Quality Commitment Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-navy rounded-[40px] p-12 lg:p-20 relative overflow-hidden">
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Our Unwavering Commitment to Quality
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      Every project we undertake is governed by strict quality control protocols 
                      and ethical practices. Our adherence to ISO 9001:2015 and membership with 
                      IEI ensures we stay at the forefront of engineering innovation and 
                      quality standards.
                    </p>
                    <button className="px-8 py-4 bg-accent text-navy font-bold rounded-full hover:scale-105 transition-transform">
                      View Quality Policy
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "Compliance", value: "100%" },
                      { label: "Professionalism", value: "A+" },
                      { label: "Industry Focus", value: "Global" },
                      { label: "Success Rate", value: "98%" }
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                        <div className="text-accent text-2xl font-bold mb-1">{stat.value}</div>
                        <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <UnifiedFooter />
    </div>
  );
}
