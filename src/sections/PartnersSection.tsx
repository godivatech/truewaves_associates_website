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
          className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-20 lg:gap-x-24 gap-y-12"
        >
          {partners.map((partner, index) => {
            const isThiagarajar = partner.name.includes('Thiagarajar');
            const isMetro = partner.name.includes('Chennai Metro');
            
            let containerClasses = 'h-20 md:h-24';
            let imgClasses = 'max-h-full max-w-[140px] md:max-w-[180px]';
            let motionClasses = 'scale-100 group-hover:scale-110';

            if (isThiagarajar) {
              containerClasses = 'h-24 md:h-28';
              imgClasses = 'max-h-full max-w-[200px] md:max-w-[280px]';
              motionClasses = 'scale-110 md:scale-[1.3] lg:scale-[1.4] group-hover:scale-125 md:group-hover:scale-[1.4] lg:group-hover:scale-[1.5]';
            } else if (isMetro) {
              containerClasses = 'h-20 md:h-24';
              imgClasses = 'max-h-full max-w-[180px] md:max-w-[240px]';
              motionClasses = 'scale-105 md:scale-[1.1] lg:scale-[1.2] group-hover:scale-115 md:group-hover:scale-[1.2] lg:group-hover:scale-[1.3]';
            }

            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative flex items-center justify-center shrink-0 ${containerClasses}`}
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
