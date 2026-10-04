'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Wrench,
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Sliders, 
  Maximize2,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface SituationItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  mediaType: 'video' | 'image';
  src: string;
  loadRating: string;
  material: string;
  fitType: string;
  tolerance: string;
  highlights: string[];
  linkUrl: string;
}

const SITUATIONS: SituationItem[] = [
  {
    id: 'drainage',
    tag: 'MUNICIPAL INFRASTRUCTURE',
    title: 'Municipal & Storm Catch Basins',
    subtitle: 'Zero Trenching Drainage Elevation',
    description: 'Engineered for street corner catch basins, storm grates, and curb inlets. Eliminates pavement destruction and masonry reconstruction during resurfacing.',
    mediaType: 'video',
    src: '/videos/catch_basin_riser/catch_basin_riser_animation.mp4',
    loadRating: 'Heavy-Duty Proof Tested',
    material: 'ASTM A48 Class 35B / High-Strength Steel',
    fitType: 'Direct Drop-In Seating',
    tolerance: '±0.03" Precision',
    highlights: ['Preserves curb integrity', 'Direct drop-in fit', 'Water-tight seating'],
    linkUrl: '/products/catch-basin-risers',
  },
  {
    id: 'highway',
    tag: 'HIGHWAY & ARTERIAL ROADS',
    title: 'Highway Resurfacing & Overlays',
    subtitle: 'Continuous Traffic Ready Paving',
    description: 'Heavy-duty ductile iron and cast rings designed to handle multi-ton interstate truck traffic, snow plows, and extreme thermal freeze-thaw cycles without loosening.',
    mediaType: 'video',
    src: '/videos/manhole_riser/fixed_manhole_riser_installation.mp4',
    loadRating: '100,000+ LBS Load Tested',
    material: 'ASTM A536 Heavy Cast Iron',
    fitType: 'Flush Asphalt Fit',
    tolerance: '0.75" to 4.0" Increments',
    highlights: ['Zero tire bump profile', 'Anti-rattle geometry', 'DOT approved statewide'],
    linkUrl: '/products/fixed-riser',
  },
  {
    id: 'vaults',
    tag: 'UTILITIES & GAS VAULTS',
    title: 'Custom Utility & D-Shape Vaults',
    subtitle: 'Precision Geometry For Non-Standard Frames',
    description: 'Custom CNC laser-fabricated risers configured for asymmetric, rectangular, and D-shape utility vaults. Fits legacy municipal castings without structural alterations.',
    mediaType: 'video',
    src: '/videos/custom_riser/d_shape_custom_riser_animation.mp4',
    loadRating: 'Commercial Highway Rated',
    material: 'Precision Laser-Cut A36 Steel',
    fitType: 'Custom CAD Engineered',
    tolerance: '100% Custom Tailored',
    highlights: ['Custom CAD verification', 'Quick-turn fabrication', 'Corrosion-resistant coat'],
    linkUrl: '/products/d-shape-risers',
  },
  {
    id: 'rapid',
    tag: 'FAST-TRACK OVERLAYS',
    title: 'Night-Paving & Rapid Overlays',
    subtitle: 'Immediate Traffic Flow Restoration',
    description: 'Expandable mechanical locking risers that seat tightly within existing manhole frames smoothly. Allows paving contractors to complete projects without road closures.',
    mediaType: 'video',
    src: '/videos/animations/1.924.mp4',
    loadRating: 'Continuous Traffic Compliant',
    material: 'Mechanical Expandable Alloy',
    fitType: 'Expandable Lock Ring',
    tolerance: 'Continuous Turnbuckle Adjust',
    highlights: ['100% zero-excavation', 'Locks tight against frame', 'Re-usable for next phase'],
    linkUrl: '/products/adjustable-riser',
  },
];

