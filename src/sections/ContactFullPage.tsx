import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Support email',
    value: 'info@truewavesgroup.com',
    buttonText: 'Email Us',
  },
  {
    icon: MapPin,
    title: 'Madurai Office',
    value: 'No. 5, North Street, Singarayar Colony, Narimedu, Madurai - 625002',
    buttonText: '0452 2535226',
  },
  {
    icon: MapPin,
    title: 'Chennai Office',
    value: '27/5, Easwaran Koil Street, Vellai thottam, West Mambalam, Chennai - 600033',
    buttonText: '044 - 45837877',
  },
];

export default function ContactFullPage() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative h-[65vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/contact-bg.jpg")' }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-navy/60" />

        {/* Background Outline Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-[20vw] font-black text-white leading-none tracking-tighter"
            style={{ 
              WebkitTextStroke: '2px white',
              color: 'transparent'
            }}
          >
            CONTACT
          </motion.h1>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-accent font-medium">Home</span>
              <span className="text-white/40">/</span>
              <span className="text-white">Contact</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Contact us
            </h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              Have questions or ready to start your next project? We're here to help you navigate your real estate and construction needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-[40px] p-8 flex flex-col items-start shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-gray-500 mb-8">{item.value}</p>
              <button className="w-full py-4 bg-[#E4EE7E] text-navy rounded-full font-bold text-sm tracking-wide hover:opacity-90 transition-opacity">
                {item.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-navy mb-12">Leave a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-full px-6 py-4 bg-gray-50 rounded-[24px] border-0 focus:ring-2 focus:ring-accent text-navy placeholder:text-gray-400"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full px-6 py-4 bg-gray-50 rounded-[24px] border-0 focus:ring-2 focus:ring-accent text-navy placeholder:text-gray-400"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email*"
                className="w-full px-6 py-4 bg-gray-50 rounded-[24px] border-0 focus:ring-2 focus:ring-accent text-navy placeholder:text-gray-400"
                required
              />
              <textarea
                placeholder="Message..."
                rows={6}
                className="w-full px-6 py-4 bg-gray-50 rounded-[24px] border-0 focus:ring-2 focus:ring-accent text-navy placeholder:text-gray-400 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="group inline-flex items-center gap-4 px-4 py-4 bg-white border border-gray-200 rounded-full font-bold text-navy shadow-sm hover:border-accent transition-all pl-8"
              >
                Submit
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </button>
            </form>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[600px] rounded-[40px] overflow-hidden grayscale contrast-[1.1]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.982928131346!2d78.1311746759082!3d10.957121155982845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58e11111111%3A0x111111111111111!2sNo.%205%2C%20North%20St%2C%20Singarayar%20Colony%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710328400000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
      </section>
    </div>
  );
}
