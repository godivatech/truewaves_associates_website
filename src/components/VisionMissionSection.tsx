import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const content = [
  {
    title: 'Our Vision',
    icon: Eye,
    label: 'ASPIRATION',
    description: 'To move forward in becoming the number one construction company and business solution provider in India by consistently delivering projects of highest standards with 100% customer satisfaction.',
    image: '/images/about-building.jpg',
    color: 'accent'
  },
  {
    title: 'Our Mission',
    icon: Target,
    label: 'EXECUTION',
    description: 'To provide quality construction, technical and management services to our customers through building trust, delivering exceptional client service and upholding core values.',
    image: '/images/about-model.jpg',
    color: 'primary'
  }
];

export default function VisionMissionSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Structural lines decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-navy" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-navy" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-navy" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-navy" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-navy" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-navy" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-32">
          {content.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
            >
              {/* Text Content */}
              <div className="flex-1 w-full">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-px bg-accent" />
                    <span className="text-accent font-bold tracking-[0.2em] text-sm uppercase">
                      {item.label}
                    </span>
                  </div>
                  
                  <h3 className="text-5xl lg:text-6xl font-bold text-navy mb-8 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-xl lg:text-2xl text-navy/70 leading-relaxed font-light mb-10">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center border border-navy/10">
                      <item.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="h-px flex-1 bg-navy/10" />
                  </div>
                </motion.div>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-2xl"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
                  
                  {/* Decorative Frame */}
                  <div className={`absolute top-4 ${index % 2 === 0 ? 'right-4' : 'left-4'} w-32 h-32 border-t-2 border-${index % 2 === 0 ? 'right' : 'left'}-2 border-accent/30 rounded-tr-3xl`} />
                  <div className={`absolute bottom-4 ${index % 2 === 0 ? 'left-4' : 'right-4'} w-32 h-32 border-b-2 border-${index % 2 === 0 ? 'left' : 'right'}-2 border-accent/30 rounded-bl-3xl`} />
                </motion.div>

                {/* Accent Block */}
                <motion.div
                  initial={{ opacity: 0, rotate: -15, scale: 0 }}
                  whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-32 h-32 bg-accent rounded-[2rem] -z-10`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
