'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldAlert, Waves, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

// We will define 3 main "slides" of content
const SECTIONS = [
  {
    id: 'heavy-duty',
    title: '50-Ton Rated',
    subtitle: 'Fabricated Steel Grates',
    description: 'Engineered for extreme shock loads. Our heavy-duty fabricated steel grates are designed for high-traffic industrial zones, airports, and major highway intersections where standard cast iron would fail.',
    icon: ShieldAlert,
    // Using a video for the first highly dynamic section
    media: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/catch_basin_riser/two_grate_catch_basin_riser_animation.mp4`,
    isVideo: true,
  },
  {
    id: 'high-flow',
    title: 'High Capacity',
    subtitle: 'Maximum Inflow Profile',
    description: 'Designed with optimized bar spacing to prevent debris clogging while allowing maximum stormwater inflow. Keep the streets clear and prevent dangerous hydroplaning conditions on critical roadways.',
    icon: Waves,
    media: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/rectangle_catch_basin_riser_coated.png`,
    isVideo: false,
  },
  {
    id: 'custom-fab',
    title: 'Custom Specs',
    subtitle: 'Built to any blueprint',
    description: 'Non-standard dimensions? Sloped curbs? No problem. Our domestic fabrication facilities can weld any configuration of catch basin grate to match your specific municipal blueprints exactly.',
    icon: Wrench,
    media: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/animations/1.719.mp4`,
    isVideo: true,
  }
];

export default function CatchBasinGratesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  // Set up Intersection Observer to track which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Trigger exactly when the section crosses the middle of the screen
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll('.right-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#CC0000] selection:text-white flex flex-col lg:flex-row">
      
      {/* 
        --- LEFT PANEL (STICKY) --- 
        This panel locks to the left side of the screen and acts as a dynamic presentation board.
      */}
      <div className="w-full lg:w-1/2 lg:h-screen lg:sticky top-0 left-0 bg-[#050505] border-r border-[#333] flex flex-col justify-between overflow-hidden relative z-20 p-8 md:p-16">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(204,0,0,0.15)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        {/* Header */}
        <div className="relative z-10 animate-in fade-in slide-in-from-left duration-1000">
          <div className="h-1 w-12 bg-[#CC0000] mb-6"></div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
            Catch Basin <br />
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>
              Grates
            </span>
          </h1>
        </div>

        {/* Dynamic Crossfading Text Block */}
        <div className="relative z-10 flex-grow flex flex-col justify-center min-h-[300px]">
          {SECTIONS.map((section, idx) => {
            const isActive = activeIndex === idx;
            const Icon = section.icon;
            
            return (
              <div 
                key={section.id} 
                className={cn(
                  "absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isActive ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-12 pointer-events-none"
                )}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-[#CC0000]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#CC0000]">
                    Spec {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-2">
                  {section.title}
                </h2>
                <h3 className="text-lg md:text-2xl font-bold text-gray-500 uppercase tracking-widest mb-6">
                  {section.subtitle}
                </h3>
                
                <p className="text-gray-400 font-medium leading-relaxed max-w-md text-sm md:text-base border-l-2 border-[#CC0000] pl-4">
                  {section.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="relative z-10 mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="#quote"
            className="group flex items-center justify-between w-full sm:w-auto px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-[#CC0000] hover:text-white transition-all duration-300"
          >
            <span>Request Fabrication</span>
            <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>


      {/* 
        --- RIGHT PANEL (SCROLLING) --- 
        This side scrolls normally, containing massive visual assets.
      */}
      <div className="w-full lg:w-1/2 flex flex-col relative z-10" ref={rightPanelRef}>
        
        {SECTIONS.map((section, idx) => (
          <div 
            key={section.id} 
            data-index={idx}
            className="right-section w-full min-h-[70vh] lg:h-screen flex items-center justify-center p-6 md:p-12 border-b border-[#222]"
          >
            <div className="relative w-full max-w-2xl aspect-square group overflow-hidden bg-[#111] border border-[#333] flex items-center justify-center shadow-2xl hover:border-[#CC0000] hover:shadow-[0_0_50px_rgba(204,0,0,0.2)] transition-all duration-700">
              
              {/* Subtle visual grid behind image */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              {section.isVideo ? (
                <video autoPlay loop muted playsInline  
                  src={section.media}
                  
                  
                  
                  
                  className="relative z-10 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
                />
              ) : (
                <Image
                  src={section.media}
                  alt={section.title}
                  fill
                  className="relative z-10 object-contain p-8 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              )}

              {/* Progress Indicator for Desktop */}
              <div className="absolute top-6 right-6 z-20 text-[10px] font-mono text-gray-500 uppercase tracking-widest hidden lg:block">
                View {idx + 1} / {SECTIONS.length}
              </div>
            </div>
          </div>
        ))}

        {/* Extra padding at the bottom so the last section can reach the middle of the screen easily */}
        <div className="h-[20vh] bg-black"></div>
      </div>
      
    </div>
  );
}
