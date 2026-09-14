'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Droplet, 
  ShieldAlert, 
  Activity, 
  ArrowRight,
  TrendingDown,
  Wrench,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SanitarySewerPage() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white selection:bg-[#CC0000] selection:text-white pb-32">
      
      {/* Background Matrix/Data Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(204,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(204,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="relative z-10 w-full px-10 md:px-20 pt-24 lg:pt-32">
        
        {/* --- DASHBOARD HERO --- */}
        <div className="border border-white/10 bg-[#0A0A0A] p-8 md:p-16 mb-24 relative overflow-hidden group">
          {/* Animated red glow behind text */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#CC0000]/10 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
                <Activity className="w-4 h-4 text-[#CC0000]" /> System Diagnostics
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                Sanitary <br />
                <span className="text-[#CC0000]">Sewer Protection</span>
              </h1>
              
              <p className="text-lg text-zinc-400 font-medium leading-relaxed max-w-xl">
                Municipal wastewater systems face constant threat from surface water infiltration. Our precision-engineered risers create an impenetrable mechanical seal, preventing stormwater from overwhelming treatment plants.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest rounded-none h-14 px-8 transition-colors">
                  minimize I&I
                </Button>
              </div>
            </div>

            {/* Data Metric Display */}
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="bg-[#111] border border-white/5 p-8 flex flex-col justify-between">
                <Droplet className="w-8 h-8 text-zinc-600 mb-8" />
                <div>
                  <p className="text-5xl font-black tracking-tighter text-white">40<span className="text-xl text-[#CC0000] ml-1">%</span></p>
                  <p className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mt-2">Avg. I&I Reduction</p>
                </div>
              </div>
              <div className="bg-[#111] border border-white/5 p-8 flex flex-col justify-between">
                <TrendingDown className="w-8 h-8 text-[#CC0000] mb-8" />
                <div>
                  <p className="text-5xl font-black tracking-tighter text-white">$2M<span className="text-xl text-zinc-600 ml-1">+</span></p>
                  <p className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mt-2">Treatment Cost Savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- TECHNICAL SPECS GRID --- */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-1 bg-[#CC0000]" />
            <h2 className="text-3xl font-black uppercase tracking-widest">Engineering Against I&I</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#0A0A0A] border-t-2 border-[#CC0000] p-8 hover:bg-[#111] transition-colors">
              <Lock className="w-10 h-10 text-white mb-6" />
              <h3 className="text-xl font-black uppercase tracking-wide mb-4">Mechanical Lockdown</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Pivoting expansion mechanisms expand the riser tight against the existing manhole frame. This extreme mechanical pressure prevents any shifting or rattling that could break the water seal over time.
              </p>
            </div>

            <div className="bg-[#0A0A0A] border-t-2 border-[#CC0000] p-8 hover:bg-[#111] transition-colors">
              <ShieldAlert className="w-10 h-10 text-white mb-6" />
              <h3 className="text-xl font-black uppercase tracking-wide mb-4">No Mortar Degradation</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Traditional brick and mortar adjustments crumble under heavy traffic and freeze-thaw cycles, allowing massive water infiltration. Solid iron risers completely minimize mortar failure.
              </p>
            </div>

            <div className="bg-[#0A0A0A] border-t-2 border-[#CC0000] p-8 hover:bg-[#111] transition-colors">
              <Wrench className="w-10 h-10 text-white mb-6" />
              <h3 className="text-xl font-black uppercase tracking-wide mb-4">Epoxy Seal Integration</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Designed to be installed with industrial-grade epoxy adhesives. The combination of expanding expansion mechanisms and epoxy creates a completely watertight, permanent bond with the host frame.
              </p>
            </div>

          </div>
        </div>

        {/* --- FEATURED PRODUCTS BANNER --- */}
        <div className="bg-[#CC0000] p-12 lg:p-24 relative overflow-hidden">
          <div className="absolute -right-32 -bottom-32 opacity-50">
            <Image 
              src={`/images/catch_basin_riser/rectangle_catch_basin_riser_cast_iron.png`} 
              alt="Background Riser" 
              width={800} 
              height={800} 
              className="object-contain"
            />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
              Protect Your Treatment Plant.
            </h2>
            <p className="text-xl font-medium text-white/90 leading-relaxed mb-10">
              Deploy our fully adjustable manhole risers on your next sanitary sewer resurfacing project and instantly lock out surface stormwater.
            </p>
            <Button size="lg" className="bg-black hover:bg-white text-white hover:text-black font-black uppercase tracking-widest px-10 h-16 rounded-none transition-colors">
              View Adjustable Risers <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
