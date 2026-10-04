'use client';

import React from 'react';
import Image from 'next/image';
import { 
  FileText, 
  ArrowDownCircle, 
  Settings2,
  HardHat,
  ShieldCheck,
  ChevronRight,
  Target,
  Wrench,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EngineeringBriefsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#CC0000] selection:text-white pb-32">
      
      {/* ========================================= */}
      {/* 1. CINEMATIC LONG-SCROLL HERO             */}
      {/* ========================================= */}
      <div className="relative w-full h-[90vh] min-h-[700px] flex flex-col justify-between overflow-hidden border-b border-white/10">
        <video autoPlay loop muted playsInline  
          suppressHydrationWarning
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen scale-105"
        >
          <source src="/videos/catch_basin_riser/two_grate_catch_basin_riser_animation.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full px-10 md:px-20 pt-32 flex-1 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-md rounded-full w-max mb-8">
            <FileText className="w-4 h-4 text-[#CC0000]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">R&D Department</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            Engineering <br />
            <span className="text-[#CC0000]">Briefs</span>
          </h1>
          
          <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl border-l-4 border-[#CC0000] pl-6">
            In-depth technical whitepapers, kinetic load analyses, and mechanical deep-dives into the design philosophy behind Paving Risers.
          </p>
        </div>

        <div className="relative z-10 w-full px-10 md:px-20 pb-16 flex justify-end">
          <div className="flex flex-col items-center gap-4 animate-bounce">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">Scroll to Explore</span>
            <ArrowDownCircle className="w-8 h-8 text-[#CC0000]" />
          </div>
        </div>
      </div>

      <div className="w-full px-10 md:px-20 mt-32">
        {/* ========================================= */}
        {/* BRIEF 01: SOLID RING MECHANICS            */}
        {/* ========================================= */}
        <section className="mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-square bg-[#0A0A0A] overflow-hidden border border-white/5 group">
              <video autoPlay loop muted playsInline  
                suppressHydrationWarning
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              >
                <source src="/videos/animations/1.751.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8">
                <p className="text-[#CC0000] text-xs font-black uppercase tracking-[0.3em] mb-2">Simulated Model</p>
                <p className="text-2xl font-black uppercase tracking-wide text-white">Dynamic Stress Testing</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-8xl font-black text-white/5 uppercase tracking-tighter -mb-16">01</h2>
              <div className="relative z-10">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
                  Solid Ring <br /><span className="text-[#CC0000]">Mechanics</span>
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed font-medium mb-8">
                  Engineering Brief #104 details the kinetic advantages of utilizing a seamless solid cast ring. By eliminating welds and joints in the primary load-bearing surface, we minimize microscopic stress fractures caused by high-frequency vibration from overhead traffic.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-[#111] px-6 py-4 border border-white/5 flex items-center gap-3">
                    <Target className="w-5 h-5 text-[#CC0000]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Vibration Dampening</span>
                  </div>
                  <div className="bg-[#111] px-6 py-4 border border-white/5 flex items-center gap-3">
                    <Settings2 className="w-5 h-5 text-[#CC0000]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Seamless Cast</span>
                  </div>
                </div>
                <Button className="mt-10 bg-white/5 border border-white/10 hover:bg-[#CC0000] hover:border-[#CC0000] text-white font-black uppercase tracking-widest rounded-none h-14 px-8 transition-colors">
                  <Download className="w-4 h-4 mr-2" /> Download Brief 01
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* BRIEF 02: EXPANSION MECHANISM EXPANSION            */}
        {/* ========================================= */}
        <section className="mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-8xl font-black text-white/5 uppercase tracking-tighter -mb-16">02</h2>
              <div className="relative z-10">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
                  Expansion Mechanism <br /><span className="text-[#CC0000]">Expansion Tech</span>
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed font-medium mb-8">
                  Engineering Brief #208 explores the lateral force generation of our proprietary pivoting Expansion System. As the stainless steel bolt is torqued, the riser expands mechanically against the host frame, generating over 10,000 PSI of outward radial pressure to prevent dislodgement.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-[#111] px-6 py-4 border border-white/5 flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-[#CC0000]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">10,000 PSI Lock</span>
                  </div>
                  <div className="bg-[#111] px-6 py-4 border border-white/5 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#CC0000]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Anti-Shift Tech</span>
                  </div>
                </div>
                <Button className="mt-10 bg-white/5 border border-white/10 hover:bg-[#CC0000] hover:border-[#CC0000] text-white font-black uppercase tracking-widest rounded-none h-14 px-8 transition-colors">
                  <Download className="w-4 h-4 mr-2" /> Download Brief 02
                </Button>
              </div>
            </div>
            
            <div className="relative aspect-square bg-[#0A0A0A] overflow-hidden border border-white/5 group">
              <video autoPlay loop muted playsInline  
                suppressHydrationWarning
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              >
                <source src="/videos/animations/paving_riser_solid_ring_utilisation_animation.686.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
              <div className="absolute top-8 right-8 text-right">
                <p className="text-[#CC0000] text-xs font-black uppercase tracking-[0.3em] mb-2">CAD Rendering</p>
                <p className="text-2xl font-black uppercase tracking-wide text-white">Expansion Simulation</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* BRIEF 03: CATCH BASIN DYNAMICS            */}
        {/* ========================================= */}
        <section className="mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-square bg-[#0A0A0A] overflow-hidden border border-white/5 group">
              <video autoPlay loop muted playsInline  
                suppressHydrationWarning
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              >
                <source src="/videos/animations/1.711.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-0 w-full text-center">
                <p className="text-[#CC0000] text-xs font-black uppercase tracking-[0.3em] mb-2">Assembly Protocol</p>
                <p className="text-2xl font-black uppercase tracking-wide text-white">4-Sided Frame Integration</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-8xl font-black text-white/5 uppercase tracking-tighter -mb-16">03</h2>
              <div className="relative z-10">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
                  Rectangular <br /><span className="text-[#CC0000]">Basin Dynamics</span>
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed font-medium mb-8">
                  Engineering Brief #312 covers the unique load dispersion requirements for rectangular and square catch basins. Unlike circular frames which naturally distribute weight, 90-degree corners create stress concentrations. Learn how our corner-reinforced heavy iron mitigates point-load failure.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-[#111] px-6 py-4 border border-white/5 flex items-center gap-3">
                    <HardHat className="w-5 h-5 text-[#CC0000]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Load Dispersion</span>
                  </div>
                </div>
                <Button className="mt-10 bg-white/5 border border-white/10 hover:bg-[#CC0000] hover:border-[#CC0000] text-white font-black uppercase tracking-widest rounded-none h-14 px-8 transition-colors">
                  <Download className="w-4 h-4 mr-2" /> Download Brief 03
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* 4. STATIC MASONRY GRID (More Briefs)       */}
        {/* ========================================= */}
        <div className="border-t border-white/10 pt-32 mb-32">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Archive <span className="text-[#CC0000]">Vault</span>
            </h2>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black font-black uppercase tracking-widest rounded-none h-12 px-6">
              View All <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Archive Item 1 */}
            <div className="bg-[#0A0A0A] border border-white/5 group hover:border-[#CC0000] transition-colors relative overflow-hidden flex flex-col h-[450px]">
              <div className="relative h-64 w-full">
                <Image src={`/images/custom_riser/d_shape_riser_steel.png`} alt="Engineering Spec" fill className="object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-end -mt-16 relative z-10">
                <p className="text-[#CC0000] font-mono text-[10px] font-bold tracking-[0.2em] mb-2">BRIEF #401</p>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-3">Epoxy Sealant Adhesion</h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-6">
                  Chemical compatibility data for industrial epoxies and raw cast iron surfaces.
                </p>
                <a href="#" className="text-white text-xs font-black uppercase tracking-widest flex items-center group-hover:text-[#CC0000] transition-colors">
                  Read Whitepaper <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Archive Item 2 */}
            <div className="bg-[#0A0A0A] border border-white/5 group hover:border-[#CC0000] transition-colors relative overflow-hidden flex flex-col h-[450px]">
              <div className="relative h-64 w-full">
                <Image src={`/images/catch_basin_riser/square_catch_basin_riser_coated.png`} alt="Engineering Spec" fill className="object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-end -mt-16 relative z-10">
                <p className="text-[#CC0000] font-mono text-[10px] font-bold tracking-[0.2em] mb-2">BRIEF #415</p>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-3">Ductile vs Black Coated</h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-6">
                  Tensile strength comparisons between standard black coated and ductile iron variants under extreme loads.
                </p>
                <a href="#" className="text-white text-xs font-black uppercase tracking-widest flex items-center group-hover:text-[#CC0000] transition-colors">
                  Read Whitepaper <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Archive Item 3 */}
            <div className="bg-[#0A0A0A] border border-white/5 group hover:border-[#CC0000] transition-colors relative overflow-hidden flex flex-col h-[450px]">
              <div className="relative h-64 w-full">
                <Image src={`/images/valve_box_riser/valve_box_riser_5in.jpeg`} alt="Engineering Spec" fill className="object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-end -mt-16 relative z-10">
                <p className="text-[#CC0000] font-mono text-[10px] font-bold tracking-[0.2em] mb-2">BRIEF #505</p>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-3">Slope Tapering Effects</h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-6">
                  Analyzing the necessity of custom-tapered risers on steeply crowned municipal roadways.
                </p>
                <a href="#" className="text-white text-xs font-black uppercase tracking-widest flex items-center group-hover:text-[#CC0000] transition-colors">
                  Read Whitepaper <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================= */}
        {/* 5. HEAVY CTA                               */}
        {/* ========================================= */}
        <div className="bg-[#CC0000] p-12 md:p-24 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3)_0%,transparent_80%)] pointer-events-none" />
          
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none text-white relative z-10">
            Need Custom <br /> Analysis?
          </h2>
          <p className="max-w-2xl mx-auto font-bold text-xl text-white/90 mb-12 relative z-10">
            If your project requires specific load testing data or chemical resistance analysis, contact our engineering department directly.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Button className="bg-black text-white hover:bg-white hover:text-black font-black px-12 h-20 text-lg uppercase tracking-widest transition-colors rounded-none shadow-2xl">
              Request Engineering Data
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
