'use client';

import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Settings,
  Flag,
  ArrowUpRight,
  Info,
  Layers
} from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function CatchBasinSteelRisers() {
  return (
    <section className="bg-white py-12 border-b border-gray-100 font-sans w-full">
      {/* Absolute strict fluid full width padding */}
      <div className="w-full px-10 md:px-20 space-y-12">

        {/* --- MAIN SECTION INTRO HEADER --- */}
        <div className="w-full space-y-3">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#cc2221] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#cc2221]" /> Catch Basin Risers
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#0a0a0a] leading-none">
            Steel catch basin risers, <br />
            <span className="text-[#cc2221]">precision engineered to fit.</span>
          </h2>
          <p className="text-zinc-600 text-lg font-medium leading-relaxed max-w-none">
            Minimize intensive structural rebuilds during overlays. Our high-tensile steel riser extensions are built to fit your existing catch basin frames.
          </p>
        </div>

        {/* --- DUAL GRID VIEWPORT ARCHITECTURE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">

          {/* LEFT: CRISP ARCHITECTURAL SPECS LIST (7 Columns Wide) */}
          <div className="lg:col-span-7 space-y-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

              {/* Feature 1 */}
              <div className="border border-gray-100 bg-gray-50/50 p-6 rounded-xs space-y-2">
                <div className="flex items-center gap-2 text-[#cc2221]">
                  <Layers className="w-5 h-5" />
                  <h3 className="font-black uppercase tracking-wider text-xs text-[#0a0a0a]">Form Profiles</h3>
                </div>
                <p className="text-sm font-bold text-zinc-800">Square or Rectangular Configurations</p>
                <p className="text-xs text-zinc-500 leading-relaxed">Available in standard and irregular orthogonal matrices to slide cleanly over existing catch basin frameworks.</p>
              </div>

              {/* Feature 2 */}
              <div className="border border-gray-100 bg-gray-50/50 p-6 rounded-xs space-y-2">
                <div className="flex items-center gap-2 text-[#cc2221]">
                  <Settings className="w-5 h-5" />
                  <h3 className="font-black uppercase tracking-wider text-xs text-[#0a0a0a]">Engineering</h3>
                </div>
                <p className="text-sm font-bold text-zinc-800">Fabricated to Your Exact Specs</p>
                <p className="text-xs text-zinc-500 leading-relaxed">Built per field dimensions, matching custom clearance parameters to guarantee zero movement under high-impact road loads.</p>
              </div>

              {/* Feature 3 */}
              <div className="border border-gray-100 bg-gray-50/50 p-6 rounded-xs space-y-2">
                <div className="flex items-center gap-2 text-[#cc2221]">
                  <Flag className="w-5 h-5" />
                  <h3 className="font-black uppercase tracking-wider text-xs text-[#0a0a0a]">Origin Quality</h3>
                </div>
                <p className="text-sm font-bold text-zinc-800">Proudly Made in America</p>
                <p className="text-xs text-slate-500 leading-relaxed">Forged and assembled domestically using high-tensile steel alloys matching domestic construction mandates.</p>
              </div>

              {/* Feature 4 */}
              <div className="border border-gray-100 bg-gray-50/50 p-6 rounded-xs space-y-2">
                <div className="flex items-center gap-2 text-[#cc2221]">
                  <ShieldCheck className="w-5 h-5" />
                  <h3 className="font-black uppercase tracking-wider text-xs text-[#0a0a0a]">Depth Grading</h3>
                </div>
                <p className="text-sm font-bold text-zinc-800">3/4" Base with 1/4" Increments</p>
                <p className="text-xs text-zinc-500 leading-relaxed">Starts at a slim 3/4" rise profile for thin asphalt lifts and scales upward seamlessly in precise custom rise increments.</p>
              </div>

            </div>
          </div>

          {/* RIGHT: SCHEMATIC VIEWPORT (5 Columns Wide) */}
          <div className="lg:col-span-5 relative  h-full bg-gray-50 border border-gray-200 rounded-xs overflow-hidden p-6 flex items-center justify-center group shadow-sm hover:border-[#cc2221] transition-colors duration-300 w-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/rectangle_catch_basin_riser_cast_iron.png`}
              alt="Catch Basin Riser Schematic Layout"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-8 mix-blend-multiply transition-transform duration-500 group-hover:scale-102"
            />

            <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0a]/95 border border-zinc-900 px-3 py-2 text-[9px] uppercase font-bold tracking-wider text-zinc-400 text-center pointer-events-none">
              Asset Display: Steel Catch Basin Riser Component
            </div>
          </div>

        </div>

        {/* --- LOWER REQUIREMENTS SPECIFICATION BAR --- */}
        <div className="bg-[#0a0a0a] text-white p-6 md:p-8 rounded-xs border border-zinc-900 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 shadow-2xl relative overflow-hidden w-full">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#cc2221]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-start gap-5 relative z-10 w-full xl:max-w-4xl">
            <div className="w-12 h-12 bg-[#141414] border border-zinc-900 text-[#cc2221] flex items-center justify-center rounded-xs shrink-0 shadow-inner mt-1">
              <Info className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block">
                Order Placement Dimensional Data Requirements
              </span>
              <h4 className="text-lg md:text-xl font-black uppercase tracking-tight text-white">
                Required Specifications for Production Fitment:
              </h4>
              <p className="text-xs md:text-sm text-zinc-400 font-medium leading-relaxed">
                Please provide: Grate Size, Thickness, Top of Hole, Bottom of Hole on Seat, and the exact Clear ID Inside Frame to clear production pipelines smoothly.
              </p>
            </div>
          </div>

          <div className="w-full xl:w-auto shrink-0 relative z-10">
            <Button className="w-full xl:w-auto bg-[#cc2221] hover:bg-[#b01e1d] text-white font-black uppercase tracking-widest text-xs h-12 px-8 rounded-none transition-all duration-200 shadow-md flex items-center justify-center gap-2 border-none">
              Submit Riser Measurements <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}