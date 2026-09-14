'use client';
import React, { useState, Suspense, useMemo } from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, Html } from '@react-three/drei';
import {
  Rotate3d,
  ChevronRight,
  Layers,
  Loader2,
  Box
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductModel {
  id: number;
  title: string;
  description: string;
  type: string;
  glbPath: string;
  thumbnail: string;
}

const PRODUCT_MODELS: ProductModel[] = [
  {
    id: 1,
    title: "Round Riser – Coated Finish",
    description: "Factory-applied corrosion-resistant coating protects against moisture, road salt, and chemical exposure in underground installations.",
    type: "ROUND",
    glbPath: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/glbs/PR_manhole_round_riser_black_coated_.glb`,
    thumbnail: `/images/manhole_riser/adjustable_manhole_riser_coated.png`
  },
  {
    id: 2,
    title: "Round Riser with Screw",
    description: "Built-in heavy-duty set screws allow field crews to fine-tune vertical height and level alignment without shims or wedges.",
    type: "ROUND_WITH_SCREW",
    glbPath: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/glbs/PR_manhole_round_adjustbable_riser_screw_black_coated_.glb`,
    thumbnail: `/images/manhole_riser/round_manhole_riser_with_screws_iron_finish.png`
  },
  {
    id: 3,
    title: "Round Riser Low Screw",
    description: "Low-profile adjustable screw configuration for tight clearances and precise grade matching in shallow utility trenches.",
    type: "ROUND_LOW_SCREW",
    glbPath: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/glbs/PR_manhole_round_adjustbable_riser_low_screw_black_coated_.glb`,
    thumbnail: `/images/manhole_riser/fixed_round_manhole_riser_coated.png`
  },
  {
    id: 4,
    title: "Square Riser – Catch Basin",
    description: "Heavy-duty square perimeter framework constructed to lift flat drainage grates and catch basin lids to final highway grade.",
    type: "SQUARE",
    glbPath: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/glbs/PR_catch_basin_square_riser_black_coated_.glb`,
    thumbnail: `/images/catch_basin_riser/square_catch_basin_riser_coated.png`
  },
  {
    id: 5,
    title: "Rectangle Riser – Catch Basin",
    description: "Elongated rectangular form factor designed specifically for oblong utility vault openings and trench-style drainage inlets.",
    type: "RECTANGLE",
    glbPath: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/glbs/PR_catch_basin_rectangle_riser_black_coated_.glb`,
    thumbnail: `/images/catch_basin_riser/rectangle_catch_basin_riser_coated.png`
  },
  {
    id: 6,
    title: "Curb Inlet Riser",
    description: "Engineered specifically for curb-side stormwater inlets, providing a seamless structural transition to adjacent paving.",
    type: "CURB_INLET",
    glbPath: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/glbs/PR_Curb_inlet_rectangle_riser_black_coated.glb`,
    thumbnail: `/images/curb_inlet_riser/curb_inlet_riser_heavy_iron.png`
  },
  {
    id: 7,
    title: "D-Shape Paving Riser",
    description: "Straight-back vertical mounting edge optimized to align flush against poured concrete municipal curb lines.",
    type: "D_SHAPE",
    glbPath: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/glbs/D_shape_paving_riser.glb`,
    thumbnail: `/images/custom_riser/d_shape_riser_steel.png`
  }
];

// ── GLB Model Renderer ──
function ModelViewer({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

// ── Canvas Loading Indicator ──
function CanvasLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-black/90 border border-zinc-800 p-6 rounded-md text-center space-y-3 shadow-2xl backdrop-blur-md w-56">
        <Loader2 className="w-8 h-8 text-[#CC0000] animate-spin" />
        <p className="text-[10px] uppercase font-black tracking-widest text-white">Loading 3D Model...</p>
        <p className="text-[9px] text-gray-500 font-medium">Streaming geometry data</p>
      </div>
    </Html>
  );
}

export default function Product3DShowcase() {
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const activeModel = PRODUCT_MODELS[activeModelIndex];

  return (
    <section className="bg-zinc-950 text-white py-4 border-t border-zinc-900">
      <div className="w-full px-10 md:px-20">

        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
              <Rotate3d className="w-4 h-4 text-[#CC0000]" /> Interactive 3D Hardware
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
              Engineered Infrastructure <span className="text-[#CC0000]">Models.</span>
            </h2>
          </div>
        </div>

        {/* --- MAIN AREA COMPACT SYNERGY CONTAINER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* LEFT: 3D Canvas Viewport */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-[#e5e5e5] rounded-lg border border-zinc-800 shadow-2xl overflow-hidden group">

              {/* Model ID Badge */}
              <div className="absolute top-4 left-4 bg-black/90 border border-zinc-800 rounded px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-gray-500 z-20 flex items-center gap-2 pointer-events-none">
                <Box className="w-3.5 h-3.5 text-[#CC0000]" /> {activeModel.type.replace('_', ' ')}
              </div>

              {/* 3D Canvas */}
              <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-10">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <ambientLight intensity={0.7} />
                  <Suspense fallback={<CanvasLoader />}>
                    <Stage key={activeModel.glbPath} environment="city" adjustCamera={true}>
                      <ModelViewer url={activeModel.glbPath} />
                    </Stage>
                  </Suspense>
                  <OrbitControls makeDefault enableZoom={true} />
                </Canvas>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none">
                <div className="flex items-center gap-3 mb-1">
                  <Badge variant="outline" className="text-[#CC0000] border-[#CC0000] bg-[#CC0000]/10">
                    {activeModel.type.replace('_', ' ')}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold">{activeModel.title}</h3>
                <p className="text-gray-300 text-sm max-w-xl">{activeModel.description}</p>
              </div>

              {/* Interaction Hint */}
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm border border-zinc-800 px-3 py-1.5 rounded text-[9px] uppercase font-bold tracking-wide text-gray-500 z-20 pointer-events-none flex items-center gap-1.5">
                <Rotate3d className="w-3 h-3 text-[#CC0000]" /> Drag to Rotate • Scroll to Zoom
              </div>
            </div>
          </div>

          {/* RIGHT: Model Playlist with Strict Aspect-Video Height Adaptation */}
          <div className="lg:col-span-1 bg-zinc-900/50 rounded-lg border border-zinc-800 p-4 w-full aspect-video lg:aspect-auto lg:h-[56.25vw] lg:max-h-[500px] xl:max-h-[540px] 2xl:max-h-[640px] flex flex-col min-h-0 overflow-hidden">
            <h4 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-4 flex items-center gap-2 shrink-0">
              <Layers className="w-4 h-4" />
              3D Models
            </h4>

            {/* Scrollable Core Playlist Viewport */}
            <div className="space-y-3 overflow-y-scroll pr-1 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent flex-grow min-h-0">
              {PRODUCT_MODELS.map((model, idx) => (
                <div
                  key={model.id}
                  onClick={() => setActiveModelIndex(idx)}
                  className={cn(
                    "flex gap-4 p-3 rounded-md cursor-pointer transition-all border group select-none",
                    activeModelIndex === idx
                      ? "bg-[#0F0F0F] text-white border-[#CC0000]"
                      : "bg-[#0F0F0F] border-zinc-800 hover:border-zinc-600"
                  )}
                >
                  {/* Thumbnail */}
                  <div className="relative w-24 h-16 bg-zinc-200 rounded overflow-hidden shrink-0 flex items-center justify-center">
                    <Image
                      src={model.thumbnail}
                      alt={model.title}
                      fill
                      sizes="96px"
                      className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    {activeModelIndex === idx && (
                      <div className="absolute inset-0 bg-[#0F0F0F]/50 flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-[#CC0000] rounded-full animate-ping" />
                      </div>
                    )}
                  </div>

                  {/* Text Info */}
                  <div className="flex flex-col justify-center min-w-0">
                    <h5 className={cn(
                      "font-bold text-sm leading-tight mb-1 group-hover:text-[#CC0000] transition-colors truncate",
                      activeModelIndex === idx ? "text-[#CC0000]" : "text-white"
                    )}>
                      {model.title}
                    </h5>
                    <p className="text-xs text-gray-500 truncate">{model.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action Section (Shrink Shield Protected) */}
            <div className="mt-4 pt-4 border-t border-zinc-800 text-center shrink-0">
              <p className="text-xs text-gray-500 mb-3">Need 3D CAD files for your project?</p>
              <Button variant="outline" className="w-full text-xs text-[#CC0000] border-[#CC0000] hover:bg-white hover:text-black uppercase rounded-sm h-10 transition-colors">
                Request CAD / BIM Files <ChevronRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Pre-fetch models
if (typeof window !== 'undefined') {
  PRODUCT_MODELS.forEach((model) => {
    useGLTF.preload(model.glbPath);
  });
}