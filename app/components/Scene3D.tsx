'use client';

import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';

const OceanParticles = lazy(() => import('./OceanParticles'));
const HolographicGrid = lazy(() => import('./HolographicGrid'));

interface Scene3DProps {
  variant: 'hero' | 'products' | 'philosophy';
}

export default function Scene3D({ variant }: Scene3DProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 100,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      >
        <Suspense fallback={null}>
          {variant === 'hero' && (
            <>
              <OceanParticles count={200} />
              <HolographicGrid />
            </>
          )}
          {variant === 'products' && (
            <OceanParticles count={80} density="sparse" />
          )}
          {variant === 'philosophy' && (
            <OceanParticles count={50} density="minimal" />
          )}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
