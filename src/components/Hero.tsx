import { ArrowRight, Layers, MapPin, Eye, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { bishojProfile } from '../data';

interface HeroProps {
  onViewProjects: () => void;
  onContactMe: () => void;
}

export default function Hero({ onViewProjects, onContactMe }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-bg-main transition-colors duration-300"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/10 w-[350px] h-[350px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none animate-pulse duration-8000" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-orange-500/5 blur-[90px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pill-bg border border-border-main text-text-muted backdrop-blur-md text-xs font-semibold font-mono uppercase tracking-wider"
            id="hero-badge"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Bishoj Basnet</span>
            <span className="text-text-muted opacity-40">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-orange-400" /> Nepal
            </span>
          </motion.div>

          {/* Large Prominent Name Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-1"
          >
            <span className="text-sm font-mono tracking-widest text-text-muted uppercase font-semibold">
              Graphic Design Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-sans font-bold tracking-tight text-text-main leading-none">
              <span className="bg-gradient-to-r from-text-main via-text-main to-text-muted bg-clip-text text-transparent">
                Bishoj
              </span>{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                Basnet
              </span>
            </h1>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-sans font-medium tracking-tight text-text-main leading-snug"
            id="hero-headline"
          >
            “I craft pixels.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 font-semibold underline decoration-purple-500/50 decoration-2 underline-offset-4">
              And understand the code
            </span>{' '}
            behind them.”
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-sans font-light"
            id="hero-subheadline"
          >
            Combining my creative design skills with a deep understanding of front-end structure, I design with the final digital product always in mind.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto"
            id="hero-ctas"
          >
            <button
              onClick={onViewProjects}
              id="hero-cta-view-projects"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-[1.02] cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onContactMe}
              id="hero-cta-contact-me"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-pill-bg hover:bg-pill-bg/80 border border-border-main text-text-main font-semibold text-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-purple-500" />
              Contact Me
            </button>
          </motion.div>

          {/* Meta Info Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-8 border-t border-border-main grid grid-cols-3 gap-6 w-full"
          >
            <div>
              <p className="text-xs text-text-muted uppercase font-mono tracking-wider">Expertise</p>
              <p className="text-sm font-semibold text-text-main font-sans mt-1">Key Visuals & Ads</p>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase font-mono tracking-wider">Focus</p>
              <p className="text-sm font-semibold text-text-main font-sans mt-1">Branding & Layouts</p>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase font-mono tracking-wider">Tools</p>
              <p className="text-sm font-semibold text-text-main font-sans mt-1">Figma, Adobe CC</p>
            </div>
          </motion.div>
        </div>

        {/* Right Visual Image Column */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px]"
          >
            {/* Geometric glow shapes behind the photo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-600 to-orange-500 rounded-3xl rotate-6 scale-[0.98] opacity-30 blur-md" />
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-600 via-pink-600 to-orange-500 rounded-3xl -rotate-3 scale-[0.96] opacity-20 blur-sm" />

            {/* Main glassmorphism card holding profile image */}
            <div className="relative w-full h-full bg-card-bg border border-border-main rounded-3xl p-3 overflow-hidden backdrop-blur-md shadow-2xl flex items-center justify-center transition-colors duration-300">
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <img
                  src={bishojProfile.avatarUrl}
                  alt="Bishoj Basnet Profile Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] contrast-[105%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />

                {/* Grid Overlay inside photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Tech Badges overlaid */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 justify-center">
                  <span className="px-2.5 py-1 rounded-md bg-black/80 border border-white/10 text-[10px] text-blue-400 font-mono tracking-wider uppercase backdrop-blur-sm">
                    Branding
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-black/80 border border-white/10 text-[10px] text-purple-400 font-mono tracking-wider uppercase backdrop-blur-sm">
                    Posters
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-black/80 border border-white/10 text-[10px] text-orange-400 font-mono tracking-wider uppercase backdrop-blur-sm">
                    UI Design
                  </span>
                </div>
              </div>
            </div>

            {/* Glass Badge float info */}
            <motion.div
              initial={{ x: 20, y: -20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-4 -right-4 p-4 rounded-2xl bg-card-bg border border-border-main shadow-xl backdrop-blur-md flex items-center gap-3 hidden sm:flex transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
                <Layers className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-text-muted font-mono uppercase tracking-wider">Work Status</p>
                <p className="text-xs font-semibold text-text-main">Available for Hire</p>
              </div>
            </motion.div>

            {/* Another floating info card */}
            <motion.div
              initial={{ x: -20, y: 20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-bg-alt border border-border-main shadow-xl flex items-center gap-2.5 transition-colors duration-300"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="w-2.5 h-2.5 absolute rounded-full bg-emerald-500" />
              <p className="text-[11px] font-mono font-medium text-text-muted ml-1">Responsive Designer</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
