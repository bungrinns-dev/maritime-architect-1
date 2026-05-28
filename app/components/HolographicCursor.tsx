'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function HolographicCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  const glowSpringConfig = { stiffness: 50, damping: 20, mass: 0.5 };
  const glowX = useSpring(0, glowSpringConfig);
  const glowY = useSpring(0, glowSpringConfig);

  useEffect(() => {
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      glowX.set(e.clientX);
      glowY.set(e.clientY);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], .interactive');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleElementHover);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleElementHover);
    };
  }, [cursorX, cursorY, glowX, glowY, isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-screen"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className={`rounded-full transition-all duration-500 ${
            isHovering ? 'w-24 h-24 opacity-20' : 'w-16 h-16 opacity-10'
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4), transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            isHovering
              ? 'w-12 h-12 border-[var(--electric-cyan)] opacity-60'
              : 'w-8 h-8 border-white/30 opacity-40'
          }`}
          style={{ borderWidth: '1px' }}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className={`rounded-full bg-[var(--electric-cyan)] transition-all duration-200 ${
            isHovering ? 'w-1.5 h-1.5' : 'w-1 h-1'
          }`}
          style={{
            boxShadow: '0 0 6px rgba(0, 212, 255, 0.8)',
          }}
        />
      </motion.div>
    </>
  );
}