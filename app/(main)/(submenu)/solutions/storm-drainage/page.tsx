'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Waves,
  Droplets,
  MoveDiagonal,
  Grid,
  ChevronRight,
  ArrowRight,
  FileText,
  ShieldAlert,
  BarChart3,
  CheckCircle2,
  Settings2,
  CloudRain
} from 'lucide-react';

const DRAINAGE_DATA = {
  title: 'Storm',
  subtitle: 'Drainage Systems',
  heroImage: `/images/catch_basin_riser/square_catch_basin_riser_coated.png`,
  description: 'Precision-engineered for high-velocity runoff. Our drainage risers ensure optimal hydraulic capacity while maintaining a flush street-level profile.',
  overview: 'Effective stormwater management requires more than just an opening in the ground. It requires a precision seated frame that can handle the sheer force of road runoff during heavy precipitation events. Paving Risers provides 3-sided and 4-sided catch basin solutions that prevent bypass and ensure every gallon of water enters the municipal system as intended.',
  stats: [
    { label: 'Hydraulic Capacity', value: '100%', icon: <Waves className="w-6 h-6" /> },
    { label: 'Slope Adjustment', value: '0 - 15%', icon: <MoveDiagonal className="w-6 h-6" /> },
    { label: 'Load Rating', value: 'Load Rating: See individual product specification Heavy', icon: <BarChart3 className="w-6 h-6" /> },
  ]
};

