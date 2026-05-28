'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface OceanParticlesProps {
  count?: number;
  density?: 'dense' | 'sparse' | 'minimal';
}

export default function OceanParticles({
  count = 200,
  density = 'dense',
}: OceanParticlesProps) {
  const meshRef = useRef<THREE.Points>(null);

  const densityMultiplier = {
    dense: 1,
    sparse: 0.4,
    minimal: 0.2,
  };

  const actualCount = Math.floor(count * densityMultiplier[density]);

  const { positions, colors, sizes, speeds } = useMemo(() => {
    const positions = new Float32Array(actualCount * 3);
    const colors = new Float32Array(actualCount * 3);
    const sizes = new Float32Array(actualCount);
    const speeds = new Float32Array(actualCount);

    const colorPalette = [
      new THREE.Color('#00d4ff'),
      new THREE.Color('#00ff88'),
      new THREE.Color('#4da6ff'),
    ];

    for (let i = 0; i < actualCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 0.05 + 0.01;
      speeds[i] = Math.random() * 0.3 + 0.1;
    }

    return { positions, colors, sizes, speeds };
  }, [actualCount]);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const positionArray = meshRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < actualCount; i++) {
      const i3 = i * 3;
      const speed = speeds[i];

      positionArray[i3] += Math.sin(time * speed + i * 0.5) * 0.002;
      positionArray[i3 + 1] += Math.cos(time * speed * 0.7 + i * 0.3) * 0.001 + 0.0005;
      positionArray[i3 + 2] += Math.sin(time * speed * 0.5 + i * 0.7) * 0.001;

      if (positionArray[i3 + 1] > 8) positionArray[i3 + 1] = -8;
      if (positionArray[i3] > 10) positionArray[i3] = -10;
      if (positionArray[i3] < -10) positionArray[i3] = 10;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={actualCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={actualCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
