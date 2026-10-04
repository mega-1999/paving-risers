'use client';

import React, { use, useState, useRef } from 'react';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronLeft, FileText, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

import { PRODUCT_DATA } from '@/lib/productData';

export default function ProductSpecsPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const router = useRouter();

    const product = PRODUCT_DATA.find((p) => p.slug === resolvedParams.slug);

    if (!product) {
        notFound();
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({ opacity: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const productImages = product.images && product.images.length > 0
        ? product.images
        : [{ label: 'Default', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/paving%20riser%201.5201.png` }];

    const handleNextImage = () => {
        setActiveIndex((prev) => (prev + 1) % productImages.length);
    };

    const handlePrevImage = () => {
        setActiveIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        // CRITICAL FIX: Wrapped the image URL path inside extra quotes '' to handle spaces inside filenames smoothly.
        setZoomStyle({
            opacity: 1,
            backgroundImage: `url('${productImages[activeIndex].src}')`,
            backgroundPosition: `${x}% ${y}%`,
            backgroundSize: '250%',
        });
    };

    const handleMouseLeave = () => {
        setZoomStyle({ opacity: 0 });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-6">

                {/* Navigation Back */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center text-sm font-bold text-gray-500 hover:text-[#CC0000] mb-8 uppercase tracking-widest transition-colors"
                >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back to Catalog
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-sm shadow-sm border border-gray-100">

                    {/* Left: Interactive Media Gallery Section */}
                    <div className="flex flex-col gap-4">

                        {/* Main Stage Display Container */}
                        <div
                            ref={containerRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="relative h-[400px] bg-gray-50 rounded-sm border border-gray-100 flex items-center justify-center p-8 overflow-hidden group cursor-zoom-in"
                        >
                            {/* Standard Display Image */}
                            <Image
                                src={productImages[activeIndex].src}
                                alt={`${product.title} view ${activeIndex + 1}`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain p-10 transition-opacity duration-200 group-hover:opacity-0"
                                priority
                            />

                            {/* Magnifying Glass Lens Canvas (Renders on Hover) */}
                            <div
                                className="absolute inset-0 pointer-events-none transition-opacity duration-200 bg-no-repeat bg-gray-50"
                                style={zoomStyle}
                            />

                            {/* Slider Arrows */}
                            {productImages.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-[#CC0000] hover:text-white flex items-center justify-center text-slate-800 shadow-sm border border-gray-100 transition-colors rounded-sm z-10"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-[#CC0000] hover:text-white flex items-center justify-center text-slate-800 shadow-sm border border-gray-100 transition-colors rounded-sm z-10"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Slide Thumbnails Selection List */}
                        {productImages.length > 1 && (
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 overflow-x-auto py-1">
                                    {productImages.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveIndex(index)}
                                            className={`relative w-20 h-20 bg-gray-50 rounded-sm border p-2 flex-shrink-0 transition-all ${index === activeIndex
                                                ? 'border-[#CC0000] ring-1 ring-[#CC0000]'
                                                : 'border-gray-200 hover:border-gray-400'
                                                }`}
                                        >
                                            <Image
                                                src={img.src}
                                                alt={img.label}
                                                fill
                                                sizes="80px"
                                                className="object-contain p-1"
                                            />
                                        </button>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {productImages.map((img, index) => (
                                        <button
                                            key={img.label}
                                            onClick={() => setActiveIndex(index)}
                                            className={`text-xs font-bold px-3 py-1.5 border transition-all rounded-sm ${
                                                index === activeIndex
                                                    ? 'bg-[#CC0000] border-[#CC0000] text-white shadow-sm'
                                                    : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'
                                            }`}
                                        >
                                            {img.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Technical Content Section */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-black uppercase text-slate-900 mb-4 tracking-tight">
                                {product.title}
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Specs List */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#CC0000] flex items-center">
                                <FileText className="w-4 h-4 mr-2" /> Technical Specifications
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="text-xs font-bold text-gray-400 uppercase">
                                            {key.replace(/([A-Z])/g, ' $1')}
                                        </span>
                                        <span className="text-sm font-bold text-slate-800">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features List */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#CC0000] flex items-center">
                                <ShieldCheck className="w-4 h-4 mr-2" /> Performance Features
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {product.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm font-bold text-slate-700">
                                        <div className="w-1.5 h-1.5 bg-[#CC0000] mr-3 rounded-full shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button className="w-full h-14 bg-[#0F0F0F] hover:bg-[#CC0000] text-white font-bold uppercase tracking-widest text-lg transition-all rounded-sm shadow-lg">
                            Get A Quote for This Unit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}