export default function StormDrainagePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#CC0000] selection:text-white pb-32">

      {/* --- BACKGROUND RAIN / HYDRO EFFECT --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle vertical rain lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4px_100px]" />
        {/* Deep blue/red gradient mix for storm feel */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(204,0,0,0.08)_0%,transparent_70%)] blur-[120px]" />
      </div>

      <div className="relative z-10 w-full px-10 md:px-20 pt-24 lg:pt-32">

        {/* ========================================= */}
        {/* 1. HYDRO HERO SECTION                     */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full">
              <CloudRain className="w-4 h-4 text-[#CC0000]" />
              <span className="text-[#CC0000] font-black uppercase tracking-[0.2em] text-xs">
                Stormwater Management
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
              {DRAINAGE_DATA.title} <br />
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
                Drainage
              </span>
            </h1>

            <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl border-l-4 border-[#CC0000] pl-6">
              {DRAINAGE_DATA.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-8">
              <Button className="bg-[#CC0000] hover:bg-white hover:text-black text-white font-black px-10 h-16 uppercase tracking-widest transition-all rounded-none shadow-[0_0_40px_rgba(204,0,0,0.3)]">
                Get Drainage Specs <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 grid gap-6">
            {DRAINAGE_DATA.stats.map((stat, i) => (
              <div key={i} className="bg-[#111] border border-white/5 p-8 flex items-center justify-between group hover:border-[#CC0000] transition-colors">
                <div>
                  <p className="text-4xl font-black tracking-tighter">{stat.value}</p>
                  <p className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mt-2">{stat.label}</p>
                </div>
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center border border-white/10 group-hover:bg-[#CC0000] group-hover:border-[#CC0000] transition-colors">
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================= */}
        {/* 2. TECHNICAL DEEP DIVE (SPLIT GRID)       */}
        {/* ========================================= */}
        <div className="border-t border-white/10 pt-32 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight flex items-center gap-4 mb-6">
                  <Droplets className="text-[#CC0000] w-10 h-10" />
                  Flow <span className="text-[#CC0000]">Optimization</span>
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                  {DRAINAGE_DATA.overview}
                </p>
              </div>

              {/* Engineering Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Anti-Bypass Flange', desc: 'Ensures water enters the basin without seeping under the frame.' },
                  { icon: <MoveDiagonal />, title: 'Slope Tapering', desc: 'Precision-angled frames to match road crown and curb gradients.' },
                  { title: 'Debris Guard', desc: 'Integrated seating prevents sediment from entering the drainage structure.' },
                  { title: 'Galvanized Steel', desc: 'Hot-dip protection for maximum life in high-moisture environments.' }
                ].map((feat, i) => (
                  <div key={i} className="bg-[#0A0A0A] p-8 border-l-2 border-[#CC0000] hover:bg-[#111] transition-colors group">
                    <h4 className="font-black uppercase text-lg mb-3 tracking-widest group-hover:text-[#CC0000] transition-colors">{feat.title}</h4>
                    <p className="text-sm font-medium text-zinc-500 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sticky Data Box */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="bg-[#111] border border-white/10 p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CC0000]/10 blur-3xl" />

                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#CC0000] mb-8 flex items-center gap-2 border-b border-white/10 pb-4">
                  <FileText size={16} /> Hydraulic Data Sheet
                </h3>

                <div className="space-y-6 mb-12 relative z-10">
                  {[
                    { label: 'Grate Compability', value: 'Standard Type R, C, & V' },
                    { label: 'Wall Thickness', value: '0.5" Reinforced Structural' },
                    { label: 'Yield Strength', value: '36,000 PSI Minimum' },
                    { label: 'Coating Standard', value: 'ASTM A123 Galvanizing' },
                    { label: 'Rise Capacity', value: 'Adjustable 1" to 8"' }
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-white/5 pb-3 group hover:border-white/20 transition-colors">
                      <span className="text-zinc-500 text-[10px] font-mono font-bold uppercase tracking-widest">{spec.label}</span>
                      <span className="font-bold text-sm text-white group-hover:text-[#CC0000] transition-colors">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-black/50 border border-[#CC0000]/30 mb-8 rounded-sm">
                  <div className="flex items-center gap-3">
                    <ShieldAlert className="text-[#CC0000] w-6 h-6 shrink-0" />
                    <span className="text-xs font-black uppercase tracking-widest leading-relaxed">Critical Bypass Prevention Technology</span>
                  </div>
                </div>

                <Button className="w-full bg-[#CC0000] hover:bg-white hover:text-black text-white font-black h-16 uppercase tracking-widest text-xs transition-colors rounded-none group">
                  Download Submittal Package <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================= */}
        {/* 3. DRAINAGE SOLUTIONS GRID                */}
        {/* ========================================= */}
        <div className="border-t border-white/10 pt-32 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                3-Sided vs. <br />
                <span className="text-[#CC0000]">4-Sided Solutions</span>
              </h2>
              <p className="text-zinc-400 text-lg font-medium leading-relaxed">
                Different drainage structures require different seating geometries. We offer 3-sided risers for curb-back inlets and full 4-sided frames for flat street grates.
              </p>

              <div className="grid gap-4 pt-4">
                {[
                  { title: '3-Sided', desc: 'Optimized for curb abutments' },
                  { title: '4-Sided', desc: 'Reinforced for open roadway grates' },
                  { title: 'Sloped', desc: 'Custom tapered for road crowning' },
                  { title: 'D-Shape', desc: 'Specialized perimeter profiles' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-[#111] p-4 border border-white/5">
                    <div className="h-3 w-3 bg-[#CC0000] rotate-45" />
                    <span className="font-black uppercase tracking-widest text-sm">{item.title}:</span>
                    <span className="text-sm font-medium text-zinc-500">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-video bg-[#0A0A0A] border border-white/10 p-8 flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] pointer-events-none" />
              <Settings2 className="w-64 h-64 text-[#CC0000]/10 absolute animate-pulse group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-10 text-center bg-black/40 backdrop-blur-sm p-8 border border-white/5">
                <p className="text-xs font-mono font-bold uppercase tracking-[0.5em] text-[#CC0000] mb-4">Blueprints Ready</p>
                <p className="text-3xl font-black uppercase tracking-tight">Custom Fabrication <br /> For Any Catch Basin</p>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================= */}
        {/* 4. CALL TO ACTION                          */}
        {/* ========================================= */}
        <div className="bg-[#CC0000] p-12 md:p-24 relative overflow-hidden text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,transparent_70%)] pointer-events-none" />

          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none text-white relative z-10">
            Secure Your <br /> Gutter Flow
          </h2>
          <p className="max-w-2xl mx-auto font-bold text-xl text-white/90 mb-12 italic relative z-10">
            "Preventing street flooding begins with precision at the pavement level."
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Button className="bg-black text-white hover:bg-white hover:text-black font-black px-12 h-20 text-lg uppercase tracking-widest transition-colors rounded-none shadow-2xl">
              Get A Drainage Quote
            </Button>
            <Button variant="outline" className="border-4 border-black text-black bg-transparent hover:bg-black hover:text-white font-black px-12 h-20 text-lg uppercase tracking-widest transition-colors rounded-none">
              Speak to an Engineer
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}