'use client';

import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Construction,
  Settings,
  ArrowUpRight,
  Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const CAST_IRON_PRODUCTS = [
  {
    title: 'Heavy Duty Trench Grates',
    category: 'Drainage Castings',
    description: 'Black coated trench grates designed for heavy highway and airport tarmac load requirements.',
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_Paving_Riser_1.619.png`,
  },
  {
    title: 'Round Extension Rings',
    category: 'Utility Adjustments',
    description: 'Solid cast rings to elevate existing manhole covers without requiring a full frame replacement.',
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Round_Riser_Raw_Finish.613.png`,
  },
  {
    title: 'Square Vault Covers',
    category: 'Telecom & Electrical',
    description: 'Ductile iron square covers built to withstand constant impact in high-traffic urban environments.',
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Sqaure_Riser_iron.609.png`,
  },
  {
    title: 'D-Shape Inlet Frames',
    category: 'Curb Inlets',
    description: 'Custom molded D-shape frames that match existing curb lines precision for seamless water flow.',
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Custom_Riser/D_shape_Riser_Raw_Finish.602.png`,
  }
];

export default function OtherCastIronPage() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white selection:bg-[#CC0000] selection:text-white pb-32">

      {/* Background Noise / Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="relative z-10 w-full px-6 md:px-8 lg:px-12 pt-32">

        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-24 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full bg-white/5">
            <ShieldCheck className="w-4 h-4 text-[#CC0000]" />
            <span className="text-xs font-black uppercase tracking-widest">Foundry Direct</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
            Other<br />
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #CC0000' }}>Cast Iron</span><br />
            Products
          </h1>

          <p className="text-xl text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Beyond standard paving risers, our foundry produces a massive array of heavy-duty municipal and commercial cast iron infrastructure products.
          </p>
        </div>

        {/* --- IMMERSIVE CATALOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {CAST_IRON_PRODUCTS.map((product, idx) => (
            <div
              key={idx}
              className="group relative bg-[#0A0A0A] border border-white/10 overflow-hidden flex flex-col justify-between h-[600px] hover:border-[#CC0000] transition-colors duration-500"
            >
              {/* Top Text Block */}
              <div className="p-10 relative z-20">
                <p className="text-[#CC0000] text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#CC0000] rounded-full animate-pulse" />
                  {product.category}
                </p>
                <h3 className="text-4xl font-black uppercase tracking-tight mb-4">{product.title}</h3>
                <p className="text-zinc-500 font-medium leading-relaxed max-w-md">
                  {product.description}
                </p>
              </div>

              {/* Image Area */}
              <div className="absolute inset-0 top-1/3 flex items-center justify-center p-12 pointer-events-none">
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,0,0,0.2)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-700"
                />
              </div>

              {/* Bottom Action Bar */}
              <div className="absolute bottom-0 left-0 w-full p-10 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20">
                <Button className="bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest rounded-none h-12 px-6 transition-colors">
                  Request Specs
                </Button>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-colors cursor-pointer">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>

              {/* Fade out bottom of card so image pops */}
              <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* --- CUSTOM CASTING BANNER --- */}
        <div className="bg-[#CC0000] p-12 md:p-24 relative overflow-hidden group">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-10 group-hover:scale-110 transition-transform duration-1000">
            <Layers className="w-[600px] h-[600px] text-black" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
              Need a Custom Casting?
            </h2>
            <p className="text-xl font-medium text-white/90 leading-relaxed mb-10">
              If it’s made of iron and goes in the ground, we can cast it. Send us your drawings, blueprints, or even a rough sketch, and our foundry engineers will develop a custom mold for your exact project needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-black hover:bg-white text-white hover:text-black font-black uppercase tracking-widest px-10 h-16 rounded-none transition-colors">
                Contact the Foundry
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white font-black uppercase tracking-widest px-10 h-16 rounded-none transition-colors">
                View Casting Process
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
