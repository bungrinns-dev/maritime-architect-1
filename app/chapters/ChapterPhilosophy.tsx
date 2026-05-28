'use client';

import { useEffect, useRef, lazy, Suspense } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '../components/ScrollReveal';

const Scene3D = lazy(() => import('../components/Scene3D'));

gsap.registerPlugin(ScrollTrigger);

export default function ChapterPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  const philosophies = [
    {
      chapter: '02',
      label: 'OPERATIONS FIRST',
      title: 'Technology must serve the deck, not the dashboard.',
      body: 'Most maritime software is built for shore-side managers. I build for the crew on the bridge, the superintendent in the engine room, the port captain under pressure. The interface fades. The operation flows.',
      accent: 'var(--electric-cyan)',
    },
    {
      chapter: '03',
      label: 'AI AS INFRASTRUCTURE',
      title: 'Artificial intelligence is not a feature. It is a layer.',
      body: 'AI in maritime should not be a chatbot or a gimmick. It should be the invisible nervous system of the vessel — predicting, optimizing, alerting — without demanding attention until attention is critical.',
      accent: 'var(--radar-green)',
    },
    {
      chapter: '04',
      label: 'DIGITAL SOVEREIGNTY',
      title: 'Your data belongs to your fleet, not to a platform.',
      body: 'Maritime data is strategic infrastructure. I design systems where the operator retains full ownership and control. No vendor lock-in. No black-box algorithms. Transparent, auditable, sovereign.',
      accent: '#ffffff',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = sectionRef.current?.querySelectorAll('.philosophy-block');

      blocks?.forEach((block) => {
        const accentBg = block.querySelector('.accent-bg');
        const chapterNum = block.querySelector('.chapter-number');

        if (accentBg) {
          gsap.to(accentBg, {
            y: -80,
            ease: 'none',
            scrollTrigger: {
              trigger: block,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        }

        if (chapterNum) {
          gsap.to(chapterNum, {
            y: 40,
            ease: 'none',
            scrollTrigger: {
              trigger: block,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="philosophy" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <Suspense fallback={null}>
          <Scene3D variant="philosophy" />
        </Suspense>
      </div>

      <div className="chapter py-32 relative z-10">
        <div className="container-narrow">
          <ScrollReveal delay={0.1}>
            <div className="label-mono mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-white opacity-20" />
              PHILOSOPHY
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h2 className="display-section text-white max-w-2xl">
              Principles that guide the{' '}
              <span className="text-[var(--radar-green)] glow-green">architecture</span>
            </h2>
          </ScrollReveal>
        </div>
      </div>

      {philosophies.map((phil, index) => (
        <div
          key={index}
          className="philosophy-block chapter min-h-[80vh] flex items-center relative overflow-hidden"
        >
          <div
            className="accent-bg absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 30% 50%, ${phil.accent}, transparent)`,
              opacity: 0.05,
            }}
          />

          <div className="container-narrow relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-4">
                <ScrollReveal delay={0.2} variant="fadeUp">
                  <div
                    className="chapter-number font-[var(--font-mono)] text-7xl lg:text-8xl font-light opacity-10 mb-4"
                    style={{ color: phil.accent }}
                  >
                    {phil.chapter}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4} variant="fadeUp">
                  <div className="label-mono" style={{ color: phil.accent }}>
                    {phil.label}
                  </div>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-8">
                <ScrollReveal delay={0.3} variant="fadeUp">
                  <h3 className="display-section text-white mb-8 leading-tight">
                    {phil.title}
                  </h3>
                </ScrollReveal>

                <ScrollReveal delay={0.5} variant="fadeUp">
                  <p className="body-large">{phil.body}</p>
                </ScrollReveal>

                <ScrollReveal delay={0.7} variant="fadeIn">
                  <div
                    className="mt-12 w-24 h-px opacity-40"
                    style={{ backgroundColor: phil.accent }}
                  />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
