'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function RoadwayHero() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-[#050505] overflow-hidden flex items-center justify-center font-sans pt-20">
      
      {/* --- SVG ROADWAY BACKGROUND --- */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none opacity-80">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full absolute bottom-0"
        >
          {/* Dark Asphalt Road Surface */}
          <polygon points="45,40 55,40 100,100 0,100" fill="#0A0A0A" />
          
          {/* Logo-Style White Path Lines */}
          {/* Solid outer border of the path */}
          <polygon points="49.5,40 50.5,40 65,100 35,100" fill="#ffffff" />
          
          {/* Inner cutout to make it two solid lines (like a roadway) */}
          <polygon points="49.8,40 50.2,40 60,100 40,100" fill="#0A0A0A" />

          {/* Animated Dashed Center Line */}
          <line 
            x1="50" y1="40" x2="50" y2="100" 
            stroke="#ffffff" 
            strokeWidth="0.3" 
            strokeDasharray="2 4" 
            className="animate-road-dash opacity-50"
          />
        </svg>

        {/* CSS for animating the dash offset to simulate forward movement */}
        <style jsx>{`
          @keyframes dash-move {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: -12; }
          }
          .animate-road-dash {
            animation: dash-move 1.5s linear infinite;
          }
        `}</style>
      </div>

      {/* Red ambient glow at the vanishing point */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-[#CC0000]/30 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* --- MASSIVE TYPOGRAPHY OVERLAY --- */}
      <div className="relative z-10 w-full px-4 md:px-8 max-w-7xl mx-auto text-center mt-[-10vh]">
        <motion.h1 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none text-white drop-shadow-2xl"
        >
          <span className="block mb-2 md:mb-4">Risers for every</span>
          <span className="text-[#CC0000] inline-block mb-2 md:mb-4">Product</span> <br/>
          <span className="block text-zinc-300">on Mother Earth.</span>
        </motion.h1>
      </div>

      {/* Bottom fade to blend into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />

    </section>
  );
}
