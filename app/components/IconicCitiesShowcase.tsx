'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  MapPin,
  ShieldCheck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Zap,
  CheckCircle2,
  FileText,
  Activity,
  Film,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface CitySpec {
  id: string;
  name: string;
  state: string;
  country: 'USA' | 'Canada';
  region: 'East Coast' | 'West Coast' | 'Midwest & Central' | 'Canada' | 'South';
  tagline: string;
  dotSpec: string;
  primaryRiser: string;
  riserCategory: string;
  productImage: string;
  videoUrl: string;
  description: string;
  challenges: string;
  keyFeatures: { title: string; desc: string }[];
  stats: { label: string; value: string }[];
}

const R2 = process.env.NEXT_PUBLIC_R2_BUCKET_URL;

const ICONIC_CITIES: CitySpec[] = [
  {
    id: 'new-york',
    name: 'New York',
    state: 'NY, USA',
    country: 'USA',
    region: 'East Coast',
    tagline: 'High-Density Arterial Overlays & Severe Snowplow Resilience',
    dotSpec: 'NYC DOT & NYC DEP Compliant',
    primaryRiser: 'Heavy-Duty Adjustable Manhole Riser (ASTM A48 Class 35B)',
    riserCategory: 'Manhole & Utility Risers',
    productImage: '/images/manhole_riser/adjustable_manhole_riser_coated.png',
    videoUrl: `${R2}/videos/manhole_riser/adjustable_manhole_riser_with_frame.mp4`,
    description: 'Engineered for NYC’s demanding 24/7 arterial traffic and dense subterranean steam, gas, and electrical utility vaults. Designed to seat flush into milled surfaces without frame excavation, surviving severe winter snowplow shearing forces.',
    challenges: 'Heavy axle bus corridors, dense subway grating proximity, sub-zero freeze-thaw cycles, aggressive road salting.',
    keyFeatures: [
      { title: 'Heavy-Duty Proof-Load Tested', desc: 'Tested to exceed 40,000 lbs proof-load for nonstop city bus and freight traffic.' },
      { title: 'Zero Excavation Quick-Seat', desc: 'Engineered for rapid grade elevation to minimize lane closures on Broadway & 5th Ave.' },
      { title: 'Anti-Shear Lock Geometry', desc: 'Patented exterior mechanical expansion locks the ring against the existing cast iron frame.' }
    ],
    stats: [
      { label: 'Standard Diameters', value: '24", 27", 30", 36"' },
      { label: 'Elevation Range', value: '3/4" to 6"' },
      { label: 'Seating Method', value: 'Direct Drop-In' }
    ]
  },
  {
    id: 'boston',
    name: 'Boston',
    state: 'MA, USA',
    country: 'USA',
    region: 'East Coast',
    tagline: 'Historic Cobblestone-to-Asphalt Transitions & Coastal Freeze-Thaw',
    dotSpec: 'MassDOT & BWSC (Boston Water & Sewer) Specs',
    primaryRiser: 'Precision Tapered Sloped Riser & Round Cast Iron Rings',
    riserCategory: 'Tapered & Crown Matching Risers',
    productImage: '/images/manhole_riser/round_manhole_riser_with_screws_iron_finish.png',
    videoUrl: `${R2}/videos/manhole_riser/fixed_manhole_riser_installation.mp4`,
    description: 'Tailored for Boston’s variable street geometry, tight historic road crowns, and demanding New England winters. Custom sloped angle risers ensure manholes stay flush with high crown crowns and curved granite curb lines.',
    challenges: 'Historic cobblestone substructures, extreme winter freeze-thaw cycles, corrosive ocean salt spray, tight historic easements.',
    keyFeatures: [
      { title: 'Crown-Matching Sloped Profiles', desc: 'Custom 0.5° to 4° slope angles eliminate dangerous tire bumps and plow catches on historic avenues.' },
      { title: 'Heavy Bituminous Factory Coating', desc: 'Double-dipped asphaltic enamel protects iron from aggressive winter calcium chloride deicing.' },
      { title: 'BWSC Valve & Manhole Precision Fit', desc: 'Drop-in seating engineered for Massachusetts water and sewer utility standard frames.' }
    ],
    stats: [
      { label: 'Taper Angle Range', value: '0.5° – 4.0°' },
      { label: 'Material Standard', value: 'ASTM A48 / Gray Iron' },
      { label: 'Corrosion Shield', value: 'Class 30 Bituminous' }
    ]
  },
  {
    id: 'los-angeles',
    name: 'Los Angeles',
    state: 'CA, USA',
    country: 'USA',
    region: 'West Coast',
    tagline: 'High-Heat Thermal Expansion & Heavy Boulevard Traffic Resilience',
    dotSpec: 'Caltrans District 7 & LACDPW Approved',
    primaryRiser: 'Ductile Iron & Fabricated Steel Heavy-Duty Riser',
    riserCategory: 'Heavy Freeway & Boulevard Grade',
    productImage: '/images/manhole_riser/fixed_round_manhole_riser_coated.png',
    videoUrl: `${R2}/videos/manhole_riser/fixed_manhole_riser_steel.mp4`,
    description: 'Engineered for Southern California’s intense surface pavement temperatures and continuous heavy multi-axle freight routes. Built with high ductility iron to absorb continuous seismic vibrations and thermal pavement expansion without cracking.',
    challenges: 'Pavement surface temps exceeding 140°F, high-volume container freight corridors, strict Caltrans nighttime resurfacing windows.',
    keyFeatures: [
      { title: 'High-Ductility Shock Absorption', desc: 'ASTM A536 ductile iron absorbs dynamic wheel impacts without metal fatigue.' },
      { title: 'Thermal Expansion Tolerant', desc: 'Specially engineered internal lip clearance prevents lid binding during extreme summer heatwaves.' },
      { title: 'Caltrans Standard Plan Ready', desc: 'Exact dimensions matching California DOT standard utility casting drawings.' }
    ],
    stats: [
      { label: 'Proof Load', value: '50,000+ LBS' },
      { label: 'Material Grade', value: 'ASTM A536 65-45-12' },
      { label: 'Paving Cycle', value: 'Optimized Flow' }
    ]
  },
  {
    id: 'chicago',
    name: 'Chicago',
    state: 'IL, USA',
    country: 'USA',
    region: 'Midwest & Central',
    tagline: 'Multi-Level Roadway Networks & Heavy Winter Road Salt Defense',
    dotSpec: 'CDOT & MWRD (Metropolitan Water Reclamation) Standards',
    primaryRiser: 'Bituminous Coated Square Catch Basin & Heavy Manhole Risers',
    riserCategory: 'Catch Basin & Utility Risers',
    productImage: '/images/catch_basin_riser/square_catch_basin_riser_coated.png',
    videoUrl: `${R2}/videos/catch_basin_riser/catch_basin_riser_animation.mp4`,
    description: 'Built to withstand the Windy City’s multi-level viaduct configurations, intense freeze-thaw cycles, and heavy industrial snow clearing. Provides watertight seated alignment for both circular manholes and large square catch basin frames.',
    challenges: 'Sub-zero polar vortex temps, multi-tiered road drainage (Wacker Dr networks), continuous snowplow scraping.',
    keyFeatures: [
      { title: 'Square & Rectangular Grate Seating', desc: 'Engineered square riser frames for heavy Chicago alley and street catch basins.' },
      { title: 'Reinforced Top Bearing Flange', desc: 'Extra wide casting perimeter distributes concentrated wheel impact loads directly into the masonry cone.' },
      { title: 'MWRD Sanitary Sewer Inflow Seal', desc: 'Precision machined tolerance prevents surface rainwater inflow into municipal sanitary mains.' }
    ],
    stats: [
      { label: 'Catch Basin Sizes', value: '24" to 36" Square' },
      { label: 'Salt Defense', value: 'Bituminous Barrier' },
      { label: 'Load Rating', value: 'Heavy Duty 40,000+ LBS' }
    ]
  },
  {
    id: 'toronto',
    name: 'Toronto',
    state: 'ON, Canada',
    country: 'Canada',
    region: 'Canada',
    tagline: 'Canadian Freeze-Thaw Extremes & High-Density Transit Corridors',
    dotSpec: 'OPSD (Ontario Provincial Standard) & City of Toronto Compliant',
    primaryRiser: 'Heavy Cast Iron OPSD 401/402 Compatible Risers',
    riserCategory: 'OPSD Standard Municipal Risers',
    productImage: '/images/manhole_riser/adjustable_manhole_riser_low_screw_coated.png',
    videoUrl: `${R2}/videos/manhole_riser/adjustable_manhole_riser_steel.mp4`,
    description: 'Engineered to Canadian OPSD specifications to endure Ontario’s dramatic seasonal temperature swings (-30°C to +35°C). Tested on heavy TTC transit routes with continuous bus and streetcar adjacent wheel loads.',
    challenges: 'Rapid seasonal freeze-thaw cycles, high-frequency TTC bus routes, heavy provincial highway salt treatment.',
    keyFeatures: [
      { title: 'OPSD Standard Compliant', desc: 'Direct drop-in compatibility with OPSD 401.010, 401.030, and 402 series municipal frames.' },
      { title: 'Thermal Fracture Resistant', desc: 'Class 35B high-tensile gray iron casting formulation prevents cold-weather brittle cracking.' },
      { title: 'Smooth Asphalt Tie-In', desc: 'Zero-trip hazard edge profile delivers seamless roller compaction for highway resurfacing crews.' }
    ],
    stats: [
      { label: 'Cold Rating', value: 'Down to -40°C' },
      { label: 'Spec Standards', value: 'OPSD & CSA B70' },
      { label: 'Target Transit', value: 'TTC & City Routes' }
    ]
  },
  {
    id: 'houston',
    name: 'Houston',
    state: 'TX, USA',
    country: 'USA',
    region: 'South',
    tagline: 'High-Capacity Tropical Storm Runoff & Heavy Industrial Freight',
    dotSpec: 'TxDOT & City of Houston Public Works Standards',
    primaryRiser: 'Fabricated Steel Grates & High-Inflow Catch Basin Risers',
    riserCategory: 'Stormwater Inflow & Drainage',
    productImage: '/images/curb_inlet_riser/curb_inlet_riser_coated_2.png',
    videoUrl: `${R2}/videos/curb_inlet_riser/curb_inlet_overview.mp4`,
    description: 'Designed for the Gulf Coast’s intense rainfall events, hurricane drainage demands, and expansive clay subsoils. Delivers maximum stormwater hydraulic intake while supporting heavy oilfield and port freight trucking.',
    challenges: 'Sudden high-velocity tropical downpours, subsidence and soil shifts, petrochemical corridor axle loads.',
    keyFeatures: [
      { title: 'High Hydraulic Capacity Grate Risers', desc: 'Engineered open-area grate bar geometry prevents localized street ponding during flash floods.' },
      { title: 'Heavy-Duty Fabricated Curb Inlets', desc: 'Elevates low-profile curb and gutter intake boxes without reconstructing concrete headwalls.' },
      { title: 'TxDOT Item 471 & 479 Compliant', desc: 'Standard submittal certifications pre-approved for Texas state and municipal contracts.' }
    ],
    stats: [
      { label: 'Hydraulic Inflow', value: 'High-Flow Openings' },
      { label: 'Max Freight Load', value: '60,000+ LBS Proof' },
      { label: 'Soil Shift Buffer', value: 'Flexible Seating' }
    ]
  },
  {
    id: 'vancouver',
    name: 'Vancouver',
    state: 'BC, Canada',
    country: 'Canada',
    region: 'Canada',
    tagline: 'Pacific Northwest Rainfall Drainage & Seismic Grade Adjustments',
    dotSpec: 'BC MoTI & MMCD (Master Municipal Construction Documents)',
    primaryRiser: 'High-Tensile Curb Inlet & Round Manhole Paving Extensions',
    riserCategory: 'Pacific Maritime Inflow Systems',
    productImage: '/images/trash_racks/trash_rack_type_1.png',
    videoUrl: `${R2}/videos/custom_riser/d_shape_custom_riser_animation.mp4`,
    description: 'Engineered for coastal British Columbia’s continuous rainfall, mountain runoff, and stringent environmental drainage codes. Incorporates heavy galvanization and debris rack compatibility for retention culverts and roadway catch basins.',
    challenges: 'Continuous precipitation, steep coastal hillside grade angles, seismic zone 4 building tolerances.',
    keyFeatures: [
      { title: 'MMCD Compliant Castings', desc: 'Matches British Columbia Master Municipal Construction Document standard drawing details.' },
      { title: 'Debris Matrix & Trash Rack Ready', desc: 'Integrates seamlessly with sediment and branch screens to protect municipal salmon habitats.' },
      { title: 'All-Weather Galvanized Options', desc: 'Hot-dip galvanized and epoxy-coated finishes for maximum life in humid coastal rainforest environments.' }
    ],
    stats: [
      { label: 'Rainfall Rating', value: 'Pacific Coast Spec' },
      { label: 'Standards', value: 'MMCD & BC MoTI' },
      { label: 'Coating Life', value: 'Maritime Protection' }
    ]
  },
  {
    id: 'san-diego',
    name: 'San Diego',
    state: 'CA, USA',
    country: 'USA',
    region: 'West Coast',
    tagline: 'Coastal Salt Air Corrosion Defense & Rapid Municipal Resurfacing',
    dotSpec: 'Caltrans District 11 & City of San Diego Standard Drawings',
    primaryRiser: 'Precision Mechanical Adjustable Round & Water Valve Risers',
    riserCategory: 'Water Valve & Municipal Risers',
    productImage: '/images/valve_box_riser/valve_box_riser_1_5in.jpeg',
    videoUrl: `${R2}/videos/valve_box_riser/full_valve_box_riser_design_1.mp4`,
    description: 'Designed for San Diego’s major municipal overlay campaigns, military logistics routes, and coastal marine environments. Enables water district crews and paving contractors to rapidly bring valves and manholes to grade efficiently.',
    challenges: 'Salt air marine corrosion, rapid nighttime construction windows, multi-jurisdictional water authority standards.',
    keyFeatures: [
      { title: 'Drop-In Valve Box Extensions', desc: 'Precision 1", 1.5", 2", 3", 4", and 6" height increments for rapid water meter and gas valve adjustments.' },
      { title: 'Corrosion-Resistant Cast Iron', desc: 'Naturally self-passivating gray iron metallurgy resists coastal atmospheric humidity and salt spray.' },
      { title: 'San Diego Regional Standard Drawings', desc: 'Pre-certified for SDRSD M-01, M-02, and G-series municipal pavement restoration details.' }
    ],
    stats: [
      { label: 'Valve Riser Sizes', value: '1" to 6" Heights' },
      { label: 'Regional Spec', value: 'SDRSD Approved' },
      { label: 'Paving Yield', value: 'Optimized Seating' }
    ]
  },
  {
    id: 'san-francisco',
    name: 'San Francisco',
    state: 'CA, USA',
    country: 'USA',
    region: 'West Coast',
    tagline: 'Extreme Steep Hill Slopes, Cable Car Grids & Seismic Adjustments',
    dotSpec: 'SFMTA & SFPW (San Francisco Public Works) Standards',
    primaryRiser: 'Custom Tapered Sloped Riser Ring & D-Shape Utility Risers',
    riserCategory: 'High-Slope & Specialty Utility Risers',
    productImage: '/images/custom_riser/d_shape_paving_riser.png',
    videoUrl: `${R2}/videos/animations/paving_riser_with_frame_anim_1.mp4`,
    description: 'Built specifically to overcome San Francisco’s iconic steep street grades (up to 31.5% slope), cable car track utility clearances, and active seismic fault zones. Custom sloped risers keep lids horizontal with roadway crowns.',
    challenges: 'Extreme street inclines (Nob Hill, Russian Hill, Pacific Heights), cable car trackway utility clearance, seismic soil liquefaction.',
    keyFeatures: [
      { title: 'Steep Pitch Tapered Rings', desc: 'Engineered bevels accommodate extreme roadway slope angles without requiring concrete collar excavation.' },
      { title: 'D-Shape & Specialty Geometry', desc: 'Custom radius castings fit tight clearances adjacent to transit tracks and curb extensions.' },
      { title: 'SFPW Pavement Restoration Ready', desc: 'Ensures asphalt transitions meet San Francisco strict ADA pedestrian crosswalk cross-slope tolerances.' }
    ],
    stats: [
      { label: 'Max Slope Pitch', value: 'Custom to 15°+' },
      { label: 'Geometry Types', value: 'Round, D-Shape, Custom' },
      { label: 'Agency Code', value: 'SFPW & SFMTA' }
    ]
  },
  {
    id: 'miami',
    name: 'Miami',
    state: 'FL, USA',
    country: 'USA',
    region: 'East Coast',
    tagline: 'High Groundwater Salinity, Storm Surge & Tropical Flood Ingress',
    dotSpec: 'FDOT District 6 & Miami-Dade DERM Environmental Standards',
    primaryRiser: 'Heavy Bituminous Coated Catch Basin & Inflow Preventer Risers',
    riserCategory: 'Coastal Drainage & Valve Box Risers',
    productImage: '/images/catch_basin_riser/rectangle_catch_basin_riser_coated.png',
    videoUrl: `${R2}/videos/catch_basin_riser/two_grate_catch_basin_riser_animation.mp4`,
    description: 'Engineered for South Florida’s high water table, tidal king-tide flooding, and intense subtropical sunshine. Features multi-layer asphaltic coatings to resist brackish groundwater intrusion and keep street runoff flowing smoothly.',
    challenges: 'Porous limestone sub-base, shallow groundwater table, salt water tidal backflow, hurricane wind-driven rain.',
    keyFeatures: [
      { title: 'Saltwater Barrier Bituminous Coating', desc: 'Thick barrier seal withstands high groundwater salinity and coastal flooding exposure.' },
      { title: 'FDOT Index 425 & 426 Compliant', desc: 'Meets Florida Department of Transportation standards for drainage structures and pavement risers.' },
      { title: 'Miami-Dade Environmental Fit', desc: 'Precision dimensional tolerances minimize storm sediment inflow into protected Biscayne Bay aquifers.' }
    ],
    stats: [
      { label: 'Water Table Spec', value: 'Groundwater Barrier' },
      { label: 'State DOT Index', value: 'FDOT 425 Series' },
      { label: 'Storm Resistance', value: 'Hurricane Grade' }
    ]
  }
];

