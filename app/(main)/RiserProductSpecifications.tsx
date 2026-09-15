'use client';

import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Zap,
  TrendingUp,
  Maximize2,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- STRUCTURAL FEATURE DATA EXTRACTED FROM 2.png ---
const SOLID_IRON_FEATURES = [
  { title: "Most Economical Option", desc: "Maximizes infrastructure budget layout efficiency across large municipal projects." },
  { title: "Black Coated Finish", desc: "Heavy-duty structural casting optimized for heavy vehicular loads" },
  { title: "Machined to Fit Street Covers", desc: "Fabricated to fit precisely in the existing manhole covers." },
  { title: "Minimum Vertical Rise", desc: "Engineered clearance calculated precisely at lid thickness + 1/2\" increments." },
  { title: "Standard Sizes In Stock", desc: "Readily available and stocked in standard 2\" and 3\" elevation rises." },
  { title: "Stackable Configuration", desc: "Can be securely nested and stacked on site for increased elevation matching." }
];

const ADJUSTABLE_STEEL_FEATURES = [
  { title: "Diameter Variance Adjust", desc: "Adjusts in or out up to 1/2 inch to clear the frame." },
  { title: "Pivoted Expansion System", desc: "Built-in mechanical linkage delivering positive, high-grip mechanical locking to the base." },
  { title: "Rapid Field Assembly", desc: "Accelerates on-site field assembly timelines to match fast-paced asphalt crews." },
  { title: "Ultra-Low Minimum Rise", desc: "Provides as little as 3/4\" vertical rise—essential for modern micro-surfacing paving overlays." }
];

export default function RiserProductSpecifications() {
  return (
    <section className="bg-white py-8 border-b border-gray-100 font-sans">
      <div className="w-full px-10 md:px-20 space-y-16">

        {/* --- SECTION INTRO HEADER --- */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#CC0000]" /> Riser Selection Criteria
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-none">
            Solid iron <br />
            <span className="text-[#CC0000]">OR adjustable steel.</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium leading-relaxed">
            Choose between an economical solid cast iron ring or an adjustable steel ring.
          </p>
        </div>

        {/* --- TWO-COLUMN COMPARISON ASSEMBLY DISPLAY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* COLUMN 1: SOLID IRON RINGS PANEL */}
          <Card className="border-2 border-slate-100 bg-slate-50/50 rounded-sm shadow-none hover:shadow-xl hover:border-[#CC0000] transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div className="w-full h-[4px] bg-[#0F0F0F] group-hover:bg-[#CC0000] transition-colors duration-300" />

            <CardHeader className="p-8 pb-4">
              <div className="flex items-center gap-2 text-slate-400 group-hover:text-[#CC0000] transition-colors duration-300 mb-1">
                <Layers className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest">Rigid Cast Framework</span>
              </div>
              <CardTitle className="text-2xl font-black uppercase tracking-tight text-slate-900">
                Solid Iron Riser Rings
              </CardTitle>
              <CardDescription className="text-slate-500 font-medium text-sm">
                Black coated rings for standard road work.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8 pt-4 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {SOLID_IRON_FEATURES.map((feature, idx) => (
                  <div key={idx} className="space-y-1 bg-white p-4 border border-slate-100 rounded-sm shadow-sm group-hover:border-slate-200 transition-colors">
                    <div className="flex items-center gap-2 text-[#CC0000]">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">{feature.title}</h4>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* COLUMN 2: ADJUSTABLE STEEL RINGS PANEL */}
          <Card className="border-2 border-slate-100 bg-slate-50/50 rounded-sm shadow-none hover:shadow-xl hover:border-[#CC0000] transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div className="w-full h-[4px] bg-[#0F0F0F] group-hover:bg-[#CC0000] transition-colors duration-300" />

            <CardHeader className="p-8 pb-4">
              <div className="flex items-center gap-2 text-slate-400 group-hover:text-[#CC0000] transition-colors duration-300 mb-1">
                <Maximize2 className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest">Mechanical Adjust System</span>
              </div>
              <CardTitle className="text-2xl font-black uppercase tracking-tight text-slate-900">
                Adjustable Steel Rings
              </CardTitle>
              <CardDescription className="text-slate-500 font-medium text-sm">
                Steel rings with an expansion mechanism that locks to the frame.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8 pt-4 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ADJUSTABLE_STEEL_FEATURES.map((feature, idx) => (
                  <div key={idx} className="space-y-1 bg-white p-4 border border-slate-100 rounded-sm shadow-sm group-hover:border-slate-200 transition-colors">
                    <div className="flex items-center gap-2 text-[#CC0000]">
                      <Zap className="w-4 h-4 shrink-0 fill-current" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">{feature.title}</h4>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>

        {/* --- LOWER CONVERSION HUB CARD --- */}
        <div className="bg-[#0F0F0F] text-white p-6 md:p-8 rounded-sm border border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#CC0000]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 text-[#CC0000] flex items-center justify-center rounded-sm shrink-0 shadow-inner">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block">
                Operation Workflow Notice
              </span>
              <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
                Optimized Specifically For <span className="text-[#CC0000]">Modern Thin Paving Layers.</span>
              </h4>
              <p className="text-xs text-zinc-400 font-medium max-w-xl">
                Deploy expansion setups to handle minimal 3/4\" height corrections cleanly without cracking new wear courses.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0 relative z-10">
            <Button className="w-full md:w-auto bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs h-12 px-8 rounded-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2">
              Request Master Quote Sheet <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}