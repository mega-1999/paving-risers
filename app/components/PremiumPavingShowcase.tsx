'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Maximize2, 
  Layers, 
  Flame, 
  Compass, 
  Grid, 
  ChevronRight 
} from 'lucide-react';

// --- PAVING INFRASTRUCTURE PRODUCT DATA ---
const SHOWCASE_PRODUCTS = [
  {
    id: "prod-1",
    index: "01",
    title: "Round Traffic Risers",
    overline: "MUNICIPAL STANDARD",
    tagline: "Precision Lift. Zero Excavation.",
    description: "The primary operational standard for structural manhole elevation adjustments. Engineered to prevent vertical shifting during high-velocity heavy vehicle traffic road overlays.",
    specLabel: "Load Class",
    specValue: "Paving Grade Rated",
    icon: <Grid className="w-5 h-5" />
  },
  {
    id: "prod-2",
    index: "02",
    title: "Paving-Adjust™ Expandable",
    overline: "NEXT-GEN ENGINEERING",
    tagline: "Mechanical Locking. No Mortar Bed.",
    description: "Features an integrated dual-expansion expansion linkage system that bites directly into the base frame structure, eliminating site settlement and asphalt cracking.",
    specLabel: "Cure Window",
    specValue: "Instant Traffic Ready",
    icon: <Layers className="w-5 h-5" />
  },
  {
    id: "prod-3",
    index: "03",
    title: "Tapered & Sloped Rings",
    overline: "ROAD CROWNING CORRECTION",
    tagline: "Flush Profiles. Anti-Plow Protection.",
    description: "Bespoke engineered sloped rings built to accommodate severe road crowns and localized drainage slope variations, completely eliminating dangerous plow blade snags.",
    specLabel: "Grade Fitment",
    specValue: "1% to 15%+ Variable",
    icon: <Compass className="w-5 h-5" />
  },
  {
    id: "prod-4",
    index: "04",
    title: "Square Drainage Casings",
    overline: "STORM WATER DEPLOYMENT",
    tagline: "High-Tensile Steel. Welded Corners.",
    description: "Heavy-duty perimeter framework developed to adjust square catch basin grates and highway shoulder curb inlets to final grade profiles effortlessly.",
    specLabel: "Material Core",
    specValue: "Reinforced Structural Steel",
    icon: <Maximize2 className="w-5 h-5" />
  }
];

export default function PremiumPavingShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProduct = SHOWCASE_PRODUCTS[activeIndex];

  return (
    <section className="bg-[#0F0F0F] text-white py-28 w-full px-10 md:px-20 font-sans relative overflow-hidden">
      {/* Structural Subtle Grid Pattern Mask using strict brand colors */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-40 pointer-events-none" />
      
      <div className="  space-y-16 relative z-10">
        
        {/* --- SECTION ENTRY HEADER BLOCK --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#1A1A1A] pb-12">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#CC0000] flex items-center gap-2">
              <Flame className="w-4 h-4 fill-current animate-pulse" /> Infrastructure Registry
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
              High-Performance <br />
              <span className="text-[#CC0000]">Paving Solutions.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-zinc-400 text-sm font-medium leading-relaxed">
              Cross-examine our premier line of heavy highway casting risers. Built with uncompromising structural integrity to handle continuous high-impact vehicular traffic loading vectors.
            </p>
          </div>
        </div>

        {/* --- CORE SHOWCASE SPLIT MATRIX PLATFORM --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT INTERACTIVE CONTROLLER CONSOLE (5 Columns Wide) */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {SHOWCASE_PRODUCTS.map((product, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`w-full text-left p-6 rounded-none transition-all duration-300 border flex items-center justify-between group relative overflow-hidden ${
                    isActive 
                      ? "bg-[#CC0000] border-[#CC0000] text-white pl-10 shadow-2xl" 
                      : "bg-black/30 border-[#1A1A1A] text-zinc-400 hover:border-zinc-700 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-black/60' : 'text-[#CC0000]'}`}>
                      {product.index}
                    </span>
                    <h3 className="text-base font-black uppercase tracking-wider">
                      {product.title}
                    </h3>
                  </div>
                  <div className={`p-2 transition-transform duration-300 ${isActive ? 'bg-black text-[#CC0000]' : 'bg-[#1A1A1A] text-zinc-400 group-hover:scale-110'}`}>
                    {product.icon}
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT CINEMATIC PRODUCT INSIGHT DISPLAY STAGE (7 Columns Wide) */}
          <div className="lg:col-span-7 bg-[#000000] border border-[#1A1A1A] p-8 md:p-12 flex flex-col justify-between relative shadow-2xl group min-h-[500px]">
            {/* Pure Red Decorative Core Gradient Accent Vector */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#CC0000]/5 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />
            
            {/* Structural Content Stack with Entry Animation Effect triggers on index modification */}
            <div key={currentProduct.id} className="space-y-8 animate-[fadeIn_0.4s_ease-out]">
              <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-black tracking-widest text-[#CC0000] uppercase block">
                    {currentProduct.overline}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                    {currentProduct.title}
                  </h4>
                </div>
                <span className="text-4xl font-mono font-black text-[#1A1A1A] select-none group-hover:text-[#CC0000]/10 transition-colors duration-300">
                  {currentProduct.index}
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-lg font-bold text-[#CC0000] tracking-wide">
                  {currentProduct.tagline}
                </p>
                <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-xl">
                  {currentProduct.description}
                </p>
              </div>

              {/* Technical Property Matrix Metric */}
              <div className="bg-[#0F0F0F] border border-[#1A1A1A] p-4 flex justify-between items-center text-xs font-bold uppercase tracking-wider max-w-xl">
                <span className="text-zinc-500">rated for Parameter:</span>
                <span className="text-white font-mono border-b border-[#CC0000] pb-0.5">{currentProduct.specValue}</span>
              </div>
            </div>

            {/* Call To Action Footer Navigation bar */}
            <div className="pt-8 border-t border-[#1A1A1A] mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs font-bold text-zinc-400">
                <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0" />
                <span>Full Municipal DOT Product Compliance Guaranteed.</span>
              </div>
              
              <button className="h-12 px-6 bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group/btn shrink-0">
                Request Specification Sheets <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Embedded keyframe animation tracking wrapper inject for clean compilation inside Next.js */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}