'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Layers,
  ShieldCheck,
  Cog,
  Construction
} from 'lucide-react';

const FEATURE_BADGES = [
  { icon: <Layers className="w-4 h-4 text-[#CC0000]" />, title: "ADVANCED", subtitle: "SOLUTIONS" },
  { icon: <ShieldCheck className="w-4 h-4 text-[#CC0000]" />, title: "BUILT FOR", subtitle: "DURABILITY" },
  { icon: <Cog className="w-4 h-4 text-[#CC0000]" />, title: "RAPID", subtitle: "INSTALLATION" },
  { icon: <Construction className="w-4 h-4 text-[#CC0000]" />, title: "BUILT FOR", subtitle: "PERFORMANCE" },
];
const words = ["HARSH CONDITIONS", "ROUGH TERRAINS", "SPECIAL APPLICATIONS", "AIRPORTS", "SEAPORTS", "ICONIC PROJECTS", "SUPER STRUCTURES"];

export default function PavingPathHero() {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);
  if (!mounted) return null;

  return (
    <section className="relative w-full bg-zinc-50 overflow-hidden font-sans">
      <div className="w-full pl-10 md:pl-20 grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* --- LEFT COLUMN: BRAND TYPOGRAPHY & BADGES --- */}
        <div className="lg:col-span-8 py-6 lg:py-8 space-y-4 z-10">

          {/* Main Headline Stack */}
          <div className="space-y-1">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none"
            >
              <span className="text-[#0F0F0F]">PAVING</span>
              <span className="text-[#CC0000]">YOUR WAY</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2 mt-2 text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight"
            >
              <span className="text-[#0F0F0F]">FOR</span>
              <span className="bg-[#0F0F0F] text-white px-3 py-0.5 rounded-none inline-flex items-center gap-0.5">
                ANY SITUATION 
              </span>
              <span className="min-h-[1.2em] relative flex items-center">

                <span
                  className="text-transparent font-black select-none"
                  style={{
                    WebkitTextStroke: "1px #CC0000",
                  }}
                >
                  {words[index].substring(0, subIndex)}
                </span>

                {/* Typing Cursor Accent Indicator */}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-1.5 h-10 sm:h-8 md:h-10 bg-[#cc2221] ml-3 shrink-0 inline-block"
                />
              </span>
            </motion.div>
          </div>
          {/* Main Title Heading */}
          <h1 className="text-white font-black uppercase tracking-tighter leading-none">
            <span className="block text-xl sm:text-4xl md:text-5xl  font-black text-white">
            </span>
          </h1>
          {/* Feature Badges Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 border-t border-zinc-200"
          >
            {FEATURE_BADGES.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="shrink-0">{badge.icon}</div>
                <div className="text-xs font-black uppercase leading-tight tracking-wider text-[#0F0F0F]">
                  <div>{badge.title}</div>
                  <div className="text-zinc-500 font-bold">{badge.subtitle}</div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
        {/* --- RIGHT COLUMN: ANGLED BLACK & RED GRAPHIC WITH IMAGE --- */}
        <div className="lg:col-span-4 relative w-full overflow-hidden flex items-end justify-end">
          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full h-full flex items-center  justify-end z-20"
          >
            <Image  
              src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/branding/paving_hero.png`}
              alt="Paving Riser Manhole Cover Assembly"
              height={400}  
              width={500}
              style={{ width: "auto", height: "auto" }}
              className="object-contain object-right"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}