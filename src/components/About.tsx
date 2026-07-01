import { User, Shield, Compass, Calendar, MapPin, Target, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { bishojProfile } from '../data';

export default function About() {
  const credentials = [
    {
      icon: Calendar,
      label: 'Experience',
      value: bishojProfile.experience,
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: Target,
      label: 'Focus Areas',
      value: bishojProfile.focus,
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: bishojProfile.location,
      gradient: 'from-orange-500 to-amber-600',
    },
    {
      icon: Compass,
      label: 'Primary Goal',
      value: bishojProfile.goal,
      gradient: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-bg-alt overflow-hidden transition-colors duration-300">
      {/* Decorative Blur Orbs */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-600/5 blur-[90px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[250px] h-[250px] rounded-full bg-orange-600/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Section Indicator Side Block */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium uppercase tracking-wider">
              <User className="w-3 h-3" /> The Story
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-text-main tracking-tight leading-tight transition-colors duration-300">
              About <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                Bishoj Basnet
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full" />
          </div>

          {/* Narrative Text */}
          <div className="lg:col-span-8 space-y-6">
            {bishojProfile.aboutText.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className={`text-text-main font-sans text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
                  index === 0 ? 'font-medium text-text-main/90 border-l-2 border-purple-500 pl-4' : 'text-text-muted font-light'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

        </div>

        {/* Personal Section (Two-Column Credentials layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-border-main pt-20 transition-colors duration-300">
          
          {/* Column 1: Abstract Photo/Mockup */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-3xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500 animate-pulse" />
            
            {/* Elegant Graphic Grid representation of layout coordinates */}
            <div className="relative aspect-video lg:aspect-square bg-about-visual-bg rounded-3xl border border-border-main p-6 overflow-hidden shadow-2xl flex flex-col justify-between transition-colors duration-300">
              
              {/* Top Graphic */}
              <div className="flex items-center justify-between border-b border-border-main pb-4 transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] font-mono text-text-muted tracking-wider uppercase transition-colors duration-300">
                  bishoj_manifesto.pdf
                </span>
              </div>

              {/* Middle Aesthetic Core Graphic */}
              <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-purple-500 animate-spin-slow" />
                </div>
                <div className="space-y-1">
                  <p className="text-text-main font-sans font-semibold text-lg transition-colors duration-300">"Form follows function."</p>
                  <p className="text-text-muted text-xs font-mono transition-colors duration-300">Precision layout geometry & micro details</p>
                </div>
              </div>

              {/* Bottom graphic status line */}
              <div className="flex items-center justify-between border-t border-border-main pt-4 transition-colors duration-300">
                <div className="flex items-center gap-2 text-text-muted font-mono text-[9px] uppercase tracking-wider transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  SYSTEM_STATUS: STABLE
                </div>
                <span className="text-[9px] font-mono text-text-muted uppercase transition-colors duration-300">
                  27.7172° N, 85.3240° E
                </span>
              </div>

              {/* Subtle glass texture overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(120,120,120,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none rounded-3xl" />
            </div>
          </div>

          {/* Column 2: Credentials & Cards */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
                <Briefcase className="w-3.5 h-3.5" /> Professional Blueprint
              </div>
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-text-main tracking-tight transition-colors duration-300">
                Personal Credentials
              </h3>
              <p className="text-text-muted text-sm mt-2 transition-colors duration-300">
                A brief overview of where I stand and the design values I continuously bring to every digital landscape.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-card-bg border border-border-main hover:bg-pill-bg hover:scale-[1.01] transition-all duration-300 group shadow-sm flex flex-col items-start space-y-3"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-tr ${card.gradient} bg-opacity-20 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-text-muted uppercase tracking-widest font-medium transition-colors duration-300">
                        {card.label}
                      </span>
                      <span className="block text-sm font-sans font-semibold text-text-main mt-1 transition-colors duration-300">
                        {card.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
