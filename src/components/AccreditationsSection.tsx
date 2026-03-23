import { motion } from 'framer-motion';

const certifications = [
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description: "Certified for international quality standards in engineering and construction by TUV India.",
    image: "/images/certificates/ISO 9001-2015 Certification – TUV India.png"
  },
  {
    title: "Tamilnadu Icon Award",
    subtitle: "Industry Recognition",
    description: "Winner of the Tamilnadu Icon Award for excellence in the engineering industry.",
    image: "/images/certificates/Tamilnadu icon awards.jpeg"
  },
  {
    title: "Hunger Relief Achievement Award",
    subtitle: "Community Service",
    description: "Awarded by the International Association of Lions Clubs for exceptional contribution to hunger relief initiatives and dedicated community service.",
    image: "/images/certificates/new/Hunger Relief Achievement Award.jpeg"
  },
  {
    title: "Youth Development Recognition",
    subtitle: "Social Progress",
    description: "Presented in Madurai in recognition of impactful contributions to youth development and community service, honoring leadership and commitment.",
    image: "/images/certificates/new/Youth Leadership & Social Contribution Award (2025).jpeg"
  },
  {
    title: "MPC Productivity Week 2026",
    subtitle: "Industry Engagement",
    description: "Recognized as a Silver Sponsor at MPC Productivity Week 2026, highlighting contribution to initiatives aimed at enhancing growth within the MSME sector.",
    image: "/images/certificates/new/MPC Productivity Week 2026 – Recognition Award (Silver Sponsor).jpeg"
  },
  {
    title: "Court Building Inauguration",
    subtitle: "Public Infrastructure",
    description: "This commemorative recognition was awarded during the inauguration of the new court building and judicial quarters at Ilayangudi, reflecting professional credibility.",
    image: "/images/certificates/new/Court Building Inauguration Recognition.jpeg"
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
            Our <span className="text-accent">Certifications</span>
          </motion.h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are officially recognized by leading government and professional institutions, 
            ensuring the highest quality and safety standards in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
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
