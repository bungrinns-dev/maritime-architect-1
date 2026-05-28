'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function HolographicGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);
  const planeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (gridRef.current) {
      gridRef.current.position.y = -3 + Math.sin(time * 0.3) * 0.2;
    }

    if (planeRef.current) {
      const material = planeRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.02 + Math.sin(time * 0.5) * 0.01;
    }
  });

  return (
    <group position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper
        ref={gridRef}
        args={[30, 30, '#00d4ff', '#1a1f2e']}
      />
      <mesh ref={planeRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.02}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
