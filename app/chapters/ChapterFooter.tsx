'use client';

import ScrollReveal from '../components/ScrollReveal';

export default function ChapterFooter() {
  const navLinks = [
    { label: 'GITHUB', href: '#' },
    { label: 'LINKEDIN', href: '#' },
    { label: 'JOURNAL', href: '/blog/' },
    { label: 'PRODUCTS', href: '/products/' },
    { label: 'CASE STUDIES', href: '/case-studies/' },
    { label: 'CONTACT', href: '/contact/' },
  ];

  return (
    <footer className="chapter py-20 border-t border-white/5">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <ScrollReveal delay={0.1}>
              <div className="font-[var(--font-display)] text-xl text-white mb-2">
                Maritime Systems Architect
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="label-mono mb-6">
                <span className="text-[var(--radar-green)] animate-pulse">●</span> ALL SYSTEMS NOMINAL
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-sm text-white/40 max-w-md leading-relaxed">
                Naval Architect with 14 years of maritime industry experience.
                Builder of LAYAR and MarineOS. Based in Singapore.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7 flex flex-col md:items-end">
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 mb-12">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="label-mono text-white/40 hover:text-[var(--electric-cyan)] transition-colors duration-500 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--electric-cyan)] transition-all duration-500 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="label-mono text-white/20 text-right">
                <div>VER: 1.0.0-ALPHA</div>
                <div>DEPLOY: VERCEL EDGE</div>
                <div>STACK: NEXT.JS 14 / TAILWIND / TYPESCRIPT / THREE.JS</div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center">
            <div className="label-mono text-white/20">
              © 2026 MARITIME SYSTEMS ARCHITECT
            </div>
            <div className="label-mono text-white/20">
              BUILT WITH INTENTION
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
