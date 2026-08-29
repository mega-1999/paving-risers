'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Wrench,
  ArrowRight,
  ShieldCheck,
  Search,
  SlidersHorizontal,
  Plus
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- FULL EXTRACTED TOOL DATABASE MAP WITH ASSET IMAGES ---
const ACCESSORIES_DATA = [
  // --- FILE REFERENCE: 9.jpg ---
  {
    title: "Chisel & Manhole Hook",
    category: "Lifting Hooks & Keys",
    sku: "PR-CHK-02",
    description: "Dual-purpose site tool featuring an integrated pry chisel end combined with a heavy-duty ring-handled hook.",
    spec: "Reinforced Alloy Steel Profile",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/Chisel.png`
  },
  {
    title: "Manhole Cover Hook",
    category: "Lifting Hooks & Keys",
    sku: "PR-MHH-01",
    description: "Heavy-duty forged steel T-bar hook configured for pulling standard sanitary and municipal manhole cover frames cleanly.",
    spec: "Heat-Treated Solid Carbon Steel",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/manhole_cover_hook.png`
  },
  {
    title: "Water Service Locking Valve Cover",
    category: "Utility Locks & Pullers",
    sku: "PR-LVC-15",
    description: "Solid steel enclosure engineered to bolt directly over underground water service lines for security.",
    spec: "Heavy-Gauge Fabricated Box Steel",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/VALVE_BOX_COVER_BAR.9.png`
  },
  {
    title: "Sewer Plug Puller",
    category: "Lifting Hooks & Keys",
    sku: "PR-SPP-23",
    description: "Heavy-duty puller designed for the safe and efficient extraction of sewer plugs.",
    spec: "Reinforced Steel Construction",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/SEWER_PLUG_PILLER.12.png`
  },
  {
    title: "Valve Box Lifter",
    category: "Lifting Hooks & Keys",
    sku: "PR-VBL-24",
    description: "Specialized lifting tool designed to grip and elevate heavy valve boxes securely.",
    spec: "High-Tensile Gripping Jaws",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "Valve Box Tongs",
    category: "Lifting Hooks & Keys",
    sku: "PR-VBT-25",
    description: "Extended reach tongs engineered for clearing debris or retrieving items from deep valve box shafts.",
    spec: "Scissor-Action Extended Reach",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_tounge.10.png`
  },
  // --- FILE REFERENCE: 7.jpg ---
  
  
  {
    title: "Copper Tube Rerounder",
    category: "Utility Locks & Pullers",
    sku: "PR-CTR-16",
    description: "Precision clamping system designed to quickly reshape crushed or out-of-round soft copper service lines on jobsites.",
    spec: "Dual-Vice Vise-Grip Pressure Frame",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "Water Service Curb Box Lock",
    category: "Utility Locks & Pullers",
    sku: "PR-CBL-14",
    description: "Heavy tamper-proof physical locking shroud designed to block unauthorized access to curb box covers.",
    spec: "High-Vis Safety Red Shroud Core",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "Adjustable Hydrant Wrench",
    category: "Wrenches & Setters",
    sku: "PR-AHW-10",
    description: "Universal pinned plumbing wrench design configured to fit multiple sizes of hydrant pentagon nuts and pin couplers.",
    spec: "Adjustable Jaw • Heavy Cast Finish",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "¾\" - 1\" Service Line Puller Kit",
    category: "Utility Locks & Pullers",
    sku: "PR-SLP-01",
    description: "Complete heavy-duty contractor tool kit in a ballistic nylon canvas bag for underground pipe pulling swaps.",
    spec: "Includes Cable Lines, Grippers, Adaptors",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "1¼\" - 2\" Service Line Puller Kit",
    category: "Utility Locks & Pullers",
    sku: "PR-SLP-02",
    description: "Industrial-grade large diameter pipe puller extraction kit engineered to withstand massive tensile loads.",
    spec: "Includes Heavy Cable Matrix Cases",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },

  // --- FILE REFERENCE: 8.jpg ---
  {
    title: "Pipe Cleaner / Descaler",
    category: "Maintenance Tools",
    sku: "PR-PCD-11",
    description: "Segmented steel scraper assembly configured to drop inside operational pipelines to strip internal scale layers.",
    spec: "Multi-Link Flex Joint Configuration",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "1\" Service Box Cleaning Auger",
    category: "Maintenance Tools",
    sku: "PR-SBA-12",
    description: "Heavy-duty screw drill bit designed to drill out mud, hard debris, and packed rocks inside 1-inch utility service shafts.",
    spec: "High-Pitch Clear Helix Design",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "Valve Box Auger Cleaner",
    category: "Maintenance Tools",
    sku: "PR-VBA-13",
    description: "Deep-reach hand-cranked earth and debris auger for extracting blockages at the bottom of valve boxes.",
    spec: "Extended Shaft with T-Handle Crank",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "Hydrant Meter Stand",
    category: "Specialized Kits",
    sku: "PR-HMS-21",
    description: "Solid-base floor support stand built to isolate and secure heavy fire hydrant monitoring meters off the ground.",
    spec: "Wide Stability Base Plate Shield",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "Service Box Extensions",
    category: "Specialized Kits",
    sku: "PR-SBE-22",
    description: "Heavy structural sleeve extensions that telescope over service boxes to raise them cleanly to grade during paving overlays.",
    spec: "Available in Three Uniform Length Tiers",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },

  {
    title: "Pent End Wrench, Standard T Handle",
    category: "Specialized Kits",
    sku: "PR-PEW-17",
    description: "Pentagonal socket wrench built to operate proprietary water department utility security covers.",
    spec: "Five-Sided Machined Socket Box",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "T Handle 2-Hole End Wrench",
    category: "Specialized Kits",
    sku: "PR-2HW-18",
    description: "Specialized double-prong spanner key engineered for utility covers requiring circular pin drive connections.",
    spec: "Machined Steel Prong Layout",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "Curb End Wrench / Curb Key, Standard T Handle",
    category: "Lifting Hooks & Keys",
    sku: "PR-CEW-03",
    description: "Slotted jaw profile designed to reach deep into narrow curb boxes to operate municipal shutoff valves.",
    spec: "Fixed T-Bar Handwheel Grip",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "Standard T Handle Gate Wrench",
    category: "Wrenches & Setters",
    sku: "PR-STW-04",
    description: "Standard infrastructure operator key designed to engage square gate valve operating nuts on main lines.",
    spec: "Square-Socket Engagement Drive",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "Telescopic Gate Wrench",
    category: "Wrenches & Setters",
    sku: "PR-TGW-05",
    description: "Adjustable height shaft design that expands and locks to match varying utility vault depths on-site.",
    spec: "Variable Telescopic Slide Lock",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "Universal Curb Box and Valve Kit",
    category: "Specialized Kits",
    sku: "PR-UCK-19",
    description: "Multi-piece modular rod system that interchanges sections to assemble the correct depth valve key on the fly.",
    spec: "Snap-Fit High-Tensile Steel Rod Lines",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "Combination Valve and Curb Key Kit",
    category: "Specialized Kits",
    sku: "PR-CCK-20",
    description: "Master multi-key kit configured with multiple socket heads, structural adapter fittings, and extended extensions.",
    spec: "Modular Head Configurations Included",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },

  // --- FILE REFERENCE: 10.jpg ---
  {
    title: "Heavy Duty Ring Style Gate Wrench",
    category: "Wrenches & Setters",
    sku: "PR-RSW-06",
    description: "High-torque operational wrench featuring a top alignment ring base optimized for heavy municipal infrastructure keys.",
    spec: "Solid High-Torque Weldment",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "Standard Valve Setter",
    category: "Wrenches & Setters",
    sku: "PR-SVS-07",
    description: "Heavy-duty alignment layout tool finished in high-visibility safety red for positioning water valve lines securely.",
    spec: "Powder-Coated Steel Frame",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "Heavy Duty Valve Setter",
    category: "Wrenches & Setters",
    sku: "PR-HVS-08",
    description: "Reinforced structural steel setup framework configured to lock and true industrial grade main valves.",
    spec: "Dual-Braced Industrial Weldment",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  },
  {
    title: "Hydrant Setter",
    category: "Wrenches & Setters",
    sku: "PR-HDS-09",
    description: "Rigging-rated for chain and balance bar tool assembly built for the precise placement of hydrant assemblies.",
    spec: "Dual Lifting Eyes • rated for Chain Link",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_liffer.11.png`
  }
];

