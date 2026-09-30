"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

const COLORS = ["#e8a0a0", "#f0d060", "#7bc67e", "#d4a5c9"];

type Particle = {
  id: number;
  left: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
};

export function ParticleField() {
  const reduce = useReducedMotion();

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${8 + (i * 5) % 84}%`,
      size: 4 + (i % 3) * 2,
      color: COLORS[i % COLORS.length],
      duration: 6 + (i % 5) * 1.2,
      delay: (i % 7) * 0.4,
    }));
  }, []);

  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full opacity-70"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            top: "-2%",
          }}
          animate={{ y: ["0vh", "105vh"], x: [0, (p.id % 2 === 0 ? 12 : -12), 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
