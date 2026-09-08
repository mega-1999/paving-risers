'use client';

import React from 'react';
import Image from 'next/image';
import {
  Grid,
  ShieldCheck,
  Ruler,
  Flame,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  Wrench
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- FABRICATED GRATE PRODUCT SPECIFICATIONS ---
const GRATE_FEATURES = [
  {
    title: "Heavy-Duty Welded Steel Construction",
    description: "Welded from structural carbon steel or ductile iron."
  },
  {
    title: "Custom Structural Form Factors",
    description: "Made in round, square, rectangular, and D-shape to fit existing frames."
  },
  {
    title: "Bespoke Hydraulic Flow Patterns",
    description: "Available in standard parallel slotted, ADA-compliant pedestrian safe, or high-volume diagonal bicycle-safe grate designs."
  },
  {
    title: "Corrosion & Salt Protection",
    description: "Bituminous or galvanized coating for salt and weather resistance."
  }
];

const FABRICATION_SPECS = [
  { label: "Material Grade", value: "Steel / Iron" },
  { label: "Grate Depth", value: "Built to Match Seat Thickness" },
  { label: "Coating Options", value: "Bituminous Black / Galvanized" }
];

export default function FabricatedGratesSection() {
  return (
    <section className="bg-white py-4 border-b border-slate-100 font-sans">
      <div className="w-full px-10 md:px-20 space-y-12">

        {/* --- SECTION HEADER --- */}
        <div className="space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
            <Grid className="w-4 h-4 text-[#CC0000]" /> Stormwater & Drainage Catalog
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-none">
            Fabricated Grates & <br />
            <span className="text-[#CC0000]">Inlet Frame Covers.</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
            Custom welded steel grates that fit our catch basin and riser frames.
          </p>
        </div>

        {/* --- MAIN FEATURE SPLIT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* LEFT PANEL: SPECIFICATION MATRIX (7 Columns) */}
          <div className="lg:col-span-5 relative bg-[#0F0F0F] border border-zinc-800 rounded-sm overflow-hidden p-8 flex flex-col justify-between shadow-2xl min-h-[420px] group">

            {/* Ambient Background Red Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#CC0000]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />

            <div className="space-y-2 relative z-10">
              <span className="text-[9px] font-mono font-black tracking-widest text-[#CC0000] uppercase block">
                Custom Engineering
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                Built To Your Exact Measurements
              </h3>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                Damaged or non-standard storm frame? Provide your grate outer dimensions, seat depth, and clear opening dimensions for an immediate fabrication quote.
              </p>
            </div>


            <div className="relative w-full h-64 bg-white border border-zinc-800 rounded-sm my-6 overflow-hidden flex items-center justify-center p-4">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                {/* <Grid className="w-12 h-12 text-[#CC0000] stroke-[1.5]" />
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                  Fabricated Steel Drainage Grate Assembly
                </span> */}
                <Image src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/frame_and_cover.png`} alt='Fabricated Grates' height={'1200'} width={'1200'} />
              </div>
            </div>



            <div className="relative z-10">
              <Button className="w-full h-12 bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs rounded-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2">
                Request Grate Quote <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

          </div>


          {/* RIGHT PANEL: VISUAL BLUEPRINT CARD (5 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GRATE_FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  className="border border-slate-100 bg-slate-50/50 p-6 rounded-sm space-y-2 hover:border-[#CC0000] hover:bg-white transition-all duration-300 shadow-sm group"
                >
                  <div className="flex items-center gap-2 text-[#CC0000]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <h3 className="font-black uppercase tracking-wider text-xs text-slate-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* TECHNICAL SPECS TABLE */}
            <div className="bg-[#0F0F0F] text-white p-6 rounded-sm border border-zinc-800 space-y-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block">
                Manufacturing Standards
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {FABRICATION_SPECS.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span className="text-zinc-400 font-bold uppercase">{spec.label}:</span>
                    <span className="text-[#CC0000] font-mono font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* --- LOWER ACTION FOOTER BLOCK --- */}
        <div className="border border-slate-200 bg-slate-50 p-6 rounded-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
            <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0" />
            <span>Compliance and testing documentation available upon request.</span>
          </div>
          <a href="#contact" className="shrink-0">
            <span className="text-xs font-black uppercase tracking-wider text-[#CC0000] hover:underline flex items-center gap-1">
              Submit Custom Drawings <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}