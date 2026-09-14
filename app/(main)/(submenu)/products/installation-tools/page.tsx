'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Hammer, Wrench, ShieldAlert, Anchor } from 'lucide-react';
import { cn } from '@/lib/utils';

// We use placeholder images since actual tool imagery is not in the bucket yet.
const TOOLS = [
  {
    id: '01',
    name: 'Heavy-Duty Hook',
    title: 'Manhole Hook',
    desc: 'Forged steel hook designed to lift and maneuver heavy cast iron covers safely without pinching.',
    icon: Anchor,
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/manhole_cover_hook.png`, 
  },
  {
    id: '02',
    name: 'Expansion Wrench',
    title: 'Adjustment Wrench',
    desc: 'High-torque wrench specifically calibrated for expanding the Mechanical Expansions on our adjustable risers.',
    icon: Wrench,
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/chisel_tool.png`,
  },
  {
    id: '03',
    name: 'Riser Lifter',
    title: 'Magnetic Lifter',
    desc: 'Industrial magnetic lifting tool to easily lower and align heavy cast iron risers into place before paving.',
    icon: Hammer,
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_lifter.png`,
  },
  {
    id: '04',
    name: 'Pry Bar',
    title: 'Alignment Bar',
    desc: 'Solid steel pry bar for making micro-adjustments to the seating of risers in older, irregular frames.',
    icon: ShieldAlert,
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_cover_bar.png`,
  },
  {
    id: '05',
    name: 'Grate Puller',
    title: 'Extraction Hook',
    desc: 'Specialized dual-hook puller designed to safely extract heavy drainage grates without damaging the surrounding frame.',
    icon: Anchor,
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/valve_box_tongue.png`,
  },
  {
    id: '06',
    name: 'Guide Pins',
    title: 'Alignment Pins',
    desc: 'Heavy-duty steel guide pins used to precisely align multi-part manhole covers and risers during final assembly.',
    icon: Wrench,
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/sewer_plug_puller.png`,
  },
  {
    id: '07',
    name: 'Lifting Tongs',
    title: 'Cover Tongs',
    desc: 'Heavy-duty lifting tongs to provide a secure grip on flat manhole covers and solid grates during extraction.',
    icon: ShieldAlert,
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/tools/chisel_tool.png`,
  }
];

export default function InstallationToolsPage() {
  // By default, no panel is explicitly active (they all share 25% width).
  // When hovered, one becomes active.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-black h-screen w-full overflow-hidden text-white font-sans selection:bg-[#CC0000] selection:text-white pt-[64px] md:pt-[80px]">
      
      {/* 
        --- EXPANDING ACCORDION LAYOUT ---
        The container uses flex. The children use flex-grow and transition-all.
      */}
      <div className="flex h-full w-full">
        {TOOLS.map((tool, idx) => {
          // Determine the width state of this specific panel
          const isHovered = activeIndex === idx;
          const isAnyHovered = activeIndex !== null;
          
          return (
            <div
              key={tool.id}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              className={cn(
                "relative h-full flex items-center justify-center border-r border-[#222] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer group",
                isHovered ? "flex-[4] lg:flex-[6]" : (isAnyHovered ? "flex-1" : "flex-1")
              )}
            >
              
              {/* Background Image - Fades in strongly when hovered */}
              <div className={cn(
                "absolute inset-0 z-0 transition-opacity duration-700 ease-in-out",
                isHovered ? "opacity-100" : "opacity-30 mix-blend-luminosity grayscale"
              )}>
                <Image 
                  src={tool.image} 
                  alt={tool.name} 
                  fill 
                  className={cn(
                    "object-cover transition-transform duration-[2000ms] ease-out",
                    isHovered ? "scale-100" : "scale-110"
                  )}
                  priority
                />
                
                {/* Dynamic Gradients based on state */}
                <div className={cn(
                  "absolute inset-0 transition-all duration-700",
                  isHovered 
                    ? "bg-gradient-to-r from-black/90 via-black/50 to-transparent" 
                    : "bg-black/70 group-hover:bg-black/50"
                )} />
              </div>

              {/* 
                --- CLOSED / SHRINK STATE CONTENT ---
                This is the vertical text visible when the panel is small.
              */}
              <div className={cn(
                "absolute inset-0 flex flex-col items-center justify-end pb-12 z-10 transition-opacity duration-300",
                isHovered ? "opacity-0 pointer-events-none" : "opacity-100 delay-300"
              )}>
                <div className="flex flex-col items-center">
                  <span className="text-[#CC0000] font-black text-2xl mb-8">{tool.id}</span>
                  {/* Vertical Text Trick */}
                  <h2 
                    className="text-2xl md:text-4xl font-black uppercase tracking-widest text-transparent stroke-text whitespace-nowrap -rotate-90 origin-bottom"
                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)' }}
                  >
                    {tool.name}
                  </h2>
                </div>
              </div>

              {/* 
                --- OPEN / EXPANDED STATE CONTENT ---
                This is the massive technical data visible when hovered.
              */}
              <div className={cn(
                "absolute inset-0 flex items-center p-8 md:p-16 z-20 transition-all duration-700 delay-100",
                isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12 pointer-events-none"
              )}>
                <div className="max-w-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full border border-[#CC0000] flex items-center justify-center">
                      <tool.icon className="w-5 h-5 text-[#CC0000]" />
                    </div>
                    <span className="text-[#CC0000] font-black uppercase tracking-widest text-sm">
                      Tool {tool.id}
                    </span>
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-white drop-shadow-2xl">
                    {tool.title}
                  </h2>
                  
                  <p className="text-gray-300 font-medium text-lg leading-relaxed mb-12 max-w-md border-l-4 border-[#CC0000] pl-6">
                    {tool.desc}
                  </p>
                  
                  <a href="#quote" className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-[#CC0000] hover:text-white transition-all duration-300">
                    Request Pricing <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
