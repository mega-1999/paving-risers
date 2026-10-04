'use client';

import React, { useState, Suspense, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, Html } from '@react-three/drei';
import * as THREE from 'three';
import {
    Box,
    Layers,
    Maximize2,
    ShieldCheck,
    ArrowRight,
    Sparkles,
    Info,
    Loader2,
    FileCode
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";




export interface Hotspot {
    id: string;
    title: string;
    description: string;
    x: number;
    y: number;
    z: number;
    specLabel: string;
    specValue: string;
}

export interface GlbModel {
    id: string;
    name: string;
    path: string;
    hotspots: Hotspot[];
}

const GLB_MODELS: GlbModel[] = [
    {
        id: "round-riser-coated",
        name: "Round Riser – Coated Finish",
        path: "/api/r2/glbs/PR_manhole_round_riser_black_coated_.glb",
        hotspots: [
            {
                id: "rr-p1",
                title: "Coated Surface Finish",
                description: "Factory-applied corrosion-resistant coating protects against moisture, road salt, and chemical exposure in underground installations.",
                x: 0, y: 0.6, z: 0.5,
                specLabel: "Coating Type",
                specValue: "Bituminous Epoxy Coat"
            },
            {
                id: "rr-p2",
                title: "Concentric Ring Profile",
                description: "Precision-machined circular profile ensures a snug universal fit over standard round manhole frames and utility castings.",
                x: 0.7, y: -0.2, z: 0.3,
                specLabel: "Profile Shape",
                specValue: "Round Concentric Ring"
            }
        ]
    },
    {
        id: "round-riser-with-screw",
        name: "Round Riser with Screw",
        path: "/api/r2/glbs/PR_manhole_round_adjustbable_riser_screw_black_coated_.glb",
        hotspots: [
            {
                id: "rs-p1",
                title: "Integrated Leveling Screws",
                description: "Built-in heavy-duty set screws allow field crews to fine-tune vertical height and level alignment without shims or wedges.",
                x: 0, y: 0.8, z: 0.4,
                specLabel: "Adjustment Method",
                specValue: "Screw-Type Fine Adjust"
            },
            {
                id: "rs-p2",
                title: "Heavy Load-Bearing Core",
                description: "Reinforced structural profile designed to bear continuous high-velocity impact loads from commercial truck traffic.",
                x: 0.6, y: 0, z: 0.4,
                specLabel: "Traffic Rating",
                specValue: "Heavy-Duty Paving Grade"
            }
        ]
    },
    {
        id: "round-riser-low-screw",
        name: "Round Riser Low Screw",
        path: "/api/r2/glbs/PR_manhole_round_adjustbable_riser_low_screw_black_coated_.glb",
        hotspots: [
            {
                id: "rl-p1",
                title: "Low Profile Adjustment",
                description: "Low-profile adjustable screw configuration for tight clearances and precise grade matching in shallow utility trenches.",
                x: 0, y: 0.5, z: 0.4,
                specLabel: "Profile",
                specValue: "Shallow Trench Configuration"
            },
            {
                id: "rl-p2",
                title: "Precision Grade Matching",
                description: "Allows for micro-adjustments in environments where standard risers would exceed maximum allowable height constraints.",
                x: 0.6, y: 0, z: 0.4,
                specLabel: "Tolerance",
                specValue: "+/- 1/8 Inch Precision"
            }
        ]
    },
    {
        id: "square-riser-coated",
        name: "Square Riser – Catch Basin",
        path: "/api/r2/glbs/PR_catch_basin_square_riser_black_coated_.glb",
        hotspots: [
            {
                id: "sq-p1",
                title: "Square Perimeter Frame",
                description: "Heavy-duty square perimeter framework constructed to lift flat drainage grates and catch basin lids to final highway grade.",
                x: -0.5, y: 0.5, z: 0.4,
                specLabel: "Construction Type",
                specValue: "Structural Welded Steel"
            },
            {
                id: "sq-p2",
                title: "Corner Gusset Reinforcements",
                description: "Internal heavy-gauge structural plates welded at all core stress corners to prevent vertical deflection under load.",
                x: 0, y: 0.9, z: 0,
                specLabel: "Reinforcement",
                specValue: "4-Point Welded Bracing"
            }
        ]
    },
    {
        id: "rectangle-riser-coated",
        name: "Rectangle Riser – Catch Basin",
        path: "/api/r2/glbs/PR_catch_basin_rectangle_riser_black_coated_.glb",
        hotspots: [
            {
                id: "re-p1",
                title: "Rectangular Profile Casting",
                description: "Elongated rectangular form factor designed specifically for oblong utility vault openings and trench-style drainage inlets.",
                x: 0, y: 0.6, z: 0.5,
                specLabel: "Form Factor",
                specValue: "Oblong Rectangular Unit"
            },
            {
                id: "re-p2",
                title: "Anti-Corrosion Coating",
                description: "Full-body protective coating applied at the foundry to resist subsurface degradation from moisture and road treatment chemicals.",
                x: 0.5, y: -0.3, z: 0.3,
                specLabel: "Protection",
                specValue: "Factory Coated Finish"
            }
        ]
    },
    {
        id: "curb-inlet-riser",
        name: "Curb Inlet Riser",
        path: "/api/r2/glbs/PR_Curb_inlet_rectangle_riser_black_coated.glb",
        hotspots: [
            {
                id: "ci-p1",
                title: "Curb-Side Geometry",
                description: "Engineered specifically for curb-side stormwater inlets, providing a seamless structural transition to adjacent paving.",
                x: 0, y: 1.0, z: 0.5,
                specLabel: "Application",
                specValue: "Curb Inlet Adjustment"
            },
            {
                id: "ci-p2",
                title: "Flow-Optimized Edge",
                description: "Sloped interior edge geometries designed to maximize water flow velocity into the catchment basin without debris obstruction.",
                x: 0.5, y: -0.5, z: 0.3,
                specLabel: "Hydraulics",
                specValue: "High-Velocity Flow Matrix"
            }
        ]
    },
    {
        id: "d-shape-paving-riser",
        name: "D-Shape Paving Riser",
        path: "/api/r2/glbs/D_shape_paving_riser.glb",
        hotspots: [
            {
                id: "ds-p1",
                title: "Asymmetric D-Shape Profile",
                description: "Straight-back vertical mounting edge optimized to align flush against poured concrete municipal curb lines.",
                x: 0.5, y: 0.3, z: 0.5,
                specLabel: "Profile Style",
                specValue: "3-Sided D-Shape Curb Unit"
            },
            {
                id: "ds-p2",
                title: "Flush Alignment Configuration",
                description: "Precision-engineered backwall that seamlessly integrates with existing poured concrete barriers and curbs.",
                x: 0, y: 0, z: 0.4,
                specLabel: "Mounting",
                specValue: "Flush Barrier Mount"
            }
        ]
    }
];
// ────────────────────────────────────────────────────
// 2. GLB MODEL RENDERER
// ────────────────────────────────────────────────────
function ModelViewer({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
}

// ────────────────────────────────────────────────────
// 3. SINGLE 3D-ANCHORED HOTSPOT DOT
//    Lives INSIDE the Canvas / Stage so it rotates,
//    zooms and pans with the model.
// ────────────────────────────────────────────────────
function Hotspot3D({
    spot,
    isActive,
    onHoverIn,
    onHoverOut,
    onClick,
}: {
    spot: Hotspot;
    isActive: boolean;
    onHoverIn: () => void;
    onHoverOut: () => void;
    onClick: () => void;
}) {
    return (
        <Html
            position={[spot.x, spot.y, spot.z]}
            center
            distanceFactor={4}
            zIndexRange={[20, 0]}
            style={{ pointerEvents: 'auto' }}
        >
            <button
                onMouseEnter={(e) => { e.stopPropagation(); onHoverIn(); }}
                onMouseLeave={(e) => { e.stopPropagation(); onHoverOut(); }}
                onClick={(e) => { e.stopPropagation(); onClick(); }}
                onPointerDown={(e) => e.stopPropagation()}
                onPointerUp={(e) => e.stopPropagation()}
                onPointerMove={(e) => e.stopPropagation()}
                onWheel={(e) => e.stopPropagation()}
                style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    outline: 'none',
                }}
            >
                {/* Ping ring */}
                <span
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        opacity: 0.5,
                        backgroundColor: isActive ? '#CC0000' : '#666',
                        animation: 'ping 1.2s cubic-bezier(0, 0, 0.2, 1) infinite',
                    }}
                />
                {/* Core dot */}
                <span
                    style={{
                        position: 'relative',
                        display: 'inline-flex',
                        borderRadius: '50%',
                        width: '10px',
                        height: '10px',
                        backgroundColor: isActive ? '#CC0000' : '#666',
                        border: '2px solid rgba(255,255,255,0.6)',
                        boxShadow: isActive
                            ? '0 0 8px rgba(204,0,0,0.6)'
                            : '0 0 4px rgba(100,100,100,0.4)',
                    }}
                />
            </button>
        </Html>
    );
}

