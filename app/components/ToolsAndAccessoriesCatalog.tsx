'use client';

import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  ArrowRight,
  ShieldCheck,
  Hammer,
  Layers,
  Construction,
  Triangle,
  FlaskConical,
  Disc
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- ACCESSORIES PRODUCT DATABASE ---
const ACCESSORY_PRODUCTS = [
  {
    title: "Manhole Lifting Hooks",
    sku: "HK-MH-HD",
    description: "Forged heavy-duty steel hooks engineered to easily pull standard municipal manhole covers and solid iron riser lines without slipping.",
    spec: "30\" Length • Heat-Treated Alloy Steel",
    icon: <Hammer className="w-6 h-6 text-[#CC0000]" />
  },
  {
    title: "Curb Box Lifting Hooks",
    sku: "HK-CB-S",
    description: "Slim-profile lifting keys designed specifically to engage curb box openings and debris covers in tight roadway utility spaces.",
    spec: "Hex-Stock Profile • Corrosion-Resistant",
    icon: <Construction className="w-6 h-6 text-[#CC0000]" />
  },
  {
    title: "Valve Box Risers",
    sku: "VR-VB-DI",
    description: "Drop-in extension rings designed to elevate standard 5-1/4\" water and gas valve boxes seamlessly during asphalt overlays.",
    spec: "1\" to 6\" Height Increments Available",
    icon: <Layers className="w-6 h-6 text-[#CC0000]" />
  },
  {
    title: "Riser Alignment Wedges",
    sku: "WG-RA-PL",
    description: "Tapered polymer shims used to level and plumb riser stacks on uneven casting seats, ensuring flush contact with the finished pavement surface.",
    spec: "1/8\" to 1\" Taper • UV-Stabilized HDPE",
    icon: <Triangle className="w-6 h-6 text-[#CC0000]" />
  },
  {
    title: "Frame Setting Compound",
    sku: "SC-FS-50",
    description: "High-strength, rapid-set bedding mortar formulated for securing manhole frames and catch basin tops to the final grade with zero shrinkage.",
    spec: "50 lb Pail • 6,000 PSI 28-Day Strength",
    icon: <FlaskConical className="w-6 h-6 text-[#CC0000]" />
  },
  {
    title: "Adjustment Ring Sealant",
    sku: "SL-BR-25",
    description: "Self-adhering butyl rubber gasket tape applied between stacked riser rings to create a watertight, flexible seal that prevents infiltration and exfiltration.",
    spec: "1\" × 25' Roll • ASTM C990 Compliant",
    icon: <Disc className="w-6 h-6 text-[#CC0000]" />
  }
];

export default function ToolsAndAccessoriesCatalog() {
  return (
    <section className="bg-slate-50 py-8 border-b border-slate-200 font-sans">
      <div className="w-full px-10 md:px-20 space-y-16">

        {/* --- SECTION INTRO HEADER --- */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
            <Wrench className="w-4 h-4 text-[#CC0000]" /> Site Support Catalog
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-[1.1]">
            Tools & Accessories <br />
            <span className="text-[#CC0000]">for on-site fitting.</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium leading-relaxed">
            Equip tools that help your crew set risers and covers faster and accurately.
          </p>
        </div>

        {/* --- COMMERCIAL PRODUCT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACCESSORY_PRODUCTS.map((product, idx) => (
            <Card
              key={idx}
              className="bg-white border border-slate-200 rounded-sm shadow-sm hover:shadow-md hover:border-[#CC0000] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Brand Color Visual Accent Indicator strip */}
              <div className="w-full h-[3px] bg-slate-100 group-hover:bg-[#CC0000] transition-colors duration-300" />

              <CardContent className="p-8 flex flex-col justify-between flex-grow space-y-6">

                {/* Structural Identifier Block */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-sm group-hover:bg-[#0F0F0F] group-hover:border-[#0F0F0F] transition-all duration-300">
                      <div className="group-hover:text-white transition-colors duration-300">
                        {product.icon}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono tracking-wider font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-sm">
                      SKU: {product.sku}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 group-hover:text-[#CC0000] transition-colors duration-200">
                      {product.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Technical Footnote Specification */}
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                    <span className="text-slate-400">Spec Metric:</span>
                    <span className="text-slate-800 font-mono">{product.spec}</span>
                  </div>

                  {/* Standardized Call-To-Action Button */}
                  <Link href="#contact" className="block pt-2">
                    <Button
                      className="w-full h-11 bg-[#0F0F0F] hover:bg-[#CC0000] text-white font-bold uppercase tracking-widest text-xs rounded-sm transition-colors duration-200 shadow-sm flex items-center justify-center gap-2"
                    >
                      Request Part Pricing <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* --- COMPLIANCE BOTTOM PANEL --- */}
        <div className="bg-[#0F0F0F] text-white p-6 md:p-8 rounded-sm border border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#CC0000]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#CC0000]" />
            </div>
            <div>
              <h4 className="font-black uppercase tracking-wide text-sm">Industrial Grade Assurance</h4>
              <p className="text-xs text-zinc-400">All utility tools and accessories match ASTM and municipal grade requirements.</p>
            </div>
          </div>
          <Link href="#catalog-download" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-transparent hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs border border-zinc-700 hover:border-white h-11 px-6 transition-colors rounded-sm">
              Download Full Accessory Spec Sheets
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}