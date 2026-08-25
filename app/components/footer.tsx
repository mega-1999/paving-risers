'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Construction, 
  ArrowRight,
  Settings,
  ShieldCheck,
  Mail
} from 'lucide-react';

const FOOTER_LINKS = [
    {
        title: 'Main Products',
        categories: [
            {
                name: 'Curb Inlets',
                links: [{ name: 'Curb Inlet Riser', href: '/products/curb-inlet-riser' }]
            },
            {
                name: 'Catch Basin',
                links: [
                    { name: 'Catch Basin Riser', href: '/products/catch-basin-risers' },
                    { name: 'Catch Basin Grates', href: '/products/catch-basin-grates' }
                ]
            },
            {
                name: 'Manhole Risers',
                links: [
                    { name: 'Fixed Riser', href: '/products/fixed-riser' },
                    { name: 'Adjustable Riser', href: '/products/adjustable-riser' }
                ]
            },
            {
                name: 'Valve Boxes',
                links: [{ name: 'Valve Box Riser', href: '/products/valve-box-risers' }]
            },
            {
                name: 'Drainage & Tools',
                links: [
                    { name: 'Trash Racks', href: '/products/trash-racks' },
                    { name: 'Installation Tools', href: '/products/installation-tools' }
                ]
            }
        ]
    },
    {
        title: 'Specialty Castings',
        categories: [
            {
                name: 'Specialty Castings & Steel',
                links: [
                    { name: 'Manhole Frame & Cover', href: '/products/manhole-frame-cover' },
                    { name: 'D-Shape Risers', href: '/products/d-shape-risers' },
                    { name: 'Other Cast Iron Products', href: '/products/other-cast-iron' },
                    { name: 'Utility Products', href: '/products/utility-product' },
                    { name: 'Fabricated Steel', href: '/products/fabricated-steel' },
                ]
            }
        ]
    },
    {
        title: 'Infrastructure',
        categories: [
            {
                name: 'Solutions',
                links: [
                    { name: 'Municipal Roadway', href: '/solutions/paving-resurfacing' },
                    { name: 'Storm Drainage', href: '/solutions/storm-drainage' },
                    { name: 'Airport & Heavy Port', href: '/solutions/airports-ports' },
                    { name: 'Sanitary Sewer', href: '/solutions/sanitary-sewer' },
                ]
            }
        ]
    },
    {
        title: 'Technical Library',
        categories: [
            {
                name: 'Resources',
                links: [
                    { name: 'Literature & Specs', href: '/resources/literature' },
                    { name: 'Video Gallery', href: '/resources/videos' },
                    { name: 'Engineering Briefs', href: '/resources/briefs' },
                    { name: 'Calculators & Tools', href: '/resources/calculators' },
                ]
            }
        ]
    } 
];

