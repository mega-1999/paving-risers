'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Trees,
  Layers,
  Grid,
  Hammer,
  Mountain,
  ArrowRight,
  Car,
  Flower2,
  Construction,
  ShieldCheck,
  Sliders,
  PlayCircle,
  CheckCircle2
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SolutionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  href: string;
  tag?: string;
  stats?: string;
  videoUrl?: string;
}

interface TabSchema {
  id: string;
  label: string;
  count: string;
  defaultVideoUrl: string;
}

const TABS: TabSchema[] = [
  {
    id: 'terraces',
    label: 'Paved Terraces & Decks',
    count: '05',
    defaultVideoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Videos/Two_Grate_Riser-Animation.mp4`
  },
  {
    id: 'landscaping',
    label: 'Landscaping & Gardens',
    count: '02',
    defaultVideoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/catch_basin_animation/Catch_basin_riser_ayush.718.mp4`
  },
  {
    id: 'driveways',
    label: 'Driveways & Access Areas',
    count: '02',
    defaultVideoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Curb_Inlet_riser/curb_inlet_riser.715.mp4`
  },
  {
    id: 'joinery',
    label: 'Structural & Custom Works',
    count: '02',
    defaultVideoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Manhole_riser/adjustable_manhole_riser_steel.mp4`
  },
];

