'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Hammer,
  ShieldAlert,
  Ruler,
  Layers,
  ArrowUpRight,
  Flame,
  Wrench,
  Construction
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const STEEL_PRODUCTS = [
  { id: 'custom-round', name: 'Custom Round', image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Round_Riser_Raw_Finish.613.png`, spec: '1/4" to 3/4" Rolled Steel' },
  { id: 'custom-square', name: 'Custom Square', image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Sqaure_Riser_Raw_Finish.610.png`, spec: 'A36 Carbon Steel Plate' },
  { id: 'd-shape', name: 'D-Shape / Catch Basin', image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Custom_Riser/D_shape_Riser_with_Steel.634.png`, spec: 'Welded Angle Iron' },
  { id: 'heavy-duty', name: 'Heavy Duty Rectangle', image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_Riser_Raw_Finish.606.png`, spec: 'Structural Channel' },
];

export default function FabricatedSteelPage() {
  const [activeProduct, setActiveProduct] = useState(STEEL_PRODUCTS[0]);

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white selection:bg-[#CC0000] selection:text-white pb-32">
      
      {/* BACKGROUND BLUEPRINT GRID */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(204,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(204,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 w-full px-10 md:px-20 pt-24 lg:pt-32">
        
        {/* --- ARCHITECTURAL HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#CC0000] text-white">
              <Hammer className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Custom Fabrication Shop</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
              Fabricated<br />
              <span className="text-[#CC0000]">Steel Solutions</span>
            </h1>
          </div>
          <div className="max-w-md lg:text-right space-y-6">
            <p className="text-zinc-400 font-medium leading-relaxed">
              When standard castings don't fit, we build it from scratch. Our in-house welding and fabrication facility creates exact-dimension steel risers for any irregular infrastructure project.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-[#CC0000] hover:text-white font-black uppercase tracking-widest rounded-none h-14 px-8 w-full lg:w-auto transition-colors">
              Submit Custom Blueprints
            </Button>
          </div>
        </div>

        {/* --- DYNAMIC INTERACTIVE SHOWCASE GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 h-auto lg:h-[700px] mb-32">
          
          {/* Main Visualizer (Spans 8 columns) */}
          <div className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 relative group overflow-hidden flex flex-col justify-between p-8">
            <div className="absolute top-0 right-0 p-8 flex justify-end">
              <div className="text-right">
                <p className="text-[#CC0000] text-xs font-black uppercase tracking-widest mb-1">Current Configuration</p>
                <p className="text-white text-2xl font-black uppercase tracking-wide">{activeProduct.name}</p>
                <p className="text-zinc-500 font-mono text-xs">{activeProduct.spec}</p>
              </div>
            </div>

            <div className="flex-1 relative w-full h-[400px] lg:h-auto flex items-center justify-center">
              <Image
                key={activeProduct.id}
                src={activeProduct.image}
                alt={activeProduct.name}
                fill
                className="object-contain p-8 lg:p-16 drop-shadow-[0_0_60px_rgba(204,0,0,0.2)] animate-in slide-in-from-right-8 fade-in duration-700"
                priority
              />
            </div>

            <div className="flex justify-between items-end">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-black border border-white/20 flex items-center justify-center"><Ruler className="w-5 h-5 text-white" /></div>
                <div className="w-12 h-12 bg-black border border-white/20 flex items-center justify-center"><Construction className="w-5 h-5 text-white" /></div>
              </div>
              <div className="text-zinc-600 font-mono text-[10px] tracking-widest uppercase">
                MADE IN THE USA // WELDED TO EXACT SPECS
              </div>
            </div>
          </div>

          {/* Selector Grid (Spans 4 columns) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 lg:grid-cols-1 h-full">
            {STEEL_PRODUCTS.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product)}
                className={`relative overflow-hidden border p-6 text-left flex flex-col justify-end min-h-[150px] transition-all duration-300 group ${
                  activeProduct.id === product.id 
                    ? 'border-[#CC0000] bg-[#CC0000]/10' 
                    : 'border-white/10 bg-[#0A0A0A] hover:border-white/30 hover:bg-white/5'
                }`}
              >
                {/* Background Image Ghost */}
                <div className="absolute -right-8 -top-8 w-48 h-48 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
                  <Image src={product.image} alt="" fill className="object-cover" />
                </div>
                
                <div className="relative z-10">
                  <h3 className={`text-lg font-black uppercase tracking-wide mb-1 ${
                    activeProduct.id === product.id ? 'text-white' : 'text-zinc-400'
                  }`}>
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-[2px] bg-[#CC0000]" />
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">{product.spec}</span>
                  </div>
                </div>
                
                {activeProduct.id === product.id && (
                  <div className="absolute top-4 right-4">
                    <ArrowUpRight className="w-5 h-5 text-[#CC0000]" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* --- SPECS BENTO GRID --- */}
        <div className="border-t border-[#CC0000] pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="space-y-6">
              <h4 className="text-5xl font-black text-transparent stroke-text uppercase tracking-tighter" style={{ WebkitTextStroke: '1px #555' }}>
                01.
              </h4>
              <h5 className="text-2xl font-black uppercase tracking-wide">A36 Carbon Steel</h5>
              <p className="text-zinc-400 font-medium leading-relaxed">
                We utilize structural-grade A36 carbon steel for all fabricated risers. It offers exceptional yield strength and weldability, ensuring the riser will never buckle under heavy street-level impacts.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-5xl font-black text-transparent stroke-text uppercase tracking-tighter" style={{ WebkitTextStroke: '1px #555' }}>
                02.
              </h4>
              <h5 className="text-2xl font-black uppercase tracking-wide">Any Shape or Size</h5>
              <p className="text-zinc-400 font-medium leading-relaxed">
                D-shapes, massive rectangular drainage catch basins, or irregular multi-angle vaults. If you can draw it on a napkin and provide the dimensions, our welding shop can build it.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-5xl font-black text-transparent stroke-text uppercase tracking-tighter" style={{ WebkitTextStroke: '1px #CC0000' }}>
                03.
              </h4>
              <h5 className="text-2xl font-black uppercase tracking-wide text-[#CC0000]">Rapid Turnaround</h5>
              <p className="text-zinc-400 font-medium leading-relaxed">
                Emergency paving job? We specialize in rapid turnarounds for custom steel fabrication. Send us your specs and we can have your custom steel risers welded and shipped directly to the job site.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
