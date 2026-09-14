'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  ChevronLeft,
  Settings,
  ShieldCheck,
  Construction,
  Truck,
  FileText,
  ArrowRight,
  AlignLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const FINISHES = [
  { name: 'D-Shape Riser', image: `/images/custom_riser/d_shape_paving_riser.png` },
  { name: 'Raw Finish', image: `/images/custom_riser/d_shape_riser_iron.png` },
  { name: 'With Iron', image: `/images/custom_riser/d_shape_riser_iron.png` },
  { name: 'With Cast Iron', image: `/images/custom_riser/d_shape_riser_cast_iron.png` },
  { name: 'With Steel', image: `/images/custom_riser/d_shape_riser_steel.png` }
];

const D_SHAPE_DATA = {
  title: 'D-Shape Curb Risers',
  headline: 'Specialized Geometry for Perimeter Curb Inlets.',
  description: 'The D-Shape Riser is a precision-engineered solution for curb-back manholes and drainage structures. Designed with one flat side to sit flush against the concrete curb head, these risers allow for seamless asphalt resurfacing around complex perimeter geometries without obstructing the gutter line.',
  image: `/images/custom_riser/d_shape_riser_cast_iron.png`,
  specs: [
    { label: 'Material', value: 'Material: See product specification' },
    { label: 'Profile Type', value: 'Single Flat-Back "D" Geometry' },
    { label: 'Load Rating', value: 'Load Rating: See individual product specification' },
    { label: 'Standard Sizes', value: '24", 30", 32" Diameter equivalents' },
    { label: 'Rise Increments', value: '1.5" to 4" (Custom stackable available)' },
    { label: 'Certification', value: 'Compliance documentation available upon request' },
  ],
  technicalPoints: [
    {
      title: 'Flush Curb Alignment',
      desc: 'The flat side is precision-machined to ensure a tight, no-gap fit against existing concrete curbs, preventing asphalt seepage into the basin.'
    },
    {
      title: 'Anti-Lateral Shift',
      desc: 'Features integrated seat-locking lugs to prevent the riser from rotating or shifting under the pressure of a steam roller.'
    },
    {
      title: 'High-Temp Coating',
      desc: 'Finished with industrial-grade bituminous paint to withstand the extreme temperatures of fresh hot-mix asphalt.'
    }
  ]
};

