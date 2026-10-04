import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';

export default function IndustrySolutionsBanner() {
  return (
    <section className="relative w-full font-sans border-b border-[#333] bg-[#0A0A0A] overflow-hidden flex flex-col justify-end min-h-[60vh] lg:min-h-[70vh]">

      {/* --- VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline 
          suppressHydrationWarning
          className="absolute min-w-full min-h-full object-cover opacity-30 mix-blend-luminosity grayscale"
        >
          <source src="/videos/manufacturing/paving-risers_RATAN_TECHNOML.mp4" type="video/mp4" />
        </video>
        {/* Dark cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]/50"></div>
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 pb-16 lg:pb-24 pt-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          
          {/* Main Title */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6 animate-in fade-in slide-in-from-left duration-700">
              <div className="h-1 w-16 bg-[#CC0000]"></div>
              <span className="text-[#CC0000] font-black uppercase tracking-[0.3em] text-xs">Sector Applications</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.9] text-white animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              Industry <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Solutions</span>
            </h1>
            <p className="mt-8 text-gray-400 font-medium max-w-2xl text-sm md:text-base uppercase tracking-widest leading-loose animate-in fade-in duration-1000 delay-300">
              Expect heavy-duty, field-tested paving risers and infrastructure solutions from the industry experts to help your crew finish every municipal and commercial job on time.
            </p>
          </div>

          {/* Terminal-Style Call to Action */}
          <div className="w-full lg:w-[450px] shrink-0 bg-[#111] border border-[#333] p-8 shadow-2xl relative overflow-hidden group hover:border-[#CC0000] transition-colors duration-500 animate-in fade-in slide-in-from-right duration-700 delay-200">
            {/* Subtle glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#CC0000] to-transparent opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6 border-b border-[#333] pb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                  <Activity className="w-3 h-3 text-[#CC0000] animate-pulse" />
                  Engineering Support
                </span>
                <span className="text-[10px] font-mono text-gray-600">SYS.READY</span>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed mb-8">
                Our experienced team works directly with contractors and municipal planners. Whether you are dealing with sloped manhole seats, non-standard catch basins, or high-traffic highway specs, our fabrication division ensures you get the exact components you need.
              </p>
              
              <a
                href="#contact"
                className="w-full bg-white hover:bg-[#CC0000] text-black hover:text-white flex items-center justify-between p-4 font-black uppercase tracking-widest text-xs transition-all duration-300 group/btn"
              >
                <span>Initialize Contact</span>
                <div className="w-6 h-6 border border-black group-hover/btn:border-white rounded-full flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}