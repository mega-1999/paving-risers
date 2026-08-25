'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  ShieldCheck,
  Construction,
  CircleDot,
  ArrowRight,
  Ruler,
  Settings,
  Lock
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

const MANHOLE_FRAME_DATA = {
  title: 'Manhole Frames & Covers',
  headline: 'Heavy-Duty Access for Municipal Infrastructure.',
  description: 'Our Manhole Frames and Covers are engineered for extreme durability, providing secure access to underground utilities, sanitary sewers, and storm drains. Manufactured from premium ductile or cast iron to withstand heavy traffic and severe environmental conditions.',
  specs: [
    { label: 'Material', value: 'Material: See product specification' },
    { label: 'Profile Type', value: 'Standard Round or Heavy Duty' },
    { label: 'Load Rating', value: 'Load Rating: See individual product specification' },
    { label: 'Standard Sizes', value: '24", 30", 36" Clear Openings' },
    { label: 'Cover Options', value: 'Watertight, Locking, Vented or Solid' },
    { label: 'Certification', value: 'Compliance & Testing documentation available upon request' },
  ],
  technicalPoints: [
    {
      icon: CircleDot,
      title: 'Anti-Rattle Design',
      desc: 'Precision machined bearing surfaces minimize rattling and movement under heavy highway traffic.'
    },
    {
      icon: Lock,
      title: 'Ergonomic Lift & Security',
      desc: 'Integrated lifting slots for safe removal, alongside optional bolt-down locking mechanisms to prevent unauthorized access.'
    },
    {
      icon: ShieldCheck,
      title: 'Heavy-Duty Webbing',
      desc: 'Reinforced structural ribbing on the underside of the frame and cover for superior load distribution and strength.'
    }
  ]
};

export default function ManholeFrameCoverPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white font-sans text-black">

      {/* --- 1. HERO SECTION (DARK MODE) --- */}
      <section className="relative bg-[#050505] text-white overflow-hidden py-20 lg:py-32">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#CC0000]/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

        <div className="w-full px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block bg-[#CC0000] text-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              Infrastructure Grade
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Manhole Frames <br />
              <span className="text-[#CC0000]">& Covers</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 font-medium leading-relaxed max-w-xl">
              {MANHOLE_FRAME_DATA.description}
            </p>

            <div className="pt-4">
              <Link href={'/contact/quote'}>
                <Button className="bg-[#CC0000] hover:bg-white hover:text-black text-white font-black h-16 px-10 uppercase tracking-[0.2em] rounded-none transition-all shadow-xl group">
                  Request a Quote <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link >
            </div>
          </div>


          <div className="lg:w-1/2 w-full">
            <div className="aspect-video w-full bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center relative group overflow-hidden shadow-2xl">
              <Image src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Adjustbale_riser_coated_finish.808.png`} alt='' width={500} height={500} />
              <div className="absolute inset-0 border-2 border-[#CC0000]/0 group-hover:border-[#CC0000]/30 transition-colors duration-700 m-4"></div>
 
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. FEATURES GRID --- */}
      <section className="py-24 w-full px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Design <span className="text-[#CC0000]">Integrity</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
            Engineered for severe environments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MANHOLE_FRAME_DATA.technicalPoints.map((point, i) => (
            <div key={i} className="bg-gray-50 border-2 border-gray-100 p-10 hover:border-[#CC0000] hover:shadow-2xl transition-all duration-300 group cursor-default">
              <div className="w-16 h-16 bg-white flex items-center justify-center border border-gray-200 mb-8 group-hover:bg-[#CC0000] transition-colors duration-300">
                <point.icon className="w-8 h-8 text-[#CC0000] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-black uppercase tracking-wide mb-4 text-black">{point.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. WIDE SPECS TABLE --- */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="w-full px-6 lg:px-12">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 pb-6 border-b-4 border-black gap-4">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">
                Dimensional <span className="text-[#CC0000]">Specifications</span>
              </h2>
            </div>
            <Ruler className="w-10 h-10 text-[#CC0000] shrink-0" />
          </div>

          <div className="bg-white border-2 border-gray-100 shadow-sm">
            {MANHOLE_FRAME_DATA.specs.map((spec, i) => (
              <div key={i} className="flex flex-col md:flex-row border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                {/* Label Column */}
                <div className="md:w-1/3 p-6 bg-gray-50 md:bg-transparent border-b md:border-b-0 md:border-r border-gray-100 flex items-center">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400">{spec.label}</span>
                </div>
                {/* Value Column */}
                <div className="md:w-2/3 p-6 flex items-center">
                  <span className="text-sm font-bold text-black leading-relaxed">{spec.value}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}