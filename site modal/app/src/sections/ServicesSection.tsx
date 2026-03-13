import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Real Estate Development',
    description: 'We engage as early as possible, typically during the conceptual or schematic stage.',
    image: '/images/svc-1.jpg',
  },
  {
    title: 'Project Management',
    description: 'Our comprehensive estimates also reflect available lower-price options.',
    image: '/images/svc-2.jpg',
  },
  {
    title: 'Investment & Capital',
    description: 'We are focused on improving the way capital projects get done.',
    image: '/images/svc-3.jpg',
  },
  {
    title: 'Construction Management',
    description: 'From design to operations, we love to solve complex challenges and exceed expectations.',
    image: '/images/svc-4.jpg',
  },
  {
    title: 'Architecture & Design',
    description: 'We believe good architecture is a crucial foundation that influences the overall performance of a real estate...',
    image: '/images/svc-5.jpg',
  },
  {
    title: 'Sales & Marketing',
    description: 'Building a real estate development is a complicated task requiring both deep understanding...',
    image: '/images/svc-6.jpg',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src="/images/svc-1.jpg"
          alt="Modern building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl font-bold text-white"
          >
            Our services
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-8 left-8 text-white/70 text-sm"
          >
            Home <span className="mx-2">•</span> Our services
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-t-[40px] -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-lime rounded-full text-xs font-medium tracking-wider text-[#1a1a1a] mb-6"
              >
                WHAT WE OFFER
              </motion.span>
            </div>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight"
              >
                Take a brief look at
                <br />
                some of the services
                <br />
                we offer
              </motion.h2>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Arrow Button */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-lime rounded-full flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{service.title}</h3>
                  <div className="w-full h-px bg-gray-100 mb-4" />
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
