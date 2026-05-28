'use client';

import { lazy, Suspense } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer';
import TiltCard3D from '../components/TiltCard3D';

const Scene3D = lazy(() => import('../components/Scene3D'));

export default function ChapterIdentity() {
  const identityBlocks = [
    {
      label: 'FOUNDATION',
      accent: 'var(--electric-cyan)',
      glareColor: 'rgba(0, 212, 255, 0.15)',
      title: '14 Years in Maritime',
      body: 'Started as a Naval Architect, evolved into a systems thinker. Spent over a decade understanding how ships operate, how crews work, and where technology fails to serve the people who depend on it.',
    },
    {
      label: 'PRODUCTS',
      accent: 'var(--radar-green)',
      glareColor: 'rgba(0, 255, 136, 0.15)',
      title: 'LAYAR & MarineOS',
      body: 'Built maritime SaaS products from first principles. LAYAR for spatial intelligence. MarineOS for operational command. Not features bolted onto legacy systems — rebuilt from the hull up.',
    },
    {
      label: 'POSITIONING',
      accent: '#ffffff',
      glareColor: 'rgba(255, 255, 255, 0.1)',
      title: 'Not a Freelancer',
      body: 'This is not a portfolio of client work. This is a systems architecture practice. I build infrastructure that maritime operations will run on for the next decade. Strategic, deliberate, infrastructural.',
    },
  ];

  return (
    <section id="identity" className="chapter relative py-32">
      <Suspense fallback={null}>
        <Scene3D variant="products" />
      </Suspense>

      <div className="container-narrow mb-20 relative z-10">
        <ScrollReveal delay={0.1}>
          <div className="label-mono mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-white opacity-20" />
            CHAPTER 01 — IDENTITY
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <h2 className="display-section text-white max-w-3xl">
            Built from the{' '}
            <span className="text-gradient-cyan">keel up</span>
          </h2>
        </ScrollReveal>
      </div>

      <div className="container-narrow relative z-10">
        <StaggerContainer
          staggerDelay={0.2}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {identityBlocks.map((block, index) => (
            <StaggerItem key={index}>
              <TiltCard3D glareColor={block.glareColor} className="h-full">
                <div className="holographic-edge border-tactical rounded-lg p-8 bg-[var(--surface)] relative overflow-hidden group h-full transition-all duration-500 hover:border-white/20">
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-10 transition-opacity duration-700 group-hover:opacity-30"
                    style={{ backgroundColor: block.accent }}
                  />

                  <div className="relative z-10">
                    <div
                      className="label-mono mb-6 transition-colors duration-300"
                      style={{ color: block.accent }}
                    >
                      {block.label}
                    </div>
                    <h3 className="font-[var(--font-display)] text-2xl font-medium text-white mb-4 leading-tight">
                      {block.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/70">
                      {block.body}
                    </p>
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-30 transition-opacity duration-300 group-hover:opacity-60"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${block.accent}, transparent)`,
                    }}
                  />
                </div>
              </TiltCard3D>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
