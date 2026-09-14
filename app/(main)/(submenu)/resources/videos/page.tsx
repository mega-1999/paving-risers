'use client';

import React from 'react';
import Image from 'next/image';
import { PlayCircle, Eye, ArrowDownRight, Maximize2 } from 'lucide-react';

export default function AvantGardeVideosPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-white selection:text-black pb-0 overflow-hidden">
      
      {/* ========================================= */}
      {/* 1. BRUTALIST ASYMMETRICAL HERO            */}
      {/* ========================================= */}
      <div className="relative w-full min-h-[90vh] pt-32 pb-16 px-4 md:px-12 flex flex-col lg:flex-row items-center border-b border-white/10">
        
        {/* Massive Rotated Typography */}
        <div className="lg:w-1/3 flex flex-col justify-center relative z-20 mix-blend-difference mb-12 lg:mb-0">
          <div className="inline-flex items-center gap-2 mb-12 border border-white/20 rounded-full px-6 py-2 w-max text-xs font-black uppercase tracking-widest bg-black text-white">
            <Eye className="w-4 h-4 text-[#CC0000]" /> 
            Visual Archive
          </div>
          <h1 className="text-[12vw] lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.8]">
            RAW <br />
            <span className="text-[#CC0000]">FOOTAGE</span>
          </h1>
          <p className="mt-8 text-xl text-zinc-400 font-medium max-w-sm">
            Unfiltered field installations, mechanical testing, and 3D technical deep dives into the Paving Riser ecosystem.
          </p>
        </div>

        {/* Floating Video Canvas */}
        <div className="lg:w-2/3 relative w-full h-[60vh] lg:h-[80vh] group">
          <div className="absolute inset-0 bg-[#CC0000] transform rotate-2 translate-x-4 translate-y-4 opacity-50 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700" />
          <div className="absolute inset-0 bg-[#0A0A0A] overflow-hidden border border-white/20 transform -rotate-2 group-hover:rotate-0 transition-all duration-700">
            <video autoPlay loop muted playsInline  
               
               
               
              
              onEnded={(e) => e.currentTarget.play()}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
            >
              <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/animations/Riser_Animation.mp4`} type="video/mp4" />
            </video>
            <div className="absolute bottom-8 left-8 flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <PlayCircle className="w-8 h-8 text-black" />
              </div>
              <span className="text-white font-black uppercase tracking-widest text-sm drop-shadow-lg">Play Main Feature</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* 2. THE GAPLESS MASONRY WALL               */}
      {/* ========================================= */}
      <div className="w-full">
        <div className="w-full px-6 md:px-12 py-16 flex justify-between items-end">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            The <span className="text-[#CC0000]">Grid</span>
          </h2>
          <ArrowDownRight className="w-12 h-12 text-zinc-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full auto-rows-[300px]">
          
          {/* Tile 1: Video (Large) */}
          <div className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden bg-black border-[0.5px] border-white/10 cursor-pointer">
            <video autoPlay loop muted playsInline      onEnded={(e) => e.currentTarget.play()} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700">
              <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/catch_basin_riser/catch_basin_riser_overview.mp4`} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <p className="text-[#CC0000] text-xs font-black uppercase tracking-widest mb-1">Installation</p>
                <p className="text-2xl font-black uppercase tracking-wide">Catch Basin Drop-In</p>
              </div>
              <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Tile 2: Static Image */}
          <div className="col-span-1 row-span-1 relative group overflow-hidden bg-[#111] border-[0.5px] border-white/10">
            <Image src={`/images/catch_basin_riser/square_catch_basin_riser_iron.png`} alt="Riser" fill className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute top-4 left-4 text-[10px] font-mono font-bold text-white bg-black/50 px-2 py-1">FRAME: RECTANGLE</div>
          </div>

          {/* Tile 3: Video */}
          <div className="col-span-1 row-span-1 relative group overflow-hidden bg-black border-[0.5px] border-white/10 cursor-pointer">
            <video autoPlay loop muted playsInline      onEnded={(e) => e.currentTarget.play()} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700">
              <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/catch_basin_riser/two_grate_catch_basin_riser_animation.mp4`} type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayCircle className="w-12 h-12 text-[#CC0000]" />
            </div>
            <div className="absolute bottom-4 left-4 text-[10px] font-mono font-bold text-white bg-black/50 px-2 py-1">SOLID RING DYNAMICS</div>
          </div>

          {/* Tile 4: Static Image */}
          <div className="col-span-1 row-span-1 relative group overflow-hidden bg-[#111] border-[0.5px] border-white/10">
            <Image src={`/images/manhole_riser/round_manhole_riser_with_screws_iron_finish.png`} alt="Ductile Iron" fill className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute top-4 left-4 text-[10px] font-mono font-bold text-white bg-black/50 px-2 py-1">MATERIAL: DUCTILE IRON</div>
          </div>

          {/* Tile 5: Video */}
          <div className="col-span-1 md:col-span-1 row-span-1 relative group overflow-hidden bg-black border-[0.5px] border-white/10 cursor-pointer">
            <video autoPlay loop muted playsInline      onEnded={(e) => e.currentTarget.play()} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700">
              <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/animations/paving_riser_with_frame_anim_2.mp4`} type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayCircle className="w-12 h-12 text-[#CC0000]" />
            </div>
          </div>

        </div>
      </div>

      {/* ========================================= */}
      {/* 3. CINEMASCOPE FULL-WIDTH SHOWCASE        */}
      {/* ========================================= */}
      <div className="w-full relative py-32 border-t border-white/10">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src={`/images/catch_basin_riser/rectangle_catch_basin_riser_coated.png`} alt="Background Texture" fill className="object-cover blur-sm" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#020202]/80 to-[#020202]" />

        <div className="relative z-10 w-full px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
              Mechanical <span className="text-[#CC0000]">Breakdown</span>
            </h2>
            <p className="text-zinc-500 font-medium max-w-xl mx-auto">
              Examine the precise expansion mechanism expansion methodology utilizing our 3D rendered cinematic assets.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            
            {/* Split Video 1 */}
            <div className="lg:w-1/2 aspect-video relative bg-black group border border-white/20 hover:border-[#CC0000] transition-colors cursor-pointer">
              <video autoPlay loop muted playsInline      onEnded={(e) => e.currentTarget.play()} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/curb_inlet_riser/curb_inlet_riser_anim_1.mp4`} type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                <p className="text-xl font-black uppercase tracking-widest text-white drop-shadow-md">Expansion Mechanism Expansion</p>
              </div>
            </div>

            {/* Split Video 2 */}
            <div className="lg:w-1/2 aspect-video relative bg-black group border border-white/20 hover:border-[#CC0000] transition-colors cursor-pointer">
              <video autoPlay loop muted playsInline      onEnded={(e) => e.currentTarget.play()} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                <source src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/catch_basin_riser/catch_basin_riser_overview.mp4`} type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                <p className="text-xl font-black uppercase tracking-widest text-white drop-shadow-md">Frame Seating Assembly</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
