'use client';

import React, { useState } from 'react';
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
  Eye
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
  const current = DETECTABLE_VARIANTS[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + DETECTABLE_VARIANTS.length) % DETECTABLE_VARIANTS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % DETECTABLE_VARIANTS.length);
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white flex flex-col justify-between">
      
      {/* Top Header Bar */}
      <div className="bg-zinc-50 px-5 py-3.5 border-b border-gray-200 flex items-center justify-between z-20">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#CC0000] animate-pulse shadow-[0_0_8px_rgba(204,0,0,0.6)]" />
          <span className="text-xs font-mono font-black uppercase tracking-wider text-slate-900">
            {current.title}
          </span>
        </div>
        <span className="text-[10px] font-mono bg-zinc-200/80 text-zinc-700 font-bold px-2.5 py-0.5 rounded border border-gray-300">
          {activeIdx + 1} / {DETECTABLE_VARIANTS.length}
        </span>
      </div>

      {/* Main Visual Display Stage */}
      <div className="relative w-full aspect-[4/3] sm:aspect-square bg-gradient-to-b from-white via-zinc-50 to-zinc-100/80 flex items-center justify-center overflow-hidden group">
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
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-slate-900 px-3 py-1 rounded border border-gray-200 shadow-md">
            {current.badge}
          </span>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#CC0000] text-slate-800 hover:text-white p-2.5 rounded-full backdrop-blur-md transition-all z-20 shadow-lg cursor-pointer border border-gray-200"
          aria-label="Previous plate"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#CC0000] text-slate-800 hover:text-white p-2.5 rounded-full backdrop-blur-md transition-all z-20 shadow-lg cursor-pointer border border-gray-200"
          aria-label="Next plate"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Industrial Thumbnail Selector */}
      <div className="bg-zinc-50 p-4 border-t border-gray-200 space-y-2.5 z-20">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-600 font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-sm bg-[#CC0000]" />
            Detectable Warning Plates Gallery
          </span>
          <span className="text-[10px] font-mono text-[#CC0000] font-bold">
            {current.spec}
          </span>
        </div>

        {/* Unified Light Thumbnail Cards with Logo Red accents */}
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
          {DETECTABLE_VARIANTS.map((variant, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={variant.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative p-1.5 rounded-lg border transition-all duration-200 cursor-pointer text-left flex flex-col justify-between ${
                  isActive
                    ? 'bg-red-50/80 border-[#CC0000] shadow-[0_0_10px_rgba(204,0,0,0.2)]'
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-zinc-100/60'
                }`}
              >
                <div className="relative w-full aspect-video rounded overflow-hidden mb-1 bg-zinc-100 border border-gray-100">
                  <Image
                    src={variant.image}
                    alt={variant.title}
                    fill
                    sizes="80px"
                    className="object-contain p-0.5"
                  />
                </div>
                <span className={`text-[9px] font-mono line-clamp-1 block text-center font-bold uppercase tracking-tight ${
                  isActive ? 'text-[#CC0000]' : 'text-slate-600'
                }`}>
                  {variant.badge}
                </span>
                {isActive && (
                  <div className="w-full h-[2px] bg-[#CC0000] mt-1 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}

const RISER_SECTIONS = [
  {
    id: "adjustable-round",
    theme: "light",
    overline: "Adjustable Round Riser",
    title: "Mechanical",
    highlightText: "Expansion",
    description: "Designed to minimize full manhole frame excavations during road overlays. The riser fits over the existing frame and expands outward against it using a built-in mechanical mechanism. Expanding the riser holds the ring securely in position while you pave.",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/manhole_riser/adjustable_manhole_riser_with_frame.mp4`,
    features: [
      { icon: "ShieldCheck", title: "Installs without excavating the frame", desc: "Saves significant time and labor." },
      { icon: "Layers", title: "Custom Heights Available", desc: "Precision fits for any overlay requirement." }
    ],
    meta: [],
    buttonText: "Request a Quote",
    buttonLink: "/contact/quote"
  },
  {
    id: "fixed-round",
    theme: "dark",
    overline: "Fixed Round Riser",
    title: "Solid Cast",
    highlightText: "Construction",
    description: "Engineered from a single piece of heavy-duty cast or ductile iron for maximum structural integrity. Unlike adjustable risers, this fixed solid ring has no moving parts, ensuring it will never collapse or shift under extreme localized shock loads.",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/manhole_riser/fixed_manhole_riser_installation.mp4`,
    features: [
      { icon: "ShieldCheck", title: "Maximum strength", desc: "No moving parts for unparalleled durability." },
      { icon: "Layers", title: "Custom Fits Available", desc: "Manufactured precisely to your project's specifications." }
    ],
    meta: [],
    buttonText: "Request a Quote",
    buttonLink: "/contact/quote"
  },
  {
    id: "standard-municipal",
    theme: "light",
    overline: "Municipal Solutions",
    title: "Cast Iron",
    highlightText: "Paving Risers",
    description: "Maintain seamless urban traffic flow. Our heavy-duty solid risers allow for precise manhole elevation adjustment during road overlays, eliminating the need to dig up and rebuild the entire structure.",
    image: `/images/manhole_riser/fixed_round_manhole_riser_coated.png`,
    features: [
      { icon: "ShieldCheck", title: "Load Bearing", desc: "Rated for heavy commercial roadway traffic loads." },
      { icon: "Truck", title: "Bulk Ready", desc: "Supplying municipal scale projects." }
    ],
    meta: [
      { label: "Material", value: "Ductile/Black Coated" },
      { label: "Standard Sizes", value: "24\", 30\", and Custom Increments" }
    ],
    buttonText: "Request a Quote",
    buttonLink: "#specs"
  },
  {
    id: "expandable-risers",
    theme: "dark",
    overline: "Next-Gen Adjustment",
    title: "Paving-Adjust™",
    highlightText: "Expandable Risers",
    description: "Ditch the mortar bed. Our expandable mechanical risers feature a built-in expansion linkage that locks directly into the existing manhole frame. Twist to expand, lock it in, and pave right over it.",
    image: `/images/manhole_riser/adjustable_manhole_riser_coated.png`,
    features: [
      { icon: "Settings", title: "Mechanical Lock", desc: "Expands outward to grip the existing frame and lock the riser securely in place." },
      { icon: "Timer", title: "Zero Cure Time", desc: "Paving crews can lay asphalt immediately after installation." }
    ],
    meta: [],
    buttonText: "View Expandable Specs",
    buttonLink: "#expandable"
  },
  {
    id: "drainage-catch-basins",
    theme: "light",
    overline: "Drainage Infrastructure",
    title: "Catch Basin &",
    highlightText: "Curb Inlets",
    description: "Roadwork requires more than just round manhole adjustments. We fabricate heavy-duty steel and cast iron rectangular risers designed specifically to raise storm grates and curb inlets to final grade.",
    image: `/images/catch_basin_riser/rectangle_catch_basin_riser_right.png`,
    features: [
      { icon: "Grid", title: "4-Sided & 3-Sided", desc: "Fully enclosed or D-shape profiles for curb abutments." },
      { icon: "ShieldCheck", title: "Welded Steel", desc: "Engineered for flat grate elevation in highway shoulders." }
    ],
    meta: [
      { label: "Configurations", value: "Square, Rectangular, U-Shape" },
      { label: "Compatibility", value: "Matches DOT curb profiles" }
    ],
    buttonText: "Explore Drainage Risers",
    buttonLink: "#drainage"
  },
  // {
  //   id: "two-grate-combo",
  //   theme: "dark",
  //   overline: "Storm Drainage Solutions",
  //   title: "Two Grate",
  //   highlightText: "Combo Risers",
  //   description: "Engineered for dual-grate catch basins and high-volume stormwater intake structures. Pre-fabricated to elevate multi-grate assemblies seamlessly while matching exact finished pavement elevations.",
  //   image: `/images/two_grate_combo_riser/two_grate_combo_riser_1.jpg`,
  //   features: [
  //     { icon: "Grid", title: "Dual Grate Integration", desc: "Houses two side-by-side grates in a unified rigid frame." },
  //     { icon: "ShieldCheck", title: "Heavy Commercial Rated", desc: "Engineered to withstand direct vehicle traffic without deflection." }
  //   ],
  //   meta: [
  //     { label: "Configurations", value: "Standard & Custom Dual Openings" },
  //     { label: "Material", value: "Fabricated Structural Steel / Cast Iron" }
  //   ],
  //   buttonText: "View Combo Risers",
  //   buttonLink: "/products"
  // },
  // {
  //   id: "fabricated-steel",
  //   theme: "light",
  //   overline: "Heavy Infrastructure",
  //   title: "Fabricated",
  //   highlightText: "Steel Risers",
  //   description: "Heavy-duty welded structural steel risers custom fabricated to fit non-standard municipal frames, extra deep overlays, and specialized roadway geometry.",
  //   image: `/images/fabricated_steel/fabricated_steel_drainage_grate_assembly_2.png`,
  //   features: [
  //     { icon: "Layers", title: "Custom Dimensions", desc: "Manufactured to exact blueprints and field specifications." },
  //     { icon: "ShieldCheck", title: "High-Strength Welds", desc: "Precision welded for extreme durability and heavy load absorption." }
  //   ],
  //   meta: [
  //     { label: "Steel Grade", value: "Structural A36 / Galvanized Options" },
  //     { label: "Lead Time", value: "Rapid custom fabrication available" }
  //   ],
  //   buttonText: "Request Custom Steel",
  //   buttonLink: "/contact/specifications"
  // },
  {
    id: "sloped-tapered",
    theme: "dark",
    overline: "Road Crowning Solutions",
    title: "Sloped &",
    highlightText: "Tapered Risers",
    description: "Roads are rarely precision flat. When resurfacing requires accommodating road crown or grade changes, standard flat risers cause manhole covers to sit unevenly. Our custom-tapered rings ensure a precision flush fit.",
    image: `/images/manhole_riser/adjustable_manhole_riser_low_screw_coated.png`,
    isComingSoon: true,
    features: [
      { icon: "MoveDiagonal", title: "Precision Angles", desc: "Custom slopes available to meet project-specific design requirements." },
      { icon: "ShieldCheck", title: "Snowplow Safe", desc: "Ensures covers sit flush, preventing plow blade snags." }
    ],
    meta: [],
    buttonText: "Request Custom Fab",
    buttonLink: "#custom"
  },
  {
    id: "detectable-warning",
    theme: "light",
    overline: "ADA Compliance & Safety",
    title: "Detectable",
    highlightText: "Warning Plates",
    description: "Ensure full ADA compliance and pedestrian safety with our high-durability tactile warning surfaces. Designed for seamless integration into municipal curb ramps, street crossings, and transit platforms.",
    isCustomSlider: true,
    features: [
      { icon: "ShieldCheck", title: "ADA Compliant", desc: "Meets federal and state tactile paving requirements." },
      { icon: "Layers", title: "High Durability", desc: "Engineered to withstand heavy foot traffic and snowplows." }
    ],
    meta: [
      { label: "Application", value: "Curb ramps, sidewalks, and transit edges" },
      { label: "Materials", value: "Tactile Cast Iron, Ductile Iron, Surface Castings" }
    ],
    buttonText: "View ADA Specs",
    buttonLink: "#detectable"
  },
  {
    id: "gas-utility",
    theme: "dark",
    overline: "Utility Infrastructure",
    title: "Gas Valve",
    highlightText: "Risers",
    description: "Provide safe, reliable access to critical gas utility lines. Our gas valve box risers are built to exact specifications to withstand heavy traffic and protect essential municipal infrastructure.",
    image: `/images/valve_box_riser/gas_valve_box_riser_2.png`,
    features: [
      { icon: "Wrench", title: "Secure Access", desc: "Maintains rapid valve access while keeping out debris." },
      { icon: "ShieldCheck", title: "Heavy Duty", desc: "Engineered to withstand direct load impacts from heavy vehicles." }
    ],
    meta: [
      { label: "Material", value: "High-Tensile Cast Iron" }
    ],
    buttonText: "View Gas Risers",
    buttonLink: "#gas-risers"
  },
  // {
  //   id: "trash-racks",
  //   theme: "light",
  //   overline: "Environmental & Drainage",
  //   title: "Trash Racks &",
  //   highlightText: "Debris Barriers",
  //   description: "Heavy-gauge steel trash racks engineered to protect culverts, retention basins, and stormwater intake pipes from floating debris and blockages.",
  //   image: `/images/trash_racks/trash_rack_type_1.png`,
  //   features: [
  //     { icon: "Grid", title: "Debris Protection", desc: "Prevents large logs, rocks, and urban debris from clogging outflow pipes." },
  //     { icon: "ShieldCheck", title: "Corrosion Resistant", desc: "Heavy galvanized and coated steel for prolonged water immersion." }
  //   ],
  //   meta: [
  //     { label: "Applications", value: "Culvert inlets, retention ponds, stormwater spillways" },
  //     { label: "Profiles", value: "Flat, sloped, and custom welded bar matrices" }
  //   ],
  //   buttonText: "View Trash Racks",
  //   buttonLink: "/products"
  // },
  // {
  //   id: "tools-accessories",
  //   theme: "dark",
  //   overline: "Field Installation Equipment",
  //   title: "Lid Lifters &",
  //   highlightText: "Paving Tools",
  //   description: "Industrial-grade field tools engineered for safety and efficiency. Includes heavy-duty valve box lifters, manhole cover hooks, and specialized installation equipment.",
  //   image: `/images/tools/valve_box_lifter.png`,
  //   features: [
  //     { icon: "Wrench", title: "Jobsite Ergonomics", desc: "Reduces back strain and accelerates daily paving production." },
  //     { icon: "HardHat", title: "Safety Engineered", desc: "Drop-forged steel tools rated for heavy municipal castings." }
  //   ],
  //   meta: [
  //     { label: "Tool Types", value: "Valve Keys, Lid Lifters, Hooks, Plug Pullers" },
  //     { label: "Durability", value: "Drop-forged alloy steel" }
  //   ],
  //   buttonText: "View Tool Catalog",
  //   buttonLink: "/products"
  // }
];


const ADVANTAGES = [
  { icon: "Timer", title: "Quick Installation", desc: "Drop in, adjust, and pave. Minimize road closure times on every utility hole." },
  { icon: "Layers", title: "Stackable Design", desc: "Need 3 inches? Stack a 2\" and a 1\" riser securely for exact elevation matching." },
  { icon: "Wrench", title: "No Digging", desc: "Keep jackhammers off the jobsite. Avoid digging out the concrete base structure." },
  { icon: "HardHat", title: "Designed to meet applicable DOT requirements", desc: "Materials and load ratings are engineered to support applicable municipal and DOT requirements." }
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
    <div className="w-full font-sans">

      {/* --- SHOWCASE SECTIONS (MAPPED) --- */}
      {RISER_SECTIONS.map((section, index) => {
        const isDark = section.theme === 'dark';
        const isImageLeft = index % 2 === 0;

        return (
          <section
            key={section.id}
            className={`py-20 relative overflow-hidden ${isDark ? 'bg-[#0A0A0A] text-white border-b border-white/5' : 'bg-zinc-50 text-slate-900 border-b border-gray-200'}`}
          >
            {/* Premium Grid Pattern Background */}
            <div className={`absolute inset-0 z-0 opacity-[0.15] pointer-events-none`} style={{ backgroundImage: `radial-gradient(${isDark ? '#ffffff' : '#000000'} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
            
            {/* Dynamic Red Glow */}
            <div className={`absolute top-[10%] ${isImageLeft ? 'left-[-10%]' : 'right-[-10%]'} w-[600px] h-[600px] bg-[#CC0000]/${isDark ? '20' : '10'} rounded-full blur-[120px] pointer-events-none z-0`}></div>

            <div className="w-full px-10 md:px-20 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* --- IMAGE / SLIDER COLUMN --- */}
                <div className={`relative ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  {section.isCustomSlider ? (
                    <DetectablePlatesSlider />
                  ) : (
                    <div className={`relative z-10 w-full rounded-2xl overflow-hidden border ${isDark ? 'border-white/10 shadow-2xl' : 'border-gray-200 shadow-xl'} ${section.image?.endsWith('.mp4') ? 'aspect-[4/3] bg-[#CC0000]' : isDark ? 'aspect-square bg-[#111]' : 'aspect-square bg-white'}`}>
                      {section.image?.endsWith('.mp4') ? (
                        <video
                          key={section.id}
                          src={section.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          suppressHydrationWarning
                          className="object-cover w-full h-full pointer-events-none"
                        />
                      ) : (
                        <Image
                          src={section.image || ''}
                          alt={section.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className={`object-contain p-8 ${isDark ? 'drop-shadow-[0_0_30px_rgba(201,37,38,0.15)]' : ''}`}
                        />
                      )}

                      {/* --- COMING SOON OVERLAY --- */}
                      {section.isComingSoon && (
                        <div className="absolute bottom-0 left-0 right-0 bg-[#CC0000] text-white text-center py-4 font-black uppercase tracking-[0.25em] text-sm shadow-[0_-10px_20px_rgba(204,0,0,0.2)] z-20">
                          Coming Soon
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* --- TEXT CONTENT COLUMN --- */}
                <div className={`space-y-8 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>

                  {/* Header Text */}
                  <div className="space-y-4">
                    <h4 className={`font-bold text-sm uppercase tracking-[0.2em] ${isDark ? 'text-zinc-400' : 'text-[#CC0000]'}`}>
                      {section.overline}
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                      {section.title} <br /> <span className="text-[#CC0000]">{section.highlightText}</span>
                    </h2>
                    <p className={`text-lg leading-relaxed max-w-xl ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                      {section.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  {section.features && section.features.length > 0 && (
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                      {section.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className={`h-10 w-10 shrink-0 rounded-lg flex items-center justify-center bg-transparent`}>
                            {renderIcon(feat.icon, `w-6 h-6 text-[#CC0000]`)}
                          </div>
                          <div>
                            <h5 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{feat.title}</h5>
                            <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>{feat.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Meta Information Table */}
                  {section.meta && section.meta.length > 0 && (
                    <div className={`p-6 rounded-xl space-y-3 border ${isDark ? 'bg-[#111] border-white/10' : 'bg-white border-gray-200'}`}>
                      <div className={`flex justify-between border-b pb-2 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                        <span className={`font-medium italic text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>Our Pledge:</span>
                        <span className={`font-bold text-sm text-right italic ${isDark ? 'text-white' : 'text-slate-900'}`}>"Custom manufacturing available to meet project specifications."</span>
                      </div>
                      {section.meta.map((metaItem, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className={isDark ? 'text-zinc-500' : 'text-slate-500'}>{metaItem.label}</span>
                          <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{metaItem.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Button */}
                  <div className="pt-4">
                    <Link href={section.buttonLink}>
                      <Button className={`font-bold h-14 px-8 rounded-lg transition-transform hover:scale-105 w-full sm:w-auto ${isDark ? 'bg-[#CC0000] hover:bg-white hover:text-black text-white' : 'bg-[#CC0000] hover:bg-[#0F0F0F] text-white'}`}>
                        {section.buttonText} <ArrowUpRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* --- ADVANTAGES SECTION --- */}
      <section className="py-20 relative bg-[#CC0000] text-white overflow-hidden">
        <div className="w-full px-10 md:px-20 mx-auto relative z-10">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Why Paving Crews Choose Us</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
              We design our risers to minimize road closure times and maximize daily paving footprints.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ADVANTAGES.map((adv, i) => (
              <div key={i} className="bg-white p-8 rounded-xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  {renderIcon(adv.icon, "w-12 h-12 text-[#CC0000]")}
                </div>
                <h4 className="text-xl font-bold mb-2 uppercase tracking-wide text-black">{adv.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="#contact">
              <Button className="bg-[#0F0F0F] text-white hover:bg-white hover:text-[#CC0000] px-10 h-16 text-lg font-black uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl rounded-lg">
                Equip Your Next Jobsite <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}