// ────────────────────────────────────────────────────
// 4. IN-CANVAS LOADING INDICATOR
// ────────────────────────────────────────────────────
function CanvasLoader() {
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center bg-black/90 border border-[#1a1a1a] p-6 rounded-sm text-center space-y-3 shadow-2xl backdrop-blur-md w-56">
                <Loader2 className="w-8 h-8 text-[#CC0000] animate-spin" />
                <p className="text-[10px] uppercase font-black tracking-widest text-white">Streaming Model Data...</p>
                <p className="text-[9px] text-[#555] font-medium">Extracting localized geometry matrices</p>
            </div>
        </Html>
    );
}

// ────────────────────────────────────────────────────
// 5. SCENE CONTENT  –  model + hotspots live together
//    so the dots are part of the 3D world.
// ────────────────────────────────────────────────────
function SceneContent({
    model,
    activeSpot,
    onSpotClick,
    onSpotHoverIn,
    onSpotHoverOut,
}: {
    model: GlbModel;
    activeSpot: Hotspot | null;
    onSpotClick: (s: Hotspot) => void;
    onSpotHoverIn: (s: Hotspot) => void;
    onSpotHoverOut: () => void;
}) {
    return (
        <>
            <Suspense fallback={<CanvasLoader />}>
                <ambientLight intensity={1.2} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
                <directionalLight position={[-10, 5, -5]} intensity={0.5} />
                <Stage key={model.path} environment={null} adjustCamera={true}>
                    <ModelViewer url={model.path} />
                </Stage>
            </Suspense>

            {/* Hotspot dots anchored in 3D space — OUTSIDE Stage to prevent camera re-adjust */}
            {model.hotspots.map((spot) => (
                <Hotspot3D
                    key={spot.id}
                    spot={spot}
                    isActive={activeSpot?.id === spot.id}
                    onHoverIn={() => onSpotHoverIn(spot)}
                    onHoverOut={onSpotHoverOut}
                    onClick={() => onSpotClick(spot)}
                />
            ))}

            <OrbitControls makeDefault enableZoom={true} />
        </>
    );
}

