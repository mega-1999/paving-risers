'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ShieldCheck, Ruler, Truck } from 'lucide-react';
import Link from 'next/link';

export default function InfrastructureRisers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* === LEFT: VISUAL SHOWCASE === */}
          <div className="relative">
            {/* Main Product Image Container */}
            <div className="relative z-10 aspect-square w-full rounded-2xl overflow-hidden border border-slate-100 shadow-2xl">
              <Image
                src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/paving%20riser%201.5201.png`} // Ensure this exists
                alt="Paving Risers piving Riser Unit"
                fill
                className="object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-[#CC0000] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                Infrastructure Standard
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-1/2 aspect-square bg-slate-50 border border-slate-200 rounded-2xl -z-10 hidden md:block"></div>
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 p-6 bg-white shadow-xl rounded-xl border border-slate-50 hidden md:block">
              <div className="flex items-center gap-4 text-[#CC0000]">
                <Ruler className="w-8 h-8" />
                <p className="text-sm font-bold leading-tight">Precision <br /> Height Adjustment</p>
              </div>
            </div>
          </div>

          {/* === RIGHT: CONTENT AND SPECS === */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-[#CC0000] font-bold text-sm uppercase tracking-[0.2em]">Municipal Solutions</h4>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Cast Iron <br /> <span className="text-[#CC0000]">Paving Risers</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                Maintain seamless urban traffic flow. Our heavy-duty piving risers allow for precise manhole elevation adjustment during road overlays, eliminating the need for costly digging.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 bg-[#0F0F0F] text-[#CC0000] rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#CC0000]" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Load Bearing</h5>
                  <p className="text-sm text-slate-500">Rated for Load Rating: See individual product specification heavy traffic loads.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 bg-[#0F0F0F] text-[#CC0000] rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-[#CC0000]" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Bulk Ready</h5>
                  <p className="text-sm text-slate-500">Supplying municipal scale projects globally.</p>
                </div>
              </div>
            </div>

            {/* Tech Table Meta */}
            <div className="p-6 bg-slate-50 rounded-xl space-y-3 border border-slate-100">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-medium italic text-sm">Our Pledge:</span>
                <span className="text-slate-900 font-bold text-sm text-right italic">"Custom manufacturing available to meet project specifications."</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Material</span>
                <span className="text-slate-900 font-bold">Ductile/Black Coated</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Standard Sizes</span>
                <span className="text-slate-900 font-bold">24", 30", and Custom Blueprints</span>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <Link href={'/contact/quote'}>

                <Button className="bg-[#CC0000] hover:bg-[#0F0F0F] text-white font-bold h-14 px-8 rounded-lg transition-transform hover:scale-105">
                  Request a Quote <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}