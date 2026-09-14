'use client';

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'

// Define the navigation structure
const NAV_LINKS = [
    {
        title: 'Products',
        href: '#products',
        dropdown: [
            { isHeader: true, name: 'Paving Riser Product Categories' },
            {
                name: 'Curb Inlets',
                href: '#',
                subDropdown: [
                    { name: 'Curb Inlet Riser', href: '/products/curb-inlet-riser' }
                ]
            },
            {
                name: 'Catch Basin',
                href: '#',
                subDropdown: [
                    { name: 'Catch Basin Riser', href: '/products/catch-basin-risers' },
                    { name: 'Catch Basin Grates', href: '/products/catch-basin-grates' }
                ]
            },
            {
                name: 'Manhole Risers',
                href: '#',
                subDropdown: [
                    { name: 'Fixed Riser', href: '/products/fixed-riser' },
                    { name: 'Adjustable Riser', href: '/products/adjustable-riser' }
                ]
            },
            {
                name: 'Valve Boxes',
                href: '#',
                subDropdown: [
                    { name: 'Valve Box Riser', href: '/products/valve-box-risers' }
                ]
            },
            {
                name: 'Drainage & Tools',
                href: '#',
                subDropdown: [
                    { name: 'Trash Racks', href: '/products/trash-racks' },
                    { name: 'Installation Tools', href: '/products/installation-tools' }
                ]
            },
            {
                name: 'Specialty Castings & Steel',
                href: '#',
                subDropdown: [
                    { name: 'Manhole Frame & Cover', href: '/products/manhole-frame-cover' },
                    { name: 'D-Shape Risers', href: '/products/d-shape-risers' },
                    { name: 'Other Cast Iron Products', href: '/products/other-cast-iron' },
                    { name: 'Utility Products', href: '/products/utility-product' },
                    { name: 'Fabricated Steel', href: '/products/fabricated-steel' },
                ]
            },
        ],
    },
    {
        title: 'Infrastructure',
        href: '/solutions',
        dropdown: [
            { name: 'Municipal Roadway', href: '/solutions/paving-resurfacing' },
            { name: 'Storm Drainage', href: '/solutions/storm-drainage' },
            { name: 'Airport & Heavy Port', href: '/solutions/airports-ports' },
            { name: 'Sanitary Sewer', href: '/solutions/sanitary-sewer' },
        ],
    },
    {
        title: 'Technical Library',
        href: '#library',
        dropdown: [
            { name: 'Literature & Specs', href: '/resources/literature' },
            { name: 'Video Gallery', href: '/resources/videos' },
            { name: 'Engineering Briefs', href: '/resources/briefs' },
            { name: 'Calculators & Tools', href: '/resources/calculators' },
        ],
    },
    {
        title: 'Blog',
        href: '/blog',
    },
    {
        title: 'Contact',
        href: '#contact',
        dropdown: [
            { name: 'Request a Quote', href: '/contact/quote' },
            { name: 'Foundry Locations', href: '/about/locations' },
            { name: 'Submit Specifications', href: '/contact/specifications' },
        ],
    },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (title: string) => {
        if (openDropdown === title) setOpenDropdown(null);
        else setOpenDropdown(title);
    };

    return (
        <header className="bg-white border-b-[4px] border-[#CC0000] sticky top-0 z-50 shadow-sm font-sans">
            <div className="w-full px-10 md:px-20 py-3 flex justify-between items-center">

                {/* --- LOGO --- */}
                <Link href={'/'} className="shrink-0">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/branding/paving_logo.png`}
                        alt='Paving Risers'
                        height={80}
                        width={160}
                        style={{ width: "auto", height: "auto" }}
                        className="object-contain h-12 w-auto sm:h-16 lg:h-20"
                    />
                </Link>

                {/* --- CENTER MENU --- */}
                <div className="hidden md:flex gap-1 lg:gap-2 h-full">
                    {NAV_LINKS.map((link: any) => (
                        <div key={link.title} className="group/main relative">
                            {link.dropdown && link.dropdown.length > 0 ? (
                                <>
                                    {/* Main Navigation Item */}
                                    <button className="flex items-center gap-1 px-4 text-[#CC0000] py-2 text-[13px] font-black uppercase tracking-widest hover:text-black transition-colors group-hover/main:bg-gray-50">
                                        {link.title}
                                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover/main:rotate-180" />
                                    </button>

                                    {/* Dropdown Menu (Black & Red Theme) */}
                                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover/main:opacity-100 group-hover/main:visible transition-all duration-300 translate-y-2 group-hover/main:translate-y-0 z-[60]">
                                        <ul className="w-72 bg-white border-t-[3px] border-[#CC0000] shadow-2xl ring-1 ring-black/5 overflow-visible">
                                            {link.dropdown.map((item: any, idx: number) => {

                                        if (item.isHeader) {
                                            return (
                                                <li key={`header-${idx}`} className="px-6 py-4 bg-zinc-50 border-b border-gray-200">
                                                    <span className="text-[10px] font-black uppercase tracking-[0.1em] text-[#CC0000] leading-tight block">
                                                        {item.name}
                                                    </span>
                                                </li>
                                            )
                                        }

                                        if (item.subDropdown) {
                                            return (
                                                <li key={item.name} className="group/sub relative">
                                                    <Link
                                                        href={item.href || '#'}
                                                        className="flex items-center justify-between w-full px-6 py-4 text-[12px] font-bold text-black hover:bg-[#0F0F0F] hover:text-white border-b border-gray-100 last:border-0 transition-all duration-200"
                                                    >
                                                        {item.name}
                                                        <ChevronRight className="w-4 h-4" />
                                                    </Link>

                                                    {/* Nested Submenu */}
                                                    <div className="absolute left-full top-0 pl-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 translate-x-2 group-hover/sub:translate-x-0 z-[70]">
                                                        <ul className="w-56 bg-white border-t-[3px] border-[#CC0000] shadow-2xl ring-1 ring-black/5 overflow-hidden">
                                                            {item.subDropdown.map((subItem: any) => (
                                                                <li key={subItem.name}>
                                                                    <Link
                                                                        href={subItem.href}
                                                                        className="block px-6 py-4 text-[12px] font-bold text-black hover:bg-[#0F0F0F] hover:text-white border-b border-gray-100 last:border-0 transition-all duration-200"
                                                                    >
                                                                        {subItem.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </li>
                                            )
                                        }

                                        return (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href || '#'}
                                                    className="block px-6 py-4 text-[12px] font-bold text-black hover:bg-[#0F0F0F] hover:text-white border-b border-gray-100 last:border-0 transition-all duration-200"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <Link href={link.href} className="flex items-center h-full px-4 text-[#CC0000] py-2 text-[13px] font-black uppercase tracking-widest hover:text-black transition-colors hover:bg-gray-50">
                                    {link.title}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* --- CTA BUTTON --- */}
                <div className="hidden sm:flex items-center gap-2">
                    <Link href={'#contact'}>
                        <Button className="bg-[#CC0000] hover:bg-[#0F0F0F] text-white font-black rounded-none px-4 h-10 cursor-pointer uppercase tracking-[0.15em] text-[11px] transition-all duration-300 border-b-2 border-transparent active:scale-95">
                            Download Catalog
                        </Button>
                    </Link>
                </div>

                {/* --- MOBILE MENU TOGGLE --- */}
                <div className="flex md:hidden items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-black hover:text-[#CC0000] transition-colors focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* --- MOBILE MENU PANEL --- */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 top-full shadow-2xl flex flex-col max-h-[80vh] overflow-y-auto z-50">
                    <div className="flex flex-col py-2">
                        {NAV_LINKS.map((link: any) => (
                            <div key={link.title} className="flex flex-col border-b border-gray-100 last:border-0">
                                {link.dropdown && link.dropdown.length > 0 ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(link.title)}
                                            className="flex items-center justify-between px-6 py-4 text-[#CC0000] text-[13px] font-black uppercase tracking-widest hover:bg-gray-50 transition-colors"
                                        >
                                            {link.title}
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.title ? 'rotate-180' : ''}`} />
                                        </button>
                                        
                                        {openDropdown === link.title && (
                                            <div className="flex flex-col bg-gray-50 py-2 px-6 space-y-2 border-t border-gray-100">
                                                {link.dropdown.map((item: any, idx: number) => {
                                            if (item.isHeader) {
                                                return (
                                                    <span key={`header-${idx}`} className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-500 pt-2 pb-1">
                                                        {item.name}
                                                    </span>
                                                )
                                            }
                                            if (item.subDropdown) {
                                                return (
                                                    <div key={item.name} className="flex flex-col space-y-1 py-1">
                                                        <span className="text-[11px] font-bold text-black uppercase">{item.name}</span>
                                                        <div className="pl-3 flex flex-col space-y-1 border-l-2 border-[#CC0000]/20 ml-1 mt-1">
                                                            {item.subDropdown.map((subItem: any) => (
                                                                <Link key={subItem.name} href={subItem.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[11px] text-gray-600 py-1 hover:text-[#CC0000]">
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            return (
                                                <Link key={item.name} href={item.href || '#'} onClick={() => setIsMobileMenuOpen(false)} className="text-[12px] font-bold text-black py-2 hover:text-[#CC0000]">
                                                    {item.name}
                                                </Link>
                                            )
                                        })}
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link 
                                href={link.href}
                                className="flex items-center justify-between px-6 py-4 text-[#CC0000] text-[13px] font-black uppercase tracking-widest hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.title}
                            </Link>
                        )}
                        </div>
                    ))}
                    
                    <div className="flex flex-col gap-2 p-6 sm:hidden">
                        <div className="flex flex-col gap-2 mb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 text-center">Req. Certification</span>
                            <div className="flex gap-2">
                                <Link href={'#'} onClick={() => setIsMobileMenuOpen(false)} className="w-1/2">
                                    <Button className="w-full bg-[#0F0F0F] hover:bg-[#CC0000] text-white font-black rounded-none h-12 uppercase tracking-widest text-[10px] px-2 text-center whitespace-normal leading-tight">
                                        USA
                                    </Button>
                                </Link>
                                <Link href={'#'} onClick={() => setIsMobileMenuOpen(false)} className="w-1/2">
                                    <Button className="w-full bg-[#0F0F0F] hover:bg-[#CC0000] text-white font-black rounded-none h-12 uppercase tracking-widest text-[10px] px-2 text-center whitespace-normal leading-tight">
                                        SGS
                                    </Button>
                                </Link>
                            </div>
                        </div>
                            <Link href={'#contact'} onClick={() => setIsMobileMenuOpen(false)}>
                                <Button className="w-full bg-[#CC0000] text-white font-black rounded-none h-12 uppercase tracking-widest text-[11px]">
                                    Download Catalog
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar