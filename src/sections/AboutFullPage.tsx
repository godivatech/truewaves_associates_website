import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Building2, Ruler, CheckCircle } from 'lucide-react';

// ─── Animated Counter ─────────────────────────────────────────────────────────

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix = '', duration = 2000 }: CounterProps) {
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
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const timelineData = [
  {
    year: '1983',
    image: '/images/timeline-1.png',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudium, totam rem aperiam, eaque ipsa.',
  },
  {
    year: '1996',
    image: '/images/timeline-2.png',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudium, totam rem aperiam, eaque ipsa.',
  },
  {
    year: '2005',
    image: '/images/timeline-3.png',
    text: 'Natus error sit voluptatem accusantium doloremque laudium.',
  },
  {
    year: '2013',
    image: '/images/timeline-4.png',
    text: 'Quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    year: '2024',
    image: '/images/timeline-5.png',
    text: 'Soloremque laudium, totam rem aperiam, eaque ipsa quae ab illoentore veritatis.',
  },
];

const infoCards = [
  {
    number: '01.',
    title: 'What we do',
    description: 'We maintain this by ensuring transparency and professional conduct in every aspect.',
    link: 'Our Solutions',
    image: '/images/card-1.jpg',
    bgColor: 'bg-[#1a1a1a]',
    textColor: 'text-white' as const,
  },
  {
    number: '02.',
    title: 'Our impact',
    description: 'We work with both investors and developers to create landmarks that make an impact.',
    link: 'See Projects',
    image: '/images/card-2.jpg',
    bgColor: 'bg-lime',
    textColor: 'text-[#1a1a1a]' as const,
  },
  {
    number: '03.',
    title: 'Core values',
    description: 'To empower businesses with cutting-edge web solutions that enhance their digital presence and drive growth.',
    link: 'Discover More',
    image: '/images/card-3.jpg',
    bgColor: 'bg-[#1a1a1a]',
    textColor: 'text-white' as const,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutSection() {
  return (
    <section id="about" className="bg-white">
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <div className="relative h-[65vh] min-h-[500px] flex flex-col justify-end overflow-hidden">
        <img
          src="/images/about-hero.jpg"
          alt="Modern architecture aerial view"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Background Outline Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden h-full flex items-center">
            <motion.span
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 0.1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-[20rem] lg:text-[30rem] font-bold text-white whitespace-nowrap leading-none tracking-tighter"
                style={{ 
                    WebkitTextStroke: '1px rgba(255,255,255,0.3)',
                    color: 'transparent'
                }}
            >
                BUILDING FUTURE
            </motion.span>
        </div>
        
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl sm:text-8xl lg:text-[11rem] font-bold text-white tracking-tighter leading-[0.85]"
            >
              About <br /> Us
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:mb-4 lg:text-right"
            >
              <div className="flex items-center lg:justify-end gap-3 text-white/70 text-sm font-medium tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-lime" />
                Home <span className="text-lime">/</span> About Us
              </div>
              <p className="text-white/90 text-sm max-w-sm leading-relaxed uppercase tracking-wide">
                Whether you're building, remodeling, buying, or selling, we bring seamless project execution under one roof.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Main Content ────────────────────────────────────── */}
      <div className="bg-white rounded-t-[40px] -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          {/* Top: Heading + Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-lime rounded-full text-xs font-medium tracking-wider text-dark mb-6"
              >
                ABOUT US
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-dark leading-tight"
              >
                Shaping the
                <br />
                world of things
                <br />
                to come
              </motion.h2>
            </div>

            <div className="flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl font-medium text-dark mb-4"
              >
                We'd love to share more with you — our dedicated team is committed to
                turning your vision into reality.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground mb-6"
              >
                In markets from renewable energy, sports and entertainment, to data
                centers and healthcare, we work to ensure the built environment leaves
                a lasting positive impact. Together, we strive to make your project
                better than you imagined possible.
              </motion.p>
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                href="#team"
                className="inline-flex items-center gap-3 self-start"
              >
                <span className="px-6 py-3 border border-dark/20 rounded-full text-sm font-medium text-dark">
                  Meet The Team
                </span>
                <span className="w-10 h-10 bg-lime rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </motion.a>
            </div>
          </div>

          {/* Team Image with Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden mb-20"
          >
            <img
              src="/images/team-about.jpg"
              alt="Our team collaborating"
              className="w-full h-[500px] object-cover"
            />

            {/* Stats: top-right */}
            <div className="absolute top-8 right-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-start justify-between mb-2">
                <div className="text-5xl font-bold text-dark">
                  <AnimatedCounter target={40} suffix="+" />
                </div>
                <Building2 className="w-6 h-6 text-dark" />
              </div>
              <p className="text-sm text-muted-foreground">projects in development</p>
            </div>

            {/* Stats: bottom-center */}
            <div className="absolute bottom-8 left-1/3 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-start justify-between mb-2">
                <div className="text-5xl font-bold text-dark">
                  <AnimatedCounter target={18} suffix="m" />
                </div>
                <Ruler className="w-6 h-6 text-dark" />
              </div>
              <p className="text-sm text-muted-foreground">square feet of property</p>
            </div>

            {/* Stats: bottom-right */}
            <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-start justify-between mb-2">
                <div className="text-5xl font-bold text-dark">
                  <AnimatedCounter target={2} suffix="b+" />
                </div>
                <CheckCircle className="w-6 h-6 text-dark" />
              </div>
              <p className="text-sm text-muted-foreground">total projects cost</p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-lime rounded-full text-xs font-medium tracking-wider text-dark mb-6"
            >
              OUR STORY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-dark mb-16"
            >
              40+ years of a<br />remarkable journey
            </motion.h2>

            <div className="relative">
              {/* Horizontal rule */}
              <div className="absolute top-[120px] left-0 right-0 h-px bg-lime" />

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl lg:text-5xl font-bold text-lime mb-4">
                      {item.year}
                    </div>
                    <div className="relative h-[100px] mb-8">
                      <img
                        src={item.image}
                        alt={`Timeline ${item.year}`}
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
              className="text-4xl lg:text-5xl mb-12"
            >
              <span className="font-light block text-dark/70">Learn more</span>
              <span className="font-bold block text-dark">about us</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {infoCards.map((card, index) => {
                const isLight = card.textColor === 'text-[#1a1a1a]';
                return (
                  <motion.div
                    key={card.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group relative ${card.bgColor} rounded-[40px] overflow-hidden min-h-[500px] flex flex-col justify-between`}
                  >
                    <div className="p-10 relative z-20 h-full flex flex-col">
                      <div className={`text-sm mb-4 font-medium ${isLight ? 'text-dark/60' : 'text-white/60'}`}>
                        {card.number}
                      </div>
                      <div className={`w-full h-px mb-10 ${isLight ? 'bg-dark/10' : 'bg-white/10'}`} />

                      {/* Push content to bottom */}
                      <div className="mt-auto">
                        <h3 className={`text-4xl font-bold mb-4 tracking-tight leading-tight ${card.textColor}`}>
                          {card.title}
                        </h3>
                        <p className={`text-base mb-8 max-w-[280px] leading-relaxed ${isLight ? 'text-dark/70' : 'text-white/70'}`}>
                          {card.description}
                        </p>
                        <a
                          href="#"
                          className={`text-sm font-semibold underline underline-offset-8 transition-opacity hover:opacity-80 ${card.textColor}`}
                        >
                          {card.link}
                        </a>
                      </div>
                    </div>

                    {/* Image handling - Card 01 has no image in reference */}
                    {index > 0 && (
                      <div className="absolute bottom-0 right-0 w-3/4 h-1/2 overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover rounded-tl-[40px]"
                        />
                      </div>
                    )}

                    {/* Notched Hover/Arrow Button */}
                    <div className="absolute bottom-0 right-0 z-30">
                      {/* Custom SVG/CSS cutout effect */}
                      <div className={`relative w-24 h-24 flex items-center justify-center bg-white rounded-tl-[40px]`}>
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${isLight && index !== 1 ? 'bg-[#1a1a1a] text-white' : 'bg-lime text-dark'}`}>
                          <ArrowUpRight className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
