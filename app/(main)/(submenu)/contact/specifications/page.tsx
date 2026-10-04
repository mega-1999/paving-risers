'use client';

import React from 'react';
import Image from 'next/image';
import { UploadCloud, FileCog, FileText, CheckCircle2, ShieldCheck, Lock, ChevronRight, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SubmitSpecificationsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#CC0000] selection:text-white pb-0">


      <div className="relative w-full min-h-[60vh] flex flex-col lg:flex-row items-center border-b border-white/10 overflow-hidden bg-[#0A0A0A]">

        {/* Left Text Column */}
        <div className="w-full lg:w-1/2 px-6 md:px-12 py-20 lg:py-0 relative z-20 flex flex-col justify-center h-full">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#CC0000]/30 bg-[#CC0000]/10 backdrop-blur-md rounded-full w-max mb-8">
            <Cpu className="w-4 h-4 text-[#CC0000]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#CC0000]">Secure Engineering Portal</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
            Submit <br />
            <span className="text-white drop-shadow-2xl">Specifications</span>
          </h1>

          <p className="text-lg text-zinc-400 font-medium leading-relaxed max-w-lg border-l-4 border-[#CC0000] pl-6">
            Upload your municipal blueprints, CAD models, and DOT requirement sheets directly to our engineering team for specialized manufacturing review.
          </p>
        </div>

        {/* Right Media Column */}
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-full bg-black group overflow-hidden border-l border-white/10">
          <video autoPlay loop muted playsInline 
            suppressHydrationWarning
            className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          >
            <source src="/videos/curb_inlet_riser/curb_inlet_overview.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-transparent hidden lg:block w-1/3" />

          {/* Overlay Tech Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(204,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(204,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </div>
      </div>

      {/* ========================================= */}
      {/* 2. THE SECURE UPLOAD DASHBOARD            */}
      {/* ========================================= */}
      <div className="w-full px-6 md:px-12 py-20 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* LEFT: Massive Upload Zone */}
          <div className="w-full lg:w-2/3 space-y-12">

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="text-3xl font-black uppercase tracking-wide">Drawing & CAD Uploader</h2>
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-black uppercase tracking-widest">
                <Lock className="w-4 h-4 text-[#CC0000]" /> 256-bit Encrypted
              </div>
            </div>

            {/* The Drop Zone (Designed to look heavily industrial) */}
            <div className="relative w-full h-[400px] bg-[#0A0A0A] border-2 border-dashed border-white/20 hover:border-[#CC0000] transition-colors duration-500 group cursor-pointer flex flex-col items-center justify-center overflow-hidden">

              {/* Background Ghost Video */}
              <video autoPlay loop muted playsInline suppressHydrationWarning onEnded={(e) => e.currentTarget.play()} className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity">
                <source src="/videos/animations/paving_riser_solid_ring_utilisation_animation.685.mp4" type="video/mp4" />
              </video>

              <div className="relative z-10 flex flex-col items-center text-center p-8">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:bg-[#CC0000] transition-all duration-500">
                  <UploadCloud className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-2 text-white">Drag & Drop Files Here</h3>
                <p className="text-zinc-400 font-medium max-w-md mx-auto mb-8">
                  Support for heavy CAD formats (.dwg, .dxf, .step, .rvt) and standard municipal blueprints (.pdf, .zip).
                </p>
                <Button className="bg-white text-black font-black uppercase tracking-widest rounded-none h-12 px-8 hover:bg-[#CC0000] hover:text-white transition-colors">
                  Browse Computer
                </Button>
              </div>
            </div>

            {/* Engineer Details Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-[#111] border border-white/5">
              <div className="space-y-2 md:col-span-2">
                <h3 className="text-sm font-black uppercase tracking-widest text-[#CC0000] mb-4">Engineer / Architect Details</h3>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Firm Name</label>
                <input type="text" className="w-full bg-black border border-white/10 focus:border-[#CC0000] p-4 text-white outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Project Municipality</label>
                <input type="text" className="w-full bg-black border border-white/10 focus:border-[#CC0000] p-4 text-white outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Contact Email</label>
                <input type="email" className="w-full bg-black border border-white/10 focus:border-[#CC0000] p-4 text-white outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Direct Phone</label>
                <input type="tel" className="w-full bg-black border border-white/10 focus:border-[#CC0000] p-4 text-white outline-none transition-colors" />
              </div>

              <div className="md:col-span-2 mt-4">
                <Button className="w-full bg-[#CC0000] text-white hover:bg-white hover:text-black font-black uppercase tracking-[0.2em] h-16 transition-colors rounded-none flex items-center justify-between px-8 group">
                  <span>Transmit Specifications</span>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>

          </div>

          {/* RIGHT: Visual Requirements Sidebar */}
          <div className="w-full lg:w-1/3 space-y-8">

            {/* Visual Callout Card */}
            <div className="w-full bg-black border border-white/10 overflow-hidden group">
              <div className="relative aspect-video">
                <Image src={`/images/catch_basin_riser/rectangle_catch_basin_riser_cast_iron.png`} alt="Engineering" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#CC0000]" />
                  <span className="text-xs font-black uppercase tracking-widest">Paving Standard Compliant</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-black uppercase tracking-wide mb-2">Municipal Tolerance</h4>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                  Our engineering team will review your specs to ensure total compliance with local DOT load requirements and vertical clearance tolerances.
                </p>
              </div>
            </div>

            {/* Supported Formats Visual List */}
            <div className="bg-[#111] border border-white/5 p-8">
              <h4 className="text-sm font-black uppercase tracking-widest text-[#CC0000] border-b border-white/10 pb-4 mb-6">Accepted Data Types</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black border border-white/10 flex items-center justify-center shrink-0">
                    <FileCog className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white uppercase text-sm">3D CAD / BIM</p>
                    <p className="text-xs text-zinc-500 font-mono mt-1">.dwg, .dxf, .step, .rvt</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black border border-white/10 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white uppercase text-sm">Flat Blueprints</p>
                    <p className="text-xs text-zinc-500 font-mono mt-1">.pdf (High-Res only)</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* ========================================= */}
      {/* 3. FULL-WIDTH VIDEO SEPARATOR             */}
      {/* ========================================= */}
      <div className="w-full relative h-[400px] border-t border-white/10 bg-black overflow-hidden mt-16 group">
        <video autoPlay loop muted playsInline 
          suppressHydrationWarning
          onEnded={(e) => e.currentTarget.play()}
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
        >
          <source src="/videos/curb_inlet_riser/curb_inlet_riser_anim_2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-black/40">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 shadow-black drop-shadow-2xl">
            Precision Built. <span className="text-[#CC0000]">Guaranteed Fit.</span>
          </h2>
          <p className="text-lg text-white font-medium max-w-2xl drop-shadow-lg">
            Every specification submitted is cross-referenced with our massive library of proprietary castings to ensure flawless frame integration.
          </p>
        </div>
      </div>

    </div>
  );
}
