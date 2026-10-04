'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldAlert, 
  Waves, 
  Wrench, 
  Layers, 
  CheckCircle2, 
  Ruler, 
  FileText, 
  SlidersHorizontal, 
  ChevronRight,
  Sparkles,
  Download,
  Info,
  ShieldCheck,
  Building2,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import R2Video from '@/app/components/R2Video';

// Hero Featured Showcase Slides
const HERO_SECTIONS = [
  {
    id: 'heavy-duty',
    title: 'High-Tensile Heavy Duty',
    subtitle: 'Fabricated Steel Grates with Risers',
    description: 'Engineered for extreme structural shock loads. Our heavy-duty fabricated steel grates and matching paving risers are designed for high-traffic industrial corridors, airport ramps, and municipal arterial roadways.',
    icon: ShieldAlert,
    media: '/videos/catch_basin_riser/two_grate_catch_basin_riser_animation.mp4',
    isVideo: true,
    tag: 'Fabricated Steel'
  },
  {
    id: 'high-flow',
    title: 'High-Capacity Hydraulic Inflow',
    subtitle: 'State DOT Vane Grates & Frames',
    description: 'Featuring aerodynamic directional vanes and high-intake hydraulic open matrices. Captures torrential runoff at high velocities while preventing debris blockages and hazardous hydroplaning.',
    icon: Waves,
    media: `/images/catch_basin_riser/sny_g3_state_ny_grate_1.png`,
    isVideo: false,
    tag: 'DOT Vane Spec'
  },
  {
    id: 'custom-fab',
    title: 'Precision Fitment Engineering',
    subtitle: 'Built to Any Municipal Blueprint',
    description: 'Non-standard dimensions? Sloped curb gutters? No problem. Our domestic fabrication facilities weld custom catch basin grates and multi-tier risers to match your exact jobsite dimensions with zero frame excavation.',
    icon: Wrench,
    media: '/videos/animations/1.719.mp4',
    isVideo: true,
    tag: 'Custom Blueprint'
  }
];

// Comprehensive Catch Basin Grates & Steel Risers Inventory
interface GrateProduct {
  id: string;
  name: string;
  category: 'fabricated-steel' | 'dot-vane' | 'municipal' | 'locking-specialty';
  categoryLabel: string;
  spec: string;
  material: string;
  dimensions: string;
  openArea: string;
  loadRating: string;
  description: string;
  image: string;
  altImages?: string[];
  badges: string[];
}

