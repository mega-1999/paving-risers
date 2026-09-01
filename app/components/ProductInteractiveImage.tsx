'use client';

import React, { useState } from 'react';
import InteractiveProduct from './InteractiveProduct';
import { ShieldCheck, Crosshair, Hammer, Layers, Ruler } from 'lucide-react';

interface Hotspot {
  id: number;
  x: string;
  y: string;
  title: string;
  desc: string;
}

interface ProductDataItem {
  id: string;
  name: string;
  type: string;
  imgSrc: string;
  HOTSPOTS: Hotspot[];
}

const data: ProductDataItem[] = [
  {
    id: 'riser-15200',
    name: 'Class 30 Solid Iron Riser',
    type: 'Standard Circular Profile',
    imgSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Round_Riser_iron_Finish.614.png`,
    HOTSPOTS: [
      { id: 101, x: '33%', y: '40%', title: 'Precision Angles', desc: 'Sloped & Tapered Risers' },
      { id: 102, x: '41%', y: '66%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
      { id: 103, x: '68%', y: '60%', title: 'Durable Finish', desc: 'Heavy-Duty Cast Iron Construction' },
    ]
  },
  {
    id: 'riser-15205',
    name: 'Heavy Duty Square Frame Riser',
    type: 'Catch Basin Configuration',
    imgSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Square_riser_coated_finish.807.png`,
    HOTSPOTS: [
      { id: 201, x: '30%', y: '40%', title: 'Continuous Welding', desc: 'Maximum Structural Integrity' },
      { id: 202, x: '65%', y: '40%', title: 'Powder Coating', desc: 'Corrosion Resistant Finish' },
      { id: 203, x: '67%', y: '62%', title: 'Bulk Ready', desc: 'Steel Catch Basin Risers' },
      { id: 204, x: '30%', y: '62%', title: 'Precision Angles', desc: 'Sloped & Tapered Profiles' },
    ]
  },
  {
    id: 'riser-15203',
    name: 'Custom Rectangular Extension Ring',
    type: 'Utility Vault Profile',
    imgSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_Paving_Riser_1_Right.622.png`,
    HOTSPOTS: [
      { id: 301, x: '32%', y: '40%', title: 'Continuous Welding', desc: 'Maximum Structural Integrity' },
      { id: 302, x: '68%', y: '35%', title: 'Powder Coating', desc: 'Corrosion Resistant Finish' },
      { id: 303, x: '61%', y: '65%', title: 'Bulk Ready', desc: 'Custom Steel Risers' },
    ]
  }
];

export default function ProductInteractiveImage() {
  const [activeTab, setActiveTab] = useState(0);
  const currentProduct = data[activeTab];

  return (
    <section className="py-24 bg-white font-sans text-[#0F0F0F]">
      <div className="w-full px-10 md:px-20 space-y-12">

        {/* --- HEADER DESK --- */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
            <Crosshair className="w-4 h-4 text-[#CC0000]" /> Product Details
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
            Interactive Products <br />
            <span className="text-[#CC0000]">Feature Hotspots.</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium leading-relaxed">
            Select an infrastructure casting profile below. Hover over marked diagnostic vectors to review localized engineering design specifications.
          </p>
        </div>

        {/* --- SPLIT MATRIX TO FILL SIDE SPACE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT COLUMN: INTERACTIVE NAVIGATION & TECHNICAL STATS (5 Columns) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">

            {/* Tab Swappers */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block px-1">
                Select Hardware Model
              </span>
              {data.map((item, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-5 rounded-sm border transition-all duration-200 flex flex-col gap-1 relative overflow-hidden ${isActive
                      ? 'bg-[#0F0F0F] border-[#0F0F0F] text-white pl-8 shadow-xl'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#CC0000]" />
                    )}
                    <span className="font-black uppercase tracking-wide text-sm">
                      {item.name}
                    </span>
                    <span className={`text-xs font-medium ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.type}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Paving Engineering Context Info Block */}
            <div className="border border-slate-200 rounded-sm p-6 bg-slate-50/50 space-y-4">
              <div className="flex items-center gap-2 text-[#CC0000] border-b border-slate-200 pb-3">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="text-xs font-black uppercase tracking-widest text-[#0F0F0F]">
                  Specifications
                </h4>
              </div>

              <div className="space-y-3 text-xs font-bold text-slate-600 uppercase tracking-wider">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><Layers className="w-4 h-4 text-slate-400" /> Casting Core:</span>
                  <span className="text-[#0F0F0F] text-right">Black Coated / Ductile Iron / Mild Steel</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><Ruler className="w-4 h-4 text-slate-400" /> Height Range:</span>
                  <span className="text-[#0F0F0F]">1/4" to 4" Rise</span>
                </div>

              </div>
            </div>


          </div>

          {/* RIGHT COLUMN: HIGH-CONTRAST INTERACTIVE CANVAS FRAME (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-sm p-6 md:p-10 shadow-inner min-h-[500px] flex items-center justify-center relative group">
            <div className="absolute top-4 left-4 bg-transparent border-b-2 border-[#CC0000] px-1 py-1 text-xs md:text-sm font-black uppercase tracking-widest text-[#CC0000] z-10 pointer-events-none">
              {currentProduct.name}
            </div>

            <div key={currentProduct.id} className="w-full animate-[fadeIn_0.35s_ease-out]">
              <InteractiveProduct
                imageSrc={currentProduct.imgSrc}
                altText={currentProduct.name}
                hotspots={currentProduct.HOTSPOTS}
              />
            </div>
          </div>

        </div>

      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}