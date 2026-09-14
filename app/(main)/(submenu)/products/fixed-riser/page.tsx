'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Ruler, ArrowRight, Anchor } from 'lucide-react';
import { cn } from '@/lib/utils';

const FINISHES = [
  { id: 'F01', name: 'Raw Cast Iron', image: `/images/manhole_riser/round_manhole_riser_iron_finish.png`, desc: 'Industrial grade raw iron for immediate use.' },
  { id: 'F02', name: 'Coated Finish', image: `/images/manhole_riser/fixed_round_manhole_riser_coated.png`, desc: 'Black coated to resist extreme environmental corrosion.' },
  { id: 'F03', name: 'Standard Iron', image: `/images/manhole_riser/round_manhole_riser_iron_finish.png`, desc: 'Standard foundry casting for maximum shock load.' },
  { id: 'F04', name: 'Ductile Alloy', image: `/images/manhole_riser/round_manhole_riser_iron_finish.png`, desc: 'High flexibility ductile iron to prevent sudden cracking.' },
];

export default function FixedRiserPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#CC0000] selection:text-white">
      
      {/* 
        --- DEEP FOCUS HERO SECTION --- 
      */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#222]">
        
        {/* Glow & Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,0,0,0.15)_0%,transparent_60%)] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px]" />
        
        {/* Floating Telemetry Data */}
        <div className="absolute top-24 left-8 md:left-12 flex flex-col gap-1 text-[9px] font-mono uppercase tracking-widest text-gray-500">
          <span>Sys: Online</span>
          <span>Profile: Heavy Duty</span>
          <span>Load: 50-Ton Rated</span>
        </div>
        
        <div className="absolute bottom-12 right-8 md:right-12 flex flex-col gap-1 text-[9px] font-mono uppercase tracking-widest text-[#CC0000] text-right">
          <span>Dia: 24" - 36"</span>
          <span>Mat: Solid Cast</span>
          <span>USA Fabricated</span>
        </div>

        {/* Central Product Focus */}
        <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center">
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] lg:text-[200px] font-black uppercase tracking-tighter leading-none text-transparent stroke-text opacity-40 z-0 pointer-events-none select-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
            FIXED
          </h1>
          
          <div className="relative z-10 w-full aspect-square md:aspect-video flex items-center justify-center animate-in fade-in zoom-in-95 duration-1000">
            <Image
              src={`/images/manhole_riser/round_manhole_riser_iron_finish.png`}
              alt="Fixed Riser"
              fill
              className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
          </div>
          
          <div className="mt-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest mb-4">
              Solid Ring <span className="text-[#CC0000]">Risers</span>
            </h2>
            <p className="text-gray-400 font-medium text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Achieve precise grade adjustments instantly. Built from a solid, continuous cast iron ring for unparalleled structural integrity under heavy municipal traffic.
            </p>
          </div>
        </div>
      </section>

      {/* 
        --- STICKY STACKED PRESENTATION ---
        As you scroll, each card locks to the top, and the next one slides over it.
      */}
      <section className="relative w-full">
        
        {/* Card 1 */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-[#0a0a0a] border-t border-[#333] z-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#CC0000]/10 to-transparent pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="w-16 h-16 bg-[#111] border border-[#333] flex items-center justify-center mb-8">
                <Anchor className="w-8 h-8 text-[#CC0000]" />
              </div>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                Unbreakable <br/> Integrity.
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed max-w-xl text-lg md:text-xl">
                Unlike adjustable risers that rely on mechanical expansion, our fixed risers are a solid, single-piece casting. This minimizes any weak points or moving parts, ensuring the riser will never collapse or shift under extreme localized shock loads.
              </p>
            </div>
            <div className="flex-1 relative w-full h-[400px]">
              <Image 
                src={`/images/manhole_riser/fixed_round_manhole_riser_coated.png`}
                alt="Solid Cast Iron Riser"
                fill
                className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-[#111] border-t border-[#444] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
          <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-[#CC0000]/5 to-transparent pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <div className="w-16 h-16 bg-black border border-[#444] flex items-center justify-center mb-8">
                <ShieldCheck className="w-8 h-8 text-[#CC0000]" />
              </div>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                Highway <br/> Approved.
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed max-w-xl text-lg md:text-xl">
                Engineered specifically for DOT compliance. These fixed risers are the standard choice for major highway resurfacing, airport tarmacs, and high-speed intersections where failure is simply not an option.
              </p>
            </div>
            <div className="flex-1 relative w-full h-[400px]">
              <Image 
                src={`/images/manhole_riser/round_manhole_riser_iron_finish.png`}
                alt="Highway Approved Riser"
                fill
                className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-[#1a1a1a] border-t border-[#555] z-30 shadow-[0_-30px_60px_rgba(0,0,0,0.95)] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center gap-8">
            <div className="w-16 h-16 bg-[#0a0a0a] border border-[#555] flex items-center justify-center mb-4">
              <Ruler className="w-8 h-8 text-[#CC0000]" />
            </div>
            <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
              Exact <span className="text-[#CC0000]">Specs.</span>
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed max-w-3xl text-lg md:text-2xl mx-auto mb-12">
              Available in increments of 1/4" to ensure your manholes match the final asphalt grade with millimeter precision. No shimming, no stacking, no settling.
            </p>
            
            <a
              href="#quote"
              className="group flex items-center gap-6 px-10 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-[#CC0000] hover:text-white transition-all duration-300"
            >
              <span>View Dimension Chart</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

      </section>

      {/* 
        --- HORIZONTAL FINISH CAROUSEL ---
        A massive, overflowing horizontal scroll area for viewing materials.
      */}
      <section className="relative z-40 bg-black pt-32 pb-24 border-t-4 border-[#CC0000]">
        <div className="px-6 md:px-12 mb-16 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Material <span className="text-[#CC0000]">Matrix</span>
          </h2>
          <p className="text-gray-500 font-medium uppercase tracking-widest text-xs mt-4">Scroll horizontally to view available foundry castings</p>
        </div>

        {/* Oversized horizontal scroll container */}
        <div className="w-full overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory">
          <div className="flex gap-8 px-6 md:px-12 w-max mx-auto">
            
            {FINISHES.map((finish) => (
              <div 
                key={finish.id}
                className="w-[85vw] md:w-[600px] h-[500px] bg-[#0A0A0A] border border-[#222] hover:border-[#CC0000] shrink-0 snap-center flex flex-col group transition-colors duration-500 cursor-pointer"
              >
                <div className="flex-1 relative w-full overflow-hidden bg-[#111] p-12 border-b border-[#222]">
                  <Image 
                    src={finish.image}
                    alt={finish.name}
                    fill
                    className="object-contain p-12 drop-shadow-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-6 left-6 text-6xl font-black text-white/5 pointer-events-none group-hover:text-[#CC0000]/10 transition-colors duration-500">
                    {finish.id}
                  </div>
                </div>
                
                <div className="p-8 flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-widest mb-2 group-hover:text-[#CC0000] transition-colors">{finish.name}</h3>
                    <p className="text-gray-500 text-sm font-medium">{finish.desc}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center group-hover:bg-[#CC0000] group-hover:border-[#CC0000] transition-colors shrink-0">
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Hide Scrollbar CSS Injection for this specific component */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
      
    </div>
  );
}
