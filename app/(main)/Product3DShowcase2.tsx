'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  Rotate3d,
  ChevronRight,
  Layers,
  Infinity as InfinityIcon,
  Crosshair
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PRODUCT_VIDEOS = [
  {
    id: 1,
    title: "Round Riser",
    description: "Full rotation showing the variable height adjustment ring mechanism.",
    duration: "0:45",
    type: "360_ROTATION",
    src: "/videos/manhole_riser/fixed_manhole_riser_installation.mp4",
    thumbnail: `/images/manhole_riser/round_manhole_riser_iron_finish.png`
  },
  {
    id: 2,
    title: "Square Riser",
    description: "Technical breakdown of the corner interlocking system and frame strength.",
    duration: "1:10",
    type: "EXPLODED_VIEW",
    src: "/videos/catch_basin_riser/catch_basin_riser_animation.mp4",
    thumbnail: `/images/catch_basin_riser/square_catch_basin_riser_iron.png`
  },
  {
    id: 3,
    title: "Valve Box Riser",
    description: "Step-by-step 3D animation of a standard valve box riser installation.",
    duration: "2:00",
    type: "ANIMATION",
    src: "/videos/valve_box_riser/full_valve_box_riser_design_3.mp4",
    thumbnail: `/images/valve_box_riser/valve_box_riser_1_5in.jpeg`
  },
  {
    id: 4,
    title: "Curb Inlet",
    description: "Detailed visualization of the curb inlet structure.",
    duration: "1:20",
    type: "ANIMATION",
    src: "/videos/curb_inlet_riser/curb_inlet_riser_anim_3.mp4",
    thumbnail: `/images/curb_inlet_riser/curb_inlet_riser_coated_2.png`
  },
  {
    id: 5,
    title: "Custom Size Riser",
    description: "Demonstration of custom fabricated configurations.",
    duration: "0:55",
    type: "CUSTOM_BUILD",
    src: "/videos/animations/1.924.mp4",
    thumbnail: `/images/catch_basin_riser/square_catch_basin_riser_iron.png`
  }
];

