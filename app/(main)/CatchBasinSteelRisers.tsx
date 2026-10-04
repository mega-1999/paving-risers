'use client';

import React, { useState } from 'react';
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

const STEEL_CATCH_BASIN_MODELS = [
  {
    id: 'steel-14x24',
    name: '14" x 24" Fabricated Steel Grate & Riser',
    short: '14x24 Grate',
    spec: 'High-Tensile Welded Steel',
    badge: 'Fabricated Steel',
    image: '/images/catch_basin_riser/14x24x2_grate_with_riser.png'
  },
  {
    id: 'steel-10x36',
    name: '10" x 36" Linear Steel Grate & Riser',
    short: '10x36 Linear',
    spec: 'Continuous Inflow Gutter',
    badge: 'Linear Grate',
    image: '/images/catch_basin_riser/10x36x2_grate_with_riser.png'
  },
  {
    id: 'cb-10022',
    name: '10022 Series Catch Basin Grate & Riser',
    short: '10022 Assembly',
    spec: 'Municipal Fitment',
    badge: 'Drop-In Assembly',
    image: '/images/catch_basin_riser/10022_catch_basin_with_riser.png'
  },
  {
    id: 'reticuline-lock',
    name: 'Galvanized Reticuline Grate with Lock',
    short: 'Locking Grate',
    spec: 'Tamper-Proof Mechanical Lock',
    badge: 'Galvanized Steel',
    image: '/images/catch_basin_riser/galvanized_reticuline_grate_with_lock.png'
  },
  {
    id: 'fab-drain-grate',
    name: 'Fabricated Steel Drainage Grate Unit',
    short: 'Fab Grate',
    spec: 'Heavy Industrial Duty',
    badge: 'Welded Matrix',
    image: '/images/fabricated_steel/fabricated_steel_drainage_grate_assembly_2.png'
  },
  {
    id: 'sny-g2',
    name: 'State of NY DOT G2 Catch Basin Grate',
    short: 'NY DOT G2',
    spec: 'DOT Certified Spec',
    badge: 'Vane Matrix',
    image: '/images/catch_basin_riser/sny_g2_state_ny_grate_1.png'
  },
  {
    id: 'rect-cast-iron',
    name: 'Rectangular Steel & Iron Riser Frame',
    short: 'Rect Riser',
    spec: 'Full Perimeter Support',
    badge: 'Riser Extension',
    image: '/images/catch_basin_riser/rectangle_catch_basin_riser_cast_iron.png'
  },
  {
    id: 'square-coated',
    name: 'Square Catch Basin Riser Extension',
    short: 'Square Riser',
    spec: 'Corrosion Coated Finish',
    badge: 'Square Frame',
    image: '/images/catch_basin_riser/square_catch_basin_riser_coated.png'
  }
];

