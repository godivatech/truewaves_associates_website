import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "They knew what they were doing and were incredibly knowledgeable throughout the process. A wonderful!",
    author: "Esther Howard",
    role: "Assistant Project Manager",
  },
  {
    quote: "A wonderful experience! They knew what they were doing and were incredibly knowledgeable throughout the process.",
    author: "John McConnor",
    role: "Senior Marketing Manager",
  },
  {
    quote: "The team exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched.",
    author: "Sarah Mitchell",
    role: "Property Investor",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rotating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-28 h-28">
            <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
              <defs>
                <path
                  id="testimonialCircle"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="text-[7px] fill-navy uppercase tracking-widest">
                <textPath href="#testimonialCircle">
                  WHAT PEOPLE SAYS • WHAT PEOPLE SAYS •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/team-1.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-navy leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div>
                <p className="font-semibold text-navy">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-navy" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-navy" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
