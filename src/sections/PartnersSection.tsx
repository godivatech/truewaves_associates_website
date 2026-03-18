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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-medium tracking-wider text-muted-foreground uppercase mb-12"
        >
          We're proud to partner with best-in-class clients
        </motion.p>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-12 lg:gap-20"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="relative h-16 w-32 flex items-center justify-center">
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
