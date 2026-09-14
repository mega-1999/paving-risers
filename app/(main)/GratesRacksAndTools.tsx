'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Grid,
  ShieldCheck,
  Wrench,
  Filter,
  CheckCircle2,
  ArrowUpRight,
  Settings,
  Ruler,
  Hammer,
  Construction,
  Layers,
  Sparkles
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// --- PRODUCT CATALOG DATA ---
const CATEGORIES = [
  {
    id: 'trash-racks',
    title: 'Debris & Trash Racks',
    subtitle: 'Debris Interception & Culvert Inflow Shielding',
    icon: <Filter className="w-5 h-5" />,
    features: [
      { title: 'High-Capacity Debris Screening', desc: 'Prevents heavy debris, branches, and refuse from choking storm sewers and underground utility channels.' },
      { title: 'Heavy Bar Angle Frames', desc: 'Forged with structural angle iron perimeters to withstand extreme storm surge pressure and hydrostatic head.' },
      { title: 'Anti-Vandal Anchoring', desc: 'Includes lockable security hinge pins and tamper-proof anchor brackets to prevent unauthorized removal.' },
      { title: 'Modular Sloped Layouts', desc: 'Designed with self-cleaning sloped faces that force floating debris upward to maintain continuous water flow.' }
    ],
    specs: [
      { label: 'Bar Spacing', value: '2" to 6" Clear Opening Specs' },
      { label: 'Frame Angle', value: '2" x 2" x 1/4" Structural Steel' },
      { label: 'Mounting Style', value: 'Bolt-On / Hinged / Vault Seat' },
      { label: 'Design Standard', value: 'DOT Municipal Inlet Standard' }
    ],
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/trash_racks/trash_rack_type_1.png`
  }
];

export default function GratesRacksAndTools() {
  const [activeTab, setActiveTab] = useState(0);
  const current = CATEGORIES[activeTab];

  return (
    <section className="bg-white text-slate-900 py-8 font-sans border-b border-slate-100">
      <div className="w-full px-10 md:px-20 space-y-4">

        {/* --- SECTION HEADER --- */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-slate-900">
            Trash 
            <span className="text-[#CC0000]"> Racks.</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
            Culvert trash racks that go with them, including expansion wrenches and lid hooks.
          </p>
        </div>

        {/* --- NAVIGATION TABS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-200 pb-6">
          {CATEGORIES.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "flex items-center gap-4 p-5 rounded-sm border-2 text-left transition-all duration-300 group relative overflow-hidden",
                  isActive
                    ? "bg-[#0F0F0F] border-[#0F0F0F] text-white shadow-xl"
                    : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                )}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#CC0000]" />
                )}
                <div className={cn(
                  "w-10 h-10 rounded-sm flex items-center justify-center shrink-0 border transition-colors",
                  isActive
                    ? "bg-[#CC0000] border-[#CC0000] text-white"
                    : "bg-white border-slate-200 text-slate-700 group-hover:border-[#CC0000] group-hover:text-[#CC0000]"
                )}>
                  {cat.icon}
                </div>
                <div className="space-y-0.5 min-w-0">
                  <h3 className="font-black uppercase text-sm tracking-tight truncate">
                    {cat.title}
                  </h3>
                  <p className={cn("text-xs line-clamp-1 font-medium", isActive ? "text-zinc-400" : "text-slate-500")}>
                    {cat.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* --- DYNAMIC DISPLAY CONTENT MATRIX --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* LEFT PANEL: SPECIFICATION & FEATURES LIST (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="border border-slate-100 bg-slate-50/50 p-6 rounded-sm space-y-2 hover:border-[#CC0000] hover:bg-white transition-all duration-300 shadow-sm group"
                >
                  <div className="flex items-center gap-2 text-[#CC0000]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <h4 className="font-black uppercase tracking-wider text-xs text-slate-900">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* TECHNICAL SPECS HUD */}
            <div className="bg-[#0F0F0F] text-white p-6 rounded-sm border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  Grate Specifications
                </span>
                <span className="text-xs font-mono font-bold text-[#CC0000]">
                  {current.title}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {current.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-zinc-800/60 pb-2">
                    <span className="text-zinc-400 font-bold uppercase">{spec.label}:</span>
                    <span className="text-white font-mono font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: VISUAL SHOWCASE & BLUEPRINT CARD (5 Columns) */}
          <div className="lg:col-span-5 relative bg-[#0F0F0F] border border-zinc-800 rounded-sm overflow-hidden p-8 flex flex-col justify-between shadow-2xl group min-h-[440px]">

            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#CC0000]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />

            <div className="space-y-2 relative z-10">
              <span className="text-[9px] font-mono font-black tracking-widest text-[#CC0000] uppercase block">
                Manufacturing Spec
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                {current.title}
              </h3>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                {current.subtitle}. Custom built per field measurements or standard municipal castings.
              </p>
            </div>

            {/* Asset Image Viewport */}
            <div className="relative w-full h-56 bg-zinc-900 border border-zinc-800 rounded-sm my-6 overflow-hidden flex items-center justify-center p-6">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="relative z-10 space-y-3">
              <Button className="w-full h-12 bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs rounded-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2">
                Request Product Spec Sheet <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

          </div>

        </div>

        {/* --- LOWER CONVERSION FOOTER ROW --- */}
        <div className="bg-[#0F0F0F] text-white p-6 md:p-8 rounded-sm border border-zinc-800 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 text-[#CC0000] flex items-center justify-center rounded-sm shrink-0 shadow-inner">
              <Construction className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block">
                Contractor Wholesale Ordering Desk
              </span>
              <h4 className="text-lg md:text-xl font-black uppercase tracking-tight text-white">
                Need Custom Fabrication or Bulk Installation Tools?
              </h4>
              <p className="text-xs text-zinc-400 font-medium max-w-2xl leading-relaxed">
                Send us your CAD drawings (.dwg, .pdf, .step) or field measurement logs for custom trash racks, fabricated grates, and expansion adjustment tools.
              </p>
            </div>
          </div>

          <div className="w-full xl:w-auto shrink-0 relative z-10">
            <a href="#contact" className="w-full block">
              <Button className="w-full xl:w-auto bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs h-12 px-8 rounded-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2">
                Submit Field Measurements <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}