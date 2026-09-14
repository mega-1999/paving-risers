'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Plane,
  Anchor,
  ShieldCheck,
  TrendingUp,
  Target,
  ArrowRight,
  Activity,
  Layers,
  Crosshair
} from 'lucide-react';
import Image from 'next/image';

export default function AirportsPortsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#CC0000] selection:text-white pb-32">

      {/* --- RADAR / AVIATION BACKGROUND EFFECT --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-20">
        <div className="absolute w-[150vw] h-[150vw] max-w-[1200px] max-h-[1200px] rounded-full border border-white/5" />
        <div className="absolute w-[100vw] h-[100vw] max-w-[800px] max-h-[800px] rounded-full border border-white/10" />
        <div className="absolute w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] rounded-full border border-[#CC0000]/20" />
        {/* Radar Sweep Line */}
        <div className="absolute w-[50vw] h-[1px] max-w-[400px] bg-gradient-to-r from-transparent via-[#CC0000] to-transparent origin-left animate-[spin_4s_linear_infinite]" />
      </div>

      <div className="relative z-10 w-full px-10 md:px-20 pt-24 lg:pt-32">
        
        {/* ========================================= */}
        {/* 1. CLASSIFIED / EXTREME HERO              */}
        {/* ========================================= */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-4 h-4 bg-[#CC0000] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#CC0000]">
              Class: Extreme Load Bearing
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
                Airports<br />
                <span className="text-zinc-600">& Ports</span>
              </h1>
            </div>
            <div className="bg-[#111] border-l-4 border-[#CC0000] p-8 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CC0000]/10 blur-3xl pointer-events-none" />
              <Crosshair className="w-8 h-8 text-[#CC0000] mb-4 group-hover:rotate-90 transition-transform duration-700" />
              <p className="text-lg text-zinc-400 font-medium leading-relaxed">
                Aviation tarmacs and deep-water port terminals endure the highest concentrated vehicular weight on earth. Our extra-heavy-duty casting risers are engineered specifically to survive cargo handlers and commercial aircraft traffic.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* 2. MILITARY-GRADE METRICS GRID            */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-32 border border-white/10 bg-white/10">
          {[
            { label: 'Max Point Load', value: '150K+', unit: 'LBS', icon: <TrendingUp className="w-6 h-6 text-[#CC0000]" /> },
            { label: 'Compliance', value: 'FAA', unit: 'APPRVD', icon: <Plane className="w-6 h-6 text-[#CC0000]" /> },
            { label: 'Material Yield', value: 'Class', unit: '35 IRON', icon: <ShieldCheck className="w-6 h-6 text-[#CC0000]" /> }
          ].map((stat, i) => (
            <div key={i} className="bg-[#050505] p-12 hover:bg-[#111] transition-colors group relative overflow-hidden">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#CC0000] transition-colors">
                  {stat.icon}
                </div>
                <div className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest text-right">
                  System<br />Metric 0{i + 1}
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-6xl font-black tracking-tighter text-white group-hover:text-[#CC0000] transition-colors duration-500">
                  {stat.value}<span className="text-2xl text-zinc-600 ml-2">{stat.unit}</span>
                </p>
                <p className="text-sm font-black uppercase tracking-widest text-zinc-400 mt-4">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================= */}
        {/* 3. TERMINAL APPLICATIONS BENTO            */}
        {/* ========================================= */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Extreme <span className="text-[#CC0000]">Applications</span>
            </h2>
            <div className="h-1 flex-1 bg-white/10 ml-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Aviation Box */}
            <div className="bg-[#0A0A0A] border border-white/5 hover:border-[#CC0000] transition-all duration-500 group flex flex-col justify-between p-12 h-full min-h-[400px]">
              <div>
                <Plane className="w-12 h-12 text-zinc-600 group-hover:text-white mb-8 transition-colors" />
                <h3 className="text-4xl font-black uppercase tracking-wide mb-4">Aviation Tarmacs</h3>
                <p className="text-zinc-400 font-medium leading-relaxed max-w-lg">
                  Runways, taxiways, and terminal aprons require infrastructure that will not deflect under the massive point-load of a commercial jetliner gear. Our solid iron utility risers lock down flush to ensure zero FOD (Foreign Object Debris) hazard.
                </p>
              </div>
              <div className="mt-12 flex justify-end">
                <Button variant="outline" className="border-white/20 text-[#CC0000] hover:bg-white hover:text-black font-black uppercase tracking-widest rounded-none h-12 px-6">
                  View Aviation Specs
                </Button>
              </div>
            </div>

            {/* Ports Box */}
            <div className="bg-[#0A0A0A] border border-white/5 hover:border-[#CC0000] transition-all duration-500 group flex flex-col justify-between p-12 h-full min-h-[400px]">
              <div>
                <Anchor className="w-12 h-12 text-zinc-600 group-hover:text-white mb-8 transition-colors" />
                <h3 className="text-4xl font-black uppercase tracking-wide mb-4">Intermodal Ports</h3>
                <p className="text-zinc-400 font-medium leading-relaxed max-w-lg">
                  Gantry cranes, reach stackers, and fully loaded shipping containers exert extreme continuous pressure on port asphalt. Our heavy-duty catch basin frames handle the crushing weight while draining massive seaside stormwater volumes.
                </p>
              </div>
              <div className="mt-12 flex justify-end">
                <Button variant="outline" className="border-white/20 text-[#CC0000] hover:bg-white hover:text-black font-black uppercase tracking-widest rounded-none h-12 px-6">
                  View Port Specs
                </Button>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================= */}
        {/* 4. HEAVY FABRICATION CALLOUT               */}
        {/* ========================================= */}
        <div className="bg-gradient-to-r from-[#CC0000] to-[#800000] p-12 lg:p-24 relative overflow-hidden group">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-50 group-hover:scale-105 transition-transform duration-1000">
            {/* <Layers className="w-[800px] h-[800px] text-black" /> */}
            <Image src={`/images/fabricated_steel/fabricated_steel_drainage_grate_assembly_2.png`} alt='Heavy Fabrication Callout' width={'400'} height={'400'}/>
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest mb-8">
              <Activity className="w-3 h-3 text-[#CC0000]" /> Custom Engineering Division
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
              Require A Custom <br /> Load Rating?
            </h2>
            <p className="text-xl font-bold text-white/90 leading-relaxed mb-12">
              If your facility hosts specialized heavy equipment that exceeds standard highway Load Rating: See individual product specification ratings, our foundry engineers will design and cast a custom solution guaranteed to perform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-black hover:bg-white text-white hover:text-black font-black uppercase tracking-widest px-10 h-16 rounded-none transition-colors shadow-2xl">
                Submit Blueprints
              </Button>
              <Button size="lg" variant="outline" className="border-4 border-black text-black bg-transparent hover:bg-black hover:text-white font-black uppercase tracking-widest px-10 h-16 rounded-none transition-colors">
                Contact Engineers
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}