const SOLUTIONS_DATA: Record<string, SolutionItem[]> = {
  terraces: [
    {
      id: 'terraces-1',
      title: "Adjustable Paving Risers",
      icon: <Grid className="w-5 h-5" />,
      description: "Heavy-duty millimeter-precise elevation units optimized for dimensional granite and architectural slab tiles.",
      href: "/solutions/adjustable-paving-risers",
      tag: "Top Specified",
      stats: "Max 1200mm",
      videoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Manhole_riser/fixed_manhole_riser_Black_coated.mp4`
    },
    {
      id: 'terraces-2',
      title: "Decking Support Risers",
      icon: <Layers className="w-5 h-5" />,
      description: "Sub-frame leveling cradles engineered to anchor joist substructures for natural timber and composite decking.",
      href: "/solutions/decking-support-risers",
      tag: "Fast-Fit",
      stats: "Anti-Rot",
      videoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/catch_basin_animation/Two_Grate_Riser_Animation.mp4`
    },
    {
      id: 'terraces-3',
      title: "Self-Leveling Pedestals",
      icon: <Sliders className="w-5 h-5" />,
      description: "Integrated gimbal-head design providing automatic slope compensation for conditions up to a Slopes available per design specs.",
      href: "/solutions/self-leveling-pedestals",
      tag: "Slope Cor.",
      stats: "0% - 5% Comp",
      videoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Videos/Curb_inlet.mp4`
    },
    {
      id: 'terraces-4',
      title: "Fixed Height Risers",
      icon: <Mountain className="w-5 h-5" />,
      description: "Low-profile, stackable separator rings designed for rapid-lay balcony paving over structural membranes.",
      href: "/solutions/fixed-height-risers",
      tag: "Low-Clearance",
      stats: "10-15mm Base",
      videoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Videos/GIF_paving_risere_with_frame.698.mp4`
    },
    {
      id: 'terraces-5',
      title: "Heavy-Duty Pedestal Systems",
      icon: <Car className="w-5 h-5" />,
      description: "Reinforced commercial core profiles built to transfer Designed for heavy traffic applications across public plazas and squares.",
      href: "/solutions/heavy-duty-pedestals",
      tag: "High Load",
      stats: "3,000kg+ Limit",
      videoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Videos/curb_inlet_riser.715.mp4`
    }
  ],
  landscaping: [
    {
      id: 'landscaping-1',
      title: "Garden Paving Supports",
      icon: <Flower2 className="w-5 h-5" />,
      description: "Stable base plates designed to raise natural stepping pathways cleanly over root systems.",
      href: "/solutions/garden-paving-supports",
      tag: "Eco-Poly",
      stats: "Permeable",
      videoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Videos/Catch_basin_riser_ayush.718.mp4`
    },
    {
      id: 'landscaping-2',
      title: "Raised Landscape Platforms",
      icon: <Trees className="w-5 h-5" />,
      description: "Elevated foundational assemblies designed to decouple hardscapes from planting features.",
      href: "/solutions/raised-landscape-platforms",
      tag: "Drainage-Safe",
      stats: "Root Protection",
      videoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Manhole_riser/adjustable_manhole_riser_installation.mp4`
    }
  ],
  driveways: [
    {
      id: 'driveways-1',
      title: "Vehicular Load Pedestals",
      icon: <Car className="w-5 h-5" />,
      description: "Solid-fill casting models designed specifically to bear vehicular movement patterns on structural podium slabs.",
      href: "/solutions/vehicular-load-pedestals",
      tag: "Load Rating: See individual product specification Traffic",
      stats: "Class A Rated",
      videoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Videos/GIF_paving_risere_with_frame.748.mp4`
    },
    {
      id: 'driveways-2',
      title: "Service & Access Decking",
      icon: <Hammer className="w-5 h-5" />,
      description: "Demountable surface supports providing instant utility vault access without structural masonry deconstruction.",
      href: "/solutions/service-access-decking",
      tag: "Vault Ready",
      stats: "Fast Access",
      videoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Curb_Inlet_riser/Curb_inlet.mp4`
    }
  ],
  joinery: [
    {
      id: 'joinery-1',
      title: "Custom Pedestal Solutions",
      icon: <Construction className="w-5 h-5" />,
      description: "Bespoke height, sizing, and collar adaptations manufactured to clear irregular architectural prints.",
      href: "/solutions/custom-pedestal-solutions",
      tag: "Custom Fab",
      stats: "Built to Spec",
      videoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Videos/GIF_paving_risere_with_frame.699.mp4`
    },
    {
      id: 'joinery-2',
      title: "Industrial Support Systems",
      icon: <Layers className="w-5 h-5" />,
      description: "Corrosion-proof, fiber-reinforced risers tailored to support mechanical plant flooring layouts.",
      href: "/solutions/industrial-support-systems",
      tag: "Chemical-Res",
      stats: "FRP Core",
      videoUrl: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Videos/paving_riser_solid_ring_utilisation_animation.686.mp4`
    }
  ]
};

export default function RedesignedSolutionsSection() {
  const [activeTab, setActiveTab] = useState('terraces');
  const [activeItem, setActiveItem] = useState<SolutionItem | null>(null);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setActiveItem(null); // Reset item override when switching tabs
  };

  const currentTabObj = TABS.find((tab) => tab.id === activeTab) || TABS[0];
  const activeVideoUrl = activeItem?.videoUrl || currentTabObj.defaultVideoUrl;

  return (
    <section className="bg-slate-50 py-20 font-sans border-b border-slate-200">
      <div className="w-full px-10 md:px-20 space-y-10">

        {/* --- HEADER WITH TOP TAGLINE --- */}
        <div className="  space-y-3">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#CC0000]" /> System Applications & Solutions
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 whitespace-nowrap">
            Zero Shifting. <span className="text-[#CC0000]">Flawless Grades.</span> Built to Last.
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
            Engineered support systems designed to level architectural slab elevations effortlessly across every structural environment.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* TOP: HORIZONTAL CATEGORY MENU TABS                                        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white p-3 rounded-sm border border-slate-200 shadow-sm">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={cn(
                  "flex items-center justify-between px-5 py-4 rounded-sm font-black text-xs uppercase tracking-wider text-left transition-all duration-200 relative overflow-hidden border",
                  isActive
                    ? "bg-[#0F0F0F] border-[#0F0F0F] text-white shadow-md"
                    : "bg-slate-50/50 border-slate-100 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#CC0000]" />
                )}
                <span className="truncate pr-2">{tab.label}</span>
                <span className={cn(
                  "text-[10px] font-mono px-2 py-0.5 rounded-sm transition-colors shrink-0",
                  isActive ? "bg-[#CC0000] text-white" : "bg-slate-200 text-slate-600"
                )}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM: SPLIT LAYOUT (LEFT VIDEO / RIGHT CARD CONTENT GRID)                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* BOTTOM LEFT: VIDEO PREVIEW DISPLAY (5 Columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-3">
            <div className="relative aspect-video lg:aspect-[4/3] w-full rounded-sm overflow-hidden bg-[#0F0F0F] border-2 border-slate-900 shadow-2xl group">
              <video autoPlay loop muted playsInline 
                key={activeVideoUrl} // Forces video re-mount on src change
                src={activeVideoUrl}
                
                
                
                
                className="w-full h-full object-cover"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Top Status Badge */}
              <div className="absolute top-3 left-3 bg-[#0F0F0F]/90 backdrop-blur-sm text-white px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-widest rounded-sm border border-zinc-800 flex items-center gap-1.5 pointer-events-none z-10">
                <PlayCircle className="w-3.5 h-3.5 text-[#CC0000] animate-pulse" />
                {activeItem ? `Focus: ${activeItem.title}` : `Category: ${currentTabObj.label}`}
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none z-10">
                <span className="text-[10px] font-mono font-bold uppercase text-zinc-400 block">Active Motion Render</span>
                <p className="text-xs font-black uppercase tracking-wide text-white truncate">
                  {activeItem ? activeItem.title : currentTabObj.label}
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM RIGHT: SOLUTION CARDS GRID (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOLUTIONS_DATA[activeTab]?.map((item) => {
                const isItemSelected = activeItem?.id === item.id;
                return (
                  <Card
                    key={item.id}
                    onClick={() => setActiveItem(item)}
                    className={cn(
                      "cursor-pointer bg-white border rounded-sm transition-all duration-300 relative overflow-hidden flex flex-col justify-between group",
                      isItemSelected
                        ? "border-[#CC0000] ring-1 ring-[#CC0000] shadow-md"
                        : "border-slate-200 hover:border-[#CC0000] hover:shadow-sm"
                    )}
                  >
                    {/* Top Red Hover Accent */}
                    <div className={cn(
                      "absolute top-0 left-0 w-0 h-[3px] bg-[#CC0000] transition-all duration-300",
                      isItemSelected ? "w-full" : "group-hover:w-full"
                    )} />

                    <CardContent className="p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={cn(
                          "w-9 h-9 rounded-sm border flex items-center justify-center transition-all duration-300",
                          isItemSelected
                            ? "bg-[#CC0000] border-[#CC0000] text-white"
                            : "bg-slate-50 border-slate-200 text-slate-700 group-hover:bg-[#0F0F0F] group-hover:border-[#0F0F0F] group-hover:text-white"
                        )}>
                          {item.icon}
                        </div>
                        {item.tag && (
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-slate-100 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-sm">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-sm font-black uppercase tracking-tight text-slate-900 group-hover:text-[#CC0000] transition-colors flex items-center gap-1.5">
                          {item.title}
                          {isItemSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#CC0000]" />}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {item.stats && (
                        <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          <span>Spec Param:</span>
                          <span className="text-slate-800 font-mono">{item.stats}</span>
                        </div>
                      )}
                    </CardContent>

                    <div className="px-5 pb-4 flex justify-end">
                      <Link
                        href={item.href}
                        className="text-[10px] font-black uppercase tracking-widest text-[#CC0000] flex items-center gap-1 hover:underline"
                        onClick={(e) => e.stopPropagation()} // Direct navigation
                      >
                        View Solution <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}