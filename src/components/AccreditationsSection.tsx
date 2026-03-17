import { motion } from 'framer-motion';

const certifications = [
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description: "Certified for maintaining international standards in construction and engineering services by TUV India.",
    image: "/images/certificates/ISO 9001-2015 Certification – TUV India.png"
  },
  {
    title: "IEI Membership",
    subtitle: "Professional Engineering",
    description: "Corporate member of the largest multi-disciplinary professional body of engineers in India.",
    image: "/images/certificates/IEI Membership Certification.png"
  },
  {
    title: "MSME Registration",
    subtitle: "Udyam Certificate",
    description: "Registered under Ministry of Micro, Small & Medium Enterprises, Government of India.",
    image: "/images/certificates/Udyam certificate.jpeg"
  },
  {
    title: "Contract Labour License",
    subtitle: "Government of Tamil Nadu",
    description: "Registered certificate for contract labour under the Government of Tamil Nadu regulations.",
    image: "/images/certificates/Contract Labour Registration Certificate (Tamil Nadu).png"
  },
  {
    title: "Tamilnadu Icon Award",
    subtitle: "Industry Recognition",
    description: "Recognized for excellence and contribution to the industry with the Tamilnadu Icon Award.",
    image: "/images/certificates/Tamilnadu icon awards.jpeg"
  }
];

export default function AccreditationsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-widest text-sm uppercase"
          >
            Our Credentials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-bold text-navy"
          >
            Verified <span className="text-accent">Accreditations</span>
          </motion.h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our company is recognized by leading governmental and professional institutions, 
            ensuring the highest standards of safety and quality in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 p-8 rounded-[40px] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-8 w-full aspect-[4/3] rounded-3xl bg-white overflow-hidden border border-gray-100 shadow-sm relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700" 
                />
              </div>

              <span className="text-accent font-bold tracking-widest text-[10px] uppercase mb-2">
                {item.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-navy mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
