'use client';

import React from 'react';
import Image from 'next/image';
import {
  FileText,
  Download,
  BookOpen,
  Video,
  PlayCircle,
  FileCheck2,
  Box,
  Layers,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LiteraturePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#CC0000] selection:text-white pb-32">

      {/* ========================================= */}
      {/* 1. CINEMATIC VIDEO HERO                   */}
      {/* ========================================= */}
      <div className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video autoPlay loop muted playsInline 
          
          
          
          
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
        >
          <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Curb_Inlet_riser/curb_inlet_riser.715.mp4`} type="video/mp4" />
        </video>

        {/* Heavy Gradients for text legibility and mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,0,0,0.2)_0%,transparent_80%)]" />

        <div className="relative z-10 w-full px-10 md:px-20 text-center max-w-5xl mx-auto space-y-8 mt-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 bg-black/50 backdrop-blur-md rounded-full">
            <BookOpen className="w-4 h-4 text-[#CC0000]" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">The Technical Vault</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
            Literature <br />
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px white' }}>& Specs</span>
          </h1>

          <p className="text-xl text-zinc-300 font-medium leading-relaxed max-w-2xl mx-auto">
            Direct access to Designed to meet applicable DOT requirements letters, comprehensive product catalogs, installation videos, and fully rendered 3D CAD/BIM files.
          </p>

          <div className="pt-8 max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for a spec sheet, manual, or DOT letter..."
              className="w-full bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder:text-zinc-500 h-16 pl-6 pr-16 rounded-none outline-none focus:border-[#CC0000] focus:bg-black/80 transition-all font-mono text-sm"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full px-10 md:px-20 pt-16">

        {/* ========================================= */}
        {/* 2. FEATURED VIDEO DOCUMENTARIES           */}
        {/* ========================================= */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Field <span className="text-[#CC0000]">Installations</span>
            </h2>
            <div className="h-[2px] flex-1 bg-white/10 ml-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Primary Video Feature */}
            <div className="bg-[#0A0A0A] border border-white/10 p-4 group cursor-pointer hover:border-[#CC0000] transition-colors relative overflow-hidden">
              <div className="relative w-full aspect-video bg-black overflow-hidden mb-8 border border-white/5">
                <video autoPlay loop muted playsInline 
                  
                  
                  
                  
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                >
                  <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Manhole_riser/fixed_manhole_riser_installation.mp4`} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-[#CC0000] rounded-full flex items-center justify-center pl-2 opacity-90 group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="flex items-center gap-2 text-[#CC0000] text-[10px] font-black uppercase tracking-widest mb-3">
                  <Video className="w-3 h-3" /> Step-by-Step Animation
                </div>
                <h3 className="text-3xl font-black uppercase tracking-wide mb-3">Solid Ring Utilization</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  Watch exactly how our solid ring systems are deployed in the field to securely elevate existing utility frames prior to top-coat paving.
                </p>
              </div>
            </div>

            {/* Secondary Video Feature */}
            <div className="bg-[#0A0A0A] border border-white/10 p-4 group cursor-pointer hover:border-[#CC0000] transition-colors relative overflow-hidden">
              <div className="relative w-full aspect-video bg-black overflow-hidden mb-8 border border-white/5">
                <video autoPlay loop muted playsInline 
                  
                  
                  
                  
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                >
                  <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Videos/Ayush_Design.752.mp4`} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center pl-2 opacity-90 group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-3">
                  <Video className="w-3 h-3" /> Frame Assembly
                </div>
                <h3 className="text-3xl font-black uppercase tracking-wide mb-3">Frame & Riser Integration</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  A high-speed breakdown of how the adjustable paving riser locks securely locks into the frame into the host frame using pivoting expansion mechanisms.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================= */}
        {/* 3. LITERATURE & DOCS GRID                 */}
        {/* ========================================= */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Official <span className="text-[#CC0000]">Documentation</span>
            </h2>
            <div className="h-[2px] flex-1 bg-white/10 ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Document Card 1 */}
            <div className="bg-[#111] border border-white/5 group hover:border-[#CC0000] transition-all duration-500 flex flex-col h-[500px]">
              <div className="relative h-64 bg-[#0A0A0A] overflow-hidden flex items-center justify-center border-b border-white/5">
                <Image src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_Riser_iron.608.png`} alt="Master Catalog" fill className="object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
                <BookOpen className="w-16 h-16 text-[#CC0000] relative z-10 group-hover:scale-125 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-wide mb-3">Master Product Catalog</h3>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                    The complete 2026 paving riser catalog containing dimensions, weights, and part numbers for all fabricated steel and iron products.
                  </p>
                </div>
                <Button className="w-full bg-white/5 border border-white/10 hover:bg-[#CC0000] hover:border-[#CC0000] text-white font-black uppercase tracking-widest rounded-none h-12 mt-6 transition-colors">
                  <Download className="w-4 h-4 mr-2" /> Download PDF
                </Button>
              </div>
            </div>

            {/* Document Card 2 */}
            <div className="bg-[#111] border border-white/5 group hover:border-[#CC0000] transition-all duration-500 flex flex-col h-[500px]">
              <div className="relative h-64 bg-[#0A0A0A] overflow-hidden flex items-center justify-center border-b border-white/5">
                {/* Simulated blueprint background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(204,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(204,0,0,0.1)_1px,transparent_1px)] bg-[size:10px_10px]" />
                <video autoPlay loop muted playsInline      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity">
                  <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Videos/1.711.mp4`} type="video/mp4" />
                </video>
                <FileCheck2 className="w-16 h-16 text-[#CC0000] relative z-10 group-hover:scale-125 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-wide mb-3">Designed to meet applicable DOT requirements Letters</h3>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                    Official acceptance and approval letters from state Departments of Transportation certifying our products for highway use.
                  </p>
                </div>
                <Button className="w-full bg-white/5 border border-white/10 hover:bg-[#CC0000] hover:border-[#CC0000] text-white font-black uppercase tracking-widest rounded-none h-12 mt-6 transition-colors">
                  <Download className="w-4 h-4 mr-2" /> Access Archive
                </Button>
              </div>
            </div>

            {/* Document Card 3 */}
            <div className="bg-[#111] border border-white/5 group hover:border-[#CC0000] transition-all duration-500 flex flex-col h-[500px]">
              <div className="relative h-64 bg-black overflow-hidden flex items-center justify-center border-b border-white/5">
                <video autoPlay loop muted playsInline      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity">
                  <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Videos/Riser_Animation.mp4`} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                <Box className="w-16 h-16 text-white relative z-10 group-hover:scale-125 group-hover:text-[#CC0000] transition-all duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-wide mb-3">3D CAD & BIM Files</h3>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                    Download exact 3D models and CAD blueprints for integration into your architectural or engineering site plans.
                  </p>
                </div>
                <Button className="w-full bg-white/5 border border-white/10 hover:bg-[#CC0000] hover:border-[#CC0000] text-white font-black uppercase tracking-widest rounded-none h-12 mt-6 transition-colors">
                  <Layers className="w-4 h-4 mr-2" /> Download CAD Zip
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