export default function CatchBasinSteelRisers() {
  const [selectedRiser, setSelectedRiser] = useState(STEEL_CATCH_BASIN_MODELS[0]);

  return (
    <section className="bg-white py-10 md:py-14 border-b border-gray-100 font-sans w-full">
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 space-y-8">

        {/* --- MAIN SECTION INTRO HEADER --- */}
        <div className="w-full space-y-2">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#CC0000]" /> Catch Basin Risers
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#0a0a0a] leading-tight">
            Steel catch basin risers, <br />
            <span className="text-[#CC0000]">precision engineered to fit.</span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-4xl">
            Minimize intensive structural rebuilds during overlays. Our high-tensile steel riser extensions are built to fit your existing catch basin frames.
          </p>
        </div>

        {/* --- DUAL GRID VIEWPORT ARCHITECTURE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch w-full">

          {/* LEFT: ARCHITECTURAL SPECS GRID (7 Columns Wide) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">

            {/* Feature 1 */}
            <div className="border border-zinc-200/80 bg-zinc-50/70 hover:bg-white p-4 rounded-sm space-y-1 transition-all duration-200 shadow-2xs hover:border-zinc-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-[#CC0000] mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <h3 className="font-black uppercase tracking-wider text-[11px] text-[#0a0a0a]">Form Profiles</h3>
                </div>
                <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">Square & Rectangular Configurations</p>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed pt-1">Available in standard and custom orthogonal profiles to slide cleanly over existing catch basin frameworks.</p>
            </div>

            {/* Feature 2 */}
            <div className="border border-zinc-200/80 bg-zinc-50/70 hover:bg-white p-4 rounded-sm space-y-1 transition-all duration-200 shadow-2xs hover:border-zinc-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-[#CC0000] mb-1">
                  <Settings className="w-3.5 h-3.5" />
                  <h3 className="font-black uppercase tracking-wider text-[11px] text-[#0a0a0a]">Engineering</h3>
                </div>
                <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">Fabricated to Exact Specs</p>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed pt-1">Built per field dimensions, matching clearance parameters to guarantee zero movement under high-impact traffic loads.</p>
            </div>

            {/* Feature 3 */}
            <div className="border border-zinc-200/80 bg-zinc-50/70 hover:bg-white p-4 rounded-sm space-y-1 transition-all duration-200 shadow-2xs hover:border-zinc-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-[#CC0000] mb-1">
                  <Flag className="w-3.5 h-3.5" />
                  <h3 className="font-black uppercase tracking-wider text-[11px] text-[#0a0a0a]">Origin Quality</h3>
                </div>
                <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">Proudly Made in America</p>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed pt-1">Forged and assembled domestically using high-tensile steel alloys meeting domestic municipal mandates.</p>
            </div>

            {/* Feature 4 */}
            <div className="border border-zinc-200/80 bg-zinc-50/70 hover:bg-white p-4 rounded-sm space-y-1 transition-all duration-200 shadow-2xs hover:border-zinc-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-[#CC0000] mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <h3 className="font-black uppercase tracking-wider text-[11px] text-[#0a0a0a]">Depth Grading</h3>
                </div>
                <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">3/4" Base with 1/4" Increments</p>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed pt-1">Starts at a slim 3/4" rise profile for thin asphalt lifts and scales upward seamlessly in precise rise increments.</p>
            </div>

          </div>

          {/* RIGHT: INTERACTIVE STEEL GRATE VIEWPORT (5 Columns Wide) */}
          <div className="lg:col-span-5 bg-white border border-zinc-200 rounded-sm overflow-hidden flex flex-col shadow-xs hover:border-[#CC0000]/70 transition-colors duration-300 w-full">
            {/* Active Display Stage */}
            <div className="relative w-full flex-1 min-h-[190px] sm:min-h-[210px] bg-gradient-to-b from-white via-zinc-50/60 to-zinc-100/70 flex items-center justify-center p-3 group">
              <div className="relative w-full h-full min-h-[170px] flex items-center justify-center">
                <Image
                  key={selectedRiser.id}
                  src={selectedRiser.image}
                  alt={selectedRiser.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-2 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute top-2.5 left-2.5 bg-[#0a0a0a] border border-zinc-800 px-2 py-0.5 text-[9px] uppercase font-black tracking-wider text-[#CC0000] shadow-sm rounded-3xs">
                {selectedRiser.badge}
              </div>
            </div>

            {/* Sleek Compact Selector Bar with Small Image Options */}
            <div className="bg-[#0d0d0d] border-t border-zinc-800 p-2.5 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider px-0.5">
                <span className="text-white font-bold truncate max-w-[65%]">{selectedRiser.name}</span>
                <span className="text-[#CC0000] font-semibold text-[9px] shrink-0 bg-red-950/40 border border-red-900/50 px-1.5 py-0.5 rounded-3xs">{selectedRiser.spec}</span>
              </div>
              
              {/* Small images options grid */}
              <div className="grid grid-cols-8 gap-1">
                {STEEL_CATCH_BASIN_MODELS.map((item) => {
                  const isSelected = selectedRiser.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedRiser(item)}
                      title={`${item.name} (${item.spec})`}
                      className={`relative aspect-square rounded-2xs border transition-all duration-150 p-0.5 flex items-center justify-center cursor-pointer group/btn ${
                        isSelected
                          ? 'bg-zinc-800 border-[#CC0000] ring-1 ring-[#CC0000] shadow-[0_0_6px_rgba(204,0,0,0.5)]'
                          : 'bg-zinc-900/90 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800'
                      }`}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          alt={item.short}
                          fill
                          sizes="40px"
                          className="object-contain p-0.5 transition-transform duration-150 group-hover/btn:scale-110"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* --- LOWER REQUIREMENTS SPECIFICATION BAR --- */}
        <div className="bg-[#0a0a0a] text-white p-5 md:p-6 rounded-sm border border-zinc-800 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-5 shadow-xl relative overflow-hidden w-full">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#CC0000]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-start gap-4 relative z-10 w-full xl:max-w-4xl">
            <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 text-[#CC0000] flex items-center justify-center rounded-xs shrink-0 shadow-inner mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block">
                Order Placement Dimensional Data Requirements
              </span>
              <h4 className="text-base md:text-lg font-black uppercase tracking-tight text-white">
                Required Specifications for Production Fitment:
              </h4>
              <p className="text-xs md:text-sm text-zinc-400 font-medium leading-relaxed">
                Please provide: Grate Size, Thickness, Top of Hole, Bottom of Hole on Seat, and the exact Clear ID Inside Frame to clear production pipelines smoothly.
              </p>
            </div>
          </div>

          <div className="w-full xl:w-auto shrink-0 relative z-10">
            <Button className="w-full xl:w-auto bg-[#CC0000] hover:bg-[#b00000] text-white font-black uppercase tracking-widest text-xs h-11 px-6 rounded-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 border-none cursor-pointer">
              Submit Riser Measurements <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}