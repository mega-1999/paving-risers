'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function UltimateResultsPattern() {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden flex items-center justify-center font-sans border-b border-zinc-800">
      
      {/* ─── HEXAGON / ISOMETRIC BACKGROUND PATTERN ─── */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.3v34.6L30 69.3 0 52V17.3z' fill-opacity='0' stroke='%23CC0000' stroke-width='1'/%3E%3Cpath d='M30 100L0 82.7V48.1l30-17.3 30 17.3v34.6z' fill-opacity='0' stroke='%23CC0000' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 200px',
        }}
      />

      {/* Floating Gradient Orbs */}
      <motion.div 
        style={{ y: yOffset }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#CC0000] rounded-full mix-blend-screen filter blur-[150px] opacity-40 z-0 pointer-events-none" 
      />
      
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-900 rounded-full mix-blend-screen filter blur-[200px] opacity-30 z-0 pointer-events-none" />

      {/* ─── FOREGROUND CONTENT: 2-COLUMN SPLIT ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: TYPOGRAPHY, FEATURES & CTA */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Verified Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#CC0000]/10 border border-[#CC0000]/30 rounded-full text-xs font-black uppercase tracking-[0.25em] text-[#CC0000]"
            >
              <ShieldCheck className="w-4 h-4 text-[#CC0000]" /> Verified & Tested
            </motion.div>

            {/* Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight text-white">
                Pushing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">The Limits.</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-[#CC0000] pt-2">
                The Ultimate Risers.
              </h3>
            </motion.div>

            {/* Features Tags Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                "Water Tight Cover",
                "Water Tight Riser",
                "Water Tight Frame",
                "Double Strength Ductile Iron",
                "Powdered Coatings",
                "Non-Corrosive Features",
                "Custom Colors"
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3.5 py-2 bg-zinc-900/80 border border-zinc-800 rounded-full hover:border-[#CC0000]/50 transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Link 
                href="/contact/quote"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent overflow-hidden rounded-sm border border-zinc-700 hover:border-[#CC0000] transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-[#CC0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 flex items-center gap-3 text-xs md:text-sm font-black uppercase tracking-widest text-white">
                  Get Certified Specs <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: LARGER CINEMATIC VIDEO DISPLAY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-7 w-full relative group"
          >
            <div className="relative h-[380px] sm:h-[460px] lg:h-[540px] w-full rounded-2xl overflow-hidden bg-black shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                suppressHydrationWarning
                src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/ulitimate_risers.mp4`}
                className="w-full h-full object-contain"
                title="Ultimate Risers Demonstration"
              />
              {/* Overlay Live Tag */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white z-10">
                <div className="w-2 h-2 rounded-full bg-[#CC0000] animate-pulse" />
                Ultimate Risers Demonstration
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
