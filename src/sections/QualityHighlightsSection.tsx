import { motion } from 'framer-motion';
import { Building2, Goal, ShieldCheck, Smile, Users } from 'lucide-react';

const items = [
  {
    title: 'Our Team',
    description:
      'Our smart, driven team prioritizes results and relationships, seamlessly integrating with clients as a valuable extension of their teams.',
    Icon: Users,
  },
  {
    title: 'Quality Policy',
    description:
      'Quality Above All. We deliver projects exceeding expectations, meeting all requirements at every stage.',
    Icon: ShieldCheck,
  },
  {
    title: 'Client Satisfaction',
    description:
      'We earn your trust and build long-term relationships with ISO 9001:2015 quality, on-time delivery, and clear communication.',
    Icon: Smile,
  },
  {
    title: 'Quality Objective',
    description:
      'Unwavering commitment: client delight through exceptional value, exceeding expectations with quality & continuous improvement.',
    Icon: Goal,
  },
  {
    title: 'Business Structure',
    description:
      'Expert team, top resources — we deliver your vision, on time, on budget.',
    Icon: Building2,
  },
] as const;

export default function QualityHighlightsSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider text-accent uppercase mb-4"
          >
            What we stand for
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-navy mb-6"
          >
            Quality you can feel in every delivery.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            These principles guide how we work with clients, build solutions, and
            deliver outcomes consistently and transparently.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map(({ title, description, Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative"
            >
              {/* Card with CSS hover - much faster than framer-motion hover */}
              <div className="h-full p-8 rounded-2xl bg-white border border-gray-200 shadow-md transform-gpu transition-all duration-200 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-accent/30">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/80 text-white shadow-md transform-gpu transition-transform duration-200 ease-out group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy mb-3 transition-colors duration-200 group-hover:text-accent">
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}