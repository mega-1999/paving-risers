'use client';

import React from 'react';
import Image from 'next/image';

const R2 = process.env.NEXT_PUBLIC_R2_BUCKET_URL;

const PRODUCT_ITEMS = [
  {
    name: "Manhole Riser",
    description: "Class 30 gray iron – most economical, high-volume municipal work.",
    image: `${R2}/images/Manhole_riser/Round_Riser_iron_Finish.614.png`,
    darkCoated: false,
  },
  {
    name: "Catch Basin Riser",
    description: "Bituminous-coated castings for corrosion resistance.",
    image: `${R2}/images/catch_basin_riser/Square_riser_coated_finish.807.png`,
    darkCoated: true,
  },
  {
    name: "Curb Inlet Riser",
    description: "High-tensile fabricated steel mechanical adjustment.",
    image: `${R2}/images/curb_inlet_riser/Rectangle_Paving_Riser_4_coated_Finish.815.png`,
    darkCoated: true,
  },
  {
    name: "Valve Box Riser",
    description: "Drop-in extensions for water and gas valve boxes.",
    image: `${R2}/images/Valve_box_riser/1.5.354.jpg.jpeg`,
    darkCoated: true,
  },
  {
    name: "Adjustable Riser",
    description: "Telescopic height adjustment for precise grade matching.",
    image: `${R2}/images/Manhole_riser/Adjustbale_riser_coated_finish.808.png`,
    darkCoated: true,
  },
  {
    name: "Fixed Round Riser",
    description: "Solid cast iron riser rings for permanent grade builds.",
    image: `${R2}/images/Manhole_riser/fixed_round_riser_.810.png`,
    darkCoated: true,
  },
  {
    name: "Fabricated Grate",
    description: "Heavy-duty steel grates for drainage and load-bearing.",
    image: `${R2}/images/frame_and_cover.png`,
    darkCoated: false,
  },
  {
    name: "Ductile Iron Riser",
    description: "ASTM A536 ductile iron for highway-grade load ratings.",
    image: `${R2}/images/Manhole_riser/Round_Riser_with_screw_iron_Finish.615.png`,
    darkCoated: false,
  },
  {
    name: "Square Riser (Raw)",
    description: "Raw finish square catch basin risers for custom coating.",
    image: `${R2}/images/catch_basin_riser/Square_riser_coated_finish.807.png`,
    darkCoated: false,
  },
  {
    name: "Rectangle Riser",
    description: "Rectangular paving risers for curb inlet and storm drain.",
    image: `${R2}/images/catch_basin_riser/Rectangle_Paving_Riser_1_Right.622.png`,
    darkCoated: false,
  },
  {
    name: "D-Shape Riser",
    description: "Custom D-shape risers for non-standard utility openings.",
    image: `${R2}/images/Custom_Riser/D_shape_Rise__with_Iron.635.png`,
    darkCoated: false,
  },
  {
    name: "Trash Rack",
    description: "Debris screening racks for stormwater inlet protection.",
    image: `${R2}/images/trash_racks/tr1.21.png`,
    darkCoated: false,
  },
];

export default function ProductLineMarquee() {
  // Triple the array for seamless infinite loop
  const tripled = [...PRODUCT_ITEMS, ...PRODUCT_ITEMS, ...PRODUCT_ITEMS];

  return (
    <section className="bg-white py-16 border-t border-b border-slate-200 overflow-hidden font-sans select-none">
      <div className="w-full px-10 md:px-20">

        {/* HEADER */}
        <div className="mb-10">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] mb-2 block">
            Product Line Overview
          </span>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Every Riser. <span className="text-[#CC0000]">Every Application.</span>
          </h2>
        </div>

      </div>

      {/* MARQUEE — full bleed, no side padding */}
      <div className="relative w-full overflow-hidden marquee-product-wrapper cursor-pointer">

        {/* Edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <style>{`
          @keyframes product-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-product-marquee {
            animation: product-marquee 50s linear infinite;
          }
          .marquee-product-wrapper:hover .animate-product-marquee {
            animation-play-state: paused;
          }
        `}</style>

        {/* INFINITE SCROLL TRACK */}
        <div className="flex items-stretch gap-6 w-max whitespace-nowrap will-change-transform animate-product-marquee">
          {tripled.map((product, i) => (
            <div
              key={i}
              className="shrink-0 w-[220px] bg-white border border-slate-200 hover:border-[#CC0000] transition-all duration-300 group"
            >
              {/* Top accent bar */}
              <div className="w-full h-[3px] bg-slate-100 group-hover:bg-[#CC0000] transition-colors duration-300" />

              {/* Name — red */}
              <div className="px-5 pt-4 pb-2">
                <h3 className="text-sm font-black uppercase tracking-tight text-[#CC0000] whitespace-normal leading-tight">
                  {product.name}
                </h3>
              </div>

              {/* Image area */}
              <div className={`relative w-full h-[160px] flex items-center justify-center overflow-hidden ${product.darkCoated ? 'bg-white' : 'bg-slate-50'}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={140}
                  className="object-contain w-auto h-[130px] group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
              </div>

              {/* Description */}
              <div className="px-5 py-4 border-t border-slate-100">
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed whitespace-normal">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
