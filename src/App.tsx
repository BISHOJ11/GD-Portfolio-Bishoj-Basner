import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('bishoj_portfolio_theme');
    return saved !== 'light'; // default is dark theme
  });

  // Track page scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync theme to document element class and localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('bishoj_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('bishoj_portfolio_theme', 'light');
    }
  }, [isDark]);

  // Scrollspy: automatically update active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the sweet spot of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Don't clear immediately to allow exit animation to play smoothly
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <div className="bg-bg-main text-text-main min-h-screen selection:bg-purple-600 selection:text-white transition-colors duration-300">
      {/* Custom Animated Cursor */}
      <CustomCursor />

      {/* Slim Gradient Scroll Progress Bar */}
      <div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 z-[100] transition-all duration-75 ease-out shadow-[0_2px_10px_rgba(168,85,247,0.3)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky Top Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} isDark={isDark} setIsDark={setIsDark} />

      {/* Main Sections */}
      <main>
        {/* Hero Landing */}
        <Hero
          onViewProjects={() => handleScrollToSection('projects')}
          onContactMe={() => handleScrollToSection('contact')}
        />

        {/* Story & Personal Info */}
        <About />

        {/* Dynamic Portfolio Grid */}
        <Projects onSelectProject={handleSelectProject} />

        {/* Circular & Linear Skills gauges */}
        <Skills />

        {/* Persistent Form & Local Submissions panel */}
        <Contact />
      </main>

      {/* Case Study Detail Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Bottom Footer Credits */}
      <Footer />
    </div>
  );
}
