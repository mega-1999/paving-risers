'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Map, Wrench, Building2, ArrowRight } from 'lucide-react';

export default function PavingAdvantage() {
  const features = [
    {
      icon: <Map className="w-8 h-8 text-gray-400 group-hover:text-[#CC0000] transition-colors duration-500" />,
      title: "Nationwide Coverage",
      description: "Supporting infrastructure projects across nearly every metropolitan area in the USA.",
      metric: "50-STATE REACH"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gray-400 group-hover:text-[#CC0000] transition-colors duration-500" />,
      title: "Strict Compliance",
      description: "All products strictly comply with Federal, State, and local municipal DOT standards.",
      metric: "Load Rating: See individual product specification RATED"
    },
    {
      icon: <Wrench className="w-8 h-8 text-gray-400 group-hover:text-[#CC0000] transition-colors duration-500" />,
      title: "Robust Infrastructure",
      description: "Extensive catalog of heavy-duty steel and cast iron adjustment risers built for severe durability.",
      metric: "CLASS 30 IRON"
    },
    {
      icon: <Building2 className="w-8 h-8 text-gray-400 group-hover:text-[#CC0000] transition-colors duration-500" />,
      title: "Local Market Expertise",
      description: "Our dedicated engineering sales team understands your local market to guide you to the exact specifications required.",
      metric: "DIRECT SUPPORT"
    }
  ];

  return (
    <section className="bg-[#050505] py-24 lg:py-32 border-t border-[#333] relative z-20">
      
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="w-full px-10 md:px-20 relative z-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 border-b border-[#333] pb-12">
          
          <div className="space-y-4 max-w-3xl">
 
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              Nationwide Solutions.<br/>
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Local Support.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
              We're here to support your next infrastructure or roadwork project. Our sales team at Paving Risers understands your local market and can guide you to the best options from our extensive catalog.
            </p>
          </div>

        </div>

        {/* Bottom Grid Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left CTA Panel (4 Columns) */}
          <div className="lg:col-span-4 bg-[#CC0000] p-8 md:p-12 flex flex-col justify-between group cursor-pointer hover:bg-white transition-colors duration-500">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-black flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white group-hover:text-[#CC0000]" />
              </div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none group-hover:text-black">
                Explore Our <br /> Catalog
              </h3>
            </div>
            <div className="mt-16 flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs group-hover:text-black">
              View Specs <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>

          {/* Right Features Grid (8 Columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#333] border border-[#333]">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#050505] p-8 md:p-10 group hover:bg-[#111] transition-colors duration-300 relative overflow-hidden flex flex-col justify-between h-full min-h-[320px]"
              >
                {/* Metric Watermark */}
                <span className="absolute top-8 right-8 text-[10px] font-mono text-[#CC0000] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  [{feature.metric}]
                </span>

                <div className="space-y-8 relative z-10">
                  <div className="w-16 h-16 border border-[#333] group-hover:border-[#CC0000] flex items-center justify-center bg-black transition-colors duration-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white uppercase tracking-wider mb-4 group-hover:text-[#CC0000] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 leading-relaxed text-sm font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#CC0000] group-hover:w-full transition-all duration-700 ease-in-out" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}