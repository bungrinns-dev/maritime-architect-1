'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const BOOT_SEQUENCE = [
  'INITIALIZING NAVAL SYSTEMS...',
  'LOADING MARITIME DATABASE...',
  'CALIBRATING SONAR ARRAYS...',
  'ESTABLISHING SECURE LINK...',
  'SYSTEM ONLINE',
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let lineInterval: NodeJS.Timeout;

    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= BOOT_SEQUENCE.length - 1) {
          clearInterval(lineInterval);
          return BOOT_SEQUENCE.length - 1;
        }
        return prev + 1;
      });
    }, 600);

    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 800);
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(lineInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[var(--abyss)] flex flex-col items-center justify-center"
          exit={{
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
          }}
        >
          <div className="relative w-32 h-32 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-2 h-2 rounded-full bg-[var(--electric-cyan)]"
                style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)' }}
              />
            </div>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-[var(--electric-cyan)]"
                initial={{ scale: 0.3, opacity: 0.8 }}
                animate={{
                  scale: [0.3, 1.5],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>

          <div className="h-8 mb-8">
            <motion.div
              key={currentLine}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="label-mono text-[var(--electric-cyan)] text-center"
            >
              {BOOT_SEQUENCE[currentLine]}
            </motion.div>
          </div>

          <div className="w-64 h-px bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--electric-cyan)] to-[var(--radar-green)]"
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
              }}
            />
          </div>

          <div className="label-mono text-white/30 mt-4 text-xs">
            {Math.min(Math.round(progress), 100)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}