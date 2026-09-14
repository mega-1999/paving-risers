'use client';

import React from 'react';
import Image from 'next/image';
import {
  ClipboardList,
  MoveUp,
  Maximize,
  Minimize,
  Compass,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- REQUIRED SPEC DATA DIRECTLY FROM 4.png ---
const ORDER_REQUIREMENTS = [
  {
    title: "Cover Diameter",
    description: "The horizontal dimension across the cover disc plate.",
    icon: <Compass className="w-5 h-5 text-[#CC0000]" />
  },
  {
    title: "Cover Thickness",
    description: "The depth of the cover rim where it seats.",
    icon: <Minimize className="w-5 h-5 text-[#CC0000]" />
  },
  {
    title: "Inside Clear Opening of Frame",
    description: "The clear / open space inside the frame.",
    icon: <Maximize className="w-5 h-5 text-[#CC0000]" />
  },
  {
    title: "Height to Raise",
    description: "How much you need to lift the cover to reach the newly-paved road height.",
    icon: <MoveUp className="w-5 h-5 text-[#CC0000]" />
  }
];

export default function RiserOrderSpecifications() {
  return (
    <section className="bg-white py-8 border-b border-slate-100 font-sans">
      <div className="w-full px-10 md:px-20 space-y-12">

        {/* --- MAIN HEADER COMPONENT BLOCK --- */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
            <ClipboardList className="w-4 h-4 text-[#CC0000]" /> How to Order
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-none">
            What we need to <br />
            <span className="text-[#CC0000]">size your riser.</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
            Send these four measurements before we make your riser to ensure an absolute tight fitment that locks into place under continuous heavy vehicle traffic.
          </p>
        </div>

        {/* --- TWIN-PANEL GRID MATRIX ARCHITECTURE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* LEFT PANEL: EXPLICIT STRUCTURAL BLUEPRINT SPECS CHECKLIST (7 Columns Wide) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ORDER_REQUIREMENTS.map((req, idx) => (
                <div
                  key={idx}
                  className="border border-slate-100 bg-slate-50/50 p-6 rounded-sm space-y-3 hover:border-[#CC0000] hover:bg-white transition-all duration-300 shadow-sm flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 bg-white border border-slate-200 text-[#CC0000] rounded-sm flex items-center justify-center shadow-sm group-hover:bg-[#0F0F0F] group-hover:border-[#0F0F0F] transition-all duration-300">
                      {req.icon}
                    </div>
                    <h3 className="font-black uppercase tracking-tight text-base text-slate-900 mt-2">
                      {req.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {req.description}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest pt-2 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#CC0000]" /> Parameter Required
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Quality Shield Footer */}
            <div className="border border-slate-200 bg-slate-50 p-4 rounded-sm flex items-center gap-3 text-xs font-bold text-slate-600">
              <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0" />
              <span>Accurate measurements mean a proper fit.</span>
            </div>
          </div>

          {/* RIGHT PANEL: SIDE COMPONENT DISPLAY LAYOUT IMAGE (5 Columns Wide) */}
          <div className="lg:col-span-5 relative bg-[#0F0F0F] border border-zinc-800 rounded-sm overflow-hidden p-8 flex flex-col justify-between shadow-2xl min-h-[400px] lg:min-h-0 group">

            {/* Ambient Background Brand Branding Red Radial Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#CC0000]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />

            <div className="space-y-2 relative z-10">
              <span className="text-[9px] font-mono font-black tracking-widest text-[#CC0000] uppercase block">
                Visual Reference Guide
              </span>
              <h4 className="text-xl font-black uppercase tracking-tight text-white">
                Measurement Blueprint Diagram
              </h4>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                Refer to our integrated reference model schematic layout below to verify exactly where to take cross-sectional frame dimensions across custom municipal castings.
              </p>
            </div>

            {/* 
              VISUAL ASSET HOUSING FRAMEPLACE: 
              Displays image source file reference "4.png" via standardNext.js optimized asset routing layout parameters.
            */}
            <div className="relative w-full h-64 bg-white border border-gray-200 rounded-sm mt-6 mb-6 overflow-hidden flex items-center justify-center p-4 shadow-inner">
              <Image
                src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/custom_riser/d_shape_riser_3d.png`}
                alt="4.png Ordering Data Visual Guide Component Reference"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-102"
              />
            </div>

            <div className="relative z-10">
              <Button className="w-full h-12 bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs rounded-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2">
                Download Ordering Spec Template <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}