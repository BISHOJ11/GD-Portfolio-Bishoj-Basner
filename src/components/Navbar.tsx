import { useState, useEffect } from 'react';
import { Menu, X, Layers, Briefcase, User, Award, Mail, Sparkles, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function Navbar({ activeSection, setActiveSection, isDark, setIsDark }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-header-bg backdrop-blur-md border-b border-border-main py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
          id="nav-logo-btn"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-orange-500 p-[1.5px] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
            <div className="w-full h-full bg-bg-main rounded-[10px] flex items-center justify-center transition-colors duration-300">
              <Layers className="w-5 h-5 text-blue-500 group-hover:text-purple-500 transition-colors duration-300" />
            </div>
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-600 to-orange-500 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300" />
          </div>
          <div>
            <span className="font-sans font-bold text-lg tracking-tight text-text-main transition-colors duration-300">
              Bishoj Basnet
            </span>
            <span className="block text-[10px] text-text-muted tracking-widest uppercase font-mono transition-colors duration-300">
              Portfolio
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-card-bg border border-border-main rounded-full p-1.5 backdrop-blur-sm transition-colors duration-300">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-item-desktop-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 flex items-center gap-2 focus:outline-none ${
                  isActive
                    ? 'text-text-main font-semibold'
                    : 'text-text-muted hover:text-text-main'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110 text-blue-500' : 'group-hover:scale-110'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-full border border-border-main bg-card-bg text-text-main hover:bg-pill-bg hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none shadow-sm cursor-pointer flex items-center justify-center"
            id="desktop-theme-toggle"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-amber-500" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600" />
            )}
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            id="nav-cta-contact"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-text-main rounded-full group bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 hover:text-white focus:outline-none transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] cursor-pointer"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-bg-main rounded-full group-hover:bg-opacity-0">
              Hire Bishoj
            </span>
          </button>
        </div>

        {/* Mobile menu and theme actions */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-xl bg-card-bg border border-border-main text-text-main hover:bg-pill-bg transition-all focus:outline-none"
            id="mobile-theme-toggle"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-amber-500" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-card-bg border border-border-main text-text-muted hover:text-text-main hover:bg-pill-bg transition-colors focus:outline-none"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 right-0 bg-header-bg backdrop-blur-lg border-b border-border-main shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-item-mobile-${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-orange-500/5 text-text-main border-l-4 border-blue-500'
                        : 'text-text-muted hover:text-text-main hover:bg-pill-bg'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-blue-500 font-semibold' : 'text-text-muted'}`} />
                    {item.label}
                  </button>
                );
              })}

              <button
                onClick={() => scrollToSection('contact')}
                id="nav-cta-mobile-contact"
                className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white text-center font-semibold shadow-lg hover:brightness-110 transition-all focus:outline-none cursor-pointer"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
