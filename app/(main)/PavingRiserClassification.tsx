'use client';

import React from 'react';
import { 
  Layers, 
  Layers3, 
  Target,
  Paintbrush,
  ArrowRight
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const MATERIAL_OPTIONS = [
  "Cast Iron",
  "Ductile Iron",
  "Mild Steel",
  "Stainless Steel",
  "Aluminium",
  "FRP"
];

const DESIGN_OPTIONS = [
  "Fixed / Solid Riser",
  "Adjustable Riser",
  "Stackable Riser"
];

const APPLICATION_OPTIONS = [
  "Manhole Risers",
  "Catch Basin Risers",
  "Curb Inlet Risers",
  "Valve Box Risers"
];

const COATING_OPTIONS = [
  "Raw Finish",
  "Galvanized",
  "Powder Coating",
  "Bituminous Asphalt",
  "Golf Green",
  "Others - Custom"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function PavingRiserClassification() {
  return (
    <section className="relative bg-slate-50 text-slate-900 py-24 border-t border-b border-slate-200 overflow-hidden font-sans">
      
      {/* Precision Technical Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#CC0000]/10 border border-[#CC0000]/30 text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#CC0000]">
            <Layers className="w-3.5 h-3.5" /> WORLD OF RISERS
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Types of Risers <span className="text-[#CC0000]">We Manufacture.</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Every job site demands a specific structural blueprint. Custom solutions categorized by material composition, mechanical design, application, and protective coating.
          </p>
        </motion.div>

        {/* --- FOUR-COLUMN RECTANGULAR WHITE & RED MATRIX --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          
          {/* CARD 1: BY MATERIAL (WHITE CARD) */}
          <motion.div 
            variants={cardVariants} 
            className="relative group bg-white border-2 border-slate-200 p-6 xl:p-8 hover:border-[#CC0000] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
          >
            {/* Top Red Accent Indicator Line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#CC0000]"></div>

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 border border-slate-200 flex items-center justify-center text-[#CC0000] group-hover:bg-[#CC0000] group-hover:text-white transition-colors">
                    <Layers3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base xl:text-lg font-black uppercase tracking-tight text-slate-900">
                      By Material
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#CC0000] bg-[#CC0000]/10 px-2.5 py-1 border border-[#CC0000]/20">
                  {MATERIAL_OPTIONS.length} TYPES
                </span>
              </div>

              {/* Items List */}
              <ul className="space-y-2.5">
                {MATERIAL_OPTIONS.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center justify-between p-2.5 xl:p-3 bg-slate-50 border border-slate-200/60 group/item hover:border-[#CC0000] hover:bg-white transition-all cursor-default"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 bg-[#CC0000]" />
                      <span className="text-xs xl:text-sm font-bold text-slate-800 group-hover/item:text-[#CC0000] transition-colors">
                        {item}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#CC0000] group-hover/item:translate-x-1 transition-all" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Spec note */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center text-[11px] font-mono text-slate-500">
              <span>SPECIFICATION</span>
              <span className="text-slate-900 font-bold">Custom Heavy Duty</span>
            </div>
          </motion.div>

          {/* CARD 2: BY DESIGN (VIBRANT RED CARD - FEATURED) */}
          <motion.div 
            variants={cardVariants} 
            className="relative group bg-[#CC0000] text-white p-6 xl:p-8 border-2 border-[#CC0000] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full"
          >
            {/* Top Dark Accent Line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-900"></div>

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between border-b border-white/20 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white text-[#CC0000] flex items-center justify-center font-bold">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base xl:text-lg font-black uppercase tracking-tight text-white">
                      By Design
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-slate-900 bg-white px-2.5 py-1">
                  {DESIGN_OPTIONS.length} TYPES
                </span>
              </div>

              {/* Items List */}
              <ul className="space-y-2.5">
                {DESIGN_OPTIONS.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center justify-between p-2.5 xl:p-3.5 bg-white/10 border border-white/20 group/item hover:bg-white hover:text-slate-900 transition-all cursor-default"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 bg-white group-hover/item:bg-[#CC0000]" />
                      <span className="text-xs xl:text-sm font-bold text-white group-hover/item:text-slate-900 transition-colors">
                        {item}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-white/70 group-hover/item:text-[#CC0000] group-hover/item:translate-x-1 transition-all" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Spec note */}
            <div className="mt-8 pt-4 border-t border-white/20 flex justify-between items-center text-[11px] font-mono text-white/80">
              <span>HEIGHT RANGE</span>
              <span className="text-white font-bold">1/4" to 6" Rises</span>
            </div>
          </motion.div>

          {/* CARD 3: BY APPLICATION (WHITE CARD) */}
          <motion.div 
            variants={cardVariants} 
            className="relative group bg-white border-2 border-slate-200 p-6 xl:p-8 hover:border-[#CC0000] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
          >
            {/* Top Red Accent Indicator Line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#CC0000]"></div>

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 border border-slate-200 flex items-center justify-center text-[#CC0000] group-hover:bg-[#CC0000] group-hover:text-white transition-colors">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base xl:text-lg font-black uppercase tracking-tight text-slate-900">
                      Application
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#CC0000] bg-[#CC0000]/10 px-2.5 py-1 border border-[#CC0000]/20">
                  {APPLICATION_OPTIONS.length} TYPES
                </span>
              </div>

              {/* Items List */}
              <ul className="space-y-2.5">
                {APPLICATION_OPTIONS.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center justify-between p-2.5 xl:p-3 bg-slate-50 border border-slate-200/60 group/item hover:border-[#CC0000] hover:bg-white transition-all cursor-default"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 bg-[#CC0000]" />
                      <span className="text-xs xl:text-sm font-bold text-slate-800 group-hover/item:text-[#CC0000] transition-colors">
                        {item}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#CC0000] group-hover/item:translate-x-1 transition-all" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Spec note */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center text-[11px] font-mono text-slate-500">
              <span>DUTY RATING</span>
              <span className="text-slate-900 font-bold">Highway & Municipal</span>
            </div>
          </motion.div>

          {/* CARD 4: BY COATING (WHITE CARD) */}
          <motion.div 
            variants={cardVariants} 
            className="relative group bg-white border-2 border-slate-200 p-6 xl:p-8 hover:border-[#CC0000] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
          >
            {/* Top Red Accent Indicator Line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#CC0000]"></div>

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 border border-slate-200 flex items-center justify-center text-[#CC0000] group-hover:bg-[#CC0000] group-hover:text-white transition-colors">
                    <Paintbrush className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base xl:text-lg font-black uppercase tracking-tight text-slate-900">
                      By Coating
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#CC0000] bg-[#CC0000]/10 px-2.5 py-1 border border-[#CC0000]/20">
                  {COATING_OPTIONS.length} TYPES
                </span>
              </div>

              {/* Items List */}
              <ul className="space-y-2.5">
                {COATING_OPTIONS.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center justify-between p-2.5 xl:p-3 bg-slate-50 border border-slate-200/60 group/item hover:border-[#CC0000] hover:bg-white transition-all cursor-default"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 bg-[#CC0000]" />
                      <span className="text-xs xl:text-sm font-bold text-slate-800 group-hover/item:text-[#CC0000] transition-colors">
                        {item}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#CC0000] group-hover/item:translate-x-1 transition-all" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Spec note */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center text-[11px] font-mono text-slate-500">
              <span>FINISH TYPE</span>
              <span className="text-slate-900 font-bold">Corrosion Protected</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}