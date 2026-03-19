import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

const projects = [
  {
    number: '01',
    location: 'Chennai, Tamil Nadu',
    title: 'TVS Emerald Peninsula',
    image: '/images/Projects/TVS emerald penisula, chennai.png',
  },
  {
    number: '02',
    location: 'Teynampet, Chennai',
    title: 'Chennai Metro Rail',
    image: '/images/Projects/chennai metrorail, Tyenapet chennai.png',
  },
  {
    number: '03',
    location: 'Kudankulam, Tamil Nadu',
    title: 'L&T Infra Work',
    image: '/images/Projects/L&T infra work. Kudankulam.png',
  },
  {
    number: '04',
    location: 'Chennai, Tamil Nadu',
    title: 'MGR University',
    image: '/images/Projects/MGR university, Chennai.jpeg',
  },
  {
    number: '05',
    location: 'Nagercoil, Tamil Nadu',
    title: 'Corporation Office Building',
    image: '/images/Projects/Corporation office building,  nagercoil.png',
  },
  {
    number: '06',
    location: 'Madurai, Tamil Nadu',
    title: 'Lotus Shopping Centre',
    image: '/images/Projects/Lotus shopping centre, madurai.png',
  },
  {
    number: '07',
    location: 'Trichy, Tamil Nadu',
    title: 'RSM Tower Commercial Building',
    image: '/images/Projects/RSM tower commercial building, Trichy.png',
  },
  {
    number: '08',
    location: 'Madurai, Tamil Nadu',
    title: 'Thiagarajar College',
    image: '/images/Projects/Thiagarajar college of engineering, madurai.png',
  },
  {
    number: '09',
    location: 'Trichy, Tamil Nadu',
    title: 'Campion School Church',
    image: '/images/Projects/campion school church, trichy.png',
  },
  {
    number: '10',
    location: 'Madurai, Tamil Nadu',
    title: 'Mahatma School',
    image: '/images/Projects/mahatma School KK nagar, Madurai.png',
  },
  {
    number: '11',
    location: 'Madurai, Tamil Nadu',
    title: 'Thiagarajar College of Engineering',
    image: '/images/Projects/Thiagarajar college of engineering, madurai.png',
  },
  {
    number: '12',
    location: 'Chennai, Tamil Nadu',
    title: 'Fitness Center',
    image: '/images/Projects/Fitness center kamarajar university, chennai.png',
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="relative min-h-screen bg-navy">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen border-t border-white/10">
        {/* Left Panel - Project List */}
        <div className="relative z-10 p-8 lg:p-16 flex flex-col justify-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-4 py-2 border border-white/30 rounded-full text-xs font-medium tracking-wider text-white">
              PROJECTS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12"
          >
            Innovative Designs,
            <br />
            Lasting Impressions
          </motion.h2>

          {/* Project List */}
          <div className="space-y-6">
            {projects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`cursor-pointer transition-all duration-300 ${activeProject === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                onClick={() => setActiveProject(index)}
              >
                <div className="flex items-start gap-4">
                  <span className={`text-5xl font-bold ${activeProject === index ? 'text-white' : 'text-white/30'
                    }`}>
                    {project.number}
                  </span>
                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-white/60 text-sm mb-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <h3 className={`text-xl font-semibold transition-colors ${activeProject === index ? 'text-white' : 'text-white/60'
                      }`}>
                      {project.title}
                    </h3>
                  </div>
                </div>
                {activeProject === index && (
                  <motion.div
                    layoutId="activeLine"
                    className="h-px bg-white/30 mt-4 ml-16"
                  />
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-8 mt-4"
            >
              <a 
                href="/projects" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 shadow-lg rounded-full"
              >
                View All Projects
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Panel - Project Images */}
        <div className="relative h-96 lg:h-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeProject}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src={projects[activeProject].image}
              alt={projects[activeProject].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-transparent lg:hidden" />
        </div>
      </div>
    </section>
  );
}
