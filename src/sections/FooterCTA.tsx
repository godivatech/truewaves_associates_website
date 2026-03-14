import { motion } from 'framer-motion';

export default function FooterCTA() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/footer-cta-bg.jpg"
          alt="Modern building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[15vw] font-bold text-white whitespace-nowrap"
        >
          TrueWaves
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
        >
          Your dream
          <br />
          home awaits
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-white/80 mb-10 max-w-xl mx-auto"
        >
          Whether you're exploring our homes or envisioning something custom,
          we're here to bring your dream to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-32 h-32 bg-navy-light/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm font-medium text-center leading-tight hover:bg-navy transition-colors"
          >
            Get Your
            <br />
            Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
