'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Calculator, 
  Settings2, 
  Ruler, 
  Activity, 
  ArrowRight,
  Database,
  BarChart4
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CalculatorsPage() {
  const [diameter, setDiameter] = useState<number>(24);
  const [elevation, setElevation] = useState<number>(1.5);
  const [material, setMaterial] = useState<'solid-steel' | 'ductile-iron'>('solid-steel');

  // Simple arbitrary calculations for the UI demonstration
  const expansionForce = diameter * 420; // fake PSI
  const estimatedWeight = diameter * elevation * (material === 'solid-steel' ? 1.8 : 2.1);
  const estimatedCost = (estimatedWeight * 1.45).toFixed(2);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#CC0000] selection:text-white pb-32">
      
      {/* Background Tech Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(204,0,0,0.15)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 w-full px-10 md:px-20 pt-24 lg:pt-32">
        
        {/* ========================================= */}
        {/* 1. HERO SECTION                           */}
        {/* ========================================= */}
        <div className="max-w-5xl mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <Calculator className="w-4 h-4 text-[#CC0000]" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-300">
              Interactive Engineering Tools
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            Engineering <br />
            <span className="text-[#CC0000]">Calculators</span>
          </h1>
          
          <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl border-l-4 border-white/20 pl-6">
            Utilize our proprietary algorithms to calculate required elevation increments, kinetic load limits, and hydraulic flow capacities for your upcoming infrastructure projects.
          </p>
        </div>

        {/* ========================================= */}
        {/* 2. ACTIVE CALCULATOR DASHBOARD            */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
          
          {/* Controls Panel */}
          <div className="lg:col-span-5 bg-[#0A0A0A] border border-white/10 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-6">
              <Settings2 className="w-6 h-6 text-[#CC0000]" />
              <h2 className="text-2xl font-black uppercase tracking-wide">Riser Spec Configurator</h2>
            </div>

            <div className="space-y-10">
              {/* Diameter Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Frame Diameter</label>
                  <span className="font-mono text-xl text-white font-bold">{diameter}"</span>
                </div>
                <input 
                  type="range" 
                  min="18" 
                  max="48" 
                  step="2"
                  value={diameter}
                  onChange={(e) => setDiameter(Number(e.target.value))}
                  className="w-full accent-[#CC0000] h-1 bg-white/10 appearance-none rounded-none outline-none cursor-pointer"
                />
              </div>

              {/* Elevation Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Required Elevation</label>
                  <span className="font-mono text-xl text-white font-bold">{elevation}"</span>
                </div>
                <input 
                  type="range" 
                  min="0.5" 
                  max="8.0" 
                  step="0.25"
                  value={elevation}
                  onChange={(e) => setElevation(Number(e.target.value))}
                  className="w-full accent-[#CC0000] h-1 bg-white/10 appearance-none rounded-none outline-none cursor-pointer"
                />
              </div>

              {/* Material Toggle */}
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-zinc-400 block mb-4">Material Grade</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setMaterial('solid-steel')}
                    className={`py-4 text-xs font-black uppercase tracking-widest border transition-all ${material === 'solid-steel' ? 'bg-[#CC0000] border-[#CC0000] text-white' : 'bg-transparent border-white/10 text-zinc-500 hover:border-white/30'}`}
                  >
                    Solid Steel
                  </button>
                  <button 
                    onClick={() => setMaterial('ductile-iron')}
                    className={`py-4 text-xs font-black uppercase tracking-widest border transition-all ${material === 'ductile-iron' ? 'bg-[#CC0000] border-[#CC0000] text-white' : 'bg-transparent border-white/10 text-zinc-500 hover:border-white/30'}`}
                  >
                    Ductile Iron
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Telemetry / Output Panel */}
          <div className="lg:col-span-7 bg-[#111] border border-[#CC0000]/30 relative overflow-hidden flex flex-col justify-between">
            {/* Background 3D Model Video */}
            <video autoPlay loop muted playsInline  
               
               
               
              
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen pointer-events-none"
            >
              <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/manhole_riser/fixed_manhole_riser_installation.mp4`} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-[#111] pointer-events-none" />

            <div className="absolute top-0 right-0 p-6 flex items-center gap-2 text-[#CC0000] opacity-80 z-10">
              <Activity className="w-4 h-4 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase">Live Telemetry</span>
            </div>

            <div className="p-8 md:p-12 flex-1 flex items-center justify-center">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-12">
                
                {/* Metric 1 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-500 mb-2">
                    <Ruler className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Est. Assembly Weight</span>
                  </div>
                  <p className="text-5xl lg:text-7xl font-mono font-black tracking-tighter text-white">
                    {estimatedWeight.toFixed(0)}<span className="text-2xl text-zinc-600 ml-2">LBS</span>
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-500 mb-2">
                    <BarChart4 className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Expansion Mechanism Expansion Force</span>
                  </div>
                  <p className="text-5xl lg:text-7xl font-mono font-black tracking-tighter text-white">
                    {expansionForce.toLocaleString()}<span className="text-2xl text-zinc-600 ml-2">PSI</span>
                  </p>
                </div>

              </div>
            </div>

            <div className="bg-[#050505] border-t border-white/10 p-8 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Estimated Unit Price (MSRP)</p>
                <p className="text-3xl font-black text-[#CC0000]">${estimatedCost}</p>
              </div>
              <Button className="bg-white text-black hover:bg-[#CC0000] hover:text-white font-black uppercase tracking-widest rounded-none h-14 px-8 transition-colors w-full sm:w-auto">
                Generate Official Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* 3. ADDITIONAL TOOLS GRID                    */}
        {/* ========================================= */}
        <div className="border-t border-white/10 pt-24 mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Other <span className="text-zinc-600">Calculators</span>
            </h2>
            <div className="h-1 flex-1 bg-white/10 ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-[#0A0A0A] border border-white/5 group hover:border-white/20 transition-colors cursor-pointer relative overflow-hidden flex flex-col h-full min-h-[300px]">
              <div className="absolute right-0 top-0 w-64 h-64 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <Image src={`/images/custom_riser/d_shape_riser_steel.png`} alt="Hydraulic Flow" fill className="object-cover" />
              </div>
              <div className="p-10 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <Database className="w-10 h-10 text-[#CC0000] mb-6" />
                  <h3 className="text-2xl font-black uppercase tracking-wide mb-3">Hydraulic Flow Calculator</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed mb-8">
                    Calculate total GPM (Gallons Per Minute) runoff bypass prevention when upgrading from 3-sided to 4-sided catch basin risers.
                  </p>
                </div>
                <span className="text-white text-xs font-black uppercase tracking-widest flex items-center group-hover:text-[#CC0000] group-hover:translate-x-2 transition-all">
                  Launch Tool <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </div>

            <div className="bg-[#0A0A0A] border border-white/5 group hover:border-white/20 transition-colors cursor-pointer relative overflow-hidden flex flex-col h-full min-h-[300px]">
              <div className="absolute right-0 top-0 w-64 h-64 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <Image src={`/images/manhole_riser/adjustable_manhole_riser_coated.png`} alt="Epoxy Estimator" fill className="object-cover" />
              </div>
              <div className="p-10 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <Activity className="w-10 h-10 text-[#CC0000] mb-6" />
                  <h3 className="text-2xl font-black uppercase tracking-wide mb-3">Epoxy Volume Estimator</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed mb-8">
                    Input your required riser circumference and elevation gap to calculate exactly how many tubes of industrial epoxy sealant are required per frame.
                  </p>
                </div>
                <span className="text-white text-xs font-black uppercase tracking-widest flex items-center group-hover:text-[#CC0000] group-hover:translate-x-2 transition-all">
                  Launch Tool <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
