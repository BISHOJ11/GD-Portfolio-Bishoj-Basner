import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverType, setHoverType] = useState<'none' | 'pointer' | 'project' | 'text'>('none');

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply spring physics for the outer ring delay
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const outerX = useSpring(cursorX, springConfig);
  const outerY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on touch devices for accessibility and smooth mobile scrolling
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Check if we're hovering over a project card
      const isProjectCard = target.closest('[id^="project-card-"]') || target.closest('.cursor-zoom-in');
      if (isProjectCard) {
        setHoverType('project');
        return;
      }

      // 2. Check for standard clickable CTA buttons, nav items, inputs, or interactive tags
      const isClickable = target.closest('button') || 
                          target.closest('a') || 
                          target.closest('input') || 
                          target.closest('textarea') ||
                          target.closest('[role="button"]') ||
                          target.closest('#desktop-theme-toggle') ||
                          target.closest('#mobile-theme-toggle') ||
                          window.getComputedStyle(target).cursor === 'pointer';

      if (isClickable) {
        setHoverType('pointer');
        return;
      }

      setHoverType('none');
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  // Custom styling states depending on what is being hovered
  const getOuterVariants = () => {
    switch (hoverType) {
      case 'project':
        return {
          width: 84,
          height: 84,
          backgroundColor: 'rgba(168, 85, 247, 0.15)', // semi-transparent purple
          borderColor: 'rgba(168, 85, 247, 0.4)',
          borderWidth: '1.5px',
        };
      case 'pointer':
        return {
          width: 50,
          height: 50,
          backgroundColor: 'rgba(59, 130, 246, 0.1)', // semi-transparent blue
          borderColor: 'rgba(59, 130, 246, 0.5)',
          borderWidth: '2px',
          scale: 1.1,
        };
      default:
        return {
          width: 28,
          height: 28,
          backgroundColor: 'transparent',
          borderColor: 'rgba(120, 120, 120, 0.4)',
          borderWidth: '1px',
          scale: 1,
        };
    }
  };

  const getInnerVariants = () => {
    switch (hoverType) {
      case 'project':
        return {
          scale: 0,
          opacity: 0,
        };
      case 'pointer':
        return {
          scale: 1.5,
          backgroundColor: '#a855f7', // purple dot
        };
      default:
        return {
          scale: 1,
          backgroundColor: '#3b82f6', // blue dot
        };
    }
  };

  return (
    <>
      {/* Outer Glow Ring (delayed/smooth spring follow) */}
      <motion.div
        id="custom-cursor-outer"
        style={{
          left: outerX,
          top: outerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={getOuterVariants()}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
        className="fixed pointer-events-none rounded-full z-[9999] flex items-center justify-center overflow-hidden"
      >
        {/* Floating text inside outer ring during project hover */}
        {hoverType === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono tracking-widest font-bold text-purple-500 uppercase select-none"
          >
            View
          </motion.span>
        )}
      </motion.div>

      {/* Inner Pin-point Dot (immediate follow) */}
      <motion.div
        id="custom-cursor-inner"
        style={{
          left: cursorX,
          top: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={getInnerVariants()}
        transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[10000] mix-blend-difference"
      />
    </>
  );
}
