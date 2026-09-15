'use client';

import React, { use } from 'react';
import { useRouter, notFound } from 'next/navigation';
import Image from 'next/image';
import {
  ChevronLeft,
  CheckCircle2,
  ShieldCheck,
  Settings,
  ArrowRight,
  HardHat
} from 'lucide-react';
import { Button } from '@/components/ui/button';
// ==========================================
// FULL DATABASE FOR ALL 8 INDUSTRY SOLUTIONS
// ==========================================
const SOLUTIONS_DB = [
  {
    slug: 'storm-drainage',
    title: 'Storm Drainage Solutions',
    subtitle: 'Catch basin risers and trench grates designed for efficient municipal stormwater management.',
    heroImage: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image3.jpeg`,
    overview: 'Effective stormwater management is critical to preventing infrastructure decay and urban flooding. Paving Risers provides precision-engineered catch basin frames, 3-sided curb inlets, and rectangular risers that integrate seamlessly with local DOT road crowning and slope requirements.',
    benefits: [
      { title: 'Heavy-Duty Grate Compatibility', desc: 'Fits all standard bicycle-safe and heavy-traffic grates.' },
      { title: 'Custom Sloping', desc: 'Tapered designs to match precise street gradients.' },
      { title: 'Corrosion Resistant', desc: 'Available in galvanized steel and coated cast iron.' }
    ],
    applications: ['Highway Shoulders', 'Commercial Parking Lots', 'Municipal Intersections', 'Logistics Centers'],
    featuredProducts: ['4-Sided Catch Basin Risers', '3-Sided Curb Inlets', 'Sloped Drainage Frames']
  },
  {
    slug: 'sanitary-sewer',
    title: 'Sanitary Sewer Infrastructure',
    subtitle: 'Manhole covers and risers engineered to prevent Inflow & Infiltration (I&I).',
    heroImage: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image5.jpeg`,
    overview: 'Sanitary sewer systems require absolutely watertight access points to prevent environmental hazards and costly water treatment overloads. Our solid cast iron and expandable risers are designed to create a perfect, sealed fit with existing manhole frames, ensuring zero movement under heavy traffic loads.',
    benefits: [
      { title: 'I&I Prevention', desc: 'Machined surfaces for watertight gasket seals.' },
      { title: 'Shock Load Rated', desc: 'Engineered to withstand continuous Load Rating: See individual product specification/Load Rating: See individual product specification commercial traffic.' },
      { title: 'Rapid Installation', desc: 'Expandable options minimize the need for concrete mortar beds.' }
    ],
    applications: ['Mainline Sewer Access', 'Wastewater Treatment Plants', 'Residential Subdivisions'],
    featuredProducts: ['Solid Cast Iron Risers', 'Paving-Adjust™ Expandable Risers', 'Watertight Manhole Covers']
  },
  {
    slug: 'utility',
    title: 'Utility Infrastructure',
    subtitle: 'Access assemblies protecting underground gas, electric, and water utilities.',
    heroImage: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image13.jpg`,
    overview: 'Underground utilities require secure, easily accessible, and highly identifiable access points. We fabricate heavy-duty valve box risers, monument boxes, and electrical vault covers that protect critical infrastructure while allowing rapid access for municipal maintenance crews.',
    benefits: [
      { title: 'Secure Access', desc: 'Locking mechanisms available for high-security vault covers.' },
      { title: 'Clear Identification', desc: 'Custom lettering available (WATER, GAS, ELECTRIC, COMM).' },
      { title: 'Traffic Rated', desc: 'Designed for heavy street and intersection traffic.' }
    ],
    applications: ['Gas Valve Vaults', 'Electric Pull Boxes', 'Water Main Access', 'City Intersections'],
    featuredProducts: ['Valve Box Extensions', 'Monument Boxes', 'Custom Lettered Covers']
  },
  {
    slug: 'telecommunication',
    title: 'Telecommunication Networks',
    subtitle: 'Secure covers and access points for fiber optic and telecommunication infrastructure.',
    heroImage: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image14.jpeg`,
    overview: 'As urban environments upgrade their digital infrastructure, securing fiber optic and telecom access points is paramount. Our specialized covers and frames are designed to protect sensitive subsurface equipment from water intrusion, heavy traffic, and unauthorized access.',
    benefits: [
      { title: 'Lightweight Options', desc: 'Composite and aluminum covers available for easier crew access.' },
      { title: 'Security', desc: 'Bolted and locking down options to prevent tampering.' },
      { title: 'Weather Sealed', desc: 'Gasketed frames to protect sensitive digital equipment from water.' }
    ],
    applications: ['Fiber Optic Vaults', '5G Subsurface Hubs', 'Urban Sidewalk Networks'],
    featuredProducts: ['Composite Access Covers', 'Locking Vault Frames', 'Telecom Handholes']
  },
  {
    slug: 'water-distribution',
    title: 'Water Distribution',
    subtitle: 'Valve boxes, hydrant surrounds, and access solutions for reliable water networks.',
    heroImage: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image17.jpg`,
    overview: 'Maintaining clean, continuous water flow to municipalities requires durable infrastructure. We supply a massive inventory of valve box risers, curb boxes, and meter pit covers designed specifically to keep water distribution controls accessible and protected from street paving overlays.',
    benefits: [
      { title: 'Adjustable Heights', desc: 'Slip-type and screw-type valve box extensions.' },
      { title: 'Frost-Proof Durability', desc: 'Cast iron built to survive deep freeze and thaw cycles.' },
      { title: 'Immediate Availability', desc: 'Huge inventory of standard sizes ready for immediate dispatch.' }
    ],
    applications: ['Water Main Valves', 'Residential Meter Pits', 'Fire Hydrant Surrounds'],
    featuredProducts: ['Slip-Type Valve Boxes', 'Meter Pit Covers', 'Screw-Type Extensions']
  },
  {
    slug: 'streetscapes',
    title: 'Streetscapes & Urban Design',
    subtitle: 'Tree grates, frames, and covers designed to enhance aesthetics while supporting infrastructure.',
    heroImage: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image18.jpeg`,
    overview: 'Urban renewal projects demand infrastructure that is both highly functional and visually appealing. Our streetscape division focuses on architectural cast iron, providing tree grates, decorative trench drains, and ADA-compliant pedestrian covers that elevate city downtowns and public parks.',
    benefits: [
      { title: 'ADA Compliant', desc: 'Heel-proof grate designs ensure pedestrian and wheelchair safety.' },
      { title: 'Architectural Finishes', desc: 'Decorative patterns and custom city logos available.' },
      { title: 'Tree Health', desc: 'Expandable tree grates that grow with urban landscaping.' }
    ],
    applications: ['Downtown Revitalizations', 'Public Parks', 'University Campuses', 'Retail Plazas'],
    featuredProducts: ['ADA Heel-Proof Grates', 'Expandable Tree Grates', 'Decorative Trench Covers']
  },
  {
    slug: 'airports-ports',
    title: 'Airports & Ports',
    subtitle: 'Heavy-duty trench grates and access systems built for extreme loads.',
    heroImage: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image19.jpeg`,
    overview: 'Aviation and maritime logistics require infrastructure capable of withstanding the most extreme dynamic loads on the planet. Our Extra-Heavy Duty (Airport Rated) castings are engineered to support massive aircraft wheel loads, container handlers, and specialized freight equipment.',
    benefits: [
      { title: 'Extreme Load Rating', desc: 'Engineered for FAA and Port Authority load specifications (100,000+ lbs).' },
      { title: 'High-Capacity Drainage', desc: 'Massive trench grates to handle rapid tarmac runoff.' },
      { title: 'Bolted Security', desc: 'Secured grates to prevent displacement from jet blast or heavy braking.' }
    ],
    applications: ['Airport Runways & Taxiways', 'Maritime Cargo Ports', 'Military Logistics Bases'],
    featuredProducts: ['Extra-Heavy Duty Trench Grates', 'Airport Rated Manhole Covers', 'Bolted Access Hatches']
  },
  {
    slug: 'paving-resurfacing',
    title: 'Paving & Resurfacing',
    subtitle: 'Risers and frames designed to integrate seamlessly with paving projects.',
    heroImage: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image20.jpg`,
    overview: 'Time is the most expensive variable in road resurfacing. We engineer our adjustment risers specifically for paving contractors. By utilizing our Paving-Adjust™ mechanical risers or our stackable solid iron rings, paving crews can adjust utility elevations directly, allowing asphalt layers to be laid immediately without waiting for concrete to cure.',
    benefits: [
      { title: 'Zero Cure Time', desc: 'Pave immediately after dropping the riser into place.' },
      { title: 'Micro-Adjustments', desc: 'Stackable heights from 3/4" up to 6" for perfect grade matching.' },
      { title: 'No Excavation', desc: 'Avoid digging out base frames with jackhammers.' }
    ],
    applications: ['DOT Highway Resurfacing', 'City Street Overlays', 'HOA Neighborhood Paving'],
    featuredProducts: ['Paving-Adjust™ Expandable Risers', 'Solid Steel Adjustment Rings', 'Tapered Paving Rings']
  }
];
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function SolutionDetailPage({ params }: PageProps) {
  const router = useRouter();
  const resolvedParams = use(params);

  const solution = SOLUTIONS_DB.find((s) => s.slug === resolvedParams.slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-24">

      {/* --- BREADCRUMB HEADER --- */}
      <div className="bg-white border-b border-gray-200 py-4 sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#CC0000] transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            BACK TO SOLUTIONS
          </button>
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-slate-900 flex items-center">
        <Image
          src={solution.heroImage}
          alt={solution.title}
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight uppercase tracking-tight">
              {solution.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
              {solution.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 mt-12 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* LEFT COLUMN: Overview & Applications */}
          <div className="lg:col-span-8 space-y-12">

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-wider flex items-center">
                <Settings className="w-6 h-6 mr-3 text-[#CC0000]" />
                Industry Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {solution.overview}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-wider flex items-center">
                <HardHat className="w-6 h-6 mr-3 text-[#CC0000]" />
                Common Applications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solution.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#CC0000] mr-3 shrink-0" />
                    <span className="font-bold text-slate-700">{app}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN: Benefits & Featured Products */}
          <div className="lg:col-span-4 space-y-8">

            {/* Benefits Box */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">
                Key Benefits
              </h3>
              <div className="space-y-6">
                {solution.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <ShieldCheck className="w-6 h-6 text-[#CC0000] shrink-0 mr-4 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Products Box */}
            <div className="bg-slate-900 rounded-xl shadow-lg border border-slate-800 p-8 text-white">
              <h3 className="text-xl font-black uppercase tracking-widest mb-6 border-b border-slate-700 pb-4">
                Featured Products
              </h3>
              <ul className="space-y-4 mb-8">
                {solution.featuredProducts.map((product, idx) => (
                  <li key={idx} className="flex items-center text-sm font-medium text-slate-300">
                    <div className="w-1.5 h-1.5 bg-[#CC0000] rounded-full mr-3 shrink-0"></div>
                    {product}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => router.push('/#contact')}
                className="w-full bg-[#CC0000] hover:bg-white hover:text-black text-white font-bold h-14 uppercase tracking-widest transition-all"
              >
                Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}