export default function HeavyFooter() {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-8 border-t border-[#333] relative overflow-hidden font-sans z-10"> 
      
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(204,0,0,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="w-full px-6 md:px-8 lg:px-12 space-y-20 relative z-10">
        
        {/* --- TOP BRAND HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-[#222]">
          <div className="space-y-2 group">
            <div className="flex items-center gap-3">
              <Construction className="w-8 h-8 text-[#CC0000]" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white group-hover:text-[#CC0000] transition-colors duration-500">
                PAVING <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>RISERS</span>
              </h2>
            </div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest pl-11">
              Paving America Miles By Miles
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 text-[10px] font-mono uppercase tracking-widest">
            <span className="flex items-center gap-2 px-4 py-2 border border-[#333] text-gray-400 hover:text-white hover:border-[#CC0000] transition-colors">
              <ShieldCheck className="w-4 h-4 text-[#CC0000]" /> Paving Grade Rated
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-[#333] text-gray-400 hover:text-white hover:border-[#CC0000] transition-colors">
              <Settings className="w-4 h-4 text-[#CC0000]" /> DOT Compliant Castings
            </span>
          </div>
        </div>

        {/* --- MAIN CONTENT SPLIT GRID --- */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SECTION: Contact Details (3 Columns) */}
          <div className="xl:col-span-3 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#CC0000] uppercase tracking-widest">
                [ Estimating Desk ]
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight text-white leading-none">
                Get Bulk Wholesale <br />
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Riser Pricing.</span>
              </h3>
            </div>

            <div className="space-y-6">
              {/* Address Line 1 */}
              <div className="group flex items-start gap-4">
                <div className="mt-1 w-8 h-8 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gray-600 group-hover:text-[#CC0000] transition-colors" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-1">New York Foundry</h4>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed mb-1">
                    105 Maxes Road<br />
                    Melville, NY 11747, USA
                  </p>
                  <p className="font-black text-lg tracking-wider hover:text-[#CC0000] transition-colors cursor-pointer">+1 (516) 252-1111</p>
                </div>
              </div>

              {/* Address Line 2 */}
              <div className="group flex items-start gap-4">
                <div className="mt-1 w-8 h-8 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gray-600 group-hover:text-[#CC0000] transition-colors" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-1">Florida Operations</h4>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed mb-1">
                    850 NW FEDERAL HWY<br />
                    STUART, FL 34994
                  </p>
                  <p className="font-black text-lg tracking-wider hover:text-[#CC0000] transition-colors cursor-pointer">(772) 297-0700</p>
                </div>
              </div>

              {/* Address Line 3 - Canada */}
              <div className="group flex items-start gap-4">
                <div className="mt-1 w-8 h-8 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gray-600 group-hover:text-[#CC0000] transition-colors" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-1">Canadian Hub</h4>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed mb-1">
                    ONE YOUNGE STREET<br />
                    TORONTO, ONTARIO M5E 1R4 CANADA
                  </p>
                  <p className="font-black text-lg tracking-wider hover:text-[#CC0000] transition-colors cursor-pointer">+1 (438) 805-9990</p>
                </div>
              </div>
            </div>
            
            <a href="#quote" className="inline-flex items-center gap-4 bg-white text-black font-black uppercase tracking-widest text-xs px-8 py-4 hover:bg-[#CC0000] hover:text-white transition-colors group">
              Request Project Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* RIGHT SECTION: Links Grid (9 Columns) */}
          <div className="xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
              {FOOTER_LINKS.map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <h4 className="text-white font-black uppercase tracking-widest text-xs border-b border-[#333] pb-4">
                    {section.title}
                  </h4>
                  <div className="space-y-6">
                    {section.categories.map((cat, cidx) => (
                      <div key={cidx} className="space-y-3">
                        {/* Only show category name if it's not just a placeholder for the section */}
                        {cat.name !== 'Solutions' && cat.name !== 'Resources' && cat.name !== 'Get in Touch' && cat.name !== 'Specialty Castings & Steel' && (
                           <h5 className="text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-2">{cat.name}</h5>
                        )}
                        <ul className="space-y-3">
                          {cat.links.map((link, lidx) => (
                            <li key={lidx}>
                              <Link 
                                href={link.href} 
                                className="text-gray-400 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-all inline-block hover:translate-x-1 duration-300 group"
                              >
                                <span className="text-transparent group-hover:text-[#CC0000] mr-2 transition-colors">/</span>
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* --- CONTINUOUS SCROLLING MARQUEE --- */}
      <div className="mt-24 border-y border-[#222] bg-black py-4 overflow-hidden flex whitespace-nowrap relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee inline-flex items-center gap-12 text-[10px] font-mono uppercase tracking-[0.3em] text-gray-600">
          <span>// HEAVY DUTY CASTINGS</span>
          <span>// Designed to meet applicable DOT requirements</span>
          <span>// 50-TON SHOCK RATED</span>
          <span>// MANUFACTURED IN USA</span>
          <span>// PAVING GRADE COMPLIANT</span>
          <span>// PAVING RISERS INFRASTRUCTURE</span>
          <span>// PRECISION ENGINEERING</span>
          <span>// HEAVY DUTY CASTINGS</span>
          <span>// Designed to meet applicable DOT requirements</span>
          <span>// 50-TON SHOCK RATED</span>
          <span>// MANUFACTURED IN USA</span>
          <span>// PAVING GRADE COMPLIANT</span>
          <span>// PAVING RISERS INFRASTRUCTURE</span>
          <span>// PRECISION ENGINEERING</span>
        </div>
      </div>

      {/* --- BOTTOM LEGAL --- */}
      <div className="w-full px-6 md:px-8 lg:px-12 mt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] font-mono uppercase tracking-widest gap-4">
        <p>&copy; {new Date().getFullYear()} Paving Risers. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </footer>
  );
}