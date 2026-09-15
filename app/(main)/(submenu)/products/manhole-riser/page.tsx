'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  ChevronLeft,
  Settings,
  ShieldCheck,
  Construction,
  FileText,
  ArrowRight,
  CircleDot,
  ChevronRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const FINISHES = [
  { name: 'Raw Finish', image: `/images/manhole_riser/round_manhole_riser_iron_finish.png` },
  { name: 'Coated Finish', image: `/images/manhole_riser/fixed_round_manhole_riser_coated.png` },
  { name: 'Iron Finish', image: `/images/manhole_riser/round_manhole_riser_iron_finish.png` },
  { name: 'With Screw (Raw)', image: `/images/manhole_riser/round_manhole_riser_with_screws_iron_finish.png` },
  { name: 'With Screw (Coated)', image: `/images/manhole_riser/adjustable_manhole_riser_coated.png` },
  { name: 'With Screw (Iron)', image: `/images/manhole_riser/round_manhole_riser_with_screws_iron_finish.png` }
];

const MANHOLE_RISER_DATA = {
  title: 'Manhole Risers',
  headline: 'Precision Adjustment for Municipal Manholes.',
  description: 'Our Manhole Risers provide an efficient and durable solution for elevating manhole covers to grade level during paving and resurfacing operations. Fabricated from high-strength cast or ductile iron, they minimize the need for costly digging and rebuilding, ensuring a perfect flush fit with the new asphalt surface.',
  specs: [
    { label: 'Material', value: 'Material: See product specification' },
    { label: 'Profile Type', value: 'Standard Round / Adjustable' },
    { label: 'Load Rating', value: 'Load Rating: See individual product specification' },
    { label: 'Standard Diameters', value: '24", 27", 30", 36" equivalents' },
    { label: 'Rise Increments', value: '3/4" to 4" (Custom stackable available)' },
    { label: 'Certification', value: 'Compliance & Testing documentation available upon request' },
  ],
  technicalPoints: [
    {
      title: 'Seamless Grade Adjustment',
      desc: 'Quickly raise existing utilities to the new paving grade in minutes, saving substantial labor and material costs compared to traditional masonry adjustments.'
    },
    {
      title: 'Locking Expanders',
      desc: 'Available with robust screw and expansion mechanisms to expand and securely lock the riser into the existing frame.'
    },
    {
      title: 'Heavy Traffic Rated',
      desc: 'Engineered with heavy-duty construction to withstand the intense pressures of highway traffic and industrial heavy loads.'
    }
  ]
};

