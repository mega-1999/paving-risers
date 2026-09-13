'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, PlayCircle, Zap, Clock, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const VIMEO_VIDEOS = [
  {
    id: "1226340886",
    title: "Shop Floor Feed #1",
    url: "https://player.vimeo.com/video/1226340886?autoplay=1&loop=1&muted=1&background=1&autopause=0"
  },
  {
    id: "1226340885",
    title: "CNC Machining & Tooling #2",
    url: "https://player.vimeo.com/video/1226340885?autoplay=1&loop=1&muted=1&background=1&autopause=0"
  },
  {
    id: "1226340870",
    title: "Foundry & Casting #3",
    url: "https://player.vimeo.com/video/1226340870?autoplay=1&loop=1&muted=1&background=1&autopause=0"
  },
  {
    id: "1226340871",
    title: "Quality Control & Finishing #4",
    url: "https://player.vimeo.com/video/1226340871?autoplay=1&loop=1&muted=1&background=1&autopause=0"
  }
];

export default function PavingRisersHeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % VIMEO_VIDEOS.length);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + VIMEO_VIDEOS.length) % VIMEO_VIDEOS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % VIMEO_VIDEOS.length);
  };

  return (
    <section className="bg-slate-50 py-4 border-b border-slate-200 font-sans">
      <div className="w-full px-6 md:px-8 lg:px-12">
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

          {/* RIGHT PANEL: VIMEO LIVE FABRICATION CAROUSEL / FALLBACK */}
          <div className="lg:col-span-6 w-full">
            {VIMEO_VIDEOS.length > 0 && VIMEO_VIDEOS[activeIdx]?.url ? (
              <div className="relative h-[500px] w-full rounded-sm overflow-hidden bg-black shadow-xl border border-slate-200 group">
                <iframe
                  key={VIMEO_VIDEOS[activeIdx].id}
                  src={VIMEO_VIDEOS[activeIdx].url}
                  className="absolute inset-0 w-full h-full object-cover border-0 pointer-events-none scale-[1.3]"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title={VIMEO_VIDEOS[activeIdx].title}
                />
                <div className="absolute inset-0 pointer-events-none border border-black/10 rounded-sm z-10" />
                
                {/* TOP LIVE BADGE */}
                <div className="absolute top-4 left-4 bg-[#0F0F0F]/90 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm flex items-center gap-2 z-20">
                  <PlayCircle className="w-3.5 h-3.5 text-[#CC0000] animate-pulse" /> 
                  <span>{VIMEO_VIDEOS[activeIdx].title} ({activeIdx + 1}/{VIMEO_VIDEOS.length})</span>
                </div>

                {/* NAVIGATION ARROWS */}
                {VIMEO_VIDEOS.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#CC0000] text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20 cursor-pointer"
                      aria-label="Previous Feed"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#CC0000] text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20 cursor-pointer"
                      aria-label="Next Feed"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* BOTTOM INDICATOR DOTS */}
                {VIMEO_VIDEOS.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full z-20">
                    {VIMEO_VIDEOS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIdx(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          idx === activeIdx ? 'w-6 bg-[#CC0000]' : 'w-2 bg-white/50 hover:bg-white'
                        }`}
                        aria-label={`Go to video ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* FALLBACK WHEN NO VIMEO VIDEO / STREAM COMING SOON */
              <div className="relative h-[500px] w-full rounded-sm overflow-hidden bg-[#0F0F0F] shadow-xl border border-slate-200 flex flex-col items-center justify-center p-8 text-center">
                <div className="absolute inset-0 bg-radial from-[#CC0000]/10 via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10 space-y-4 max-w-md">
                  <div className="w-16 h-16 rounded-full bg-[#CC0000]/10 border border-[#CC0000]/30 flex items-center justify-center mx-auto text-[#CC0000] animate-pulse shadow-[0_0_20px_rgba(204,0,0,0.2)]">
                    <PlayCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#CC0000] bg-[#CC0000]/10 px-3 py-1 rounded-full border border-[#CC0000]/20">
                      Shop Floor Feed
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white pt-2 leading-tight">
                      Vimeo Live Stream <br /> <span className="text-[#CC0000]">Available Soon</span>
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                    Our high-definition foundry camera stream will be broadcasting fabrication operations live shortly.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}