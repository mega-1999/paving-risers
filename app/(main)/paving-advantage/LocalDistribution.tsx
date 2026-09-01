import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Crosshair } from 'lucide-react';

export default function LocalDistribution() {
  return (
    <section className="bg-[#050505] py-24 border-t border-[#333] relative z-20 overflow-hidden font-sans">
      
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="w-full px-10 md:px-20 relative z-10">

        {/* --- HEADER --- */}
        <div className="mb-16 border-l-4 border-[#CC0000] pl-6 max-w-4xl">
 
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            View <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px #CC0000' }}>your local inventory</span> and DOT specifications.
          </h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest max-w-2xl leading-relaxed">
            Authorized contractor accounts gain direct access to regional stock levels, structural submittals, and specialized pricing matrices.
          </p>
        </div>

        {/* --- 3-IMAGE HEAVY VIEWPORT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-16 bg-[#333] border border-[#333] p-1">
          
          {/* Viewport 1 */}
          <div className="relative w-full h-80 bg-black group overflow-hidden cursor-crosshair">
            {/* Target Crosshair Overlay */}
            <div className="absolute inset-0 z-20 border border-transparent group-hover:border-[#CC0000]/50 transition-colors duration-300 pointer-events-none flex items-center justify-center">
              <Crosshair className="w-12 h-12 text-[#CC0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </div>
            
            <Image
              src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%20rectangle%20iron.668.png`} 
              alt="Installed manhole riser on street"
              fill
              className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            
            <div className="absolute bottom-4 left-4 z-20 bg-black/80 backdrop-blur-sm border border-[#333] px-3 py-1">
              <span className="text-[10px] font-mono text-[#CC0000] uppercase tracking-widest">VP-01 / FIELD INSTALL</span>
            </div>
          </div>

          {/* Viewport 2 */}
          <div className="relative w-full h-80 bg-black group overflow-hidden cursor-crosshair">
            <div className="absolute inset-0 z-20 border border-transparent group-hover:border-[#CC0000]/50 transition-colors duration-300 pointer-events-none flex items-center justify-center">
              <Crosshair className="w-12 h-12 text-[#CC0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </div>
            
            <Image
              src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%201.641.png`} 
              alt="Utility valve box in commercial district"
              fill
              className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />

            <div className="absolute bottom-4 left-4 z-20 bg-black/80 backdrop-blur-sm border border-[#333] px-3 py-1">
              <span className="text-[10px] font-mono text-[#CC0000] uppercase tracking-widest">VP-02 / MUNICIPAL STOCK</span>
            </div>
          </div>

          {/* Viewport 3 */}
          <div className="relative w-full h-80 bg-black group overflow-hidden cursor-crosshair">
            <div className="absolute inset-0 z-20 border border-transparent group-hover:border-[#CC0000]/50 transition-colors duration-300 pointer-events-none flex items-center justify-center">
              <Crosshair className="w-12 h-12 text-[#CC0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </div>
            
            <Image
              src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/D_shape_Riser_Raw_Finish.602.png`} 
              alt="Catch basin frame and grate"
              fill
              className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />

            <div className="absolute bottom-4 left-4 z-20 bg-black/80 backdrop-blur-sm border border-[#333] px-3 py-1">
              <span className="text-[10px] font-mono text-[#CC0000] uppercase tracking-widest">VP-03 / HEAVY CASTINGS</span>
            </div>
          </div>
        </div>

        {/* --- FOOTER LOGISTICS MANIFEST --- */}
        <div className="bg-[#111] border border-[#333] p-8 md:p-10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#CC0000]" />
          
          <p className="text-gray-400 text-sm md:text-base leading-loose font-medium relative z-10">
            Our nationwide distribution network, <Link href="#manufacturing" className="text-white hover:text-[#CC0000] underline decoration-[#333] hover:decoration-[#CC0000] transition-colors">USA-based manufacturing facilities</Link>, and <Link href="#sales" className="text-white hover:text-[#CC0000] underline decoration-[#333] hover:decoration-[#CC0000] transition-colors">regional sales hubs</Link> put us in the perfect position to back our paving risers with real, responsive customer service. Because we understand local municipal and state DOT standards inside and out, our regional production lines keep the exact cast iron and steel components you need within quick reach of your jobsite.
          </p>
        </div>

      </div>
    </section>
  );
}