'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Target, Settings, ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const FINISHES = [
  { name: 'Raw Finish', image: `/images/manhole_riser/round_manhole_riser_with_screws_iron_finish.png`, desc: 'Industrial standard for general municipal applications.' },
  { name: 'Black Coated', image: `/images/manhole_riser/adjustable_manhole_riser_coated.png`, desc: 'Resists corrosion from road salt and extreme weather.' },
  { name: 'Iron Foundry', image: `/images/manhole_riser/round_manhole_riser_with_screws_iron_finish.png`, desc: 'Heavy-duty foundry cast finish for ultimate durability.' },
];

export default function AdjustableRiserPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position to trigger hotspots
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = height > 0 ? Math.min(Math.max(scrollY / height, 0), 1) : 0;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hotspot logic based on scroll percentage across the 300vh sticky container
  // Section 1: 0 to 0.33 (Expansion Mechanism)
  // Section 2: 0.33 to 0.66 (Solid Rim)
  // Section 3: 0.66 to 1.0 (Diameter Specs)
  
  const activeHotspot = 
    scrollProgress < 0.25 ? 0 : 
    scrollProgress < 0.6 ? 1 : 2;

  return (
    <div className="bg-[#030303] min-h-[300vh] text-white font-sans selection:bg-[#CC0000] selection:text-white">
      
      {/* 
        --- STICKY BLUEPRINT CONTAINER ---
        This takes up 300vh (from the parent div), but the content is sticky to the viewport.
      */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between pt-24 pb-12">
        
        {/* Background Grid & Radar Sweep */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(204,0,0,0.05)_0%,transparent_70%)] animate-pulse pointer-events-none" />

        {/* Header Text */}
        <div className="relative z-20 px-8 md:px-16 flex justify-between items-end">
          <div>
            <div className="text-[#CC0000] font-mono text-[10px] tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-left duration-1000">
              [ Blueprint Mode Active ]
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none animate-in fade-in slide-in-from-left duration-1000 delay-150">
              Adjustable <br/> 
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
                Risers
              </span>
            </h1>
          </div>
          <div className="hidden md:block text-right">
            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Scroll to analyze <br/> engineering specs</p>
          </div>
        </div>

        {/* 
          --- INTERACTIVE HOTSPOT IMAGE --- 
        */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="relative w-full max-w-4xl aspect-square md:aspect-video transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
               style={{ transform: `scale(${1 + (scrollProgress * 0.15)})` }}>
            
            <Image
              src={`/images/manhole_riser/adjustable_manhole_riser_low_screw_coated.png`}
              alt="Adjustable Riser Blueprint"
              fill
              className="object-contain filter drop-shadow-[0_0_60px_rgba(204,0,0,0.2)]"
              priority
            />

            {/* HOTSPOT 1: The Expansion Screw (Approximate position on image) */}
            <div className={cn(
              "absolute top-[60%] left-[30%] md:top-[65%] md:left-[35%] transition-all duration-700 ease-out flex items-center",
              activeHotspot === 0 ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
            )}>
              <div className="relative flex items-center justify-center w-8 h-8">
                <div className="absolute inset-0 rounded-full border border-[#CC0000] animate-ping opacity-75"></div>
                <div className="w-3 h-3 rounded-full bg-[#CC0000]"></div>
              </div>
              <div className="h-[1px] w-12 md:w-24 bg-[#CC0000]"></div>
              <div className="backdrop-blur-md bg-black/60 border border-[#CC0000]/50 p-6 shadow-2xl max-w-xs transform translate-x-2 pointer-events-auto">
                <Settings className="w-5 h-5 text-[#CC0000] mb-3" />
                <h3 className="text-xl font-black uppercase tracking-widest text-white mb-2">Mechanical Expansion</h3>
                <p className="text-gray-400 text-xs leading-loose font-medium">Engineered expansion screw allows for precise +/- ¾” diameter adjustments on the fly, guaranteeing a perfect fit in irregular manhole frames.</p>
              </div>
            </div>

            {/* HOTSPOT 2: The Solid Rim (Top Right) */}
            <div className={cn(
              "absolute top-[30%] right-[20%] md:top-[25%] md:right-[25%] transition-all duration-700 ease-out flex items-center flex-row-reverse",
              activeHotspot === 1 ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
            )}>
              <div className="relative flex items-center justify-center w-8 h-8">
                <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-75"></div>
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <div className="h-[1px] w-12 md:w-24 bg-white"></div>
              <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-2xl max-w-xs transform -translate-x-2 pointer-events-auto">
                <ShieldCheck className="w-5 h-5 text-white mb-3" />
                <h3 className="text-xl font-black uppercase tracking-widest text-white mb-2">DOT Compliant Cast</h3>
                <p className="text-gray-300 text-xs leading-loose font-medium">Despite being adjustable, the main ring maintains exceptional structural integrity, rated to handle 50-Ton localized shock loads without buckling.</p>
              </div>
            </div>

            {/* HOTSPOT 3: Diameter Specs (Bottom Center) */}
            <div className={cn(
              "absolute bottom-[10%] left-1/2 -translate-x-1/2 transition-all duration-700 ease-out flex flex-col items-center",
              activeHotspot === 2 ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
            )}>
              <div className="relative flex items-center justify-center w-8 h-8 mb-4">
                <div className="absolute inset-0 rounded-full border border-[#CC0000] animate-ping opacity-75"></div>
                <div className="w-3 h-3 rounded-full bg-[#CC0000]"></div>
              </div>
              <div className="w-[1px] h-12 bg-[#CC0000] mb-2"></div>
              <div className="backdrop-blur-md bg-black/80 border border-[#CC0000] p-6 shadow-[0_0_40px_rgba(204,0,0,0.3)] max-w-sm text-center pointer-events-auto">
                <Target className="w-5 h-5 text-[#CC0000] mb-3 mx-auto" />
                <h3 className="text-xl font-black uppercase tracking-widest text-white mb-2">Universal Sizing</h3>
                <p className="text-gray-400 text-xs leading-loose font-medium">Available in standard starting diameters from 24" up to 36", with rise increments available from 1" up to 6" for deep paving lifts.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="relative z-20 px-8 md:px-16 w-full flex items-center gap-4">
          <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase w-12">
            {Math.round(scrollProgress * 100)}%
          </div>
          <div className="h-[1px] flex-1 bg-[#333]">
            <div 
              className="h-full bg-[#CC0000] transition-all duration-75"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </div>
      
      {/* 
        --- FINISHES GRID (APPEARS AFTER SCROLLING) --- 
      */}
      <div className="relative z-30 bg-[#0A0A0A] border-t border-[#333] pt-24 pb-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                Available <span className="text-[#CC0000]">Finishes</span>
              </h2>
              <p className="text-gray-400 font-medium">Select the optimal material finish for your environmental requirements.</p>
            </div>
            <a href="#quote" className="inline-flex items-center gap-4 border-b-2 border-[#CC0000] pb-2 font-black uppercase tracking-widest text-sm hover:text-[#CC0000] transition-colors">
              Request Full Spec Sheet <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FINISHES.map((finish, idx) => (
              <div key={idx} className="bg-[#111] border border-[#222] hover:border-[#CC0000] p-8 group transition-all duration-500 cursor-pointer flex flex-col">
                <div className="relative w-full aspect-square mb-8 overflow-hidden bg-black/50 rounded-full">
                  <Image
                    src={finish.image}
                    alt={finish.name}
                    fill
                    className="object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-widest mb-3 group-hover:text-[#CC0000] transition-colors">
                  {finish.name}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {finish.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
