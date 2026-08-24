import React from 'react';
import Link from 'next/link';
import { ChevronRight, Truck, TrendingDown, Store } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'delivery',
    overline: 'FEATURED SERVICE',
    title: 'Direct-to-Site Delivery',
    description: 'Get back on the job fast. Order standard and custom adjustment risers online or over the phone to get heavy-duty cast iron delivered straight to your staging area.',
    linkText: 'Schedule delivery',
    href: '#delivery',
    icon: Truck
  },
  {
    id: 'pricing',
    overline: 'FEATURED BENEFIT',
    title: 'Bulk & Volume Pricing',
    description: 'Maximize your project budget. We offer specialized contractor pricing and deep volume discounts on full pallets of steel and precast concrete grade rings.',
    linkText: 'View contractor pricing',
    href: '#pricing',
    icon: TrendingDown
  },
  {
    id: 'desk',
    overline: 'FEATURED SERVICE',
    title: 'Pro Supply Desk',
    description: 'Our warehouse counters serve the unique needs of municipal paving crews. Find exactly what you need, from expert DOT spec advice to in-stock catch basin frames.',
    linkText: 'Find your local desk',
    href: '#locations',
    icon: Store
  }
];

export default function ServicesAndSolutions() {
  return (
    <section className="relative bg-zinc-50 text-slate-900 py-24 border-b border-gray-200 overflow-hidden font-sans">
      
      {/* Premium Light Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="w-full px-6 md:px-8 lg:px-12 relative z-10 ">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#CC0000]/10 border border-[#CC0000]/20 rounded-full text-xs font-black uppercase tracking-[0.25em] text-[#CC0000]">
              Contractor Support
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
              Services & <span className="text-[#CC0000]">Solutions</span>
            </h2>
          </div>
          
          <Link
            href="/pro-service"
            className="text-slate-600 font-bold hover:text-[#CC0000] transition-colors flex items-center gap-1 group pb-2"
          >
            View all Pro Services <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* --- 3-COLUMN CARD GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {SERVICES_DATA.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`relative group rounded-2xl bg-[#111111] border border-transparent shadow-xl p-8 md:p-10 hover:border-[#CC0000]/40 hover:shadow-[0_10px_40px_rgba(204,0,0,0.15)] transition-all duration-500 flex flex-col h-full overflow-hidden ${idx === 1 ? 'md:-translate-y-8' : ''}`}
              >
                {/* Top red accent line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#CC0000] group-hover:w-full transition-all duration-700 ease-out"></div>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#CC0000] group-hover:scale-110 group-hover:bg-[#CC0000] group-hover:text-white transition-all duration-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-1">
                      {card.overline}
                    </span>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <p className="text-zinc-300 font-medium text-base leading-relaxed mb-8">
                    {card.description}
                  </p>
                  
                  {/* Bottom Link */}
                  <Link
                    href={card.href}
                    className="inline-flex items-center text-[#CC0000] font-bold hover:text-white transition-colors group/link mt-auto"
                  >
                    {card.linkText} 
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}