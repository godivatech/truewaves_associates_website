import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function MDMessageSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] aspect-[4/5] bg-gray-100 border-8 border-white">
              <img
                src="/images/Founder.png"
                alt="Ln. Er.S.Sanjay - MD of True Waves Associates"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-60" />
            </div>

            {/* Elegant Background Accents */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full -z-10 opacity-20 blur-3xl animate-pulse" />
            <div className="absolute -top-10 -right-10 w-56 h-56 bg-primary rounded-full -z-10 opacity-15 blur-3xl animate-pulse" />

            {/* Experience Badge */}
            <div className="absolute bottom-10 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <div className="text-3xl font-extrabold text-navy">18+</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Years of Excellence</div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              <Quote className="absolute -top-12 -left-8 w-16 h-16 text-accent opacity-20" />

              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-accent font-bold tracking-widest text-sm uppercase mb-6"
              >
                MD's Message
              </motion.span>

              <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-8 leading-tight">
                Visionary Leadership & <br />
                <span className="text-accent underline decoration-primary underline-offset-8">Mutual Trust</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed italic">
                <p>
                  "I am extremely privileged and proud in saying that True Waves Associates is one of the front-runners in providing optimized business solutions in and around India. It all started in the year 2008 as a small construction company in Madurai and there was never turning back."
                </p>
                <p>
                  "We take up projects of different scales right from individual residences to multi-stored apartments and from schools to colleges in different parts of India. We are currently working on Government projects as well. That is the way we've been doing it throughout our journey and it has earned us respect and mutual trust among our clients."
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="text-2xl font-bold text-navy">Ln. Er.S.Sanjay</h4>
                <p className="text-accent font-medium mt-1">
                  B.E., M.Sc., A.I.V., M.I.E.
                </p>
                <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-bold">
                  Founder & Managing Director
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
