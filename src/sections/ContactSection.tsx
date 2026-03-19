import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { saveSubmission } from '../lib/contact-service';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await saveSubmission(formData);
      alert('Thank you for your inquiry! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', inquiry: '' });
    } catch (error) {
      console.error("Submission error:", error);
      alert('There was an error. Please try again.');
    } finally {
      setLoading(false);
    }
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
            Get Specialist Advice for Residential and Commercial
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  disabled={loading}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-accent text-navy placeholder:text-muted-foreground disabled:opacity-50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  disabled={loading}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-accent text-navy placeholder:text-muted-foreground disabled:opacity-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  required
                  disabled={loading}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-accent text-navy placeholder:text-muted-foreground disabled:opacity-50"
                />
              </div>
              <div>
                <select
                  value={formData.inquiry}
                  disabled={loading}
                  onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-accent text-navy disabled:opacity-50"
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
                disabled={loading}
                className="group inline-flex items-center gap-3 px-6 py-3 bg-accent text-navy rounded-full font-medium hover:bg-accent/90 transition-colors disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Get A Call Back'}
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
