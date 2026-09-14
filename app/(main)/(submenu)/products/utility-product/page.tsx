'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Zap,
  Radio,
  Wifi,
  Construction,
  ShieldAlert,
  HardHat,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const FINISHES = [
  { name: 'Standard Raw', image: `/images/catch_basin_riser/square_catch_basin_riser_iron.png` },
  { name: 'Coated Black', image: `/images/catch_basin_riser/square_catch_basin_riser_coated.png` },
  { name: 'Solid Cast Iron', image: `/images/catch_basin_riser/square_catch_basin_riser_iron.png` },
];

export default function UtilityProductsPage() {
  const [activeFinish, setActiveFinish] = useState(FINISHES[0]);

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white overflow-hidden selection:bg-[#CC0000] selection:text-white pb-32">
      
      {/* MASSIVE BACKGROUND TYPOGRAPHY */}
      <div className="fixed top-24 left-0 w-full overflow-hidden pointer-events-none z-0 flex items-center justify-center opacity-5">
        <h1 className="text-[20vw] font-black uppercase tracking-tighter text-white whitespace-nowrap">
          UTILITY
        </h1>
      </div>

      <div className="relative z-10 w-full px-10 md:px-20 pt-32">
        
        {/* --- MAGAZINE HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-1 bg-[#CC0000]" />
              <span className="text-sm font-black uppercase tracking-widest text-[#CC0000]">Underground Infrastructure</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Telecom & Gas <br />
              <span className="text-zinc-500">Utility Risers</span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-zinc-400 font-medium leading-relaxed">
              Engineered specifically for non-drainage underground utilities. Protect fiber optics, gas valves, and electrical junctions during road resurfacing.
            </p>
          </div>
        </div>

        {/* --- MAIN PRODUCT SHOWCASE (Asymmetrical Split) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
          
          {/* Product Image Area */}
          <div className="lg:col-span-8 bg-[#111] rounded-sm p-12 md:p-24 relative group border border-white/5 shadow-2xl overflow-hidden min-h-[500px] flex items-center justify-center">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
            
            <Image
              key={activeFinish.name}
              src={activeFinish.image}
              alt={`Utility Product - ${activeFinish.name}`}
              fill
              className="object-contain p-12 lg:p-24 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-10 transition-all duration-700 hover:scale-105 hover:-translate-y-4"
              priority
            />

            <div className="absolute bottom-8 left-8 z-20">
              <div className="bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-sm text-xs font-mono font-bold tracking-widest text-zinc-300">
                MODEL // {activeFinish.name.toUpperCase()}
              </div>
            </div>
          </div>

          {/* Finishes & Actions Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="bg-[#111] rounded-sm border border-white/5 p-8 flex-1">
              <h3 className="text-xl font-black uppercase tracking-widest mb-8 pb-4 border-b border-white/10">Material Configuration</h3>
              
              <div className="space-y-4">
                {FINISHES.map((finish, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFinish(finish)}
                    className={`w-full flex items-center justify-between p-4 border transition-all duration-300 ${
                      activeFinish.name === finish.name 
                        ? 'border-[#CC0000] bg-[#CC0000]/10 text-white' 
                        : 'border-white/10 hover:border-white/30 text-zinc-400'
                    }`}
                  >
                    <span className="font-bold uppercase tracking-wider text-sm">{finish.name}</span>
                    {activeFinish.name === finish.name && <div className="w-2 h-2 bg-[#CC0000] rounded-full" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#CC0000] rounded-sm p-8 group hover:bg-white transition-colors duration-500 cursor-pointer">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-black mb-4 transition-colors">
                Request Field Specs
              </h3>
              <p className="text-white/80 group-hover:text-black/70 text-sm font-medium mb-8 transition-colors">
                Get immediate access to DOT-approved utility dimension sheets and load test data.
              </p>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:translate-x-4 transition-transform duration-300">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* --- MAGAZINE GRID (Features) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-zinc-900 border border-white/5 p-8 rounded-sm hover:-translate-y-2 transition-transform duration-300">
            <Zap className="w-8 h-8 text-[#CC0000] mb-6" />
            <h4 className="text-xl font-black uppercase tracking-wide mb-3">Electrical Junctions</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Safely elevate electrical pull boxes and junction covers. Manufactured to exact dimensions to prevent cover rattling and maintain a perfect flush seal with new asphalt.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-8 rounded-sm hover:-translate-y-2 transition-transform duration-300">
            <Radio className="w-8 h-8 text-[#CC0000] mb-6" />
            <h4 className="text-xl font-black uppercase tracking-wide mb-3">Telecom & Fiber</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Protect critical communication infrastructure during road work. Our solid iron utility risers ensure expensive fiber optic vaults are never paved over or damaged by heavy equipment.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-8 rounded-sm hover:-translate-y-2 transition-transform duration-300">
            <ShieldAlert className="w-8 h-8 text-[#CC0000] mb-6" />
            <h4 className="text-xl font-black uppercase tracking-wide mb-3">Gas Mains</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Gas valve boxes require precision access. We fabricate custom square and round utility risers that slip directly into existing frames, ensuring immediate access for emergency gas shutoffs.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
