'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ShieldCheck,
    Hammer,
    Truck, // Using Truck to represent heavy load capacity
    ChevronRight,
    Download,
    Eye
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const FEATURES = [
    {
        title: "Paving Grade Rated",
        icon: <Truck className="w-8 h-8 text-[#CC0000]" />,
        description: "rated for heavy-duty traffic and municipal roadway standards."
    },
    {
        title: "High Tensile Strength",
        icon: <Hammer className="w-8 h-8 text-black" />,
        description: "Superior durability with precision-cast iron and impact resistance."
    },
    {
        title: "7-Year Warranty",
        icon: <ShieldCheck className="w-8 h-8 text-[#CC0000]" />,
        description: "Guaranteed quality performance for long-term infrastructure."
    }
];

export default function PavingRisersSection() {
    return (
        <div className="min-h-screen bg-white font-sans text-black">

            {/* --- FEATURES STRIP --- */}
            <section id="features" className="bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-3 gap-12">
                        {FEATURES.map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="p-5 bg-white rounded-none shadow-[10px_10px_0px_rgba(0,0,0,0.05)] border border-gray-100 group-hover:border-[#CC0000] group-hover:shadow-[10px_10px_0px_rgba(204,34,33,0.1)] transition-all duration-500 mb-8">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-black uppercase mb-3 tracking-tight">{feature.title}</h3>
                                <p className="text-gray-500 font-bold text-sm max-w-[250px] leading-relaxed uppercase tracking-tighter">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- HERO SECTION --- */}
            <section className="relative bg-[#0F0F0F] text-white py-32 overflow-hidden">
                {/* Visual Texture Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                {/* Brand Accent Bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-[#CC0000]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                        Built to <span className="text-[#CC0000]">Last</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-bold uppercase tracking-widest italic">
                        Professional Grade Paving Risers. <br />
                        <span className="text-white">Iron • Ductile Iron • Aluminum</span>
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/catalog/MEGA_PAVING_RISERS_CATALOGS.pdf`}>
                            <Button size="lg" className="bg-[#CC0000] hover:bg-white hover:text-black text-white text-sm px-10 py-8 font-black uppercase tracking-[0.2em] rounded-none transition-all duration-300">
                                <Download className="mr-2 w-5 h-5" /> Download Catalog
                            </Button>
                        </Link>
                        <Link href="#our-product">
                            <Button size="lg" variant="outline" className="border-4 border-white cursor-pointer text-white hover:bg-[#CC0000] hover:border-[#CC0000] text-sm px-10 py-8 font-black uppercase tracking-[0.2em] rounded-none transition-all duration-300 bg-transparent">
                                <Eye className="mr-2 w-5 h-5" /> View Products
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Industrial Elevation Marker */}
                <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-black tracking-[0.5em] uppercase">Tolerance Specs</span>
                        <span className="text-4xl font-black">± 0.125"</span>
                    </div>
                </div>
            </section>
        </div>
    );
}