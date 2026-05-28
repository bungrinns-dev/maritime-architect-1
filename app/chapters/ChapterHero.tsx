'use client';

import { useEffect, useRef, lazy, Suspense } from 'react';
import { gsap } from 'gsap';

const Scene3D = lazy(() => import('../components/Scene3D'));

export default function ChapterHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
          duration: 1.2,
        },
      });

      tl.fromTo(stripRef.current, { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, 0.3);
      tl.fromTo(labelRef.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0 }, 0.6);

      const headlineLines = headlineRef.current?.querySelectorAll('span');
      if (headlineLines) {
        tl.fromTo(
          headlineLines,
          { opacity: 0, y: 80, skewY: 3 },
          { opacity: 1, y: 0, skewY: 0, stagger: 0.2 },
          0.9
        );
      }

      tl.fromTo(subtextRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, 1.4);

      const badges = badgesRef.current?.children;
      if (badges) {
        tl.fromTo(
          badges,
          { opacity: 0, scale: 0.9, y: 20 },
          { opacity: 1, scale: 1, y: 0, stagger: 0.15 },
          1.7
        );
      }

      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        2.2
      );

      gsap.to(scrollIndicatorRef.current?.querySelector('.pulse-line'), {
        opacity: 0.2,
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="chapter relative min-h-screen flex flex-col justify-between tactical-grid overflow-hidden"
    >
      <Suspense fallback={null}>
        <Scene3D variant="hero" />
      </Suspense>

      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0, 212, 255, 0.04) 0%, transparent 70%)',
        }}
      />

      <div
        ref={stripRef}
        className="container-narrow relative z-10 pt-8 flex justify-between items-start opacity-0"
      >
        <div className="label-mono">
          <span className="text-[var(--electric-cyan)] animate-pulse">●</span> SYSTEM ONLINE
        </div>
        <div className="label-mono text-right">
          <div>LAT: 01.35°N</div>
          <div>LON: 103.82°E</div>
        </div>
      </div>

      <div className="container-narrow relative z-10 flex-1 flex flex-col justify-center py-20">
        <div ref={labelRef} className="label-mono mb-6 flex items-center gap-3 opacity-0">
          <span className="w-8 h-px bg-[var(--electric-cyan)] opacity-40" />
          NAVAL ARCHITECT — 14 YEARS
        </div>

        <h1 ref={headlineRef} className="display-hero mb-8">
          <span className="block text-white opacity-0">Maritime Systems</span>
          <span className="block text-gradient-cyan glow-cyan opacity-0">Architect</span>
        </h1>

        <p ref={subtextRef} className="body-large max-w-2xl opacity-0">
          Exploring the intersection of{' '}
          <span className="text-[var(--electric-cyan)]">operations</span>,{' '}
          <span className="text-[var(--radar-green)]">artificial intelligence</span>, and{' '}
          <span className="text-white">digital infrastructure</span> for the maritime industry.
        </p>

        <div ref={badgesRef} className="mt-12 flex flex-wrap gap-4">
          <div className="holographic-edge border-tactical rounded px-5 py-3 bg-[var(--surface)] opacity-0">
            <div className="label-mono text-[var(--electric-cyan)] mb-1">PRODUCT</div>
            <div className="font-[var(--font-display)] text-white font-medium">LAYAR</div>
          </div>
          <div className="holographic-edge border-tactical rounded px-5 py-3 bg-[var(--surface)] opacity-0">
            <div className="label-mono text-[var(--radar-green)] mb-1">PLATFORM</div>
            <div className="font-[var(--font-display)] text-white font-medium">MarineOS</div>
          </div>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="container-narrow relative z-10 pb-12 flex items-center gap-4 opacity-0"
      >
        <div className="pulse-line w-px h-12 bg-gradient-to-b from-[var(--electric-cyan)] to-transparent opacity-40" />
        <div className="label-mono">SCROLL TO EXPLORE</div>
      </div>
    </section>
  );
}