const REGIONS = ['All Cities', 'East Coast', 'West Coast', 'Midwest & Central', 'Canada', 'South'] as const;

export default function IconicCitiesShowcase() {
  const [selectedCityId, setSelectedCityId] = useState<string>('new-york');
  const [activeRegion, setActiveRegion] = useState<string>('All Cities');
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [mediaMode, setMediaMode] = useState<'video' | 'image'>('video');
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const filteredCities = activeRegion === 'All Cities'
    ? ICONIC_CITIES
    : ICONIC_CITIES.filter((c) => c.region === activeRegion);

  const currentCity = ICONIC_CITIES.find((c) => c.id === selectedCityId) || ICONIC_CITIES[0];
  const currentIndex = filteredCities.findIndex((c) => c.id === selectedCityId);

  // Auto-play loop every 6 seconds if not paused
  useEffect(() => {
    if (!isAutoPlay) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setSelectedCityId((prevId) => {
        const idx = filteredCities.findIndex((c) => c.id === prevId);
        const nextIdx = (idx + 1) % filteredCities.length;
        return filteredCities[nextIdx].id;
      });
    }, 6000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlay, filteredCities]);

  const handleRegionChange = (region: string) => {
    setActiveRegion(region);
    const newFiltered = region === 'All Cities'
      ? ICONIC_CITIES
      : ICONIC_CITIES.filter((c) => c.region === region);
    if (newFiltered.length > 0 && !newFiltered.some((c) => c.id === selectedCityId)) {
      setSelectedCityId(newFiltered[0].id);
    }
  };

  const handlePrev = () => {
    const newIdx = (currentIndex - 1 + filteredCities.length) % filteredCities.length;
    setSelectedCityId(filteredCities[newIdx].id);
  };

  const handleNext = () => {
    const newIdx = (currentIndex + 1) % filteredCities.length;
    setSelectedCityId(filteredCities[newIdx].id);
  };

  return (
    <section
      id="iconic-cities"
      className="py-24 relative bg-[#09090B] text-white overflow-hidden border-t border-b border-white/10"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Background Ambience & City Grid Blueprint Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '32px 32px, 64px 64px, 64px 64px'
        }}
      />
      
      {/* Signature Red Ambient Radial Lighting */}
      <div className="absolute top-0 left-1/4 w-[650px] h-[450px] bg-[#CC0000]/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-10 w-[550px] h-[380px] bg-[#CC0000]/10 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="w-full px-10 md:px-20 relative z-10">

        {/* --- HEADER SECTION (BLACK, WHITE & RED) --- */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner">
            <Building2 className="w-4 h-4 text-[#CC0000]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
              Metropolitan & Municipal Specifications
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight text-white">
            Paving Risers For <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#CC0000]">
              North America's Iconic Cities
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            From dense subway networks and sub-zero freeze-thaw cycles to steep hill grades and coastal salt air, our paving risers are engineered to meet exact municipal standards across major metropolitan regions.
          </p>
        </div>

        {/* --- REGIONAL FILTER TABS --- */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {REGIONS.map((region) => {
            const isActive = activeRegion === region;
            return (
              <button
                key={region}
                onClick={() => handleRegionChange(region)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#CC0000] text-white shadow-[0_0_15px_rgba(204,0,0,0.4)] border border-red-500 font-black'
                    : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                {region}
              </button>
            );
          })}
        </div>

        {/* --- CITY PILLS CAROUSEL SELECTOR --- */}
        <div className="relative mb-10">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-zinc-700 no-scrollbar snap-x">
            {filteredCities.map((city) => {
              const isSelected = city.id === currentCity.id;
              return (
                <button
                  key={city.id}
                  onClick={() => setSelectedCityId(city.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 border cursor-pointer snap-start ${
                    isSelected
                      ? 'bg-gradient-to-r from-zinc-900 to-zinc-950 text-white border-[#CC0000] shadow-[0_0_20px_rgba(204,0,0,0.35)] scale-105 ring-1 ring-[#CC0000]/60'
                      : 'bg-zinc-900/70 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border-white/10'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#CC0000] animate-pulse shadow-[0_0_8px_rgba(204,0,0,0.8)]' : 'bg-zinc-600'}`} />
                  <span className="font-sans font-black tracking-wide text-sm">{city.name}</span>
                  <span className="text-[10px] font-mono text-zinc-500">{city.state}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- MAIN CITY SPOTLIGHT SLIDE CARD (WITH HD VIDEO & PHOTO TOGGLES) --- */}
        <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900/95 via-zinc-900/90 to-zinc-950 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top City Status Header */}
          <div className="px-6 sm:px-8 py-4 bg-zinc-950/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#CC0000]/20 border border-[#CC0000]/40 flex items-center justify-center text-[#CC0000]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                    {currentCity.name}
                  </h3>
                  <span className="text-xs font-mono font-bold text-zinc-400 px-2 py-0.5 rounded bg-zinc-800 border border-white/10">
                    {currentCity.state}
                  </span>
                </div>
              </div>
            </div>

            {/* DOT & Standard Compliance Badge */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                {currentCity.dotSpec}
              </span>

              {/* Slider Next / Prev Controls */}
              <div className="flex items-center gap-1.5 ml-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-lg bg-zinc-800/90 hover:bg-[#CC0000] text-zinc-300 hover:text-white transition-colors border border-white/10 cursor-pointer"
                  aria-label="Previous city"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg bg-zinc-800/90 hover:bg-[#CC0000] text-zinc-300 hover:text-white transition-colors border border-white/10 cursor-pointer"
                  aria-label="Next city"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Slide Content Grid: Details Left, Visual Stage Right */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* LEFT: Engineering Specifications & Story (7 Columns) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Tagline & Description */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#CC0000] uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 text-[#CC0000]" />
                  {currentCity.tagline}
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight uppercase">
                  {currentCity.primaryRiser}
                </h4>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {currentCity.description}
                </p>
              </div>

              {/* Local Municipality Challenges */}
              <div className="p-4 rounded-xl bg-white text-slate-900 border-l-4 border-l-[#CC0000] border border-slate-200 shadow-lg space-y-1.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#CC0000] flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  Key Municipal Field Challenges:
                </span>
                <p className="text-xs text-slate-800 font-semibold leading-relaxed">
                  {currentCity.challenges}
                </p>
              </div>

              {/* 3 Key Engineering Features */}
              <div className="space-y-3 pt-2">
                {currentCity.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                    <div className="mt-0.5 w-5 h-5 rounded-md bg-[#CC0000]/20 text-[#CC0000] flex items-center justify-center shrink-0 border border-[#CC0000]/40">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white uppercase tracking-wide">
                        {feat.title}
                      </h5>
                      <p className="text-xs text-zinc-400 leading-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3 City Quick Metric Badges (White BG Cards) */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {currentCity.stats.map((stat, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white text-slate-900 border border-slate-200 shadow-md text-center hover:border-[#CC0000] transition-colors">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-tight block">
                      {stat.label}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-slate-950 tracking-tight mt-0.5 block">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link href={`/contact/specifications?city=${encodeURIComponent(currentCity.name)}`}>
                  <Button className="h-12 px-6 bg-[#CC0000] hover:bg-white hover:text-black text-white font-black uppercase text-xs tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(204,0,0,0.3)] rounded-lg">
                    Request {currentCity.name} Submittal Sheet
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <Link href="/products">
                  <Button variant="outline" className="h-12 px-5 border-[#CC0000]/30 hover:border-[#CC0000] text-[#CC0000] hover:text-white hover:bg-[#CC0000] text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-all duration-200">
                    <FileText className="w-3.5 h-3.5 mr-2" />
                    View Technical Drawings
                  </Button>
                </Link>
              </div>

            </div>

            {/* RIGHT: Video & Image Showcase Stage (5 Columns) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-b from-zinc-950 to-[#121214] border border-white/10 p-6 flex flex-col justify-between overflow-hidden group shadow-2xl">
                
                {/* Visual Glow Spotlight */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#CC0000]/20 rounded-full blur-[80px] pointer-events-none" />

                {/* Media Selector Top Bar: Video / Photo Toggle */}
                <div className="flex items-center justify-between mb-4 z-10">
                  <span className="text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded bg-[#CC0000]/15 text-[#CC0000] border border-[#CC0000]/30">
                    {currentCity.riserCategory}
                  </span>

                  {/* Mode Switch Pills */}
                  <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-white/10">
                    <button
                      onClick={() => setMediaMode('video')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        mediaMode === 'video'
                          ? 'bg-[#CC0000] text-white font-black shadow-md'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Film className="w-3 h-3" />
                      HD Video
                    </button>
                    <button
                      onClick={() => setMediaMode('image')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        mediaMode === 'image'
                          ? 'bg-[#CC0000] text-white font-black shadow-md'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Eye className="w-3 h-3" />
                      Photo
                    </button>
                  </div>
                </div>

                {/* Display Screen: Video or Image */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black border border-white/10 my-2 flex items-center justify-center">
                  {mediaMode === 'video' ? (
                    <div className="relative w-full h-full">
                      <video
                        key={`${currentCity.id}-video`}
                        src={currentCity.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        suppressHydrationWarning
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 text-white border border-white/20 text-[9px] font-mono uppercase tracking-widest backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#CC0000] animate-pulse" />
                        {currentCity.name} Municipal Spec
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-b from-white via-slate-50 to-slate-100">
                      <div 
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                          backgroundSize: '16px 16px'
                        }}
                      />
                      <Image
                        key={`${currentCity.id}-img`}
                        src={currentCity.productImage}
                        alt={`${currentCity.name} - ${currentCity.primaryRiser}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-contain p-4 drop-shadow-[0_20px_25px_rgba(0,0,0,0.45)] group-hover:scale-105 transition-transform duration-500 relative z-10"
                      />
                      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 text-white text-[9px] font-mono uppercase tracking-widest shadow-md">
                        <span className="w-2 h-2 rounded-full bg-[#CC0000]" />
                        {currentCity.name} Product Spec
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Spec Footer Summary (White BG Card Style) */}
                <div className="p-3.5 rounded-xl bg-white text-slate-900 border border-slate-200 shadow-md space-y-1 z-10 mt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-900 uppercase tracking-wide">
                      {currentCity.name} Standard Match
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Pre-Approved
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-600 font-mono">
                    DOT Standard: <span className="text-slate-950 font-black">{currentCity.dotSpec}</span>
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Loop Step Progress Bar */}
          <div className="px-6 sm:px-8 py-3 bg-zinc-950/90 border-t border-white/5 flex items-center justify-between">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              City {currentIndex + 1} of {filteredCities.length} • Auto-rotating ({isAutoPlay ? 'Active' : 'Paused on Hover'})
            </span>

            {/* Micro Dot Progress */}
            <div className="flex items-center gap-1.5">
              {filteredCities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setSelectedCityId(city.id)}
                  aria-label={`Jump to ${city.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    city.id === currentCity.id
                      ? 'w-6 bg-[#CC0000]'
                      : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* --- ALL 10 CITIES GRID OVERVIEW CARDS --- */}
        <div className="mt-14 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-[#CC0000]" />
              Quick Select Any Metropolitan Market
            </h4>
            <span className="text-[11px] font-mono text-zinc-500">
              10 North American Cities Supported
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {ICONIC_CITIES.map((city) => {
              const isSelected = city.id === currentCity.id;
              return (
                <button
                  key={city.id}
                  onClick={() => setSelectedCityId(city.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-2 group ${
                    isSelected
                      ? 'bg-white text-slate-950 border-2 border-[#CC0000] shadow-[0_0_20px_rgba(204,0,0,0.35)] scale-[1.02]'
                      : 'bg-zinc-950/70 border-white/5 hover:border-white/20 hover:bg-zinc-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-black transition-colors ${isSelected ? 'text-slate-950' : 'text-white group-hover:text-[#CC0000]'}`}>
                      {city.name}
                    </span>
                    <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#CC0000] bg-red-50 px-1.5 py-0.5 rounded' : 'text-zinc-500'}`}>
                      {city.state.split(',')[0]}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono line-clamp-1 ${isSelected ? 'text-slate-700 font-semibold' : 'text-zinc-400'}`}>
                    {city.dotSpec}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
