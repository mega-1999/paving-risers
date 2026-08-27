"use client";

import React from 'react';
import Image from 'next/image';

const standardLogos = Array.from({ length: 13 }).map((_, i) => ({
    src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/standards/${i + 1}.png`,
    alt: `Standard ${i + 1}`
}));

export default function StandardsMarquee() {
    // Triple the array to guarantee zero gaps during long animations
    const infiniteLogos = [...standardLogos, ...standardLogos, ...standardLogos];

    return (
        <section className="w-full bg-white py-4 border-t border-b border-[#CC0000]/10 overflow-hidden select-none">
            <div className="">

                {/* STRUCTURAL ENGINEERING HEADER */}
                <div className="flex flex-col items-center text-center mb-12 px-6">
                    <h2 className="text-xl md:text-3xl font-black text-[#CC0000] uppercase tracking-tighter leading-none">
                        Complying to <span className="text-black">Standards</span>
                    </h2>
                </div>

                {/* MARQUEE RUNWAY WRAPPER */}
                <div className="relative w-full overflow-hidden flex items-center h-24 marquee-wrapper cursor-pointer">

                    {/* High-density gradient masks for clean entry and exit fading */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <style>{`
                        @keyframes scroll-marquee {
                            0% { transform: translateX(0%); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-marquee {
                            animation: scroll-marquee 40s linear infinite;
                        }
                        .marquee-wrapper:hover .animate-marquee {
                            animation-play-state: paused;
                        }
                    `}</style>

                    {/* INFINITE LOOP RUNWAY */}
                    <div className="flex items-center gap-16 w-max pr-16 whitespace-nowrap will-change-transform animate-marquee">
                        {infiniteLogos.map((logo, i) => (
                            <div
                                key={i}
                                className="shrink-0 flex items-center justify-center transition-all duration-300"
                            >
                                {/* Fixed structural wrapper keeping all logo scales unified */}
                                <div className="relative w-36 h-12 opacity-100 transition-all duration-500 cursor-crosshair">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}