'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ShieldCheck, Ruler, Truck, Clock } from 'lucide-react';

export default function PavingRisersAppShowcase() {
  return (
    <section className="relative bg-white text-slate-900 py-24 border-t border-b border-slate-200 overflow-hidden font-sans">
      
      {/* Technical Blueprint Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="w-full px-10 md:px-20 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0F0F0F] text-white text-[11px] font-mono font-bold uppercase tracking-[0.25em] border-l-4 border-[#CC0000]">
            <Smartphone className="w-3.5 h-3.5 text-[#CC0000]" />
            <span>FIELD DIGITAL TOOLS</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Paving Risers <span className="text-[#CC0000]">Mobile Apps.</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Instant AR manhole diameter scanner, grade riser elevation calculator, and real-time jobsite delivery tracking right from your mobile device.
          </p>
        </motion.div>

        {/* --- MAIN APP SHOWCASE CONTAINER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: APP FEATURES & DESCRIPTIONS */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CC0000] text-white text-xs font-mono font-bold uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5" /> COMING SOON TO IOS & ANDROID
            </div>

            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
              Engineering Precision in the <span className="text-[#CC0000]">Palm of Your Hand.</span>
            </h3>

            <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
              Designed specifically for paving contractors, municipal inspectors, and field engineers. Scan utility frames in seconds and get instant certified riser recommendations.
            </p>

            {/* Feature Cards */}
            <div className="space-y-4 pt-4">
              
              {/* Feature 1 */}
              <div className="p-5 bg-slate-50 border-2 border-slate-200 flex items-start gap-4 hover:border-[#CC0000] transition-colors group">
                <div className="w-10 h-10 bg-[#0F0F0F] text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-[#CC0000] transition-colors">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base font-black uppercase tracking-tight text-slate-900">
                      AR Frame Scanner & Calculator
                    </h4>
                    <span className="text-[10px] font-mono font-bold text-[#CC0000] bg-[#CC0000]/10 px-2 py-0.5 border border-[#CC0000]/20 uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    Point your camera at any manhole or catch basin to instantly extract clear opening dimensions and seat depth.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-5 bg-slate-50 border-2 border-slate-200 flex items-start gap-4 hover:border-[#CC0000] transition-colors group">
                <div className="w-10 h-10 bg-[#0F0F0F] text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-[#CC0000] transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base font-black uppercase tracking-tight text-slate-900">
                      DOT & AASHTO Spec Validator
                    </h4>
                    <span className="text-[10px] font-mono font-bold text-[#CC0000] bg-[#CC0000]/10 px-2 py-0.5 border border-[#CC0000]/20 uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    Instantly verify load ratings (Heavy Duty / Highway) and municipal compliance directly on the field.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-5 bg-slate-50 border-2 border-slate-200 flex items-start gap-4 hover:border-[#CC0000] transition-colors group">
                <div className="w-10 h-10 bg-[#0F0F0F] text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-[#CC0000] transition-colors">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base font-black uppercase tracking-tight text-slate-900">
                      Live Jobsite Order Tracker
                    </h4>
                    <span className="text-[10px] font-mono font-bold text-[#CC0000] bg-[#CC0000]/10 px-2.5 py-0.5 border border-[#CC0000]/20 uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    Track custom fabricated riser shipments, foundry dispatch updates, and site delivery timestamps.
                  </p>
                </div>
              </div>

            </div>

            {/* DOWNLOAD STORE BADGES (COMING SOON) */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4">
              
              {/* App Store Badge */}
              <div className="relative group/badge">
                <div className="flex items-center gap-3 px-5 py-3 bg-[#0F0F0F] text-white border-2 border-[#0F0F0F] cursor-not-allowed opacity-90 hover:opacity-100 transition-all">
                  <svg className="w-7 h-7 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.97.99-3.12-1.01.04-2.22.68-2.92 1.5-.63.74-1.18 1.93-1.03 3.06 1.13.09 2.27-.58 2.96-1.44z"/>
                  </svg>
                  <div>
                    <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">Download on the</div>
                    <div className="text-sm font-black tracking-tight text-white">App Store</div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-2 px-2 py-0.5 bg-[#CC0000] text-white text-[9px] font-mono font-black uppercase tracking-widest shadow-md">
                  Coming Soon
                </div>
              </div>

              {/* Google Play Badge */}
              <div className="relative group/badge">
                <div className="flex items-center gap-3 px-5 py-3 bg-[#0F0F0F] text-white border-2 border-[#0F0F0F] cursor-not-allowed opacity-90 hover:opacity-100 transition-all">
                  <svg className="w-7 h-7 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.34 0 .66.11.92.31l13.5 8.5c.61.39.92.98.92 1.69s-.31 1.3-.92 1.69l-13.5 8.5c-.26.2-.58.31-.92.31-.83 0-1.5-.67-1.5-1.5zm2-14.86v12.72l10.12-6.36L5 5.64z"/>
                  </svg>
                  <div>
                    <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">GET IT ON</div>
                    <div className="text-sm font-black tracking-tight text-white">Google Play</div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-2 px-2 py-0.5 bg-[#CC0000] text-white text-[9px] font-mono font-black uppercase tracking-widest shadow-md">
                  Coming Soon
                </div>
              </div>

            </div>

          </motion.div>

          {/* RIGHT: VIDEO */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="w-full max-w-lg overflow-hidden">
              <video
                ref={(el) => {
                  if (el) {
                    el.play().catch(() => {});
                    el.onended = () => {
                      el.currentTime = 0;
                      el.play().catch(() => {});
                    };
                  }
                }}
                src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/videos/app_showcase/android_ios.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
