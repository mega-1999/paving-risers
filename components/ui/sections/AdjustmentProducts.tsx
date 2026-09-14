import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export const PRODUCT_CATEGORIES = [
  {
    id: 1,
    title: "Adjustment Risers",
    slug: "adjustment-risers",
    description: "Adjust any manhole or catch basin to final grade with steel or cast iron riser rings.",
    imageSrc: `/images/manhole_riser/adjustable_manhole_riser_low_screw_coated.png`,
  },
  {
    id: 2,
    title: "INFRA-RISER® Adjustment Risers",
    slug: "infra-riser-adjustment-risers",
    description: "Prolong structure life with the INFRA-RISER® rubber composite adjustment riser",
    imageSrc: `/images/manhole_riser/round_manhole_riser_with_screws_iron_finish.png`,
  },
  {
    id: 3,
    title: "Rectangular Catch Basin Risers",
    slug: "catch-basin-risers",
    description: "Heavy-duty steel fabricated risers designed specifically to raise storm grates and curb inlets to final grade.",
    imageSrc: `/images/catch_basin_riser/rectangle_catch_basin_riser_right.png`,
  },
  {
    id: 4,
    title: "Sloped & Tapered Rings",
    slug: "sloped-tapered-rings",
    description: "Custom-tapered rings to accommodate road crown or grade changes for a precision flush fit.",
    imageSrc: `/images/manhole_riser/adjustable_manhole_riser_low_screw_coated.png`,
  }
];

export default function AdjustmentProducts() {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="w-full px-10 md:px-20 ">

        {/* Section Header */}
        <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight mb-8">
          Adjustment Products
        </h2>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="block group"
            >
              {/* Outer Card Container */}
              <div className="relative overflow-hidden h-[320px] bg-white border border-gray-200 border-b-[6px] border-b-transparent group-hover:border-b-[#CC0000] transition-all duration-300">

                {/* --- 1. DEFAULT STATE --- */}
                <div className="absolute inset-0 flex flex-col items-center justify-between p-8 bg-white transition-opacity duration-300 group-hover:opacity-0">
                  <div className="relative w-full flex-1 mb-6 flex items-center justify-center">
                    <Image
                      src={category.imageSrc}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-600 text-center leading-tight">
                    {category.title}
                  </h3>
                </div>

                {/* --- 2. HOVER STATE --- */}
                <div className="absolute inset-0 flex flex-col items-center p-8 bg-[#f2f2f2] opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                  {/* Faded Watermark Image */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                    <Image
                      src={category.imageSrc}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-contain p-4 scale-110"
                    />
                  </div>

                  {/* Hover Content (Z-index to sit above watermark) */}
                  <div className="relative z-10 text-center w-full h-full flex flex-col">
                    {/* Top Title */}
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">
                      {category.title}
                    </h3>

                    {/* Middle Description */}
                    <p className="text-base text-slate-700 font-medium my-auto px-2 leading-snug">
                      {category.description}
                    </p>

                    {/* Bottom CTA */}
                    <div className="text-[#CC0000] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-1 pb-2">
                      SEE ALL <ChevronRight className="w-5 h-5 stroke-[3]" />
                    </div>
                  </div>

                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}