export default function ManholeRiserPage() {
  const router = useRouter();
  const [activeFinish, setActiveFinish] = useState(FINISHES[0]);

  const handlePrev = () => {
    const currentIndex = FINISHES.findIndex(f => f.name === activeFinish.name);
    const prevIndex = currentIndex === 0 ? FINISHES.length - 1 : currentIndex - 1;
    setActiveFinish(FINISHES[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = FINISHES.findIndex(f => f.name === activeFinish.name);
    const nextIndex = currentIndex === FINISHES.length - 1 ? 0 : currentIndex + 1;
    setActiveFinish(FINISHES[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white overflow-hidden selection:bg-[#CC0000] selection:text-white">
      
      {/* --- 1. EDITORIAL HERO SECTION --- */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center pt-24 px-6 lg:px-12">
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#CC0000]/15 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

        <div className="relative z-10 w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          {/* LEFT: Massive Typography */}
          <div className="lg:w-5/12 space-y-6 z-20">
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-12 bg-[#CC0000]"></div>
              <span className="text-[#CC0000] font-black uppercase tracking-[0.3em] text-xs">Precision Elevation</span>
            </div>
            
            {/* Outline Text Styling */}
            <h1 className="text-6xl sm:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] text-white mix-blend-difference drop-shadow-2xl">
              Manhole<br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}>Risers</span>
            </h1>
            
            <p className="text-zinc-400 text-lg sm:text-xl font-medium leading-relaxed max-w-md pt-8">
              {MANHOLE_RISER_DATA.description}
            </p>
            
            <div className="pt-8">
              <Button className="bg-white hover:bg-[#CC0000] text-black hover:text-white font-black h-16 px-10 uppercase tracking-[0.2em] rounded-none transition-all duration-300">
                Download Catalog <ArrowRight className="ml-3" />
              </Button>
            </div>
          </div>

          {/* RIGHT: Floating Carousel Image */}
          <div className="lg:w-7/12 relative h-[500px] sm:h-[700px] w-full flex items-center justify-center group">
            
            <button 
              onClick={handlePrev} 
              className="absolute left-0 lg:left-10 z-30 bg-black/50 backdrop-blur-md border border-white/10 text-white p-5 rounded-full hover:bg-[#CC0000] hover:scale-110 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 shadow-2xl"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="relative w-full h-full flex items-center justify-center">
               <Image 
                  key={activeFinish.name}
                  src={activeFinish.image}
                  alt={activeFinish.name}
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-700 ease-out animate-in fade-in zoom-in-90"
                  priority
               />
            </div>
            
            <button 
              onClick={handleNext} 
              className="absolute right-0 lg:right-10 z-30 bg-black/50 backdrop-blur-md border border-white/10 text-white p-5 rounded-full hover:bg-[#CC0000] hover:scale-110 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 shadow-2xl"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            {/* Current Finish Label Floating */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-4 flex items-center gap-4 shadow-2xl rounded-full">
              <span className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em]">Active Finish:</span>
              <span className="text-[#CC0000] font-black uppercase tracking-widest text-xs">{activeFinish.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. DYNAMIC FINISHES STRIP --- */}
      <section className="border-y border-white/10 bg-[#0A0A0A] relative z-20">
         {/* Custom Scrollbar Hide but keep horizontal scroll */}
         <style dangerouslySetInnerHTML={{__html: `
           .hide-scrollbar::-webkit-scrollbar { display: none; }
           .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
         `}} />
         
         <div className="w-full flex overflow-x-auto hide-scrollbar snap-x snap-mandatory">
            {FINISHES.map((finish, i) => (
              <div 
                key={i} 
                onClick={() => setActiveFinish(finish)}
                className={`min-w-[200px] sm:min-w-[280px] h-32 flex-shrink-0 flex items-center justify-center border-r border-white/10 cursor-pointer transition-all duration-500 snap-center group relative overflow-hidden ${activeFinish.name === finish.name ? 'bg-white/5' : 'hover:bg-white/5'}`}
              >
                 {/* Active Indicator Line */}
                 <div className={`absolute bottom-0 left-0 h-1 bg-[#CC0000] transition-all duration-500 ${activeFinish.name === finish.name ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                 
                 <div className={`w-20 h-20 relative mr-4 transition-opacity duration-300 ${activeFinish.name === finish.name ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
                    <Image src={finish.image} alt={finish.name} fill className="object-contain drop-shadow-lg" />
                 </div>
                 <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${activeFinish.name === finish.name ? 'text-[#CC0000]' : 'text-zinc-500 group-hover:text-white'}`}>
                   {finish.name}
                 </span>
              </div>
            ))}
         </div>
      </section>

      {/* --- 3. BENTO GRID SPECS (Brutalist style) --- */}
      <section className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 py-24 relative z-10">
         
         <div className="mb-16">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Industrial <span className="text-[#CC0000]">Specifications</span>
            </h2>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mt-2">
              Engineered for extreme performance
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
           
           {/* Box 1: Large Stat */}
           <div className="lg:col-span-2 bg-[#CC0000] text-white p-10 flex flex-col justify-between hover:bg-[#B30000] transition-colors duration-300 group">
              <ShieldCheck className="w-12 h-12 text-white/50 group-hover:text-white transition-colors" />
              <div>
                <h3 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-2">Load Rating: See individual product specification</h3>
                <p className="font-bold uppercase tracking-widest text-xs opacity-80">Heavy Duty Municipal Traffic Specification</p>
              </div>
           </div>

           {/* Box 2: Spec List */}
           <div className="lg:col-span-2 bg-[#111] border border-white/10 p-10 flex flex-col justify-between hover:border-white/20 transition-colors">
              <h3 className="text-xl font-black uppercase tracking-widest mb-6 text-white flex items-center gap-3">
                <FileText className="text-[#CC0000]" /> Technical Data
              </h3>
              <div className="space-y-4">
                 {MANHOLE_RISER_DATA.specs.slice(0, 4).map((spec, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-white/10 pb-2">
                       <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">{spec.label}</span>
                       <span className="text-sm font-black text-zinc-200 mt-1 sm:mt-0">{spec.value}</span>
                    </div>
                 ))}
              </div>
           </div>

           {/* Box 3: Point 1 */}
           <div className="bg-[#111] border border-white/10 p-10 flex flex-col justify-between hover:border-[#CC0000] transition-colors duration-300 group">
              <CircleDot className="w-8 h-8 text-[#CC0000] group-hover:scale-110 transition-transform" />
              <div>
                 <h4 className="font-black uppercase mb-3 text-white tracking-widest text-sm">Seamless Grade</h4>
                 <p className="text-xs text-zinc-400 font-medium leading-relaxed">Save labor by raising utilities to paving grade in minutes without costly digging.</p>
              </div>
           </div>

           {/* Box 4: Graphic Box */}
           <div className="bg-[#111] border border-white/10 relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-[#CC0000]/5 group-hover:bg-[#CC0000]/10 transition-colors duration-500"></div>
              <Settings className="w-32 h-32 text-[#CC0000]/20 group-hover:text-[#CC0000]/40 group-hover:rotate-90 transition-all duration-1000 ease-out" />
           </div>

           {/* Box 5: Large Point 2 */}
           <div className="lg:col-span-2 bg-white text-black p-10 flex flex-col justify-between hover:scale-[1.01] hover:shadow-2xl transition-transform duration-300 cursor-default">
              <Construction className="w-12 h-12 text-[#CC0000]" />
              <div>
                 <h4 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-4 leading-none">Locking Expanders</h4>
                 <p className="text-sm font-bold text-gray-600 max-w-lg leading-relaxed">
                   Available with robust screw and expansion mechanisms to expand and securely lock the riser directly into the existing municipal frame under extreme pressure.
                 </p>
              </div>
           </div>

         </div>
      </section>
      
    </div>
  );
}
