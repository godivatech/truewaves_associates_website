import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';

const projects = [
  {
    title: 'Mixed-Use Development',
    location: 'New York, NY',
    status: 'COMPLETED',
    image: '/images/project-1.jpg',
  },
  {
    title: 'Greenview Apartments',
    location: 'Hollywood, Florida',
    status: 'UNDER CONSTRUCTION',
    image: '/images/project-2.jpg',
  },
  {
    title: 'Premier Office Tower',
    location: 'Spotswood, NJ',
    status: 'COMPLETED',
    image: '/images/project-3.jpg',
  },
  {
    title: 'Urban Heights Residence',
    location: 'New York, NY',
    status: 'UNDER CONSTRUCTION',
    image: '/images/project-4.jpg',
  },
  {
    title: 'Apartment Building',
    location: 'Bay Shore, NY',
    status: 'UNDER CONSTRUCTION',
    image: '/images/service-1.jpg',
  },
  {
    title: 'Commercial & Residential Building',
    location: 'Spotswood, NJ',
    status: 'COMPLETED',
    image: '/images/service-3.jpg',
  },
];

const filterOptions = [
  { label: 'Project Status', options: ['All', 'Completed', 'Under Construction'] },
  { label: 'Project Type', options: ['All', 'Residential', 'Commercial', 'Mixed-Use'] },
  { label: 'Project Location', options: ['All', 'New York', 'Florida', 'New Jersey'] },
  { label: 'Project Budget', options: ['All', 'Under $1M', '$1M - $5M', '$5M+'] },
];

export default function ProjectsSection() {
  const [filters, setFilters] = useState({
    status: 'All',
    type: 'All',
    location: 'All',
    budget: 'All',
  });

  const filteredProjects = projects.filter((project) => {
    if (filters.status !== 'All' && project.status.toLowerCase() !== filters.status.toLowerCase()) return false;
    return true;
  });

  return (
    <section id="projects" className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src="/images/project-1.jpg"
          alt="Modern architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl font-bold text-white"
          >
            Our Projects
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-8 left-8 text-white/70 text-sm"
          >
            Home <span className="mx-2">•</span> Projects
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-t-[40px] -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-gray-100"
          >
            {filterOptions.map((filter) => (
              <div key={filter.label} className="relative">
                <select
                  className="appearance-none bg-gray-50 px-6 py-3 pr-10 rounded-full text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-lime cursor-pointer"
                  onChange={(e) => setFilters({ ...filters, [filter.label.toLowerCase().split(' ')[1]]: e.target.value })}
                >
                  <option>{filter.label}</option>
                  {filter.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a] pointer-events-none" />
              </div>
            ))}
            <button className="px-8 py-3 bg-lime text-[#1a1a1a] text-sm font-semibold rounded-full hover:bg-lime-dark transition-colors">
              Search
            </button>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-medium ${
                      project.status === 'COMPLETED' 
                        ? 'bg-lime text-[#1a1a1a]' 
                        : 'bg-white/90 text-[#1a1a1a]'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <div className="w-full h-px bg-white/30 mb-3" />
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
