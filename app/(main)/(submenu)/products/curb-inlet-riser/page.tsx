'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const FINISHES = [
  { id: '01', name: 'Raw Finish', image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/curb_inlet_riser/curb_inlet_riser_iron.png` },
  { id: '02', name: 'Coated Finish', image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/curb_inlet_riser/curb_inlet_riser_iron.png` },
  { id: '03', name: 'Cast Iron', image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/curb_inlet_riser/curb_inlet_riser_iron_offset.png` },
  { id: '04', name: 'Heavy-Duty Coated', image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/curb_inlet_riser/curb_inlet_riser_coated_2.png` },
];

export default function CurbInletParallaxPage() {
  const [activeFinish, setActiveFinish] = useState(FINISHES[0]);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position to fade the background slightly and move elements
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 0) {
        setScrollProgress(scrollY / height);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white font-sans selection:bg-[#CC0000] selection:text-white">

      {/* 
        --- STICKY BACKGROUND LAYER --- 
        This layer locks to the screen while the rest of the page scrolls over it.
      */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">

        {/* Glow & Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,0,0,0.1)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Massive Background Typography */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center opacity-30 select-none"
          style={{ transform: `translateY(${scrollProgress * -100}px)` }}
        >
          <h1 className="text-[15vw] font-black uppercase tracking-tighter leading-[0.8] text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>
            CURB
          </h1>
          <h1 className="text-[15vw] font-black uppercase tracking-tighter leading-[0.8] text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>
            INLET
          </h1>
        </div>

        {/* The Product Image */}
        <div
          className="relative z-10 w-[90vw] md:w-[60vw] max-w-5xl transition-all duration-1000 ease-out"
          style={{
            opacity: 1 - scrollProgress * 0.5,
            transform: `scale(${1 - scrollProgress * 0.1}) translateY(${scrollProgress * 50}px)`
          }}
        >
          <Image
            key={activeFinish.name}
            src={activeFinish.image}
            alt="Curb Inlet Riser"
            width={1200}
            height={800}
            className="w-full h-auto object-contain drop-shadow-[0_0_80px_rgba(204,0,0,0.2)] animate-in fade-in zoom-in duration-1000"
            priority
          />
        </div>
      </div>


      {/* 
        --- SCROLLING FOREGROUND LAYER --- 
        This content scrolls smoothly over the fixed background.
      */}
      <div className="relative z-10 pt-[80vh] pb-[20vh] pointer-events-auto flex flex-col items-center">

        {/* Intro Text Block */}
        <div className="w-full max-w-4xl px-6 md:px-12 mb-[40vh]">
          <div className="backdrop-blur-xl bg-black/40 border border-white/10 p-8 md:p-12 shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Precision Engineered <br /> <span className="text-[#CC0000]">For The Street.</span>
            </h2>
            <p className="text-gray-400 font-medium leading-relaxed max-w-2xl text-lg">
              The ultimate solution for municipal paving and resurfacing projects. Our curb inlet risers provide instant, perfect grade alignment without costly and time-consuming concrete excavation.
            </p>
          </div>
        </div>

        {/* Feature 1: Left Aligned */}
        <div className="w-full max-w-6xl px-6 md:px-12 flex justify-start mb-[30vh]">
          <div className="flex gap-8 items-start max-w-2xl backdrop-blur-md bg-gradient-to-r from-black/80 to-transparent p-8 border-l-4 border-[#CC0000]">
            <span className="text-6xl md:text-8xl font-black text-transparent stroke-text hidden md:block" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
              01
            </span>
            <div>
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-widest mb-4">Custom Fabrication</h3>
              <p className="text-gray-400 font-medium leading-loose">
                No two curbs are identical. We custom-weld non-standard rectangular inlets, sloped seats, and complex catch basin profiles to match your exact municipal blueprints precision. Designed and fabricated entirely in the USA.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2: Right Aligned */}
        <div className="w-full max-w-6xl px-6 md:px-12 flex justify-end mb-[30vh]">
          <div className="flex gap-8 items-start max-w-2xl backdrop-blur-md bg-gradient-to-l from-black/80 to-transparent p-8 border-r-4 border-white">
            <div className="text-right">
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-widest mb-4">Designed to meet applicable DOT requirements</h3>
              <p className="text-gray-400 font-medium leading-loose">
                Engineered to meet the stringent shock-load requirements of major highway and infrastructure projects. Exceed city inspectors' expectations with professional-grade access products built to withstand constant impact.
              </p>
            </div>
            <span className="text-6xl md:text-8xl font-black text-transparent stroke-text hidden md:block" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
              02
            </span>
          </div>
        </div>

        {/* Finish Selector Panel */}
        <div className="w-full max-w-7xl px-6 md:px-12 mb-[20vh] flex flex-col md:flex-row gap-12 items-end justify-between">

          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Select Material</h2>
            <p className="text-gray-500 font-medium leading-relaxed">
              Available in multiple heavy-duty materials and finishes to suit the specific load and environmental requirements of your project. Select a material to view.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            {FINISHES.map((finish) => (
              <button
                key={finish.id}
                onClick={() => {
                  setActiveFinish(finish);
                  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll up to see the image change clearly
                }}
                className={cn(
                  "flex items-center gap-6 px-8 py-4 backdrop-blur-xl transition-all duration-500 group border",
                  activeFinish.id === finish.id
                    ? "bg-[#CC0000]/10 border-[#CC0000]"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                )}
              >
                <span className={cn(
                  "text-xs font-black uppercase tracking-widest transition-colors",
                  activeFinish.id === finish.id ? "text-[#CC0000]" : "text-gray-500 group-hover:text-white"
                )}>
                  {finish.id}
                </span>
                <span className={cn(
                  "text-lg font-bold uppercase tracking-widest transition-colors text-left",
                  activeFinish.id === finish.id ? "text-white" : "text-gray-400 group-hover:text-white"
                )}>
                  {finish.name}
                </span>
                <ArrowRight className={cn(
                  "w-5 h-5 ml-auto transition-transform",
                  activeFinish.id === finish.id ? "text-[#CC0000] translate-x-2" : "text-gray-600 opacity-0 group-hover:opacity-100"
                )} />
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
