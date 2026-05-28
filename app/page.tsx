'use client';

import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import ProgressBar from './components/ProgressBar';
import LoadingScreen from './components/LoadingScreen';
import HolographicCursor from './components/HolographicCursor';
import ChapterHero from './chapters/ChapterHero';
import ChapterIdentity from './chapters/ChapterIdentity';
import ChapterPhilosophy from './chapters/ChapterPhilosophy';
import ChapterFooter from './chapters/ChapterFooter';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <SmoothScroll>
          <HolographicCursor />
          <ProgressBar />
          <main className="relative holographic-cursor-active">
            <ChapterHero />
            <ChapterIdentity />
            <ChapterPhilosophy />
            <ChapterFooter />
          </main>
        </SmoothScroll>
      </div>
    </>
  );
}
