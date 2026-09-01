'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Settings, 
  Truck, 
  Construction, 
  ChevronLeft, 
  ChevronRight,
  Target,
  Ruler,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FINISHES = [
  { name: 'Raw Finish', image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Sqaure_Riser_iron.609.png` },
  { name: 'Coated Finish', image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Square_riser_coated_finish.807.png` },
  { name: 'Cast Iron', image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_Riser_with_cast_iron.637.png` },
  { name: 'Ductile Iron', image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_Riser_iron.608.png` },
  { name: 'Steel Fabricated', image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_Paving_Riser_1_Right.622.png` },
];

export default function CatchBasinRisersPage() {
  const [activeFinish, setActiveFinish] = useState(FINISHES[0]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white overflow-hidden selection:bg-[#CC0000] selection:text-white pb-24">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#CC0000]/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full px-10 md:px-20 pt-24">
        
        {/* --- HERO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          
          {/* TEXT CONTENT (Left) */}
          <div className="lg:col-span-5 space-y-8 relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#CC0000] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-zinc-300 uppercase">Paving Grade Rated</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                Catch Basin
                <br />
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #CC0000' }}>
                  Risers
                </span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-xl font-medium leading-relaxed">
                Engineered for maximum drainage efficiency. Our rectangular and square catch basin risers provide seamless elevation adjustments for severe weather infrastructure.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href={'/contact/quote'}>
              <Button size="lg" className="bg-[#CC0000] hover:bg-white hover:text-black text-white font-black uppercase tracking-widest px-8 h-14 rounded-sm transition-all duration-300 shadow-[0_0_40px_rgba(204,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                Request a Quote
              </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-black hover:bg-white hover:text-black font-black uppercase tracking-widest px-8 h-14 rounded-sm transition-all duration-300 bg-white">
                View Load Tests
              </Button>
            </div>
          </div>

          {/* FLOATING IMAGE & DOCK (Right) */}
          <div className="lg:col-span-7 relative h-full flex flex-col items-center justify-center pt-12 lg:pt-0">
            
            <div className="relative w-full aspect-[4/3] max-w-4xl mx-auto flex items-center justify-center animate-in fade-in zoom-in duration-1000">
              {/* Image Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
              
              <Image
                key={activeFinish.name}
                src={activeFinish.image}
                alt={`Catch Basin Riser - ${activeFinish.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 hover:scale-105 transition-transform duration-700 p-8"
                priority
              />
            </div>

            {/* HORIZONTAL FINISHES DOCK */}
            <div className="w-full max-w-3xl bg-[#111] border border-white/10 rounded-sm p-4 mt-8 relative z-30 group shadow-2xl">
              <div className="absolute -top-3 left-6 px-2 bg-[#111] text-[10px] font-black uppercase tracking-widest text-[#CC0000]">
                Select Finish Profile
              </div>

              {/* Scroll Arrows */}
              <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-40 bg-white text-black p-2 rounded-full hover:bg-[#CC0000] hover:text-white transition-all opacity-0 group-hover:opacity-100 shadow-xl hidden md:block">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-40 bg-white text-black p-2 rounded-full hover:bg-[#CC0000] hover:text-white transition-all opacity-0 group-hover:opacity-100 shadow-xl hidden md:block">
                <ChevronRight className="w-5 h-5" />
              </button>

              <style dangerouslySetInnerHTML={{__html: `
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
              `}} />

              <div ref={scrollContainerRef} className="flex overflow-x-auto gap-3 hide-scrollbar snap-x px-2">
                {FINISHES.map((finish, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFinish(finish)}
                    className={`flex-shrink-0 relative h-16 w-32 snap-center rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                      activeFinish.name === finish.name ? 'border-[#CC0000]' : 'border-transparent hover:border-white/30'
                    }`}
                  >
                    <Image src={finish.image} alt={finish.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-50 hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                      <span className={`text-[9px] font-black uppercase tracking-widest z-10 transition-colors ${
                        activeFinish.name === finish.name ? 'text-[#CC0000]' : 'text-white'
                      }`}>
                        {finish.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* --- BRUTALIST BENTO GRID --- */}
        <div className="mt-32 border-t border-white/10 pt-24">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Drainage <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px #CC0000' }}>Architecture</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Box 1 */}
            <div className="bg-gradient-to-br from-[#111] to-black border border-white/5 p-8 rounded-sm hover:border-[#CC0000] transition-colors group">
              <Layers className="w-10 h-10 text-[#CC0000] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black uppercase tracking-wide mb-3">Custom Dimensions</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Fabricated to exact field measurements. Available in standard 24"x24" up to massive custom drainage grids.</p>
            </div>

            {/* Box 2 (Large Stat) */}
            <div className="lg:col-span-2 bg-[#CC0000] p-8 rounded-sm relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Truck className="w-64 h-64 text-black" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <h3 className="text-2xl font-black uppercase tracking-wide text-white">Heavy Highway Rated</h3>
                <div className="mt-8">
                  <span className="text-7xl font-black tracking-tighter text-white">100K<span className="text-2xl ml-2 text-black">LBS</span></span>
                  <p className="text-black font-bold uppercase tracking-widest mt-2">Proof Load Tested</p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-[#111] border border-white/5 p-8 rounded-sm hover:border-white/20 transition-colors">
              <ShieldCheck className="w-10 h-10 text-white mb-6" />
              <h3 className="text-xl font-black uppercase tracking-wide mb-3">Corrosion Defense</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Asphalt coating and galvanized options to withstand harsh road salts and constant water exposure.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
