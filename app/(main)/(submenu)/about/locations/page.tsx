'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Factory, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FoundryLocationsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#CC0000] selection:text-white pb-32">
      
      {/* ========================================= */}
      {/* 1. CINEMATIC HERO                         */}
      {/* ========================================= */}
      <div className="relative w-full h-[70vh] min-h-[500px] flex items-center overflow-hidden border-b border-white/10">
        
        {/* Background Imagery */}
        <div className="absolute inset-0 opacity-40">
          <Image 
            src={`/images/manhole_riser/fixed_round_manhole_riser_coated.png`} 
            alt="Foundry Operations" 
            fill 
            className="object-cover object-center mix-blend-luminosity" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 w-full px-10 md:px-20 max-w-6xl mt-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 bg-black/50 backdrop-blur-md rounded-full mb-8">
            <Factory className="w-4 h-4 text-[#CC0000]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">National Infrastructure</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl">
            Foundry <br />
            <span className="text-[#CC0000]">Locations</span>
          </h1>
          
          <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl border-l-4 border-[#CC0000] pl-6 bg-black/40 p-4 backdrop-blur-sm">
            Strategically positioned manufacturing and distribution hubs ensuring rapid deployment of DOT-approved paving risers across the Eastern Seaboard.
          </p>
        </div>
      </div>

      {/* ========================================= */}
      {/* 2. LOCATIONS SPLIT VIEW                   */}
      {/* ========================================= */}
      <div className="w-full px-10 md:px-20 mt-32 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* NEW YORK HQ */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#CC0000]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative bg-[#0A0A0A] border border-white/10 p-8 md:p-12 hover:border-white/30 transition-colors h-full flex flex-col">
              
              <div className="flex justify-between items-start mb-12">
                <div>
                  <p className="text-[#CC0000] font-mono text-sm font-bold tracking-[0.2em] mb-2 uppercase">Headquarters</p>
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">New York</h2>
                </div>
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-[#CC0000] group-hover:border-[#CC0000] transition-colors">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="space-y-8 flex-1">
                <div className="space-y-2">
                  <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">Address</p>
                  <p className="text-2xl font-bold leading-tight">105 Maxes Road<br />Melville, NY 11747, USA</p>
                </div>

                <div className="h-[1px] w-full bg-white/10" />

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2"><Phone className="w-3 h-3" /> Phone</p>
                    <p className="text-xl font-mono font-bold text-white">+1 (516) 252-1111</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2"><Mail className="w-3 h-3" /> Email</p>
                    <p className="text-sm font-mono font-bold text-white truncate hover:text-[#CC0000] cursor-pointer">info@pavingrisers.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <Button className="w-full bg-white text-black hover:bg-[#CC0000] hover:text-white font-black uppercase tracking-widest rounded-none h-14 transition-colors">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>

          {/* FLORIDA FACILITY */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-l from-[#CC0000]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative bg-[#0A0A0A] border border-white/10 p-8 md:p-12 hover:border-white/30 transition-colors h-full flex flex-col">
              
              <div className="flex justify-between items-start mb-12">
                <div>
                  <p className="text-[#CC0000] font-mono text-sm font-bold tracking-[0.2em] mb-2 uppercase">Southern Distribution Hub</p>
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">Florida</h2>
                </div>
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-[#CC0000] group-hover:border-[#CC0000] transition-colors">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="space-y-8 flex-1">
                <div className="space-y-2">
                  <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">Address</p>
                  <p className="text-2xl font-bold leading-tight">850 NW Federal Hwy<br />Stuart, FL 34994, USA</p>
                </div>

                <div className="h-[1px] w-full bg-white/10" />

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2"><Phone className="w-3 h-3" /> Phone</p>
                    <p className="text-xl font-mono font-bold text-white">(772) 297-0700</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2"><Mail className="w-3 h-3" /> Email</p>
                    <p className="text-sm font-mono font-bold text-white truncate hover:text-[#CC0000] cursor-pointer">info@pavingrisers.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <Button className="w-full bg-white/5 border border-white/10 text-white hover:bg-[#CC0000] hover:border-[#CC0000] font-black uppercase tracking-widest rounded-none h-14 transition-colors">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>

          {/* CANADA FACILITY */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-l from-[#CC0000]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative bg-[#0A0A0A] border border-white/10 p-8 md:p-12 hover:border-white/30 transition-colors h-full flex flex-col">
              
              <div className="flex justify-between items-start mb-12">
                <div>
                  <p className="text-[#CC0000] font-mono text-sm font-bold tracking-[0.2em] mb-2 uppercase">Canadian Hub</p>
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">Canada</h2>
                </div>
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-[#CC0000] group-hover:border-[#CC0000] transition-colors shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="space-y-8 flex-1">
                <div className="space-y-2">
                  <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">Address</p>
                  <p className="text-2xl font-bold leading-tight">One Younge Street<br />Toronto, Ontario M5E 1R4, Canada</p>
                </div>

                <div className="h-[1px] w-full bg-white/10" />

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2"><Phone className="w-3 h-3" /> Phone</p>
                    <p className="text-sm lg:text-base font-mono font-bold text-white whitespace-nowrap">+1 (438) 805-9990</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2"><Mail className="w-3 h-3" /> Email</p>
                    <p className="text-sm font-mono font-bold text-white truncate hover:text-[#CC0000] cursor-pointer">info@pavingrisers.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <Button className="w-full bg-white/5 border border-white/10 text-white hover:bg-[#CC0000] hover:border-[#CC0000] font-black uppercase tracking-widest rounded-none h-14 transition-colors">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================= */}
      {/* 3. LOGISTICS INFOBAR                      */}
      {/* ========================================= */}
      <div className="w-full px-10 md:px-20 mt-32 max-w-[1600px] mx-auto">
        <div className="bg-[#111] border border-white/10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="p-12 flex flex-col items-center text-center group hover:bg-[#0A0A0A] transition-colors cursor-pointer">
            <Truck className="w-12 h-12 text-[#CC0000] mb-6 group-hover:-translate-y-2 transition-transform duration-500" />
            <h3 className="text-xl font-black uppercase tracking-wide mb-3">Freight & LTL</h3>
            <p className="text-sm text-zinc-400 font-medium leading-relaxed">
              Nationwide shipping available for bulk municipal orders. Palletized and shrink-wrapped for maximum transit security.
            </p>
          </div>

          <div className="p-12 flex flex-col items-center text-center group hover:bg-[#0A0A0A] transition-colors cursor-pointer">
            <Clock className="w-12 h-12 text-[#CC0000] mb-6 group-hover:-translate-y-2 transition-transform duration-500" />
            <h3 className="text-xl font-black uppercase tracking-wide mb-3">Operating Hours</h3>
            <p className="text-sm text-zinc-400 font-medium leading-relaxed">
              Monday – Friday<br />
              7:00 AM – 5:00 PM EST<br />
              Emergency dispatch available.
            </p>
          </div>

          <div className="p-12 flex flex-col items-center text-center group hover:bg-[#0A0A0A] transition-colors cursor-pointer">
            <ShieldCheck className="w-12 h-12 text-[#CC0000] mb-6 group-hover:-translate-y-2 transition-transform duration-500" />
            <h3 className="text-xl font-black uppercase tracking-wide mb-3">Will-Call Pickup</h3>
            <p className="text-sm text-zinc-400 font-medium leading-relaxed">
              Contractors can schedule direct flatbed loading at both our NY and FL facilities with 24-hour notice.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
