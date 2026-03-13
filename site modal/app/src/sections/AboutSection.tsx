import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Building2, Ruler, CheckCircle } from 'lucide-react';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const timelineData = [
  { year: '1983', image: '/images/timeline-1.png', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudium, totam rem aperiam, eaque ipsa.' },
  { year: '1996', image: '/images/timeline-2.png', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudium, totam rem aperiam, eaque ipsa.' },
  { year: '2005', image: '/images/timeline-3.png', text: 'Natus error sit voluptatem accusantium doloremque laudium.' },
  { year: '2013', image: '/images/timeline-4.png', text: 'Quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' },
  { year: '2024', image: '/images/timeline-5.png', text: 'Soloremque laudium, totam rem aperiam, eaque ipsa quae ab illoentore veritatis.' },
];

const infoCards = [
  {
    number: '01.',
    title: 'What we do',
    description: 'We maintain this by ensuring transparency and professional conduct in every aspect.',
    link: 'Our Solutions',
    image: '/images/card-1.jpg',
    bgColor: 'bg-[#1a1a1a]',
    textColor: 'text-white',
  },
  {
    number: '02.',
    title: 'Our impact',
    description: 'We work with both investors and developers to create landmarks that make an impact.',
    link: 'See Projects',
    image: '/images/card-2.jpg',
    bgColor: 'bg-lime',
    textColor: 'text-[#1a1a1a]',
  },
  {
    number: '03.',
    title: 'Core values',
    description: 'To empower businesses with cutting-edge web solutions that enhance their digital presence and drive growth.',
    link: 'Discover More',
    image: '/images/card-3.jpg',
    bgColor: 'bg-[#1a1a1a]',
    textColor: 'text-white',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src="/images/about-hero.jpg"
          alt="Modern architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl font-bold text-white"
          >
            About us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-8 right-8 max-w-md text-white/90 text-right"
          >
            Whether you're building, remodeling, buying, or selling, we bring seamless project execution under one roof.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-8 left-8 text-white/70 text-sm"
          >
            Home <span className="mx-2">•</span> About us
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-t-[40px] -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left - Heading */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-lime rounded-full text-xs font-medium tracking-wider text-[#1a1a1a] mb-6"
              >
                ABOUT US
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight"
              >
                Shaping the
                <br />
                world of things
                <br />
                to come
              </motion.h2>
            </div>

            {/* Right - Text & Button */}
            <div className="flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl font-medium text-[#1a1a1a] mb-4"
              >
                We'd love to share more with you, please complete this form and our dedicated team will get back to you shortly.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground mb-6"
              >
                In markets from renewable energy, sports and entertainment, to data centers and healthcare, we work to ensure the built environment leaves a lasting positive impact. Together, we strive to make your project better than you imagined possible.
              </motion.p>
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                href="#team"
                className="inline-flex items-center gap-3 self-start"
              >
                <span className="px-6 py-3 border border-[#1a1a1a]/20 rounded-full text-sm font-medium text-[#1a1a1a]">
                  Meet The Team
                </span>
                <span className="w-10 h-10 bg-lime rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </motion.a>
            </div>
          </div>

          {/* Team Image with Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden mb-20"
          >
            <img
              src="/images/team-about.jpg"
              alt="Team collaboration"
              className="w-full h-[500px] object-cover"
            />
            
            {/* Floating Stats Cards */}
            <div className="absolute top-8 right-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-start justify-between mb-2">
                <div className="text-5xl font-bold text-[#1a1a1a]">
                  <AnimatedCounter target={40} suffix="+" />
                </div>
                <Building2 className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <p className="text-sm text-muted-foreground">projects in development</p>
            </div>

            <div className="absolute bottom-8 left-1/3 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-start justify-between mb-2">
                <div className="text-5xl font-bold text-[#1a1a1a]">
                  <AnimatedCounter target={18} suffix="m" />
                </div>
                <Ruler className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <p className="text-sm text-muted-foreground">square feet of property</p>
            </div>

            <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-start justify-between mb-2">
                <div className="text-5xl font-bold text-[#1a1a1a]">
                  <AnimatedCounter target={2.5} suffix="b" />
                </div>
                <CheckCircle className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <p className="text-sm text-muted-foreground">total projects cost</p>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <div className="mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-lime rounded-full text-xs font-medium tracking-wider text-[#1a1a1a] mb-6"
            >
              OUR STORY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-16"
            >
              40+ years of a
              <br />
              remarkable journey
            </motion.h2>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-[120px] left-0 right-0 h-px bg-lime" />
              
              <div className="grid grid-cols-5 gap-4">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl lg:text-5xl font-bold text-lime mb-4">{item.year}</div>
                    <div className="relative h-[100px] mb-8">
                      <img
                        src={item.image}
                        alt={`Building ${item.year}`}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-lime rounded-full" />
                    </div>
                    <p className="text-sm text-muted-foreground px-2">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Learn More Cards */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-12"
            >
              Learn more
              <br />
              about us
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative ${card.bgColor} rounded-3xl overflow-hidden min-h-[400px]`}
                >
                  <div className="p-8">
                    <div className={`text-sm mb-4 ${card.textColor === 'text-white' ? 'text-white/60' : 'text-[#1a1a1a]/60'}`}>
                      {card.number}
                    </div>
                    <div className={`w-full h-px mb-6 ${card.textColor === 'text-white' ? 'bg-white/20' : 'bg-[#1a1a1a]/20'}`} />
                    <h3 className={`text-2xl font-bold mb-4 ${card.textColor}`}>{card.title}</h3>
                    <p className={`text-sm mb-6 ${card.textColor === 'text-white' ? 'text-white/70' : 'text-[#1a1a1a]/70'}`}>
                      {card.description}
                    </p>
                    <a href="#" className={`text-sm underline underline-offset-4 ${card.textColor}`}>
                      {card.link}
                    </a>
                  </div>
                  
                  {/* Building Image */}
                  <div className="absolute bottom-0 right-0 w-2/3">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-auto object-cover rounded-tl-3xl"
                    />
                  </div>

                  {/* Arrow Button */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-lime rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
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
