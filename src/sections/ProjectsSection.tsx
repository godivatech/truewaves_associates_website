import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

const projects = [
  {
    number: '01',
    location: 'Bay Shore, NY',
    title: 'Apartment Building',
    image: '/images/project-1.jpg',
  },
  {
    number: '02',
    location: 'Huntsville, Alabama',
    title: 'Eden Estate',
    image: '/images/project-2.jpg',
  },
  {
    number: '03',
    location: 'Bay Shore, NY',
    title: 'Vista at Council Square',
    image: '/images/project-3.jpg',
  },
  {
    number: '04',
    location: 'Phoenix, AZ',
    title: 'Office Building',
    image: '/images/project-4.jpg',
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="relative min-h-screen bg-dark-light">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
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
              3D PROJECTS
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
            Innovative
            <br />
            designs, lasting
            <br />
            impressions
          </motion.h2>

          {/* Project List */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeProject === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
                onClick={() => setActiveProject(index)}
              >
                <div className="flex items-start gap-4">
                  <span className={`text-5xl font-bold ${
                    activeProject === index ? 'text-white' : 'text-white/30'
                  }`}>
                    {project.number}
                  </span>
                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-white/60 text-sm mb-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <h3 className={`text-xl font-semibold transition-colors ${
                      activeProject === index ? 'text-white' : 'text-white/60'
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
          <div className="absolute inset-0 bg-gradient-to-r from-dark-light/80 via-transparent to-transparent lg:hidden" />
        </div>
      </div>
    </section>
  );
}
