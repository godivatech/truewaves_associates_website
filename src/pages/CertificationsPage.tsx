import { motion } from 'framer-motion';
import Navbar from '../sections/Navbar';
import UnifiedFooter from '../sections/UnifiedFooter';
import AccreditationsSection from '../components/AccreditationsSection';

export default function CertificationsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Simple Hero */}
        <div className="bg-navy py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-accent">Credentials</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Validated excellence through industry-leading accreditation and membership with prestigious engineering bodies.
              </p>
            </motion.div>
          </div>
          
          {/* Abstract background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 transform translate-x-1/2" />
        </div>

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
                    and ethical practices. Being a member of premier institutions like IEI 
                    and IOV ensures we stay at the forefront of engineering innovation and 
                    valuation standards.
                  </p>
                  <button className="px-8 py-4 bg-accent text-navy font-bold rounded-full hover:scale-105 transition-transform">
                    View Quality Policy
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Compliance", value: "100%" },
                    { label: "Professionalism", value: "A+" },
                    { label: "Validation", value: "Global" },
                    { label: "Excellence", value: "Standard" }
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
      </main>

      <UnifiedFooter />
    </div>
  );
}
