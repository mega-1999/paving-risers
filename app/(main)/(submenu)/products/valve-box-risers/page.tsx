'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Droplet, 
  Settings, 
  ShieldCheck, 
  CheckCircle2,
  Wrench,
  Flame,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const FINISHES = [
  { name: 'Raw Finish', image: `/images/valve_box_riser/valve_box_riser_6in_1.jpeg` },
  { name: 'Coated Finish', image: `/images/valve_box_riser/valve_box_riser_1_5in.jpeg` },
  { name: 'Fabricated Steel', image: `/images/valve_box_riser/valve_box_riser_3in.jpeg` },
  { name: 'Cast Iron', image: `/images/valve_box_riser/valve_box_riser_5in.jpeg` },
];

export default function ValveBoxRisersPage() {
  const [activeFinish, setActiveFinish] = useState(FINISHES[0]);

  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-hidden selection:bg-[#CC0000] selection:text-white">
      
      {/* --- HERO SPOTLIGHT SECTION --- */}
      <div className="relative w-full min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12 px-6">
        
        {/* Spotlight Gradient Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full max-w-4xl h-full max-h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(204,0,0,0.15)_0%,transparent_70%)] blur-2xl" />
        </div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

        <div className="relative z-10 text-center space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#CC0000]/10 border border-[#CC0000]/30 rounded-full text-[#CC0000] text-xs font-black uppercase tracking-widest mx-auto">
            <Droplet className="w-3.5 h-3.5" /> Utility & Water Infrastructure
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
            Valve Box
            <br />
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>
              Risers
            </span>
          </h1>
        </div>

        {/* Floating Pill Finishes Menu */}
        <div className="relative z-20 flex flex-wrap justify-center gap-2 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-12 max-w-2xl mx-auto shadow-2xl">
          {FINISHES.map((finish, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFinish(finish)}
              className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeFinish.name === finish.name 
                  ? 'bg-[#CC0000] text-white shadow-[0_0_20px_rgba(204,0,0,0.4)]' 
                  : 'text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {finish.name}
            </button>
          ))}
        </div>

        {/* Main Product Visual */}
        <div className="relative z-10 w-full max-w-3xl aspect-[16/9] mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <Image
            key={activeFinish.name}
            src={activeFinish.image}
            alt={activeFinish.name}
            fill
            className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] hover:scale-110 transition-transform duration-1000"
            priority
          />
        </div>

      </div>

      {/* --- CASCADING SPEC CARDS SECTION --- */}
      <div className="relative z-20 bg-zinc-950 border-t border-white/10 px-6 md:px-12 lg:px-24 py-24">
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-2xl">
              Utility Infrastructure <span className="text-[#CC0000]">Engineered to Last.</span>
            </h2>
            <Button size="lg" className="bg-white text-black hover:bg-[#CC0000] hover:text-white font-black uppercase tracking-widest px-8 h-14 rounded-full transition-colors duration-300">
              Download CAD Files <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#0A0A0A] border border-white/10 p-10 rounded-3xl hover:border-[#CC0000] hover:bg-[#CC0000]/5 transition-all duration-500 group">
              <div className="w-16 h-16 bg-[#CC0000]/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Wrench className="w-8 h-8 text-[#CC0000]" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wide mb-4">Slip-In Installation</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                Our valve box risers are designed for instant drop-in installation. Simply slip them into the existing utility box frame before paving to achieve perfect grade instantly without excavation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0A0A0A] border border-white/10 p-10 rounded-3xl hover:border-[#CC0000] hover:bg-[#CC0000]/5 transition-all duration-500 group">
              <div className="w-16 h-16 bg-[#CC0000]/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-[#CC0000]" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wide mb-4">Water & Gas Rated</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                Engineered specifically for municipal water mains and gas utility boxes. These risers protect critical valves from being paved over, ensuring immediate access for emergency shutoffs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0A0A0A] border border-white/10 p-10 rounded-3xl hover:border-[#CC0000] hover:bg-[#CC0000]/5 transition-all duration-500 group">
              <div className="w-16 h-16 bg-[#CC0000]/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Flame className="w-8 h-8 text-[#CC0000]" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wide mb-4">Solid Casting</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                Available in raw steel, coated finishes, and solid cast iron. Designed to withstand extreme heavy loads and resist cracking under constant street-level vibrations and impact.
              </p>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
}
