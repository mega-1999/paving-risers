'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldAlert, Waves, Construction, ArrowDown, ArrowRight } from 'lucide-react';

export default function TrashRacksSnapPage() {
  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-[#CC0000] selection:text-white h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar relative">
      
      {/* Universal Progress/Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center animate-bounce pointer-events-none mix-blend-difference text-white">
        <span className="text-[10px] font-mono uppercase tracking-widest mb-2">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>

      {/* 
        --- SLIDE 1: THE DARK HERO --- 
      */}
      <section className="h-screen w-full snap-start snap-always flex items-center justify-center relative overflow-hidden bg-black">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
        
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/trash_racks/trash_rack_type_1.png`}
            alt="Trash Racks Background"
            fill
            className="object-cover opacity-30 mix-blend-luminosity grayscale scale-110 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
        </div>

        {/* Hero Typography */}
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="text-[#CC0000] font-mono text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-4 before:h-[1px] before:w-12 before:bg-[#CC0000] after:h-[1px] after:w-12 after:bg-[#CC0000]">
            Infrastructure Protection
          </div>
          <h1 className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-none mb-4 text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>
            TRASH
          </h1>
          <h1 className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-none text-white drop-shadow-[0_0_40px_rgba(204,0,0,0.5)]">
            RACKS
          </h1>
        </div>
      </section>

      {/* 
        --- SLIDE 2: FLOATING BLUEPRINT --- 
      */}
      <section className="h-screen w-full snap-start snap-always flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
        
        {/* Cinematic Red Flare */}
        <div className="absolute left-0 top-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_left,rgba(204,0,0,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              50-Ton <br/> <span className="text-[#CC0000]">Load.</span>
            </h2>
            <p className="text-gray-400 font-medium text-lg md:text-xl leading-relaxed max-w-lg border-l-4 border-[#CC0000] pl-6">
              Our heavy-duty fabricated steel trash racks are engineered to withstand massive localized shock loads while actively filtering out catastrophic debris.
            </p>
          </div>

          <div className="flex-1 relative w-full aspect-square md:h-[70vh] flex items-center justify-center">
            {/* Architectural Frame */}
            <div className="absolute inset-4 border border-white/10" />
            <div className="absolute inset-8 border border-white/5" />
            
            <Image
              src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/trash_racks/trash_rack_type_1.png`}
              alt="Trash Racks Blueprint"
              fill
              className="object-contain p-12 filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]"
            />
            
            {/* Technical Callouts */}
            <div className="absolute top-1/4 -left-8 backdrop-blur-md bg-black/80 border border-[#333] px-4 py-2 text-[10px] font-mono text-[#CC0000] uppercase tracking-widest">
              Welded Intersects
            </div>
            <div className="absolute bottom-1/4 -right-8 backdrop-blur-md bg-black/80 border border-[#333] px-4 py-2 text-[10px] font-mono text-[#CC0000] uppercase tracking-widest">
              Max Flow Profile
            </div>
          </div>

        </div>
      </section>

      {/* 
        --- SLIDE 3: 3D SPEC CARDS --- 
      */}
      <section className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center relative bg-[#111] px-6 md:px-12 pt-24 pb-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Engineering <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Specs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full perspective-[1000px]">
          
          {/* Card 1 */}
          <div className="bg-black border border-[#333] p-10 hover:border-[#CC0000] hover:shadow-[0_0_40px_rgba(204,0,0,0.15)] transition-all duration-500 group flex flex-col items-start transform hover:-translate-y-4 hover:rotate-x-12">
            <ShieldAlert className="w-10 h-10 text-[#CC0000] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black uppercase tracking-widest mb-4">Debris Prevention</h3>
            <p className="text-gray-400 font-medium leading-loose text-sm">
              Engineered specifically for drainage outfalls. Prevents massive debris, logs, and illegal dumping from entering and catastrophically clogging municipal systems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black border border-[#333] p-10 hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 group flex flex-col items-start transform hover:-translate-y-4 hover:rotate-x-12">
            <Construction className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black uppercase tracking-widest mb-4">Custom Built</h3>
            <p className="text-gray-400 font-medium leading-loose text-sm">
              No standard sizes. Every rack is custom-fabricated in our domestic facilities to exactly match civil blueprints, including sloped profiles and hinged access.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#CC0000]/10 border border-[#CC0000]/50 p-10 hover:bg-[#CC0000]/20 transition-all duration-500 group flex flex-col items-start transform hover:-translate-y-4 hover:rotate-x-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-shimmer pointer-events-none" />
            <Waves className="w-10 h-10 text-[#CC0000] mb-6 group-hover:scale-110 transition-transform relative z-10" />
            <h3 className="text-2xl font-black uppercase tracking-widest mb-4 relative z-10">Flow Dynamics</h3>
            <p className="text-gray-300 font-medium leading-loose text-sm relative z-10">
              Optimized steel bar placement ensures that while large debris is stopped, maximum stormwater flow velocity is maintained to prevent flooding.
            </p>
          </div>

        </div>

        <div className="mt-16 text-center">
          <a href="#quote" className="inline-flex items-center gap-4 bg-white text-black font-black uppercase tracking-widest px-10 py-5 text-sm hover:bg-[#CC0000] hover:text-white transition-all duration-300">
            Request a Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Hide Scrollbar CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        /* Custom 3D rotate class */
        .rotate-x-12 {
          transform: perspective(1000px) rotateX(10deg);
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
      `}} />
    </div>
  );
}
