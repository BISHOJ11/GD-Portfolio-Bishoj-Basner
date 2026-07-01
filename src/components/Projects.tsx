import { useState } from 'react';
import { Briefcase, ArrowRight, Grid, Sparkles, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { projectsData } from '../data';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Derive unique categories from projects
  const filters = ['All', 'Poster Design', 'Logo Design', 'Social Media Design', 'Brand Identity'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="relative py-24 bg-bg-main overflow-hidden transition-colors duration-300">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[350px] h-[350px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-mono font-medium uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" /> Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-text-main tracking-tight leading-none transition-colors duration-300">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Creative Projects
            </span>
          </h2>
          <p className="text-text-muted font-sans text-sm sm:text-base transition-colors duration-300">
            Explore a curated selection of physical prints, corporate logos, and vibrant social media advertising sets engineered with form and functionality.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12" id="portfolio-filters-container">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-text-muted uppercase tracking-wider bg-pill-bg border border-border-main rounded-xl mr-2 transition-colors duration-300">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              id={`filter-btn-${filter.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4.5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all focus:outline-none cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-text-main text-bg-main shadow-md scale-[1.03]'
                  : 'bg-pill-bg border border-border-main text-text-muted hover:text-text-main hover:bg-pill-bg/85'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Dynamic Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group relative bg-card-bg border border-border-main hover:border-blue-500/20 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-500 shadow-sm hover:shadow-lg cursor-zoom-in flex flex-col justify-between"
              >
                
                {/* Visual Thumbnail Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  
                  {/* Subtle Grid pattern overlay on card hover */}
                  <div className="absolute inset-0 bg-neutral-950/20 z-10 pointer-events-none group-hover:bg-neutral-950/10 transition-colors" />

                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:rotate-1"
                  />

                  {/* Gradient bottom fog */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />

                  {/* Floating Category Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-md bg-black/80 border border-white/10 text-[10px] text-blue-400 font-mono tracking-wider uppercase font-semibold backdrop-blur-sm shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover action icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Card Title & Description Footer */}
                <div className="p-6 text-left space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] text-text-muted font-mono uppercase tracking-widest font-semibold block transition-colors duration-300">
                      Client: {project.client}
                    </span>
                    <h3 className="text-xl font-sans font-bold text-text-main group-hover:text-blue-500 transition-colors duration-300 tracking-tight leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-text-muted text-xs sm:text-sm font-light leading-relaxed line-clamp-2 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-border-main flex items-center justify-between transition-colors duration-300">
                    <span className="text-[11px] text-text-muted font-mono transition-colors duration-300">
                      Timeline: {project.year}
                    </span>
                    <span className="text-xs font-semibold font-mono text-text-muted group-hover:text-text-main flex items-center gap-1 transition-colors duration-300">
                      Case Study <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Stats Highlight Ribbon */}
        <div className="mt-20 p-8 rounded-3xl bg-card-bg border border-border-main grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-sm transition-colors duration-300">
          <div>
            <p className="text-3xl md:text-4xl font-sans font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">6+</p>
            <p className="text-xs font-mono text-text-muted uppercase mt-1 tracking-wider transition-colors duration-300">Months Experience</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-sans font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">100%</p>
            <p className="text-xs font-mono text-text-muted uppercase mt-1 tracking-wider transition-colors duration-300">Pixel-Perfect Vector Guarantee</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-sans font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">15+</p>
            <p className="text-xs font-mono text-text-muted uppercase mt-1 tracking-wider transition-colors duration-300">Sleek Brand Logos</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-sans font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">24/7</p>
            <p className="text-xs font-mono text-text-muted uppercase mt-1 tracking-wider transition-colors duration-300">Creative Dedication</p>
          </div>
        </div>

      </div>
    </section>
  );
}