const ALL_GRATE_PRODUCTS: GrateProduct[] = [
  {
    id: 'steel-14x24-assembly',
    name: '14" x 24" Fabricated Steel Grate with Paving Riser',
    category: 'fabricated-steel',
    categoryLabel: 'Fabricated Steel Grate',
    spec: 'High-Tensile Welded Carbon Steel Assembly',
    material: 'ASTM A36 Carbon Steel / Structural Tubing',
    dimensions: '14" W x 24" L x 2" to 4" Custom Rise',
    openArea: '68% Hydraulic Intake Area',
    loadRating: 'Severe Duty Commercial / Heavy Axle',
    description: 'Integrated structural steel catch basin grate and extension riser frame. Slides directly into existing curb-inlet frames, elevating grate to new asphalt grade without tearing out concrete.',
    image: '/images/catch_basin_riser/14x24x2_grate_with_riser.png',
    altImages: [
      '/images/catch_basin_riser/14x24x2_grate_with_riser_detail.png'
    ],
    badges: ['Welded Steel', 'Zero Excavation', 'Made in USA']
  },
  {
    id: 'steel-10x36-linear',
    name: '10" x 36" Linear Heavy Steel Grate & Riser',
    category: 'fabricated-steel',
    categoryLabel: 'Linear Steel Grate',
    spec: 'Continuous Inflow Arterial Fit',
    material: 'ASTM A36 Heavy-Gauge Structural Steel',
    dimensions: '10" W x 36" L x 2" Custom Rise',
    openArea: '72% Linear Flow Area',
    loadRating: 'Highway Arterial / Heavy Transit Load',
    description: 'Long-profile linear catch basin steel grate and paving riser designed for high-velocity curb gutters, highway shoulders, and airport taxiway drainage channels.',
    image: '/images/catch_basin_riser/10x36x2_grate_with_riser.png',
    badges: ['10x36 Linear', 'High Intake', 'Heavy Transit']
  },
  {
    id: 'fab-steel-drain-assembly',
    name: 'Heavy Industrial Fabricated Steel Drainage Grate Assembly',
    category: 'fabricated-steel',
    categoryLabel: 'Fabricated Steel Grate',
    spec: 'Custom Structural Steel Drainage Matrix',
    material: 'High-Tensile Welded Carbon Steel Plate',
    dimensions: 'Custom Fabricated per Field Blueprint',
    openArea: '70% Open Hydraulic Matrix',
    loadRating: 'Industrial / Heavy Port Cargo Load',
    description: 'Engineered specifically for non-standard catch basin geometries and extreme load zones where standard cast iron frames are prone to cracking under repetitive heavy impact.',
    image: '/images/fabricated_steel/fabricated_steel_drainage_grate_assembly_2.png',
    badges: ['Industrial Grade', 'Custom Welded', 'Impact Resistant']
  },
  {
    id: 'sny-g2-dot',
    name: 'State of NY DOT G2 Catch Basin Grate',
    category: 'dot-vane',
    categoryLabel: 'State DOT Grate',
    spec: 'New York State DOT Approved Specification',
    material: 'ASTM A48 Class 35B / ASTM A536 Cast Metal',
    dimensions: 'Standard NY DOT G2 Catch Basin Dimensions',
    openArea: '65% Flow Efficiency',
    loadRating: 'Municipal Highway / Full Traffic Rating',
    description: 'Pre-certified NY State Department of Transportation municipal catch basin grate casting built for heavy urban expressways, parkways, and municipal storm interceptors.',
    image: '/images/catch_basin_riser/sny_g2_state_ny_grate_1.png',
    altImages: [
      '/images/catch_basin_riser/sny_g2_state_ny_grate_2.png'
    ],
    badges: ['NY DOT G2', 'DOT Approved', 'Highway Spec']
  },
  {
    id: 'sny-g3-vane',
    name: 'State of NY DOT G3 High-Inflow Vane Grate',
    category: 'dot-vane',
    categoryLabel: 'Directional Vane Grate',
    spec: 'High-Velocity Hydraulic Vane Profile',
    material: 'High-Strength Ductile Iron / Gray Iron',
    dimensions: 'Standard NY DOT G3 Pattern Matrix',
    openArea: '75% High-Capacity Vane Intake',
    loadRating: 'Highway Severe Duty / High Velocity Flow',
    description: 'Advanced curved directional vanes engineered to redirect swift gutter runoff straight downward into the storm line, dramatically reducing bypass flow on steep slopes.',
    image: '/images/catch_basin_riser/sny_g3_state_ny_grate_1.png',
    altImages: [
      '/images/catch_basin_riser/sny_g3_state_ny_grate_2.png',
      '/images/catch_basin_riser/sny_g3_state_ny_grate_3.png',
      '/images/catch_basin_riser/sny_g3_state_ny_grate_4.png',
      '/images/catch_basin_riser/sny_g3_state_ny_grate_5.png'
    ],
    badges: ['NY DOT G3', 'Directional Vane', 'Max Storm Inflow']
  },
  {
    id: 'd1-storm-grate',
    name: 'D1 Heavy Flow Drainage Grate',
    category: 'dot-vane',
    categoryLabel: 'High Flow Grate',
    spec: 'High Intake Stormwater Profile',
    material: 'Cast Iron / High Tensile Alloy',
    dimensions: 'Standard D1 Basin Fitment',
    openArea: '66% Intake Matrix',
    loadRating: 'Heavy Commercial / Municipal Traffic',
    description: 'Engineered bar matrix optimized to eliminate debris damming while preventing bicycle tire entrapment, ideal for urban street resurfacing programs.',
    image: '/images/catch_basin_riser/d1_drainage_grate.png',
    badges: ['D1 Series', 'Bicycle Safe', 'Anti-Clog']
  },
  {
    id: 'g1-basin-grate',
    name: 'G1 Series Municipal Catch Basin Grates',
    category: 'dot-vane',
    categoryLabel: 'Municipal Gutter Grate',
    spec: 'G1 High Volume Curb Gutter Matrix',
    material: 'ASTM A48 Class 35B Heavy Gray Iron',
    dimensions: 'Standard G1 Matrix Dimensions',
    openArea: '64% Flow Matrix',
    loadRating: 'Heavy Arterial Street Rating',
    description: 'Rugged, dependable municipal standard catch basin grate designed for long lifecycle performance across municipal resurfacing projects.',
    image: '/images/catch_basin_riser/g1_catch_basin_grate_1.png',
    altImages: [
      '/images/catch_basin_riser/g1_catch_basin_grate_2.png',
      '/images/catch_basin_riser/g1_catch_basin_grate_3.png'
    ],
    badges: ['G1 Standard', 'Municipal Fit', 'Heavy Iron']
  },
  {
    id: 'cb-10022-assembly',
    name: '10022 Series Catch Basin Grate & Riser Frame Assembly',
    category: 'municipal',
    categoryLabel: 'Catch Basin Assembly',
    spec: 'Drop-In Municipal Riser Assembly',
    material: 'Heavy Cast Iron Grate with Welded Steel Riser',
    dimensions: 'Standard 10022 Frame Clear ID Match',
    openArea: '62% Hydraulic Free Area',
    loadRating: 'Heavy Commercial / Municipal Traffic',
    description: 'Complete replacement grate and elevation riser kit for 10022 series municipal catch basins. Eliminates frame replacement during major roadway overlays.',
    image: '/images/catch_basin_riser/10022_catch_basin_with_riser.png',
    altImages: [
      '/images/catch_basin_riser/10022_catch_basin_grate.png'
    ],
    badges: ['10022 Spec', 'Grate + Riser', 'Zero Excavation']
  },
  {
    id: 'cb-36x19-commercial',
    name: '36" x 19.8" Heavy Commercial Catch Basin Grate & Riser',
    category: 'municipal',
    categoryLabel: 'Commercial Basin Grate',
    spec: 'Heavy Commercial Logistics Specification',
    material: 'Ductile Iron / Structural Steel Sub-Frame',
    dimensions: '36" W x 19.8" L x Custom Rise Height',
    openArea: '69% Free Intake Area',
    loadRating: 'Heavy Commercial / Freight Terminal Load',
    description: 'Large-format storm drainage grate and elevation frame engineered for high-tonnage environments including logistics centers, bus rapid transit lanes, and shopping complexes.',
    image: '/images/catch_basin_riser/36x19_8_catch_basin_grate.png',
    altImages: [
      '/images/catch_basin_riser/36x19_8_catch_basin_riser.png'
    ],
    badges: ['36x19.8 Size', 'Freight Rated', 'High Capacity']
  },
  {
    id: 'bell-12047-riser',
    name: '12047 Bell Catch Basin Riser Extension Assembly',
    category: 'municipal',
    categoryLabel: 'Bell Riser Assembly',
    spec: 'Multi-Tier Bell Mouth Elevation Profile',
    material: 'ASTM A536 Ductile Iron / Structural Steel',
    dimensions: '12047 Bell Basin Dimensional Standards',
    openArea: 'Maximum Full-Bore Bell Flow',
    loadRating: 'Highway / Severe Municipal Duty',
    description: 'Specialized bell-mouth catch basin extension assembly designed for deep curb-inlet transitions and multi-layer asphalt lifts.',
    image: '/images/catch_basin_riser/12047_bell_riser_assembly.png',
    altImages: [
      '/images/catch_basin_riser/12047_bell_riser_side.png',
      '/images/catch_basin_riser/12047_bell_riser_top.png'
    ],
    badges: ['12047 Bell', 'Multi-Tier Fit', 'Precision Cast']
  },
  {
    id: 'galvanized-reticuline-lock',
    name: 'Galvanized Reticuline Grate with Mechanical Lock',
    category: 'locking-specialty',
    categoryLabel: 'Locking Specialty Grate',
    spec: 'Anti-Theft Mechanical Lock Matrix',
    material: 'Hot-Dip Galvanized Carbon Steel (ASTM A123)',
    dimensions: 'Custom Sizes / Standard Catch Basin Matrices',
    openArea: '78% Ultra-High Intake Matrix',
    loadRating: 'Heavy Commercial / Municipal Secure Zone',
    description: 'High-strength reticuline steel bar matrix hot-dip galvanized for extreme corrosion resistance. Features tamper-proof stainless mechanical lock fasteners to prevent unauthorized basin access or grate theft.',
    image: '/images/catch_basin_riser/galvanized_reticuline_grate_with_lock.png',
    badges: ['Galvanized Lock', 'Anti-Theft', '78% Open Matrix']
  },
  {
    id: 'sp-cover-plates',
    name: 'SP Solid & Slotted Catch Basin Cover Plates',
    category: 'locking-specialty',
    categoryLabel: 'Specialty Cover Plate',
    spec: 'Temporary & Permanent Controlled Drainage Plate',
    material: 'High-Strength Ductile / Carbon Steel Plate',
    dimensions: 'Standard SP Catch Basin Seat Dimensions',
    openArea: 'Controlled Flow / Solid Utility Seal',
    loadRating: 'Heavy Traffic Commercial Rating',
    description: 'Heavy ductile iron and steel catch basin replacement cover plates designed for temporary road paving transitions, sediment control during construction, and permanent utility enclosures.',
    image: '/images/catch_basin_riser/sp_catch_basin_plate_1.png',
    altImages: [
      '/images/catch_basin_riser/sp_catch_basin_plate_2.png'
    ],
    badges: ['SP Plates', 'Controlled Intake', 'Paving Transition']
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Grates & Risers' },
  { id: 'fabricated-steel', label: 'Fabricated Steel Grates' },
  { id: 'dot-vane', label: 'State DOT & Vane Grates' },
  { id: 'municipal', label: 'Municipal Assemblies' },
  { id: 'locking-specialty', label: 'Locking & Specialty Plates' },
];

export default function CatchBasinGratesPage() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<GrateProduct>(ALL_GRATE_PRODUCTS[0]);
  const [activeProductImage, setActiveProductImage] = useState<string>(ALL_GRATE_PRODUCTS[0].image);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  // Update active image when selected product changes
  useEffect(() => {
    setActiveProductImage(selectedProduct.image);
  }, [selectedProduct]);

  // Scroll observer for Hero section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveHeroIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll('.hero-scroll-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? ALL_GRATE_PRODUCTS
    : ALL_GRATE_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#CC0000] selection:text-white">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO PRESENTATION STAGE (STICKY LEFT + SCROLL RIGHT) */}
      {/* ========================================================= */}
      <div className="flex flex-col lg:flex-row border-b border-[#222]">
        
        {/* LEFT PANEL (STICKY) */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:sticky top-0 left-0 bg-[#050505] border-r border-[#222] flex flex-col justify-between overflow-hidden relative z-20 p-8 md:p-14">
          {/* Background Aesthetics */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(204,0,0,0.18)_0%,transparent_70%)] pointer-events-none blur-3xl" />

          {/* Header */}
          <div className="relative z-10 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111] border border-[#333] rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#CC0000] animate-pulse" />
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-300">
                Domestic Steel & Cast Iron Drainage
              </span>
            </div>
            <div className="h-1 w-12 bg-[#CC0000] mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-3">
              Catch Basin <br />
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>
                Steel Grates & Risers
              </span>
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 font-medium max-w-md">
              Fabricated steel grates, State DOT vane profiles, drop-in riser frames, and heavy municipal drainage matrices.
            </p>
          </div>

          {/* Dynamic Crossfading Text Block */}
          <div className="relative z-10 flex-grow flex flex-col justify-center min-h-[260px] my-6">
            {HERO_SECTIONS.map((section, idx) => {
              const isActive = activeHeroIndex === idx;
              const Icon = section.icon;
              
              return (
                <div 
                  key={section.id} 
                  className={cn(
                    "absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-12 pointer-events-none"
                  )}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-md bg-[#141414] border border-[#333] flex items-center justify-center text-[#CC0000]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#CC0000]">
                      System Profile {String(idx + 1).padStart(2, '0')} // {section.tag}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-1 text-white">
                    {section.title}
                  </h2>
                  <h3 className="text-sm md:text-lg font-bold text-zinc-400 uppercase tracking-widest mb-4">
                    {section.subtitle}
                  </h3>
                  
                  <p className="text-zinc-300 font-medium leading-relaxed max-w-md text-xs md:text-sm border-l-2 border-[#CC0000] pl-4">
                    {section.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-900">
            <Link
              href="/contact/quote"
              className="flex items-center justify-between px-6 py-3.5 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-[#CC0000] hover:text-white transition-all duration-300 shadow-xl group"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#full-catalog"
              className="px-6 py-3.5 bg-[#141414] text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-500 font-black uppercase tracking-widest text-xs transition-all duration-300 flex items-center gap-2"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#CC0000]" />
              <span>Explore All Grates</span>
            </a>
          </div>
        </div>

        {/* RIGHT PANEL (SCROLLING MEDIA SHOWCASE) */}
        <div className="w-full lg:w-1/2 flex flex-col relative z-10" ref={rightPanelRef}>
          {HERO_SECTIONS.map((section, idx) => (
            <div 
              key={section.id} 
              data-index={idx}
              className="hero-scroll-section w-full min-h-[70vh] lg:h-screen flex items-center justify-center p-6 md:p-12 border-b border-[#222]"
            >
              <div className="relative w-full max-w-2xl aspect-square group overflow-hidden bg-[#0d0d0d] border border-[#2a2a2a] flex items-center justify-center shadow-2xl hover:border-[#CC0000] hover:shadow-[0_0_50px_rgba(204,0,0,0.25)] transition-all duration-700">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                
                {section.isVideo ? (
                  <R2Video
                    src={section.media}
                    autoPlay 
                    loop 
                    muted 
                    playsInline  
                    className="relative z-10 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                ) : (
                  <Image
                    src={section.media}
                    alt={section.title}
                    fill
                    className="relative z-10 object-contain p-8 drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                )}

                <div className="absolute top-5 right-5 z-20 text-[10px] font-mono font-bold text-zinc-400 bg-black/80 px-2.5 py-1 border border-zinc-800 uppercase tracking-widest">
                  Featured {idx + 1} / {HERO_SECTIONS.length}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>


      {/* ========================================================= */}
      {/* SECTION 2: COMPLETE INTERACTIVE CATCH BASIN GRATES CATALOG */}
      {/* ========================================================= */}
      <section id="full-catalog" className="py-20 px-6 md:px-14 lg:px-20 border-b border-zinc-900 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-zinc-800">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#CC0000]">
                <Layers className="w-5 h-5" />
                <span className="text-xs font-mono font-black uppercase tracking-[0.25em]">
                  Catch Basin Grates & Risers Matrix
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                Complete Engineering Catalog
              </h2>
              <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-medium">
                Select any catch basin steel grate, vane profile, or riser below to view detailed dimensional specifications, material grades, and CAD submittals.
              </p>
            </div>

            {/* Total Count Badge */}
            <div className="bg-[#111] border border-zinc-800 px-5 py-3 rounded-xs flex items-center gap-3 shrink-0">
              <span className="w-3 h-3 rounded-full bg-[#CC0000] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                {ALL_GRATE_PRODUCTS.length} Models Indexed
              </span>
            </div>
          </div>

          {/* Category Filter Navigation */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#CC0000] text-white border-[#CC0000] shadow-[0_0_15px_rgba(204,0,0,0.4)]'
                      : 'bg-[#111] text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Dual Split Product Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: ACTIVE PRODUCT DEEP INSPECTION CARD (5 Columns) */}
            <div className="lg:col-span-5 bg-[#0a0a0a] border border-zinc-800 p-6 md:p-8 rounded-xs space-y-6 lg:sticky lg:top-8 shadow-2xl">
              
              {/* Image Display */}
              <div className="relative w-full aspect-square bg-[#111] border border-zinc-800 overflow-hidden flex items-center justify-center group">
                <Image
                  key={activeProductImage}
                  src={activeProductImage}
                  alt={selectedProduct.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/90 border border-zinc-800 px-2.5 py-1 text-[9px] font-mono font-black uppercase tracking-wider text-[#CC0000]">
                  {selectedProduct.categoryLabel}
                </div>
              </div>

              {/* Alternate View Switchers if available */}
              {selectedProduct.altImages && selectedProduct.altImages.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
                    Available Inspection Angles
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveProductImage(selectedProduct.image)}
                      className={`relative w-14 h-14 bg-zinc-900 border rounded-2xs overflow-hidden cursor-pointer ${
                        activeProductImage === selectedProduct.image ? 'border-[#CC0000]' : 'border-zinc-800 hover:border-zinc-600'
                      }`}
                    >
                      <Image src={selectedProduct.image} alt="Main" fill sizes="56px" className="object-contain p-1" />
                    </button>
                    {selectedProduct.altImages.map((altImg, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveProductImage(altImg)}
                        className={`relative w-14 h-14 bg-zinc-900 border rounded-2xs overflow-hidden cursor-pointer ${
                          activeProductImage === altImg ? 'border-[#CC0000]' : 'border-zinc-800 hover:border-zinc-600'
                        }`}
                      >
                        <Image src={altImg} alt={`Angle ${i+1}`} fill sizes="56px" className="object-contain p-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Info & Specs */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedProduct.badges.map((badge, idx) => (
                    <span key={idx} className="bg-zinc-900 text-zinc-300 border border-zinc-800 px-2.5 py-1 text-[10px] font-mono font-bold uppercase">
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Detailed Tech Matrix */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-900 text-xs font-mono">
                  <div className="bg-zinc-950 p-3 border border-zinc-900 space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase block">Material Alloy</span>
                    <span className="font-bold text-white block">{selectedProduct.material}</span>
                  </div>
                  <div className="bg-zinc-950 p-3 border border-zinc-900 space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase block">Dimensions</span>
                    <span className="font-bold text-white block">{selectedProduct.dimensions}</span>
                  </div>
                  <div className="bg-zinc-950 p-3 border border-zinc-900 space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase block">Open Intake</span>
                    <span className="font-bold text-[#CC0000] block">{selectedProduct.openArea}</span>
                  </div>
                  <div className="bg-zinc-950 p-3 border border-zinc-900 space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase block">Load Class</span>
                    <span className="font-bold text-white block">{selectedProduct.loadRating}</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Link href="/contact/quote" className="w-full">
                    <Button className="w-full bg-[#CC0000] hover:bg-white hover:text-black text-white font-black uppercase tracking-widest text-xs h-12 rounded-none transition-all">
                      Request Blueprint Quote
                    </Button>
                  </Link>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: INTERACTIVE PRODUCT GRID (7 Columns) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProducts.map((prod) => {
                const isSelected = selectedProduct.id === prod.id;
                return (
                  <div
                    key={prod.id}
                    onClick={() => {
                      setSelectedProduct(prod);
                      setActiveProductImage(prod.image);
                    }}
                    className={`bg-[#0d0d0d] border p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                      isSelected
                        ? 'border-[#CC0000] bg-[#141414] shadow-[0_0_20px_rgba(204,0,0,0.25)]'
                        : 'border-zinc-800 hover:border-zinc-600 hover:bg-[#111]'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Product Thumbnail Stage */}
                      <div className="relative w-full aspect-video bg-zinc-950 border border-zinc-900 overflow-hidden flex items-center justify-center">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 text-[8px] font-mono uppercase font-black tracking-wider text-zinc-400 border border-zinc-800">
                          {prod.categoryLabel}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="space-y-1.5">
                        <h4 className="text-base font-black uppercase tracking-tight text-white group-hover:text-[#CC0000] transition-colors leading-tight line-clamp-2">
                          {prod.name}
                        </h4>
                        <p className="text-[11px] font-mono text-zinc-400 line-clamp-1">
                          {prod.spec}
                        </p>
                      </div>
                    </div>

                    {/* Quick Specs Footer */}
                    <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-zinc-500 font-bold">{prod.dimensions}</span>
                      <span className={`font-black uppercase flex items-center gap-1 ${
                        isSelected ? 'text-[#CC0000]' : 'text-zinc-400 group-hover:text-white'
                      }`}>
                        {isSelected ? 'Inspecting' : 'View Specs'} <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* SECTION 3: ENGINEERING SPECIFICATIONS & FIELD MEASUREMENT GUIDE */}
      {/* ========================================================= */}
      <section className="py-20 px-6 md:px-14 lg:px-20 bg-[#080808] border-b border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
              <Ruler className="w-4 h-4 text-[#CC0000]" /> Precision Fitment Engineering
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
              Required Field Dimensional Parameters
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-3xl">
              To guarantee zero rocking and a flush asphalt transition, our domestic fabrication team manufactures each catch basin steel grate and paving riser to your exact field measurements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            <div className="bg-[#101010] border border-zinc-800 p-6 space-y-3">
              <div className="w-8 h-8 rounded-full bg-[#181818] border border-zinc-700 flex items-center justify-center text-[#CC0000] font-mono font-black text-xs">
                01
              </div>
              <h4 className="text-base font-black uppercase tracking-tight text-white">Grate Outer Dimensions</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Exact Length (L) and Width (W) of the existing grate to guarantee proper fitment into the extension seat.
              </p>
            </div>

            <div className="bg-[#101010] border border-zinc-800 p-6 space-y-3">
              <div className="w-8 h-8 rounded-full bg-[#181818] border border-zinc-700 flex items-center justify-center text-[#CC0000] font-mono font-black text-xs">
                02
              </div>
              <h4 className="text-base font-black uppercase tracking-tight text-white">Frame Clear ID</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Inside clear opening of the existing cast iron catch basin frame to ensure drop-in clearance without binding.
              </p>
            </div>

            <div className="bg-[#101010] border border-zinc-800 p-6 space-y-3">
              <div className="w-8 h-8 rounded-full bg-[#181818] border border-zinc-700 flex items-center justify-center text-[#CC0000] font-mono font-black text-xs">
                03
              </div>
              <h4 className="text-base font-black uppercase tracking-tight text-white">Grate Thickness & Lip</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Thickness of the grate outer perimeter and depth of the frame seating flange to ensure 100% flush bearing.
              </p>
            </div>

            <div className="bg-[#101010] border border-zinc-800 p-6 space-y-3">
              <div className="w-8 h-8 rounded-full bg-[#181818] border border-zinc-700 flex items-center justify-center text-[#CC0000] font-mono font-black text-xs">
                04
              </div>
              <h4 className="text-base font-black uppercase tracking-tight text-white">Target Overlay Rise</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Desired rise height starting from 3/4" up to 6"+ in precise 1/4" increments to match the new asphalt lift.
              </p>
            </div>

          </div>

          {/* Technical Specs Comparison Table */}
          <div className="border border-zinc-800 bg-[#0c0c0c] overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#141414] border-b border-zinc-800 text-zinc-400 uppercase tracking-widest text-[10px]">
                <tr>
                  <th className="p-4">Model / Profile</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Material Specification</th>
                  <th className="p-4">Typical Dimensions</th>
                  <th className="p-4">Hydraulic Intake</th>
                  <th className="p-4">Traffic Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                {ALL_GRATE_PRODUCTS.map((p) => (
                  <tr key={p.id} className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-white">{p.name}</td>
                    <td className="p-4 text-[#CC0000]">{p.categoryLabel}</td>
                    <td className="p-4 text-zinc-400">{p.material}</td>
                    <td className="p-4">{p.dimensions}</td>
                    <td className="p-4 font-bold text-white">{p.openArea}</td>
                    <td className="p-4">{p.loadRating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* SECTION 4: FAST FABRICATION QUOTE BANNER */}
      {/* ========================================================= */}
      <section className="py-20 px-6 md:px-14 lg:px-20 bg-gradient-to-b from-[#080808] to-black">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#111] via-[#141414] to-[#111] border border-zinc-800 p-8 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#CC0000]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-black uppercase tracking-[0.25em] text-[#CC0000] block">
                Custom Blueprint Estimator
              </span>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Need Custom Sized Catch Basin Steel Grates?
              </h3>
              <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed">
                Send us your project drawings, municipal specifications, or field dimensions. Our engineering team prepares rapid quotes and domestic submittal packages.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <Link href="/contact/quote" className="w-full sm:w-auto">
                <Button className="w-full bg-[#CC0000] hover:bg-white hover:text-black text-white font-black uppercase tracking-widest text-xs h-14 px-8 rounded-none transition-all shadow-xl">
                  Request Custom Quote
                </Button>
              </Link>
              <Link href="/contact/specifications" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full bg-[#1a1a1a] border-zinc-700 text-white hover:bg-white hover:text-black font-black uppercase tracking-widest text-xs h-14 px-8 rounded-none transition-all">
                  Submit CAD Drawings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
