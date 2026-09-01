'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ChevronRight,
    ChevronLeft,
    Plus,
    ChevronDown,
    Check,
    X,
    Sliders
} from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PRODUCT_DATA, Product } from '@/lib/productData';

function ProductCard({ cat }: { cat: Product }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentImage((prev) => (prev + 1) % cat.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentImage((prev) => (prev === 0 ? cat.images.length - 1 : prev - 1));
    };

    return (
        <>
            <Card className="border-2 border-gray-100 hover:border-[#CC0000] transition-all duration-300 shadow-none hover:shadow-xl bg-white overflow-hidden flex flex-col h-full">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold uppercase">{cat.title}</CardTitle>
                    <CardDescription className="text-gray-500 font-medium line-clamp-1">{cat.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-2 flex-grow flex flex-col justify-between">
                    <div className="relative h-56 w-full mb-6 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center overflow-hidden group/slider">
                        <Image
                            src={cat.images[currentImage].src}
                            alt={`${cat.title} image`}
                            fill
                            className="object-contain p-4 transition-transform duration-500 group-hover/slider:scale-105"
                        />
                        {cat.images.length > 1 && (
                            <>
                                <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 rounded-full shadow-md opacity-0 group-hover/slider:opacity-100 z-10 text-black hover:bg-[#CC0000] hover:text-white transition-colors">
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 rounded-full shadow-md opacity-0 group-hover/slider:opacity-100 z-10 text-black hover:bg-[#CC0000] hover:text-white transition-colors">
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </>
                        )}
                    </div>

                    <div className="space-y-4 mt-auto">
                        <div>
                            <h4 className="text-xs font-black text-black uppercase tracking-widest mb-2">Materials</h4>
                            <div className="flex flex-wrap gap-2">
                                {cat.materials.map((m) => (
                                    <span key={m} className="text-xs font-bold border border-black px-2 py-1 rounded-none">
                                        {m}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <Separator className="bg-gray-200" />
                        <div>
                            <h4 className="text-xs font-black text-black uppercase tracking-widest mb-2">Configurations / Finishes</h4>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setModalOpen(true);
                                }}
                                className="w-full flex items-center justify-between text-xs font-bold px-3 py-2.5 border border-gray-200 text-gray-700 bg-white hover:border-black rounded-sm transition-all focus:outline-none"
                            >
                                <span className="flex items-center gap-2 truncate">
                                    <Sliders className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                                    <span className="truncate">{cat.images[currentImage].label}</span>
                                </span>
                                <span className="text-[#CC0000] font-black uppercase text-[10px] tracking-widest bg-red-50 px-2 py-1 border border-red-100 rounded-sm shrink-0">
                                    Select ({cat.images.length})
                                </span>
                            </button>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="mt-auto pt-4">
                    <Link href={`/product/${cat.slug}`} className="w-full">
                        <Button className="w-full bg-[#0F0F0F] hover:bg-[#CC0000] text-white font-bold transition-colors uppercase tracking-wider rounded-sm h-12">
                            View Specs <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </CardFooter>
            </Card>

            {/* Configurator Overlay Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop wrapper */}
                    <div 
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
                        onClick={() => setModalOpen(false)}
                    />
                    
                    {/* Dialog Container */}
                    <div className="relative bg-white w-full max-w-2xl max-h-[85vh] flex flex-col rounded-sm shadow-2xl border border-gray-100 z-10 animate-in fade-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#CC0000]">
                                    Product Configurator
                                </span>
                                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mt-1">
                                    {cat.title}
                                </h3>
                            </div>
                            <button 
                                onClick={() => setModalOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-slate-400 hover:text-slate-900"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Configurations List */}
                        <div className="flex-grow overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-200">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                                Available Finishes / Configurations ({cat.images.length})
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {cat.images.map((img, idx) => {
                                    const isActive = currentImage === idx;
                                    return (
                                        <button
                                            key={img.label}
                                            onClick={() => {
                                                setCurrentImage(idx);
                                                setModalOpen(false);
                                            }}
                                            className={`group/opt w-full flex items-center p-3 border transition-all rounded-sm text-left ${
                                                isActive
                                                    ? 'border-[#CC0000] bg-[#CC0000]/5 text-[#CC0000] ring-1 ring-[#CC0000]'
                                                    : 'border-gray-200 hover:border-gray-900 text-slate-800 bg-gray-50/50 hover:bg-white'
                                            }`}
                                        >
                                            <div className="relative w-12 h-12 bg-white border border-gray-100 rounded-sm overflow-hidden flex items-center justify-center shrink-0 p-1 mr-3">
                                                <Image 
                                                    src={img.src}
                                                    alt={img.label}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="flex-grow min-w-0">
                                                <p className={`text-xs font-bold truncate ${isActive ? 'text-[#CC0000]' : 'text-slate-800'}`}>
                                                    {img.label}
                                                </p>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                                                    {cat.materials.join(', ')}
                                                </p>
                                            </div>
                                            {isActive ? (
                                                <div className="w-5 h-5 rounded-full bg-[#CC0000] flex items-center justify-center text-white shrink-0 ml-2">
                                                    <Check className="w-3.5 h-3.5 text-white" />
                                                </div>
                                            ) : (
                                                <div className="w-5 h-5 rounded-full border border-gray-300 group-hover/opt:border-gray-900 shrink-0 ml-2" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10 bg-white border border-gray-200 rounded-sm overflow-hidden p-1">
                                    <Image 
                                        src={cat.images[currentImage].src} 
                                        alt="Current preview" 
                                        fill 
                                        className="object-contain" 
                                    />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Selected</p>
                                    <p className="text-xs font-bold text-slate-800 truncate max-w-[200px]">{cat.images[currentImage].label}</p>
                                </div>
                            </div>
                            <Button 
                                onClick={() => setModalOpen(false)}
                                className="bg-[#0F0F0F] hover:bg-[#CC0000] text-white font-bold uppercase tracking-wider text-xs px-6 h-10 rounded-sm"
                            >
                                Confirm Selection
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


export default function OurProducts() {
    const [isExpanded, setIsExpanded] = useState(false);

    // Filter parameters to evaluate if initial subset view requires truncate slices
    const shouldTruncate = PRODUCT_DATA.length > 5 && !isExpanded;
    const displayedCategories = shouldTruncate ? PRODUCT_DATA.slice(0, 5) : PRODUCT_DATA;

    return (
        <div className="min-h-screen bg-white font-sans text-black">
            <section id="products" className="py-20 w-full px-10 md:px-20">
                <div className="text-center mb-16">
                    <Badge className="bg-[#0F0F0F] text-white mb-4 px-4 py-1 text-xs uppercase tracking-widest rounded-sm">
                        Official Catalog
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                        Our <span className="text-[#CC0000]">Products</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedCategories.map((cat) => (
                        <ProductCard key={cat.id} cat={cat} />
                    ))}

                    {/* --- INJECTED 6TH SLOT: LOAD MORE DIGITAL TRUNCATE CARD --- */}
                    {shouldTruncate && (
                        <Card 
                            onClick={() => setIsExpanded(true)}
                            className="border-2 border-dashed border-slate-300 bg-slate-50/50 rounded-sm shadow-none hover:shadow-xl hover:border-[#CC0000] hover:bg-white transition-all duration-300 flex flex-col items-center justify-center p-8 text-center cursor-pointer min-h-[500px] group"
                        >
                            <div className="w-14 h-14 bg-white border border-slate-200 text-slate-800 group-hover:bg-[#0F0F0F] group-hover:border-[#0F0F0F] group-hover:text-white rounded-full flex items-center justify-center shadow-sm transition-all duration-300 transform group-hover:scale-110 mb-4">
                                <Plus className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 group-hover:text-[#CC0000] transition-colors">
                                Load More Systems
                            </h3>
                            <p className="text-sm text-slate-500 font-medium max-w-[240px] mt-2 leading-relaxed">
                                Expand catalog matrix fields to explore {PRODUCT_DATA.length - 5} remaining infrastructure riser lines.
                            </p>
                        </Card>
                    )}
                </div>
            </section>
        </div>
    );
}