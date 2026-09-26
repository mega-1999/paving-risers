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

          {/* RIGHT: INTERACTIVE SCHEMATIC & STEEL GRATE VIEWPORT (5 Columns Wide) */}
          <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-xs overflow-hidden flex flex-col justify-between shadow-sm hover:border-[#cc2221] transition-colors duration-300 w-full min-h-[440px]">
            {/* Active Display Stage */}
            <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-white to-gray-50 flex items-center justify-center p-6 group">
              <Image
                key={selectedRiser.id}
                src={selectedRiser.image}
                alt={selectedRiser.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-6 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#0a0a0a]/90 border border-zinc-800 px-2.5 py-1 text-[9px] uppercase font-black tracking-wider text-[#cc2221]">
                {selectedRiser.badge}
              </div>
            </div>

            {/* Selector Thumbnails Bar */}
            <div className="bg-zinc-900 border-t border-zinc-800 p-3 space-y-2">
              <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono uppercase tracking-wider">
                <span className="text-white font-bold">{selectedRiser.name}</span>
                <span className="text-[#cc2221] font-bold">{selectedRiser.spec}</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {STEEL_CATCH_BASIN_MODELS.map((item, idx) => {
                  const isSelected = selectedRiser.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedRiser(item)}
                      className={`relative p-1 rounded-xs border transition-all duration-200 text-left cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-800 border-[#cc2221] shadow-[0_0_8px_rgba(204,34,33,0.4)]'
                          : 'bg-zinc-950 border-zinc-800 hover:border-zinc-600'
                      }`}
                    >
                      <div className="relative w-full aspect-square bg-zinc-900 rounded-2xs overflow-hidden mb-1">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="60px"
                          className="object-contain p-0.5"
                        />
                      </div>
                      <span
                        className={`text-[8px] font-mono line-clamp-1 block text-center font-bold uppercase tracking-tight ${
                          isSelected ? 'text-[#cc2221]' : 'text-zinc-400'
                        }`}
                      >
                        {item.short}
                      </span>
                    </button>
                  );
                })}
              </div>
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