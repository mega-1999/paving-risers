'use client';

import React from 'react';
import { 
  Layers, 
  Layers3, 
  Target,
  ChevronRight
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const MATERIAL_OPTIONS = [
  "Cast Iron",
  "Ductile Iron",
  "Mild Steel",
  "Stainless Steel",
  "Aluminium",
  "FRP"
];

const DESIGN_OPTIONS = [
  "Fixed / Solid Riser",
  "Adjustable Riser",
  "Stackable Riser"
];

const APPLICATION_OPTIONS = [
  "Manhole Risers",
  "Catch Basin Risers",
  "Curb Inlet Risers",
  "Valve Box Risers"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function PavingRiserClassification() {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 border-t border-b border-white/5 overflow-hidden font-sans">
      
      {/* Premium Dark Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CC0000]/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="w-full px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6 mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#CC0000]/10 border border-[#CC0000]/20 rounded-full text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] shadow-[0_0_20px_rgba(204,0,0,0.2)]">
            <Layers className="w-4 h-4" /> Product Range
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            The types of risers <br />
            <span className="text-[#CC0000]">we make.</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Every job site demands a specific installation blueprint. We manufacture custom solutions grouped by material and mechanical design.
          </p>
        </motion.div>

        {/* --- THREE-COLUMN PREMIUM CLASSIFICATION --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          
          {/* BRANCH 1: BY MATERIAL */}
          <motion.div variants={cardVariants} className="relative group rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-white/10 shadow-2xl p-8 md:p-10 hover:border-[#CC0000]/50 hover:bg-zinc-900/60 transition-all duration-500 flex flex-col h-full overflow-hidden">
            {/* Top red accent line */}
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#CC0000] group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_15px_#CC0000]"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#CC0000] group-hover:scale-110 group-hover:bg-[#CC0000] group-hover:text-white group-hover:border-[#CC0000] group-hover:shadow-[0_0_20px_rgba(204,0,0,0.4)] transition-all duration-500">
                <Layers3 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-1">
                  Composition Matrix
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight text-white">
                  By Material
                </h3>
              </div>
            </div>

            <div className="flex-grow flex flex-col justify-center">
              <ul className="space-y-4">
                {MATERIAL_OPTIONS.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group/item cursor-default">
                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-[#CC0000] group-hover/item:border-[#CC0000] group-hover/item:shadow-[0_0_10px_rgba(204,0,0,0.6)] transition-all duration-300">
                      <ChevronRight className="w-3 h-3 text-zinc-600 group-hover/item:text-white group-hover/item:translate-x-[1px] transition-all duration-300" />
                    </div>
                    <span className="text-lg font-bold text-zinc-400 group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* BRANCH 2: BY DESIGN (Elevated Center Card) */}
          <motion.div variants={cardVariants} className="relative group rounded-2xl bg-[#0F0F0F]/80 backdrop-blur-xl border border-white/10 shadow-2xl p-8 md:p-10 hover:border-[#CC0000]/50 hover:bg-[#111111] transition-all duration-500 flex flex-col h-full overflow-hidden md:-translate-y-8 z-10">
            {/* Top red accent line */}
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#CC0000] group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_15px_#CC0000]"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-[#CC0000]/10 border border-[#CC0000]/30 flex items-center justify-center text-[#CC0000] group-hover:scale-110 group-hover:bg-[#CC0000] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(204,0,0,0.4)] transition-all duration-500">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#CC0000] block mb-1">
                  Mechanical Framework
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight text-white">
                  By Design
                </h3>
              </div>
            </div>

            <div className="flex-grow flex flex-col justify-center">
              <ul className="space-y-4">
                {DESIGN_OPTIONS.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group/item cursor-default">
                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-[#CC0000] group-hover/item:border-[#CC0000] group-hover/item:shadow-[0_0_10px_rgba(204,0,0,0.6)] transition-all duration-300">
                      <ChevronRight className="w-3 h-3 text-zinc-600 group-hover/item:text-white group-hover/item:translate-x-[1px] transition-all duration-300" />
                    </div>
                    <span className="text-lg font-bold text-zinc-400 group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* BRANCH 3: BY APPLICATION */}
          <motion.div variants={cardVariants} className="relative group rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-white/10 shadow-2xl p-8 md:p-10 hover:border-[#CC0000]/50 hover:bg-zinc-900/60 transition-all duration-500 flex flex-col h-full overflow-hidden">
            {/* Top red accent line */}
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#CC0000] group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_15px_#CC0000]"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#CC0000] group-hover:scale-110 group-hover:bg-[#CC0000] group-hover:text-white group-hover:border-[#CC0000] group-hover:shadow-[0_0_20px_rgba(204,0,0,0.4)] transition-all duration-500">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-1">
                  Utility Type
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight text-white">
                  Application
                </h3>
              </div>
            </div>

            <div className="flex-grow flex flex-col justify-center">
              <ul className="space-y-4">
                {APPLICATION_OPTIONS.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group/item cursor-default">
                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-[#CC0000] group-hover/item:border-[#CC0000] group-hover/item:shadow-[0_0_10px_rgba(204,0,0,0.6)] transition-all duration-300">
                      <ChevronRight className="w-3 h-3 text-zinc-600 group-hover/item:text-white group-hover/item:translate-x-[1px] transition-all duration-300" />
                    </div>
                    <span className="text-lg font-bold text-zinc-400 group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}