'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SaferRoadsCTA() {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-12 lg:py-16 overflow-hidden border-t border-b border-zinc-900 font-sans">

      {/* Background Graphic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[url('https://pub-a9b7eff88c5d4cb7b2837afc51696bde.r2.dev/images/branding/favicon.svg')] opacity-5" />
        
        {/* Red Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#CC0000]/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#CC0000]/15 rounded-full blur-[100px] translate-y-1/2" />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 bg-[#CC0000]/10 rounded-full flex items-center justify-center mb-8 border border-[#CC0000]/20"
        >
          <Shield className="w-8 h-8 text-[#CC0000]" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none max-w-5xl mb-6"
        >
          Our roads will be safer with <br className="hidden md:block" />
          <span className="text-[#CC0000]">PavingRisers.com</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 font-medium max-w-2xl mb-12 leading-relaxed"
        >
          Eliminate dangerous manhole drops and sinking catch basins. Equip your infrastructure with precision-engineered adjustment risers designed for permanent structural integrity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/contact/quote" className="inline-flex items-center justify-center h-16 px-10 bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-sm rounded-sm transition-all duration-300 shadow-[0_0_40px_-10px_rgba(204,0,0,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.4)]">
            Equip Your Project <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
