import { X, Calendar, User, Tag, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md cursor-zoom-out"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-modal-bg border border-border-main rounded-3xl overflow-y-auto shadow-2xl flex flex-col z-10 select-none scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-white/10 scrollbar-track-transparent text-left transition-colors duration-300"
            id={`project-modal-${project.id}`}
          >
            {/* Sticky Header with close button */}
            <div className="sticky top-0 right-0 left-0 bg-modal-bg/85 backdrop-blur-md border-b border-border-main py-4 px-6 flex items-center justify-between z-20 transition-colors duration-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider transition-colors duration-300">
                  Case Study
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-pill-bg hover:bg-pill-bg/80 text-text-muted hover:text-text-main border border-border-main hover:border-border-main transition-colors focus:outline-none cursor-pointer"
                id="modal-close-btn"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 md:p-10 space-y-8">
              
              {/* Image Banner */}
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-border-main group shadow-lg transition-colors duration-300">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-blue-500/80 text-white font-mono text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white mt-3 tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Grid Metadata Columns */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-border-main pb-8 transition-colors duration-300">
                
                {/* Meta details */}
                <div className="md:col-span-4 space-y-4">
                  <div className="p-5 rounded-2xl bg-bg-alt border border-border-main space-y-4 transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <User className="w-4.5 h-4.5 text-purple-500 dark:text-purple-400" />
                      <div>
                        <span className="block text-[10px] text-text-muted font-mono uppercase tracking-wider transition-colors duration-300">Client</span>
                        <span className="block text-sm font-semibold text-text-main transition-colors duration-300">{project.client}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar className="w-4.5 h-4.5 text-orange-500 dark:text-orange-400" />
                      <div>
                        <span className="block text-[10px] text-text-muted font-mono uppercase tracking-wider transition-colors duration-300">Timeline / Year</span>
                        <span className="block text-sm font-semibold text-text-main transition-colors duration-300">{project.year}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Tag className="w-4.5 h-4.5 text-blue-500 dark:text-blue-400 mt-1" />
                      <div>
                        <span className="block text-[10px] text-text-muted font-mono uppercase tracking-wider transition-colors duration-300">Project Tags</span>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md bg-pill-bg text-[10px] font-mono text-text-muted border border-border-main transition-colors duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Overview */}
                <div className="md:col-span-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="text-xl font-sans font-bold text-text-main tracking-tight flex items-center gap-2 transition-colors duration-300">
                      <Sparkles className="w-5 h-5 text-purple-500" /> Executive Summary
                    </h4>
                    <p className="text-text-main font-sans text-base leading-relaxed transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-pill-bg border-l-4 border-purple-500 mt-6 transition-colors duration-300">
                    <p className="text-xs text-text-muted italic transition-colors duration-300">
                      "This visual asset was engineered with full vector adaptability, optimized layout margins, and a professional brand-narrative framework suitable for physical print displays & modern web campaigns."
                    </p>
                  </div>
                </div>

              </div>

              {/* Challenge vs Solution layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-border-main pb-8 transition-colors duration-300">
                
                {/* Challenge */}
                <div className="space-y-4">
                  <h4 className="text-lg font-sans font-bold text-text-main flex items-center gap-2 transition-colors duration-300">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    The Design Challenge
                  </h4>
                  <p className="text-text-muted text-sm sm:text-base leading-relaxed transition-colors duration-300">
                    {project.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-4">
                  <h4 className="text-lg font-sans font-bold text-text-main flex items-center gap-2 transition-colors duration-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    The Creative Solution
                  </h4>
                  <p className="text-text-muted text-sm sm:text-base leading-relaxed transition-colors duration-300">
                    {project.solution}
                  </p>
                </div>

              </div>

              {/* Deliverables List */}
              <div className="space-y-4 pb-4">
                <h4 className="text-lg font-sans font-bold text-text-main transition-colors duration-300">Project Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.deliverables.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-bg-alt border border-border-main flex items-center gap-3 hover:border-blue-500/20 transition-all duration-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-sm text-text-main font-sans font-medium transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Inside Modal */}
              <div className="p-6 rounded-2xl bg-pill-bg border border-border-main flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-colors duration-300">
                <div className="text-left">
                  <p className="text-sm font-semibold text-text-main font-sans transition-colors duration-300">Like this design aesthetic?</p>
                  <p className="text-xs text-text-muted transition-colors duration-300">Request a custom campaign or brand audit based on this study.</p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-5 py-2.5 rounded-xl bg-text-main text-bg-main font-semibold text-xs flex items-center justify-center gap-1.5 hover:opacity-90 transition-all cursor-pointer"
                >
                  Start Project <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
