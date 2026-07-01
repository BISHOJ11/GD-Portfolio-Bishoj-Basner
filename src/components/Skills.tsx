import { Award, Code, Sparkles, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { skillsData } from '../data';

export default function Skills() {
  // Separate software tools from general design topics for diverse representation
  const softwareSkills = skillsData.filter(s => s.category === 'software');
  const designSkills = skillsData.filter(s => s.category === 'design');

  return (
    <section id="skills" className="relative py-24 bg-bg-alt overflow-hidden transition-colors duration-300">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-mono font-medium uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> Core Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-text-main tracking-tight leading-none transition-colors duration-300">
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Creative Arsenal
            </span>
          </h2>
          <p className="text-text-muted font-sans text-sm sm:text-base transition-colors duration-300">
            Combining state-of-the-art vector creation utilities with an eye for structural proportion and rich color composition.
          </p>
        </div>

        {/* Double Column Layout: Software Tools vs Core Design Circular Gauges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Software Tools - Elegant Linear Bars (Adobe Photoshop, Illustrator, Figma) */}
          <div className="lg:col-span-6 space-y-8 text-left bg-card-bg border border-border-main rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-colors duration-300">
            <div className="space-y-1.5 border-b border-border-main pb-4 transition-colors duration-300">
              <span className="text-[10px] text-blue-600 dark:text-blue-400 font-mono tracking-widest uppercase font-semibold flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" /> Design Environments
              </span>
              <h3 className="text-xl font-sans font-bold text-text-main tracking-tight transition-colors duration-300">
                Software Proficiency
              </h3>
            </div>

            <div className="space-y-6">
              {softwareSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-sans font-semibold text-text-main transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span
                      className="text-xs font-mono font-bold"
                      style={{ color: skill.color }}
                    >
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Progress Container */}
                  <div className="h-2.5 w-full bg-bg-alt rounded-full overflow-hidden border border-border-main relative transition-colors duration-300">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.1 }}
                      className="h-full rounded-full relative"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                        boxShadow: `0 0 8px ${skill.color}30`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-pill-bg border border-border-main flex items-start gap-3 mt-8 transition-colors duration-300">
              <Layers className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
              <div className="text-xs text-text-muted leading-relaxed transition-colors duration-300">
                <span className="font-semibold text-text-main block mb-0.5 transition-colors duration-300">Vector Precision:</span>
                I maintain meticulous layers, component structures, and anchor grids in Figma and Illustrator to prepare final files for front-end integration.
              </div>
            </div>
          </div>

          {/* Column 2: Creative Crafts - Circular Progress Gauges (Logo, Poster, Social Media) */}
          <div className="lg:col-span-6 space-y-8 text-left bg-card-bg border border-border-main rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-colors duration-300">
            <div className="space-y-1.5 border-b border-border-main pb-4 transition-colors duration-300">
              <span className="text-[10px] text-orange-600 dark:text-orange-400 font-mono tracking-widest uppercase font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Craft Specializations
              </span>
              <h3 className="text-xl font-sans font-bold text-text-main tracking-tight transition-colors duration-300">
                Design Focus Areas
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {designSkills.map((skill, index) => {
                // Calculate circle properties
                const radius = 38;
                const circumference = 2 * Math.PI * radius;
                const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

                return (
                  <div
                    key={skill.name}
                    className="p-5 rounded-2xl bg-bg-alt border border-border-main hover:bg-pill-bg hover:scale-[1.01] transition-all duration-300 flex flex-col items-center justify-center text-center space-y-4 group"
                  >
                    {/* SVG Circular Ring */}
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        {/* Background track */}
                        <circle
                          cx="48"
                          cy="48"
                          r={radius}
                          className="stroke-neutral-200 dark:stroke-neutral-800 fill-transparent transition-colors duration-300"
                          strokeWidth="6"
                        />
                        {/* Animated progress circle */}
                        <motion.circle
                          cx="48"
                          cy="48"
                          r={radius}
                          className="fill-transparent"
                          strokeWidth="6"
                          strokeLinecap="round"
                          stroke={skill.color}
                          initial={{ strokeDashoffset: circumference }}
                          whileInView={{ strokeDashoffset }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.15 }}
                          style={{
                            strokeDasharray: circumference,
                            filter: `drop-shadow(0 0 4px ${skill.color}30)`,
                          }}
                        />
                      </svg>
                      {/* Percent overlay in center */}
                      <span className="absolute text-sm font-mono font-bold text-text-main group-hover:scale-110 transition-all duration-300">
                        {skill.percentage}%
                      </span>
                    </div>

                    <span className="text-xs sm:text-sm font-sans font-bold text-text-muted leading-tight transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-pill-bg border border-border-main flex items-start gap-3 transition-colors duration-300">
              <Award className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <div className="text-xs text-text-muted leading-relaxed transition-colors duration-300">
                <span className="font-semibold text-text-main block mb-0.5 transition-colors duration-300">Campaign Cohesion:</span>
                My focus lies in structuring advertisements and social layouts to ensure consistent tone of voice, visual weight hierarchy, and a premium finish.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
