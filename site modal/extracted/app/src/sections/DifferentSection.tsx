import { motion } from 'framer-motion';
import { ThumbsUp, Users, Heart } from 'lucide-react';

const features = [
  {
    icon: ThumbsUp,
    title: 'Corporate Responsibility',
    description: 'Our goal is zero incidents and our lost time frequency rate is industry leading.',
  },
  {
    icon: Users,
    title: 'Experts with Team Spirit',
    description: 'Our multi-skilled team provides innovative, forward-thinking solutions.',
  },
  {
    icon: Heart,
    title: 'Diversity, Equity & Inclusion',
    description: 'We work with both investors and developers to create landmarks that make an impact.',
  },
];

export default function DifferentSection() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 border border-dark/20 rounded-full text-xs font-medium tracking-wider text-dark">
            OUR COMMITMENT
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image with Rating Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/images/team-collab.jpg"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Rating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold text-lime">4.9</div>
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-lime fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex -space-x-2 mb-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-lime to-lime-dark border-2 border-white"
                        />
                      ))}
                    </div>
                    <p className="text-white/80 text-sm">2k+ satisfied customers</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Rotating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 w-32 h-32"
            >
              <div className="relative w-full h-full">
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[8px] fill-dark uppercase tracking-widest">
                    <textPath href="#circlePath">
                      WHAT PEOPLE SAYS • WHAT PEOPLE SAYS •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-lime rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6"
            >
              What makes us different
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground mb-10"
            >
              It's not just about creating something good; it's about designing, innovating, 
              and collaborating to forge remarkable and unparalleled experiences.
            </motion.p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 pb-6 border-b border-border last:border-0"
                >
                  <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-dark" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
