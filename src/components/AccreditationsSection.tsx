import { motion } from 'framer-motion';
import { Award, FileCheck, Users, ExternalLink } from 'lucide-react';

interface CertificationItem {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

interface CertificationCategory {
  category: string;
  icon: any;
  items: CertificationItem[];
}

const certifications: CertificationCategory[] = [
  {
    category: "Accreditations",
    icon: Award,
    items: [
      {
        title: "ISO 9001:2015",
        subtitle: "Quality Management System",
        description: "Certified for maintaining international standards in construction and engineering services.",
        image: "/images/iso-logo.png"
      }
    ]
  },
  {
    category: "Licenses",
    icon: FileCheck,
    items: [
      {
        title: "Valuation License",
        subtitle: "Govt. of India Registered",
        description: "Authorized registered valuer for immovable properties under the Wealth Tax Act.",
      },
      {
        title: "Class I Contractor",
        subtitle: "Government of Tamil Nadu",
        description: "Qualified for large-scale public infrastructure and government civil works.",
      }
    ]
  },
  {
    category: "Memberships",
    icon: Users,
    items: [
      {
        title: "Institution of Engineers",
        subtitle: "IEI - India",
        description: "Corporate member of the largest multi-disciplinary professional body of engineers.",
      },
      {
        title: "Institution of Valuers",
        subtitle: "IOV Member",
        description: "Professional affiliation for expert property valuation and assessment.",
      },
      {
        title: "ACCE (India)",
        subtitle: "Association of Consulting Civil Engineers",
        description: "Member of the apex body for consulting civil engineers in India.",
      }
    ]
  }
];

export default function AccreditationsSection() {
  return (
    <section className="py-24 bg-slate-50">
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
            Accreditations & <span className="text-accent">Memberships</span>
          </motion.h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality and professional standards is backed by globally recognized certifications and affiliations with premier institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {certifications.map((cat, catIdx) => (
            <div key={cat.category} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <cat.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-navy">{cat.category}</h3>
                <div className="flex-grow h-px bg-gradient-to-r from-gray-200 to-transparent ml-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIdx * 0.1) + (itemIdx * 0.1) }}
                    className="group bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-5 h-5 text-accent" />
                    </div>

                    {item.image && (
                      <div className="mb-6 h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-500">
                        <img src={item.image} alt={item.title} className="h-full object-contain" />
                      </div>
                    )}

                    <h4 className="text-xl font-bold text-navy group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-accent font-semibold text-sm mt-1">{item.subtitle}</p>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-center text-sm font-bold text-navy opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      LEARN MORE <ArrowUpRight className="ml-1 w-4 h-4" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
