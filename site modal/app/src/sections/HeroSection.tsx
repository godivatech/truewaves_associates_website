import { motion } from 'framer-motion';
import { ArrowRight, Gem, Star, Users } from 'lucide-react';

const featureCards = [
  {
    icon: Gem,
    title: 'High quality products',
    description: 'The luxurious and exquisite design harmonious with the surrounding architecture provide the best living.',
  },
  {
    icon: Star,
    title: 'Professional services',
    description: 'The customer service center is ready to serve 24/7, support the residents to provide information.',
  },
  {
    icon: Users,
    title: 'Real partnership',
    description: 'We work with both investors and developers to create landmarks that make an impact.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/images/hero-bg.jpg"
          alt="Modern architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto"
          >
            Shaping future
            <br />
            through excellence
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
          >
            We are a top 25 builder and developer fully invested in our customers' 
            success and improving the communities we serve.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-md"
            >
              <p className="text-xl text-white font-medium">
                We developed landmark real estate projects that deliver lasting value to investors and communities.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a
                href="#services"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-dark rounded-full font-medium hover:bg-lime transition-colors"
              >
                View Services
                <span className="w-8 h-8 bg-lime group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="w-10 h-10 bg-lime rounded-lg flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5 text-dark" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-white/70">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
