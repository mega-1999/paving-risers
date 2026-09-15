'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowUpRight,
  ShieldCheck,
  Truck,
  Settings,
  Timer,
  MoveDiagonal,
  Grid,
  HardHat,
  Layers,
  Wrench,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Eye,
  Film,
  PlayCircle
} from 'lucide-react';

const DETECTABLE_VARIANTS = [
  {
    id: 'pattern-1',
    title: 'Standard Truncated Dome Matrix',
    spec: 'ADA Compliant Surface',
    description: 'Engineered raised truncated dome pattern for pedestrian wayfinding and municipal intersection compliance.',
    image: `/images/detectable_plates/detectable_plate_pattern_1.png`,
    badge: 'Pattern A'
  },
  {
    id: 'pattern-2',
    title: 'Precision Inline Tactile Profile',
    spec: 'Directional Guidance',
    description: 'Uniform geometric tactile pattern engineered for municipal curb ramps, transitions, and public walkways.',
    image: `/images/detectable_plates/detectable_plate_pattern_2.png`,
    badge: 'Pattern B'
  },
  {
    id: 'pattern-3',
    title: 'Cast Iron Tactile Plate',
    spec: 'Heavy Transit Zone',
    description: 'High-strength cast iron tactile warning surface designed for high-density pedestrian traffic and long service life.',
    image: `/images/detectable_plates/detectable_plate_pattern_3.png`,
    badge: 'Cast Iron'
  },
  {
    id: 'pattern-4',
    title: 'Heavy-Duty Dome Matrix Plate',
    spec: 'High-Impact Durability',
    description: 'Ductile iron truncated dome matrix engineered to withstand heavy localized loading and snowplow impacts.',
    image: `/images/detectable_plates/detectable_plate_pattern_4.png`,
    badge: 'Ductile Iron'
  },
  {
    id: 'warning-plate-1',
    title: 'Cast-In-Place Embedded Plate',
    spec: 'Wet Concrete Embedment',
    description: 'Integral anchor lugs secure the plate permanently into fresh concrete during municipal sidewalk pours.',
    image: `/images/detectable_plates/detectable_warning_plate_1.jpeg`,
    badge: 'Cast-In-Place'
  },
  {
    id: 'warning-plate-2',
    title: 'Surface-Applied Retrofit Plate',
    spec: 'Existing Concrete Overlay',
    description: 'Engineered for direct mechanical anchoring into existing municipal concrete ramps and street intersections.',
    image: `/images/detectable_plates/detectable_warning_plate_2.jpeg`,
    badge: 'Retrofit'
  },
  {
    id: 'field-install',
    title: 'Municipal Field Installation',
    spec: 'Jobsite Embedment',
    description: 'Cured municipal corner ramp installation showcasing seamless transition, heavy-gauge fit, and long-term durability.',
    image: `/images/detectable_plates/detectable_plate_field_installation.jpg`,
    badge: 'Field Install'
  }
];

function DetectablePlatesSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const current = DETECTABLE_VARIANTS[activeIdx];

  // Auto-sliding loop (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % DETECTABLE_VARIANTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + DETECTABLE_VARIANTS.length) % DETECTABLE_VARIANTS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % DETECTABLE_VARIANTS.length);
  };

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-black/10 shadow-2xl bg-white flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Header Bar */}
      <div className="bg-zinc-950 px-5 py-3.5 border-b border-white/10 flex items-center justify-between z-20 text-white">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          <span className="text-xs font-mono font-black uppercase tracking-wider text-white">
            {current.title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {DETECTABLE_VARIANTS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIdx ? 'w-4 bg-white' : 'w-1 bg-zinc-600'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] font-mono bg-zinc-800 text-zinc-300 font-bold px-2 py-0.5 rounded border border-white/10">
            {activeIdx + 1} / {DETECTABLE_VARIANTS.length}
          </span>
        </div>
      </div>

      {/* Main Visual Display Stage */}
      <div className="relative w-full aspect-[4/3] sm:aspect-square bg-gradient-to-b from-white via-zinc-100 to-zinc-200/90 flex items-center justify-center overflow-hidden group">
        <Image
          key={current.id}
          src={current.image}
          alt={current.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-6 sm:p-8 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Floating Spec Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded shadow-md border border-white/10">
            {current.badge}
          </span>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/85 hover:bg-black text-white p-2.5 rounded-full backdrop-blur-md transition-all z-20 shadow-lg cursor-pointer border border-white/20"
          aria-label="Previous plate"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/85 hover:bg-black text-white p-2.5 rounded-full backdrop-blur-md transition-all z-20 shadow-lg cursor-pointer border border-white/20"
          aria-label="Next plate"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Industrial Thumbnail Selector */}
      <div className="bg-zinc-950 p-4 border-t border-white/10 space-y-2.5 z-20 text-white">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-sm bg-white" />
            Detectable Warning Plates Gallery
          </span>
          <span className="text-[10px] font-mono text-zinc-300 font-bold">
            {current.spec}
          </span>
        </div>

        {/* Unified Monochrome Thumbnail Cards */}
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
          {DETECTABLE_VARIANTS.map((variant, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={variant.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative p-1.5 rounded-lg border transition-all duration-200 cursor-pointer text-left flex flex-col justify-between ${
                  isActive
                    ? 'bg-zinc-900 border-white shadow-[0_0_12px_rgba(255,255,255,0.25)] ring-1 ring-white'
                    : 'bg-zinc-900/60 border-white/10 hover:border-white/30 hover:bg-zinc-800'
                }`}
              >
                <div className="relative w-full aspect-video rounded overflow-hidden mb-1 bg-zinc-800 border border-white/10">
                  <Image
                    src={variant.image}
                    alt={variant.title}
                    fill
                    sizes="80px"
                    className="object-contain p-0.5"
                  />
                </div>
                <span className={`text-[9px] font-mono line-clamp-1 block text-center font-bold uppercase tracking-tight ${
                  isActive ? 'text-white' : 'text-zinc-400'
                }`}>
                  {variant.badge}
                </span>
                {isActive && (
                  <div className="w-full h-[2px] bg-white mt-1 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const TRASH_RACK_VARIANTS = [
  {
    id: 'trash-rack-1',
    title: 'Galvanized Bar Matrix Debris Screen',
    spec: 'ASTM Welded Steel Matrix',
    description: 'Heavy-gauge welded steel bar matrix engineered to intercept branches, debris, and solid obstructions at culvert and outflow mouths.',
    image: `/images/trash_racks/trash_rack_type_1.png`,
    badge: 'Type 1 Matrix'
  },
  {
    id: 'trash-rack-2',
    title: 'Culvert Headwall Intake Barrier',
    spec: 'Stormwater Headwall Protection',
    description: 'Heavy structural steel barrier installed on stormwater culvert headwalls to prevent pipe clogging and reduce upstream flooding.',
    image: `/images/trash_racks/trash_racks1.jpg`,
    badge: 'Headwall Barrier'
  },
  {
    id: 'trash-rack-3',
    title: 'Sloped Spillway Debris Rack',
    spec: 'Self-Cleaning Slope Angle',
    description: 'Precision angled debris matrix designed for high-velocity water channels and retention pond spillways to prevent debris buildup.',
    image: `/images/trash_racks/trash_racks2.jpg`,
    badge: 'Sloped Spillway'
  },
  {
    id: 'trash-rack-4',
    title: 'Retention Basin Outflow Barrier',
    spec: 'Detention Pond Flood Control',
    description: 'Industrial-grade welded steel debris barrier engineered for municipal retention ponds and flood control reservoir outflow channels.',
    image: `/images/trash_racks/trash_racks3.jpg`,
    badge: 'Basin Outflow'
  }
];

function TrashRacksSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const current = TRASH_RACK_VARIANTS[activeIdx];

  // Auto-sliding loop (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TRASH_RACK_VARIANTS.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TRASH_RACK_VARIANTS.length) % TRASH_RACK_VARIANTS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TRASH_RACK_VARIANTS.length);
  };

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-black/10 shadow-2xl bg-white flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Header Bar */}
      <div className="bg-zinc-950 px-5 py-3.5 border-b border-white/10 flex items-center justify-between z-20 text-white">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          <span className="text-xs font-mono font-black uppercase tracking-wider text-white">
            {current.title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Active indicator bars */}
          <div className="flex items-center gap-1">
            {TRASH_RACK_VARIANTS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIdx ? 'w-5 bg-white' : 'w-1.5 bg-zinc-600'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] font-mono bg-zinc-800 text-zinc-300 font-bold px-2.5 py-0.5 rounded border border-white/10">
            {activeIdx + 1} / {TRASH_RACK_VARIANTS.length}
          </span>
        </div>
      </div>

      {/* Main Visual Display Stage */}
      <div className="relative w-full aspect-[4/3] sm:aspect-square bg-gradient-to-b from-white via-zinc-100 to-zinc-200/90 flex items-center justify-center overflow-hidden group">
        <Image
          key={current.id}
          src={current.image}
          alt={current.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-6 sm:p-8 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Floating Spec Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded shadow-md border border-white/10">
            {current.badge}
          </span>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/85 hover:bg-black text-white p-2.5 rounded-full backdrop-blur-md transition-all z-20 shadow-lg cursor-pointer border border-white/20"
          aria-label="Previous trash rack"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/85 hover:bg-black text-white p-2.5 rounded-full backdrop-blur-md transition-all z-20 shadow-lg cursor-pointer border border-white/20"
          aria-label="Next trash rack"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Industrial Thumbnail Selector */}
      <div className="bg-zinc-950 p-4 border-t border-white/10 space-y-2.5 z-20 text-white">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-sm bg-white" />
            Trash Racks & Debris Barriers
          </span>
          <span className="text-[10px] font-mono text-zinc-300 font-bold">
            {current.spec}
          </span>
        </div>

        {/* Unified Monochrome Thumbnail Cards */}
        <div className="grid grid-cols-4 gap-2">
          {TRASH_RACK_VARIANTS.map((variant, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={variant.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative p-1.5 rounded-lg border transition-all duration-200 cursor-pointer text-left flex flex-col justify-between ${
                  isActive
                    ? 'bg-zinc-900 border-white shadow-[0_0_12px_rgba(255,255,255,0.25)] ring-1 ring-white'
                    : 'bg-zinc-900/60 border-white/10 hover:border-white/30 hover:bg-zinc-800'
                }`}
              >
                <div className="relative w-full aspect-video rounded overflow-hidden mb-1 bg-zinc-800 border border-white/10">
                  <Image
                    src={variant.image}
                    alt={variant.title}
                    fill
                    sizes="120px"
                    className="object-contain p-0.5"
                  />
                </div>
                <span className={`text-[9px] font-mono line-clamp-1 block text-center font-bold uppercase tracking-tight ${
                  isActive ? 'text-white' : 'text-zinc-400'
                }`}>
                  {variant.badge}
                </span>
                {isActive && (
                  <div className="w-full h-[2px] bg-white mt-1 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const TOOLS_VARIANTS = [
  {
    id: 'tool-lifter',
    title: 'Heavy-Duty Valve Box Lifter',
    spec: 'Ergonomic Drop-Forged Steel',
    description: 'Designed for safe, one-person lifting of jammed municipal valve box covers and heavy curb box lids.',
    image: `/images/tools/valve_box_lifter.png`,
    badge: 'Valve Lifter'
  },
  {
    id: 'tool-cover-bar',
    title: 'Drop-Forged Valve Cover Bar',
    spec: 'Heavy Leverage Removal Tool',
    description: 'Extended leverage bar engineered to break surface seal on paved-over and frozen utility access lids.',
    image: `/images/tools/valve_box_cover_bar.png`,
    badge: 'Cover Bar'
  },
  {
    id: 'tool-manhole-hook',
    title: 'Industrial Manhole Cover Hook',
    spec: 'Hardened Alloy Steel',
    description: 'Hardened forged point hook for fast, ergonomic lifting of standard 24" to 36" municipal manhole covers.',
    image: `/images/tools/manhole_cover_hook.png`,
    badge: 'Manhole Hook'
  },
  {
    id: 'tool-plug-puller',
    title: 'Heavy Sewer Plug Puller',
    spec: 'Pipe Plug Removal Rig',
    description: 'Specially engineered mechanical gripping tool for rapid extraction of deep sanitary sewer test plugs.',
    image: `/images/tools/sewer_plug_puller.png`,
    badge: 'Plug Puller'
  }
];

function ToolsCatalogSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const current = TOOLS_VARIANTS[activeIdx];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TOOLS_VARIANTS.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TOOLS_VARIANTS.length) % TOOLS_VARIANTS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TOOLS_VARIANTS.length);
  };

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-black/10 shadow-2xl bg-white flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Header Bar */}
      <div className="bg-zinc-950 px-5 py-3.5 border-b border-white/10 flex items-center justify-between z-20 text-white">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          <span className="text-xs font-mono font-black uppercase tracking-wider text-white">
            {current.title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {TOOLS_VARIANTS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIdx ? 'w-5 bg-white' : 'w-1.5 bg-zinc-600'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] font-mono bg-zinc-800 text-zinc-300 font-bold px-2.5 py-0.5 rounded border border-white/10">
            {activeIdx + 1} / {TOOLS_VARIANTS.length}
          </span>
        </div>
      </div>

      {/* Main Visual Display Stage */}
      <div className="relative w-full aspect-[4/3] sm:aspect-square bg-gradient-to-b from-white via-zinc-100 to-zinc-200/90 flex items-center justify-center overflow-hidden group">
        <Image
          key={current.id}
          src={current.image}
          alt={current.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-6 sm:p-8 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-4 left-4 z-20">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-black text-white px-3 py-1 rounded shadow-md border border-white/10">
            {current.badge}
          </span>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/85 hover:bg-black text-white p-2.5 rounded-full backdrop-blur-md transition-all z-20 shadow-lg cursor-pointer border border-white/20"
          aria-label="Previous tool"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/85 hover:bg-black text-white p-2.5 rounded-full backdrop-blur-md transition-all z-20 shadow-lg cursor-pointer border border-white/20"
          aria-label="Next tool"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Industrial Thumbnail Selector */}
      <div className="bg-zinc-950 p-4 border-t border-white/10 space-y-2.5 z-20 text-white">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-sm bg-white" />
            Field Installation Tools & Equipment
          </span>
          <span className="text-[10px] font-mono text-zinc-300 font-bold">
            {current.spec}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {TOOLS_VARIANTS.map((variant, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={variant.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative p-1.5 rounded-lg border transition-all duration-200 cursor-pointer text-left flex flex-col justify-between ${
                  isActive
                    ? 'bg-zinc-900 border-white shadow-[0_0_12px_rgba(255,255,255,0.25)] ring-1 ring-white'
                    : 'bg-zinc-900/60 border-white/10 hover:border-white/30 hover:bg-zinc-800'
                }`}
              >
                <div className="relative w-full aspect-video rounded overflow-hidden mb-1 bg-zinc-800 border border-white/10">
                  <Image
                    src={variant.image}
                    alt={variant.title}
                    fill
                    sizes="120px"
                    className="object-contain p-0.5"
                  />
                </div>
                <span className={`text-[9px] font-mono line-clamp-1 block text-center font-bold uppercase tracking-tight ${
                  isActive ? 'text-white' : 'text-zinc-400'
                }`}>
                  {variant.badge}
                </span>
                {isActive && (
                  <div className="w-full h-[2px] bg-white mt-1 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface RiserSectionItem {
  id: string;
  theme: 'dark' | 'light';
  overline: string;
  title: string;
  highlightText: string;
  description: string;
  video?: string;
  image?: string;
  isCustomSlider?: boolean;
  sliderType?: 'detectable' | 'trash-racks' | 'tools';
  isComingSoon?: boolean;
  features: { icon: string; title: string; desc: string }[];
  meta: { label: string; value: string }[];
  buttonText: string;
  buttonLink: string;
}

const RISER_SECTIONS: RiserSectionItem[] = [
  {
    id: "adjustable-round",
    theme: "dark",
    overline: "Mechanical Expansion Riser",
    title: "Mechanical",
    highlightText: "Expansion",
    description: "Designed to minimize full manhole frame excavations during road overlays. The riser fits over the existing frame and expands outward against it using a built-in mechanical mechanism. Expanding the riser holds the ring securely in position while you pave.",
    video: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/manhole_riser/adjustable_manhole_riser_with_frame.mp4`,
    features: [
      { icon: "ShieldCheck", title: "Installs Without Excavating Frame", desc: "Saves significant field labor and road downtime." },
      { icon: "Layers", title: "Custom Heights Available", desc: "Precision fits for any overlay requirement from 3/4\" up." }
    ],
    meta: [
      { label: "Operation", value: "Mechanical Expansion Linkage" },
      { label: "Material Standard", value: "ASTM A48 Class 35B Gray Iron" }
    ],
    buttonText: "Request a Quote",
    buttonLink: "/contact/quote"
  },
  {
    id: "fixed-round",
    theme: "light",
    overline: "Solid Cast Riser Ring",
    title: "Solid Cast",
    highlightText: "Construction",
    description: "Engineered from a single piece of heavy-duty cast or ductile iron for maximum structural integrity. Unlike adjustable risers, this fixed solid ring has no moving parts, ensuring it will never collapse or shift under extreme localized shock loads.",
    video: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/manhole_riser/fixed_manhole_riser_installation.mp4`,
    features: [
      { icon: "ShieldCheck", title: "Maximum Structural Strength", desc: "Solid monolithic ring with zero moving parts." },
      { icon: "Layers", title: "Custom Fits Available", desc: "Manufactured precisely to your project's specifications." }
    ],
    meta: [
      { label: "Construction", value: "Single-Piece Solid Casting" },
      { label: "Load Rating", value: "AASHTO M306 / H-20 & HS-25" }
    ],
    buttonText: "Request a Quote",
    buttonLink: "/contact/quote"
  },
  {
    id: "standard-municipal",
    theme: "dark",
    overline: "Municipal Overlay Solutions",
    title: "Cast Iron",
    highlightText: "Paving Risers",
    description: "Maintain seamless urban traffic flow. Our heavy-duty solid risers allow for precise manhole elevation adjustment during road overlays, eliminating the need to dig up and rebuild the entire structure.",
    video: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/animations/paving_riser_with_frame_anim_2.mp4`,
    features: [
      { icon: "ShieldCheck", title: "Heavy Load Bearing", desc: "Rated for continuous heavy commercial roadway traffic." },
      { icon: "Truck", title: "Municipal Bulk Ready", desc: "Rapid supply for large metropolitan paving contracts." }
    ],
    meta: [
      { label: "Material", value: "Ductile / Black Bituminous Coated" },
      { label: "Standard Sizes", value: "24\", 27\", 30\", 36\" & Custom" }
    ],
    buttonText: "View Municipal Specs",
    buttonLink: "/contact/specifications"
  },
  {
    id: "expandable-risers",
    theme: "light",
    overline: "Next-Gen Pavement Adjustment",
    title: "Paving-Adjust™",
    highlightText: "Expandable Risers",
    description: "Ditch the mortar bed. Our expandable mechanical risers feature a built-in expansion linkage that locks directly into the existing manhole frame. Twist to expand, lock it in, and pave right over it.",
    video: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/manhole_riser/adjustable_manhole_riser_steel.mp4`,
    features: [
      { icon: "Settings", title: "Mechanical Expansion Lock", desc: "Expands outward to grip the existing frame securely." },
      { icon: "Timer", title: "Zero Concrete Cure Time", desc: "Paving crews can lay hot asphalt immediately after locking." }
    ],
    meta: [
      { label: "Mechanism", value: "Internal High-Torque Turnbuckle" },
      { label: "Excavation Saved", value: "100% Zero Road Digging" }
    ],
    buttonText: "View Expandable Specs",
    buttonLink: "/products/adjustable-riser"
  },
  {
    id: "drainage-catch-basins",
    theme: "dark",
    overline: "Storm Drainage Infrastructure",
    title: "Catch Basin &",
    highlightText: "Drainage Risers",
    description: "Roadwork requires more than just round manhole adjustments. We fabricate heavy-duty steel and cast iron rectangular risers designed specifically to raise storm grates and curb inlets to final grade.",
    video: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/catch_basin_riser/catch_basin_riser_animation.mp4`,
    features: [
      { icon: "Grid", title: "4-Sided & 3-Sided Geometry", desc: "Fully enclosed or D-shape profiles for curb abutments." },
      { icon: "ShieldCheck", title: "High-Strength Welded Steel", desc: "Engineered for flat grate elevation in highway shoulders." }
    ],
    meta: [
      { label: "Configurations", value: "Square, Rectangular, U-Shape" },
      { label: "Compatibility", value: "Matches DOT curb and gutter profiles" }
    ],
    buttonText: "Explore Drainage Risers",
    buttonLink: "/products/catch-basin-risers"
  },
  {
    id: "curb-inlet-risers",
    theme: "light",
    overline: "Roadside Inflow Management",
    title: "Curb Inlet",
    highlightText: "Steel Risers",
    description: "Precision engineered curb inlet extensions designed for roadway drainage gutters and concrete headwalls. Eliminates the cost of chipping out and repouring concrete curb openings.",
    video: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/curb_inlet_riser/curb_inlet_overview.mp4`,
    features: [
      { icon: "MoveDiagonal", title: "Seamless Gutter Fit", desc: "Maintains optimal curb inflow velocity without water pooling." },
      { icon: "ShieldCheck", title: "Hot-Dip Galvanized or Coated", desc: "Engineered for maximum corrosion defense in stormwater runoff." }
    ],
    meta: [
      { label: "Application", value: "Curb headwalls & roadside gutters" },
      { label: "Material", value: "Heavy-Gauge Welded Steel / Cast Iron" }
    ],
    buttonText: "View Curb Inlet Specs",
    buttonLink: "/products/curb-inlet-riser"
  },
  {
    id: "two-grate-combo",
    theme: "dark",
    overline: "High-Volume Intake Structures",
    title: "Two Grate",
    highlightText: "Combo Risers",
    description: "Engineered for dual-grate catch basins and high-volume stormwater intake structures. Pre-fabricated to elevate multi-grate assemblies seamlessly while matching exact finished pavement elevations.",
    video: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/catch_basin_riser/two_grate_catch_basin_riser_animation.mp4`,
    features: [
      { icon: "Grid", title: "Dual Grate Integration", desc: "Houses two side-by-side grates in a rigid unified frame." },
      { icon: "ShieldCheck", title: "Heavy Commercial Rated", desc: "Engineered to withstand direct heavy vehicle traffic." }
    ],
    meta: [
      { label: "Configurations", value: "Standard & Custom Dual Openings" },
      { label: "Material", value: "Fabricated Structural Steel / Cast Iron" }
    ],
    buttonText: "View Combo Risers",
    buttonLink: "/products"
  },
  {
    id: "custom-d-shape",
    theme: "light",
    overline: "Specialty Roadway Geometry",
    title: "D-Shape &",
    highlightText: "Custom Risers",
    description: "When utility vaults border curb lines, median barriers, or transit rails, standard round rings will not fit. We manufacture custom D-shape and irregular radius risers to exact jobsite blueprints.",
    video: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/custom_riser/d_shape_custom_riser_animation.mp4`,
    features: [
      { icon: "Layers", title: "Custom Blueprint Geometry", desc: "Manufactured to exact radius, flat-back, and offset dimensions." },
      { icon: "ShieldCheck", title: "Zero Field Modifications", desc: "Drop-in factory tolerance guarantees immediate paving fit." }
    ],
    meta: [
      { label: "Shapes", value: "D-Shape, Offset Flange, Non-Standard" },
      { label: "Lead Time", value: "Rapid Custom Production" }
    ],
    buttonText: "Request Custom Geometry",
    buttonLink: "/products/d-shape-risers"
  },
  {
    id: "detectable-warning",
    theme: "dark",
    overline: "ADA Compliance & Public Safety",
    title: "Detectable",
    highlightText: "Warning Plates",
    description: "Ensure full ADA compliance and pedestrian safety with our high-durability tactile warning surfaces. Designed for seamless integration into municipal curb ramps, street crossings, and transit platforms.",
    isCustomSlider: true,
    sliderType: "detectable",
    features: [
      { icon: "ShieldCheck", title: "Full ADA Compliance", desc: "Meets federal and state tactile paving specifications." },
      { icon: "Layers", title: "Severe Snowplow Defense", desc: "Engineered to withstand heavy foot traffic and steel plow blades." }
    ],
    meta: [
      { label: "Application", value: "Curb ramps, sidewalks, and transit edges" },
      { label: "Materials", value: "Tactile Cast Iron, Ductile Iron, Surface Castings" }
    ],
    buttonText: "View ADA Specs",
    buttonLink: "/products"
  },
  {
    id: "gas-utility",
    theme: "light",
    overline: "Critical Utility Infrastructure",
    title: "Gas & Water Valve",
    highlightText: "Box Risers",
    description: "Provide safe, reliable access to critical gas and water utility lines. Our valve box risers are built to exact municipal specifications in 1\" to 6\" increments to withstand heavy traffic and protect buried assets.",
    video: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/valve_box_riser/full_valve_box_riser_design_1.mp4`,
    features: [
      { icon: "Wrench", title: "Rapid Drop-In Fit", desc: "Maintains immediate valve access while keeping out debris." },
      { icon: "ShieldCheck", title: "Heavy Commercial Duty", desc: "Engineered to withstand direct load impacts from heavy vehicles." }
    ],
    meta: [
      { label: "Material", value: "High-Tensile Cast Iron" },
      { label: "Heights", value: "1\", 1.5\", 2\", 3\", 4\", 5\", 6\"" }
    ],
    buttonText: "View Valve Risers",
    buttonLink: "/products/valve-box-risers"
  },
  {
    id: "trash-racks",
    theme: "dark",
    overline: "Environmental & Stormwater Protection",
    title: "Trash Racks &",
    highlightText: "Debris Barriers",
    description: "Heavy-gauge steel trash racks engineered to protect culverts, retention basins, and stormwater intake pipes from floating logs, rocks, and debris blockages.",
    isCustomSlider: true,
    sliderType: "trash-racks",
    features: [
      { icon: "Grid", title: "Hydraulic Debris Protection", desc: "Prevents large logs, rocks, and urban debris from clogging outflow pipes." },
      { icon: "ShieldCheck", title: "Corrosion Resistant Steel", desc: "Heavy galvanized and coated steel for prolonged water immersion." }
    ],
    meta: [
      { label: "Applications", value: "Culvert inlets, retention ponds, stormwater spillways" },
      { label: "Profiles", value: "Flat, sloped, and custom welded bar matrices" }
    ],
    buttonText: "View Trash Racks",
    buttonLink: "/products/trash-racks"
  },
  {
    id: "tools-accessories",
    theme: "light",
    overline: "Field Installation Equipment",
    title: "Lid Lifters &",
    highlightText: "Paving Tools",
    description: "Industrial-grade field tools engineered for safety and jobsite productivity. Includes heavy-duty valve box lifters, manhole cover hooks, and specialized extraction equipment.",
    isCustomSlider: true,
    sliderType: "tools",
    features: [
      { icon: "Wrench", title: "Jobsite Ergonomics", desc: "Reduces back strain and accelerates daily paving production." },
      { icon: "HardHat", title: "Drop-Forged Steel Safety", desc: "Drop-forged alloy steel tools rated for heavy municipal castings." }
    ],
    meta: [
      { label: "Tool Types", value: "Valve Keys, Lid Lifters, Hooks, Plug Pullers" },
      { label: "Durability", value: "Drop-forged hardened alloy steel" }
    ],
    buttonText: "View Tool Catalog",
    buttonLink: "/products/installation-tools"
  }
];

const ADVANTAGES = [
  { icon: "Timer", title: "Quick Installation", desc: "Drop in, adjust, and pave. Minimize road closure times on every utility hole." },
  { icon: "Layers", title: "Stackable Design", desc: "Need 3 inches? Stack a 2\" and a 1\" riser securely for exact elevation matching." },
  { icon: "Wrench", title: "No Digging", desc: "Keep jackhammers off the jobsite. Avoid digging out the concrete base structure." },
  { icon: "HardHat", title: "Engineered to DOT Standards", desc: "Materials and load ratings are engineered to support applicable municipal and DOT requirements." }
];

const renderIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case "ShieldCheck": return <ShieldCheck className={className} />;
    case "Truck": return <Truck className={className} />;
    case "Settings": return <Settings className={className} />;
    case "Timer": return <Timer className={className} />;
    case "MoveDiagonal": return <MoveDiagonal className={className} />;
    case "Grid": return <Grid className={className} />;
    case "HardHat": return <HardHat className={className} />;
    case "Layers": return <Layers className={className} />;
    case "Wrench": return <Wrench className={className} />;
    default: return <CheckCircle2 className={className} />;
  }
};

export default function ComprehensivePavingRisersMapped() {
  return (
    <div className="w-full font-sans bg-black">

      {/* --- SHOWCASE SECTIONS (MAPPED IN PURE BLACK & WHITE) --- */}
      {RISER_SECTIONS.map((section, index) => {
        const isDark = section.theme === 'dark';
        const isImageLeft = index % 2 === 0;

        return (
          <section
            key={section.id}
            className={`py-20 relative overflow-hidden border-b ${
              isDark
                ? 'bg-[#09090B] text-white border-white/10'
                : 'bg-white text-black border-black/10'
            }`}
          >
            {/* Subtle Monochrome Blueprint Pattern */}
            <div
              className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(${isDark ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
                backgroundSize: '36px 36px'
              }}
            />
            
            {/* Ambient White/Silver Radial Glow */}
            <div
              className={`absolute top-[10%] ${
                isImageLeft ? 'left-[-10%]' : 'right-[-10%]'
              } w-[500px] h-[500px] ${
                isDark ? 'bg-white/5' : 'bg-black/5'
              } rounded-full blur-[140px] pointer-events-none z-0`}
            />

            <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 relative z-10 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* --- VISUAL COLUMN (VIDEO / SLIDER / IMAGE) --- */}
                <div className={`relative ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  {section.isCustomSlider ? (
                    section.sliderType === 'trash-racks' ? (
                      <TrashRacksSlider />
                    ) : section.sliderType === 'tools' ? (
                      <ToolsCatalogSlider />
                    ) : (
                      <DetectablePlatesSlider />
                    )
                  ) : (
                    <div
                      className={`relative z-10 w-full rounded-2xl overflow-hidden border shadow-2xl ${
                        isDark ? 'border-white/15 bg-black' : 'border-black/15 bg-zinc-950'
                      } ${section.video ? 'aspect-[4/3]' : 'aspect-square'}`}
                    >
                      {section.video ? (
                        <div className="relative w-full h-full bg-black flex items-center justify-center group">
                          <video
                            key={section.id}
                            src={section.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            suppressHydrationWarning
                            className="object-cover w-full h-full pointer-events-none"
                          />
                          {/* Live Video Indicator Badge */}
                          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 text-white border border-white/20 text-[10px] font-mono uppercase tracking-widest backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            Live HD Video
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-full h-full bg-zinc-950 flex items-center justify-center p-8">
                          <Image
                            src={section.image || ''}
                            alt={section.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain p-8 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* --- TEXT CONTENT COLUMN --- */}
                <div className={`space-y-8 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>

                  {/* Header Text */}
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`} />
                      <h4 className={`font-mono font-bold text-xs uppercase tracking-[0.2em] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {section.overline}
                      </h4>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight uppercase">
                      {section.title} <br />
                      <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                        {section.highlightText}
                      </span>
                    </h2>

                    <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {section.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  {section.features && section.features.length > 0 && (
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                      {section.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3.5">
                          <div className={`h-9 w-9 shrink-0 rounded-lg flex items-center justify-center border ${
                            isDark ? 'bg-zinc-900 border-white/10 text-white' : 'bg-zinc-100 border-black/10 text-black'
                          }`}>
                            {renderIcon(feat.icon, "w-4 h-4")}
                          </div>
                          <div>
                            <h5 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-black'}`}>
                              {feat.title}
                            </h5>
                            <p className={`text-xs leading-relaxed mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                              {feat.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Meta Information Table */}
                  {section.meta && section.meta.length > 0 && (
                    <div className={`p-5 rounded-xl space-y-2.5 border ${
                      isDark ? 'bg-zinc-950 border-white/10' : 'bg-zinc-50 border-black/10'
                    }`}>
                      <div className={`flex justify-between border-b pb-2 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                        <span className={`font-mono text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                          Standard:
                        </span>
                        <span className={`font-bold text-xs text-right ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                          Custom manufacturing to project specs
                        </span>
                      </div>
                      {section.meta.map((metaItem, i) => (
                        <div key={i} className="flex justify-between text-xs font-mono">
                          <span className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>{metaItem.label}</span>
                          <span className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>{metaItem.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Primary High-Contrast Button */}
                  <div className="pt-2">
                    <Link href={section.buttonLink}>
                      <Button className={`font-black uppercase text-xs tracking-wider h-14 px-8 rounded-lg transition-all duration-300 shadow-xl w-full sm:w-auto ${
                        isDark
                          ? 'bg-white text-black hover:bg-zinc-200 border border-white'
                          : 'bg-black text-white hover:bg-zinc-800 border border-black'
                      }`}>
                        {section.buttonText} <ArrowUpRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* --- MONOCHROME ADVANTAGES SECTION --- */}
      <section className="py-24 relative bg-black text-white overflow-hidden border-t border-white/10">
        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 mx-auto relative z-10 max-w-7xl">

          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
              Field Proven Reliability
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Why Paving Crews Choose Us
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
              We design our risers to minimize road closure times and maximize daily paving footprints.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((adv, i) => (
              <div
                key={i}
                className="bg-zinc-950 p-8 rounded-2xl border border-white/10 text-center shadow-xl hover:border-white/30 transition-all duration-300 group hover:-translate-y-1 flex flex-col items-center justify-between"
              >
                <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                  {renderIcon(adv.icon, "w-6 h-6")}
                </div>
                <div>
                  <h4 className="text-base font-black mb-2 uppercase tracking-wide text-white">
                    {adv.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact/quote">
              <Button className="bg-white text-black hover:bg-zinc-200 px-10 h-16 text-sm font-black uppercase tracking-wider transition-all shadow-2xl rounded-xl border border-white">
                Equip Your Next Jobsite <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}