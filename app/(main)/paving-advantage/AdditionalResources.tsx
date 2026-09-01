import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const RESOURCES = [
    {
        id: 'about',
        title: 'About Us',
        description: 'Learn about Paving Risers\' commitment to producing the highest quality paving risers and infrastructure solutions for municipal applications.',
        imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%20rectangle%20iron.668.png`,
        linkText: 'ACCESS ARCHIVE',
        href: '#about-us'
    },
    {
        id: 'usa',
        title: 'Made in the USA',
        description: 'Committed to providing American-made steel and cast iron products to build and sustain America\'s critical infrastructure.',
        imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%201.641.png`,
        linkText: 'ACCESS ARCHIVE',
        href: '#made-in-usa'
    },
    {
        id: 'history',
        title: 'Company History',
        description: 'A legacy built on heavy iron. Discover how our foundry operations have evolved to meet modern DOT and highway standards over the decades.',
        imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/D_shape_Riser_Raw_Finish.602.png`,
        linkText: 'ACCESS ARCHIVE',
        href: '#history'
    },
    {
        id: 'specs',
        title: 'Product Briefs',
        description: 'Download detailed spec sheets, load ratings, and installation guides for our complete line of fixed and expandable adjustment risers.',
        imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/Rectangle%20Paving%20Riser%201%20Coated%20finish.621.png`,
        linkText: 'ACCESS ARCHIVE',
        href: '#product-briefs'
    }
];

export default function AdditionalResources() {
    return (
        <section className="bg-[#050505] pt-24 pb-32 border-t border-[#333] relative z-20 overflow-hidden font-sans">
            
            {/* Background Engineering Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <div className="w-full px-10 md:px-20 relative z-10">

                {/* --- TOP: LEARN MORE CTA --- */}
                <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-[#333] pb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                            Project <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px #CC0000' }}>Resources</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm uppercase tracking-widest leading-relaxed">
                            Talk to an expert at Paving Risers to find out how our adjustment risers can work for your next project.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <Link href="#contact" className="bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs py-4 px-8 border border-[#CC0000] hover:border-white transition-colors duration-300 flex items-center justify-center gap-2">
                            Contact Us <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="#lunch-and-learn" className="bg-transparent hover:bg-[#333] text-white font-black uppercase tracking-widest text-xs py-4 px-8 border border-[#333] transition-colors duration-300 flex items-center justify-center gap-2">
                            Lunch & Learn <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* --- BOTTOM: THE ARCHIVES GRID --- */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest mb-8 flex items-center gap-4">
                        <span className="w-8 h-1 bg-[#CC0000]"></span>
                        The Archives
                    </h3>

                    {/* 4-Column Raw Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#333] border border-[#333]">
                        {RESOURCES.map((resource) => (
                            <Link 
                                key={resource.id} 
                                href={resource.href} 
                                className="group block relative h-[420px] bg-[#CC0000] overflow-hidden flex flex-col justify-end p-8"
                            >
                                {/* Grayscale Background Image */}
                                <Image
                                    src={resource.imageSrc}
                                    alt={resource.title}
                                    fill
                                    className="object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 ease-out group-hover:scale-105"
                                />
                                
                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-[#CC0000] transition-colors duration-300">
                                        {resource.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                                        {resource.description}
                                    </p>
                                    
                                    <div className="flex items-center text-[#CC0000] font-black tracking-widest uppercase text-[10px] group-hover:text-white transition-colors duration-300">
                                        {resource.linkText} <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>

                                {/* Hover Border Accent */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#CC0000] transition-colors duration-500 pointer-events-none" />
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}