export default function RisersForEverySituation() {
  const [activeId, setActiveId] = useState<string>('drainage');
  const activeItem = SITUATIONS.find((s) => s.id === activeId) || SITUATIONS[0];

  return (
    <section className="relative w-full py-20 bg-[#060606] text-white overflow-hidden font-sans border-t border-white/10">
      
      {/* High-tech background grid & ambient lighting */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#CC0000]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full px-10 md:px-20 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-white/10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CC0000]/10 border border-[#CC0000]/30 text-[#FF4D4D] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered Adaptability</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none">
              Risers For Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1A1A] via-[#CC0000] to-orange-500">Situation.</span>
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              From continuous interstate asphalt resurfacing to non-standard municipal storm drains, our precision-machined risers eliminate excavation and preserve road structures.
            </p>
          </motion.div>

          {/* Quick Metrics Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 bg-zinc-900/80 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md shrink-0 shadow-xl"
          >
            <div className="text-left">
              <div className="text-xs font-mono text-zinc-400 uppercase">Installation Method</div>
              <div className="text-xl font-black text-white flex items-center gap-1.5">
                <Wrench className="w-5 h-5 text-[#CC0000]" />
                <span>DIRECT FIT</span>
              </div>
            </div>
            <div className="w-[1px] h-9 bg-white/10" />
            <div className="text-left">
              <div className="text-xs font-mono text-zinc-400 uppercase">Excavation Required</div>
              <div className="text-xl font-black text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>0% DIGGING</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* INTERACTIVE SITUATION SELECTOR TABS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
          {SITUATIONS.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`relative text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between group ${
                  isActive
                    ? 'bg-gradient-to-b from-[#1E1E1E] to-[#121212] border-[#CC0000] shadow-[0_0_25px_rgba(204,0,0,0.25)]'
                    : 'bg-[#111111]/70 border-white/5 hover:border-white/20 hover:bg-[#181818]'
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeSituationIndicator"
                    className="absolute top-0 left-4 right-4 h-[3px] bg-gradient-to-r from-red-500 via-[#CC0000] to-orange-500 rounded-full"
                  />
                )}
                
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest block mb-1.5 font-semibold ${
                    isActive ? 'text-[#FF4D4D]' : 'text-zinc-500 group-hover:text-zinc-400'
                  }`}>
                    {item.tag}
                  </span>
                  <h4 className={`text-sm sm:text-base font-bold leading-snug line-clamp-2 ${
                    isActive ? 'text-white' : 'text-zinc-300'
                  }`}>
                    {item.title}
                  </h4>
                </div>

                <div className="mt-4 flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="text-[11px] font-mono text-zinc-400 font-medium">
                    {item.loadRating}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                    isActive ? 'text-[#CC0000] translate-x-1' : 'text-zinc-600 group-hover:text-zinc-400'
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* MAIN FEATURE SPOTLIGHT SHOWCASE */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-900/90 to-[#0C0C0C] border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]"
            >
              {/* LEFT: Video / Interactive Media Stage (7 cols) */}
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full bg-black flex items-center justify-center overflow-hidden group">
                {/* Live Video Feed */}
                <video
                  key={activeItem.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  suppressHydrationWarning
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  src={activeItem.src}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0C0C0C] hidden lg:block pointer-events-none" />

                {/* HUD Overlay telemetry on Video */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[11px] font-mono text-white/90">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="font-bold tracking-wider">LIVE SPEC FEED</span>
                  <span className="text-white/40">|</span>
                  <span className="text-zinc-400">{activeItem.id.toUpperCase()}</span>
                </div>

                <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                  <span className="bg-black/70 backdrop-blur-md text-[11px] font-mono text-amber-400 px-3 py-1 rounded-lg border border-amber-400/20 font-semibold">
                    ⚙️ {activeItem.fitType}
                  </span>
                  <span className="bg-black/70 backdrop-blur-md text-[11px] font-mono text-zinc-300 px-3 py-1 rounded-lg border border-white/10">
                    🛡️ {activeItem.loadRating}
                  </span>
                </div>
              </div>

              {/* RIGHT: Technical Engineering Panel (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative z-10 bg-gradient-to-b from-transparent to-[#080808]/90">
                <div>
                  {/* Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-4 bg-[#CC0000] rounded-sm" />
                    <span className="text-xs font-mono font-bold tracking-widest text-[#FF4D4D] uppercase">
                      {activeItem.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
                    {activeItem.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-zinc-300 mb-4">
                    {activeItem.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {activeItem.description}
                  </p>

                  {/* Technical Spec Matrix */}
                  <div className="grid grid-cols-2 gap-3 mb-6 bg-white/[0.03] p-4 rounded-xl border border-white/5 font-mono text-xs">
                    <div>
                      <span className="text-zinc-500 text-[10px] uppercase block">Material Standard</span>
                      <span className="text-white font-medium text-[11px] sm:text-xs line-clamp-1">{activeItem.material}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 text-[10px] uppercase block">Machining Precision</span>
                      <span className="text-white font-medium text-[11px] sm:text-xs">{activeItem.tolerance}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-8">
                    {activeItem.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
                  <Link
                    href={activeItem.linkUrl}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#CC0000] hover:bg-[#B30000] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
                  >
                    <span>View Product Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact/quote"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs tracking-wider uppercase transition-colors border border-white/10"
                  >
                    <span>Instant Quote</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
