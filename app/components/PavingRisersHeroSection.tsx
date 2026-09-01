'use client';

import React from 'react';
import { ShieldCheck, PlayCircle, Zap, Clock, Target } from 'lucide-react';

export default function PavingRisersHeroSection() {
  return (
    <section className="bg-slate-50 py-4 border-b border-slate-200 font-sans">
      <div className="w-full px-10 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT PANEL: EASY, FAST, ACCURATE VALUE PROPOSITION */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#CC0000]" /> Manufacturing
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-[1.05]">
                Watch your risers <br />
                <span className="text-[#CC0000]">being built live.</span>
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-xl">
              Ditch the complex setups and mortar beds. Our specialized paving risers unlock quick installs on-site while preserving precision structural alignments under demanding municipal loads.
            </p>

            {/* THE THREE CONTRACTOR BULLET PILLARS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 pt-6 sm:divide-x divide-slate-200 border-t border-slate-200">
              <div className="space-y-1 sm:pr-4 sm:w-1/3">
                <div className="flex items-center gap-1.5 text-[#CC0000]">
                  <Zap className="w-4 h-4 fill-current" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-900">Easy</span>
                </div>
                <p className="text-xs font-bold text-slate-500 leading-snug">No excavation. The riser sits over the existing frame.</p>
              </div>

              <div className="space-y-1 sm:px-4 sm:w-1/3 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                <div className="flex items-center gap-1.5 text-[#CC0000]">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-900">Fast</span>
                </div>
                <p className="text-xs font-bold text-slate-500 leading-snug">Quick installs.</p>
              </div>

              <div className="space-y-1 sm:pl-4 sm:w-1/3 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                <div className="flex items-center gap-1.5 text-[#CC0000]">
                  <Target className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-900">Accurate</span>
                </div>
                <p className="text-xs font-bold text-slate-500 leading-snug">Millimeter grade matching.</p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: LIVE FABRICATION INDUSTRIAL LOOP FEED */}
          <div className="lg:col-span-6 w-full">
            <div className="relative h-[500px] w-full rounded-sm overflow-hidden bg-[#CC0000] shadow-xl border border-slate-200">
              <video autoPlay loop muted playsInline
                src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/Videos/Ayush_Design.752.mp4`}




                preload="auto"
                className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
                title="Paving Risers Factory Production Footage"
              />
              <div className="absolute inset-0 pointer-events-none border border-black/10 rounded-sm z-10" />
              <div className="absolute top-4 left-4 bg-[#0F0F0F]/80 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm flex items-center gap-2 pointer-events-none z-20">
                <PlayCircle className="w-3.5 h-3.5 text-[#CC0000] animate-pulse" /> Shop Floor Feed
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}