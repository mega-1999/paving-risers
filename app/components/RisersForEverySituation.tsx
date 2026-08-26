'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MEDIA_ITEMS = [
  {
    type: 'video',
    src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/catch_basin_animation/Catch-basin-riser-ayush.914.mp4`,
    label: "MUNICIPAL DRAINAGE",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    type: 'image',
    src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Round_Riser_iron_Finish.614.png`,
    label: "HIGHWAY RESURFACING",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    type: 'video',
    src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/d-shape.mp4`,
    label: "UTILITY VAULTS",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    type: 'video',
    src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Videos/1.924.mp4`,
    label: "CUSTOM FABRICATION",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
];

export default function RisersForEverySituation() {
  return (
    <section className="relative w-full py-8 bg-[#0A0A0A] overflow-hidden font-sans">
      <div className="w-full px-10 md:px-20">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Risers For Every Situation.<br />
              <span className="text-[#CC0000]">Guaranteed.</span>
            </h2>
            <p className="mt-6 text-zinc-400 font-medium max-w-2xl mx-auto text-lg">
              From heavy-duty highway infrastructure to complex municipal drainage networks, our adjustable and fixed products are precision-engineered for every environment.
            </p>
          </motion.div>
        </div>

        {/* MEDIA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 relative z-10">
          {MEDIA_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-xl bg-zinc-900 border border-white/5 ${item.colSpan} ${item.rowSpan}`}
            >
              {/* Media Content */}
              {item.type === 'video' ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 pointer-events-none"
                  src={item.src}
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
              )}

              {/* Hover Overlay & Label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none transition-opacity duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                  >
                    <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide drop-shadow-lg">
                      {item.label}
                    </h3>
                    <div className="w-12 h-1 bg-[#CC0000] mt-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                  </motion.div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Decorative Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CC0000]/10 rounded-full blur-[150px] pointer-events-none z-0" />
    </section>
  );
}