// ────────────────────────────────────────────────────
// 6. MAIN EXPORTED COMPONENT
// ────────────────────────────────────────────────────
export default function Interactive3DShowcase() {
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const [activeModel, setActiveModel] = useState<GlbModel>(GLB_MODELS[0]);
    const [activeSpot, setActiveSpot] = useState<Hotspot | null>(GLB_MODELS[0].hotspots[0] ?? null);
    const [hoveredSpotId, setHoveredSpotId] = useState<string | null>(null);

    const hoveredSpot = activeModel.hotspots.find(s => s.id === hoveredSpotId) ?? null;

    const handleModelChange = (model: GlbModel) => {
        setActiveModel(model);
        setActiveSpot(model.hotspots[0] ?? null);
        setHoveredSpotId(null);
    };

    return (
        <section className="bg-black text-white py-8 font-sans overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

            <div className="  px-10 md:px-20 space-y-12 relative z-10">

                {/* ── SECTION HEADER ── */}
                <div className="max-w-3xl space-y-4">
                    <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#CC0000]" /> Immersive Digital Twin Viewport
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.1]">
                        Interactive 3D Structure <br />
                        <span className="text-[#CC0000]">Inspection Sandbox.</span>
                    </h2>
                    <p className="text-[#888] text-lg font-medium leading-relaxed">
                        Switch between asset structures instantly below. Rotate models in full 3D and hover over integrated hotspots to check field engineering specs.
                    </p>
                </div>

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* COL 1 — Model switcher sidebar */}
                    <div className="lg:col-span-3 flex flex-col gap-2 bg-[#0a0a0a] p-4 rounded-sm border border-[#1a1a1a] shadow-xl">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#555] px-2 mb-2 block">
                            Active GLB Repositories ({GLB_MODELS.length})
                        </span>
                        {GLB_MODELS.map((model) => {
                            const isActive = activeModel.id === model.id;
                            return (
                                <button
                                    key={model.id}
                                    onClick={() => handleModelChange(model)}
                                    className={`w-full flex items-center justify-between p-4 rounded-sm font-bold text-xs uppercase tracking-wide text-left transition-all duration-150 border ${isActive
                                        ? "bg-[#CC0000] border-[#CC0000] text-white pl-6 shadow-md"
                                        : "bg-[#111]/50 border-[#1a1a1a] text-[#888] hover:bg-[#111] hover:text-white hover:border-[#333]"
                                        }`}
                                >
                                    <div className="flex items-center gap-2 max-w-[85%]">
                                        <FileCode className="w-4 h-4 shrink-0" />
                                        <span className="truncate">{model.name}</span>
                                    </div>
                                    <ArrowRight className={`w-4 h-4 opacity-60 ${isActive ? 'translate-x-0' : '-translate-x-2 opacity-0'} transition-all`} />
                                </button>
                            );
                        })}
                    </div>

                    {/* COL 2 — 3D Canvas viewport */}
                    <div className="lg:col-span-5 relative min-h-[500px] bg-[#e5e5e5] border border-[#1a1a1a] rounded-sm overflow-hidden shadow-2xl group">

                        {/* Model ID badge */}
                        <div className="absolute top-4 left-4 bg-black/90 border border-[#1a1a1a] rounded-sm px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-[#888] z-20 flex items-center gap-2 pointer-events-none">
                            <Box className="w-3.5 h-3.5 text-[#CC0000]" /> Context ID: {activeModel.id}.glb
                        </div>

                        {/* ── The single Canvas — hotspots are INSIDE here ── */}
                        <div ref={canvasContainerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-10">
                            <Canvas 
                                eventSource={canvasContainerRef as React.RefObject<HTMLElement>}
                                camera={{ position: [0, 0, 5], fov: 45 }}
                                gl={{ antialias: true, powerPreference: 'high-performance' }}
                                onCreated={({ gl }) => {
                                    if (gl && gl.debug) {
                                        gl.debug.checkShaderErrors = false;
                                    }
                                }}
                            >
                                <ambientLight intensity={0.7} />
                                <SceneContent
                                    model={activeModel}
                                    activeSpot={activeSpot}
                                    onSpotClick={(s) => setActiveSpot(s)}
                                    onSpotHoverIn={(s) => { setActiveSpot(s); setHoveredSpotId(s.id); }}
                                    onSpotHoverOut={() => setHoveredSpotId(null)}
                                />
                            </Canvas>
                        </div>

                        {/* ── Hover tooltip — rendered in DOM, stays inside viewport ── */}
                        {hoveredSpot && (
                            <div
                                className="absolute z-30 pointer-events-none"
                                style={{
                                    top: '16px',
                                    right: '16px',
                                    maxWidth: '180px',
                                    animation: 'fadeIn 150ms ease-out',
                                }}
                            >
                                <div
                                    style={{
                                        background: 'rgba(0,0,0,0.92)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '6px',
                                        padding: '8px 12px',
                                        backdropFilter: 'blur(10px)',
                                        borderTop: '2px solid #CC0000',
                                    }}
                                >
                                    <p style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#fff', margin: 0, lineHeight: 1.3 }}>
                                        {hoveredSpot.title}
                                    </p>
                                    <p style={{ fontSize: '9px', color: '#888', margin: '4px 0 0', lineHeight: 1.4 }}>
                                        {hoveredSpot.description.length > 100 ? hoveredSpot.description.slice(0, 100) + '…' : hoveredSpot.description}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Bottom helper bar */}
                        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm border border-[#1a1a1a] p-2 text-[10px] uppercase font-bold tracking-wide text-[#888] text-center flex items-center justify-center gap-2 rounded-sm pointer-events-none z-10">
                            <Info className="w-3.5 h-3.5 text-[#CC0000]" /> Click + Drag layout to rotate model view configurations
                        </div>
                    </div>

                    {/* COL 3 — Specs panel */}
                    <div className="lg:col-span-4 flex flex-col justify-between bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#CC0000]/5 rounded-full blur-2xl pointer-events-none" />

                        {activeSpot ? (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-4">
                                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#555] uppercase">
                                        Node: {activeSpot.id.toUpperCase()}
                                    </span>
                                    <span className="text-[9px] font-black uppercase tracking-wider text-[#CC0000] bg-[#CC0000]/10 border border-[#CC0000]/20 px-2 py-0.5 rounded-sm">
                                        Active Telemetry
                                    </span>
                                </div>

                                <div className="space-y-3 transition-all duration-300">
                                    <h3 className="text-xl font-black uppercase tracking-tight text-white">
                                        {activeSpot.title}
                                    </h3>
                                    <p className="text-sm text-[#777] font-medium leading-relaxed">
                                        {activeSpot.description}
                                    </p>
                                </div>

                                <div className="bg-[#111] border border-[#1a1a1a]/60 p-4 rounded-sm space-y-3 mt-4">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-[#555] block">
                                        Material Structural Specs
                                    </span>
                                    <div className="flex justify-between items-center text-xs font-bold border-b border-[#1a1a1a]/60 pb-2">
                                        <span className="text-[#888] uppercase tracking-wider">Parameters:</span>
                                        <span className="text-white uppercase tracking-wide">{activeSpot.specLabel}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs font-bold pt-1">
                                        <span className="text-[#888] uppercase tracking-wider">Compliance metric:</span>
                                        <span className="text-[#CC0000] tracking-wide font-mono">{activeSpot.specValue}</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center text-[#555] text-xs italic py-12">
                                No component nodes assigned to this product asset profile.
                            </div>
                        )}

                        <div className="pt-8 border-t border-[#1a1a1a] mt-8 space-y-4">
                            <div className="flex items-center gap-3 text-xs font-medium text-[#888] leading-normal">
                                <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0" />
                                <span>All product casting matrices comply with municipal construction regulations.</span>
                            </div>

                            <Link href="#contact" className="block">
                                <Button className="w-full h-12 bg-[#CC0000] hover:bg-white hover:text-black text-white font-black uppercase tracking-widest text-sm rounded-sm shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                                    Request Asset CAD Blueprint <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

// Pre-fetches models for faster file switching performance
if (typeof window !== 'undefined') {
    GLB_MODELS.forEach((model) => {
        useGLTF.preload(model.path);
    });
}