const CATEGORIES = ["All Tools", "Lifting Hooks & Keys", "Wrenches & Setters", "Maintenance Tools", "Utility Locks & Pullers", "Specialized Kits"];

export default function CompleteToolsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All Tools");
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter core logic
  const filteredProducts = ACCESSORIES_DATA.filter((product) => {
    const matchesCategory = selectedCategory === "All Tools" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate rendering subset based on expanded status toggle
  const shouldTruncate = filteredProducts.length > 5 && !isExpanded;
  const displayedProducts = shouldTruncate ? filteredProducts.slice(0, 5) : filteredProducts;

  // Reset expansion when filters update to avoid unexpected empty views
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setIsExpanded(false);
  };

  return (
    <section className="bg-slate-50 py-8 border-b border-slate-200 font-sans">
      <div className="w-full px-6 md:px-8 lg:px-12 space-y-12">

        {/* --- MAIN CATALOG INTRO HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-4">

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Tools & Site Accessories <br />
              <span className="text-[#CC0000]">For Paving & Utility Crews.</span>
            </h2>
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name or SKU..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setIsExpanded(false); }}
              className="w-full h-12 pl-10 pr-4 bg-white border border-slate-200 text-sm rounded-sm font-medium focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all"
            />
          </div>
        </div>

        {/* --- FILTER ROW --- */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center gap-2 text-slate-400 pr-2 border-r border-slate-200 shrink-0">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-wider">Filter:</span>
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "px-4 py-2.5 text-xs font-black uppercase tracking-wider rounded-sm border whitespace-nowrap transition-all duration-150",
                selectedCategory === cat
                  ? "bg-[#0F0F0F] border-[#0F0F0F] text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- PRODUCT GRID MATRIX --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((product, idx) => (
            <Card
              key={idx}
              className="bg-white border border-slate-200 rounded-sm shadow-sm hover:shadow-md hover:border-[#CC0000] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Image Frame Area */}
              <div className="relative w-full h-48 bg-slate-50 border-b border-slate-100 flex items-center justify-center p-4 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  priority={idx < 3}
                />
              </div>

              <CardContent className="p-6 flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#CC0000] bg-[#CC0000]/5 px-2 py-1 rounded-sm">
                      {product.category}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider font-bold text-slate-400">
                      SKU: {product.sku}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-black uppercase tracking-tight text-slate-900 group-hover:text-[#CC0000] transition-colors duration-200 min-h-[48px] flex items-center">
                      {product.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Footnote Spec Parameters */}
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                    <span className="text-slate-400">Engineering Spec:</span>
                    <span className="text-slate-800 text-right text-[11px] font-mono">{product.spec}</span>
                  </div>

                  <Link href="#contact" className="block pt-1">
                    <Button
                      className="w-full h-11 bg-[#0F0F0F] hover:bg-[#CC0000] text-white font-bold uppercase tracking-widest text-xs rounded-sm transition-colors duration-200 shadow-sm flex items-center justify-center gap-2"
                    >
                      Quote Item Pricing <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* --- INJECTED 6TH CARD: LOAD MORE INTERACTIVE BANNER SLIP --- */}
          {shouldTruncate && (
            <Card
              onClick={() => setIsExpanded(true)}
              className="border-2 border-dashed border-slate-300 bg-slate-100/50 rounded-sm shadow-sm hover:shadow-md hover:border-[#CC0000] hover:bg-white transition-all duration-300 flex flex-col items-center justify-center p-8 text-center cursor-pointer group min-h-[400px]"
            >
              <div className="w-14 h-14 bg-white border border-slate-200 text-slate-700 group-hover:bg-[#0F0F0F] group-hover:border-[#0F0F0F] group-hover:text-white rounded-full flex items-center justify-center shadow-sm transition-all duration-300 transform group-hover:scale-110 mb-4">
                <Plus className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 group-hover:text-[#CC0000] transition-colors">
                Load More Accessories
              </h3>
              <p className="text-sm text-slate-500 font-medium max-w-[240px] mt-2 leading-relaxed">
                Discover {filteredProducts.length - 5} additional professional municipal tools in this catalog line.
              </p>
            </Card>
          )}
        </div>

        {/* --- EMPTY STATE FALLBACK --- */}
        {filteredProducts.length === 0 && (
          <div className="w-full flex flex-col items-center justify-center py-8 bg-white border border-dashed border-slate-200 text-center rounded-sm">
            <Wrench className="w-12 h-12 text-slate-300 stroke-[1.5] mb-4" />
            <h4 className="text-base font-black uppercase tracking-wide text-slate-800">No Matching Tools Found</h4>
            <p className="text-sm text-slate-400 max-w-sm mt-1">
              We couldn't find any products matching your parameters. Try modifying your filters.
            </p>
          </div>
        )}

        {/* --- ASSURANCE CARD BLOCK FOOTER --- */}
        <div className="bg-[#0F0F0F] text-white p-6 md:p-8 rounded-sm border border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#CC0000]/10 border border-[#CC0000]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#CC0000]" />
            </div>
            <div>
              <h4 className="font-black uppercase tracking-wide text-base">Municipal Infrastructure Compliance</h4>
              <p className="text-sm text-zinc-400">All specialized utility lifting hooks, wrenches, keys, and setters are rated for high-stress municipal applications.</p>
            </div>
          </div>
          <Link href="#contact" className="w-full md:w-auto shrink-0">
            <Button className="w-full md:w-auto bg-[#CC0000] hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs h-12 px-8 transition-colors rounded-sm">
              Request Master Bulk Sheet Pricing
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}

// Layout helper utility
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}