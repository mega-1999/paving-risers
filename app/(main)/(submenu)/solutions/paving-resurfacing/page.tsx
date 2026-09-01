'use client';

import React from 'react';
import Image from 'next/image';
import {
  Construction,
  MapPin,
  Ruler,
  ArrowRight,
  Target,
  Wrench,
  ShieldCheck,
  Tractor,
  Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PavingResurfacingPage() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white selection:bg-[#CC0000] selection:text-white pb-32">

      {/* BACKGROUND TEXTURES */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(204,0,0,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 w-full px-10 md:px-20 pt-24 lg:pt-32">

        {/* --- HERO SECTION --- */}
        <div className="max-w-6xl mb-32">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-16 h-1 bg-[#CC0000]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#CC0000]">Infrastructure Solutions</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
            Municipal<br />
            <span className="text-zinc-500">Paving &</span><br />
            Resurfacing
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl border-l-4 border-[#CC0000] pl-8">
            <p className="text-xl text-zinc-300 font-medium leading-relaxed">
              When a city street is milled and repaved, utility structures are often left buried or dangerously depressed. Our engineered risers minimize the need to dig up and reset existing castings.
            </p>
            <div className="flex flex-col justify-center gap-4">
              <Button size="lg" className="bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest rounded-none h-14 w-full md:w-auto transition-colors shadow-[0_0_30px_rgba(204,0,0,0.3)]">
                Consult with an Engineer
              </Button>
            </div>
          </div>
        </div>

        {/* --- THE THREE-STEP PROCESS (Cinematic Timeline) --- */}
        <div className="mb-40">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-16">
            The <span className="text-[#CC0000]">Resurfacing</span> Workflow
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Step 1 */}
            <div className="bg-[#0A0A0A] border border-white/5 p-12 group hover:border-[#CC0000] transition-colors duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 group-hover:text-[#CC0000]/10 transition-colors duration-500">
                01
              </div>
              <Tractor className="w-12 h-12 text-zinc-500 group-hover:text-[#CC0000] mb-8 transition-colors" />
              <h3 className="text-3xl font-black uppercase tracking-wide mb-4">Mill & Pave</h3>
              <p className="text-zinc-400 font-medium leading-relaxed relative z-10">
                Contractors mill the existing asphalt and lay down a fresh wear course. Existing manholes and catch basins are now sitting 1-3 inches below the new grade, creating dangerous potholes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0A0A0A] border border-white/5 p-12 group hover:border-[#CC0000] transition-colors duration-500 relative overflow-hidden lg:-translate-y-8">
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 group-hover:text-[#CC0000]/10 transition-colors duration-500">
                02
              </div>
              <Layers className="w-12 h-12 text-zinc-500 group-hover:text-[#CC0000] mb-8 transition-colors" />
              <h3 className="text-3xl font-black uppercase tracking-wide mb-4">Drop-In Riser</h3>
              <p className="text-zinc-400 font-medium leading-relaxed relative z-10">
                Instead of deploying excavators to dig up the entire heavy iron frame, crews simply insert a Paving Riser directly into the existing casting frame.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#CC0000] p-12 group hover:bg-white transition-colors duration-500 relative overflow-hidden lg:-translate-y-16">
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-black/10 transition-colors duration-500">
                03
              </div>
              <Target className="w-12 h-12 text-white group-hover:text-black mb-8 transition-colors" />
              <h3 className="text-3xl font-black uppercase tracking-wide text-white group-hover:text-black mb-4 transition-colors">Perfect Grade</h3>
              <p className="text-white/90 group-hover:text-black/80 font-bold leading-relaxed relative z-10 transition-colors">
                The original heavy lid is placed on top of the newly installed riser. The structure is now precision flush with the new asphalt, achieving safety compliance in minutes rather than hours.
              </p>
            </div>

          </div>
        </div>

        {/* --- PRODUCTS APPLIED GRID --- */}
        <div className="border-t border-white/10 pt-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Primary Solutions for <span className="text-[#CC0000]">Paving</span>
            </h2>
            <Button variant="outline" className="border-white/20 text-[#CC0000] hover:bg-white hover:text-black font-black uppercase tracking-widest rounded-none px-8 h-12 transition-colors">
              View All Products <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Manhole Risers Solution Card */}
            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 p-12 hover:border-[#CC0000] transition-all duration-500 group flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-black uppercase tracking-wide">Manhole Risers</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  Available in standard sizes from 24" up to 36", featuring expansion adjustment screws for micro-elevation changes on uneven road slopes.
                </p>
                <div className="pt-4">
                  <Button className="bg-white text-black hover:bg-[#CC0000] hover:text-white font-black uppercase tracking-widest rounded-none h-12 px-6 transition-colors">
                    Explore Manhole Risers
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-64 h-64 relative bg-black/50 border border-white/5 rounded-full flex items-center justify-center p-8 shrink-0 group-hover:scale-105 transition-transform duration-500 shadow-[0_0_50px_rgba(204,0,0,0.1)] group-hover:shadow-[0_0_50px_rgba(204,0,0,0.3)]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Adjustbale_riser_low_screw_coated_finish.809.png`}
                  alt="Manhole Riser Solution"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

            {/* Catch Basin Risers Solution Card */}
            <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 p-12 hover:border-[#CC0000] transition-all duration-500 group flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-black uppercase tracking-wide">Catch Basin Risers</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  Heavy-duty rectangular frames designed to rapidly elevate existing curb inlets and drainage basins during full-depth reclamation.
                </p>
                <div className="pt-4">
                  <Button className="bg-white text-black hover:bg-[#CC0000] hover:text-white font-black uppercase tracking-widest rounded-none h-12 px-6 transition-colors">
                    Explore Catch Basins
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-64 h-64 relative bg-black/50 border border-white/5 rounded-sm flex items-center justify-center p-8 shrink-0 group-hover:scale-105 transition-transform duration-500 shadow-[0_0_50px_rgba(204,0,0,0.1)] group-hover:shadow-[0_0_50px_rgba(204,0,0,0.3)]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Square_riser_coated_finish.807.png`}
                  alt="Catch Basin Riser Solution"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
