import { motion } from 'framer-motion';

const partners = [
  { name: 'MGR University', src: '/images/Client Logos/Mgr university.png' },
  { name: 'Thiagarajar College of Engineering', src: '/images/Client Logos/Thiyagaraja college of engineering.png' },
  { name: 'L&T', src: '/images/Client Logos/L&T.png' },
  { name: 'Trichy Campaign School', src: '/images/Client Logos/Trichy campaign school.png' },
  { name: 'TVS Emerald', src: '/images/Client Logos/Tvs emerald.png' },
  { name: 'Chennai Metro Rail', src: '/images/Client Logos/chennai-metro-rail.png' },
];

export default function PartnersSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase px-3 py-1 bg-accent/10 rounded-full">
              Trusted Excellence
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-5xl font-bold text-navy tracking-tight whitespace-normal xl:whitespace-nowrap"
          >
            We're Proud to Partner With Best-in-Class Clients
          </motion.h2>
        </div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center"
        >
          {partners.map((partner, index) => {
            const isThiagarajar = partner.name.includes('Thiagarajar');
            const isMetro = partner.name.includes('Chennai Metro');
            
            let containerClasses = 'h-24 md:h-32';
            let imgClasses = 'max-h-[85%] max-w-[90%]';
            let motionClasses = 'scale-100 group-hover:scale-110';

            if (isThiagarajar) {
              containerClasses = 'h-32 md:h-64 lg:h-80';
              imgClasses = 'max-h-full max-w-full';
              motionClasses = 'scale-110 md:scale-[1.7] lg:scale-[2.0] group-hover:scale-125 md:group-hover:scale-[1.8] lg:group-hover:scale-[2.2]';
            } else if (isMetro) {
              containerClasses = 'h-28 md:h-48 lg:h-56';
              imgClasses = 'max-h-full max-w-full';
              motionClasses = 'scale-105 md:scale-[1.3] lg:scale-[1.5] group-hover:scale-115 md:group-hover:scale-[1.4] lg:group-hover:scale-[1.65]';
            }

            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative flex items-center justify-center w-full ${containerClasses}`}
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className={`object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform ${motionClasses} ${imgClasses}`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
