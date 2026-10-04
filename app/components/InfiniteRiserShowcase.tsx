'use client';

import React from 'react';
import { Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

export default function InfiniteRiserShowcase() {
    return (
        <section className="bg-[#0F0F0F] text-white py-8 font-sans border-b border-zinc-800 relative overflow-hidden">
            {/* Background Red Glow Matching the Animation */}
            <div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CC0000]/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="w-full px-10 md:px-20 space-y-12 relative z-10">

                    {/* --- HEADER --- */}
                    <div className=" space-y-3">
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
                            <Layers className="w-4 h-4 text-[#CC0000]" /> Adjustable Round Riser
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black    uppercase tracking-tight text-white leading-none">
                            See the round adjustable riser,
                            <span className="text-[#CC0000]"> part by part.</span>
                        </h2>
                        <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed">
                            An exploded view of the outer frame, adjustment ring, mechanical expansion, and top grate, showing how the assembly goes together.
                        </p>
                    </div>

                    {/* --- GRID DISPLAY --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
 

                        <div className="lg:col-span-6">
                            <div className="relative aspect-[4/3] bg-[#CC0000] rounded-sm overflow-hidden border-2 border-zinc-800 shadow-2xl pointer-events-none select-none">
                                <video autoPlay loop muted playsInline 
                                    suppressHydrationWarning
                                    src="/videos/manhole_riser/fixed_manhole_riser_installation.mp4"
                                    
                                    
                                    
                                    
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>


                        {/* RIGHT: TECHNICAL FEATURES & CALL TO ACTION (5 Columns) */}
                        <div className="lg:col-span-6 space-y-6 flex flex-col justify-start ">

                            <div className="space-y-4">
                                <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                                    Mechanical Expansion
                                </h3>
                                <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                                    Designed to minimize full manhole frame excavations during road overlays. The riser fits over the existing frame and expands outward against it using a built-in mechanical mechanism. Expanding the riser holds the ring securely in position while you pave.
                                </p>
                            </div>

                            <div className="space-y-3 border-t border-b border-zinc-800 py-6">

                                <div className="flex items-center gap-3 text-xs font-bold uppercase text-zinc-300">
                                    <ShieldCheck className="w-4 h-4 text-[#CC0000] shrink-0" />
                                    <span>Installs without excavating the frame.</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs font-bold uppercase text-zinc-300">
                                    <ShieldCheck className="w-4 h-4 text-[#CC0000] shrink-0" />
                                    <span>Custom Heights and Fits Available</span>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Link href="/contact/quote" className="block">
                                    <Button className="w-full h-12 bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs rounded-sm transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                                        Request a Quote <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <div className='py-4'>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CC0000]/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="w-full px-10 md:px-20 space-y-12 relative z-10">

                    {/* --- HEADER --- */}
                    <div className=" space-y-3">
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
                            <Layers className="w-4 h-4 text-[#CC0000]" /> Fixed Round Riser
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black    uppercase tracking-tight text-white leading-none">
                            See the round fixed riser,
                            <span className="text-[#CC0000]"> part by part.</span>
                        </h2>
                        <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed">
                            An exploded view of the outer frame, solid fixed ring, and top grate, showing how the assembly goes together.
                        </p>
                    </div>

                    {/* --- GRID DISPLAY --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">



                        {/* RIGHT: TECHNICAL FEATURES & CALL TO ACTION (5 Columns) */}
                        <div className="lg:col-span-6 space-y-6 flex flex-col justify-start ">

                            <div className="space-y-4">
                                <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                                    Solid Cast Construction
                                </h3>
                                <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                                    Engineered from a single piece of heavy-duty cast or ductile iron for maximum structural integrity. Unlike adjustable risers, this fixed solid ring has no moving parts, ensuring it will never collapse or shift under extreme localized shock loads.
                                </p>
                            </div>

                            <div className="space-y-3 border-t border-b border-zinc-800 py-6">

                                <div className="flex items-center gap-3 text-xs font-bold uppercase text-zinc-300">
                                    <ShieldCheck className="w-4 h-4 text-[#CC0000] shrink-0" />
                                    <span>Maximum strength with no moving parts.</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs font-bold uppercase text-zinc-300">
                                    <ShieldCheck className="w-4 h-4 text-[#CC0000] shrink-0" />
                                    <span>Custom Heights and Fits Available</span>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Link href="/contact/quote" className="block">
                                    <Button className="w-full h-12 bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs rounded-sm transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                                        Request a Quote <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>

                        </div>
                        {/* LEFT: INFINITE AUTOPLAY VIDEO CONTAINER (7 Columns) */}
                        <div className="lg:col-span-6">
                            <div className="relative aspect-[4/3] bg-[#CC0000] rounded-sm overflow-hidden border-2 border-zinc-800 shadow-2xl pointer-events-none select-none">
                                <video autoPlay loop muted playsInline 
                                    suppressHydrationWarning
                                    src="/videos/manhole_riser/fixed_manhole_riser_installation.mp4"
                                    
                                    
                                    
                                    
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </section>
    );
}