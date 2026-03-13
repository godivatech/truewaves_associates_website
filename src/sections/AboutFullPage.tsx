import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Building2, CheckCircle } from 'lucide-react';

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
    id: '01.',
    title: 'What we do',
    description: 'We maintain this by ensuring transparency and professional conduct in every aspect.',
    link: 'Our Solutions',
    bgColor: 'bg-navy',
    numberColor: 'text-accent',
    buttonBg: 'bg-white',
    arrowColor: 'text-black',
    contentPosition: 'bottom'
  },
  {
    id: '02.',
    title: 'Our impact',
    description: 'We work with both investors and developers to create landmarks that make an impact.',
    link: 'See Projects',
    bgColor: 'bg-primary', // Ocean Blue
    numberColor: 'text-white/40',
    buttonBg: 'bg-white',
    arrowColor: 'text-black',
    image: '/images/construction-site.jpg',
    contentPosition: 'top'
  },
  {
    id: '03.',
    title: 'Core values',
    description: 'To empower businesses with cutting-edge web solutions that enhance their digital presence and drive growth.',
    link: 'Discover More',
    bgColor: 'bg-accent',
    numberColor: 'text-white/20',
    buttonBg: 'bg-white',
    arrowColor: 'text-black',
    image: '/images/innovation.jpg',
    contentPosition: 'top'
  }
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const springX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

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
                <span className="w-8 h-px bg-accent" />
                Home <span className="text-accent">/</span> About Us
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

          {/* Top: Heading + Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-dark/20 rounded-full text-xs font-medium tracking-wider text-dark mb-6"
              >
                WE ARE <span className="text-accent">-</span> WHO WE ARE
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-navy leading-tight"
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
                className="text-xl font-medium text-navy mb-4"
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
                <span className="relative px-6 py-3 border border-navy/20 rounded-full text-sm font-medium text-navy pr-16">
                  Meet The Team
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
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

            {/* Floating Stats: top-left (Years of Exp) */}
            <div className="absolute top-8 left-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-start justify-between mb-2 gap-4">
                <div className="text-5xl font-bold text-navy">
                  <AnimatedCounter target={18} />
                </div>
                <div className="mt-2 p-2 bg-accent/20 rounded-lg">
                  <Building2 className="w-6 h-6 text-navy" />
                </div>
              </div>
              <p className="text-sm text-gray-500 font-medium">Years of experience</p>
            </div>

            {/* Floating Stats: top-right (Ongoing) */}
            <div className="absolute top-8 right-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-start justify-between mb-2 gap-4">
                <div className="text-5xl font-bold text-navy">
                  <AnimatedCounter target={9} />
                </div>
                <div className="mt-2 p-2 bg-navy/10 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-navy" />
                </div>
              </div>
              <p className="text-sm text-gray-500 font-medium">Ongoing projects</p>
            </div>

            {/* Stats: bottom-left (Completed) */}
            <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-start justify-between mb-2 gap-4">
                <div className="text-5xl font-bold text-navy">
                  <AnimatedCounter target={122} />
                </div>
                <div className="mt-2 p-2 bg-primary/10 rounded-lg">
                  <Building2 className="w-6 h-6 text-navy" />
                </div>
              </div>
              <p className="text-sm text-gray-500 font-medium font-medium">Completed projects</p>
            </div>

            {/* Stats: bottom-right (Clients) */}
            <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-start justify-between mb-2 gap-4">
                <div className="text-5xl font-bold text-navy">
                  <AnimatedCounter target={122} />
                </div>
                <div className="mt-2 p-2 bg-accent/20 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-navy" />
                </div>
              </div>
              <p className="text-sm text-gray-500 font-medium">Happy clients</p>
            </div>
          </motion.div>
        </div> {/* End of Upper Content max-w-7xl container */}

        {/* Timeline Section with Horizontal Scroll */}
        <section ref={scrollRef} className="relative h-[250vh] bg-white">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            {/* Centered Header within Timeline Section */}
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-20">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-accent rounded-full text-xs font-medium tracking-wider text-navy mb-6"
              >
                OUR STORY
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-dark"
              >
                40+ years of a<br />remarkable journey
              </motion.h2>
            </div>

            <div className="relative pt-20">
              {/* Horizontal rule (Full Width) */}
              <div className="absolute top-[120px] left-0 right-0 h-px bg-accent/30" />

              <motion.div
                style={{ x: springX }}
                className="flex gap-8 sm:gap-16 px-4 sm:px-6 lg:px-8"
              >
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="flex-shrink-0 w-[280px] sm:w-[350px] text-center"
                  >
                    <div className="text-4xl lg:text-5xl font-bold text-accent mb-4">
                      {item.year}
                    </div>
                    <div className="relative h-[120px] mb-8 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={`Timeline ${item.year}`}
                        className="max-w-full max-h-full object-contain"
                      />
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-sm" />
                    </div>
                    <p className="text-sm text-muted-foreground px-4 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lower Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">


          {/* Learn More Cards */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-7xl font-light text-navy leading-[1.1] tracking-tight"
              >
                Learn more <br />
                <span className="font-bold">about us</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:mb-4 lg:text-right"
              >
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {infoCards.map((card, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col h-full rounded-[48px] p-8 md:p-12 overflow-hidden ${card.bgColor} group min-h-[580px]`}
                  >
                    {/* Card Header: Number and Line */}
                    <div className="mb-8">
                      <span className={`text-[15px] font-bold ${card.numberColor} block mb-6`}>{card.id}</span>
                      <div className={`h-[1px] w-full ${card.bgColor.includes('accent') ? 'bg-black/10' : 'bg-white/10'}`} />
                    </div>

                    {/* Flex Content Container */}
                    <div className={`flex-1 flex flex-col ${card.contentPosition === 'bottom' ? 'justify-end pb-16' : 'justify-start pt-4'}`}>
                      <div className="relative z-10">
                        <h3 className={`text-[40px] md:text-[52px] font-bold mb-8 leading-[1.1] tracking-tight ${card.bgColor.includes('accent') ? 'text-black' : 'text-white'}`}>
                          {card.title}
                        </h3>
                        <p className={`text-[16px] leading-[1.6] mb-12 max-w-[310px] ${card.bgColor.includes('accent') ? 'text-black/70' : 'text-white/70'}`}>
                          {card.description}
                        </p>
                        <a href="#" className={`text-[14px] font-bold uppercase tracking-wider underline underline-offset-[16px] decoration-2 transition-opacity hover:opacity-70 ${card.bgColor.includes('accent') ? 'text-black' : 'text-white'}`}>
                          {card.link}
                        </a>
                      </div>
                    </div>

                    {/* Image Section for Cards 02 & 03 (Aligned to Bottom) */}
                    {card.image && (
                      <div className="absolute bottom-0 right-0 w-[85%] h-[40%] overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover rounded-tl-[48px] grayscale contrast-[1.1]"
                        />
                      </div>
                    )}

                    {/* Precise Notched Button Area */}
                    <div className="absolute bottom-0 right-0 z-20">
                      {/* Visual Connector - Top */}
                      <div className="absolute top-[-48px] right-0 w-[48px] h-[48px] bg-white pointer-events-none">
                        <div className={`w-full h-full rounded-br-[48px] ${card.bgColor}`} />
                      </div>
                      {/* Visual Connector - Left */}
                      <div className="absolute left-[-48px] bottom-0 w-[48px] h-[48px] bg-white pointer-events-none">
                        <div className={`w-full h-full rounded-br-[48px] ${card.bgColor}`} />
                      </div>

                      {/* The Button Container (White square with rounded-tl) */}
                      <div className="w-[124px] h-[124px] bg-white rounded-tl-[48px] flex items-center justify-center pt-3 pl-3">
                        <div className={`w-[72px] h-[72px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg ${card.id === '01.' ? 'bg-primary text-white' : 'bg-accent text-navy'}`}>
                          <ArrowUpRight className="w-8 h-8" />
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
