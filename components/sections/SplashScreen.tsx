"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type SplashScreenProps = {
  sealNames: string;
  cta: string;
  onEnter: () => void;
  transitioning: boolean;
};

export function SplashScreen({ sealNames, cta, onEnter, transitioning }: SplashScreenProps) {
  return (
    <motion.div
      className="invite-texture fixed inset-0 z-40 flex flex-col items-center justify-center px-6"
      animate={transitioning ? { opacity: 0, scale: 1.05 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative mx-auto w-full max-w-sm">
        <div className="relative aspect-[4/5] w-full">
          <div className="absolute inset-0 rounded-sm bg-white/80 shadow-2xl" />
          <div className="absolute inset-x-6 top-8 h-32 bg-gradient-to-b from-rose-100/80 to-transparent" />
          <Image
            src="/assets/splash/florals.svg"
            alt=""
            width={320}
            height={200}
            className="absolute left-0 right-0 top-4 mx-auto w-[85%]"
            priority
          />
          <div className="absolute inset-x-8 top-[38%] h-24 border border-cream-dark bg-white shadow-inner" />
          <motion.div
            className="absolute left-1/2 top-[52%] flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#f0d4c0] to-[#d4a88a] shadow-lg ring-4 ring-gold/30"
            animate={transitioning ? { scale: 1.2, opacity: 0 } : { scale: 1 }}
          >
            <p className="font-script text-center text-lg leading-tight text-burgundy-dark px-2">
              {sealNames}
            </p>
          </motion.div>
        </div>
      </div>

      <button
        type="button"
        onClick={onEnter}
        disabled={transitioning}
        className="mt-10 rounded-full bg-rose-200/90 px-8 py-3 font-caps text-[11px] tracking-[0.25em] text-burgundy shadow-md transition hover:bg-rose-200 disabled:opacity-60"
      >
        ✨ {cta} ✨
      </button>
    </motion.div>
  );
}
