import { ArrowUp, Layers, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-bg-alt border-t border-border-main py-12 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Signature */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-pill-bg border border-border-main flex items-center justify-center">
            <Layers className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-left">
            <span className="font-bold text-text-main text-sm tracking-tight block transition-colors duration-300">
              Bishoj Basnet
            </span>
            <span className="text-[10px] text-text-muted font-mono tracking-wider uppercase block transition-colors duration-300">
              Graphic Design © {new Date().getFullYear()}
            </span>
          </div>
        </div>

        {/* Center Credits */}
        <div className="flex items-center gap-1.5 text-xs text-text-muted font-sans transition-colors duration-300">
          <span>Designed with form, function, & digital magic</span>
          <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500 animate-pulse" />
          <span>in Nepal</span>
        </div>

        {/* Right back-to-top control */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-pill-bg border border-border-main text-text-muted hover:text-text-main hover:bg-pill-bg/80 transition-all focus:outline-none cursor-pointer shadow-sm"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
