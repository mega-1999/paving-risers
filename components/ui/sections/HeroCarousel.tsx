'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- HERO SLIDE DATA ---
// Paving & Risers products only (Municipal, Roadway, Utility applications)

const HERO_SLIDES = [
    {
        id: 1,
        title: "Paving & Riser Systems",
        subtitle: "Precision grade control for streets and roadways.",
        description:
            "Fixed and adjustable paving risers designed for accurate elevation control of manholes and catch basins. Built for long-term roadway performance.",
        cta: "View Products",
        link: "/products/paving-risers",
        imageSrc: `/images/curb_inlet_riser/curb_inlet_riser_iron.png`
    },
    {
        id: 2,
        title: "Manhole Riser Solutions",
        subtitle: "Built for heavy traffic and harsh conditions.",
        description:
            "Durable riser systems engineered to withstand repeated traffic loads, snowplows, and extreme weather without settlement or movement.",
        cta: "Explore Manhole Risers",
        link: "/products/manhole-risers",
        imageSrc: `/images/manhole_riser/round_manhole_riser_iron_finish.png` // Close-up of manhole riser installation
    },
    {
        id: 3,
        title: "Catch Basin & Frame Risers",
        subtitle: "Reliable support for drainage infrastructure.",
        description:
            "Risers and frames designed for catch basins to maintain surface alignment and structural integrity in municipal drainage systems.",
        cta: "View Applications",
        link: "/products/catch-basin-risers",
        imageSrc: `/images/catch_basin_riser/square_catch_basin_riser_iron.png`  
    },
    {
        id: 4,
        title: "Snowplow-Resistant Riser Systems",
        subtitle: "Designed for winter maintenance and heavy impact.",
        description:
            "Paving risers engineered to resist snowplow strikes and freeze–thaw cycles, maintaining grade accuracy and surface safety year after year.",
        cta: "See Performance",
        link: "/products/snowplow-resistant-risers",
        imageSrc: `/images/manhole_riser/round_manhole_riser_with_screws_iron_finish.png` // Winter roadway with manhole riser
    }
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Auto-advance logic
    const nextSlide = useCallback(() => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
            setTimeout(() => setIsAnimating(false), 500); // Reset animation lock
        }
    }, [isAnimating]);

    // Autoplay timer
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, [nextSlide]);

    const handleManualSlide = (index: number) => {
        if (index !== currentSlide && !isAnimating) {
            setIsAnimating(true);
            setCurrentSlide(index);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    return (
        <section className="relative w-full h-[400px] md:h-[550px] bg-[#0F0F0F] overflow-hidden text-white group">

            {/* --- BACKGROUND IMAGES (FADE TRANSITION) --- */}
            {HERO_SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                        index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                >
                    {/* Image Layer */}
                    <div className="relative w-full h-full">
                        {/* Fallback color/gradient if image fails */}
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-zinc-800" />

                        <Image
                            src={slide.imageSrc}
                            alt={slide.title}
                            fill
                            className="object-cover opacity-60"
                            sizes="(max-width: 1200px) 100vw, 1200px"
                        />

                        {/* Dark Overlay Gradient - Matches the style of image_e82d04.jpg */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                        {/* Radial Vignette for focus */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
                    </div>
                </div>
            ))}

            {/* --- CONTENT LAYER --- */}
            <div className="absolute inset-0 z-20 w-full px-10 md:px-20 flex flex-col justify-center h-full">
                <div className="max-w-3xl space-y-6 md:space-y-8 pl-4 md:pl-0 border-l-4 border-[#CC0000] md:border-l-0">

                    {/* Dynamic Text Content */}
                    <div className="overflow-hidden">
                        <h2 className={cn(
                            "text-xl md:text-2xl font-medium text-gray-300 mb-2 uppercase tracking-widest transition-transform duration-700 delay-100",
                            isAnimating ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
                        )}>
                            {HERO_SLIDES[currentSlide].subtitle}
                        </h2>

                        <h1 className={cn(
                            "text-4xl md:text-7xl font-thin tracking-tight text-white mb-6 leading-tight transition-transform duration-700 delay-200",
                            isAnimating ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
                        )}>
                            {/* Splitting title for styling emphasis if needed */}
                            {HERO_SLIDES[currentSlide].title}
                        </h1>

                        <p className={cn(
                            "text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mb-8 transition-transform duration-700 delay-300",
                            isAnimating ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
                        )}>
                            {HERO_SLIDES[currentSlide].description}
                        </p>

                        {/* CTA Button - Matches the 'Yellow' button in your image, but brand Red */}
                        <div className={cn(
                            "transition-all duration-700 delay-500",
                            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                        )}>
                            <Button
                                size="lg"
                                className="bg-[#CC0000] hover:bg-white hover:text-[#CC0000] text-white font-bold text-lg px-8 py-6 rounded-sm uppercase tracking-wider transition-all"
                            >
                                {HERO_SLIDES[currentSlide].cta} <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- SLIDER INDICATORS (Bottom Center) --- */}
            <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-4">
                {HERO_SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleManualSlide(index)}
                        className="group py-4 cursor-pointer" // Larger hit area
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <div className={cn(
                            "h-1 rounded-full transition-all duration-500 ease-out",
                            currentSlide === index
                                ? "w-16 bg-[#CC0000]"
                                : "w-8 bg-gray-600 group-hover:bg-gray-400"
                        )} />
                    </button>
                ))}
            </div>

            {/* Navigation Arrows (Optional - visible on desktop hover) */}
            <div className="hidden md:block">
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-gray-500 hover:text-white hover:bg-[#0F0F0F]/20 rounded-full transition-all opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight className="w-12 h-12" />
                </button>
            </div>

        </section>
    );
}