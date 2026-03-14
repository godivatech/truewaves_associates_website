import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type ProjectStatus = 'COMPLETED' | 'UNDER CONSTRUCTION';

interface Project {
  title: string;
  location: string;
  status: ProjectStatus;
  category: string;
  image: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    title: 'TVS Emerald Peninsula',
    category: 'Infrastructure',
    location: 'Chennai',
    status: 'COMPLETED',
    image: '/images/Projects/TVS emerald penisula, chennai.png',
  },
  {
    title: 'Chennai Metro Rail',
    category: 'Infrastructure',
    location: 'Teynampet, Chennai',
    status: 'COMPLETED',
    image: '/images/Projects/chennai metrorail, Tyenapet chennai.png',
  },
  {
    title: 'L&T Infra Work',
    category: 'Infrastructure',
    location: 'Kudankulam',
    status: 'COMPLETED',
    image: '/images/Projects/L&T infra work. Kudankulam.png',
  },
  {
    title: 'Fitness Center',
    category: 'Institutional',
    location: 'Kamarajar University, Chennai',
    status: 'COMPLETED',
    image: '/images/Projects/Fitness center kamarajar university, chennai.png',
  },
  {
    title: 'MGR University',
    category: 'Institutional',
    location: 'Chennai',
    status: 'COMPLETED',
    image: '/images/Projects/MGR university, Chennai.jpeg',
  },
  {
    title: 'TVS Emerald Lakeshore Infra',
    category: 'Infrastructure',
    location: 'Chennai',
    status: 'COMPLETED',
    image: '/images/Projects/TVS emerold Lakshore infra, chennai.jpeg',
  },
];

const filterOptions = [
  { key: 'status', label: 'Project Status', options: ['All', 'Completed', 'Under Construction'] },
  { key: 'category', label: 'Category', options: ['All', 'Infrastructure', 'Institutional'] },
  { key: 'location', label: 'Location', options: ['All', 'Chennai', 'Kudankulam'] },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjectsSection() {
  const [filters, setFilters] = useState<Record<string, string>>({
    status: 'All',
    category: 'All',
    location: 'All',
  });

  const filteredProjects = projects.filter((project) => {
    if (filters.status !== 'All' && project.status.toLowerCase() !== filters.status.toLowerCase())
      return false;
    if (filters.category !== 'All' && project.category.toLowerCase() !== filters.category.toLowerCase())
      return false;
    if (filters.location !== 'All' && !project.location.toLowerCase().includes(filters.location.toLowerCase()))
      return false;
    return true;
  });

  return (
    <section id="projects" className="bg-white">
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <div className="relative h-[65vh] min-h-[500px] flex flex-col justify-end overflow-hidden">
        <img
          src="/images/Projects/TVS emerald penisula, chennai.png"
          alt="Modern architecture project"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Background Outline Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden h-full flex items-center">
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[20rem] lg:text-[30rem] font-bold text-white whitespace-nowrap leading-none tracking-tighter"
            style={{
              WebkitTextStroke: '1px rgba(255,255,255,0.3)',
              color: 'transparent'
            }}
          >
            LANDMARKS
          </motion.span>
        </div>

        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl sm:text-8xl lg:text-[11rem] font-bold text-white tracking-tighter leading-[0.85]"
            >
              Latest <br /> Projects
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:mb-4 lg:text-right"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-xs font-semibold tracking-widest text-accent uppercase mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Featured Projects
              </div>
              <p className="text-white/90 text-sm max-w-sm leading-relaxed uppercase tracking-wide">
                Explore our portfolio of landmark developments and architectural excellence across the region.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Main Content ────────────────────────────────────── */}
      <div className="bg-white rounded-t-[40px] -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-gray-100 relative"
          >
            {filterOptions.map((filter) => (
              <div key={filter.key} className="relative">
                <select
                  aria-label={filter.label}
                  className="appearance-none bg-gray-50 px-6 py-3 pr-10 rounded-full text-sm text-dark focus:outline-none focus:ring-2 focus:ring-accent transition-colors cursor-pointer"
                  value={filters[filter.key]}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, [filter.key]: e.target.value }))
                  }
                >
                  {filter.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt === 'All' ? filter.label : opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark pointer-events-none" />
              </div>
            ))}
            <button
              onClick={() => setFilters({ status: 'All', category: 'All', location: 'All' })}
              className="px-8 py-3 bg-accent text-navy text-sm font-semibold rounded-full hover:opacity-90 transition-colors shadow-lg shadow-accent/10"
            >
              Reset
            </button>
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground text-lg">
              No projects match the selected filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
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
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-medium ${project.status === 'COMPLETED'
                          ? 'bg-secondary text-dark'
                          : 'bg-white/90 text-dark'
                          }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                        <MapPin className="w-4 h-4 shrink-0" />
                        {project.location}
                      </div>
                      <div className="w-full h-px bg-white/30 mb-3" />
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
