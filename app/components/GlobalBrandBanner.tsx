'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GlobalBrandBanner() {
  return (
    <section className="relative w-full py-6 lg:py-8 bg-white overflow-hidden font-sans border-y border-zinc-200">
      
      {/* Background Animated Map / Grid Graphic - Softened */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.015] pointer-events-none overflow-hidden">
        {/* Simplified, non-dashed pattern to prevent visual noise/moire effect */}
        <div className="w-[150vw] h-[150vw] border-[1px] border-black rounded-full absolute mix-blend-multiply"></div>
        <div className="w-[100vw] h-[100vw] border-[1px] border-black rounded-full absolute mix-blend-multiply"></div>
        <div className="w-[50vw] h-[50vw] border-[1px] border-black rounded-full absolute mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 px-10 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Massive Editorial Typography */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-16 h-2 bg-[#CC0000] mb-8"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-slate-900"
          >
            Aspiring <br />
            to be the <br />
            world <br />
            supplier of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#CC0000] to-red-600 drop-shadow-sm">Paving Risers.</span>
          </motion.h2>
        </div>

        {/* Right Column: Abstract Global Graphic & Tagline */}
        <div className="lg:col-span-4 relative flex flex-col items-start lg:items-end justify-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "anticipate" }}
            viewport={{ once: true }}
            className="relative w-48 h-48 md:w-64 md:h-64 mb-8"
          >
            {/* Softened abstract geometric globe representation */}
            <div className="absolute inset-0 rounded-full border-[8px] border-[#CC0000] animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border-[2px] border-slate-300 border-dashed animate-[spin_60s_linear_infinite_reverse]" />
            <div className="absolute inset-6 rounded-full border-[4px] border-slate-900 border-t-transparent animate-[spin_35s_linear_infinite]" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-black text-slate-900">US</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-left lg:text-right"
          >
            <span className="block text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
              A Global
            </span>
            <span className="block text-3xl md:text-5xl font-black uppercase tracking-tight text-[#CC0000]">
              Brand.
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