export default function DShapeRisersPage() {
  const router = useRouter();
  const [activeFinish, setActiveFinish] = useState(FINISHES[3]); // Default to 'With Cast Iron'
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black">

      <div className="w-full px-10 md:px-20 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* --- LEFT COLUMN: PRODUCT VISUAL --- */}
          <div className="lg:sticky lg:top-32">
            <div className="relative aspect-square w-full bg-gray-50 rounded-none border border-gray-100 flex items-center justify-center p-12 overflow-hidden shadow-sm">
   
              <Image
                key={activeFinish.name}
                src={activeFinish.image}
                alt={activeFinish.name}
                fill
                className="object-contain p-10 hover:rotate-3 transition-transform duration-700 animate-in fade-in zoom-in-95"
                priority
              />

            </div>

            {/* Industrial Feature Badges */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-black text-white p-5 text-center flex flex-col items-center justify-center">
                <ShieldCheck className="mb-2 text-[#CC0000]" size={24} />
                <span className="block text-[10px] font-black uppercase tracking-tighter leading-none text-center">Curb Ready</span>
              </div>
              <div className="bg-black text-white p-5 text-center flex flex-col items-center justify-center">
                <AlignLeft className="mb-2 text-[#CC0000]" size={24} />
                <span className="block text-[10px] font-black uppercase tracking-tighter leading-none text-center">Zero-Gap Fit</span>
              </div>
              <div className="bg-black text-white p-5 text-center flex flex-col items-center justify-center">
                <Construction className="mb-2 text-[#CC0000]" size={24} />
                <span className="block text-[10px] font-black uppercase tracking-tighter leading-none text-center">Heavy Traffic</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: TECHNICAL DETAILS --- */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                D-Shape <br />
                <span className="text-[#CC0000]">Risers</span>
              </h1>

              <div className="inline-block bg-gray-50 text-black px-4 py-2 font-bold uppercase tracking-widest text-xs mb-8 rounded-sm border border-gray-200">
                Selected Finish: <span className="text-[#CC0000]">{activeFinish.name}</span>
              </div>

              <div className="flex gap-4 items-start border-l-4 border-black pl-6">
                <p className="text-xl font-bold text-gray-900 italic leading-relaxed">
                  "{D_SHAPE_DATA.headline}"
                </p>
              </div>

              <p className="mt-8 text-gray-600 leading-relaxed text-lg font-medium">
                {D_SHAPE_DATA.description}
              </p>
            </div>

            {/* Technical Spec Grid */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-black">
                <FileText size={18} className="text-[#CC0000]" /> Dimension Specs
              </h3>
              <div className="grid grid-cols-1 border-t-2 border-black">
                {D_SHAPE_DATA.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-gray-100 hover:bg-gray-50 px-2 transition-colors">
                    <span className="text-[11px] font-black uppercase text-gray-400">{spec.label}</span>
                    <span className="text-sm font-black text-black">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance - Dark Mode Block */}
            <div className="bg-black text-white p-8 md:p-10 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#CC0000]/10 rounded-full blur-3xl"></div>

              <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#CC0000]">
                <Settings size={18} /> Design Integrity
              </h3>
              <div className="space-y-8 relative z-10">
                {D_SHAPE_DATA.technicalPoints.map((point, i) => (
                  <div key={i} className="group">
                    <h4 className="text-[#CC0000] font-black uppercase text-sm mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      {point.title}
                    </h4>
                    <p className="text-sm font-bold text-zinc-400 leading-relaxed group-hover:text-white transition-colors pl-4">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button className="w-full bg-[#CC0000] hover:bg-[#0F0F0F] text-white font-black h-20 uppercase tracking-[0.25em] text-sm group rounded-none shadow-xl transition-colors">
                Request Municipal Pricing <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>

        </div>

        {/* --- AVAILABLE FINISHES (HORIZONTAL CAROUSEL) --- */}
        <div className="mt-24 pt-12 border-t border-gray-100 relative group">
          <div className="mb-6 border-b-4 border-black pb-4 inline-block">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight pr-8">
              Available <span className="text-[#CC0000]">Finishes</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium mb-12">Explore the various material and coating options for our D-Shape Risers.</p>
          
          <div className="relative">
            {/* Scroll Left Button */}
            <button 
              onClick={scrollLeft}
              className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full hover:bg-[#CC0000] hover:text-white transition-all shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 hidden md:block"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Custom Scrollbar Hide but keep horizontal scroll */}
            <style dangerouslySetInnerHTML={{__html: `
              .hide-scrollbar::-webkit-scrollbar { display: none; }
              .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />

            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 hide-scrollbar snap-x snap-mandatory py-4 px-2"
            >
              {FINISHES.map((finish, i) => (
                <div 
                  key={i} 
                  onClick={() => {
                    setActiveFinish(finish);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex-shrink-0 w-[240px] snap-center group/card flex flex-col bg-white border-2 transition-all duration-300 shadow-sm hover:shadow-xl rounded-sm overflow-hidden cursor-pointer ${
                    activeFinish.name === finish.name ? 'border-[#CC0000] ring-1 ring-[#CC0000]' : 'border-gray-100 hover:border-[#CC0000]'
                  }`}
                >
                  <div className="relative w-full h-40 bg-white flex items-center justify-center border-b border-gray-50">
                    <Image 
                      src={finish.image} 
                      alt={finish.name} 
                      fill 
                      className="object-contain p-6 mix-blend-multiply group-hover/card:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-4 bg-gray-50 flex items-center justify-center text-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black group-hover/card:text-[#CC0000] transition-colors leading-tight">
                      {finish.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Right Button */}
            <button 
              onClick={scrollRight}
              className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full hover:bg-[#CC0000] hover:text-white transition-all shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 hidden md:block"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}