export default function Product3DShowcase2() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = PRODUCT_VIDEOS[activeVideoIndex];

  const handleVideoEnd = () => {
    setActiveVideoIndex((prevIndex) => (prevIndex + 1) % PRODUCT_VIDEOS.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Autoplay policy prevented immediate playback
        });
      }
    }
  }, [activeVideoIndex, isPlaying]);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 border-t border-zinc-900 overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#CC0000]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#CC0000]/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full px-10 md:px-20 relative z-10">

        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
              <Rotate3d className="w-4 h-4 text-[#CC0000]" /> Engineering Visualization
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              World of <span className="text-[#CC0000]">Risers.</span>
            </h2>
          </div>

          <Button
            onClick={togglePlayPause}
            className={cn(
              "gap-2 font-black uppercase tracking-widest px-8 h-12 transition-all duration-300 rounded-sm shadow-md",
              isPlaying
                ? "bg-[#CC0000] text-white hover:bg-white hover:text-black shadow-[0_0_20px_-5px_rgba(204,0,0,0.5)]"
                : "bg-white text-black hover:bg-gray-200"
            )}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? "Loop Active" : "Resume Loop"}
          </Button>
        </div>

        {/* --- MAIN PLAYER AREA --- */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT: Main Player Aspect Screen Window */}
          <div className="xl:col-span-8 flex flex-col h-[400px] md:h-[500px] xl:h-[650px]">
            <div className="relative w-full h-full bg-black rounded-sm border border-zinc-800 shadow-[0_0_50px_-15px_rgba(0,0,0,1)] overflow-hidden group">
              
              {/* Dynamic Overlay Badge */}
              <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-zinc-800/50 rounded-sm px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-zinc-300 z-20 flex items-center gap-3 pointer-events-none shadow-xl">
                <div className="w-2 h-2 rounded-full bg-[#CC0000] animate-pulse" />
                Autoplay Sequence Active
              </div>

              {/* CORE LOOPED PLAYBACK WINDOW */}
              <AnimatePresence mode="wait">
                <motion.video
                  key={activeVideo.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover bg-black"
                  controls={false}
                  autoPlay={isPlaying}
                  muted
                  onEnded={handleVideoEnd}
                >
                  <source src={activeVideo.src} type="video/mp4" />
                </motion.video>
              </AnimatePresence>

              {/* Bottom Telemetry Metadata Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-3">
                  <Badge className="bg-[#CC0000] text-white hover:bg-[#CC0000] border-none rounded-sm uppercase text-[10px] font-black tracking-widest px-3 py-1">
                    {activeVideo.type.replace('_', ' ')}
                  </Badge>
                  <span className="text-xs text-zinc-400 font-mono font-bold tracking-widest flex items-center gap-2">
                    <Crosshair className="w-3 h-3 text-[#CC0000]" /> {activeVideo.duration}
                  </span>
                </div>
                <h3 className="text-3xl font-black uppercase text-white tracking-tight mb-2 drop-shadow-md">{activeVideo.title}</h3>
                <p className="text-zinc-300 text-sm font-medium max-w-2xl leading-relaxed drop-shadow-md">{activeVideo.description}</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Model Selector Sidebar Playlist */}
          <div className="xl:col-span-4 flex flex-col h-[450px] md:h-[500px] xl:h-[650px] bg-zinc-900/40 backdrop-blur-md rounded-sm border border-zinc-800/50 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
              <h4 className="text-zinc-400 font-black uppercase text-xs tracking-widest flex items-center gap-3">
                <Layers className="w-4 h-4 text-[#CC0000]" />
                Video Sequence
              </h4>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                {PRODUCT_VIDEOS.length} Assets
              </span>
            </div>

            <div className="space-y-4 flex-grow overflow-y-auto pr-2 custom-scrollbar min-h-[300px]">
              {PRODUCT_VIDEOS.map((video, idx) => {
                const isCurrent = activeVideoIndex === idx;
                return (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    key={video.id}
                    onClick={() => {
                      setActiveVideoIndex(idx);
                      setIsPlaying(true);
                    }}
                    className={cn(
                      "flex gap-5 p-4 rounded-sm cursor-pointer transition-all border group select-none relative overflow-hidden",
                      isCurrent
                        ? "bg-[#CC0000]/10 border-[#CC0000]/50 shadow-lg"
                        : "bg-black/50 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/50"
                    )}
                  >
                    {isCurrent && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#CC0000]" />
                    )}
                    
                    {/* Thumbnail Block */}
                    <div className="relative w-28 h-20 bg-black rounded-sm overflow-hidden shrink-0 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className={cn(
                          "object-cover transition-all duration-500",
                          isCurrent ? "opacity-100 scale-110" : "opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                        )}
                        sizes="112px"
                      />

                      {isCurrent && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <Play className="w-6 h-6 text-white drop-shadow-lg" />
                        </div>
                      )}
                    </div>

                    {/* Text Description fields */}
                    <div className="flex flex-col justify-center min-w-0 pr-2">
                      <h5 className={cn(
                        "font-black text-sm uppercase tracking-wider truncate mb-1.5 transition-colors",
                        isCurrent ? "text-white" : "text-zinc-400 group-hover:text-white"
                      )}>
                        {video.title}
                      </h5>
                      <p className="text-[11px] text-zinc-500 line-clamp-2 leading-relaxed font-medium group-hover:text-zinc-400 transition-colors">
                        {video.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Call to Action Frame */}
            <div className="mt-8 pt-6 border-t border-zinc-800 text-center shrink-0">
              <p className="text-xs text-zinc-500 mb-4 font-medium tracking-wide">Require 3D CAD blueprints for your project designs?</p>
              <Link href="/contact/quote" className="block">
                <Button className="w-full h-14 bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs rounded-sm transition-all duration-300 shadow-[0_0_30px_-10px_rgba(204,0,0,0.4)] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">
                  Request CAD / BIM Files <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}