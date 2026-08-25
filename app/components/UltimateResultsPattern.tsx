'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function UltimateResultsPattern() {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden flex items-center justify-center font-sans">
      
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

      {/* ─── FOREGROUND CONTENT ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center">
        
        {/* Animated Borders Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative p-[1px] bg-gradient-to-br from-[#CC0000] via-black to-zinc-800 rounded-sm mb-12 shadow-2xl"
        >
          <div className="px-6 py-2 bg-black rounded-sm">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white">
              Verified & Tested
            </span>
          </div>
        </motion.div>

        {/* Huge Typographic Impact */}
        <div className="space-y-2 mix-blend-difference overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white"
          >
            Pushing
          </motion.h2>
          
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500"
          >
            The Limits
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="w-px h-24 bg-gradient-to-b from-[#CC0000] to-transparent my-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-[#CC0000] mb-12">
            The Ultimate Risers.
          </h3>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mb-12">
            {[
              "Water Tight Cover",
              "Water Tight Riser",
              "Water Tight Frame",
              "Double Strength Ductile Iron",
              "Powdered Coatings",
              "Non-Corrosive Features",
              "Custom Colors"
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + (idx * 0.1) }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-zinc-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          <Link 
            href="/contact/quote"
            className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-sm border border-zinc-800 hover:border-[#CC0000] transition-colors duration-500 block"
          >
            <div className="absolute inset-0 bg-[#CC0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white">
              Get Certified Specs <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
