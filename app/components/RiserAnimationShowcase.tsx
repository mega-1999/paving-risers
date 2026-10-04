'use client';

import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ShieldCheck, 
  Layers, 
  Settings, 
  Wrench, 
  Maximize2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import R2Video from './R2Video';

// --- STEPS DERIVED DIRECTLY FROM THE VIDEO ASSEMBLY ANIMATION ---
const ASSEMBLY_STEPS = [
  {
    time: "0:01 - 0:08",
    title: "1. Vertical Stack Explosion",
    desc: "3D breakdown showing the top grate/lid separating cleanly from the adjustable inner extension ring and outer base flange frame."
  },
  {
    time: "0:17 - 0:28",
    title: "2. Mechanical Expansion",
    desc: "Detailed close-up on the internal set-screws expanding outward to lock the riser firmly against the existing cast iron frame."
  },
  {
    time: "0:29 - 0:39",
    title: "3. Precision Recess & Seating",
    desc: "Smooth re-assembly showcasing how the top cover drops back flush onto the newly elevated grade line."
  }
];

export default function RiserAnimationShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="bg-[#0F0F0F] text-white py-24 font-sans relative overflow-hidden border-b border-zinc-800">
      
      {/* Background Subtle Red Ambient Light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#CC0000]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-10 md:px-20 space-y-12 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-zinc-800">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#CC0000]" /> 3D Exploded Assembly Animation
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              Adjustable Round Riser <br />
              <span className="text-[#CC0000]">Mechanical Breakdown.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge className="bg-[#CC0000] text-white font-mono uppercase tracking-wider text-xs px-3 py-1.5 rounded-sm">
              HD 3D CAD Render
            </Badge>
          </div>
        </div>

        {/* --- MAIN DISPLAY GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: VIDEO PLAYER CONTAINER (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative aspect-[4/3] bg-[#CC0000] rounded-sm overflow-hidden border-2 border-zinc-800 shadow-2xl group">
              
              {/* VIDEO ELEMENT */}
              <R2Video
                src="https://pub-a9b7eff88c5d4cb7b2837afc51696bde.r2.dev/videos/animations/paving_riser_with_frame_anim_1.mp4"
                videoRef={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                suppressHydrationWarning
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* OVERLAY PLAY/PAUSE INTERACTION BAR */}
              <div 
                onClick={togglePlay}
                className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center cursor-pointer"
              >
                {!isPlaying && (
                  <div className="w-20 h-20 bg-[#0F0F0F] border border-zinc-700 text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:border-[#CC0000] transition-all duration-300">
                    <Play className="w-8 h-8 fill-current text-[#CC0000] ml-1" />
                  </div>
                )}
              </div>

              {/* VIDEO CONTROLS HUD OVERLAY */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0F0F0F]/90 backdrop-blur-md border border-zinc-800 p-3 rounded-sm flex items-center justify-between z-20">
                <div className="flex items-center gap-3">
                  <Button 
                    onClick={togglePlay} 
                    size="sm" 
                    className="bg-[#CC0000] hover:bg-white hover:text-black text-white font-bold h-8 px-3 text-xs uppercase"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 mr-1" /> : <Play className="w-3.5 h-3.5 mr-1" />}
                    {isPlaying ? "Pause" : "Play"}
                  </Button>
                  <Button 
                    onClick={restartVideo} 
                    size="sm" 
                    variant="outline" 
                    className="border-zinc-700 text-zinc-300 hover:text-white h-8 w-8 p-0"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </Button>
                </div>

                <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#CC0000] animate-pulse" /> 3D Exploded Sequence
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: TECHNICAL STEP-BY-STEP BREAKDOWN PANEL (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <h3 className="text-xl font-black uppercase tracking-tight text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#CC0000]" /> Assembly Breakdown
              </h3>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                Watch the sequence to see how the expansion mechanisms lock into the existing street frame structure cleanly without requiring concrete removal.
              </p>
            </div>

            {/* Sequence Cards */}
            <div className="space-y-3">
              {ASSEMBLY_STEPS.map((step, idx) => (
                <div 
                  key={idx}
                  className="bg-black/60 border border-zinc-800/80 p-4 rounded-sm space-y-1 hover:border-[#CC0000] transition-colors duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-black uppercase tracking-wider text-xs text-white group-hover:text-[#CC0000] transition-colors">
                      {step.title}
                    </h4>
                    <span className="text-[10px] font-mono text-zinc-500 font-bold">{step.time}</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Parameters Footer Card */}
            <div className="bg-gradient-to-r from-zinc-950 to-black border border-zinc-800 p-5 rounded-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#CC0000] shrink-0" />
                <div>
                  <h4 className="font-black uppercase text-xs text-white">Full Expansion Locking</h4>
                  <p className="text-[11px] text-zinc-400 font-medium">Positive gripping power prevents traffic chatter.</p>
                </div>
              </div>

              <a href="#contact" className="shrink-0">
                <Button className="bg-[#CC0000] hover:bg-white hover:text-black text-white font-black uppercase text-xs h-10 px-4 rounded-sm transition-colors">
                  Request Specs <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}