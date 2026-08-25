'use client';

import React from 'react';
import { 
  Layers, 
  Layers3, 
  Target,
  ChevronRight
} from 'lucide-react';

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

export default function PavingRiserClassification() {
  return (
    <section className="relative bg-zinc-50 text-slate-900 py-6 border-t border-b border-gray-200 overflow-hidden font-sans">
      
      {/* Premium Light Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CC0000]/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="w-full px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#CC0000]/10 border border-[#CC0000]/20 rounded-full text-xs font-black uppercase tracking-[0.25em] text-[#CC0000]">
            <Layers className="w-4 h-4" /> Product Range
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            The types of risers <br />
            <span className="text-[#CC0000]">we make.</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Every job site demands a specific installation blueprint. We manufacture custom solutions grouped by material and mechanical design.
          </p>
        </div>

        {/* --- THREE-COLUMN PREMIUM CLASSIFICATION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto">
          
          {/* BRANCH 1: BY MATERIAL */}
          <div className="relative group rounded-2xl bg-[#111111] border border-transparent shadow-xl p-8 md:p-10 hover:border-[#CC0000]/40 hover:shadow-[0_10px_40px_rgba(204,0,0,0.15)] transition-all duration-500 flex flex-col h-full overflow-hidden">
            {/* Top red accent line */}
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#CC0000] group-hover:w-full transition-all duration-700 ease-out"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#CC0000] group-hover:scale-110 group-hover:bg-[#CC0000] group-hover:text-white transition-all duration-500">
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
                  <li key={idx} className="flex items-center gap-4 group/item">
                    <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover/item:bg-[#CC0000] group-hover/item:shadow-[0_0_10px_rgba(204,0,0,0.8)] transition-all duration-300"></div>
                    <span className="text-lg font-bold text-zinc-300 group-hover/item:text-white transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BRANCH 2: BY DESIGN */}
          <div className="relative group rounded-2xl bg-[#111111] border border-transparent shadow-xl p-8 md:p-10 hover:border-[#CC0000]/40 hover:shadow-[0_10px_40px_rgba(204,0,0,0.15)] transition-all duration-500 flex flex-col h-full overflow-hidden md:-translate-y-8">
            {/* Top red accent line */}
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#CC0000] group-hover:w-full transition-all duration-700 ease-out"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#CC0000] group-hover:scale-110 group-hover:bg-[#CC0000] group-hover:text-white transition-all duration-500">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-1">
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
                  <li key={idx} className="flex items-center gap-4 group/item">
                    <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover/item:bg-[#CC0000] group-hover/item:shadow-[0_0_10px_rgba(204,0,0,0.8)] transition-all duration-300"></div>
                    <span className="text-lg font-bold text-zinc-300 group-hover/item:text-white transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BRANCH 3: BY APPLICATION */}
          <div className="relative group rounded-2xl bg-[#111111] border border-transparent shadow-xl p-8 md:p-10 hover:border-[#CC0000]/40 hover:shadow-[0_10px_40px_rgba(204,0,0,0.15)] transition-all duration-500 flex flex-col h-full overflow-hidden">
            {/* Top red accent line */}
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#CC0000] group-hover:w-full transition-all duration-700 ease-out"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#CC0000] group-hover:scale-110 group-hover:bg-[#CC0000] group-hover:text-white transition-all duration-500">
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
                  <li key={idx} className="flex items-center gap-4 group/item">
                    <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover/item:bg-[#CC0000] group-hover/item:shadow-[0_0_10px_rgba(204,0,0,0.8)] transition-all duration-300"></div>
                    <span className="text-lg font-bold text-zinc-300 group-hover/item:text-white transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}