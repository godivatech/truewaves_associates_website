import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-bg.jpg"
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
        >
          {/* Label */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-navy/20 rounded-full text-xs font-medium tracking-wider text-navy">
              QUICK ENQUIRY
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-8">
            Get specialist advice for residential, commercial or property
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-accent text-navy placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-accent text-navy placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-accent text-navy placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <select
                  value={formData.inquiry}
                  onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-accent text-navy"
                >
                  <option value="">You inquiry about...</option>
                  <option value="residential">Residential Property</option>
                  <option value="commercial">Commercial Property</option>
                  <option value="investment">Investment</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <p className="text-sm text-muted-foreground">
                We're excited to connect with you!
                <br />
                Required fields are marked *
              </p>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-accent text-navy rounded-full font-medium hover:bg-accent/90 transition-colors"
              >
                Get A Call Back
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
